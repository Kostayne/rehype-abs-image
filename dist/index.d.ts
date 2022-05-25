import { Root } from 'hast';
import { VFile } from "vfile-reporter/lib";
export interface rehypeAbsImgOptions {
    prefix: string;
}
export default function rehypeAbsImage(options: rehypeAbsImgOptions): (root: Root, _file: VFile) => Root;
