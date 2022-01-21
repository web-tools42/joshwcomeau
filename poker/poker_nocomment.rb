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

class Hand
	attr_reader :ranking, :rankingcard, :tiebreaker, :tiebreaker2, :tiebreaker3

	def initialize(hand)
		@hand = hand.split(" ")
		@c1 = Card.new(@hand[0])
		@c2 = Card.new(@hand[1])
		@c3 = Card.new(@hand[2])
		@c4 = Card.new(@hand[3])
		@c5 = Card.new(@hand[4])

		@values = [@c1.value, @c2.value, @c3.value, @c4.value, @c5.value].sort
		@suits 	= [@c1.suit, @c2.suit, @c3.suit, @c4.suit, @c5.suit]

		self.eval
	end

	def eval
		if @values[4] - @values[0] == 4 && @values.uniq.length == 5
			@straight = true
		elsif @values[0] == 2 && @values[1] == 3 && @values[2] == 4 && @values[3] == 5 && @values[4] == 14
			@straight = true
		else 
			@straight = false
		end

		@suits.uniq.length == 1 ? @flush = true : @flush = false

		if @straight && @flush && @values[4] == 14
			@ranking = 10 
			return
		end

		if @straight && @flush
			@ranking, @rankingcard = 9, @values[4] 
			return
		end

		@pairhash = Hash.new
		@values.each do |v|
			@pairhash[v] ||= 0
			@pairhash[v] += 1
		end

		if @pairhash.key(4)
			@ranking, @rankingcard = 8, @pairhash.key(4)
			return
		end

		if @pairhash.key(3) && @pairhash.key(2)
			@ranking, @rankingcard = 7, @pairhash.key(3)
			return
		end

		if @flush
			@ranking, @rankingcard = 6, @values[4]
			return
		end
		
		if @straight
			@ranking, @rankingcard = 5, @values[4]
			return
		end

		if @pairhash.key(3)
			@values.delete(@pairhash.key(3))	
			@ranking, @rankingcard, @tiebreaker, @tiebreaker2 = 4, @pairhash.key(3), @values[-1], @values[-2]
			return
		end

		if @values.uniq.length == 3
			pairs = @pairhash.select { |k, v| v == 2}.to_a

			@ranking, @rankingcard, @tiebreaker, @tiebreaker2 = 3, pairs[-1][0], pairs[0][0], @pairhash.key(1)
			return
		end

		if @values.uniq.length == 4
			@values.delete(@pairhash.key(2))
			@ranking, @rankingcard, @tiebreaker, @tiebreaker2, @tiebreaker3 = 2, @pairhash.key(2), @values[-1], @values[-2], @values[-3]
			return
		end

		@ranking, @rankingcard, @tiebreaker, @tiebreaker2, @tiebreaker3 = 1, @values[-1], @values[-2], @values[-3], @values[-4]

		return 

	end
end

def solve(hands, fileflag=false)
	hand1wins, hand2wins, games = 0, 0, 0

	hands = File.open(hands, "r") if fileflag

	hands.each_line do |line|
		hand1, hand2 = Hand.new(line[0, 14]), Hand.new(line[15, 29])
		handarray = [ 	[hand1.ranking, hand2.ranking], 			
						[hand1.rankingcard, hand2.rankingcard],  	
						[hand1.tiebreaker, hand2.tiebreaker],  		
						[hand1.tiebreaker2, hand2.tiebreaker2],  	
						[hand1.tiebreaker3, hand2.tiebreaker3]
					]

		games += 1
		
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

	return [hand1wins.to_s, games.to_s, (hand1wins.to_f / games * 100).round]
end



hands = "8C TS KC 9H 4S 7D 2S 5D 3S AC\n5C AD 5D AC 9C 7C 5H 8D TD KS\n3H 7H 6S KC JS QH TD JC 2D 8S\nTH 8H 5C QS TC 9H 4D JC KS JS\n7C 5H KC QH JD AS KH 4C AD 4S\n5H KS 9C 7D 9H 8D 3S 5D 5C AH\n6H 4H 5C 3H 2H 3S QH 5S 6S AS\nTD 8C 4H 7C TC KC 4C 3H 7S KS\n7C 9C 6D KD 3H 4C QS QC AC KH\nJC 6S 5H 2H 2D KD 9D 7C AS JS\nAD QH TH 9D 8H TS 6D 3S AS AC\n2H 4S 5C 5S TC KC JD 6C TS 3C\nQD AS 6H JS 2C 3D 9H KC 4H 8S\nKD 8S 9S 7C 2S 3S 6D 6S 4H KC\n3C 8C 2D 7D 4D 9S 4S QH 4H JD\n8C KC 7S TC 2D TS 8H QD AC 5C\n3D KH QD 6C 6S AD AS 8H 2H QS\n6S 8D 4C 8S 6C QH TC 6D 7D 9D\n2S 8D 8C 4C TS 9S 9D 9C AC 3D"

solution = solve("../poker_euler54.txt", true)


puts "Player 1 won #{solution[0]} out of #{solution[1]} games (#{solution[2]}%)."


