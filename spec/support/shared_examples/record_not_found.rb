RSpec.shared_examples "handles record not found" do |http_method, _action, path_helper, key = :slug|
  context "when the record is not found" do
    it "renders the 404 page" do
      send(http_method, method(path_helper).call(key => "nonexistent"))

      expect_inertia.to render_component "Error"
      expect_inertia.to include_props({ status: 404 })
    end
  end
end
