class ShowsController < ApplicationController

  def index
    if param[:showdate]
      @shows = Show.where(showdate: params[:showdate])
    elsif param[:venue]
      @shows = Show.where(venue: params[:venue])
    else
      @shows = Show.all
    end

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
