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
    var questions = [];
    var mixAnswers = [];
    var currentQuestion = undefined;
    var qCounter = 0;
    var gameOver = false;
    var intervalId;
    var clockRunning = false;
    var roundTime = 10;
    var interimTime;


    // jQuery element gathering
    var $notifyDivEl = $("#notifyDiv")  
    var $questionDivEl = $("#questionDiv");
    var $questionLabelEl = $("#question-label");
    var $questionEl = $("#question");
    var $answer1El = $("#a1");
    var $answer2El = $("#a2");
    var $answer3El = $("#a3");
    var $answer4El = $("#a4");
    var $timerEl = $("#timer");
    

    function newGame(){
    // RESET GAME COUNTERS AND ARRAYS
        $questionDivEl.hide();
        $questionEl.hide();
        $notifyDivEl.append('<p class="pt-2 pt-md-3 px-md-3">You have 10 questions with 30 seconds to select the correct answer below.<p><p class="text-white pt-3 px-2">Click to Start the Game');
        $timerEl.text(roundTime);
        questions = [qTWY, qET, qHEMAN, qATARI, qBTTF, qINVENTIONS, qKIX, qMARIO, qMASCOT, qYKDTOTV];
        console.log(questions);
    }

    function newRound() {
        $questionDivEl.show();
        $questionEl.show();
        $notifyDivEl.text(""); // clear the contents of the div
        $notifyDivEl.hide();

        getRandQuestion();
        if (!gameOver){
            displayQuestion(currentQuestion);
            if(!clockRunning){
                intervalId = setInterval(count,1000);    
                // setTimeout(count,10000);
                clockRunning = true;
            }
        }
    }

    function count() {
        //  TODO: Use setInterval to start the count here and set the clock to running.
        if(roundTime === 0){
            //Time's up wrong answer sequence
            clearInterval(intervalId);
            $timerEl.text("X");
            wrongAnswer();
        }
        else{
            // Time left, keep counting down to 0
            roundTime--;
            $timerEl.text(roundTime);
        }
    }


    function displayQuestion(qObj){
        qCounter++
        mixAnswers.sort(function(a,b){return 0.5 - Math.random()});    //Random Sort Answers in array to change locations
        $questionLabelEl.text("Question #" + qCounter );    
        $questionEl.text(qObj.question);
        $answer1El.text(mixAnswers[0]).attr("answerName",mixAnswers[0]);
        $answer2El.text(mixAnswers[1]).attr("answerName",mixAnswers[1]);
        $answer3El.text(mixAnswers[2]).attr("answerName",mixAnswers[2]);
        $answer4El.text(mixAnswers[3]).attr("answerName",mixAnswers[3]);

    }

    function wrongAnswer(){
        // user guessed wrong or time ran out
        $notifyDivEl.show();
        $notifyDivEl.append("<p>Wrong, the correct answer is " +currentQuestion.answer+ "</p>");

        roundOver();
    }



    function getRandQuestion() {
       if (questions.length === 0){
        // Game Over
        gameOver();
       }
       else{
            var randNum = Math.floor(Math.random() * (questions.length -1));
            currentQuestion = questions[randNum];
            questions.splice(questions.indexOf(currentQuestion),1);
            mixAnswers = [currentQuestion.answer, currentQuestion.fakeA1, currentQuestion.fakeA2, currentQuestion.fakeA3];
            console.log(currentQuestion);
            console.log(questions);
            return currentQuestion;
       }
    }


    function roundOver() {
        // display answered Right or Wrong along with displaying the AnswerImg
        $notifyDivEl.show();
        $notifyDivEl.append('<img id="' +currentQuestion.title+ '" class="notifyImgs" src="' +currentQuestion.answerImg+ '" />');
    }

    function gameOver() {
        // display Total Correct
        gameOver = true;
        alert("Game Over");
    }
   

    // Initialize Game 
    
    newGame();




    $(document).on("click", '#notifyDiv', function(){
        // Perform this action once to start the trivia game.  Don't want this div clicked again though 
            newRound();

    });






    //Program Actions

   







// End of Document load
});