const datosPaises = {
    usa: {
        nombre: "Estados Unidos",
        resumen: "Estados Unidos posee una de las fuerzas militares más avanzadas del mundo.",
        fuerzaAerea: ["F-22 Raptor - 186", "F-35 Lightning II - 400+", "B-2 Spirit - 20"],
        fuerzaTerrestre: ["Tanques M1 Abrams - 8000+", "M109 Paladin - 1200+"],
        fuerzaNaval: ["Portaaviones Nimitz - 10", "Submarinos nucleares - 70+", "Destructores Arleigh Burke - 90+"]
    },
    rusia: {
        nombre: "Rusia",
        resumen: "Rusia cuenta con una fuerza militar potente, especialmente en tierra y armamento nuclear.",
        fuerzaAerea: ["Su-57 - 22", "Su-35 - 100+", "Tu-160 - 16"],
        fuerzaTerrestre: ["Tanques T-90 - 3500+", "T-14 Armata - 100 (prototipo)"],
        fuerzaNaval: ["Submarinos clase Borei - 10", "Cruceros clase Kirov - 1", "Fragatas clase Gorshkov - 6"]
    },
    china: {
        nombre: "China",
        resumen: "China está expandiendo rápidamente su poder militar con foco naval y tecnológico.",
        fuerzaAerea: ["J-20 Mighty Dragon - 200+", "J-16 - 250+"],
        fuerzaTerrestre: ["Tanques Type 99 - 1500", "APC ZBL-09 - 1000+"],
        fuerzaNaval: ["Portaaviones Liaoning - 1", "Portaaviones Shandong - 1", "Destructores Tipo 055 - 8"]
    }
}

const params = new URLSearchParams(window.location.search);
const pais = params.get("pais");
const datos = datosPaises[pais];

if(datos){
    document.getElementById("titulo").textContent = datos.nombre;
    document.getElementById("resumen").textContent = datos.resumen;
    rellenarLista("aerea", datos.fuerzaAerea);
    rellenarLista("terrestre", datos.fuerzaTerrestre);
    rellenarLista("naval", datos.fuerzaNaval);
} else {
    document.getElementById("titulo").textContent = "País no encontrado";
    document.getElementById("resumen").textContent = "Verifica el nombre del país en la URL.";
}

function rellenarLista(id, items){
    const ul = document.getElementById(id);
    ul.innerHTML = "";
    items.forEach(texto => {
        const li = document.createElement("li");
        li.textContent = texto;
        ul.appendChild(li);
    });
}