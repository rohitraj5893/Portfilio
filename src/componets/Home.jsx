import React from 'react'

function Home() {
    return (
        <div
            id="home"
            className="w-full min-h-screen relative overflow-hidden bg-gradient-to-b from-[#0d0d0e] via-[#525253] to-[#aaaaac]">
            <div className="  absolute w-full h-full flex justify-center items-center text-[3rem] sm:text-[5rem] md:text-[7rem] lg:text-[8rem] text-[#37373a] pointer-events-none">
                Hi! I'm rOHIT
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex justify-center pointer-events-none">
                <img
                    src="./assets/sung.png"
                    alt="profile"
                    className=" h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh] w-auto object-contain"
                />
            </div>
        </div>
    )
}

export default Home