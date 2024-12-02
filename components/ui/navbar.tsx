import Link from 'next/link';

export default function NavBar(): JSX.Element {
  const navStyle: React.CSSProperties = {
    padding: '1rem',
    backgroundColor: '#282c34',
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
  };

  const linkStyle: React.CSSProperties = {
    color: '#61dafb',
    textDecoration: 'none',
  };

  return (
    <nav style={navStyle}>
      <Link href="/" style={linkStyle}>
        Home
      </Link>
      <Link href="/about" style={linkStyle}>
        About
      </Link>
      <Link href="/tester" style={linkStyle}>
        Tester
      </Link>
    </nav>
  );
}

