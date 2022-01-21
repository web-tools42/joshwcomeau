class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.string :comment
      t.integer :product_id
      t.integer :user_id

      t.timestamps
    end
  end
end
