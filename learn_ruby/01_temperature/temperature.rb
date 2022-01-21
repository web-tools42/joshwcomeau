def ftoc(temp)
  ( ( temp - 32 ) * 5/9 ).ceil
end

def ctof(temp)
  ((temp * 9/5)+ 32).round(1)
end