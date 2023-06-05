import {FC} from "react";

export const Footer: FC = () => {
    return (
        <footer className="flex flex-col items-center justify-center w-full h-24 border-t">
            <a
                className="flex items-center justify-center"
                href="https://barisceviz.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by Next.js on Cloudflare Pages
            </a>
        </footer>
    )
}
