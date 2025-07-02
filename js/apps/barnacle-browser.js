const YOUTOOB_VIDEOS = [
    {
        id: 'YCPDVVLUw-4',
        title: 'Goofy Goober Rock - The SpongeBob SquarePants Movie',
        thumbnail: 'js/apps/barnacle_browser_assets/thumb_goofy_goober.png'
    },
    {
        id: 'xPgjL7AsCX4',
        title: 'SpongeBob SquarePants - Best Day Ever',
        thumbnail: 'js/apps/barnacle_browser_assets/thumb_best_day_ever.png'
    },
    {
        id: 'iZw9V-007Uk',
        title: 'The Krusty Krab Pizza, is the pizza, for you and me!',
        thumbnail: 'js/apps/barnacle_browser_assets/thumb_krusty_krab_pizza.png'
    },
    {
        id: 'ad',
        title: 'CLICK FOR A FREE KRABBY PATTY! GUARANTEED!',
        thumbnail: 'js/apps/barnacle_browser_assets/thumb_bsod_ad.png',
        desc: 'Totally not a virus. Trust us.'
    },
    {
        id: 'k9iYm9PEAHg',
        title: 'Sweet Victory - Super Bowl LIII Halftime Show',
        thumbnail: 'js/apps/barnacle_browser_assets/thumb_sweet_victory.png'
    }
];

const KRABBY_SEARCH_DATA = {
    "krabby patty secret formula": {
        results: [
            { title: "Krabby Patty Secret Formula REVEALED!", url: "chum-bucket.com/totally-real-formula", desc: "Plankton's blog finally leaks the secret formula for the Krabby Patty. Is it real this time? Sources say 'probably not'." },
            { title: "Mr. Krabs Discusses Patty Security", url: "krusty-krab-news.com/security", desc: "Eugene H. Krabs outlines the new high-tech security system protecting his prized recipe from would-be thieves." },
            { title: "The Science of Krabby Patties", url: "sandy-cheeks-science.com/food-science", desc: "A detailed breakdown of the patty's molecular structure by Sandy Cheeks. Contains words like 'quantum' and 'nuts'." }
        ]
    },
    "is mayonnaise an instrument?": {
        results: [
            { title: "Is Mayonnaise an Instrument? - A Musical Debate", url: "music-theory-by-patrick.io", desc: "An in-depth musical analysis exploring the tonal qualities of mayonnaise, horseradish, and other condiments." },
            { title: "Squidward Tentacles' Official Statement", url: "squidwards-blog.com/music", desc: "'No, mayonnaise is not an instrument. Horseradish isn't an instrument either.' Read the full, angry rant here." },
            { title: "The Bikini Bottom Philharmonic Orchestra Auditions", url: "bikinibottom-philharmonic.org/auditions", desc: "Now accepting applications for all instruments. Please do not bring condiments to your audition." }
        ]
    },
    "wumbology: the study of wumbo": {
        results: [
            { title: "Wumbology: The Study of Wumbo - A Beginner's Guide", url: "patrick-star-university.edu/wumbology-101", desc: "He, she, me... WUMBO. It's first grade, SpongeBob! This course covers the basics of Wumbology." },
            { title: "Mermaid Man's Belt and the Power of Wumbo", url: "mermaid-man-fanclub.com/belt-analysis", desc: "A fan theory connecting the shrinking power of Mermaid Man's belt to the principles of Wumbology." }
        ]
    },
    "how to get a driver's license in 15 minutes": {
        results: [
            { title: "Mrs. Puff's Boating School - Guaranteed Pass!*", url: "mrs-puffs-boating-school.com/guaranteed-pass", desc: "*Guarantee not valid for students named SpongeBob SquarePants. We reserve the right to refuse service. And inflate." },
            { title: "Floor It? - Advanced Driving Maneuvers", url: "driving-like-a-maniac.net", desc: "Learn the controversial 'Floor It?' technique. Not recommended by 9 out of 10 boating instructors." }
        ]
    },
    "where is the leak ma'am": {
        results: [
            { title: "Famous Leaks in Bikini Bottom History", url: "bikini-bottom-archives.gov/leaks", desc: "From the great sea-nut shortage to the time Patrick's rock got a crack in it. A historical overview." },
            { title: "Plumbing Services by Mario & Luigi", url: "some-other-universe-plumbers.com", desc: "Wait, how did this get here? Wrong franchise. Please disregard." }
        ]
    }
};

