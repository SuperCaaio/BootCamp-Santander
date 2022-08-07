/* Você deve escrever um programa que, dados o número e o comprimento dos lados de um polígono regular, mostre seu perímetro.

Entrada
A entrada tem dois inteiros positivos: N e L, que são, respectivamente, o número de lados e o comprimento de cada lado de um polígono regular (3 ≤ N ≤ 1000000 and 1 ≤ L ≤ 4000).

Saída
A saída é o perímetro P do polígono regular em uma única linha.

 
Exemplos de Entrada	Exemplos de Saída
3 1                      3
9 8                      72
 */

let lines = gets().split("\n");
let line = lines.shift().split(' ');

const N = line[0]

const L = line[1]

const P = Number(N) * Number(L)

print(P);