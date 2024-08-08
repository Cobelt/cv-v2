export function cN(
  ...args: Array<string | boolean | number | undefined | null>
): string {
  return args.filter(Boolean).join(" ")
}
