Ext.define('ExtCI.view.MainViewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.mainviewport',

    requires: [
        'ExtCI.view.MainToolbar',
        'ExtCI.view.MainTabpanel'
    ],

    layout: {
        type: 'border'
    },

    initComponent: function () {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    region: 'north',
                    layout: {
                        type: 'fit'
                    },
                    items: [
                        {
                            xtype: 'container'
                        }
                    ],
                    dockedItems: [
                        {
                            xtype: 'maintoolbar',
                            dock: 'bottom'
                        }
                    ]
                },
                {
                    xtype: 'maintabpanel',
                    region: 'center'
                }
            ]
        });

        me.callParent(arguments);
    }

});