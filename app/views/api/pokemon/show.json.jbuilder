# json.extract! @pokemon, :id, :name, :attack, :defense, :image_url, :poke_type
#
# json.items @pokemon.items do |item|
#   json.id item.id
#   json.name item.name
#   json.pokemon_id item.pokemon_id
#   json.price item.price
#   json.happiness item.happiness
#   json.image_url item.image_url
# end

  json.set! :poke do
    json.extract! @pokemon, :id, :name, :poke_type, :attack, :defense, :moves
    json.image_url asset_path(@pokemon.image_url)
  end
  json.set! :item do
    json.array! @pokemon.items do |item|
      json.id item.id
      json.name item.name
      json.pokemon_id item.pokemon_id
      json.price item.price
      json.happiness item.happiness
      json.image_url item.image_url
    end
  end
  # json.set! :items
