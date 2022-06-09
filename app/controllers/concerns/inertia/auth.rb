require 'active_support/concern'

module Inertia::Auth
  extend ActiveSupport::Concern

  included do
    inertia_share auth: lambda {
      {
        user: current_user ? UserBlueprint.render_as_json(current_user, view: :shared) : nil,
        form_authenticity_token: form_authenticity_token,
      }
    }
  end
end