require 'rails_helper'

RSpec.describe Item, type: :model do
  it_behaves_like 'ownable'
end
