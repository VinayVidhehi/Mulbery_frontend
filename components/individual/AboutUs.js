import Image from "next/image";
import React from "react";
import Link from "next/link";
import navbar from "../shared/Navbar";

const AboutUs = () => {
  return (
    <div id="about" className="bg-gray-100 pt-16 pb-8">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">
          About The Project
        </h2>

        <p className="text-white-700 leading-relaxed mb-8">
          This project seeks to address the challenge of enhancing mulberry leaf
          production through a molecular breeding approach. The aim is to
          develop a genotyping array comprising of 25K Single Nucleotide
          Polymorphisms (SNPs) to identify markers for specific traits
          associated with yield potential, drought adaptation, and disease
          resistance in mulberry plants. The array will be developed through
          bioinformatic analysis of the whole genome and transcriptome data from
          network project NW1. A panel of approximately 350 germplasm accessions
          will be genotyped using this array, and promising trait donor
          genotypes will be identified. The project's ultimate goal is to
          facilitate targeted breeding by providing robust DNA-based molecular
          markers, thereby accelerating trait introgression and improving
          mulberry leaf production.
        </p>
        <p className="text-gray-700 leading-relaxed">
          This project envisages the development of a comprehensive database of
          Simple Sequence Repeat (SSR) and Single Nucleotide Polymorphism (SNP)
          markers. The markers will be identified using the whole genome and
          specific transcriptome sequence information. The project also involves
          aligning the genome sequence data of 20 contrasting lines to identify
          highly informative SNP markers. This subproject will provide
          genotyping support to other subprojects, enabling the demonstration of
          effective Linkage Disequilibrium (LD) decay and the construction of a
          dense linkage map using codominant markers like SSRs and SNPs.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
