class Networks::EditSerializer < Networks::FormDataSerializer
  attributes(
    :id,
  )

  type :string
  def broadcast
    network&.address&.broadcast&.to_s
  end
end
