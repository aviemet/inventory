# Base status types
if StatusLabel.count == 0
  ["Deployable", "Undeployable", "Archived", "Decommissioned"].each do |status|
    StatusLabel.create({
      name: status
    })
  end
end

if TicketStatus.count == 0
  ["Open", "Pending", "Closed", "Abandoned"].each do |status|
    TicketStatus.create({
      name: status
    })
  end
end
