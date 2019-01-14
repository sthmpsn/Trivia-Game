$(document).ready(function(){

    // Create Fighter Objects Constructor
    function createQuestion(title, question, answer, fakeA1, fakeA2, fakeA3, answerImg){
        this.title = title;
        this.question = question;
        this.answer = answer;
        this.fakeA1 = fakeA1;
        this.fakeA2 = fakeA2;
        this.fakeA3 = fakeA3;
        this.answerImg = answerImg;
    }

    var qTWY = new createQuestion(
        'twy',
        'On the hit show "The Wonder Years" what was the real name of actress who played Kevin Arnold\'s female love interest?',
        'Danica McKellar',
        'Alyssa Milano',
        'Alicia Silverston',
        'Lisa Bonet',
        'assets/images/twy.jpg'
    )

    var qET = new createQuestion(
        'et',
        'What was E.T\'s favorite candy?',
        'Reeses Pieces',
        'M&Ms',
        'Baby Ruth',
        'Snickers',
        'assets/images/et.jpg'
    )

    var qBTTF = new createQuestion(
        'bttf',
        'What speed did Marty have to reach in order to activate the flux capacitor?',
        '88 mph',
        '1.21 gigawatts',
        '66 mph',
        '100 mph',
        'assets/images/bttf.jpg'
    )

    var qHEMAN = new createQuestion(
        'heman',
        'What was the name of the castle that gave He-Man his powers?',
        'Greyskull',
        'Howl\'s',
        'Crystal Castle',
        'The Royal Castle',
        'assets/images/heman.jpg'
    )

    var qATARI = new createQuestion(
        'atari',
        'Which one of the following was NOT a game available on Atari?',
        'Galaga',
        'Centiped',
        'Space Invaders',
        'Asteroids',
        'assets/images/atari.jpg'
    )

    var qINVENTIONS = new createQuestion(
        'inventions',
        'Which of the following was NOT invented in the 80s?',
        'Cassett Tapes',
        'Mobile Phones',
        'Apple Computers',
        'Disposable Camera',
        'assets/images/inventions.jpg'
    )

    var qKIX = new createQuestion(
        'kix',
        'Which cereal was "kid tested, mother approved"?',
        'Kix',
        'Cheerios',
        'Fruity Pebbles',
        'Life',
        'assets/images/kix.jpg'
    )

    var qMARIO = new createQuestion(
        'mario',
        'In which video game did Mario (of Mario Brothers fame) first appear?',
        'Donkey Kong',
        'Mario Bros',
        'Punch Out',
        'Balloon Fight',
        'assets/images/mario.jpg'
    )

    var qMASCOT = new createQuestion(
        'mascot',
        'What commercial mascots got so popular they had their own prime-time special?',
        'California Raisins',
        'Snap, Crackle and Pop',
        'The M&M Guys',
        'Tony the Tiger',
        'assets/images/mascot.jpg'
    )

    var qYKDTOTV = new createQuestion(
        'ykdtotv',
        '"Sliming" originated on what Nickelodeon show?',
        'You Can\'t Do That on Television',
        'Out of Control',
        'Double Dare',
        'Ghost Busters',
        'assets/images/ykdtotv.jpg'
    )

    // Add all the question objects to the questions Array
    var questions = [qTWY, qET, qHEMAN, qATARI, qBTTF, qINVENTIONS, qKIX, qMARIO, qMASCOT, qYKDTOTV];
    console.log(questions);
    var currentQuestion = undefined;
    var qCounter = 0;
    var gameOver = false;


    // jQuery element gathering
    var $notifyDivEl = $("#notifyDiv").hide();   // hide the Question image notify div
    var $questionDivEl = $("#questionDiv");
    var $questionLabelEl = $("#question-label");
    var $questionEl = $("#question");
    var $timerEl = $("#timer");

    function newGame(){
    // RESET GAME COUNTERS AND ARRAYS
    
        $questionEl.text("You have 10 questions with 30 seconds to select the correct answer below.");
        $timerEl.text("START");

    }

    function newRound() {
        getRandQuestion();
        if (!gameOver){
        displayQuestion(currentQuestion);
        }
    }

    function gameOver(){
        // display Total Correct
        gameOver = true;
        alert("Game Over");
    }

    function roundOver(){
        // display answered Right or Wrong along with displaying the AnswerImg
        $notifyDivEl.append('<img id="' +this.title+ '" src="' +this.answerImg+ '" />');
        // $notifyDivEl.append('<img id="' +questions[0].title+ '"class="notifyImgs" src="' +questions[0].answerImg+ '" />');
    }

    function displayQuestion(questionObj){
        qCounter++
        $questionLabelEl.text("Question #" + qCounter );    
        $questionEl.text(currentQuestion.question);
        // $notifyDivEl.append('<img id="' +questions[0].title+ '"class="notifyImgs" src="' +questions[0].answerImg+ '" />');

    }

    function getRandQuestion(){
       if (questions.length === 0){
        // Game Over
        gameOver();
       }
       else{
            var randNum = Math.floor(Math.random() * (questions.length - 1));
            currentQuestion = questions[randNum];
            questions.splice(questions.indexOf(currentQuestion),1);
            console.log(currentQuestion);
            console.log(questions);
            return currentQuestion;
       }
    }


   
    
    newGame();

    $timerEl.click(function(){
        // Perform this action once to start the trivia game.  Don't want this div clicked again though 
        startRound();


    });






    //Program Actions

   







// End of Document load
});