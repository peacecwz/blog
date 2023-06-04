"use client";
import Link from "next/link";
import {RxHamburgerMenu} from 'react-icons/rx';
import {FC, useState} from "react";
import {usePathname, useRouter} from "next/navigation";

type MenuLinkProps = {
    href: string;
    text: string;
    isMobile?: boolean;
}

const MenuLink: FC<MenuLinkProps> = ({href, text, isMobile}) => {
    const pathname = usePathname();
    return <Link href={href}
                 className={`text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-base font-medium ${isMobile ? "block" : "relative block"}`}>
        {text}
        {!isMobile && pathname === href && <span className="absolute inset-x-1/4 bottom-0 h-0.5 w-1/2 bg-black"></span>}
    </Link>
}

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="border-b-2 border-b-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="w-full flex items-center justify-between">
                        <Link href="/" className="text-2xl font-semibold">
                            Baris Ceviz
                        </Link>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <MenuLink href={"/"} text={"Me"}/>
                                <MenuLink href={"/blog"} text={"Blog"}/>
                                {/*<MenuLink href={"/work"} text={"Work"}/>*/}
                                {/*<MenuLink href={"/contact"} text={"Contact"}/>*/}
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <a href="mailto:baris@ceviz.dev?subject=Hiring for [Project]&body=Hi Baris, Long in short, I would like to give details of project. Project: [PROJECT] Description: [DESCRIPTION] Short Requirements: [SHORT_REQUIREMENTS] Regards, [YOUR_NAME]">
                                Hire Me
                            </a>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} type="button"
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            ) : (
                                <RxHamburgerMenu className="block h-6 w-6"/>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            <div className={`md:hidden ${isOpen ? 'block bg-gray-50' : 'hidden'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <MenuLink href={"/"} text={"Me"} isMobile/>
                    <MenuLink href={"/blog"} text={"Blog"} isMobile/>
                    {/*<MenuLink href={"/work"} text={"Work"} isMobile/>*/}
                    {/*<MenuLink href={"/contact"} text={"Contact"} isMobile/>*/}
                    <MenuLink href="mailto:baris@ceviz.dev?subject=Hiring for [Project]&body=Hi%20Baris%2C%20%0A%0ALong%20in%20short%2C%20I%20would%20like%20to%20give%20details%20of%20project.%20%0A%0AProject%3A%20%5BPROJECT%5D%20%0ADescription%3A%20%5BDESCRIPTION%5D%20%0AShort%20Requirements%3A%20%5BSHORT_REQUIREMENTS%5D%20%0A%0ARegards%2C%0A%5BYOUR_NAME%5D" text={"Hire Me"} isMobile/>
                </div>
            </div>
        </nav>
    );
}

export default Header;
