class Item < Asset
  include Assignable::Single
  include AssignToable

  multisearchable(
    against: [:name, :asset_tag, :serial],
    additional_attributes: ->(record) { { label: record.name } },
  )

  tracked
  resourcify

  validates_presence_of :model

  has_many :nics, dependent: :destroy
  has_many :ips, -> { where(active: true) }, through: :nics, source: :ip_leases
  has_many :ip_leases, through: :nics
  belongs_to :default_location, class_name: "Location"

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
end
