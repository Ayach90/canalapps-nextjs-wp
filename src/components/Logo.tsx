import Image from "next/image";
import Link from "next/link";

type Props = {
  width?: number;
  height?: number;
};

const Logo = ({ width = 250, height = 58 }: Props) => {
  return (
    <Link href="/">
      <a>
        <Image
          src="/images/logo.png"
          width={`${width}px`}
          height={`${height}px`}
          alt="Canalapps Logo"
        />
      </a>
    </Link>
  );
};

export default Logo;