const SEARCH_SUGGESTIONS = Object.keys(KRABBY_SEARCH_DATA);

const BIKINI_BOTTOM_NEWS = [
    {
        headline: 'Local Crab Earns Millionth Dollar for 37th Time',
        image: 'js/apps/barnacle_browser_assets/news_krabs_money.png',
        category: 'Business',
        summary: `Eugene H. Krabs, owner of the popular Krusty Krab eatery, today celebrated a financial milestone that critics are calling "suspiciously frequent." The event, held in the Krusty Krab's main dining area, featured a tearful Mr. Krabs attempting to marry the bill, which he referred to as "Me Millionth Dolly." The ceremony was reportedly cut short when Squidward Tentacles, the restaurant's cashier, fainted from what witnesses described as "an overdose of secondhand embarrassment." Local law enforcement, Officers Nancy and John, were called to the scene but took no action, stating, "This happens every other Tuesday. We have a punch card and everything. One more and we get a free small soda." The millionth dollar was briefly stolen by Plankton, who was found hiding inside one of the holes in SpongeBob's head, claiming he was "just visiting the cheese factory." The ensuing chase involved a condiment-based firefight where ketchup and mustard packets were used as grenades, causing minor, delicious stains. Immediately after the dollar was recovered, Patrick Star was seen trying to eat it, mistaking it for a "fancy green snack." Sandy Cheeks later analyzed the dollar and found it contained "an unusual amount of starfish DNA, cheap cologne, and trace amounts of tartar sauce." Mr. Krabs has since placed the dollar in a high-security vault at the local bank, which he now sleeps in front of every night in a tiny tent, much to the annoyance of the bank's janitorial staff. He has also reportedly started referring to all other money as "Dolly's less attractive siblings," and has been heard whispering sweet nothings to his cash register. The Flying Dutchman was also in attendance, stating he was "just here for the free food," but was disappointed to find only Krabby Patties on the menu. Mr. Krabs' daughter, Pearl, was seen leaving the event early, reportedly texting her friends, "OMG, my dad is SOOO embarrassing. He's literally trying to marry money. I'm done." SpongeBob, ever the loyal employee, commented, "I think it's beautiful when two people... or one person and an inanimate object of immense monetary value... find true love." The dollar is now on display at the Krusty Krab, behind six inches of solid steel and a laser grid, with a small sign that reads, "Look with your eyes, not with your grubby fins." An additional, smaller sign below reads, "Seriously, Patrick, this means you." Mrs. Puff was quoted as saying, "I just hope he doesn't try to drive it. I don't think my insurance covers collisions with currency." Larry the Lobster was also spotted at the event, commenting, "I came to see if the dollar wanted to get a good pump in, but it seems a little... flat. Livin' like Larry means you gotta have some real assets, bro!" Old Man Jenkins was also present, though he seemed confused, asking reporters, "Is this the line for the bathroom? I've been holding it since the last time he earned a millionth dollar." Noted food critic Bubble Bass was overheard complaining, "He makes his millionth dollar again, and still no pickles on my Krabby Patty? This is an outrage!" Financial analyst Harold Moneyfish expressed concern, stating, "This recurring 'millionth dollar' is causing hyper-inflation in the local sea-cucumber market. It's economically irresponsible!" A final, anonymous tip suggested the dollar was printed just last week at a local copy shop, but these claims remain unverified. The town of Bikini Bottom collectively sighed, updated their calendars for the next ceremony, and went about their day.`
    },
    {
        headline: 'Chum Bucket Readies for Grand Re-Re-Re-Opening',
        image: 'js/apps/barnacle_browser_assets/news_chum_bucket.png',
        category: 'Dining',
        summary: 'Plankton, the diminutive owner of the Chum Bucket, has announced another grand opening, promising his new chum recipe is "definitely not bait this time."...'
    },
    {
        headline: 'Jellyfish Fields Migration Patterns Baffle Scientists',
        image: 'js/apps/barnacle_browser_assets/news_jellyfish.png',
        category: 'Nature',
        summary: 'The annual migration of the blue-netted jellyfish has taken an unexpected turn, with swarms now appearing directly over Patrick Star\'s residence...'
    },
    {
        headline: "Local Squirrel's Treedome Mysteriously Fills with Water... Again",
        image: 'js/apps/barnacle_browser_assets/news_sandy_dome.png',
        category: 'Science',
        summary: 'Sandy Cheeks, a renowned scientist and inventor, is once again drying out her underwater dome after what she calls a "minor helmet malfunction."...'
    }
];

