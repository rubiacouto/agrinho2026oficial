let producao = 50;
let sustentabilidade = 50;
let recursos = 100;

// Atualiza os números na tela
function atualizarTela() {

  document.getElementById("producao").innerText =
    producao;

  document.getElementById("sustentabilidade").innerText =
    sustentabilidade;

  document.getElementById("recursos").innerText =
    recursos;
}

// Mostra mensagens
function mostrarMensagem(texto) {

  document.getElementById("mensagem").innerHTML =
    texto;
}

// Tecnologias
function usarTecnologia(tipo) {

  if (recursos < 20) {

    mostrarMensagem(
      "❌ Recursos insuficientes!"
    );

    return;
  }

  recursos -= 20;

  if (tipo === "plantio") {

    producao += 15;
    sustentabilidade += 10;

    mostrarMensagem(
      "🌱 Plantio Direto aumentou a produção!"
    );
  }

  else if (tipo === "solar") {

    sustentabilidade += 20;

    mostrarMensagem(
      "☀️ Energia solar instalada!"
    );
  }

  else if (tipo === "drone") {

    producao += 10;
    sustentabilidade += 5;

    mostrarMensagem(
      "🚁 Drone agrícola monitorou a fazenda!"
    );
  }

  atualizarTela();
}

// Pesquisa climática
function pesquisarClima() {

  const previsoes = [
    "🌵 Possível seca",
    "🌧️ Chuvas fortes podem chegar",
    "🐛 Risco de pragas agrícolas",
    "🌞 Clima favorável para safra"
  ];

  let mensagem =
    "🔎 Pesquisa Climática:<br><br>";

  for (let i = 0; i < 2; i++) {

    const sorteio =
      previsoes[Math.floor(Math.random() * previsoes.length)];

    mensagem += sorteio + "<br>";
  }

  mostrarMensagem(mensagem);
}

// Evento climático
function eventoClimatico() {

  const eventos = [
    "seca",
    "chuva",
    "praga",
    "climaBom"
  ];

  const evento =
    eventos[Math.floor(Math.random() * eventos.length)];

  if (evento === "seca") {

    if (sustentabilidade >= 60) {

      producao -= 5;

      mostrarMensagem(
        "🌵 Houve seca, mas sua preservação ajudou!"
      );

    } else {

      producao -= 20;
      recursos -= 15;

      mostrarMensagem(
        "🔥 Seca severa causou perdas!"
      );
    }
  }

  else if (evento === "chuva") {

    if (sustentabilidade >= 60) {

      mostrarMensagem(
        "🌧️ Suas técnicas evitaram enchentes!"
      );

    } else {

      producao -= 15;

      mostrarMensagem(
        "🌊 Chuvas destruíram parte da produção!"
      );
    }
  }

  else if (evento === "praga") {

    producao -= 10;

    mostrarMensagem(
      "🐛 Uma praga atacou a fazenda!"
    );
  }

  else if (evento === "climaBom") {

    producao += 20;
    recursos += 20;

    mostrarMensagem(
      "🌞 Clima perfeito! Excelente safra!"
    );
  }

  // Evita números negativos
  producao = Math.max(0, producao);
  recursos = Math.max(0, recursos);
  sustentabilidade = Math.max(0, sustentabilidade);

  atualizarTela();
}

// Inicializa jogo
window.onload = atualizarTela;

// Desce suavemente até a lavoura
function irParaLavoura() {

  const secao =
    document.getElementById("explicacao-lavoura");

  secao.scrollIntoView({
    behavior: "smooth"
  });
  
  // Direciona até o título da lavoura sustentável
function irParaLavoura() {

  const titulo =
    document.getElementById("titulo-lavoura");

  titulo.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

