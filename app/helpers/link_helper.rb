module LinkHelper
  def icon_link(icon, link, link_options = {})
    link_to(mi.public_send(icon), link, **link_options)
  end

  def button_link(body, url, html_options = {})
    link_to body, url, html_options.merge(class: "button")
  end

  def assignment_link(asset)
    asset_type = asset.class

    if asset.respond_to?(:assigned?) && asset.assigned?
      link_to "Checkin #{asset_type}", end_assignment_path(asset_type, asset.id)
    else
      link_to "Checkout #{asset_type}", new_assignment_path(asset_type, asset.id)
    end
  end
end