const CHUM_AD_POPUPS = [
    { title: "BARNACLE-GRADE MALWARE DETECTED!", message: "Your data is being sent to... The Chum Bucket. We hope you like the taste of failure." },
    { title: "YOU'VE WON A PRIZE!", message: "Click to claim your free sample of Plankton's new 'Chum on a Stick'! (Warning: May contain actual sticks)." },
    { title: "SINGLE SQUIDWARDS IN YOUR AREA!", message: "They're lonely, they're miserable, and they want to complain about their day to you. Click to connect!" }
];

function createBarnacleBrowserWindow(params = {}) {
    const isIncognito = params.incognito || false;
    const win = makeWindow(isIncognito ? 'Barnacle Browser (Incognito)' : 'Barnacle Browser');

    win.classList.remove('w-96', 'h-64');
    win.classList.add('w-[960px]', 'h-[720px]', 'flex', 'flex-col');

    if (isIncognito) {
        const incognitoContent = document.createElement('div');
        incognitoContent.className = 'flex-grow flex flex-col items-center justify-center bg-gray-700 p-8 text-white';
        incognitoContent.innerHTML = `
            <img src="js/apps/barnacle_browser_assets/patrick_incognito.png" alt="Incognito Patrick" class="w-48 h-48 mb-4">
            <h1 class="text-3xl spongebob-font mb-2">Incognito Mode</h1>
            <p>“Nobody knows what you’re looking at… except me.”</p>
        `;
        win.appendChild(incognitoContent);
        return win;
    }

    let secretClickCount = 0;
    let isSpongeMode = false;
    let tabs = {};
    let activeTabId = null;
    let activeContent = null;
    let tabCount = 0;

    const browserContainer = document.createElement('div');
    browserContainer.className = 'flex-grow flex flex-col bg-[#006994] text-white relative min-h-0';
    win.appendChild(browserContainer);

    const header = document.createElement('div');
    header.className = 'p-2 bg-[#004a6a] flex items-center gap-2';
    header.innerHTML = `
        <img id="secret-icon" src="js/apps/barnacle_browser_assets/secret_icon.png" class="w-8 h-8 cursor-pointer" title="What could this be?">
        <div class="relative flex-grow">
            <input type="text" id="url-bar" class="w-full bg-white text-black rounded px-2 py-1 text-sm" value="barnacle://home">
            <div id="loading-bar" class="absolute bottom-0 left-0 h-0.5 bg-green-400 rounded-full" style="width: 0%; transition: width 1.5s ease-out; opacity: 0;"></div>
        </div>
         <div class="relative">
            <button id="menu-button" class="text-2xl font-bold focus:outline-none px-2">&#8942;</button>
            <div id="menu-dropdown" class="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-50 hidden">
                <a href="#" id="incognito-menu-item" class="block px-4 py-2 text-sm text-white hover:bg-gray-700">New Incognito Window</a>
            </div>
        </div>
    `;
    browserContainer.appendChild(header);

    const bookmarkBar = document.createElement('div');
    bookmarkBar.id = 'bookmark-bar';
    bookmarkBar.className = 'flex bg-[#005a8a] p-1 gap-2';
    bookmarkBar.innerHTML = `
        <button class="bookmark-button spongebob-font px-3 py-1 text-sm hover:bg-[#007c9c] rounded" data-url="barnacle://home">Home</button>
        <button class="bookmark-button spongebob-font px-3 py-1 text-sm hover:bg-[#007c9c] rounded" data-url="barnacle://youtoob">YouToob</button>
        <button class="bookmark-button spongebob-font px-3 py-1 text-sm hover:bg-[#007c9c] rounded" data-url="barnacle://news">News</button>
        <button class="bookmark-button spongebob-font px-3 py-1 text-sm hover:bg-[#007c9c] rounded" data-url="barnacle://chumnet">ChumNet</button>
    `;
    browserContainer.appendChild(bookmarkBar);

    const tabsContainer = document.createElement('div');
    tabsContainer.className = 'flex bg-[#005a8a] items-center';
    
    const tabList = document.createElement('div');
    tabList.className = 'flex flex-1';
    tabList.id = 'tab-list';

    const newTabButton = document.createElement('button');
    newTabButton.id = 'new-tab-button';
    newTabButton.className = 'px-3 py-1 text-lg font-bold hover:bg-[#004a6a]';
    newTabButton.textContent = '+';

    tabsContainer.appendChild(tabList);
    tabsContainer.appendChild(newTabButton);
    browserContainer.appendChild(tabsContainer);

        const contentArea = document.createElement('div');
    contentArea.id = 'content-area';
    contentArea.className = 'flex-grow relative min-h-0';
    browserContainer.appendChild(contentArea);

    const urlInput = browserContainer.querySelector('#url-bar');
    const loadingBar = browserContainer.querySelector('#loading-bar');
    const menuButton = browserContainer.querySelector('#menu-button');
    const menuDropdown = browserContainer.querySelector('#menu-dropdown');

    const pageRenderers = {
        'home': getHomePage,
        'youtoob': getYouToobPage,
        'news': getNewsPage,
        'chumnet': getChumNetPage,
        'secret': getSecretPage,
        'search': getSearchResultsPage,
        'youtoob/watch': renderVideoPlayerPage
    };

            const navigateTo = (url, tabId, instant = false) => {
        const tab = tabs[tabId];
        if (!tab) return;

        const tabContainer = document.getElementById(tabId);
        if (!tabContainer) return;

        const pageContent = tabContainer.querySelector('.page-content');
        if (!pageContent) return;

        urlInput.value = url;
        tab.url = url;

        const renderContent = () => {
            const urlParts = url.replace(/^barnacle:\/\//, '').split('?');
            const pageKey = urlParts[0];
            const params = new URLSearchParams(urlParts[1] || '');

            const renderer = pageRenderers[pageKey];
            let contentHtml;
            let pageTitle = 'New Tab';

            if (renderer) {
                contentHtml = renderer(params);
                if (pageKey.includes('/')) {
                    pageTitle = pageKey.split('/')[1];
                } else {
                    pageTitle = pageKey;
                }
                pageTitle = pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1);
            } else {
                contentHtml = get404Page(url);
                pageTitle = '404 Not Found';
            }

            pageContent.innerHTML = contentHtml;

            if (isSpongeMode) {
                transformToSpongeSpeak(pageContent);
            }
            
            const tabElement = tabList.querySelector(`[data-tab-id="${tabId}"] .tab-title`);
            if (tabElement) {
                tabElement.textContent = pageTitle;
            }
            tab.title = pageTitle;
        };

        if (instant) {
            renderContent();
        } else {
            const loadingBarEl = tabContainer.querySelector('.loading-bar');
            if (!loadingBarEl) return;

            pageContent.innerHTML = `<div class="flex items-center justify-center h-full text-white spongebob-font text-2xl">Loading...</div>`;
            loadingBarEl.style.opacity = '1';
            loadingBarEl.style.transition = 'none';
            loadingBarEl.style.width = '0%';
            setTimeout(() => {
                loadingBarEl.style.transition = 'width 1.5s ease-out';
                loadingBarEl.style.width = '100%';
            }, 50);

            setTimeout(() => {
                renderContent();
                loadingBarEl.style.opacity = '0';
            }, 1500);
        }
    };

        const switchToTab = (tabId) => {
        if (activeTabId === tabId) return;

        if (activeTabId) {
            const oldTabElement = tabList.querySelector(`[data-tab-id="${activeTabId}"]`);
            if (oldTabElement) oldTabElement.classList.remove('bg-[#006994]');
            const oldPageContent = document.getElementById(activeTabId);
            if (oldPageContent) oldPageContent.classList.add('hidden');
        }

        const newTabElement = tabList.querySelector(`[data-tab-id="${tabId}"]`);
        if (newTabElement) newTabElement.classList.add('bg-[#006994]');
        const newPageContent = document.getElementById(tabId);
        if (newPageContent) newPageContent.classList.remove('hidden');

        activeTabId = tabId;
        const activeTab = tabs[tabId];
        if (activeTab) {
            urlInput.value = activeTab.url;
        }
    };

        const closeTab = (tabId) => {
        if (!tabs[tabId]) return;

        const tabElement = tabList.querySelector(`[data-tab-id="${tabId}"]`);
        if (tabElement) tabElement.remove();
        const pageContent = document.getElementById(tabId);
        if (pageContent) pageContent.remove();
        delete tabs[tabId];

        if (activeTabId === tabId) {
            const remainingTabs = Object.keys(tabs);
            if (remainingTabs.length > 0) {
                switchToTab(remainingTabs[0]);
            } else {
                createNewTab();
            }
        }
    };

    const createNewTab = (url = 'barnacle://home', instant = false) => {
        try {
            const tabId = `tab-${Date.now()}-${Math.random()}`;
            
            const tabEl = document.createElement('div');
            tabEl.className = 'tab-item flex items-center p-2 border-r border-gray-700 cursor-pointer bg-[#005a8a]';
            tabEl.dataset.tabId = tabId;
            tabEl.innerHTML = `
                <span class="tab-title flex-grow">New Tab</span>
                <button class="close-tab-button ml-2 w-4 h-4 flex items-center justify-center rounded-full hover:bg-gray-600">×</button>
            `;
            
            if (tabList) {
                tabList.appendChild(tabEl);
            }


            const contentEl = document.createElement('div');
            contentEl.id = tabId;
            contentEl.className = 'absolute inset-0 hidden flex flex-col';
            contentEl.innerHTML = `
                <div class="loading-bar-container w-full h-1 bg-gray-700 z-10">
                    <div class="loading-bar h-full bg-yellow-400" style="width: 0%;"></div>
                </div>
                <div class="page-content flex-grow overflow-y-auto"></div>
            `;
            
            if (contentArea) {
                contentArea.appendChild(contentEl);
            }

            tabs[tabId] = { 
                url, 
                history: [url], 
                element: tabEl,
                title: 'New Tab'
            };

            switchToTab(tabId);
            if (instant) {
                setTimeout(() => navigateTo(url, tabId, true), 10);
            } else {
                navigateTo(url, tabId);
            }


            return tabId;
        } catch (error) {
            console.error('Error creating new tab:', error);
            return null;
        }
    };

    function getHomePage() {
        return `
            <div class="text-center flex flex-col items-center justify-center min-h-full">
                 <div class="mb-4">
                    <h1 class="text-4xl spongebob-font text-yellow-300 drop-shadow-lg">Welcome to Bikini Bottom’s fastest browser*</h1>
                    <p class="mt-2 text-sm text-white spongebob-font">*Still slower than Sandy’s hamster wheel internet</p>
                </div>
                <h2 class="text-5xl spongebob-font text-yellow-300 drop-shadow-lg">Krabby Search</h2>
                <div class="mt-8 w-full max-w-2xl relative">
                    <input type="text" id="search-bar" class="w-full p-3 rounded-full text-black" placeholder="What are we looking for today, captain?">
                    <button id="search-button" class="absolute right-3 top-1/2 -translate-y-1/2 bg-yellow-400 text-black p-2 rounded-full font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" /></svg>
                    </button>
                    <div id="search-suggestions" class="hidden absolute top-full left-0 w-full bg-white text-black mt-2 rounded-lg shadow-lg text-left z-10">
                        ${SEARCH_SUGGESTIONS.map(s => `<div class="p-2 hover:bg-gray-200 cursor-pointer suggestion-item">${s}</div>`).join('')}
                    </div>
                </div>
                <p class="mt-4 text-white spongebob-font">*The most absorbent search engine in the sea!</p>
            </div>
        `;
    }

    function getYouToobPage() {
        return `
            <div class="p-4">
                <h1 class="text-3xl text-center spongebob-font text-yellow-300 mb-4">YouToob</h1>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    ${YOUTOOB_VIDEOS.map(video => {
                        if (video.id === 'ad') {
                            return `
                                <div id="youtoob-ad" class="youtoob-video-card cursor-pointer border-4 border-yellow-400 rounded-lg p-2 bg-red-600 hover:bg-red-700 transition-colors">
                                    <img src="${video.thumbnail}" alt="BSOD Ad" class="w-full h-32 object-cover">
                                    <h3 class="mt-2 spongebob-font text-lg text-yellow-300">${video.title}</h3>
                                    <p class="text-sm text-white">${video.desc}</p>
                                </div>
                            `;
                        }
                        return `
                            <div class="youtoob-video-card" data-video-id="${video.id}">
                                <img src="${video.thumbnail}" alt="${video.title}" class="w-full h-auto cursor-pointer">
                                <h3 class="mt-2 spongebob-font text-lg">${video.title}</h3>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }

    
    function getSearchResultsPage(params) {
        const query = params.get('q') || '';
        const searchData = KRABBY_SEARCH_DATA[query.toLowerCase()];

        if (!searchData) {
            return get404Page(`barnacle://search?q=${query}`);
        }

        const resultsHtml = searchData.results.map(result => `
            <div class="mb-6">
                <a href="#" class="text-sm text-gray-300">${result.url}</a>
                <h3 class="text-xl spongebob-font text-blue-300 hover:underline cursor-pointer">${result.title}</h3>
                <p class="text-gray-200">${result.desc}</p>
            </div>
        `).join('');

        return `
            <div class="max-w-4xl mx-auto">
                <div class="flex items-center mb-6">
                    <h1 class="text-4xl spongebob-font text-yellow-300 mr-4">Krabby Search</h1>
                    <div class="relative flex-grow">
                        <input type="text" id="search-results-input" class="w-full p-2 rounded-full text-black" value="${query}">
                        <button id="search-results-button" class="absolute right-2 top-1/2 -translate-y-1/2 bg-yellow-400 text-black p-1 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" /></svg>
                        </button>
                    </div>
                </div>
                <p class="text-sm text-gray-400 mb-4">About ${searchData.results.length} results found (in 0.0001 seconds)</p>
                ${resultsHtml}
            </div>
        `;
    }

function renderVideoPlayerPage(params) {
    const videoId = params.get('v');
    return `
        <div class="w-full flex flex-col">
            <button class="back-to-youtoob spongebob-font text-yellow-300 mb-2 self-start hover:underline">&lt; Back to YouToob</button>
            <div class="aspect-video w-full">
                <iframe class="w-full h-full" src="https://www.youtube.com/embed/${videoId}?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    `;
}

    function getNewsPage() {
        return `
            <div class="max-w-4xl mx-auto">
                <h1 class="text-4xl spongebob-font text-center mb-6 text-yellow-300">Bikini Bottom News</h1>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="md:col-span-2 bg-[#005a8a] p-4 rounded-lg">
                        <img src="${BIKINI_BOTTOM_NEWS[0].image}" class="w-full h-64 object-cover rounded-md mb-4">
                        <span class="text-xs font-bold uppercase text-red-400">${BIKINI_BOTTOM_NEWS[0].category}</span>
                        <h2 class="text-2xl font-bold mt-1">${BIKINI_BOTTOM_NEWS[0].headline}</h2>
                        <p class="text-gray-200 mt-2">${BIKINI_BOTTOM_NEWS[0].summary}</p>
                    </div>
                    <div class="space-y-4">
                        ${BIKINI_BOTTOM_NEWS.slice(1).map(article => `
                            <div class="bg-[#005a8a] p-3 rounded-lg">
                                <img src="${article.image}" class="w-full h-24 object-cover rounded-md mb-2">
                                <span class="text-xs font-bold uppercase text-red-400">${article.category}</span>
                                <h3 class="font-semibold">${article.headline}</h3>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    function getChumNetPage() {
        return `
            <div class="border-4 border-red-500 p-4 bg-gray-800 animate-pulse text-white">
                <h2 class="text-4xl text-red-400 text-center spongebob-font">WELCOME TO CHUMNET</h2>
                <p class="text-center text-sm text-gray-300">The dark corner of the internet where dreams go to die.</p>
                <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div class="bg-yellow-400 text-black p-4 rounded text-center cursor-pointer chum-ad transform hover:scale-105 transition-transform" data-ad-id="0">Download Real Krabby Patty Recipe (Totally Legal)</div>
                    <div class="bg-green-400 text-black p-4 rounded text-center cursor-pointer chum-ad transform hover:scale-105 transition-transform" data-ad-id="1">You are the 1,000,000th Visitor! CLICK HERE!</div>
                    <div class="bg-red-400 text-black p-4 rounded text-center cursor-pointer chum-ad transform hover:scale-105 transition-transform" data-ad-id="2">Meet Hot Singles in Your Coral Reef!</div>
                </div>
            </div>
        `;
    }

    function get404Page(url) {
        return `
            <div class="text-center flex flex-col items-center justify-center">
                <img src="js/apps/barnacle_browser_assets/spongebob_screaming.png" alt="SpongeBob Screaming" class="w-64 h-auto mb-4">
                <h1 class="text-4xl spongebob-font text-red-500">I’m a Goofy Goober…</h1>
                <p class="text-lg mt-2">...and the page <code class="bg-gray-800 p-1 rounded">${url}</code> doesn’t exist!!</p>
            </div>
        `;
    }

    function getSecretPage() {
        return `
            <div class="text-center flex flex-col items-center justify-center bg-black">
                <h1 class="text-5xl text-pink-400 spongebob-font animate-pulse no-imagination">🧽 You have entered Sponge Mode. 🧽</h1>
                <p class="mt-4 text-2xl text-white">imagination! imagination! imagination!</p>
            </div>
        `;
    }

    function showSpongeBobBSOD() {
        const bsod = document.createElement('div');
        bsod.className = 'absolute inset-0 bg-yellow-300 text-black flex flex-col items-center justify-center z-[100] p-8 font-mono text-center';
        bsod.innerHTML = `
            <h1 class="text-6xl spongebob-font text-red-600">TARTAR SAUCE!</h1>
            <img src="js/apps/barnacle_browser_assets/spongebob_screaming.png" alt="Screaming SpongeBob" class="w-48 h-48 my-8">
            <p class="text-2xl">Your browser just got the SUDS!</p>
            <p class="text-lg mt-4">We've run into a critical Kelp Shake error and need to restart.</p>
            <p class="text-lg mt-8">If this is the first time you've seen this screen, congratulations!</p>
            <p class="mt-12 text-sm">
                Error code: BAD_VIBES_ONLY. Click anywhere to continue floating.
            </p>
        `;
        bsod.addEventListener('click', () => bsod.remove());
        browserContainer.appendChild(bsod);
    }

    function transformToSpongeSpeak(element) {
        const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, false);
        let node;
        const nodesToReplace = [];
        while (node = walker.nextNode()) {
            if (node.parentElement.closest('.no-imagination')) {
                continue;
            }
            if (node.parentElement.tagName !== 'SCRIPT' && node.parentElement.tagName !== 'STYLE' && node.nodeValue.trim() !== '') {
                nodesToReplace.push(node);
            }
        }
        nodesToReplace.forEach(node => {
            node.nodeValue = node.nodeValue.replace(/\b[a-zA-Z]{2,}\b/g, 'imagination');
        });
    }

    browserContainer.addEventListener('click', (e) => {
        const activeContent = document.getElementById(activeTabId);
        if (!activeContent) return;

        const videoCard = e.target.closest('.youtoob-video-card');
        if (videoCard && videoCard.dataset.videoId) {
            navigateTo(`barnacle://youtoob/watch?v=${videoCard.dataset.videoId}`, activeTabId);
            return;
        }

        if (e.target.classList.contains('back-to-youtoob')) {
            navigateTo('barnacle://youtoob', activeTabId);
            return;
        }

        if (e.target.id === 'secret-icon') {
            secretClickCount++;
            if (secretClickCount >= 5 && !isSpongeMode) {
                isSpongeMode = true;
                const audio = new Audio('sounds/bubble.mp3');
                audio.play().catch(err => console.error("Sound error:", err));
                
                if (!document.getElementById('secret-bookmark')) {
                    const secretBookmark = document.createElement('button');
                    secretBookmark.id = 'secret-bookmark';
                    secretBookmark.className = 'bookmark-button spongebob-font px-3 py-1 text-sm hover:bg-[#007c9c] rounded';
                    secretBookmark.dataset.url = 'barnacle://secret';
                    secretBookmark.textContent = 'Secret';
                    bookmarkBar.appendChild(secretBookmark);
                }

                navigateTo('barnacle://secret', activeTabId);
            }
            return;
        }

        if (e.target.id === 'menu-button') {
            menuDropdown.classList.toggle('hidden');
            return;
        }

        if (e.target.closest('#search-button')) {
            const searchInput = browserContainer.querySelector('#search-bar');
            if (searchInput && searchInput.value.trim()) {
                const query = searchInput.value.trim();
                navigateTo(`barnacle://search?q=${encodeURIComponent(query)}`, activeTabId);
            }
            return;
        }

        if (e.target.closest('#search-results-button')) {
            const searchInput = activeContent.querySelector('#search-results-input');
            if (searchInput && searchInput.value.trim()) {
                const query = searchInput.value.trim();
                navigateTo(`barnacle://search?q=${encodeURIComponent(query)}`, activeTabId);
            }
            return;
        }

        if (e.target.classList.contains('suggestion-item')) {
            const query = e.target.textContent;
            navigateTo(`barnacle://search?q=${encodeURIComponent(query)}`, activeTabId);
            return;
        }

        if (e.target.closest('#youtoob-ad')) {
            showSpongeBobBSOD();
            return;
        }

        if (e.target.id === 'incognito-menu-item') {
            e.preventDefault();
            window.openApp('barnacle-browser', { incognito: true });
            menuDropdown.classList.add('hidden');
            return;
        }

        const chumAd = e.target.closest('.chum-ad');
        if (chumAd) {
            const adId = parseInt(chumAd.dataset.adId, 10);
            const adData = CHUM_AD_POPUPS[adId];
            const popup = document.createElement('div');
            popup.className = 'absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4';
            if (adData) {
                popup.innerHTML = `
                <div class="bg-red-800 border-4 border-yellow-400 p-8 text-center text-white rounded-lg shadow-lg max-w-sm">
                    <h2 class="text-2xl mb-4 spongebob-font">${adData.title}</h2>
                    <p class="mb-4">${adData.message}</p>
                    <button class="px-4 py-2 bg-yellow-500 text-black rounded font-bold" onclick="this.parentElement.parentElement.remove()">Uh, OK</button>
                </div>
            `;
            }
            activeContent.appendChild(popup);
            return;
        }
    });
    browserContainer.addEventListener('focusin', (e) => {
        const activeContent = document.getElementById(activeTabId);
        if (!activeContent) return;
        const searchBar = activeContent.querySelector('#search-bar');
        if (e.target === searchBar) {
            const suggestions = activeContent.querySelector('#search-suggestions');
            if (suggestions) suggestions.classList.remove('hidden');
        }
    });

    browserContainer.addEventListener('focusout', (e) => {
        const activeContent = document.getElementById(activeTabId);
        if (!activeContent) return;
        const searchBar = activeContent.querySelector('#search-bar');
        if (e.target === searchBar) {
            setTimeout(() => {
                const suggestions = activeContent.querySelector('#search-suggestions');
                if (suggestions) suggestions.classList.add('hidden');
            }, 200);
        }
    });

    urlInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') navigateTo(e.target.value.trim(), activeTabId);
    });

    newTabButton.addEventListener('click', () => createNewTab());

    bookmarkBar.addEventListener('click', (e) => {
        const button = e.target.closest('.bookmark-button');
        if (button) {
            e.preventDefault();
            navigateTo(button.dataset.url, activeTabId);
        }
    });

    tabList.addEventListener('click', (e) => {
        const tabItem = e.target.closest('.tab-item');
        if (!tabItem) return;
        const tabId = tabItem.dataset.tabId;

        if (e.target.closest('.close-tab-button')) {
            closeTab(tabId);
        } else {
            switchToTab(tabId);
        }
    });

    setTimeout(() => {
        activeTabId = createNewTab('barnacle://home', true);
        if (activeTabId) {
            activeContent = document.getElementById(activeTabId);
            if (activeContent) {
                activeContent.classList.remove('hidden');
            }
        }
    }, 0);

    return win;
}

if (typeof window.apps === 'undefined') {
    window.apps = {};
}

const barnacleBrowserApp = {
    createWindow: createBarnacleBrowserWindow,
    name: 'Barnacle Browser',
    icon: 'js/apps/barnacle_browser_assets/icon.png'
};

window.apps['barnacle-browser'] = barnacleBrowserApp;
window.apps.barnacleBrowser = barnacleBrowserApp;

console.log('Barnacle Browser app registered:', Object.keys(window.apps));