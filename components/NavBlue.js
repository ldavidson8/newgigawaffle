import Link from "next/link";
import Image from "next/image";
import Menu from "./Menu";

const NavBlue = () => {
  return (
    <nav className="flex items-center justify-center w-full p-4 bg-navy-blue z-max">
      <div className="absolute top-2 left-4">
        <Link href="/">
          <a>
            <Image src="/logo.png" height="44" width="190" />
          </a>
        </Link>
      </div>
      <div>
        <Menu />
      </div>
    </nav>
  );
};

export default NavBlue;
