class ApplicationController < ActionController::API
  def authenticate
    authorization_header = request.headers['Authorization']

    token = authorization_header.split(' ').last

    secret = Rails.application.credentials.secret_key_base

    decoded_token = JWT.decode(token, secret, true, { algorithm: 'HS256' })

    @current_user = User.find(decoded_token[0]['user_id'])
    Rails.logger.info "Authentication successful for user: #{@current_user.id}"

    true
  rescue JWT::DecodeError => e
    Rails.logger.error "JWT decode error: #{e.message}"
    render json: { message: 'Invalid token.' }, status: :unauthorized
  rescue ActiveRecord::RecordNotFound => e
    Rails.logger.error "User not found: #{e.message}"
    render json: { message: 'User not found.' }, status: :unauthorized
  rescue StandardError => e
    Rails.logger.error "Authentication error: #{e.class} - #{e.message}"
    render json: { message: 'Authentication failed.' }, status: :unauthorized
  end
end
