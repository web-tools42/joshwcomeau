class Game
  def find_frames(arr)
    frames = []
    until arr.empty?
      pin = arr.shift
      if pin == 10
        frames << [pin]
        next
      end
      pin2 = arr.shift

      pin2.nil? ? frames << [pin] : frames << [pin, pin2]

      
    end
    frames
  end
  def score(match_array)
    score = 0
    frames = find_frames(match_array)

    frames.each_with_index do |frame, index|
      frame_sum = frame.inject(:+)
      score += frame_sum

      # Calculate bonus points on spares or strikes. 
      # Only necessary for the first 8 rounds.
      if frame_sum == 10 && index < 9 

        next_frames = frames[index+1] + frames[index+2]

        #                   - It's a spare            - It's a strike                            
        frame.length == 2 : score += next_frames[0] : score += next_frames[0] + next_frames[1] 
      end
    end
    score
  end
end


=begin
Rules of Bowling

The game consists of 10 frames as shown above. In each frame the player has 
two opportunities to knock down 10 pins. The score for the frame is the 
total number of pins knocked down, plus bonuses for strikes and spares.

A spare is when the player knocks down all 10 pins in two tries. The bonus 
for that frame is the number of pins knocked down by the next roll. So in 
frame 3 above, the score is 10 (the total number knocked down) plus a bonus 
of 5 (the number of pins knocked down on the next roll.)

A strike is when the player knocks down all 10 pins on his first try. The 
bonus for that frame is the value of the next two balls rolled.

In the tenth frame a player who rolls a spare or strike is allowed to roll 
the extra balls to complete the frame. However no more than three balls 
can be rolled in the tenth frame.
=end


