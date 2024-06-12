const result: number[][] = [];
let minimumJump = 0;

function main() {
  const arr = [1, 2, 4, 5];
  generateJumpPath(arr, 0, []);
  console.log(result);
}

function generateJumpPath(
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
        generateJumpPath(arr, nextJump, newJumpPath);
      }
    }
  }
}

main();
