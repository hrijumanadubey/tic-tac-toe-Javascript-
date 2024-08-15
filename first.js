let player = prompt("Hello, this is a tic tac toe game.Player 1 has to choose either 'X' or 'O'.Enter your choice");
let player1 = player.toUpperCase();

if (player1 == "X") {
    player2 = "O";
}
else if (player1 == "O") {
    player2 = "X";
}
else {
    alert("please choose between X and O only");
    location.reload();
}


let zero = document.querySelector("#zero");
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let body = document.querySelector("body");

let plyr1chno = 0;


zero.addEventListener("click", () => {
    if (zero.innerText == "") {
        if (plyr1chno == 0) {
            zero.innerText = player1;
            plyr1chno++;
            body.style.backgroundColor = "rgb(199, 48, 73)";
        } else {
            zero.innerText = player2;
            plyr1chno--;
            body.style.backgroundColor = "rgb(24, 121, 56)";
        }
    }
});

one.addEventListener("click", () => {
    if(one.innerText == ""){
    if (plyr1chno == 0) {
        one.innerText = player1;
        plyr1chno++;
        body.style.backgroundColor = "rgb(199, 48, 73)";
    } else {
        one.innerText = player2;
        plyr1chno--;
        body.style.backgroundColor = "rgb(24, 121, 56)";
    }
}
});

two.addEventListener("click", () => {
    if(two.innerText == ""){
    if (plyr1chno == 0) {
        two.innerText = player1;
        plyr1chno++;
        body.style.backgroundColor = "rgb(199, 48, 73)";
    } else {
        two.innerText = player2;
        plyr1chno--;
        body.style.backgroundColor = "rgb(24, 121, 56)";
    }
}
});

three.addEventListener("click", () => {
    if(three.innerText == ""){
    if (plyr1chno == 0) {
        three.innerText = player1;
        plyr1chno++;
        body.style.backgroundColor = "rgb(199, 48, 73)";
    } else {
        three.innerText = player2;
        plyr1chno--;
        body.style.backgroundColor = "rgb(24, 121, 56)";
    }
}
});

four.addEventListener("click", () => {
    if(four.innerText == ""){
    if (plyr1chno == 0) {
        four.innerText = player1;
        plyr1chno++;
        body.style.backgroundColor = "rgb(199, 48, 73)";
    } else {
        four.innerText = player2;
        plyr1chno--;
        body.style.backgroundColor = "rgb(24, 121, 56)";
    }
}
});

five.addEventListener("click", () => {
    if(five.innerText == ""){
    if (plyr1chno == 0) {
        five.innerText = player1;
        plyr1chno++;
        body.style.backgroundColor = "rgb(199, 48, 73)";
    } else {
        five.innerText = player2;
        plyr1chno--;
        body.style.backgroundColor = "rgb(24, 121, 56)";
    }
}
});

six.addEventListener("click", () => {
    if(six.innerText == ""){
    if (plyr1chno == 0) {
        six.innerText = player1;
        plyr1chno++;
        body.style.backgroundColor = "rgb(199, 48, 73)";
    } else {
        six.innerText = player2;
        plyr1chno--;
        body.style.backgroundColor = "rgb(24, 121, 56)";
    }
}
});

seven.addEventListener("click", () => {
    if(seven.innerText == ""){
    if (plyr1chno == 0) {
        seven.innerText = player1;
        plyr1chno++;
        body.style.backgroundColor = "rgb(199, 48, 73)";
    } else {
        seven.innerText = player2;
        plyr1chno--;
        body.style.backgroundColor = "rgb(24, 121, 56)";
    }
}
});

eight.addEventListener("click", () => {
    if(eight.innerText == ""){
    if (plyr1chno == 0) {
        eight.innerText = player1;
        plyr1chno++;
        body.style.backgroundColor = "rgb(199, 48, 73)";
    } else {
        eight.innerText = player2;
        plyr1chno--;
        body.style.backgroundColor = "rgb(24, 121, 56)";
    }
}
});


