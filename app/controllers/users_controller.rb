class UsersController < ApplicationController
  before_action :set_user, except: [:index, :new]

  # GET /users
  # GET /users.json
  def index
    @users = User.all
    render inertia: "Purchases/Index"
  end

  # GET /users/1
  # GET /users/1.json
  def show
    render inertia: "Purchases/Show"
  end

  # GET /users/new
  def new
    @user = User.new
    render inertia: "Purchases/New"
  end

  # GET /users/1/edit
  def edit
    render inertia: "Purchases/Edit"
  end

  def complete_registration
    render inertia: "Public/Devise/Register/Complete"
  end

  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json
  def update
    respond_to do |format|
      if @user.update(user_params)
        format.html { redirect_to @user, notice: 'User was successfully updated.' }
        format.json { render :show, status: :ok, location: @user }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    @user.destroy
    respond_to do |format|
      format.html { redirect_to users_url, notice: 'User was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:email, :password, :person, :active_company, :active, :dark_mode)
  end
end
