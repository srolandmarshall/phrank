class API::ReviewsController < ApplicationController
  before_action :set_review, only: [:show, :update, :destroy]
  before_action :authenticate_user_from_token!, except: [:show, :index]

  # GET /reviews
  def index
    if params[:user_id]
      @reviews = User.find(params[:user_id]).reviews
    elsif params[:show_id]
      @reviews = Show.find(params[:show_id]).reviews
    else
      @reviews = Review.all
    end
    render json: @reviews
  end

  # GET /reviews/1
  def show
    render json: @review
  end

  # POST /reviews
  def create
    @review = Review.new(review_params)
    if @review.save
      render json: @review, status: :created
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /reviews/1
  def update
    if @review.update(review_params)
      render json: @review
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  # DELETE /reviews/1
  def destroy
    @user = @review.user
    @review.destroy
    render json: @user.reviews 
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_review
      @review = Review.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def review_params
      params.require(:review).permit(:show_id, :user_id, :content, :rating)
      # params.require(:show).permit(:link, :location, :notes, :showdate, :show_id, :tour_when, :tour_id, :tour_name, :venue, :venue_id, :rating, :setlist, :songs, :sets, user_ids:[], review_ids:[])
    end
end
