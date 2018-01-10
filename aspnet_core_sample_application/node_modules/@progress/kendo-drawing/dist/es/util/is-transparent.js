import defined from './defined';

export default function isTransparent(color) {
    return color === "" || color === null || color === "none" || color === "transparent" || !defined(color);
}
//# sourceMappingURL=is-transparent.js.map
