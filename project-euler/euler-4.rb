=begin
	
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.	

=end

def build_products(limit=500)
	products = []
	[*limit..999].reverse!.each do |a|
		[*limit..a].reverse!.each { |b| products.push(a*b)}
	end

	products.sort { |a, b| b <=> a}
end

def get_big_pal(products)
	products.each do |p|
		if p.to_s == p.to_s.reverse
			return p
		end
	end
end

products = build_products

biggest = get_big_pal(products)

puts biggest
