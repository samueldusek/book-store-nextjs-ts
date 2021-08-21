export function getRandInt(from: number, to: number): number {
  return Math.floor(Math.random() * (to - from)) + from;
}
