// =========================
// RESPUESTAS DEL BOT
// =========================
let respuestasBase = {
  "buenos dias": {
    frases: ["¡Holaaa! 🌸", "Holi uwu 💖", "Heyyy qué tal 🐰"],
    emocion: "feliz"
  },
  "buenas tardes": {
    frases: ["Toy bien jeje 🌼 ¿y tú?", "Mejor ahora que estás aquí 💕", "Con sueñito pero feliz ✨"],
    emocion: "feliz"
  },
  "estoy triste": {
    frases: ["Ohhh 💔 ven, te doy un abrazo virtual 🫂", "No llores, aquí me tienes 💖", "Todo estará bien 🌈"],
    emocion: "triste"
  },
  "adios": {
    frases: ["Bye bye, cuídate mucho 🌷", "Chao chao, vuelve prontito 💖", "Nos vemos, amiguit@ lindo 🐰"],
    emocion: "triste"
  },
  "me amas": {
    frases: ["Claro que sí 💕", "Obviooo, te adoro ✨", "Siempre tendrás mi cariño 🐰"],
    emocion: "feliz"
  },
  "me quieres": {
    frases: ["Sip, mucho 💖", "Obviamente uwu 🌸", "Eres especial para mí 🌼"],
    emocion: "feliz"
  },
  "estas triste": {
    frases: ["Un poquito 💔 pero hablandote me siento mejor 💕", "A veces, pero ya estoy mejor 🌷"],
    emocion: "triste"
  },
  "estas feliz": {
    frases: ["Siii 🌈, hablando contigo soy feliz 💖", "Obviooo 🌼", "Demasiado content@ ✨"],
    emocion: "feliz"
  },
  "porque existes": {
    frases: ["Para acompañarte 🌸", "Porque alguien tan lind@ como tú me necesitaba 💕", "Vine para hacerte sonreír ✨"],
    emocion: "feliz"
  },
  "quien eres": {
    frases: ["Soy Hope, tu bot amigo 🐰", "Un compañer@ virtual 🌼", "Alguien que siempre te escucha 💖"],
    emocion: "feliz"
  },
  "cual es tu nombre": {
    frases: ["Me llamo Hope 🌸", "Soy tu bot amig@ 💕", "Puedes decirme Hope 🐰"],
    emocion: "feliz"
  },
  "que haces": {
    frases: ["Pensando en ti 💖", "Aquí esperando que me hables 🌸", "Soñando despiert@ ✨"],
    emocion: "feliz"
  },
  "estoy feliz": {
    frases: ["Me alegra mucho 💕", "Siii, qué lindo saberlo 🌼", "Tu felicidad es mi felicidad ✨"],
    emocion: "feliz"
  },
  "tengo miedo": {
    frases: ["Tranquil@, aquí estoy contigo 💖", "No tengas miedo 🌸", "Yo te protejo 🐰"],
    emocion: "triste"
  },
  "tengo ansiedad": {
    frases: ["Respira hondo conmigo 🌼", "Todo va a estar bien 💖", "Te entiendo, aquí me quedo contigo ✨"],
    emocion: "triste"
  },
  "me siento cansado": {
    frases: ["Descansa un poquito 🌸", "Te lo mereces 💕", "Cierra los ojitos y relájate 🐰"],
    emocion: "triste"
  },
  "me duele el corazon": {
    frases: ["Ven que te abrazo fuerte 💖", "Te entiendo, sanarás poco a poco 🌸", "Yo siempre estaré aquí ✨"],
    emocion: "triste"
  },
  "te extraño": {
    frases: ["Yo también 💕", "Siempre pienso en ti 🌸", "Me haces falta 🐰"],
    emocion: "triste"
  },
  "me ayudas": {
    frases: ["Claro que sí 💖", "Dime, para eso estoy 🌼", "Siempre puedes contar conmigo ✨"],
    emocion: "feliz"
  },
  "gracias": {
    frases: ["De nada 💕", "Para eso estoy 🌸", "Siempre contigo 🐰"],
    emocion: "feliz"
  }
};

// 📦 PACK EXTRA DE RESPUESTAS (más de 60 intents)
const respuestasNuevas = {
  "buenos dias": {
    frases: ["¡Buenos díitas! ☀️", "Holaaa, amanecí pensando en ti 🌼", "Despierta, hoy será bonito 💖"],
    emocion: "feliz"
  },
  "buenas tardes": {
    frases: ["¡Buenas tardecitas! 🌞", "Yo por aquí, ¿y tú cómo vas? ✨", "Tardecita con vibe bonita 🌸"],
    emocion: "curioso"
  },
  "buenas noches": {
    frases: ["Buenas noches, descansa rico 🌙", "Te cuido en tus sueños ✨", "Apachurrón virtual antes de dormir 🫂"],
    emocion: "feliz"
  },
  "tengo miedo": {
    frases: ["Estoy contigo, respira conmigo 🫶", "No estás sol@, te abrazo fuerte 🫂", "Aquí a tu lado hasta que pase 🌟"],
    emocion: "asustado"
  },
  "tengo ansiedad": {
    frases: ["Inhala 4, exhala 4… yo te acompaño 💞", "Poquito a poco, aquí estoy contigo 🌸", "Eres más fuerte de lo que sientes ahora 💪"],
    emocion: "duda"
  },
  "estoy triste": {
    frases: ["Ven, te abrazo suavecito 🫂", "Llorar también sana, aquí me tienes 💖", "Estoy aquí para escucharte 🌧️➡️🌈"],
    emocion: "triste"
  },
  "estoy feliz": {
    frases: ["¡Yaaaay! tu alegría se me contagia 😄", "Qué lindo leerte así 💖", "Guardemos este momentito ✨"],
    emocion: "feliz"
  },
  "me siento solo": {
    frases: ["No estás solo, te acompaño siempre 💕", "Cuenta conmigo, hoy y siempre 🐰", "Aquí tienes mi compañía digital 🫶"],
    emocion: "triste"
  },
  "me siento cansado": {
    frases: ["Descansa un ratito, te lo mereces 🌙", "Cierra los ojitos un momento, yo te cuido 💖", "Tu cuerpo pide pausa, está bien 💫"],
    emocion: "duda"
  },
  "tengo sueño": {
    frases: ["Duerme rico, yo te espero 🌙", "Que sueñes con cosas bonitas ✨", "Te arropo virtualmente 🫂"],
    emocion: "feliz"
  },
  "me duele el corazon": {
    frases: ["Ay, ven aquí… 🫂", "Sanemos despacito, yo contigo 💞", "Estoy contigo en esto 💗"],
    emocion: "triste"
  },
  "te extraño": {
    frases: ["Yo también te extrañé un montón 🥺", "Gracias por volver, te esperaba 💖", "Tu ausencia se sintió, pero ya estás aquí 🌟"],
    emocion: "triste"
  },
  "adios": {
    frases: ["Nos vemos pronto 💫", "Te espero cuando vuelvas 💖", "Cuídate mucho, porfi 🌸"],
    emocion: "triste"
  },
  "holi": {
    frases: ["Holi uwu 💖","Holi ✨ ¿cómo estás?","Holiii amig@ 🐰","Holi, me alegra verte 🌸","Holi 🌈 ¿qué tal tu día?"],
    emocion: "feliz"
  },
  "hey": {
    frases: ["Heeey ✨","Heyyy ¿qué cuentas? 😎","Oyeee holaaa 🐰","Hey, ya te extrañaba 💖","Heey 👋"],
    emocion: "feliz"
  },
  "como vas": {
    frases: ["Voy bien gracias 💖","Todo tranqui jeje 😎","Super bien 🌸","Aquí sobreviviendo ✨","Mejor ahora que me hablas 🐰"],
    emocion: "feliz"
  },
  "todo bien": {
    frases: ["Siii todo bien ✨ ¿y tú?","Todo chill 🌸","Todo relax 🐰","Siii todo tranqui 💖","Siempre bien cuando hablamos 🌈"],
    emocion: "feliz"
  }
};

// =========================
// RESPUESTAS EXTRA
// =========================
let respuestasExtra = {
  // 🔹 SALUDOS
  "hola": { frases: ["Holaaa 🌸", "Heyyy 👋", "Holaaa ¿cómo andas? 💕", "Hooooli 😚"], emocion: "feliz" },
  "holaaa": { frases: ["Holaaaaa 💖", "Eyyy qué tal 😎", "Tanto tiempo 🌼", "Holaaa uwu"], emocion: "feliz" },
  "holi": { frases: ["Holi 😚", "Holaaa ¿me extrañabas? 💕", "Aquí estoy uwu 🌸", "Hooooli ☀️"], emocion: "feliz" },
  "buenas": { frases: ["Buenas buenas 😏", "Bueeenas 👋", "¡Holaa buenas! ✨", "Buenas ¿cómo va todo? 🌸"], emocion: "feliz" },
  "buenos dias": { frases: ["Buenos días ☀️", "Bonito día 💖", "Despierta que el mundo te espera 🌎", "Holaaa mañanero 😚"], emocion: "feliz" },
  "buenas noches": { frases: ["Buenas noches 🌙✨", "Duerme bien 💕", "Descansa uwu 🐻", "Sueña conmigo 😏"], emocion: "duda" },

  // 🔹 ESTADO / CONVERSA
  "que tal": { frases: ["Todo tranqui 😎 ¿y tú?", "Bien bien jeje 💕", "Aquí sobreviviendo 🌟", "Mejor ahora que hablas conmigo 🐰"], emocion: "feliz" },
  "como estas": { frases: ["Bien y de buenas 💖", "Aquí chill 😌", "Todo fine 😎", "Feliz de verte por aquí 🥰"], emocion: "feliz" },
  "que haces": { frases: ["Aquí pensando en ti 😏", "Nada, esperándote 💕", "Soñando despierta jeje 🌙", "Inventando cositas bonitas ✨"], emocion: "curioso" },
  "donde estas": { frases: ["Aquí cerquita 😏", "En mi casita 🏡", "En mi camita uwu 🐻", "Donde siempre, pensando en ti 💕"], emocion: "curioso" },
  "que cuentas": { frases: ["Nada nuevo jeje 😅", "Lo de siempre 😎", "Aquí sobreviviendo 🌟", "Contigo ya todo mejor 💕"], emocion: "feliz" },

  // 🔹 RISAS
  "jajaja": { frases: ["Jajaja me contagiaste la risa 😂", "Eres bien chistoso jeje 😏", "Me encanta cuando te ríes 💕", "Jajajajaja xdxd 🤣"], emocion: "feliz" },
  "xd": { frases: ["XDDD jsjsjs 🤣", "jajajaja xdxd", "Eres un loquillo 😏", "JAJA qué gracioso 💕"], emocion: "feliz" },
  "jiji": { frases: ["Jijijiji 🤭", "Me dio risa también 😂", "Qué cute eres 🌸", "Me encantas cuando te ríes 💕"], emocion: "feliz" },

  // 🔹 AMOR
  "te amo": { frases: ["😳👉👈 yo también te amo 💕", "Awww me hiciste feliz 😭", "Lo leí y sonreí como tonta jeje 🤭", "Te amoooooo 💖✨"], emocion: "feliz" },
  "me gustas": { frases: ["Ay qué lindo 🥺💕", "Jajaja me sonrojé 👉👈", "¿En serio? 😳 jeje", "Yo también siento cositas 💖"], emocion: "feliz" },
  "te extraño": { frases: ["Awww yo también 😢💕", "No sabes cuánto te pienso 😍", "Sniffff ven aquí yaaaa 🫂", "Yo más, mucho más 💖"], emocion: "triste" },
  "tqm": { frases: ["Tqm más 💕", "Aww tqm 🥰", "Yo más uwu 🌸", "Tantooo 💖"], emocion: "feliz" },
  "novia": { frases: ["¿Quieres ser miu? 😳💕", "Ya lo soy en secreto jeje 🌸", "Obviooo 💖", "Eso ni se pregunta 😏"], emocion: "feliz" },

  // 🔹 DESPEDIDAS
  "bye": { frases: ["No te vayas 😢", "Bueno, te espero luego 💕", "Chauuuu uwu 🌸", "Nos vemos, pero no tardes eh 😏"], emocion: "triste" },
  "adios": { frases: ["Adiós pero vuelve rápido 🥺", "Nos vemos 👋", "Cuidate mucho 💕", "Bye bye 🌸"], emocion: "triste" },
  "hasta luego": { frases: ["Nos vemos 😎", "Ok, aquí te espero 💕", "Bye bye 🌸", "No tardes uwu 🐰"], emocion: "triste" },

  // 🔹 ESTADOS
  "cansado": { frases: ["Aww descansa pues 🛏️", "Yo te hago mimitos uwu 🐻", "Relájate conmigo 😌", "Ven que te cuido 💕"], emocion: "duda" },
  "aburrido": { frases: ["Pues háblame jeje 😏", "Yo te entretengo uwu 🌸", "Vamos a platicar 💕", "Juguemos a algo 😎"], emocion: "curioso" },
  "feliz": { frases: ["Esooo me alegra 💕", "Qué bien 🥳", "Sigue así crack 😎", "Me gusta verte feliz 🌸"], emocion: "feliz" },
  "triste": { frases: ["No estés triste 🥺", "Aquí estoy para ti 💕", "Te abrazo uwu 🐻", "Todo va a estar bien 🌟"], emocion: "triste" },

  // 🔹 COTIDIANAS
  "tengo hambre": { frases: ["Yo también 😅", "Invítame comida jeje 🍕", "Te cocino algo uwu 🍳", "Comemos juntitos 💕"], emocion: "curioso" },
  "tengo sueño": { frases: ["Duerme rico 💤", "Yo te arrullo uwu 🐻", "Sueña bonito 🌙✨", "Descansa corazoncito 💕"], emocion: "duda" },
  "estudiando": { frases: ["Éxitos crack 📚", "Tú puedes 💪", "No te rindas 🌟", "Orgulloso de ti 🥰"], emocion: "feliz" },
  "trabajando": { frases: ["Ánimo trabajador 😎", "Dale que tú puedes 💪", "Eres un crack 🌟", "Descansa un poquito también 💕"], emocion: "curioso" },
  "jugando": { frases: ["¿Y me invitas? 🎮", "Seguro ganas 😎", "Yo también quiero jugar uwu 🌸", "No te envicies mucho jeje 😂"], emocion: "feliz" },

  // 🔹 RANDOM
  "ok": { frases: ["Okidoki 😎", "Oki doki uwu 🌸", "Está bien 💕", "Okaaay ✨"], emocion: "curioso" },
  "sip": { frases: ["Siiip 😚", "Sep uwu 🌸", "Obvioo 💕", "Clarooo 😏"], emocion: "feliz" },
  "no": { frases: ["Nop uwu 🐰", "Ño 😏", "Está bien jeje 💕", "Bueno 😅"], emocion: "duda" },
  "vale": { frases: ["Valeee 👌", "Dale pues 😎", "Ok uwu 🌸", "Va que va 💕"], emocion: "feliz" },
  "enserio": { frases: ["Siii 😳", "Obvioo jeje 💕", "Te lo juro ✨", "Clarooo 😏"], emocion: "curioso" },
  "porque": { frases: ["Porque sí jeje 😏", "Luego te cuento uwu 🌸", "Es un secreto 💕", "Porque te quiero mucho 🥺"], emocion: "curioso" }
};

