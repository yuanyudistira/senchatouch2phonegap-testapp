Ext.define('MyApp.view.MaterialForm', {
    extend: 'Ext.form.FormPanel',
    xtype: 'formcard',

    config: {
        iconCls: 'add',
        title: 'Add Material',
        defaults: {
            styleHtmlContent: true
        },
        type:'scripttag',
        url: 'http://securesabukhitam.com/project/testsenchaapp/?do=insert',
        items: [
             {
                    xtype: 'fieldset',
                        title: 'Material Form',
                        items: [
                            {
                                xtype: 'textfield',
                                label: 'Material Code',
                                id:'MaterialCode',
                                instructions: 'Masukan material code ',
                                name:'MaterialCode',
                                labelWidth: '50%'
                            },
                            {
                                xtype: 'textfield',
                                label: 'Material Name',
                                name:'MaterialName',
                                id:'MaterialName',
                                labelWidth: '50%'
                            },
                            {
                                xtype: 'textareafield',
                                label: 'Material Description',
                                name:'MaterialDescription',
                                labelAlign: 'top'
                            }
                        ]
                    },
                    {
                        xtype: 'titlebar',
                        docked: 'top',
                        title:'Add New Material',
                        items: [
                            {
                                xtype: 'button',
                                ui: 'confirm',
                                text: 'Save',
                                align:'right',
                                handler: function(){
                                    
                                if (Ext.ComponentQuery.query('#MaterialCode')[0].getValue().length == 0)
                                {
                                    Ext.Msg.alert('Error', 'Material Code Harus Diisi');
                                    
                                }else {
                                    if (Ext.ComponentQuery.query('#MaterialName')[0].getValue().length == 0) {
                                         Ext.Msg.alert('Error', 'Material Name Harus Diisi');
                                    }else{
                                        this.up('formpanel').submit({
                                            waitMsg: {
                                                message:'sedang menyimpan di server ...',
                                                cls : 'demos-loading'
                                            }
                                        });
                                        Ext.Msg.alert('Thanks', 'Data telah ditambahkan');
                                        this.up('formpanel').reset();
                                    }
                                }
    
                               
                                
                            
                                
                                    
                                    
                                    
                            
                                    
                                }
                            },
                            {
                                xtype: 'button',
                                ui: 'decline',
                                text: 'Cancel',
                                align:'left',
                                action:'pingHomeBadge'
                            }
                        ]
                    }
             
                ]
    }
});
