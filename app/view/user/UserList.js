Ext.define('ExtCI.view.user.UserList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.userlist',

    title: 'User List',
    columnLines: true,
    store: 'user.UserList',
    initComponent: function () {
        var me = this;

        Ext.applyIf(me, {
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'user_name',
                    text: 'User Name'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'user_group',
                    text: 'Group'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'user_first_name',
                    text: 'First Name'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'user_last_name',
                    text: 'Last Name'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'user_add_date',
                    text: 'Date Added',
                    flex: 1
                }
            ],
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    dock: 'bottom',
                    store: 'user.UserList',
                    displayInfo: true
                }
            ]
        });

        me.callParent(arguments);
    }

});