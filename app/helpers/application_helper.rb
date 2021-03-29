module ApplicationHelper
  def icon_link(icon, link, link_options = {})
    link_to(mi.public_send(icon), link, **link_options)
  end

  def button_link(body, url, html_options = {})
    link_to body, url, html_options.merge(class: "button")
  end
end
