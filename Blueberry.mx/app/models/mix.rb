# == Schema Information
#
# Table name: mixes
#
#  id         :integer          not null, primary key
#  name       :string(255)
#  audio_url  :text
#  length     :integer
#  photo_url  :text
#  played     :integer
#  liked      :integer
#  downloaded :integer
#  created_at :datetime
#  updated_at :datetime
#

class Mix < ActiveRecord::Base
end
