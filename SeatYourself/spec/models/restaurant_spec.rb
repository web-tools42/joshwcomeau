require 'spec_helper'
require 'restaurant'



describe Restaurant do
  let (:resto) { Restaurant.new(name: 'Olive Garden', capacity: 75)}

  it "should have a name and a capacity" do
    resto.name.should_not == nil && resto.capacity.should_not == nil
  end

  

end