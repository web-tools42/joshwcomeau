def add(a, b)
  a + b
end

def subtract(a, b)
  a - b
end

def sum(arr)
  arr.inject(0) { |result, item| result + item }
end

def multiply(*args)
  args.inject() { |result, item| result * item }
end

def fac(num)
  total = 1
  num.downto(1) { |n| total *= n}
  total
end