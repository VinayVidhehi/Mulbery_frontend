import React, { useEffect, useState } from "react";
import { saveAs } from "file-saver";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/footer";
import Link from "next/link";
import Image from "next/image";

const ExcelDownloadsPage = () => {
  const handleDownload = (fileName) => {
    const fileUrl = `/downloads/${fileName}`; // Replace with the actual file URL
    saveAs(fileUrl, fileName);
  };

  const [navbarBg, setNavbarBg] = useState("bg-transparent");

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setNavbarBg("bg-gray-800");
      } else {
        setNavbarBg("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-bg-image bg-cover bg-no-repeat bg-blend-darken">
      <nav
        className={`fixed top-0 left-0 w-full ${navbarBg} transition duration-300 ease-in-out z-10`}
      >
        <div className="max-w-5xl w-full mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link
              href="/"
              className="text-black font-bold text-2xl cursor-pointer flex gap-2"
            >
              <Image src="/logo.png" width={40} height={40} /> IMLM
            </Link>
            <Navbar />
          </div>
        </div>
      </nav>
      <div className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:py-16 lg:px-8 min-h-[90vh]">
        <h1 className="text-4xl font-bold my-8">Downloads</h1>
        <div className="grid grid-cols-2 gap-5 gap-y-10 sm:grid-cols-3 place-content-center items-center">
          <div className="border border-black border rounded-lg shadow-md">
            <div className="flex items-center justify-center h-32">
              <img className="min-h-full" src="excel.png" alt="Excel Icon" />
            </div>
            <h2 className="text-lg mt-5 mb-3 font-bold mx-4">Expression Data</h2>
            <button
              className="mx-4 mb-3 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => {
                handleDownload("Genotypes_DE");
                handleDownload("Genotypes_FPKM_Matrix.xlsx");
                handleDownload("Mindica_TSI_expression.xlsx");
                handleDownload("Tissue_FPKM_Matrix.xlsx");
              }}
            >
              Download
            </button>
          </div>
          <div className="border border-black  border rounded-lg shadow-md">
            <div className="flex items-center justify-center h-32">
              <img className="min-h-full" src="excel.png" alt="Excel Icon" />
            </div>
            <h2 className="text-lg mt-5 mb-3 font-bold mx-4">Raw Data</h2>
            <button
              className="mx-4 mb-3 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => handleDownload("rawdata.txtß")}
            >
              Download
            </button>
          </div>
          <div className=" border border-black  border rounded-lg shadow-md">
            <div className="flex items-center justify-center h-32">
              <img className="min-h-full" src="excel.png" alt="Excel Icon" />
            </div>
            <h2 className="text-lg mt-5 mb-3 font-bold mx-4">Selected mRNAs</h2>
            <button
              className="mx-4 mb-3 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => handleDownload("Mind_JNU_v1.2_mRNA.fasta")}
            >
              Download
            </button>
          </div>
          <div className="border border-black  border rounded-lg shadow-md">
            <div className="flex items-center justify-center h-32">
              <img className="min-h-full" src="excel.png" alt="Excel Icon" />
            </div>
            <h2 className="text-lg mt-5 mb-3 font-bold mx-4">
              Selected Proteins
            </h2>
            <button
              className="mx-4 mb-3 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => handleDownload("Mind_JNU_v1.2_proteins.fasta")}
            >
              Download
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ExcelDownloadsPage;
