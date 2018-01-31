class ApplicationController < ActionController::Base
  # protect_from_forgery with: :null_session

  helper_method :current_user, :require_login!

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def login(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def logout
    session[:session_token] = nil
  end

  def logged_in?
    !!current_user
  end

  def require_login!
    redirect_to new_session_url unless logged_in?
  end
end
