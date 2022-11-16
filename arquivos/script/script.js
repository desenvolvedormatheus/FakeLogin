function abrircadastrar() {
    var fundocadastro = document.querySelector('.conteiner1')
    var paginacadastro = document.querySelector('.conteiner2')
    fundocadastro.style.opacity = '0.2'
    paginacadastro.style.display = 'flex'
}

function btnfecharnovaconta() {
    var fundocadastro = document.querySelector('.conteiner1')
    fundocadastro.style.opacity = '1'
    var paginacadastro = document.querySelector('.conteiner2')
    paginacadastro.style.display = 'none'
}