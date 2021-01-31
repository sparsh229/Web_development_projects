var randomnumber1=Math.floor(Math.random()*6)+1;
var randomnumber2=Math.floor(Math.random()*6)+1;
var imageno1="images/dice"+randomnumber1+".png";
var imageno2="images/dice"+randomnumber2+".png";
document.querySelector(".img1").setAttribute("src",imageno1);
document.querySelector(".img2").setAttribute("src",imageno2);
if(randomnumber1===randomnumber2){
  document.querySelector("h1").innerHTML="Draw!";
}
else if(randomnumber1<randomnumber2){
  document.querySelector("h1").innerHTML="Player 2 wins";
}
else if(randomnumber1>randomnumber2){
  document.querySelector("h1").innerHTML="Player 1  wins";
}
