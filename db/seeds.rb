# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

@homepage = Page.create(title: 'Jacob Clark', slug: 'homepage')
@about = Page.create(title: 'About me', slug: 'about-me')

@homepage.sections.create(heading: 'About Me', markdown: 'Experienced technologist and polyglot software engineer currently working at Co-op Digital. I specialise in crafting high quality software that meets user needs through a variety of extreme programming and agile techniques.')
@homepage.sections.create(heading: 'Professional Background', markdown: 'I specialise in')
@homepage.sections.create(heading: 'Career', markdown: 'My career to date
')

@about.sections.create(heading: 'Background', markdown: 'I am from Leigh')