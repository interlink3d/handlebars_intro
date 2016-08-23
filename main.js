"use strict";

var entryData = {
  title: "My New Post",
  body: "Hello world, I am Edgar",
  tags: [
    {
      category: "technology",
      name: "handlebars"
    },
    {
      category: "facial hair styles",
      name: "foo man chu"
    }
  ]
};

var taglineData = {
  author_first_name: "Bubba",
  author_last_name: "Sparks",
  authored_date: "April 20, 2004"
};

Handlebars.registerHelper("inc", function(value) {
  return parseInt(value) + 1;
});

// partials could be used for navbars and other things that are conditional
// register a partial
var taglineHTML = $("#tagline-partial").html();
var taglineTemplate = Handlebars.compile(taglineHTML);
var taglineOutput = taglineTemplate(taglineData);
Handlebars.registerPartial("tagline", taglineOutput);

// create a custom help tht we can call inside an expression in our markup


// get the template
var entryHTML = $("#entry-template").html();

// use handlebars to compile it into a template
var entryTemplate = Handlebars.compile(entryHTML);

// render the resulting HTML by passing the data to the template
var entryOutput = entryTemplate(entryData);

$("#entryOutput").append(entryOutput);






