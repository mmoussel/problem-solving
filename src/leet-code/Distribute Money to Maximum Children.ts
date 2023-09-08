/**
 * @param {number} money
 * @param {number} children
 * @return {number}
 */

var distMoney = function (money: number, children: number) {
  money -= children;
  let numberOfEightsTaken = 0;

  if (money < 0) {
    return -1;
  }

  for (let i = 0; i < children; i++) {
    let leftChildNumber = children - i;

    if (
      money >= 7 &&
      (leftChildNumber > 1 || (leftChildNumber === 1 && money === 7))
    ) {
      money -= 7;
      numberOfEightsTaken += 1;
    } else {
      if (money === 3 && leftChildNumber === 1) {
        numberOfEightsTaken--;
      }
      break;
    }
  }

  return numberOfEightsTaken;
};

const res = distMoney(12, 2);
