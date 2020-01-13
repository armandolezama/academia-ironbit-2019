module.exports = arr => [...arr.filter(value => value !== i), ...arr.filter(value => value === 0)]

const findAll = (sum, digits) => {
    let result = [];
        if(sum < digits * 9){
            let lowerValue = Array(digits).fill(1)
            sum -= digits;
            if(sum >= 8){
                let i = digits -1;
                do{
                    lowerValue[i] += 8  
                    i --;
                    sum -= 8;
                } while(sum >= 8)
                if(sum > 0) lowerValue[0] += sum
            } else {
                lowerValue[i] += sum;
            }
            //Start substracting and adding that value
            //Save all valid values
            //Try new combinations by saved values
        } else if (sum === digits * 9){
            result = Array(digits).fill(9)
        }
    return result;
}

const getLowerNumber = (sum, digits) => {
    let lowerValue = Array(digits).fill(1)
    sum -= digits;
    if(sum >= 8){
        let i = digits -1;
        do{
            lowerValue[i] += 8  
            i --;
            sum -= 8;
        } while(sum >= 8)
        if(sum > 0) lowerValue[i] += sum
    } else {
        lowerValue[i] += sum;
    }
    return lowerValue;
}