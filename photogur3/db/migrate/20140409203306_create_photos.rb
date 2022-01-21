class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.string :title
      t.string :uploader
      t.string :url

      t.timestamps
    end
  end
end
