let nome = [];
let email = [];
let senha = [];

const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nomeValue = document.getElementById('nomeInput').value;
    const emailValue = document.getElementById('emailInput').value;
    const senhaValue = document.getElementById('senhaInput').value;
    
    nome.push(nomeValue);
    email.push(emailValue);
    senha.push(senhaValue);
    
    console.log('Arrays atualizados:', nome, email, senha);
});