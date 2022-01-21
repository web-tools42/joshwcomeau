require 'bcrypt'

class User < ActiveRecord::Base
  has_secure_password
  has_one :api_key

  after_create :create_api_key

  validates :password, length: { minimum: 3 }
  validates :password, confirmation: true
  validates :password_confirmation, presence: true

  validates :email, uniqueness: true  


  private

  def create_api_key
  	ApiKey.create user: self
  end
end
