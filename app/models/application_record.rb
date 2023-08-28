class ApplicationRecord < ActiveRecord::Base
  primary_abstract_class

  include Renderable

  include PublicActivity::Model
  tracked owner: proc{ |controller, _model| controller&.current_user || nil }

  include PgSearch::Model
  ##
  # Include a default search scope for overriding
  ##
  pg_search_scope(
    :search,
    against: [],
    using: {
      tsearch: { prefix: true },
      trigram: {}
    },
    ignoring: :accents,
  )

  ##
  # Dynamic search scope for terms searching against specific fields
  ##
  def self.dynamic_search(query, field)
    search_scope_name = "#{self.name.underscore}_#{field}_dynamic_search".to_sym

    pg_search_scope(
      search_scope_name,
      against: field,
      using: {
        tsearch: { prefix: true },
        trigram: {}
      },
      ignoring: :accents,
    )

    self.merge(self.send(search_scope_name, query))
  end

  @@separator = " "

  def encode_id
    return if self.id.nil?

    Base64.strict_encode64("#{self.class.name}#{@@separator}#{self.id}")
  end

  def self.decode_id(encoded_id)
    parts = Base64.decode64(encoded_id).split(@@separator)
    {
      model: parts[0],
      id: parts[1]
    }
  end

  # def to_param
  #   encode_id
  # end

end
