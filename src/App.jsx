import React from 'react'
import asking from "./Assets/holding.webp"
import dancing from "./Assets/dancing2.gif"
import angry from "./Assets/angry.gif"
import tease from "./Assets/tease.gif"


let counter = 1;
let Yescounter = 1;

function Happy() {
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
    console.log (counter);
    ask.style.display = "none";
    angry.style.display = "block"
    secondnobutton.style.borderColor = "red";
    secondnobutton.style.color = "red";
    if (counter == 4) {
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
    return (
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
                    <button className='px-3 py-2 border-[1px] border-black rounded-md' id='yesbutton' onClick={Happy}>Yes</button>
                    <button className='px-3 py-2 border-[1px] border-black rounded-md' id='nobutton' onClick={Hideno}>No</button>
                </div>
            </div>
        </div>
    )
}

export default App