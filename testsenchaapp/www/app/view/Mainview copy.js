/*
 * File: app/view/AjaxRestSenchaTabPanel.js
 
 */

Ext.define('MyApp.view.AjaxRestSenchaTabPanel', {
    extend: 'Ext.tab.Panel',
    id:'MainTabPanel',
    config: {
        tabBar: {
            docked: 'bottom'
        },
        cardSwitchAnimation: 'fade',
        items: [
            {
                xtype: 'container',
                title: 'Home',
                iconCls: 'home',
                id: 'homePanel',
                items: [
                    {
                        xtype: 'label',
                        html: 'Selamat datang di aplikasi yang sangat sederhana',
                        styleHtmlContent: true
                    }          
                ]
             },
            {
                xtype: 'formpanel',
                title: 'Add New Record',
                id: 'formPanel',
                iconCls: 'add',
                url: 'http://securesabukhitam.com/project/testsenchaapp/?do=insert',
                items: [
                    
                    {
                    xtype: 'fieldset',
                        title: 'Material Form',
                        items: [
                            {
                                xtype: 'textfield',
                                label: 'Material Code',
                                instructions: 'Masukan material code ',
                                name:'MaterialCode',
                                labelWidth: '50%'
                            },
                            {
                                xtype: 'textfield',
                                label: 'Material Name',
                                name:'MaterialName',
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
                        xtype: 'toolbar',
                        docked: 'top',
                        items: [
                            {
                                xtype: 'button',
                                ui: 'confirm',
                                text: 'Save',
                                handler: function(){
                                    
                                    
                                    this.up('formpanel').submit({
                                        waitMsg: {
                                            message:'sedang menyimpan di server ...',
                                            cls : 'demos-loading'
                                        }
                                    });
                                    alert("Data telah ditambahkan");
                                    this.up('formpanel').reset();
                                    
                            
                                    
                                }
                            },
                            {
                                xtype: 'button',
                                ui: 'decline',
                                text: 'Cancel',
                                handler: function(){
                                    this.up('formpanel').reset();
                                    //Ext.views.AjaxRestSenchaTabPanel.reveal('MaterialListTab');
                                }
                            }
                        ]
                    }
                ]
            },
            {
               xtype: 'list',
               id:'MaterialListTab',
               title: 'Lihat Data',
               iconMask: true,
               iconCls: 'list',
               emptyText: 'Tidak ada data',
               itemTpl: '{MaterialCode}: {MaterialName}',
               store: 'materialStore',
               rendered: false,
                listeners: {                   
                    show: function(){
                        materialStore.load();
                    }
                },
                onItemDisclosure: function(index) {
                    alert(index);
                    //abc.artistDetail.update(record.data);
                    //Ext.getCmp('artists').setActiveItem('detailpanel'); //updated code
                }

           },
           {
                xtype: 'container',
                title: 'Info',
                iconCls: 'info',
                items: [
                    {
                        xtype: 'label',
                        html: 'This app is part of how to use Sencha 2.0 as Phonegap HTML5 App. Please Visit <a href="http://sabukhitam.com/blog" target="_blank">http://sabukhitam.com/blog</a> for more tutorial',
                        styleHtmlContent: true
                    }
                ]
            }
]
    }

});

