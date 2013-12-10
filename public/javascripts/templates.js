Ember.TEMPLATES["account"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<h2><i class=\"fa fa-tasks\"></i> Account</h2>\n\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.outlet || (depth0 && depth0.outlet)),stack1 ? stack1.call(depth0, "user", options) : helperMissing.call(depth0, "outlet", "user", options))));
  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.outlet || (depth0 && depth0.outlet)),stack1 ? stack1.call(depth0, "company", options) : helperMissing.call(depth0, "outlet", "company", options))));
  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.outlet || (depth0 && depth0.outlet)),stack1 ? stack1.call(depth0, "billing", options) : helperMissing.call(depth0, "outlet", "billing", options))));
  data.buffer.push("\n\n");
  return buffer;
  
});

Ember.TEMPLATES["account/billing"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("<table class=\"table\">\n  <thead>\n    <tr>\n      <th>Billing</th>\n    </tr>\n  </thead>\n</table>\n\n<div class=\"row\">\n  <div class='col-xs-6 col-sm-offset-3'>\n    <form class=\"form-horizontal\" role=\"form\">\n      <div class=\"form-group\">\n        <div class=\"col-sm-offset-3 col-xs-9\">\n          <p class=\"help-block\">\n            <small>This account is billed to:\n              <strong>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "company.creditType", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "company.lastFour", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</strong></small>\n          </p>\n          <button class='btn btn-default btn-sm'>Update credit card</button>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"col-xs-9 col-sm-offset-3\">\n          <a href=\"#\" class='text-danger'>Close this account…</a>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["account/company"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashContexts, hashTypes, escapeExpression=this.escapeExpression;


  data.buffer.push("<table class=\"table\">\n  <thead>\n    <tr>\n      <th>Your company</th>\n    </tr>\n  </thead>\n</table>\n\n<div class=\"row\">\n  <div class='col-xs-6 col-sm-offset-3'>\n    <form class=\"form-horizontal\" role=\"form\">\n      <div class=\"form-group\">\n        <label for=\"inputCompany\" class=\"col-xs-3 control-label\">Name</label>\n        <div class=\"col-xs-9\">\n          <input type=\"text\" class=\"form-control\" id=\"inputCompany\" ");
  hashContexts = {'value': depth0};
  hashTypes = {'value': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'value': ("company.name")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"inputSubdomain\" class=\"col-xs-3 control-label\">Subdomain</label>\n        <div class=\"col-xs-5\">\n          <input type=\"text\" class=\"form-control\" id=\"inputSubdomain\" ");
  hashContexts = {'value': depth0};
  hashTypes = {'value': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'value': ("company.slug")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n        </div>\n        <label class='col-xs-4 control-label'>.activecell.com</span>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"col-sm-offset-3 col-xs-9\">\n          <button type=\"submit\" class=\"btn btn-default\">Save</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["account/user"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashContexts, hashTypes, escapeExpression=this.escapeExpression;


  data.buffer.push("<table class=\"table\">\n  <thead>\n    <tr>\n      <th>You</th>\n    </tr>\n  </thead>\n</table>\n\n<div class=\"row\">\n  <div class='col-xs-3'>\n    <div class=\"media\">\n      <a class=\"pull-left\" href=\"http://www.gravatar.com\">\n        <img class=\"media-object\" src=\"images/jason.png\">\n      </a>\n      <div class=\"media-body\">\n        You can update your image at <a href=\"http://www.gravatar.com\">gravatar.com</a>.\n      </div>\n    </div>\n  </div>\n  <div class='col-xs-6'>\n    <form class=\"form-horizontal\" role=\"form\">\n      <div class=\"form-group\">\n        <label for=\"inputName\" class=\"col-xs-3 control-label\">Name</label>\n        <div class=\"col-xs-9\">\n          <input type=\"text\" class=\"form-control\" id=\"inputName\" ");
  hashContexts = {'value': depth0};
  hashTypes = {'value': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'value': ("name")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"inputemail\" class=\"col-xs-3 control-label\">Email</label>\n        <div class=\"col-xs-9\">\n          <input type=\"email\" class=\"form-control\" id=\"inputName\" ");
  hashContexts = {'value': depth0};
  hashTypes = {'value': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'value': ("email")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"col-sm-offset-3 col-xs-9\">\n          <div class=\"checkbox\">\n            <label>\n              <input type=\"checkbox\" ");
  hashContexts = {'value': depth0};
  hashTypes = {'value': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'value': ("emailMe")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("> Email me about product updates.\n            </label>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"col-sm-offset-3 col-xs-9\">\n          <button type=\"submit\" class=\"btn btn-default\">Save</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th>Your password</th>\n    </tr>\n  </thead>\n</table>\n\n<div class=\"row\">\n  <div class='col-xs-6 col-sm-offset-3'>\n    <form class=\"form-horizontal\" role=\"form\">\n      <div class=\"form-group\">\n        <label for=\"inputPass1\" class=\"col-xs-3 control-label\">Current</label>\n        <div class=\"col-xs-9\">\n          <input type=\"password\" class=\"form-control\" id=\"inputPass1\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"inputPass2\" class=\"col-xs-3 control-label\">New</label>\n        <div class=\"col-xs-9\">\n          <input type=\"password\" class=\"form-control\" id=\"inputPass2\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"inputPass1\" class=\"col-xs-3 control-label\">Confirm</label>\n        <div class=\"col-xs-9\">\n          <input type=\"password\" class=\"form-control\" id=\"inputPass2\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"col-sm-offset-3 col-xs-9\">\n          <button type=\"submit\" class=\"btn btn-default\">Save</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || (depth0 && depth0.partial)),stack1 ? stack1.call(depth0, "partials/navigation", options) : helperMissing.call(depth0, "partial", "partials/navigation", options))));
  data.buffer.push("\n\n<div class=\"container\">\n  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n  ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || (depth0 && depth0.partial)),stack1 ? stack1.call(depth0, "partials/footer", options) : helperMissing.call(depth0, "partial", "partials/footer", options))));
  data.buffer.push("\n</div>\n\n");
  return buffer;
  
});

Ember.TEMPLATES["company"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "company.clients", "parent.id", options) : helperMissing.call(depth0, "link-to", "company.clients", "parent.id", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    <i class=\"fa fa-angle-right\"></i>\n  ");
  return buffer;
  }
function program2(depth0,data) {
  
  var hashTypes, hashContexts;
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "parent.name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n    ");
  hashContexts = {'tagName': depth0,'href': depth0};
  hashTypes = {'tagName': "STRING",'href': "BOOLEAN"};
  options = {hash:{
    'tagName': ("li"),
    'href': (false)
  },inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "company.clients", "id", options) : helperMissing.call(depth0, "link-to", "company.clients", "id", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n  ");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n      <a ");
  hashContexts = {'href': depth0};
  hashTypes = {'href': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'href': ("view.href")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n        <i class=\"fa fa-briefcase\"></i>\n        Clients\n      </a>\n    ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n    <a ");
  hashContexts = {'href': depth0};
  hashTypes = {'href': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'href': ("view.href")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n      <i class=\"fa fa-cutlery\"></i>\n      Recipes\n    </a>\n  ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n    <a ");
  hashContexts = {'href': depth0};
  hashTypes = {'href': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'href': ("view.href")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n      <i class=\"fa fa-fighter-jet\"></i>\n      Resources\n    </a>\n  ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n    <a ");
  hashContexts = {'href': depth0};
  hashTypes = {'href': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'href': ("view.href")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n      <i class=\"fa fa-lock\"></i>\n      Access\n    </a>\n  ");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n    <a ");
  hashContexts = {'href': depth0};
  hashTypes = {'href': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'href': ("view.href")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n      <i class=\"fa fa-truck\"></i>\n      Activity\n    </a>\n  ");
  return buffer;
  }

  data.buffer.push("<h2>\n  ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "parent", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n</h2>\n\n<br />\n\n<ul class=\"nav nav-tabs\">\n\n  ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.unless.call(depth0, "parent", {hash:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n  ");
  hashContexts = {'tagName': depth0,'href': depth0};
  hashTypes = {'tagName': "STRING",'href': "BOOLEAN"};
  options = {hash:{
    'tagName': ("li"),
    'href': (false)
  },inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "company.recipes", "id", options) : helperMissing.call(depth0, "link-to", "company.recipes", "id", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n  ");
  hashContexts = {'tagName': depth0,'href': depth0};
  hashTypes = {'tagName': "STRING",'href': "BOOLEAN"};
  options = {hash:{
    'tagName': ("li"),
    'href': (false)
  },inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "company.resources", "id", options) : helperMissing.call(depth0, "link-to", "company.resources", "id", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n  ");
  hashContexts = {'tagName': depth0,'href': depth0};
  hashTypes = {'tagName': "STRING",'href': "BOOLEAN"};
  options = {hash:{
    'tagName': ("li"),
    'href': (false)
  },inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "company.access", "id", options) : helperMissing.call(depth0, "link-to", "company.access", "id", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n  ");
  hashContexts = {'tagName': depth0,'href': depth0};
  hashTypes = {'tagName': "STRING",'href': "BOOLEAN"};
  options = {hash:{
    'tagName': ("li"),
    'href': (false)
  },inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "company.activity", "id", options) : helperMissing.call(depth0, "link-to", "company.activity", "id", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n</ul>\n\n<br />\n\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["company/access"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n      <tr>\n        <td>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</td>\n        <td>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "role", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</td>\n        <td>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "lastLoggedInString", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</td>\n        <td><button class='btn btn-danger btn-xs'><i class=\"fa fa-times-circle-o\"> Remove</button></td>\n      </tr>\n    ");
  return buffer;
  }

  data.buffer.push("<p class=\"lead\">Team members do not have access to clients until added!</p>\n\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th>Team member</th>\n      <th>Role</th>\n      <th>Last logged in</th>\n      <th></th>\n    </tr>\n  </thead>\n  <tbody>\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "users", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </tbody>\n</table>\n\n<a data-toggle=\"modal\" href=\"#addBoard\" class='btn btn-primary'>\n  <i class=\"fa fa-plus\"></i> Invite a new team member\n</a>");
  return buffer;
  
});

Ember.TEMPLATES["company/activity"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n      <tr>\n        <td>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</td>\n        <td>");
  hashContexts = {'unescaped': depth0};
  hashTypes = {'unescaped': "STRING"};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "description", {hash:{
    'unescaped': ("true")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</td>\n        <td>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "dateString", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</td>\n        <td>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "status", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</td>\n      </tr>\n    ");
  return buffer;
  }

  data.buffer.push("<p class=\"lead\">This is a log of system-generated actions.</p>\n\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th></th>\n      <th>Action</th>\n      <th>Date and time</th>\n      <th>Status</th>\n    </tr>\n  </thead>\n  <tbody>\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </tbody>\n</table>");
  return buffer;
  
});

Ember.TEMPLATES["company/clients"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n      <tr>\n        <td>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "company", "id", options) : helperMissing.call(depth0, "link-to", "company", "id", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</td>\n        <td><button class='btn btn-danger btn-xs'><i class=\"fa fa-times-circle-o\"> Archive</button></td>\n      </tr>\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var hashTypes, hashContexts;
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  }

  data.buffer.push("<p class=\"lead\">Manage your clients in one place. We'll take care of the rest.</p>\n\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th>Client</th>\n      <th></th>\n    </tr>\n  </thead>\n  <tbody>\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </tbody>\n</table>\n\n<a data-toggle=\"modal\" href=\"#addBoard\" class='btn btn-primary'>\n  <i class=\"fa fa-plus\"></i> Add a new client\n</a>");
  return buffer;
  
});

Ember.TEMPLATES["company/recipes"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n      <tr>\n        <td>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || (depth0 && depth0.linkTo)),stack1 ? stack1.call(depth0, "recipe", "id", options) : helperMissing.call(depth0, "linkTo", "recipe", "id", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</td>\n        <td>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "frequency", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</td>\n        <td>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "timeframe", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</td>\n        <td>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "active", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</td>\n        <td><button class='btn btn-danger btn-xs'><i class=\"fa fa-times-circle-o\"> Remove</button></td>\n      </tr>\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var hashTypes, hashContexts;
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  }

  data.buffer.push("<p class=\"lead\">Recipes are recurring sets of task lists.</p>\n\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th>Recipe</th>\n      <th>Frequency</th>\n      <th>On</th>\n      <th>Active</th>\n    </tr>\n  </thead>\n  <tbody>\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </tbody>\n</table>\n\n<a data-toggle=\"modal\" href=\"#addBoard\" class='btn btn-primary'>\n  <i class=\"fa fa-plus\"></i> Add a new recipe\n</a>");
  return buffer;
  
});

