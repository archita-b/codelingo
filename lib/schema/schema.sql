-- create lessons table
CREATE TABLE lessons (
  id INTEGER NOT NULL UNIQUE,
  lesson_name VARCHAR(256),
  description VARCHAR(256)
);

-- create question_type table
CREATE TABLE question_type (
  type VARCHAR(50) PRIMARY KEY
);

-- create questions table
CREATE TABLE mcq_questions (
    id SERIAL PRIMARY KEY,
    type VARCHAR(50) REFERENCES question_type(type) ON DELETE CASCADE,
    lesson_id INTEGER REFERENCES lessons(id) ON DELETE CASCADE,
    question VARCHAR(256) NOT NULL,
    answers TEXT [],
    correctanswer INTEGER NOT NULL
);

-- create lesson_completion table
CREATE TABLE lesson_completion (
  user_email VARCHAR(256) NOT NULL UNIQUE,
  lesson_id INTEGER REFERENCES lessons(id),
  is_completed BOOLEAN,
  PRIMARY KEY (user_email,lesson_id)
);


