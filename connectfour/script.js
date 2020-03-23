let player1 = prompt("Player one: Enter your nickname, you will be Blue");
let player2 = prompt("Player two: Enter your nickname, you will be Red");

let player1color = "rgb(232, 30, 30)";
let player2color = "rgb(30, 74, 232)";

var game_on = true;
var table = $("table tr");

function reportWin(rowNum, colNum) {
    game_on = false;
}

function changeColor(rowIndex, colIndex, color) {
    return table
        .eq(rowIndex)
        .find("td")
        .eq(colIndex)
        .find("button")
        .css("background-color", color);
}
function returnColor(rowIndex, colIndex) {
    return table
        .eq(rowIndex)
        .find("td")
        .eq(colIndex)
        .find("button")
        .css("background-color");
}
function checkBottom(colIndex) {
    var colorReport = returnColor(5, colIndex);
    for (let row = 5; row >= 0; row--) {
        colorReport = returnColor(row, colIndex);
        if (colorReport === "rgb(128, 128, 128)") {
            return row;
        }
    }
}

function colorMatchCheck(one, two, three, four) {
    return (
        one === two &&
        one === three &&
        one === four &&
        one !== "rgb(128, 128, 128)" &&
        one != undefined
    );
}

function horizontalWinCheck() {
    for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 3; col++) {
            if (
                colorMatchCheck(
                    returnColor(row, col),
                    returnColor(row, col + 1),
                    returnColor(row, col + 2),
                    returnColor(row, col + 3)
                )
            ) {
                reportWin(row, col);
                return true;
            }
        }
    }
}

function verticalWinCheck() {
    for (let col = 0; col < 6; col++) {
        for (let row = 0; row < 3; row++) {
            if (
                colorMatchCheck(
                    returnColor(row, col),
                    returnColor(row + 1, col),
                    returnColor(row + 2, col),
                    returnColor(row + 3, col)
                )
            ) {
                reportWin(row, col);
                return true;
            }
        }
    }
}

function diagonalWinCheck() {
    for (let col = 0; col < 6; col++) {
        for (let row = 0; row < 6; row++) {
            if (
                colorMatchCheck(
                    returnColor(row, col),
                    returnColor(row + 1, col + 1),
                    returnColor(row + 2, col + 2),
                    returnColor(row + 3, col + 3)
                )
            ) {
                reportWin(row, col);
                return true;
            } else if (
                colorMatchCheck(
                    returnColor(row, col),
                    returnColor(row - 1, col + 1),
                    returnColor(row - 2, col + 2),
                    returnColor(row - 3, col + 3)
                )
            ) {
                reportWin(row, col);
                return true;
            }
        }
    }
}

// Start with player 1;

var currentPlayer = 1;
var currentName = player1;
var currentColor = player1color;

$("h3").text(currentPlayer + "It's your turn, to pick a column to drop in!");

$(".chipstable button").on("click", function() {
    if (game_on === true) {
        var col = $(this)
            .closest("td")
            .index();
        var bottomAvail = checkBottom(col);

        changeColor(bottomAvail, col, currentColor);

        if (horizontalWinCheck() || diagonalWinCheck() || verticalWinCheck()) {
            $("h1").text(currentName + ", you have won!");
            $("h1").css("color", currentColor);
            $("h2").fadeOut(500);
            $("h3").fadeOut(500);
        }

        currentPlayer *= -1;

        if (currentPlayer === 1) {
            currentName = player1;
            currentColor = player1color;
            $("h3").text(currentName + ", is your turn");
        } else {
            currentName = player2;
            currentColor = player2color;
            $("h3").text(currentName + ", is your turn");
        }
    }
});

$("#restart").on("click", function() {
    game_on = true;
    var rows = $("tr").length;
    var cols = $("td").length / $("tr").length;
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            table
                .eq(row)
                .find("td")
                .eq(col)
                .find("button")
                .css("background-color", "gray");
        }
    }
    $("h1").text("Have a nice game bitches");
    $("h1").css("color", "black");
    $("h2").fadeIn(500);
    $("h3").fadeIn(500);
});
