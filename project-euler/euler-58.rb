# If one complete new layer is wrapped around the spiral above, a square spiral with side length 9 will be formed. If this process is continued, what 
# is the side length of the square spiral for which the ratio of primes along both diagonals first falls below 10%?


def is_prime?(n)

	return true if n == 2
	return false if n % 2 == 0
	
	2.upto(n**0.5) do |fact|
		if n % fact == 0
			return false
		end
	end

	return true
end

def get_corners(n)		# for layer n, returns the 4 corners of that layer.
	corners = []
	(0..6).step(2) { |x| corners.push( 4*n**2 - (4+x)*n + (1+x) ) }

	return corners
end

def work()
	# Starting with layer 2, with '1' added to the total diagonals, work up through the square spiral, adding to our 'prime' and 'total' arrays
	total = [1]
	prime = [] 		# 1 isn't prime, apparently.

	layer = 2

	until ( prime.length.to_f / total.length.to_f < 0.1 && prime.length != 0 )
		corners = get_corners(layer)
		corners.each do |c|
			total.push(c)
			prime.push(c) if is_prime?(c)
		end

		layer += 1
	end

	puts "Prime ratio is #{prime.length.to_f / total.length.to_f}"

	return length = 2*(layer-1) - 1
end

puts work()








