Ext.define('MyApp.view.MaterialList', {
    extend: 'Ext.List',
    xtype: 'listcard',

    config: {
        iconCls: 'list',
        title: 'Material List',
        defaults: {
            styleHtmlContent: true
        },
        emptyText: 'Tidak ada data',
        itemTpl: '{MaterialCode}: {MaterialName}',
        store: 'materialStore',
        rendered: false,
        
                listeners: {                   
                    show: function(){
                        materialStore.load();
                        console.log("Loading store");
                    },
                    itemtap: function(list, index, item, record) {
                        Ext.Msg.alert('Material Detail', '<ul><li><b>Code:</b>'+record.data.MaterialCode+'</li><li><b>Name</b>: '+record.data.MaterialName+
                                      '</li><li><b>Description</b>: '+record.data.MaterialDescription+'</li>');
                        //alert(record.data.MaterialName);
                        
                     }
                }
        
    }
});
