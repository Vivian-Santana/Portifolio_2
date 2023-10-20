/*lerta de feedback para o usuário, exibe um alert "Mensagem enviada com sucesso!" 
depois do botão de enviar ser acionado.*/

// pega o botão pelo id enviar
const botaoEnviar = document.getElementById('enviar');

//função que desencadeia o alerta
botaoEnviar.addEventListener ('click', function() {
    // depois de o botão ser clicado, exibe o alerta
    alert('Mensagem enviada com sucesso!');
});