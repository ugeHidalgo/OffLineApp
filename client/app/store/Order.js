Ext.define('OffLineApp.store.Order', {
    extend: 'Ext.data.Store',

    alias: 'store.order',

    autoLoad: true,

    fields: [
        {name: 'orderId', type: 'string'},
        {name: 'description', type: 'string'},
        {name: 'amount', type: 'int'},
        {name: 'payment', type: 'boolean', defaultValue: false}
    ],

    proxy: {
        type: 'rest',        
        url: '/api/orders'        
    }    
});