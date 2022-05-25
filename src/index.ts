import { Root, Element } from 'hast';
import { visit } from "unist-util-visit";
import { VFile } from "vfile-reporter/lib";
import { processImgElement } from './process.js';
import { resultImgFilter } from "./result_filter.js";

export interface rehypeAbsImgOptions {
    prefix: string;
};

export default function rehypeAbsImage(options: rehypeAbsImgOptions) {
    return (root: Root, _file: VFile) => {
        visit(root, 'element', (el: Element) => {
            const img = resultImgFilter(el);
            if (!img) return;

            processImgElement(img, options);
        });

        return root;
    };
}