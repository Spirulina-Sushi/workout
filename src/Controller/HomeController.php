<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Entity\Exercise;
use App\Form\ExerciseType;
use App\Repository\ExerciseRepository;
use App\Entity\Position;
use App\Form\PositionType;
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
        $exerciseArray = array_keys($requestArray['exerciseCheck']);

        foreach ($exerciseArray as $value){
            $position = $exerciseRepository->findOneBy(['name' => $value])->getPosition()->getName();
            $requestArray['exerciseCheck'][$value] = $position;
        };

        $exerciseArray = $requestArray['exerciseCheck'];

        $uniquePositionArray = array_values(array_unique($exerciseArray));


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
