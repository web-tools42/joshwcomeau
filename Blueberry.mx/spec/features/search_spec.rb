require 'rails_helper.rb'

feature "Look up a mix", js: true  do
  scenario "Fill in search to find a mix" do
    visit '/'
    fill_in 'keywords', with: 'chil'
    click_on 'Search'

    expect(page).to have_content("ChilZone")
  end
end