class SessionsController < ApplicationController
  skip_before_action :authenticate_user_from_token!

  # POST /login
  def create
    @user = User.find_for_database_authentication(email: params[:username])
    return invalid_login_attempt unless @user

    if @user.valid_password?(params[:password])
      sign_in :user, @user
      session[:user_id] = @user.id
      cookies[:user_id]=@user.id
      puts "cookie/session?"
      puts cookies[:user_id]
      puts session[:user_id]
      render json: @user, serializer: SessionSerializer, root: nil
    else
      invalid_login_attempt
    end
  end

  def destroy
    @user = User.find_for_database_authentication(email: params[:username])
    sign_out :user, @user
  end

  def current_user
     @current_user ||= User.find_by(id: session[:user_id])
  end

  private

  def invalid_login_attempt
    warden.custom_failure!
    render json: {error: ('sessions_controller.invalid_login_attempt')}, status: :unprocessable_entity
  end



end
