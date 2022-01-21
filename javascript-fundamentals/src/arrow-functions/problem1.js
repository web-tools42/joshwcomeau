// fix all the errors.
function c(g, h) {
    let x = g(6);
    let y = h(8, 10);
    return [x, y];
}

function t() {
    return c( x => return x + 2, (x,y) => return x + y);
}

module.exports = t


