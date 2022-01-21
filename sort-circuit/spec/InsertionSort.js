describe("Insertion Sort", function() {
  
  it("should return a sorted array!", function() {
    var small_array = [1, 8, 4, 0, 5, 4]
    expect(insertion_sort(small_array)).toEqual([ 0, 1, 4, 4, 5, 8 ]);
  });

  it("should sort an array with negative numbers", function() {
    var negative_array = [4, 0, -3, -14, 2, 51, -1, 1];
    expect(insertion_sort(negative_array)).toEqual([-14, -3, -1, 0, 1, 2, 4, 51]);
  });

  it("should sort an array with floats", function() {
    var float_array = [3.5, 2.15, 2.152, 45.3, -1.5452];
    expect(insertion_sort(float_array)).toEqual([-1.5452, 2.15, 2.152, 3.5, 45.3]);
  });

  it("should sort an array with strings", function() {
    var string_array = ["Garfield","Odie","Nermal","John"];
    expect(insertion_sort(string_array)).toEqual(["Garfield","John","Nermal","Odie"]);
  });

});
