/*
 * File: ajaxrestsencha.js
 
 */

Ext.application({

    name: 'MyApp',
    
    controller: ['Main'],
    view:  ['Main'],
    store: ['Materials'],
    
     launch: function() {
        Ext.Viewport.add({
            xclass: 'MyApp.view.Mainview'
        });
    }
});
