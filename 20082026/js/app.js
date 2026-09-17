import { validarCPF, baixarTXT } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nomeInput = document.getElementById('nome');
    const cpfInput = document.getElementById('cpf');

    const nome = nomeInput ? nomeInput.value.trim() : '';
    const cpf = cpfInput ? cpfInput.value.trim() : '';

    if (!validarCPF(cpf)) {
      alert('CPF inválido!');
      return;
    }

    const dataAtual = new Date().toLocaleString('pt-BR');
    const conteudo = `====================================\n   ROCK IN RIO - COMPROVANTE\n====================================\nNome: ${nome}\nCPF: ${cpf}\nData de Emissão: ${dataAtual}\nStatus: Confirmado\n====================================`;

    const nomeFormatado = nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '_');
    const nomeArquivo = `ingresso_${nomeFormatado}.txt`;

    baixarTXT(conteudo, nomeArquivo);
    alert('Comprovante gerado com sucesso!');
  });
});