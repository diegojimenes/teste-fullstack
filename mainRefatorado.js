class orderPrimeNumbers {
  static main(limit, maxPerPage, maxPerline) {
    const primeNumbers = generateListOfPrimeNumbers(limit)
    orderAndPaginate(primeNumbers, limit, maxPerPage, maxPerline)
  }
}

const orderAndPaginate = (listOfPrimeNumbers, limit, maxPerPage, maxPerline) => {
  let pageNumber = 1;
  let pageOffSet = 1;
  let rowOffSet = 0;

  while (pageOffSet <= limit) {
    console.log("Page ", pageNumber);

    for (
      rowOffSet = pageOffSet;
      rowOffSet <= pageOffSet + maxPerPage - 1;
      rowOffSet++
    ) {

      const line = Array(maxPerline).fill(0).map((_, index) => {
        if (rowOffSet + index * maxPerPage <= limit) {
          return listOfPrimeNumbers[rowOffSet + index * maxPerPage]
        }
      })

      console.log(line.join('|'));
    }
    pageNumber++;
    pageOffSet += maxPerPage * maxPerline;
  }
}

const isPrimeNumber = (number) => {
  for (let i = 2; i < number; i++)
    if (number % i === 0) {
      return false
    };

  return number > 1;
}

const generateListOfPrimeNumbers = (limit) => {
  let numbers = new Array()

  numbers[0] = 0

  for (var i = 0; numbers.length <= limit; i++) {
    if (isPrimeNumber(i)) {
      numbers.push(i);
    }
  }
  return numbers;
}

orderPrimeNumbers.main(1000, 50, 4)