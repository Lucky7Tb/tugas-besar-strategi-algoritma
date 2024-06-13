let minimumJump = 0;

function main() {
  const arr: number[] = [];
  for (let i = 0; i < 50; i++) {
    arr.push(Math.floor(Math.random() * 9) + 1);
  }
  console.log(arr);
  const startTime = performance.now();
  minimumJump = jumpGame(arr);
  const endTime = performance.now();
  console.log(minimumJump);
  console.log(`Execution time: ${endTime - startTime}ms`);
}

function jumpGame(arr) {
  const n = arr.length;
  if (n === 0 || arr[0] === 0) {
    return -1;
  }

  const jumps = new Array(n).fill(Infinity);
  jumps[0] = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= arr[i] && i + j < n; j++) {
      jumps[i + j] = Math.min(jumps[i + j], jumps[i] + 1);
    }
  }

  return jumps[n - 1] === Infinity ? -1 : jumps[n - 1];
}

main();
