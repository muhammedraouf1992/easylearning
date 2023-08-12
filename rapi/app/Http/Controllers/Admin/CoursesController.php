<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Course;
use Illuminate\Http\Request;

class CoursesController extends Controller
{
    public function index()
    {
        $data = Course::all();
        return response()->json($data);
    }
    public function show(Course $course)
    {
        return response()->json($course);
    }
}
