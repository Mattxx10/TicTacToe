var board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];
var moves = 1;
var combos = new Array(8);
var playerMove;
var playerIcon = "X";
var pcIcon = "O";
var alertMessage = document.getElementById("alert-message");
var alertBox = document.getElementById("alert");
var playerScore = 0;
var pcScore = 0;
var ties = 0;
var playerName;
var yes;
var no;

function gameSettings(){
    const rbs = document.querySelectorAll('input[name="choice1"]');
            let selectedValue;
            for (const rb of rbs) {
                if (rb.checked) {
                    selectedValue = rb.value;
                    break;
                }
            }
    if(selectedValue === 'X'){
        playerIcon = '<i class="fas fa-times animate__bounceIn" style = "font-size: 100px"></i>';
        pcIcon = '<i class="fas fa-circle-notch animate__bounceIn animate__delay-2s"></i>';
    }
    else if(selectedValue === 'O'){
        playerIcon = '<i class="fas fa-circle-notch"></i>';
        pcIcon = '<i class="fas fa-times"></i>';
    }
    yes = document.getElementById("choose1").checked;
    no = document.getElementById("choose2").checked;
    if(yes === true){
        playerMove = true;
    }
    if(no === true){
        playerMove = false;
        computerTurn();
    }
    document.getElementById("game-settings").style.display = "none";
    playerName = document.getElementById("name").value;
    document.getElementById("player-name").innerText = playerName;
}

function set_combos(){
    combos[0] = (board[0][0] + board[0][1] + board[0][2]);
	combos[1] = (board[1][0] + board[1][1] + board[1][2]);
	combos[2] = (board[2][0] + board[2][1] + board[2][2]);
	combos[3] = (board[0][0] + board[1][0] + board[2][0]);
	combos[4] = (board[0][1] + board[1][1] + board[2][1]);
	combos[5] = (board[0][2] + board[1][2] + board[2][2]);
	combos[6] = (board[0][0] + board[1][1] + board[2][2]);
	combos[7] = (board[0][2] + board[1][1] + board[2][0]);
	return;
}

function resetBoard(){
    for(var i = 0; i < 3; i++){
        for(var j = 0; j < 3; j++){
            board[i][j] = 0;
        }
    }
	moves = 1;
    if(yes === true){
        playerMove = true;
    }
    if(no === true){
        playerMove = false;
        computerTurn();
    }
    printBoard();
    set_combos();
    alertBox.style.display = "none";
}

function checkWinner(){
    var negativeSum = 0;
	var positiveSum = 0;
    
	for (var i = 0; i < 3; i++) {
		if (combos[i] < 0)
			negativeSum += combos[i];
		else if (combos[i] > 0)
			positiveSum += combos[i];
		gameSum = positiveSum + negativeSum;

	}
	for (var i = 0; i < 8; i++) {
		if (combos[i] == 3) {
            alertBox.style.display = "block";
			alertMessage.innerText = "You Win!";
            playerScore++;
			return true;
		}
		else if (combos[i] == -3) {
            alertBox.style.display = "block";
			alertMessage.innerText = "You Lose!";
            pcScore++;
			return true;
		}
	}
	if (moves === 10) {
        alertBox.style.display = "block";
		for (var i = 0; i < 8; i++) {
			if (combos[i] == 3) {
				alertMessage.innerText = "You Win!";
                playerScore++;
				return true;
			}
			else if (combos[i] == -3) {
				alertMessage.innerText = "You Lose!";
                pcScore++;
				return true;
			}
			else {
				alertMessage.innerText = "It's a Tie!";
                ties++;
				return true;
			}
		}
	}
		
	return false;
}

function printBoard(){
    var m = 0;
    for(var i = 0; i < 3; i++){
        for(var j = 0; j < 3; j++){
            if( board[i][j] === 1 ){
                document.getElementsByClassName("table-cell")[m].innerHTML = playerIcon;
            }
            else if( board[i][j] === -1 ){
                document.getElementsByClassName("table-cell")[m].innerHTML = pcIcon;
            }
            else{
                document.getElementsByClassName("table-cell")[m].innerText = "";
            }
            m++;
        }
    }
    document.getElementById("player-score").innerHTML = playerScore;
    document.getElementById("pc-score").innerHTML = pcScore;
    document.getElementById("ties").innerHTML = ties;
}

