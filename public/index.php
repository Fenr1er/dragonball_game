<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Dragonball Game</title>
</head>
<body>
    <header>
        <h1>Dragonball Game</h1>
    </header>

    <main>
        <section id="mainMenu">
            <button id="singleBtn">Single Player</button>
            <button id="multiBtn">Multiplayer</button>
            <button id="scoreBtn">Score</button>
            <button id="creditsBtn">Credits</button>
        </section>

        <section id="characterSelection" style="display: none;">
            <!-- Charakterauswahl wird hier dynamisch gefüllt -->
        </section>

        <button id="startGameBtn" style="display: none;">Start Game</button>

        <section id="gameArea" style="display: none;">
            <!-- Spielbereich, der nach der Charakterauswahl angezeigt wird -->
        </section>
    </main>

    <footer>
        <p>&copy; 2024 Dragonball Game by Koller Michael</p>
        <p>Just for training my Skills</p>
    </footer>

    <script src="js/game.js"></script>
</body>
</html>
