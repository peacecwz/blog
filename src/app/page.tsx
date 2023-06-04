import React from "react";
import {BsGithub, BsInstagram, BsLinkedin, BsMedium, BsSpotify, BsTwitter, BsYoutube} from "react-icons/bs";
import {SiLichess, SiSoundcloud, SiUpwork} from "react-icons/si";
import Image from "next/image";

export const runtime = 'nodejs';

const Hero = () => {
    return (
        <div className="flex flex-col-reverse justify-center items-center self-center">
            <div className="flex flex-col items-center space-y-6 justify-center">
                <p className="flex flex-col uppercase text-5xl">
                    <span className="text-center">Hey! <b>{"I'm"} Baris</b></span>
                    <span className="text-center"><b>Software Engineer</b></span>
                    <span className="text-center">Based in <b>Amsterdam</b></span>
                </p>
                <p className="w-2/3 text-lg text-center">
                    As a hacker {"who's"} passionate about development and build, I have been building digital
                    products for more than 7
                    years.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4">
                    <div className="flex justify-center">
                        <a href="mailto:baris@ceviz.dev?subject=About [your subject]" className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 mr-4 rounded-full">
                            Contact Me
                        </a>
                    </div>

                    <div className="grid grid-cols-5 gap-3 md:flex items-center justify-center md:space-x-2">
                        <a href="https://github.com/peacecwz" target="_blank"
                           className="border hover:bg-gray-300 text-black font-bold py-3 px-3 rounded-full">
                            <BsGithub className="h-4 w-4"/>
                        </a>
                        <a href="https://twitter.com/peacecwz" target="_blank"
                           className="border hover:bg-gray-300 text-black font-bold py-3 px-3 rounded-full">
                            <BsTwitter className="h-4 w-4"/>
                        </a>
                        <a href="https://instagram.com/peacecwz" target="_blank"
                           className="border hover:bg-gray-300 text-black font-bold py-3 px-3 rounded-full">
                            <BsInstagram className="h-4 w-4"/>
                        </a>
                        <a href="https://linkedin.com/in/peacecwz" target="_blank"
                           className="border hover:bg-gray-300 text-black font-bold py-3 px-3 rounded-full">
                            <BsLinkedin className="h-4 w-4"/>
                        </a>
                        <a href="https://blog.barisceviz.com" target="_blank"
                           className="border hover:bg-gray-300 text-black font-bold py-3 px-3 rounded-full">
                            <BsMedium className="h-4 w-4"/>
                        </a>
                        <a href="https://youtube.com/c/barisceviz" target="_blank"
                           className="border hover:bg-gray-300 text-black font-bold py-3 px-3 rounded-full">
                            <BsYoutube className="h-4 w-4"/>
                        </a>
                        <a href="https://lichess.org/peacecwz" target="_blank"
                           className="border hover:bg-gray-300 text-black font-bold py-3 px-3 rounded-full">
                            <SiLichess className="h-4 w-4"/>
                        </a>
                        <a href="https://open.spotify.com/user/peacecwz" target="_blank"
                           className="border hover:bg-gray-300 text-black font-bold py-3 px-3 rounded-full">
                            <BsSpotify className="h-4 w-4"/>
                        </a>
                        <a href="https://upwork.com/freelancers/peacecwz" target="_blank"
                           className="border hover:bg-gray-300 text-black font-bold py-3 px-3 rounded-full">
                            <SiUpwork className="h-4 w-4"/>
                        </a>
                        <a href="https://soundcloud.com/peacecwz" target="_blank"
                           className="border hover:bg-gray-300 text-black font-bold py-3 px-3 rounded-full">
                            <SiSoundcloud className="h-4 w-4"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center p-8">
                <Image
                    src="/profile.jpeg"
                    alt="Baris Ceviz"
                    width={250}
                    height={250}
                    className="rounded-full"/>
            </div>
        </div>
    )
}

export default function Home() {
    return (
        <Hero/>
    )
}
