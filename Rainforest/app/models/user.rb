class User < ActiveRecord::Base
  has_many :reviews
  has_many :products, :through => :reviews

  validates :email, presence: true
  validates :email, format: { with: /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,11}/i, message: "must be valid (eg. name@domain.com)"}
  validates :password, length: { in: 6..20 }
  validates :username, presence: true

  has_secure_password


end
