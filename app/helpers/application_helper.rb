module ApplicationHelper
  def icon_link(icon, link, link_options = {})
    link_to(mi.public_send(icon), link, **link_options)
  end
end
