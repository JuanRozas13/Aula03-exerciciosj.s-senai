var salario = parseFloat(prompt("Digite seu salario Atual"));

var porcentagem = parseFloat(prompt("Digite a Porcentagem do aumento que teve em seu salário"));

porcentagem_1 = porcentagem / 100;

resultado = (salario * porcentagem_1);

alert("Olá Seu Salario passou de " + salario + " para " + (salario + resultado) + " O aumento foi de " + porcentagem + "%")