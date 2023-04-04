class AttachmentSerializer < ApplicationSerializer
  identifier

  class BlobSerializer < ApplicationSerializer
    attributes :filename, :byte_size, :content_type, :created_at
  end

  flat_one :blob, serializer: BlobSerializer
end
