console.log(typeof "Borja"); // Este literal é de tipo string
console.log(typeof 2.8586); // Este literal é de tipo number
console.log(typeof (5+12)); // Esta operación produce un number
console.log(typeof (5*12)); // Esta operación produce un number
console.log(typeof ('5'+12)); // Esta operación produce unha string
console.log(typeof ('5'*12)); // Esta operación produce un number
console.log(typeof ('B'*15)); // Esta operación produce un number (NaN)
console.log(typeof (0/0)); // Este operación produce un number (NaN)
console.log(typeof (5/0)); // Esta operación produce un number (infinity)
console.log(typeof (-5/0)); // Esta operación produce un number (-infinity)
console.log(typeof true); // Este literal é de tipo boolean
console.log(typeof [5,6,7,8]); // Os arrays son sempre de tipo object
console.log(typeof {nome: 'Paco'}); // Este literal é de tipo object
console.log(typeof (new Date())); // Esta operación crea un object
console.log(typeof (function() {})); // Esta declaración de tipo function (que é un tipo especial de obxecto)
console.log(typeof cousa); // É de tipo undefined (porque non hai declarada ningunha variable 'cousa')
console.log(typeof null); // Este literal é de tipo object
console.log(typeof (10+true)); // Esta operación produce un number (11)
console.log(typeof ('10'+true)); // Esta operación produce unha string ('10true')
console.log(new String(new Date())); // Convirte un obxecto á súa representación en string
console.log(typeof (parseInt("256")));
console.log(parseInt('12.5'));
console.log(parseFloat('12.5'));