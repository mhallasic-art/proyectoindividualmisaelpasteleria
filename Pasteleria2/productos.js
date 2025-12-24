document.addEventListener("DOMContentLoaded", () => {

  const botones = document.querySelectorAll(".btn-comprar");

  const resumen = document.getElementById("resumenCompra");
  const textoPastel = document.getElementById("textoPastel");
  const precioPastel = document.getElementById("precioPastel");
  const imgResumen = document.getElementById("imgResumen");

  const btnRecojo = document.getElementById("btnRecojo");
  const btnDelivery = document.getElementById("btnDelivery");
  const textoPago = document.getElementById("textoPago");

  let precioBase = 0;

  botones.forEach(boton => {
    boton.addEventListener("click", () => {

      const producto = boton.closest(".producto");

      const nombre = producto.dataset.nombre;
      precioBase = Number(producto.dataset.precio);
      const imagen = producto.querySelector("img").src;

      textoPastel.textContent = nombre;
      precioPastel.textContent = `Precio: S/${precioBase}.00`;
      imgResumen.src = imagen;

      textoPago.textContent = "";
      resumen.style.display = "block";
      resumen.scrollIntoView({ behavior: "smooth" });
    });
  });

  btnRecojo.addEventListener("click", () => {
    textoPago.textContent = `Total a pagar (Recojo en tienda): S/${precioBase}.00`;
  });

  btnDelivery.addEventListener("click", () => {
    const delivery = 10;
    const total = precioBase + delivery;
    textoPago.textContent =
      `Total a pagar (Delivery): S/${total}.00 (incluye S/10.00 de envío)`;
  });

});