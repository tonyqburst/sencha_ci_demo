/*
 This file is generated and updated by Sencha Cmd. You can edit this file as
 needed for your application, but these edits will have to be merged by
 Sencha Cmd when upgrading.
 */

// DO NOT DELETE - this directive is required for Sencha Cmd packages to work.
//@require @packageOverrides

Ext.Loader.setConfig({
    enabled: true
});

Ext.require([
    'Ext.layout.container.Border',
    'Ext.toolbar.Paging',
    'Ext.form.field.ComboBox'
]);

Ext.application({
    name: 'ExtCI',

    extend: 'ExtCI.Application',

    autoCreateViewport: true
});
