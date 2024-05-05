import { type LinksFunction } from "@remix-run/node";
import styles from "./styles.scss?url";

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: styles },
]

export default function ChocolateFlakes() {
    return (
        <g id="chocolate-flakes">
				<path id="flake-right" className="flake" d="m449.9 35.5l30.1-1.5-22 150.1-12-29.8z"/>
				<path id="flake-left" className="flake" d="m379.4 25.1l27.7-12 29.1 137.4-18.7-12.8z"/>
			</g>
    )
}