jQuery(document).ready(function($) {
    
    /* Github Calendar - https://github.com/IonicaBizau/github-calendar */
    GitHubCalendar("#github-graph", "danielpenkov");
    
    /* Github Activity Feed - https://github.com/caseyscarborough/github-activity */
    GitHubActivity.feed({ username: "danielpenkov", selector: "#ghfeed", limit: 5 });


});
