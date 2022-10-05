create table companies (
    id int not null auto_increment,
    corp_title varchar(200) not null,
    email varchar(200) not null,
    created_at timestamp not null default current_timestamp,
    updated_at timestamp null on update current_timestamp,
    primary key (id)
);