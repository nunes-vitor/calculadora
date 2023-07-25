let historicoContas = []; // Variável para armazenar o histórico de contas

function calcular() {
  const operacaoSelecionada = document.getElementById('operacao').value;
  const valor1 = parseFloat(document.getElementById('valor1').value);
  const valor2 = parseFloat(document.getElementById('valor2').value);

  // Verifica se algum dos campos está vazio
  if (isNaN(valor1) || isNaN(valor2)) {
    Swal.fire({
      icon: 'error',
      title: 'Erro',
      text: 'Por favor, preencha ambos os campos com números válidos.',
    });
    return;
  }

  let resultado;

  switch (operacaoSelecionada) {
    case 'soma':
      resultado = soma(valor1, valor2);
      break;
    case 'subtracao':
      resultado = subtracao(valor1, valor2);
      break;
    case 'multiplicacao':
      resultado = multiplicacao(valor1, valor2);
      break;
    case 'divisao':
      resultado = divisao(valor1, valor2);
      break;
    default:
      resultado = 'Operação inválida';
      break;
  }

  const operacao = `${valor1} ${operacaoSelecionada} ${valor2} = ${resultado}`;
  historicoContas.push(operacao); // Adiciona a operação atual ao histórico

  resultadoUltimaConta = `Resultado: ${resultado}`;
  document.getElementById('resultado').innerText = resultadoUltimaConta;
}

function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  if (b === 0) {
    return 'Erro: divisão por zero';
  }
  return a / b;
}

function sair() {
  if (historicoContas.length > 0) {
    Swal.fire({
      icon: 'success',
      title: 'Histórico de contas:',
      html: `<ul>${historicoContas.map(conta => `<li>${conta}</li>`).join('')}</ul>Feliz em te ajudar, Até a próxima!`,
    }).then(() => {
      location.reload(); // Reinicia a página após o usuário clicar no botão "OK"
    });
  } else {
    Swal.fire({
      icon: 'info',
      title: 'Feliz em te ajudar, Até a próxima!',
    }).then(() => {
      location.reload(); // Reinicia a página após o usuário clicar no botão "OK"
    });
  }
}
