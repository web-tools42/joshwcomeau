require 'rspec'
require_relative 'changer'


describe Changer do
  it 'can change one quarter' do
    Changer.make_change(25).should == [25]
  end

  it 'can change multiple quarters' do
    Changer.make_change(50).should == [25, 25]
  end

  it 'can change one dime' do
    Changer.make_change(10).should == [10]
  end

  it 'can change multiple dimes' do
    Changer.make_change(20).should == [10, 10]
  end

  it 'can change small complex amounts' do
    Changer.make_change(7).should == [5, 1, 1]
  end

  it 'can change large complex amounts' do
    Changer.make_change(68).should == [25, 25, 10, 5, 1, 1, 1]
  end
end