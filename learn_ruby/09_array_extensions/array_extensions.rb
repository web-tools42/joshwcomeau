class Array
  def sum
    if self.empty?
      return 0
    end
    inject(:+)
  end

  def square
    unless self.empty?
      self.map { |x| x**2 }
    else
      return self
    end
  end

  def square!
    self.map! { |x| x**2 }
  end

end