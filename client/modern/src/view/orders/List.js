Ext.define('OffLineApp.view.orders.List', {
    extend: 'Ext.Panel',
    xtype: 'mobileorderlist',    

    requires: [
        'OffLineApp.store.Order'
    ],

    title: 'Orders',

    /*store: {
        type: 'order'
    },*/
    
    layout: 'fit',


    /*config: {
        scrollable: true
    },*/

    /*columns: [
         { xtype: 'checkcolumn', dataIndex: 'payment' },
         { xtype: 'templatecolumn', text:'Order', tpl: '({amount})-{description}', flex: 1 }              
    ],*/
    
    /*listeners: {
        select: 'onItemSelected'
    },*/

    initialize : function() {
            /*var tpl = new Ext.XTemplate(                
                '<h1>{description}</h1>',
                '<h4>{amount}</h4>'                
                );*/

            var orderGrid = Ext.create("Ext.grid.Grid", {
                //itemId : 'Plist',
                //emptyText : 'Empty',
                //store : { type: 'order'},
                //itemTpl: tpl ,          
                store : { type: 'order'}, 
                layout: 'fit',                
                columns: [
                    /*{ xtype: 'checkcolumn', dataIndex: 'payment' },
                    { xtype: 'templatecolumn', tpl: '({amount})-{description}', flex: 1 } */  
                    { dataIndex: 'payment' },
                    { dataIndex: 'description', flex: 1 }            
                 ]
            });
            this.add(orderGrid);
            this.on('render', this.loadStore, this);            
        },

    loadStore: function() {
        this.getStore().load();
    }
    
});
