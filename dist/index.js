import { visit } from "unist-util-visit";
import { processImgElement } from './process.js';
import { resultImgFilter } from "./result_filter.js";
;
export default function rehypeAbsImage(options) {
    return (root, _file) => {
        visit(root, 'element', (el) => {
            const img = resultImgFilter(el);
            if (!img)
                return;
            processImgElement(img, options);
        });
        return root;
    };
}
//# sourceMappingURL=index.js.map