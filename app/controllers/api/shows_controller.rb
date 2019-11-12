class API::ShowsController < ApplicationController

  before_action :authenticate_user_from_token!, except: [:show, :index, :tours]

  def index
    if params[:showdate]
      response = Show.where(showdate: params[:showdate])
    elsif params[:venue]
      response = Show.where(venue: params[:venue])
    elsif params[:tour_id]
      @shows = Show.where(tour_id: params[:tour_id]).sort_by{|show| show.id}
      @reviews = Show.get_reviews(@shows)
      response = { :shows => @shows, :reviews => @reviews.flatten}
    elsif params[:show_id]
      @show = Show.find(params[:show_id])
      response = @show
    elsif params[:user_id]
      @shows = User.find(params[:user_id]).shows
      response = @shows.sort_by{|show| show.id}
    else
      response = Show.all
    end
    render json: response, status: 200
  end

  def show
    @show = Show.find(params[:id])
    @reviews = @show.reviews
    response = { :show => @show, :reviews => @reviews}
    render json: response, status: 200
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
    @tours = Show.all.map {|show| {id: show.tour_id, name:show.tour_name}}.uniq
    render json: @tours, as: :tours
  end

  def show_params
    params.require(:show).permit(:link, :location, :notes, :showdate, :show_id, :tour_when, :tour_id, :tour_name, :venue, :venue_id, :rating, :setlist, :songs, :sets, user_ids:[], review_ids:[])
  end

end
