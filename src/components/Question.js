function Question() {
    return(
       <>
         <div className="bg-white/60 border-2 rounded-lg mx-auto max-w-md ">
            <div className="question mt-5 mb-3">
                <h1 className="text-gray-800 text-2xl font-bold">
                    Adivinhe o NPC de Stadew Valley!
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
                    className="w-3/4 p-2 bg-white bg-opacity-60 placeholder:text-gray-500"
                    type="text"
                    placeholder="Digite o nome do personagem..."
                />
                <button
                    className="w-1/4 p-2 bg-green-500 text-white flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
                    type="submit"
                >
                <img src="http://www.rw-designer.com/cursor-extern.php?id=152389" alt="" />
                </button>
            </div>
       </>
    )

}

export default Question