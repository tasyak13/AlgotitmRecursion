// 1 Дано натуральное число N. Выведите слово YES, если число N является точной степенью двойки, или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!
 
function degreeOfTwo(n) {
    if (n === 2) {
    return 'YES';
    } else if (n < 2){
    return 'NO';
    } else {
    return degreeOfTwo(n/2);
    }
    }
     
    console.log(degreeOfTwo(64));
    console.log(degreeOfTwo(53));
     
    // 2 Дано натуральное число N. Вычислите сумму его цифр.
    // При решении этой задачи нельзя использовать строки, списки, массивы (ну и циклы, разумеется).
     
    function sumOfNomber(n) {
    if (n < 10) {
    return n;
    } else {
    return n % 10 + sumOfNomber((n - n % 10) / 10);
    }
    }
     
    // 3 Напишите рекурсивный метод, который выводит на экран числа Фибоначчи до N-ого элемента.
     
    function fib(n) {
    if (n <= 1) {
    return n;
    } else {
    return fib(n - 1) + fib(n - 2);
    }
    }
     
    // 4 Напишите рекурсивный метод, который проверяет, является ли строка палиндромом.
     
    function palindrome(str) {
    if (str.length < 2) {
    return true;
    } if (str[0] === str[str.length - 1]) {
    return palindrome(str.slice(1, str.length - 1));
    }
    return false;
    }