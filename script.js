var number_of_players = 0;
function add_player() {
    number_of_players++;
    const name = document.createElement("td");
    name.innerHTML = "Player " + number_of_players
    document.getElementById("players").appendChild(name);

    const money = document.createElement("td");
    money.innerHTML = 20000;
    money.id = "money" + number_of_players;
    document.getElementById("money").appendChild(money);

    const bet = document.createElement("td");
    bet.innerHTML = 0;
    bet.id = "bet" + number_of_players;
    document.getElementById("bets").appendChild(bet);

    const raise = document.createElement("td");
    const input_box = document.createElement("input");
    input_box.type = "number";
    input_box.id = "raise" + number_of_players;
    const raise_button = document.createElement("button");
    raise_button.innerHTML = "raise";
    raise_button.id = number_of_players;
    raise_button.onclick = function() {
        var raise_val = document.getElementById("raise" + raise_button.id).value;
        document.getElementById("money" + raise_button.id).innerHTML -= raise_val;
        document.getElementById("bet" + raise_button.id).innerHTML -= -raise_val;
        document.getElementById("raise" + raise_button.id).value = null;
    }
    raise.appendChild(input_box);
    raise.appendChild(raise_button);
    document.getElementById("raise").appendChild(raise);

    const win = document.createElement("td");
    const win_button = document.createElement("button");
    win_button.innerHTML = "win";
    win.appendChild(win_button);
    document.getElementById("win").appendChild(win);
}