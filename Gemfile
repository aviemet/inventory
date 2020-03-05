source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.6.3'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 6.0.1'

# Use postgresql as the database for Active Record
gem 'pg', '>= 1.1.4'

# Use GraphQL to query the database from the front end
gem 'graphql', '>= 1.9.6'

# Load environment variables https://github.com/bkeepers/dotenv
gem 'dotenv-rails'

# Use Puma as the app server
gem 'puma', '~> 3.12.1'

# Use HAML for markup
gem 'haml-rails', '~> 2.0'

# Use SCSS for styles
gem "sass-rails"
gem 'normalize-rails'

# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 4.2.0'

# Transpile app-like JavaScript. Read more: https://github.com/rails/webpacker
gem 'webpacker', '>= 4.2.0'

# See https://github.com/rails/execjs#readme for more supported runtimes
gem 'mini_racer', platforms: :ruby

# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem 'turbolinks', '~> 5.2.1'

# Use Redis adapter to run Action Cable in production
gem 'redis', '~> 4.1.3'

# Use ActiveModel has_secure_password
gem 'bcrypt', '~> 3.1.13'

# Use Devise and JWT for authentication
gem 'devise', '>= 4.7.1'
gem 'devise_ldap_authenticatable', '>= 0.8.6'
gem 'jwt', '>= 2.2.1'

# Allow cross origin requests
gem 'rack-cors'

# Use ActiveStorage variant
# gem 'mini_magick', '~> 4.8'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', '>= 1.4.5', require: false

gem 'active_type'

group :development, :test do
  gem 'rspec-rails'
  gem 'factory_bot_rails'
  gem 'faker'
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  # Access an interactive console on exception pages or by calling 'console' anywhere in the code.
  gem 'web-console'
  gem 'listen'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen'

  gem 'graphiql-rails', ">= 1.7.0"

  gem 'solargraph'
end

group :test do
  gem 'shoulda-matchers', require: false
  gem 'database_cleaner'
  # Adds support for Capybara system testing and selenium driver
  gem 'capybara'
  gem 'selenium-webdriver'
  # Easy installation and use of chromedriver to run system tests with Chrome
  gem 'webdrivers'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
