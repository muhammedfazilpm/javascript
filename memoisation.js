
function memoizeSquare() {
    const cache = {};
  
    return function (n) {
      if (n in cache) {
        console.log("ok")
        return cache[n];
      }
  
      const result = n * n;
      cache[n] = result;
      return result;
    };
  }
  
  const memoizedSquare = memoizeSquare();
  
  console.log(memoizedSquare(5)); 
  console.log(memoizedSquare(5)); 
  