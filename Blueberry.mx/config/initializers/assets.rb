# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'


# Because of stupid Rails 4.1+ being super sensitive, we have to tell it about everything we want.
Rails.application.config.assets.precompile += %w( 
  teaspoon.css
  teaspoon-teaspoon.js
  teaspoon-jasmine.js  
  jasmine/1.3.1.js
)

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )
