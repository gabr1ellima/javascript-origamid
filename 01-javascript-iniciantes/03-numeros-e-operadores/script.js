var total = 10 + 5 + 10;
var divisao = 200 / 5;
var modulo = 14 % 5;

console.log(total);
console.log(divisao);
console.log(modulo);

var testeNaN = 'Isso é 100' / 2;

console.log(isNaN(testeNaN));

var num1 = 23;

var num2 = 10;

var verifica = isNaN(num1);

if (verifica === true) {
  console.log('Digite o número novamente');
} else {
  console.log(num1 + num2);
}

var x = 5;
console.log(x++);
console.log(--x);

var idade = ' 28';
var somaIdade = 10;

console.log(+idade + somaIdade);
