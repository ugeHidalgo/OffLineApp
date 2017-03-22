Ext.define('OffLineApp.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    autoLoad: true,

    fields: [
        'username', 'firstname', 'lastname', 'email', 'phone'
    ],

    proxy: {
        type: 'rest',        
        url: '/api/personnel'        
    }    
});
