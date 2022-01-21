class AddDescriptionToMix < ActiveRecord::Migration
  def change
    add_column :mixes, :description, :text
  end
end
