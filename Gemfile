source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.7.0'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 6.0.3'

# Use postgresql as the database for Active Record
gem 'pg', '>= 0.18', '< 2.0'

# Use Puma as the app server
gem 'puma', '~> 4.1'

# Use SCSS for stylesheets
gem 'sass-rails', '>= 6'

# Transpile app-like JavaScript. Read more: https://github.com/rails/webpacker
gem 'webpacker', '~> 4.0'

# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem 'turbolinks', '~> 5'

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.7'

# Use Redis adapter to run Action Cable in production
gem 'redis', '~> 4.0'

# Use Active Model has_secure_password
gem 'bcrypt', '~> 3.1.7'

# Use Active Storage variant
gem 'image_processing', '~> 1.2'

# Reduces boot times through caching; required in co platforms: [:mingw, :mswin, :x64_mingw, :jruby]nfig/boot.rb
gem 'bootsnap', '>= 1.4.2', require: false

# Load environment variables https://github.com/bkeepers/dotenv
gem "dotenv-rails", "~> 2.7"

# Use Devise for authentication
gem "devise", "~> 4.7"
gem "devise_ldap_authenticatable", "~> 0.8.6"

# User Authorization 
gem "rolify", "~> 5.3"
gem "cancancan", "~> 3.1"

# View layer Icon library
gem "material_icons", "~> 2.2"

# SimpleForm for easier form building
gem "simple_form", "~> 5.0"

# ActiveType to break out model concerns
gem "active_type", "~> 1.3"

# A full featured IP address class
gem "ipaddress", "~> 0.8.3"

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]

  # Foreman for running dev commands in parallale
  gem "foreman", "~> 0.87.1"

  # Testing
  gem "rspec-rails", "~> 4.0"
  gem "database_cleaner", "~> 1.8"
  gem "factory_bot_rails", "~> 6.0"
  gem "faker", "~> 2.12"

  # Use pry as the rails console
  gem "pry-rails", "~> 0.3.9"
end

group :development do
  # Access an interactive console on exception pages or by calling 'console' anywhere in the code.
  gem 'listen', '~> 3.2'
  gem 'web-console', '>= 3.3.0'

  # Better error pages
  gem "better_errors", "~> 2.7"
  gem "binding_of_caller", "~> 0.8.0"

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'

  # Language server for ruby
  gem "solargraph", "~> 0.39.7"
  gem "rubocop", "~> 0.85.1"

  # Live reloading of server code
  gem "guard", "~> 2.16"
  gem "guard-livereload", "~> 2.5", require: false
  gem "rack-livereload", "~> 0.3.17"
end

group :test do
  # Adds support for Capybara system testing and selenium driver
  gem 'capybara', '>= 2.15'
  gem 'selenium-webdriver'

  # Easy installation and use of web drivers to run system tests with browsers
  gem 'webdrivers'

  # Testing
  gem "cucumber-rails", "~> 2.0", require: false
  gem "shoulda-matchers", "~> 4.3"
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data'
