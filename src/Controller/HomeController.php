<?php

namespace App\Controller;

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
    public function go(ExerciseRepository $exerciseRepository, PositionRepository $positionRepository)
    {

        return $this->render('home/go.html.twig', [
            'exercises' => $exerciseRepository->findAll(),
            'positions' => $positionRepository->findAll(),
        ]);
    }
}
