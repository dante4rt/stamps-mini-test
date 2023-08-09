function primeNumbers(n) {
    let result = [];
  
    for (let i = 1; i <= n; i++) {
      if (!isPrime(i)) {
        if (i % 3 === 0 && i % 5 === 0) result.push('FooBar');
        else if (i % 3 === 0) result.push('Foo');
        else if (i % 5 === 0) result.push('Bar');
        else result.push(i);
      }
    }
  
    return result.reverse().join(', ');
  }
  
  function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i < n; i++) {
      if (n % i == 0) {
        return false;
      }
    }
    return true;
  }
  
  console.log(primeNumbers(100));  