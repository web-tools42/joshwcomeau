// Selection Sort

function selection_sort(arr) {
  var starting_index;

  arr = convert_each_to_number(arr);

  // First loop iterates starting position. Starts with 0, ends with the final list index
  for ( starting_index=0; starting_index<arr.length; starting_index++ ) {
    
    var current_min_index = get_smallest_index(arr, starting_index);

    arr = selection_compare(arr, starting_index, current_min_index);
  }

  return arr;
}

// Selection Sort sub-functions
function selection_compare(array, start, current) {
  if ( start != current ) {
    array.swap( start, current );
  }

  return array
}

function get_smallest_index(array, starting_index) {
  var current_index, current_min_index = starting_index;

  for ( current_index=starting_index+1; current_index<array.length; current_index++  ) {
    if ( array[current_index] < array[current_min_index] ) {
      current_min_index = current_index;
    }
  }

  return current_min_index;
}

function convert_each_to_number(arr) {
  return _.map(arr, function(item) {
    if ( !isNaN(item) ) {
      return parseFloat(item);
    }
    return item;
  });
  
}