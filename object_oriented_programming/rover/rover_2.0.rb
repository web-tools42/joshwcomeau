#### MARS ROVER PROBLEM.
#
# The Plan: A Rover class that handles its movement, a Grid class that handles the boundaries, and a Mission Control class
# that deploys rovers to grids and sends movement instructions.
#
# Rover's states will be x, y, and d (for direction it's facing). Grid's state will be max_x and max_y for the grid size.
# Rover's behavior will be to turn itself and move itself. 

class Rover
  DIRECTIONS = ["N","E","S","W"]
  MOVEMENT = {
    N: [0, 1],
    E: [1, 0],
    S: [0, -1],
    W: [-1, 0]
  }
  @@counter = 0

  attr_reader :id, :x, :y, :d

  def initialize(x, y, d)
    @x, @y, @d = x, y, d
    @@counter += 1
    @id = @@counter
  end

  def turn(direction) 
    old_index = DIRECTIONS.index(@d)

    if direction == "R"
      @d = DIRECTIONS.rotate(1)[old_index] 
    elsif direction == "L"
      @d = DIRECTIONS.rotate(-1)[old_index]
    end
  end

  def move
    move_x, move_y = MOVEMENT[@d.to_sym][0], MOVEMENT[@d.to_sym][1]
    @x += move_x
    @y += move_y
  end

end

class Plateau
  def initialize(max_x, max_y)
    @max_x, @max_y = max_x, max_y
  end

  def out_of_bounds(x, y)
    return true if x > @max_x ||
                   x < 0 ||
                   y > @max_y ||
                   y < 0
  end
end


class MissionControl
  def initialize(command)
    @command = command
    @status = "initialized"
  end

  def mission_setup

    # OUR INPUT FORMAT:
    # 5 5           > Our first line is our plateau size. 
    # -------------
    # 1 2 N         > Lines 2 and 3 are paired, with the first being our initial start position and header,
    # LMLRMMRLM     and the second line being a series of move and turn instructions.
    # -------------
    # 3 4 E         > Another 2-line pair, 1 pair per bot.
    # RMMRLLMLMR

    command_array = @command.split("\n")
    
    grid_x, grid_y = command_array.shift.split(" ")
    @grid = Plateau.new(grid_x.to_i, grid_y.to_i)

    # Generate a hash, with rovers as the keys and instructions as the values. Using 2 lines at a time from our command array.
    @rovers = {}
    command_array.each_slice(2) do | botslice |
      x, y, d = botslice[0].split(" ")
      @rovers[Rover.new(x.to_i, y.to_i, d)] = botslice[1]
    end
  end


  def rover_event(rover, instructions) # Does a single rover event (either move straight or turn)
    instructions.each_char do |character|
      if character == 'M'
        rover.move
      else
        rover.turn(character)
      end
    end

  end


  def mission_status 
    if @status == "initialized" then return "We have initialized our mission, and we're waiting for you to hit the big green button."
    elsif @status == "crashed" then return "We crashed!!!"
    elsif @status == "complete"
      @rovers.each { | rover, instructions | puts "Rover #{rover.id} is at (#{rover.x}, #{rover.y}) and is facing #{rover.d}." }
    end
  end

  def run_mission
    mission_setup

    @rovers.each do | rover, instructions |
      rover_event(rover, instructions)
      if @grid.out_of_bounds(rover.x, rover.y)
        @crashed = true
        @status = "crashed"
      end
    end

    @status = "complete" unless @crashed
  end



end





instructions = "5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM
4 2 N
MLRLRLRLRM
1 1 W
MRMRLLRLLRM"

mission = MissionControl.new(instructions)

mission.run_mission

p mission.mission_status



