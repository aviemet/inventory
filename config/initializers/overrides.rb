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