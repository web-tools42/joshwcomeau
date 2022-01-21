class Timer
  attr_accessor :seconds

  def initialize
    @seconds = 0
  end

  def time_string
    hours = @seconds / 3600
    minutes = (@seconds % 3600) / 60
    seconds = (@seconds % 60)

    "#{"%02d" % hours.to_s}:#{"%02d" % minutes.to_s}:#{"%02d" % seconds.to_s}"
  end  
end