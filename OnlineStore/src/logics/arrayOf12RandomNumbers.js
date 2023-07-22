function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  export function generateRandomNumbersArray(length=numberOfRandomNumbers, min=minNumber, max=maxNumber) {
    const randomNumbersArray = [];
  
    while (randomNumbersArray.length < length) {
      const randomNumber = getRandomNumber(min, max);
      if (!randomNumbersArray.includes(randomNumber)) {
        randomNumbersArray.push(randomNumber);
      }
    }
  
    return randomNumbersArray;
  }
  
  const minNumber = 1;
  const maxNumber = 30;
  const numberOfRandomNumbers = 12;
  
  