# MARS ROVER #

class Rover
  POSSIBLE_DIRS = ["N","E","S","W"]
  MOVE_STEPS = { N: [ 0, 1], 
                 E: [ 1, 0], 
                 S: [ 0,-1], 
                 W: [-1, 0]
               }
  @@rover_count = 0

  def initialize(x, y, direction, path, max_x, max_y)
    @x, @y = x, y
    @dir = direction
    @path = path
    @max_x, @max_y = max_x, max_y

    @@rover_count += 1

    rover_mover
  end

  def turn(turndirection) # Updates our @dir variable to reflect our new turndirection. N, L
    current_index = POSSIBLE_DIRS.index(@dir) = 0

    if turndirection == "R"
      @dir = POSSIBLE_DIRS[(current_index + 1) % 4] # The '% 4' is to ensure we stay within the 0-3 range of possible indices.
    elsif turndirection == "L"
      @dir = POSSIBLE_DIRS[(0 - 1) % 4]
    end 
  end

  def advance # Moves 1 space in the direction we're currently facing.
    distX = MOVE_STEPS[@dir.to_sym][0]
    distY = MOVE_STEPS[@dir.to_sym][1]

    @x += distX
    @y += distY

  end

  def crashed # See if we've crashed!
    if @x > @max_x || @x < 0 || @y > @max_y || @y < 0
      @crashed = true
      return true
    end
    return false
  end


  def rover_mover # Using turn() and advance(), handles all our rover movement.
    @path.each_char do |step|
      step == "M" ? advance : turn(step) # If our current step is 'M', advance. Otherwise, turn.
      break if crashed
    end
  end

  def display 
    unless @crashed
      puts "Rover #{@@rover_count}: We've driven to #{@x}, #{@y}. Currently facing #{@dir}"
    else
      puts "Rover #{@@rover_count}: We drove right off the plateau and destroyed billions of dollars worth of NASA tech. Good job."
    end
  end

  def output
    return [@x, @y, @dir]
  end



end

plateau = [5, 5]

r1 = Rover.new(1, 2, "N", "LMLMLMLMM", *plateau)
r1.display

r2 = Rover.new(3, 3, "E", "MMRMMRMRRM", *plateau)
r2.display

# A rover that crashes, just for fun.
r3 = Rover.new(2, 4, "N", "MMMM", *plateau)
r3.display