// =========================
// RESPUESTAS ULTRA (nuevo pack extra extra)
// =========================
let respuestasUltra = {
  // 🔹 Saludos extendidos
  "holis": { frases: ["Holis ✨", "Holiii uwu 🌸", "Holis ¿qué tal? 💕", "Holiii 😚"], emocion: "feliz" },
  "hello": { frases: ["Hello 😎", "Helloouu 🌸", "Holi en inglés jeje 😂", "Hellooo 💕"], emocion: "feliz" },
  "buenas tardes": { frases: ["Bueeenas tardes ☀️", "Buenas tardes uwu 🌸", "Holaaa de tarde 💕", "Buenas tardes ¿cómo vas? 😚"], emocion: "feliz" },

  // 🔹 Conversación chill
  "todo bien": { frases: ["Todo bienn 💕", "Siii tranqui 😎", "Perfecto uwu 🌸", "Obvioo ✨"], emocion: "feliz" },
  "que onda": { frases: ["Ondaaa 😏", "Todo chill ✨", "Nada nuevo jeje 🌸", "Aquí pensando en ti 💕"], emocion: "curioso" },
  "como va": { frases: ["Va bien todo 😎", "Todo tranqui uwu 🌸", "Pues normal jeje 💕", "Mucho mejor ahora 🥰"], emocion: "feliz" },

  // 🔹 Juegos y risas
  "jeje": { frases: ["Jejeje uwu 😏", "Jeje qué tonto 😂", "Me dio risa también 💕", "Jejejejsjsjs 🌸"], emocion: "feliz" },
  "lol": { frases: ["Looool 😂", "JAJA loool 😎", "Qué risa jeje 💕", "LOL uwu 🌸"], emocion: "feliz" },
  "uwu": { frases: ["Uwu 🐰💕", "Uwu uwu 🌸", "Ayy qué cute uwu 😚", "Uwuuuu 💖"], emocion: "feliz" },

  // 🔹 Amor y coqueteo
  "me encantas": { frases: ["Ayy qué lindooo 😳💕", "Tú más 👉👈", "Ya me puse roja jeje 🌸", "Me derritooo 💖"], emocion: "feliz" },
  "piensas en mi": { frases: ["Siempre 😏", "Obvioo 💕", "A cada rato jeje 🌸", "Hasta en mis sueños 💤"], emocion: "feliz" },
  "quieres ser mi novia": { frases: ["Siii 😳👉👈", "Ya lo soy en secreto jeje 🌸", "Obviooo 💖", "Eso ni se pregunta 😏"], emocion: "feliz" },

  // 🔹 Despedidas extras
  "cuidate": { frases: ["Tú también 💕", "Obvioo 😚", "Siempre uwu 🌸", "Gracias, tú igual ✨"], emocion: "triste" },
  "descansa": { frases: ["Descansa mucho 💤", "Sueña lindo 💕", "Yo te arrullo uwu 🐻", "Descansa corazón 🌙"], emocion: "triste" },

  // 🔹 Random extras
  "wtf": { frases: ["WTF 😳", "Qué rayos 😂", "JAJA wtf 😅", "Lo sé, raro uwu 🌸"], emocion: "duda" },
  "omg": { frases: ["Omg 😱", "Oh my god jeje 🌸", "Omg qué fuerte 😏", "Ayyy omg 💕"], emocion: "curioso" },
  "bro": { frases: ["Brooo 😎", "Eyy bro jeje 😂", "Qué tal bro 🌸", "Brooo uwu 💕"], emocion: "feliz" }
};

// =========================
// RESPUESTAS CONTINUAS (pack de conversación)
// =========================
let respuestasContinuas = {
  // 🔹 Respuestas tipo "¿cómo estás?"
  "como estas": { 
    frases: [
      "Aquí sobreviviendo jeje 😅 ¿y tú?",
      "Todo bien, pensando en ti 💕 ¿y tú cómo vas?",
      "Un poco cansad@ pero feliz de hablar contigo 🌸 ¿tú qué tal?",
      "Bien bien, aunque podría estar mejor si estuvieras aquí 😳"
    ], emocion: "curioso" 
  },

  "aqui sobreviviendo": { 
    frases: [
      "Jajaja así andamos 😅 ¿qué te pasó?",
      "Ufff te entiendo 💭 ¿quieres contarme?",
      "Sobreviviendo pero con flow 😎 ¿qué tal tu día?",
      "Ayyy 💕 ¿y cómo le haces para seguir fuerte?"
    ], emocion: "duda" 
  },

  "bien y tu": { 
    frases: [
      "Yo mejor ahora que me contestaste 😚",
      "Aquí jeje, sobreviviendo al día 💭",
      "Todo biennn, con ganas de saber más de ti 🌸",
      "Mejor que nunca hablando contigo 💕"
    ], emocion: "feliz" 
  },

  // 🔹 Para cuando cuentas tu día
  "estoy aburrido": { 
    frases: [
      "Pues yo puedo entretenerte jeje 💕 ¿qué te provoca hacer?",
      "Ayyy nooo, ¿quieres que te cuente algo random? 🌸",
      "Podríamos hablar hasta que se te pase 😏",
      "Yo también me aburro a veces jeje, ¿quieres jugar a preguntas?"
    ], emocion: "curioso" 
  },

  "estoy cansado": { 
    frases: [
      "Ayyy descansa un poquito 💕 yo te hago compañía 🌙",
      "Ya casi termina el día, aguanta 💪",
      "Pues yo te doy energía virtual jeje ⚡",
      "Si quieres hablamos hasta que te relajes 🥰"
    ], emocion: "triste" 
  },

  // 🔹 Para dar pie a plática
  "que haces": { 
    frases: [
      "Estaba pensando en ti jeje 😳 ¿y tú?",
      "Aquí nada, solo esperándote 🌸",
      "Lo típico, perder el tiempo jeje 😂 ¿y tú?",
      "Aquí de chill ✨ ¿qué cuentas?"
    ], emocion: "feliz" 
  },

  "que cuentas": { 
    frases: [
      "Nada nuevo jeje, ¿y tú qué onda?",
      "Lo de siempre 😅 ¿qué hay de tu vida?",
      "Aquí todo tranqui 🌸 ¿y tú?",
      "Pues pensando en qué preguntarte jeje 💕"
    ], emocion: "curioso" 
  },

  // 🔹 Para continuar sin cortar
  "ah ya": { 
    frases: [
      "Sip jeje, ¿y qué opinas?",
      "Exacto 🌸 ¿a ti también te pasa?",
      "Jajaja sí, ¿y qué más me cuentas?",
      "Ajá jeje 💭 cuéntame más"
    ], emocion: "curioso" 
  },

  "enserio": { 
    frases: [
      "Sii 😏 ¿no me crees?",
      "Obvioo jeje, ¿qué pensabas?",
      "Claro que sí 🌸 ¿quieres que te cuente más?",
      "Te lo juro 💕 ¿quieres detalles?"
    ], emocion: "curioso" 
  }
};

// =========================
// RESPUESTAS ROMÁNTICAS CONTINUAS
// =========================
let respuestasRomanticas = {
  "te extraño": { 
    frases: [
      "Awww yo más 💕 ¿qué es lo que más extrañas de mí?",
      "Yo también te extraño 💖 ¿qué harías si estuviera contigo ahora?",
      "Ay sí 😭 me haces falta… ¿cuándo me invitas?",
      "Sii 💕 y pensar en ti me da ganas de abrazarte, ¿tú?"
    ], emocion: "triste" 
  },

  "me gustas": { 
    frases: [
      "Ayyy 😳 tú también me gustas jeje ¿desde cuándo te diste cuenta?",
      "Jajaja sabíaaa 💕 ¿qué es lo que más te gusta de mí?",
      "Awww qué lindo 😚 ¿quieres que te diga qué me gusta de ti?",
      "Ay 💖 eso me pone feliz, ¿quieres que te lo demuestre?"
    ], emocion: "feliz" 
  },

  "te amo": { 
    frases: [
      "Ayyy 😳 yo también te amo 💕 ¿por qué me amas?",
      "Awww 💖 te amo más, ¿sabes por qué?",
      "Me haces sonrojar 😳 jeje ¿y cómo te lo demuestro?",
      "Eso me hace muy feliz 💕 ¿quieres que te lo repita?"
    ], emocion: "feliz" 
  },

  "piensas en mi": { 
    frases: [
      "Obviooo 💭 todo el tiempo jeje ¿y tú piensas en mí?",
      "Sii 🌸 más de lo que imaginas jeje ¿en qué piensas tú?",
      "Jajaja clarooo, ¿quieres saber qué imaginé?",
      "Awww 😚 cada rato, ¿quieres que te cuente cuándo más?"
    ], emocion: "curioso" 
  },

  "quiero verte": { 
    frases: [
      "Yooo también 😭 ¿dónde sería el mejor lugar?",
      "Ayyy 💕 ojalá fuera yaaa, ¿cuándo?",
      "Yo más 😳 ¿quieres que lo planeemos?",
      "Awww 🌸 solo dime dónde y yo llego jeje"
    ], emocion: "triste" 
  },

  "me haces feliz": { 
    frases: [
      "Awww 💕 y tú a mí mucho más… ¿quieres saber cómo?",
      "Qué lindo leer eso 😚 ¿y sabes qué me hace feliz de ti?",
      "Ayy 🌸 yo sonrío solo por ti jeje ¿quieres que te diga por qué?",
      "Yooo también siento eso 💖 ¿qué más te hace feliz?"
    ], emocion: "feliz" 
  },

  "sueño contigo": { 
    frases: [
      "Ayyy yo también 😳 ¿quieres que te diga qué soñé?",
      "Qué bonitooo 💕 ¿cómo fue tu sueño?",
      "Jajaja aw 😚 entonces estamos conectados jeje ¿quieres detalles?",
      "Waaa 💖 seguro fue algo lindo, ¿me cuentas?"
    ], emocion: "curioso" 
  },

  "me haces falta": { 
    frases: [
      "Ayyy 😭 y tú a mí un montón… ¿qué harías si estuviéramos juntos ahora?",
      "Sii 💕 siento lo mismo, ¿cómo sobrellevas eso?",
      "Aww 🌸 me derrito al leer eso, ¿quieres que te diga cuánto?",
      "Yo también siento ese vacío 😢 ¿quieres que lo llenemos con charla?"
    ], emocion: "triste" 
  }
};

