// Configuración de fecha objetivo (ejemplo: aniversario)
const targetDate = new Date("2026-12-25T00:00:00"); // Cambia esta fecha

function updateCountdown() {
  const now = new Date();
  let diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById("time").innerHTML = "¡Ya llegó el gran día! 💖";
    return;
  }

  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  diff -= years * (1000 * 60 * 60 * 24 * 365);

  const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
  diff -= months * (1000 * 60 * 60 * 24 * 30);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff -= days * (1000 * 60 * 60 * 24);

  const hours = Math.floor(diff / (1000 * 60 * 60));
  diff -= hours * (1000 * 60 * 60);

  const seconds = Math.floor(diff / 1000);

  document.getElementById("years").textContent = years;
  document.getElementById("months").textContent = months;
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("seconds").textContent = seconds;
}

setInterval(updateCountdown, 1000);

// Botón de video
document.getElementById("videoBtn").addEventListener("click", () => {
  window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank"); // Cambia la URL
});

// Recuerdos
const recuerdos = {
  "2026-02-14": {
    img: "https://via.placeholder.com/300x200.png?text=San+Valentín",
    texto: "Nuestro primer San Valentín juntos 💕"
  },
  "2026-12-25": {
    img: "https://via.placeholder.com/300x200.png?text=Navidad",
    texto: "Navidad mágica contigo 🎄"
  }
};

document.getElementById("recuerdosBtn").addEventListener("click", () => {
  document.getElementById("recuerdos").classList.toggle("hidden");
});

document.getElementById("fechaRecuerdo").addEventListener("change", (e) => {
  const fecha = e.target.value;
  const contenido = document.getElementById("contenidoRecuerdo");
  contenido.innerHTML = "";

  if (recuerdos[fecha]) {
    const { img, texto } = recuerdos[fecha];
    contenido.innerHTML = `<img src="${img}" alt="Recuerdo"><p>${texto}</p>`;
  } else {
    contenido.innerHTML = "<p>No hay recuerdos guardados para esta fecha 💔</p>";
  }
});
