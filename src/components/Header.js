function Header() {
    
    return(
        <div className="flex justify-center items-center mt-10 mb-5">
            <div className="configs mt-6">
            <button hidden>
                <span className="material-symbols-outlined text-[50px] text-white font-thin transform transition-transform duration-300 hover:rotate-45 hover:scale-110 hover:cursor-pointer">
                    settings
                </span>
            </button>

            </div>
            <div className="logo mx-4">
                <img src="/img/Stardle.png" alt="Logo do site" className="h-30 hover:scale-110 hover:cursor-pointer" />
            </div>
            <div className="language mt-6">
                <button hidden>
                    <span className="material-symbols-outlined text-[50px] text-white font-thin hover:scale-110 hover:cursor-pointer hover:text-gray-300">
                        language
                    </span>
                </button>
            </div>
        </div>
    )
    
}

export default Header