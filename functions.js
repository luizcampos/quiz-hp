var arrayPerguntas = ["Qual feitiço Harry usou para matar Lord Voldemort?","Na primeira reunião do Clube de Duelo, Draco Malfoy invocou qual animal com o feitiço 'Serpensortia'?","É Levi-O-sa, não…", "O feitiço 'Felifors' transforma um gato em um...?","Qual Patronus pertence a Luna Lovegood?"];
var arrayAlternativas = ["Expelliarmus", "Expectro Patronum", "Avada Kedavra", "Accio", "btn-Alternativa1", "Sapo", "Serpente", "Coelho", "Dragão", "btn-Alternativa2", "Levi-o-SA", "LEVI-o-sa", "Levi-O-sa", "Le-VI-o-sa", "btn-Alternativa1", "Chapéu", "Bastão", "Caixa de fósforo", "Caldeirão", "btn-Alternativa4", "Corça", "Coelho", "Cachorro", "Cavalo", "btn-Alternativa2"];
var indicePergunta = 0, indiceAlternativa = 0, indiceAlternativa2 = 0, acertos = 0;
indiceAlternativa = carregarPergunta(indicePergunta,indiceAlternativa2); //4

function carregarPergunta(indicePergunta,indiceAlternativa2){
    'use restrict';
    if(indiceAlternativa === 25){
        if(acertos === 0){
            document.querySelector('#pergunta').textContent = "Ixi! Você teve " + acertos + " acerto."; 
        }else if(acertos === 1){
            document.querySelector('#pergunta').textContent = "Dumbledore está decepcionado! Você teve " + acertos + " acerto."; 
        }
        else{
            document.querySelector('#pergunta').textContent = "Malfeito feito! Seu resultado foi de " + acertos + " acertos."; 
        }
        document.querySelector('#secaoAlternativas').innerHTML = "<p></p>";
    }
    else{
        document.querySelector('#pergunta').textContent = arrayPerguntas[indicePergunta];

        for(var i = 0; i < 4; i++){ //roda quatro alternativas (botões)
            var listBotoes = document.querySelectorAll('button');
            listBotoes[i].textContent = arrayAlternativas[indiceAlternativa2];
            indiceAlternativa++; 
            indiceAlternativa2++;
        }
        return indiceAlternativa;
    }
}

function analisarResposta(botaoClicado){
    'use restrict';
    if(arrayAlternativas[indiceAlternativa] === botaoClicado){
        alert('Resposta correta!');
        acertos++;
    }
    else{
        alert('Resposta errada!');
    }
    indicePergunta++;
    indiceAlternativa++;
    carregarPergunta(indicePergunta,indiceAlternativa);
}