Ember.TEMPLATES["access"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"container\">\n  <div class=\"row\">\n    <div class = \"col-xs-10\">\n      <h2><i class=\"fa fa-lock\"></i> Access (Connected Bookkeepers)</h2>\n      <p class=\"lead\">Team members do not have access to clients until added!</p>\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th>Team member</th>\n            <th>Role</th>\n            <th>Last logged in</th>\n            <th></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>Don Draper</td>\n            <td class='text-success'>Owner</td>\n            <td>Oct 1, 2013</td>\n            <td><button class='btn btn-danger btn-xs'><i class=\"fa fa-times-circle-o\"> Remove</button></td>\n          </tr>\n          <tr>\n            <td>Roger Sterling</td>\n            <td>Manager</td>\n            <td>Nov 10, 2013</td>\n            <td><button class='btn btn-danger btn-xs'><i class=\"fa fa-times-circle-o\"> Remove</button></td>\n          </tr>\n          <tr>\n            <td>Peggy Olson</td>\n            <td>Associate</td>\n            <td>Sep 4, 2013</td>\n            <td><button class='btn btn-danger btn-xs'><i class=\"fa fa-times-circle-o\"> Remove</button></td>\n          </tr>\n        </tbody>\n      </table>\n      <a data-toggle=\"modal\" href=\"#addBoard\" class='btn btn-primary'>\n        <i class=\"fa fa-plus\"></i> Invite a new team member\n      </a>\n    </div>\n  </div>\n</div><!-- end .container -->");
  
});

Ember.TEMPLATES["account"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"container\">\n  <div class=\"row\">\n    <div class = \"col-xs-10\">\n      <h2><i class=\"fa fa-tasks\"></i> Account</h2>\n      <div class=\"media\">\n        <a class=\"pull-left\" href=\"#\">\n          <img class=\"media-object\" src=\"images/jason.png\" alt=\"Jason Hill\">\n        </a>\n        <div class=\"media-body\">\n          <h4 class=\"media-heading\">Jason Hill</h4>\n          Jason is a badass for this reason and that reason.\n        </div>\n      </div>\n      <h4>Email settings</h4>\n      <form class=\"form-horizontal\" role=\"form\">\n        <div class=\"form-group\">\n          <label for=\"inputEmail3\" class=\"col-sm-1 control-label\">Email</label>\n          <div class=\"col-sm-4\">\n            <input type=\"email\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Email\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-sm-offset-1 col-sm-10\">\n            <div class=\"checkbox\">\n              <label>\n                <input type=\"checkbox\"> Email me when a board is completed.\n              </label>\n            </div>\n            <div class=\"checkbox\">\n              <label>\n                <input type=\"checkbox\"> Email me when someone references me in a comment.\n              </label>\n            </div>\n            <div class=\"checkbox\">\n              <label>\n                <input type=\"checkbox\"> Email me when someone comments on a task assigned to me.\n              </label>\n            </div>\n          </div>\n        </div>\n      </form>\n\n      <h2><i class=\"fa fa-tasks\"></i> Your company</h2>\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th>User</th>\n            <th>Last logged in</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>Don Draper</td>\n            <td>Oct 1, 2013</td>\n          </tr>\n          <tr>\n            <td>Roger Sterling</td>\n            <td>Sep 4, 2013</td>\n          </tr>\n          <tr>\n            <td>Peggy Olson</td>\n            <td><button class=\"btn btn-sm btn-default\">Invite now</button></td>\n          </tr>\n        </tbody>\n      </table>\n      <div class=\"text-right\">\n        <button class='btn btn-default btn-sm'>Update credit card</button><br />\n        <small>This account is billed to: <strong>Amex 1003</strong></small>\n      </div>\n      <div class=\"text-left\">\n        <a href=\"#\" class='text-danger'>Close this account…</a>\n      </div>\n    </div>\n  </div>\n</div><!-- end .container -->");
  
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
  data.buffer.push("\n</div>\n\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || (depth0 && depth0.partial)),stack1 ? stack1.call(depth0, "partials/footer", options) : helperMissing.call(depth0, "partial", "partials/footer", options))));
  return buffer;
  
});

Ember.TEMPLATES["boards/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n            ");
  hashContexts = {'board': depth0};
  hashTypes = {'board': "ID"};
  options = {hash:{
    'board': ("controller")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['board-row'] || (depth0 && depth0['board-row'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "board-row", options))));
  data.buffer.push("\n          ");
  return buffer;
  }

  data.buffer.push("<div class=\"container\">\n  <div class=\"row\">\n    <div class = \"col-lg-8\">\n      <h2><i class=\"fa fa-tasks\"></i> Your task boards</h2>\n      <p class=\"lead\">Task boards help you manage sets of tasks</p>\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th>Board</th>\n            <th>Recipe</th>\n            <th>Status</th>\n            <th></th>\n          </tr>\n        </thead>\n        <tbody>\n          ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </tbody>\n      </table>\n      <a data-toggle=\"modal\" href=\"#addBoard\" class='btn btn-primary'>\n        <i class=\"fa fa-plus\"></i> Add a new board\n      </a>\n    </div>\n  </div>\n</div><!-- end .container -->");
  return buffer;
  
});

Ember.TEMPLATES["boards/show"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n          ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isEditingName", {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("\n            <input class='editName'>\n          ");
  }

