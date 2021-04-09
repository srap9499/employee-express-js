CREATE TABLE IF NOT EXISTS employee (
id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(20) NOT NULL,
last_name VARCHAR(20) NOT NULL,
email VARCHAR(25) NOT NULL,
phone VARCHAR(20) NOT NULL,
organization VARCHAR(50) NOT NULL,
designation VARCHAR(20) NOT NULL,
salary DECIMAL(8,2) NOT NULL,
status TINYINT UNSIGNED DEFAULT 0,
is_deleted TINYINT UNSIGNED DEFAULT 0,
created_at DATETIME NOT NULL,
updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


INSERT INTO demodb.employee (
first_name, last_name, email, phone, organization, designation, salary, status, is_deleted, created_at
) VALUES (
'Sidd', 'Panchal', 'sidd@gmail.com', '1234567890', 'TatvaSoft', 'Node.JS Developer', '500.00', '1', '0', '2021-04-09 03:30:30'
), (
'Vish', 'Chotaliya', 'vish@gmail.com', '1234567890', 'TatvaSoft', 'Node.JS Developer', '500.00', '1', '0', '2021-04-09 04:30:30'
);