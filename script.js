
const imagens = ['../imagens/projetoYorn.png', '../imagens/webstore.png', '../imagens/ApparelStoreLandingPage.png', '../imagens/formRegisto.png', '../imagens/fourCardGrid.png', '../imagens/PriceGrid.png', '../imagens/testimonialSlider.png'];
const legendas = ['Front End course final project for a real company', 'Web Store with shopping cart study project', 'Landing Page Project', 'Prog7 Form Work', 'Css Grid Study Work for Front End Mentor', 'Sign up Card for Front End Mentor', 'Testimonials slider for Front End Mentor'];
let index = 0;

/*-------------------------------------------SlideShow Section-------------------------------------------------*/ 
//função que carrega a 1ª imagem, legenda e o primeiro dot ao carregar a pagina
function buildImg() {
    document.getElementById("showImg").src = imagens[0];
    document.getElementById("legendas").innerHTML = legendas[0]; 
    document.getElementById("numberText").innerHTML = index + 1 + " / " + (imagens.length);
    dots();
    changeDotColor();
    autoSlider();
}

//funções para percorrer os indices e carregar a imagem correta em loop
function next() {
    index++;
    if (index > imagens.length -1) { index = 0 };
    document.getElementById("showImg").src = imagens[index];
    document.getElementById("showImg").alt = legendas[index];
    document.getElementById("showImg").style;
    document.getElementById("legendas").innerHTML = legendas[index];    
    changeDotColor();
    changeNumbers()
}    

function previous() {
    index--;
    if (index < 0) { index = imagens.length -1};
    document.getElementById("showImg").src = imagens[index];
    document.getElementById("showImg").alt = legendas[index];
    document.getElementById("legendas").innerHTML = legendas[index];
    changeDotColor();
    changeNumbers()
}    

//função que altera a cor dos dots consoante o index
function changeDotColor() {
    for (i = 0; i <= imagens.length-1; i++) {
        if (index == i) {
            //document.getElementById("dot" + i + "").style = "background-color: #044c8f"; 
            document.getElementById("dot" + i + "").style = "animation: dotRotation 7s infinite; background-color: #044c8f";
        }
        else if (index < i || index > i) {
            document.getElementById("dot" + i + "").style = "#bbb";
            document.getElementById("dot"+i+"").style = "animation:none;"
        } 
    }
}

//funçao que cria o numero de dots consoante o numero de imagens
function dots() {
    for (i = 0; i < imagens.length; i++) {
        document.getElementById("dotContainer").innerHTML += '<span onclick="dotsClick(' + i + ')" class="dot" id="dot' + i + '"></span>';
    }
}

//função que permitem selecionar diretamente cada imagem clicando no dot correspondente
function dotsClick(dot) {
    document.getElementById("showImg").src = imagens[dot];
    document.getElementById("legendas").innerHTML = legendas[dot];
    index = dot;
    changeDotColor();
    changeNumbers();
}

//função para alterar os numeros
function changeNumbers() {
    num = index + 1;
    document.getElementById("numberText").innerHTML = num + " / " + (imagens.length);
}


//função para automatizar a passagem de slides em loop continuo
let looper;

function autoSlider() {
    if (index == 0) {
        next();
    } else {
        clearTimeout(looper);
        return false;
    }
    looper = setInterval('next()',7000);
}

/*-----------------------------------------------About section-----------------------------------------------------*/
//carrega a frase da constante text letra a letra
const text = 'Turn your concept, website, or app into a working thing';

let arr = text.split("");

let loopTimer;

function frameLooper() {
    if (arr.length > 0) {
            document.getElementById("type-text").innerHTML += arr.shift();
    } else {
        clearTimeout(loopTimer);
        return false;
    }
    loopTimer = setTimeout('frameLooper()',70);
}

//chama a função framelooper ao atingir determinado valor de scroll
window.onscroll = function() { showText() };

function showText() {
    if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
        frameLooper();
    }
}

/*--------------------------------------------email validator----------------------------------------------*/ 

//methodo para validar se o formulario tem todos os campos preenchidos

function validateForm() {
    const validateName = document.forms['contact-form']['contact-name'].value;
    const validateEmail = document.forms['contact-form']['contact-email'].value;
    const validateMessage = document.forms['contact-form']['contact-message'].value;

    let val1 = val2 = val3 = 0;

    const nameChecker = /([$&+,:;=?@#|'<>.-^*()%!]){2,30}$/g;
    const emailChecker = /(@)/g;

    if (validateName == "") {
        document.getElementById("warning-name").style = "display:block";
        document.getElementById("warning-name-value").style = "display:none";
    }
    else if (validateName.match(nameChecker)) {
        document.getElementById("warning-name").style = "display:none";
        document.getElementById("warning-name-value").style = "display:block";   
    }
    else {
        document.getElementById("warning-name-value").style = "display:none";
        document.getElementById("warning-name").style = "display:none";
        val1 = 1;
    }
    
    if (validateEmail == "") {
        document.getElementById("warning-email").style = "display:block";
        document.getElementById("warning-email-value").style = "display:none";
    }
     if (validateEmail.match(emailChecker)) {
        document.getElementById("warning-email").style = "display:none";
        document.getElementById("warning-email-value").style = "display:none";
        val2 = 1;
    }
    else {
        document.getElementById("warning-email-value").style = "display:block";
        document.getElementById("warning-email").style = "display:none";
    }

    if (validateMessage == "") {
        document.getElementById("warning-message").style = "display:block";
    } else {
        document.getElementById("warning-message").style = "display:none";
        val3 = 1;
    }
    // todas validações com sucesso
    if (val1 == 1 && val2 == 1 && val3 == 1) {
        document.getElementById("warning-success").style = "display:block";
        document.getElementById("warning-success").style = "color:white";
    } else {
        document.getElementById("warning-success").style = "display:none";
    }
}
/////////////////////////////////////////////////////////////////////////////////////

