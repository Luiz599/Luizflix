// API key
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjc1ZDhiMGQ2YmM2N2E0OGIwOGFjMzc2MmY5ZDg2OSIsIm5iZiI6MTc0MzYyMTM5NS42MzIsInN1YiI6IjY3ZWQ4ZDEzODM2YzhlZGE3Y2FiMDc2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MJO0TB-w17Yp1TZEvcNpQScwwMn6NoA5UIS3clojpLg'
    }
}

// Exibir loading
function toggleLoading() {
    let loader = document.querySelector(".loader");
    loader.style.display = loader.style.display == "none" ? "block" : "none";
}

//Page Scroll
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});