function probar_variables() {
    //var: ambito de funcion
    var x="var: ambito de funcion";
    if (true) {
        var x="var: ambito funcion if";
    }
    if (true) {
        let y="let: ambito de bloque";
        console.log(y);
        
    }
    //console.log(y); //Da error porque intenta printear una variable no definida (la y anterior tenia ambito de bloque)
    const z="const: non se pode reasignar";
    console.log(z);
    //z="Novo valor" //No se puede reasignar un nuevo valor a una constante porque es como su nombre indica constante, inmutable 
    var x="Nova asignacion";
    let y="Nova asignacion con let";
}

probar_variables();