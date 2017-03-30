Ext.define('OffLineApp.view.orders.OrdersController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.orders',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});