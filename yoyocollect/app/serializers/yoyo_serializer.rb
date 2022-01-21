class YoyoSerializer < ActiveModel::Serializer
  attributes :id, :model, :diameter, :width, :weight, :created_at, :updated_at, :manufacturers
end
