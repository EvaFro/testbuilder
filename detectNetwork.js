// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  
  var prefix = cardNumber.slice(0,4);
  // Diner's Club
  if(cardNumber.length===14 && prefix.slice(0,2) === '38' || prefix.slice(0,2) === '39' ){
	  return 'Diner\'s Club'
  }
  // Ammerican Express
  if(cardNumber.length===15 && prefix.slice(0,2) === '34' || prefix.slice(0,2) === '37' ){
	  return 'American Express'
  }
  //Visa
  if(prefix[0] === '4' && (cardNumber.length===16 || cardNumber.length===13 || cardNumber.length===19)){
	  return 'Visa'
  }
  
  //MasterCard
  if(cardNumber.length===16 && Number(prefix.slice(0,2)) >= 51 && Number(prefix.slice(0,2)) <= 55){
	  return 'MasterCard'
  }
  
  // Discover
  if((cardNumber.length===16 || cardNumber.length===19) && (prefix === '6011' || prefix.slice(0,2) === '65' || (Number(prefix.slice(0,3)) >= 644 && Number(prefix.slice(0,3)) <= 649))){
	  return 'Discover'
  }
  
  // Maestro
  if(cardNumber.length>=12 && cardNumber.length<=19 && (prefix === '5018' || prefix === '5020' || prefix === '5038' || prefix === '6304')){
	  return 'Maestro'
  }
};


