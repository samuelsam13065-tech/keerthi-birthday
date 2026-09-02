/* =========================================
   SCREEN CONTROL
========================================= */

const startScreen = document.getElementById("startScreen");
const loadingScreen = document.getElementById("loadingScreen");
const dashboard = document.getElementById("dashboard");

const memories = document.getElementById("memories");
const story = document.getElementById("story");
const friendship = document.getElementById("friendship");
const myMessage = document.getElementById("myMessage");


/* =========================================
   START SURPRISE
========================================= */

function startSurprise() {

    // Make sure the required elements exist
    if (!startScreen || !loadingScreen) {
        console.error("Start or loading screen not found.");
        return;
    }

    // Hide welcome screen
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


    // Reset loading values
    if (progressBar) {
        progressBar.style.width = "0%";
    }

    if (percentage) {
        percentage.textContent = "0%";
    }

    if (loadingText) {
        loadingText.textContent =
            messages[0];
    }


    const interval = setInterval(() => {

        progress += 2;


        if (progress > 100) {
            progress = 100;
        }


        /* -----------------------------
           PROGRESS BAR
        ----------------------------- */

        if (progressBar) {

            progressBar.style.width =
                progress + "%";

        }


        /* -----------------------------
           PERCENTAGE
        ----------------------------- */

        if (percentage) {

            percentage.textContent =
                progress + "%";

        }


        /* -----------------------------
           LOADING MESSAGE
        ----------------------------- */

        if (loadingText) {

            const messageIndex =
                Math.min(
                    Math.floor(progress / 20),
                    messages.length - 1
                );

            loadingText.textContent =
                messages[messageIndex];

        }


        /* -----------------------------
           FINISHED
        ----------------------------- */

        if (progress >= 100) {

            clearInterval(interval);


            setTimeout(() => {

                // Hide loading screen
                loadingScreen.classList.remove("show");
                loadingScreen.style.display = "none";


                // Show dashboard
                showDashboard();


            }, 700);

        }

    }, 50);
}



/* =========================================
   SHOW DASHBOARD
========================================= */

function showDashboard() {

    // Hide all screens safely

    if (startScreen) {
        startScreen.style.display = "none";
    }

    if (loadingScreen) {
        loadingScreen.style.display = "none";
    }

    if (memories) {
        memories.style.display = "none";
    }

    if (story) {
        story.style.display = "none";
        story.classList.remove("show");
    }

    if (friendship) {
        friendship.style.display = "none";
        friendship.classList.remove("show");
    }

    if (myMessage) {
        myMessage.style.display = "none";
        myMessage.classList.remove("show");
    }


    // Show dashboard

    if (dashboard) {
        dashboard.style.display = "flex";
    }

}



/* =========================================
   OPEN MEMORIES
========================================= */

function openMemories() {

    // Hide dashboard
    if (dashboard) {
        dashboard.style.display = "none";
    }


    // Hide other screens
    hideOtherScreens();


    // Show memories
    if (memories) {

        memories.style.display = "flex";

    }


    // Display current memory
    showMemory(currentMemory);

}



/* =========================================
   CLOSE MEMORIES
========================================= */

function closeMemories() {

    if (memories) {
        memories.style.display = "none";
    }


    if (dashboard) {
        dashboard.style.display = "flex";
    }

}



/* =========================================
   OPEN OUR STORY
========================================= */

function openStory() {

    // Hide dashboard
    if (dashboard) {
        dashboard.style.display = "none";
    }


    // Hide other screens
    hideOtherScreens();


    // Show story
    if (story) {

        story.style.display = "flex";
        story.classList.add("show");

    }

}



/* =========================================
   CLOSE OUR STORY
========================================= */

function closeStory() {

    if (story) {

        story.style.display = "none";
        story.classList.remove("show");

    }


    if (dashboard) {
        dashboard.style.display = "flex";
    }

}



/* =========================================
   OPEN FRIENDSHIP.PY
========================================= */

function openFriendship() {

    if (dashboard) {
        dashboard.style.display = "none";
    }


    hideOtherScreens();


    if (friendship) {

        friendship.style.display = "flex";
        friendship.classList.add("show");

    }

}



/* =========================================
   CLOSE FRIENDSHIP.PY
========================================= */

function closeFriendship() {

    if (friendship) {

        friendship.style.display = "none";
        friendship.classList.remove("show");

    }


    if (dashboard) {
        dashboard.style.display = "flex";
    }

}



