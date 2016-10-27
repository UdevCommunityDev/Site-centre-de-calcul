<?php

namespace App\Http\Controllers;

use App\Email;
use App\Info;
use App\PhotoManager;
use App\Role;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Mail;

class UsersController extends Controller
{
    use PhotoManager ;

    protected $Basedir = 'uploaded/users/u_images/';

    protected $tnBasedir = 'uploaded/users/u_images/tn/';

    protected $name;

    public function __construct()
    {
        parent::__construct() ;
        
        $this->middleware('auth')->except('fromVisitor') ;

        $this->middleware('role:Owner')->only(['addMembers','fromSupport','delete']);

        $this->middleware('role:Admin')->only(['attacheRole']);

        $this->middleware('role:Member')->only(['storeInfo','publish']);
    }

    /**
     * Attach Role for a given member
     *
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function attacheRole(Request $request)
    {
        $this->validate($request,['user' =>'required','role' => 'required']) ;

        $role = Role::where(['id' => $request->input('role')])->first();

        $user = User::where(['id' => $request->input('user')])->first() ;

        if($role->name == 'Owner'){

            $roles = Role::lists('id')->toArray() ;

        }elseif($role->name == 'Admin'){

            $roles = Role::where([

                ['name' ,'!=','Owner']

            ])->lists('id')->toArray() ;

        }elseif($role->name == 'Editor'){

            $roles = Role::where([

                ['name' ,'!=','Owner'],

                ['name' ,'!=','Admin']

            ])->lists('id')->toArray() ;

        }else{

            $roles = [$role->id];

        }

        $user->roles()->sync($roles) ;

        flash("@".$user->name." is a ".$role->name." now ",'info') ;

        return redirect('admin/users') ;

    }

    /**
     * Add members by sending register email
     *
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function addMembers(Request $request)
    {
        $this->validate($request,['email' => 'required']) ;

        $email = $request->input('email') ;

       if(!User::where(['email' => $email])->exists()){

           $token = csrf_token() ;

           $updated_at = Carbon::now() ;

           if( DB::table('pre_register')->where('email' , $email)->exists()){

              DB::table('pre_register')->where('email' , $email)->update(compact('token','updated_at'))  ;

          }else{

              $created_at = Carbon::now() ;

              DB::table('pre_register')->insert(compact('email','token','created_at','updated_at')) ;
          }
           Mail::send('mail.registerMail',['content'=>'To register click this link : ' ,'url' => url('register/'.$token),'site_url'=>config('app.url')],function ($message) use($email){
    
               $message->to($email)->subject('Uci register link ') ;
    
           }) ;
       }else{

           flash('You already a member in UCI') ;
           
           return redirect()->back() ;
       }

        flash('Register link has been sent to '.$email,'success') ;

        return redirect('admin/users') ;
    }

    /**
     * Send Emails From Support
     *
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function fromSupport(Request $request)
    {
        $this->validate($request,['email' => 'required','subject' =>'required','email_content' => 'required']) ;

        list($email, $subject, $content) = $this->storeEmail($request,'support');

        Mail::send('mail.sendMail',['content' => $content,'url' => config('app.url')],function ($message) use($email,$subject){

            $message->to($email)->subject($subject) ;

        }) ;

        flash('Email has been successfully sent to '.$email,'success')  ;

        return redirect('admin/emails');
    }

    /**
     * Send Email from visitor or members
     *
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function fromVisitor(Request $request)
    {
        $this->validate($request,['name' => 'required' ,'email' => 'required','subject' =>'required','email_content' => 'required']) ;

        $mail = $this->createEmail($request,'visitor') ;

        flash('Thanks for emailing us ! stay tuned ','success') ;

        return redirect()->back() ;
    }

    /**
     * Show Member info
     *
     * @param User $member
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function show(User $member)
    {

        if(Auth::user()->id == $member->id){

            return view('users.showForm',compact('member')) ;

        }else{

            return view('users.showInfo',compact('member')) ;

        }

    }

    /**
     * Store Members info
     *
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function storeInfo(Request $request)
    {
        
        if(!Auth::user()->info()->exists()){

            $info = Auth::user()->info()->create($request->all()) ;

            $this->addPhoto($info,'pic',$request->file('file'))  ;

            flash('Your info has been successfully added!', 'success') ;

        }else{

            $info = Auth::user()->info ;

            $info->update($request->all()) ;

            if(!is_null($request->file('file'))){

                $this->updatePhoto($info,'pic',$request->file('file'))  ;

            }

            flash('Your info has been successfully updated!', 'info');
        }


        return redirect()->back() ;

    }

    /**
     * Allow Users to Publish or Ubpublish their profiles
     *
     * @param User $user
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function publish(User $user)
    {
        if (Gate::denies('alter-profile')) {

            return redirect('errors/404') ;

        }
        $info = $user->info() ;

        if($user->info->public){

            $info->update(['public' => false]) ;

        }else{

            $info->update(['public' => true]) ;

        }

        return redirect()->back() ;
    }

    /**
     * Manage Users deleting
     *
     * @param User $member
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function destroy(User $member)
    {
        if(Auth::user()->hasRole('Owner')){

            $member->delete() ;

            flash($member->name.' has been successfully deleted' ,'success') ;

            return redirect('admin/users') ;

        }else{

            abort(403) ;

            return redirect()->back() ;

        }
    }

    public function updateInitInfo(Request $request)
    {
        $user = Auth::user() ;

        if(

        $request->input('current_password') &&

        $request->input('password') &&

        $request->input('password_confirm')

        ){
            $current_pass = $request->input('current_password') ;

            if(Hash::check($current_pass, $user->password)){

                if($request->input('password') === $request->input('password_confirm')){

                    $user->update([

                        'name' => $request->input('name'),

                        'password' => bcrypt($request->input('password')),

                    ]);

                    flash('Your info has been successfully updated' ,'success') ;

                    return redirect()->back() ;

                }else{

                    flash('Invalid password confirm' ,'error') ;

                    return redirect()->back() ;

                }
                
            }else{
                
                flash('Current password field not match our records' ,'error') ; 
                
                return redirect()->back() ; 
                
            }

        }

        $user->update([
            'name' => $request->input('name'),
        ]);

        flash('Your info has been successfully updated' ,'success') ;

        return redirect()->back() ;

    }

    /**
     * @param Request $request
     * @return array
     */
    private function storeEmail(Request $request,$from)
    {
        $mail = $this->createEmail($request,$from);

        $email = $mail->to;

        $subject = $mail->subject;

        $content = $mail->email_content;

        return array($email, $subject, $content);
    }

    /**
     * @param Request $request
     * @return static
     */
    private function createEmail(Request $request,$from)
    {
        $data = $this->fieldsInitialisation($request,$from);

        $mail = Email::create($data);

        return $mail;
    }

    /**
     * @param Request $request
     * @return array
     */
    private function fieldsInitialisation(Request $request,$from)
    {
        $data = [];
        if ($from == 'visitor'){
            $data['to'] = config('mail.from.address');
            $data['from'] = $request->input('email');
        }elseif ($from == 'support'){
            $data['to'] = $request->input('email');
            $data['from'] = config('mail.from.address');
        }
        $data['name'] = $request->input('name') ?  $request->input('name') : 'unknown' ;
        $data['subject'] = $request->input('subject');
        $data['email_content'] = $request->input('email_content');
        return $data;
    }

}
