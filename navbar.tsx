import React from 'react'
import Link from 'next/link'




const Navbar = () => {
    return (
        <div className='bg-white z-50'>
            <header className="text-yellow-600 body-font bg-black">
            <div className="container mx-auto flex flex-wrap p-7 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-purple-900 mb-4 md:mb-0">
                    
                    
                    <span className="ml-3 text-xl">@creativeShayan</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link href="/"className="mr-5 hover:text-yellow-900">Home</Link>
                    <Link href="#About" className="mr-5 hover:text-yellow-900">About</Link>
                    <Link href="#Skills"className="mr-5 hover:text-yellow-900">Skills</Link>
                    <Link href="#Projects"className="mr-5 hover:text-yellow-900">Projects</Link>
                    <Link href="#Contact"className="mr-5 hover:text-yellow-900">Contact</Link>

</nav>
            </div>
        </header></div>
    )
}

export default Navbar