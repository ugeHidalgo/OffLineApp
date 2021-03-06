/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 * TODO - Replace the content of this view to suit the needs of your application.
 */
Ext.define('OffLineApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',

        'OffLineApp.view.main.MainController',
        'OffLineApp.view.main.MainModel',
        'OffLineApp.view.main.PersonnelList',
        'OffLineApp.view.main.OrdersList'
    ],

    controller: 'main',
    viewModel: 'main',

    defaults: {
        tab: {
            iconAlign: 'top'
        },
        styleHtmlContent: true
    },

    tabBarPosition: 'bottom',

    items: [
        {
            title: 'Home',
            iconCls: 'x-fa fa-home',
            layout: 'fit',
            bind: {
                html: '{loremIpsum}'
            }          
        },{
            title: 'Personnel',
            iconCls: 'x-fa fa-user',
            // The following grid shares a store with the classic version's grid as well!
            items: [{
                xtype: 'mobilepersonnellist'
            }]
        },{
            title: 'Orders',
            iconCls: 'fa-building',
            items: [{
                xtype: 'mobileorderlist'
            }],
        },{
            title: 'Settings',
            iconCls: 'x-fa fa-cog',
            bind: {
                html: '{loremIpsum}'
            }
        }
    ]
});
