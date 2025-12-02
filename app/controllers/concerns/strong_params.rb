require "active_support/concern"

module StrongParams
  extend ActiveSupport::Concern

  class_methods do
    def strong_params(name, permitted_params = nil, &)
      param_method_name = :"#{name}_params"

      define_method param_method_name do
        if block_given?
          params.expect(name => instance_exec(&))
        elsif permitted_params.present?
          params.expect(name => Array(permitted_params))
        end
      end
    end

  end
end
