create table rewards (
    id int not null auto_increment,
    user_id int not null,
    company_id int not null,
    data_category int not null,
    created_at timestamp not null default current_timestamp,
    primary key (id),
    foreign key (user_id) references users (id),
    foreign key (company_id) references companies (id)
);

