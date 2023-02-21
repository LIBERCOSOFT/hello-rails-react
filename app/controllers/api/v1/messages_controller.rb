class Api::V1::MessagesController < ApplicationController
  def index
    random = rand(1..Message.count)
    message = Message.find(random)
    render json: { Message: message.text }
  end
end
