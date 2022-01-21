def reverser
  arr = yield.split(" ")
  arr.map! do |word|
    word.reverse
  end
  arr.join(" ")
end

def adder(n=1)
  val = yield
  val + n
end

def repeater(n=1)
  n.times { yield }
end