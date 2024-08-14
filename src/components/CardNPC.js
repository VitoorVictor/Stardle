import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CardNPC = ({ DadoNPC, ResponseNPC, onMatch  }) => {
    const [isFirstRender, setIsFirstRender] = useState(true);

    const getBackgroundColor = (property) => {
        return DadoNPC[property] === ResponseNPC[property] ? 'bg-green-500/80' : 'bg-red-500/80';
    };

    const allPropertiesMatch = () => {
        const properties = ['genero', 'morada', 'cabelo', 'casavel', 'presenteavel', 'estacao', 'dia'];
        return properties.every(property => DadoNPC[property] === ResponseNPC[property]);
    };

    useEffect(() => {
        setIsFirstRender(false);
    }, []);

    useEffect(() => {
        if (allPropertiesMatch()) {
            onMatch ();
        }
    },);

    return (
        <motion.tr
            initial={isFirstRender ? { opacity: 0, y: 20 } : {}}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-between items-center gap-2 mb-4"
        >
            <th className="bg-white/60 border border-white w-32 h-32 flex justify-center items-center">
                <img src={DadoNPC.img} alt={DadoNPC.nome} />
            </th>
            <th className={`border border-white w-32 h-32 flex justify-center items-center ${getBackgroundColor('genero')}`} value={DadoNPC.genero} >
                {DadoNPC.genero}
            </th>
            <th className={`border border-white w-32 h-32 flex justify-center items-center ${getBackgroundColor('morada')}`} value={DadoNPC.morada} >
                {DadoNPC.morada}
            </th>
            <th className={`border border-white w-32 h-32 flex justify-center items-center ${getBackgroundColor('cabelo')}`} value={DadoNPC.cabelo} >
                {DadoNPC.cabelo}
            </th>
            <th className={`border border-white w-32 h-32 flex justify-center items-center ${getBackgroundColor('casavel')}`} value={DadoNPC.casavel} >
                {DadoNPC.casavel === true ? 'Sim' : 'Não'}
            </th>
            <th className={`border border-white w-32 h-32 flex justify-center items-center ${getBackgroundColor('presenteavel')}`} value={DadoNPC.presenteavel} >
                {DadoNPC.presenteavel === true ? 'Sim' : 'Não'}
            </th>
            <th className={`border border-white w-32 h-32 flex justify-center items-center ${getBackgroundColor('estacao')}`} value={DadoNPC.estacao} >
                {DadoNPC.estacao}
            </th>
            <th className={`border border-white w-32 h-32 flex justify-center items-center ${getBackgroundColor('dia')}`} value={DadoNPC.dia} >
                {DadoNPC.dia}
                <img src="/gif/image.png" alt="bandeira" width="24px" className="ml-2" />
            </th>
        </motion.tr>
    );
};

export default CardNPC;
