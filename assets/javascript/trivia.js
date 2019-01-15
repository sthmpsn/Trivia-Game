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
        'On the show "The Wonder Years", who was the actress who played Kevin\'s love interest?',
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
        'Cassette Tapes',
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
    var intervalId;
    var currentRoundTime;
    var currentQuestion = undefined;
    var userAnswer = "";
    var qCounter = 0;
    var defaultRoundTime = 10;
    var scoreCount = 0;
    var clockRunning;
    var isGameOver;

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
        isGameOver = false;
        qCounter = 0;
        clockRunning = false;
        $timerEl.addClass("invisible");
        $questionDivEl.addClass("invisible");
        $notifyDivEl.append('<p class="pt-2 pt-md-3 px-md-3">You have 10 questions with <span class="text-white">10 seconds</span> to select the correct answer below.<p><p class="text-white pt-3 px-2">Click to Start the Game</p>');
        questions = [qTWY, qET, qHEMAN, qATARI, qBTTF, qINVENTIONS, qKIX, qMARIO, qMASCOT, qYKDTOTV];
        console.log(questions);
    }

    function newRound() {
        userAnswer = "";
        console.log("newRound() Called");
        currentRoundTime = defaultRoundTime;
        console.log(currentRoundTime);
        $timerEl.removeClass("invisible");
        $timerEl.text(currentRoundTime);
        $questionDivEl.removeClass("invisible");
        $questionEl.removeClass("invisible");
        $notifyDivEl.text(""); // clear the contents of the div
        $notifyDivEl.addClass("invisible");
        $notifyDivEl.removeClass("bg-success");
        $notifyDivEl.removeClass("bg-danger");
        getRandQuestion();
        displayQuestion(currentQuestion);
        intervalId = setInterval(count,1000);
        console.log(intervalId);    
    }    

    function count() {
        //  TODO: Use setInterval to start the count here and set the clock to running.
        if(currentRoundTime === 0 || userAnswer != ""){
            //Time's up wrong answer sequence
            $timerEl.addClass("invisible");
            clearInterval(intervalId);
            console.log("intervalID: " +intervalId);
            clockRunning = false;
            timeCheck();
        }
        else{
            // Time left, keep counting down to 0
            currentRoundTime--;
            $timerEl.text(currentRoundTime);
            clockRunning = true;
        }
    }

    // Time check function needed because when putting logic in the "count()" function it would displayAnswer multiple times
    function timeCheck(){
        if (currentRoundTime === 0){
        displayAnswer(userAnswer);  // Check if correct/wrong
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

    function displayAnswer(){
        $notifyDivEl.removeClass("invisible");
        $timerEl.addClass("invisible");
        if (userAnswer === currentQuestion.answer){
            //if correct show this
            $notifyDivEl.addClass("bg-success");
            $notifyDivEl.append('<p class="text-white">You selected the Correct answer!</p>');
            console.log("CORRECT!!!");
            scoreCount++;
            
        }
        else{
            //if wrong show this
            $notifyDivEl.addClass("bg-danger");
            $notifyDivEl.append('<p class="text-white">Wrong, the correct answer is ' +currentQuestion.answer+ '</p>'); 
            console.log("WRONG");       
        }
        console.log("Score: " + scoreCount);
        roundOver();
    }

    function getRandQuestion() {
       if (questions.length === 0){
            // Game Over
            isGameOver = true;
            roundOver();
       }
       else{
            var randNum = Math.floor(Math.random() * (questions.length));
            currentQuestion = questions[randNum];
            questions.splice(questions.indexOf(currentQuestion),1);
            mixAnswers = [currentQuestion.answer, currentQuestion.fakeA1, currentQuestion.fakeA2, currentQuestion.fakeA3];
            console.log(currentQuestion.title);
            console.log(questions);
       }
    }


    function roundOver() {
        // display answered Right or Wrong along with displaying the AnswerImg
        $notifyDivEl.removeClass("invisible");
        clockRunning = false;
        if (!isGameOver){
            $notifyDivEl.append('<img id="' +currentQuestion.title+ '" class="notifyImgs" src="' +currentQuestion.answerImg+ '" />');
            setTimeout(newRound, 5000);   // Wait 5 seconds after displaying the notification
        }
        else {
            gameOver();
        }
    }

    function gameOver() {
        // display Total Correct
        isGameOver = true;  //set boolean to true so that the div becomes clickable for a restart of the game
        $timerEl.addClass("invisible");
        clearInterval(intervalId);
        $notifyDivEl.removeClass("invisible")
        $notifyDivEl.append('<p class="pt-2 pt-md-3 px-md-3">Game Over, you scored: ' +scoreCount+ ' out of ' +qCounter+ '<p><button type="button" id="bttn-restart" class="buttons mt-4">RESTART</button>');
    }
   

    // Initialize Game 
    
    newGame();




    $(document).on("click", '#notifyDiv', function(){
        // Perform this action once to start the trivia game.  Don't want this div clicked again though 
            if (qCounter === 0){
                newRound();
            }
    });

    $(document).on("click", '.answers', function(){
        // On click action of an answer
        if(!isGameOver){
            userAnswer = $(this).attr("answerName");
            console.log(userAnswer);
            displayAnswer(userAnswer);  // Check if correct/wrong
        }
    });

    $(document).on("click", '#bttn-restart', function(){
        // Perform this action once to start the trivia game.  Don't want this div clicked again though 
            if (isGameOver){
                newGame();
            }
    });


// End of Document load
});