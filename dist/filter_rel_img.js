export function filterRelativeImgs(el) {
    const src = el.properties.src;
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
//# sourceMappingURL=filter_rel_img.js.map