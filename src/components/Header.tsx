import Link from 'next/link'

function Header() {
  return (
    <header className="flex">
      <Link href="/">logo</Link>
      <nav role="list">
        {/* TODO: add links */}
        <Link href="/" role="listitem">
          name
        </Link>
      </nav>
    </header>
  )
}

export default Header
