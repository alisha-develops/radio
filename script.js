const box = document.querySelector(".box");
const play = document.getElementById("play");
const next = document.getElementById("next");
const title = document.querySelector(".title");
const audio = new Audio();

async function display() {
    try {
        const response = await fetch('https://vision-board-mu.vercel.app/api/random');
        const data = await response.json();

        audio.src = data.url;
        set(data.name);
        await audio.play();
    } catch (error) {
        console.log("error:", error);
        set("whoops! looks like signal is gone :O");
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

set("press yellow circle");

function set(text) {
    title.textContent = text;
    title.classList.remove("scrolling");
    if (box.scrollWidth > box.clientWidth) {
        title.classList.add("scrolling");
    }
}