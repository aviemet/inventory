# Base status types
if StatusLabel.count == 0
  [
    {
      name: "Deployable",
      status_type: :deployable,
    },
    {
      name: "Decommissioned",
      status_type: :archived,
    },
    {
      name: "Lost/Stolen",
      status_type: :undeployable,
    },
    {
      name: "Temporarily Undeployable",
      status_type: :pending,
    },
  ].each do |status|
    StatusLabel.create(status)
  end
end

if TicketStatus.count == 0
  [
    {
      name: "Open",
      status_type: :open,
    },
    {
      name: "Pending",
      status_type: :pending,
    },
    {
      name: "Resolved",
      status_type: :closed,
    },
    {
      name: "Abandoned",
      status_type: :closed,
    },
  ].each do |status|
    TicketStatus.create({
      name: status
    })
  end
end

if UserGroup.count == 0
  UserGroup.create({
    name: "Site Administrator",
    description: "Super user permissions for the entire site."
  })
end
