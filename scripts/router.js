// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/projects/list',
  'views/users/list'
], function($, _, Backbone, ProjectListView, UserListView){
  
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      '/projects': 'showProjects',
      '/users': 'showUsers',

      // Default
      '*actions': 'defaultAction'
    }
  });

  var initialize = function(){
    console.log("Router App");
    
    /*Testing*/
    var projectListView = new ProjectListView();

      
    var app_router = new AppRouter;
    app_router.on('showProjects', function(){
      
      console.log("Show Projects");
       
      // Call render on the module we loaded in via the dependency array
      // 'views/projects/list'
      var projectListView = new ProjectListView();
      projectListView.initialize();
    });
      // As above, call render on our loaded module
      // 'views/users/list'
    app_router.on('showUsers', function(){
      var userListView = new UserListView();
      userListView.render();
    });
    app_router.on('defaultAction', function(actions){
      // We have no matching route, lets just log what the URL was
      console.log('No route:', actions);
    });
    
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});