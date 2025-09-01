function chunkArray(arr, n) {
  let result =[];
  for(let i =0; i< arr.length; i = i+n){
    result.push(arr.slice(i, i+n))
  }
  return result
}

// Example usage:
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3)); // [[1,2,3],[4,5,6],[7]]