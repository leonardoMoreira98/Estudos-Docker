<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TecnologiaController extends Controller
{
   public function index(){

    $nome = [
        'nome' => 'Laravel'
    ];

    return response() -> json($nome, 200);

   }
}