Ember.TEMPLATES["company/resources"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<p class=\"lead\">Assemble a killer team and smart tools to get things done.</p>\n\n<h3><i class=\"fa fa-gift\"></i> Activecell White Glove Service™</h3>\n<p class=\"lead\">Our talented pool of remote team members</p>\n\n<table class=\"table\">\n  <thead>\n    <td>Role</td>\n    <td>Rate</td>\n    <td class=\"col-xs-3\" >Volume</td>\n    <td class=\"col-xs-2 text-right\"></td>\n    <td class=\"col-xs-2 text-right\">Cost</td>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Executive assistant</td>\n      <td>$10.00 / hr</td>\n      <td style=\"vertical-align: middle;\">\n        <div id=\"slider1\"></div>\n        <script>\n          $(function() {\n            $( \"#slider1\" ).slider({\n              value: 30,\n              min: 0,\n              max: 500,\n              step: 5,\n              slide: function( event, ui ) {\n                $( \".js-time1\" ).html(ui.value );\n                $( \".js-amt1\" ).html(ui.value * 10 );\n              }\n            });\n            $( \".js-time1\" ).html($( \"#slider1\" ).slider( \"value\" ) );\n            $( \".js-amt1\" ).html(10 * $( \"#slider1\" ).slider( \"value\" ) );\n          });\n          </script>\n      </td>\n      <td class='text-right'><span class=\"js-time1\"></span> <em>hours</em></td>\n      <td class='text-right'>$<span class=\"js-amt1\"></span>.00</td>\n    </tr>\n    <tr>\n      <td>Bookkeeper (Global)</td>\n      <td>$25.00 / hr</td>\n      <td style=\"vertical-align: middle;\">\n        <div id=\"slider2\"></div>\n        <script>\n          $(function() {\n            $( \"#slider2\" ).slider({\n              value: 0,\n              min: 0,\n              max: 500,\n              step: 5,\n              slide: function( event, ui ) {\n                $( \".js-time2\" ).html(ui.value );\n                $( \".js-amt2\" ).html(ui.value * 25 );\n              }\n            });\n            $( \".js-time2\" ).html($( \"#slider2\" ).slider( \"value\" ) );\n            $( \".js-amt2\" ).html(25 * $( \"#slider2\" ).slider( \"value\" ) );\n          });\n          </script>\n      </td>\n      <td class='text-right'><span class=\"js-time2\"></span> <em>hours</em></td>\n      <td class='text-right'>$<span class=\"js-amt2\"></span>.00</td>\n    </tr>\n    <tr>\n      <td>Bookkeeper (North America)</td>\n      <td>$50.00 / hr</td>\n      <td style=\"vertical-align: middle;\">\n        <div id=\"slider3\"></div>\n        <script>\n          $(function() {\n            $( \"#slider3\" ).slider({\n              value: 0,\n              min: 0,\n              max: 500,\n              step: 5,\n              slide: function( event, ui ) {\n                $( \".js-time3\" ).html(ui.value );\n                $( \".js-amt3\" ).html(ui.value * 50 );\n              }\n            });\n            $( \".js-time3\" ).html($( \"#slider3\" ).slider( \"value\" ) );\n            $( \".js-amt3\" ).html(50 * $( \"#slider3\" ).slider( \"value\" ) );\n          });\n          </script>\n      </td>\n      <td class='text-right'><span class=\"js-time3\"></span> <em>hours</em></td>\n      <td class='text-right'>$<span class=\"js-amt3\"></span>.00</td>\n    </tr>\n    <tr>\n      <td>CFO</td>\n      <td>$100.00 / hr</td>\n      <td style=\"vertical-align: middle;\">\n        <div id=\"slider4\"></div>\n        <script>\n          $(function() {\n            $( \"#slider4\" ).slider({\n              value: 0,\n              min: 0,\n              max: 500,\n              step: 5,\n              slide: function( event, ui ) {\n                $( \".js-time4\" ).html(ui.value );\n                $( \".js-amt4\" ).html(ui.value * 100 );\n              }\n            });\n            $( \".js-time4\" ).html($( \"#slider4\" ).slider( \"value\" ) );\n            $( \".js-amt4\" ).html(100 * $( \"#slider4\" ).slider( \"value\" ) );\n          });\n          </script>\n      </td>\n      <td class='text-right'><span class=\"js-time4\"></span> <em>hours</em></td>\n      <td class='text-right'>$<span class=\"js-amt4\"></span>.00</td>\n    </tr>\n  </tbody>\n</table>\n\n<button class='btn btn-primary'>Learn mode about Activecell White Glove Service™</button>\n\n<h3><i class=\"fa fa-cloud\"></i> Integrated cloud services</h3>\n<p class=\"lead\">Maximize your time by putting smart tools to work.</p>\n\n<table class=\"table\">\n  <tbody>\n    <tr>\n      <td>eSignatures</td>\n      <td><img src=\"https://2.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&amp;s=30\"></td>\n      <td>Right Signature</td>\n      <td><a href=''>Take me there</a></td>\n      <td class='text-right'>Included</td>\n    </tr>\n    <tr>\n      <td>Accounts receivable</td>\n      <td><img src=\"https://2.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&amp;s=30\"></td>\n      <td>Bill.com</td>\n      <td><a href=''>Take me there</a></td>\n      <td class='text-right'>Included</td>\n    </tr>\n    <tr>\n      <td>Accounts payable</td>\n      <td><img src=\"https://2.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&amp;s=30\"></td>\n      <td>Bill.com</td>\n      <td><a href=''>Take me there</a></td>\n      <td class='text-right'>Included</td>\n    </tr>\n    <tr>\n      <td>Project management</td>\n      <td><img src=\"https://2.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&amp;s=30\"></td>\n      <td>Basecamp</td>\n      <td><a href=''>Take me there</a></td>\n      <td class='text-right'>Included</td>\n    </tr>\n    <tr>\n      <td>Payroll</td>\n      <td><img src=\"https://2.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&amp;s=30\"></td>\n      <td>Quickbooks Payroll</td>\n      <td><a href=''>Take me there</a></td>\n      <td class='text-right'>$39.00</td>\n    </tr>\n    <tr>\n      <td>File management</td>\n      <td></td>\n      <td><button class='btn btn-default btn-sm'><i class=\"fa fa-plus-circle\"></i> Set up now</button></td>\n      <td></td>\n      <td></td>\n    </tr>\n    <tr>\n      <td>Document scanning</td>\n      <td><img src=\"https://2.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&amp;s=30\"></td>\n      <td>Shoeboxed</td>\n      <td><a href=''>Take me there</a></td>\n      <td class='text-right'>Free</td>\n    </tr>\n  </tbody>\n</table>\n\n<i class=\"fa fa-plus-circle\"></i> <a href=''> Get add-ons</a>\n\n<div class=\"text-right\">\n  <button class='btn btn-default btn-sm'>Apply changes</button><br />\n  <small><strong>Est. monthly cost</small></strong><br />\n  <p class='lead'>$638.99</p>\n</div>");
  
});