function program4(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n            <a data-toggle=\"modal\" href=\"#itemDetail\" class=\"list-group-item\">\n              <span class=\"badge\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "minutes", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n              <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("avatarSrc")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" height=\"20\" width=\"20\">\n              <span ");
  hashContexts = {'on': depth0};
  hashTypes = {'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editTaskName", {hash:{
    'on': ("doubleClick")
  },contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n            </a>\n          ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n        <a data-toggle=\"modal\" href=\"#itemDetail\" class=\"list-group-item\">\n          <span class=\"badge\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "minutes", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n          <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("avatarSrc")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" height=\"20\" width=\"20\">\n          ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        </a>\n      ");
  return buffer;
  }

  data.buffer.push("<div class=\"container\">\n  <h2>\n    <i class=\"fa fa-tasks\"></i>\n    October 2013\n    <small><a href='../recipes/view.html'>Monthly bookkeeping</a></small>\n  </h2>\n  <a href='index.html'> <i class=\"fa fa-arrow-circle-o-left\"></i> Back to task board list</a>\n  <!-- le tasks -->\n  <div class=\"row\">\n\n    <!-- next up -->\n    <div class=\"col-lg-4\">\n      <h3><i class=\"fa fa-tasks\"></i> Next up</h3>\n      <div class=\"list-group\">\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </div>\n\n      ");
  hashContexts = {'class': depth0,'type': depth0,'id': depth0,'value': depth0,'placeholder': depth0,'action': depth0};
  hashTypes = {'class': "STRING",'type': "STRING",'id': "STRING",'value': "ID",'placeholder': "STRING",'action': "STRING"};
  options = {hash:{
    'class': ("form-control"),
    'type': ("text"),
    'id': ("new-task"),
    'value': ("newName"),
    'placeholder': ("What needs to be done?"),
    'action': ("createTask")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || (depth0 && depth0.input)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n\n    </div><!-- end next up -->\n\n    <!-- in progress -->\n    <div class=\"col-lg-4\">\n      <h3><i class=\"fa fa-puzzle-piece\"></i> In progress</h3>\n      <div class=\"list-group\">\n      ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      </div>\n    </div><!-- end in progress -->\n\n    <!-- complete -->\n    <div class=\"col-lg-4\">\n      <h3><i class=\"fa fa-check\"></i> Complete</h3>\n      <div class=\"list-group\">\n      ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      </div>\n    </div><!-- end complete -->\n\n  </div><!-- end le tasks -->\n\n  <!-- le task modal -->\n  <div class=\"modal fade\" id=\"itemDetail\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n          <h4 class=\"modal-title\">#3: Cocoon 'em in gaffer tape</h4>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"panel-group\" id=\"accordion\">\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">\n                <h4 class=\"panel-title\">\n                  <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\">\n                    Description\n                  </a>\n                </h4>\n              </div>\n              <div id=\"collapseOne\" class=\"panel-collapse collapse in\">\n                <div class=\"panel-body\">\n                  <div contenteditable>\n                    <p>\n                      i am a big believer of starting with the html/css for features before\n                      plugging in the functionality. that way, you can agree to the interface\n                      before worrying about functionality.\n                    </p>\n                    <p>\n                      include:\n                    </p>\n                    <ul>\n                      <li>basic app layout</li>\n                      <li>multiple boards with add/remove/rename</li>\n                      <li>multiple columns for lists with add/remove/rename</li>\n                      <li>collapsed items in lists</li>\n                      <li>item detail modal</li>\n                    </ul>\n                    <p>more as we flesh out the first milestone features</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"panel panel-default\">\n              <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\">\n                <div class=\"panel-heading\">\n                  <h4 class=\"panel-title\">\n                    Details\n                  </h4>\n                </div>\n              </a>\n              <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\n                <div class=\"panel-body\">\n                  <form class=\"form-horizontal\" role=\"form\">\n                    <div class=\"form-group\">\n                      <label for=\"selectAssignee\" class=\"col-lg-2 control-label\">Assignee</label>\n                      <div class=\"col-lg-10\">\n                        <select id=\"selectAssignee\" class=\"chosen-select\">\n                          <option>Adam Neary</option>\n                          <option>Sinisa</option>\n                          <option>Aleksey</option>\n                          <option>Daniel</option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"selectMilestone\" class=\"col-lg-2 control-label\">Milestone</label>\n                      <div class=\"col-lg-10\">\n                        <select id=\"selectMilestone\" class=\"chosen-select\">\n                          <option>Milestone 1</option>\n                          <option>Milestone 2</option>\n                          <option>Milestone 3</option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"multiLabels\" class=\"col-lg-2 control-label\">Labels</label>\n                      <div class=\"col-lg-10\">\n                        <select id=\"selectMilestone\" class=\"chosen-select\" multiple width=\"300\">\n                          <option>Label 1</option>\n                          <option>Label 2</option>\n                          <option>Label 3</option>\n                        </select>\n                      </div>\n                    </div>\n                  </form>\n                </div>\n              </div>\n            </div>\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">\n                <h4 class=\"panel-title\">\n                  <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\">\n                    Comments\n                  </a>\n                </h4>\n              </div>\n              <div id=\"collapseThree\" class=\"panel-collapse collapse\">\n                <div class=\"panel-body\">\n                  <textarea class=\"form-control\" rows=\"3\"></textarea>\n                  <div class=\"media\">\n                    <a class=\"pull-left\" href=\"#\">\n                      <img class=\"media-object\" src=\"https://2.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&amp;s=40\">\n                    </a>\n                    <div class=\"media-body\">\n                      <h4 class=\"media-heading\">adamneary</h4>\n                     <p>\n                       <span class=\"label label-primary\">@kusic</span>\n                       Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n                    </div>\n                  </div>\n                  <div class=\"media\">\n                    <a class=\"pull-left\" href=\"#\">\n                      <img class=\"media-object\" src=\"https://1.gravatar.com/avatar/e55c09439e68fbaaf1231c9e725a8bdc?d=https%3A%2F%2Fidenticons.github.com%2F6789e600d8abaf5d52d427355d513fd2.png&s=40\">\n                    </a>\n                    <div class=\"media-body\">\n                      <h4 class=\"media-heading\">kusic</h4>\n                      <p>\n                        <span class=\"label label-primary\">@adamneary</span>\n                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div><!-- end .modal-body -->\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-success\">Save changes</button>\n          <button type=\"button\" class=\"btn btn-danger\">Close</button>\n        </div><!-- end .modal-footer -->\n      </div><!-- end .modal-content -->\n    </div><!-- end .modal-dialog -->\n  </div><!-- end .modal -->\n\n  <!-- le notification modal -->\n  <div class=\"modal fade\" id=\"notifications\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n          <h4 class=\"modal-title\">Notifications</h4>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"media\">\n            <a class=\"pull-left\" href=\"#\">\n              <img class=\"media-object\" src=\"https://2.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&amp;s=40\">\n            </a>\n            <div class=\"media-body\">\n              <h4 class=\"media-heading\"><span class=\"label label-primary\">adamneary</span> commented on a tasks\n                <a data-toggle=\"modal\" href=\"#itemDetail\">#1 Jack-in-the-box lorem</a></h4>\n              <hr>\n             <p>\n               <span class=\"label label-primary\">@kusic</span>\n               Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n                <span title=\"11/8/2013 7:30:07 PM\">Nov 8 at 7:30 pm</span>\n            </div>\n          </div>\n          <div class=\"media\">\n            <a class=\"pull-left\" href=\"#\">\n              <img class=\"media-object\" src=\"https://1.gravatar.com/avatar/e55c09439e68fbaaf1231c9e725a8bdc?d=https%3A%2F%2Fidenticons.github.com%2F6789e600d8abaf5d52d427355d513fd2.png&s=40\">\n            </a>\n            <div class=\"media-body\">\n              <h4 class=\"media-heading\"><span class=\"label label-primary\">@kusic</span> commented on a tasks\n                <a data-toggle=\"modal\" href=\"#itemDetail\">#1 Jack-in-the-box lorem</a></h4>\n              <hr>\n              <p>\n                <span class=\"label label-primary\">@adamneary</span>\n                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n              <span title=\"11/8/2013 7:32:07 PM\">Nov 8 at 7:32 pm</span>\n            </div>\n        </div><!-- end .modal-body -->\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-danger\">Close</button>\n        </div><!-- end .modal-footer -->\n      </div><!-- end .modal-content -->\n    </div><!-- end .modal-dialog -->\n  </div><!-- end .modal -->\n\n</div><!-- end .container -->");
  return buffer;
  
});

