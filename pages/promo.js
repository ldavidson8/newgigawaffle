import Head from "next/head";
import { HeroPromo } from "../components/HomeComponents/HeroPromo";
import { SecondSection } from "../components/HomeComponents/SecondSection";
import { ThirdSection } from "../components/HomeComponents/ThirdSection";
import { FourthSection } from "../components/HomeComponents/FourthSection";
import { FifthSection } from "../components/HomeComponents/FifthSection";
import { SGrid } from "../components/SkewedGrid";
import ContactPromo from "../components/ContactPromo";
import HomeLayout from "../components/HomeLayout";
import NavBlue from "../components/NavBlue";

export default function Promo() {
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="marketing, agency, design, web design, business, content, digital, email, preston, product, portfolio, website, unique, trends, performance, lightweight, perfect, fast"
        />
        <meta
          name="description"
          content="Gigawaffle builds your online presence with unique and performative web services at an affordable range"
        />
      </Head>
      <HeroPromo />
      <ContactPromo />
    </>
  );
}

Promo.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
