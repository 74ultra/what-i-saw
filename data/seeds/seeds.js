
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(() => knex('library').truncate())

    .then(() => {
      return knex('users').insert([
        { username: '74ultra', first_name: 'ryan', last_name: 'hill', password: 'tester' },
        { username: '26ultra', first_name: 'caleb', last_name: 'hill', password: 'tester' },
      ])
    })

    .then(() => {
      return knex('library').insert([
        { username: '74ultra', title: 'Star Wars: Episode V - The Empire Strikes Back', year: '1980', imdbID: 'tt2488496', type: 'movie', poster: 'https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg', comment: 'The Empire Strikes Back is the best of three Star Wars films, and the most thought-provoking. After the space opera cheerfulness of the original film, this one plunges into darkness and even despair, and surrenders more completely to the underlying mystery of the story. It is because of the emotions stirred in Empire that the entire series takes on a mythic quality that resonates back to the first and ahead to the third. This is the heart', rating: 4.25 },
        { username: '26ultra', title: 'Croods', year: '2013', imdbID: 'tt0481499', type: 'movie', poster: 'https://m.media-amazon.com/images/M/MV5BMTcyOTc2OTA1Ml5BMl5BanBnXkFtZTcwOTI1MjkzOQ@@._V1_SX300.jpg', comment: 'Never not be afraid is the motto of the family of dysfunctional cavemen in Fox’s new animated film, but for a film that’s ostensibly about the fear of the unknown, The Croods sure feels familiar. Much like Fox’s Ice Age films, actually, and this new film similarly has fun juxtaposing prehistoric reality with modern gags.* Along the way, it also presents a skin-deep meditation on the age-old conflict between brute force and brainpower and between terrified ignorance and rational thought.', rating: 4.75 }
      ])
    })
};
