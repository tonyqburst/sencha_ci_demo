Ext.define('ExtCI.view.user.UserAdminPanel', {
    extend: 'Ext.window.Window',
    alias: 'widget.useradminpanel',

    requires: [
        'ExtCI.view.user.UserList',
        'ExtCI.view.user.UserForm'
    ],

    height: 406,
    width: 769,
    layout: {
        type: 'border'
    },
    title: 'User Admin',
    modal: true,

    initComponent: function () {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'userlist',
                    flex: 1.75,
                    region: 'center'
                },
                {
                    xtype: 'userform',
                    flex: 1,
                    region: 'east',
                    split: true
                }
            ]
        });

        me.callParent(arguments);
    }
})