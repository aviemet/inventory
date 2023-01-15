require 'ipaddress_2'

module IPAddress
  IPv4.class_eval do
    alias_method :obj_include?, :include?

    def include?(oth)
      oth = self.class.new(oth) unless oth.is_a? self.class
      self.obj_include?(oth)
    end

    def as_json(_data = "")
      to_string
    end

    def paginate_hosts(page: 1, limit: 256, offset: 0)
      hosts = []

      count_start = ((limit - 1) * (page - 1)) + offset
      count_end = count_start + limit - 1 + offset
      count_end -= 1 if page == 1
      if page >= 2
        count_start += page - 2
        count_end += page - 2
      end

      i = 0
      self.each_host do |host|
        if i >= count_start
          hosts.push host
        end

        i += 1
        break if i > count_end
      end

      hosts
    end
  end

  IPv6.class_eval do
    alias_method :obj_include?, :include?

    def include?(oth)
      oth = self.class.new(oth) unless oth.is_a? self.class
      self.obj_include?(oth)
    end

    def as_json(_data = "")
      to_string
    end
  end
end
