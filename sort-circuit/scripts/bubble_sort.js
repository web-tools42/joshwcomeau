// Bubble Sort

function bubble_sort(arr) {
  var n = arr.length,
      swapped, 
      index;

  do {
    swapped = false;
    for ( index=1; index<n; index++ ) {
      if ( arr[index-1] > arr[index] ) {
        arr.swap(index-1, index);
        swapped = true;
      }
    }
    n--;
  } while ( swapped );


  return arr;
}

// procedure bubbleSort( A : list of sortable items )
//     n = length(A)
//     repeat
//        swapped = false
//        for i = 1 to n-1 inclusive do
//           if A[i-1] > A[i] then
//              swap(A[i-1], A[i])
//              swapped = true
//           end if
//        end for
//        n = n - 1
//     until not swapped
// end procedure