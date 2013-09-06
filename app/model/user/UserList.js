Ext.define('ExtCI.model.user.UserList', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'user_name',
            type: 'string'
        },
        {
            name: 'user_first_name',
            type: 'string'
        },
        {
            name: 'user_last_name',
            type: 'string'
        },
        {
            name: 'user_email',
            type: 'string'
        },
        {
            name: 'user_password',
            type: 'string'
        },
        {
            name: 'user_group',
            type: 'string'
        },
        {
            name: 'user_notes',
            type: 'string'
        },
        {
            name: 'user_add_date',
            type: 'string'
        }
    ]
});