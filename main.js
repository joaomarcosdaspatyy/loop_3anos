
function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("QUAL ÚLTIMO TIME Á GANHAR O MUNDIAL?");

    
    if (respostaTime.toLowerCase() === "corinthians") {
      alert("Isso mesmo! O último vencedor é o Timão!!");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Timão campeão dos campeões!");
    }
  }
}

// Chamada da função para iniciar o processo
verificarTime();

  
