function throttle(func, limit) {
    let inThrottle;
    
    return function() {
      if (!inThrottle) {
        func.apply(this, arguments);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }
  
  // Usage
  const throttledFunction = throttle(function() {
    console.log("Throttled function called");
  }, 1000);
  
  // When calling the throttled function, it can be executed at most once per second.
  throttledFunction(); // It will execute
  throttledFunction(); // It won't execute (within 1 second)
  
  // After 1 second, the function can be executed again.
  