#### PROBLEM 1 ####
# How would you calculate a good tip for a 55 dollar meal? Use puts to print the answer onscreen.
puts "A good tip on $55 is $#{ 55 * 0.15 }."


#### PROBLEM 2 ####
# Try adding a string and an integer. What happens? Find a way to convert the integer so that it works and use puts to print the answer onscreen.
str = "I'm a string! "
int = 12345

# str + int # => error: no implicit conversion of Fixnum into String
# In other words, we need to do an explicit conversion! 

newstr = str + int.to_s
puts newstr


#### PROBLEM 3 ####
# Evidently, Ruby is much more than just a calculator, but try outputting the result of 45628 multiplied by 7839 in a sentence by 
# using string interpolation.
puts "45628 x 7839 = #{ 45628 * 7839} \n\s\s(that's a big number!)."


#### PROBLEM 4 ####
# What's the value of the expression (true && false) || (false && true) || !(false && false)? Try figuring it out on your own before typing it in.

# Breaking it down:
#   (true && false) => false
#   (false && true) => false
#   !(false && false) => !false => true
#   ---
#   false || false || true => true
#
# Therefore, the answer is true.
puts (true && false) || (false && true) || !(false && false)