module ApplicationHelper
  def icon_link(icon, link, **_link_options)
    link_to(mi.public_send(icon), link, class: :button)
  end
end
