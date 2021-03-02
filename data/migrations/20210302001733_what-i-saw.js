const { table } = require("../db");

exports.up = function (knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments();
        tbl.string('username').notNullable().unique();
        tbl.string('first_name').notNullable();
        tbl.string('last_name').notNullable();
        tbl.string('password').notNullable();
    })

        .createTable('library', tbl => {
            tbl.increments();
            tbl.string('username').notNullable();
            tbl.string('title').notNullable();
            tbl.string('year').notNullable();
            tbl.string('type').notNullable();
            tbl.string('imdbID').notNullable();
            tbl.string('poster');
            tbl.string('comment');
            tbl.float('rating');
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('users')
        .dropTableIfExists('library')

};
