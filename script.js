const box = document.querySelector(".box");
const play = document.getElementById("play");
const next = document.getElementById("next");
const audio = new Audio();

async function display() {
    try {
        const response = await fetch('https://vision-board-mu.vercel.app/api/random');
        const data = await response.json();

        audio.src = data.url;
        box.textContent = data.name;
        await audio.play();
    } catch (error) {
        console.log("error:", error);
        box.textContent = "whoops! looks like signal is gone :O";
    }
}

play.addEventListener("click", () => {
    if (!audio.src) {
        display();
    } else if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

next.addEventListener('click', display);
audio.addEventListener('ended', display);

box.textContent = "press play";