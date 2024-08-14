import Question from './components/Question.js';
import CardNPC from './components/CardNPC.js';
import Header from './components/Header.js'
import './App.css';
import React, { useState } from 'react';


function App() {
  const NPCs = [
    {
      id: 1,
      nome: 'Alex',
      img: '/img/NPCs/Alex.png',
      genero: 'Masculino',  
      morada: 'Vila Pelicanos',
      cabelo: 'Marrom',
      presenteavel: true,
      casavel: true,
      estacao: 'Verão',
      dia: '13',
    },
    {
      id: 2,
      nome: 'Elliott',
      img: '/img/NPCs/Elliott.png',
      genero: 'Masculino',
      morada: 'Praia',
      cabelo: 'Laranja',
      presenteavel: true,
      casavel: true,
      estacao: 'Outono',
      dia: '5',
    },
    {
      id: 3,
      nome: 'Anão',
      img: '/img/NPCs/Anão.png',
      genero: 'Masculino',
      morada: 'Caverna Oriental',
      cabelo: 'Desconhecido',
      presenteavel: true,
      casavel: false,
      estacao: 'Verão',
      dia: '22',
    },
    {
      id: 4,
      nome: 'Avô',
      img: '/img/NPCs/Avô.png',
      genero: 'Masculino',
      morada: 'Vida após a morte',
      cabelo: 'Desconhecido',
      presenteavel: false,
      casavel: false,
      estacao: 'Desconhecido',
      dia: '?',
    },
    {
      id: 5,
      nome: 'Harvey',
      img: '/img/NPCs/Harvey.png',
      genero: 'Masculino',
      morada: 'Clínica',
      cabelo: 'Marrom',
      presenteavel: true,
      casavel: true,
      estacao: 'Inverno',
      dia: '14',
    },
    {
      id: 6,
      nome: 'Penny',
      img: '/img/NPCs/Penny.png',
      genero: 'Feminino',
      morada: 'Vila Pelicanos',
      cabelo: 'Laranja',
      presenteavel: true,
      casavel: true,
      estacao: 'Outono',
      dia: '2',
    },
    {
      id: 7,
      nome: 'Leah',
      img: '/img/NPCs/Leah.png',
      genero: 'Feminino',
      morada: 'Floresta Cinzaseiva',
      cabelo: 'Laranja',
      presenteavel: true,
      casavel: true,
      estacao: 'Inverno',
      dia: '23',
    },
    {
      id: 8,
      nome: 'Shane',
      img: '/img/NPCs/Shane.png',
      genero: 'Masculino',
      morada: 'Floresta Cinzaseiva',
      cabelo: 'Preto',
      presenteavel: true,
      casavel: true,
      estacao: 'Primavera',
      dia: '20',
    },
    {
      id: 9,
      nome: 'Abigail',
      img: '/img/NPCs/Abigail.png',
      genero: 'Feminino',
      morada: 'Vila Pelicanos',
      cabelo: 'Roxo',
      presenteavel: true,
      casavel: true,
      estacao: 'Outono',
      dia: '13',
    },
    {
      id: 10,
      nome: 'Sebastian',
      img: '/img/NPCs/Sebastian.png',
      genero: 'Masculino',
      morada: 'Montanha',
      cabelo: 'Preto',
      presenteavel: true,
      casavel: true,
      estacao: 'Inverno',
      dia: '10',
    },
    {
      id: 11,
      nome: 'Emily',
      img: '/img/NPCs/Emily.png',
      genero: 'Feminino',
      morada: 'Vila Pelicanos',
      cabelo: 'Azul',
      presenteavel: true,
      casavel: true,
      estacao: 'Primavera',
      dia: '27',
    },
    {
      id: 12,
      nome: 'Maru',
      img: '/img/NPCs/Maru.png',
      genero: 'Feminino',
      morada: 'Montanha',
      cabelo: 'Vermelho',
      presenteavel: true,
      casavel: true,
      estacao: 'Verão',
      dia: '10',
    },
    {
      id: 13,
      nome: 'Sam',
      img: '/img/NPCs/Sam.png',
      genero: 'Masculino',
      morada: 'Vila Pelicanos',
      cabelo: 'Amarelo',
      presenteavel: true,
      casavel: true,
      estacao: 'Verão',
      dia: '17',
    },
    {
      id: 14,
      nome: 'Linus',
      img: '/img/NPCs/Linus.png',
      genero: 'Masculino',
      morada: 'Montanha',
      cabelo: 'Cinza',
      presenteavel: true,
      casavel: false,
      estacao: 'Inverno',
      dia: '3',
    },
    {
      id: 15,
      nome: 'Haley',
      img: '/img/NPCs/Haley.png',
      genero: 'Feminino',
      morada: 'Vila Pelicanos',
      cabelo: 'Amarelo',
      presenteavel: true,
      casavel: true,
      estacao: 'Primavera',
      dia: '14',
    },
    {
      id: 16,
      nome: 'Caroline',
      img: '/img/NPCs/Caroline.png',
      genero: 'Feminino',
      morada: 'Vila Pelicanos',
      cabelo: 'Verde',
      presenteavel: true,
      casavel: false,
      estacao: 'Inverno',
      dia: '7',
    },
    {
      id: 17,
      nome: 'Clint',
      img: '/img/NPCs/Clint.png',
      genero: 'Masculino',
      morada: 'Vila Pelicanos',
      cabelo: 'Marrom',
      presenteavel: true,
      casavel: false,
      estacao: 'Inverno',
      dia: '26',
    },
    {
      id: 18,
      nome: 'Demetrius',
      img: '/img/NPCs/Demetrius.png',
      genero: 'Masculino',
      morada: 'Montanha',
      cabelo: 'Marrom',
      presenteavel: true,
      casavel: false,
      estacao: 'Verão',
      dia: '19',
    },
    {
      id: 19,
      nome: 'Evelyn',
      img: '/img/NPCs/Evelyn.png',
      genero: 'Feminino',
      morada: 'Vila Pelicanos',
      cabelo: 'Cinza',
      presenteavel: true,
      casavel: false,
      estacao: 'Inverno',
      dia: '20',
    },
    {
      id: 20,
      nome: 'Feiticeiro',
      img: '/img/NPCs/Wizard.png',
      genero: 'Masculino',
      morada: 'Floresta Cinzaseiva',
      cabelo: 'roxo',
      presenteavel: true,
      casavel: false,
      estacao: 'Inverno',
      dia: '17',
    },
    {
      id: 21,
      nome: 'George',
      img: '/img/NPCs/George.png',
      genero: 'Masculino',
      morada: 'Vila Pelicanos',
      cabelo: 'Cinza',
      presenteavel: true,
      casavel: false,
      estacao: 'Outono',
      dia: '24',
    },
    {
      id: 22,
      nome: 'Gus',
      img: '/img/NPCs/Gus.png',
      genero: 'Masculino',
      morada: 'Vila Pelicanos',
      cabelo: 'Marrom',
      presenteavel: true,
      casavel: false,
      estacao: 'Verão',
      dia: '8',
    },
    {
      id: 23,
      nome: 'Jas',
      img: '/img/NPCs/Jas.png',
      genero: 'Feminino',
      morada: 'Floresta Cinzaseiva',
      cabelo: 'Roxo',
      presenteavel: true,
      casavel: false,
      estacao: 'Verão',
      dia: '4',
    },
    {
      id: 24,
      nome: 'Jodi',
      img: '/img/NPCs/Jodi.png',
      genero: 'Feminino',
      morada: 'Vila Pelicanos',
      cabelo: 'Laranja',
      presenteavel: true,
      casavel: false,
      estacao: 'Outono',
      dia: '11',
    },
    {
      id: 25,
      nome: 'Kent',
      img: '/img/NPCs/Kent.png',
      genero: 'Masculino',
      morada: 'Vila Pelicanos',
      cabelo: 'Amarelo',
      presenteavel: true,
      casavel: false,
      estacao: 'Primavera',
      dia: '4',
    },
    {
      id: 26,
      nome: 'Krobus',
      img: '/img/NPCs/Krobus.png',
      genero: 'Masculino',
      morada: 'Esgotos',
      cabelo: 'Sem',
      presenteavel: true,
      casavel: false,
      estacao: 'Inverno',
      dia: '1',
    },
    {
      id: 27,
      nome: 'Leo',
      img: '/img/NPCs/Leo.png',
      genero: 'Masculino',
      morada: 'Ilha Gengibre',
      cabelo: 'Marrom',
      presenteavel: true,
      casavel: false,
      estacao: 'Verão',
      dia: '26',
    },
    {
      id: 28,
      nome: 'Lewis',
      img: '/img/NPCs/Lewis.png',
      genero: 'Masculino',
      morada: 'Vila Pelicanos',
      cabelo: 'Cinza',
      presenteavel: true,
      casavel: false,
      estacao: 'Primavera',
      dia: '7',
    },
    {
      id: 29,
      nome: 'Marnie',
      img: '/img/NPCs/Marnie.png',
      genero: 'Feminino',
      morada: 'Floresta Cinzaseiva',
      cabelo: 'Laranja',
      presenteavel: true,
      casavel: false,
      estacao: 'Outono',
      dia: '18',
    },
    {
      id: 30,
      nome: 'Pam',
      img: '/img/NPCs/Pam.png',
      genero: 'Feminino',
      morada: 'Vila Pelicanos',
      cabelo: 'Amarelo',
      presenteavel: true,
      casavel: false,
      estacao: 'Primavera',
      dia: '18',
    },
    {
      id: 31,
      nome: 'Pierre',
      img: '/img/NPCs/Pierre.png',
      genero: 'Masculino',
      morada: 'Vila Pelicanos',
      cabelo: 'Marrom',
      presenteavel: true,
      casavel: false,
      estacao: 'Primavera',
      dia: '26',
    },
    {
      id: 32,
      nome: 'Robin',
      img: '/img/NPCs/Robin.png',
      genero: 'Feminino',
      morada: 'Vila Pelicanos',
      cabelo: 'Laranja',
      presenteavel: true,
      casavel: false,
      estacao: 'Outono',
      dia: '21',
    },
    {
      id: 33,
      nome: 'Sandy',
      img: '/img/NPCs/Sandy.png',
      genero: 'Feminino',
      morada: 'Deserto',
      cabelo: 'Rosa',
      presenteavel: true,
      casavel: false,
      estacao: 'Outono',
      dia: '15',
    },
    {
      id: 34,
      nome: 'Vincent',
      img: '/img/NPCs/Vincent.png',
      genero: 'Masculino',
      morada: 'Vila Pelicanos',
      cabelo: 'Rosa',
      presenteavel: true,
      casavel: false,
      estacao: 'Primavera',
      dia: '10',
    },
    {
      id: 35,
      nome: 'Willy',
      img: '/img/NPCs/Willy.png',
      genero: 'Masculino',
      morada: 'Praia',
      cabelo: 'Marrom',
      presenteavel: true,
      casavel: false,
      estacao: 'Verão',
      dia: '24',
    },
    {
      id: 36,
      nome: 'Ajudante',
      img: '/img/NPCs/Ajudante.png',
      genero: 'Masculino',
      morada: 'Caverna da Bruxa',
      cabelo: 'Desconhecido',
      presenteavel: false,
      casavel: false,
      estacao: 'Desconhecido',
      dia: '?',
    },
    {
      id: 37,
      nome: 'Passarinha',
      img: '/img/NPCs/Birdie.png',
      genero: 'Feminino',
      morada: 'Caverna da Bruxa',
      cabelo: 'Verde',
      presenteavel: false,
      casavel: false,
      estacao: 'Desconhecido',
      dia: '?',
    },
    {
      id: 38,
      nome: 'Gil',
      img: '/img/NPCs/Gil.png',
      genero: 'Masculino',
      morada: 'Vila Pelicanos',
      cabelo: 'Cinza',
      presenteavel: false,
      casavel: false,
      estacao: 'Desconhecido',
      dia: '?',
    },
    {
      id: 39,
      nome: 'Governador',
      img: '/img/NPCs/Governor.png',
      genero: 'Masculino',
      morada: 'Região',
      cabelo: 'Vinho',
      presenteavel: false,
      casavel: false,
      estacao: 'Desconhecido',
      dia: '?',
    },
    {
      id: 40,
      nome: 'Gunther',
      img: '/img/NPCs/Gunther.png',
      genero: 'Masculino',
      morada: 'Vila Pelicanos',
      cabelo: 'Marrom',
      presenteavel: false,
      casavel: false,
      estacao: 'Desconhecido',
      dia: '?',
    },
    {
      id: 41,
      nome: 'Marlon',
      img: '/img/NPCs/Marlon.png',
      genero: 'Masculino',
      morada: 'Vila Pelicanos',
      cabelo: 'Cinza',
      presenteavel: false,
      casavel: false,
      estacao: 'Desconhecido',
      dia: '?',
    },
    {
      id: 42,
      nome: 'Morris',
      img: '/img/NPCs/Morris.png',
      genero: 'Masculino',
      morada: 'Vila Pelicanos',
      cabelo: 'Preto',
      presenteavel: false,
      casavel: false,
      estacao: 'Desconhecido',
      dia: '?',
    },
    {
      id: 43,
      nome: 'Professor Caracol',
      img: '/img/NPCs/Professor_Caracol.png',
      genero: 'Masculino',
      morada: 'Ilha Gengibre',
      cabelo: 'Cinza',
      presenteavel: false,
      casavel: false,
      estacao: 'Desconhecido',
      dia: '?',
    },
    {
      id: 44,
      nome: 'Segurança',
      img: '/img/NPCs/Segurança.png',
      genero: 'Masculino',
      morada: 'Deserto',
      cabelo: 'Desconhecido',
      presenteavel: false,
      casavel: false,
      estacao: 'Desconhecido',
      dia: '?',
    },
    {
      id: 45,
      nome: 'Sr. Qi',
      img: '/img/NPCs/Sr_Qi.png',
      genero: 'Masculino',
      morada: 'Deserto',
      cabelo: 'Roxo',
      presenteavel: false,
      casavel: false,
      estacao: 'Desconhecido',
      dia: '?',
    },

  ];
  const [selectNPC, setSelectNPC] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [selectedNPC, setSelectedNPC] = useState(null);
  const [questionHidden, setQuestionHidden] = useState(false);
  const [showStarContainer, setShowStarContainer] = useState(false);
  const [buttonPhrase, setButtonPhrase] = useState('Iniciar Stardle!');
    
  function ChosenNPC(id){
    const npc = NPCs.find(npc => npc.id === id);
    if (npc) {
      // Adicione o NPC ao array de seleções
      setSelectNPC(prevSelectedNPCs => [...prevSelectedNPCs, npc]);
      setShowTable(true);
    }
  }

  const selectRandomNPC = () => {
    const randomIndex = Math.floor(Math.random() * NPCs.length);
    const npc = NPCs[randomIndex];
    setSelectedNPC(npc);
    setQuestionHidden(true);
    if(buttonPhrase === 'Reiniciar Stardle!'){
      window.location.reload();
    }
    setButtonPhrase('Reiniciar Stardle!')
    console.log('NPC selecionado aleatoriamente:', npc); // Adiciona o console.log para imprimir o NPC selecionado
};

  const handleMatch = () => {
    setShowStarContainer(true);
    setQuestionHidden(false);
  };


  return (
    <div className="App flex flex-col justify-between min-h-screen overflow-hidden">
        <Header />
        <img 
            src="/gif/picmix.com_2189259.gif" 
            alt="pelicano" 
            width="100px" 
            className='animate-move-left'
        />
        {!questionHidden  
        ?  ( <div className="flex justify-center ">
              <button onClick={selectRandomNPC} className="mt-4 p-2 bg-white/60 text-black text-lg rounded w-40 border">
                      {buttonPhrase}
              </button>
            </div>
        )
        :  (<Question DadosNPCs={NPCs} onSendData={ChosenNPC}/>
        )}
        {showTable && (
            <div className="overflow-x-auto">
                <table className="mx-auto max-w-md border-collapse">
                    <thead>
                        <tr className="flex justify-between items-end gap-2 mb-10"> 
                            <th className="p-2 border-b-4 border-white w-32">NPC</th> 
                            <th className="p-2 border-b-4 border-white w-32">Gênero</th>
                            <th className="p-2 border-b-4 border-white w-32">Onde mora</th>
                            <th className="p-2 border-b-4 border-white w-32">Cor do cabelo</th>
                            <th className="p-2 border-b-4 border-white w-32">Casável</th>
                            <th className="p-2 border-b-4 border-white w-32">Presenteável</th>
                            <th className="p-2 border-b-4 border-white w-32">Estação do aniversário</th>
                            <th className="p-2 border-b-4 border-white w-32">Dia do aniversário</th>
                        </tr>
                    </thead>
                    <tbody>
                      {selectNPC.slice().reverse().map((npc) => (
                        <CardNPC key={npc.id} DadoNPC={npc} ResponseNPC={selectedNPC} onMatch={handleMatch}/>
                      ))}
                    </tbody>
                </table>
            </div>
        )}
        <div className='h-80'></div>
        <h2 hidden>O último personagem foi ...</h2>
        {showStarContainer && (
                <div className="fixed inset-0 flex star-container justify-center items-center z-50 pointer-events-none">
                    <img src="/img/fruta-estrela.png" alt="estrela" className='w-24 animate-win' style={{ '--i': 15 }}/>
                    <img src="/img/fruta-estrela.png" alt="estrela" className='w-24 animate-win' style={{ '--i': 27 }}/>
                    <img src="/img/fruta-estrela.png" alt="estrela" className='w-24 animate-win' style={{ '--i': 20 }}/>
                    <img src="/img/fruta-estrela.png" alt="estrela" className='w-24 animate-win' style={{ '--i': 18 }}/>
                    <img src="/img/fruta-estrela.png" alt="estrela" className='w-24 animate-win' style={{ '--i': 19 }}/>
                    <img src="/img/fruta-estrela.png" alt="estrela" className='w-24 animate-win' style={{ '--i': 24 }}/>
                    <img src="/img/fruta-estrela.png" alt="estrela" className='w-24 animate-win' style={{ '--i': 23 }}/>
                    <img src="/img/fruta-estrela.png" alt="estrela" className='w-24 animate-win' style={{ '--i': 28 }}/>
                    <img src="/img/fruta-estrela.png" alt="estrela" className='w-24 animate-win' style={{ '--i': 16 }}/>
                    <img src="/img/fruta-estrela.png" alt="estrela" className='w-24 animate-win' style={{ '--i': 15 }}/>
                    <img src="/img/fruta-estrela.png" alt="estrela" className='w-24 animate-win' style={{ '--i': 19 }}/>
                    <img src="/img/fruta-estrela.png" alt="estrela" className='w-24 animate-win' style={{ '--i': 21 }}/>
                    <img src="/img/fruta-estrela.png" alt="estrela" className='w-24 animate-win' style={{ '--i': 26 }}/>
                    <img src="/img/fruta-estrela.png" alt="estrela" className='w-24 animate-win' style={{ '--i': 12 }}/>
                    <img src="/img/fruta-estrela.png" alt="estrela" className='w-24 animate-win' style={{ '--i': 19 }}/>
                    <img src="/img/fruta-estrela.png" alt="estrela" className='w-24 animate-win' style={{ '--i': 24 }}/>
                    <img src="/img/fruta-estrela.png" alt="estrela" className='w-24 animate-win' style={{ '--i': 16 }}/>
                    <img src="/img/fruta-estrela.png" alt="estrela" className='w-24 animate-win' style={{ '--i': 23 }}/>
                    <img src="/img/fruta-estrela.png" alt="estrela" className='w-24 animate-win' style={{ '--i': 16 }}/>
                </div>
            )}
        <div>
            <div className="flex justify-center mt-4">
                <a href="https://github.com/VitoorVictor"><img src="/img/github.png" alt="github" width="40px" className='m-2 rounded-full bg-white' /></a>
                <a href="https://www.instagram.com/vitor.victor/"><img src="/img/instagram.png" alt="instagram" width="40px" className='m-2 rounded-full bg-white' /></a>
                <a href="https://store.steampowered.com/app/413150/Stardew_Valley/"><img src="/img/steam.png" alt="steam" width="40px" className='m-2 rounded-full bg-white' /></a>
            </div>
            <div className="flex justify-center mb-4">
                <p className="text-sm text-white">Este projeto não é patrocinado por ninguém!</p>
            </div>
        </div>
    </div>
);
}

export default App;
