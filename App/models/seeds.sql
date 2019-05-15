USE `healthcare_db`;

-- Seeding into Doctors
INSERT INTO Doctors (fullname, speciality, city, MINC, email, pword)
VALUES
    ("Maria Azam", "Internal Medicine", "Brampron", "MD-00000000", "maria@isarealdoctor.ca", "arianalatte"),
    ("David Ma", "Orthopedic Surgery", "Vaughan", "MD-00000001", "david@isarealsurgeon.com", "hypebeast"),
    ("Quang Chieu", "Oncology", "Scarborough", "MD-00000002", "quang@treatsdiabetes.com", "quangisneverwrong"),
    ("Alexis Corrieras", "Endocrinologist", "MD-00000004", "alexis@isfrench.com", "bagguetteboi");

SELECT * FROM Doctors;

-- Seeding into 
