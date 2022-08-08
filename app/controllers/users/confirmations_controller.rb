# frozen_string_literal: true

class Users::ConfirmationsController < Devise::ConfirmationsController
  # GET /users/confirmation/new(?email=:email)
  def new
    render inertia: "Public/Devise/Confirmations/New", props: {
      user: {
        email: params[:email]
      }
    }
  end

  # POST /users/confirmation
  def create
    self.resource = resource_class.send_confirmation_instructions(resource_params)
    yield resource if block_given?

    if successfully_sent?(resource)
      respond_with({}, location: after_resending_confirmation_instructions_path_for(resource_name))
    else
      redirect_to new_user_confirmation_path, inertia: { errors: self.resource.errors }
    end
  end

  # TODO: Display flash message on redirect
  # GET /users/confirmation?confirmation_token=:confirmation_token
  def show
    unless params[:confirmation_token]
      # flash.now[:alert] = "Invalid or missing confirmation token"
      redirect_to new_user_session_path
      return
    end

    self.resource = resource_class.confirm_by_token(params[:confirmation_token])
    yield resource if block_given?

    if resource.errors.empty?
      sign_in resource
      # set_flash_message!(:notice, :confirmed)
      respond_with_navigational(resource){ redirect_to after_confirmation_path_for(resource_name, resource) }
    else
      redirect_to user_confirmation_path, inertia: { errors: self.resource.errors }
    end
  end

  protected

  # The path used after resending confirmation instructions.
  def after_resending_confirmation_instructions_path_for(resource_name)
    is_navigational_format? ? new_session_path(resource_name) : '/'
  end

  # The path used after confirmation.
  def after_confirmation_path_for(resource_name, resource)
    if signed_in?(resource_name)
      signed_in_root_path(resource)
    else
      new_session_path(resource_name)
    end
  end

  def translation_scope
    'devise.confirmations'
  end
end
