const paises = [
  {
    id: "usa",
    nombre: "Estados Unidos",
    bandera: "../img/Banderas/usa.png",
  },
  {
    id: "rusia",
    nombre: "Rusia",
    bandera: "../img/Banderas/rusia.png",
  },
  {
    id: "china",
    nombre: "China",
    bandera: "../img/Banderas/china.png",
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("lista-paises");

  paises.forEach(pais => {
    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta-pais";
    tarjeta.innerHTML = `
      <div class="bandera-contenedor">
        <img src="${pais.bandera}" alt="Bandera ${pais.nombre}">
      </div>
      <h3>${pais.nombre}</h3>
      <a href="pais.html?pais=${pais.id}">Ver fuerza militar</a>
    `;
    contenedor.appendChild(tarjeta);
  });
});