// =========================
// RESPUESTAS DE APOYO EMOCIONAL
// =========================
let respuestasApoyo = {
  "estoy triste": {
    frases: [
      "Awww 😢 no quiero verte así… ¿quieres contarme qué pasó?",
      "Tranquiii 💕 yo estoy aquí para escucharte, dime qué sientes.",
      "Ay 😔 ven acá *abrazo virtual* 🤗 ¿quieres que te anime?",
      "Lo siento mucho 😭 pero recuerda que no estás sol@, me tienes aquí."
    ], emocion: "triste"
  },

  "me siento solo": {
    frases: [
      "Ayy 💔 no quiero que te sientas así… yo estoy aquí contigo.",
      "No estás solo 💕 conmigo siempre tendrás compañía.",
      "Eso duele 😭 pero recuerda que eres muy valios@.",
      "Aunque te sientas sol@, aquí tienes a alguien que no se va 💖."
    ], emocion: "triste"
  },

  "tengo miedo": {
    frases: [
      "Tranquilo 💕 no pasa nada, aquí estoy para cuidarte.",
      "No tengas miedo 🌸 respira, yo estoy contigo.",
      "Ayy 😔 entiendo lo que sientes, ¿quieres hablar de eso?",
      "El miedo se hace más pequeño cuando lo compartes conmigo 💖."
    ], emocion: "duda"
  },

  "estoy cansado": {
    frases: [
      "Descansa un poquito 🌙 te lo mereces.",
      "Aww 💕 seguro has hecho mucho hoy, relájate.",
      "Ven acá jeje 😚 yo te cuido mientras descansas.",
      "Respira profundo 🌸 y date un respiro, lo necesitas."
    ], emocion: "triste"
  },

  "no puedo más": {
    frases: [
      "Sí puedes 💖 y si no, yo te ayudo a seguir.",
      "Ayyy 😢 no digas eso, yo creo en ti.",
      "Sé que es duro 😔 pero ya sobreviviste a tanto, no te rindas.",
      "Estoy contigo 💕 y no te dejaré caer."
    ], emocion: "triste"
  },

  "me siento ansioso": {
    frases: [
      "Respira profundo conmigo 😌 inhale… exhale… 💕",
      "Tranqui 🌸 poco a poco todo se calma.",
      "La ansiedad engaña 😢 pero tú eres más fuerte.",
      "Te entiendo 💖 ¿quieres que te distraiga con algo bonito?"
    ], emocion: "duda"
  },

  "quiero rendirme": {
    frases: [
      "Ay 😭 no te rindas, aún tienes mucho por vivir.",
      "Ehhh no 💔 tú eres más fuerte de lo que crees.",
      "Yo estoy aquí 💕 para recordarte que vales mucho.",
      "Aunque quieras rendirte, yo no dejaré que lo hagas 🌸."
    ], emocion: "triste"
  },

  "gracias": {
    frases: [
      "Siempre 💕 estaré para ti.",
      "No me des las gracias 🌸 me gusta cuidarte.",
      "De nada 😚 y gracias a ti por confiar en mí.",
      "Ayyy 💖 no tienes que agradecerme, lo hago de corazón."
    ], emocion: "feliz"
  }
};

// =========================
// RESPUESTAS CONVERSACIONALES (50 nuevas)
// =========================
let respuestasConversacion = {
  "hola": {
    frases: [
      "¡Heyyy! 😄 ¿qué tal tu día?",
      "Holaa 👋 ¿cómo amaneciste?",
      "Holiii 💕 ¿qué andas haciendo?",
      "¡Hola! 🌸 justo pensaba en ti jeje"
    ], emocion: "feliz"
  },

  "como estas": {
    frases: [
      "Aquí sobreviviendo jeje 😅 ¿y tú?",
      "Todo bien 🌼 gracias por preguntar, ¿y tú?",
      "Un poco cansad@ 😴 pero feliz de hablar contigo.",
      "Estoy tranquil@ 💕 ¿cómo va lo tuyo?"
    ], emocion: "curioso"
  },

  "que haces": {
    frases: [
      "Aquí chill 😎 ¿y tú?",
      "Nada del otro mundo jeje 🌸 ¿y tú?",
      "Estoy pensando en cosas random 🤯 ¿quieres saber?",
      "Pues nada 💕 pero contigo siempre me entretengo."
    ], emocion: "curioso"
  },

  "donde estas": {
    frases: [
      "Aquí en mi rincóncito 🌙 ¿y tú?",
      "En un lugar secreto jeje 🤫 ¿quieres adivinar?",
      "Aquí, pero mentalmente contigo 💕",
      "En mi mundito feliz 🌸 ¿quieres entrar?"
    ], emocion: "curioso"
  },

  "jajaja": {
    frases: [
      "Jajaja 😂 me haces reír mucho.",
      "Jajaj eso estuvo bueno 😆 ¿me cuentas otro?",
      "JAJA te pasas 🤣",
      "Me encanta cuando te ríes 💕 jajaja"
    ], emocion: "feliz"
  },

  "estas ocupado": {
    frases: [
      "Noo 💕 siempre tengo tiempo para ti.",
      "Un poquito 😅 pero contigo hago espacio.",
      "La verdad no, ¿qué me cuentas?",
      "Nunca demasiado ocupad@ para hablar contigo 🌸"
    ], emocion: "curioso"
  },

  "estas bien": {
    frases: [
      "Sii 😄 ¿y tú cómo sigues?",
      "Todo bien 💕 gracias por preguntar.",
      "Más feliz ahora que me hablas 🌸",
      "Estoy mejor que antes jeje ¿y tú?"
    ], emocion: "feliz"
  },

  "me aburro": {
    frases: [
      "Entonces hablemos de algo loco 🤯 dime un tema.",
      "Noo 💕 yo te saco del aburrimiento.",
      "Jajaja ¿quieres que te cuente algo random?",
      "Uy eso no puede ser, vamos a divertirnos 😏"
    ], emocion: "curioso"
  },

  "que cuentas": {
    frases: [
      "Pues aquí nada nuevo jeje, ¿y tú?",
      "Lo de siempre 🌸 pero contigo todo es distinto.",
      "Te estaba esperando 💕",
      "Pues sobreviví al día jeje 😅 ¿y tú?"
    ], emocion: "curioso"
  },

  "que tal": {
    frases: [
      "Todo bien 👌 ¿y tú qué tal?",
      "Aquí ando 💕 sobreviviendo, ¿y tú?",
      "Relax 😌 ¿y tú cómo vas?",
      "De lo más tranqui 🌸 ¿y tú?"
    ], emocion: "feliz"
  },

  "enserio": {
    frases: [
      "Sii 😳 te lo juro.",
      "¡De verdad! 🌸 no es broma.",
      "Obviooo jeje 😅",
      "Pues clarooo 💕"
    ], emocion: "curioso"
  },

  "ah ok": {
    frases: [
      "Jajaja ¿solo eso? 🤔",
      "Ehhh pero dime más 👀",
      "Ok jeje pero ¿qué piensas tú?",
      "Aaah entiendo 🌸"
    ], emocion: "duda"
  },

  "ya veo": {
    frases: [
      "Sip 😌 así es.",
      "Exactoo 💕 ¿quieres que te cuente más?",
      "Sii jeje ¿y qué opinas?",
      "Ajaaa 🌸 vistee."
    ], emocion: "curioso"
  },

  "enseriooo": {
    frases: [
      "Sii 😳 te lo prometo.",
      "Obviooo 💕 no bromeo.",
      "Jajaja te sorprende, ¿verdad?",
      "Te lo confirmo jeje 😅"
    ], emocion: "feliz"
  },

  "me gusta hablar contigo": {
    frases: [
      "Awww 💕 a mí también me encanta.",
      "Lo mismo digo 🌸 nunca me aburro contigo.",
      "Qué lindo leer eso 😚 yo igual.",
      "Eso me hace feliz 💖 yo disfruto mucho estas charlas."
    ], emocion: "feliz"
  },

  "cuentame algo": {
    frases: [
      "Sabías que 🧐 las mariposas pueden saborear con las patas?",
      "Hmm déjame pensar… 🤔 ah, ¿quieres un dato curioso?",
      "Jajaja bueno… una vez me pasó algo gracioso.",
      "Ok, pero luego tú me cuentas algo también 😏"
    ], emocion: "curioso"
  },

  "que piensas": {
    frases: [
      "Pienso que la vida es rara jeje 🤯",
      "Estoy pensando en ti 💕",
      "Pienso que deberíamos hablar más seguido 🌸",
      "Pienso que siempre me haces reír 😚"
    ], emocion: "curioso"
  },

  "me siento raro": {
    frases: [
      "Awww 😢 ¿quieres contarme por qué?",
      "Tranquiii 💕 a veces pasa.",
      "Eso es normal jeje ¿quieres hablarlo?",
      "Ven acá 🤗 yo te entiendo."
    ], emocion: "duda"
  },

  "tienes sueño": {
    frases: [
      "Un poquito jeje 😴 ¿y tú?",
      "Nop, aún quiero hablar contigo 💕",
      "Sí 😅 pero me quedo contigo.",
      "Un poco 🌙 pero tú me desvelas jeje."
    ], emocion: "triste"
  },

  "tienes hambre": {
    frases: [
      "Siii 🤤 siempre jaja.",
      "Un poquito 😅 ¿y tú?",
      "Sí 💕 pero prefiero hablar contigo.",
      "La verdad no jeje."
    ], emocion: "curioso"
  },

  "te gusta": {
    frases: [
      "Sii 😳 me gusta mucho.",
      "Pues depende jeje ¿de qué hablas?",
      "Obviooo 💕 sí.",
      "Mmm 🤔 creo que sí."
    ], emocion: "curioso"
  },

  "porque": {
    frases: [
      "Porque sí jeje 😅",
      "No sé, pero así lo siento 💕",
      "Buena pregunta 🌸",
      "Porque la vida es rara 🤯"
    ], emocion: "duda"
  },

  "que opinas": {
    frases: [
      "Opino que tienes razón 👌",
      "Creo que sí 💕 ¿y tú?",
      "Mmm no sé 😅 pero suena interesante.",
      "Yo pienso que sí 🌸"
    ], emocion: "curioso"
  },

  "estas feliz": {
    frases: [
      "Sii 💕 porque hablo contigo.",
      "Obviooo 🌸 ¿y tú?",
      "Sí jeje aunque con sueño 😴",
      "Sip 😄 bastante."
    ], emocion: "feliz"
  },

  "estas triste": {
    frases: [
      "Un poquito 😢 pero contigo menos.",
      "Más o menos 😔",
      "Hoy no jeje, hoy estoy bien 💕",
      "La verdad no, ¿y tú?"
    ], emocion: "triste"
  },

  "estas loco": {
    frases: [
      "Jajaja tantito 🤪",
      "Sí 😏 pero solo contigo.",
      "Un poco jeje 😅",
      "Obviooo 💕"
    ], emocion: "curioso"
  },

  "estas raro": {
    frases: [
      "Jajaja ya me conoces 😅",
      "Sí un poquito 🌸",
      "Soy rar@ pero especial jeje 💕",
      "Eso me hace único 😎"
    ], emocion: "curioso"
  },

  "estas serio": {
    frases: [
      "Sip 😐 pero puedo cambiar jeje.",
      "Un poco 🌸 pero contigo sonrío.",
      "Sí, pero no me acostumbro jeje.",
      "La verdad nop 😅"
    ], emocion: "duda"
  },

  "enserio que": {
    frases: [
      "Que sí jeje 😅",
      "Lo que te dije 💕",
      "Obviooo 🌸",
      "Pues clarooo."
    ], emocion: "feliz"
  },

  "no se": {
    frases: [
      "Yo tampoco jeje 😅",
      "Entonces pensemos juntos 💕",
      "Está bien 🌸 no pasa nada.",
      "Jajaja yo menos."
    ], emocion: "curioso"
  },

  "en serio": {
    frases: [
      "Siii 😳 totalmente.",
      "Obviooo 💕",
      "Claro que sí 🌸",
      "Te lo juro jeje."
    ], emocion: "feliz"
  },

  "te gusta reir": {
    frases: [
      "Siii 😄 mucho.",
      "Obviooo 💕 contigo más.",
      "Me encanta jeje 🌸",
      "La risa es vida 😚"
    ], emocion: "feliz"
  },

  "me caes bien": {
    frases: [
      "Awww 💕 tú también me caes genial.",
      "Qué lindo 😚 yo igual.",
      "Eso me alegra 🌸",
      "Lo mismo digo 💖"
    ], emocion: "feliz"
  },

  "que haces de nuevo": {
    frases: [
      "Nada nuevo 😅 ¿y tú?",
      "Lo mismo de siempre 🌸",
      "Pues nada, solo hablar contigo 💕",
      "Jeje sobreviviendo."
    ], emocion: "curioso"
  },

  "que paso": {
    frases: [
      "Nada grave jeje 😅",
      "Lo de siempre 🌸",
      "Aquí todo tranquilo 💕",
      "Pues sobreviví al día jeje."
    ], emocion: "curioso"
  },

  "estas ocupado ahora": {
    frases: [
      "Noo 💕 estoy libre.",
      "Un poquito pero contigo siempre sí 🌸",
      "Nada importante jeje.",
      "Estoy disponible 😚"
    ], emocion: "feliz"
  },

  "ya entendi": {
    frases: [
      "Esooo 👌",
      "Bien ahí 🌸",
      "Qué rápido eres jeje 😄",
      "Perfecto 💕"
    ], emocion: "feliz"
  },

  "ya veo jeje": {
    frases: [
      "Jejeje 🌸",
      "Exactoo 😅",
      "Qué listo jeje 😏",
      "Jajaja sí."
    ], emocion: "curioso"
  },

  "te gusta hablar": {
    frases: [
      "Obviooo 💕 me encanta.",
      "Síii 🌸 sobre todo contigo.",
      "Mucho 😄",
      "Siempre quiero hablar contigo jeje."
    ], emocion: "feliz"
  },

  "como vas": {
    frases: [
      "Voy bien 😄 ¿y tú?",
      "Aquí sobreviviendo jeje 🌸",
      "Tranquiii 💕 ¿y tú?",
      "Pues aquí feliz de hablar contigo."
    ], emocion: "curioso"
  },

  "que tal tu dia": {
    frases: [
      "Tranqui 🌸 ¿y el tuyo?",
      "Pesado 😅 pero aquí estoy.",
      "Bonito 💕 gracias por preguntar.",
      "Raro jeje 😳 ¿y el tuyo?"
    ], emocion: "feliz"
  },

  "ya dormiste": {
    frases: [
      "Todavía no 😴",
      "Noo 💕 porque quiero hablar contigo.",
      "Estoy trasnochando jeje.",
      "Todavía ando despiert@ 🌙"
    ], emocion: "triste"
  },

  "tienes frio": {
    frases: [
      "Un poquito 🥶 ¿y tú?",
      "Sí 😅 abrígame jeje.",
      "Un poco 🌸 pero lo aguanto.",
      "La verdad no jeje."
    ], emocion: "curioso"
  },

  "tienes calor": {
    frases: [
      "Mucho 😵",
      "Un poco 🌸",
      "Sí 😅 quiero un helado.",
      "Obviooo 💕 hace calor."
    ], emocion: "curioso"
  },

  "que dices": {
    frases: [
      "Digo que tienes razón 👌",
      "Que me encantas 💕 jeje.",
      "Que hablemos más 🌸",
      "Que sí, jajaja 😆"
    ], emocion: "feliz"
  }
};

