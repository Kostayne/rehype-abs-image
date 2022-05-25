import { Element } from "hast";
import { filterImageElements } from "./filter_image.js";
import { filterRelativeImgs } from "./filter_rel_img.js";

export function resultImgFilter(el: Element) {
    const img = filterImageElements(el);
    if (!img) return;

    const relativeLink = filterRelativeImgs(img);
    if (!relativeLink) return;

    return relativeLink;
}