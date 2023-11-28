shared_examples "serializable" do
  let(:serializer) { "#{subject.class.name}Serializer".constantize }

  context "when the model is a class instance" do
    it "infers the correct serializer" do
      expect(subject.serializer).to equal(serializer)
    end

    it "when the model renders" do
      expect(subject.render).to be_a(Hash)
    end
  end

  context "when the model is a class" do
    it "infers the correct serializer" do
      expect(subject.class.serializer).to equal(serializer)
    end
  end

  context "when the model is an ActiveRecord relation" do
    it "infers the correct serializer" do
      expect(subject.class.all.serializer).to equal(serializer)
    end

    it "renders" do
      expect(subject.class.all.render).to be_a(Array)
    end
  end

end
