export const addClass = (el, className) => {
    let classSet = new Set((el.className + '').split(' '));
    classSet.add(className);
    el.className = [...classSet].join(' ');
}

export default { addClass };
