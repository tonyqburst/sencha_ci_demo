Ext.define('ExtCI.view.user.UserForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.userform',

    width: 150,
    bodyPadding: 10,
    title: 'Edit / Create',
    collapsible: true,

    initComponent: function () {
        var me = this;

        Ext.applyIf(me, {
            defaults: {
                labelWidth: 100
            },
            items: [
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    fieldLabel: 'User Name',
                    name: 'user_name',
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    fieldLabel: 'First Name',
                    name: 'user_first_name',
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    fieldLabel: 'Last Name',
                    name: 'user_last_name',
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    fieldLabel: 'Email',
                    name: 'user_email',
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    fieldLabel: 'Password',
                    inputType: 'password',
                    name: 'user_password',
                    allowBlank: false
                },
                {
                    xtype: 'combobox',
                    anchor: '100%',
                    fieldLabel: 'User Group',
                    name: 'user_group',
                    allowBlank: false
                },
                {
                    xtype: 'textareafield',
                    anchor: '100%',
                    fieldLabel: 'Notes',
                    name: 'user_notes'
                },
                {
                    xtype: 'hidden',
                    name: 'user_add_date',
                    value: Ext.Date.format(new Date(), 'Y-m-d')
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Save',
                            action: 'saveUser'
                        },
                        {
                            xtype: 'button',
                            text: 'Delete',
                            action: 'deleteUser'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});