var viewportTag;
var headTag = document.head || document.getElementsByTagName('HEAD')[0];
var metaTags = headTag.getElementsByTagName('META');
for (var i = 0; i < metaTags.length; i++) {
    if (metaTags[i].name.toLowerCase() == 'viewport') {
        viewportTag = metaTags[i];
        break;
    }
}

if (typeof viewportTag == 'undefined') {
    viewportTag = document.createElement('META');
    viewportTag.name = 'viewport';
    viewportTag.content = 'width=device-width, user-scalable=no';
    headTag.appendChild(viewportTag);
}


var toggleSidebar = function (el) {
    var sidebar = $('#sidebar');
    var element = $(el);
    if (element.hasClass('desc')) {
        element.removeClass('desc');
        element.addClass('asc');
    } else {
        element.removeClass('asc');
        element.addClass('desc');
    }
    sidebar.children().each(function (index, child) {
        if (child.id != 'sidebar-toggler') {
            $(child).toggle();
        }
    });
};

$(document).ready(function () {

// wrap tables div.table-container
    $("table").wrap("<div class='table-container' />");

// duplicate next-prev-links
    $(".next-prev-links").first().clone(true).insertAfter("#history");
    $(".next-prev-links").first().clone(true).insertBefore("#history");

// insert scroll navigation
    $("#footer").before("<p id='page-top'><a href='#'>&#x25B2;</a></p>");
    //$("#footer").before("<p id='page-mid'><a href='#'>&#x25A0;</a></p>");
    $("#footer").before("<p id='page-bottom'><a href='#'>&#x25BC;</a></p>");

    var mainMenu = $('#main-menu');
    if (mainMenu) {
        var tabs = $('div.tabs');
        mainMenu.addClass('tabs');
        var tabsButtons = $('<div></div>');
        tabsButtons.addClass('tabs-buttons');
        tabsButtons.hide();
        var tabLeft = $('<button></button>');
        tabLeft.addClass('tab-left');
        tabLeft.click(function () {
            moveTabLeft(this);
        });
        tabsButtons.append(tabLeft);
        var tabRight = $('<button></button>');
        tabRight.addClass('tab-right');
        tabRight.click(function () {
            moveTabRight(this);
        });
        tabsButtons.append(tabRight);
        mainMenu.append(tabsButtons);
        if (tabs.length == 0) {
            displayTabsButtons();
            $(window).resize(displayTabsButtons);
        }
    }
    var sidebar = $('#sidebar');
    if (sidebar) {
        var sidebarToggler = $('<a></a>');
        sidebarToggler.attr('id', 'sidebar-toggler');
        sidebarToggler.addClass('sort');
        sidebarToggler.addClass('asc');
        sidebarToggler.click(function () {
            toggleSidebar(this);
        });
        sidebar.append(sidebarToggler);
        toggleSidebar(sidebarToggler);
    }
});

$(function () {
    var topBtn = $('#page-top');
    //var midBtn = $('#page-mid');
    var btmBtn = $('#page-bottom');

// default
    topBtn.hide();
    //midBtn.show();
    btmBtn.show();

//スクロールが100に達したらボタン表示
    $(window).scroll(function () {

        var scrollHeight = $(document).height();
        var scrollPosition = $(window).height() + $(window).scrollTop();
        if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
            // when scroll to bottom of the page
            btmBtn.fadeOut();
        } else {
            btmBtn.fadeIn();
        }

        if ($(this).scrollTop() >= 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
// goto Top of Page
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
// goto history
//    midBtn.click(function () {
//        $('body,html').animate({
//            scrollTop: $("#history").offset().top
//        }, 500);
//        return false;
//    });
// goto Bottom of page
    btmBtn.click(function () {
        $('body,html').animate({
            scrollTop: $("#footer").offset().top
        }, 500);
        return false;
    });
});








