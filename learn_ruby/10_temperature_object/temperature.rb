class Temperature
  def initialize(temphash)
    @temp = temphash[:f] || temphash[:c]
    @unit = temphash.keys[0]
  end

  def to_fahrenheit
    return @temp if @unit == :f
    ((@temp * 9/5) + 32).round(1)
  end

  def to_celsius
    return @temp if @unit == :c
    ((@temp - 32) * 5/9).ceil
  end

  def self.in_celsius(temp)
    Temperature.new({c: temp})
  end

  def self.in_fahrenheit(temp)
    Temperature.new({f: temp})
  end


end

class Celsius < Temperature
  def initialize(temp)
    @temp = temp
    @unit = :c
  end
end

class Fahrenheit < Temperature
  def initialize(temp)
    @temp = temp
    @unit = :f
  end
end

=begin
 
def ftoc(temp)
  ( ( temp - 32 ) * 5/9 ).ceil
end

def ctof(temp)
  ((temp * 9/5)+ 32).round(1)
end 

  
=end