Ember.TEMPLATES["notification"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<!-- le notification modal -->\n<div class=\"modal fade\" id=\"notifications\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Notifications</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"media\">\n          <a class=\"pull-left\" href=\"#\">\n            <img class=\"media-object\" src=\"https://2.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&amp;s=40\">\n          </a>\n          <div class=\"media-body\">\n            <h4 class=\"media-heading\"><span class=\"label label-primary\">adamneary</span> commented on a tasks\n              <a data-toggle=\"modal\" href=\"#itemDetail\">#1 Jack-in-the-box lorem</a></h4>\n            <hr>\n           <p>\n             <span class=\"label label-primary\">@kusic</span>\n             Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n              <span title=\"11/8/2013 7:30:07 PM\">Nov 8 at 7:30 pm</span>\n          </div>\n        </div>\n        <div class=\"media\">\n          <a class=\"pull-left\" href=\"#\">\n            <img class=\"media-object\" src=\"https://1.gravatar.com/avatar/e55c09439e68fbaaf1231c9e725a8bdc?d=https%3A%2F%2Fidenticons.github.com%2F6789e600d8abaf5d52d427355d513fd2.png&s=40\">\n          </a>\n          <div class=\"media-body\">\n            <h4 class=\"media-heading\"><span class=\"label label-primary\">@kusic</span> commented on a tasks\n              <a data-toggle=\"modal\" href=\"#itemDetail\">#1 Jack-in-the-box lorem</a></h4>\n            <hr>\n            <p>\n              <span class=\"label label-primary\">@adamneary</span>\n              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n            <span title=\"11/8/2013 7:32:07 PM\">Nov 8 at 7:32 pm</span>\n          </div>\n      </div><!-- end .modal-body -->\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger\">Close</button>\n      </div><!-- end .modal-footer -->\n    </div><!-- end .modal-content -->\n  </div><!-- end .modal-dialog -->\n</div><!-- end .modal -->");
  
});

