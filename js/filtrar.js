
var filtro = document.querySelector(".filtrar");

filtro.addEventListener("input", () => {
    var trs = document.querySelectorAll(".paciente");
    var digitado = filtro.value;

    trs.forEach(tr => {
        var td = tr.querySelector(".info-nome");
        var nome = td.textContent;
        var expressao = new RegExp(digitado, "i");

        if (!expressao.test(nome)){
            tr.classList.add("fadeOut");
            setTimeout(() => {
                tr.classList.add("hide");
            }, 500);
        }else{
            tr.classList.remove("hide");
            tr.classList.remove("fadeOut");
        }
    });
})