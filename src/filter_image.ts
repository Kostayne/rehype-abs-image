import { Element } from "hast";

export function filterImageElements(el: Element): Element | undefined {
    if (el.tagName != 'img') {
        return;
    }

    const properties = el.properties || {};
    const src = properties.src;

    if (!src) {
        return;
    }

    return el;
}