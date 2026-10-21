// src/contents/fisica.js
export const fisicaContents = {
  "fis-1": {
    title: "Cinemática",
    subtitle: "Movimento Uniformemente Variado (MUV)",
    category: "Física",
    content: [
      "O Movimento Uniformemente Variado (MUV) acontece quando a velocidade de um corpo muda de maneira constante ao longo do tempo. Isso significa que ele possui aceleração constante e diferente de zero.",

      "Galileu Galilei suspeitou que um objeto em queda não mantinha a velocidade constante, mas aumentava sua velocidade regularmente. Para testar isso, ele usou um plano inclinado com uma canaleta, fazendo uma bola rolar pela rampa. A inclinação deixava o movimento mais lento e facilitava a medição do tempo.",

      "Galileu percebeu que, em intervalos de tempo iguais, a bola percorria distâncias cada vez maiores. Ele concluiu que a distância era proporcional ao quadrado do tempo: se o tempo dobrava, a distância percorrida ficava quatro vezes maior.",

      "Com esse experimento, Galileu mostrou que a queda livre é um movimento uniformemente acelerado. Assim surgiu a base do MUV, em que a velocidade varia igualmente a cada intervalo de tempo."
    ],
    formulas: [
      "v = v_0 + a \\cdot t",
      "S = S_0 + v_0 \\cdot t + \\frac{a \\cdot t^2}{2}",
      "v^2 = v_0^2 + 2 \\cdot a \\cdot \\Delta S"
    ]
  },

  "fis-2": {
    title: "Leis de Newton",
    category: "Física",
    content: [
      "As Leis de Newton são a base da mecânica clássica e explicam a relação entre forças e movimento.",
      "A Primeira Lei, ou Lei da Inércia, diz que um corpo permanece em repouso ou em movimento retilíneo uniforme se a força resultante sobre ele for nula.",
      "A Segunda Lei relaciona força, massa e aceleração: quanto maior a força aplicada, maior a aceleração; quanto maior a massa, menor a aceleração para uma mesma força.",
      "A Terceira Lei afirma que toda força de ação gera uma força de reação de mesma intensidade, mesma direção e sentido oposto."
    ],
    formulas: [
      "F_R = m \\cdot a"
    ]
  }
};