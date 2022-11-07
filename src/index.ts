import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Practice TS!</h1>
<div>
Reverse('hello')= ${Reverse("hello")}
<br/>
Finbonacci(4)=${Fibonacci(6, {})}
<br/>
Palindrome(hello)=${Palindrome("hello")}
<br/>
Leapyear(2000)=${LeapYear(2000)}
<br/>
PrimeNumber(30)=${PrimeNumber}

</div>`;

function Reverse(str: string) {
  var reversedString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
}

function Fibonacci(num: number, memo: { [num: number]: number }) {
  if (num === 0 || num === 1) return num;
  if (num in memo) return memo[num];

  memo[num] = Fibonacci(num - 1, memo) + Fibonacci(num - 2, memo);

  return memo[num];
}

function Palindrome(input: string) {
  var str = input.split("").reverse().join("");

  return str === input;
}

function LeapYear(year: number) {
  if (year % 400 === 0) return true;

  // Else If a year is multiple of 100,
  // then it is not a leap year
  if (year % 100 === 0) return false;

  // Else If a year is multiple of 4,
  // then it is a leap year
  if (year % 4 === 0) return true;
  return false;
}

function PrimeNumber(n: number) {
  for (let i = 2, s = Math.sqrt(n); i <= s; i++) if (n % i === 0) return false;
  return n > 1;
}