Ember.TEMPLATES["client/access"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"container\">\n  <div class=\"row\">\n    <div class = \"col-xs-8\">\n      <h2><i class=\"fa fa-tasks\"></i> Access </h2>\n      <div class=\"media\">\n        <a class=\"pull-left\" href=\"#\">\n          <img class=\"media-object\" src=\"images/jason.png\" alt=\"Jason Hill\">\n        </a>\n        <div class=\"media-body\">\n          <h4 class=\"media-heading\">Jason Hill</h4>\n          Jason is a badass for this reason and that reason.\n        </div>\n      </div>\n      <h4>Email settings</h4>\n      <form class=\"form-horizontal\" role=\"form\">\n        <div class=\"form-group\">\n          <label for=\"inputEmail3\" class=\"col-sm-1 control-label\">Email</label>\n          <div class=\"col-sm-4\">\n            <input type=\"email\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Email\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-sm-offset-1 col-sm-10\">\n            <div class=\"checkbox\">\n              <label>\n                <input type=\"checkbox\"> Email me when a board is completed.\n              </label>\n            </div>\n            <div class=\"checkbox\">\n              <label>\n                <input type=\"checkbox\"> Email me when someone references me in a comment.\n              </label>\n            </div>\n            <div class=\"checkbox\">\n              <label>\n                <input type=\"checkbox\"> Email me when someone comments on a task assigned to me.\n              </label>\n            </div>\n          </div>\n        </div>\n      </form>\n\n      <h2><i class=\"fa fa-tasks\"></i> Your company</h2>\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th>User</th>\n            <th>Last logged in</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>Don Draper</td>\n            <td>Oct 1, 2013</td>\n          </tr>\n          <tr>\n            <td>Roger Sterling</td>\n            <td>Sep 4, 2013</td>\n          </tr>\n          <tr>\n            <td>Peggy Olson</td>\n            <td><button class=\"btn btn-sm btn-default\">Invite now</button></td>\n          </tr>\n        </tbody>\n      </table>\n      <div class=\"text-right\">\n        <button class='btn btn-default btn-sm'>Update credit card</button><br />\n        <small>This account is billed to: <strong>Amex 1003</strong></small>\n      </div>\n      <div class=\"text-left\">\n        <a href=\"#\" class='text-danger'>Close this account…</a>\n      </div>\n    </div>\n  </div>\n</div><!-- end .container -->");
  
});

Ember.TEMPLATES["client/recipe/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"container\">\n  <h2>\n    <i class=\"fa fa-tasks\"></i>\n    Monthly bookkeeping\n  </h2>\n  <a href='index.html'> <i class=\"fa fa-arrow-circle-o-left\"></i> Back to recipe list</a>\n\n  <h3>\n    Use this recipe to create a task board\n    <select id=\"frequencySelector\" class=\"form-control\" value='Daily' style=\"display: inline; width: 125px;\">\n      <option>Daily</option>\n      <option>Weekly</option>\n      <option>Monthly</option>\n      <option>Quarterly</option>\n      <option>Annually</option>\n      <option>As needed</option>\n    </select>\n    on day\n    <input type=\"text\" class=\"form-control\" id=\"onText\" value='1' style=\"display: inline; width: 125px;\">\n    of the period.\n  </h3>\n\n  <!-- le tasks -->\n  <div class=\"row\">\n    <!-- next up -->\n    <div class=\"col-xs-4\">\n      <h3><i class=\"fa fa-tasks\"></i> Tasks to queue each time</h3>\n      <div class=\"list-group\">\n        <a data-toggle=\"modal\" href=\"#itemDetail\" class=\"list-group-item\">\n          <span class=\"badge\">8</span>\n          <img height=\"20\" src=\"https://2.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&amp;s=140\" width=\"20\">\n          #1: Jack-in-the-box lorem\n        </a>\n        <a data-toggle=\"modal\" href=\"#itemDetail\" class=\"list-group-item\">\n          <span class=\"badge\">3</span>\n          <img height=\"20\" src=\"https://1.gravatar.com/avatar/e55c09439e68fbaaf1231c9e725a8bdc?d=https%3A%2F%2Fidenticons.github.com%2F6789e600d8abaf5d52d427355d513fd2.png&s=140\" width=\"20\">\n          #2: Look nasty and stuff\n        </a>\n        <a data-toggle=\"modal\" href=\"#itemDetail\" class=\"list-group-item\">\n          <span class=\"badge\">8</span>\n          <img height=\"20\" src=\"https://1.gravatar.com/avatar/e55c09439e68fbaaf1231c9e725a8bdc?d=https%3A%2F%2Fidenticons.github.com%2F6789e600d8abaf5d52d427355d513fd2.png&s=140\" width=\"20\">\n          #3: Cocoon 'em in gaffer tape\n        </a>\n        <a data-toggle=\"modal\" href=\"#itemDetail\" class=\"list-group-item\">\n          <span class=\"badge\">1</span>\n          <img height=\"20\" src=\"https://2.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&amp;s=140\" width=\"20\">\n          #4: Nick the van\n        </a>\n        <a data-toggle=\"modal\" href=\"#itemDetail\" class=\"list-group-item\">\n          <span class=\"badge\">2</span>\n          <img height=\"20\" src=\"https://1.gravatar.com/avatar/e55c09439e68fbaaf1231c9e725a8bdc?d=https%3A%2F%2Fidenticons.github.com%2F6789e600d8abaf5d52d427355d513fd2.png&s=140\" width=\"20\">\n          #5: Swap the gear\n        </a>\n        <a data-toggle=\"modal\" href=\"#itemDetail\" class=\"list-group-item\">\n          <span class=\"badge\">5</span>\n          <img height=\"20\" src=\"https://2.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&amp;s=140\" width=\"20\">\n          #6: Bring it all back here\n        </a>\n      </div>\n      <button class='btn btn-block btn-primary'>\n        <i class=\"fa fa-plus\"></i> Add a task\n      </button>\n    </div><!-- end next up -->\n  </div><!-- end le tasks -->\n\n  <!-- le task modal -->\n  <div class=\"modal fade\" id=\"itemDetail\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n          <h4 class=\"modal-title\">#3: Cocoon 'em in gaffer tape</h4>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"panel-group\" id=\"accordion\">\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">\n                <h4 class=\"panel-title\">\n                  <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\">\n                    Description\n                  </a>\n                </h4>\n              </div>\n              <div id=\"collapseOne\" class=\"panel-collapse collapse in\">\n                <div class=\"panel-body\">\n                  <div contenteditable>\n                    <p>\n                      i am a big believer of starting with the html/css for features before\n                      plugging in the functionality. that way, you can agree to the interface\n                      before worrying about functionality.\n                    </p>\n                    <p>\n                      include:\n                    </p>\n                    <ul>\n                      <li>basic app layout</li>\n                      <li>multiple boards with add/remove/rename</li>\n                      <li>multiple columns for lists with add/remove/rename</li>\n                      <li>collapsed items in lists</li>\n                      <li>item detail modal</li>\n                    </ul>\n                    <p>more as we flesh out the first milestone features</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"panel panel-default\">\n              <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\">\n                <div class=\"panel-heading\">\n                  <h4 class=\"panel-title\">\n                    Details\n                  </h4>\n                </div>\n              </a>\n              <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\n                <div class=\"panel-body\">\n                  <form class=\"form-horizontal\" role=\"form\">\n                    <div class=\"form-group\">\n                      <label for=\"selectAssignee\" class=\"col-xs-2 control-label\">Assignee</label>\n                      <div class=\"col-xs-10\">\n                        <select id=\"selectAssignee\" class=\"chosen-select\">\n                          <option>Adam Neary</option>\n                          <option>Sinisa</option>\n                          <option>Aleksey</option>\n                          <option>Daniel</option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"selectMilestone\" class=\"col-xs-2 control-label\">Milestone</label>\n                      <div class=\"col-xs-10\">\n                        <select id=\"selectMilestone\" class=\"chosen-select\">\n                          <option>Milestone 1</option>\n                          <option>Milestone 2</option>\n                          <option>Milestone 3</option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"multiLabels\" class=\"col-xs-2 control-label\">Labels</label>\n                      <div class=\"col-xs-10\">\n                        <select id=\"selectMilestone\" class=\"chosen-select\" multiple width=\"300\">\n                          <option>Label 1</option>\n                          <option>Label 2</option>\n                          <option>Label 3</option>\n                        </select>\n                      </div>\n                    </div>\n                  </form>\n                </div>\n              </div>\n            </div>\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">\n                <h4 class=\"panel-title\">\n                  <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\">\n                    Comments\n                  </a>\n                </h4>\n              </div>\n              <div id=\"collapseThree\" class=\"panel-collapse collapse\">\n                <div class=\"panel-body\">\n                  <textarea class=\"form-control\" rows=\"3\"></textarea>\n                  <div class=\"media\">\n                    <a class=\"pull-left\" href=\"#\">\n                      <img class=\"media-object\" src=\"https://2.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&amp;s=40\">\n                    </a>\n                    <div class=\"media-body\">\n                      <h4 class=\"media-heading\">adamneary</h4>\n                     <p>\n                       <span class=\"label label-primary\">@kusic</span>\n                       Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n                    </div>\n                  </div>\n                  <div class=\"media\">\n                    <a class=\"pull-left\" href=\"#\">\n                      <img class=\"media-object\" src=\"https://1.gravatar.com/avatar/e55c09439e68fbaaf1231c9e725a8bdc?d=https%3A%2F%2Fidenticons.github.com%2F6789e600d8abaf5d52d427355d513fd2.png&s=40\">\n                    </a>\n                    <div class=\"media-body\">\n                      <h4 class=\"media-heading\">kusic</h4>\n                      <p>\n                        <span class=\"label label-primary\">@adamneary</span>\n                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div><!-- end .modal-body -->\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-success\">Save changes</button>\n          <button type=\"button\" class=\"btn btn-danger\">Close</button>\n        </div><!-- end .modal-footer -->\n      </div><!-- end .modal-content -->\n    </div><!-- end .modal-dialog -->\n  </div><!-- end .modal -->\n\n  <!-- le notification modal -->\n  <div class=\"modal fade\" id=\"notifications\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n          <h4 class=\"modal-title\">Notifications</h4>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"media\">\n            <a class=\"pull-left\" href=\"#\">\n              <img class=\"media-object\" src=\"https://2.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&amp;s=40\">\n            </a>\n            <div class=\"media-body\">\n              <h4 class=\"media-heading\"><span class=\"label label-primary\">adamneary</span> commented on a tasks\n                <a data-toggle=\"modal\" href=\"#itemDetail\">#1 Jack-in-the-box lorem</a></h4>\n              <hr>\n             <p>\n               <span class=\"label label-primary\">@kusic</span>\n               Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n                <span title=\"11/8/2013 7:30:07 PM\">Nov 8 at 7:30 pm</span>\n            </div>\n          </div>\n          <div class=\"media\">\n            <a class=\"pull-left\" href=\"#\">\n              <img class=\"media-object\" src=\"https://1.gravatar.com/avatar/e55c09439e68fbaaf1231c9e725a8bdc?d=https%3A%2F%2Fidenticons.github.com%2F6789e600d8abaf5d52d427355d513fd2.png&s=40\">\n            </a>\n            <div class=\"media-body\">\n              <h4 class=\"media-heading\"><span class=\"label label-primary\">@kusic</span> commented on a tasks\n                <a data-toggle=\"modal\" href=\"#itemDetail\">#1 Jack-in-the-box lorem</a></h4>\n              <hr>\n              <p>\n                <span class=\"label label-primary\">@adamneary</span>\n                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n              <span title=\"11/8/2013 7:32:07 PM\">Nov 8 at 7:32 pm</span>\n            </div>\n        </div><!-- end .modal-body -->\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-danger\">Close</button>\n        </div><!-- end .modal-footer -->\n      </div><!-- end .modal-content -->\n    </div><!-- end .modal-dialog -->\n  </div><!-- end .modal -->\n\n</div><!-- end .container -->");
  
});

