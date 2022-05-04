class CustomFailure < Devise::FailureApp
  # def redirect_url
  #   your_path
  # end

  # def respond
  #   if http_auth?
  #     ap({ HTTP_AUTH: http_auth})
  #     http_auth
  #     redirect_to new_user_session_path, inertia: { auth: http_auth_body }
  #   elsif warden_options[:recall]
  #     ap({ WARDEN_OPTIONS: warden_options[:recall] })
  #     recall
  #   else
  #     ap "REDIRECT"
  #     redirect
  #   end
  # end

  def http_auth?
    if request.headers['X-Inertia']
      # Explicitly disable HTTP authentication on Inertia requests and force a redirect on failure
      false
    else
      super
    end
  end

  # def http_auth?
  #   ap "HTTP AUTH ????????"
  #   ap({ request: request, request_format: request_format, is_navigational_format?: is_navigational_format?})
  #   if request.xhr?
  #     ap({ http_authenticatable_on_xhr: Devise.http_authenticatable_on_xhr})
  #     Devise.http_authenticatable_on_xhr
  #   else
  #     !(request_format && is_navigational_format?)
  #   end
  # end

  # def http_auth
  #   ap "HTTP AUTH"
  #   ap({http_auth_body: http_auth_body})
  #   self.status = 401
  #   self.headers["x-inertia"] = true
  #   self.headers["WWW-Authenticate"] = %(Basic realm=#{Devise.http_authentication_realm.inspect}) if http_auth_header?
  #   self.content_type = "application/json" # request.format.to_s
  #   self.response_body = http_auth_body
  #   ap({ headers: self.headers, content_type: self.content_type, response_body: self.response_body })
  # end

  # def http_auth_body
  #   ap "HTTP AUTH BODY"
  #   return i18n_message unless request_format
  #   method = "to_#{request_format}"
  #   ap({ method: method })
  #   if method == "to_xml"
  #     ap({ to_xml_error: { error: i18n_message }.to_xml(root: "errors") })
  #     { error: i18n_message }.to_xml(root: "errors")
  #   elsif {}.respond_to?(method)
  #     ap({ respond_to?: { error: i18n_message }.send(method) })
  #     { error: i18n_message }.send(method)
  #   else
  #     ap({ i18n_message: i18n_message})
  #     { error: i18n_message }.to_json(root: "user")
  #   end
  # end

  # def i18n_message(default = nil)
  #   warden.pry
  #   ap "i18n MESSAGE"
  #   message = warden_message || default || :unauthenticated

  #   ap({ warden_message: warden_message, default: default })

  #   ap({ message: message })


  #   if message.is_a?(Symbol)
  #     options = {}
  #     options[:resource_name] = scope
  #     options[:scope] = "devise.failure"
  #     options[:default] = [message]
  #     auth_keys = scope_class.authentication_keys
  #     keys = (auth_keys.respond_to?(:keys) ? auth_keys.keys : auth_keys).map { |key| scope_class.human_attribute_name(key) }
  #     options[:authentication_keys] = keys.join(I18n.translate(:"support.array.words_connector"))
  #     options = i18n_options(options)

  #     ap({ options: options })

  #     I18n.t(:"#{scope}.#{message}", **options)
  #   else
  #     message.to_s
  #   end
  # end

  # def warden_message
  #   @message ||= warden.message || warden_options[:message]
  # end

  # def recall
  #   ap "RECALL!!!!!!!!"
  #   header_info = if relative_url_root?
  #     base_path = Pathname.new(relative_url_root)
  #     full_path = Pathname.new(attempted_path)

  #     { "SCRIPT_NAME" => relative_url_root,
  #       "PATH_INFO" => '/' + full_path.relative_path_from(base_path).to_s }
  #   else
  #     { "PATH_INFO" => attempted_path }
  #   end

  #   ap({ header_info: header_info })

  #   header_info.each do | var, value|
  #     if request.respond_to?(:set_header)
  #       request.set_header(var, value)
  #     else
  #       request.env[var]  = value
  #     end
  #   end

  #   flash.now[:alert] = i18n_message(:invalid) if is_flashing_format?
  #   self.response = recall_app(warden_options[:recall]).call(request.env)
  # end

  # def redirect
  #   ap "REDIRECT!!!!!!!"
  #   store_location!
  #   if is_flashing_format?
  #     if flash[:timedout] && flash[:alert]
  #       flash.keep(:timedout)
  #       flash.keep(:alert)
  #     else
  #       flash[:alert] = i18n_message
  #     end
  #   end
  #   redirect_to redirect_url
  # end
  
end