Ember.TEMPLATES["partials/_footer"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<footer id=\"footer\" role=\"contentinfo\">\n  <div class=\"row\">\n     <div class=\"col-xs-3\">\n       <dl>\n        <dt><a href=\"http://www.activecell.com/about.html\">About Activecell</a></dt>\n        <dd><a href=\"http://www.activecell.com/index.html#features\">Features</a></dd>\n        <dd><a href=\"http://www.activecell.com/index.html#pricing\">Pricing</a></dd>\n        <dd><a href=\"http://www.activecell.com/experts.html\">Experts</a></dd>\n        <dd><a href=\"http://www.activecell.com/blog.html\">The Activecell Method</a></dd>\n        <dd><a href=\"http://www.activecell.com/advisors.html\">For advisors</a></dd>\n        <dd><a href=\"http://www.activecell.com/privacy.html\">Privacy policy</a></dd>\n      </dl>\n    </div>\n    <div class=\"col-xs-3\">\n      <dl>\n        <dt><a href=\"http://success.activecell.com\">Support &amp; feedback</a></dt>\n        <dd><a href=\"http://success.activecell.com/knowledgebase\">Knowledge base</a></dd>\n        <dd><a href=\"http://success.activecell.com/forums/110485-product-feedback\">Product feedback</a></dd>\n        <dd><a href=\"http://success.activecell.com\">Contact support</a></dd>\n      </dl>\n    </div>\n    <div class=\"col-xs-6 copyright\">\n      Brought to you by Profitably, Inc.  © 2013. <br />\n      All rights reserved.\n    </div>\n  </div>\n</footer>");
  
});

