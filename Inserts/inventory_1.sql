create table inventory
(
    id              int auto_increment
        primary key,
    associated_user varchar(255) null,
    entry_date      datetime(6)  null,
    product_name    varchar(255) null,
    quantity        int          null
);

INSERT INTO nexos.inventory (id, associated_user, entry_date, product_name, quantity) VALUES (1, '1', '2022-09-03 15:30:31.000000', 'Computadores HP', 65);
INSERT INTO nexos.inventory (id, associated_user, entry_date, product_name, quantity) VALUES (2, '2', '2018-03-06 12:20:51.000000', 'Escritorios Oficina', 32);
INSERT INTO nexos.inventory (id, associated_user, entry_date, product_name, quantity) VALUES (3, '1', '2023-07-31 23:43:19.000000', 'Parlantes JBL', 11);
INSERT INTO nexos.inventory (id, associated_user, entry_date, product_name, quantity) VALUES (4, '2', '2017-12-05 10:05:43.000000', 'Televisores Samsung', 5);
INSERT INTO nexos.inventory (id, associated_user, entry_date, product_name, quantity) VALUES (5, '1', '2023-07-31 01:50:40.000000', 'Motores para Ferrari', 3);
INSERT INTO nexos.inventory (id, associated_user, entry_date, product_name, quantity) VALUES (6, '1', '2023-07-31 01:52:19.000000', 'Líquido para frenos', 69);
INSERT INTO nexos.inventory (id, associated_user, entry_date, product_name, quantity) VALUES (7, '1', '2023-07-31 01:53:20.000000', 'Llantas Michelin', 12);
INSERT INTO nexos.inventory (id, associated_user, entry_date, product_name, quantity) VALUES (8, '1', '2023-07-31 11:31:46.000000', 'Carrocería Toyota', 10);
INSERT INTO nexos.inventory (id, associated_user, entry_date, product_name, quantity) VALUES (13, '2', '2023-07-31 23:33:01.000000', 'Gatos hidráulicos', 13);
INSERT INTO nexos.inventory (id, associated_user, entry_date, product_name, quantity) VALUES (14, '1', '2023-07-31 23:35:50.000000', 'Esferos negros', 45);
