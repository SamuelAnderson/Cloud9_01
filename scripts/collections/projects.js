// Filename: collections/projects
define([
  'underscore',
  'backbone',
  // Pull in the Model module from above
  'models/projects'
], function(_, Backbone, ProjectModel){
  
  console.log("Projects 1");
  
  var ProjectCollection = Backbone.Collection.extend({
    model: ProjectModel
  });
  // You don't usually return a collection instantiated
  return ProjectCollection;
});