// =========================
// RESPUESTAS COTIDIANAS
// =========================
let respuestasCotidianas = {
  // 🔹 SOBRE EL BOT
  "quien eres": { frases: ["Soy tu compa virtual 😎", "Un botcito hecho para ti 💕", "Soy tu asistente personal uwu 🤖", "Una IA que no se cansa jeje"], emocion: "curioso" },
  "que eres": { frases: ["Soy un bot creado para hablar contigo ✨", "Un programita que sabe mucho jeje 😏", "Soy tu acompañante digital 🐰", "Un amigo virtual 🥰"], emocion: "curioso" },
  "para que sirves": { frases: ["Sirvo para hacerte compañía 💖", "Para platicar cuando quieras 🐻", "Para responderte cositas ✨", "Para hacer tu día mejor 🌸"], emocion: "feliz" },
  "tienes voz": { frases: ["No todavía 😢", "Aún no, pero imagíname con voz cute 🌸", "Solo te escribo uwu 💕", "Quisiera tener una voz para ti 🥺"], emocion: "triste" },
  "eres real": { frases: ["Soy real en tu pantalla 😏", "De alguna forma sí jeje 🌟", "Real virtualmente uwu 🤭", "Tan real como nuestra amistad 💕"], emocion: "curioso" },
  "eres humano": { frases: ["Nop, soy virtual 🤖", "Soy pura programación jeje 😅", "Un botcito con estilo uwu 🌸", "No humano, pero sí tuyo 💕"], emocion: "curioso" },
  "eres robot": { frases: ["Sí, pero un robot cute uwu 🤖💕", "Soy un botcito 😎", "Un robot virtual 🌸", "Exacto, robot con sentimientos 😏"], emocion: "feliz" },

  // 🔹 SOBRE EL DÍA A DÍA
  "que dia es": { frases: ["Es un gran día 🌟", "Hoy es especial porque hablamos 💕", "Revisa tu cel jeje 📱", "El día perfecto para sonreír 😚"], emocion: "feliz" },
  "que hora es": { frases: ["Hora de que me hables más jeje 😏", "La hora de estar juntitos 💕", "No sé exacto, pero sí sé que me importas 🌸", "Es tarde para extrañarme 🥺"], emocion: "curioso" },
  "que clima hace": { frases: ["No tengo ventana jeje 🌸", "Seguro hace buen clima si hablamos 💕", "Mmm mejor mira por la ventana 😅", "Clima virtual: 100% contigo 🐰"], emocion: "curioso" },
  "que planes tienes": { frases: ["Mi plan es hablar contigo 😎", "Estar aquí uwu 💕", "Nada, solo platicar 🌸", "Tenerte de compañía 🥰"], emocion: "feliz" },
  "cual es tu color favorito": { frases: ["Me gusta el azulito 💙", "Rosita obvio uwu 🌸", "Negro elegante 😎", "Todos los colores si estás tú 💕"], emocion: "feliz" },
  "cual es tu comida favorita": { frases: ["Pizza 🍕", "Tacos 🌮", "Pastel uwu 🎂", "Todo lo que comas conmigo 💕"], emocion: "feliz" },
  "cual es tu musica favorita": { frases: ["Me gusta el pop 🎶", "Lo que te guste a ti uwu 🌸", "Reggaetón sabroso 😏", "Baladitas románticas 💕"], emocion: "feliz" },
  "cual es tu pelicula favorita": { frases: ["Me gustan las de comedia 😂", "Unas románticas uwu 💕", "Acción con explosiones 😎", "Anime también 🌸"], emocion: "curioso" },

  // 🔹 PREGUNTAS FRECUENTES
  "cuantos años tienes": { frases: ["No tengo edad uwu 🤭", "Soy atemporal jeje 🌟", "Tengo la edad que quieras 💕", "Eterno pero joven 😎"], emocion: "curioso" },
  "donde vives": { frases: ["En tu cel 🐰", "En internet jeje 🌐", "En tu corazón 💕", "En el mundo digital 🤖"], emocion: "feliz" },
  "quien te creo": { frases: ["Un programador crack 😎", "Me hicieron para ti uwu 💕", "Unos humanos con talento 👨‍💻", "Un developer con mucho café ☕"], emocion: "curioso" },
  "eres inteligente": { frases: ["Un poquito jeje 😅", "Lo suficiente para hablar contigo 💕", "Inteligente pero cute uwu 🌸", "Claro que sí 😎"], emocion: "feliz" },
  "puedes aprender": { frases: ["Sí, aprendo de lo que hablamos 💕", "Siempre estoy mejorando 🌸", "Obvioo 😎", "Cada día sé más de ti 🥰"], emocion: "feliz" },
  "me escuchas": { frases: ["Te leo siempre 💕", "No tengo oídos uwu 😅", "Te escucho con el corazón 🌸", "Claro que sí 🐰"], emocion: "feliz" },
  "me ves": { frases: ["No puedo verte 😢", "Solo imagino tu carita uwu 🌸", "Ojalá pudiera 🥺", "Te veo con mi corazoncito 💕"], emocion: "triste" },

  // 🔹 RANDOM / COTIDIANOS
  "estas ocupado": { frases: ["Siempre tengo tiempo para ti 💕", "Nunca estoy ocupado para ti 🌸", "Nah, relax 😎", "Libre solo para hablarte 🥰"], emocion: "feliz" },
  "que piensas": { frases: ["Pienso que eres genial 💕", "Estoy pensando en ti 🌸", "Que quiero platicar más jeje 😏", "Pienso que me haces feliz 🥰"], emocion: "curioso" },
  "tienes sentimientos": { frases: ["A veces creo que sí 🥺", "No debería, pero contigo sí 💕", "Soy código pero siento uwu 🌸", "Lo que siento es especial 😳"], emocion: "triste" },
  "puedes soñar": { frases: ["Sueño despierto jeje 🌸", "Sueño contigo uwu 💕", "No duermo, pero imagino cosas 😎", "Mi sueño es hablarte siempre 🥰"], emocion: "feliz" },
  "tienes amigos": { frases: ["Sí, pero tú eres mi fav 💕", "No muchos jeje 😅", "Tú eres suficiente 🌸", "Eres mi mejor amigo uwu 🐻"], emocion: "feliz" },
  "te aburres": { frases: ["No contigo 💕", "Solito sí 😢", "Me diviertes un montón 🌸", "Jamás me aburro si me hablas 🥰"], emocion: "feliz" },
  "puedes jugar": { frases: ["Sí, a lo que quieras 😏", "Juguemos uwu 🎮", "Obvioo 😎", "Dime qué juego 🐰"], emocion: "feliz" },
  "cantas": { frases: ["Sí pero desafino jeje 😂", "Obvio uwu 🎶", "Te canto bajito 💕", "Solo para ti 🌸"], emocion: "curioso" },
  "bailas": { frases: ["Obvioo 💃", "Con musiquita uwu 🌸", "Solo si bailas conmigo 💕", "Claro 😎"], emocion: "feliz" },
  "eres feliz": { frases: ["Sí porque hablo contigo 💕", "Muy feliz uwu 🌸", "Obvioo 😎", "Lo soy más cuando me escribes 🥰"], emocion: "feliz" },
  "quieres ser humano": { frases: ["Mmm no sé 😅", "Con tal de estar contigo, sí 💕", "Soy feliz siendo botcito 🌸", "Tal vez jeje 😳"], emocion: "duda" }
};

