students = {
  :cohort1 => 34,
  :cohort2 => 42,
  :cohort3 => 22
}

def show_cohort(hash)
	hash.each { |k, v| puts "#{k}: #{v}" }
end

students[:cohort4] = 43

### show_cohort(students)

# Output cohort names with .keys
# students.keys.each { |k| puts k }


# Increase cohorts by 5%
students.each do |k, v|
	students[k] = (v*1.05).round
end

### show_cohort(students)


students.delete(:cohort2)

show_cohort(students)

# Count students.
total = 0
students.each { |k, v| total += v }
# puts total # => 104


=begin 
After each step, run your program to verify that you've got things working. Don't forget to commit your code too.

For each cohort, display the cohort name and the amount of students like so. It's probably best that you create a method. 
Add 43 as the amount of students for cohort 4.
Output all of the cohort names with the keys method.
The classrooms have been expanded: increase each cohort number by 5% and display the new results.
Delete the 2nd cohort, and redisplay the cohorts
BONUS: Calculate the total amount of students in all cohorts by using each and incrementing a variable. Output the result.

=end


