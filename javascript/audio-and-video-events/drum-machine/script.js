const pads = document.querySelectorAll(".drum-pad");
const display = document.getElementById("display");

const clips = [
  {
    pad: "q",
    description: "Heater-1"
  },
  {
    pad: "w",
    description: "Heater-2"
  },
  {
    pad: "e",
    description: "Heater-3"
  },
  {
    pad: "a",
    description: "Heater-4"
  },
  {
    pad: "s",
    description: "Heater-6"
  },
  {
    pad: "d",
    description: "Dsc_Oh"
  },
  {
    pad: "z",
    description: "Kick_n_Hat"
  },
  {
    pad: "x",
    description: "Kick"
  },
  {
    pad: "c",
    description: "Cev"
  },
];

const selectAudio = (e) => {
  let audio;
  if (e.key) {
    audio = document.querySelector(`audio[id="${e.key.toUpperCase()}"]`);
    playAudio(audio);
    display.innerText = clips.find(c => c.pad === e.key).description;
    return;
  }
  audio = e.target.querySelector(".clip");
  playAudio(audio);
  display.innerText = clips.find(c => c.pad === e.target.id).description;

}

const playAudio = (audio) => {
  audio.play();
  console.log("Playing..");
}

pads.forEach(p => { p.addEventListener('click', selectAudio) });
document.addEventListener('keydown', selectAudio);