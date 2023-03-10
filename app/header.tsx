import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="p-5 bg-blue-500">
      {/* <p>Header</p> */}
      <Link href="/" className="mr-5">
        Home
      </Link>
      <Link href="/todos" className="mr-5">
        Todo
      </Link>
      <Link href="/search">Search</Link>
    </header>
  )
}

export default Header
