Ext.define('Material', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
                 {name:'id',type: 'int'},
                 {name:'MaterialCode',type:'string'},
                 {name:'MaterialName',type:'string'},
                 {name:'MaterialDescription',type:'string'}
                ],
        validation: [
                {type: 'presence',  field: 'MaterialCode'},
                {type: 'presense',    field: 'MaterialName'}
        ],
        sorters: [{
	        property: 'MaterialName',
	        direction: 'ASC'
	    }],
        proxy: {
             type: 'scripttag',
              id : 'userproxy',
            reader: {
                type: 'json'
                }
            },
                writer: {
                    type: 'json'
                }
        }
});