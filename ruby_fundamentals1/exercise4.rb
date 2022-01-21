# FizzBuzz!
def fizz_buzz(max_n)
	1.upto(max_n) do |n|
		if n % 15 == 0
			puts "BitMaker"
		elsif n % 3 == 0
			puts "Bit"
		elsif n % 5 == 0
			puts "Maker"
		else
			puts n
		end
	end
end


fizz_buzz(100)