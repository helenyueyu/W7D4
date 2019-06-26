# @guests.each do |guest|
#   json.array! guest.id do
#     json.extract! guest, :id, :name, :age, :favorite_color
#   end
# end

json.array! @guests, :id, :name, :age, :favorite_color