function dividir(a, b) {
    if (b===0) {
        throw new Error("No se puede dividir entre 0")
    }
    return a/b;
}

try {
    console.log(dividir(10, 2));
    console.log(dividir(5,0));

} catch(error) {
    console.log(error.name);
    console.log(error.message);
} finally {
    console.log("Acabouse a execución.")
}

try {
    let valorNulo=null;
    console.log(valorNulo.edad)
} catch(error) {
    console.log(error.name)
    console.log(error.message);
} finally {
    console.log("Fin do try-catch.")
}