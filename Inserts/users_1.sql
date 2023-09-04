create table users
(
    id           int auto_increment
        primary key,
    age          int          null,
    joining_date datetime(6)  null,
    name         varchar(255) null,
    role         int          null
);

INSERT INTO nexos.users (id, age, joining_date, name, role) VALUES (1, 20, '2023-09-02 11:12:13.000000', 'Manuel Torres', 1);
INSERT INTO nexos.users (id, age, joining_date, name, role) VALUES (2, 32, '2021-01-04 10:01:23.000000', 'Jhon Doe', 3);
