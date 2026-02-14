let btn = document.getElementById("alternarEstilo");
btn.addEventListener("click", alternarEstilo);
let modoVermelho = false; // começa no modo azul padrão

function alternarEstilo() {
  const body = document.body;
  const botoes = document.querySelectorAll(".botao");
  const container = document.querySelector(".container");
  const boxes = document.querySelectorAll(".box");
  const rows = document.querySelectorAll(".row");
  const docsbtn = document.getElementById("docs");

  if (!modoVermelho) {
    // 🎨 Muda o tema para vermelho
    body.style.backgroundColor = "#5c0b0b";
    container.style.background = "rgba(255, 255, 255, 0.08)";
   
    boxes.forEach((box) => {
      box.style.setProperty("border", "1px solid #fff", "important");
    });
    
    docsbtn.href = "https://docs.google.com";
    docsbtn.innerText = "📄 Plot - Hellhound";
    // 🔁 Muda o conteúdo das linhas
    document.getElementById("nome").textContent = "Akin/Akoman";
    document.getElementById("nacionalidade").textContent = "Inferno";
    document.getElementById("idade").textContent = "???";
    document.getElementById("sexo").textContent = "Hellhound Alfa/Dêmonio";
    // rows[0].innerHTML = `
    // <div class="box">
    //   <strong>Nome:</strong> Akin/Akoman
    //   </div>
    //   <div class="box">
    //   <strong>Origem:</strong> Inferno
    //   </div>
    //   `;
      // rows[1].innerHTML = `
      // <div class="box">
      // <strong>Idade:</strong> ???
      // </div>
      // <div class="box">
      // <strong>Espécie:</strong> Hellhound Alfa
      // /Dêmonio
      // </div>
      // `;
      rows[2].innerHTML = `
      <div class="box">
      <strong>Condição:</strong> Transformado
      </div>
      <div class="box">
      <strong>Lua:</strong> Cheia
      </div>
      `;
      rows[3].innerHTML = `
      <div class="box">
      <h3>Poderes</h3>
      <ul>
      <li>• Criação ilusões</li>
      <li>• Chamas infernais</li>
      <li>• Força sobre-humana</li>
      <li>• Manipulação de almas</li>
      <li>• Distorcer pensamentos</li>
      <li>• Regeneração acelerada</li>
      </ul>
      </div>
      
      <div class="box">
      <h3>Coisas que se gosta</h3>
      <ul>
      <li>• Dor</li>
      <li>• Caos</li>
      <li>• Gritos</li>
      <li>• Desespero</li>
      <li>• Sofrimento</li>
      <li>• Carne vermelha</li>
      </ul>
      </div>`;


      
      document.querySelector("p").innerText = "🔥 Forma infernal ativada 🔥";

      botoes.forEach((botao) => {
        botao.style.backgroundColor = "#a32020";
        botao.style.color = "white";
      });
      btn.style.backgroundColor = "#001060ff";
      btn.style.color = "white";


      document.querySelector("h1").innerText = "@hell.aprilmoon";

    modoVermelho = true;
  } else {
    // 🔵 Volta ao modo azul original
    body.style.backgroundColor = "#001681ff";
    container.style.background = "rgba(255, 255, 255, 0.05)";
    boxes.forEach((box) => {
      box.style.border = "1px solid #90b0e8";
    });
    botoes.forEach((botao) => {
      botao.style.backgroundColor = "#282467";
      botao.style.color = "aliceblue";
    });

        btn.style.backgroundColor = "#a22525";
        btn.style.color = "black";

    docsbtn.href = "https://docs.google.com";
    docsbtn.innerText = "📄 História / Passado";
    // 🔁 Restaura o conteúdo original das linhas
    document.getElementById("nome").textContent = "Damian Monteiro Hernandez";
    document.getElementById("nacionalidade").textContent = "Chinês/Espanhol";
    document.getElementById("idade").textContent = "23";
    document.getElementById("sexo").textContent = "Masculino (Híbrido: Hellhound)";
    // rows[0].innerHTML = `
    //   <div class="box">
    //   <strong>Nome:</strong> Damian Monteiro Hernandez</div>
    //   <div class="box">
    //   <strong>Nacionalidade:</strong> Chinês/Espanhol</div>
    // `;
    // rows[1].innerHTML = `
    //   <div class="box">
    //   <strong>Idade:</strong> 23</div>
    //   <div class="box">
    //   <strong>Sexo:</strong> Masculino <strong>(Híbrido:</strong> Hellhound)</div>
    // `;
    rows[2].innerHTML = `
      <div class="box">
      <strong>Sexualidade:</strong> Pansexual</div>
      <div class="box">
      <strong>MBTI:</strong> ENTP</div>
    `;
    rows[3].innerHTML = `
      <div class="box">
            <h3>Personalidade</h3>
            <ul>
              <li>• Leal</li>
              <li>• Impulsivo</li>
              <li>• Confiável</li>
              <li>• Engraçado</li>
              <li>• Extrovertido</li>
              <li>• Temperamental</li>
            </ul>
          </div>
    
      <div class="box">
            <h3>Coisas que odeia</h3>
            <ul>
              <li>• Gengibre</li>
              <li>• Desrespeito</li>
              <li>• Pré lua cheia</li>
              <li>• Noite de lua cheia</li>
              <li>• Falta de consideração</li>
              <li>• Falta de reciprocidade</li>
            </ul>
          </div>`;

    document.querySelector("h1").innerText = "@hell.aprilmoon";
    document.querySelector("p").innerText =
      "Bem-vindo(a)! Escolha um link abaixo:";

    modoVermelho = false;
  }
}