Ember.TEMPLATES["client/recipes"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n          <i class=\"fa fa-cutlery\"></i>\n          Recipes\n        ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n          <i class=\"fa fa-fighter-jet\"></i>\n          Resources\n        ");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n          <i class=\"fa fa-lock\"></i>\n          Access\n        ");
  }

  data.buffer.push("<div class=\"container\">\n  <h2>\n    Sterling Cooper\n  </h2>\n  <a href='index.html'> <i class=\"fa fa-arrow-circle-o-left\"></i> Back to client list</a>\n\n    <ul class=\"nav nav-tabs\">\n      <li class=\"active\">\n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "clients", options) : helperMissing.call(depth0, "link-to", "clients", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      </li>\n      <li>\n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "clients", options) : helperMissing.call(depth0, "link-to", "clients", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      </li>\n      <li>\n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "clients", options) : helperMissing.call(depth0, "link-to", "clients", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      </li>\n    </ul>\n\n      <h2>Virtual Office Manager</h2>\n      <p class=\"lead\">A senior bookkeeper and coordinator for your virtual office</p>\n      <table class=\"table\">\n        <tbody>\n          <tr>\n            <td>\n              <div class=\"media\">\n                <a class=\"pull-left\" href=\"#\">\n                  <img class=\"media-object\" src=\"images/jason.png\" alt=\"Jason Hill\">\n                </a>\n                <div class=\"media-body\">\n                  <h4 class=\"media-heading\">Jason Hill</h4>\n                  Jason is a badass for this reason and that reason.\n                </div>\n              </div>\n            </td>\n            <td></td>\n          </tr>\n          <tr>\n            <td>Base bookkeeping package</td>\n            <td class='text-right'>$200.00</td>\n          </tr>\n          <tr>\n            <td>Follow up with accounts receivable (phone &amp; email)</td>\n            <td class='text-right'>$250.00</td>\n          </tr>\n        </tbody>\n      </table>\n      <i class=\"fa fa-plus-circle\"></i> <a href='#'> Get bookkeeping add-ons</a>\n      <p> </p>\n\n      <h2>Activecell Doers</h2>\n      <p class=\"lead\">Our pool of talented virtual assistants</p>\n      <table class=\"table\">\n        <tbody>\n          <tr>\n            <td>[INSERT SLIDER HERE]</td>\n            <td>30 hours</td>\n            <td class='text-right'>$150.00</td>\n          </tr>\n        </tbody>\n      </table>\n\n      <h2>Specialists</h2>\n      <p class=\"lead\">Complement your generalist work force with experts</p>\n      <table class=\"table\">\n        <tbody>\n          <tr>\n            <td>Virtual CFO: Quarterly</td>\n            <td><img src=\"https://2.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&amp;s=30\"></td>\n            <td>Adam Neary</td>\n            <td><a href=''>adam@activecell.com</a></td>\n            <td><a href=''>617-314-0825</td>\n            <td class='text-right'>$85.00</td>\n          </tr>\n          <tr>\n            <td>Accountant</td>\n            <td><img src=\"https://2.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&amp;s=30\"></td>\n            <td><button class='btn btn-default btn-sm'><i class=\"fa fa-plus-circle\"></i> Set up now</button></td>\n            <td colspan='3'>\n            </td>\n          </tr>\n          <tr>\n            <td>Lead Investor</td>\n            <td><img src=\"https://2.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&amp;s=30\"></td>\n            <td>David Mars</td>\n            <td><a href=''>adam@activecell.com</a></td>\n            <td><a href=''>617-314-0825</td>\n            <td class='text-right'>--</td>\n          </tr>\n        </tbody>\n      </table>\n      <i class=\"fa fa-plus-circle\"></i> <a href=''> Invite another specialist</a>\n\n      <h2>Your tools</h2>\n      <p class=\"lead\">Maximize your time by putting smart tools to work.</p>\n      <table class=\"table\">\n        <tbody>\n          <tr>\n            <td>Accounting</td>\n            <td><img src=\"https://2.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&amp;s=30\"></td>\n            <td>Quickbooks Online</td>\n            <td><a href=''>Take me there</a></td>\n            <td class='text-right'>Included</td>\n          </tr>\n          <tr>\n            <td>Accounts receivable</td>\n            <td><img src=\"https://2.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&amp;s=30\"></td>\n            <td>Bill.com</td>\n            <td><a href=''>Take me there</a></td>\n            <td class='text-right'>Included</td>\n          </tr>\n          <tr>\n            <td>Accounts payable</td>\n            <td><img src=\"https://2.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&amp;s=30\"></td>\n            <td>Bill.com</td>\n            <td><a href=''>Take me there</a></td>\n            <td class='text-right'>Included</td>\n          </tr>\n          <tr>\n            <td>Project management</td>\n            <td><img src=\"https://2.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&amp;s=30\"></td>\n            <td>Basecamp</td>\n            <td><a href=''>Take me there</a></td>\n            <td class='text-right'>Included</td>\n          </tr>\n          <tr>\n            <td>Payroll</td>\n            <td><img src=\"https://2.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&amp;s=30\"></td>\n            <td>Quickbooks Payroll</td>\n            <td><a href=''>Take me there</a></td>\n            <td class='text-right'>$39.00</td>\n          </tr>\n          <tr>\n            <td>File management</td>\n            <td></td>\n            <td><button class='btn btn-default btn-sm'><i class=\"fa fa-plus-circle\"></i> Set up now</button></td>\n            <td></td>\n            <td></td>\n          </tr>\n          <tr>\n            <td>Document scanning</td>\n            <td><img src=\"https://2.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&amp;s=30\"></td>\n            <td>Shoeboxed</td>\n            <td><a href=''>Take me there</a></td>\n            <td class='text-right'>Free</td>\n          </tr>\n        </tbody>\n      </table>\n      <i class=\"fa fa-plus-circle\"></i> <a href=''> Get add-ons</a>\n      <div class=\"text-right\">\n        <button class='btn btn-default btn-sm'>Apply changes</button><br />\n        <small><strong>Est. monthly cost</small></strong><br />\n        <p class='lead'>$638.99</p>\n      </div>\n      <div class=\"text-right\">\n        <small><strong>Less 20% <a href=''>discount</a></small></strong><br />\n        <p class='lead'>($127.80)</p>\n      </div>\n      <div class=\"text-right\">\n        <small><strong>Final monthly cost</small></strong><br />\n        <p class='lead'>$511.19</p>\n      </div>\n    </div>\n</div><!-- end .container -->");
  return buffer;
  
});

