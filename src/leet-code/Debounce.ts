type F = (...p: any[]) => any;

function debounce(fn: F, t: number): F {
  let currentTimeout: number;

  return function (...args) {
    clearTimeout(currentTimeout);

    currentTimeout = setTimeout(() => {
      fn(...args);
    }, t);
  };
}

const log = debounce(console.log, 500);
log("Hello");
log("Hello");

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
