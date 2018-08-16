
if (!Cookies.get("sugar cookie")) {
    Cookies.set("sugar cookie", 0);
}

var addSugar = 0;

function addSugarCookie() {
    addSugar = addSugar + 1;

    var sugNumber = addSugar;
    Cookies.set("sugar cookie", sugNumber) + addSugar;  
    var totalSugar = Cookies.get("sugar cookie");
    document.querySelector("#sugar");
    document.querySelector("#sugar-cookie").innerHTML = "You have " + sugNumber + " sugar cookies";
}


if (!Cookies.get("chocolate cookie")) {
    Cookies.set("chocolate cookie", 0);
}

var addChoc = 0;

function addChocCookie() {
    addChoc = addChoc + 1;

    var chocNumber = addChoc;
    Cookies.set("chocolate cookie", chocNumber) + addChoc;  
    var totalChoc = Cookies.get("chocolate cookie");
    document.querySelector("#choc");
    document.querySelector("#choc-cookie").innerHTML = "You have " + chocNumber + " chocolate cookies";
}


if (!Cookies.get("lemon cookie")) {
    Cookies.set("lemon cookie", 0);
}

var addLemon = 0;

function addLemonCookie() {
    addLemon = addLemon + 1;

    var lemonNumber = addLemon;
    Cookies.set("lemon cookie", lemonNumber) + addLemon;  
    var totalLemon = Cookies.get("lemon cookie");
    document.querySelector("#lemon");
    document.querySelector("#lemon-cookie").innerHTML = "You have " + lemonNumber + " lemon cookies";
}

function onPageLoad() {
    document.querySelector("#sugar-cookie").innerHTML = "You have " + Cookies.get("sugar cookie") + " sugar cookies";
    document.querySelector("#choc-cookie").innerHTML = "You have " + Cookies.get("chocolate cookie") + " chocolate cookies";
    document.querySelector("#lemon-cookie").innerHTML = "You have " + Cookies.get("lemon cookie") + " lemon cookies";
}

onPageLoad();

function zeroCookieCount() {
    Cookies.set("sugar cookie", 0);
    document.querySelector("#sugar-cookie").innerHTML = "You have " + 0 + " sugar cookies";
    Cookies.set("chocolate cookie", 0);
    document.querySelector("#choc-cookie").innerHTML = "You have " + 0 + " chocolate cookies";
    Cookies.set("lemon cookie", 0);
    document.querySelector("#lemon-cookie").innerHTML = "You have " + 0 + " lemon cookies";
}
