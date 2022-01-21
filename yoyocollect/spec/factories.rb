FactoryGirl.define do
	factory :manufacturer do
	end

	factory :yoyo do
		manufacturers {[FactoryGirl.create(:manufacturer)]}
	end

	factory :user do
  end
  
end