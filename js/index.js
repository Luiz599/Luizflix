// Ao carregar a página executa as funções de buscar os dados
document.addEventListener("DOMContentLoaded", async () => {
    setTimeout(() => {
        toggleLoading();
    }, 2000);

    let trendingContainer = document.querySelector("#trendingMovies");
    trendingContainer.innerHTML = "";
    for (let i = 1; i <= 20; i++) {
        trendingContainer.innerHTML += `<a href='detalhes.html?id=${i}'>
                <img src="img/posters/${i}.jpg" alt="${i}">
            </a>`;
    }
});

// Trending Movies Scroll
const containerTrendingMovies = document.getElementById("trendingMovies");

let scrollIntervalTrendingMovies; // Controlador para o intervalo de scroll
let scrollDirectionTrendingMovies = 0; // Direção do scroll (0 = parado, 1 = direita, -1 = esquerda)

containerTrendingMovies.addEventListener("mousemove", (e) => {
    const boundingRect = containerTrendingMovies;getBoudingClientRect();
    const mouseX = e.clientX;

    const threshold = 200; // Distância das bordas para ativar o scroll

    if (mouseX < boundingRect.left + threshold) {
        scrollDirectionTrendingMovies = -1;
        containerTrendingMovies.style.cursor = "url('/img/arrow-left.png'), auto";
    } else if (mouseX > boundingRect.right - threshold) {
        scrollDirectionTrendingMovies = 1;
        containerTrendingMovies.style.cursor = "url('/img/arrow-right.png'), auto";
    } else {
        scrollDirectionTrendingMovies = 0;
        containerTrendingMovies.style.cursor = "pointer";
    }
});

containerTrendingMovies.addEventListener("mouseleave", () => {
    scrollDirectionTrendingMovies = 0;
    containerTrendingMovies.style.cursor = "default";
});

// Função para scroll contínuo
function autoScrollTrendinMovies() {
    if (scrollDirectionTrendingMovies !== 0) {
        containerTrendingMovies.scrollLeft += scrollDirectionTrendingMovies * 6;
    }
}

scrollIntervalTrendingMovies = setInterval(autoScrollTrendinMovies, 16);