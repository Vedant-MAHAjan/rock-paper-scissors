

//rock paper scissors
function rpsGame(yourChoice)
{
    console.log(yourChoice);
    var humanChoice, botChoice;

    humanChoice = yourChoice.id;

    botChoice = pickChoice(decimal_to_int());
    console.log("Computer choice ",botChoice);

    results = decideWinner(humanChoice, botChoice);
    console.log(results);

    message = finalMessage(results);

    rpsFrontEnd(humanChoice, botChoice, message);
}

function decimal_to_int()
{
    return Math.floor(Math.random() * 3);
}

//computer choice found
function pickChoice(number)           // number is the returned value of decimal_to_int function
{
    return ["rock","paper","scissors"][number];
}

//logic behind deciding the winner based on the choices
function decideWinner(yourChoice, computerChoice)
{
    var rpsData = {
        "rock" : {"scissors":1, "rock":0.5, "paper":0},
        "paper" : {"rock":1, "paper":0.5, "scissors":0},
        "scissors" : {"paper":1, "scissors":0.5, "rock":0}
    };

    var yourScore = rpsData[yourChoice][computerChoice];
    var computerScore = rpsData[computerChoice][yourChoice];

    return [yourScore,computerScore];
}

//array results stores the score of both the player and the bot 
//results array used as the argument into finalMessage()
function finalMessage([yourScore, computerScore])
{
    if(yourScore === 0)
    {
        return {"message" : "You Lost!", "color" : "red"};
    }
    else if (yourScore === 0.5)
    {
        return {"message" : "You Tied!", "color" : "yellow"};
    }
    else
    {
        return {"message" : "You Won!", "color" : "green"};
    }
}

//front end displays the player's choice, the bot's choice and the message of who won the round

//since humanChoice and botChoice will act as arguments here as humanImageChoice is passed as argument
//the humanChoice will contain the id of either stone, paper or scissors
function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage)
{
    var imagesDatabase = 
    {
        "rock" : document.getElementById("rock").src,
        "paper" : document.getElementById("paper").src,
        "scissors" : document.getElementById("scissors").src
    }

    //remove all the 3 previous images
    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissors").remove();

    //create new div elements to display the results of the game
    var humanDiv = document.createElement("div");
    var botDiv = document.createElement("div");
    var messageDiv = document.createElement("div");

    //put the html code of the images selected by human as well as computer 
    humanDiv.innerHTML = "<h2>Your Choice <h2> <img src='" + imagesDatabase[humanImageChoice] 
    + "' height=150 width=150 style='box-shadow: 0px 10px 50px blue;'>"

    messageDiv.innerHTML = "<h1 style='color: " + finalMessage["color"] 
    + "; font-size: 60px; padding : 30px; '>" + finalMessage["message"] + "</h1>"

    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + 
    "' height=150 width=150 style='box-shadow: 0px 10px 50px black;'><br><br><h2>Bot Choice <h2>"

    //append the images to the new created divs in the flex box
    document.getElementById('flex-box-id').appendChild(humanDiv);
    document.getElementById('flex-box-id').appendChild(messageDiv);
    document.getElementById('flex-box-id').appendChild(botDiv);
}




