/* =========================================
   SCREEN CONTROL
========================================= */

const startScreen = document.getElementById("startScreen");
const loadingScreen = document.getElementById("loadingScreen");
const dashboard = document.getElementById("dashboard");
const memories = document.getElementById("memories");
const ourStory = document.getElementById("ourStory");


/* =========================================
   START SURPRISE
========================================= */

function startSurprise() {

    // Hide home page
    startScreen.style.display = "none";

    // Show loading screen
    loadingScreen.style.display = "flex";

    loadingScreen.classList.add("show");

    let progress = 0;

    const progressBar =
        document.getElementById("progressBar");

    const percentage =
        document.getElementById("percentage");

    const loadingText =
        document.getElementById("loadingText");


    const messages = [
        "Initializing friendship...",
        "Loading beautiful memories...",
        "Finding old conversations...",
        "Collecting laughter...",
        "Almost ready...",
        "Friendship loaded successfully 💙"
    ];


    const interval = setInterval(() => {

        progress += 2;

        if (progress > 100) {
            progress = 100;
        }


        // Progress bar
        if (progressBar) {
            progressBar.style.width = progress + "%";
        }


        // Percentage
        if (percentage) {
            percentage.textContent =
                progress + "%";
        }


        // Loading messages
        if (loadingText) {

            const messageIndex =
                Math.min(
                    Math.floor(progress / 20),
                    messages.length - 1
                );

            loadingText.textContent =
                messages[messageIndex];
        }


        // Finished
        if (progress >= 100) {

            clearInterval(interval);

            setTimeout(() => {

                loadingScreen.classList.remove("show");

                loadingScreen.style.display = "none";

                showDashboard();

            }, 700);
        }

    }, 50);
}


/* =========================================
   SHOW DASHBOARD
========================================= */

function showDashboard() {

    // Hide everything else
    startScreen.style.display = "none";
    loadingScreen.style.display = "none";
    memories.style.display = "none";
    ourStory.classList.remove("show");

    // Show dashboard
    dashboard.style.display = "flex";
}


/* =========================================
   OPEN MEMORIES
========================================= */

function openMemories() {

    // Hide dashboard
    dashboard.style.display = "none";

    // Hide story
    ourStory.classList.remove("show");

    // Show memories
    memories.style.display = "flex";

}


/* =========================================
   CLOSE MEMORIES
========================================= */

function closeMemories() {

    memories.style.display = "none";

    dashboard.style.display = "flex";

}


/* =========================================
   OPEN OUR STORY
========================================= */

function openStory() {

    // Hide dashboard completely
    dashboard.style.display = "none";

    // Hide memories
    memories.style.display = "none";

    // Show ONLY story
    ourStory.classList.add("show");

}


/* =========================================
   CLOSE OUR STORY
========================================= */

function closeStory() {

    // Hide story
    ourStory.classList.remove("show");

    // Return to dashboard
    dashboard.style.display = "flex";

}


/* =========================================
   MEMORY DATA
========================================= */

const memoryList = [

    {
        image: "C:\\Users\\samue\\OneDrive\\Desktop\\bd\\image\\pi.jpeg",
        caption: "It was just a silly moment, but this picture gave me one of those laughs I’ll always remember. And this 1st pic-AI😂✨” "
    },
    {
        image: "C:\\Users\\samue\\OneDrive\\Desktop\\bd\\image\\IMG-20260326-WA0065.jpg.jpeg",
        caption: "I never forget this movement where a silly fight due to a caputruring a pics . may be this movement created all this friendship and love between us ."
    },
    {
        image: "C:\\Users\\samue\\OneDrive\\Desktop\\bd\\image\\WhatsApp Image 2026-09-02 at 2.15.08 AM.jpeg",
        caption: "An unexpected visit to the temple because of some issues… but somehow, it became one of the most memorable experiences with you. And just like those previous days, this little moment became another beautiful memory of us. 💙✨"
    }
];


/* =========================================
   MEMORY SYSTEM
========================================= */

let currentMemory = 0;s


function showMemory(index) {

    const image =
        document.getElementById("memoryImage");

    const caption =
        document.getElementById("memoryCaption");

    const counter =
        document.getElementById("memoryCounter");


    if (!image || !caption || !counter) {
        return;
    }


    const memory =
        memoryList[index];


    image.style.opacity = "0";


    setTimeout(() => {

        image.src = memory.image;

        caption.textContent =
            memory.caption;

        counter.textContent =
            (index + 1) +
            " / " +
            memoryList.length;

        image.style.opacity = "1";

    }, 200);
}


/* =========================================
   NEXT MEMORY
========================================= */

function nextMemory() {

    if (memoryList.length === 0) {
        return;
    }

    currentMemory++;

    if (currentMemory >= memoryList.length) {
        currentMemory = 0;
    }

    showMemory(currentMemory);
}


/* =========================================
   PREVIOUS MEMORY
========================================= */

function previousMemory() {

    if (memoryList.length === 0) {
        return;
    }

    currentMemory--;

    if (currentMemory < 0) {
        currentMemory =
            memoryList.length - 1;
    }

    showMemory(currentMemory);
}


/* =========================================
   INITIAL SCREEN
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    // Home visible
    startScreen.style.display = "flex";

    // Everything else hidden
    loadingScreen.style.display = "none";

    dashboard.style.display = "none";

    memories.style.display = "none";

    ourStory.classList.remove("show");

    // Load first memory
    showMemory(0);

});