import { Element } from "hast";
import { rehypeAbsImgOptions } from "./index.js";

export function processImgElement(img: Element, options: rehypeAbsImgOptions) {
    let src = img.properties.src as string;

    if (src.startsWith('./')) {
        src = src.replace('./', '');
    }

    if (src.startsWith('/')) {
        src = src.replace('/', '');
    }

    let resultPrefix = options.prefix;
    if (!options.prefix.endsWith('/')) {
        resultPrefix += '/';
    }

    src = resultPrefix + src;
    img.properties.src = src;
}