require 'rails_helper'
require "generator_spec"

RSpec.describe "Inertia::Controller", type: :generator do
  destination Rails.root.join('tmp')
  arguments %(InertiaTest)

  before do
    prepare_destination
    run_generator
  end

  describe "controller generator" do

    it 'creates the controller file' do
      assert_file 'app/controllers/inertia_test.rb', /class InertiaTestController < ApplicationController/
    end

    it 'creates the view files' do
      assert_file 'app/frontend/Pages/InertiaTest/Edit/index.tsx'
      assert_file 'app/frontend/Pages/InertiaTest/Index/index.tsx'
      assert_file 'app/frontend/Pages/InertiaTest/New/index.tsx'
      assert_file 'app/frontend/Pages/InertiaTest/Show/index.tsx'
      assert_file 'app/frontend/Pages/InertiaTest/Form.tsx'
    end

    it 'adds the route' do
      assert_file 'config/routes.rb', %r{get 'inertia_test/index'}
    end
  end
end
