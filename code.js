// LANGUAGE

var storage = window.localStorage;
var request = new XMLHttpRequest();
console.log(getLanguage());
request.open("GET", "languages/"+getLanguage()+".json", false);
request.send(null);
const obj = JSON.parse(request.responseText);

function getByLanguage(value, element) {
    document.getElementById(element).textContent = value;
}

function setLanguage(lang) {
    if (typeof (storage) !== "undefined") {
        storage.setItem("language", lang);
    } else {
    }
}

function getLanguage() {
    if (storage.getItem("language") === null) {
        setLanguage('english')
        return 'english';
    } else {
        return storage.getItem("language");
    }
}

// DROPDOWN

function toggleDropdown1() {
    document.getElementById("dropdown_content").classList.toggle("show");
    if (document.getElementById("dropdown_content").classList.contains("show")) {
        document.getElementById("dropdown-arrow").style.transform = 'rotate(180deg)';
    }else {
        document.getElementById("dropdown-arrow").style.transform = '';
    }
}

// scroll animation

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 50;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("activereveal");
        } else {
            reveals[i].classList.remove("activereveal");
        }

        if(!isNaN(reveals[i].textContent)) {
            incEltNbr(reveals[i].id);
        }
    }
}

window.addEventListener("scroll", reveal);


// animated number

var speed = 20;

/* Call this function with a string containing the ID name to
 * the element containing the number you want to do a count animation on.*/
function incEltNbr(id) {
    elt = document.getElementById(id);
    endNbr = Number(document.getElementById(id).innerHTML);
    incNbrRec(0, endNbr, elt);
}

/*A recursive function to increase the number.*/
function incNbrRec(i, endNbr, elt) {
    if (i <= endNbr) {
        elt.innerHTML = i + '+';
        setTimeout(function() {//Delay a bit before calling the function again.
            incNbrRec(i + 1, endNbr, elt);
        }, speed);
    }
}

function modalOpen(id) {
    document.getElementById(id).style.display = "block";
    setTimeout(() => { document.getElementById(id).style.opacity = "100%"; }, 1);
}

function modalClose(id) {
    document.getElementById(id).style.opacity = "0%";
    setTimeout(() => { document.getElementById(id).style.display = "none"; }, 200);
}