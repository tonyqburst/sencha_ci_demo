Ext.define('ExtCI.view.MainTabpanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.maintabpanel',

    activeTab: 0,

    initComponent: function () {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    title: 'Tab 1'
                },
                {
                    xtype: 'panel',
                    title: 'Tab 2'
                },
                {
                    xtype: 'panel',
                    title: 'Tab 3'
                }
            ]
        });

        me.callParent(arguments);
    }

});