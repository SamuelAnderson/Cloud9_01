require.config({
   paths: {
       "jquery" : "vendor/jquery/dist/jquery",
       "backbone" : "vendor/backbone-amd/backbone",
       "underscore" : "vendor/underscore-amd/underscore",
       "text": "text",
       "order": "order"
   } 
});


require(['app'], function(App){
    
    
    App.initialize();
})