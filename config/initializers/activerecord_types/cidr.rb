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
              "\"#{value.to_s}\""
            else
              "\"#{value.to_string}\""
            end
          end

          def serialize(value)
            if IPAddress === value
              value.network.to_string
            elsif value.nil?
              nil
            else
              value.to_s
            end
          end

          def cast_value(value)
            if value.nil?
              nil
            elsif String === value
              begin
                IPAddress.parse(value)
              rescue ArgumentError
                nil
              end
            else
              value
            end
          end
        end
      end
    end
  end
end
