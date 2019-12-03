require_relative 'boot'

require 'rails/all'

# Instead of requiring rails/all, require individually

# require "rails"

# Include each railties manually, excluding `active_storage/engine`
# require "active_model/railtie"
# require "active_job/railtie"
# require "active_record/railtie"
# require "active_storage/engine"
# require "action_controller/railtie"
# require "action_mailer/railtie"
# require "action_view/railtie"
# require "action_cable/engine"
# require "sprockets/railtie"
# require "rails/test_unit/railtie"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Inventory
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.2

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.

    # Enable cookies
    config.middleware.use ActionDispatch::Cookies
    config.middleware.use Rack::ContentLength

    # Auto load files on the lib folder
    config.autoload_paths << Rails.root.join('lib')

    # Site wide configuration settings
    config.auth_token_expiration = 5.minutes
    config.refresh_token_expiration = 6.months
    
    # Don't generate css or js
    config.generators.stylesheets = false
    config.generators.javascripts = false
  end
end
