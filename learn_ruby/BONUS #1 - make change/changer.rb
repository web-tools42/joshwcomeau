class Changer
  def self.make_change(cents)
    change = []
    remainder = cents

    while remainder > 0

      if remainder >= 25
        change << 25
        remainder -= 25
      
      elsif remainder >= 10
        change << 10
        remainder -= 10
      
      elsif remainder >= 5
        change << 5
        remainder -= 5
      
      else
        change << 1
        remainder -= 1
      end
    end

    change
  end
end
