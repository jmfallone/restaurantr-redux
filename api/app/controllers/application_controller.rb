class ApplicationController < ActionController::API
  def authenticate
    begin
      authorization_header = request.headers["Authorization"]
      token = authorization_header.split(" ").last
      secret = Rails.application.secrets.secret_key_base
      decoded_token = JWT.decode(token, secret)
    rescue => e
      render json: { message: "Login required." }, status: :unauthorized
    end
  end
end
