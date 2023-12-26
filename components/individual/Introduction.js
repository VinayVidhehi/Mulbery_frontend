import Image from "next/image";
import React from "react";
import Link from "next/link";
import navbar from "../shared/Navbar";

const Introduction = () => {
  return (
    <div className="bg-transparent border-2 max-w-5xl mx-auto px-4 border-white p-5">
      <p className="text-white text-lg leading-relaxed mb-8">
        The flowering plant genus Morus belongs to the Moraceae family,
        sometimes referred to as the mulberry family. Morus indica is a member
        of this family. Morus indica, like other mulberries, is a deciduous
        tree. The Himalayan region's moderate and subtropical climate is home to
        Morus indica. Currently, it is grown in East Africa, India, China, and
        Japan. Morus indica is frequently cultivated for its therapeutic
        characteristics. The mulberries of M. indica, akin to numerous other
        berries, exhibit strong antioxidant properties. The principal medical
        employment of M. indica pertains to the regulation of blood glucose
        levels in those who suffer from diabetes. Several investigations in both
        humans and mice have demonstrated that the utilization of M. indica
        resulted in the reduction of blood glucose levels in diabetic
        individuals through diverse pathways.
      </p>
      <p className="text-white text-lg leading-relaxed hidden md:block">
        IMLM – Indian Mulberry Linkage mapping Database that is specific to
        Morus Indica: an Indian specific species. The Database focuses on Single
        nucleotide polymorphisms (SNPs) and Simple sequence repeats that are
        increasingly used in genetic and breeding research of plants like Morus
        indica along with the linkage mapping. These information are important
        for genetic diversity analysis, marker-assisted selection, genome and
        QTL mapping, and conservation genetics. SNPs provide more accurate and
        efficient ways of analyzing genetic variation and identifying desirable
        traits in Morus indica, helping to improve its productivity and
        sustainability.
      </p>
    </div>
  );
};

export default Introduction;
