import React from 'react'
import Typed from "typewriter-effect";
function Landing() {
    setInterval(() => {
        window.location.href = "/login"
    },3450);
    return (
        <div className=' flex  justify-center items-center w-screen h-screen text-7xl font-bold text-blue-700'>
            <Typed
                options={{
                    strings: ['こんにちは'],
                    typeSpeed:30,
                    autoStart: true,
                    loop: true,
                }} />
        </div>
    )
}

export default Landing
