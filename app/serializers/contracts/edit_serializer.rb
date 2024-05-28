class Contracts::EditSerializer < Contracts::FormDataSerializer
  attributes(
    :id,
    :slug,
  )
end
