import { Element } from "hast";

export function filterRelativeImgs(el: Element): Element | undefined {
    const src = el.properties.src as string;

    const disallowedPrefixes = [
        'http://',
        'https://'
    ];

    for (const disallowedPrefix of disallowedPrefixes) {
        if (src.startsWith(disallowedPrefix)) {
            return;
        }
    }

    return el;
}