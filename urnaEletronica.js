function urnaEletronica (){

    let candidato1 =0 , candidato2 =0 ,candidato3 = 0, votoNulo =0, votoBranco = 0;
    let numeroCandidato,numeroTotalVotos, votoInvalido;

    let nomeCandidato1, nomeCandidato2, nomeCandidato3 ;

    let soma;
    let percentualC1,percentualC2,percentualC3,percentualVotoB;

    let encerraVotacao = false, confirmaVotacao = false;

    const confirmaEncerramento = 'N', confirmaVoto = 'N';

    nomeCandidato1 = prompt("Coloque o nome do Candidato 1: ");

    nomeCandidato2 = prompt("Coloque o nome do Candidato 2: ");

    nomeCandidato3 = prompt("Coloque o nome do Candidato 3: ");
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
                alert("Voto Confirmado \n");
                audioConfirmacao(); 
            }
                console.clear();
                break;
        case 2:
            candidato2++
            console.log("Candidato 2 recebeu um voto \n");
            console.log("DESEJA CONFIRMAR VOTAÇÃO? \n");
            console.log("digite S para 'SIM' ou N para 'NÃO':  \n");
            prompt(confirmaVoto);
        
            if(confirmaVoto == 's' || confirmaVoto == 'S'){
                confirmaVotacao = true
                alert("Voto Confirmado \n");
                audioConfirmacao();  
            }    
                console.clear();
                break;
        case 3:
            candidato2++
            console.log("Candidato 3 recebeu um voto \n");
            console.log("DESEJA CONFIRMAR VOTAÇÃO? \n");
            console.log("digite S para 'SIM' ou N para 'NÃO':  \n");
            prompt(confirmaVoto);
                
            if(confirmaVoto == 's' || confirmaVoto == 'S'){
                confirmaVotacao = true
                alert("Voto Confirmado \n");
                audioConfirmacao();   
            }            
                console.clear();
                break;
        case 6:
            votoBranco++
            console.log("Voto em Branco \n");
            console.log("DESEJA CONFIRMAR VOTAÇÃO? \n");
            console.log("digite S para 'SIM' ou N para 'NÃO':  \n");
            prompt(confirmaVoto);
                        
            if(confirmaVoto == 's' || confirmaVoto == 'S'){
                confirmaVotacao = true
                alert("Voto Confirmado \n");
                audioConfirmacao();   
            }                    
                console.clear();
                break;
    
        case 9:
            votoNulo++
            console.log("Voto Nulo \n");
            console.log("DESEJA CONFIRMAR VOTAÇÃO? \n");
            console.log("digite S para 'SIM' ou N para 'NÃO':  \n");
            prompt(confirmaVoto);
                                
            if(confirmaVoto == 's' || confirmaVoto == 'S'){
                confirmaVotacao = true
                alert("Voto Confirmado \n");
                audioConfirmacao();   
            }                    
                console.clear();
                break;

        case 19071993:
            console.log(">> DESEJA REALMENTE ENCERRAR A VOTAÇÃO? \n");
            console.log("digite S para 'SIM' ou N para 'NÃO':  \n");
            prompt(confirmaEncerramento);
                                
            if(confirmaEncerramento == 's' || confirmaEncerramento == 'S'){
                confirmaEncerramento = true
                alert("VOTAÇÃO ENCERRADA! \n");
                audioConfirmacao();   
            }                    
                console.clear();
                break;
            
        default:
        alert("VOTO INVALIDO \n");
            break
         }   

    }while ( ! encerraVotacao);

        if( candidato1 > candidato2 && candidato1 > candidato3){
		    candidato1 = candidato1 + votoBranco
			console.log(" CANDIDATO 1 GANHOU com ", candidato1 , " " ,"votos \n");			
		} 
        else if(candidato2 > candidato1 && candidato2 > candidato3){
			    candidato2 = candidato2 + votoBranco
			    console.log("CANDIDATO 2 GANHOU com ", candidato2 , " " ,"votos \n");
        }
        else if(candidato3 > candidato2 && candidato3 > candidato1){
			    candidato3 = candidato3 + votoBranco
		        console.log("CANDIDATO 3 GANHOU com ", candidato3 , " " ,"votos \n");		
		}
        else if(candidato1 == candidato2 && candidato1 == candidato3 && candidato2 == candidato3){
			console.log(" Empate!");
        }    

        soma = candidato1+candidato2+candidato3+votoNulo+votoBranco
        percentualC1 = (candidato1/soma)*100
        percentualC2 = (candidato2/soma)*100
        percentualC3 = (candidato3/soma)*100
 		percentualVotoB = (votoBranco/soma)*100

        candidato1 = percentualC1
        console.log("Candidato 1 ", nomeCandidato1," ficou com ", candidato1, " "," %" , " dos votos \n");

        candidato2 = percentualC2
        console.log("Candidato 2 ", nomeCandidato2," ficou com ",candidato2," "," %" , " dos votos \n");

        candidato3 = percentualC3
        console.log("Candidato 3 ", nomeCandidato3," ficou com ",candidato3," "," %" , " dos votos \n");

        votoBranco = percentualVotoB
        console.log("Votos em Branco com ",votoBranco," "," %" , " dos votos \n");
        audioConfirmacao()

 }//fim função urnaeletronica()

    function audioConfirmacao(){
        const audio = new audio("./confirmacao.mp3");
        audio.play();
    }//fim função audioconfirmacao()



