import Footer from "./Footer";
import NavBlue from "./NavBlue";
import Head from "next/head";
import { useRouter } from "next/router";

const SiteLayout = ({ children, pageMeta }) => {
  const router = useRouter();

  const meta = {
    title: "Gigawaffle - Marketing and Web Design Agency",
    description:
      "Start and grow your business with our professional marketing and web design team",
    type: "website",
    ...pageMeta,
  };
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        {/* Open Graph */}
        <meta
          property="og:url"
          content={`http://localhost:3000${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Gigawaffle" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
      </Head>
      <NavBlue />
      {children}
      <Footer />
    </>
  );
};

export default SiteLayout;
