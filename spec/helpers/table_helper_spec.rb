require 'rails_helper'

RSpec.describe TableHelper, type: :helper do
  describe "#data_heading" do
    it "returns a th tag containing a link with default classes" do
    end
  end

  describe "#input_to_a" do
    it "returns an empty array if passed nothing" do
      expect(input_to_a).to be_empty
    end
  end
end
