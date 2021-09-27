'use strict';

var readlineSync = require("readline-sync"); //conexão com a biblioteca readLine-sync
var strData, dataPartes, data, insevento, palestrante, participante;
var opcao
var quantParticipantes, idade, quantEventos, quantPalestrantes;
//Criando os vetores
var listaEvento = [], listaPalestrante = [], listaParticipantes = [];
const numParticipantes = 4;

do{
    console.log();
    console.log("\t\t----- Sistema de Cadastro de Eventos -----");
    console.log("\t1 - Cadastrar Evento");
    console.log("\t2 - Cadastrar Palestrante");
    console.log("\t3 - Cadastrar Participantes");
    console.log("\t4 - Listar Evento");
    console.log("\t5 - Listar Palestrante");
    console.log("\t6 - Listar Participantes");
    console.log("\t0 - Sair do Sistema\n");

    opcao = readlineSync.question("\tDigite a opcao desejada: ");

    switch(opcao){
        case '1': //Cadastro de Evento
            console.log("\t--- Cadastro de Evento ---");
            strData = readlineSync.question("Digite uma data valida (00/00/0000): ");
            dataPartes = strData.split("/");
            data = new Date(dataPartes[2], dataPartes[1] - 1, dataPartes[0]);
            //Testando a data para fazer o cadastro do Evento
            if(data < new Date()){
                console.log("Desculpe, o Evento não pode ser Cadastrado!");
            } else {
                insevento = readlineSync.question("Digite o nome do Evento: ");
                listaEvento.push(insevento);
            }
            break;
        case '2':   //Cadastro de Palestrante
            console.log("\t--- Cadastro de Palestrante ---");
            palestrante = readlineSync.question("Digite o nome do Palestrante: ");
            listaPalestrante.push(palestrante);
            break;
        case '3':   //Cadastro de Participantes
            console.log("\t--- Cadastro de Participantes ---");
            quantParticipantes = listaParticipantes.length;
            if(quantParticipantes < numParticipantes){
                participante = readlineSync.question("Digite o nome do Participante: ");
                idade = readlineSync.question("Digite a idade do Participante: ");
                if(idade >= 18){
                    listaParticipantes.push(participante);
                    console.log("Participante cadastrado com Sucesso!!!");
                } else {
                    console.log("Não permitido o Cadastro por ser menor de Idade!!!");
                }
            } else {
                console.log("Evento completo, não temos mais vagas!!!");
            }
            break;
        case '4':
            console.log("Lista de Eventos");
            quantEventos = listaEvento.length;
            console.log("Existe " + quantEventos + " eventos cadastrados.");
            console.log("O nome do Evento é: " + listaEvento[0]);
            break;
        case '5':
            console.log("Lista de Palestrantes");
            quantPalestrantes = listaPalestrante.length;
            console.log("Existe " + quantPalestrantes + " Palestrante cadastrados.");
            console.log("O nome do Palestrante é: " + listaPalestrante[0]);
            break;
        case '6':
            console.log("Lista de Participantes");
            quantParticipantes = listaParticipantes.length;
            console.log("Existem " + quantParticipantes + " participantes cadastrados no Evento")
            for(let indice = 0; indice < quantParticipantes; indice++){
                const pAtual = listaParticipantes[indice];
                console.log("O Participante nº " + (indice + 1) + " é: " + pAtual);
            }
            break;
        case '0':
            console.log("\n");
            console.log("\tObrigado por utilizar nosso Sistema!!!");
            break;
        default:
            console.log("\tOpção Inválida! Tente novamente!");
    }
} while(opcao != 0);