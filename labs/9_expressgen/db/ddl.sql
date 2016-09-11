create database todos;
use todos;

create table todos(id integer auto_increment primary key, name varchar(100), description varchar(255), category varchar(50), due_date date);

insert into todos (name, description, category) values ('Deliver workshop', 'Deliver hasgeek workshop on nodejs', 'workshop');
