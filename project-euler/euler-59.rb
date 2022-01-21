##### PROJECT EULER - Problem #59 #####
=begin
  Each character on a computer is assigned a unique code and the preferred standard is ASCII (American Standard Code for Information Interchange). 
  For example, uppercase A = 65, asterisk (*) = 42, and lowercase k = 107.

  A modern encryption method is to take a text file, convert the bytes to ASCII, then XOR each byte with a given value, taken from a secret key. 
  The advantage with the XOR function is that using the same encryption key on the cipher text, restores the plain text; for example, 65 XOR 42 = 107, 
  then 107 XOR 42 = 65.

  For unbreakable encryption, the key is the same length as the plain text message, and the key is made up of random bytes. The user would keep the 
  encrypted message and the encryption key in different locations, and without both "halves", it is impossible to decrypt the message.

  Unfortunately, this method is impractical for most users, so the modified method is to use a password as a key. If the password is shorter than the 
  message, which is likely, the key is repeated cyclically throughout the message. The balance for this method is using a sufficiently long password 
  key for security, but short enough to be memorable.

  Your task has been made easy, as the encryption key consists of three lower case characters. Using cipher1.txt, a file containing the encrypted 
  ASCII codes, and the knowledge that the plain text must contain common English words, decrypt the message and find the sum of the ASCII values in 
  the original text.
=end

def encrypt(message, key)			# Handles both encryption and decryption, assuming you know the key.
	result = ''
	
	# MODE 1: Take an array of integers (the message's 'ord' values).
	if message.is_a? Array 			
		(message.length).times do | i |
			# Using the bitwise XOR operator (^), we'll get our new ASCII value, turn it into a character, and add it to our result variable.
			result += (message[i].to_i ^ key[i % key.length].ord).chr
		end
	# MODE 2: Take the message straight-up, as a string. Not used in the Euler problem, but more generally useful.
	elsif message.is_a? String		
		(message.length).times do | i |
			result += (message[i].ord ^ key[i % key.length].ord).chr
		end

	return result
end

def get_file_array(path)	# Takes a comma-separated string from a file and returns an array
	msg = File.open(path)
	msg.gets.split(",")
end

# There are 17.5k (26**3) possible lowercase combinations from aaa to zzz. We're brute-force checking all of them. 'n' is our minimum requirement
# for a 'solved' decryption; we must find at least n words in the decoded message for it to be considered decoded.
def brute_solve(msg, common, n)
	words_found = 0

	97.upto(122) do | l1 |			# 97.chr = 'a'. 122.chr = 'z'. These numbers represent the range of lowercase letters.	
		97.upto(122) do | l2 |
			97.upto(122) do | l3 |
				
				# Combine our three iterated letters into a string, and try it as the key.
				key = l1.chr + l2.chr + l3.chr
				decrypted = encrypt(msg, key)

				# See how many common words are in our new solved message
				common.each do | word |
					words_found += 1 if decrypted.scan(word).length > 0
				end

				return decrypted if words_found >= n

				words_found = 0 	# reset our count on every iteration.
			end
		end
	end
end

# Once we've found our decoded message, add up the sum of the ASCII values, as per the Euler Problem request.
def add_em_up(msg)
	total = 0
	msg.split("").each { |l| total += l.ord }
	return total
end

############# TIME TO SOLVE #############

# To evaluate if we've correctly discovered the key, we'll use an array of the most common dictionary words. A proper solution should
# have at least n of these words (probably all 5 in this circumstance) 
common_words = ['the','be','to','of','and'] 

# Grab our encrypted message from file
msg = get_file_array('cipher1.txt')


# Get our decrypted method.
decrypted = brute_solve(msg, common_words, 5)

# Solve the Euler problem by getting the sum of the ASCII values
puts add_em_up(decrypted)


# yay! =D