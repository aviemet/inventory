class ApplicationComponent < ViewComponent::Base
  include ViewComponent::SlotableV2

  delegate :mi, to: :helpers
end
