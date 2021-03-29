class ApplicationComponent < ViewComponent::Base
  include ViewComponent::SlotableV2

  delegate :mi, to: :helpers
  delegate :link_to, to: :helpers
  delegate :icon_link, to: :helpers
end
