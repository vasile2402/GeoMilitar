const datosPaises = {
    usa: {
        nombre: "Estados Unidos",
        bandera: "../img/Banderas/usa.png",
        resumen: "Estados Unidos posee una de las fuerzas militares más avanzadas del mundo.",
        fuerzaAerea: [
            {
                nombre: "F-22 Raptor",
                cantidad: "186",
                descripcion: "Caza furtivo de quinta generación, especializado en superioridad aérea.",
                imagen: "../img/EEUU/Fuerza aérea/F-22_Raptor.jpg",
                specs: {
                    velocidad: "2.414 km/h",
                    alcance: "2.960 km",
                    rol: "Superioridad aérea"
                }
            },
            {
                nombre: "F-35 Lightning II",
                cantidad: "400+",
                descripcion: "Avión furtivo multifunción con variantes para la fuerza aérea, marina y cuerpo de marines.",
                imagen: "../img/EEUU/Fuerza aérea/F-35_Lightning.jpeg",
                specs: {
                    velocidad: "1.930 km/h",
                    alcance: "2.220 km",
                    rol: "Multifunción"
                }
            },
            {
                nombre: "B-2 Spirit",
                cantidad: "20",
                descripcion: "Bombardero estratégico furtivo capaz de transportar armas nucleares.",
                imagen: "../img/EEUU/Fuerza aérea/B-2_Spirit.jpg",
                specs: {
                    velocidad: "1.010 km/h",
                    alcance: "11.000 km",
                    rol: "Bombardero estratégico"
                }
            }
        ],
        fuerzaTerrestre: [
            {
                nombre: "Tanques M1 Abrams",
                cantidad: "8000+",
                descripcion: "Tanque principal de combate del ejército estadounidense desde la década de 1980.",
                imagen: "../img/EEUU/Fuerza terrestre/Tanques_M1_Abrams.jpg",
                specs: {
                    velocidad: "67 km/h",
                    alcance: "426 km",
                    rol: "Combate blindado"
                }
            },
            {
                nombre: "M109 Paladin",
                cantidad: "1200+",
                descripcion: "Obús autopropulsado con gran poder de fuego y movilidad.",
                imagen: "../img/EEUU/Fuerza terrestre/M109_Paladin.jpg",
                specs: {
                    velocidad: "56 km/h",
                    alcance: "350km",
                    rol: "Artillería"
                }
            }
        ],
        fuerzaNaval: [
            {
                nombre: "Portaaviones clase Nimitz",
                cantidad: "10",
                descripcion: "Clase de portaaviones nucleares utilizados como núcleo de grupos de combate naval.",
                imagen: "../img/EEUU/Fuerza naval/Portaaviones_Nimitz.jpg",
                specs: {
                    velocidad: "56 km/h (30 nudos)",
                    alcance: "Ilimitado (propulsión nuclear)",
                    rol: "Proyección de poder"
                }
            },
            {
                nombre: "Submarinos nucleares",
                cantidad: "70+",
                descripcion: "Submarinos estratégicos y de ataque con propulsión nuclear.",
                imagen: "../img/EEUU/Fuerza naval/Submarinos_nucleares.jpg",
                specs: {
                    velocidad: "40 km/h (sumergido)",
                    alcance: "Ilimitado",
                    rol: "Disuasión / Ataque"
                }
            },
            {
                nombre: "Destructores Arleigh Burke",
                cantidad: "90+",
                descripcion: "Clase principal de destructores guiados con misiles del arsenal estadounidense.",
                imagen: "../img/EEUU/Fuerza naval/Destructores_Arleigh_Burke.jpg",
                specs: {
                    velocidad: "56 km/h",
                    alcance: "9.000 km",
                    rol: "Escolta / Ataque"
                }
            }
        ]
    },
    rusia: {
        nombre: "Rusia",
        bandera: "../img/Banderas/rusia.png",
        resumen: "Rusia cuenta con una fuerza militar potente, especialmente en tierra y armamento nuclear.",
        fuerzaAerea: [
            {
                nombre: "Su-57",
                cantidad: "22",
                descripcion: "Caza furtivo ruso de quinta generación con capacidades de combate aire-aire y aire-tierra.",
                imagen: "../img/Rusia/Fuerza aérea/Su-57.jpg",
                specs: {
                    velocidad: "2.440 km/h",
                    alcance: "3.500 km",
                    rol: "Multifunción furtivo"
                }
            },
            {
                nombre: "Su-35",
                cantidad: "100+",
                descripcion: "Avión de combate pesado de cuarta generación avanzada.",
                imagen: "../img/Rusia/Fuerza aérea/Su-35.jpg",
                specs: {
                    velocidad: "2.500 km/h",
                    alcance: "3.600 km",
                    rol: "Superioridad aérea"
                }
            },
            {
                nombre: "Tu-160",
                cantidad: "16",
                descripcion: "Bombardero supersónico estratégico de largo alcance con capacidad nuclear.",
                imagen: "../img/Rusia/Fuerza aérea/Tu-160.jpg",
                specs: {
                    velocidad: "2.200 km/h",
                    alcance: "12.300 km",
                    rol: "Bombardeo estratégico"
                }
            }
        ],
        fuerzaTerrestre: [
            {
                nombre: "Tanques T-90",
                cantidad: "3500+",
                descripcion: "Tanque principal de combate ruso, ampliamente desplegado.",
                imagen: "../img/Rusia/Fuerza terrestre/Tanques_T-90.jpg",
                specs: {
                    velocidad: "60 km/h",
                    alcance: "550 km",
                    rol: "Combate blindado"
                }
            },
            {
                nombre: "T-14 Armata",
                cantidad: "100 (prototipo)",
                descripcion: "Tanque de nueva generación basado en plataforma modular Armata.",
                imagen: "../img/Rusia/Fuerza terrestre/T-14_Armata.jpg",
                specs: {
                    velocidad: "75 km/h",
                    alcance: "500km",
                    rol: "Tanque experimental"
                }
            }
        ],
        fuerzaNaval: [
            {
                nombre: "Submarinos clase Borei",
                cantidad: "10",
                descripcion: "Submarinos estratégicos nucleares con misiles balísticos.",
                imagen: "../img/Rusia/Fuerza naval/Submarinos_clase_Borei.jpg",
                specs: {
                    velocidad: "46 km/h",
                    alcance: "Ilimitado",
                    rol: "Disuasión nuclear"
                }
            },
            {
                nombre: "Cruceros clase Kirov",
                cantidad: "1",
                descripcion: "Crucero de batalla de propulsión nuclear, el más grande del mundo.",
                imagen: "../img/Rusia/Fuerza naval/Cruceros_clase_Kirov.png",
                specs: {
                    velocidad: "59 km/h",
                    alcance: "20.000 km",
                    rol: "Ataque / Defensa aérea"
                }
            },
            {
                nombre: "Fragatas clase Gorshkov",
                cantidad: "6",
                descripcion: "Nuevas fragatas multirol de última generación.",
                imagen: "../img/Rusia/Fuerza naval/Fragatas_clase_Gorshkov.jpg",
                specs: {
                    velocidad: "54 km/h",
                    alcance: "15.000 km",
                    rol: "Escolta / Ataque"
                }
            }
        ]
    },
    china: {
        nombre: "China",
        bandera: "../img/Banderas/china.png",
        resumen: "China está expandiendo rápidamente su poder militar con foco naval y tecnológico.",
        fuerzaAerea: [
            {
                nombre: "J-20 Mighty Dragon",
                cantidad: "200+",
                descripcion: "Caza furtivo de quinta generación, desarrollado por China.",
                imagen: "../img/China/Fuerza aérea/J-20_Mighty_Dragon.jpg",
                specs: {
                    velocidad: "2.470 km/h",
                    alcance: "1.200 km",
                    rol: "Superioridad aérea"
                }
            },
            {
                nombre: "J-16",
                cantidad: "250+",
                descripcion: "Caza polivalente chino derivado del Su-30 ruso.",
                imagen: "../img/China/Fuerza aérea/J-16.jpg",
                specs: {
                    velocidad: "2.200 km/h",
                    alcance: "3.900 km",
                    rol: "Ataque terrestre / Combate"
                }
            }
        ],
        fuerzaTerrestre: [
            {
                nombre: "Tanques Type 99",
                cantidad: "1500",
                descripcion: "Tanque principal de combate de tercera generación del ejército chino.",
                imagen: "../img/China/Fuerza terrestre/Tanques_Type_99.jpg",
                specs: {
                    velocidad: "80 km/h",
                    alcance: "600 km",
                    rol: "Combate blindado"
                }
            },
            {
                nombre: "APC ZBL-09",
                cantidad: "1000+",
                descripcion: "Vehículo blindado de combate de infantería con múltiples configuraciones.",
                imagen: "../img/China/Fuerza terrestre/APC_ZBL-09.jpg",
                specs: {
                    velocidad: "100 km/h",
                    alcance: "800 km",
                    rol: "Tranporte / Apoyo"
                }
            }
        ],
        fuerzaNaval: [
            {
                nombre: "Portaaviones Liaoning",
                cantidad: "1",
                descripcion: "Primer portaaviones operativo de China, basado en un diseño soviético.",
                imagen: "../img/China/Fuerza naval/Portaaviones_Liaoning.jpg",
                specs: {
                    velocidad: "57 km/h (31 nudos)",
                    alcance: "Incierto",
                    rol: "Proyección de poder"
                }
            },
            {
                nombre: "Portaaviones Shandong",
                cantidad: "1",
                descripcion: "Primer portaaviones completamente construido en China, versión mejorada del Liaoning.",
                imagen: "../img/China/Fuerza naval/Portaaviones_Shandong.jpg",
                specs: {
                    velocidad: "57 km/h (31 nudos)",
                    alcance: "Incierto",
                    rol: "Proyección de poder"
                }
            },
            {
                nombre: "Destructores Tipo 055",
                cantidad: "8",
                descripcion: "Destructores furtivos con avanzada capacidad de guerra antiaérea y antimisiles.",
                imagen: "../img/China/Fuerza naval/Destructores_Tipo _055.jpg",
                specs: {
                    velocidad: "56 km/h (30 nudos)",
                    alcance: "8.000+ km",
                    rol: "Escolta / Combate naval"
                }
            }
        ]
    }
}

