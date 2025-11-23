// --- 1. Tab Switching Logic ---
function switchTab(tabId) {
    // Hide all contents
    document.querySelectorAll('.tab-content').forEach(el => {
        el.classList.remove('active');
    });
    // Show selected
    const target = document.getElementById(tabId);
    if(target) target.classList.add('active');

    // Update Nav Buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Find the button that called this function (Logic based on order)
    const buttons = document.querySelectorAll('.nav-btn');
    if(tabId === 'home') buttons[0].classList.add('active');
    if(tabId === 'projects') buttons[1].classList.add('active');
    if(tabId === 'skills') {
        buttons[2].classList.add('active');
        // Small delay to ensure display:block is applied before animating width
        setTimeout(animateStats, 100);
    } 
    if(tabId === 'contact') buttons[3].classList.add('active');
}

// --- 2. Typewriter Effect (AI/ML Version) ---
const text = "Training neural networks in a 16-bit world. Transforming raw data into intelligence, one algorithm at a time.";
const speed = 50; 
let i = 0;

function typeWriter() {
    const el = document.getElementById("typewriter");
    if (el && i < text.length) {
        el.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

// --- 3. Clock ---
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { hour12: false });
    const el = document.getElementById('clock');
    if(el) el.textContent = timeString;
}
setInterval(updateClock, 1000);

// --- 4. Stat Bar Animation ---
function animateStats() {
    const bars = document.querySelectorAll('.stat-fill');
    bars.forEach(bar => {
        // Reset width to 0 first to force re-animation
        bar.style.width = '0%';
        
        setTimeout(() => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width;
        }, 100);
    });
}

// --- 5. Theme Toggle ---
const themeBtn = document.getElementById('themeToggle');
if(themeBtn) {
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const icon = themeBtn.querySelector('i');
        // Switch icon based on mode
        if(document.body.classList.contains('dark-mode')) {
            icon.classList.replace('ph-moon', 'ph-sun');
        } else {
            icon.classList.replace('ph-sun', 'ph-moon');
        }
    });
}

// --- Initialize ---
window.onload = function() {
    typeWriter();
    updateClock();
};