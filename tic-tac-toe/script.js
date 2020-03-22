let x0y0 = document.querySelector("#x0y0");
let x1y0 = document.querySelector("#x1y0");
let x2y0 = document.querySelector("#x2y0");
let x0y1 = document.querySelector("#x0y1");
let x1y1 = document.querySelector("#x1y1");
let x2y1 = document.querySelector("#x2y1");
let x0y2 = document.querySelector("#x0y2");
let x1y2 = document.querySelector("#x1y2");
let x2y2 = document.querySelector("#x2y2");

let x0y0clicked = false;
let x1y0clicked = false;
let x2y0clicked = false;
let x0y1clicked = false;
let x1y1clicked = false;
let x2y1clicked = false;
let x0y2clicked = false;
let x1y2clicked = false;
let x2y2clicked = false;

let h1 = document.querySelector("h1");
let restart_button = document.querySelector("#restart");

let td = document.querySelector("td");
let turn = 0;
let games_total = 0;
let symbol = "";
let positions = [
    [x0y0, x1y0, x2y0],
    [x0y1, x1y1, x2y1],
    [x0y2, x1y2, x2y2]
];
let clicked = [
    [x0y0clicked, x1y0clicked, x2y0clicked],
    [x0y1clicked, x1y1clicked, x2y1clicked],
    [x0y2clicked, x1y2clicked, x2y2clicked]
];

let winner = false;

