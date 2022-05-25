export function processImgElement(img, options) {
    let src = img.properties.src;
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
//# sourceMappingURL=process.js.map