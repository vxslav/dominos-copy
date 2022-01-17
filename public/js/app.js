function showSideBar() {
    let sidebar = document.getElementById("side-nav");
    sidebar.style.display = sidebar.style.display === 'none' ? 'block' : 'none';
    if(sidebar.style.display == 'block') {
       let body = document.getElementsByTagName("html")[0];
       body.className = "margin-left";
    }
    else {
        let body = document.getElementsByTagName("html")[0];
        body.className = "";
    }
}

function hide() {
    let sidebar = document.getElementById("side-nav");
    sidebar.style.display = "none";
    let body = document.getElementsByTagName("html")[0];
    body.className = "";
}
function popup() {
    let popup = document.getElementById("popup-dim");
    popup.style.display = 'none';
}

let buttons = document.getElementsByClassName("button");

let popUp = function() {
    let pop = document.getElementById("popup-dim");
    pop.style.display = "block";
};

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', popUp, false);
}
/* Header change */

window.onscroll = function() {myFunction()};

function myFunction() {
    if (window.pageYOffset > 120 + "px") {
        let header = document.getElementsByTagName("header");
        header.style.backgroundColor = "white";
        let phoneIcon = document.getElementById("phone");
        phoneIcon.setAttribute("src","https://www.dominos.bg/images/footer_icons/tel.svg")
    } 
}

document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#loading").style.visibility = "visible";
    } else {
        document.querySelector("#loading").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
};

window.addEventListener("scroll", () => {
    
    let header = document.getElementsByTagName("header")[0];
    let navLinks = document.getElementsByClassName("nav-link");
    let langSep = document.querySelector(".lang-sep");
    let phone = document.querySelector("#phone");
    let logo = document.getElementById('logo').firstElementChild;
    if(window.pageYOffset > header.offsetHeight) {
        header.style.backgroundColor = "white";
        header.classList.add("header-shadow");
        langSep.style.color = "#898989";
        phone.setAttribute("src", "public/img/phone.png")
        logo.setAttribute("src", "public/img/blue-logo.png")
        logo.classList.remove("logo-white");
        for(let i = 0; i < navLinks.length; i++) {
            navLinks[i].style.color = "#898989";
        }
        
    }
    else if(window.pageYOffset <= header.offsetHeight) {
        header.style.backgroundColor = "transparent";
        header.classList.remove("header-shadow");
        langSep.style.color = "white";
        phone.setAttribute("src", "public/img/call.png")
        logo.setAttribute("src", "public/img/logo-white.png");
        logo.classList.add("logo-white");
        for(let i = 0; i < navLinks.length; i++) {
            navLinks[i].style.color = "white";
        }
    }
})