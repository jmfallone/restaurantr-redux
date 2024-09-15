class AuthenticationController < ApplicationController
  def login
    @user = User.find_by(username: params[:username])
    if @user&.authenticate(params[:password])
      token = JWT.encode({ user_id: @user.id }, Rails.application.credentials.secret_key_base)
      render json: { token: }
    else
      render json: { error: 'Invalid username or password' }, status: :unauthorized
    end
  end
end
