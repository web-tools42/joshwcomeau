class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|

        t.integer :restaurant_id
        t.integer :user_id
        t.string :title
        t.text :content
        t.integer :rating

      t.timestamps
    end
  end
end
