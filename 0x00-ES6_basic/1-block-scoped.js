export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

	/* eslint-disable no-unsed-vars */
  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }

	/* eslint-enable no-unsed-vars */
  return [task, task2];
}