function playerTurn(x){
    if(playerMove === true){
        
        if(x === 1 && board[0][0] === 0){
            board[0][0] = 1;
			moves++;
			set_combos();
        checkWinner();
        printBoard();
        playerMove = false;
        }
        else if(x === 2 && board[0][1] === 0){
            board[0][1] = 1;
			moves++;
			set_combos();
        checkWinner();
        printBoard();
        playerMove = false;
        }
        else if(x === 3 && board[0][2] === 0){
            board[0][2] = 1;
			moves++;
			set_combos();
        checkWinner();
        printBoard();
        playerMove = false;
        }
        else if(x === 4 && board[1][0] === 0){
            board[1][0] = 1;
			moves++;
			set_combos();
        checkWinner();
        printBoard();
        playerMove = false;
        }
        else if(x === 5 && board[1][1] === 0){
            board[1][1] = 1;
			moves++;
			set_combos();
        checkWinner();
        printBoard();
        playerMove = false;
        }
        else if(x === 6 && board[1][2] === 0){
            board[1][2] = 1;
			moves++;
			set_combos();
        checkWinner();
        printBoard();
        playerMove = false;
        }
        else if(x === 7 && board [2][0] === 0){
            board[2][0] = 1;
			moves++;
			set_combos();
        checkWinner();
        printBoard();
        playerMove = false;
        }
        else if(x === 8 && board [2][1] === 0){
            board[2][1] = 1;
			moves++;
			set_combos();
        checkWinner();
        printBoard();
        playerMove = false;
        }
        else if(x === 9 && board [2][2] === 0){
            board[2][2] = 1;
			moves++;
			set_combos();
        checkWinner();
        printBoard();
        playerMove = false;
        }
		if(moves < 10){
        	computerTurn();
		}
    }
}

function computerTurn(){
    if(playerMove === false){
        if (moves === 1) {
            board[1][1] = -1;
            moves++;
            set_combos();
            printBoard();
            checkWinner();
            playerMove = true;
            console.log(board[1][1]);
            return;
        }
        else if (moves === 3 && board[0][1] === 1) {
            board[0][0] = -1;
            moves++;
            set_combos();
            playerMove = true;
            printBoard();
            checkWinner();
            return;
        }
        else if (moves === 5 && combos[6] === -2) {
            for (var j = 0; j < 3; j++) {
                if (board[j][j] == 0) {
                    board[j][j] = -1;
                    moves++;
                    set_combos();
                    playerMove = true;
                    printBoard();
                    checkWinner();
                    return;
                }
            }
        }
        else if ((moves === 5) && (board[0][1] === 1) && (board[0][0] === -1) && (board[1][1] === -1)) {
            board[1][0] = -1;
            moves++;
            set_combos();
            playerMove = true;
            printBoard();
            checkWinner();
            return;
        }
        else if (moves === 3 && board[1][2] === 1) {
            board[2][2] = -1;
            moves++;
            set_combos();
            playerMove = true;
            printBoard();
            checkWinner();
            return;
        }
        else if (moves === 5 && combos[6] === -2) {
            for (var j = 0; j < 3; j++) {
                if (board[j][j] == 0) {
                    board[j][j] = -1;
                    moves++;
                    set_combos();
                    playerMove = true;
                    printBoard();
                    checkWinner();
                    return;
                }
            }
        }
        else if ((moves === 5) && (board[1][2] === 1) && (board[1][1] === -1) && (board[2][2] === -1)) {
            board[2][1] = -1;
            moves++;
            set_combos();
            playerMove = true;
            printBoard();
            checkWinner();
            return;
        }
        else if (moves === 3 && board[2][1] === 1) {
            board[2][2] = -1;
            moves++;
            set_combos();
            playerMove = true;
            printBoard();
            checkWinner();
            return;
        }
        else if (moves === 5 && combos[6] === -2) {
            for (var j = 0; j < 3; j++) {
                if (board[j][j] == 0) {
                    board[j][j] = -1;
                    moves++;
                    set_combos();
                    playerMove = true;
                    printBoard();
                    checkWinner();
                    return;
                }
            }
        }
        else if ((moves === 5) && (board[2][1] === 1) && (board[1][1] === -1) && (board[2][2] === -1)) {
            board[1][2] = -1;
            moves++;
            set_combos();
            playerMove = true;
            printBoard();
            checkWinner();
            return;
        }
        else if (moves === 3 && board[1][0] === 1) {
            board[0][0] = -1;
            moves++;
            set_combos();
            playerMove = true;
            printBoard();
            checkWinner();
            return;
        }
        else if (moves === 5 && combos[6] === -2) {
            for (var j = 0; j < 3; j++) {
                if (board[j][j] == 0) {
                    board[j][j] = -1;
                    moves++;
                    set_combos();
                    playerMove = true;
                    printBoard();
                    checkWinner();
                    return;
                }
            }
        }
        else if ((moves === 5) && (board[1][0] === 1) && (board[1][1] === -1) && (board[0][0] === -1)) {
            board[0][1] = -1;
            moves++;
            set_combos();
            playerMove = true;
            printBoard();
            checkWinner();
            return;
        }
        else {
            bestMove();
        }
    }
}

