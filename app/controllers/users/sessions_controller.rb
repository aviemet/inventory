# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  before_action :configure_sign_in_params, only: [:create]
  # prepend_after_action :check_user_confirmation, only: [:create]

  # GET /login
  def new
		render inertia: "Public/Devise/Login"
  end

  # POST /login
  def create
    # super
    self.resource = warden.authenticate!(auth_options)
    # set_flash_message!(:notice, :signed_in)
    sign_in(resource_name, resource)
    yield resource if block_given?
    respond_with resource, location: after_sign_in_path_for(resource)
  end

  # GET /logout
  def destroy
    # super
    signed_out = (Devise.sign_out_all_scopes ? sign_out : sign_out(resource_name))
    # set_flash_message! :notice, :signed_out if signed_out
    yield if block_given?
    respond_to_on_destroy
  end

  protected

  # If you have extra params to permit, append them to the sanitizer.
  def configure_sign_in_params
    devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  end

  private

  # !This doesn't work because warden intercepts and redirects before any hooks can fire
  def check_user_confirmation
    redirect_to new_confirmation_path(:user) if current_user && !current_user.confirmed?
  end
end
