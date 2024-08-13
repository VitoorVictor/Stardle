import React, { useState, useEffect, useMemo  } from 'react';

function Question({ DadosNPCs = [], onSendData }) {
    
    const characters = useMemo(() => (
        Array.isArray(DadosNPCs) ? DadosNPCs.map(NPC => ({
            nome: NPC.nome,
            img: NPC.img,
            id: NPC.id
        })) : []
    ), [DadosNPCs]);

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCharacters, setFilteredCharacters] = useState(characters);
    // Estado para rastrear os personagens selecionados
    const [selectedNPCs, setSelectedNPCs] = useState([]);

    
    // Atualiza a lista de personagens filtrados com base no termo de busca e nos NPCs selecionados
    useEffect(() => {
        setFilteredCharacters(
            characters.filter(character =>
                !selectedNPCs.includes(character.id) &&
                character.nome.toLowerCase().startsWith(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, selectedNPCs, characters]);

    // Manipulador para mudanças no campo de busca
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Envia os dados do personagem selecionado e atualiza os estados
    const sendDataToApp = (id) => {
        onSendData(id);
        setSelectedNPCs(prevSelectedNPCs => [...prevSelectedNPCs, id]);
        setSearchTerm('');
    };

    // Manipulador para o botão de envio
    const handleSubmit = () => {
        if (searchTerm) {
            const matchingCharacter = characters.find(character =>
                character.nome.toLowerCase().startsWith(searchTerm.toLowerCase())
            );
            if (matchingCharacter && !selectedNPCs.includes(matchingCharacter.id)) {
                sendDataToApp(matchingCharacter.id);
            }
        }
    };

    return (
        <div className='mt-5'>
            <div className="bg-white/60 border-2 rounded-lg mx-auto max-w-md">
                <div className="question mt-5 mb-3">
                    <h1 className="text-gray-800 text-2xl font-bold">
                        Adivinhe o NPC de Stardew Valley!
                    </h1>
                </div>
                <div className="tip mb-5">
                    <h3 className="text-gray-600 text-sm font-bold">
                        Digite o nome de algum personagem.
                    </h3>
                </div>
            </div>
            <div className="flex border-2 rounded-sm mx-auto max-w-md mt-2">
                <input
                    className="w-3/4 p-2 bg-white bg-opacity-60 placeholder:text-gray-500 focus:outline-none focus:shadow-none"
                    type="text"
                    id="search"
                    placeholder="Digite o nome do personagem..."
                    autoComplete='off'
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <button
                    className="w-1/4 p-2 bg-green-500 text-white flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
                    type="button"
                    onClick={handleSubmit}
                >
                    <img src="http://www.rw-designer.com/cursor-extern.php?id=152389" alt="" />
                </button>
            </div>
            {searchTerm && (
                <ul className="mt-2 bg-white border-2 rounded-lg max-w-md mx-auto z-10 absolute left-0 right-0 max-h-64 overflow-y-auto">
                    {filteredCharacters.map((character) => (
                        <li key={character.id} className="text-gray-800 mb-1 hover:cursor-pointer">
                            <button 
                                onClick={() => sendDataToApp(character.id)} 
                                className='flex items-center w-full'
                            >
                                <img src={character.img} alt={character.nome} className='w-16 basis-1/7' />
                                <p className='text-lg basis-2/3'>{character.nome}</p>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Question;
