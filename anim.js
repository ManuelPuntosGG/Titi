// Sincronizar las letras con la canción
const audio = document.querySelector("audio");
const lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
const lyricsData = [
  { text: "At the time", time: 15 },
  { text: "The whisper of birds", time: 18 },
  { text: "Lonely before the sun cried", time: 27 },
  { text: "Fell from the sky", time: 32 },
  { text: "Like water drops", time: 33 },
  { text: "Where I'm now? I don't know why", time: 41 },
  { text: "Nice butterflies in my hands", time: 47 },
  { text: "Too much light for twilight", time: 54 },
  { text: "In the mood for the flowers love", time: 59 },
  { text: "That vision", time: 67 },
  { text: "Really strong, blew my mind", time: 72 },
  { text: "Silence Let me see what it was", time: 78 },
  { text: "I only want to live in clouds", time: 83 },
  { text: "Where I'm now? I don't know why", time: 91 },
  { text: "Nice butterflies in my hands", time: 97 },
  { text: "Too much light for twilight", time: 104 },
  { text: "In the mood for the flowers love", time: 108 },
  { text: "At the time", time: 144 },
  { text: "The whisper of birds", time: 148 },
  { text: "Lonely before the sun cried", time: 153 },
  { text: "Fell from the sky", time: 158 },
  { text: "Like water drops", time: 164 },
  { text: "Where I'm now? I don't know why", time: 169 },
  { text: "Nice butterflies in my hands", time: 176 },
  { text: "Too much light for twilight", time: 183 },
  { text: "In the mood for the flowers", time: 188 },
  { text: "Love.", time: 194 }, // Ajustado el tiempo que decía 140 (parecía un error tipográfico)
];

// Animar las letras usando el evento timeupdate (mucho más preciso que setInterval)
function updateLyrics() {
  let time = audio.currentTime;
  let currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    let fadeInDuration = 0.5; // Suavizamos un poco más la transición
    let opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

// Escuchar el tiempo del audio en lugar de usar un temporizador fijo
audio.addEventListener("timeupdate", updateLyrics);

// Función para ocultar el título suavemente
function ocultarTitulo() {
  const titulo = document.querySelector(".titulo");
  if (titulo) {
    titulo.style.animation = "fadeOut 3s ease-in-out forwards";
    setTimeout(() => {
      titulo.style.display = "none";
    }, 3000);
  }
}

// Llama a la función después de 216 segundos
setTimeout(ocultarTitulo, 216000);