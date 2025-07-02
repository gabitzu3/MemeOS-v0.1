function createRizzAIWindow() {
    const rizzes = {
        'Normal Rizz': [
            "If I could rearrange the alphabet, I’d put ‘U’ and ‘I’ together.",
            "Are you a parking ticket? Because you've got 'FINE' written all over you.",
            "Are you a 45-degree angle? Because you're acute-y.",
            "Do you have a map? I just got lost in your eyes.",
            "Are you made of copper and tellurium? Because you’re Cu-Te.",
            "Is your name Google? Because you have everything I’ve been searching for.",
            "Are you a parking ticket? Because you’ve got ‘fine’ written all over you.",
            "If you were a vegetable, you’d be a cute-cumber.",
            "Are you from Tennessee? Because you're the only ten I see.",
            "Do you believe in love at first sight, or should I walk by again?",
            "Are you a magician? Because whenever I look at you, everyone else disappears.",
            "I must be a snowflake, because I've fallen for you.",
            "Are you an electrician? Because you're definitely lighting up my day/night.",
            "If being sexy was a crime, you’d be guilty as charged.",
            "Are you a loan? Because you've got my interest.",
            "I'm not a photographer, but I can picture me and you together.",
            "Are you my appendix? Because I have a funny feeling in my stomach that makes me feel like I should take you out.",
            "If you were a fruit, you’d be a fine-apple.",
            "Are you a time traveler? Because I see you in my future.",
            "Do you have a Band-Aid? I just scraped my knee falling for you."
            
        ],
        'Sigma Rizz': [
            "I’m not here to impress. I’m here to dominate your heart like I dominate my morning grindset.",
            "I don't chase. I elevate.",
            "Not here to impress anyone, but here I am, impressing you anyway.",
            "You don’t need to be the center of the world when you’re already the center of your own.",
            "I work in silence, but the results speak louder than any words could.",
            "I’m not looking for approval; I’m looking for someone who sees the vision."
        ],
        
        'Shakespearean Rizz': [
            "Thou art the sunshine of my solitude, the algorithm to my code.",
            "Hark! Doth thou have a scroll of digits so I may message thee anon?",
            "Thy beauty outshines the fairest summer's algorithm.",
            "Dost thou mind if I steal a moment, or shall I steal thy heart instead?",
            "My love for thee is as boundless as the sea, yet more steadfast than the stars above."
        ],
        'Skibidi Rizz': [
            "Skibidi bop yes yes yes; your beauty flushes me away like a toilet boss!",
            "Are you my skibidi toilet? Because I can't get you out of my head.",
            "You're more fire than the cameraman's flamethrower!",
            "Skibidi bop, and I just had to stop—cause you’re the only thing on my mind.",
            "I’m just here, vibing, Skibidi-bopping, and wondering if you wanna join me."
        ],
        'Andrew Tate Rizz': [
            "I don't chase; I attract. Consider yourself lucky my Bugatti's in the shop.",
            "Escape the Matrix. My DMs are always open.",
            "Top Gs don't do pick-up lines. Fact: You and I would be a power couple.", 
            "I don’t need a plan B. I’m the plan A, B, and C. Wanna join me?",
            "You like fast cars? How about a fast life with me in the driver’s seat?"
        ],
        'NPC Rizz': [
            "Hello, traveler. You have fine eyes. Care to trade five apples for my heart?",
            "Stay awhile and listen … to me asking for your number.",
            "I used to be an adventurer like you, then I took an arrow in the knee … pointing straight to you.",
            "Quest Accepted: Win your heart. XP Gained: 100.",
            "Objective Complete: Make you smile. Reward Unlocked: Heart."
        ],
        'GigaChad Rizz': [
            "I bench-press emotional baggage and deadlift disappointment. Wanna spot me for life?",
            "My jawline isn't the only sharp thing here—check my love for you.",
            "Ordinary people have dreams; I have goals. You're my new goal.",
            "I don’t just lift weights, I lift entire moods. Wanna join the gym of my life?",
            "Call me the 1% because when I walk into a room, the rest of the world just fades."
        ],
        'Hacker Rizz': [
            "Are you root access? Because you've unlocked my entire filesystem.",
            "My love for you is like an unpatched vulnerability—critical and needing immediate attention.",
            "Call me a firewall because my heart's packets drop for everyone but you.",
            "I just cracked the code to your heart. Password: ‘Me.’",
            "My love for you is like a virus, spreading rapidly and unstoppable."
        ],
        'Cringe Rizz': [
            "Are you a beaver? Because dam.",
            "Do you like raisins? How do you feel about a date?",
            "If I could rearrange the alphabet, I'd put 'U' and 'I' together. And 'N' and 'O' right after, just in case.",
            "Are you my appendix? Because I have a funny feeling in my stomach that makes me want to take you out.",
            "I'm learning about important dates in history. Wanna be one of them?"
        ]
    };

    const win = makeWindow('RizzAI');
    
    win.classList.remove('w-96','h-64');
    win.classList.add('w-[800px]','h-[500px]');
    win.dataset.app = 'rizzAI';

   
    const content = document.createElement('div');
    content.className = 'content w-full h-full p-6 flex flex-col bg-gray-800 text-white font-mono';
    const vineBoom = new Audio('sounds/vine-boom.mp3');

   
    const title = document.createElement('h2');
    title.className = 'text-2xl mb-4 text-center text-pink-400';
    title.textContent = 'RizzAI';

    const controls = document.createElement('div');
    controls.className = 'flex items-center justify-center gap-4 mb-4';

    const styleLabel = document.createElement('label');
    styleLabel.htmlFor = 'rizz-style';
    styleLabel.textContent = 'Select Style:';

    const styleSelect = document.createElement('select');
    styleSelect.id = 'rizz-style';
    styleSelect.className = 'bg-gray-700 p-2 rounded';
    Object.keys(rizzes).forEach(style => {
        const option = document.createElement('option');
        option.value = style;
        option.textContent = style;
        styleSelect.appendChild(option);
    });

    const generateBtn = document.createElement('button');
    generateBtn.className = 'px-4 py-2 bg-pink-500 hover:bg-pink-400 rounded';
    generateBtn.textContent = 'Generate Rizz';

    controls.appendChild(styleLabel);
    controls.appendChild(styleSelect);
    controls.appendChild(generateBtn);

    const resultText = document.createElement('p');
    resultText.className = 'text-lg text-center p-4 h-full flex items-center justify-center bg-gray-900 rounded-lg';
    resultText.textContent = 'Click the button to generate some high-quality rizz...';


    generateBtn.onclick = () => {
        const selectedStyle = styleSelect.value;
        const rizzList = rizzes[selectedStyle];
        const randomRizz = rizzList[Math.floor(Math.random() * rizzList.length)];
        resultText.textContent = randomRizz;

        // Play sound if not 'Normal Rizz'
        if (selectedStyle !== 'Normal Rizz') {
            vineBoom.currentTime = 0;
            vineBoom.play().catch(e => console.error("Error playing sound:", e));
        }
    };


    content.appendChild(title);
    content.appendChild(controls);
    content.appendChild(resultText);
    win.appendChild(content);

    return win;
}


window.apps = window.apps || {};
window.apps.rizzAI = { 
    createWindow: createRizzAIWindow, 
    icon: 'js/apps/rizzAI_icon.png' 
};
