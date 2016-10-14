"use strict";

var NCDOTFeed = window.NCDOTFeed || {};
var dataFilter = "*";
var page = 0;
var isFirstLoad = "1";
var totalItems = 24;
var currentItems = 0;
var sampleData = [];

function loadSampleData() {
  var tempData = [];
  var item = {
    title: "Facebook",
    description: "The start of fall means less daylight! If you walk or ride your bike to work, your trip home may be in the dark. Wearing light clothing and using reflectors and lights can all help boost your visibility. Watch For Me...",
    itemType: ".block-facebook",
    date: new Date("9/28/2016  12:00:00 PM"),
    imageUrl: "https://apps.ncdot.gov/newsreleases/topImage.ashx?id=3814",
    linkUrl: "https://www.ncdot.gov/"
  };
  tempData.push(item);
  item = {
    title: "Facebook",
    description: "The Birkhead Wilderness Route Scenic Byway in Randolph County features the Uwharrie Mountains, considered by some within the vicinity of Lassiter Mill. The Birkhead Mountain, Robbins Branch and experts to be the oldest...",
    itemType: ".block-facebook",
    date: new Date("9/24/2016  8:30:00 AM"),
    linkUrl: "https://www.ncdot.gov/"
  };
  tempData.push(item);
  item = {
    title: "Twitter",
    description: "Next week, NC ferries start transitioning to off-season schedules, starting with the Pamlico Sound routes:",
    itemType: ".block-twitter",
    date: new Date("9/23/2016  11:21:00 AM"),
    imageUrl: "https://apps.ncdot.gov/newsreleases/topImage.ashx?id=3814",
    linkUrl: "https://www.ncdot.gov/"
  };
  tempData.push(item);
  item = {
    title: "Twitter",
    description: "NCDOT Secretary Nick Tennyson is touring areas hit by TS Julia to assess flood damage, meet with local officials and speak to media.",
    itemType: ".block-twitter",
    date: new Date("9/22/16 12:16"),
    linkUrl: "https://www.ncdot.gov/"
  };
  tempData.push(item);
  item = {
    title: "Northeastern NC Roads Affected by Remnants of Tropical Storm Julia",
    description: "As the remnants of Tropical Storm Julia continue to impact North Carolina, counties north of Albemarle Sound -- Bertie, Chowan, Camden Currituck, Gates, Hertford, Perquimans and Pasquotank -- in the northeastern part of the state...",
    date: new Date("9/21/16 11:47"),
    itemType: ".block-new",
    imageUrl: "https://apps.ncdot.gov/newsreleases/topImage.ashx?id=3814",
    linkUrl: "https://www.ncdot.gov/"
  };
  tempData.push(item);
  item = {
    title: "DMV Driver License Services Return to Fort Bragg",
    description: "Secretaries Nick Tennyson and Cornell Wilson Jr., two members of Governor Pat McCrory’s cabinet, participated today in a ribbon cutting for the new Fort Bragg Mobile Driver License Office. The N.C. Division of Motor Vehicles...",
    date: new Date("9/21/16 9:39"),
    itemType: ".block-news",
    linkUrl: "https://www.ncdot.gov/"
  };
  tempData.push(item);
  item = {
    title: "Night Lane Closures and Weekend Detours Begin on Cary Parkway Wed. Night",
    description: "Maintenance work is scheduled to begin Wednesday night, weather permitting, on dual bridges that carry Northwest Cary Parkway over Southern Railroad tracks south of its intersection with N.C. 54. The work will require...",
    date: new Date("9/20/16 13:17"),
    itemType: ".block-news",
    imageUrl: "https://apps.ncdot.gov/newsreleases/topImage.ashx?id=3814",
    linkUrl: "https://www.ncdot.gov/"
  };
  tempData.push(item);
  item = {
    title: "Lane and Road Closures in Oak Ridge for Haw River Bridge Work",
    description: "Final work on the Haw River Bridge will prompt lane and road closures starting tonight in the Town of Oak Ridge. Traffic along N.C. 68 will be down to one lane from 7 p.m. to 10 p.m. between Bartonshire Drive and East...",
    date: new Date("9/20/16 9:42"),
    itemType: ".block-news",
    linkUrl: "https://www.ncdot.gov/"
  };
  tempData.push(item);
  item = {
    title: "Facebook",
    description: "Did You Know? NCDOT’s Office of Education Initiatives works to advance a wide range of programs and activities that focus heavily on science, technology, engineering and mathematics (STEM), from kindergarten all the...",
    date: new Date("9/20/16 8:25"),
    itemType: ".block-facebook",
    imageUrl: "https://apps.ncdot.gov/newsreleases/topImage.ashx?id=3814",
    linkUrl: "https://www.ncdot.gov/"
  };
  tempData.push(item);
  item = {
    title: "Southbound Lanes of I-85 Re-Open After Spill",
    description: "All but one southbound lane of Interstate 85 near the Little Rock Road exit re-opened by 6 a.m. after N.C Department of Transportation and other crews cleaned up a hazardous material spill. On Monday evening, a truck...",
    date: new Date("9/20/16 6:11"),
    itemType: ".block-news",
    linkUrl: "https://www.ncdot.gov/"
  };
  tempData.push(item);
  item = {
    title: "Resurfacing Work Continues This Week in Johnston County",
    description: "Contractors with the Department of Transportation will continue resurfacing Amelia Church Road tonight from U.S. 70 Business to N.C. 42, heading west, in Clayton in Johnston County. All work must be completed at night -...",
    date: new Date("9/19/16 16:16"),
    itemType: ".block-news",
    linkUrl: "https://www.ncdot.gov/"
  };
  tempData.push(item);
  item = {
    title: "Stanly Co Airport Fly-in and MACA Event",
    description: "Stanly County Airport Fly-in and MACA Event Saturday, September 10, 2016 10 a.m. - 2 p.m. Featuring: Mobile Radar Unit Facility and Tower Tours, C130 Aerial Drop Demo, Static Displays, Seminars",
    date: new Date("9/10/2016  10:00:00 AM"),
    itemType: ".block-events",
    linkUrl: "https://www.ncdot.gov/",
    address: "KVUJ-Stanly County Airport 43222 Lowder Aviation Parkway",
    cityStateZip: "New London, NC 28127"
  };
  tempData.push(item);

  sampleData = [];
  $.each(tempData, function(index, item) {
    if (dataFilter === "*") {
      sampleData.push(item);
    } else if (dataFilter === item.itemType) {
      sampleData.push(item);
    }
  });
  console.log(sampleData);
}

function getTotalItems() {
  totalItems = sampleData.length;
  currentItems = sampleData.length;
}

function getItems() {
  NCDOTFeed.Items.clear();
  $.each(sampleData, function(index, item) {
    NCDOTFeed.Items.loadHardcode(item);
  });
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

function updateGridLoader() {
  $("#pnlCommunitySpinner").hide();
  if (totalItems === 0 || currentItems >= totalItems) {
    $(".grid-loader").hide();
  }
}

function loadItems() {
  loadSampleData();
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
    totalItems = 0;
    currentItems = 0;
    $("#pnlCommunitySpinner").show();
    $(".grid-loader").show();
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
