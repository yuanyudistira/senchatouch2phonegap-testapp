/*
 * File: app/view/AjaxRestSenchaTabPanel.js
 
 */

Ext.define('MyApp.view.Mainview', {
    extend: 'Ext.TabPanel',
    requires: [
        'MyApp.view.Home',
        'MyApp.view.MaterialForm',
        'MyApp.view.MaterialList',
        'MyApp.view.Info'
    ],

    config: {
        tabBar: {
            docked: 'bottom',
            layout: {
                pack: 'center'
            }
        },
        items: [
            {xtype: 'homecard'},
          { xtype: 'formcard' },
          {xtype:'listcard'},
          {xtype:'infocard'}
          ]
    }

});

