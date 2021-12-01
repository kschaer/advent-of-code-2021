import { createGetFormattedInput } from "../helpers";

const formatInput = (content: string): number[] =>
  content.split("\n").map((line) => Number(line));

const findAnswer = () => {
  const input = createGetFormattedInput(formatInput)(__filename);

  const answer = input.reduce((acc, cur, idx) => {
    if (idx === 0) return acc;

    const prev = input[idx - 1];
    return prev < cur ? acc + 1 : acc;
  }, 0);

  return answer;
};

const findAnswer2 = () => {
  const input = createGetFormattedInput(formatInput)(__filename);

  let increaseCount = 0;

  let lastSlidingWindowSum = input[0] + input[1] + input[2];

  for (let i = 1; i < input.length - 1; i++) {
    const curSlidingWindowSum = input[i] + input[i + 1] + input[i + 2];

    if (curSlidingWindowSum > lastSlidingWindowSum) {
      increaseCount++;
    }

    lastSlidingWindowSum = curSlidingWindowSum;
  }

  return increaseCount;
};

if (require.main === module) {
  console.log(findAnswer());
  console.log(findAnswer2());
}
