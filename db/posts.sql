create table posts (
    id int not null auto_increment,
    user_id int not null,
    title varchar(200) not null,
    content varchar(1000) not null,
    created_at timestamp not null default current_timestamp,
    updated_at timestamp null on update current_timestamp,
    primary key (id),
    foreign key (user_id) references users (id)
);