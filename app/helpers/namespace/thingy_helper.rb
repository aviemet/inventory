module Namespace::ThingyHelper
  def tester(body, url, html_options = {})
    link_to body, url, html_options.merge(class: "button shit")
  end
end