Ember.TEMPLATES["client/resources"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"container\">\n  <div class=\"row\">\n    <div class = \"col-xs-12\">\n      <div class=\"page-header\">\n        <h1>\n          <i class=\"fa fa-fighter-jet\"></i>\n          Assemble a killer team and smart tools to get things done.\n        </h1>\n      </div>\n    </div>\n    <div class = \"col-xs-8\">\n\n      <h2>Virtual Office Manager</h2>\n      <p class=\"lead\">A senior bookkeeper and coordinator for your virtual office</p>\n      <table class=\"table\">\n        <tbody>\n          <tr>\n            <td>\n              <div class=\"media\">\n                <a class=\"pull-left\" href=\"#\">\n                  <img class=\"media-object\" src=\"images/jason.png\" alt=\"Jason Hill\">\n                </a>\n                <div class=\"media-body\">\n                  <h4 class=\"media-heading\">Jason Hill</h4>\n                  Jason is a badass for this reason and that reason.\n                </div>\n              </div>\n            </td>\n            <td></td>\n          </tr>\n          <tr>\n            <td>Base bookkeeping package</td>\n            <td class='text-right'>$200.00</td>\n          </tr>\n          <tr>\n            <td>Follow up with accounts receivable (phone &amp; email)</td>\n            <td class='text-right'>$250.00</td>\n          </tr>\n        </tbody>\n      </table>\n      <i class=\"fa fa-plus-circle\"></i> <a href='#'> Get bookkeeping add-ons</a>\n      <p> </p>\n\n      <h2>Activecell Doers</h2>\n      <p class=\"lead\">Our pool of talented virtual assistants</p>\n      <table class=\"table\">\n        <tbody>\n          <tr>\n            <td>[INSERT SLIDER HERE]</td>\n            <td>30 hours</td>\n            <td class='text-right'>$150.00</td>\n          </tr>\n        </tbody>\n      </table>\n\n      <h2>Specialists</h2>\n      <p class=\"lead\">Complement your generalist work force with experts</p>\n      <table class=\"table\">\n        <tbody>\n          <tr>\n            <td>Virtual CFO: Quarterly</td>\n            <td><img src=\"https://2.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&amp;s=30\"></td>\n            <td>Adam Neary</td>\n            <td><a href=''>adam@activecell.com</a></td>\n            <td><a href=''>617-314-0825</td>\n            <td class='text-right'>$85.00</td>\n          </tr>\n          <tr>\n            <td>Accountant</td>\n            <td><img src=\"https://2.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&amp;s=30\"></td>\n            <td><button class='btn btn-default btn-sm'><i class=\"fa fa-plus-circle\"></i> Set up now</button></td>\n            <td colspan='3'>\n            </td>\n          </tr>\n          <tr>\n            <td>Lead Investor</td>\n            <td><img src=\"https://2.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&amp;s=30\"></td>\n            <td>David Mars</td>\n            <td><a href=''>adam@activecell.com</a></td>\n            <td><a href=''>617-314-0825</td>\n            <td class='text-right'>--</td>\n          </tr>\n        </tbody>\n      </table>\n      <i class=\"fa fa-plus-circle\"></i> <a href=''> Invite another specialist</a>\n\n      <h2>Your tools</h2>\n      <p class=\"lead\">Maximize your time by putting smart tools to work.</p>\n      <table class=\"table\">\n        <tbody>\n          <tr>\n            <td>Accounting</td>\n            <td><img src=\"https://2.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&amp;s=30\"></td>\n            <td>Quickbooks Online</td>\n            <td><a href=''>Take me there</a></td>\n            <td class='text-right'>Included</td>\n          </tr>\n          <tr>\n            <td>Accounts receivable</td>\n            <td><img src=\"https://2.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&amp;s=30\"></td>\n            <td>Bill.com</td>\n            <td><a href=''>Take me there</a></td>\n            <td class='text-right'>Included</td>\n          </tr>\n          <tr>\n            <td>Accounts payable</td>\n            <td><img src=\"https://2.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&amp;s=30\"></td>\n            <td>Bill.com</td>\n            <td><a href=''>Take me there</a></td>\n            <td class='text-right'>Included</td>\n          </tr>\n          <tr>\n            <td>Project management</td>\n            <td><img src=\"https://2.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&amp;s=30\"></td>\n            <td>Basecamp</td>\n            <td><a href=''>Take me there</a></td>\n            <td class='text-right'>Included</td>\n          </tr>\n          <tr>\n            <td>Payroll</td>\n            <td><img src=\"https://2.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&amp;s=30\"></td>\n            <td>Quickbooks Payroll</td>\n            <td><a href=''>Take me there</a></td>\n            <td class='text-right'>$39.00</td>\n          </tr>\n          <tr>\n            <td>File management</td>\n            <td></td>\n            <td><button class='btn btn-default btn-sm'><i class=\"fa fa-plus-circle\"></i> Set up now</button></td>\n            <td></td>\n            <td></td>\n          </tr>\n          <tr>\n            <td>Document scanning</td>\n            <td><img src=\"https://2.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&amp;s=30\"></td>\n            <td>Shoeboxed</td>\n            <td><a href=''>Take me there</a></td>\n            <td class='text-right'>Free</td>\n          </tr>\n        </tbody>\n      </table>\n      <i class=\"fa fa-plus-circle\"></i> <a href=''> Get add-ons</a>\n      <div class=\"text-right\">\n        <button class='btn btn-default btn-sm'>Apply changes</button><br />\n        <small><strong>Est. monthly cost</small></strong><br />\n        <p class='lead'>$638.99</p>\n      </div>\n      <div class=\"text-right\">\n        <small><strong>Less 20% <a href=''>discount</a></small></strong><br />\n        <p class='lead'>($127.80)</p>\n      </div>\n      <div class=\"text-right\">\n        <small><strong>Final monthly cost</small></strong><br />\n        <p class='lead'>$511.19</p>\n      </div>\n    </div>\n  </div>\n</div><!-- end .container -->");
  
});

