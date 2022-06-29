import Link from 'next/link';
import Image from 'next/image';
import profilePic from '../public/me.png';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <Image
        src={profilePic}
        alt="Picture of the author"
        width={100}
        height={100}
        className="text-center w-12 h-12 rounded-full block mx-auto mb-4 bg-gradient-conic from-gradient-3 to-gradient-4"
      />
      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
