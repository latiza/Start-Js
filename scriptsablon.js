/*
1. doboz:
Kattintásra adjunk hozzá egy "blur" nevű class attribútumot, majd újabb kattintásra vegyük le róla azt.
*/
//belső állapotát: state
let isBlurred = false;
//action 
document.getElementById("element-one").onclick = function() {
    //state change
    isBlurred = !isBlurred;
    //render
    if (isBlurred) {
        document.getElementById("element-one").classList.add("blur");
    } else {
        document.getElementById("element-one").classList.remove("blur");
    }
};

/*
2. doboz:
Ha doboz fölé húzzuk az egeret változzon át a háttérszíne pirosra, ha pedig elhúzzuk róla, változzon vissza az eredeti színére.
*/
//state
let isHoveredOver = false;

document.getElementById("element-two").onmouseover = function() {

    isHoveredOver = true;

    renderSecondBox();
};

document.getElementById("element-two").onmouseout = function() {

    isHoveredOver = false;

    renderSecondBox();
};

function renderSecondBox() {
    if (isHoveredOver) {
        document.getElementById("element-two").style.backgroundColor = "red";
    } else {
        document.getElementById("element-two").style.backgroundColor = "";
    }
}

/*
3. doboz:
Dupla kattintással sorsolja ki a jackpot nyerőszámokat 1 és 50 között és módosítsa a kapott számmal a doboz tartalmát, az éppen kisorolt számmal. 
*/

function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
document.getElementById("element-three").ondblclick = function() {
    document.getElementById("element-three").firstElementChild.innerHTML = getRandomArbitrary(1, 50);
};

/*
4. doboz:
Kattintásra tűnjön el a dobozunk, majd egy 1 másodperces várakozás után jelenjen meg újra.
*/
document.getElementById("element-four").onclick = function() {
    
    document.getElementById("element-four").classList.add("hidden");

    setTimeout(function() {
        document.getElementById("element-four").classList.remove("hidden");
    }, 2000)
};

/*
5. doboz:
Kattintásra alakítsa kör alakúra az összes dobozt, újabb kattintásra pedig vissza.
*/
//console.log(document.querySelector('.container').children);
//console.log(document.querySelectorAll('.shape'));
//belső állapotát: state

let isRound = false;

document.getElementById("element-five").onclick = function() {
    if (isRound = !isRound) {
        let boxes = document.querySelectorAll('.shape');
        for (let box of boxes) {
            box.style.borderRadius = "50%";
        }
    } else {
        let boxes = document.querySelectorAll('.shape');
        for (let box of boxes) {
            box.style.borderRadius = "3px";
        }
    }
};
/*
6. doboz:
Form submit eseményre módosítsuk a doboz tartalmát az input mezőbe írt értékkel.
*/

document.getElementById("element-six").onsubmit = function() {
    event.preventDefault();
    document.getElementById("element-six").firstElementChild.innerHTML =
        event.target.elements.boxNumber.value;
};


/*
7. doboz:
Keypress eseményre írjuk be a dobozba az adott karaktert, amit leütöttek.
*/
document.getElementById("element-seven").onkeypress = function() {
    document.getElementById("element-seven").firstElementChild.innerHTML =
        event.key;
};

/*
8. doboz:
Egérmozdítás eseményre írjuk be az egér pozíciójának x és y koordinátáját, 
a következő séma szerint: "X: {x-koordináta}, Y: {y-koordináta}"
*/
document.onmousemove = function(event) {
    let coordinates = "X:" + event.clientX + ", Y:" +
        event.clientY;
    document.getElementById("element-eight").firstElementChild.innerHTML = coordinates;
}

/*
9. doboz:
Submit eseményre módosítsuk a doboz tartalmát azzal az értékkel ami úgy áll elő, 
hogy végrehajtjuk a select inputban kiválasztott operációt,
a state-en és number inputba beírt értéken.
Az előállt végeredményt tároljuk el új state-ként!
Pl:
  Number input mezőbe írt érték: 5
  Select inputban kiválasztott érték: "mult"
  Aktuális state: 9
  Operáció: 9 * 5
  
  Dobozba és state-be beírandó érték: 45
*/

let state = 9;

document.getElementById("box-9").onsubmit = function(event) {
    event.preventDefault();
    let operand = Number(event.target.elements.operand.value);
    let operator = event.target.elements.operator.value;
    console.log(operand);
    console.log(operator);
    switch (operator) {
        case "mult":
            state = state * operand
            break;
        case "div":
            state = state / operand
            break;
        case "add":
            state = state + operand
            break;
        case "sub":
            state = state - operand
            break;
    }

    document.getElementById("element-nine").firstElementChild.innerHTML = state;

};