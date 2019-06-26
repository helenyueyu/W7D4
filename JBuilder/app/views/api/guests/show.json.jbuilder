# json.set! @guest.id do
  json.extract! @guest, :id, :name, :age, :favorite_color
# end

json.array! @gifts, :id, :description, :title