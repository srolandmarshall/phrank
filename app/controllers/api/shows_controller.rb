class Api::ShowsController < ApplicationController

  def index
    if params[:showdate]
      @shows = Show.where(showdate: params[:showdate])
    elsif params[:venue]
      @shows = Show.where(venue: params[:venue])
    elsif params[:show_id]
      @shows = Show.where(show_id: params[:show_id])
    else
      @shows = Show.all
    end
    render json: @shows, status: 200
  end

  def show
    @show = Show.find(params[:id])
    render json: @show, status: 200
  end

  def by_showdate
    render json: @shows, status: 200
  end

  def show_params
    params.require(:show).permit(:link, :location, :notes, :showdate, :show_id, :tour_when, :tour_id, :tour_name, :venue, :venue_id, :rating, :setlist, :songs, :sets)
  end

end
