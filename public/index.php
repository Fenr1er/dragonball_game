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
            <form action="" method="post">
            <button type="submit" id="scoreBtn">Score</button>
            </form>
            <button id="creditsBtn">Credits</button>
        </section>
        <section id="characterSelection">
        <!-- Charakterauswahl wird hier dynamisch gefüllt -->
        </section>
        <button id="startGameBtn" style="display: none;">Start Game</button>

        <section id="gameArea" style="display: none;">
        <!-- Spielbereich, der nach der Charakterauswahl angezeigt wird -->
        </section>

        <script src="js/game.js"></script>
        <script>
            // JavaScript für die Charakterauswahl und Spielinitialisierung

        </script>




    </main>


    <footer>
        <p>&copy; 2024 Dragonball Game by Koller Michael</p>
        <p>Just for train my Skills</p>
    </footer>

    <?php
        // Angenommen, die Score-Information wird per POST-Anfrage gesendet
if (isset($_POST['scoreBtn'])) {
    $name = $_POST['name'];
    $character = $_POST['character'];
    $score = $_POST['score'];

    $scoreString = "$name, $character, $score\n";
    file_put_contents('scores.txt', $scoreString, FILE_APPEND);
}


    ?>
</body>

</html>