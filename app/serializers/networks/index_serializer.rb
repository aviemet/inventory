class Networks::IndexSerializer < NetworkSerializer
  attributes(
    :id,
    :created_at,
    :updated_at,
  )

  type :string
  def broadcast
    network&.address&.broadcast&.to_s
  end
end
