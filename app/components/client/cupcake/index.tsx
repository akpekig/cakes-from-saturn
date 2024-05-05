import type { LinksFunction } from "@remix-run/node";
import Case, { links as caseLinks } from "@app/components/client/case";
import Icing, { links as icingLinks } from "@app/components/client/icing";
import { $Enums, Prisma } from "@prisma/client";
import styles from "./styles.scss?url";
import Toppings, { links as toppingsLinks } from "@app/components/client/toppings";

interface CupcakeProps extends Prisma.CupcakeGetPayload<{
	include: {
		flavor: true;
		color: true;
		icingTexture: true;
		icingColor: true;
		icingFlavor: true;
		toppings: true;
		caseColor: true;
	}
}> {
	className?: string;
	toppingsClassName?: string;
}



export const links: LinksFunction = () => [
	...icingLinks(),
	...caseLinks(),
	...toppingsLinks(),
    { rel: "stylesheet", href: styles },
]

export default function Cupcake(props: CupcakeProps) {
	const cakeColor = props.color === $Enums.Color.MATCH_FLAVOR ? props.flavor : props.color;
	const cakeColorClassName = `cake cake-${cakeColor.toLowerCase()}`
	const icingProps = {
		icingColor: props.icingColor,
		icingFlavor: props.icingFlavor,
		icingTexture: props.icingTexture,
	}
	const toppingsProps = {
		toppings: props.toppings.map(topping => ({...topping, cupcake: props })),
		className: props.toppingsClassName
	}

    return (
    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 720" width="720" height="720" className={props.className}>
		<linearGradient id="rainbowGradient">
			<stop offset="10%" />
			<stop offset="50%" />
			<stop offset="90%" />
		</linearGradient>
        <path className={cakeColorClassName} d="m100 381.5l0.3-0.1c0 0 84.5-48.9 259.9-48.9 175.4 0 260.4 49 260.4 49z"/>
        <Icing {...icingProps} />
		{props.toppings && <Toppings {...toppingsProps} />}
        <Case caseColor={props.caseColor} />
    </svg>
    )
}