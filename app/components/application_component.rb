class ApplicationComponent < ViewComponent::Base
  delegate :mi, to: :helpers
end
