Rails.application.routes.draw do

namespace :api do
  resources :shows
  resources :users
end

end
