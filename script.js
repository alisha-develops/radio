const song = document.querySelector('.box');

async function display() {
    try {
        const response = await fetch ('https://vision-board-mu.vercel.app/api/random');
        const data = await response.json();

        let displaytext = "playing track...";

        if (data.text) {
        displaytext = data.text;
        } else if (data.title) {
        displaytext = data.title;
        } else if (data.goal) {
        displaytext= data.goal;
        }

        song.textContent = displaytext;
    } catch (error) {
        console.log("error:", error);
        song.textContent = "whoops! looks like signal is gone :O"
    }
}

display();