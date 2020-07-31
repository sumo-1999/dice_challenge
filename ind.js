var randomno=Math.floor((Math.random()*6))+1;
var randimg="dice"+ randomno+".png";
var randimgsrc = 'images//'+randimg;
var image1 = document.querySelectorAll('img')[0];
var image2=document.querySelectorAll('img')[1];
image1.setAttribute("src",randimgsrc);

var randomno2=Math.floor(Math.random()*6)+1;
var randimg2src="images/dice"+randomno2+".png";
image2.setAttribute("src",randimg2src);
//console.log(image1);
if (randomno>randomno2)
{
  document.querySelector('h1').innerHTML= "🚩 Player1 wins!";
}
else if(randomno<randomno2)
{
  document.querySelector('h1').innerHTML= "Player2 wins! 🚩";
}
else
{
  document.querySelector('h1').innerHTML= "Match Draw!"
}
