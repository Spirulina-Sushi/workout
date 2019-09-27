<?php

namespace App\Controller;

use App\Entity\BodyPart;
use App\Form\BodyPartType;
use App\Repository\BodyPartRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/bodypart")
 */
class BodyPartController extends AbstractController
{
    /**
     * @Route("/", name="body_part_index", methods={"GET"})
     */
    public function index(BodyPartRepository $bodyPartRepository): Response
    {
        return $this->render('body_part/index.html.twig', [
            'body_parts' => $bodyPartRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="body_part_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $bodyPart = new BodyPart();
        $form = $this->createForm(BodyPartType::class, $bodyPart);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($bodyPart);
            $entityManager->flush();

            return $this->redirectToRoute('body_part_index');
        }

        return $this->render('body_part/new.html.twig', [
            'body_part' => $bodyPart,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="body_part_show", methods={"GET"})
     */
    public function show(BodyPart $bodyPart): Response
    {
        return $this->render('body_part/show.html.twig', [
            'body_part' => $bodyPart,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="body_part_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, BodyPart $bodyPart): Response
    {
        $form = $this->createForm(BodyPartType::class, $bodyPart);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('body_part_index');
        }

        return $this->render('body_part/edit.html.twig', [
            'body_part' => $bodyPart,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="body_part_delete", methods={"DELETE"})
     */
    public function delete(Request $request, BodyPart $bodyPart): Response
    {
        if ($this->isCsrfTokenValid('delete'.$bodyPart->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($bodyPart);
            $entityManager->flush();
        }

        return $this->redirectToRoute('body_part_index');
    }
}
