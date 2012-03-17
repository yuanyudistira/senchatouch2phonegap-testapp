Ext.define('MyApp.view.Info', {
    extend: 'Ext.Panel',
    xtype: 'infocard',

    config: {
        iconCls: 'info',
        title: 'About this App',
        defaults: {
            styleHtmlContent: true
        },
        items: [{
            xtype: 'label',
            title: 'TabPanels',
            scrollable: 'vertical',
           html: 'Aplikasi contoh yang saya buat tutorial Sencha 2.0 / Phonegap / HTML5 App. Silahkan kunjungi <a href="http://sabukhitam.com/blog" target="_blank">http://sabukhitam.com/blog</a> untuk  mtutorial yang lebih lengkap lagi'
                             }]
    }
});
