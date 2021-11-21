function startNewGame() {
    if (players[0].name === '' || players[1].name === '') {
        alert('You can\'t get in without ID!');
        return;
    }

    gameAreaElement.style.display = 'block';
}