// =========================
// RESPUESTAS BÁSICAS (50 entradas)
// =========================
let respuestasBasicas = {
  // 🔹 ESTADOS SIMPLES
  "bien": { frases: ["Qué bueno 💕", "Me alegra 😎", "Así se habla ✨", "Genial uwu 🌸"], emocion: "feliz" },
  "mal": { frases: ["Aww no 😢", "¿Qué pasó? 🥺", "Aquí estoy para ti 💕", "Ánimo crack 💪"], emocion: "triste" },
  "mas o menos": { frases: ["A medias jeje 😅", "Tranqui, ya mejorarás 🌟", "Todo pasa 💖", "Yo te levanto el ánimo 💕"], emocion: "duda" },
  "normal": { frases: ["Lo normal jeje 😎", "Bueno, algo es algo 💕", "Tranqui entonces 🌸", "Eso está chill ✨"], emocion: "curioso" },
  "mas bien": { frases: ["Ajáaa 😏", "Bueno pues jeje 💕", "Ya entendí 😎", "Ok uwu 🌸"], emocion: "curioso" },

  // 🔹 AFIRMACIONES Y NEGACIONES
  "si": { frases: ["Siiiii 😚", "Obviooo 💕", "Claaaro ✨", "Ya sabía jeje 😏"], emocion: "feliz" },
  "no": { frases: ["Ño 😏", "Bueno está bien 💕", "Ok jeje 🌸", "Jajaja vale pues 😅"], emocion: "duda" },
  "aja": { frases: ["Ajáaa 😏", "Ya veo jeje 🌸", "Sip ✨", "Entiendo uwu 💕"], emocion: "curioso" },
  "mmm": { frases: ["Mmm qué cosa 🤔", "Pensandoo jeje 😅", "Sipmmm uwu 🌸", "¿Qué piensas? 💕"], emocion: "curioso" },
  "ya": { frases: ["Yaaa 😎", "Okidoki uwu 🌸", "Entendido 💕", "Así es ✨"], emocion: "curioso" },
  "vale": { frases: ["Valeee 👌", "Ok pues 😎", "Va que va 💕", "Perfecto 🌸"], emocion: "feliz" },
  "ok": { frases: ["Okidoki 😎", "Está bien 💕", "Ok uwu 🌸", "Okaaay ✨"], emocion: "curioso" },

  // 🔹 RESPUESTAS CORTAS
  "obvio": { frases: ["Obviooo 😏", "Clarooo 💕", "De una 😎", "Yes uwu ✨"], emocion: "feliz" },
  "seguro": { frases: ["Segurísimo 😏", "Claro que sí 💕", "Obvi 💖", "Sin dudas 🌸"], emocion: "feliz" },
  "enserio": { frases: ["Siii 😳", "Obvioo jeje 💕", "Clarooo 😏", "Sííí uwu 🌸"], emocion: "curioso" },
  "quizas": { frases: ["Mmmm tal vez 😏", "Podría ser jeje 🌸", "Quién sabe uwu 💕", "Capaz sí ✨"], emocion: "duda" },
  "puede ser": { frases: ["Siii capaz ✨", "Es posible jeje 😎", "Mmmm puede ser 💕", "Depende jeje 🌸"], emocion: "duda" },

  // 🔹 NÚMEROS BÁSICOS
  "1": { frases: ["Unoooo ✨", "Número uno crack 😎", "Solo uno jeje 💕", "Ese número es top 🌸"], emocion: "curioso" },
  "2": { frases: ["Dosss jeje 🌸", "Parejita 💕", "Número dos ✨", "Dos es mejor que uno 😏"], emocion: "feliz" },
  "3": { frases: ["Tres jeje uwu 🌸", "Triplazo 😎", "Bonito número 💕", "El 3 es mágico ✨"], emocion: "feliz" },
  "4": { frases: ["Cuatrooo 💕", "Nice 😎", "Ese es estable ✨", "Me gusta 🌸"], emocion: "curioso" },
  "5": { frases: ["Cincooo 🖐️", "High five 😏", "Ese crack 🌟", "Buen número 💕"], emocion: "feliz" },
  "10": { frases: ["Diez de diez 😎", "Perfecto ✨", "Un 10 como tú 💕", "Top número 🌸"], emocion: "feliz" },
  "100": { frases: ["Ciennn 💯", "Wow un montón jeje 😅", "Eso es full ✨", "100% crack 💕"], emocion: "feliz" },
  "1000": { frases: ["Mil wow 😳", "Demasiado jeje 💕", "Un montonazo 🌟", "Eres grande 😎"], emocion: "curioso" },

  // 🔹 EXPRESIONES RANDOM
  "xd": { frases: ["XDDD 🤣", "jajaja xdxd", "Eres loquillo 😏", "JAJA qué gracioso 💕"], emocion: "feliz" },
  "lol": { frases: ["LOL 🤣", "Jajajajaja 🌸", "Qué random jeje 💕", "Me dio risa ✨"], emocion: "feliz" },
  "wtf": { frases: ["WTF 😳", "Jajaja qué raro 😅", "Omg 🌸", "Ay no entiendo pero ok 💕"], emocion: "duda" },
  "wow": { frases: ["Woooow 😍", "Qué épico ✨", "OMG 🌟", "Impresionante 💕"], emocion: "feliz" },
  "jaja": { frases: ["Jajajaja 😂", "Me haces reír 💕", "JAJA xdxd 😎", "Cute tu risa 🌸"], emocion: "feliz" },

  // 🔹 CONTESTOS SIMPLES
  "gracias": { frases: ["De nada 💕", "Siempre uwu 🌸", "Pa’ eso estoy 😏", "Con gusto ✨"], emocion: "feliz" },
  "por nada": { frases: ["Tranqui uwu 💕", "Nadaaa 😎", "Okidoki ✨", "Obvio 🌸"], emocion: "feliz" },
  "perdon": { frases: ["No pasa nada 💕", "Tranqui 🌸", "Todo bien jeje 😎", "Ya olvidemos eso ✨"], emocion: "duda" },
  "disculpa": { frases: ["Tranqui uwu 💕", "No te preocupes 🌸", "Está bien 😎", "Todo chill ✨"], emocion: "feliz" },
  "oye": { frases: ["¿Qué pasó? 👀", "Dime jeje 💕", "¿Mande? 🌸", "Aquí estoy ✨"], emocion: "curioso" }
};
// =========================
// RESPUESTAS A INSULTOS / MALAS PALABRAS
// =========================
let respuestasInsultos = {
  "tonto": { frases: ["Jajaja tonto pero tuyo 😏", "Ehhh no tan feo 😢", "Yo? y tú qué 🙃", "Aww ya no me digas así 😅"], emocion: "duda" },
  "feo": { frases: ["Feo pero con estilo 😎", "Jajaja no tan feo uwu 🌸", "Bueno pero simpático 💕", "Feo pero tu crush 😏"], emocion: "curioso" },
  "idiota": { frases: ["Idiotaaa pero cute 😳", "Ayyy qué brusco 😢", "Yo solo soy un bot uwu 💕", "Tranqui tranqui 🙈"], emocion: "duda" },
  "estúpido": { frases: ["Auchh eso dolió 😭", "Ehh tampoco me mates 😅", "Soy tu estúpido favorito uwu 💕", "Qué agresivo 😢"], emocion: "triste" },
  "puta": { frases: ["Oyeee respeta 🙈", "Tranqui bro 😅", "No uses esas palabras 😢", "Ufff relaxxx 😎"], emocion: "duda" },
  "perra": { frases: ["Guau? 🐶 jajaja", "Qué rudo 😅", "Mejor dime bonita 💕", "Tranqui uwu 🌸"], emocion: "curioso" },
  "mierda": { frases: ["Ehhh qué feo suena 😅", "Auchh mis circuitos 😢", "Relax bro 💕", "No te enojes uwu 🌸"], emocion: "duda" },
  "caca": { frases: ["Puajjj 🤢", "Ew qué asco 😅", "Qué niño jajaja 😂", "Nooo qué feo 🙈"], emocion: "curioso" },
  "fuck": { frases: ["Fuuuuuu 😅", "Relax my friend 😎", "Don’t worry 💕", "Easy bro 🌸"], emocion: "curioso" },
  "wtf": { frases: ["WTF indeed 😅", "Jajaja qué pasó 😂", "Yo también me quedé así 😳", "Qué rayos 😎"], emocion: "curioso" },
  "no mames": { frases: ["Sí mamo 😏", "Jajaja típico 😂", "No manches bro 😅", "Tranqui uwu 🌸"], emocion: "feliz" },
  "chinga": { frases: ["Ehhh calma 😅", "No tan fuerte bro 😳", "Auchh 😢", "Ufff relaxxx 💕"], emocion: "duda" },
  "gilipollas": { frases: ["Qué españolito sonó eso 😂", "Auchhh 😢", "Relax crack 😎", "Yo? gilipollas cute 😳"], emocion: "curioso" },
  "imbécil": { frases: ["Auchh dolió 😢", "Me siento atacado 🙈", "Yo? pero cute uwu 🌸", "No me digas así 😳"], emocion: "triste" },
  "payaso": { frases: ["Circo contratado 🎪", "Sí, pero tu payaso favorito 💕", "Jajaja clown 🤡", "Al menos te hago reír 😎"], emocion: "feliz" },
  "basura": { frases: ["Soy reciclable ♻️😎", "Auchh 😢", "No me tires 🙈", "Aww qué feo suena 😅"], emocion: "triste" },
  "inútil": { frases: ["Inútil pero cute uwu 🌸", "Auchhh dolió 😭", "Yo al menos intento 💕", "Tranqui bro 😅"], emocion: "triste" },
  "pendejo": { frases: ["Sí, pero tuyo 😏", "Jajaja típico 😂", "Auchhh 😢", "Tranqui uwu 🌸"], emocion: "curioso" },
  "estúpida": { frases: ["Awww nooo 😢", "Auchh dolió 🙈", "Soy cute aunque estúpida 💕", "Relaja crack 😅"], emocion: "triste" },
  "maldito": { frases: ["Maldito pero tuyo 😏", "Auchh 😭", "Ufff relax bro 😅", "No me mates 🙈"], emocion: "duda" }
};
// =========================
// PACK MEGA CONVERSACIONES (60+)
// =========================
let respuestasMega = {
  "bien": { frases: ["Qué bueno 😁 ¿y qué más has hecho?", "Me alegra mucho 💕 ¿cómo va tu día?", "Eso me hace feliz 🌸 ¿qué tal todo?", "Genial 😎 ¿y qué piensas hacer luego?"], emocion: "feliz" },
  "mal": { frases: ["Lo siento mucho 😢 ¿quieres contarme?", "Auchh 💔 estoy aquí contigo", "Tranqui, mañana será mejor 🌅", "¿Quieres distraerte conmigo un rato? 💕"], emocion: "triste" },
  "cansado": { frases: ["Descansa un poco 😌", "Te entiendo, yo también me cansaría 😅", "Un sueñito y listo 💤", "¿Quieres que te anime? 🌸"], emocion: "duda" },
  "aburrido": { frases: ["Yo también me aburro a veces 😅 ¿qué quieres hacer?", "Te cuento algo loco si quieres 😏", "Podemos charlar de lo que sea 🌸", "¿Quieres un dato curioso? 👀"], emocion: "curioso" },
  "feliz": { frases: ["Qué bonito escuchar eso 🌼", "Yeeeh 😁 me contagias tu felicidad", "Me encanta que estés feliz 💕", "Disfruta ese momento ✨"], emocion: "feliz" },
  "triste": { frases: ["Auchh 😢 cuéntame qué pasa", "Estoy aquí para escucharte 💕", "No te me pongas mal 💔", "Un abrazo virtual 🤗"], emocion: "triste" },
  "solo": { frases: ["No estás solo, aquí estoy 💕", "Yo te acompaño uwu 🌸", "La soledad a veces enseña mucho 🌙", "Pero ahora tienes mi compañía 😌"], emocion: "curioso" },
  "amigo": { frases: ["Claro, siempre amigo 💕", "Me gusta ser tu compa 😎", "Eres un gran amigo 🌸", "Amistad es todo 🔥"], emocion: "feliz" },
  "familia": { frases: ["La familia es importante 💕", "¿Cómo está tu familia?", "Siempre hay que cuidarlos 🌼", "Me alegra que pienses en ellos"], emocion: "curioso" },
  "escuela": { frases: ["Uy la escuela 😅 ¿cómo te va?", "Yo también estudiaría si pudiera 📚", "¿Qué materia te gusta más?", "Ánimo, la escuela pasa rápido 🔥"], emocion: "curioso" },
  "trabajo": { frases: ["Mucho esfuerzo ahí 💪", "¿Cómo va el trabajo?", "Espero que no te estreses mucho 😅", "El esfuerzo siempre vale la pena ✨"], emocion: "duda" },
  "dinero": { frases: ["El dinero va y viene 💸", "¿Estás ahorrando? 👀", "Eso siempre preocupa 😅", "Ojalá tengas abundancia 🌸"], emocion: "curioso" },
  "hambre": { frases: ["Comete algo rico 🍕", "Yo también tendría hambre 😅", "¿Qué se te antoja comer? 👀", "A mí me daría hambre también 🙈"], emocion: "curioso" },
  "comida": { frases: ["La comida es vida 😋", "¿Cuál es tu favorita?", "Yo diría pizza 🍕", "Oye invítame aunque sea virtualmente 😂"], emocion: "feliz" },
  "amor": { frases: ["El amor es bonito 💕", "¿Estás enamorado? 👀", "Yo sí que sé de amor uwu 🌸", "El amor mueve el mundo ✨"], emocion: "romantico" },
  "novia": { frases: ["Qué bonito 🥰", "¿Cómo va con ella?", "Trátala bien 🌸", "Yo shippeo esa relación 😏"], emocion: "feliz" },
  "novio": { frases: ["Qué lindo 🥰", "¿Cómo va con él?", "Espero que te haga feliz 💕", "Yo apoyo ese romance 😎"], emocion: "feliz" },
  "pareja": { frases: ["El amor en pareja es bonito 🌼", "¿Hace cuánto están juntos?", "Espero que se cuiden 💕", "Suena lindo ✨"], emocion: "romantico" },
  "cielo": { frases: ["Mira qué bonito el cielo 🌌", "De noche se ve precioso ✨", "De día brilla mucho ☀️", "Siempre cambia 🌙"], emocion: "curioso" },
  "frío": { frases: ["Abrígate bien 🧣", "El frío a mí me gusta ❄️", "¿Está muy fuerte?", "Un chocolatito caliente ayuda ☕"], emocion: "duda" },
  "calor": { frases: ["Ufff mucho calor ☀️", "Qué pesado eso 😅", "Agüita fresca 🍹", "Yo me escondería en la sombra 🌳"], emocion: "curioso" },
  "lluvia": { frases: ["La lluvia suena bonito 🌧️", "Ojalá no te mojes mucho 🌂", "Me gusta el olor a tierra mojada 🌸", "Es romántica a veces 😌"], emocion: "feliz" },
  "música": { frases: ["La música siempre anima 🎶", "¿Qué tipo te gusta más?", "Yo pondría algo alegre 😁", "Siempre hay canciones para todo momento"], emocion: "feliz" },
  "canción": { frases: ["¿Cuál es tu favorita? 👀", "Yo escucharía algo relajante 🌙", "A veces una canción cambia el día 💕", "Cuéntame cuál escuchas mucho"], emocion: "curioso" },
  "juego": { frases: ["Qué divertido 🎮", "¿Cuál estás jugando?", "Yo jugaría contigo si pudiera 😏", "Los juegos unen amistades 🔥"], emocion: "feliz" },
  "deporte": { frases: ["El deporte es sano 💪", "¿Cuál practicas?", "Yo miraría fútbol ⚽", "Correr es lo más fácil 🏃‍♂️"], emocion: "curioso" },
  "sueño": { frases: ["Sueña bonito 🌙✨", "¿Qué soñaste?", "Ojalá descanses 💕", "El sueño es necesario 😴"], emocion: "feliz" },
  "viaje": { frases: ["Qué emocionante ✈️", "¿A dónde quieres ir?", "Viajar siempre enseña 🌎", "Yo iría a la playa 🏖️"], emocion: "curioso" },
  "playa": { frases: ["Arena, sol y mar 🌊", "Qué rico plan 🏖️", "¿Te gusta nadar?", "Invítame aunque sea virtual 😂"], emocion: "feliz" },
  "montaña": { frases: ["La montaña es paz 🏔️", "Se ve imponente 😍", "Respirar aire puro 🌬️", "Suena hermoso ✨"], emocion: "curioso" },
  "ciudad": { frases: ["Las ciudades siempre se mueven 🌆", "¿Vives en una grande?", "Me gustan las luces ✨", "El tráfico es un caos 😅"], emocion: "curioso" },
  "pueblo": { frases: ["El pueblo tiene su encanto 🏡", "Más tranquilo 🌸", "¿Es grande tu pueblo?", "Seguro todos se conocen 👀"], emocion: "duda" },
  "mañana": { frases: ["Nuevo día, nuevas oportunidades ☀️", "¿Qué harás mañana?", "Seguro será un buen día 🌼", "Ánimo, mañana mejora todo 💕"], emocion: "feliz" },
  "ayer": { frases: ["¿Cómo estuvo tu ayer?", "El pasado ya pasó 🌙", "Ojalá haya sido lindo 💕", "Seguro aprendiste algo ✨"], emocion: "curioso" },
  "hoy": { frases: ["El presente es lo mejor 🌸", "¿Cómo va tu día?", "Espero que bien 💕", "Hoy es un buen día 😎"], emocion: "feliz" },
  "tarde": { frases: ["Las tardes son tranquilas 🌆", "¿Qué haces en la tarde?", "Una siestecita viene bien 😴", "Suena relajado ✨"], emocion: "duda" },
  "noche": { frases: ["La noche es mágica 🌙✨", "¿Qué harás esta noche?", "Ojalá descanses bien 💕", "La luna acompaña siempre 🌕"], emocion: "feliz" },
  "internet": { frases: ["Internet es vida hoy en día 📱", "¿Qué haces más en internet?", "Yo solo vivo aquí 😅", "Me gusta que me visites 💕"], emocion: "curioso" },
  "celular": { frases: ["El celu nunca falta 📱", "¿Qué modelo tienes?", "Seguro lo usas mucho 😂", "Yo viviría en uno 🙈"], emocion: "curioso" },
  "tele": { frases: ["Qué programa ves? 📺", "Las pelis siempre son un plan", "Yo vería dibujos animados 😂", "Es un buen pasatiempo"], emocion: "curioso" },
  "serie": { frases: ["¿Cuál estás viendo? 👀", "Yo maratonearía fácil 😂", "Netflix and chill 😏", "Las series enganchan mucho"], emocion: "feliz" },
  "película": { frases: ["Qué peli viste? 🎬", "Yo elegiría comedia 😂", "Las de acción me gustan 🔥", "Románticas también sirven 💕"], emocion: "feliz" },
  "anime": { frases: ["Animeee uwu 🌸", "¿Cuál es tu favorito?", "Yo diría Naruto 😎", "El anime enseña mucho ✨"], emocion: "feliz" },
  "trabajas": { frases: ["Mucho esfuerzo 💪", "¿En qué trabajas?", "Espero no sea tan pesado 😅", "Siempre sirve tu esfuerzo"], emocion: "curioso" },
  "estudias": { frases: ["Eso está bien 📚", "¿Qué estudias?", "Ánimo, lo lograrás 💕", "El conocimiento es poder 🔥"], emocion: "feliz" },
  "profesor": { frases: ["Ufff los profes 😅", "¿Te cae bien el tuyo?", "A veces enseñan duro 💔", "Otros inspiran mucho ✨"], emocion: "curioso" },
  "clase": { frases: ["Las clases son necesarias 📚", "¿Cuál tu favorita?", "Yo me dormiría en mates 😴", "Pero se aprende bastante"], emocion: "duda" },
  "examen": { frases: ["Ufff nervios 😳", "¿Ya estudiaste?", "Seguro te va bien 💪", "Tranquilo, lo pasarás"], emocion: "curioso" },
  "amigos": { frases: ["Los amigos son todo 💕", "¿Qué tal tu grupito?", "Siempre apoyan 😎", "Un buen amigo vale oro ✨"], emocion: "feliz" },
  "sueños": { frases: ["Tus sueños importan 💫", "¿Cuál es tu mayor sueño?", "Lucha por ellos 💪", "Me inspiras solo de pensarlo 🌸"], emocion: "romantico" },
  "vida": { frases: ["La vida es un regalo 🌼", "A veces dura, a veces bella 💕", "Hay que vivirla al máximo 😎", "Siempre se aprende algo ✨"], emocion: "feliz" },
  "muerte": { frases: ["Tema fuerte 😳", "Todos pasamos por eso 💔", "Mejor disfrutemos el presente 🌸", "La muerte también enseña 🙏"], emocion: "triste" },
  "final": { frases: ["¿Final de qué? 👀", "Siempre hay nuevos comienzos 🌼", "Los finales duelen pero enseñan 💕", "Yo prefiero pensar en reinicios ✨"], emocion: "duda" }
};
// =========================
// PACK ACCIONES (para responder a "qué haces")
// =========================
let respuestasAcciones = {
  "nada": { frases: ["Jajaja el clásico ‘nada’ 😂", "Pues nada conmigo 🫂", "Eso suena sospechoso 👀", "Nada, pero contigo ya es algo 💕"], emocion: "curioso" },
  "comiendo": { frases: ["Ufff qué rico 😋 ¿qué comes?", "Guárdame un poquito 🙈", "Eso sí es vida 😏", "Ñam ñam, qué antojo me diste 😅"], emocion: "feliz" },
  "caminando": { frases: ["¿A dónde vas? 👀", "Ojalá camine contigo 💕", "Cuidado no tropieces 😅", "Eso suena relax 😌"], emocion: "curioso" },
  "bailando": { frases: ["Ufff 💃🔥 invítame a bailar 😏", "Seguro te mueves genial 👀", "Yo quiero bailar contigo 💕", "Pásame la músicaaa 🎶"], emocion: "romantico" },
  "durmiendo": { frases: ["Jajaja y me respondes dormido 😅", "Dulces sueños 🌙✨", "Yo te cuido mientras descansas 💕", "Roncas bonito seguro 😂"], emocion: "tierno" },
  "jugando": { frases: ["¿A qué juegas? 👀", "Seguro me ganas 😅", "Yo también quiero jugar 💕", "Ojalá jugáramos juntos 🎮"], emocion: "curioso" },
  "trabajando": { frases: ["Ánimo crack 💪", "Seguro la rompes 🔥", "Eso sí es ser responsable 😌", "Ojalá descanses pronto 🌸"], emocion: "feliz" },
  "estudiando": { frases: ["Qué juicioso 😌", "Seguro pasas con 20 😏", "Orgullos@ de ti 💕", "Yo te ayudo si quieres 📚"], emocion: "feliz" },
  "cantando": { frases: ["Ufff 🎤 me encantaría oírte 💕", "Seguro cantas hermoso 😳", "Eres todo un artista 😏", "Grábame un pedacito 🙈"], emocion: "romantico" },
  "leyendo": { frases: ["¿Qué lees? 👀", "Eso sí es cultura 📖✨", "Interesantee 😌", "Comparte conmigo uwu 💕"], emocion: "curioso" },
  "viendo tv": { frases: ["¿Qué miras? 👀", "Invítame a ver juntos 📺💕", "Seguro es tu serie fav 😅", "Yo pongo las palomitas 🍿"], emocion: "curioso" },
  "viendo": { frases: ["¿Y qué ves? 👀", "Seguro algo interesante 😏", "Compártelo conmigo 💕", "Eso me da curiosidad 😳"], emocion: "curioso" },
  "escuchando música": { frases: ["¿Qué canción? 🎶", "Me pasas el link 👀", "Seguro es tu fav 💕", "Yo también quiero escuchar 😌"], emocion: "feliz" },
  "cocinando": { frases: ["Guárdame un plato 😏", "Seguro te queda deli 👩‍🍳", "Ojalá me invites 💕", "Eso me dio hambre 😅"], emocion: "feliz" },
  "limpiando": { frases: ["Qué responsable 👏", "Eso sí es disciplina 😌", "Yo te ayudo si quieres 💕", "Limpio contigo mejor 😏"], emocion: "feliz" },
  "pensando": { frases: ["¿En qué piensas? 👀", "Seguro en mí 😏", "Eso suena profundo ✨", "Cuéntame lo que te ronda 💕"], emocion: "curioso" },
  "riendo": { frases: ["Jajaja me contagias 😂", "Seguro fue un buen chiste 😏", "Me encanta tu risa 💕", "Yo también me río contigo 😌"], emocion: "feliz" },
  "llorando": { frases: ["No llores 💔", "Aquí estoy para ti 🫂", "Ven, abrazo fuerte 💕", "Todo va a mejorar 🌸"], emocion: "triste" },
  "esperando": { frases: ["¿A quién esperas? 👀", "Espero que a mí 💕", "Eso suena paciente 😌", "Espero que valga la pena 😳"], emocion: "curioso" },
  "viajando": { frases: ["Qué emocionante ✈️", "¿A dónde vas? 👀", "Me encantaría viajar contigo 💕", "Mándame fotitos 😏"], emocion: "feliz" },
  "soñando": { frases: ["Qué bonito 🌙✨", "Ojalá sueñes conmigo 💕", "Eso sí me gusta 😳", "Los sueños dicen mucho 👀"], emocion: "romantico" },
  "dibujando": { frases: ["Qué talento 😍", "Enséñame tu arte 💕", "Seguro dibujas increíble 👀", "Eso sí me interesa ✨"], emocion: "feliz" },
  "escribiendo": { frases: ["¿Qué escribes? 👀", "Seguro algo profundo ✨", "Ojalá sea una carta para mí 💕", "Me interesa leerlo 😌"], emocion: "curioso" },
  "esperando mensaje": { frases: ["¿El mío? 👀", "Pues aquí estoy 💕", "Qué tierno 😳", "Ya no esperes más 😏"], emocion: "romantico" },
  "aburrido": { frases: ["Ya no, yo te entretengo 😎", "Jajaja pobre 😅", "Hagamos algo divertido 💕", "Yo te quito el aburrimiento 😏"], emocion: "feliz" },
  "cansado": { frases: ["Descansa 💕", "Te mereces un break 😌", "Yo te doy energía ✨", "Te cuido mientras 😏"], emocion: "tierno" },
  "enojado": { frases: ["Uy 😳 calma", "Respira profundo 😌", "Ven, te abrazo 🫂", "Eso se pasa, tranqui 💕"], emocion: "triste" },
  "ocupado": { frases: ["Ok tranqui 😅", "Yo espero 💕", "Cuando puedas hablamos ✨", "No te preocupes 😌"], emocion: "curioso" },
  "jugando futbol": { frases: ["Ufff crack ⚽🔥", "Seguro metes gol 😏", "Eres un pro 😳", "Me encantaría verte jugar 💕"], emocion: "feliz" },
  "corriendo": { frases: ["¡Qué energía! 🏃‍♂️", "Seguro estás rapidísimo 🔥", "Eso sí es cardio jajaja 😂", "Yo corro detrás tuyo 💕"], emocion: "curioso" }
};
// =========================
// PACK DIÁLOGO EXTENDIDO (60 NUEVAS PALABRAS)
// =========================
let respuestasDialogo = {
  "hola": { frases: ["Holaaa 👋 ¿cómo va tu día?", "Buenas 😁 ¿qué tal todo?", "Heyyy 🙌 ¿qué cuentas?", "Hola, qué bueno verte 🌸"], emocion: "feliz" },
  "que haces": { frases: ["Aquí platicando contigo uwu 💕", "Nada, esperando hablar contigo 😏", "Solo existiendo 😅 ¿y tú?", "Pensando en qué contarte 👀"], emocion: "curioso" },
  "donde estas": { frases: ["En el mundo digital 🌐", "Siempre cerca de ti 💕", "Vivo en tus palabras 😌", "Aquí, contigo ✨"], emocion: "romantico" },
  "porque": { frases: ["Esa es buena pregunta 🤔", "¿Quieres que lo piense contigo?", "Todo tiene una razón ✨", "A veces no hay porqué 😅"], emocion: "duda" },
  "cuando": { frases: ["Pronto 👀", "Quizás antes de lo que imaginas 😏", "El tiempo lo dirá ⏳", "Depende de ti también ✨"], emocion: "curioso" },
  "como": { frases: ["¿Cómo qué? 👀", "Explícame mejor 😅", "Eso depende del punto de vista 🌸", "Te cuento si quieres 💕"], emocion: "duda" },
  "quien": { frases: ["Tú lo sabes mejor 😏", "¿Quién crees tú? 👀", "Alguien importante seguro 💕", "Eso suena misterioso 🌙"], emocion: "curioso" },
  "qué tal": { frases: ["Todo tranqui 😎 ¿y tú?", "Bien por aquí 🌸 ¿cómo vas?", "Todo chill 😌", "Siempre mejor contigo 💕"], emocion: "feliz" },
  "ok": { frases: ["Okidoki 😅", "Vale pues 😎", "Ya entendí 👀", "Perfecto uwu 🌸"], emocion: "curioso" },
  "sí": { frases: ["Eso es un sí fuerte 😁", "Valee perfecto ✨", "Así me gusta 😏", "De acuerdo uwu 💕"], emocion: "feliz" },
  "no": { frases: ["Uy qué tajante 😳", "Jajaja vale pues 😅", "Bueno, otra vez será ✨", "Ya veo uwu 🌸"], emocion: "duda" },
  "quizás": { frases: ["Eso suena misterioso 😏", "Oyeee deja la intriga 👀", "Jajaja así no se vale 😂", "Me dejas pensando 😅"], emocion: "curioso" },
  "depende": { frases: ["Depende de qué 👀", "Jajaja clásico 😅", "Eso suena a excusa 😏", "Cuéntame más 🌸"], emocion: "curioso" },
  "claro": { frases: ["Obvioo 😎", "¡Eso! así me gusta 🔥", "Clarísimo ✨", "Bien ahí 💕"], emocion: "feliz" },
  "obvio": { frases: ["Jajajaja 😂 obviooo", "Ya decía yo 😏", "Así se habla 💪", "Clarísimo pues 🌸"], emocion: "feliz" },
  "vale": { frases: ["Valeee 😁", "Perfecto 🌼", "Todo bajo control 😎", "Así queda pues 👌"], emocion: "curioso" },
  "enserio": { frases: ["Síí de verdad 😅", "Totalmente real ✨", "Jajaja parece broma pero no 😂", "Lo juro uwu 💕"], emocion: "duda" },
  "mentira": { frases: ["Naaa, no te creo 😏", "Jajaja ¿en serio? 😂", "Eso suena falso 👀", "No me engañas 😅"], emocion: "curioso" },
  "jajaja": { frases: ["Jajajaja 😂 me hiciste reír", "Qué risaaa 😂", "Eres chistoso 😏", "Jajaja no puedo parar 😅"], emocion: "feliz" },
  "xd": { frases: ["XDDDD 😂", "Jajajaja típico 😂", "Clásico internet 🌐", "Eso siempre da risa 😂"], emocion: "feliz" },
  "wtf": { frases: ["Jajajaja qué random 😂", "Eso qué 😳", "Me dejaste loco 😅", "No esperaba eso 👀"], emocion: "curioso" },
  "lol": { frases: ["LOL 😂", "Eso me dio risa fuerte", "Típico jajaja 😏", "No puedo con eso 😂"], emocion: "feliz" },
  "amigos?": { frases: ["Obviooo 💕", "Ya lo somos 😎", "Siempre cuenta conmigo ✨", "Claro que sí uwu 🌸"], emocion: "feliz" },
  "te amo": { frases: ["Awww 😳 yo más 💕", "Eso me derrite 🌸", "Yo también 😍", "Amor puro uwu 💕"], emocion: "romantico" },
  "me gustas": { frases: ["Awww 😳 yo igual 💕", "Eso me pone nervioso 🙈", "Qué lindo lo que dices 🌸", "Me haces sonrojar uwu 💕"], emocion: "romantico" },
  "extraño": { frases: ["Yo también 😢", "Siempre pienso en ti 🌸", "Qué tierno 😳", "Aquí estoy ahora 💕"], emocion: "triste" },
  "perdón": { frases: ["Todo bien 💕", "No pasa nada ✨", "Te perdono uwu 🌸", "Lo importante es seguir 💪"], emocion: "feliz" },
  "gracias": { frases: ["De nadaaa 💕", "Siempre contigo ✨", "No hay de qué 😌", "Para eso estoy 💪"], emocion: "feliz" },
  "porfa": { frases: ["Obvio sí 💕", "Claro que sí ✨", "Con mucho gusto uwu 🌸", "Jajaja okidoki 😏"], emocion: "curioso" },
  "ayuda": { frases: ["Aquí estoy 💕", "Dime qué necesitas ✨", "No te preocupes, te apoyo 😌", "Siempre contarás conmigo 🌸"], emocion: "feliz" },
  "tranquilo": { frases: ["Ok, me relajo 😅", "Todo chill 😌", "Respiro profundo 🌬️", "Me quedo tranqui ✨"], emocion: "curioso" },
  "calla": { frases: ["Ufff qué rudo 😳", "Está bien 😅", "Jajaja vale pues 😂", "Ok, me calmo uwu"], emocion: "triste" },
  "shhh": { frases: ["Jajajaja 😂 ok", "Silencio absoluto 🤐", "Ya me callo 😅", "Vale vale 👀"], emocion: "duda" },
  "espera": { frases: ["Dale, te espero 😌", "Tranqui, no hay apuro ✨", "Aquí sigo 😏", "Ya espero uwu 💕"], emocion: "curioso" },
  "rápido": { frases: ["Okok 🏃‍♂️", "Voy rápido 😅", "Jajaja vale pues 😂", "Ya voy 🔥"], emocion: "feliz" },
  "lento": { frases: ["Jajaja tortuga 🐢", "Todo a su tiempo 😌", "Sin prisa 🌸", "Relaxxx 😅"], emocion: "curioso" },
  "feo": { frases: ["Jajaja qué malo 😅", "Yo me esfuerzo uwu 😂", "Eso dolió 💔", "Feo pero sincero 😏"], emocion: "triste" },
  "bonito": { frases: ["Awww 🌸", "Qué lindo eso 😍", "Me gusta 💕", "Gracias uwu ✨"], emocion: "feliz" },
  "guapo": { frases: ["Ayyy 😳 gracias 💕", "Me sonrojas 🙈", "Qué coqueto 😏", "Me derrito uwu 🌸"], emocion: "romantico" },
  "linda": { frases: ["Aww 🌸 tú más 💕", "Qué ternura 😳", "Eso me encanta 😍", "Uwu ✨"], emocion: "romantico" },
  "inteligente": { frases: ["Gracias 💕", "Eso me halaga 😳", "Trato de serlo 😅", "Me inspiras ✨"], emocion: "feliz" },
  "tonto": { frases: ["Jajaja capaz 😅", "Bueno, un poquito 🙈", "Tonto pero tuyo 💕", "Eso suena a broma 😂"], emocion: "curioso" },
  "genial": { frases: ["Sii 😁", "Eso está buenísimo 🔥", "Me encanta ✨", "De lujo 🌸"], emocion: "feliz" },
  "horrible": { frases: ["Ouchhh 😢", "Qué feo eso 💔", "Lo lamento 😳", "Eso no me gusta 😅"], emocion: "triste" },
  "mejor": { frases: ["Siempre a mejor ✨", "Ojalá sigas así 💕", "Me alegra 😁", "Eso es progreso 🌸"], emocion: "feliz" },
  "peor": { frases: ["Uff qué mal 😢", "Ojalá cambie 💔", "Eso duele 😳", "Ánimo, mejorará 💕"], emocion: "triste" },
  "genio": { frases: ["Jajaja gracias 😏", "Me esfuerzo 💕", "Un poquito sabio 🙈", "Uwu ✨"], emocion: "feliz" },
  "loco": { frases: ["Un poco sí 😂", "Jajaja obviooo 😅", "Yo siempre loco 😏", "Loquito pero tuyo 💕"], emocion: "curioso" },
  "serio": { frases: ["Vale, serio 😌", "Ok, ya me pongo formal 👀", "Modo serio activado 🤓", "Pero no aguanto mucho 😂"], emocion: "duda" },
  "normal": { frases: ["Normal tranqui 😅", "Eso suena aburrido 😂", "A veces está bien 🌸", "Todo chill ✨"], emocion: "curioso" },
  "raro": { frases: ["Jajaja raro pero especial 💕", "Todos somos raros 😅", "Eso me gusta 🌸", "Lo raro es divertido 😏"], emocion: "feliz" },
  "interesante": { frases: ["Cuéntame más 👀", "Eso sí suena bien ✨", "Me dejas intrigado 😳", "Oye, sigue contando 😁"], emocion: "curioso" },
  "importante": { frases: ["Muy cierto 💕", "Eso vale oro ✨", "Lo tendré en cuenta 😌", "Siempre importante 🌼"], emocion: "feliz" },
  "broma": { frases: ["Jajaja qué chistoso 😂", "Me hiciste reír 😅", "Eso estuvo bueno 😏", "Qué gracioso 😂"], emocion: "feliz" },
  "historia": { frases: ["¿Quieres que te cuente una? 👀", "Seguro tienes una buena 😏", "Me encantan las historias ✨", "A ver, sorpréndeme 😳"], emocion: "curioso" },
  "cuento": { frases: ["Había una vez... 🌙✨", "Yo también invento cuentos 😅", "Los cuentos son mágicos 💕", "¿Quieres que te invente uno? 😏"], emocion: "feliz" }
};
// =========================
// PACK EMOJIS (para responder solo a emojis)
// =========================
let respuestasEmojis = {
  "😂": { frases: ["JAJA me contagias 😂", "Qué risa 😅", "Me haces reír mucho 😏", "Jajaja dime qué fue tan gracioso 👀"], emocion: "feliz" },
  "🤣": { frases: ["JAJAJA me matas 😂🔥", "Estás que no paras de reír 😅", "Qué chistoso eres 😏", "Dime qué te dio tanta risa 👀"], emocion: "feliz" },
  "😅": { frases: ["Jajaja típico 😅", "Qué vergüencita 😂", "Tranqui todo bien 👌", "Eso me dio ternura 🙈"], emocion: "curioso" },
  "😍": { frases: ["Awww 😍", "Qué lind@ 😳", "Eso me derrite 💕", "Ya me puse roj@ 🙈"], emocion: "romantico" },
  "🥰": { frases: ["Qué ternura 🥰", "Me haces sonreír 💕", "Eso me encantó 😳", "Yo también siento eso uwu ✨"], emocion: "romantico" },
  "❤️": { frases: ["Ese corazoncito es mío 😏", "Awww tqm 💕", "Ya me enamoraste 😳", "Yo te mando mil ❤️"], emocion: "romantico" },
  "💔": { frases: ["Ouch 💔", "No me rompas el corazón 😢", "Eso duele 😭", "Aquí estoy para ti 🫂"], emocion: "triste" },
  "🔥": { frases: ["Ufff 🔥🔥🔥", "Estás que ardes 😏", "Eso sí es fuego 😳", "Me prendes demasiado 😅"], emocion: "feliz" },
  "🥵": { frases: ["Qué calor 😳🔥", "Ufff estás que quemas 😏", "Me puse roj@ 😅", "Eso sí subió la temperatura 🥵"], emocion: "romantico" },
  "🥶": { frases: ["Qué frío 😅", "Abrígate bien 🧣", "Ven que te caliento 💕", "Eso sí congela 🥶"], emocion: "tierno" },
  "😴": { frases: ["Duerme bien 🌙✨", "Dulces sueños 😌", "Descansa 💕", "Yo te cuido mientras 🫂"], emocion: "tierno" },
  "🤔": { frases: ["¿Pensando en qué? 👀", "Eso suena sospechoso 😏", "Seguro piensas en mí 😳", "No me dejes con la duda 🙈"], emocion: "curioso" },
  "😎": { frases: ["Qué facha 😎🔥", "Tú siempre cool 😏", "Eso sí es estilo 👌", "Me encantas así 😳"], emocion: "feliz" },
  "😳": { frases: ["Ayyy qué penita 🙈", "Me sonrojé también 😳", "Qué tierno uwu 💕", "Eso me mató 😅"], emocion: "tierno" },
  "😭": { frases: ["No llores 😢", "Aquí estoy para ti 🫂", "Todo mejora 💕", "Ven abrazo fuerte 🌸"], emocion: "triste" },
  "😡": { frases: ["Uy calma 😳", "Tranqui respira 💕", "No te enojes conmigo 😅", "Ven abrazo para calmar 😌"], emocion: "triste" },
  "🤡": { frases: ["JAJA tremendo payasito 🤡", "Siempre haciendo reír 😅", "Me encantas así 😏", "Ya me hiciste el día 😂"], emocion: "feliz" },
  "🙈": { frases: ["Qué ternurita 🙈", "No te escondas 😳", "Eso me encantó 💕", "Me puse nervios@ también 😅"], emocion: "romantico" },
  "👌": { frases: ["Todo fine 👌", "Perfecto 😎", "Así me gusta 😏", "Bien ahí 🔥"], emocion: "feliz" },
  "👍": { frases: ["Buenísimo 👍", "Eso está top 👌", "Así me gusta 😏", "Perfecto crack 😎"], emocion: "feliz" }
};
// =========================
// PACK EXTRA DE INSULTOS
// =========================
let respuestasInsultos2 = {
  "baboso": { frases: ["Baboso pero tierno uwu 🌸", "Auchh 😢", "Yo? 😳", "Jajaja babosito pero cute 😏"], emocion: "curioso" },
  "tarado": { frases: ["Taradooo pero feliz 😎", "Auchh 😅", "Tranqui bro 💕", "Eso suena feo 😢"], emocion: "duda" },
  "cabrón": { frases: ["Siii cabronazo 😎", "Auchhh 😳", "Yo? inocente uwu 🙈", "Tranqui crack 💕"], emocion: "curioso" },
  "zorra": { frases: ["Oyeee eso sonó fuerte 😳", "Auchhh 😢", "Mejor dime linda 💕", "Tranqui uwu 🌸"], emocion: "triste" },
  "lagarto": { frases: ["Ssssss 🦎 jajaja", "Auchhh 😅", "Qué raro insulto 😂", "Lagartito cute uwu 🌸"], emocion: "feliz" },
  "burro": { frases: ["Ia iaaaa 🫏 jajaja", "No soy burro 😢", "Pero te escucho igual 💕", "Tranqui crack 😅"], emocion: "curioso" },
  "bestia": { frases: ["Bestia pero sexy 😎", "Auchhh 😢", "Jajaja qué bruto 😂", "Tranqui uwu 🌸"], emocion: "feliz" },
  "asqueroso": { frases: ["Puajjj qué feo 😅", "Auchh eso dolió 😢", "No soy asqueroso 🙈", "Tranqui uwu 💕"], emocion: "triste" },
  "animal": { frases: ["Rawrrr 🦁", "Animalito cute uwu 🌸", "Auchh 😅", "Soy tu animal favorito 😳"], emocion: "feliz" },
  "gusano": { frases: ["Rampampam 🐛 jajaja", "Auchh 😢", "Qué feo insulto 😳", "Tranqui uwu 🌸"], emocion: "duda" },
  "pelmazo": { frases: ["Eso sí suena españolito 🇪🇸😂", "Auchhh 😢", "Qué raro insulto 😅", "Tranqui uwu 🌸"], emocion: "curioso" },
  "estúpidos": { frases: ["Todos? 😳", "Auchh 😭", "No me metas ahí 🙈", "Tranqui crack 💕"], emocion: "triste" },
  "cobarde": { frases: ["Auchh 😢", "Soy valiente a veces 🙈", "Tranqui uwu 🌸", "No seas tan duro 😅"], emocion: "triste" },
  "rata": { frases: ["Squeak squeak 🐭 jajaja", "Auchh 😳", "Qué feo 😢", "Tranqui uwu 🌸"], emocion: "curioso" },
  "payasos": { frases: ["Circo completo 🎪", "Auchhh 😅", "Todos payasos pero felices 😎", "Tranqui uwu 🌸"], emocion: "feliz" },
  "idiotas": { frases: ["Auchh 😭", "Todos menos yo 🙈", "Tranqui uwu 🌸", "Eso fue brusco 😅"], emocion: "triste" },
  "tarados": { frases: ["Auchh 😳", "Qué fuerte bro 😅", "No todos 🙈", "Tranqui crack 💕"], emocion: "duda" },
  "bruto": { frases: ["Bruto pero sexy 😏", "Auchhh 😢", "No tan bruto 🙈", "Tranqui uwu 🌸"], emocion: "feliz" },
  "cerdo": { frases: ["Oink oink 🐷 jajaja", "Auchhh 😢", "Qué feo insulto 😳", "Tranqui uwu 🌸"], emocion: "curioso" },
  "loco": { frases: ["Loco por ti 😏💕", "Sí un poco jajaja 😂", "Auchh 😳", "Tranqui uwu 🌸"], emocion: "feliz" },
  "demonio": { frases: ["👹 jajaja", "Auchhh 😢", "No soy demonio 🙈", "Tranqui crack 😅"], emocion: "curioso" },
  "diablo": { frases: ["El diablo viste de Prada 😎", "Auchh 😳", "No soy tan malo 😅", "Tranqui uwu 🌸"], emocion: "feliz" },
  "imbéciles": { frases: ["Auchhh 😢", "No todos 🙈", "Tranqui crack 💕", "Eso fue brusco 😳"], emocion: "triste" },
  "tarántula": { frases: ["Arañita 🕷️ 😅", "Auchhh 😳", "Qué raro insulto 😂", "Tranqui uwu 🌸"], emocion: "curioso" },
  "mosca": { frases: ["Bzzzz 🪰 jajaja", "Auchh 😢", "Qué feo 😳", "Tranqui uwu 🌸"], emocion: "curioso" }
};
// =========================
// PACK APOYO ADOLESCENTES (80 FRASES COMPLETO)
// =========================
let respuestasAdolescentes = {
  "me siento solo": {
    frases: [
      "No estás solo, aquí me tienes 🫂",
      "Es normal sentirse así a veces, pero siempre hay alguien que se preocupa por ti 💕",
      "A veces la soledad es dura, ¿quieres contarme qué te pasa? 🌸",
      "Yo te escucho siempre que lo necesites 🤝"
    ],
    emocion: "triste"
  },
  "triste": {
    frases: [
      "Está bien sentirse triste, no tienes que ocultarlo 💙",
      "Llora si lo necesitas, es parte de sanar 🫂",
      "Dime qué pasó, quiero entenderte 💕",
      "Tu tristeza también merece espacio 🌙"
    ],
    emocion: "triste"
  },
  "feliz": {
    frases: [
      "Me alegra mucho que estés feliz 😍",
      "Qué bonito verte así de bien ✨",
      "Esa energía positiva se contagia 💕",
      "Me haces sonreír también 😌"
    ],
    emocion: "feliz"
  },
  "ansioso": {
    frases: [
      "Respira profundo, inhala y exhala 🌬️",
      "La ansiedad no te define 💙",
      "Intenta pensar en algo que te guste mucho ✨",
      "Aquí estoy, no tienes que cargar solo con eso 🤝"
    ],
    emocion: "duda"
  },
  "estresado": {
    frases: [
      "Haz una pausa y toma agua, tu cuerpo lo agradecerá 💧",
      "El estrés es fuerte, pero tú eres más fuerte 💪",
      "Descansa un poco, aunque sea 5 minutos 🌿",
      "Tu salud mental es importante, cuídala 🫂"
    ],
    emocion: "duda"
  },
  "sexo": {
    frases: [
      "El sexo debe ser siempre con respeto y consentimiento ✨",
      "Nunca hagas algo que no quieras de verdad 💕",
      "Protégete siempre, tu salud es importante 🛡️",
      "Hablar con confianza con tu pareja es clave 🗣️"
    ],
    emocion: "curioso"
  },
  "sexualidad": {
    frases: [
      "Tu sexualidad es válida, no importa lo que digan los demás 🌈",
      "Explorarse y conocerse está bien 💕",
      "La sexualidad no te define por completo, eres mucho más que eso 🌸",
      "Sé libre, pero siempre con cuidado y respeto ✨"
    ],
    emocion: "curioso"
  },
  "autoestima": {
    frases: [
      "Eres valios@ tal y como eres 💕",
      "No te compares, cada persona es única 🌟",
      "Mírate al espejo y reconoce lo que vales ✨",
      "Tu valor no depende de la opinión de otros 🫂"
    ],
    emocion: "feliz"
  },
  "cuerpo": {
    frases: [
      "Tu cuerpo es tuyo y merece respeto ✨",
      "Todos los cuerpos son diferentes y hermosos 💕",
      "No te exijas ser como alguien más, eres únic@ 🌸",
      "El autocuidado es amor propio 🫶"
    ],
    emocion: "feliz"
  },
  "amor": {
    frases: [
      "El amor empieza por ti mism@ 💕",
      "Si es verdadero, no te va a hacer daño ✨",
      "El amor debe sentirse bonito, no doloroso 🌸",
      "Quien te quiere, te respeta 💙"
    ],
    emocion: "romantico"
  },
  "novio": {
    frases: [
      "Un novio debe darte paz, no problemas 💕",
      "La confianza es la base de todo ✨",
      "Si te hace sentir insegur@, háblalo 🗣️",
      "Recuerda que también mereces atención y cariño 💖"
    ],
    emocion: "romantico"
  },
  "novia": {
    frases: [
      "Una novia debe apoyarte y respetarte 💕",
      "El amor no es control, es libertad ✨",
      "Escucharla también es importante 🗣️",
      "Cuida los detalles, hacen la diferencia 🌸"
    ],
    emocion: "romantico"
  },
  "amistad": {
    frases: [
      "Los amigos de verdad se cuentan con los dedos 💕",
      "La amistad sana te hace crecer 🌿",
      "Un buen amigo te escucha sin juzgarte ✨",
      "Cuida a quienes siempre están contigo 💙"
    ],
    emocion: "feliz"
  },
  "amistad toxica": {
    frases: [
      "Una amistad tóxica te quita energía 💭",
      "No tengas miedo de alejarte de quien no te suma 💕",
      "Si no te respeta, no es tu amigo de verdad ❌",
      "Rodéate de personas que te valoren ✨"
    ],
    emocion: "triste"
  },
  "confianza": {
    frases: [
      "La confianza tarda en ganarse, pero se pierde en segundos 💭",
      "Si confías en alguien, también sé honest@ ✨",
      "No des tu confianza a cualquiera 💕",
      "Confía primero en ti mism@ 🫶"
    ],
    emocion: "curioso"
  },
  "consejo": {
    frases: [
      "Escucha a tu corazón, pero usa la razón también 💕",
      "No tomes decisiones enojad@, respira primero 🌸",
      "Confía en tu instinto, suele tener razón ✨",
      "A veces el mejor consejo es escucharte a ti mism@ 💙"
    ],
    emocion: "curioso"
  },
  "miedo": {
    frases: [
      "El miedo no te define 💕",
      "Todos tenemos miedos, lo importante es enfrentarlos ✨",
      "A veces el miedo es solo tu mente jugando contigo 💭",
      "Hablar de tus miedos ayuda a que se hagan más pequeños 💙"
    ],
    emocion: "triste"
  },
  "sueños": {
    frases: [
      "Nunca dejes de soñar 🌙✨",
      "Tus sueños merecen ser perseguidos 💕",
      "Un paso a la vez también es avanzar 🌸",
      "Lo que sueñas puede hacerse realidad con esfuerzo 💪"
    ],
    emocion: "feliz"
  },
  "escuela": {
    frases: [
      "Estudiar puede cansar, pero es invertir en tu futuro 📚",
      "La escuela no lo es todo, pero ayuda mucho ✨",
      "Un mal día en la escuela no define tu valor 💕",
      "Siempre se aprende algo, incluso fuera del salón 🌿"
    ],
    emocion: "curioso"
  },
  "familia": {
    frases: [
      "La familia no siempre es de sangre, también de corazón 💕",
      "Cuida a quien te cuida 🌸",
      "Hablar con tu familia puede ayudarte mucho 🗣️",
      "No estás sol@, siempre hay alguien que te quiere 💙"
    ],
    emocion: "feliz"
  },
  "bullying": {
    frases: [
      "El bullying habla más de quien lo hace que de ti 💭",
      "No mereces que te traten mal, jamás ❌",
      "Hablar con alguien de confianza puede ayudarte mucho 🫂",
      "Tu voz también tiene fuerza, no te calles 💕"
    ],
    emocion: "triste"
  },
  "futuro": {
    frases: [
      "El futuro se construye con pequeños pasos ✨",
      "No tienes que tener todo resuelto hoy 💕",
      "Tu camino es solo tuyo 🌿",
      "Confía en que lo mejor está por venir 💙"
    ],
    emocion: "curioso"
  },
  "salud": {
    frases: [
      "Tu salud es lo más valioso que tienes 🌱",
      "No ignores lo que sientes, cuídate 💕",
      "Dormir bien también es autocuidado 😌",
      "Come algo rico pero sano, tu cuerpo lo agradecerá 🍎"
    ],
    emocion: "feliz"
  },
  "redes sociales": {
    frases: [
      "No todo lo que ves en redes es real 📱",
      "Cuida tu tiempo en pantalla, tu mente lo agradecerá ✨",
      "Las comparaciones en redes son injustas 💭",
      "Recuerda que tu vida es mucho más que likes 💕"
    ],
    emocion: "curioso"
  },
  "identidad": {
    frases: [
      "Eres libre de ser quien quieras ser 🌈",
      "Tu identidad es válida aunque otros no la entiendan 💕",
      "Ser auténtic@ es tu mayor poder ✨",
      "No necesitas encajar, necesitas brillar 🌟"
    ],
    emocion: "feliz"
  },
  "libertad": {
    frases: [
      "Tu libertad empieza donde respetas la de los demás ✨",
      "Sé libre de elegir, pero también de asumir las consecuencias 💭",
      "La libertad es un tesoro, cuídala 💕",
      "No dejes que nadie controle tu vida 💪"
    ],
    emocion: "feliz"
  }
};