body.addEventListener("click", () => {
    if (zero.innerText == one.innerText && zero.innerText == two.innerText && zero.innerText == player1) {
        setTimeout(() => {
            alert("player1 has won");
        }, 500);
        setTimeout(() => {
            alert("Do you want to restart?");
        }, 1000);
        setTimeout(() => {
            window.location.href = "home.html";
        }, 1200);
    }
    else if (zero.innerText == four.innerText && zero.innerText == eight.innerText && zero.innerText == player1) {
        setTimeout(() => {
            alert("player1 has won");
        }, 500);
        setTimeout(() => {
            alert("Do you want to restart?");
        }, 1000);
        setTimeout(() => {
            window.location.href = "home.html";
        }, 1200);
    }
    else if (zero.innerText == three.innerText && zero.innerText == six.innerText && zero.innerText == player1) {
        setTimeout(() => {
            alert("player1 has won");
        }, 500);
        setTimeout(() => {
            alert("Do you want to restart?");
        }, 1000);
        setTimeout(() => {
            window.location.href = "home.html";
        }, 1200);
    }
    else if (three.innerText == four.innerText && three.innerText == five.innerText && three.innerText == player1) {
        setTimeout(() => {
            alert("player1 has won");
        }, 500);
        setTimeout(() => {
            alert("Do you want to restart?");
        }, 1000);
        setTimeout(() => {
            window.location.href = "home.html";
        }, 1200);
    }
    else if (six.innerText == seven.innerText && six.innerText == eight.innerText && six.innerText == player1) {
        setTimeout(() => {
            alert("player1 has won");
        }, 500);
        setTimeout(() => {
            alert("Do you want to restart?");
        }, 1000);
        setTimeout(() => {
            window.location.href = "home.html";
        }, 1200);
    }
    else if (one.innerText == four.innerText && one.innerText == seven.innerText && one.innerText == player1) {
        setTimeout(() => {
            alert("player1 has won");
        }, 500);
        setTimeout(() => {
            alert("Do you want to restart?");
        }, 1000);
        setTimeout(() => {
            window.location.href = "home.html";
        }, 1200);
    }
    else if (two.innerText == five.innerText && two.innerText == eight.innerText & two.innerText == player1) {
        setTimeout(() => {
            alert("player1 has won");
        }, 500);
        setTimeout(() => {
            alert("Do you want to restart?");
        }, 1000);
        setTimeout(() => {
            window.location.href = "home.html";
        }, 1200);
    }
    else if (two.innerText == four.innerText && two.innerText == six.innerText && two.innerText == player1) {
        setTimeout(() => {
            alert("player1 has won");
        }, 500);
        setTimeout(() => {
            alert("Do you want to restart?");
        }, 1000);
        setTimeout(() => {
            window.location.href = "home.html";
        }, 1200);
    }
    else if (zero.innerText == one.innerText && zero.innerText == two.innerText && zero.innerText == player2) {
        setTimeout(() => {
            alert("player2 has won");
        }, 500);
        setTimeout(() => {
            alert("Do you want to restart?");
        }, 1000);
        setTimeout(() => {
            window.location.href = "home.html";
        }, 1200);
    }
    else if (zero.innerText == four.innerText && zero.innerText == eight.innerText && zero.innerText == player2) {
        setTimeout(() => {
            alert("player2 has won");
        }, 500);
        setTimeout(() => {
            alert("Do you want to restart?");
        }, 1000);
        setTimeout(() => {
            window.location.href = "home.html";
        }, 1200);
    }
    else if (zero.innerText == three.innerText && zero.innerText == six.innerText && zero.innerText == player2) {
        setTimeout(() => {
            alert("player2 has won");
        }, 500);
        setTimeout(() => {
            alert("Do you want to restart?");
        }, 1000);
        setTimeout(() => {
            window.location.href = "home.html";
        }, 1200);
    }
    else if (three.innerText == four.innerText && three.innerText == five.innerText && three.innerText == player2) {
        setTimeout(() => {
            alert("player2 has won");
        }, 500);
        setTimeout(() => {
            alert("Do you want to restart?");
        }, 1000);
        setTimeout(() => {
            window.location.href = "home.html";
        }, 1200);
    }
    else if (six.innerText == seven.innerText && six.innerText == eight.innerText && six.innerText == player2) {
        setTimeout(() => {
            alert("player2 has won");
        }, 500);
        setTimeout(() => {
            alert("Do you want to restart?");
        }, 1000);
        setTimeout(() => {
            window.location.href = "home.html";
        }, 1200);
    }
    else if (one.innerText == four.innerText && one.innerText == seven.innerText && one.innerText == player2) {
        setTimeout(() => {
            alert("player2 has won");
        }, 500);
        setTimeout(() => {
            alert("Do you want to restart?");
        }, 1000);
        setTimeout(() => {
            window.location.href = "home.html";
        }, 1200);
    }
    else if (two.innerText == five.innerText && two.innerText == eight.innerText & two.innerText == player2) {
        setTimeout(() => {
            alert("player2 has won");
        }, 500);
        setTimeout(() => {
            alert("Do you want to restart?");
        }, 1000);
        setTimeout(() => {
            window.location.href = "home.html";
        }, 1200);
    }
    else if (two.innerText == four.innerText && two.innerText == six.innerText && two.innerText == player2) {
        setTimeout(() => {
            alert("player2 has won");
        }, 500);
        setTimeout(() => {
            alert("Do you want to restart?");
        }, 1000);
        setTimeout(() => {
            window.location.href = "home.html";
        }, 1200);
    }
    else if (zero.innerText != "" && one.innerText != "" && two.innerText != "" && three.innerText != "" && four.innerText != "" && five.innerText != "" && six.innerText != "" && seven.innerText != "" && eight.innerText != "") {
        setTimeout(() => {
            alert("it's a draw");
        }, 500);
        setTimeout(() => {
            alert("Do you want to restart?");
        }, 1000);
        setTimeout(() => {
            window.location.href = "home.html";
        }, 1200);
    }
});

