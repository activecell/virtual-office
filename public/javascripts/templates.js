Ember.TEMPLATES["account"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"container\">\n  <div class=\"row\">\n    <div class = \"col-lg-8\">\n      <h2><i class=\"fa fa-tasks\"></i> You</h2>\n      <div class=\"media\">\n        <a class=\"pull-left\" href=\"#\">\n          <img class=\"media-object\" src=\"images/jason.png\" alt=\"Jason Hill\">\n        </a>\n        <div class=\"media-body\">\n          <h4 class=\"media-heading\">Jason Hill</h4>\n          Jason is a badass for this reason and that reason.\n        </div>\n      </div>\n      <h4>Email settings</h4>\n      <form class=\"form-horizontal\" role=\"form\">\n        <div class=\"form-group\">\n          <label for=\"inputEmail3\" class=\"col-sm-1 control-label\">Email</label>\n          <div class=\"col-sm-4\">\n            <input type=\"email\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Email\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-sm-offset-1 col-sm-10\">\n            <div class=\"checkbox\">\n              <label>\n                <input type=\"checkbox\"> Email me when a board is completed.\n              </label>\n            </div>\n            <div class=\"checkbox\">\n              <label>\n                <input type=\"checkbox\"> Email me when someone references me in a comment.\n              </label>\n            </div>\n            <div class=\"checkbox\">\n              <label>\n                <input type=\"checkbox\"> Email me when someone comments on a task assigned to me.\n              </label>\n            </div>\n          </div>\n        </div>\n      </form>\n\n      <h2><i class=\"fa fa-tasks\"></i> Your company</h2>\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th>User</th>\n            <th>Last logged in</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>Don Draper</td>\n            <td>Oct 1, 2013</td>\n          </tr>\n          <tr>\n            <td>Roger Sterling</td>\n            <td>Sep 4, 2013</td>\n          </tr>\n          <tr>\n            <td>Peggy Olson</td>\n            <td><button class=\"btn btn-sm btn-default\">Invite now</button></td>\n          </tr>\n        </tbody>\n      </table>\n      <div class=\"text-right\">\n        <button class='btn btn-default btn-sm'>Update credit card</button><br />\n        <small>This account is billed to: <strong>Amex 1003</strong></small>\n      </div>\n      <div class=\"text-left\">\n        <a href=\"#\" class='text-danger'>Close this account…</a>\n      </div>\n    </div>\n  </div>\n</div><!-- end .container -->");
  
});

Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "partials/navigation", options) : helperMissing.call(depth0, "partial", "partials/navigation", options))));
  data.buffer.push("\n\n<div class=\"container\">\n  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</div>\n\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "partials/footer", options) : helperMissing.call(depth0, "partial", "partials/footer", options))));
  return buffer;
  
});

Ember.TEMPLATES["boards"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"container\">\n  <div class=\"row\">\n    <div class = \"col-lg-8\">\n      <h2><i class=\"fa fa-tasks\"></i> Your task boards</h2>\n      <p class=\"lead\">Task boards help you manage sets of tasks</p>\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th>Board</th>\n            <th>Recipe</th>\n            <th>Status</th>\n            <th></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td><a href='view.html'>October 2013</a></td>\n            <td><a href='../recipes/view.html'>Monthly bookkeeping</a></td>\n            <td><span class=\"label label-info\">In progress</span></td>\n            <td><button class='btn btn-danger btn-xs'><i class=\"fa fa-times-circle-o\"> Remove</button></td>\n          </tr>\n          <tr>\n            <td><a href='view.html'>Virtual assistant tasks</a></td>\n            <td></td>\n            <td><span class=\"label label-primary\">Ongoing</span></td>\n            <td><button class='btn btn-danger btn-xs'><i class=\"fa fa-times-circle-o\"> Remove</button></td>\n          </tr>\n          <tr>\n            <td><a href='view.html'>September 2013</a></td>\n            <td><a href='../recipes/view.html'>Monthly bookkeeping</a></td>\n            <td><span class=\"label label-success\">Complete</span></td>\n            <td></td>\n          </tr>\n          <tr>\n            <td><a href='view.html'>August 2013</a></td>\n            <td><a href='../recipes/view.html'>Monthly bookkeeping</a></td>\n            <td><span class=\"label label-success\">Complete</span></td>\n            <td></td>\n          </tr>\n        </tbody>\n      </table>\n      <a data-toggle=\"modal\" href=\"#addBoard\" class='btn btn-primary'>\n        <i class=\"fa fa-plus\"></i> Add a new board\n      </a>\n    </div>\n  </div>\n</div><!-- end .container -->");
  
});

