const BASED_METER_QUESTIONS = [
    { question: 'What’s your morning routine?', choices: [
        { text: 'Cold shower, hit gym, journal wins', value: 2 },
        { text: 'Check TikTok in bed', value: -1 },
        { text: 'Scroll Reddit for 2 hours', value: -2 },
        { text: 'Wake up at 4 AM, scream “RISE AND GRIND”', value: 3 }
    ]},
    { question: 'Someone sends you a rizz line. What do you do?', choices: [
        { text: 'Reply with a better one', value: 2 },
        { text: 'Screenshot it and laugh with the group chat', value: -1 },
        { text: 'Ignore and keep scrolling', value: 0 },
        { text: 'Ask RizzAI for one twice as powerful', value: 3 }
    ]},
    { question: 'Choose your role model:', choices: [
        { text: 'GigaChad', value: 2 },
        { text: 'Elon Musk', value: 1 },
        { text: 'Andrew Tate', value: -1 },
        { text: 'Patrick Star', value: -2 }
    ]},
    { question: 'You’re in a Discord VC. What\'s your energy?', choices: [
        { text: 'Meme spam king', value: 0 },
        { text: 'Quiet observer', value: -1 },
        { text: 'Instantly plays earrape', value: -2 },
        { text: 'Mod with anime pfp and weird power', value: 0 }
    ]},
    { question: 'Choose your weapon:', choices: [
        { text: 'Rizz', value: 2 },
        { text: 'Skibidi Toilet', value: -2 },
        { text: 'Sigma stare', value: 3 },
        { text: 'Keyboard warrior tweets', value: -2 }
    ]},
    { question: 'What’s your default reaction to a challenge?', choices: [
        { text: '“I fear no man”', value: 2 },
        { text: '“That’s not fair”', value: -1 },
        { text: '“Let me cook”', value: 1 },
        { text: '“My mom said no”', value: -1 }
    ]},
    { question: 'Pick a lifestyle motto:', choices: [
        { text: '"Discipline = Freedom"', value: 2 },
        { text: '"If it’s meant to be, it will be"', value: 0 },
        { text: '"Live. Laugh. Love."', value: -2 },
        { text: '"Skibidi your way to the top"', value: -1 }
    ]},
    { question: 'Your crush ignores your message. You:', choices: [
        { text: 'Work on yourself and keep rising', value: 2 },
        { text: 'Spam “hey” 4x', value: -2 },
        { text: 'Block them and cry in the gym', value: 0 },
        { text: 'Write an AI-generated poem', value: 1 }
    ]},
    { question: 'What’s your guilty pleasure?', choices: [
        { text: 'Watching NPC compilations', value: -1 },
        { text: 'Motivational edits with Kanye in background', value: 2 },
        { text: 'Still playing Among Us daily', value: -2 },
        { text: 'Building MemeOS', value: 3 }
    ]},
    { question: 'You walk into a party and say:', choices: [
        { text: '“Where’s the aux?”', value: 2 },
        { text: '“Y’all got Roblox on this?”', value: -2 },
        { text: '“Let me cook 🔥”', value: 3 },
        { text: 'Sits in corner pretending to text', value: -1 }
    ]},
];

const BASED_METER_RESULTS = [
    {
        score: 15,
        title: "ULTRA BASED",
        description: "You are not just based – you’re the final boss of Rizz, the gym of wisdom, the giga of chads.<br>The council of MemeOS has seen your grindset and approved your ascension.",
        achievements: [
            "☑ Skibidi Resistance",
            "☑ Sigma Upgrade v3.0",
            "☑ Unlocked “Let Him Cook” Mode"
        ],
        image: 'js/apps/ultra_based_wojak.png'
    },
    {
        score: 5,
        title: "BASED",
        description: "You’re on the right path. Slight NPC moments, but mostly fire. Keep grinding.",
        image: 'js/apps/based_wojak.png'
    },
    {
        score: -5,
        title: "CRINGE",
        description: "You might be in a permanent L loop. Escape is still possible. May God have mercy on your DMs.",
        image: 'js/apps/cringe_wojak.png'
    },
    {
        score: -10,
        title: "NPC",
        description: "You’re the tutorial character in someone else’s story. Break the script. Touch grass.",
        image: 'js/apps/NPC_wojak.png'
    }
];

