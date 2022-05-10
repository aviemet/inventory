class CustomFailure < Devise::FailureApp
  def respond
    if http_auth?
      respond_to_failure_types
    elsif warden_options[:recall]
      recall
    else
      redirect
    end
  end

  def http_auth?
    if request.headers['X-Inertia']
      # Explicitly disable HTTP authentication on Inertia
      # requests and force a redirect on failure
      false
    else
      super
    end
  end

  def respond_to_failure_types
    message = warden_message || :unauthenticated
    ap({ message: message, scope: scope, auth_keys: scope_class.authentication_keys, warden_options: warden_options, params: params, scope_class: scope_class })

    # Incorrect credentials - wrong username or password
    if message == :invalid || message == :not_found_in_database
      redirect_to new_user_session_path
    # Account with unconfirmed email
    elsif message == :unconfirmed
      redirect_to new_user_confirmation_path({ email: params[:user][:email] })
    end
  end
end
