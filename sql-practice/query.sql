select
  name,
  character,
  title
  
from appearences
  join actors on actors.id = appearences.actor_id
  join movies on movies.id = appearences.movie_id

;

select actors.* from actors
       left join appearences on appearences.actor_id = actors.id
       -- left join movies on movies.id = appearences.movie_id
        where appearences.id is null
;

select * from appearences natural join actors natural join movies
;

select * from appearences cross join actors cross join movies
;
