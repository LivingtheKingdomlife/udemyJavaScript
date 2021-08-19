//alert('Hello Snowball!');

//dog age vs human years
var dogAge = prompt('How old is your dog?');
var humanAge = ((dogAge - 2) * 4) + 21;
alert('Your dog is ' + humanAge + ' in human years!');

//twitter  count
var tweet = prompt('Compose your tweet')
var twitter = tweet.length;
var tweetCount = twitter - 280;
alert('You have used: ' + twitter + ' characters.' + ' You have: ' 
+ tweetCount + ' characters left!'); 


//lowercase name in prompt
var myName = prompt('What is your name?');
var firstChar = myName.slice(0,1);
var upperCaseFirstChar = firstChar.toUpperCase();
var restOfName = myName.slice(1,myName.length);
alert('Hello, ' + upperCaseFirstChar + restOfName)
