let currentResult = null;
const shtypi = document.getElementById("rezultati");

function start() {
    var nr1 = Math.floor(Math.random() * 25);
    var nr2 = Math.floor(Math.random() * 25);
    return [nr1, nr2];
}

function next() {
    let pnr2 = document.getElementById("nr2");
    let pnr1 = document.getElementById("nr1");
    let startnumbers = start();
    pnr1.innerHTML = startnumbers[0];
    pnr2.innerHTML = startnumbers[1];
    currentResult = startnumbers[0] * startnumbers[1];
    document.getElementById("input").value=''
}

function check() {
    let input = document.getElementById("input").value;
    if (parseInt(input) === currentResult) {
        shtypi.innerHTML = `zgjidhja eshte e sakte`;
        document.getElementById("body").style.backgroundColor = "green";
        // document.getElementById("next").disabled=false
    } else {
        shtypi.innerHTML = `zgjidhja eshte e gabuar`;
        document.getElementById("body").style.backgroundColor = "red";
        // document.getElementById("next").disabled=true

    }
}