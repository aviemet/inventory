require 'rails_helper'

RSpec.describe Person, type: :model do
  it_behaves_like 'contactable'
end
