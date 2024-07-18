CREATE TABLE person (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    gender VARCHAR(10) NOT NULL,
    birth_date DATE NOT NULL,
    phone VARCHAR(15) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
);

INSERT INTO person (name, gender, birth_date, phone, email) VALUES
('John Doe', 'Male', '1990-01-01', '1234567890', 'john.doe@example.com'),
('Jane Doe', 'Female', '1992-02-02', '0987654321', 'jane.doe@example.com'),
('Alice Smith', 'Female', '1988-03-03', '1112223333', 'alice.smith@example.com'),
('Bob Brown', 'Male', '1985-04-04', '4445556666', 'bob.brown@example.com'),
('Charlie Johnson', 'Male', '1995-05-05', '7778889999', 'charlie.johnson@example.com'),
('Dana White', 'Female', '1987-06-06', '1010101010', 'dana.white@example.com'),
('Eve Black', 'Female', '1993-07-07', '1212121212', 'eve.black@example.com'),
('Frank Green', 'Male', '1991-08-08', '1313131313', 'frank.green@example.com'),
('Grace Blue', 'Female', '1989-09-09', '1414141414', 'grace.blue@example.com'),
('Hank Yellow', 'Male', '1994-10-10', '1515151515', 'hank.yellow@example.com');