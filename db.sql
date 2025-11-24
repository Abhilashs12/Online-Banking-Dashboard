CREATE DATABASE online_banking;

USE online_banking;

CREATE TABLE accounts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    balance INT
);

CREATE TABLE transactions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    account_id INT,
    amount INT,
    type VARCHAR(20),
    date DATE,
    FOREIGN KEY (account_id) REFERENCES accounts(id)
);

INSERT INTO accounts (name, balance) VALUES
('Savings Account', 120000),
('Current Account', 450000),
('Business Account', 980000);

INSERT INTO transactions (account_id, amount, type, date) VALUES
(1, 20000, 'Deposit', '2025-01-05'),
(1, 5000, 'Withdrawal', '2025-01-10'),
(2, 90000, 'Deposit', '2025-01-11'),
(3, 120000, 'Loan Payment', '2025-01-14');
