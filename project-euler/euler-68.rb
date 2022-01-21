=begin 
Consider the following "magic" 3-gon ring, filled with the numbers 1 to 6, and each line adding to nine.


Working clockwise, and starting from the group of three with the numerically lowest external node (4,3,2 in this example), each solution can 
be described uniquely. For example, the above solution can be described by the set: 4,3,2; 6,2,1; 5,1,3.

It is possible to complete the ring with four different totals: 9, 10, 11, and 12. There are eight solutions in total.

Total	Solution Set
9	4,2,3; 5,3,1; 6,1,2
9	4,3,2; 6,2,1; 5,1,3
10	2,3,5; 4,5,1; 6,1,3
10	2,5,3; 6,3,1; 4,1,5
11	1,4,6; 3,6,2; 5,2,4
11	1,6,4; 5,4,2; 3,2,6
12	1,5,6; 2,6,4; 3,4,5
12	1,6,5; 3,5,4; 2,4,6
By concatenating each group it is possible to form 9-digit strings; the maximum string for a 3-gon ring is 432621513.

Using the numbers 1 to 10, and depending on arrangements, it is possible to form 16- and 17-digit strings. What is the maximum 16-digit 
string for a "magic" 5-gon ring?

	####### THOUGHTS ######
	- Our variables: Sides (3 in 3-gon, 5 in 5-gon), values ( sides * 2. 6 or 10), sum (9-12 in 3-gon)
	- we're only looking at 16-digit strings, which means the '10' needs to be on the external node (otherwise, it would be repeated twice for
	the extra digit). If a solution exists, we want the external nodes to be 8, 9, and 10, for the biggest concatenated string.
	
	- the format can be thought of as: ABC; DCE; FEG; HGI; JIB
	    - segment 2 puts segment 1's 3rd place in its second place. s2-2 = s1-3
	    - that trend continues. s3-2 = s2-3. s4-2 = s3-3
	    - S5 only introduces 1 new number, the first ('J'). s5-2 = s4-3, and s5-3 = s1-2

	- segments are listed clockwise from the lowest external node. This means s1-1 < s2-1, s3-1, etc. s1-1 cannot be more than sides+1
		for example, in a 5-gon ring, s1-1 cannot be bigger than 6.  

	- Going to use a bottom-up strategy. Step 1: Create a method that finds all solutions on a 3-gon ring that sum 'n' (n = 9 to 12)

=end

def ring_solutions(sides=3, sum=9)
	# make an array of all the numbers we'll need to fill in. 
	remaining = [*1..sides*2]

	# Lets work out all possible first-segment options. Remember, s1-1 cannot be more than sides+1.
	# eventual format: seg1 = ['432','423','324','135'...]

	seg1 = [*126..432].select do |i|
		i = i.to_s
		currentsum = i[0].to_i + i[1].to_i + i[2].to_i
		true if currentsum == 9
	end

	seg2, seg3 = [], []

	# Now, we could iterate through each of these solutions, but really, we're looking for the biggest string. First number is obviously
	# the most important, so we should just be able to break the loop after the first found solution?
	seg1.reverse!.each do |s1|

		# Work out second segment. First, build an array of potential numbers to pick from.
		s2_remaining = remaining.select do |i| 
			i_string = i.to_s
			s1_string = s1.to_s
			i_string != s1_string[0] && i_string != s1_string[1] 		# We're leaving s1's third number in there because it's repeated.
		end
		# First number = s1-1 < s2-1 < sides*2  => between 4 and 6 inclusive
		# Second number = s1-3
		# Third number = anything not already used. 
		s2_perms = s2_remaining.permutation(3).map(&:join).select do |p|
			p.to_s[1] == s1.to_s[2]
		end

		# Work out our last unused number.
		s2_perms.each do
			
		end


	end
end


puts ring_solutions










