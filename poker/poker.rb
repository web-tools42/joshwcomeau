##### POKER HAND EVALUATOR v.0.1 #####

### Built a basic poker hand evaluator for Project Euler #54, decided to expand that program into a standalone poker evaluator.
# CURRENT: Takes two poker hands, finds a winner.
# PLANNED: 
# 	- Generates random poker hands.
# 	- Takes a poker hand, predicts how likely it is to win.
# 	- Verbose version, where everything is explained to the user.

######################################



# CLASS Card. Each card instance holds its suit (H), value (11 for Jack) and number (1-52, for each card)
# 	example. Initializes with "KD", the King of Diamonds. card.suit is D, card.value is 13, card number is 26.
class Card

	attr_accessor :suit, :value

	def initialize(card)
		@suit = card[-1]

		@value = card[0].to_i if card[0].to_i != 0

		@value ||= {
			"T" => 10,
			"J" => 11,
			"Q" => 12,
			"K" => 13,
			"A" => 14
		}[card[0]]
	end

end



# CLASS - Hand. Each hand is an object containing 5 Card objects. Hand instances store their poker hand (eg. Straight, Queen high)
class Hand
	attr_reader :ranking, :rankingcard, :tiebreaker, :tiebreaker2, :tiebreaker3

	def initialize(hand)
		# Prepare our cards
		@hand = hand.split(" ")
		@c1 = Card.new(@hand[0])
		@c2 = Card.new(@hand[1])
		@c3 = Card.new(@hand[2])
		@c4 = Card.new(@hand[3])
		@c5 = Card.new(@hand[4])

		@values = [@c1.value, @c2.value, @c3.value, @c4.value, @c5.value].sort
		@suits 	= [@c1.suit, @c2.suit, @c3.suit, @c4.suit, @c5.suit]

		# Find our ranking variables
		self.eval
	end


	# METHOD - figures out what our best hand is. Sets @ranking from 1-10 (1 = high card, 10 = royal flush), @rankingcard for the ranking's
	# data (8 for pair of 8s, [7, 2] for two pair (7s and 2s)) and @tiebreaker for the next best (4D 4C AH KD 8S = 14, for the ace high)
	def eval
		

		# STRAIGHT CHECKER
		# Check if we have a straight. A hand has a straight if the difference between the highest and lowest cards is 4 and there are no pairs.
		if @values[4] - @values[0] == 4 && @values.uniq.length == 5
			@straight = true
		# Check if we have an ace-low straight (A - 5). The above bit doesn't find it, because aces are assumed to be high.
		elsif @values[0] == 2 && @values[1] == 3 && @values[2] == 4 && @values[3] == 5 && @values[4] == 14
			@straight = true
		# Set @straight to false if it hasn't yet been assigned to true
		else 
			@straight = false
		end

		# FLUSH CHECKER
		@suits.uniq.length == 1 ? @flush = true : @flush = false


		# ROYAL FLUSH
		if @straight && @flush && @values[4] == 14
			@ranking = 10 
			return
		end


		# STRAIGHT FLUSH
		if @straight && @flush
			@ranking, @rankingcard = 9, @values[4] 
			return
		end

		# We're at the point where the next best hand is a pair. So, we need a way of figuring out which elements are the pairs, and which are
		# the kickers. we need a hash, where the key is the card number, and the value is how many times its repeated.
		# ex. "4C 4D 4H 3S 3D" -> { 4: 3, 3: 2 }
		@pairhash = Hash.new
		@values.each do |v|
			@pairhash[v] ||= 0
			@pairhash[v] += 1
		end

		# FOUR OF A KIND
		if @pairhash.key(4)
			@ranking, @rankingcard = 8, @pairhash.key(4)
			return
		end
		# FULL HOUSE
		if @pairhash.key(3) && @pairhash.key(2)
			@ranking, @rankingcard = 7, @pairhash.key(3)
			return
		end
		# Upon reflection, it is impossible to tie with a full house: Either your set of 3 cards is higher or lower than your opponents.
		# So, we do not need to store secondary tiebreaker info.


		# FLUSH
		if @flush
			@ranking, @rankingcard = 6, @values[4]
			return
		end
		
		# STRAIGHT
		if @straight
			@ranking, @rankingcard = 5, @values[4]
			return
		end

		# THREE OF A KIND
		if @pairhash.key(3)
			@values.delete(@pairhash.key(3))	# We're deleting our 3-of-a-kind from our values array so that we can easily get
												# Our highest non-pair card (and finally the last single card) for tiebreakers
			@ranking, @rankingcard, @tiebreaker, @tiebreaker2 = 4, @pairhash.key(3), @values[-1], @values[-2]
			return
		end

		# TWO PAIR
		if @values.uniq.length == 3
			pairs = @pairhash.select { |k, v| v == 2}.to_a

			@ranking, @rankingcard, @tiebreaker, @tiebreaker2 = 3, pairs[-1][0], pairs[0][0], @pairhash.key(1)
			return
		end

		# ONE PAIR
		if @values.uniq.length == 4
			@values.delete(@pairhash.key(2))
			@ranking, @rankingcard, @tiebreaker, @tiebreaker2, @tiebreaker3 = 2, @pairhash.key(2), @values[-1], @values[-2], @values[-3]
			return
		end

		# HIGH CARD
		@ranking, @rankingcard, @tiebreaker, @tiebreaker2, @tiebreaker3 = 1, @values[-1], @values[-2], @values[-3], @values[-4]

		return 

	end
