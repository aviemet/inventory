module ActiveRecord
  module ConnectionAdapters
    module PostgreSQL
      module OID # :nodoc:
        class Inet < Cidr # :nodoc:
          def type
            :inet
          end

          def serialize(value)
            return nil if value.nil?

            return value.to_string if value.is_a?(IPAddress)

            value.to_s
          end
        end
      end
    end
  end
end
