require_relative 'boot'

require 'rails/all'

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
