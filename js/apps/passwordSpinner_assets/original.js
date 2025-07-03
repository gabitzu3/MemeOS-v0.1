document.addEventListener('DOMContentLoaded', () => {
    // --- Element Validation ---
    const caseConts = document.querySelector("#case-container");
    const caseWrap = document.querySelector("#container-wrapper");
    const overlay = document.querySelector("#gamble-overlay");
    const pw = document.querySelector("#pw");
    const gambleButton = document.querySelector("#gambleButton");
    const copyButton = document.querySelector("#copyToClipboard");
    const resetButton = document.querySelector("#resetButton");

    if (!caseConts || !caseWrap || !overlay || !pw || !gambleButton || !copyButton || !resetButton) {
        console.error("Initialization Error: One or more required HTML elements were not found.");
        if (!caseConts) console.error("- #case-container is missing.");
        if (!caseWrap) console.error("- #container-wrapper is missing.");
        if (!overlay) console.error("- #gamble-overlay is missing.");
        if (!pw) console.error("- #pw is missing.");
        if (!gambleButton) console.error("- #gambleButton is missing.");
        if (!copyButton) console.error("- #copyToClipboard is missing.");
        if (!resetButton) console.error("- #resetButton is missing.");
        return; // Stop script execution if elements are missing
    }

    // --- Script Logic ---
    const baseOffset = -4870;
    const pwChange = new Event("change");

    const innerCase = (r, c) => {
        return `
            <div class="${r} inner m-1">${c}</div>
        `;
    };

    const waitIcon = () => {
        return `
        <span class="material-symbols-outlined" id="loading">
            refresh
        </span>
        `;
    };

    function generate(val) {
        let r = 0;
        let e = [];
        const iBlue = "abcdefghijklmnopqrstuvwxyz";
        const iPurple = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const iPink = "1234567890";
        const iRed = "!@#$%^&*()";
        const iGold = "[];',./";
        for (let i = 0; i < val; i++) {
            r = Math.random();
            if (r < 0.0026) { e.push({ r: "gold", c: iGold.charAt(Math.floor(Math.random() * iGold.length)) }); continue; }
            if (r < 0.0064) { e.push({ r: "red", c: iRed.charAt(Math.floor(Math.random() * iRed.length)) }); continue; }
            if (r < 0.032) { e.push({ r: "pink", c: iPink.charAt(Math.floor(Math.random() * iPink.length)) }); continue; }
            if (r < 0.1598) { e.push({ r: "purple", c: iPurple.charAt(Math.floor(Math.random() * iPurple.length)) }); continue; }
            e.push({ r: "blue", c: iBlue.charAt(Math.floor(Math.random() * iBlue.length)) });
        }
        return e;
    }

    function open() {
        const sNormal = new Audio("media/case normal.mp3");
        const sGold = new Audio("media/case gold.mp3");
        sNormal.onerror = () => console.error("Error loading normal sound.");
        sGold.onerror = () => console.error("Error loading gold sound.");
        gambleButton.innerHTML = waitIcon();
        overlay.classList.remove("hidden");
        overlay.style.opacity = 0;
        overlay.animate([{ opacity: 0 }, { opacity: 1 }], 100).onfinish = () => {
            overlay.style.opacity = 1;
        };
        caseConts.innerHTML = "";
        const g = generate(70);
        let s = ``;
        for (let j of g) {
            s += `${innerCase(j.r, j.c)} `;
        }
        const xOffset = Math.floor(Math.random() * (40 + 40 + 1) - 40);
        const wOffset = (caseWrap.clientWidth - 1536) / 2;
        caseConts.innerHTML = s;
        let spin = caseConts.animate([{ transform: "translateX(0px)" }, { transform: `translateX(${baseOffset + wOffset + xOffset}px)` }], {
            duration: 5200,
            easing: "ease-out",
        });
        if (g[57].r === "gold") {
            sGold.play().catch(e => console.error("Gold sound playback error:", e));
        } else {
            sNormal.play().catch(e => console.error("Normal sound playback error:", e));
        }
        spin.onfinish = () => {
            caseConts.style.transform = `translateX(${baseOffset + wOffset + xOffset}px)`;
            setTimeout(() => {
                overlay.animate([{ opacity: 1 }, { opacity: 0 }], 200).onfinish = () => {
                    gambleButton.innerText = "Open Character";
                    overlay.classList.add("hidden");
                    pw.dispatchEvent(pwChange);
                };
                pw.value = `${pw.value}${g[57].c}`;
            }, 1000);
        };
    }

    copyButton.addEventListener("click", () => {
        if (pw.value != "") {
            pw.select();
            pw.setSelectionRange(0, 9999);
            navigator.clipboard.writeText(pw.value);
            alert("Copied to clipboard!");
        } else {
            alert("You haven't gambled yet");
        }
    });

    pw.addEventListener("change", () => {
        if (pw.value != "") {
            resetButton.classList.remove("hidden");
        } else {
            resetButton.classList.add("hidden");
        }
    });

    resetButton.addEventListener("click", () => {
        pw.value = "";
        pw.dispatchEvent(pwChange);
    });

    gambleButton.addEventListener("click", open);
});
