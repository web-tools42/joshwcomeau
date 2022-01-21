require 'rails_helper'

describe "Yoyos API" do
	before(:each) do
		@company  = FactoryGirl.create(:manufacturer, name: "YoYoCompany", id: 1)
		@company2 = FactoryGirl.create(:manufacturer, name: "Company Lodge Yoyo Works", id: 2)
		@yoyo1 		= FactoryGirl.create(:yoyo, manufacturers: [@company], model: "Spinning Mayhem", diameter: 55, width:43.25)
		@yoyo2 		= FactoryGirl.create(:yoyo, manufacturers: [@company], model: "Spinning Mayhem 2")
		@yoyo3 		= FactoryGirl.create(:yoyo, manufacturers: [@company2], model: "Wooly Elephant")
	end


	describe "GET /api/yoyos" do

		it "returns an array of yoyos" do
			get "/api/yoyos", {}, { "Accept" => "application/json" }

			expect(response.status).to eq(200)

			yoyos = []
			json.each do |m|
				m["yoyos"].each do |y|
					yoyos << y["model"]
				end
			end

			expect(yoyos).to match_array(["Spinning Mayhem", "Spinning Mayhem 2", "Wooly Elephant"])

		end

		it "returns information about a specific yoyo." do
			get "/api/yoyos/#{@yoyo1.id}", {}, { "Accept" => "application/json" }

			expect(response.status).to eq(200)

			yoyo = json

			expect(yoyo["model"]).to eq("Spinning Mayhem")
			expect(yoyo["diameter"]).to eq("55.0")
			expect(yoyo["width"]).to eq("43.25")
		end
	end


	describe "GET /api/manufacturers" do

		it "returns an array of manufacturer names" do
			get "/api/manufacturers", {}, { "Accept" => "application/json" }

			expect(response.status).to eq(200)

			manufacturers = json.map { |m| m["name"] }

			expect(manufacturers).to match_array(["YoYoCompany", "Company Lodge Yoyo Works"])

		end

		it "returns information about a specific manufacturer." do
			get "/api/manufacturers/#{@company.id}", {}, { "Accept" => "application/json" }

			expect(response.status).to eq(200)

			manufacturer = json

			expect(manufacturer["name"]).to eq("YoYoCompany")
		end
	end


	describe "POST /api/yoyos" do

		it "can create a new yoyo" do
	    post "/api/yoyos", {
	    	yoyo: {
		    	model: 		"Puffin 2",
		    	diameter: "53.4",
		    	width: 		"42.3",
		    	weight:   "63.0" 
		    }
	    }, format: :json

	    # response.should be_success
	    expect(response.status).to eq(200)

	    yoyo = json

	    expect(yoyo["model"]).to eq("Puffin 2")
	  end

		it "can create a new yoyo that belongs to multiple manufacturers" do
	    post "/api/yoyos", {
	    	manufacturers: [1, 2],
	    	yoyo: {
		    	model: 		"Puffin 2",
		    	diameter: "53.4",
		    	width: 		"42.3",
		    	weight:   "63.0" 
		    }
	    }, format: :json

	    # response.should be_success
	    expect(response.status).to eq(200)

	    yoyo = json

	    expect(yoyo["model"]).to eq("Puffin 2")
	  end


	end
end