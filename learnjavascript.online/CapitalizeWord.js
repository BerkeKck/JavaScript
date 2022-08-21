//returns a string
//returns capitalized word

function capitalize(word) {
    return word[0].toUpperCase(1) + word.substring(1).toLocaleLowerCase(); 
    
    
    }
    
    // Sample usage - do not modify
    console.log(capitalize("sam")); // "Sam"
    console.log(capitalize("ALEX")); // "Alex"
    console.log(capitalize("chARLie")); // "Charlie"