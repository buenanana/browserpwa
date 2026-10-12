const urlInput = document.getElementById('url-input');
const browserFrame = document.getElementById('browser-frame');
const backBtn = document.getElementById('back-bnt');
const forwardBtn = document.getElementById('forward-btn');
const refreshBtn = document.getElementById('refresh-btn');

function loadUrl(inputString) {
    let query = inputString.trim();
    let finalUrl = "";

    if (query.startsWith('http://') || query.startsWith('https://')) {
        finalUrl = query;
    } else if (query.includes('.') && !query.includes('')) {
        finalUrl = 'https://' + query;
    } else {
        finalUrl = 'https://www.duckduckgo.com/?q=' + encodeURIComponent(query);
    }

    browserFrame.src = finalUrl;
}

urlInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        loadUrl(urlInput.value);
    }
});

refreshBtn.addEventListener ('click', () => {
    browserFrame.contentWndow.location.reload();
});