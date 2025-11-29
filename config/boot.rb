ENV["BUNDLE_GEMFILE"] ||= File.expand_path("../Gemfile", __dir__)

require "bundler/setup" # Set up gems listed in the Gemfile.

Warning.ignore(/already initialized constant Gem::Platform::/)

require "bootsnap/setup" # Speed up boot time by caching expensive operations.
