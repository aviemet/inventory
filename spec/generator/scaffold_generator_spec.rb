require 'rails_helper'
require 'fileutils'
require 'rails/generators/rails/scaffold/scaffold_generator'
require Rails.root.join('config', 'application.rb')

RSpec.describe Rails::Generators::ScaffoldGenerator, type: :generator do
  destination Rails.root.join('tmp', 'generators')
  arguments %w(Post title:string body:text --skip-routes)

  before do
    prepare_destination

    FileUtils.mkdir_p(File.join(destination_root, 'config'))
    # source_path = Rails.root.join('config', 'routes.rb')
    destination_path = File.join(destination_root, 'config', 'routes.rb')
    FileUtils.touch(destination_path)

    run_generator
  end

  context 'generated files' do
    it 'creates a model file' do
      assert_file File.expand_path('app/models/post.rb', destination_root), /class Post/
    end
  end

  # skip "creates the view files" do
  #   assert_file "app/frontend/Pages/InertiaTest/Edit/index.tsx"
  #   assert_file "app/frontend/Pages/InertiaTest/Index/index.tsx"
  #   assert_file "app/frontend/Pages/InertiaTest/New/index.tsx"
  #   assert_file "app/frontend/Pages/InertiaTest/Show/index.tsx"
  #   assert_file "app/frontend/Pages/InertiaTest/Form.tsx"
  # end
end
