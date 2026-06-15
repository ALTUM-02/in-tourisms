import { useEffect, useState } from "react";
import AnimalCard from "../components/AnimalCard";
import type{ Animal } from "../types/animal";
import { getAnimals } from "../services/animalService";

function Wildlife() {
  const [animals, setAnimals] =
    useState<Animal[]>([]);

  useEffect(() => {
    getAnimals().then((res) => {
      setAnimals(res.data);
    });
  }, []);

  return (
    <div className="container mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
        Wildlife
      </h1>

      <div className="grid md:grid-cols-4 gap-6">

        {animals.map((animal) => (
          <AnimalCard
            key={animal.id}
            animal={animal}
          />
        ))}

      </div>

    </div>
  );
}

export default Wildli