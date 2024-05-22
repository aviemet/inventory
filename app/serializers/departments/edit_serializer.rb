class Departments::EditSerializer < Departments::FormDataSerializer
  attributes(
    :id,
    :slug,
  )
end
