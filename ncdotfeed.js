/*global moment*/

"use strict";

var NCDOTFeed = window.NCDOTFeed || {};

NCDOTFeed.Item = function(type, title, description, start, url, resourcelink, address, citystatezip) {
  var itemType = type,
    itemTitle = title,
    itemDescription = description,
    itemStart = start,
    itemUrl = url,
    itemResourceLink = resourcelink,
    itemAddress = address,
    itemCityStateZip = citystatezip,
    getType = function() {
      return itemType;
    },
    setType = function(v) {
      itemType = v;
    },
    getTitle = function() {
      return itemTitle;
    },
    setTitle = function(v) {
      itemTitle = v;
    },
    getDescription = function() {
      return itemDescription;
    },
    setDescription = function(v) {
      itemDescription = v;
    },
    getStart = function() {
      return itemStart;
    },
    setStart = function(v) {
      itemStart = v;
    },
    getUrl = function() {
      return itemUrl;
    },
    setUrl = function(v) {
      itemUrl = v;
    },
    getResourceLink = function() {
      return itemResourceLink;
    },
    setResourceLink = function(v) {
      itemResourceLink = v;
    },
    getAddress = function() {
      return itemAddress;
    },
    setAddress = function(v) {
      itemAddress = v;
    },
    getCityStateZip = function() {
      return itemCityStateZip;
    },
    setCityStateZip = function(v) {
      itemCityStateZip = v;
    };

  return {
    getType: getType,
    setType: setType,
    getTitle: getTitle,
    setTitle: setTitle,
    getDescription: getDescription,
    setDescription: setDescription,
    getStart: getStart,
    setStart: setStart,
    getUrl: getUrl,
    setUrl: setUrl,
    getResourceLink: getResourceLink,
    setResourceLink: setResourceLink,
    getAddress: getAddress,
    setAddress: setAddress,
    getCityStateZip: getCityStateZip,
    setCityStateZip: setCityStateZip
  };
};

