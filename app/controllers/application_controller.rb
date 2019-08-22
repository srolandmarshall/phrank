class ApplicationController < ActionController::API

before_action :authenticate_user_from_token!, except: [:new, :create]

respond_to :json
@@message = "no reason"
def authenticate_user_from_token!
   auth_token = request.headers['Authorization']

   if auth_token
     authenticate_with_auth_token auth_token
   else
     @@message = "no auth token"
     authentication_error
   end
 end

 private

 def authenticate_with_auth_token auth_token
   unless auth_token.include?(':')
     @@message = "no colon error"
     authentication_error
     return
   end

   user_id = auth_token.split(':').first
   user = User.where(id: user_id).first

   if user && Devise.secure_compare(user.access_token, auth_token)
     # User can access
     sign_in user, store: false
   else
     @@message = "did not match"+auth_token+" or user was not passed"
     authentication_error
   end
 end

 ##
 # Authentication Failure
 # Renders a 401 error
 def authentication_error
   # User's token is either invalid or not in the right format
   render json: {error: ('unauthorized: '+@@message)}, status: 401  # Authentication timeout
 end
end
