Ext.define('MyApp.view.Home', {
    extend: 'Ext.Panel',
    xtype: 'homecard',
    config: {
        iconCls: 'home',
        title: 'Home',
        defaults: {
            styleHtmlContent: true
        },
    items: [
        {
                xtype: 'label',
                        html: '<center><h1>Selamat Datang</h1><p>Selamat datang di aplikasi yang sangat sederhana</p></center>',
                        styleHtmlContent: true
        }
        ]
    }
});
