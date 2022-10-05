create table quest_user (
    id int not null auto_increment,
    user_id int not null,
    quest_id int not null,
    primary key (id),
    foreign key (user_id) references users (id),
    foreign key (quest_id) references quests (id)
);