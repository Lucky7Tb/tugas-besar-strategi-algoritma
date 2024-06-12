let minimumJump = 0;

function main() {
  const arr: number[] = [];
  for (let i = 0; i < 1000; i++) {
    arr.push(Math.floor(Math.random() * 9) + 1);
  }
  console.log(arr);
  const startTime = performance.now();
  minimumJump = findMinimumJumps(arr);
  const endTime = performance.now();
  console.log(minimumJump);
  console.log(`Execution time: ${endTime - startTime}ms`);
}

function findMinimumJumps(arr) {
  const n = arr.length;
  if (n === 0 || arr[0] === 0) {
    return -1;
  }

  // jumps[i] will hold the minimum number of jumps needed to reach arr[i] from arr[0]
  const jumps = new Array(n).fill(Infinity);
  jumps[0] = 0;

  // Traverse the array and update the jumps[] array
  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= arr[i] && i + j < n; j++) {
      jumps[i + j] = Math.min(jumps[i + j], jumps[i] + 1);
    }
  }

  return jumps[n - 1] === Infinity ? -1 : jumps[n - 1];
}

main();
