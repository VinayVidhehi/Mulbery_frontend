import React from "react";
import Image from "next/image";

const speakers = [
  {
    id: 1,
    name: "4 Phenotypes",
    image: "/scope/Phenotype.png",
  },
  {
    id: 2,
    name: "22 Genotypes",
    image: "/scope/Genotype.png",
  },
  {
    id: 3,
    name: "5,00,000+ Polymorphisms",
    image: "/scope/polymorphisms.png",
  },
  {
    id: 4,
    name: "1000 Identified Genes",
    image: "/scope/genes.png",
  },
  {
    id: 5,
    name: "3,00,000+ SSR Markers",
    image: "/scope/SSR Markers.png",
  },
];

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const PastSpeakers = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Statistics</h2>
        <div className="flex flex-wrap  justify-center">
          {speakers.map((speaker) => (
            <div key={speaker.id} className="rounded-lg px-4 ">
              <div className="relative min-w-[250px] h-48 flex-1 w-full">
                <Image
                  loading="lazy"
                  src={speaker.image}
                  alt={speaker.name}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                  quality={100}
                />
              </div>
              <div className="p-4 w-full">
                <h3 className="text-lg text-center font-medium mb-2 text-black">
                  {speaker.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PastSpeakers;
