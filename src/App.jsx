import React, { useState } from 'react'
import asking from "./Assets/holding.webp"
import dancing from "./Assets/dancing2.gif"
import angry from "./Assets/angry.gif"
import tease from "./Assets/tease.gif"
import Yesmail from './Sendmail/Yesmail'

let counter = 1;
let Yescounter = 1;

function Happy(to_name) {
    const ask = document.getElementById('asking');
    const secondnobutton = document.getElementById('secondnobutton');
    const dancing = document.getElementById('dancing');
    const angry = document.getElementById('angry');
    const question = document.getElementById('question');
    const yesbutton = document.getElementById('yesbutton');
    const nobutton = document.getElementById('nobutton');
    const tease = document.getElementById('tease');
    ask.style.display = "none";
    dancing.style.display = "block"
    secondnobutton.style.display = "none";
    angry.style.display = "none"
    question.style.display = "none"
    tease.style.display = "none"
    nobutton.style.display = "none"
    Yescounter = Yescounter + 1;
    if (Yescounter == 2) {
        Yesmail(to_name);
        console.log(to_name);
    }
    if (Yescounter == 3) {
        yesbutton.style.display = "none";
        alert("Seems So Excited...")
    }
}
function Angry() {
    const ask = document.getElementById('asking');
    const angry = document.getElementById('angry');
    const tease = document.getElementById('tease');
    const secondnobutton = document.getElementById('secondnobutton');
    counter = counter + 1;
    console.log(counter);
    ask.style.display = "none";
    angry.style.display = "block"
    secondnobutton.style.borderColor = "red";
    secondnobutton.style.color = "red";
    if (counter == 3) {
        angry.style.display = "none"
        secondnobutton.style.display = "none"
        tease.style.display = "block"
    }
}
function Hideno() {
    const secondnobutton = document.getElementById('secondnobutton');
    const nobutton = document.getElementById('nobutton');
    nobutton.style.display = "none";
    secondnobutton.style.display = "block";
}

const App = () => {
    const [showNamePopup, setShowNamePopup] = useState(true);
    const [name, setName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Pass the name to another function here, e.g., Showmain(name)
        // For now, just log the name in the console
        document.getElementById("namepopup").style.display = "none";
        console.log('Name submitted:', name);
        setShowNamePopup(name); // Hide the namepopup div after submission
    };

    const handleInputChange = (event) => {
        setName(event.target.value);
    };


    return (
        <div>
        <div id='namepopup'>
                <div tabIndex="-1" className="bg-black/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 h-full items-center justify-center flex">
                    <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                        <div className="relative bg-white rounded-lg shadow">
                            <div className="p-5">
                                <h3 className="text-2xl mb-0.5 font-medium"></h3>
                                <p className="mb-4 text-sm font-normal text-gray-800"></p>
                                <form className="w-full space-y-3" typeof='post' onSubmit={handleSubmit}>
                                    <input name="to_name" type="text" autoComplete="off" required className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1" placeholder="Please Enter Your Name" onChange={handleInputChange}/>
                                    <button type="submit" className="inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400">Continue</button>
                                </form>
                            </div>
                        </div>
                    </div>
            </div>
            </div>
            <div className='bg-pink-100 w-screen h-screen '>
                <div className='flex justify-center items-center h-3/4'>
                    <button className='px-3 py-2 border-[1px] border-black rounded-md hidden' id='secondnobutton' onClick={Angry}>No</button>
                    <div id='asking' className=''><img src={asking} width={180} /></div>
                    <div id='tease' className='hidden'><img src={tease} width={180} /></div>
                    <div id='dancing' className='hidden'><img src={dancing} width={180} /></div>
                    <div id='angry' className='hidden'><img src={angry} width={180} /></div>
                </div>
                <p className='text-center' id='question'>Do You Wanna Go out With me on Dinner Tommorrow.</p>
                <div className='flex justify-center items-center'>
                    <div className='space-x-3'>
                        <button className='px-3 py-2 border-[1px] border-black rounded-md' id='yesbutton' onClick={()=>Happy(showNamePopup)}>Yes</button>
                        <button className='px-3 py-2 border-[1px] border-black rounded-md' id='nobutton' onClick={Hideno}>No</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App