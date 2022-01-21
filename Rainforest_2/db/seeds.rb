# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Product.create!({
  name: "Chair by Sit Studios",
  description: "This excellent chair by Sit Studios performs all the functions you'd expect from top-quality seating implementations. Use it for lounging, for sitting, for reclining, or even for standing upon to extend your height!",
  price: 4.99
})