Ember.TEMPLATES["partials/_navigation"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n                    <i class=\"fa fa-briefcase fa-fw\"></i>\n                    Clients\n                  ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n                    <i class=\"fa fa-cutlery fa-fw\"></i>\n                    Recipes\n                  ");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n                    <i class=\"fa fa-fighter-jet fa-fw\"></i>\n                    Resources\n                  ");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("\n                    <i class=\"fa fa-lock fa-fw\"></i>\n                    Access\n                  ");
  }

function program9(depth0,data) {
  
  
  data.buffer.push("\n                    <i class=\"fa fa-truck fa-fw\"></i>\n                    Activity\n                  ");
  }

function program11(depth0,data) {
  
  
  data.buffer.push("\n                    <i class=\"fa fa-user fa-fw\"></i>\n                    Account\n                  ");
  }

  data.buffer.push("<!-- le main nav -->\n<header class=\"navbar navbar-inverse navbar-fixed-top\" role=\"banner\">\n  <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button class=\"navbar-toggle collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\".bs-navbar-collapse\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"http://www.activecell.com\">\n            <img id='activecell-header-logo' src=\"images/activecell-full-color-darkBG-small.png\" alt=\"Activecell\">\n            Bookkeeper Tools\n          </a>\n        </div>\n        <nav class=\"navbar-collapse bs-navbar-collapse collapse\" role=\"navigation\" style=\"height: 1px;\">\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li class='active'><a href='javascript:;'><i class=\"fa fa-wrench\"></i> Tools</a></li>\n            <li><a href='javascript:;'><i class=\"fa fa-bolt\"></i> Add-ons</a></li>\n            <li><a href='javascript:;'><i class=\"fa fa-book\"></i> Docs</a></li>\n            <li class=\"dropdown\">\n              <a id=\"header-avatar\" href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                <img src=\"images/jason.png\" alt=\"Jason Hill\">\n                <b class=\"caret\"></b>\n              </a>\n              <ul class=\"dropdown-menu\">\n                <li>\n                  ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","INTEGER"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "company.clients", 1, options) : helperMissing.call(depth0, "link-to", "company.clients", 1, options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                </li>\n                <li>\n                  ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","INTEGER"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "company.recipes", 1, options) : helperMissing.call(depth0, "link-to", "company.recipes", 1, options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                </li>\n                <li>\n                  ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0],types:["STRING","INTEGER"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "company.resources", 1, options) : helperMissing.call(depth0, "link-to", "company.resources", 1, options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                </li>\n                <li>\n                  ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0],types:["STRING","INTEGER"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "company.access", 1, options) : helperMissing.call(depth0, "link-to", "company.access", 1, options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                </li>\n                <li>\n                  ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0,depth0],types:["STRING","INTEGER"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "company.activity", 1, options) : helperMissing.call(depth0, "link-to", "company.activity", 1, options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                </li>\n                <li class=\"divider\"></li>\n                <li>\n                  ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "account", options) : helperMissing.call(depth0, "link-to", "account", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                </li>\n                <li class=\"divider\"></li>\n                <li><a href=\"javascript:;\"><i class=\"fa fa-power-off fa-fw\"></i> Log out</a></li>\n              </ul>\n            </li>\n          </ul>\n        </nav>\n      </div>\n</header>");
  return buffer;
  
});

