if Rails.env.development? && Documentation.count == 0
  model = Model.includes(:category).where(category: {name: "Laptop"}).first
  Documentation.create({
    title: "About a Laptop Brand",
    documentable: model,
    body: "This is an article about a laptop brand",
    company: Company.first
  })
end
