Ext.define('OffLineApp.view.main.List', {
    extend: 'Ext.Panel',
    xtype: 'mobilePersonnelList',    

    requires: [
        'OffLineApp.store.Personnel'
    ],

    title: 'Personnel',

    config: {
        scrollable: true
    },
    
    listeners: {
        select: 'onItemSelected'
    },

    initialize : function() {
            var tpl = new Ext.XTemplate(                
                '<h1>{firstname} {lastname}</h1>',
                '<h4>{email}</h4>',
                '<h2>{phone}</h2>'
                );
            var personnelList = Ext.create("Ext.List", {
                itemId : 'Plist',
                emptyText : 'Empty',
                store : { type: 'personnel'},
                itemTpl: tpl
            });
            this.add(personnelList);
        }
});