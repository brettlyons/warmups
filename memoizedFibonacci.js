var fibonacci = function(n, cache) {
  if (!cache) { cache = {}; }
  if (cache[n]) { return cache[n]; }
  if (n == 0 || n == 1) { return n; }
  cache[n] = fibonacci(n - 1, cache) + fibonacci(n - 2, cache);
  return cache[n];
};

// var memCache = {};
// var fibonacci = function(n) {
// 	if (memCache[n]) return memCache[n];
//   if(n == 0 || n == 1)
//     return n;
//   memCache[n] = fibonacci(n-1) + fibonacci(n-2);
// 	return memCache[n];
// }