Ember.TEMPLATES["discounts"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"container\">\n  <div class=\"row\">\n    <div class = \"col-lg-12\">\n      <div class=\"page-header\">\n        <h1><i class=\"fa fa-thumbs-up\"></i> Save 10% on your bill for each company you refer.</h1>\n      </div>\n    </div>\n  </div>\n</div><!-- end .container -->");
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<h1>Find me in app/templates/index.hbs</h1>");
  
});

Ember.TEMPLATES["login"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<header id=\"header\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-2\">\n        <img src=\"images/activecell-full-color-darkBG-small.png\" alt=\"Activecell\" />\n      </div>\n    </div>\n  </div>\n</header><!-- end header -->\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-4 col-lg-offset-4\">\n      <h2 class=\"text-center\">Let's get started.</h2>\n      <div class=\"well\">\n        <p class=\"text-center\">\n          <img src=\"images/logo-quickbooks_small.png\" alt=\"Intuit QuickBooks\" class=\"intuit-small\">\n        </p>\n        <p class=\"text-center\">\n          <img src=\"images/button_signinwithintuit_horiz_small.png\" alt=\"Intuit QuickBooks\" class=\"intuit-small\">\n        </p>\n      </div>\n\n      <div class=\"hr\"></div>\n\n      <p class=\"text-center\">\n        <small>\n          Currently, we only support <br>\n          QuickBooks Online and QuickBooks Desktop.\n        </small>\n      </p>\n    </div>\n  </div>\n</div><!-- end .container -->");
  
});

Ember.TEMPLATES["partials/_footer"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<footer id=\"footer\" role=\"contentinfo\">\n  <div class=\"container\">\n    <div class=\"row\">\n       <div class=\"col-lg-2\">\n         <dl>\n          <dt><a href=\"http://www.activecell.com/about.html\">About Activecell</a></dt>\n          <dd><a href=\"http://www.activecell.com/index.html#features\">Features</a></dd>\n          <dd><a href=\"http://www.activecell.com/index.html#pricing\">Pricing</a></dd>\n          <dd><a href=\"http://www.activecell.com/experts.html\">Experts</a></dd>\n          <dd><a href=\"http://www.activecell.com/blog.html\">The Activecell Method</a></dd>\n          <dd><a href=\"http://www.activecell.com/advisors.html\">For advisors</a></dd>\n          <dd><a href=\"http://www.activecell.com/privacy.html\">Privacy policy</a></dd>\n        </dl>\n      </div>\n      <div class=\"col-lg-2\">\n        <dl>\n          <dt><a href=\"http://success.activecell.com\">Support &amp; feedback</a></dt>\n          <dd><a href=\"http://success.activecell.com/knowledgebase\">Knowledge base</a></dd>\n          <dd><a href=\"http://success.activecell.com/forums/110485-product-feedback\">Product feedback</a></dd>\n          <dd><a href=\"http://success.activecell.com\">Contact support</a></dd>\n        </dl>\n      </div>\n      <div class=\"col-lg-8 copyright\">\n        Brought to you by Profitably, Inc.  © 2013. All rights reserved.\n      </div>\n    </div>\n  </div>\n</footer> ");
  
});

Ember.TEMPLATES["partials/_navigation"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n            <i class=\"fa fa-tasks\"></i>\n            Task boards\n          ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n            <i class=\"fa fa-cutlery\"></i>\n            Recipes\n          ");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n            <i class=\"fa fa-fighter-jet\"></i>\n            Resources\n          ");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("\n            <i class=\"fa fa-thumbs-up\"></i>\n            Discount\n          ");
  }

  data.buffer.push("<!-- le main nav -->\n<header class=\"navbar navbar-inverse navbar-fixed-top bs-docs-nav\" role=\"banner\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button class=\"navbar-toggle collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\".bs-navbar-collapse\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"http://www.activecell.com\">Activecell Virtual Office</a>\n    </div>\n    <nav class=\"navbar-collapse bs-navbar-collapse collapse\" role=\"navigation\" style=\"height: 1px;\">\n      <ul class=\"nav navbar-nav\">\n        <li>\n          ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "boards", options) : helperMissing.call(depth0, "link-to", "boards", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n        </li>\n        <li>\n          ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "recipes", options) : helperMissing.call(depth0, "link-to", "recipes", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n        </li>\n        <li>\n          ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "resources", options) : helperMissing.call(depth0, "link-to", "resources", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n        </li>\n        <li>\n          ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "discounts", options) : helperMissing.call(depth0, "link-to", "discounts", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n        </li>\n      </ul>\n        <div class=\"nav navbar-text progress\" style=\"width: 100px; margin-bottom: 0px;\">\n          <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%;\">\n          <span class=\"sr-only\">60% Complete</span>\n        </div>\n      </div>\n    </nav>\n  </div>\n</header>");
  return buffer;
  
});

