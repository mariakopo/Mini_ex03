//throbber

function setup() {
 console.log("Hello World");
 createCanvas(600, 800);
 background(28, 172, 120);
 frameRate(10); //Her kan du indstille hastigheden
}


function draw() {
 fill(28, 172, 120, 40);
 rect(0, 0, width, height);

 //Cirkel Yderst
 push();
 translate(width/2, height/2); //Center af canvas
 var cir = 360/11*(frameCount%11); //Her kan du indstille hvor mange dots du gerne vil have
 rotate(radians(cir));
 noStroke();
 fill(59, 122, 87, 90);
 ellipse(0, 80, 22, 60); //y er distancen fra center
 pop();

//Cirkel Mellem
push();
 translate(width/2, height/2); //Center af canvas
 var cir = 360/11*(frameCount%11); //Her kan du indstille hvor mange dots du gerne vil have
 rotate(radians(cir));
 noStroke();
 fill(227, 249, 136, 90);
 ellipse(0, 50, 25, 25); //y er distancen fra center
 pop();
 
 //Cirkel Inderst
 push();
 translate(width/2, height/2); //Center af canvas
 var cir = 360/11*(frameCount%11); //Her kan du indstille hvor mange dots du gerne vil have
 rotate(radians(cir));
 noStroke();
 fill(227, 255, 0, 80);
 ellipse(0, 30, 20, 20); //y er distancen fra center
 
}