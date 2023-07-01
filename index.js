function reverse(word){
  // const wordArray=word.split("") // splitting it into an array in order to do a reverse
  // const reversedArray=wordArray.reverse() 
  // const reversedWord=reversedArray.join("") //joining the reversed array into a string
  return word.split("").reverse().join("") // cleaning up the code to be more shorter
  }
  // function reverse(word){
  // // const wordArray=word.split("") // splitting it into an array in order to do a reverse
  // // const reversedArray=wordArray.reverse() 
  // // const reversedWord=reversedArray.join("") //joining the reversed array into a string
  // return word.split("").reverse().join("") // cleaning up the code to be more shorter
  // }
  
  
  function isPalindrome(word) {
    // Write your algorithm here
    //changing the string to lowercase
    //const newString=word.replace(/[^a-zA-Z0-9]/g,"")
    // const reversedWord =reverse(word)
    const reversedWord= word.split("").reverse().join("")
  
    return (word === reversedWord)
  }