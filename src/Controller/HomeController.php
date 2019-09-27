<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

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
}