function horizontalChecker() {
    var checker;
    if (winner == false) {
        for (let i = 0; i < positions.length; i++) {
            checker = 0;
            for (let j = 1; j < positions.length; j++) {
                if (positions[i][j].textContent === positions[i][j - 1].textContent) {
                    checker++;
                }
            }
            if (checker == 2) {
                for (let j = 0; j < positions.length; j++) {
                    positions[i][j].style.color = "red";
                }
                winner = true;
                if (turn % 2 == 0) {
                    h1.textContent = "Congratulations, X player won!";
                } else {
                    h1.textContent = "Congratulations, O player won!";
                }
            }
        }
    }
}
function verticalChecker() {
    if (winner == false) {
        var checker;
        for (let j = 0; j < positions.length; j++) {
            checker = 0;
            for (let i = 1; i < positions.length; i++) {
                if (positions[i][j].textContent == positions[i - 1][j].textContent) {
                    checker++;
                }
                if (checker == 2) {
                    for (let i = 0; i < positions.length; i++) {
                        positions[i][j].style.color = "red";
                    }
                    winner = true;
                    if (turn % 2 == 0) {
                        h1.textContent = "Congratulations, X player won!";
                    } else {
                        h1.textContent = "Congratulations, O player won!";
                    }
                }
            }
        }
    }
}
function mainDiagonalChecker() {
    if (winner == false) {
        var checker = 0;
        for (let i = 1; i < positions.length; i++) {
            for (let j = 1; j < positions.length; j++) {
                if (i == j) {
                    if (positions[i][j].textContent == positions[i - 1][j - 1].textContent) {
                        checker++;
                    }
                }
            }
        }
        if (checker == 2) {
            for (let i = 0; i < positions.length; i++) {
                for (let j = 0; j < positions.length; j++) {
                    if (i == j) {
                        positions[i][j].style.color = "red";
                    }
                }
            }
            winner = true;
            if (turn % 2 == 0) {
                h1.textContent = "Congratulations, X player won!";
            } else {
                h1.textContent = "Congratulations, O player won!";
            }
        }
    }
}
function sideDiagonalChecker() {
    if (winner == false) {
        var checker = 0;
        for (let i = 1; i < positions.length; i++) {
            for (let j = 0; j < positions.length - 1; j++) {
                if (j == positions.length - i - 1) {
                    if (positions[i][j].textContent == positions[i - 1][j + 1].textContent) {
                        checker++;
                    }
                }
            }
        }
        if (checker == 2) {
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (j == positions.length - i - 1) {
                        positions[i][j].style.color = "red";
                    }
                }
            }
            winner = true;
            if (turn % 2 == 0) {
                h1.textContent = "Congratulations, X player won!";
            } else {
                h1.textContent = "Congratulations, O player won!";
            }
        }
    }
}
x0y0.addEventListener("click", function() {
    if (clicked[0][0] == false && winner == false) {
        if (turn % 2 == 0) {
            symbol = "X";
        } else {
            symbol = "O";
        }
        x0y0.textContent = symbol;
        x0y0.style.fontSize = "4em";
        clicked[0][0] = true;
        horizontalChecker();
        verticalChecker();
        mainDiagonalChecker();
        sideDiagonalChecker();
        turn++;
    }
});
x1y0.addEventListener("click", function() {
    if (clicked[0][1] == false && winner == false) {
        if (turn % 2 == 0) {
            symbol = "X";
        } else {
            symbol = "O";
        }
        x1y0.textContent = symbol;
        x1y0.style.fontSize = "4em";
        clicked[0][1] = true;
        horizontalChecker();
        verticalChecker();
        mainDiagonalChecker();
        sideDiagonalChecker();
        turn++;
    }
});
x2y0.addEventListener("click", function() {
    if (clicked[0][2] == false && winner == false) {
        if (turn % 2 == 0) {
            symbol = "X";
        } else {
            symbol = "O";
        }
        x2y0.textContent = symbol;
        x2y0.style.fontSize = "4em"; //
        clicked[0][2] = true;
        horizontalChecker();
        verticalChecker();
        mainDiagonalChecker();
        sideDiagonalChecker();
        turn++;
    }
});
x0y1.addEventListener("click", function() {
    if (clicked[1][0] == false && winner == false) {
        if (turn % 2 == 0) {
            symbol = "X";
        } else {
            symbol = "O";
        }
        x0y1.textContent = symbol;
        x0y1.style.fontSize = "4em";
        clicked[1][0] = true;
        horizontalChecker();
        verticalChecker();
        mainDiagonalChecker();
        sideDiagonalChecker();
        turn++;
    }
});
x1y1.addEventListener("click", function() {
    if (clicked[1][1] == false && winner == false) {
        if (turn % 2 == 0) {
            symbol = "X";
        } else {
            symbol = "O";
        }
        x1y1.textContent = symbol;
        x1y1.style.fontSize = "4em";
        clicked[1][1] = true;
        horizontalChecker();
        verticalChecker();
        mainDiagonalChecker();
        sideDiagonalChecker();
        turn++;
    }
});
x2y1.addEventListener("click", function() {
    if (clicked[1][2] == false && winner == false) {
        if (turn % 2 == 0) {
            symbol = "X";
        } else {
            symbol = "O";
        }
        x2y1.textContent = symbol;
        x2y1.style.fontSize = "4em";
        clicked[1][2] = true;
        horizontalChecker();
        verticalChecker();
        mainDiagonalChecker();
        sideDiagonalChecker();
        turn++;
    }
});
x0y2.addEventListener("click", function() {
    if (clicked[2][0] == false && winner == false) {
        if (turn % 2 == 0) {
            symbol = "X";
        } else {
            symbol = "O";
        }
        x0y2.textContent = symbol;
        x0y2.style.fontSize = "4em";
        clicked[2][0] = true;
        horizontalChecker();
        verticalChecker();
        mainDiagonalChecker();
        sideDiagonalChecker();
        turn++;
    }
});
x1y2.addEventListener("click", function() {
    if (clicked[2][1] == false && winner == false) {
        if (turn % 2 == 0) {
            symbol = "X";
        } else {
            symbol = "O";
        }
        x1y2.textContent = symbol;
        x1y2.style.fontSize = "4em";
        clicked[2][1] = true;
        horizontalChecker();
        verticalChecker();
        mainDiagonalChecker();
        sideDiagonalChecker();
        turn++;
    }
});
x2y2.addEventListener("click", function() {
    if (clicked[2][2] == false && winner == false) {
        if (turn % 2 == 0) {
            symbol = "X";
        } else {
            symbol = "O";
        }
        x2y2.textContent = symbol;
        x2y2.style.fontSize = "4em";
        clicked[2][2] = true;
        horizontalChecker();
        verticalChecker();
        mainDiagonalChecker();
        sideDiagonalChecker();
        turn++;
    }
});

restart_button.addEventListener("click", function() {
    winner = false;
    var number = 1;
    games_total++;
    turn = 0 + games_total;
    for (let i = positions.length - 1; i >= 0; i--) {
        for (let j = 0; j < positions.length; j++) {
            positions[i][j].textContent = number;
            number++;
        }
    }
    for (let i = 0; i < positions.length; i++) {
        for (let j = 0; j < positions.length; j++) {
            positions[i][j].style.color = "black";
            positions[i][j].style.fontSize = "0em";
            clicked[i][j] = false;
        }
    }
    h1.textContent = "Tic Tac Toe";
});
