Ext.define('OffLineApp.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    autoLoad: true,

    fields: [
        'username', 'firstname', 'lastname', 'email', 'phone'
    ],

    proxy: {
        // @sw-cache
        url: '/api/personnel',
        type: 'rest'
    }    
});
