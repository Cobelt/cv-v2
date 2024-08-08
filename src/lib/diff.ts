export function findMinimalDiff(
  array: Array<unknown>,
  active: number,
  to: number
) {
  const toLeftDiff =
    -1 * (to > active ? active + array.length - to : active - to)
  const toRightDiff = to < active ? array.length - active + to : to - active

  return toRightDiff > array.length / 2 ? toLeftDiff : toRightDiff
}
