CREATE TABLE Articles(
	id SERIAL PRIMARY KEY,
	Title varchar(500),
	Description VARCHAR(500),
	submission_date DATE DEFAULT NOW()
	
);

INSERT INTO Articles (
	Title, Description
)VALUES(
	'REVIONARY SOLDIER OF WINTER DAYS',
	'The ultimate soldier who conquered nations'
	
);

SELECT title, description, submission_date, id FROM Articles ORDER BY ID DESC

SELECT title, id, description, submission_date FROM Articles WHERE id = '${blog_id}
