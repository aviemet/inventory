module ActiveRecord
  module ConnectionAdapters
    module PostgreSQL
      module OID # :nodoc:
        class Cidr < Type::Value # :nodoc:
          def type
            :cidr
          end

          def type_cast_for_schema(value)
            # If the subnet mask is equal to /32, don't output it
            if value.prefix == 32
              "\"#{value.to_s}\"" # rubocop:disable Lint/RedundantStringCoercion
            else
              "\"#{value.to_string}\""
            end
          end

          def serialize(value)
            return nil if value.nil?

            return value.network.to_string if value.is_a?(IPAddress)

            value.to_s
          end

          def cast_value(value)
            return IPAddress.parse(value) if value.is_a?(String)

            value
          rescue ArgumentError
            nil
          end
        end
      end
    end
  end
end
