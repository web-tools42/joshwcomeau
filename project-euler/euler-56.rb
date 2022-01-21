=begin
A googol (10100) is a massive number: one followed by one-hundred zeros; 100100 is almost unimaginably large: one followed by two-hundred zeros. D
espite their size, the sum of the digits in each number is only 1.

Considering natural numbers of the form, a**b, where a, b < 100, what is the maximum digital sum?
=end

def sum_digits(n)
	t_sum = 0
	n.to_s.split("").each do | digit |
		t_sum += digit.to_i
	end

	return t_sum
end


m_d_sum = 0

for a in 1..100
	for b in 1..100
		new_sum = sum_digits(a**b)
		m_d_sum = new_sum if new_sum > m_d_sum
	end
end

puts m_d_sum