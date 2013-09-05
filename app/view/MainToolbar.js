Ext.define('ExtCI.view.MainToolbar', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.maintoolbar',

    initComponent: function () {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'tbfill'
                },
                {
                    xtype: 'button',
                    text: 'User Admin',
                    action: 'openUserAdminPanel'
                }
            ]
        });

        me.callParent(arguments);
    }

});