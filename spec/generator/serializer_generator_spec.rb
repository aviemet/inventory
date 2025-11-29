require "rails_helper"
require "generators/serializer/serializer_generator"

# TODO: This will potentially overwrite existing files. Make generator tests run in tmp folder

RSpec.describe SerializerGenerator do
  let(:generator_args) { ["model_name"] }

  after do
    run_generator(generator_args, behavior: :revoke)
    remove_dir File.join("app/serializers/#{generator_args[0].pluralize}")
  end

  it "runs without errors" do
    expect do
      run_generator(generator_args)
    end.not_to raise_error
  end

  it "generates the expected serializer content" do
    run_generator(generator_args)

    expected_content = <<~RUBY
      class ModelNameSerializer < ApplicationSerializer
        object_as :model_name

        attributes(
        )
      end
    RUBY

    assert_file "app/serializers/model_name_serializer.rb", expected_content
  end

end
