import AboutUs from "@/components/individual/AboutUs";
import Banner from "@/components/individual/Banner";
import Linkage from "@/components/individual/linkage";
import PastSpeakers from "@/components/individual/PastSpeakers";
import Sponsors from "@/components/individual/Sponsors";
import Footer from "@/components/shared/footer";
import {
  InstagramFilled,
  LinkedinFilled,
  PushpinTwoTone,
  YoutubeFilled,
} from "@ant-design/icons";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Biotechnology</title>
        <link rel="icon" href="logo.png" type="image/png" />
      </Head>
      <main>
        <Banner />
        <AboutUs />
        <Linkage />
        <PastSpeakers />
        <Sponsors />
        <Footer />
      </main>
    </>
  );
}
