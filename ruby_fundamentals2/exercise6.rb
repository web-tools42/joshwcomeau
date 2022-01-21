grocery_list = ["red bull", "cinnamon toast crunch", "pop tarts", "granny smith apples", "milk"]

# Step 1 - display each item per line with an asterisk as a prefix.
grocery_list.each { |i| puts "* " + i.to_s }

# Step 2 - add rice
grocery_list << "rice"

# Step 3 - write a method to output our list
def nice_list(arr)
	arr.each { |i| puts "* " + i.to_s }
end

# Step 4 - count
puts grocery_list.length

# Step 5 - check for bananas
if grocery_list.include?("bananas")
	puts "No bananas needed."
else
	puts "You need to get bananas!"
end

# Step 6 - display item #2
puts grocery_list[1]

# Step 7 - Sort list
grocery_list.sort!
nice_list(grocery_list)

# Step 8 - Ditch the apples because fuck apples
grocery_list.delete("granny smith apples")


# Final list:
nice_list(grocery_list)




=begin
After each step, run your program to ensure it works before you move onto the next one. It's a good idea to commit often, too.

Your next step should present your grocery list with an item on each line, with an asterisk (*) in front of it so that it appears like this: 
You realize you've forgotten some rice, add it to your list and output it again. 
Given that you've already output your list twice, it might be good to consider writing a method to do this. 
Putting common bits of code in a method lets you reuse it throughout your program.

You lost count of how many things you need to pick up. Better output the total number of items on your list.

Check to see if your list includes "bananas". If it does, output "You need to pick up bananas". Otherwise, output "You don't need to pick up bananas today".
Display the second item in the list. (Don't forget that arrays are zero-indexed!)
It turns out that everything in this grocery store you're visiting is stored alphabetically, so to better plan out what you need to buy, you should sort your grocery list and output it with asterisks again.
After looking everywhere, you can't find the salmon. Delete it from your list and redisplay it.
After you're done, be sure you have everything committed and pushed to your github repo.
=end
