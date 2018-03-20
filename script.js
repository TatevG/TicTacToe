window.onload = function (d) {
    player = true;
    function ticTacToe(arr) {
        for (var i = 0; len = arr.length; i++) {
            arr[i].innerText = "";
        }
    }
    d.onclick = function (e) {
        if ((e.target.className == "cell") && (e.target.innerText == "")) {
            if (player) {
                e.target.innerText = "X";
                player = false;
            } else {
                e.target.innerText = "O";
                player = true;
            }
            var arr = d.querySelectorAll('.cell');
            let newArr = [];
            for (var i = 0; i < arr.length; i++) {
                newArr[i] = arr[i].innerText;
            }
            if ((newArr[0] == "X" && newArr[1] == "X" && newArr[2] == "X") ||
                (newArr[3] == "X" && newArr[4] == "X" && newArr[5] == "X") ||
                (newArr[6] == "X" && newArr[7] == "X" && newArr[8] == "X") ||
                (newArr[0] == "X" && newArr[3] == "X" && newArr[6] == "X") ||
                (newArr[1] == "X" && newArr[4] == "X" && newArr[7] == "X") ||
                (newArr[2] == "X" && newArr[5] == "X" && newArr[8] == "X") ||
                (newArr[0] == "X" && newArr[4] == "X" && newArr[8] == "X") ||
                (newArr[2] == "X" && newArr[4] == "X" && newArr[6] == "X")) {
                document.getElementById("result").innerHTML = "X is win!";
                // ticTacToe(arr); 
            }
            if ((newArr[0] == "O" && newArr[1] == "O" && newArr[2] == "O") ||
                (newArr[3] == "O" && newArr[4] == "O" && newArr[5] == "O") ||
                (newArr[6] == "O" && newArr[7] == "O" && newArr[8] == "O") ||
                (newArr[0] == "O" && newArr[3] == "O" && newArr[6] == "O") ||
                (newArr[1] == "O" && newArr[4] == "O" && newArr[7] == "O") ||
                (newArr[2] == "O" && newArr[5] == "O" && newArr[8] == "O") ||
                (newArr[0] == "O" && newArr[4] == "O" && newArr[8] == "O") ||
                (newArr[2] == "O" && newArr[4] == "O" && newArr[6] == "O")) {
                document.getElementById("result").innerHTML = "O is win!";
                // ticTacToe(arr); 
            }
        }
    }
}(document);