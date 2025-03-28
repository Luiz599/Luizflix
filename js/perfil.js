let perfis = [];
let emEdicao = false;
let perfilEdicao = null;

function inicializarDados() {
    let dados = JSON.parse(localStorage.getItem("luizflix-users"));
    if (dados == null) {
        dados = [
            {
                nome: "Luiz",
                avatar: "img/users/avatar.png",
                crianca: false
            },
            {
                nome: "Capitão",
                avatar: "img/users/avatar4.png",
                crianca: false
            },
            {
                nome: "Trizóio",
                avatar: "img/users/avatar5.png",
                crianca: true
            }
        ];
        localStorage.setItem("luizflix-users", JSON.stringify(dados));
    }
    perfis = dados;
}

// Ao carregar a página executa as funções de buscar os dados
document.addEventListener("DOMContentLoaded", async () => {
    carregarPerfis();
    toggleLoading();
    let nome = document.getElementById('Nome');
    nome.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.querySelector('.btn-light').click();
        }
    });
    let icons = document.querySelectorAll('.icon');
    icons.forEach(icon => {
        icon.computedStyleMap.display = 'none';
    })
});