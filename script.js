// ============================================
// FRIENDSHIP.EXE - BIRTHDAY WEBSITE
// ============================================

function startSurprise() {

    // Get elements from the page
    const startScreen =
        document.getElementById("startScreen");

    const loadingScreen =
        document.getElementById("loadingScreen");

    const progressBar =
        document.getElementById("progressBar");

    const percentage =
        document.getElementById("percentage");

    const loadingText =
        document.getElementById("loadingText");

    const dashboard =
        document.getElementById("dashboard");


    // ==========================================
    // CHECK ELEMENTS
    // ==========================================

    if (!startScreen ||
        !loadingScreen ||
        !progressBar ||
        !percentage ||
        !loadingText ||
        !dashboard) {

        console.error(
            "Friendship.exe: Required HTML element is missing."
        );

        return;
    }


    // ==========================================
    // HIDE FRONT PAGE
    // ==========================================

    startScreen.style.opacity = "0";

    startScreen.style.transform =
        "scale(0.95)";


    setTimeout(() => {

        startScreen.style.display = "none";

    }, 500);


    // ==========================================
    // SHOW FRIENDSHIP.EXE
    // ==========================================

    loadingScreen.style.display = "flex";

    loadingScreen.style.opacity = "0";


    setTimeout(() => {

        loadingScreen.style.opacity = "1";

    }, 50);


    // ==========================================
    // RESET PROGRESS
    // ==========================================

    let progress = 0;

    progressBar.style.width = "0%";

    percentage.textContent = "0%";

    loadingText.textContent =
        "Initializing friendship...";


    // ==========================================
    // LOADING MESSAGES
    // ==========================================

    const messages = [

        "Initializing friendship...",

        "Loading memories...",

        "Connecting bestie database...",

        "Compiling crazy moments...",

        "Searching for laughter...",

        "Checking friendship level...",

        "Preparing birthday surprise..."

    ];


    let messageIndex = 0;


    // ==========================================
    // START LOADING
    // ==========================================

    const loadingInterval =
        setInterval(() => {

            progress++;


            // Update progress bar

            progressBar.style.width =
                progress + "%";


            // Update percentage

            percentage.textContent =
                progress + "%";


            // Change message

            if (
                progress % 14 === 0 &&
                messageIndex < messages.length
            ) {

                loadingText.textContent =
                    messages[messageIndex];

                messageIndex++;

            }


            // ======================================
            // LOADING COMPLETE
            // ======================================

            if (progress >= 100) {

                clearInterval(
                    loadingInterval
                );


                progressBar.style.width =
                    "100%";


                percentage.textContent =
                    "100%";


                loadingText.textContent =
                    "Friendship successfully loaded 💙";


                // Access granted

                setTimeout(() => {

                    percentage.textContent =
                        "✓ ACCESS GRANTED";

                }, 500);


                // ==================================
                // OPEN DASHBOARD
                // ==================================

                setTimeout(() => {

                    // Fade out loading screen

                    loadingScreen.style.opacity =
                        "0";


                    setTimeout(() => {

                        // Hide loading screen

                        loadingScreen.style.display =
                            "none";


                        // Show dashboard

                        dashboard.style.display =
                            "block";


                        // Animate dashboard

                        dashboard.style.opacity =
                            "0";

                        dashboard.style.transform =
                            "translateY(30px)";


                        setTimeout(() => {

                            dashboard.style.opacity =
                                "1";

                            dashboard.style.transform =
                                "translateY(0)";

                        }, 100);


                    }, 800);


                }, 1500);

            }

        }, 40);

}