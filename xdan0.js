function xo(str) {
  // you can only write your code here!
  var result = ""
  var result2 = ""
  for(var i = 0; i<str.length; i++){
      if(str[i]==="x"){
        result = result + str[i]
        
      }
      else if(str[i]==="o"){
          result2 = result2 + str[i]
      }
    
    }
    if(result.length!=result2.length){
    return "false"}
    else{
        return "true"
    }
}


// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true