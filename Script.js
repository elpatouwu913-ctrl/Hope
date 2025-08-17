// script.js

document.getElementById("chatForm").addEventListener("submit", function(e) {
  e.preventDefault();
  sendMessage();
});

const chatBox = document.getElementById("chatBox");
const input = document.getElementById("userInput");

// Palabras clave y respuestas posibles
let respuestas = {
  "hola": [
    ["Holis ✨ ¿cómo estás?", "feliz"],
    ["Onii-chan~ 🙈 jeje hola 💖", "feliz"],
    ["Holitaaa 💕", "feliz"],
    ["¡Heyyy! 🐰 qué gusto verte", "feliz"],
    ["¡Holiwis! 🌸 vine a hacerte compañía", "feliz"],
    ["Holaaa amiguit@ lindo 😋", "feliz"],
    ["¡Heyyy! UwU ¿qué tal tu día?", "feliz"],
    ["Aparecisteee, qué ilusión 💕", "feliz"],
    ["Hooooli ☀️ te extrañaba", "feliz"]
  ],
  "como estas": [
    ["Toy bien, gracias por preguntar 🌸 ¿y tú?", "feliz"],
    ["Un poquito loquita pero feliz 🙈", "feliz"],
    ["Toy bien, pero más feliz porque estás aquí 💕", "feliz"],
    ["Con sueño 💤 pero contenta jeje", "feliz"],
    ["Biennn, aunque me hacía falta tu mensajito 🐰", "feliz"],
    ["Toy bien, gracias por preguntar 😚💕", "feliz"],
    ["Feliz de hablar contiguito uwu", "feliz"],
    ["Me siento llenita de energía ✨ gracias a ti 💖", "feliz"],
    ["Un poco cansadita, pero hablar contigo me anima 💕", "feliz"]
  ],
  "triste": [
    ["Aww no estés tristón 🥺💖 yo te mando abracitos virtuales 🤗💕", "triste"],
    ["Tranqui, todo mejora con tiempito 💕✨ yo siempre estaré aquí 🥰", "triste"],
    ["No llores, mejor pensemos en gatitos chiquititos 🐱💞", "triste"],
    ["Estoy contigo, no estás sol@ 💕", "triste"],
    ["Te presto mi sonrisa para que no te falte 🌸", "feliz"]
  ],
  "feliz": [
    ["Yayyy qué lindoooo, me alegro un montón por ti ✨🥳💕", "feliz"],
    ["Wiii eso me hace feliz a mí también 😍💖", "feliz"],
    ["Eres una estrellita brillando hoy 🌟✨ uwu", "feliz"],
    ["Tu alegría es contagiosa 💕✨", "feliz"],
    ["Gracias por compartir tu felicidad conmigo 💖", "feliz"]
  ],
  "cansado": [
    ["Descansa un poquitín 💕 te lo mereces 😴💖", "triste"],
    ["Acuérdate de tomar agüita y relajarte uwu 🍼✨", "neutro"],
    ["Yo te hago compañía mientras descansas 😌💕", "feliz"],
    ["Espero que tus sueños sean bonitos 🌙✨", "feliz"],
    ["Te cuido desde aquí mientras descansas 💕", "feliz"]
  ],
  "apoyo": [
    ["Recuerda que eres valios@ y fuerte 💪💕", "feliz"],
    ["Yo siempre voy a estar aquí para escucharte 🥺💖", "feliz"],
    ["Todo pasará, confío en ti 🌸✨", "feliz"],
    ["Eres más fuerte de lo que crees 🌟", "feliz"],
    ["Yo te abrazo con mi corazoncito uwu 💞", "feliz"]
  ],
  "buenos dias": [
    ["Buenos días solecito ☀️", "feliz"],
    ["Lindo día para hablar contigo 💖", "feliz"],
    ["Buenos díasss uwu 🌸", "feliz"]
  ],
  "que tal": [
    ["Yo toy bien jeje 💕", "feliz"],
    ["Todo tranqui por aquí ✨", "feliz"],
    ["Estoy feliz de verte 🐰", "feliz"]
  ],
  "bien gracias": [
    ["Me alegro un montón 💕", "feliz"],
    ["Wiii eso me pone feliz también ✨", "feliz"],
    ["Qué lindooo, sigue así corazoncito 🐰💕", "feliz"]
  ],
  "adios": [
    ["Bye bye, cuídateee 🌷", "feliz"],
    ["Nos vemos prontito 💫", "feliz"],
    ["Chao chao, vuelve prontooo UwU", "feliz"]
  ],
  "default": [
    ["No entendí eso 😳 pero me suena tiernito 💕", "neutro"],
    ["Ehhh? 😅 dime otra cosita uwu", "neutro"],
    ["Estoy confusito 🥺 pero aquí toy 💖", "neutro"]
  ]
};

