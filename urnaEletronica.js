function urnaEletronica (){

    let candidato1 =0 , candidato2 =0 ,candidato3 = 0, votoNulo =0, votoBranco = 0;
    let numeroCandidato,numeroTotalVotos, votoInvalido;

    let nomeCandidato1, nomeCandidato2, nomeCandidato3 ;

    let soma;
    let percentualC1,percentualC2,percentualC3,percentualVotoB;

    let encerraVotacao = false, confirmaVotacao = false;

    const confirmaEncerramento = 'N', confirmaVoto = 'N';

    console.log("Coloque o nome do Candidato 1: ");
    prompt(nomeCandidato1);

    console.log("Coloque o nome do Candidato 2: ");
    prompt(nomeCandidato2);

    console.log("Coloque o nome do Candidato 3: ");
    prompt(nomeCandidato3);
    console.clear();

    do{
        console.log(">> ELEIÇOES 2023 SEJAM BEM-VINDOS << \n");
        console.log(" > Opções de voto < \n");
        console.log(" 1 |", nomeCandidato1, "\n");
        console.log(" 2 |", nomeCandidato2, "\n");
        console.log(" 3 |", nomeCandidato3, "\n");

        console.log("Digite o numero do candidato: ");
        prompt(numeroCandidato);

    switch (numeroCandidato){

        case 1:
            candidato1++
            console.log("Candidato 1 recebeu um voto \n");
            console.log("DESEJA CONFIRMAR VOTAÇÃO? \n");
            console.log("digite S para 'SIM' ou N para 'NÃO':  \n");
            prompt(confirmaVoto);

            if(confirmaVoto == 's' || confirmaVoto == 'S'){
                confirmaVotacao = true
                console.log("VOTO CONFIRMADO! \n");
                audioConfirmacao
            }

    }    
    }






















 }//fim função urnaeletronica()

    function audioConfirmacao(){
        const audio = new audio("./confirmacao.mp3");
        audio.play();
    }//fim função audioconfirmacao()




