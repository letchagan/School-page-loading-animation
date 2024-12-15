const loadingText = document.querySelector('.loading-text');
const dots = document.querySelector('.dots');
const themeToggle = document.getElementById('theme-toggle');
let dotCount = 0;

function updateLoadingText() {
    dotCount = (dotCount + 1) % 4;
    dots.textContent = '.'.repeat(dotCount);
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    updateThemeToggleIcon();
}

function updateThemeToggleIcon() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    themeToggle.innerHTML = isDarkMode
        ? '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>'
        : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
}

// Check for saved user preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// Update loading text every 500ms
setInterval(updateLoadingText, 500);

// Add event listener for theme toggle button
themeToggle.addEventListener('click', toggleDarkMode);

// Check system preference on load
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
}

// Listen for changes in system preference
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (e.matches) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
    updateThemeToggleIcon();
});

// Initial update of theme toggle icon
updateThemeToggleIcon();

