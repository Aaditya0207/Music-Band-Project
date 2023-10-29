// for acoustic guitar
const guitarFront = document.getElementById('acoustic');
const acousticSound = new Audio('acoustic sound.mp3');

guitarFront.onclick = () =>{
    acousticSound.play()
}
// for electric guitar
const guitarEnd = document.getElementById('electric');
const electricSound = new Audio('guitar-solo-27194-[AudioTrimmer.com] (2).mp3')

guitarEnd.onclick = () =>{
    electricSound.play()
}

//for bassdrum
const bassdrum = document.getElementById('bassdrum');
const bdsound = new Audio('Drum sound check-[AudioTrimmer.com].mp3')

bassdrum.onclick = () =>{
    bdsound.play()
}

//high tom
const drumleft = document.getElementById('imps')
const dlsound = new Audio('high tom.mp3')

drumleft.onclick = () =>{
    dlsound.play()
}

// for Upperleft Drum
const upper_drum_left = document.querySelector('.cccc')
const uplsound = new Audio('floor-tom-2-87286.mp3')
upper_drum_left.onclick = () =>{
    uplsound.play()
}

const upper_drum_right = document.querySelector('.pppp')
const uprsound = new Audio('high tom.mp3')
upper_drum_right.onclick = () =>{
    uplsound.play()
}

//ride cymbal
const ride_cymbal = document.querySelector('.ridecymbal')
const rcsound = new Audio('ride cymbal-[AudioTrimmer.com].mp3')
ride_cymbal.onclick = () =>{
    rcsound.play()
}
//for crash cymbal
const cymbal = document.querySelector('.mmmm')
const cymbalsound = new Audio('cymbal-crash-4-167698.mp3')
cymbal.onclick = () =>{
    cymbalsound.play()
}

//for hihat
const hihat = document.querySelector('.hihat')
const hihatsound = new Audio('Hi-Hat-Open-Hit-B3-www.fesliyanstudios.com.mp3')
hihat.onclick = () =>{
    hihatsound.play()
}