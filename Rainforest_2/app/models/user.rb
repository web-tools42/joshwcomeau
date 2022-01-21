class User < ActiveRecord::Base
  has_many :products
  has_many :reviews

  has_secure_password

end