Ember.TEMPLATES["clients"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n            ");
  hashContexts = {'client': depth0};
  hashTypes = {'client': "ID"};
  options = {hash:{
    'client': ("controller")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['client-row'] || (depth0 && depth0['client-row'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "client-row", options))));
  data.buffer.push("\n          ");
  return buffer;
  }

  data.buffer.push("<div class=\"container\">\n  <div class=\"row\">\n    <div class = \"col-xs-8\">\n      <h2><i class=\"fa fa-briefcase\"></i> Your Client List</h2>\n      <p class=\"lead\">Manage your clients in one place. We'll take care of the rest.</p>\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th>Client</th>\n            <th></th>\n          </tr>\n        </thead>\n        <tbody>\n          ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </tbody>\n      </table>\n      <a data-toggle=\"modal\" href=\"#addBoard\" class='btn btn-primary'>\n        <i class=\"fa fa-plus\"></i> Add a new client\n      </a>\n    </div>\n  </div>\n</div><!-- end .container -->");
  return buffer;
  
});

Ember.TEMPLATES["components/board-row"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var hashTypes, hashContexts;
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "board.name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  }

  data.buffer.push("<tr>\n  <td>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || (depth0 && depth0.linkTo)),stack1 ? stack1.call(depth0, "boards.show", "board", options) : helperMissing.call(depth0, "linkTo", "boards.show", "board", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</td>\n  <td><a href='../recipes/view.html'>Recipe name</a></td>\n  <td><span class=\"label label-");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "statusClass", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "status", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "statusClass", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span></td>\n  <td><button class='btn btn-danger btn-xs'><i class=\"fa fa-times-circle-o\"> Remove</button></td>\n</tr>");
  return buffer;
  
});

Ember.TEMPLATES["components/client-row"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var hashTypes, hashContexts;
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "client.name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  }

  data.buffer.push("<tr>\n  <td>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "client", "slug", options) : helperMissing.call(depth0, "link-to", "client", "slug", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</td>\n  <td><button class='btn btn-danger btn-xs'><i class=\"fa fa-times-circle-o\"> Archive</button></td>\n</tr>\n");
  return buffer;
  
});

Ember.TEMPLATES["components/recipe-row"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var hashTypes, hashContexts;
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "recipe.name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  }

  data.buffer.push("<tr>\n  <td>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || (depth0 && depth0.linkTo)),stack1 ? stack1.call(depth0, "recipe.index", "recipe", options) : helperMissing.call(depth0, "linkTo", "recipe.index", "recipe", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</td>\n  <td>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "recipe.frequency", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</td>\n  <td>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "recipe.timeframe", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</td>\n  <td><button class='btn btn-danger btn-xs'><i class=\"fa fa-times-circle-o\"> Remove</button></td>\n</tr>");
  return buffer;
  
});

Ember.TEMPLATES["partials/_footer"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<footer id=\"footer\" role=\"contentinfo\">\n  <div class=\"container\">\n    <div class=\"row\">\n       <div class=\"col-xs-3\">\n         <dl>\n          <dt><a href=\"http://www.activecell.com/about.html\">About Activecell</a></dt>\n          <dd><a href=\"http://www.activecell.com/index.html#features\">Features</a></dd>\n          <dd><a href=\"http://www.activecell.com/index.html#pricing\">Pricing</a></dd>\n          <dd><a href=\"http://www.activecell.com/experts.html\">Experts</a></dd>\n          <dd><a href=\"http://www.activecell.com/blog.html\">The Activecell Method</a></dd>\n          <dd><a href=\"http://www.activecell.com/advisors.html\">For advisors</a></dd>\n          <dd><a href=\"http://www.activecell.com/privacy.html\">Privacy policy</a></dd>\n        </dl>\n      </div>\n      <div class=\"col-xs-3\">\n        <dl>\n          <dt><a href=\"http://success.activecell.com\">Support &amp; feedback</a></dt>\n          <dd><a href=\"http://success.activecell.com/knowledgebase\">Knowledge base</a></dd>\n          <dd><a href=\"http://success.activecell.com/forums/110485-product-feedback\">Product feedback</a></dd>\n          <dd><a href=\"http://success.activecell.com\">Contact support</a></dd>\n        </dl>\n      </div>\n      <div class=\"col-xs-6 copyright\">\n        Brought to you by Profitably, Inc.  © 2013. All rights reserved.\n      </div>\n    </div>\n  </div>\n</footer>");
  
});

