const form = document.getElementById('FormAtividade');
const imgAprov = '<img src="./images/aprovado.png" alt="emogi celebrando" height="30px" />';
const imgReprov = '<img src="./images/reprovado.png" alt="emogi triste" height="30px" />';
let linhas = '';
const atividades = [];
const notas = [];
const notaMin = parseFloat(prompt('digite a nota mínima: '));

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    calculaMediaFinal();
    atualizamedia();
});

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('NomeAtividade');
    const inputNotaAtividade = document.getElementById('NotaAtividade');

    if (atividades.includes(inputNomeAtividade.value))  {
        alert(`A atividade ${inputNomeAtividade.value} já existe`);
    }

    else {
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));
    
        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMin ? imgAprov : imgReprov}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    
        inputNomeAtividade.value = '';
        inputNotaAtividade.value = '';
    }

  
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizamedia() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('MediaFinalValor').innerHTML = mediaFinal.toFixed(1); // Ajuste para mostrar uma casa decimal
    document.getElementById('MediaFinalResultado').innerHTML = mediaFinal >= notaMin ? 'aprovado' : 'reprovado';
    document.getElementById('MediaFinalResultado').className = mediaFinal >= notaMin ? 'aprovado' : 'reprovado';
}

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;
}
