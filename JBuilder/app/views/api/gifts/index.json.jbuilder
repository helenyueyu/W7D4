# json.array! @gifts, :id, :description, :title

# @gifts.each do |gift|
#   json.set! gift.id do
#     json.extract! gift, :id, :description, :title
#   end
# end