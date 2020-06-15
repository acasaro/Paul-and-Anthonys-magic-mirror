/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
    address: "localhost", // Address to listen on, can be:
    // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
    // - another specific IPv4/6 to listen on a specific interface
    // - "", "0.0.0.0", "::" to listen on any interface
    // Default, when address config is left out, is "localhost"
    port: 8080,
    ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
    // or add a specific IPv4 of 192.168.1.5 :
    // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
    // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
    // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

    language: "en",
    timeFormat: 24,
    units: "metric",

    modules: [
        {
            module: "alert",
        },
        {
            module: "updatenotification",
            position: "top_bar",
        },
        {
            module: "clock",
            position: "top_left",
            config: {
                timeFormat: 12,
                showPeriodUpper: true,
            },
        },
        {
            module: "calendar_monthly",
            position: "top_left",
            config: {
                cssStyle: "clean",
            },
        },

        {
            module: "calendar",
            position: "top_left",
            header: "Schedule",
            config: {
                calendars: [
                    {
                        symbol: "calendar",
                        url:
                            "https://calendar.google.com/calendar/ical/crbshhdj6g7iamo5dehlnvblmk%40group.calendar.google.com/public/basic.ics",
                    },
                ],
            },
        },

        {
            module: "currentweather",
            position: "top_right",
            config: {
                location: "Eden Prairie",
                locationID: "5025219", //ID from http://www.openweathermap.org/help/city_list.txt
                appid: "aef071589dc811811beafbffa874e9e3",
                units: "imperial",
                timeFormat: 12,
            },
        },
        {
            module: "weatherforecast",
            position: "top_right",
            header: "Weather Forecast",
            config: {
                location: "Eden Prairie",
                locationID: "5025219", //ID from http://www.openweathermap.org/help/city_list.txt
                appid: "aef071589dc811811beafbffa874e9e3",
                units: "imperial",
            },
        },
        {
            module: "newsfeed",
            position: "bottom_bar",
            config: {
                feeds: [
                    {
                        title: "Reddit - World News",
                        url: "reddit.com/r/worldnews/.rss",
                    },
                    {
                        title: "BBC News",
                        url: "http://feeds.bbci.co.uk/news/world/rss.xml",
                    },
                    {
                        title: "The New York Times",
                        url:
                            "https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/section/world/rss.xml",
                    },
                    {
                        title: "BuzzFeed",
                        url: "buzzfeed.com/world.xml",
                    },
                    {
                        title: "Al Jazeera",
                        url: "aljazeera.com/xml/rss/all.xml",
                    },
                    {
                        title: "Defense Blog",
                        url: "https://defence-blog.com/feed",
                    },
                    {
                        title: "Yahoo News",
                        url: "yahoo.com/news/world/rss",
                    },
                    {
                        title: "cnn",
                        url: "http://rss.cnn.com/rss/edition_world.rss",
                    },
                    {
                        title: "The Guardian",
                        url: "theguardian.com/world/rss",
                    },
                    {
                        title: "Washington Post",
                        url: "http://feeds.washingtonpost.com/rss/world",
                    },
                    {
                        title: "CNBC",
                        url: "https://www.cnbc.com/id/100727362/device/rss/rss.html",
                    },
                    {
                        title: "Time",
                        url: "http://feeds.feedburner.com/time/world",
                    },
                    {
                        title: "Time Current and Breaking",
                        url: "https://time.com/feed/",
                    },
                    {
                        title: "The Independent",
                        url: "http://www.independent.co.uk/news/world/rss",
                    },
                    {
                        title: "ABC News",
                        url: "https://abcnews.go.com/abcnews/internationalheadlines",
                    },
                    {
                        title: "Daily Express",
                        url: "http://feeds.feedburner.com/daily-express-world-news",
                    },
                    {
                        title: "CBS News",
                        url: "https://www.cbsnews.com/latest/rss/world",
                    },
                    {
                        title: "NASA",
                        url: "https://www.nasa.gov/rss/dyn/breaking_news.rss",
                    },
                    {
                        title: "NASA Education",
                        url: "https://www.nasa.gov/rss/dyn/educationnews.rss",
                    },
                    {
                        title: "NASA Solar System and Beyond",
                        url: "https://www.nasa.gov/rss/dyn/solar_system.rss",
                    },
                    {
                        title: "NASA Earth",
                        url: "https://www.nasa.gov/rss/dyn/earth.rss",
                    },
                    {
                        title: "National Weather Service - Severe Weather",
                        url: "https://alerts.weather.gov/cap/us.php?x=0",
                    },
                    {
                        title: "The Mirror",
                        url: "https://www.mirror.co.uk/news/?service=rss",
                    },
                    {
                        title: "ESPN",
                        url: "https://www.espn.com/espn/rss/news",
                    },
                    {
                        title: "Sky Sports",
                        url: "https://www.skysports.com/rss/12040",
                    },
                    {
                        title: "Deadspin",
                        url: "https://deadspin.com/rss",
                    },
                    {
                        title: "Reddit Sports",
                        url: "https://www.reddit.com/r/sports/.rss?format=xml",
                    },
                    {
                        title: "USA Today High School Sports",
                        url: "https://usatodayhss.com/feed/",
                    },
                    {
                        title: "Boxing News",
                        url: "http://www.boxingnewsonline.net/feed/",
                    },
                    {
                        title: "BBC Sport - Rugby",
                        url: "http://feeds.bbci.co.uk/sport/rugby-union/rss.xml",
                    },
                    {
                        title: "Rugby Pass",
                        url: "https://www.rugbypass.com/feeds/rss",
                    },
                    {
                        title: "Rugby World",
                        url: "https://www.rugbyworld.com/feed",
                    },
                    {
                        title: "Americas Rugby News",
                        url: "http://www.americasrugbynews.com/feed/",
                    },
                    {
                        title: "Autosport",
                        url: "https://www.autosport.com/rss/feed/f1",
                    },
                    {
                        title: "FIA",
                        url: "https://www.fia.com/rss/press-release",
                    },
                    {
                        title: "Eurosport",
                        url: "https://www.formula1.com/content/fom-website/en/latest.articlefeed.xml",
                    },
                    {
                        title: "The Political Insider",
                        url: "https://thepoliticalinsider.com/feed/",
                    },
                    {
                        title: "Real Clear Politics",
                        url: "https://www.realclearpolitics.com/index.xml",
                    },
                    {
                        title: "Huff Post Politics",
                        url: "https://www.huffingtonpost.co.uk/feeds/index.xml",
                    },
                    {
                        title: "Politics.co.uk",
                        url: "https://www.politics.co.uk/rss.xml",
                    },
                    {
                        title: "WSJ Opinion",
                        url: "https://feeds.a.dj.com/rss/RSSOpinion.xml",
                    },
                    {
                        title: "WSJ World News",
                        url: "https://feeds.a.dj.com/rss/RSSWorldNews.xml",
                    },
                    {
                        title: "WSJ US Business",
                        url: "https://feeds.a.dj.com/rss/WSJcomUSBusiness.xml",
                    },
                    {
                        title: "WSJ Markets News",
                        url: "https://feeds.a.dj.com/rss/RSSMarketsMain.xml",
                    },
                    {
                        title: "WSJ Technology",
                        url: "https://feeds.a.dj.com/rss/RSSWSJD.xml",
                    },
                    {
                        title: "MIT Technology",
                        url: "https://www.technologyreview.com/feed/",
                    },
                    {
                        title: "Techmeme",
                        url: "https://www.techmeme.com/feed.xml?x=1",
                    },
                    {
                        title: "TechCrunch",
                        url: "https://feeds.feedburner.com/TechCrunch/",
                    },
                    {
                        title: "CNET",
                        url: "https://www.cnet.com/rss/news/",
                    },
                    {
                        title: "Digital Trends",
                        url: "https://www.digitaltrends.com/cool-tech/feed/",
                    },
                    {
                        title: "Google News",
                        url: "https://news.google.com/output=rss",
                    },
                    {
                        title: "Apple Insider",
                        url: "https://appleinsider.com/rss/news",
                    },
                    {
                        title: "Mac Rumors",
                        url: "http://feeds.macrumors.com/MacRumors-Front",
                    },
                    {
                        title: "Yahoo Sports",
                        url: "http://sports.yahoo.com/mlb/rss.xml",
                    },
                    {
                        title: "Wired",
                        url: "https://www.wired.com/feed",
                    },
                    {
                        title: "Wired UK",
                        url: "https://www.wired.co.uk/rss/article",
                    },
                    {
                        title: "Wired Science",
                        url: "https://www.wired.com/category/science/feed",
                    },
                    {
                        title: "Jokes of the Day",
                        url: "http://www.jokesoftheday.net/jokes-feed/",
                    },
                    {
                        title: "Funny Short Jokes",
                        url: "http://www.funnyshortjokes.com/feed",
                    },
                    {
                        title: "The Poke",
                        url: "https://www.thepoke.co.uk/feed/",
                    },
                    {
                        title: "Lonely Planet",
                        url: "https://www.lonelyplanet.com/blog/feed/atom/",
                    },
                    {
                        title: "Airline Reporter",
                        url: "https://www.airlinereporter.com/feed/",
                    },
                    {
                        title: "Airline Geeks",
                        url: "https://airlinegeeks.com/feed/",
                    },
                    {
                        title: "Secret Flying",
                        url: "https://www.secretflying.com/feed/",
                    },
                    {
                        title: "Star Tribune",
                        url: "https://www.startribune.com/local/index.rss2",
                    },
                    {
                        title: "WCCO",
                        url: "https://minnesota.cbslocal.com/feed/",
                    },
                    {
                        title: "KSTP 5",
                        url: "https://kstp.com/rssFeeds/rss1.xml",
                    },
                    {
                        title: "Pioneer Press",
                        url: "https://www.twincities.com/feed/",
                    },
                    {
                        title: "GOV.UK",
                        url: "https://www.gov.uk/government/organisations/ministry-of-defence.atom",
                    },
                    {
                        title: "Movie Web",
                        url: "http://feeds.feedburner.com/movieweb_news",
                    },
                    {
                        title: "Screen Rant",
                        url: "https://screenrant.com/feed/",
                    },
                    {
                        title: "Coming Soon",
                        url: "https://www.comingsoon.net/feed",
                    },
                    {
                        title: "Screen Crush",
                        url: "https://screencrush.com/feed/",
                    },
                    {
                        title: "Forbes",
                        url: "https://www.forbes.com/fdc/rss.html#30938edb1131",
                    },
                    {
                        title: "Ruck",
                        url: "https://www.ruck.co.uk/feed/",
                    },
                    {
                        title: "Eurekalert",
                        url: "https://www.eurekalert.org/rss.xml",
                    },
                    {
                        title: "New Scientist",
                        url: "https://www.newscientist.com/feed/home/?cmpid=RSS%7CNSNS-Home",
                    },
                    {
                        title: "Space.com",
                        url: "https://www.space.com/feeds/all",
                    },
                    {
                        title: "Pitchfork",
                        url: "http://pitchfork.com/rss/news/",
                    },
                    {
                        title: "Fact Mag",
                        url: "https://www.factmag.com/feed/",
                    },
                    {
                        title: "The Economist",
                        url: "http://www.economist.com/sections/united-states/rss.xml",
                    },
                    {
                        title: "The New Yorker",
                        url: "https://www.newyorker.com/feed/everything",
                    },
                    {
                        title: "The Daily Mail",
                        url: "https://www.dailymail.co.uk/home/index.rss",
                    },
                    {
                        title: "The Telegraph",
                        url: "https://www.telegraph.co.uk/rss.xml",
                    },
                    {
                        title: "The Sun",
                        url: "https://www.thesun.co.uk/feed/",
                    },
                    {
                        title: "Reddit",
                        url: "http://www.reddit.com/.rss",
                    },
                ],
                showSourceTitle: true,
                showPublishDate: true,
                showDescription: true,
            },
        },
        {
            module: "MMM-GoogleMapsTraffic",
            position: "top_left",
            config: {
                key: "AIzaSyB8Q_NCR9A2bnpWkYfiVWE2oMXlVvgSiF4",
                lat: 44.9706756,
                lng: -93.3315183,
                mapTypeId: "roadmap",
                height: "300px",
                width: "400px",
                styledMapType: "standard",
                disableDefaultUI: true,
                backgroundColor: "hsla(0, 0%, 0%, 0)",
                markers: [
                    {
                        lat: 44.9706756,
                        lng: -93.3315183,
                        fillColor: "#9966ff",
                    },
                ],
            },
        },
        {
            module: "MMM-Traffic",
            position: "top_left",
            classes: "dimmed medium", //optional, default is "bright medium", only applies to commute info not route_name
            config: {
                api_key: "AIzaSyB8Q_NCR9A2bnpWkYfiVWE2oMXlVvgSiF4",
                travelMode: "DRIVING",
                origin: "Eden Prairie, MN",
                destination: "Downtown, St Paul, MN",
                route_name: "Home to Work",
                changeColor: true,
                showGreen: true,
                limitYellow: 5, // Greater than 5% of journey time due to traffic
                limitRed: 20, // Greater than 20% of journey time due to traffic
                traffic_model: "pessimistic",
                interval: 1200000, // 2 minutes
                allTime: true,
                showWeekend: true,
            },
        },
        {
            module: "MMM-MyScoreboard",
            position: "top_right",
            classes: "default everyone",
            header: "My Scoreboard",
            config: {
                showLeagueSeparators: true,
                colored: true,
                viewStyle: "mediumLogos",
                sports: [
                    {
                        league: "NHL",
                        groups: ["Atlantic"],
                    },
                    {
                        league: "NBA",
                        teams: ["TOR"],
                        groups: ["Pacific", "Central"],
                    },
                    {
                        league: "MLB",
                        teams: ["TOR", "CHW", "NYY"],
                    },
                    {
                        league: "NFL",
                        teams: ["BUF", "NYJ", "NYG"],
                    },
                    {
                        league: "CFL",
                        teams: [
                            "AFA",
                            "AKR",
                            "ALA",
                            "APP",
                            "ARIZ",
                            "ARK",
                            "ARMY",
                            "ARST",
                            "ASU",
                            "AUB",
                            "BALL",
                            "BAY",
                            "BC",
                            "BGSU",
                            "BSU",
                            "BUFF",
                            "BYU",
                            "CAL",
                            "CCU",
                            "CHAR",
                            "CIN",
                            "CLEM",
                            "CMU",
                            "COLO",
                            "CONN",
                            "CSU",
                            "DUKE",
                            "ECU",
                            "EMU",
                            "FAU",
                            "FIU",
                            "FLA",
                            "FRES",
                            "FSU",
                            "GASO",
                            "GAST",
                            "GT",
                            "HAW",
                            "HOU",
                            "IDHO",
                            "ILL",
                            "IND",
                            "IOWA",
                            "ISU",
                            "KENT",
                            "KSU",
                            "KU",
                            "LOU",
                            "LSU",
                            "LT",
                            "M-OH",
                            "MD",
                            "MEM",
                            "MIAMI",
                            "MICH",
                            "MINN",
                            "MISS",
                            "MIZ",
                            "MRSH",
                            "MSST",
                            "MSU",
                            "MTSU",
                            "NAVY",
                            "NCST",
                            "ND",
                            "NEB",
                            "NEV",
                            "NIU",
                            "NMSU",
                            "NW",
                            "ODU",
                            "OHIO",
                            "OKLA",
                            "OKST",
                            "ORE",
                            "ORST",
                            "OSU",
                            "PITT",
                            "PSU",
                            "PUR",
                            "RICE",
                            "RUTG",
                            "SC",
                            "SDSU",
                            "SJSU",
                            "SMU",
                            "STAN",
                            "SYR",
                            "TA&M",
                            "TCU",
                            "TEM",
                            "TENN",
                            "TEX",
                            "TLSA",
                            "TOL",
                            "TROY",
                            "TTU",
                            "TULN",
                            "TXST",
                            "UAB",
                            "UCF",
                            "UCLA",
                            "UGA",
                            "UK",
                            "ULL",
                            "ULM",
                            "UMASS",
                            "UNC",
                            "UNLV",
                            "UNM",
                            "UNT",
                            "USA",
                            "USC",
                            "USF",
                            "USM",
                            "USU",
                            "UTAH",
                            "UTEP",
                            "UTSA",
                            "UVA",
                            "VAN",
                            "VT",
                            "WAKE",
                            "WASH",
                            "WIS",
                            "WKU",
                            "WMU",
                            "WSU",
                            "WVU",
                            "WYO",
                        ],
                    },
                    {
                        league: "NCAAM_MM",
                        label: "March Madness",
                    },
                ],
            },
        },
    ],
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
    module.exports = config;
}
