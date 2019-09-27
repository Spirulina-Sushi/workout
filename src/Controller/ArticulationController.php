<?php

namespace App\Controller;

use App\Entity\Articulation;
use App\Form\ArticulationType;
use App\Repository\ArticulationRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/articulation")
 */
class ArticulationController extends AbstractController
{
    /**
     * @Route("/", name="articulation_index", methods={"GET"})
     */
    public function index(ArticulationRepository $articulationRepository): Response
    {
        return $this->render('articulation/index.html.twig', [
            'articulations' => $articulationRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="articulation_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $articulation = new Articulation();
        $form = $this->createForm(ArticulationType::class, $articulation);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($articulation);
            $entityManager->flush();

            return $this->redirectToRoute('articulation_index');
        }

        return $this->render('articulation/new.html.twig', [
            'articulation' => $articulation,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="articulation_show", methods={"GET"})
     */
    public function show(Articulation $articulation): Response
    {
        return $this->render('articulation/show.html.twig', [
            'articulation' => $articulation,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="articulation_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Articulation $articulation): Response
    {
        $form = $this->createForm(ArticulationType::class, $articulation);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('articulation_index');
        }

        return $this->render('articulation/edit.html.twig', [
            'articulation' => $articulation,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="articulation_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Articulation $articulation): Response
    {
        if ($this->isCsrfTokenValid('delete'.$articulation->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($articulation);
            $entityManager->flush();
        }

        return $this->redirectToRoute('articulation_index');
    }
}
