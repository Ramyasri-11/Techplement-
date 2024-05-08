/*const quoteText = document.querySelector(".quote");
const authorName = document.querySelector(".name");
const quoteBtn = document.getElementById("quoteBtn");
const searchBtn = document.getElementById("searchBtn");
const authorSearch = document.getElementById("authorSearch");
const speechBtn = document.querySelector(".speech");
const copyBtn = document.querySelector(".copy");
const twitterBtn = document.querySelector(".twitter");

function getRandomQuote() {
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";
    fetch("http://api.quotable.io/random")
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch random quote');
            }
            return response.json();
        })
        .then(data => {
            quoteText.innerText = data.content;
            authorName.innerText = data.author;
        })
        .catch(error => {
            console.error("Error fetching random quote:", error);
            if (error.message === 'Failed to fetch') {
                quoteText.innerText = "Network error. Please check your internet connection.";
            } else if (error.message.includes('rate limit')) {
                quoteText.innerText = "API rate limit exceeded. Please try again later.";
            } else {
                quoteText.innerText = "Failed to fetch quote. Please try again later.";
            }
        })
        .finally(() => {
            quoteBtn.classList.remove("loading");
            quoteBtn.innerText = "New Quote";
        });
}

function searchQuoteByAuthor() {
    const author = authorSearch.value.trim();
    if (author === "") {
        alert("Please enter an author name.");
        return;
    }

    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";
    fetch(`http://api.quotable.io/authors?q=${author}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch author');
            }
            return response.json();
        })
        .then(data => {
            if (data.length === 0) {
                throw new Error('Author not found');
            }
            const authorId = data[0].id;
            return fetch(`http://api.quotable.io/authors/${authorId}/quotes`);
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch quotes by author');
            }
            return response.json();
        })
        .then(quotes => {
            if (quotes.length === 0) {
                quoteText.innerText = "No quotes found for this author.";
            } else {
                const randomIndex = Math.floor(Math.random() * quotes.length);
                const randomQuote = quotes[randomIndex].content;
                const author = quotes[randomIndex].author;
                quoteText.innerText = randomQuote;
                authorName.innerText = author;
            }
        })
        .catch(error => {
            console.error("Error fetching quotes by author:", error);
            if (error.message === 'Failed to fetch') {
                quoteText.innerText = "Network error. Please check your internet connection.";
            } else if (error.message.includes('rate limit')) {
                quoteText.innerText = "API rate limit exceeded. Please try again later.";
            } else {
                quoteText.innerText = "Failed to fetch quotes. Please try again later.";
            }
        })
        .finally(() => {
            quoteBtn.classList.remove("loading");
            quoteBtn.innerText = "New Quote";
        });
}

function speakQuote() {
    const speechText = `${quoteText.innerText} by ${authorName.innerText}`;
    const speech = new SpeechSynthesisUtterance(speechText);
    speechSynthesis.speak(speech);
}

function copyQuote() {
    navigator.clipboard.writeText(`${quoteText.innerText} - ${authorName.innerText}`);
}

function tweetQuote() {
    const quote = encodeURIComponent(`${quoteText.innerText} - ${authorName.innerText}`);
    window.open(`https://twitter.com/intent/tweet?text=${quote}`, "_blank");
}

quoteBtn.addEventListener("click", getRandomQuote);
searchBtn.addEventListener("click", searchQuoteByAuthor);
speechBtn.addEventListener("click", speakQuote);
copyBtn.addEventListener("click", copyQuote);
twitterBtn.addEventListener("click", tweetQuote);
*/
const quoteText = document.querySelector(".quote");
const authorName = document.querySelector(".name");
const quoteBtn = document.getElementById("quoteBtn");
const searchBtn = document.getElementById("searchBtn");
const authorSearch = document.getElementById("authorSearch");
const speechBtn = document.querySelector(".speech");
const copyBtn = document.querySelector(".copy");
const twitterBtn = document.querySelector(".twitter");

function getRandomQuote() {
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";
    fetch("https://api.quotable.io/random")
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch random quote');
            }
            return response.json();
        })
        .then(data => {
            quoteText.innerText = data.content;
            authorName.innerText = data.author;
        })
        .catch(error => {
            console.error("Error fetching random quote:", error);
            quoteText.innerText = "Failed to fetch quote. Please try again later.";
        })
        .finally(() => {
            quoteBtn.classList.remove("loading");
            quoteBtn.innerText = "New Quote";
        });
}

function searchQuoteByAuthor() {
    const author = authorSearch.value.trim();
    if (author === "") {
        alert("Please enter an author name.");
        return;
    }

    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";
    fetch(`https://api.quotable.io/quotes?author=${author}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch quotes by author');
            }
            return response.json();
        })
        .then(data => {
            if (data.length === 0) {
                quoteText.innerText = "No quotes found for this author.";
                authorName.innerText = "";
            } else {
                const randomIndex = Math.floor(Math.random() * data.length);
                const randomQuote = data[randomIndex].content;
                const author = data[randomIndex].author;
                quoteText.innerText = randomQuote;
                authorName.innerText = author;
            }
        })
        .catch(error => {
            console.error("Error fetching quotes by author:", error);
            quoteText.innerText = "Failed to fetch quotes. Please try again later.";
        })
        .finally(() => {
            quoteBtn.classList.remove("loading");
            quoteBtn.innerText = "New Quote";
        });
}

function speakQuote() {
    const speechText = `${quoteText.innerText} by ${authorName.innerText}`;
    const speech = new SpeechSynthesisUtterance(speechText);
    speechSynthesis.speak(speech);
}

function copyQuote() {
    navigator.clipboard.writeText(`${quoteText.innerText} - ${authorName.innerText}`);
}

function tweetQuote() {
    const quote = encodeURIComponent(`${quoteText.innerText} - ${authorName.innerText}`);
    window.open(`https://twitter.com/intent/tweet?text=${quote}`, "_blank");
}

quoteBtn.addEventListener("click", getRandomQuote);
searchBtn.addEventListener("click", searchQuoteByAuthor);
speechBtn.addEventListener("click", speakQuote);
copyBtn.addEventListener("click", copyQuote);
twitterBtn.addEventListener("click", tweetQuote);
