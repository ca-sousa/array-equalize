// PRIMEIRA ETAPA:
// X/N que são pixels;
// K que é o nivel de luminosidade. 
// Tem uma tabela que é o nivel de luminosidade por pixel.

// SEGUNDA ETAPA:
// ** L é o maior valor da tabela.
// H(k) quantas vezes o K = x se repete.
// Ha(k) soma o H(k) + H(k) da proxima coluna (meio que na diagonal)  = tendencia de dar o n de pixel.
// pk= Ha(k)/N
// k'=9*pk

// TERCEIRA ETAPA:
// Os pixels que tinham o valor de k passam a ter o valor de k'.
// g(x) = k' -> fazemos a substituição de k por k'

function start() {
    array =  [0, 0, 4, 6, 8, 8, 4, 7, 8, 9, 9, 4, 3, 2, 3, 8, 2, 2, 1, 0]
}