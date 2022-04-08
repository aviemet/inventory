source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.0.3"

# Server
gem "rails", "~> 7.0.1"
gem "sprockets-rails"
gem "pg", "~> 1.1"
gem "puma", "~> 5.0"

# Assets
gem "inertia_rails", "~> 1.11"
gem "jbuilder"
gem "vite_rails", "~> 3.0"

# Models
gem "countries", "~> 4.2"
gem "money-rails", "~> 1.15"
gem "active_type", "~> 2.1"
gem "audited", "~> 5.0"
gem "pg_search", "~> 2.3"
gem "slug", "~> 4.1"
gem "decent_exposure", "~> 3.0"
gem "devise", "~> 4.8"
gem "devise_ldap_authenticatable", "~> 0.8.7"
gem "rolify", "~> 6.0"
gem "cancancan", "~> 3.3"
gem "time_for_a_boolean", "~> 0.2.1"

# Helpers
gem "factory_bot", "~> 6.2"
gem "draper", "~> 4.0"
gem "ipaddress_2", "~> 0.14.0"
gem "ts_schema", "~> 0.1.8"

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data"

# Reduces boot times through caching; required in config/boot.rb
gem "bootsnap", require: false

# Use Redis adapter to run Action Cable in production
# gem "redis", "~> 4.0"

# Use Kredis to get higher-level data types in Redis [https://github.com/rails/kredis]
# gem "kredis"

# Use Active Model has_secure_password [https://guides.rubyonrails.org/active_model_basics.html#securepassword]
# gem "bcrypt", "~> 3.1.7"

# Use Active Storage variants [https://guides.rubyonrails.org/active_storage_overview.html#transforming-images]
# gem "image_processing", "~> 1.2"

group :development, :test do
  gem "rspec-rails", "~> 5.1"
  gem "factory_bot_rails", "~> 6.2"
  gem "faker", "~> 2.20"
  gem "amazing_print", "~> 1.4"

  gem "solargraph", "~> 0.44.3"
  gem "rubocop-rails", "~> 2.14", require: false
  gem "rubocop-rspec", "~> 2.9", require: false
  gem "rubocop-performance", "~> 1.13", require: false
  gem "rubocop-daemon", "~> 0.3.2", require: false

  # See https://guides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-debug-gem
  gem "debug", platforms: %i[mri mingw x64_mingw]
end

group :development do
  gem "js-routes", "~> 2.2"

  gem "guard-livereload", "~> 2.5", require: false
  gem "rack-livereload", "~> 0.3.17"

  # Use console on exceptions pages [https://github.com/rails/web-console]
  gem "web-console"

  # Speed up commands on slow machines / big apps [https://github.com/rails/spring]
  gem "spring"

  # Add speed badges [https://github.com/MiniProfiler/rack-mini-profiler]
  # gem "rack-mini-profiler"
end

group :test do
  # Use system testing [https://guides.rubyonrails.org/testing.html#system-testing]
  gem "capybara"
  gem "selenium-webdriver"
  gem "webdrivers"
end
