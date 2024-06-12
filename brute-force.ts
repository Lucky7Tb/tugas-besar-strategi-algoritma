const result: number[][] = [];
let minimumJump = 0;

function jumpGame(
  arr: number[],
  currentIndex: number,
  jumpPath: number[]
) {
  const maxJump = arr[currentIndex];

  for (let i = 1; i <= maxJump; i++) {
    const nextJump = currentIndex + i;

    if (nextJump < arr.length) {
      const newJumpPath = [...jumpPath, nextJump];
      if (nextJump === arr.length - 1) {
        if (newJumpPath.length < minimumJump || minimumJump === 0) {
          minimumJump = newJumpPath.length;
          result.length = 0;
          result.push(newJumpPath);
        }
      } else {
        jumpGame(arr, nextJump, newJumpPath);
      }
    }
  }
}

function main() {
  const arr: number[] = [];
  for (let i = 0; i < 50; i++) {
    arr.push(Math.floor(Math.random() * 9) + 1);
  }
  console.log(arr);
  const startTime = performance.now();
  jumpGame(arr, 0, []);
  const endTime = performance.now();
  console.log(result);
  console.log(`Execution time: ${endTime - startTime}ms`);
}

main();
