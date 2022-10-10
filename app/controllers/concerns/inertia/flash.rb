require 'active_support/concern'

module Inertia::Flash
  extend ActiveSupport::Concern

  included do
    inertia_share flash: -> { {
      success: flash[:notice], # green
      alert: flash[:alert], # red
      info: flash[:info], # blue
      warning: flash[:warning] # yellow
    } }
  end
end
