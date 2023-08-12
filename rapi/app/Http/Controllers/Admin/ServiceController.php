<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Services;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    //
    public function index()
    {
        $data = Services::all();
        return response()->json($data);
    }
}
