require 'rails_helper'
require 'models/concerns/ownable'

RSpec.describe Network, type: :model do
  subject {
    build_stubbed(:network)
  }

  describe "Pagination" do
    it "paginates hosts" do
      network = build_stubbed(:network, subnet: 22)
      hosts = network.address.paginate_hosts(page: 1)
      # ap({ hosts: hosts.size, first: hosts[0].address, last: hosts[-1].address })
      expect(hosts[0].address).to eq '10.0.0.1'
      expect(hosts[-1].address).to eq '10.0.0.255'

      hosts = network.address.paginate_hosts(page: 2)
      # ap({ hosts: hosts.size, first: hosts[0].address, last: hosts[-1].address })
      expect(hosts[0].address).to eq '10.0.1.0'
      expect(hosts[-1].address).to eq '10.0.1.255'

      hosts = network.address.paginate_hosts(page: 3)
      # ap({ hosts: hosts.size, first: hosts[0].address, last: hosts[-1].address })
      expect(hosts[0].address).to eq '10.0.2.0'
      expect(hosts[-1].address).to eq '10.0.2.255'

      hosts = network.address.paginate_hosts(page: 4)
      # ap({ hosts: hosts.size, first: hosts[0].address, last: hosts[-1].address })
      expect(hosts[0].address).to eq '10.0.3.0'
      expect(hosts[-1].address).to eq '10.0.3.254'

      # hosts = network.address.paginate_hosts(page: 5)
      # # ap({ hosts: hosts.size, first: hosts[0].address, last: hosts[-1].address })
      # expect(hosts[0].address).to eq '10.0.4.0'
      # expect(hosts[-1].address).to eq '10.0.4.255'

      # hosts = network.address.paginate_hosts(page: 6)
      # # ap({ hosts: hosts.size, first: hosts[0].address, last: hosts[-1].address })
      # expect(hosts[0].address).to eq '10.0.5.0'
      # expect(hosts[-1].address).to eq '10.0.5.255'

      # hosts = network.address.paginate_hosts(page: 7)
      # # ap({ hosts: hosts.size, first: hosts[0].address, last: hosts[-1].address })
      # expect(hosts[0].address).to eq '10.0.6.0'
      # expect(hosts[-1].address).to eq '10.0.6.255'

      # hosts = network.address.paginate_hosts(page: 8)
      # # ap({ hosts: hosts.size, first: hosts[0].address, last: hosts[-1].address })
      # expect(hosts[0].address).to eq '10.0.7.0'
      # expect(hosts[-1].address).to eq '10.0.7.254'
    end
  end

  describe "Associations" do
    it_behaves_like "ownable"
  end
end

=begin
page 1:
  [0] - [254]

page 2:
  [255] - [510]

page 3:
  [511] - [766]

page 4:
  [767] - 
=end