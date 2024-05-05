import styles from "./styles.scss?url";
import { type LinksFunction } from "@remix-run/node";
import { $Enums } from '@prisma/client';

interface IcingProps {
    icingColor: $Enums.Color;
    icingFlavor: $Enums.IcingFlavor;
    icingTexture: $Enums.IcingTexture;
    className?: string;
}

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: styles }
]

export default function Icing({ icingColor = $Enums.Color.MATCH_FLAVOR, icingFlavor = $Enums.Flavor.VANILLA, icingTexture = $Enums.IcingTexture.ROUND }: IcingProps) {
    const color = icingColor === $Enums.Color.MATCH_FLAVOR ? icingFlavor : icingColor;
    const icingClassName = `icing icing-${color.toLowerCase()}`;

    if (icingTexture == "SWIRL") {
        return (
            <g id="swirl-icing">
                <path id="top" className={icingClassName} d="m278.4 145c19.5-48.8 71.3-49.4 81.8-49.4 0 0 13.9 27.8 99.4 49.4 15.2 12.3 12.1 45.2-20.6 41.4 0 0-181.3 63.4-160.6-41.4z"/>
                <path id="top-left-shadow" className="icing-shadow" d="m288.5 128.6c0.5 0-5.6 22.5 15.1 29.3 9.3 3.1 22.1 2.8 38.8 5.5 16.7 2.7 17.6 17.4 17.6 17.4l-58.6-1.1-21.9-0.1c-9.9-35.6 8.8-51 9-51z"/>
                <path id="top-right-shadow" className="icing-shadow" d="m456.6 183.9c2.3-49.2-102.6-31.4-96.4-88.3 0 0 13.9 27.8 99.4 49.4 15.2 12.3 7.4 37.1-1 37.3z"/>
                <path id="middle" className={icingClassName} d="m158.5 229.3c0-23.4 43.3-53.2 66.7-53.2l294.4 10.9c23.4 0 42.3 18.9 42.3 42.3 0 23.4-18.9 42.4-42.3 42.4h-318.7c-23.4 0-42.4-19-42.4-42.4z"/>
                <path id="middle-left-shadow" className="icing-shadow" d="m158.5 229.3c0-23.4 43.3-53.2 66.7-53.2l0.8-0.3c-36.9 56.5 183.1 37.5 247.2 92.7l-0.3 1.1c-1.9-2.9-63.5-3.8-86.9-3.8l-192.3 0.9c-24.4-1.4-35.2-14-35.2-37.4z"/>
                <path id="middle-right-shadow" className="icing-shadow" d="m360 181c0 0-15.6 19.8 68 23 83.6 3.2 105 65.9 105 65.9 0 0 19.2-75.6-53-83.9-26.9-3.1-11-1-11-1z"/>
                <path id="bottom" className={icingClassName} d="m98.6 325.9c0-30.3 55.9-68.9 86.2-68.9l380.8 14.1c30.3 0 54.8 24.5 54.8 54.8 0 30.3-24.5 54.8-54.8 54.8h-412.2c-30.3 0-54.8-24.5-54.8-54.8z"/>
                <path id="bottom-left-shadow" className="icing-shadow" d="m183.9 324c-2.1-25.9 3.7-65.1 35.1-65.1l67.3 2c-43.2 82.4 127.1 70.6 117.2 120.3l-134.2-0.2c-79.6 5.1-85.2-56.2-85.1-56.4z"/>
                <path id="bottom-right-shadow" className="icing-shadow" d="m534.5 269.5c0 0-5.9-3.5 1.2 14.6 4.2 10.9 12 19.4 29.3 28.4 48.9 25.6 10.4 68.9 10.4 68.9 0 0 46.7-12.3 45.7-58.4-0.7-33.9-34.2-47.9-34.2-47.9l-13.4-3.7z"/>
                <path id="bottom-center-shadow copy" className="icing-shadow" d="m543.2 384.8c12.5-9.7 21.8-36-2.5-47.4-87-40.6-70.2-69.7-70.7-70.4-0.6-1-80.4-1.8-80.4-1.8 0 0-31.4 28.8 61.5 60.6 11.8 4.1 80.9 34.2 62.2 56.8 3.2 0.3 29.9 2.2 29.9 2.2z"/>
            </g>
        )
    }

    return (
        <g id="simple-icing">
            <path className={icingClassName} d="m278.4 145c19.5-48.8 71.3-49.4 81.8-49.4 0 0 13.9 27.8 99.4 49.4 15.2 12.3 12.1 45.2-20.6 41.4 0 0-181.3 63.4-160.6-41.4z"/>
            <path className={icingClassName} d="m158.5 229.3c0-23.4 43.3-53.2 66.7-53.2l294.4 10.9c23.4 0 42.3 18.9 42.3 42.3 0 23.4-18.9 42.4-42.3 42.4h-318.7c-23.4 0-42.4-19-42.4-42.4z"/>
            <path className={icingClassName} d="m98.6 325.9c0-30.3 55.9-68.9 86.2-68.9l380.8 14.1c30.3 0 54.8 24.5 54.8 54.8 0 30.3-24.5 54.8-54.8 54.8h-412.2c-30.3 0-54.8-24.5-54.8-54.8z"/>
        </g>
    )
}