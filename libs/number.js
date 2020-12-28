export function getRandomInteger(min = 0, max = 100) {
  return min + Math.ceil(Math.random() * (max - min));
}
