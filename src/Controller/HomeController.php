<?php

namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use App\Repository\ExerciseRepository;

use App\Repository\PositionRepository;
use App\Repository\WorkoutRepository;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function index()
    {
        return $this->render('home/index.html.twig', [

        ]);
    }

    /**
     * @Route("/calendar", name="calendar")
     */
    public function calendar()
    {
        return $this->render('home/calendar.html.twig', [

        ]);
    }

    /**
     * @Route("/design", name="design")
     */
    public function design(ExerciseRepository $exerciseRepository, PositionRepository $positionRepository)
    {

        return $this->render('home/design.html.twig', [
            'exercises' => $exerciseRepository->findAll(),
            'positions' => $positionRepository->findAll(),
        ]);
    }


    /**
     * @Route("/go", name="go")
     */
    public function go(ExerciseRepository $exerciseRepository, Request $request)
    {

        $requestArray = $request->request->all();

        $exerciseArrayUnderscores = $requestArray['exerciseDraggable'];

        for ($i = 0; $i < count($exerciseArrayUnderscores); $i++){
            $positionArray[] = $exerciseRepository->findOneBy(['name' => str_replace("_"," ",$exerciseArrayUnderscores[$i])])->getPosition()->getName();
            $exerciseArray[] = str_replace("_"," ",$exerciseArrayUnderscores[$i]);
        }

        $uniquePositionArray = array_unique($positionArray);
//
//        print "<pre>";
//        print_r($requestArray);
//        print "</pre>";
//
//        print "<pre>";
//        print_r($exerciseArray);
//        print "</pre>";
//        print "<pre>";
//        print_r($exerciseArrayUnderscores);
//        print "</pre>";
//        print "<pre>";
//        print_r($uniquePositionArray);
//        print "</pre>";

        return $this->render('home/go.html.twig', [
            'exercises' => $exerciseRepository->findAll(),
            'request' => $requestArray,
            'exerciseArray' => $exerciseArray,
            'uniquePositionArray' => $uniquePositionArray
        ]);

    }

    /**
     * @Route("/load", name="load")
     */
    public function load(WorkoutRepository $workoutRepository)
    {
        return $this->render('home/load.html.twig', [
            'workouts' => $workoutRepository->findAll(),
        ]);
    }

}
