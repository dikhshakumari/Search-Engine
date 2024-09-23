// Function to load search history from localStorage
function loadSearchHistory() {
    const historyList = document.getElementById('history-list');
    const searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

    historyList.innerHTML = ''; // Clear current list

    searchHistory.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        historyList.appendChild(li);
    });
}

// Function to add search term to the history
function addToHistory(searchTerm) {
    const searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    searchHistory.push(searchTerm);
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
}

// Event listener for the search button
document.getElementById('search-btn').addEventListener('click', function() {
    const searchInput = document.getElementById('search-input');
    const searchTerm = searchInput.value.trim();

    if (searchTerm) {
        addToHistory(searchTerm);
        loadSearchHistory();
    }

    searchInput.value = ''; // Clear input field after search
});

// Event listener for the show history button
document.getElementById('show-history-btn').addEventListener('click', function() {
    loadSearchHistory();
});

// Event listener for the clear history button
document.getElementById('clear-history-btn').addEventListener('click', function() {
    localStorage.removeItem('searchHistory');
    loadSearchHistory();
});

// Load search history on page load
window.onload = function() {
    loadSearchHistory();
};
