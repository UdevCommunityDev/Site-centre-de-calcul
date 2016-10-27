<?php
/**
 * Created by PhpStorm.
 * User: na3im
 * Date: 13/08/2016
 * Time: 19:11
 */

namespace App;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Symfony\Component\HttpFoundation\File\UploadedFile;

use Intervention\Image\Facades\Image;

use App\Http\Requests\PostRequest;

trait PhotoManager
{
    private function addPhoto(Model $model,$relation,UploadedFile $file)
    {
        $fields = $this->moveToFolders($file);

        if($relation == 'photo'){
            
            $model->photo()->create($fields);
            
        }else if($relation == 'pic'){
            
            $model->pic()->create($fields);
            
        }else{
            
            return false ;
            
        }

        return true ;
    }

    /**
     * Generate post_image fields
     *
     * @param $path
     * @param $tn_path
     * @return array
     */
    private function saveAs($path, $tn_path)
    {
        return [
            'path' => $path,
            'tn_path' => $tn_path
        ];
    }

    /**
     * Move image to folder ($Basedir)
     *
     * @param UploadedFile|File $file
     * @return array
     */
    protected function moveToFolders(UploadedFile $file)
    {
        list($path, $tn_path) = $this->prepareImage($file);

        $file->move($this->Basedir, $this->name);

        $this->makeThumbnails($path);

        $fields = $this->saveAs($path, $tn_path);

        return $fields;
    }

    /**
     * Prepare $path and $tn_path for a given image
     *
     * @param UploadedFile|File $file
     * @return array
     */
    protected function prepareImage(UploadedFile $file)
    {
        $this->name = sha1($file->getClientOriginalName()) . $file->getClientOriginalName();

        $path = $this->Basedir . $this->name;

        $tn_path = $this->tnBasedir . $this->name;

        return array($path, $tn_path);
    }

    /**
     * Make the thumbnail
     *
     * @param $path
     */
    protected function makeThumbnails($path)
    {
        Image::make($path, 100)->resize(300, 250)->save($this->tnBasedir.$this->name);
    }

    /**
     * Delete photo from the folder
     * @param Model $model
     * @param $relation
     * @return bool
     */
    private function deletePhoto(Model $model,$relation)
    {
        if($relation == 'photo'){

            File::delete($model->photo->path, $model->photo->tn_path);

        }else if($relation == 'pic'){

            File::delete($model->pic->path, $model->pic->tn_path);

        }else{
            return false ;
        }

        return true ;

    }

    /**
     * Update Photo ina folder and DB
     *
     * @param Model $model
     * @param $relation
     * @param PostRequest|Request $request
     * @return bool
     */
    private function updatePhoto(Model $model,$relation , Request $request)
    {
        $this->deletePhoto($model,$relation);

        $fields = $this->moveToFolders($request->file('file'));

        if($relation == 'photo'){
            
            $model->photo()->update($fields);
            
        }else if($relation == 'pic'){
            
            $model->pic()->update($fields);
            
        }else{
            
            return false ;
            
        }
        return true ;


    }
}