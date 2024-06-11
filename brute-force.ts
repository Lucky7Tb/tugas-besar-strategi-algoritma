const generatedJumpPath: number[][] = [];

function main() {
  const arr = [1, 2, 4, 5];
  generateJumpPath(arr, 0, []);
  console.log(minimumPossibleJump(generatedJumpPath));
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
        generatedJumpPath.push(newJumpPath);
      } else {
        generateJumpPath(arr, nextJump, newJumpPath);
      }
    }
  }
}

function minimumPossibleJump(arr: number[][]) {
  const result: number[][] = [];
  let minimumJump = 0;

  for (let index = 0; index < generatedJumpPath.length; index++) {
    const jumpPath = generatedJumpPath[index];

    if (jumpPath.length < minimumJump || minimumJump === 0) {
      minimumJump = jumpPath.length;
      result.length = 0;
      result.push(jumpPath);
      continue;
    }

    if (jumpPath.length === minimumJump) {
      result.push(jumpPath);
    }
  }

  return result;
}

main();
