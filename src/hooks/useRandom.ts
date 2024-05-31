/**
 * Generates a random integer between 0 (inclusive) and the specified max value (exclusive).
 *
 * @param {number} max - The upper bound (exclusive) for the random integer.
 * @returns {number} A random integer between 0 (inclusive) and max (exclusive).
 */
export const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * max);
};