Ember.TEMPLATES["recipe"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n  <i class=\"fa fa-arrow-circle-o-left\"></i>\n  Back to recipe list\n");
  }

function program3(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n    <a data-toggle=\"modal\" href=\"#itemDetail\" class=\"list-group-item\">\n      <span class=\"badge\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "minutes", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n      <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("avatarSrc")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" height=\"20\" width=\"20\">\n      ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    </a>\n  ");
  return buffer;
  }

  data.buffer.push("<h2>\n  <i class=\"fa fa-tasks\"></i>\n  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</h2>\n\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || (depth0 && depth0.linkTo)),stack1 ? stack1.call(depth0, "recipes", options) : helperMissing.call(depth0, "linkTo", "recipes", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n<h3>\n  Use this recipe to create a task board\n  <select id=\"frequencySelector\" class=\"form-control\" ");
  hashContexts = {'value': depth0};
  hashTypes = {'value': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'value': ("frequency")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" style=\"display: inline; width: 125px;\">\n    <option>Daily</option>\n    <option>Weekly</option>\n    <option>Monthly</option>\n    <option>Quarterly</option>\n    <option>Annually</option>\n    <option>As needed</option>\n  </select>\n  on day\n  <input type=\"text\" class=\"form-control\" id=\"onText\" value='1' style=\"display: inline; width: 125px;\">\n  of the period.\n</h3>\n\n<!-- le tasks -->\n<h3><i class=\"fa fa-tasks\"></i> Tasks to queue each time</h3>\n<div class=\"list-group\">\n  ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "tasks", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n</div>\n<button class='btn btn-block btn-primary'>\n  <i class=\"fa fa-plus\"></i> Add a task\n</button>");
  return buffer;
  
});

