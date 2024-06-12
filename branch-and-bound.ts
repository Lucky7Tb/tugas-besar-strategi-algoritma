let minimumJump = Infinity;

function main() {
  const arr: number[] = [];
  for (let i = 0; i < 50; i++) {
    arr.push(Math.floor(Math.random() * 9) + 1);
  }
  console.log(arr);
  const startTime = performance.now();
  findMinimumJumps(arr);
  const endTime = performance.now();
  console.log(minimumJump === Infinity ? -1 : minimumJump);
  console.log(`Execution time: ${endTime - startTime}ms`);
}

function findMinimumJumps(arr) {
  minimumJump = Infinity;
  branchAndBound(arr, 0, 0);
}

function branchAndBound(arr, currentIndex, currentJumps) {
  const n = arr.length;

  if (currentIndex >= n - 1) {
    minimumJump = Math.min(minimumJump, currentJumps);
    return;
  }

  if (currentJumps >= minimumJump) {
    return;
  }

  const maxJump = arr[currentIndex];
  for (let i = 1; i <= maxJump; i++) {
    branchAndBound(arr, currentIndex + i, currentJumps + 1);
  }
}

main();
