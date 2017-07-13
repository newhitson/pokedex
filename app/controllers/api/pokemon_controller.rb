class Api::PokemonController < ApplicationController
  def index
    @pokemon = Pokemon.all
    render :index
  end

  def show
    @pokemon = Pokemon.find(params[:id])
    render :show
  end

  # Remember, we want these actions to render json responses. To make the
  #  job easier for our frontend, you should
  # format your index action to serve up json responses that look something like this:
end
