import { filterImageElements } from "./filter_image.js";
import { filterRelativeImgs } from "./filter_rel_img.js";
export function resultImgFilter(el) {
    const img = filterImageElements(el);
    if (!img)
        return;
    const relativeLink = filterRelativeImgs(img);
    if (!relativeLink)
        return;
    return relativeLink;
}
//# sourceMappingURL=result_filter.js.map