const params = new URLSearchParams(window.location.search);
const pais = params.get("pais");
const datos = datosPaises[pais];

if(datos){
    document.getElementById("titulo").textContent = datos.nombre;
    document.getElementById("bandera").src = datos.bandera;
    document.getElementById("bandera").alt = "Bandera de " + datos.nombre;
    document.getElementById("resumen").textContent = datos.resumen;
    renderTarjetas("aerea", datos.fuerzaAerea);
    renderTarjetas("terrestre", datos.fuerzaTerrestre);
    renderTarjetas("naval", datos.fuerzaNaval);
} else {
    document.getElementById("titulo").textContent = "País no encontrado";
    document.getElementById("resumen").textContent = "Verifica el nombre del país en la URL.";
}

function renderTarjetas(id, unidades){
    const contenedor = document.getElementById(id);
    contenedor.innerHTML = "";

    unidades.forEach(u => {
        const card = document.createElement("div");
        card.className = "unidad-card";
        card.onclick = () => mostrarModal(u);
        card.innerHTML = `
        <img src="${u.imagen}" alt="${u.nombre}">
        <h4>${u.nombre}</h4>
        <p>${u.descripcion}</p>
        <ul>
            <li><strong>Cantidad:</strong> ${u.cantidad}</li>
            <li><strong>Velocidad:</strong> ${u.specs.velocidad}</li>
            <li><strong>Alcance:</strong> ${u.specs.alcance}</li>
            <li><strong>Rol:</strong> ${u.specs.rol}</li>
        </ul>
        `;
        contenedor.appendChild(card);
    });
}

const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const cerrarModal = document.getElementById("cerrarModal");

cerrarModal.onclick = () => modal.style.display = "none";
window.onclick = e => { if(e.target == modal) modal.style.display = "none"; };

function mostrarModal(unidad){
    modalBody.innerHTML = `
        <h2>${unidad.nombre}</h2>
        <img src="${unidad.imagen}" alt="${unidad.nombre}" style="width:100%; max-height:300px; object-fit:cover; border-radius:8px; margin:10px 0;">
        <p>${unidad.descripcion}</p>
        <ul>
            <li><strong>Cantidad:</strong> ${unidad.cantidad}</li>
            <li><strong>Velocidad:</strong> ${unidad.specs.velocidad}</li>
            <li><strong>Alcance:</strong> ${unidad.specs.alcance}</li>
            <li><strong>Rol:</strong> ${unidad.specs.rol}</li>
        </ul>
    `;
    modal.style.display = "block";
}