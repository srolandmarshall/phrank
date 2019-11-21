Rails.application.routes.draw do

devise_for :users, only: [:create, :new]

namespace :api do
  get '/shows/tours', to: 'shows#tours'
  get 'reviews/mostrecent', to: 'reviews#mostrecent'
  get 'shows/mostrecent', to: 'shows#mostrecent'


  resources :shows do
    resources :reviews
    resources :users
  end
  resources :users do
    resources :reviews
    resources :shows
  end
  resources :reviews
  resources :user_shows, only: [:create, :destroy]
end

# resource :login, only: [:create], controller: :sessions
get '/current_user', to: 'sessions#currentuser'
post '/login', to: 'sessions#create'
delete '/logout', to: 'sessions#destroy'

end
