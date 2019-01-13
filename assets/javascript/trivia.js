$(document).ready(function(){

    // Create Fighter Objects Constructor
    function createQuestion(question, answer, fakeA1, fakeA2, fakeA3){
        this.question = question;
        this.answer = answer;
        this.fakeA1 = fakeA1;
        this.fakeA2 = fakeA2;
        this.fakeA3 = fakeA3;
        this.answerImg = answerImg;
    }

    var qSBTB = new createQuestion(
        'On the hit show "Saved by the Bell" what diner did all the students hang out at?',
        'The Max',
        'The Peach Pit',
        'Al\'s Diner',
        'Moe\'s Tavern',
        '../assets/images/sbtb.png'
    )

    var qET = new createQuestion(
        'What was E.T\'s favorite candy?',
        'Reeses Pieces',
        'M&Ms',
        'Baby Ruth',
        'Snickers',
        '../assets/images/et.jpg'
    )

    var qBTTF = new createQuestion(
        'What speed did Marty have to reach in order to activate the flux capacitor?',
        '88 mph',
        '1.21 gigawatts',
        '66 mph',
        '100 mph',
        '../assets/images/bttf.jpg'
    )

    var qHEMAN = new createQuestion(
        'What was the name of the castle that gave He-Man his powers?',
        'Greyskull',
        'Howl\'s',
        'Crystal Castle',
        'The Royal Castle',
        '../assets/images/heman.jpg'
    )

    var qATARI = new createQuestion(
        'Which one of the following was NOT a game available on Atari?',
        'Galaga',
        'Centiped',
        'Space Invaders',
        'Asteroids',
        '../assets/images/atari.jpg'
    )

    var qINVENTIONS = new createQuestion(
        'Which of the following was NOT invented in the 80s?',
        'Cassett Tapes',
        'Mobile Phones',
        'Apple Computers',
        'Disposable Camera',
        '../assets/images/inventions.jpg'
    )

    var qKIX = new createQuestion(
        'Which cereal was "kid tested, mother approved"?',
        'Kix',
        'Cheerios',
        'Fruity Pebbles',
        'Life',
        '../assets/images/kix.jpg'
    )

    var qMARIO = new createQuestion(
        'In which video game did Mario (of Mario Brothers fame) first appear?',
        'Donkey Kong',
        'Mario Bros',
        'Punch Out',
        'Balloon Fight',
        '../assets/images/mario.jpg'
    )

    var qMASCOT = new createQuestion(
        'What commercial mascots got so popular they had their own prime-time special?',
        'California Raisins',
        'Snap, Crackle and Pop',
        'The M&M Guys',
        'Tony the Tiger',
        '../assets/images/mascot.jpg'
    )

    var qYKDTOTV = new createQuestion(
        '"Sliming" originated on what Nickelodeon show?',
        'You Can\'t Do That on Television',
        'Out of Control',
        'Double Dare',
        'Ghost Busters',
        '../assets/images/ykdtotv.jpg'
    )

    // Add all the question objects to the questions Array
    var questions = [qSBTB, qET, qHEMAN, qATARI, qBTTF, qINVENTIONS, qKIX, qMARIO, qMASCOT, qYKDTOTV];
    









// End of Document load
})