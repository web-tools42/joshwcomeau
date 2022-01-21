require 'rails_helper'

describe "Users API" do
	describe "Registering a new user" do
		before(:each) do
			@user  = {
	    	email: 		"test@test.com",
	    	password: "testtest1",
	    	password_confirmation: 		"testtest1"
	    }
	    post "/api/users", {
	    	user: @user
	    }, format: :json


		end

		it "created a new user" do
	    expect(User.last["email"]).to eq(@user[:email])
	  end

	  it "attached an API key to the new user" do
	    expect(User.last.api_key.access_token).to be_truthy
	  end

		# it "returns an array of manufacturer names" do
		# 	get "/api/yoyos", {}, { "Accept" => "application/json" }

		# 	expect(response.status).to eq(200)

		# 	manufacturers = json.map { |m| m["name"] }

		# 	expect(manufacturers).to match_array(["YoYoCompany", "Company Lodge Yoyo Works"])

		# end




	end
end