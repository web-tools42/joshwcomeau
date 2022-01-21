class Person
  def initialize(name)
    @name = name
  end

  def greeting
    puts "Hi, my name is #{@name}"
  end
end

class Student < Person
  def learn
    puts "I get it!"
  end
end


class Instructor < Person
  def teach
    puts "Everything in Ruby is an Object"
  end
end


Chris = Instructor.new("Chris")
Christina = Student.new("Christina")

Chris.greeting
Chris.teach

Christina.greeting
Christina.learn

Christina.teach
# => raises an 'undefined method' error because .teach is a method belonging to the 
# Instructor class, and we're trying to call it on a Student instance.


