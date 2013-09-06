Ext.define('ExtCI.Application', {
    name: 'ExtCI',

    extend: 'Ext.app.Application',

    models: [
        'user.UserList'
    ],

    views: [
        'MainViewport',
        'MainToolbar',
        'MainTabpanel',
        'user.UserAdminPanel',
        'user.UserList',
        'user.UserForm'
    ],

    controllers: [
        'user.UserAdmin'
    ],

    stores: [
        'user.UserList'
    ]
});