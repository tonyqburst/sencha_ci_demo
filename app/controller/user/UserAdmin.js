Ext.define('ExtCI.controller.user.UserAdmin', {
    extend: 'Ext.app.Controller',
    refs: [
        {
            ref: 'userForm',
            selector: 'userform'
        }
    ],
    init: function () {
        this.control({
            'maintoolbar button[action=openUserAdminPanel]': {
                click: function () {
                    var panel = Ext.widget('useradminpanel');
                    panel.show();
                }
            },
            'userform button[action=saveUser]': {
                click: function (button) {
                    var form = button.up('form').getForm(),
                        values = form.getValues(),
                        store = Ext.getStore('user.UserList');

                    if (form.isValid()) {
                        switch (button.getText()) {
                            case 'Save':
                                store.create(values);
                                break;
                            case 'Update':
                                var record = form.getRecord();
                                record.set(values);
                                store.update();
                                button.setText('Save');
                        }
                        this.LoadUserList();
                        this.ResetForm(form);
                    }
                }
            },
            'userform button[action=deleteUser]': {
                click: function (button) {
                    var form = button.up('form').getForm(),
                        values = form.getValues(),
                        store = Ext.getStore('user.UserList');
                    if (form.isValid()) {
                        Ext.MessageBox.confirm('Delete',
                            'Are you sure you want to delete user "' + values.user_name + '"?',
                            function (button) {
                                switch (button) {
                                    case 'yes':
                                        store.destroy(values);
                                        break;
                                    default:
                                        break;
                                }
                            });
                        this.LoadUserList();
                    }
                    this.ResetForm(form);
                }
            },
            'userlist': {
                afterrender: this.LoadUserList,

                cellclick: function (grid, td, cellIndex, record, tr, rowIndex, e, eOpts) {
                    var form = this.getUserForm(),
                        button = form.down('button[action=saveUser]');
                    form.loadRecord(record);
                    button.setText('Update');
                }
            }
        });
    },
    ResetForm: function (form) {
        form._record = null;
        form.reset();
    },
    LoadUserList: function () {
        var store = Ext.getStore('user.UserList');
        store.removeAll();
        store.load();
    }
});