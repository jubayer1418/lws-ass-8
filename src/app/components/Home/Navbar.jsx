
import Image from "next/image";
import Link from "next/link";
import logoImg from "../../../../public/images/logo.png";
import CustomLink from "../CustomLink";

const Navbar = () => {
  
  return (
    <nav>
      <div className="container flex justify-between py-6">
        <Link href="/">
          <Image src={logoImg} alt="logo" width={120} height={100} className="object-cover" />
        </Link>

        <ul className="flex gap-4 text-sm text-gray-500">
          <li className="py-2 active">
            <Link href="/">Home</Link>
          </li>

          <li className="py-2">
            <Link href="/recipes">Recipe</Link>
          </li>

          <li className="py-2">
            <Link href="/about">About us</Link>
          </li>

          <li className="py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center">
            <CustomLink></CustomLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
