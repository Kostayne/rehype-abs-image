export function filterImageElements(el) {
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
//# sourceMappingURL=filter_image.js.map