Rails.application.routes.draw do

  root 'desserts#index'
  get '/desserts' => 'desserts#index'
  get '/desserts/favorite' => 'desserts#favorite', as: :favorite_dessert
  get '/desserts/:id' => 'desserts#show', as: :show_dessert
  post '/desserts/:id/save_as_favorite' => 'desserts#save_as_favorite', as: :save_as_favorite
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
