'use strict';

/**
 * Implement calculateMenAverageAge function
 *
 * Function returns average age of men in array. If `century` is specified then
 * function calculates average age only for men who died in this century
 *
 * To calculate century:
 * Divide year of person's death by 100: Math.ceil(person.died / 100)
 *
 * @param {object[]} people
 * @param {number} century - optional
 *
 * @return {number}
 */
function calculateMenAverageAge(people, century) {
  const filterArrayOfMen = people.filter(person => century
    ? person.sex === 'm' && Math.ceil(person.died / 100) === century
    : person.sex === 'm');

  const sumOfAges = filterArrayOfMen.reduce((sum, man) =>
    sum + (man.died - man.born), 0);

  const averageAge = sumOfAges / filterArrayOfMen.length;

  return averageAge;
}

/**
 * Implement calculateWomenAverageAge function
 *
 * Function returns average ave of women in array. If `withChildren` is
 * specified then function calculates average age only for women with children
 *
 * Hint: To check if a woman has children you should find the other who mention
 * her as mother.
 *
 * @param {object[]} people
 * @param {boolean} withChildren - optional
 *
 * @return {number}
 */
function calculateWomenAverageAge(people, withChildren) {
  const filterArrayOfWomen = people.filter(person => withChildren
    ? person.sex === 'f' && people.some(some => some.mother === person.name)
    : person.sex === 'f');

  const sumOfAges = filterArrayOfWomen.reduce((sum, women) =>
    sum + women.died - women.born, 0);

  const averageAge = sumOfAges / filterArrayOfWomen.length;

  return averageAge;
}

/**
 * Implement calculateAverageAgeDiff function.
 *
 * The function returns an average age difference between a mother and her
 * child in the array. (A mother's age at child birth)
 *
 * If `onlyWithSon` is specified then function calculates age difference only
 * for mothers who have son.
 *
 * @param {object[]} people
 * @param {boolean} onlyWithSon - optional
 *
 * @return {number}
 */
function calculateAverageAgeDiff(people, onlyWithSon) {
  const filterArrayOfChildren = people.filter(person =>
    people.find(mother => person.mother === mother.name)
    && (onlyWithSon === undefined || person.sex === 'm')
  );

  const sumOfDiff = filterArrayOfChildren.reduce((sum, children) =>
    sum + (children.born - people
      .find(mother => children.mother === mother.name).born), 0);

  const averageAge = sumOfDiff / filterArrayOfChildren.length;

  return averageAge;
}

module.exports = {
  calculateMenAverageAge,
  calculateWomenAverageAge,
  calculateAverageAgeDiff,
};
