describe("Selection Sort", function() {
  var small_array, big_array;

  beforeEach(function() {
    small_array = [1, 8, 4, 0, 5, 4]
  });


  it("should swap two non-equal numbers", function() {
    expect(selection_compare(small_array, 1, 2)).toEqual([1, 4, 8, 0, 5, 4]);
  });

  it("should do nothing when the numbers are equal", function() {
    expect(selection_compare(small_array, 2, 5)).toEqual(small_array);
  });

  it("should find the smallest number in an array", function() {
    expect(get_smallest_index(small_array, 0)).toEqual(3);
  });

  it("should return a sorted array!", function() {
    expect(selection_sort(small_array)).toEqual([ 0, 1, 4, 4, 5, 8 ]);
  });

  it("should sort an array with negative numbers", function() {
    var negative_array = [4, 0, -3, -14, 2, 51, -1, 1];
    expect(selection_sort(negative_array)).toEqual([-14, -3, -1, 0, 1, 2, 4, 51]);
  });

  it("should sort an array with floats", function() {
    var float_array = [3.5, 2.15, 2.152, 45.3, -1.5452];
    expect(selection_sort(float_array)).toEqual([-1.5452, 2.15, 2.152, 3.5, 45.3]);
  });

  it("should sort an array with strings", function() {
    var string_array = ["Garfield","Odie","Nermal","John"];
    expect(selection_sort(string_array)).toEqual(["Garfield","John","Nermal","Odie"]);
  });

});
