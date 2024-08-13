import CardNPC from './CardNPC.js'

function Answer({DadoNPC}) {
    return (
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
                    <tr className="flex justify-between items-center gap-2"> 
                        <th className="bg-white/60 border border-white w-32 h-32 flex justify-center items-center"><img src={DadoNPC.img} alt={DadoNPC.nome} /></th> 
                        <th className="bg-green-500/80 border border-white w-32 h-32 flex justify-center items-center">{DadoNPC.genero}</th>
                        <th className="bg-red-500/80 border border-white w-32 h-32 flex justify-center items-center">{DadoNPC.morada}</th>
                        <th className="bg-green-500/80 border border-white w-32 h-32 flex justify-center items-center">{DadoNPC.cabelo}</th>
                        <th className="bg-green-500/80 border border-white w-32 h-32 flex justify-center items-center">{DadoNPC.casavel  === true ? 'Sim' : 'Não'}</th>
                        <th className="bg-red-500/80 border border-white w-32 h-32 flex justify-center items-center">{DadoNPC.presenteavel === true ? 'Sim' : 'Não'}</th>
                        <th className="bg-red-500/80 border border-white w-32 h-32 flex justify-center items-center">{DadoNPC.estacao}</th>
                        <th className="bg-green-500/80 border border-white w-32 h-32 flex justify-center items-center">{DadoNPC.dia}<img src="/gif/image.png" alt="bandeira" width="24px" className="ml-2"/></th>
                    </tr>
                </tbody>
            </table>
        </div>
        
    )
}

export default Answer