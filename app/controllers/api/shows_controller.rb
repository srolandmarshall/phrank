class API::ShowsController < ApplicationController

  before_action :authenticate_user_from_token!, except: [:show, :index, :tours]

  def index
    if params[:showdate]
      @shows = Show.where(showdate: params[:showdate])
    elsif params[:venue]
      @shows = Show.where(venue: params[:venue])
    elsif params[:show_id]
      @shows = Show.find(params[:show_id])
    elsif params[:user_id]
      @shows = User.find(params[:user_id]).shows
      @shows = @shows.sort_by{|show| show.id}
    else
      @shows = Show.all
    end
    render json: @shows, status: 200
  end

  def show
    @show = Show.find(params[:id])
    render json: @show, status: 200
  end

  def create
    if (params[:show_id] && params[:user_id])
      @show = Show.find(params[:show_id])
      @user = User.find(params[:user_id])
      @user.shows << @show
      render json: @show, status: 200
    end
  end

  def destroy
    @user = User.find(params[:user_id])
    @show = Show.find(params[:id])
    @user.shows.delete(@show)
    render json: @show, status: 200
  end

  def tours
    @tours = Show.pluck(:tour_name).uniq
    render json: @tours.reject { |c| c.blank? }, as: :tours
  end

  def show_params
    params.require(:show).permit(:link, :location, :notes, :showdate, :show_id, :tour_when, :tour_id, :tour_name, :venue, :venue_id, :rating, :setlist, :songs, :sets, user_ids:[], review_ids:[])
  end

end
