import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="text-white">
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 bg-dark-gray py-9 px-4 gap-8 font-medium order-1">
        <div className="col-span-2 xl:col-span-1">
          <Image src="/icon.png" width="100" height="100" layout="fixed" />
        </div>
        <div className="order-3">
          <h3 className="text-secondary uppercase mb-2">Preston HQ</h3>
          <address>
            Estate House, <br /> 18 Fox St, <br /> Preston <br /> PR1 2AB
          </address>
        </div>
        <div className="order-4">
          <h3 className="text-secondary uppercase mb-2">Company</h3>
          <ul className="space-y-4">
            <li>
              <Link href="/about">
                <a>About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Case Studies</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact Us</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="order-5">
          <h3 className="text-secondary uppercase mb-2">Services</h3>
          <ul className="space-y-4">
            <li>
              <Link href="/services/digital-marketing">
                <a>Digital Marketing</a>
              </Link>
            </li>
            <li>
              <Link href="/services/web-design">
                <a>Web Design</a>
              </Link>
            </li>
            <li>
              <Link href="/services/seo">
                <a>SEO</a>
              </Link>
            </li>
            <li>
              <Link href="/services/social-media">
                <a>Social Media</a>
              </Link>
            </li>
            <li>
              <Link href="/services/copywriting">
                <a>Copywriting</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="order-6">
          <h3 className="text-secondary uppercase mb-2">Connect</h3>
          <ul className="space-y-4">
            <li>
              <Link href="https://www.facebook.com/gigawaffleuk">
                <a>Facebook</a>
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/company/gigawaffle/">
                <a>LinkedIn</a>
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/gigawaffleuk/">
                <a>Instagram</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Spotify</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="bg-gradient-to-r from-primary to-secondary p-1 order-2 xl:order-last col-span-2 xl:col-span-1">
          <div className="bg-lighter-gray h-full w-full items-end p-4">
            <Link href="/contact-us">
              <a className="flex items-end h-full">
                <span className="uppercase text-sm md:text-base mr-2">
                  Start Your Journey
                </span>
                <img src="/arrow-right.svg" width="60" height="20" />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-lighter-gray py-3 px-6">
        <span>
          &copy; 2022 gigawaffle | Gigawaffle Ltd 13704464 - Terms and Privacy
          Policy
        </span>
      </div>
    </div>
  );
};

export default Footer;
