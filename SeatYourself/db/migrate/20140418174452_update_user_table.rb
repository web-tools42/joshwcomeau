class UpdateUserTable < ActiveRecord::Migration
  def change
    add_column :users, :password_digest, :string
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :active_status, :string
    add_column :users, :user_type, :string
  end
end
