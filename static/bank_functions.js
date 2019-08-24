/*
* Showing the "alert" and raw string functionality
*/
function createAlert(){
  //note you can also type alert(....) into the console directly!
  alert('my first alert');
}

function addNumbersToAlert(x, y){
  const message = 'In python, we have f-strings, where a string starts with "f" before the quotes.\
  We can insert variables with {variable}.\
  \
  In Javascript, we can use ${variable} instead. To use this, we need to use backticks (`) to open and close strings'

  //send the message to the console, and print out the message to the screen
  console.log(message);
  //make a message box appear
  alert(`${x} + ${y} = ${x+y}`);
}

/*
* First example of jQuery selection, and using html(...) method to
* set the text between tags.
* e.g. <h2>stuff stuff</h2> would get changed to <h2>text</h2>
*/
function changeH2TagsToText(text){
  //selects ALL h2 tags and sets the text
  $('h2').html(text);
}

function changeAllListItems(text){
  $('li').html(text);
}

function changeAllListItemsInParticularList(list_id, text){
  const selector = `#${list_id} li`;
  console.log(`The selector we use to get all list items in the list ${list_id} is "${selector}"`);
  $(selector).html(text);
}

/*
* As well as text, we can change the color or width of elements
*/
function changeColorOfColoredDivs(color_string){
  //color string can be 'red', 'green', 'rgb(255,255,0)', 'rgba(255,255,0,0.5)' etc
  $('.colored_div').css('background-color', color_string);
}

function changeWidthOfColoredDivs(width){
  //note width can be a number (pixels) or the string "xx%" for a percentage
  $('.colored_div').width(width);
}

/*
* Some console.log messages
*/
function getFirstNSquares(n){
  // In Python: first_n_numbers = range(n)
  const first_n_numbers = Array(n).fill(0).map((value, index) => index);

  for (num in first_n_numbers){
    console.log(`${num}*${num} = ${num*num}`);
  }
}


function putFirstNSquaresInDiv(n){
  // In Python: first_n_numbers = range(n)
  const first_n_numbers = Array(n).fill(0).map( (v,i) => i);

  // In Python: the_squares = [val*val for val in first_n_numbers]
  const the_squares = first_n_numbers.map((val, index) => val*val);

  // In Python: message = ', '.join(the_squares)
  const message = the_squares.join(', ');

  // No Python equivalent .... write to webpage!
  $('#numbers').html(`First ${n} squares are ${message}`);
}

// Different style of function to the one above. This would be considered
// an "old school" javascript function. Try to use the one above first, this
// should be used if you have difficulty with "map" etcetera.
function putFirstNSquaresInDivOldFashioned(n){
  let the_squares = [];

  for (let counter = 0; counter < n; counter = counter + 1){
    // In python: the_squares.append(counter*counter)
    the_squares.push(counter*counter);
  }

  // In Python: message = ', '.join(the_squares)
  const message = the_squares.join(', ');

  $('#numbers').html(`First ${n} squares are ${message}`);
}

// This shows how we can get a random number in Javascript
function rollDie(){
  // Math.random() gets a number from 0 to 1, convert to a
  // number from 1 to 6.
  const dieRoll = Math.floor(Math.random()*5) + 1;
  return dieRoll;
}


/*
* Exercise 1: change the (h1) page title to text
*/
function changePageTitle(text){
  $('h1').html(text);
}

/*
* Exercise 2: countdown.
* If n is 3, output should be similar to 3... 2... 1... BLAST OFF
* in the div with id "numbers" (see putFirstNSquaresInDiv(n) for example)
*/
function countdown(n){
  
  
  $('#numbers').html
}

/*
* Exercise 3: rollTwoDice
* Should write a string, such as "You rolled a 3 and a 4 for a total of 7"
* into the div with id "numbers". You can use the existing rollDie() function
* twice to generate the numbers.
*/
function rollTwoDice(){
  //TODO
}
