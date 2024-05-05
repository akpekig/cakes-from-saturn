import { type LinksFunction } from "@remix-run/node";
import styles from "./styles.scss?url";
import { $Enums } from '@prisma/client';

interface HeartsProps {
    color?: $Enums.Color;
}

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: styles },
]

export default function Hearts({ color = $Enums.Color.RED }: HeartsProps) {
    const heartColorClassName = `heart-${color.toLowerCase()}`;

    return (
        <g id="hearts">
			<path fillRule="evenodd" className={heartColorClassName} d="m308.5 131.8l10.2 3.2c0.4 0.1 0.9 0.2 1.4 0 0.5-0.1 1-0.3 1.3-0.6l7.8-7.2c1.3-1.2 1.9-2.6 1.6-3.9v-0.2c-0.5-2.1-3.4-3.4-6.9-3-2.3 0.3-4.5 1.2-5.9 2.6l-0.5 0.5-0.7-0.2c-1.8-0.7-4.2-0.6-6.5 0.1-3.3 1.1-5.4 3.5-4.9 5.7v0.2c0.3 1.2 1.4 2.3 3.1 2.8z"/>
			<path fillRule="evenodd" className={heartColorClassName} d="m411.2 158.9l5.7 7c0.2 0.3 0.6 0.6 1 0.7 0.4 0.2 0.9 0.2 1.2 0.2l8.9-1.6c1.5-0.2 2.6-1 3-2v-0.2c0.7-1.7-0.8-4-3.4-5.3-1.8-0.9-3.8-1.3-5.4-0.9l-0.6 0.1-0.4-0.5c-1-1.3-2.7-2.4-4.6-2.9-2.9-0.7-5.5 0-6.2 1.8v0.1c-0.4 1.1-0.1 2.3 0.8 3.5z"/>
			<path fillRule="evenodd" className={heartColorClassName} d="m207.7 187.8l14.3 3.7c0.6 0.1 1.3 0 1.9-0.3 0.7-0.3 1.3-0.8 1.7-1.4l9-14.5c1.5-2.5 2-5.2 1.4-7.4l-0.1-0.3c-1.1-3.8-5.3-5.5-9.9-4.1-3.1 1-5.8 3.2-7.4 5.9l-0.6 1.1-1-0.3c-2.6-0.8-5.8-0.2-8.6 1.5-4.3 2.7-6.6 7.5-5.5 11.3l0.1 0.3c0.6 2.2 2.3 3.9 4.7 4.5z"/>
			<path fillRule="evenodd" className={heartColorClassName} d="m299.7 194.7l8.8 11.8c0.4 0.5 1 0.8 1.7 1 0.7 0.2 1.5 0.1 2.1-0.1l16.2-5.8c2.7-0.9 4.7-2.7 5.6-4.9l0.1-0.3c1.6-3.6-0.6-7.5-5.2-9.3-2.9-1.1-6.5-1.1-9.4 0l-1.1 0.4-0.6-0.8c-1.5-2.2-4.4-3.8-7.7-4.1-5.1-0.6-9.8 1.7-11.3 5.3l-0.2 0.3c-0.9 2.2-0.5 4.5 1 6.5z"/>
			<path fillRule="evenodd" className={heartColorClassName} d="m407 222.6l8.9 4.4c0.4 0.2 0.9 0.2 1.4 0.1 0.5-0.1 1-0.3 1.4-0.7l8.9-8.1c1.5-1.4 2.4-3.1 2.4-4.6v-0.2c0-2.6-2.5-4.3-5.9-4.1-2.3 0.2-4.6 1.3-6.2 2.8l-0.6 0.6-0.6-0.3c-1.6-0.9-3.9-1-6.1-0.3-3.4 1.2-5.9 3.9-5.9 6.5v0.3c-0.1 1.5 0.8 2.8 2.3 3.6z"/>
			<path fillRule="evenodd" className={heartColorClassName} d="m490.3 226.9l8.5 5.1c0.4 0.2 0.8 0.3 1.4 0.2 0.5 0 1-0.2 1.4-0.5l9.5-7.5c1.6-1.2 2.6-2.8 2.7-4.3l0.1-0.3c0.2-2.6-2.2-4.5-5.6-4.5-2.2 0-4.6 0.9-6.3 2.3l-0.7 0.5-0.6-0.3c-1.5-1-3.8-1.3-6.1-0.7-3.5 0.8-6.2 3.4-6.4 6v0.2c-0.1 1.5 0.6 2.9 2.1 3.8z"/>
			<path fillRule="evenodd" className={heartColorClassName} d="m246.7 248.9l-8.5 5.1c-0.4 0.2-0.8 0.3-1.4 0.2-0.5 0-1-0.2-1.4-0.5l-9.5-7.5c-1.6-1.2-2.6-2.8-2.7-4.3l-0.1-0.3c-0.2-2.6 2.2-4.5 5.6-4.5 2.2 0 4.6 0.9 6.3 2.3l0.7 0.5 0.6-0.3c1.5-1 3.8-1.3 6.1-0.7 3.5 0.8 6.2 3.4 6.4 6v0.2c0.1 1.5-0.6 2.9-2.1 3.8z"/>
			<path fillRule="evenodd" className={heartColorClassName} d="m357.7 244.9l-8.5 5.1c-0.4 0.2-0.8 0.3-1.4 0.2-0.5 0-1-0.2-1.4-0.5l-9.5-7.5c-1.6-1.2-2.6-2.8-2.7-4.3l-0.1-0.3c-0.2-2.6 2.2-4.5 5.6-4.5 2.2 0 4.6 0.9 6.3 2.3l0.7 0.5 0.6-0.3c1.5-1 3.8-1.3 6.1-0.7 3.5 0.8 6.2 3.4 6.4 6v0.2c0.1 1.5-0.6 2.9-2.1 3.8z"/>
			<path fillRule="evenodd" className={heartColorClassName} d="m575.7 289.9l-8.5 5.1c-0.4 0.2-0.8 0.3-1.4 0.2-0.5 0-1-0.2-1.4-0.5l-9.5-7.5c-1.6-1.2-2.6-2.8-2.7-4.3l-0.1-0.3c-0.2-2.6 2.2-4.5 5.6-4.5 2.2 0 4.6 0.9 6.3 2.3l0.7 0.5 0.6-0.3c1.5-1 3.8-1.3 6.1-0.7 3.5 0.8 6.2 3.4 6.4 6v0.2c0.1 1.5-0.6 2.9-2.1 3.8z"/>
			<path fillRule="evenodd" className={heartColorClassName} d="m462.3 297.8l-14.3 3.7c-0.6 0.1-1.3 0-1.9-0.3-0.7-0.3-1.3-0.8-1.7-1.4l-9-14.5c-1.5-2.5-2-5.2-1.4-7.4l0.1-0.3c1.1-3.8 5.3-5.5 9.9-4.1 3.1 1 5.8 3.2 7.4 5.9l0.6 1.1 1-0.3c2.6-0.8 5.8-0.2 8.6 1.5 4.3 2.7 6.6 7.5 5.5 11.3l-0.1 0.3c-0.6 2.2-2.3 3.9-4.7 4.5z"/>
			<path fillRule="evenodd" className={heartColorClassName} d="m263 332.6l-8.9 4.4c-0.4 0.2-0.9 0.2-1.4 0.1-0.5-0.1-1-0.3-1.4-0.7l-8.9-8.1c-1.5-1.4-2.4-3.1-2.4-4.6v-0.2c0-2.6 2.5-4.3 5.9-4.1 2.3 0.2 4.6 1.3 6.2 2.8l0.6 0.6 0.6-0.3c1.6-0.9 3.9-1 6.1-0.3 3.4 1.2 5.9 3.9 5.9 6.5v0.3c0.1 1.5-0.8 2.8-2.3 3.6z"/>
			<path fillRule="evenodd" className={heartColorClassName} d="m150.8 350.5l-2.7 9.6c-0.1 0.4-0.4 0.8-0.8 1.1-0.4 0.3-1 0.5-1.5 0.5l-12 1.2c-2 0.2-3.8-0.2-5-1.3l-0.1-0.1c-2-1.8-1.6-4.8 0.9-7.1 1.6-1.6 3.9-2.6 6.2-2.7l0.8-0.1 0.1-0.6c0.5-1.8 1.9-3.6 4-4.8 3.1-1.7 6.8-1.8 8.8 0l0.1 0.1c1.2 1.1 1.6 2.6 1.2 4.2z"/>
			<path fillRule="evenodd" className={heartColorClassName} d="m423.3 358.9l8.5 5.1c0.4 0.2 0.8 0.3 1.4 0.2 0.5 0 1-0.2 1.4-0.5l9.5-7.5c1.6-1.2 2.6-2.8 2.7-4.3l0.1-0.3c0.2-2.6-2.2-4.5-5.6-4.5-2.2 0-4.6 0.9-6.3 2.3l-0.7 0.5-0.6-0.3c-1.5-1-3.8-1.3-6.1-0.7-3.5 0.8-6.2 3.4-6.4 6v0.2c-0.1 1.5 0.6 2.9 2.1 3.8z"/>
			<path fillRule="evenodd" className={heartColorClassName} d="m329.3 296.9l8.5 5.1c0.4 0.2 0.8 0.3 1.4 0.2 0.5 0 1-0.2 1.4-0.5l9.5-7.5c1.6-1.2 2.6-2.8 2.7-4.3l0.1-0.3c0.2-2.6-2.2-4.5-5.6-4.5-2.2 0-4.6 0.9-6.3 2.3l-0.7 0.5-0.6-0.3c-1.5-1-3.8-1.3-6.1-0.7-3.5 0.8-6.2 3.4-6.4 6v0.2c-0.1 1.5 0.6 2.9 2.1 3.8z"/>
			<path fillRule="evenodd" className={heartColorClassName} d="m127.9 286.1l7 6.5c0.3 0.3 0.7 0.4 1.1 0.4 0.4 0 0.8-0.1 1.1-0.4l7-6.5c1.2-1.1 1.9-2.6 1.9-4.2v-0.2c0-2.7-2-5-4.7-5.4-1.7-0.3-3.6 0.3-4.8 1.5l-0.5 0.5-0.5-0.5c-1.2-1.2-3.1-1.8-4.8-1.5-2.7 0.4-4.7 2.7-4.7 5.4v0.2c0 1.6 0.7 3.1 1.9 4.2z"/>
			<path fillRule="evenodd" className={heartColorClassName} d="m526.7 311.4l6.3 3.4c0.3 0.1 0.6 0.2 1 0.2 0.4 0 0.7-0.1 1-0.2l6.3-3.4c1.1-0.6 1.7-1.4 1.7-2.3v-0.1c0-1.4-1.8-2.6-4.2-2.8-1.6-0.2-3.2 0.1-4.4 0.8l-0.4 0.2-0.4-0.2c-1.2-0.7-2.8-1-4.4-0.8-2.4 0.2-4.2 1.4-4.2 2.8v0.1c0 0.9 0.6 1.7 1.7 2.3z"/>
		</g>
    )
}