require 'active_support/concern'

module Inertia::Auth
  extend ActiveSupport::Concern

  included do
    inertia_share auth: lambda {
      {
        user: current_user.as_json({
          except: [:password],
          include: [:person, :companies, :active_company],
        }),
        form_authenticity_token: form_authenticity_token,
      }
    }
  end
end