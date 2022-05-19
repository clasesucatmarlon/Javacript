function Sumar (a, b) {
    return a + b;
}

function Restar (a, b) {
    return a - b;
}

export let operaciones = {
    sumar: Sumar,
    restar: Restar
}

export default function Producto (a, b) {
    return a * b;
}