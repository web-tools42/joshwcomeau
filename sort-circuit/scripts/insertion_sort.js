// Insertion Sort

function insertion_sort(arr) {
  var index, scanner;

  for ( index in arr ) {
    scanner = index;

    while ( scanner > 0 && arr[scanner-1] > arr[scanner] ) {
      arr.swap(scanner, scanner-1);
      scanner--;
    }

  }

  return arr;
}
