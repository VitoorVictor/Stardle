import React, { useEffect } from 'react';

const CardNPC = ({ DadoNPC, ResponseNPC }) => {
    // Função para determinar a cor de fundo
    const getBackgroundColor = (property) => {
        return DadoNPC[property] === ResponseNPC[property] ? 'bg-green-500/80' : 'bg-red-500/80';
    };

    // Função para verificar se todas as propriedades correspondem
    const allPropertiesMatch = () => {
        const properties = ['genero', 'morada', 'cabelo', 'casavel', 'presenteavel', 'estacao', 'dia'];
        return properties.every(property => DadoNPC[property] === ResponseNPC[property]);
    };

    // Mostrar alerta se todas as propriedades corresponderem
    useEffect(() => {
        if (allPropertiesMatch()) {
            alert('Todos os dados correspondem!');
        }
    }, [DadoNPC, ResponseNPC]);

    return (
        <tr className="flex justify-between items-center gap-2 mb-4">
            <th className="border border-white w-32 h-32 flex justify-center items-center">
                <img src={DadoNPC.img} alt={DadoNPC.nome} />
            </th>
            <th className={`border border-white w-32 h-32 flex justify-center items-center ${getBackgroundColor('genero')}`}>
                {DadoNPC.genero}
            </th>
            <th className={`border border-white w-32 h-32 flex justify-center items-center ${getBackgroundColor('morada')}`}>
                {DadoNPC.morada}
            </th>
            <th className={`border border-white w-32 h-32 flex justify-center items-center ${getBackgroundColor('cabelo')}`}>
                {DadoNPC.cabelo}
            </th>
            <th className={`border border-white w-32 h-32 flex justify-center items-center ${getBackgroundColor('casavel')}`}>
                {DadoNPC.casavel === true ? 'Sim' : 'Não'}
            </th>
            <th className={`border border-white w-32 h-32 flex justify-center items-center ${getBackgroundColor('presenteavel')}`}>
                {DadoNPC.presenteavel === true ? 'Sim' : 'Não'}
            </th>
            <th className={`border border-white w-32 h-32 flex justify-center items-center ${getBackgroundColor('estacao')}`}>
                {DadoNPC.estacao}
            </th>
            <th className={`border border-white w-32 h-32 flex justify-center items-center ${getBackgroundColor('dia')}`}>
                {DadoNPC.dia}
                <img src="/gif/image.png" alt="bandeira" width="24px" className="ml-2" />
            </th>
        </tr>
    );
};

export default CardNPC;
