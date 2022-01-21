class User < ActiveRecord::Base
  has_many :reservations
  has_many :restaurants, through: :reservations
  has_many :restaurants_owned, class_name: "Restaurant", foreign_key: "user_id"
  has_many :reviews

  validates :email, :password, :first_name, :last_name, presence: true
  validates :email, format: { with: /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,12}/i, message: "must be a valid email address."}

  has_secure_password

end
