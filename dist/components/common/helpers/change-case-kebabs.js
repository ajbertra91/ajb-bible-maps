export function changeCaseKebab(str) {
    return str
        .replace(/\s+/g, "-")
        .replace(/[{()}]/g, "")
        .toLowerCase();
}
