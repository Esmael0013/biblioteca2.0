function addToHistorico(emprestimo) {
    const table = document.getElementById('historicoTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    newRow.insertCell(0).textContent = emprestimo.nomeAluno;
    newRow.insertCell(1).textContent = emprestimo.numeroCGM;
    newRow.insertCell(2).textContent = emprestimo.nomeLivro;
    newRow.insertCell(3).textContent = emprestimo.numeroLivro;
    newRow.insertCell(4).textContent = emprestimo.dataEntrega;
}

function loadHistoricoFromLocalStorage() {
    const historico = JSON.parse(localStorage.getItem('historico')) || [];
    historico.forEach(emprestimo => addToHistorico(emprestimo));
}

window.onload = function() {
    loadFromLocalStorage();
    loadHistoricoFromLocalStorage();
};