Ember.TEMPLATES["recipe"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<h1>One recipe</h1>");
  
});

Ember.TEMPLATES["recipes"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"container\">\n  <div class=\"row\">\n    <div class = \"col-lg-8\">\n      <h2><i class=\"fa fa-tasks\"></i> Your Recipes</h2>\n      <p class=\"lead\">Recipes are recurring sets of task lists</p>\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th>Recipe</th>\n            <th>Frequency</th>\n            <th>On</th>\n            <th></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td><a href='view.html'>Monthly bookkeeping</a></td>\n            <td>Monthly</td>\n            <td>5th day of the month</td>\n            <td><button class='btn btn-danger btn-xs'><i class=\"fa fa-times-circle-o\"> Remove</button></td>\n          </tr>\n          <tr>\n            <td><a href='view.html'>Forecast review</a></td>\n            <td>Quarter</td>\n            <td>1st day of the quarter</td>\n            <td><button class='btn btn-danger btn-xs'><i class=\"fa fa-times-circle-o\"> Remove</button></td>\n          </tr>\n          <tr>\n            <td><a href='view.html'>Update competitive analysis</a></td>\n            <td>Quarter</td>\n            <td>15th day of the quarter</td>\n            <td><button class='btn btn-danger btn-xs'><i class=\"fa fa-times-circle-o\"> Remove</button></td>\n          </tr>\n          <tr>\n            <td><a href='view.html'>Build market survey for a new product</a></td>\n            <td>As needed</td>\n            <td>--</td>\n            <td><button class='btn btn-danger btn-xs'><i class=\"fa fa-times-circle-o\"> Remove</button></td>\n          </tr>\n        </tbody>\n      </table>\n      <a data-toggle=\"modal\" href=\"#addBoard\" class='btn btn-primary'>\n        <i class=\"fa fa-plus\"></i> Add a new recipe\n      </a>\n    </div>\n  </div>\n</div><!-- end .container -->");
  
});

