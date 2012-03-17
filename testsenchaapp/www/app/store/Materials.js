var materialStore = new Ext.create('Ext.data.Store', {
     storeId: 'materialStore',
      model: 'Material',
             proxy: {
               type: 'scripttag',
               url : 'http://securesabukhitam.com/project/testsenchaapp/?do=list',
                 reader: {
                    type: 'json'
                },
                writer: {
                    type: 'json'
                }
               },
             autoLoad: true,
             remoteFilter : true
 });
