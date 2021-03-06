class API::UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]
  before_action :authenticate_user_from_token!, except: [:show, :create]

  # GET /users
  def index
    if params[:show_id]
      @users = Show.find(params[:show_id]).users
    else
      @users = User.all
    end
    render json: @users
  end

  # GET /users/1
  def show
    render json: @user.cleaned
  end

  # POST /users
  def create
    puts user_params
    @user = User.new(user_params)
    if @user.save
      render json: @user, status: 200
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:username, :email, :password, review_ids:[], show_ids:[])
    end
end
