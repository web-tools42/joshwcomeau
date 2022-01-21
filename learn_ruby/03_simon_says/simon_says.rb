def echo(str)
  str
end

def shout(str)
  str.upcase
end

def repeat(str, n=2)
  arr = []
  (n).times { arr << str }
  arr.join(" ")
end

def start_of_word(str, len)
  str[0,len]
end

def first_word(str)
  str.split(" ")[0]
end

def titleize(str)
  little_words = %w(and the over in a)
  arr = str.split(" ")
  arr[0].capitalize!    # Always capitalize the first word
  arr.each do |word|
    word.capitalize! unless little_words.include?(word)
  end
  arr.join(" ")

end