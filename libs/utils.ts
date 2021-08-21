export function getRandInt(from: number, to: number): number {
  return Math.floor(Math.random() * (to - from)) + from;
}

export function shuffleArray(arr: any[]): any[] {
  return arr.sort(() => Math.random() - 0.5);
}
