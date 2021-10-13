require 'test_helper'
require 'generators/stimulus/stimulus_generator'

class StimulusGeneratorTest < Rails::Generators::TestCase
  tests StimulusGenerator
  destination Rails.root.join('tmp/generators')
  setup :prepare_destination

  test 'It generates a controller in the app/javascript/controllers directory' do
    run_generator ["Hello"]

    assert_file "app/javascript/controllers/hello_controller.js"
  end
end