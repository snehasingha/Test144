function preload() {
	mario_gameover = loadSound("gameover.wav");	//C143
	mario_jump = loadSound("jump.wav"); //C143
	mario_coin = loadSound("coin.wav"); //C143
	mario_kick = loadSound("kick.wav");	//C143
	mario_die = loadSound("mariodie.wav");
	world_start = loadSound("world_start.wav");//C139
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);//C139
	canvas.parent('canvas'); // C139 A way of setting the container for the element

	instializeInSetup(mario); // will set up all the required variables and functions needed for mario game
	
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);

}

function modelLoaded() {
	console.log('Model Loaded!');
  }

  function gotPoses(results)
  {
	if(results.length > 0)
	{
	  console.log(results);
	  noseX = results[0].pose.nose.x;
	  noseY = results[0].pose.nose.y;
	}
  }
   
function draw() {
	game();
}

//To be done in C141
//game()
//startGame()

//To be done in C142
//1. Function preload(world_start)(characters.js)
//2. If condition(changing keydown)
//3. Press any arrow key(press start button)
//4. Control left and right(if character.live and function jumping)(control.left)
//Changed the control of starting game from “Pressing any arrow keys” TO “Pressing play button”
//Change the control of the mario for moving left - from using “left arrow key” To “x coordinate of nose”
//Change the control of the mario for moving right - from using “right arrow key” To “x coordinate of nose”
//Change the control of the mario for moving up - from using “up arrow key” To “y coordinate of nose”

//To be done in C143
//1.Adding code for loading the music file of:
//1. Mario Jumping
//2. Mario collection coins
//3. Gameover
//4. Mario dying
//5. Mario killing enemies









