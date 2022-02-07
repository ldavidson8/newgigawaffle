import Image from "next/image";
import Link from "next/link";
import ContactSection from "../../components/ContactSection";
import { Lines } from "../../components/HomeComponents/Lines";
import { ServicesHero } from "../../components/HomeComponents/ServicesHero";
import NavTransparent from "../../components/NavTransparent";
import SiteLayout from "../../components/SiteLayout";
import PortfolioRow from "../../components/PortfolioRow";
import PortfolioGrid from "../../components/PortfolioGrid";
import Footer from "../../components/Footer";
import NavBlueCopy from "../../components/NavBlueCopy";

const ServicesPage = () => {
  return (
    <div>
      <NavBlueCopy />
      <ServicesHero />
      <h3 className="text-white bg-primary max-w-section mx-auto font-bold text-xl text-center mt-10 z-50">
        Some of our projects
      </h3>
      <PortfolioGrid />
      <Footer />
    </div>
  );
};

export default ServicesPage;