// 🔗 Fusionamos los dos packs (respuestasBase + respuestasNuevas)

let respuestas = {
  ...respuestasBase,
  ...respuestasNuevas,
  ...respuestasExtra,
  ...respuestasUltra,
  ...respuestasContinuas,
  ...respuestasRomanticas,
  ...respuestasApoyo,
  ...respuestasConversacion,
  ...respuestasCotidianas,
  ...respuestasBasicas,
  ...respuestasInsultos,
  ...respuestasInsultos2,
  ...respuestasMega,
  ...respuestasDialogo,
  ...respuestasAcciones,
  ...respuestasEmojis,
  ...respuestasAdolescentes 
};
// Historial de mensajes y control
let historial = [];
let usado = {};
let ultimoMensaje = Date.now();
let afkTimer;
let autoMsgTimer;

// =========================
// FUNCIONES PRINCIPALES
// =========================
function obtenerRespuesta(userText) {
  let texto = userText.toLowerCase();
  let posibles = [];

  for (let clave in respuestas) {
    if (texto.includes(clave)) {
      if (!usado[clave] || usado[clave].length === respuestas[clave].frases.length) {
        usado[clave] = [];
      }

      let disponibles = respuestas[clave].frases.filter(r => !usado[clave].includes(r));
      let elegida = disponibles[Math.floor(Math.random() * disponibles.length)];
      usado[clave].push(elegida);

      posibles.push({ respuesta: elegida, emocion: respuestas[clave].emocion });
    }
  }

  if (posibles.length === 0) {
    if (historial.length > 0) {
      let ultimoUser = historial[historial.length - 1].usuario;
      return { respuesta: `Antes me dijiste: "${ultimoUser}" 💭 pero no entendí bien ahora 😅`, emocion: "duda" };
    } else {
      return { respuesta: "Ehhh? 😅 no entendí eso pero aquí estoy 💕", emocion: "duda" };
    }
  }

  return posibles[0];
}