/* =========================================
   OPEN MESSAGE
========================================= */

function openMessage() {

    if (dashboard) {
        dashboard.style.display = "none";
    }


    hideOtherScreens();


    if (myMessage) {

        myMessage.style.display = "flex";
        myMessage.classList.add("show");

    }

}



/* =========================================
   CLOSE MESSAGE
========================================= */

function closeMessage() {

    if (myMessage) {

        myMessage.style.display = "none";
        myMessage.classList.remove("show");

    }


    if (dashboard) {
        dashboard.style.display = "flex";
    }

}



/* =========================================
   HIDE OTHER SCREENS
========================================= */

function hideOtherScreens() {

    if (memories) {
        memories.style.display = "none";
    }


    if (story) {

        story.style.display = "none";
        story.classList.remove("show");

    }


    if (friendship) {

        friendship.style.display = "none";
        friendship.classList.remove("show");

    }


    if (myMessage) {

        myMessage.style.display = "none";
        myMessage.classList.remove("show");

    }

}



/* =========================================
   MEMORY DATA
========================================= */

const memoryList = [

    {
        image: "image/pi.jpeg",

        caption:
            "It was just a silly moment. I’ll never forget it. And 1st pic — AI 😂✨"
    },


    {
        image: "image/IMG-20260326-WA0065.jpg.jpeg",

        caption:
            "I never forget this moment where a silly fight happened due to capturing pics. Maybe this moment created all this friendship and love between us. 💙"
    },


    {
        image:
            "image/WhatsApp Image 2026-09-02 at 2.15.08 AM.jpeg",

        caption:
            "An unexpected visit to the temple because of some issues… but somehow, it became one of the most memorable experiences with you. And just like those previous days, this little moment became another beautiful memory of us. 💙✨"
    }

];



/* =========================================
   CURRENT MEMORY
========================================= */

let currentMemory = 0;



/* =========================================
   SHOW MEMORY
========================================= */

function showMemory(index) {

    const image =
        document.getElementById("memoryImage");

    const caption =
        document.getElementById("memoryCaption");

    const counter =
        document.getElementById("memoryCounter");


    // Check elements
    if (!image || !caption || !counter) {

        console.error(
            "Memory elements not found."
        );

        return;

    }


    // Check memory list
    if (
        memoryList.length === 0 ||
        !memoryList[index]
    ) {

        return;

    }


    const memory =
        memoryList[index];


    // Fade image out

    image.style.opacity = "0";


    setTimeout(() => {

        image.src = memory.image;

        image.alt =
            "Memory " + (index + 1);


        caption.textContent =
            memory.caption;


        counter.textContent =
            (index + 1) +
            " / " +
            memoryList.length;


        image.style.opacity = "1";


        // Handle image loading error
        image.onerror = function () {

            console.error(
                "Image not found:",
                memory.image
            );

        };

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


    if (
        currentMemory >=
        memoryList.length
    ) {

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

document.addEventListener(
    "DOMContentLoaded",
    () => {

        // Welcome screen visible

        if (startScreen) {
            startScreen.style.display = "flex";
        }


        // Loading hidden

        if (loadingScreen) {
            loadingScreen.style.display = "none";
        }


        // Dashboard hidden

        if (dashboard) {
            dashboard.style.display = "none";
        }


        // Memories hidden

        if (memories) {
            memories.style.display = "none";
        }


        // Story hidden

        if (story) {

            story.style.display = "none";
            story.classList.remove("show");

        }


        // Friendship hidden

        if (friendship) {

            friendship.style.display = "none";
            friendship.classList.remove("show");

        }


        // Message hidden

        if (myMessage) {

            myMessage.style.display = "none";
            myMessage.classList.remove("show");

        }


        // Load first memory

        showMemory(0);

    }
);
/* =========================================
   FRIENDSHIP CODE
========================================= */

const friendshipCode =
    document.getElementById("friendshipCode");


function openFriendshipCode() {

    // Hide dashboard
    dashboard.style.display = "none";

    // Hide memories
    memories.style.display = "none";

    // Hide story
    if (ourStory) {
        ourStory.classList.remove("story-active");
        ourStory.style.display = "none";
    }

    // Show Friendship.py
    friendshipCode.style.display = "flex";
}


function closeFriendshipCode() {

    // Hide Friendship.py
    friendshipCode.style.display = "none";

    // Return to dashboard
    dashboard.style.display = "flex";
}