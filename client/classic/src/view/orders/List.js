Ext.define('OffLineApp.view.orders.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'orderslist',

    requires: [
        'OffLineApp.store.Order'
    ],

    title: 'Orders',

    store: {
        type: 'order'
    },

    columns: [        
        { text: 'Order Id',  dataIndex: 'orderId' },
        { text: 'Description',  dataIndex: 'description', flex: 1 },
        { text: 'Amount',  dataIndex: 'amount' },
        { 
            xtype: 'checkcolumn', 
            text: 'Payment', 
            dataIndex: 'payment' }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});