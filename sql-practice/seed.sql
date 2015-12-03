delete from appearences;
delete from movies;
delete from actors;

insert into movies (title, release_year) values
       ('Shawshank', 1996),
       ('Good Will Hunting', 1998),
       ('Back to the Future', 1986),
       ('Bourne Identity', 2006);


insert into actors (name, dob) values
       ('Matt Damon', '1970-10-8'),
       ('Tim Robbins', '1964-08-08'),
       ('Morgan Freeman', '1960-02-10'),
       ('Jonah Hill', '1999-02-10');

insert into appearences (actor_id, movie_id, character) values
  (
    (select id from actors where name = 'Matt Damon'),
    (select id from movies where title = 'Bourne Identity'),
    'Jason Bourne'
  ),
  (
    (select id from actors where name = 'Matt Damon'),
    (select id from movies where title = 'Good Will Hunting'),
    'Will Hunting'
  ),
  (
    (select id from actors where name = 'Morgan Freeman'),
    (select id from movies where title = 'Shawshank Redemption'),
    'Red'
  ),
  (
    (select id from actors where name = 'Tim Robbins'),
    (select id from movies where title = 'Shawshank Redemption'),
    'Andy Dufrane'
  )
  ;
