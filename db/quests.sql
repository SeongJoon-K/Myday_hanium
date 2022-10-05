create table quests (
    id int not null auto_increment,
    user_id int not null,
    company_id int not null,
    reward_id int not null,
    created_at timestamp not null default current_timestamp,
    primary key (id),
    foreign key (user_id) references users (id),
    foreign key (reward_id) references rewards (id),
    foreign key (company_id) references companies (id)
);