Ext.define('OffLineApp.view.main.OrdersList', {
    extend: 'Ext.Panel',
    xtype: 'mobileorderlist',    

    requires: [
        'OffLineApp.store.Order'
    ],

    title: 'Orders',

    config: {
        scrollable: true
    },

    listeners: {
        select: 'onItemSelected'
    },

    initialize : function() {
            var tpl = new Ext.XTemplate(                
                '<h1>{description}</h1>',
                '<h4>{amount}</h4>'                
                );

            var orderGrid = Ext.create("Ext.List", {
                itemId : 'Plist',
                emptyText : 'Empty',
                store : { type: 'order'},
                itemTpl: tpl ,                          
                /*layout: 'fit',                
                columns: [
                    { xtype: 'checkcolumn', dataIndex: 'payment' },
                    { xtype: 'templatecolumn', tpl: '({amount})-{description}', flex: 1 } 
                    { dataIndex: 'payment' },
                    { dataIndex: 'description', flex: 1 }            
                 ]*/
            });
            this.add(orderGrid);
            //this.on('render', this.loadStore, this);            
        },

    /*loadStore: function() {
        this.getStore().load();
    }*/
    
});