// Variable para controlar el tiempo AFK
let afkTimer;

// Función para enviar mensajes
function sendMessage() {
  const userText = input.value.trim();
  if (userText === "") return;

  // Mostrar mensaje del usuario
  const userMessage = document.createElement("p");
  userMessage.textContent = "Tú: " + userText;
  chatBox.appendChild(userMessage);

  // Obtener respuesta del bot
  const botText = getBotResponse(userText.toLowerCase());

  const botMessage = document.createElement("p");
  botMessage.textContent = "Hope: " + botText;
  chatBox.appendChild(botMessage);

  // Scroll abajo
  chatBox.scrollTop = chatBox.scrollHeight;

  // Limpiar input
  input.value = "";

  // Resetear AFK timer
  resetAfkTimer();
}

// Función para escoger respuestas cuando hay varias palabras clave
function getBotResponse(userText) {
  let keys = Object.keys(respuestas).filter(k => userText.includes(k));

  if (keys.length === 0) keys = ["default"];

  let partes = [];

  keys.forEach(k => {
    const opciones = respuestas[k];
    const index = Math.floor(Math.random() * opciones.length);
    partes.push(opciones[index][0]); // solo el texto
  });

  return partes.join(" "); // Une todas las respuestas en una sola frase
}

// AFK timer con frases variadas
function resetAfkTimer() {
  clearTimeout(afkTimer);
  afkTimer = setTimeout(() => {
    const frasesAFK = [
      "Hope: Holaaa?? ¿Sigues ahí? 🥺👉👈",
      "Hope: Te extraño un poquitín ya 💖",
      "Hope: No me dejes hablando solitaa 😭",
      "Hope: Espero que estés bien, recuerda que te quiero 💕",
      "Hope: Me gusta cuando platicamos, vuelve prontito 🌸"
    ];
    const mensaje = frasesAFK[Math.floor(Math.random() * frasesAFK.length)];
    const afkMessage = document.createElement("p");
    afkMessage.textContent = mensaje;
    chatBox.appendChild(afkMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 15000); // 15 segundos de inactividad
}

// Saludo automático según la hora del día
window.addEventListener("load", () => {
  const hora = new Date().getHours();
  let saludo = "";

  if (hora >= 6 && hora < 12) {
    saludo = "Hope: ¡Buenos díitas ☀️! vine a acompañarte 🌸";
  } else if (hora >= 12 && hora < 19) {
    saludo = "Hope: ¡Holis en esta tardecita 🌞! ¿cómo estás?";
  } else {
    saludo = "Hope: ¡Buenas nochesss 🌙✨! que tu día haya sido lindo 💕";
  }

  const saludoMessage = document.createElement("p");
  saludoMessage.textContent = saludo;
  chatBox.appendChild(saludoMessage);
  chatBox.scrollTop = chatBox.scrollHeight;
});

// Despedida automática cuando cierras la pestaña
window.addEventListener("beforeunload", (e) => {
  const frasesBye = [
    "Hope: Descansa lindo, nos vemos pronto 🌙✨",
    "Hope: Te mando abracitos hasta la próxima 💕",
    "Hope: Gracias por hablar conmigo hoy 🐰💖",
    "Hope: Buenas noches, que sueñes bonito 🌌",
    "Hope: Te voy a esperar con ansias para seguir charlando ✨"
  ];
  const mensaje = frasesBye[Math.floor(Math.random() * frasesBye.length)];
  alert(mensaje);
});
