class Categories::EditSerializer < Categories::FormDataSerializer
  attributes(
    :id,
    :slug,
    :categorizable_type,
    :name,
    :slug,
    :description,
  )
end