NCDOTFeed.Items = function() {

  var items = [],

    getHtmlItems = function() {
      var output = "";
      for (var i = 0; i < items.length; i++) {
        switch (items[i].getType()) {
          case ".block-events":
            output += "<article class='social-block block-events'>" +
              "<section class='metadata'>" +
              "<span class='category'>" +
              "<span aria-hidden='true' class='fa fa-calendar'></span>" +
              "<span class='label'>Events</span>" +
              "</span>" +
              "<time>" + moment(items[i].getStart()).format("MMM D, h:mma") + "</time>" +
              "</section>" +
              "<header class='header'><a href='" + items[i].getUrl() + "'><h1>" + items[i].getTitle() + "</h1></a></header>" +
              "<div class='event-info'>" +
              "<div class='event-label'>Location:</div>" +
              "<p class='event-content'>" +
              items[i].getAddress() + "<br>" + items[i].getCityStateZip() +
              "</p>" +
              "</div>" +
              "<a href='" + items[i].getUrl() + "' class='read-more'>Learn more</a>" +
              "</article>";
            break;
          case ".block-news":
            var resourceLink = items[i].getResourceLink();
            output += "<article class='social-block block-news'>";

            if (resourceLink) {
              output += "<a href='" + items[i].getUrl() + "' class='featured-image'>" +
                "<img src='" + resourceLink + "' alt='" + items[i].getTitle() + "'>";
            }
            output += "</a>" +
              "<section class='metadata'>" +
              "<span class='category'>" +
              "<span aria-hidden='true' class='fa fa-comment'></span>" +
              "<span class='label'>News</span>" +
              "</span>" +
              "<time>" + moment(items[i].getStart()).format("MMM D") + "</time>" +
              "</section>" +
              "<header class='header'><a href='" + items[i].getUrl() + "'><h1>" + items[i].getTitle() + "</h1></a></header>" +
              "<p class='excerpt'>" +
              items[i].getDescription() +
              "</p>" +
              "<a href='" + items[i].getUrl() + "' class='read-more'>Read more</a>" +
              "</article>";
            break;
          case ".block-video":
            output += "<article class='social-block block-video'>" +
              "<div class='featured-image'>" +
              "<iframe src='//player.vimeo.com/video/" + items[i].getResourceLink() + 
                "?title=0&amp;byline=0&amp;portrait=0&amp;badge=0' width='245' height='200' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>" +
              "</div>" +
              "<section class='metadata'>" +
              "<span class='category'>" +
              "<span aria-hidden='true' class='icon icon-video'></span>" +
              "<span class='label'>Video</span>" +
              "</span>" +
              "<time>" + moment(items[i].getStart()).format("MMM D") + "</time>" +
              "</section>" +
              "<header class='header'><a href='" + items[i].getUrl() + "'><h1>" + items[i].getTitle() + "</h1></a></header>" +
              "<p class='excerpt'>" +
              items[i].getDescription() +
              "</p>" +
              "<a href='" + items[i].getUrl() + "' class='read-more'>Read more</a>" +
              "</article>";
            break;
          case ".block-facebook":
            output += "<article class='social-block block-facebook'>" +
              "<a class='featured-image' href='" + items[i].getUrl() + "'>" +
              "<img alt='loading...' src='" + items[i].getResourceLink() + "'>" +
              "</a>" +
              "<section class='metadata'>" +
              "<span class='category'>" +
              "<span aria-hidden='true' class='fa fa-facebook'></span>" +
              "<span class='label'>Facebook</span>" +
              "</span>" +
              "<time>" + moment(items[i].getStart()).format("MMM D") + "</time>" +
              "</section>" +
              "<p class='excerpt'>" +
              items[i].getDescription() +
              "</p>" +
              "<a target='_blank' href='" + items[i].getUrl() + "' class='read-more'>Read more</a>" +
              "</article>";
            break;
          case ".block-instagram":
            output += "<article class='social-block block-instagram'>" +
              "<a class='featured-image' href='" + items[i].getUrl() + "'>" +
              "<img alt='loading...' src='" + items[i].getResourceLink() + "'>" +
              "</a>" +
              "<section class='metadata'>" +
              "<span class='category'>" +
              "<span aria-hidden='true' class='fa fa-instagram'></span>" +
              "<span class='label'>Instagram</span>" +
              "</span>" +
              "<time>" + moment(items[i].getStart()).format("MMM D") + "</time>" +
              "</section>" +
              "<p class='excerpt'>" +
              items[i].getDescription() +
              "</p>" +
              "<a target='_blank' href='" + items[i].getUrl() + "' class='read-more'>Read more</a>" +
              "</article>";
            break;
          case ".block-twitter":
            if (items[i].getResourceLink()) {
              output += "<article class='social-block block-twitter'>" +
                "<a class='featured-image' href='" + items[i].getUrl() + "'>" +
                "<img alt='loading...' src='" + items[i].getResourceLink() + "'>" +
                "</a>" +
                "<section class='metadata'>" +
                "<span class='category'>" +
                "<span aria-hidden='true' class='fa fa-twitter'></span>" +
                "<span class='label'>Twitter</span>" +
                "</span>" +
                "<time>" + moment(items[i].getStart()).format("MMM D") + "</time>" +
                "</section>" +
                "<p class='excerpt'>" +
                items[i].getDescription() +
                "</p>" +
                "<a target='_blank' href='" + items[i].getUrl() + "' class='read-more'>Read more</a>" +
                "</article>";
              break;
            } else {
              output += "<article class='social-block block-twitter'>" +
                "<section class='metadata'>" +
                "<span class='category'>" +
                "<span aria-hidden='true' class='fa fa-twitter'></span>" +
                "<span class='label'>Twitter</span>" +
                "</span>" +
                "<time>" + moment(items[i].getStart()).format("MMM D") + "</time>" +
                "</section>" +
                "<p class='excerpt'>" +
                items[i].getDescription() +
                "</p>" +
                "<a target='_blank' href='" + items[i].getUrl() + "' class='read-more'>Read more</a>" +
                "</article>";
              break;
            }
        }
      }
      return output;
    },
    clear = function() {
      items = [];
    },
    load = function(data) {
      var item = new NCDOTFeed.Item;
      item.setType(data.attr("ows_RR_IS_Type"));
      item.setTitle(data.attr("ows_Title"));
      item.setDescription(data.attr("ows_RR_IS_Description"));
      item.setStart(data.attr("ows_RR_IS_Date"));
      var url = data.attr("ows_RR_IS_URL");
      var linkUrl = (url) ? url.split(", ")[1] : null;
      item.setUrl(linkUrl);
      var image = data.attr("ows_RR_IS_ResourceLink");
      var imageUrl = image ? image : null;
        //"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO0ZRNPTIsiy6YwdBB_dyDJI5l_Kw_VUGQoEsksZdeRZl8B797Vg";
      item.setResourceLink(imageUrl);
      item.setAddress(data.attr("ows_RR_IS_Address"));
      item.setCityStateZip(data.attr("ows_RR_IS_CityStateZip"));
      items.push(item);
    },
    getItems = function() {
      return items;
    };

  return {
    clear: clear,
    load: load,
    getItems: getItems,
    getHtmlItems: getHtmlItems
  };

}();
