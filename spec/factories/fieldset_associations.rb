FactoryBot.define do
  factory :fieldset_association do
    fieldset
    fieldable factory: :item
  end
end
