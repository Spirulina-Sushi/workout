<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\MovementRepository")
 */
class Movement
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
     * @ORM\ManyToMany(targetEntity="App\Entity\Articulation", inversedBy="movements")
     */
    private $articulation;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\BodyPart", inversedBy="movements")
     */
    private $bodyPart;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Exercise", mappedBy="movement")
     */
    private $exercises;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\User", mappedBy="injuries")
     */
    private $users;

    public function __construct()
    {
        $this->articulation = new ArrayCollection();
        $this->bodyPart = new ArrayCollection();
        $this->exercises = new ArrayCollection();
        $this->users = new ArrayCollection();
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
     * @return Collection|Articulation[]
     */
    public function getArticulation(): Collection
    {
        return $this->articulation;
    }

    public function addArticulation(Articulation $articulation): self
    {
        if (!$this->articulation->contains($articulation)) {
            $this->articulation[] = $articulation;
        }

        return $this;
    }

    public function removeArticulation(Articulation $articulation): self
    {
        if ($this->articulation->contains($articulation)) {
            $this->articulation->removeElement($articulation);
        }

        return $this;
    }

    /**
     * @return Collection|BodyPart[]
     */
    public function getBodyPart(): Collection
    {
        return $this->bodyPart;
    }

    public function addBodyPart(BodyPart $bodyPart): self
    {
        if (!$this->bodyPart->contains($bodyPart)) {
            $this->bodyPart[] = $bodyPart;
        }

        return $this;
    }

    public function removeBodyPart(BodyPart $bodyPart): self
    {
        if ($this->bodyPart->contains($bodyPart)) {
            $this->bodyPart->removeElement($bodyPart);
        }

        return $this;
    }

    /**
     * @return Collection|Exercise[]
     */
    public function getExercises(): Collection
    {
        return $this->exercises;
    }

    public function addExercise(Exercise $exercise): self
    {
        if (!$this->exercises->contains($exercise)) {
            $this->exercises[] = $exercise;
            $exercise->addMovement($this);
        }

        return $this;
    }

    public function removeExercise(Exercise $exercise): self
    {
        if ($this->exercises->contains($exercise)) {
            $this->exercises->removeElement($exercise);
            $exercise->removeMovement($this);
        }

        return $this;
    }

    /**
     * @return Collection|User[]
     */
    public function getUsers(): Collection
    {
        return $this->users;
    }

    public function addUser(User $user): self
    {
        if (!$this->users->contains($user)) {
            $this->users[] = $user;
            $user->addInjury($this);
        }

        return $this;
    }

    public function removeUser(User $user): self
    {
        if ($this->users->contains($user)) {
            $this->users->removeElement($user);
            $user->removeInjury($this);
        }

        return $this;
    }

    public function __toString() {
        return $this->getUsers();
    }
}
