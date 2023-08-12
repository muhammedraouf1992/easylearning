<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    //
    public function index()
    {
        $data = Project::all();
        return $data;
    }
    public function show(Project $project)
    {
        return $project;
    }
}
