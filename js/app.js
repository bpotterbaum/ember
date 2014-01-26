App = Ember.Application.create();

App.Router.map(function() {
	
	this.route("jodge", { path: "/jodge" });
	this.route("tags", { path: "/tags" });
	this.route("achievements", { path: "/achievements" });
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue', 'green'];
  }
});

App.JodgeRoute = Ember.Route.extend({
  model: function() {
    return ['boom', 'boom', 'pow'];
  }
});

App.TagsRoute = Ember.Route.extend({
  model: function() {
    return ['fff', 'sss', 'ddd'];
  }
});

App.AchievementsRoute = Ember.Route.extend({
  model: function() {
    return ['ggg', 'hhh', 'vvv'];
  }
});