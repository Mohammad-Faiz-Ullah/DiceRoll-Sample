function rollDice(n)
{
    var randomNumber1 = Math.floor(Math.random() * n) +1;
    return randomNumber1;
}

var no1 = rollDice(6);
var no2 = rollDice(6);

if(no1===1)
{
        var ans = document.querySelector(".img1").setAttribute("src","./images/dice1.png");
}
else if(no1===2)
{
    {
        var ans = document.querySelector(".img1").setAttribute("src","./images/dice2.png");
    }
}
else if(no1===3)
{
    {
        var ans = document.querySelector(".img1").setAttribute("src","./images/dice3.png");
    }
}
else if(no1===4)
{
    {
        var ans = document.querySelector(".img1").setAttribute("src","./images/dice4.png");
    }
}
else if(no1===5)
{
    {
        var ans = document.querySelector(".img1").setAttribute("src","./images/dice5.png");
    }
}
else
{
    {
        var ans = document.querySelector(".img1").setAttribute("src","./images/dice6.png");
    }
}


if(no2===1)
    {
            var ans = document.querySelector(".img2").setAttribute("src","./images/dice1.png");
    }
    else if(no2===2)
    {
        {
            var ans = document.querySelector(".img2").setAttribute("src","./images/dice2.png");
        }
    }
    else if(no2===3)
    {
        {
            var ans = document.querySelector(".img2").setAttribute("src","./images/dice3.png");
        }
    }
    else if(no2===4)
    {
        {
            var ans = document.querySelector(".img2").setAttribute("src","./images/dice4.png");
        }
    }
    else if(no2===5)
    {
        {
            var ans = document.querySelector(".img2").setAttribute("src","./images/dice5.png");
        }
    }
    else
    {
        {
            var ans = document.querySelector(".img2").setAttribute("src","./images/dice6.png");
        }
    }


    if(no1 > no2)
        {
            document.querySelector("h1").innerHTML="Player 1 wins! 🚩";
        }
        else if(no1 < no2)
        {
            document.querySelector("h1").innerHTML="Player 2 wins! 🚩";
        }
        else
        {
            document.querySelector("h1").innerHTML="Draw!!";
        }