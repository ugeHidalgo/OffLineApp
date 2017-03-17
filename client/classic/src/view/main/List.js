/**
 * This view is an example list of people.
 */
Ext.define('OffLineApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'OffLineApp.store.Personnel'
    ],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    columns: [
        //'username', 'firstname', 'lastname', 'email', 'phone'
        { text: 'User',  dataIndex: 'username' },
        { text: 'Name',  dataIndex: 'firstname' },
        { text: 'Last name',  dataIndex: 'lastname' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