Ember.TEMPLATES["resources"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"container\">\n  <div class=\"row\">\n    <div class = \"col-lg-12\">\n      <div class=\"page-header\">\n        <h1>\n          <i class=\"fa fa-fighter-jet\"></i>\n          Assemble a killer team and smart tools to get things done.\n        </h1>\n      </div>\n    </div>\n    <div class = \"col-lg-8\">\n\n      <h2>Virtual Office Manager</h2>\n      <p class=\"lead\">A senior bookkeeper and coordinator for your virtual office</p>\n      <table class=\"table\">\n        <tbody>\n          <tr>\n            <td>\n              <div class=\"media\">\n                <a class=\"pull-left\" href=\"#\">\n                  <img class=\"media-object\" src=\"images/jason.png\" alt=\"Jason Hill\">\n                </a>\n                <div class=\"media-body\">\n                  <h4 class=\"media-heading\">Jason Hill</h4>\n                  Jason is a badass for this reason and that reason.\n                </div>\n              </div>\n            </td>\n            <td></td>\n          </tr>\n          <tr>\n            <td>Base bookkeeping package</td>\n            <td class='text-right'>$200.00</td>\n          </tr>\n          <tr>\n            <td>Follow up with accounts receivable (phone &amp; email)</td>\n            <td class='text-right'>$250.00</td>\n          </tr>\n        </tbody>\n      </table>\n      <i class=\"fa fa-plus-circle\"></i> <a href='#'> Get bookkeeping add-ons</a>\n      <p> </p>\n\n      <h2>Activecell Doers</h2>\n      <p class=\"lead\">Our pool of talented virtual assistants</p>\n      <table class=\"table\">\n        <tbody>\n          <tr>\n            <td>[INSERT SLIDER HERE]</td>\n            <td>30 hours</td>\n            <td class='text-right'>$150.00</td>\n          </tr>\n        </tbody>\n      </table>\n\n      <h2>Specialists</h2>\n      <p class=\"lead\">Complement your generalist work force with experts</p>\n      <table class=\"table\">\n        <tbody>\n          <tr>\n            <td>Virtual CFO: Quarterly</td>\n            <td><img src=\"https://2.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&amp;s=30\"></td>\n            <td>Adam Neary</td>\n            <td><a href=''>adam@activecell.com</a></td>\n            <td><a href=''>617-314-0825</td>\n            <td class='text-right'>$85.00</td>\n          </tr>\n          <tr>\n            <td>Accountant</td>\n            <td><img src=\"https://2.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&amp;s=30\"></td>\n            <td><button class='btn btn-default btn-sm'><i class=\"fa fa-plus-circle\"></i> Set up now</button></td>\n            <td colspan='3'>\n            </td>\n          </tr>\n          <tr>\n            <td>Lead Investor</td>\n            <td><img src=\"https://2.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&amp;s=30\"></td>\n            <td>David Mars</td>\n            <td><a href=''>adam@activecell.com</a></td>\n            <td><a href=''>617-314-0825</td>\n            <td class='text-right'>--</td>\n          </tr>\n        </tbody>\n      </table>\n      <i class=\"fa fa-plus-circle\"></i> <a href=''> Invite another specialist</a>\n\n      <h2>Your tools</h2>\n      <p class=\"lead\">Maximize your time by putting smart tools to work.</p>\n      <table class=\"table\">\n        <tbody>\n          <tr>\n            <td>Accounting</td>\n            <td><img src=\"https://2.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&amp;s=30\"></td>\n            <td>Quickbooks Online</td>\n            <td><a href=''>Take me there</a></td>\n            <td class='text-right'>Included</td>\n          </tr>\n          <tr>\n            <td>Accounts receivable</td>\n            <td><img src=\"https://2.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&amp;s=30\"></td>\n            <td>Bill.com</td>\n            <td><a href=''>Take me there</a></td>\n            <td class='text-right'>Included</td>\n          </tr>\n          <tr>\n            <td>Accounts payable</td>\n            <td><img src=\"https://2.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&amp;s=30\"></td>\n            <td>Bill.com</td>\n            <td><a href=''>Take me there</a></td>\n            <td class='text-right'>Included</td>\n          </tr>\n          <tr>\n            <td>Project management</td>\n            <td><img src=\"https://2.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&amp;s=30\"></td>\n            <td>Basecamp</td>\n            <td><a href=''>Take me there</a></td>\n            <td class='text-right'>Included</td>\n          </tr>\n          <tr>\n            <td>Payroll</td>\n            <td><img src=\"https://2.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&amp;s=30\"></td>\n            <td>Quickbooks Payroll</td>\n            <td><a href=''>Take me there</a></td>\n            <td class='text-right'>$39.00</td>\n          </tr>\n          <tr>\n            <td>File management</td>\n            <td></td>\n            <td><button class='btn btn-default btn-sm'><i class=\"fa fa-plus-circle\"></i> Set up now</button></td>\n            <td></td>\n            <td></td>\n          </tr>\n          <tr>\n            <td>Document scanning</td>\n            <td><img src=\"https://2.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&amp;s=30\"></td>\n            <td>Shoeboxed</td>\n            <td><a href=''>Take me there</a></td>\n            <td class='text-right'>Free</td>\n          </tr>\n        </tbody>\n      </table>\n      <i class=\"fa fa-plus-circle\"></i> <a href=''> Get add-ons</a>\n      <div class=\"text-right\">\n        <button class='btn btn-default btn-sm'>Apply changes</button><br />\n        <small><strong>Est. monthly cost</small></strong><br />\n        <p class='lead'>$638.99</p>\n      </div>\n      <div class=\"text-right\">\n        <small><strong>Less 20% <a href=''>discount</a></small></strong><br />\n        <p class='lead'>($127.80)</p>\n      </div>\n      <div class=\"text-right\">\n        <small><strong>Final monthly cost</small></strong><br />\n        <p class='lead'>$511.19</p>\n      </div>\n    </div>\n  </div>\n</div><!-- end .container -->");
  
});