module ActiveRecord
  module ConnectionAdapters
    module PostgreSQL
      module OID # :nodoc:
        class Inet < Cidr # :nodoc:
          def type
            :inet
          end

          def serialize(value)
            if IPAddress === value
              value.to_string
            elsif value.nil?
              nil
            else
              value.to_s
            end
          end
        end
      end
    end
  end
end