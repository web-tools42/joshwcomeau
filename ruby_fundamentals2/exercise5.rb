# Convert Farenheit to Celcius

def temp_convert
	puts "Enter a temperature in Farenheit"
	


	t = gets.chomp

	if /[a-z]+/i.match(t) != nil
		puts "Sorry, that wasn't a valid number"
		temp_convert
	else
		temp = ((t.to_i - 32) * 5.0/9).round
		return "Your new temperature is #{temp} degrees celcius"
	end

end

puts temp_convert

=begin

Start with prompting the user for a temperature in F. Once you get the input, call the method while using your input as a parameter.

Your method should:

have one parameter: the temperature in Fahrenheit
do the conversion with this formula: (C = (F - 32) x 5/9)
ensure that the parameter you pass in is a number by converting it with to_i
Output the result in a full sentence using string interpolation.
	
=end