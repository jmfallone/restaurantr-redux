require "firebase-admin"

cred_object = File.read("private_key.json")
cred = Firebase::Admin::Credential.from_json(cred_object)

Firebase::App.configure do |app|
  app.credential = cred
end
