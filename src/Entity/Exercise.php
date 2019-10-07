<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ExerciseRepository")
 */
class Exercise
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Movement", inversedBy="exercises")
     */
    private $movement;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Equipment", inversedBy="exercises")
     */
    private $equipment;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Position", inversedBy="exercises")
     * @ORM\JoinColumn(nullable=false)
     */
    private $Position;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Workout", mappedBy="exercises")
     */
    private $workouts;

    public function __construct()
    {
        $this->movement = new ArrayCollection();
        $this->workouts = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection|Movement[]
     */
    public function getMovement(): Collection
    {
        return $this->movement;
    }

    public function addMovement(Movement $movement): self
    {
        if (!$this->movement->contains($movement)) {
            $this->movement[] = $movement;
        }

        return $this;
    }

    public function removeMovement(Movement $movement): self
    {
        if ($this->movement->contains($movement)) {
            $this->movement->removeElement($movement);
        }

        return $this;
    }

    public function getEquipment(): ?Equipment
    {
        return $this->equipment;
    }

    public function setEquipment(?Equipment $equipment): self
    {
        $this->equipment = $equipment;

        return $this;
    }

    public function getPosition(): ?Position
    {
        return $this->Position;
    }

    public function setPosition(?Position $Position): self
    {
        $this->Position = $Position;

        return $this;
    }

    public function __toString() {
        return $this->getName();
    }

    /**
     * @return Collection|Workout[]
     */
    public function getWorkouts(): Collection
    {
        return $this->workouts;
    }

    public function addWorkout(Workout $workout): self
    {
        if (!$this->workouts->contains($workout)) {
            $this->workouts[] = $workout;
            $workout->addExercise($this);
        }

        return $this;
    }

    public function removeWorkout(Workout $workout): self
    {
        if ($this->workouts->contains($workout)) {
            $this->workouts->removeElement($workout);
            $workout->removeExercise($this);
        }

        return $this;
    }
}
