var no1=Math.floor(Math.random()*6)+1;
var no2=Math.floor(Math.random()*6)+1;
var name1="images/"+"dice"+no1+".png";
var image1=document.querySelector(".img1");
image1.setAttribute("src",name1);
var name2="images/"+"dice"+no2+".png";
var image2=document.querySelector(".img2");
image2.setAttribute("src",name2);

if(no1>no2)
{    
    document.querySelector("h1").innerHTML="Player1 wins!";
}
else if(no2>no1)
{
    document.querySelector("h1").textContent="Player2 wins!";
}
else
{
    document.querySelector("h1").textContent="you both wins!";
}
