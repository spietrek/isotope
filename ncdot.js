"use strict";

var NCDOTFeed = window.NCDOTFeed || {};
var page = 0;
var dataFilter = "*";
var isFirstLoad = "1";
var totalItems = 0;
var currentItems = 0;
var rowLimit = 24;
var currentPosition = "";

function getQuery() {
  var orderByQuery = "<OrderBy><FieldRef Name='RR_IS_Date' Ascending='False' /></OrderBy>";
  var whereQuery = "";
  if (dataFilter !== "*") {
    whereQuery = "<Where><Eq><FieldRef Name='RR_IS_Type' /><Value Type='Text'>" + dataFilter + "</Value></Eq></Where>";
  };
  return "<Query>" + whereQuery + orderByQuery + "</Query>";
}

function getTotalItems() {
  $().SPServices({
    webURL: "https://cardinalsolutionsrtp.sharepoint.com/sites/ncdot2/About",
    operation: "GetListItems",
    async: false,
    listName: "Isotope",
    CAMLQuery: getQuery(),
    CAMLViewFields: "<ViewFields><FieldRef Name='ID' /></ViewFields>",
    completefunc: function(xData) {
      totalItems = $(xData.responseXML).SPFilterNode("rs:data").attr("ItemCount");
    }
  });
}

function getItems() {
  $().SPServices({
    webURL: "https://cardinalsolutionsrtp.sharepoint.com/sites/ncdot2/About",
    operation: "GetListItems",
    async: false,
    listName: "Isotope",
    CAMLQuery: getQuery(),
    CAMLViewFields: "<ViewFields Properties='True' />",
    CAMLQueryOptions: "<QueryOptions><Paging ListItemCollectionPositionNext='" + currentPosition + "' /></QueryOptions>",
    CAMLRowLimit: rowLimit,
    completefunc: function(xData) {
      NCDOTFeed.Items.clear();
      $(xData.responseXML).SPFilterNode("z:row").each(function() {
        NCDOTFeed.Items.load($(this));
      });
      currentItems += NCDOTFeed.Items.getItems().length;
      currentPosition = $(xData.responseXML).SPFilterNode("rs:data").attr("ListItemCollectionPositionNext");
      try {
        currentPosition = currentPosition.replace(/&/g, "&amp;").replace(/'/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      } catch (e) {}
      var events = NCDOTFeed.Items.getHtmlItems();
      if (page === 0) {
        $("#pnlGrid").hide();
        $("#pnlGrid").html(events);
        $("#pnlGrid").imagesLoaded(function() {
          $("#pnlGrid").show();
          $("#pnlGrid").isotope({
            layoutMode: "masonry",
            animationOptions: {
              duration: 500
            }
          });
          updateGridLoader();
        });
        isFirstLoad = "0";
      } else {
        $("#pnlGrid").isotope("insert", $(events));
        $("#pnlGrid").imagesLoaded(function() {
          $("#pnlGrid").isotope("layout");
          updateGridLoader();
        });
      }
    }
  });
}

function updateGridLoader() {
  $("#pnlCommunitySpinner").hide();
  if (totalItems === 0 || currentItems >= totalItems) {
    $(".grid-loader").hide();
  }
}

function loadItems() {
  if (isFirstLoad === "1") {
    getTotalItems();
  }
  getItems();
}

$(function() {
  loadItems();

  $("#btnLoadMore").click(function() {
    $("#pnlCommunitySpinner").show();
    page += 1;
    loadItems();
  });

  function initialize() {
    isFirstLoad = "1";
    page = 0;
    currentPosition = "";
    totalItems = 0;
    currentItems = 0;
  }

  $(".button.social-button").each(function(i, buttonGroup) {
    $(".grid-loader").show();
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on("click", function() {
      $(".button.social-button").each(function() {
        $(this).removeClass("selected");
      });
      $(this).addClass("selected");
      $("#pnlGrid").isotope("destroy");
      dataFilter = $buttonGroup.attr("data-filter");
      initialize();
      loadItems();
    });
  });
});
