function jumpGame(arr: number[]) {
  let minimumJump = 0;
  let position = 0;

  while (true) {
    if ((position + arr[position]) > (arr.length - 1)) {
      position += (arr.length - 1) - position;
    } else {
      position += arr[position]
    }
    minimumJump++;
    if (position === arr.length - 1) break;
  }

  return minimumJump;
}
