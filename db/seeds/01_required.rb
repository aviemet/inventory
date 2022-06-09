# Base status types
if StatusType.count == 0
  ["Deployable", "Undeployable", "Pending", "Archived"].each do |status|
    StatusType.create({
      name: status
    })
  end
end