Ember.TEMPLATES["partials/_navigation"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n                <i class=\"fa fa-briefcase\"></i>\n                Clients\n              ");
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
  
  
  data.buffer.push("\n                    <i class=\"fa fa-user fa-fw\"></i>\n                    Account\n                  ");
  }

  data.buffer.push("<!-- le main nav -->\n<header class=\"navbar navbar-inverse navbar-fixed-top\" role=\"banner\">\n  <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button class=\"navbar-toggle collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\".bs-navbar-collapse\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"http://www.activecell.com\">Activecell Bookkeeper Tools</a>\n        </div>\n        <nav class=\"navbar-collapse bs-navbar-collapse collapse\" role=\"navigation\" style=\"height: 1px;\">\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li>\n              ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "clients", options) : helperMissing.call(depth0, "link-to", "clients", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n            </li>\n            <li><a href='javascript:;'><i class=\"fa fa-bolt\"></i> Add-ons</a></li>\n            <li><a href='javascript:;'><i class=\"fa fa-book\"></i> Docs</a></li>\n            <li class=\"dropdown\">\n              <a id=\"header-avatar\" href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                <img src=\"images/jason.png\" alt=\"Jason Hill\">\n                <b class=\"caret\"></b>\n              </a>\n              <ul class=\"dropdown-menu\">\n                <li class=\"dropdown-header\">Your firm:</li>\n                <li>\n                  ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "recipes", options) : helperMissing.call(depth0, "link-to", "recipes", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                </li>\n                <li>\n                  ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "resources", options) : helperMissing.call(depth0, "link-to", "resources", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                </li>\n                <li>\n                  ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "access", options) : helperMissing.call(depth0, "link-to", "access", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                </li>\n                <li class=\"divider\"></li>\n                <li>\n                  ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
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
  
  
  data.buffer.push("\n    <i class=\"fa fa-arrow-circle-o-left\"></i>\n    Back to recipe list\n  ");
  }

function program3(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n          <a data-toggle=\"modal\" href=\"#itemDetail\" class=\"list-group-item\">\n            <span class=\"badge\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "minutes", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n            <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("avatarSrc")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" height=\"20\" width=\"20\">\n            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n          </a>\n        ");
  return buffer;
  }

  data.buffer.push("<div class=\"container\">\n  <h2>\n    <i class=\"fa fa-tasks\"></i>\n    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n  </h2>\n\n  ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || (depth0 && depth0.linkTo)),stack1 ? stack1.call(depth0, "recipes", options) : helperMissing.call(depth0, "linkTo", "recipes", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n  <h3>\n    Use this recipe to create a task board\n    <select id=\"frequencySelector\" class=\"form-control\" ");
  hashContexts = {'value': depth0};
  hashTypes = {'value': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'value': ("frequency")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" style=\"display: inline; width: 125px;\">\n      <option>Daily</option>\n      <option>Weekly</option>\n      <option>Monthly</option>\n      <option>Quarterly</option>\n      <option>Annually</option>\n      <option>As needed</option>\n    </select>\n    on day\n    <input type=\"text\" class=\"form-control\" id=\"onText\" value='1' style=\"display: inline; width: 125px;\">\n    of the period.\n  </h3>\n\n  <!-- le tasks -->\n  <div class=\"row\">\n    <!-- next up -->\n    <div class=\"col-xs-4\">\n      <h3><i class=\"fa fa-tasks\"></i> Tasks to queue each time</h3>\n      <div class=\"list-group\">\n        ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "tasks", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      </div>\n      <button class='btn btn-block btn-primary'>\n        <i class=\"fa fa-plus\"></i> Add a task\n      </button>\n    </div><!-- end next up -->\n  </div><!-- end le tasks -->\n\n  <!-- le task modal -->\n  <div class=\"modal fade\" id=\"itemDetail\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n          <h4 class=\"modal-title\">#3: Cocoon 'em in gaffer tape</h4>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"panel-group\" id=\"accordion\">\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">\n                <h4 class=\"panel-title\">\n                  <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\">\n                    Description\n                  </a>\n                </h4>\n              </div>\n              <div id=\"collapseOne\" class=\"panel-collapse collapse in\">\n                <div class=\"panel-body\">\n                  <div contenteditable>\n                    <p>\n                      i am a big believer of starting with the html/css for features before\n                      plugging in the functionality. that way, you can agree to the interface\n                      before worrying about functionality.\n                    </p>\n                    <p>\n                      include:\n                    </p>\n                    <ul>\n                      <li>basic app layout</li>\n                      <li>multiple boards with add/remove/rename</li>\n                      <li>multiple columns for lists with add/remove/rename</li>\n                      <li>collapsed items in lists</li>\n                      <li>item detail modal</li>\n                    </ul>\n                    <p>more as we flesh out the first milestone features</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"panel panel-default\">\n              <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\">\n                <div class=\"panel-heading\">\n                  <h4 class=\"panel-title\">\n                    Details\n                  </h4>\n                </div>\n              </a>\n              <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\n                <div class=\"panel-body\">\n                  <form class=\"form-horizontal\" role=\"form\">\n                    <div class=\"form-group\">\n                      <label for=\"selectAssignee\" class=\"col-xs-2 control-label\">Assignee</label>\n                      <div class=\"col-xs-10\">\n                        <select id=\"selectAssignee\" class=\"chosen-select\">\n                          <option>Adam Neary</option>\n                          <option>Sinisa</option>\n                          <option>Aleksey</option>\n                          <option>Daniel</option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"selectMilestone\" class=\"col-xs-2 control-label\">Milestone</label>\n                      <div class=\"col-xs-10\">\n                        <select id=\"selectMilestone\" class=\"chosen-select\">\n                          <option>Milestone 1</option>\n                          <option>Milestone 2</option>\n                          <option>Milestone 3</option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"multiLabels\" class=\"col-xs-2 control-label\">Labels</label>\n                      <div class=\"col-xs-10\">\n                        <select id=\"selectMilestone\" class=\"chosen-select\" multiple width=\"300\">\n                          <option>Label 1</option>\n                          <option>Label 2</option>\n                          <option>Label 3</option>\n                        </select>\n                      </div>\n                    </div>\n                  </form>\n                </div>\n              </div>\n            </div>\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">\n                <h4 class=\"panel-title\">\n                  <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\">\n                    Comments\n                  </a>\n                </h4>\n              </div>\n              <div id=\"collapseThree\" class=\"panel-collapse collapse\">\n                <div class=\"panel-body\">\n                  <textarea class=\"form-control\" rows=\"3\"></textarea>\n                  <div class=\"media\">\n                    <a class=\"pull-left\" href=\"#\">\n                      <img class=\"media-object\" src=\"https://2.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&amp;s=40\">\n                    </a>\n                    <div class=\"media-body\">\n                      <h4 class=\"media-heading\">adamneary</h4>\n                     <p>\n                       <span class=\"label label-primary\">@kusic</span>\n                       Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n                    </div>\n                  </div>\n                  <div class=\"media\">\n                    <a class=\"pull-left\" href=\"#\">\n                      <img class=\"media-object\" src=\"https://1.gravatar.com/avatar/e55c09439e68fbaaf1231c9e725a8bdc?d=https%3A%2F%2Fidenticons.github.com%2F6789e600d8abaf5d52d427355d513fd2.png&s=40\">\n                    </a>\n                    <div class=\"media-body\">\n                      <h4 class=\"media-heading\">kusic</h4>\n                      <p>\n                        <span class=\"label label-primary\">@adamneary</span>\n                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div><!-- end .modal-body -->\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-success\">Save changes</button>\n          <button type=\"button\" class=\"btn btn-danger\">Close</button>\n        </div><!-- end .modal-footer -->\n      </div><!-- end .modal-content -->\n    </div><!-- end .modal-dialog -->\n  </div><!-- end .modal -->\n\n  <!-- le notification modal -->\n  <div class=\"modal fade\" id=\"notifications\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n          <h4 class=\"modal-title\">Notifications</h4>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"media\">\n            <a class=\"pull-left\" href=\"#\">\n              <img class=\"media-object\" src=\"https://2.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&amp;s=40\">\n            </a>\n            <div class=\"media-body\">\n              <h4 class=\"media-heading\"><span class=\"label label-primary\">adamneary</span> commented on a tasks\n                <a data-toggle=\"modal\" href=\"#itemDetail\">#1 Jack-in-the-box lorem</a></h4>\n              <hr>\n             <p>\n               <span class=\"label label-primary\">@kusic</span>\n               Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n                <span title=\"11/8/2013 7:30:07 PM\">Nov 8 at 7:30 pm</span>\n            </div>\n          </div>\n          <div class=\"media\">\n            <a class=\"pull-left\" href=\"#\">\n              <img class=\"media-object\" src=\"https://1.gravatar.com/avatar/e55c09439e68fbaaf1231c9e725a8bdc?d=https%3A%2F%2Fidenticons.github.com%2F6789e600d8abaf5d52d427355d513fd2.png&s=40\">\n            </a>\n            <div class=\"media-body\">\n              <h4 class=\"media-heading\"><span class=\"label label-primary\">@kusic</span> commented on a tasks\n                <a data-toggle=\"modal\" href=\"#itemDetail\">#1 Jack-in-the-box lorem</a></h4>\n              <hr>\n              <p>\n                <span class=\"label label-primary\">@adamneary</span>\n                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n              <span title=\"11/8/2013 7:32:07 PM\">Nov 8 at 7:32 pm</span>\n            </div>\n        </div><!-- end .modal-body -->\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-danger\">Close</button>\n        </div><!-- end .modal-footer -->\n      </div><!-- end .modal-content -->\n    </div><!-- end .modal-dialog -->\n  </div><!-- end .modal -->\n\n</div><!-- end .container -->");
  return buffer;
  
});

