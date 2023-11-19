let texto = prompt("escribe un oracion a traducir a lenguaje hacker");
let nivel = prompt("ingrese un nivel para traducir la oracion (basico,intermedio o avanzado)");





switch (nivel) {
    case "basico":
        function traductor_lenguaje_leet1(texto) {
            const leet = { 
                a: "4", b: "8", c: "c", d: "d", e: "3", f: "f", g: "6", h: "h", i: "i", j: "j", k: "k", l: "1", m: "m", n: "n", ñ: "ñ", o: "0", p: "p", q: "q", r: "r", s: "5", t: "7", u: "u", v: "v", w: "w", x: "x", y: "y", z: "2",
            };
            let resultado = " ";
            for (let i = 0; i < texto.length; i++) {
                const letra = texto[i].toLowerCase();
                if (leet.hasOwnProperty(letra)) {
                    resultado += leet[letra];
                } else {
                    resultado += letra;
                }
            }
            return resultado;
        }
        
        alert(traductor_lenguaje_leet1(texto));
        break;
    case "intermedio":
        
function traductor_lenguaje_leet2(texto) {
    const leet = {
        a: "4", b: "8", c: "[", d: ")", e: "3", f: "|=", g: "6", h: "h", i: "i", j: "j", k: "k", l: "1", m: "m", n: "n", ñ: "ñ", o: "0", p: "p", q: "q", r: "i2", s: "5", t: "7", u: "u", v: "v", w: "w", x: "x", y: "y", z: "2",
    };
    let resultado = "";
    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i].toLowerCase();
        if (leet.hasOwnProperty(letra)) {
            resultado += leet[letra];
        } else {
            resultado += letra;
        }
    }
    return resultado;
}

        alert(traductor_lenguaje_leet2(texto));
        break;
    case "avanzado":
        function traductor_lenguaje_leet3(texto) {
            const leet = {
                a: "4", b: "8", c: "[", d: ")", e: "3", f: "|=", g: "6", h: ")-(", i: "][", j: ",_|", k: ">|", l: "1", m: "/\\/\\", n: "^/", ñ: "ñ", o: "0", p: "|*", q: "(_,)", r: "i2", s: "5", t: "7", u: "(_)", v: "\\/", w: "\\/\\/", x: "><", y: "j", z: "2",
                1: "L", 2: "R", 3: "E", 4: "A", 5: "S", 6: "b", 7: "T", 8: "B", 9: "g", 0: "o"
            };
            let resultado = "";
            for (let i = 0; i < texto.length; i++) {
                const letra = texto[i].toLowerCase();
                if (leet.hasOwnProperty(letra)) {
                    resultado += leet[letra];
                } else {
                    resultado += letra;
                }
            }
            return resultado;
        }
        alert(traductor_lenguaje_leet3(texto));
        break;
       default: alert("esta opcion no se encuentra disponible")
}
