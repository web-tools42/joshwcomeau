require './goods'

class Parser

  attr_accessor :items

  def initialize(input_string)
    @items = []

    input_string.strip.each_line { |line| @items << parse_item(line) }
  end

  def parse_item(line)
    quantity = line.slice!(0,2)
    
    split_line = line.partition(/[\d]{1,2}\.[\d]{1,2}/) 
    product = split_line[0].gsub(" at ", "") # Get rid of the trailing 'at' from our product name.
    price = split_line[1]

    Goods.new(quantity, product, price)
  end

  def to_s
    @items.each do |i|
      puts i
    end
    return
  end

end

input = "
1 imported bottle of perfume at 27.99
1 bottle of perfume at 18.99
1 packet of headache pills at 9.75
1 box of imported chocolates at 11.25
"
thing = Parser.new(input)

puts thing


# products  = [Goods.new("book",12.49, 0), Goods.new("music CD",14.99, 10), Goods.new("chocolate bar",0.85, 0)]
# products2 = [Goods.new("imported_chocolates",10.00,5), Goods.new("imported_perfume", 47.5, 15)] 

# products.each { |product| p product.calculate_tax }
