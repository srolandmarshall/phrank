class SessionsController < ApplicationController
  skip_before_action :authenticate_user_from_token!

  # POST /login
  def create
    @user = User.find_for_database_authentication(email: params[:username])
    return invalid_login_attempt unless @user

    if @user.valid_password?(params[:password])
      sign_in :user, @user
      session[:user_id] = @user.id
      puts "cookie/session?"
      puts session[:user_id]
      render json: @user, serializer: SessionSerializer, root: nil
    else
      invalid_login_attempt
    end
  end

  def destroy
    @user = User.find_for_database_authentication(email: params[:username])
    session[:user_id] = nil
    sign_out :user
  end

  def currentuser
    @current_user ||= User.find_by(id: session[:user_id])
    if @current_user
      render json: @current_user, serializer: SessionSerializer, root: nil
    else
      render json: {message: "No Current User"}
    end
  end

  private

  def invalid_login_attempt
    warden.custom_failure!
    render json: {error: ('sessions_controller.invalid_login_attempt')}, status: :unprocessable_entity
  end



end
