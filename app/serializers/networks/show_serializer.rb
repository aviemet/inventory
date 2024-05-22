class Networks::ShowSerializer < NetworkSerializer
  attributes(
    :id,
    :created_at,
    :updated_at,
  )

  type "string[]"
  def hosts
    network.address&.paginate_hosts(page: options[:page])&.map(&:to_s)
  end

  type :number
  def page
    options[:page] || 1
  end
end