Ember.TEMPLATES["recipes"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n            <tr>\n              <td>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || (depth0 && depth0.linkTo)),stack1 ? stack1.call(depth0, "recipe", "id", options) : helperMissing.call(depth0, "linkTo", "recipe", "id", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</td>\n              <td>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "frequency", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</td>\n              <td>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "timeframe", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</td>\n              <td><button class='btn btn-danger btn-xs'><i class=\"fa fa-times-circle-o\"> Remove</button></td>\n            </tr>\n          ");
  return buffer;
  }
function program2(depth0,data) {
  
  var hashTypes, hashContexts;
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  }

  data.buffer.push("<div class=\"container\">\n  <div class=\"row\">\n    <div class = \"col-xs-10\">\n      <h2><i class=\"fa fa-tasks\"></i> Recipes (Connected Bookkeepers)</h2>\n      <p class=\"lead\">Recipes are recurring sets of task lists</p>\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th>Recipe</th>\n            <th>Frequency</th>\n            <th>On</th>\n            <th></th>\n          </tr>\n        </thead>\n        <tbody>\n          ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </tbody>\n      </table>\n      <a data-toggle=\"modal\" href=\"#addBoard\" class='btn btn-primary'>\n        <i class=\"fa fa-plus\"></i> Add a new recipe\n      </a>\n    </div>\n  </div>\n</div><!-- end .container -->");
  return buffer;
  
});

Ember.TEMPLATES["resources"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"container\">\n  <div class=\"row\">\n    <div class = \"col-xs-10\">\n      <h2><i class=\"fa fa-fighter-jet\"></i> Resources (Connected Bookkeepers)</h2>\n      <p class=\"lead\">Assemble a killer team and smart tools to get things done.</p>\n    </div>\n    <div class = \"col-xs-8\">\n\n      <h2>Activecell White Glove Service</h2>\n      <p class=\"lead\">Our pool of talented virtual assistants</p>\n      <table class=\"table\">\n        <tbody>\n          <tr>\n            <td>[INSERT SLIDER HERE]</td>\n            <td>30 hours</td>\n            <td class='text-right'>$150.00</td>\n          </tr>\n        </tbody>\n      </table>\n\n      <h2>Your tools</h2>\n      <p class=\"lead\">Maximize your time by putting smart tools to work.</p>\n      <table class=\"table\">\n        <tbody>\n          <tr>\n            <td>eSignatures</td>\n            <td><img src=\"https://2.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&amp;s=30\"></td>\n            <td>Right Signature</td>\n            <td><a href=''>Take me there</a></td>\n            <td class='text-right'>Included</td>\n          </tr>\n          <tr>\n            <td>Accounts receivable</td>\n            <td><img src=\"https://2.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&amp;s=30\"></td>\n            <td>Bill.com</td>\n            <td><a href=''>Take me there</a></td>\n            <td class='text-right'>Included</td>\n          </tr>\n          <tr>\n            <td>Accounts payable</td>\n            <td><img src=\"https://2.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&amp;s=30\"></td>\n            <td>Bill.com</td>\n            <td><a href=''>Take me there</a></td>\n            <td class='text-right'>Included</td>\n          </tr>\n          <tr>\n            <td>Project management</td>\n            <td><img src=\"https://2.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&amp;s=30\"></td>\n            <td>Basecamp</td>\n            <td><a href=''>Take me there</a></td>\n            <td class='text-right'>Included</td>\n          </tr>\n          <tr>\n            <td>Payroll</td>\n            <td><img src=\"https://2.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&amp;s=30\"></td>\n            <td>Quickbooks Payroll</td>\n            <td><a href=''>Take me there</a></td>\n            <td class='text-right'>$39.00</td>\n          </tr>\n          <tr>\n            <td>File management</td>\n            <td></td>\n            <td><button class='btn btn-default btn-sm'><i class=\"fa fa-plus-circle\"></i> Set up now</button></td>\n            <td></td>\n            <td></td>\n          </tr>\n          <tr>\n            <td>Document scanning</td>\n            <td><img src=\"https://2.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&amp;s=30\"></td>\n            <td>Shoeboxed</td>\n            <td><a href=''>Take me there</a></td>\n            <td class='text-right'>Free</td>\n          </tr>\n        </tbody>\n      </table>\n      <i class=\"fa fa-plus-circle\"></i> <a href=''> Get add-ons</a>\n      <div class=\"text-right\">\n        <button class='btn btn-default btn-sm'>Apply changes</button><br />\n        <small><strong>Est. monthly cost</small></strong><br />\n        <p class='lead'>$638.99</p>\n      </div>\n    </div>\n  </div>\n</div><!-- end .container -->");
  
});