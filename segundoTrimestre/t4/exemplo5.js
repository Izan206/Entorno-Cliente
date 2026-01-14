var global = "global";
console.log(global); // global

// Acceso a variable en ámbito fillo -> ERROR
console.log(local1a); // ReferenceError

// Acceso a funcións fillas -> OK
funNivel1a();
funNivel1b();

// Acceso a función neta -> ERROR
funNivel2a(); // ReferenceError

function funNivel1a() {

  var local1a = "nivel1a";
  console.log(local1a); // nivel1a

  // Acceso a funcións fillas -> OK
  funNivel2a();
  funNivel2b();
  
  function funNivel2a() {
    var local2a = "nivel2a";
    console.log(local2a); // nivel2a
  }


  function funNivel2b() {
    var local2b = "nivel2b";
    console.log(local2b); // nivel2b

    // Acceso a variable en ámbito pai -> OK
    console.log(local1a); // nivel1a

    // Acceso a variable en ámbito irmán do pai -> ERROR
    console.log(local1b); // ReferenceError

    // Acceso a variable en ámbito avó -> OK
    console.log(global); // global
    
    // Acceso a función irmá -> OK
    funNivel2a(); // nivel2a
  }
}

function funNivel1b() {

 var local1b = "nivel1b";
 console.log(local1b); // nivel1b

 // Acceso a función filla do irmán -> ERROR
 funNivel2a(); // ReferenceError

}