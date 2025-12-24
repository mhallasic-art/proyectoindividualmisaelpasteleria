document.addEventListener("DOMContentLoaded", () => {

  const boton = document.getElementById("btnTiempo");
  const resultado = document.getElementById("resultadoTiempo");
  const auto = document.getElementById("tiempoAuto");
  const caminando = document.getElementById("tiempoCaminando");
  const lugar = document.getElementById("lugar");

  // Tiempos aproximados desde zonas de Arequipa
  const tiempos = {
    cercado: { auto: 20},
    yanahuara: { auto: 25},
    cayma: { auto: 30},
    paucarpata: { auto: 10},
    mariano_melgar: { auto: 12},
    socabaya: { auto: 20},
    miraflores: { auto: 15},
    pachacutec: { auto: 40},
    bustamente_y_rivero: { auto: 12},
    miguel_grau: { auto: 8}
  };

  boton.addEventListener("click", () => {

    if (lugar.value === "") {
      alert("Por favor, seleccione un lugar de Arequipa");
      return;
    }

    const tiempo = tiempos[lugar.value];

    auto.textContent = `🚙 En auto: aproximadamente ${tiempo.auto} minutos.`;
    resultado.style.display = "block";
  });

});