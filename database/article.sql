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
