class ManufacturerSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :created_at, :updated_at
end
