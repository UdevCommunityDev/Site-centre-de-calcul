<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

/*$factory->define(App\User::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->safeEmail,
        'password' => bcrypt(str_random(10)),
        'remember_token' => str_random(10),
    ];
});*/

$factory->define(App\Category::class, function (Faker\Generator $faker) {
    return [
        'name' => $name = $faker->title,
        'description' => $content = $faker->text,
        'slug' => str_slug($name),
    ];
});

$factory->define(App\Post::class, function (Faker\Generator $faker) {
    return [
        'title' => $title = $faker->title,
        'content' => $content = $faker->text,
        'excerpt' => substr($content,0,200),
        'slug' => str_slug($title),
        'user_id' => 1,
        'category_id' => factory(App\Category::class,5)->create()->id,
    ];
});
