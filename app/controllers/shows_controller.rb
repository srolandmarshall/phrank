class ShowsController < ApplicationController

  def show
    @show = Show.find(params[:id])
    render json: @show, status: 200
  end

end
