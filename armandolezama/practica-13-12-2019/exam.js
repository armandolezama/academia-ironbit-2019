
const primeGenerator = to => {
    const arr = [2,to];
    let secondArr = [2, 3];
    let isPrime = true;
    for(let i = arr[0]; i <= arr[1]; i++){
        isPrime = true
            for(const previousNumber of secondArr){
                i % previousNumber === 0 ? isPrime = false : isPrime
            }
            isPrime ? secondArr = [...secondArr, i] : secondArr
    };

    return secondArr;
}

const primeNumbers = (from, to) => {
    return primeGenerator(to).filter(value=>{
        return value >= from;
    })
};

const sumStrings = (a,b) => {
    let firstNumber = [];
    let secondNumber = [];
    let fatNumber = [];
    if([...a].length >= [...b].length) {
        firstNumber = [...a];
        secondNumber = [...b];
    } else {
        firstNumber = [...b];
        secondNumber = [...a];
    };
    
    let lengthDifference = firstNumber.length - secondNumber.length;
    for(let i = firstNumber.length - 1; i >= 0; i--){
      let digitNumber = (parseInt(firstNumber[i]) + parseInt(secondNumber[i - lengthDifference])).toString()
        if(digitNumber.length > 1 && i > 0){
            firstNumber[i - 1] = (parseInt(digitNumber[0]) + parseInt(firstNumber[i - 1])).toString();
            fatNumber = [digitNumber[digitNumber.length - 1],...fatNumber]
            } else {
                fatNumber = [digitNumber,...fatNumber]
            }
        if(i - lengthDifference === 0 && i !== 0){
            fatNumber = [...firstNumber.slice(0, i), ...fatNumber]
            i = 0;
        }

    }
    let counter = 0;
    do{
    

    }while()
    return fatNumber.join('').toString()
  }

  sumStrings('8797', '45')