<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\HomePage;
use Illuminate\Http\Request;

class HomePageController extends Controller
{
    //

    public function index()
    {
        $data = HomePage::all();
        return response()->json($data);
    }
}
