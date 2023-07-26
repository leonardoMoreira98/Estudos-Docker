<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TecnologiaController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/tecnologia', [TecnologiaController::class, 'index']);