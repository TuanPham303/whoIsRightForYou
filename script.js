var male = new Vue ({
  el: "#male",
  data: {
    questions: [
      "Choose the personality that best match you",
      "Which quality do you find most attractive?",
      "Pick a random word",
      "What matters to you more?",
      "What do you do for fun?",
      "Where would you go on date?",
      "Choose your favourite romantic location",
      "Pick one",
      "What is the most important trait in a girl?",
      "What is the top thing you want her to be good at?",
    ],
    choices: [
      ["Open and outgoing","Shy / Introvert","Nerdy / dorky","Carefree","Funny and social"],
      ["Drop dead gorgeous","Good at sport","Clever and quick witted","Love playing video game","Great sense of humor"],
      ["Elegant","Unique","Painting","Understanding","Fantasy"],
      ["Totally looks!","Fit and healthy","Intelligence","Personality","Understanding"],
      ["Go out with friends","Play some kind of sports","Read a book or comic","Play game or Netflix and chill","Play pranks on friends"],
      ["At the beach","Dinner at a restaurant","Go to Comicon / Movie","Amusement park","Stay home and cuddle"],
      ["Snowy mountain","Beach with crytal clear water","Paris","A castle","Bonfire on the beach"],
      ["Art","Dance","Music","Romance","Comedy"],
      ["Her social standing","Active and energetic","Smart but not dorky","Confidence","Always up to play video games"],
      ["Keeping you happy","Flirting and romance","Singing","Doing fun stuffs","Being herself"],
    ],
    i: 0,
    showQuiz: false,
    score: 0,
    countDown: 15
  },
  methods: {
    nextQuestion: function(){
      setInterval(function(){
        male.i++;
        if(male.i === male.questions.length){
          male.i = 10;
          result.showResult = true;
        }

        var ele = document.getElementsByClassName('choice');
        for (var i = 0; i < ele.length; i++) {
          ele[i].checked = false;
        }
      }, 15000);
      setInterval(function (){
        male.countDown--;
        if (male.countDown === 0) {
          male.countDown = 15;
        }
      }, 1000);
    },
    toggleQuiz: function(){
      male.showQuiz = true;
    },
    result: function(e){
      var choice = e.target.value;
      if(choice === male.choices[male.i][0]){
        male.score +=1;
      }
      if(choice === male.choices[male.i][1]){
        male.score +=2;
      }
      if(choice === male.choices[male.i][2]){
        male.score +=3;
      }
      if(choice === male.choices[male.i][3]){
        male.score +=4;
      }
      if(choice === male.choices[male.i][4]){
        male.score +=5;
      }
      console.log(male.score);
      if (10 <= male.score && male.score <= 16) {
        result.resultId = 0;
      }
      if (17 <= male.score && male.score <= 25) {
        result.resultId = 1;
      }
      if (26 <= male.score && male.score <= 33) {
        result.resultId = 2;
      }
      if (34 <= male.score && male.score <= 42) {
        result.resultId = 3;
      }
      if (43 <= male.score && male.score <= 50) {
        result.resultId = 4;
      }
    }
  }
});

var result = new Vue ({
  el: "#result",
  data: {
    showResult: false,
    maleResult: [
      "Hot girl - You like your girl to be SMOKING hot and attractive. She is someone who makes heads turn when she walks down the street. You are very appearance focused.",
      "Athletic girl - A sporty or confident girl is exactly what you are looking for. You like the fact that she looks after herself and cares about her health.",
      "Smart girl - You are attracted to girl that knows what she is talking. You like someone who can challenge you intellectually and go toe-to-toe with you.",
      "Cool girl - You love girls that love things you do, and is fun to be around. She is someone you can watch a football game together or know how to handle a game console. She is pretty, laid back and carefree.",
      "Cute and funny girl - Your perfect girl is someone who is cute and have a great sense of humor. There is just something about her carefree personality and sense of humor that makes you crazy about her."
    ],
    imgUrlGirl: [
      "img/hotGirl.jpg",
      "img/athleticGirl.jpg",
      "img/smartGirl.jpg",
      "img/coolGirl.jpg",
      "img/cuteGirl.jpg"
    ],
    resultId: 0
  },
  methods: {
    quit: function(){
      location.reload();
    }
  }
});