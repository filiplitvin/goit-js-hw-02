const checkForSpam = function (message) {
  // твій код
  const correctMessage = message;
  return correctMessage.includes("SPAM") || correctMessage.includes("sale");
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
