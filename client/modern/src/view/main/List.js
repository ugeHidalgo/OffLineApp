/**
 * This view is an example list of people.
 */
Ext.define('OffLineApp.view.main.List', {
    extend: 'Ext.grid.Grid',
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
        { text: 'User',  dataIndex: 'username', flex: 1 },
        { text: 'Email', dataIndex: 'email', flex: 1 },        
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