function bestMove(){
    if((moves === 4) && (board[0][0] === -1) && (board[1][1] === 1) && (board[2][2] === 1)){
        board[0][2] = -1;
        moves++;
		set_combos();
        playerMove = true;
        printBoard();
        checkWinner();
		return;
    }
    if((moves === 4) && (board[2][0] === -1) && (board[1][1] === 1) && (board[0][2] === 1)){
        board[2][2] = -1;
        moves++;
		set_combos();
        playerMove = true;
        printBoard();
        checkWinner();
		return;
    }
    if (combos[0] === -2) {
		for (var j = 0; j < 3; j++) {
			if (board[0][j] == 0) {
				board[0][j] = -1;
				moves++;
				set_combos();
                playerMove = true;
                printBoard();
                checkWinner();
				return;
			}
		}
	}
	else if (combos[1] === -2) {
		for (var j = 0; j < 3; j++) {
			if (board[1][j] == 0) {
				board[1][j] = -1;
				moves++;
				set_combos();
                playerMove = true;
                printBoard();
                checkWinner();
				return;
			}
		}
	}
	else if (combos[2] === -2) {
		for (var j = 0; j < 3; j++) {
			if (board[2][j] == 0) {
				board[2][j] = -1;
				moves++;
				set_combos();
                playerMove = true;
                printBoard();
                checkWinner();
				return;
			}
		}
	}
	else if (combos[3] === -2) {
		for (var j = 0; j < 3; j++) {
			if (board[j][0] == 0) {
				board[j][0] = -1;
				moves++;
				set_combos();
                playerMove = true;
                printBoard();
                checkWinner();
				return;
			}
		}
	}
	else if (combos[4] === -2) {
		for (var j = 0; j < 3; j++) {
			if (board[j][1] == 0) {
				board[j][1] = -1;
				moves++;
				set_combos();
                playerMove = true;
                printBoard();
                checkWinner();
				return;
			}
		}
	}
	else if (combos[5] === -2) {
		for (var j = 0; j < 3; j++) {
			if (board[j][2] == 0) {
				board[j][2] = -1;
				moves++;
				set_combos();
                playerMove = true;
                printBoard();
                checkWinner();
				return;
			}
		}
	}
	else if (combos[6] === -2) {
		for (var j = 0; j < 3; j++) {
			if (board[j][j] == 0) {
				board[j][j] = -1;
				moves++;
				set_combos();
                playerMove = true;
                printBoard();
                checkWinner();
				return;
			}
		}
	}
	else if (combos[7] === -2) {
		for (var j = 0, x = 2; j < 3; j++, x--) {
			if (board[j][x] == 0) {
				board[j][x] = -1;
				moves++;
				set_combos();
                playerMove = true;
                printBoard();
                checkWinner();
				return;
			}
		}
	}
	else if (combos[0] === 2) {
		for (var j = 0; j < 3; j++) {
			if (board[0][j] == 0) {
				board[0][j] = -1;
				moves++;
				set_combos();
                playerMove = true;
                printBoard();
                checkWinner();
				return;
			}
		}
	}
	else if (combos[1] === 2) {
		for (var j = 0; j < 3; j++) {
			if (board[1][j] == 0) {
				board[1][j] = -1;
				moves++;
				set_combos();
                playerMove = true;
                printBoard();
                checkWinner();
				return;
			}
		}
	}
	else if (combos[2] === 2) {
		for (var j = 0; j < 3; j++) {
			if (board[2][j] == 0) {
				board[2][j] = -1;
				moves++;
				set_combos();
                playerMove = true;
                printBoard();
                checkWinner();
				return;
			}
		}
	}
	else if (combos[3] === 2) {
		for (var j = 0; j < 3; j++) {
			if (board[j][0] == 0) {
				board[j][0] = -1;
				moves++;
				set_combos();
                playerMove = true;
                printBoard();
                checkWinner();
				return;
			}
		}
	}
	else if (combos[4] === 2) {
		for (var j = 0; j < 3; j++) {
			if (board[j][1] == 0) {
				board[j][1] = -1;
				moves++;
				set_combos();
                playerMove = true;
                printBoard();
                checkWinner();
				return;
			}
		}
	}
	else if (combos[5] === 2) {
		for (var j = 0; j < 3; j++) {
			if (board[j][2] == 0) {
				board[j][2] = -1;
				moves++;
				set_combos();
                playerMove = true;
                printBoard();
                checkWinner();
			}
		}
	}
	else if (combos[6] === 2) {
		for (var j = 0; j < 3; j++) {
			if (board[j][j] == 0) {
				board[j][j] = -1;
				moves++;
				set_combos();
                playerMove = true;
                printBoard();
                checkWinner();
				return;
			}
		}
	}
	else if (combos[7] === 2 && isOneEmpty(7)) {
		for (var j = 0, x = 2; j < 3; j++, x--) {
			if (board[j][x] == 0) {
				board[j][x] = -1;
				moves++;
				set_combos();
                playerMove = true;
                printBoard();
                checkWinner();
				return;
			}
		}
	}
	else if (combos[0] === -1 && isOneEmpty(0)) {
		for (var j = 0; j < 3; j++) {
			if (board[0][j] == 0) {
				board[0][j] = -1;
				moves++;
				set_combos();
                playerMove = true;
                printBoard();
                checkWinner();
				return;
			}
		}
	}
	else if (combos[1] === -1 && isOneEmpty(1)) {
		for (var j = 0; j < 3; j++) {
			if (board[1][j] == 0) {
				board[1][j] = -1;
				moves++;
				set_combos();
                playerMove = true;
                printBoard();
                checkWinner();
				return;
			}
		}
	}
	else if (combos[2] === -1 && isOneEmpty(2)) {
		for (var j = 0; j < 3; j++) {
			if (board[2][j] == 0) {
				board[2][j] = -1;
				moves++;
				set_combos();
                playerMove = true;
                printBoard();
                checkWinner();
				return;
			}
		}
	}
	else if (combos[3] === -1 && isOneEmpty(3)) {
		for (var j = 0; j < 3; j++) {
			if (board[j][0] == 0) {
				board[j][0] = -1;
				moves++;
				set_combos();
                playerMove = true;
                printBoard();
                checkWinner();
				return;
			}
		}
	}
	else if (combos[4] === -1 && isOneEmpty(4)) {
		for (var j = 0; j < 3; j++) {
			if (board[j][1] == 0) {
				board[j][1] = -1;
				moves++;
				set_combos();
                playerMove = true;
                printBoard();
                checkWinner();
				return;
			}
		}
	}
	else if (combos[5] === -1 && isOneEmpty(5)) {
		for (var j = 0; j < 3; j++) {
			if (board[j][2] == 0) {
				board[j][2] = -1;
				moves++;
				set_combos();
                playerMove = true;
                printBoard();
                checkWinner();
				return;
			}
		}
	}
	else if (combos[6] === -1 && isOneEmpty(6)) {
		for (var j = 0; j < 3; j++) {
			if (board[j][j] == 0) {
				board[j][j] = -1;
				moves++;
				set_combos();
                playerMove = true;
                printBoard();
                checkWinner();
				return;
			}
		}
	}
	else if (combos[7] === -1 && isOneEmpty(7)) {
		for (var j = 0, x = 2; j < 3; j++, x--) {
			if (board[j][x] == 0) {
				board[j][x] = -1;
				moves++;
				set_combos();
                playerMove = true;
                printBoard();
                checkWinner();
				return;
			}
		}
	}
	else if(moves === 2){
		if (board[1][1] == 0) {
			board[1][1] = -1;
			moves++;
            playerMove = true;
            printBoard();
            checkWinner();
			return;
		}
		var randomNum = Math.floor(Math.random() * (4 - 1 + 1) + 1);
		var madeMove = false;
		while (madeMove === false) {
			randomNum = Math.floor(Math.random() * (4 - 1 + 1) + 1);
			if (randomNum === 1 && board[0][0] === 0) {
				board[0][0] = -1;
				moves++;
				madeMove = true;
                playerMove = true;
                printBoard();
                checkWinner();
				return;
			}
			else if (randomNum === 2 && board[0][2] === 0) {
				board[0][2] = -1;
				moves++;
				madeMove = true;
                playerMove = true;
                printBoard();
                checkWinner();
				return;
			}
			else if (randomNum === 3 && board[2][0] === 0) {
				board[2][0] = -1;
				moves++;
				madeMove = true;
                playerMove = true;
                printBoard();
                checkWinner();
				return;
			}
			else if (randomNum === 4 && board[2][2] === 0) {
				board[2][2] = -1;
				moves++;
				madeMove = true;
                playerMove = true;
                printBoard();
                checkWinner();
				return;
			}
		}
	}
	else {
		for (var j = 0; j < 3; j++) {
			for (var i = 0; i < 3; i++) {
				if (board[j][i] == 0) {
					board[j][i] = -1;
					moves++;
                    playerMove = true;
                    printBoard();
                    checkWinner();
					return;
				}
			}
		}
	}
}

