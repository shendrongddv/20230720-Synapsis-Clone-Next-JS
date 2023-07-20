import Image from "next/image";
import Link from "next/link";

const NavbarBrand = () => {
  return (
    <Link href="/">
      <Image
        src="/logo.png"
        alt="Image"
        height={100}
        width={100}
        className="h-10 w-auto"
      />
    </Link>
  );
};

export default NavbarBrand;
