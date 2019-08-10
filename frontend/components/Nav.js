import Link from 'next/link';

const Nav = () => (
  <div>
    <Link href="/sell">
      <a>Home</a>
    </Link>
    <Link>
      <a>Home!</a>
    </Link>
  </div>
);

export default Nav;