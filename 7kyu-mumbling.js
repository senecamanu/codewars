function accum(input) {
	// your code
  var result = '';
  for (let i = 0; i < input.length; i++) {
    var semiResult = '';
    for (let c = 0; c <= i; c++) {
      if (c === 0) {
        semiResult += input[i].toUpperCase();
      }
      else {
        semiResult += input[i].toLowerCase();
      }
    }
    if (i < input.length - 1) {
      result += semiResult + '-';
    }
    else {
      result += semiResult;
    }
  }
  console.log(result);
}

accum("ZpglnRxqenU")