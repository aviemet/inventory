source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.0.2'

# Server
gem 'rails', '~> 6.1.4'
gem 'pg', '>= 0.18', '< 2.0'
gem 'puma', '~> 5.1'
gem 'redis', '~> 4.0'
gem "dotenv-rails", "~> 2.7"
gem "rack-cors", "~> 1.1"
gem 'bcrypt', '~> 3.1.7'
gem 'bootsnap', '>= 1.4.4', require: false

# Models
gem "slug", "~> 4.1"
gem "active_type", "~> 1.3"
gem "audited", "~> 4.10"

# Search
gem "pg_search", "~> 2.3"
gem "progress_bar", "~> 1.3"

# Assets
gem "hotwire-rails", "~> 0.1.3"
gem "turbo-rails", "~> 0.5.9"
gem "stimulus-rails", "~> 0.2.3"
gem "stimulus_reflex", "~> 3.3"
gem 'sass-rails', '>= 6'
gem 'jbuilder', '~> 2.7'
gem "slim-rails", "~> 3.2"
gem 'webpacker', '~> 5.0'
gem 'image_processing', '~> 1.2'
gem "material_icons", "~> 2.2"
gem "simple_form", "~> 5.0"
gem "view_component", "~> 2.23", require: "view_component/engine"
gem "draper", "~> 4.0"

# Authentication / Authorization
gem "devise", "~> 4.7"
gem "devise_ldap_authenticatable", "~> 0.8.6"
gem "rolify", "~> 6.0"
gem "cancancan", "~> 3.1"

# Helpers
gem "ipaddress_2", "~> 0.13.0"
gem "countries", "~> 3.0", require: 'countries/global'
gem "money-rails", "~> 1.13"
gem "kaminari", "~> 1.2"
gem 'tzinfo-data'

group :development, :test do
  # Foreman for running dev commands in parallel
  gem "foreman", "~> 0.87.1"

  # Testing
  gem "faker", "~> 2.12"
  gem "factory_bot_rails", "~> 6.0"

  # Console
  gem "pry-rails", "~> 0.3.9"
  gem "amazing_print", "~> 1.2"
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]

  # Linting
  gem "rubocop", require: false
  gem "rubocop-daemon", require: false
  gem "solargraph", require: false
  gem "slim_lint", "~> 0.20"
  gem "htmlbeautifier", "~> 1.3"
end

group :development do
  # Access an interactive console on exception pages or by calling 'console' anywhere in the code.
  gem 'listen', '~> 3.3'
  gem 'web-console', '>= 4.1.0'

  # Better error pages
  gem "better_errors", "~> 2.7"

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'

  # Live reloading of server code
  gem "guard", "~> 2.16"
  gem "guard-livereload", "~> 2.5.2", require: false
  gem "rack-livereload", "~> 0.3.17"

  # To supress warnings
  gem 'rubyzip', '2.3.0'
end

group :test do
  # Testing
  gem "rspec-rails", "~> 5.0"
  gem "database_cleaner", "~> 2.0"
  gem "cucumber-rails", "~> 2.0", require: false
  gem "shoulda-matchers", "~> 4.3"
  gem "deep-cover", "~> 1.0"
  gem "sunspot_test", "~> 0.4.2"

  # Adds support for Capybara system testing and selenium driver
  gem 'capybara', '>= 3.26'
  gem 'selenium-webdriver'

  # Easy installation and use of web drivers to run system tests with browsers
  gem 'webdrivers'

  # CI
  gem "bullet", "~> 6.1"
end
