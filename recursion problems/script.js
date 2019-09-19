
function chooseFn(func){
  var input = document.getElementById("input").value

  if(func == "triangle") {
    document.getElementById("div").innerHTML=triangle(parseInt(input));
  }
  if(func == "fibonacci") {
      document.getElementById("div").innerHTML=fibonacci(parseInt(input));
  }
  if(func == "countHi") {
      document.getElementById("div").innerHTML=countHi(input);
  }
  if(func == "sumDigits") {
      document.getElementById("div").innerHTML=sumDigits(parseInt(input));
  }
  if(func == "factorial") {

      document.getElementById("div").innerHTML=factorial(parseInt(input));
  }
  if(func == "bunnyEars") {
      document.getElementById("div").innerHTML=bunnyEars(parseInt(input));
  }
  if(func == "bunnyEars2") {
      document.getElementById("div").innerHTML=bunnyEars2(parseInt(input));
  }
  if(func == "count7") {
      document.getElementById("div").innerHTML=count7(parseInt(input));
  }
}





//1. Triangle
function triangle(rows) {
  if(rows == 0){
    return 0;
  }

  return rows + triangle(rows-1);

}



//2.Fibonacci
function fibonacci(n) {
  if(n <= 1) {
    return n;
  }
    return fibonacci(n-1) + fibonacci(n-2);
}


//3.countHi
function countHi(str) {
  if(str.length < 2){
    return 0;
  }
  if(str.substring(0,2) == "hi"){
    return 1 + countHi(str.substring(2));
  }
  return countHi(str.substring(1));
}


//4. sumDigits
function sumDigits(n) {
  if(n == 0){
    return 0;
  }
  return n % 10 + sumDigits(n / 10);
}


//5.factorial
function factorial(n) {
  if(n == 1) {
    return 1;
  }
  return n * factorial(n-1);
}


//6.bunnyEars
function bunnyEars(bunnies) {
  if(bunnies == 0){
    return 0;
  }
  return bunnies * 2;
}

//7.bunnyEars2
function bunnyEars2(bunnies) {
  if(bunnies == 0){
    return 0;
  }
  if(bunnies % 2 == 1){
    return 2 + bunnyEars2(bunnies - 1);
  }
  return 3 + bunnyEars2(bunnies - 1);
}


//8.count7
function count7(n) {
  if(n == 0){
    return 0;
  }
  if(n % 10 == 7){
    return 1 + count7(Math.floor(n / 10));
  }
  return count7(Math.floor(n / 10));
}
