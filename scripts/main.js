const SECTIONS = document.querySelectorAll(".sectionsDesligado");

window.addEventListener("scroll", animate);

//=================================Função para animar ao scroll!;

function animate() {

//calculos=========

    const tamanho = window.screen.height;

    SECTIONS.forEach((item,index,array) => {

        let distanciaTopoPagina = item.getBoundingClientRect().top;

        if(distanciaTopoPagina <= (window.screen.height / 2)) {

            item.classList.remove("sectionsDesligado");
            item.classList.add("sectionsLigado");

        }   else {

            item.classList.remove("sectionsLigado");
            item.classList.add("sectionsDesligado");

        }

    })

}
