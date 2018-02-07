Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:create, :show, :destroy]
    resources :restaurants, only: [:show, :index]
    resources :reservations
    resources :search, only: [:index]
    resources :reviews
  end
  root to: 'root#root'
end
