class FirebaseAuthentication
  def initialize(app)
    @app = app
  end

  def call(env)
    id_token = env["HTTP_AUTHORIZATION"]&.split("Bearer ")&.last

    if id_token
      begin
        decoded_token = Firebase::Auth.verify_id_token(id_token)
        env["current_user"] = decoded_token["uid"]
        # Call the next middleware/controller in the stack
        @app.call(env)
      rescue Firebase::Auth::RevokedError, Firebase::Auth::ExpiredError, Firebase::Auth::InvalidTokenError => e
        # Handle invalid or expired tokens
        return [401, { "Content-Type" => "application/json" }, [{ error: e.message }.to_json]]
      end
    else
      # Handle missing token
      return [401, { "Content-Type" => "application/json" }, [{ error: "Missing authentication token" }.to_json]]
    end
  end
end
