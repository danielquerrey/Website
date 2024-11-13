function toggleCSS(e) {
    const curr_sheet = document.querySelector("#style-sheet");
    if (curr_sheet.getAttribute('href') == "styles/style1.css") {
        curr_sheet.setAttribute('href', "toggleStyles/style1Toggle.css");
    }
    else {
        curr_sheet.setAttribute('href', "styles/style1.css");
    }
}

const btn = document.querySelector("#toggleBtn");
btn.addEventListener('click', toggleCSS);
