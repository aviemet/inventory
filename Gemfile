source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.2.2"

# Server
gem "rails", ">= 7.1"
gem "pg", ">= 1.1"
gem "puma", ">= 6.0"

# Assets
gem "inertia_rails", ">= 3.1.0"
gem "vite_rails", ">= 3.0"

# Models
gem "active_type", ">= 2.1"
gem "pg_search", ">= 2.3"
gem "devise", ">= 4.8"
gem "devise_invitable", ">= 2.0"
gem "devise_ldap_authenticatable", ">= 0.8.7"
gem "rolify", ">= 6.0"
gem "pundit", ">= 2.3"
gem "slug", ">= 4.1"
gem "kaminari", ">= 1.2"
gem "money-rails", ">= 1.15"
gem "decent_exposure", ">= 3.0"
gem "time_for_a_boolean", ">= 0.2.1"
gem "jsonb_accessor", ">= 1.3"
gem "public_activity", ">= 2.0"
gem "oj_serializers", ">= 2.0"
gem "types_from_serializers"

# Helpers
gem "factory_bot", ">= 6.4"
gem "factory_bot_rails", ">= 6.4"
gem "ipaddress_2", ">= 0.14.0"
gem "countries", ">= 6.0"
gem "js-routes", ">= 2.2"
gem "net-ldap", ">= 0.18.0"
gem "overmind", "~> 2.5"
gem "amazing_print", ">= 1.4"
gem "delayed_job_active_record", ">= 4.1"
gem "store_base_sti_class", "~> 3.2"

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data"

# Reduces boot times through caching; required in config/boot.rb
gem "bootsnap", require: false

# Use Redis adapter to run Action Cable in production

# Use Active Model has_secure_password [https://guides.rubyonrails.org/active_model_basics.html#securepassword]
# gem "bcrypt", ">= 3.1.7"

# Use Active Storage variants [https://guides.rubyonrails.org/active_storage_overview.html#transforming-images]
# gem "image_processing", ">= 1.2"

group :development, :test do
  gem "rspec-rails", ">= 6.0.1"
  gem "pry-rails", ">= 0.3.9"
  gem 'faker', :git => 'https://github.com/faker-ruby/faker.git', :branch => 'main'

  gem "rubocop-rails", ">= 2.14", require: false
  gem "rubocop-rspec", ">= 2.9", require: false
  gem "rubocop-performance", ">= 1.13", require: false
  gem "rubocop-daemon", ">= 0.3.2", require: false

  # See https://guides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-debug-gem
  gem "debug", platforms: %i[mri mingw x64_mingw]

  gem "dotenv-rails", ">= 2.8"

  # File annotation
  gem "chusaku", "~> 1.2", require: false
  gem "annotate", "~> 3.2", require: false
end

group :development do
  # Use console on exceptions pages [https://github.com/rails/web-console]
  gem "web-console"

  # Speed up commands on slow machines / big apps [https://github.com/rails/spring]
  gem "spring"

  # Add speed badges [https://github.com/MiniProfiler/rack-mini-profiler]
  # gem "rack-mini-profiler"
end

group :test do
  # Use system testing [https://guides.rubyonrails.org/testing.html#system-testing]
  gem "capybara", ">= 3.39"
  gem "selenium-webdriver", ">= 4.10"
  gem "webdrivers", ">= 5.3"
  gem "generator_spec", ">= 0.9.4"
  gem "database_cleaner-active_record", ">= 2.0"
  gem "shoulda-matchers", ">= 5.1"
  gem "bullet", ">= 7.0"
  gem "simplecov", ">= 0.22.0"
  gem "pundit-matchers", ">= 3.0"
end

