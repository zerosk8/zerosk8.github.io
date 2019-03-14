const CSS_ID_SELECTOR_CHAR = "#";
const HTML_CLASS_ACTIVE = "active";
const HTML_ID_NAVIGATION_BAR = "idNavigationBar";

function getArrayOfHtmlElementsNavLink() {
    return Array.from(document.getElementsByClassName("nav-link"));
}

function getArrayOfHtmlElementsSectionContainer() {
    return [document.getElementById("idAboutMeSectionContainer"),
    document.getElementById("idSystemsAndNetworksAdministrationSectionContainer")];
}

function getArrayOfHtmlElementsProgressBar() {
    return Array.from(document.getElementsByClassName("classProgressBar95"))
        .concat(Array.from(document.getElementsByClassName("classProgressBar90")))
        .concat(Array.from(document.getElementsByClassName("classProgressBar85")))
        .concat(Array.from(document.getElementsByClassName("classProgressBar65")));
}

function getArrayOfHtmlElementsProgressBarSoftwareProjectContainer() {
    return Array.from(document.getElementsByClassName("classSoftwareProjectContainer"));
}

function loadScrollspyInHtmlBody() {
    $("body").scrollspy({ target: CSS_ID_SELECTOR_CHAR + HTML_ID_NAVIGATION_BAR, offset: 200 });
}

function throttleScroll(event) {
    if (isScrolling == false) {
        window.requestAnimationFrame(function () {
            showHtmlElementsWhenVisibleInViewport();
            isScrolling = false;
        });
    }
    isScrolling = true;
}

function showHtmlElementsWhenVisibleInViewport() {
    htmlElementsArray = htmlSectionContainers.concat(htmlProgressBars).concat(htmlSoftwareProjectsContainers);
    htmlElementsArray.forEach(function (htmlElement) {
        if (isHtmlElementPartiallyVisible(htmlElement)) {
            addActiveClassToHtmlElement(htmlElement);
        }
    });
}

function isHtmlElementPartiallyVisible(htmlElement) {
    var htmlElementBoundary = htmlElement.getBoundingClientRect();
    return (htmlElementBoundary.top + htmlElementBoundary.height >= 0)
        && (htmlElementBoundary.bottom <= (htmlElementBoundary.height + window.innerHeight
            || htmlElementBoundary.height + document.documentElement.clientHeight));
}

function addActiveClassToHtmlElement(htmlElement) {
    htmlElement.classList.add(HTML_CLASS_ACTIVE);
}

function removeActiveClassInHtmlElementFromArray(htmlElementsArray) {
    var foundActive = false, listOfClasses;
    for (var htmlElementsIndex = 0; !foundActive &&
        (htmlElementsIndex < htmlElementsArray.length); htmlElementsIndex++) {
        listOfClasses = htmlElementsArray[htmlElementsIndex].classList;
        if (listOfClasses.contains(HTML_CLASS_ACTIVE)) {
            listOfClasses.remove(HTML_CLASS_ACTIVE);
            foundActive = true;
        }
    }
}