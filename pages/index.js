import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { HeroSection } from "../components/HomeComponents/HeroSection";
import { SecondSection } from "../components/HomeComponents/SecondSection";
import { ThirdSection } from "../components/HomeComponents/ThirdSection";
import { FourthSection } from "../components/HomeComponents/FourthSection";
import { FifthSection } from "../components/HomeComponents/FifthSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gigawaffle | Home</title>
        <meta
          name="keywords"
          content="Marketing | Digital Marketing | Creative Design | Website Design &amp; Development | Branding | SEO | Copywriting |Preston |marketing agency | Hustle"
        />
        <meta
          name="description"
          content="Gigawaffle, Digital Marketing Company based in Preston City Centre. Web Design, Brand Design, SEO and Copywriting. grow your business and turn it into a brand"
        />
      </Head>
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
    </>
  );
}