end

# METHOD - Run through the file, pulling lines, finding winners and keeping tally. In other words, solve the Euler problem.
def solve(hands, fileflag=false)
	hand1wins, hand2wins, games = 0, 0, 0

	hands = File.open(hands, "r") if fileflag

	hands.each_line do |line|
		hand1, hand2 = Hand.new(line[0, 14]), Hand.new(line[15, 29])
		handarray = [ 	[hand1.ranking, hand2.ranking], 			# Our hand ranking ( 1 == High Card, 10 == Royal Flush)
						[hand1.rankingcard, hand2.rankingcard],  	# Our ranking's main card (eg. 8 in an 8-high straight)
						[hand1.tiebreaker, hand2.tiebreaker],  		# The kicker (Jack, numerically 11, in "4C 4D JH 2D 5C")
						[hand1.tiebreaker2, hand2.tiebreaker2],  	# and so on.
						[hand1.tiebreaker3, hand2.tiebreaker3]
					]

		games += 1
		
		# Iterate through our array of arrays. For each one, compare v1 with v2. If there is a clear winner, add the point.
		# Otherwise, cycle through to the next round, and repeat until a winner is found.
		handarray.each do |arr|
			if arr[0] > arr[1]
				hand1wins += 1
				break
			elsif arr[0] < arr[1]
				hand2wins += 1
				break
			end
		end
	end

	# Return format: [number of wins, number of rounds, win percentage]
	return [hand1wins.to_s, games.to_s, (hand1wins.to_f / games * 100).round]
end



hands = "8C TS KC 9H 4S 7D 2S 5D 3S AC\n5C AD 5D AC 9C 7C 5H 8D TD KS\n3H 7H 6S KC JS QH TD JC 2D 8S\nTH 8H 5C QS TC 9H 4D JC KS JS\n7C 5H KC QH JD AS KH 4C AD 4S\n5H KS 9C 7D 9H 8D 3S 5D 5C AH\n6H 4H 5C 3H 2H 3S QH 5S 6S AS\nTD 8C 4H 7C TC KC 4C 3H 7S KS\n7C 9C 6D KD 3H 4C QS QC AC KH\nJC 6S 5H 2H 2D KD 9D 7C AS JS\nAD QH TH 9D 8H TS 6D 3S AS AC\n2H 4S 5C 5S TC KC JD 6C TS 3C\nQD AS 6H JS 2C 3D 9H KC 4H 8S\nKD 8S 9S 7C 2S 3S 6D 6S 4H KC\n3C 8C 2D 7D 4D 9S 4S QH 4H JD\n8C KC 7S TC 2D TS 8H QD AC 5C\n3D KH QD 6C 6S AD AS 8H 2H QS\n6S 8D 4C 8S 6C QH TC 6D 7D 9D\n2S 8D 8C 4C TS 9S 9D 9C AC 3D"

# Solve from file
solution = solve("../poker_euler54.txt", true)

# Solve from our 'hands' string
# solution = solve(hands)

puts "Player 1 won #{solution[0]} out of #{solution[1]} games (#{solution[2]}%)."


