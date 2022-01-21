class Yoyo < ActiveRecord::Base
	has_and_belongs_to_many :manufacturers
	has_many :images
end
