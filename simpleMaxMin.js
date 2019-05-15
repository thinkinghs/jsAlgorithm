function highAndLow(numbers){
    var numArray = numbers.split(' ');
    // I don't need to convert array of string to array of numbers. By using Max and Min function, It is automatically changed.
    // for(var i=0; i<numArray.length; i++) { numArray[i] = parseInt(numArray[i], 10); }

    // Math.max.apply() not jus Math.max()
    return Math.max.apply(null, numArray) + ' ' + Math.min.apply(null,numArray);
}
