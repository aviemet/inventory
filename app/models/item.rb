class Item < Asset
  include Assignable::Single
  include AssignToable

  after_create :ensure_nic

  has_many :nics, dependent: :destroy
  has_many :ips, -> { where(active: true) }, through: :nics, source: :ip_leases
  has_many :ip_leases, through: :nics
  # has_one :location, through: :assignment

  accepts_nested_attributes_for :nics # , reject_if: ->(attributes){ attributes[:ip].blank? && attributes[:mac].blank? }, allow_destroy: true

  scope :no_nics, -> { includes(:nics).where(nics: { id: nil }) }

  scope :includes_associated, -> { includes([:category, :model, :assignments, :default_location, :department, :vendor, :manufacturer, :status_label, :activities, :ips, :nics, :ip_leases]) }

  def location
    if assigned?
      assignment.location
    else
      self.default_location
    end
  end
  
  private

  def ensure_nic
    self.nics << Nic.new if self.nics.empty?
  end

end
