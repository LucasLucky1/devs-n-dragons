import {Personagem} from "./modules/Personagem.js";
// const personagempersonagemPedrinho = {
//     nome: 'personagemPedrinho',
//     vida: 7,
//     mana: 12,
//     level: 5,
//     tipo: 'Mago',
// }

// const personagemJose = {
//     nome: 'Jose',
//     vida: 7,
//     mana: 6,
//     level: 3,
//     tipo: 'Arqueiro',
// }



const personagemPedrinho = new Personagem();
personagemPedrinho.nome= 'Pedro';
personagemPedrinho.vida= 12;
personagemPedrinho.mana=5;
personagemPedrinho.level=5;
personagemPedrinho.tipo= 'Guerreiro';

const personagemJose = new Personagem();
personagemJose.nome= 'José';
personagemJose.vida= 7;
personagemJose.mana=12;
personagemJose.level=6;
personagemJose.tipo= 'Mago';

console.log(personagemPedrinho.obterInsignia())
console.log(personagemJose.obterInsignia())
