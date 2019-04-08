<?php

Route::get('/', function () {
    return view('layouts.master');
});

// Route::get('/statuses', function() {
//     return App\Status::with('user')->latest()->get();
// });
Route::get('/statuses', 'StatusesController@index');
Route::post('/statuses', 'StatusesController@store');
