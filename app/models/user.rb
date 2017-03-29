class User < ActiveRecord::Base
  has_many :addresses
  accepts_nested_attributes_for :addresses, allow_destroy: true, reject_if: :all_blank

  validates :username, presence: true
  validates :age, presence: true
end
