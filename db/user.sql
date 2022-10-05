create table users (
    id int not null auto_increment,
    login_id varchar(200) not null,
    password varchar(200) not null,
    name varchar(200) not null,
    email varchar(200) not null,
    created_at timestamp not null default current_timestamp,
    updated_at timestamp null on update current_timestamp,
    primary key (id)
);