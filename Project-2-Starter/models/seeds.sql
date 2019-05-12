USE `healthcare_db`;
SELECT * FROM Doctors;

INSERT INTO Doctors (name, speciality, city, MINC, createdAt, updatedAt) VALUES ('David', 'Urology', 'Mississauga', 'IJSD8273', '2019-04-27 17:18:07', '2019-04-27 17:18:07');
INSERT INTO Doctors (name, speciality, city, MINC) VALUES ('Quang', 'Pediatrics', 'Markham', 'ACSD2314', '2019-04-27 17:18:07', '2019-04-27 17:18:07');
INSERT INTO Doctors (name, speciality, city, MINC) VALUES ('Alexis', 'Dermatology', 'East Toronto', 'TTTT82739', '2019-04-27 17:18:07', '2019-04-27 17:18:07');
INSERT INTO Doctors (name, speciality, city, MINC) VALUES ('Maria', 'Family Doctor', 'Brampton', 'AAAA82739', '2019-04-27 17:18:07', '2019-04-27 17:18:07');

INSERT INTO Patients (name, doctor, address, phone, email, healthCard, createdAt, updatedAt) VALUES ('test_patient1', 'David', '123 Sample St', '647-111-1111', 'sample1@test.com','HEALTHCARD#232132','2019-04-27 17:18:07', '2019-04-27 17:18:07');
INSERT INTO Patients (name, doctor, address, phone, email, healthCard, createdAt, updatedAt) VALUES ('test_patient2', 'Peter', '1244 Sample St', '647-111-1212', 'sample2@test.com','HEALTHCARD#87823','2019-04-27 17:18:07', '2019-04-27 17:18:07');
INSERT INTO Patients (name, doctor, address, phone, email, healthCard, createdAt, updatedAt) VALUES ('test_patient3', 'Mark', '1255 Sample St', '647-111-1313', 'sample3@test.com','HEALTHCARD#12312','2019-04-27 17:18:07', '2019-04-27 17:18:07');
INSERT INTO Patients (name, doctor, address, phone, email, healthCard, createdAt, updatedAt) VALUES ('test_patient4', 'Matthew', '1266 Sample St', '647-111-5151', 'sample4@test.com','HEALTHCARD#88977','2019-04-27 17:18:07', '2019-04-27 17:18:07');