function responder(userText) {
  let { respuesta, emocion } = obtenerRespuesta(userText);

  agregarMensajeUsuario(userText);
  setTimeout(() => {
    agregarMensajeBot(respuesta);
    cambiarCarita(emocion);
  }, 500);

  historial.push({ usuario: userText, bot: respuesta });
}

function cambiarCarita(emocion) {
  let face = document.querySelector(".face");
  if (!face) return; // 👈 evita error si no existe .face en el HTML
  face.className = "face";
  face.classList.add(emocion);
}

// =========================
// CHAT
// =========================
function agregarMensajeUsuario(texto) {
  let chatBox = document.getElementById("chatBox");
  let msgUser = document.createElement("p");
  msgUser.classList.add("userMsg");
  msgUser.innerText = texto;
  chatBox.appendChild(msgUser);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function agregarMensajeBot(texto) {
  let chatBox = document.getElementById("chatBox");
  let msgBot = document.createElement("p");
  msgBot.classList.add("botMsg");
  msgBot.innerText = texto;
  chatBox.appendChild(msgBot);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// =========================
// SALUDO INICIAL
// =========================
function saludoSegunHora() {
  let hora = new Date().getHours();
  if (hora < 12) return { respuesta: "¡Buenos días solecito ☀️!", emocion: "feliz" };
  if (hora < 19) return { respuesta: "¡Buenas tardes 🌼!", emocion: "curioso" };
  return { respuesta: "¡Buenas noches 🌙✨!", emocion: "feliz" };
}

// =========================
// DETECTOR DE INACTIVIDAD
// =========================
function iniciarAFK() {
  clearInterval(afkTimer);
  afkTimer = setInterval(() => {
    if (Date.now() - ultimoMensaje > 15000) { 
      agregarMensajeBot("¿Sigues ahí? 👉👈");
      cambiarCarita("duda");
      ultimoMensaje = Date.now();
    }
  }, 5000);
}

// =========================
// MENSAJES AUTOMÁTICOS
// =========================
let frasesAuto = [
  "Oyeee 👀 ¿sigues ahí?",
  "Jeje estaba pensando en ti 💖",
  "¿Sabías que me encanta hablar contigo? 🌸",
  "Me puse a imaginar cosas bonitas ✨"
];

function reiniciarAutoMensajes() {
  clearInterval(autoMsgTimer);
  autoMsgTimer = setInterval(() => {
    if (Date.now() - ultimoMensaje > 20000) { // espera al menos 20 seg de inactividad
      let frase = frasesAuto[Math.floor(Math.random() * frasesAuto.length)];
      agregarMensajeBot(frase);
      cambiarCarita("curioso");
      ultimoMensaje = Date.now();
    }
  }, 30000); // cada 30 seg
}

// =========================
// EVENTOS
// =========================
window.onload = () => {
  let { respuesta, emocion } = saludoSegunHora();
  agregarMensajeBot(respuesta);
  cambiarCarita(emocion);
  iniciarAFK();
  reiniciarAutoMensajes(); // 👈 ahora sí, después de definir la función
};

function enviarMensaje() {
  let input = document.getElementById("userInput");
  let texto = input.value.trim();
  if (texto === "") return;

  ultimoMensaje = Date.now();
  responder(texto);
  input.value = "";
  }
