Ext.define('MyApp.controller.Main', {
    extend: 'Ext.app.Controller',
    config: {
    },
    index: function(){
        //display list of material
        Ext.Msg.alert('Test', "Home's index action was called!");

    }
});
