<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class LoginController extends Controller
{
    public function getUsername(Request $request)
    {
        $id = $request->get('id');

        $username=DB::select('SELECT username FROM logins where id=?', [$id]);
        
        if ($username) {
            return $username;
        } else {
            return 'No such user!';
        }
    }
    public function verification(Request $request)
    {   
        $bodyContent = $request->getContent();

        $json = json_decode($bodyContent, true);

        $login = $json['login'];
        $pass = $json['password'];

        $id=DB::select('SELECT id FROM logins where login=? and password=?', [$login, $pass]);

        if($id){
            return $id;
        } else{
            return 'Login and password do not match!';
        }       
    }
}
