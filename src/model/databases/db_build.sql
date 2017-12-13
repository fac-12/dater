BEGIN;

DROP TABLE IF EXISTS ideas,tags,connections;


CREATE TABLE IF NOT EXISTS ideas (
    id SERIAL PRIMARY KEY,
    idea_name VARCHAR(200) NOT NULL,
    DateCreated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS tags (
    id SERIAL PRIMARY KEY,
    tag_name VARCHAR(200) NOT NULL,
    DateCreated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS connections (
    id SERIAL PRIMARY KEY,
    idea_id INT REFERENCES ideas(id),
    tag_id INT REFERENCES tags(id),
    DateCreated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);



INSERT INTO ideas (idea_name) VALUES ('walk in the moonlight');

INSERT INTO tags (tag_name) VALUES ('Romantic'),('Double-Date'),('Outdoorsy'),('Cultural'),('Blind-Date'),('Foodie'),('Budget'),('Adventurous'),('Naughty');

INSERT INTO connections(idea_id,tag_id) VALUES ((SELECT id FROM ideas WHERE idea_name='walk in the moonlight'), (SELECT id FROM tags where tag_name='Romantic'));

INSERT INTO connections(idea_id,tag_id) VALUES ((SELECT id FROM ideas WHERE idea_name='walk in the moonlight'), (SELECT id FROM tags where tag_name='Adventurous'));

COMMIT;
