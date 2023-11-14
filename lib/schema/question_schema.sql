-- populating questions table
INSERT INTO mcq_questions (type,lesson_id,question,answers,correctanswer) VALUES 
('mcq', 1, '1. What is JavaScript primarily used for?', ARRAY ['styling web pages',
      'creating interactive web applications',
      'managing databases',
      'sending emails'], '2'), 
      ('mcq',1,'2. Which of the following is an example of data type?', ARRAY ['if-else', 
      'let', 'string', 'function'], '3'),
      ('mcq',1, '3. What is the type of NaN?', ARRAY ['Number', 'String', 'null', 'undefined'],
      '1'),
      ('mcq', 1, '4. What is the output of `half of 100 is ${100 / 2}`?', ARRAY [
      'half of 100 is ${100 / 2}',
      'half of 100 is 50',
      'half of 100 is ${50}',
      'half of 100 is 100 / 2'
    ], '2'),
    ('mcq', 1, '5. What is the purpose of `===` operator in JavaScript?', 
    ARRAY [
      'It is used to assign a value to a variable',
      'It compares values for equality and type',
      'It is used to concatenate strings',
      'It converts string to a number'
    ], '2'),
    ('mcq', 1, '6. The outputs of `true && false` and `true || false` are:', 
    ARRAY [
      'true and true',
      'false and false',
      'true and false',
      'false and true'
    ], '4'),
    ('mcq', 1, '7. What is the output of `10 * 10 > 50 ? 1 : 2`?',
    ARRAY ['100', '50', '1', '2'], '3'),
    ('mcq',1,'8. Which one of the following is not a falsy value?', ARRAY ['0', 'null', '[]', '""'],'3'),
    ('mcq',1,'9. The output of "" || "!?"', ARRAY ['""', '!?', 'true', 'false'],'2'),
    ('mcq',1,'10. What is the output of `5 + "5"`?', ARRAY ['10', '"10"', '55', 'error'],'3'),
    ('mcq', 2, '1. Question 1?', ARRAY ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'], '1'),
    ('mcq', 2, '2. Question 2?', ARRAY ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'], '1'),
    ('mcq', 2, '3. Question 3?', ARRAY ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'], '1'),
    ('mcq', 2, '4. Question 4?', ARRAY ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'], '1'),
    ('mcq', 2, '5. Question 5?', ARRAY ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'], '1'),
    ('mcq', 3, '1. Question 1?', ARRAY ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'], '1'),
    ('mcq', 4, '1. Question 1?', ARRAY ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'], '1');
