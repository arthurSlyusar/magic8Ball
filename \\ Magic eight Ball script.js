\\ Magic eight Ball script

let userName = "Arthur"; 

 userName ? console.log(`Hello ${userName}.`) : console.log('Hello!');

const userQuestion ="Am I evil?";

console.log(`${userName} You have a question. And question is: ${userQuestion}`);

var randomNumber = Math.floor(Math.random() * 8);

let eightBall ="";

/*switch (randomNumber)
{

case 0:
    randomNumber = 'It is certain';
    break;
case 1:
    randomNumber = 'It is decidedly so';
    break;
case 2:
    randomNumber = 'Reply hazy try again';
    break;
case 3:
    randomNumber = 'Cannot predict now';
    break;
case 4:
    randomNumber = 'Do not count on it';
    break;
case 5:
    randomNumber = 'My sources say no';
    break;
case 6:
  randomNumber = 'Outlook not so good';
    break;
case 7:
  randomNumber = 'Signs point to yes';
    break;
}  */

if (randomNumber = 0) { randomNumber = 'It is certain';
}
else if (randomNumber = 1) { randomNumber = 'It is decidedly so';
}
else if (randomNumber = 2) { randomNumber =  'Reply hazy try again';
}
else if (randomNumber = 3) { randomNumber =  'Cannot predict now';
}
else if (randomNumber = 4) { randomNumber =  'Do not count on it';
}
else if (randomNumber = 5) { randomNumber =  'My sources say no';
}
else if (randomNumber = 6) { randomNumber =  'Outlook not so good';
}
else if (randomNumber = 7) { randomNumber = 'Signs point to yes';
}



eightBall = randomNumber;
 console.log(`MagicBall's answer is: ${eightBall}`);

