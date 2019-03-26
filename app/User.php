<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
 public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('login');
            $table->string('password');
            $table->string('username');
            $table->timestamps();
        });
    }
    /**
        * Reverse the migrations.
        *
        * @return void
        */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
