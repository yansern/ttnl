import promisePolyfill from 'es6-promise';
import 'isomorphic-fetch';
import $ from 'jquery';

promisePolyfill.polyfill();

function getFeed(username) {
  // return new Promise((resolve) => { resolve(fallbackFeed) }); // eslint-disable-line

  return fetch(`//allow-any-origin.appspot.com/http://www.instagram.com/${ username }`)
    .then(response => response.text())
    .then(html => {
      return $(html)
        .filter('script:contains(_sharedData)')
        .text()
        .replace('window._sharedData = ', '')
        .slice(0, -1);
    })
    .then(json => {
      let feed = [];

      try {
        const data = eval(`(${ json })`); // eslint-disable-line

        feed = data.entry_data.ProfilePage['0'].user.media.nodes.map(node => {
          return {
            id: node.id,
            thumbnail_src: node.thumbnail_src,
            caption: node.caption,
          };
        });
      } catch (e) {
        feed = fallbackFeed;
      }

      return feed;
    });
}

// Just in case the API fails to retrieve data, fallback to this feed
const fallbackFeed = [{"id":"1581928053020454246","thumbnail_src":"https://scontent-ort2-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/20836864_1957410417835295_5885810800047685632_n.jpg","caption":"Call us a true digital agency... #digitalagency #tamtam #uptodate #callboy"},{"id":"1571011575739855523","thumbnail_src":"https://scontent-ort2-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c109.0.862.862/20399028_592656041122460_1848931778241232896_n.jpg","caption":"Welcome to the jungle 🎶🌿 #gunsnroses #office #amsterdam #urbanjungle #deptagency #tamtam"},{"id":"1566646999540037876","thumbnail_src":"https://scontent-ort2-1.cdninstagram.com/t51.2885-15/s640x640/e15/20347092_223620248161052_6417970051319595008_n.jpg","caption":"Read all about the design process of a beautiful corporate website: kempen.com. Link in bio! #kempen #website #banking #design #website"},{"id":"1562257635573712081","thumbnail_src":"https://scontent-ort2-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c124.0.831.831/20180533_952165241591663_4721747351411097600_n.jpg","caption":"A good start is half the work 🍌🍎 #newday #takeyourvitamins #anappleadaykeepsthedoctoraway"},{"id":"1558849321217208951","thumbnail_src":"https://scontent-ort2-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c180.0.720.720/20066048_643796315819367_4540820398073184256_n.jpg","caption":"Happy Friday! 🍔 #aboutlastfriday  #tamtam #bbq #ohohindigo"},{"id":"1550810157368305946","thumbnail_src":"https://scontent-ort2-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/19625114_236890463485397_4556227412131577856_n.jpg","caption":"Get ready for some fainting designers on the front row: Stefan Sagmeister is speaking at www.deptfestival.com #deptfestival2017 #thuishaven #amsterdam #festival"},{"id":"1543391167167798891","thumbnail_src":"https://scontent-ort2-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c128.0.768.768/19425572_319526618459543_3053195253184987136_n.jpg","caption":"Cheers to the next challenge! 🎓 #goodbye #design #interns #neverforget #HvA"},{"id":"1542121354541811592","thumbnail_src":"https://scontent-ort2-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c145.0.790.790/19425164_1720981811527910_3858415910817628160_n.jpg","caption":"@ivokleppe is taking his creative thinking to a higher level. #thinking #outofthestairs #ideaal #stopandstairs"},{"id":"1531783529967596751","thumbnail_src":"https://scontent-ort2-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/18947868_1894113130810883_1428693215719981056_n.jpg","caption":"Man, man, man what a dogsweather. 🐶 ☔️#rainingcatsanddogs #dutchweather #happywetday #officepup"},{"id":"1526722796661610132","thumbnail_src":"https://scontent-ort2-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c30.0.1001.1001/18812572_263547357451968_6236976143736504320_n.jpg","caption":"Bom dia! Recruiting some serious dev talent in the sunny Porto. ☀️ #awkbart #developers #vamos #aventura #feup"},{"id":"1518091549668441643","thumbnail_src":"https://scontent-ort2-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/18512850_1855904474670371_8218297136370941952_n.jpg","caption":"Our @mattvanvoorst is nominated for a DIA Pro Best Talent! #congrats #dontstealhim"},{"id":"1507289422738088768","thumbnail_src":"https://scontent-ort2-1.cdninstagram.com/t51.2885-15/s640x640/e15/18161624_280921859033856_7026613775255994368_n.jpg","caption":"The TamTam logo, if iconic artists designed it! #pietmondrian #jacksonpollock #keithharing #roylichtenstein #vincentvangogh #iconicart #tamtamhome #deptagency"}]; // eslint-disable-line

export default {
  getFeed,
};
