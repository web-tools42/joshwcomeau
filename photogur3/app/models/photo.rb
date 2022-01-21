class Photo < ActiveRecord::Base

  scope :newest_first, -> { order("created_at DESC") }
  scope :most_recent_five, -> { newest_first.limit(5) }

  has_many :comments


  def self.before(time)
    where("created_at < ?", time)
  end

  def gen_link(direction)
    if direction == "prev"
      linkobj = Photo.where("id < ?", id).order("id DESC").first
    else
      linkobj = Photo.where("id > ?", id).order("id ASC").first
    end

    linkobj
  end
end
