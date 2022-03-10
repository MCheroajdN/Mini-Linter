let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

//variable to store individual words
const storyWords = story.split(" ");

//to log number of words in storyWords
console.log("There are " + storyWords.length + " words in the story");

//to filter out unnecessary words
//method 1
 let betterWords = [];

betterWords = storyWords.filter(word => {
  if(unnecessaryWords.includes(word) ) {

  }else{
  return betterWords.push(word)}
 }) ;
console.log(betterWords);
console.log(betterWords.length);

//method 2
//OR TO USE ES6 for more concise approach:

/*
let betterWords = storyWords.filter(word => {
  return !unnecessaryWords.includes(word)
});

console.log(betterWords);
console.log(betterWords.length)
*/


//to count overused words and log it to check

//METHOD 1: This will give the total of the overusedWords

//let overusedWordsCount = [];
/*
storyWords.filter(word => {
  if (overusedWords.includes(word) ) {
    return overusedWordsCount.push(word)  }
});
console.log(overusedWordsCount.length);
console.log(overusedWordsCount);
*/

//METHOD 2: This will give individual number of each occurrense of overusedWords

let reallyCounter = 0;
let veryCounter = 0;
let basicallyCounter = 0;

for (word of storyWords) {
  if (word === "really") {
    reallyCounter += 1 
    } else {
  if (word === "very") {
    veryCounter += 1
  } else {
  if (word === "basically") {
    basicallyCounter += 1
  }
  }
  }
     } ;
     
console.log("really is:", reallyCounter);
console.log("very is:", veryCounter);
console.log("basically is:", basicallyCounter);
 overusedWordsCounter = reallyCounter + veryCounter  + basicallyCounter;

//to count number of sentences
let sentencesCounter = 0;
storyWords.forEach(word => { // OR for (word of storyWords){}
  if (word[word.length - 1] === "." || word[word.length -1 ] === "!") {
     sentencesCounter +=1;
  }
});

console.log(sentencesCounter);

//log word count, sentence count and number of  times overused words

console.log(`There are ${storyWords.length} word count`)
console.log(`There are ${sentencesCounter} sentence count`)
console.log(`The overused word really appears ${reallyCounter}`)
console.log(`The overused word very appears ${veryCounter}`);
console.log(`The overused word basically appears ${basicallyCounter}`)

//OR
//console.log(betterWords.length + ",  " + sentencesCounter + ", " + overusedWordsCounter);


//to log betterwords array as single string
console.log(betterWords.join(" "));

