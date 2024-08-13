function CardNPC (){
    return(
        <tbody>
            <tr className="flex justify-between items-center gap-2"> 
                <th className="bg-white/60 border border-white w-32 h-32 flex justify-center items-center"><img src="/img/NPCs/alex.png" alt="alex" /></th> 
                <th className="bg-green-500/80 border border-white w-32 h-32 flex justify-center items-center">Masculino</th>
                <th className="bg-red-500/80 border border-white w-32 h-32 flex justify-center items-center">Vila Pelicanos</th>
                <th className="bg-green-500/80 border border-white w-32 h-32 flex justify-center items-center">Marrom</th>
                <th className="bg-green-500/80 border border-white w-32 h-32 flex justify-center items-center">Sim</th>
                <th className="bg-red-500/80 border border-white w-32 h-32 flex justify-center items-center">Sim</th>
                <th className="bg-red-500/80 border border-white w-32 h-32 flex justify-center items-center">Verão</th>
                <th className="bg-green-500/80 border border-white w-32 h-32 flex justify-center items-center">13<img src="/gif/image.png" alt="bandeira" width="24px" className="ml-2"/></th>
            </tr>
        </tbody>
    )
}
export default CardNPC