require "rails_helper"

RSpec.describe ApplicationRecord do
  describe "Unique ID encoding" do
    context "with a new record which hasn't been saved" do
      it "returns nil" do
        network = build(:network)

        expect(network.encode_id).to be_nil
      end
    end

    context "with a persisted record" do
      it "encodes the model name and id as a base64 string" do
        network = build_stubbed(:network)
        id = network.encode_id

        expect(id).to be_a String
        expect(Network.decode_id(id)).to eq({
          model: "Network",
          id: network.id.to_s
        })
      end
    end

  end
end