Ember.TEMPLATES["task"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<!-- le task modal -->\n<div class=\"modal fade\" id=\"itemDetail\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">#3: Cocoon 'em in gaffer tape</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"panel-group\" id=\"accordion\">\n          <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n              <h4 class=\"panel-title\">\n                <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\">\n                  Description\n                </a>\n              </h4>\n            </div>\n            <div id=\"collapseOne\" class=\"panel-collapse collapse in\">\n              <div class=\"panel-body\">\n                <div contenteditable>\n                  <p>\n                    i am a big believer of starting with the html/css for features before\n                    plugging in the functionality. that way, you can agree to the interface\n                    before worrying about functionality.\n                  </p>\n                  <p>\n                    include:\n                  </p>\n                  <ul>\n                    <li>basic app layout</li>\n                    <li>multiple boards with add/remove/rename</li>\n                    <li>multiple columns for lists with add/remove/rename</li>\n                    <li>collapsed items in lists</li>\n                    <li>item detail modal</li>\n                  </ul>\n                  <p>more as we flesh out the first milestone features</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"panel panel-default\">\n            <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\">\n              <div class=\"panel-heading\">\n                <h4 class=\"panel-title\">\n                  Details\n                </h4>\n              </div>\n            </a>\n            <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\n              <div class=\"panel-body\">\n                <form class=\"form-horizontal\" role=\"form\">\n                  <div class=\"form-group\">\n                    <label for=\"selectAssignee\" class=\"col-xs-2 control-label\">Assignee</label>\n                    <div class=\"col-xs-10\">\n                      <select id=\"selectAssignee\" class=\"chosen-select\">\n                        <option>Adam Neary</option>\n                        <option>Sinisa</option>\n                        <option>Aleksey</option>\n                        <option>Daniel</option>\n                      </select>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"selectMilestone\" class=\"col-xs-2 control-label\">Milestone</label>\n                    <div class=\"col-xs-10\">\n                      <select id=\"selectMilestone\" class=\"chosen-select\">\n                        <option>Milestone 1</option>\n                        <option>Milestone 2</option>\n                        <option>Milestone 3</option>\n                      </select>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"multiLabels\" class=\"col-xs-2 control-label\">Labels</label>\n                    <div class=\"col-xs-10\">\n                      <select id=\"selectMilestone\" class=\"chosen-select\" multiple width=\"300\">\n                        <option>Label 1</option>\n                        <option>Label 2</option>\n                        <option>Label 3</option>\n                      </select>\n                    </div>\n                  </div>\n                </form>\n              </div>\n            </div>\n          </div>\n          <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n              <h4 class=\"panel-title\">\n                <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\">\n                  Comments\n                </a>\n              </h4>\n            </div>\n            <div id=\"collapseThree\" class=\"panel-collapse collapse\">\n              <div class=\"panel-body\">\n                <textarea class=\"form-control\" rows=\"3\"></textarea>\n                <div class=\"media\">\n                  <a class=\"pull-left\" href=\"#\">\n                    <img class=\"media-object\" src=\"https://2.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&amp;s=40\">\n                  </a>\n                  <div class=\"media-body\">\n                    <h4 class=\"media-heading\">adamneary</h4>\n                   <p>\n                     <span class=\"label label-primary\">@kusic</span>\n                     Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n                  </div>\n                </div>\n                <div class=\"media\">\n                  <a class=\"pull-left\" href=\"#\">\n                    <img class=\"media-object\" src=\"https://1.gravatar.com/avatar/e55c09439e68fbaaf1231c9e725a8bdc?d=https%3A%2F%2Fidenticons.github.com%2F6789e600d8abaf5d52d427355d513fd2.png&s=40\">\n                  </a>\n                  <div class=\"media-body\">\n                    <h4 class=\"media-heading\">kusic</h4>\n                    <p>\n                      <span class=\"label label-primary\">@adamneary</span>\n                      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div><!-- end .modal-body -->\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-success\">Save changes</button>\n        <button type=\"button\" class=\"btn btn-danger\">Close</button>\n      </div><!-- end .modal-footer -->\n    </div><!-- end .modal-content -->\n  </div><!-- end .modal-dialog -->\n</div><!-- end .modal -->");
  
});