function isOneEmpty(x){
    if (x === 0) {
		if ((board[0][0] === 0) || (board[0][1] === 0) || (board[0][2] === 0))
			return true;
		else
			return false;
	}
	else if (x === 1) {
		if ((board[1][0] === 0) || (board[1][1] === 0) || (board[1][2] === 0))
			return true;
		else
			return false;
	}
	else if (x === 2) {
		if ((board[2][0] === 0) || (board[2][1] === 0) || (board[2][2] === 0))
			return true;
		else
			return false;
	}
	else if (x === 3) {
		if ((board[0][0] === 0) || (board[1][0] === 0) || (board[2][0] === 0))
			return true;
		else
			return false;
	}
	else if (x === 4) {
		if ((board[0][1] === 0) || (board[1][1] === 0) || (board[2][1] === 0))
			return true;
		else
			return false;
	}
	else if (x === 5) {
		if ((board[0][2] === 0) || (board[1][2] === 0) || (board[2][2] === 0))
			return true;
		else
			return false;
	}
	else if (x === 6) {
		if ((board[0][0] === 0) || (board[1][1] === 0) || (board[2][2] === 0))
			return true;
		else
			return false;
	}
	else if (x === 7) {
		if ((board[0][2] === 0) || (board[1][1] === 0) || (board[2][0] === 0))
			return true;
		else
			return false;
	}
}

window.addEventListener('load', function(e) {

	window.applicationCache.addEventListener('updateready', function(e) {
	  if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
		// Browser downloaded a new app cache.
		// Swap it in and reload the page to get the new hotness.
		window.applicationCache.swapCache();
		if (confirm('A new version of this site is available. Load it?')) {
		  window.location.reload();
		}
	  } else {
		// Manifest didn't changed. Nothing new to server.
	  }
	}, false);
  
  }, false);