import React from "react";
import Image from "next/image";
import { Carousel } from "antd";

const speakers = [
  {
    id: 0,
    name: "Dr. Vidya Niranjan",
    image: "/team/vidyaN.jpeg",
    description: "Project Investigator",
  },
  {
    id: 1,
    name: "Arun Kumar GS",
    image: "/team/arunKumar.jpeg",
    description:
      "Scientist at Central sericultural research and training institute\nPhenotype data provider",
  },
  {
    id: 2,
    name: "Sinsha Vikhin",
    image: "/team/sinsha.jpeg",
    description: "Phd Student",
  },
  {
    id: 3,
    name: "Lavanya C",
    image: "/team/lavanya.jpeg",
    description: "Project Coordinator",
  },
  {
    id: 4,
    name: "Vikash Gupta",
    image: "/team/vikash.jpeg",
    description: "Software Developer",
  },
  {
    id: 5,
    name: "Shri Ganapathi V Raman",
    image: "/team/Ganapathi.png",
    description: "Research Intern",
  },
  {
    id: 6,
    name: "Shreya Bhat",
    image: "/team/shreya.jpeg",
    description: "Research intern",
  },
  {
    id: 7,
    name: "Spoorthi Kulkarni",
    image: "/team/Spoorthi.jpg",
    description: "Research Intern",
  },
];

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Sponsors = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Meet the team</h2>
        <Carousel
          slidesToShow={4}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 2,
              },
            },
          ]}
          className="w-full gap-4 flex items-center"
          autoplay
          autoplaySpeed={1500}
        >
          {speakers.map((speaker) => (
            <div key={speaker.id} className=" shadow rounded-lg px-4 ">
              <div className="relative h-48 w-full">
                <Image
                  loading="lazy"
                  className="flex justify-center items-center"
                  src={speaker.image}
                  alt={speaker.name}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                  quality={100}
                />
              </div>
              <div className="p-4 w-full">
                <h3 className="text-lg font-medium mb-2 text-black">
                  {speaker.name}
                </h3>
                <p className="text-gray-500 text-sm">{speaker.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Sponsors;
