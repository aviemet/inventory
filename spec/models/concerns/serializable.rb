shared_examples "serializable" do
  let(:serializer) { "#{subject.class.name}Serializer".constantize }

  context "instance" do
    it "infers the correct serializer" do
      expect(subject.serializer).to equal(serializer)
    end

    it "renders" do
      expect(subject.render).to be_a(Hash)
    end
  end

  context "class" do
    it "infers the correct serializer" do
      expect(subject.class.serializer).to equal(serializer)
    end
  end

  context "relation" do
    it "infers the correct serializer" do
      expect(subject.class.all.serializer).to equal(serializer)
    end

    it "renders" do
      expect(subject.class.all.render).to be_a(Array)
    end
  end

end
