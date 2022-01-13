import Link from "next/link";
const Menu = () => {
  return (
    <>
      <ul className="text-white flex font-bold">
        <li className="mr-24">
          <Link href="/portfolio">
            <a>Portfolio</a>
          </Link>
        </li>
        <li className="mr-24">
          <Link href="/Services">
            <a>Services</a>
          </Link>
        </li>
        <li className="mr-24 hidden">
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li className="mr-24 hidden">
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li className="mr-24">
          <Link href="/contact-us">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Menu;
