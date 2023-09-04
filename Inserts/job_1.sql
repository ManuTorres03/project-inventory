create table job
(
    id   int auto_increment
        primary key,
    name varchar(255) null
);

INSERT INTO nexos.job (id, name) VALUES (1, 'SALES_CONSULTANT');
INSERT INTO nexos.job (id, name) VALUES (2, 'ADMINISTRATOR');
INSERT INTO nexos.job (id, name) VALUES (3, 'SUPPORT_ANALYST');
