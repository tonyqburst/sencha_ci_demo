Ext.define('ExtCI.store.user.UserList', {
    extend: 'Ext.data.Store',

    requires: [
        'ExtCI.model.user.UserList'
    ],
    constructor: function (cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'ExtCI.model.user.UserList',
            autoLoad: false,
            remoteFilter: false,
            remoteSort: false,
            pageSize: 5,
            sorters: {
                property: 'user_name',
                direction: 'asc'
            },
            proxy: {
                type: 'rest',
                actionMethods: {
                    create: 'POST',
                    read: 'GET',
                    update: 'POST',
                    destroy: 'POST'
                },
                api: {
                    create: 'index.php/user/new_user',
                    read: 'index.php/user/get_users',
                    update: 'index.php/user/update_user',
                    destroy: 'index.php/user/delete_user'
                },
                reader: {
                    type: 'json',
                    root: 'data'
                },
                writer: {
                    type: 'json',
                    writeAllFields: false,
                    allowSingle: false,
                    encode: true,
                    root: 'data'
                }
            }
        }, cfg)]);
    }
});