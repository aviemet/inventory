module FormatHelper
  def date_tag(date, **kwargs)
    view "tags/date_time", date: date, **kwargs
  end
end