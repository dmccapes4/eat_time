Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:create, :show, :destroy]
    resources :restaurants, only: [:show, :index]
    resources :reservations, only: [:create, :show, :index]
    resources :search, only: [:index]
  end
  root to: 'root#root'
end
