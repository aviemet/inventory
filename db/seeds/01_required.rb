# Base status types
if StatusLabel.none?
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

if TicketStatus.none?
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
