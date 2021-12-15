import Link from "next/link";
import Image from "next/image";
import Menu from "./Menu";
import NewMenu from "./NewMenu";

const NavBlue = () => {
  return (
    <nav className="flex items-center justify-center w-full p-4 bg-navy-blue z-max">
      <div className="absolute left-0 top-0 p-[13px]">
        <Link href="/">
          <a>
            <Image src="/logo.png" height="30" width="125" className="object-contain"/>
          </a>
        </Link>
      </div>
      <div className="relative mx-auto w-full z-max">
        {/*<Menu />*/}
        <NewMenu/>
      </div>
    </nav>
  );
};

export default NavBlue;
