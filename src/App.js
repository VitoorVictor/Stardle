import Question from './components/Question.js';
import Answer from './components/Answer.js';
import Header from './components/Header.js'
import './App.css';


function App() {
    const NPCs = [
      {
        id: 1,
        nome: 'Alex',
        estacao: 'Verão',
        dia: '13',
        morada: 'na vila Pelicanos',
        casavel: true,
        presenteavel: true,
      },
      {
        id: 2,
        nome: 'Elliott',
        estacao: 'Outono',
        dia: '5',
        morada: 'na Praia',
        casavel: true,
        presenteavel: true,
      },
      {
        id: 3,
        nome: 'Anão',
        estacao: 'Verão',
        dia: '22',
        morada: 'na caverna oriental',
        casavel: false,
        presenteavel: true,
      },
      {
        id: 4,
        nome: 'Avô',
        estacao: 'Desconhecido',
        dia: 'Desconhecido',
        morada: 'vida após a morte',
        casavel: false,
        presenteavel: false,
      },
      {
        id: 5,
        nome: 'Harvey',
        estacao: 'Inverno',
        dia: '14',
        morada: 'na clínica',
        casavel: true,
        presenteavel: true,
      },
    ];
    
    let lastNPC = null;

    function randomNPCs() {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * NPCs.length);
      } while (randomIndex === lastNPC);
  
      lastNPC = randomIndex; 
      console.log(lastNPC);
      return NPCs[randomIndex];
    }

    let NPC = randomNPCs();

  return (
    <div className="App h-screen">
      <Header />
      <img 
        src="/gif/picmix.com_2189259.gif" 
        alt="pelicano" 
        width="100px" 
        className='animate-move-left mb-10'/>
      <Question/>
      <Answer/>
      <h2 >O último personagem foi ...</h2>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <a href="@"><img src="/img/github.png" alt="github" width="40px" className='m-2  rounded-full bg-white'/></a>
        <a href="@"><img src="/img/instagram.png" alt="instagram" width="40px" className='m-2   rounded-full bg-white'/></a>
        <a href="@"><img src="/img/steam.png" alt="steam" width="40px" className='m-2 rounded-full   rounded-full bg-white'/></a>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        <p className="text-sm text-white">Este projeto não é patrocinado por ninguém!</p>
      </div>
      {/* <h1>Nome: {NPC.nome}</h1>
      <h1>Loca onde mora: {NPC.morada}</h1>
      <h1>É casável: {NPC.casavel === true ? 'sim' : 'não'}</h1>
      <h1>É presenteável {NPC.presenteavel === true ? 'sim' : 'não'}</h1>
      <CardNPCs/> */}
    </div> 
  );
}

export default App;
