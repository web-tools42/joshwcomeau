if ( Posts.find().count() === 0 ) {
  Posts.insert({
    title:  'Introducing Telescope',
    author: 'Sacha Greif',
    url:    'http://sachagreif.com/introducing-telescope/'
  });

  Posts.insert({
    title:  'Meteor - the book',
    author: 'Donald Harrison Greif',
    url:    'http://google.com/'
  });

  Posts.insert({
    title:  'Yeah books!',
    author: 'David Thomspon',
    url:    'http://themeteorbook.com'
  });  
}