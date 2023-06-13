var number_of_players = 0;
function add_player() {
    number_of_players++;
    const name = document.createElement("td");
    name.innerHTML = "Player " + number_of_players
    document.getElementById("players").appendChild(name);
    const money = document.createElement("td");
    money.innerHTML = "20000";
    document.getElementById("money").appendChild(money);
    const bet = document.createElement("td");
    bet.innerHTML = "0";
    document.getElementById("bets").appendChild(bet);
    const raise = document.createElement("td");
    const input_box = document.createElement("input");
    input_box.type = "number";
    const raise_button = document.createElement("button");
    raise_button.innerHTML = "raise";
    raise.appendChild(input_box);
    raise.appendChild(raise_button);
    document.getElementById("raise").appendChild(raise);
    const win = document.createElement("td");
    const win_button = document.createElement("button");
    win_button.innerHTML = "win";
    win.appendChild(win_button);
    document.getElementById("win").appendChild(win);
}