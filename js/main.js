async function loadNavbar() {
    const response = await fetch("components/navbar.html");
    const navbarHtml = await response.text();
    document.getElementById("navbar").innerHTML = navbarHtml;
}

async function loadFooter() {
    const response = await fetch("components/footer.html");
    const navbarHtml = await response.text();
    document.getElementById("footer").innerHTML = navbarHtml;
}

loadFooter();
loadNavbar();


const textElement = document.getElementById('textoDinamico');
const text = 'Olá, sou o Tomás!';
let index = 0;

function Texto() {
    if (index < text.length) {
        textElement.textContent += text.charAt(index);
        index++;
        setTimeout(Texto, 100);
    }
}

Texto();