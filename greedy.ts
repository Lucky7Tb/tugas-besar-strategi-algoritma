function jumpGame(arr: number[]) {
  let minimumJump = 0;
  let position = 0;
  let path: number[] = [];

  while (true) {
    if (position + arr[position] > arr.length - 1) {
      position += arr.length - 1 - position;
    } else {
      position += arr[position];
    }
    path.push(position);
    minimumJump++;
    if (position === arr.length - 1) break;
  }

  return [minimumJump, path];
}

function main() {
  const arr: number[] = [];
  for (let i = 0; i < 50; i++) {
    arr.push(Math.floor(Math.random() * 9) + 1);
  }
  console.log(arr);
  const startTime = performance.now();
  const result = jumpGame(arr);
  const endTime = performance.now();
  console.log(result);
  console.log(`Execution time: ${endTime - startTime}ms`);
}

main();
