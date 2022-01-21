# def translate(word)
#   vowels = ['a','e','i','o','u','y']
#   if vowels.include?(word[0])
#     return word + 'ay'
#   else
#     word += word[0]   # Add the first letter to the end
#     word[0] = ''      # remove the first letter.
#     word + 'ay'       # Add the 'ay', return.
#   end
# end


def translate(words)
  vowels = ['a','e','i','o','u','y']
  words = words.split(" ")
  words.map! do |word|
    until vowels.include?(word[0])
      word += word[0]
      word[0] = ''
    end
    word += 'ay'
  end
  words.join(" ")
end