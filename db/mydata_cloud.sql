create table mydata_cloud (
    id int not null auto_increment,
    data_category int not null,
    quest_id int not null,
    user_id int not null,
    reward_id int not null,
    content varchar(1000) not null,
    created_at timestamp not null default current_timestamp,
    updated_at timestamp null on update current_timestamp,
    primary key (id),
    foreign key (user_id) references users (id),
    foreign key (quest_id) references quests (id),
    foreign key (reward_id) references rewards (id)
);