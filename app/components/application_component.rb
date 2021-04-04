class ApplicationComponent < ViewComponent::Base
  include ViewComponent::SlotableV2

  delegate :mi, to: :helpers
  delegate :link_to, to: :helpers
  delegate :icon_link, to: :helpers
  delegate :turbo_frame_tag, to: :helpers
  delegate :view, to: :helpers
end
