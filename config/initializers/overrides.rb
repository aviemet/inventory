require 'ipaddress_2'

module IPAddress
  IPv4.class_eval do
    alias_method :obj_include?, :include?

    def include?(oth)
      oth = self.class.new(oth) unless oth.is_a? self.class
      self.obj_include?(oth)
    end

    def as_json(data="")
      to_string
    end

    def paginate_hosts(page: 1, limit: 256, offset: 0)
      i = 0
      self.each_host do |host|
        ap({ ip: host.to_s })
        i += 1
        if i > (page * limit) + offset
          break 
        end
      end
    end
  end

  IPv6.class_eval do
    alias_method :obj_include?, :include?

    def include?(oth)
      oth = self.class.new(oth) unless oth.is_a? self.class
      self.obj_include?(oth)
    end

    def as_json(data="")
      to_string
    end
  end
end
