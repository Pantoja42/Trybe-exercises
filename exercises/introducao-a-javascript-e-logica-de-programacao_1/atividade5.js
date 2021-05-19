// Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

let grauAnguloA = 70;
let grauAnguloB = 60;
let grauAnguloC = 60;

let sumDosAngulos = grauAnguloA + grauAnguloB + grauAnguloC;

let todosOsAngulosSaoPositivos = grauAnguloA > 0 && grauAnguloB > 0 && grauAnguloC > 0;

if(todosOsAngulosSaoPositivos){
  if (sumDosAngulos === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Erro: ângulo inválido');
}