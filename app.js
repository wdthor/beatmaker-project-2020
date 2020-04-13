class Drumkit {
    constructor() {
        this.pads = document.querySelectorAll(".pad");
        this.playBtn = document.querySelector(".play");
        this.kickAudio = document.querySelectorAll(".kick-sound");
        this.snareAudio = document.querySelectorAll(".snare-sound");
        this.hihatAudio = document.querySelectorAll(".hihat-sound");
        this.index = 0;
        this.bpm = 150;
    }
    activePad() {
        this.classList.toggle("active");
    }
    repeat() {
        // We are only interested by the rest
        // So everytime we hit times 8 the rest will be 0
        let step = this.index % 8;
        const activeBars = document.querySelectorAll(`.b${step}`);
        console.log(step);
        this.index++;
    }
    start() {
        console.log(this);
        const interval = (60 / this.bpm) * 1000;
        setInterval(() => {
            this.repeat();
        }, interval);
    }
}

const drumKit = new Drumkit();

drumKit.pads.forEach((pad) => {
    pad.addEventListener("click", drumKit.activePad);
});

drumKit.playBtn.addEventListener("click", function () {
    drumKit.start();
});
