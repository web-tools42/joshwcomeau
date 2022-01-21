source 'https://rubygems.org'

# Default Rails gems
gem 'rails', '4.1.2'
gem 'pg'
gem 'sass-rails', '~> 4.0.3'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.0.0'
gem 'jquery-rails'
gem 'jbuilder', '~> 2.0'
gem 'sdoc', '~> 0.4.0',           group: :doc
gem 'spring',                     group: :development

# Custom gems
gem 'angular-rails-templates'     # Helps angular templates fetch assets from the pipeline   
gem 'annotate'                    # Copies model DB info into the model rb files
gem 'aws-s3', require: 'aws/s3'   # Amazon S3 
gem 'bourbon'           # Sass augmenter
gem 'bower-rails'       # Front end package manager
gem 'figaro'            # Managing secret keys through environment variables
gem 'foreman'           # Process manager
gem 'neat'              # Semantic grid system
gem 'pry'               # Alternate console, used for debugging
gem 'pry-byebug'        # Pry augmenter, lets you step through method calls line-by-line and batch exit.
gem 'quiet_assets'      # Most convenient gem ever


group :production, :staging do
  # First three for Heroku
  gem 'rails_12factor'        
  gem 'rails_stdout_logging'
  gem 'rails_serve_static_assets'
  # Last two for ShellyCloud
  gem 'thin'
  gem 'shelly-dependencies'
end
group :test, :development do
  gem 'capybara'            # End-to-end feature tests
  gem 'database_cleaner'    # Does what you'd think. Cleans DB between tests.
  gem 'factory_girl_rails'  # <3 Thoughtbot
  gem 'phantomjs'           # Headless Javascript engine
  gem 'rspec'
  gem 'rspec-rails'       
  gem 'selenium-webdriver'  
  gem 'teaspoon'            # Front-end Javascript test runner

end

