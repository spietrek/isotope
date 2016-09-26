$(function() {
  // Grab the template script
  var theTemplateScript = "<p>You can find me in {{city}}. My address is {{number}} {{street}}.</p>";

  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);

  // Define our data object
  var context = {
    "city": "Wake Forest",
    "street": "Fanning Drive",
    "number": "1113"
  };

  // Pass our data to the template
  var theCompiledHtml = theTemplate(context);

  // Add the compiled html to the page
  $(".content-placeholder").append(theCompiledHtml);

  // Grab the template script
  var theTemplateScript = "{{#each developers}}" +
    "<p>{{firstName}} {{lastName}}</p>" +
    "{{/each}}";

  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);

  // This is the default context, which is passed to the template
  var context = {
    developers: [{
      firstName: "Homer",
      lastName: "Simpson"
    }, {
      firstName: "Steve",
      lastName: "Pietrek"
    }, {
      firstName: "Eric",
      lastName: "Cartman"
    }, {
      firstName: "Kenny",
      lastName: "McCormick"
    }, {
      firstName: "Bart",
      lastName: "Simpson"
    }]
  };

  // Pass our data to the template
  var theCompiledHtml = theTemplate(context);

  // Add the compiled html to the page
  $(".content-placeholder").append(theCompiledHtml);
});
