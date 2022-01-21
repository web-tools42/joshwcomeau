=begin PROBLEM DESCRIPTION

In the card game poker, a hand consists of five cards and are ranked, from lowest to highest, in the following way:

High Card: Highest value card.
One Pair: Two cards of the same value.
Two Pairs: Two different pairs.
Three of a Kind: Three cards of the same value.
Straight: All cards are consecutive values.
Flush: All cards of the same suit.
Full House: Three of a kind and a pair.
Four of a Kind: Four cards of the same value.
Straight Flush: All cards are consecutive values of same suit.
Royal Flush: Ten, Jack, Queen, King, Ace, in same suit.

The cards are valued in the order:
2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, Ace.

If two players have the same ranked hands then the rank made up of the highest value wins; for example, a pair of eights beats a pair of fives. 
But if two ranks tie, for example, both players have a pair of queens, then highest cards in each hand are compared; if the highest cards tie 
then the next highest cards are compared, and so on.

The file, poker_euler54.txt, contains one-thousand random hands dealt to two players. Each line of the file contains ten cards (separated by a 
single space): the first five are Player 1's cards and the last five are Player 2's cards. You can assume that all hands are valid (no invalid 
characters or repeated cards), each player's hand is in no specific order, and in each hand there is a clear winner.

How many hands does Player 1 win?

=end

### SCROLL TO THE END FOR MY THOUGHTS AND CONCLUSION. ###

# CLASS Card. Each card instance holds its suit (H), value (11 for Jack) and number (1-52, for each card)
# 	example. Initializes with "KD", the King of Diamonds. card.suit is D, card.value is 13, card number is 26.
class Card

	attr_accessor :suit, :value

	def initialize(card)
		@suit = card[-1]

		case card[0]
		when "T"
			@value = 10
		when "J"
			@value = 11
		when "Q"
			@value = 12
		when "K"
			@value = 13
		when "A"
			@value = 14
		else
			@value = card[0].to_i
		end

	end

end



# CLASS - Hand. Each hand is an object containing 5 Card objects. Hand instances store their poker hand (eg. Straight, Queen high)
class Hand
	attr_reader :hand, :c1, :c2, :c3, :c4, :c5, :straight, :flush, :ranking, :rankingcard, :tiebreaker, :tiebreaker2, :tiebreaker3, :pairhash, :pairs
	attr_accessor :prep

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

	# METHOD - turns our string "4D KH 2S" into card objects, stored in Hand.
	def prep
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
def solve(filepath)
	hand1wins, hand2wins = 0, 0
	file = File.open(filepath, "r").each_line do |line|
		hand1, hand2 = Hand.new(line[0, 14]), Hand.new(line[15, 29])
		handarray = [ 	[hand1.ranking, hand2.ranking], 			# Our hand ranking ( 1 == High Card, 10 == Royal Flush)
						[hand1.rankingcard, hand2.rankingcard],  	# Our ranking's main card (eg. 8 in an 8-high straight)
						[hand1.tiebreaker, hand2.tiebreaker],  		# The kicker (Jack, numerically 11, in "4C 4D JH 2D 5C")
						[hand1.tiebreaker2, hand2.tiebreaker2],  	# and so on.
						[hand1.tiebreaker3, hand2.tiebreaker3]
					]
		
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

	return hand1wins
end

solution = solve("poker_euler54.txt")
puts solution



=begin THOUGHTS

I spent a long time thinking about how to organize the data in this problem. In the end, I opted for a class, Card, that would take a substring
of the supplied hand (eg. "KS", for King of Spades), and convert it into a more manageable object with card.suit returning 'S' and card.value
returning an integer of converted card values (in this case, 13. Jack is 11, Queen is 12, and Ace is 14).

This integer conversion made things a lot easier, because now a pair of Queens can easily be said to beat a pair of Jacks, because 12 > 11.

I use a separate class, Hand, for dealing with groups of cards. Each instance is called with 5 cards in string format, eg. "3C 8D 5H KS 8C".
The string is split and each card is turned into a Card instance, range c1-c5. For convenient calculating, I keep an array of the hand's
integer values, and an array of its suits.

Hand has a method eval(), called automatically by the instantiation, which adds up to 5 important variables:
	- hand.ranking, holds an integer from 1 to 10, where 1 is High Pair and 10 is Royal Flush
	- hand.rankingcard, holds the 'prominent' card. In a straight/flush it's the high card, in 2 pair its the highest pair.
	- hand.tiebreaker, holds the next most important card. the 'kicker' in an n-of-a-kind.
	- hand.tiebreaker2, and hand.tiebreaker3, are the next most important cards for further tiebreaking rounds.

	*Note: Not all hands will have all 5 variables assigned. A straight, for example, only needs hand.rankingcard

We start by searching for a straight and for a flush, so that we only need to calculate this data once (there are 3 different hands
that could contain a straight - Royal Flush, Straight Flush, and Straight). Then we start with the highest possible rank, a Royal Flush,
and work down from there. When we find a match, it is the highest possible hand ranking, so we return the function, satisfied.

Finally, I wrote a method, creatively named 'solve', which solves Euler problem 54, by opening the text file and iterating through each line.
For each line, we break it into 2 Hand instances, and start comparing. 

The best way I could see to test each line's two hands was to create an array of arrays. The first contained array would contain player 1's
hand ranking (1-10) in the first position, player 2's hand ranking in the second. The second array contains the players' "rankingcard"s, the
third array contains the players' "tiebreaker", and so on.

We iterate through these arrays, checking if array[0] is greater than array[1]. If it is, Player 1 scores a point. If it is LESS than array[1],
player 2 scores a point. In either of these cases, we break the loop. Otherwise, it means we have a tie, so we move on to the next iteration,
and we repeat this process until a point is awarded.

##### CONCLUSION #####
# While definitely not the most efficient Poker sorting algorithm, this solution interprets and compares 2000 poker hands in 0.035 seconds.
# Also, Player 1 is unlucky, as he only wins 38% of the rounds.



=end