function createBasedMeterWindow() {
    const win = makeWindow('BasedMeter');
    win.classList.remove('w-96','h-64');
    win.classList.add('w-[800px]','h-[600px]');
    const container = document.createElement('div');
    container.className = 'content w-full h-full bg-gray-800 text-white p-6 flex flex-col items-center justify-center font-mono';
    win.appendChild(container);

    let currentQuestionIndex = 0;
    let score = 0;
    let answerHistory = []; 

    function showResults() {
       
        let result;
        if (score >= 15) result = BASED_METER_RESULTS[0]; // ULTRA BASED
        else if (score >= 5) result = BASED_METER_RESULTS[1];  // BASED
        else if (score > -10) result = BASED_METER_RESULTS[2]; // CRINGE
        else result = BASED_METER_RESULTS[3]; // NPC

        const maxScore = 23; 
        const minScore = -18; 
        const scorePercentage = Math.max(0, Math.min(100, ((score - minScore) / (maxScore - minScore)) * 100));

        let achievementsHTML = '';
        if (result.achievements) {
            achievementsHTML = `
                <div class="mt-4 text-left w-full max-w-md">
                    <p class="text-yellow-400 font-bold">Achievements unlocked:</p>
                    <ul class="list-none pl-0 mt-2 text-green-400">
                        ${result.achievements.map(ach => `<li>${ach}</li>`).join('')}
                    </ul>
                </div>
            `;
        }
        
        let embraceButtonHTML = '';
        if (result.title === 'NPC' || result.title === 'CRINGE') {
            embraceButtonHTML = `<button id="embraceBtn" class="px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded">Embrace the ${result.title}</button>`;
        }

        container.innerHTML = `
            <div class="flex flex-col items-center text-center">
                <h2 class="text-3xl font-bold text-yellow-400 mb-2">${result.title}</h2>
                <img src="${result.image}" class="w-32 h-32 my-4 rounded-lg border-2 border-yellow-400">
                <p class="mb-4 max-w-md">${result.description}</p>
                ${achievementsHTML}
                <div class="w-full max-w-md bg-gray-700 rounded-full h-6 mt-4">
                    <div class="bg-yellow-400 h-6 rounded-full text-right pr-2 text-black font-bold" style="width: ${scorePercentage}%">${Math.round(scorePercentage)}% Based</div>
                </div>
                <div class="mt-6 flex space-x-4">
                    <button id="retakeBtn" class="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded">Retake Quiz</button>
                    ${embraceButtonHTML}
                </div>
            </div>
        `;

        container.querySelector('#retakeBtn').onclick = () => {
            currentQuestionIndex = 0;
            score = 0;
            answerHistory = [];
            showStartScreen();
        };
        
        if (result.title === 'NPC' || result.title === 'CRINGE') {
            container.querySelector('#embraceBtn').onclick = () => {
                win.dispatchEvent(new Event('close'));
                win.remove(); 
            };
        }
    }

    function renderQuestion() {
        if (currentQuestionIndex >= BASED_METER_QUESTIONS.length) {
            showResults();
            return;
        }

        const questionData = BASED_METER_QUESTIONS[currentQuestionIndex];
        const progress = ((currentQuestionIndex) / BASED_METER_QUESTIONS.length) * 100;

        let backButtonHTML = '';
        if (currentQuestionIndex > 0) {
            backButtonHTML = `<button id="backBtn" class="absolute top-6 left-6 px-3 py-1 bg-gray-600 hover:bg-gray-500 rounded z-10">Back</button>`;
        }

        container.innerHTML = `
            <div class="relative w-full h-full flex flex-col items-center justify-center">
                ${backButtonHTML}
                <div class="w-full max-w-2xl">
                    <div class="w-full bg-gray-700 rounded-full h-4 mb-4">
                        <div class="bg-green-500 h-4 rounded-full" style="width: ${progress}%"></div>
                    </div>
                    <h2 class="text-xl mb-6 text-center">${questionData.question}</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full"></div>
                </div>
            </div>
        `;

        if (currentQuestionIndex > 0) {
            container.querySelector('#backBtn').onclick = () => {
                currentQuestionIndex--;
                score = answerHistory.pop();
                renderQuestion();
            };
        }

        const choicesContainer = container.querySelector('.grid');
        questionData.choices.forEach(choice => {
            const choiceBtn = document.createElement('button');
            choiceBtn.className = 'p-4 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-200';
            choiceBtn.textContent = choice.text;
            choiceBtn.onclick = () => {
                answerHistory.push(score);
                score += choice.value;
                currentQuestionIndex++;
                renderQuestion();
            };
            choicesContainer.appendChild(choiceBtn);
        });
    }

    function showStartScreen() {
        currentQuestionIndex = 0;
        score = 0;
        answerHistory = [];
        container.innerHTML = `
            <h1 class="text-4xl font-bold text-yellow-400 mb-4">The BasedMeter</h1>
            <p class="text-lg mb-8">Discover your true nature. Are you Based, or Cringe?</p>
            <button id="startBtn" class="px-8 py-4 bg-green-500 hover:bg-green-600 text-2xl font-bold rounded-lg">BEGIN</button>
        `;
        container.querySelector('#startBtn').onclick = renderQuestion;
    }

    showStartScreen();

    return win;
}

window.apps = window.apps || {};
window.apps.basedMeter = { 
    createWindow: createBasedMeterWindow, 
    icon: 'js/apps/based_meter.png'
};