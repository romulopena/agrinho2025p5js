// Variáveis para armazenar informações sobre os elementos
let elementos = [
  { nome: "Plantação de Milho", x: 100, y: 150, tipo: "campo", info: "O milho cultivado no campo é utilizado na produção de alimentos na cidade, como farinha e óleo." },
  { nome: "Mercado Municipal", x: 450, y: 100, tipo: "cidade", info: "No mercado, os consumidores da cidade têm acesso a diversos produtos frescos vindos diretamente do campo." },
  { nome: "Trator", x: 150, y: 300, tipo: "campo", info: "O trator é uma ferramenta essencial no campo para o preparo da terra e plantio, auxiliando na produção de alimentos para a cidade." },
  { nome: "Fábrica de Alimentos", x: 400, y: 250, tipo: "cidade", info: "Na fábrica, matérias-primas do campo, como leite e frutas, são processadas e transformadas em diversos produtos consumidos na cidade." }
  // Adicione mais elementos conforme necessário
];

let elementoAtivo = null;

function setup() {
  createCanvas(600, 400);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(220);

  // Desenha os elementos
  for (let i = 0; i < elementos.length; i++) {
    let elemento = elementos[i];
    fill(elemento.tipo === "campo" ? color(100, 180, 100) : color(150, 150, 200));
    ellipse(elemento.x, elemento.y, 60, 60);
    fill(0);
    textSize(12);
    text(elemento.nome, elemento.x, elemento.y + 30);

    // Se o elemento estiver ativo, destaca e mostra a informação
    if (elementoAtivo === i) {
      stroke(0);
      noFill();
      ellipse(elemento.x, elemento.y, 70, 70);
      noStroke();
      fill(0);
      textSize(16);
      text(elemento.info, width / 2, height - 50);
    }
  }
}

function mousePressed() {
  // Verifica se o mouse clicou em algum elemento
  for (let i = 0; i < elementos.length; i++) {
    let distancia = dist(mouseX, mouseY, elementos[i].x, elementos[i].y);
    if (distancia < 30) { // Raio do círculo é 30
      elementoAtivo = i;
      return; // Sai do loop após encontrar um clique
    }
  }
  // Se clicou fora de um elemento, desativa o elemento ativo
  elementoAtivo = null;
}