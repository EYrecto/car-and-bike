const carTemplates = [
    { brand: "BMW", models: ["M4 Competition", "M8", "i8", "M3", "M5"], type: "sports", img: "https://images.unsplash.com/photo-1555353540-64fd1b620922?auto=format&fit=crop&q=80&w=800" },
    { brand: "BMW", models: ["X5 M", "X6", "X7", "X3 M"], type: "suv", img: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&q=80&w=800" },
    { brand: "BMW", models: ["7 Series", "i7", "8 Series Gran Coupe"], type: "luxury", img: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=800" },
    { brand: "Mercedes", models: ["AMG GT", "C63", "E63 AMG"], type: "sports", img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800" },
    { brand: "Mercedes", models: ["G-Class", "GLE 63", "GLS"], type: "suv", img: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&q=80&w=800" },
    { brand: "Mercedes", models: ["S-Class", "Maybach S680"], type: "luxury", img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800" },
    { brand: "Porsche", models: ["911 GT3", "Cayman GT4", "Taycan Turbo S", "911 Turbo S"], type: "sports", img: "https://images.unsplash.com/photo-1503376760367-1111623910c0?auto=format&fit=crop&q=80&w=800" },
    { brand: "Porsche", models: ["Cayenne Turbo GT", "Macan GTS"], type: "suv", img: "https://images.unsplash.com/photo-1503376760367-1111623910c0?auto=format&fit=crop&q=80&w=800" },
    { brand: "Porsche", models: ["Panamera Turbo S"], type: "luxury", img: "https://images.unsplash.com/photo-1503376760367-1111623910c0?auto=format&fit=crop&q=80&w=800" },
    { brand: "Lamborghini", models: ["Aventador SVJ", "Huracan STO", "Revuelto"], type: "sports", img: "https://images.unsplash.com/photo-1519245659620-e859806a8d3b?auto=format&fit=crop&q=80&w=800" },
    { brand: "Lamborghini", models: ["Urus Performante"], type: "suv", img: "https://images.unsplash.com/photo-1519245659620-e859806a8d3b?auto=format&fit=crop&q=80&w=800" },
    { brand: "Rolls-Royce", models: ["Phantom", "Ghost", "Spectre"], type: "luxury", img: "https://images.unsplash.com/photo-1631269389279-792ab715dd70?auto=format&fit=crop&q=80&w=800" },
    { brand: "Rolls-Royce", models: ["Cullinan Black Badge"], type: "suv", img: "https://images.unsplash.com/photo-1631269389279-792ab715dd70?auto=format&fit=crop&q=80&w=800" },
    { brand: "Range Rover", models: ["Autobiography", "Sport SVR", "Velar SVAutobiography"], type: "suv", img: "https://images.unsplash.com/photo-1606016159991-cdf4a3328af9?auto=format&fit=crop&q=80&w=800" },
    { brand: "Audi", models: ["R8 V10 Plus", "RS e-tron GT"], type: "sports", img: "https://images.unsplash.com/photo-1503376760367-1111623910c0?auto=format&fit=crop&q=80&w=800" },
    { brand: "Audi", models: ["RSQ8"], type: "suv", img: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&q=80&w=800" },
    { brand: "Audi", models: ["A8 L", "S8"], type: "luxury", img: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=800" },
    { brand: "Ducati", models: ["Panigale V4", "Streetfighter V4", "Diavel 1260"], type: "motorcycle", img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=800" },
    { brand: "BMW Motorrad", models: ["S 1000 RR", "R 1250 GS", "M 1000 RR"], type: "motorcycle", img: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=800" },
    { brand: "Kawasaki", models: ["Ninja H2", "Z H2"], type: "motorcycle", img: "https://images.unsplash.com/photo-1591378603223-e15b45a81640?auto=format&fit=crop&q=80&w=800" },
    { brand: "Yamaha", models: ["YZF-R1", "MT-10"], type: "motorcycle", img: "https://images.unsplash.com/photo-1558980394-4c7c9299fe96?auto=format&fit=crop&q=80&w=800" },
    { brand: "Harley-Davidson", models: ["LiveWire", "Pan America 1250"], type: "motorcycle", img: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=800" }
];

const detailShots = [
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800", // interior
    "https://images.unsplash.com/photo-1600706432502-77a0e2e327a3?auto=format&fit=crop&q=80&w=800", // wheel
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800", // engine
    "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=800", // side
    "https://images.unsplash.com/photo-1512361435605-6456fb601bc9?auto=format&fit=crop&q=80&w=800" // generic details
];

const cars = [
    {
        id: 1,
        title: "Porsche 911 GT3 RS",
        type: "sports",
        image: "https://images.unsplash.com/photo-1503376760367-1111623910c0?auto=format&fit=crop&q=80&w=800",
        images: ["https://images.unsplash.com/photo-1503376760367-1111623910c0?auto=format&fit=crop&q=80&w=800", detailShots[0], detailShots[1], detailShots[2]],
        specs: { power: "518 hp", speed: "196 mph", price: "$241,300", engine: "4.0L Flat-6", transmission: "7-Speed PDK", drivetrain: "RWD", acceleration: "0-60 in 3.0s" }
    },
    {
        id: 2,
        title: "Lamborghini Revuelto",
        type: "sports",
        image: "https://images.unsplash.com/photo-1519245659620-e859806a8d3b?auto=format&fit=crop&q=80&w=800",
        images: ["https://images.unsplash.com/photo-1519245659620-e859806a8d3b?auto=format&fit=crop&q=80&w=800", detailShots[1], detailShots[2], detailShots[3]],
        specs: { power: "1001 hp", speed: "217 mph", price: "$608,358", engine: "6.5L V12 Hybrid", transmission: "8-Speed Dual-Clutch", drivetrain: "AWD", acceleration: "0-60 in 2.5s" }
    },
    {
        id: 3,
        title: "Rolls-Royce Phantom",
        type: "luxury",
        image: "https://images.unsplash.com/photo-1631269389279-792ab715dd70?auto=format&fit=crop&q=80&w=800",
        images: ["https://images.unsplash.com/photo-1631269389279-792ab715dd70?auto=format&fit=crop&q=80&w=800", detailShots[0], detailShots[4], detailShots[1]],
        specs: { power: "563 hp", speed: "155 mph", price: "$493,000", engine: "6.75L V12", transmission: "8-Speed Automatic", drivetrain: "RWD", acceleration: "0-60 in 5.1s" }
    },
    {
        id: 4,
        title: "Mercedes-Maybach S-Class",
        type: "luxury",
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800",
        images: ["https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800", detailShots[0], detailShots[2], detailShots[3]],
        specs: { power: "496 hp", speed: "130 mph", price: "$198,300", engine: "4.0L V8 Biturbo", transmission: "9-Speed Automatic", drivetrain: "AWD", acceleration: "0-60 in 4.7s" }
    },
    {
        id: 5,
        title: "Range Rover Autobiography",
        type: "suv",
        image: "https://images.unsplash.com/photo-1606016159991-cdf4a3328af9?auto=format&fit=crop&q=80&w=800",
        images: ["https://images.unsplash.com/photo-1606016159991-cdf4a3328af9?auto=format&fit=crop&q=80&w=800", detailShots[0], detailShots[1], detailShots[4]],
        specs: { power: "523 hp", speed: "155 mph", price: "$166,400", engine: "4.4L V8", transmission: "8-Speed Automatic", drivetrain: "AWD", acceleration: "0-60 in 4.4s" }
    },
    {
        id: 6,
        title: "Mercedes-AMG G 63",
        type: "suv",
        image: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&q=80&w=800",
        images: ["https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&q=80&w=800", detailShots[2], detailShots[1], detailShots[3]],
        specs: { power: "577 hp", speed: "137 mph", price: "$183,000", engine: "4.0L V8 Biturbo", transmission: "9-Speed Automatic", drivetrain: "AWD", acceleration: "0-60 in 4.5s" }
    }
];

let currentId = 7;
for (let i = 0; i < 115; i++) {
    const template = carTemplates[Math.floor(Math.random() * carTemplates.length)];
    const model = template.models[Math.floor(Math.random() * template.models.length)];
    
    const power = Math.floor(Math.random() * 500 + 350) + " hp";
    const speed = Math.floor(Math.random() * 70 + 150) + " mph";
    const price = "$" + (Math.floor(Math.random() * 400 + 100) * 1000).toLocaleString();
    
    // Mix and match random details
    const randomDetails = [...detailShots].sort(() => 0.5 - Math.random()).slice(0, 3);
    const vehicleImages = [template.img, ...randomDetails];

    let engine = "V8 Twin-Turbo";
    let transmission = "8-Speed Automatic";
    let drivetrain = "AWD";
    let acceleration = `0-60 in ${(Math.random() * 2 + 2.5).toFixed(1)}s`;

    if (template.type === "motorcycle") {
        engine = "1000cc Inline-4";
        transmission = "6-Speed Manual";
        drivetrain = "Chain Drive";
        acceleration = `0-60 in ${(Math.random() * 1 + 2.5).toFixed(1)}s`;
    }

    cars.push({
        id: currentId++,
        title: `${template.brand} ${model} Edition ${i + 1}`,
        type: template.type,
        image: template.img,
        images: vehicleImages,
        specs: { power, speed, price, engine, transmission, drivetrain, acceleration }
    });
}

const bikeTemplates = [
    { brand: "Trek", models: ["Madone", "Domane", "Emonda"], type: "bike", img: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&q=80&w=800", isRacing: true },
    { brand: "Specialized", models: ["Tarmac", "Roubaix", "Venge"], type: "bike", img: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=800", isRacing: true },
    { brand: "Giant", models: ["TCR Advanced", "Defy", "Propel"], type: "bike", img: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&q=80&w=800", isRacing: true },
    { brand: "Cannondale", models: ["SuperSix", "CAAD13", "Synapse"], type: "bike", img: "https://images.unsplash.com/photo-1576435728678-68dd0f0ea48d?auto=format&fit=crop&q=80&w=800", isRacing: true },
    { brand: "Schwinn", models: ["Discover", "Wayfarer", "Volare"], type: "bike", img: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&q=80&w=800", isRacing: false },
    { brand: "Santa Cruz", models: ["Chameleon", "Highball", "Megatower"], type: "bike", img: "https://images.unsplash.com/photo-1544188241-d5f0b5d564fa?auto=format&fit=crop&q=80&w=800", isRacing: false }
];

const bikeDetailShots = [
    "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1576435728678-68dd0f0ea48d?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&q=80&w=800"
];

for (let i = 0; i < 305; i++) {
    const template = bikeTemplates[Math.floor(Math.random() * bikeTemplates.length)];
    const model = template.models[Math.floor(Math.random() * template.models.length)];
    
    const randomDetails = [...bikeDetailShots].sort(() => 0.5 - Math.random()).slice(0, 3);
    const vehicleImages = [template.img, ...randomDetails];

    let engine = "Human Powered";
    let transmission = template.isRacing ? "22-Speed Shimano/SRAM" : "21-Speed Shimano";
    let drivetrain = "Chain Drive";
    let acceleration = "Depends on Rider";
    
    const speed = template.isRacing ? Math.floor(Math.random() * 20 + 25) + " mph" : Math.floor(Math.random() * 10 + 15) + " mph";
    const power = "1 Rider";
    const price = "$" + Math.floor(Math.random() * 8000 + 500).toLocaleString();

    cars.push({
        id: currentId++,
        title: `${template.brand} ${model} Series ${i + 1}`,
        type: template.type,
        image: template.img,
        images: vehicleImages,
        specs: { power, speed, price, engine, transmission, drivetrain, acceleration }
    });
}

const carGrid = document.getElementById('carGrid');
const filterBtns = document.querySelectorAll('.filter-btn');

// Modal Elements
const detailsModal = document.getElementById('detailsModal');
const closeModal = document.getElementById('closeModal');
const modalTitle = document.getElementById('modalTitle');
const mainModalImg = document.getElementById('mainModalImg');
const modalThumbnails = document.getElementById('modalThumbnails');
const modalDetails = document.getElementById('modalDetails');

function openModal(car) {
    modalTitle.textContent = car.title;
    mainModalImg.src = car.images[0];
    
    // Setup thumbnails
    modalThumbnails.innerHTML = '';
    car.images.forEach((imgSrc, index) => {
        const thumb = document.createElement('img');
        thumb.src = imgSrc;
        if (index === 0) thumb.classList.add('active');
        thumb.addEventListener('click', () => {
            mainModalImg.src = imgSrc;
            document.querySelectorAll('.modal-thumbnails img').forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        });
        modalThumbnails.appendChild(thumb);
    });

    // Setup details
    modalDetails.innerHTML = '';
    for (const [key, value] of Object.entries(car.specs)) {
        const detailItem = document.createElement('div');
        detailItem.className = 'detail-item';
        detailItem.innerHTML = `
            <h4>${key.charAt(0).toUpperCase() + key.slice(1)}</h4>
            <p>${value}</p>
        `;
        modalDetails.appendChild(detailItem);
    }

    detailsModal.style.display = 'block';
}

closeModal.addEventListener('click', () => {
    detailsModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === detailsModal) {
        detailsModal.style.display = 'none';
    }
});

function renderCars(filterType = 'all') {
    carGrid.innerHTML = '';
    
    const filteredCars = filterType === 'all' 
        ? cars 
        : cars.filter(car => car.type === filterType);

    filteredCars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.className = 'car-card';
        carCard.innerHTML = `
            <img src="${car.image}" alt="${car.title}" class="car-image">
            <div class="car-info">
                <span class="car-type">${car.type}</span>
                <h3 class="car-title">${car.title}</h3>
                <div class="car-specs">
                    <span>⚡ ${car.specs.power}</span>
                    <span>🏎️ ${car.specs.speed}</span>
                    <span style="color: #10b981; font-weight: bold;">💵 ${car.specs.price}</span>
                </div>
                <button class="view-details">View Details</button>
            </div>
        `;
        
        const viewBtn = carCard.querySelector('.view-details');
        viewBtn.addEventListener('click', () => openModal(car));

        carGrid.appendChild(carCard);
    });
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        // Render cars based on filter
        renderCars(btn.dataset.filter);
    });
});

// Initial render
renderCars();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Splash Screen Logic
const splashScreen = document.getElementById('splashScreen');
const openWebBtn = document.getElementById('openWebBtn');

if (splashScreen && openWebBtn) {
    openWebBtn.addEventListener('click', () => {
        splashScreen.classList.add('hidden');
        document.body.classList.remove('no-scroll');
        
        // Wait a tiny bit for the splash screen to start fading out before scrolling
        setTimeout(() => {
            document.getElementById('collection').scrollIntoView({
                behavior: 'smooth'
            });
        }, 100);
    });
}

// AI Chat Logic
const chatHistory = document.getElementById('chatHistory');
const aiInput = document.getElementById('aiInput');
const aiSendBtn = document.getElementById('aiSendBtn');

function appendMessage(sender, text) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `chat-message ${sender}`;
    msgDiv.innerHTML = text.replace(/\n/g, '<br>');
    chatHistory.appendChild(msgDiv);
    chatHistory.scrollTop = chatHistory.scrollHeight;
}

// دالة للبحث في الإنترنت (ويكيبيديا) لتعمل بدون API Key
async function searchInternet(query) {
    // محاولة البحث في ويكيبيديا العربية
    const searchUrl = `https://ar.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&utf8=&format=json&origin=*`;
    
    try {
        const response = await fetch(searchUrl);
        const data = await response.json();
        
        if (data.query && data.query.search && data.query.search.length > 0) {
            const firstResultTitle = data.query.search[0].title;
            
            // جلب ملخص المقالة
            const summaryUrl = `https://ar.wikipedia.org/w/api.php?action=query&prop=extracts&exsentences=3&exintro=1&explaintext=1&titles=${encodeURIComponent(firstResultTitle)}&format=json&origin=*`;
            const summaryResponse = await fetch(summaryUrl);
            const summaryData = await summaryResponse.json();
            const pages = summaryData.query.pages;
            const pageId = Object.keys(pages)[0];
            
            let extract = pages[pageId].extract;
            if (extract) {
                return `**معلومة من الإنترنت:**<br>${extract}<br><br><small>(المصدر: ويكيبيديا)</small>`;
            }
        }
        
        // إذا لم يجد نتائج في ويكيبيديا العربية، نجرب الإنجليزية
        const enSearchUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&utf8=&format=json&origin=*`;
        const enResponse = await fetch(enSearchUrl);
        const enData = await enResponse.json();
        
        if (enData.query && enData.query.search && enData.query.search.length > 0) {
            const enFirstResultTitle = enData.query.search[0].title;
            const enSummaryUrl = `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exsentences=3&exintro=1&explaintext=1&titles=${encodeURIComponent(enFirstResultTitle)}&format=json&origin=*`;
            const enSummaryResponse = await fetch(enSummaryUrl);
            const enSummaryData = await enSummaryResponse.json();
            const enPages = enSummaryData.query.pages;
            const enPageId = Object.keys(enPages)[0];
            
            let enExtract = enPages[enPageId].extract;
            if (enExtract) {
                return `**Information from the web:**<br>${enExtract}<br><br><small>(Source: Wikipedia)</small>`;
            }
        }

        return null; // لا توجد نتائج
    } catch (e) {
        console.error("Search error:", e);
        return null;
    }
}

// قائمة الردود المبرمجة مسبقاً (Mock AI) لتعمل بدون API Key
async function generateSmartResponse(query) {
    const lowerQuery = query.toLowerCase();

    // طلب صورة
    if (lowerQuery.match(/صورة|صوره|اريد صورة|عايز صوره|ارسم/)) {
        let keyword = lowerQuery.replace(/(صورة|صوره|اريد|عايز|ارسم|لـ|عن)/g, '').trim();
        if (!keyword) keyword = 'beautiful luxury car';
        
        // استخدام خدمة مجانية لتوليد/جلب الصور (تعمل بدون API Key)
        // pollinations.ai gives us instant AI images based on prompt
        const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(keyword)}?width=500&height=500&nologo=true`;
        
        return `إليك صورة لـ <b>${keyword}</b>:<br><br><img src="${imageUrl}" style="max-width:100%; border-radius:10px; margin-top:10px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);" alt="${keyword}">`;
    }
    
    // الترحيب
    if (lowerQuery.match(/مرحبا|اهلا|سلام|hi|hello|hey/)) {
        return "أهلاً بك في Eyad Cars Shop! أنا المساعد الذكي إياد (Eyad AI). يمكنك سؤالي عن سياراتنا، أو طلب 'صورة لـ كذا'، أو أي سؤال وسأبحث في الإنترنت!";
    }
    
    // أسئلة عن السيارات المتاحة
    if (lowerQuery.match(/عربيات|سيارات|انواع|ماركات|cars|brands|models/) && !lowerQuery.match(/من هو|ما هو|كيف|تاريخ/)) {
        return "لدينا تشكيلة واسعة من أفخم السيارات! 🏎️\n- سيارات رياضية: مثل Porsche 911 و Lamborghini Revuelto.\n- سيارات فاخرة: مثل Rolls-Royce Phantom و Mercedes-Maybach.\n- سيارات دفع رباعي (SUV): مثل Range Rover و G-Class.\nما هو النوع الذي تفضله؟";
    }
    
    // أسئلة عن الأسعار
    if (lowerQuery.match(/سعر|اسعار|بكم|فلوس|price|cost|how much/) && !lowerQuery.match(/من هو|ما هو|كيف/)) {
        return "تختلف أسعارنا حسب الموديل والمواصفات:\n- السيارات الرياضية تبدأ من 200,000 دولار.\n- السيارات الفاخرة تتراوح بين 198,000 و 600,000 دولار وأكثر.\n- الدراجات الهوائية والنارية لها أسعار منفصلة تبدأ من 500 دولار.\nهل هناك سيارة معينة تود معرفة سعرها؟";
    }

    // أسئلة عن بي ام دبليو (اسم المحل)
    if (lowerQuery.match(/bmw|بي ام/) && !lowerQuery.match(/من هو|ما هو|تاريخ/)) {
        return "نحن متخصصون في تشكيلة رائعة من سيارات BMW! لدينا M4 Competition، M8، والسيارة الكهربائية i8، بالإضافة لفئة X الفاخرة مثل X5 M و X7. هل تود رؤية إحداها؟";
    }

    // من أنت؟
    if (lowerQuery.match(/مين انت|اسمك|who are you|your name/)) {
        return "أنا Eyad AI، المساعد الذكي الخاص بمعرض Eyad BMW Cars Shop. تم تصميمي لمساعدتك في تصفح سياراتنا، ويمكنني أيضاً البحث في الإنترنت للإجابة على أسئلتك أو جلب صور لك!";
    }

    // إذا لم يكن السؤال عن المعرض، قم بالبحث في الإنترنت
    const searchResult = await searchInternet(query);
    if (searchResult) {
        return searchResult;
    }

    // رد افتراضي إذا فشل البحث
    if (lowerQuery.match(/[\u0600-\u06FF]/)) {
        return "عذراً، لم أجد إجابة دقيقة لهذا السؤال في قاعدة بياناتي المجانية. جرب أن تطلب مني صورة (مثال: صورة سيارة فيراري)!";
    } else {
        return "Sorry, I couldn't find a precise answer on the web for that. Try asking me for an image!";
    }
}

async function handleSendMessage() {
    const text = aiInput.value.trim();
    if (!text) return;

    // User message
    appendMessage('user', text);
    aiInput.value = '';

    // Show loading indicator
    const loadingId = 'loading-' + Date.now();
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'chat-message ai';
    loadingDiv.id = loadingId;
    loadingDiv.textContent = 'Eyad AI يبحث في الإنترنت... 🔍';
    chatHistory.appendChild(loadingDiv);
    chatHistory.scrollTop = chatHistory.scrollHeight;

    // Fetch response (Shop logic + Internet Search)
    try {
        const aiResponse = await generateSmartResponse(text);
        const loadingElement = document.getElementById(loadingId);
        if (loadingElement) {
            loadingElement.innerHTML = aiResponse.replace(/\n/g, '<br>');
        }
    } catch (e) {
        const loadingElement = document.getElementById(loadingId);
        if (loadingElement) {
            loadingElement.innerHTML = "عذراً، حدث خطأ أثناء الاتصال بالإنترنت.";
        }
    }
}

if (aiSendBtn && aiInput) {
    aiSendBtn.addEventListener('click', handleSendMessage);
    aiInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    });
}
