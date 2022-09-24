import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export class News extends Component {
  //   articles = [

  //     {
  //       "source": {
  //           "id": "cnn",
  //           "name": "CNN"
  //       },
  //       "author": "Tim Lister, Julia Kesaieva, Olga Voitovych, Simone McCarthy, Mick Krever",
  //       "title": "Occupied parts of Ukraine vote on joining Russia in 'sham' referendums - CNN",
  //       "description": "Four Russian-occupied areas of Ukraine began voting in referendums on joining Russia, according to their separatist leaders, in a move that raises the stakes of Moscow's invasion seven months after fighting began.",
  //       "url": "https://www.cnn.com/2022/09/23/europe/occupied-ukraine-referendum-russia-intl-hnk/index.html",
  //       "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/220923081943-01-ukraine-referendum.jpg?q=w_800,c_fill",
  //       "publishedAt": "2022-09-23T14:39:00Z",
  //       "content": "Four Russian-occupied areas of Ukraine began voting in referendums on joining Russia, according to their separatist leaders, in a move that raises the stakes of Moscows invasion seven months after fi… [+7093 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "BBC News"
  //       },
  //       "author": "https://www.facebook.com/bbcnews",
  //       "title": "Mini-budget: What it means for you and your finances - BBC",
  //       "description": "Chancellor Kwasi Kwarteng has delivered what the government calls a \"fiscal event\". Here is how it affects you.",
  //       "url": "https://www.bbc.com/news/business-63001463",
  //       "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/16513/production/_123111419_energy_1_woman_checking_bills_getty.jpg",
  //       "publishedAt": "2022-09-23T13:16:30Z",
  //       "content": "By Kevin PeacheyPersonal finance correspondent, BBC News\r\nDescribed as a mini-budget, or a fiscal event, there was enough affecting your finances in this statement to fill any full-scale Budget.\r\nWe … [+5255 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "The Guardian"
  //       },
  //       "author": "https://www.theguardian.com/profile/chris-stein",
  //       "title": "Embattled Trump aims funding firepower at loyal Republicans – live updates - The Guardian US",
  //       "description": "Trump allies launch Super Pac to funnel millions to Maga Republicans as speculation about White House run grows",
  //       "url": "https://www.theguardian.com/us-news/live/2022/sep/23/trump-biden-midterms-republicans-democrats-us-politics-live-updates",
  //       "urlToImage": "https://i.guim.co.uk/img/media/acd63662155d7355afb934dd05019cc58ef71e2b/0_100_3000_1800/master/3000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=968054956bce58cf3f3b6007c6604b0a",
  //       "publishedAt": "2022-09-23T12:50:00Z",
  //       "content": "Democrats have failed you, elect us instead. Thats the message top House Republican Kevin McCarthy delivers in the video below, which was released ahead of the debut of the partys Commitment to Ameri… [+8495 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": "axios",
  //           "name": "Axios"
  //       },
  //       "author": "Erin Doherty",
  //       "title": "Breyer: \"I am very, very, very sorry\" Roe was overturned - Axios",
  //       "description": "\"Was I happy about it? Not for an instant. Did I do everything I could to persuade people? Of course, of course.\"",
  //       "url": "https://www.axios.com/2022/09/23/stephen-breyer-supreme-court-interview-roe-v-wade",
  //       "urlToImage": "https://images.axios.com/oIy_MnI8hsIyVY0EsTWXctz8L9U=/0x0:5644x3175/1366x768/2022/09/23/1663932059551.jpg",
  //       "publishedAt": "2022-09-23T12:29:54Z",
  //       "content": "Former Supreme Court Justice Stephen Breyer, in his first televised interview since retiring from the bench in June, lamented the court's reversal of Roe v. Wade, saying he is \"very, very, very sorry… [+1163 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "U.S. Soccer"
  //       },
  //       "author": null,
  //       "title": "International Friendly: USA vs. Japan - Lineup, Schedule & TV Channels - U.S. Soccer",
  //       "description": "International Friendly;\r\nDüsseldorf Arena, Düsseldorf, Germany;\r\nPre-Game Coverage: 8 a.m. ET on ESPN2, ESPN+; 8:20 a.m. ET on UniMás, TUDN;\r\nKickoff: 8:26 a.m. ET on ESPN2, ESPN+, UniMás, TUDN",
  //       "url": "https://www.ussoccer.com/stories/2022/09/international-friendly-usmnt-vs-japan-starting-xi-lineup-notes-tv-channels-start-time",
  //       "urlToImage": "https://cdn.ussoccer.com/-/media/project/ussf/2022-article-images/mntjpn_92322_starting_xi1920x1080.ashx?h=1080&la=en-US&w=1920&rev=1831e1a585414717beacf59fab5becbd&hash=5A3BC9150BC4BE02BA926FAFA053EF4A",
  //       "publishedAt": "2022-09-23T12:28:29Z",
  //       "content": "LINEUP NOTESJapan vs. USMNTInternational FriendlySeptember 23, 2022Düsseldorf Arena, Düsseldorf, GermanyPre-Game Coverage: 8 a.m. ET on ESPN2, ESPN+; 8:20 a.m. ET on UniMás, TUDNKickoff: 8:26a.m. ET … [+4022 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "Orlando Sentinel"
  //       },
  //       "author": "Garfield Hylton, Richard Tribou",
  //       "title": "Tropical Depression Nine forms, could hit Florida as Hurricane Hermine next week - Orlando Sentinel",
  //       "description": "Tropical Depression Nine formed in the Caribbean on Friday with a path that could bring it to Florida next week as Hurricane Hermine.",
  //       "url": "https://www.orlandosentinel.com/weather/hurricane/os-ne-tropical-depression-nine-in-carribbean-could-hit-florida-next-week-20220923-4b622veigrh4fkpwyxukkhliuq-story.html",
  //       "urlToImage": "https://www.orlandosentinel.com/resizer/2FTHpIRR0POOyCwyL2r_1lAGT1I=/1200x630/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/tronc/IPXMJJCTHZDWPNEEEUOGBYFYEU.jpg",
  //       "publishedAt": "2022-09-23T12:22:30Z",
  //       "content": "Tropical Depression Nine formed in the Caribbean on Friday with a path that could bring it to Florida next week as Hurricane Hermine.\r\nIn its 5 a.m. update, the National Hurricane Center said the sto… [+6392 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "CNBC"
  //       },
  //       "author": "Reuters",
  //       "title": "Apple will sponsor Super Bowl halftime show starting in February - CNBC",
  //       "description": "The National Football League has reached a multiyear deal with Apple Music to sponsor the Super Bowl Halftime Show, beginning with the game in February 2023.",
  //       "url": "https://www.cnbc.com/2022/09/23/apple-will-sponsor-super-bowl-halftime-show-starting-in-february.html",
  //       "urlToImage": "https://image.cnbcfm.com/api/v1/image/107014745-1644809643430-gettyimages-1370409623-rlc24601_68e3c6e3-1071-4bde-b028-93a78159365e.jpeg?v=1663929428&w=1920&h=1080",
  //       "publishedAt": "2022-09-23T10:37:08Z",
  //       "content": "The National Football League has reached a multiyear deal with Apple Music to sponsor the Super Bowl Halftime Show, beginning with the American football championship game in February 2023, the league… [+988 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": "the-washington-post",
  //           "name": "The Washington Post"
  //       },
  //       "author": "Kelly Kasulis Cho",
  //       "title": "Alex Jones lashes out at trial over Sandy Hook hoax claims - The Washington Post",
  //       "description": "The Infowars founder lashed out at lawyers during a Connecticut trial that will determine what damages he has to pay families of victims of the school shooting.",
  //       "url": "https://www.washingtonpost.com/nation/2022/09/23/alex-jones-trial-sandy-hook/",
  //       "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/09-23-2022/t_cb3b1491c5d44780aa46b00fba165c85_name_alex_jones2.jpg&w=1440",
  //       "publishedAt": "2022-09-23T10:34:03Z",
  //       "content": "Infowars founder Alex Jones lashed out as he testified in a tense Connecticut courtroom on Thursday as part of a defamation trial that will determine how much he should pay to the relatives of victim… [+4706 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "Video Games Chronicle"
  //       },
  //       "author": "Tom Ivan",
  //       "title": "A white Xbox Series X console has been spotted in a Logitech advert - Video Games Chronicle",
  //       "description": "Outside of special editions, Microsoft's console has only been available in black since launch…",
  //       "url": "https://www.videogameschronicle.com/news/a-white-xbox-series-x-console-has-been-spotted-in-a-logitech-advert/",
  //       "urlToImage": "https://www.videogameschronicle.com/files/2022/09/white-xbox-console.jpg",
  //       "publishedAt": "2022-09-23T10:33:30Z",
  //       "content": "A new Logitech advert shows what appears to be a white version of Microsofts Xbox Series X console.\r\nOutside of special editions, Xbox Series X has only been available in black since its November 202… [+1160 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "Phys.Org"
  //       },
  //       "author": "Issam AHMED",
  //       "title": "NASA gears up to deflect asteroid, in key test of planetary defense - Phys.org",
  //       "description": "Bet the dinosaurs wish they'd thought of this.",
  //       "url": "https://phys.org/news/2022-09-nasa-gears-deflect-asteroid-key.html",
  //       "urlToImage": "https://scx2.b-cdn.net/gfx/news/2022/a-man-sits-at-his-work.jpg",
  //       "publishedAt": "2022-09-23T08:31:37Z",
  //       "content": "Bet the dinosaurs wish they'd thought of this.\r\nNASA on Monday will attempt a feat humanity has never before accomplished: deliberately smacking a spacecraft into an asteroid to slightly deflect its … [+4735 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": "politico",
  //           "name": "Politico"
  //       },
  //       "author": null,
  //       "title": "House GOP deploys a 2023 agenda it can use in November - POLITICO",
  //       "description": "Republicans say their \"Commitment to America\" is a guide to a future majority. Key provisions were tested to serve as a unifying national message this fall.",
  //       "url": "https://www.politico.com/news/2022/09/23/house-gop-2023-mccarthy-00058455",
  //       "urlToImage": "https://static.politico.com/cb/51/1f6d8ca64498933a480bc90a1bc0/https-delivery.gettyimages.com/downloads/1342094918",
  //       "publishedAt": "2022-09-23T08:30:00Z",
  //       "content": "And while they vow to turn their blueprint into House-passed bills next year, not just fodder for the final pre-midterms sprint, many of Republicans top issues from supply chains in China to police h… [+5017 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "SciTechDaily"
  //       },
  //       "author": null,
  //       "title": "COVID-19 Infections Increase Risk of Long-Term Brain Problems: Strokes, Depression, Anxiety, Migraines - SciTechDaily",
  //       "description": "Strokes, seizures, memory, and movement disorders are among problems that develop in the first year after infection. If you’ve had COVID-19, it may still be messing with your brain. According to new research, those who have been infected with the SARS-CoV-2 v…",
  //       "url": "https://scitechdaily.com/covid-19-infections-increase-risk-of-long-term-brain-problems-strokes-depression-anxiety-migraines/",
  //       "urlToImage": "https://scitechdaily.com/images/COVID-19-Brain.jpg",
  //       "publishedAt": "2022-09-23T08:28:46Z",
  //       "content": "ByWashington University in St. LouisSeptember 23, 2022\r\nPeople who have had COVID-19 are at an elevated risk of developing neurological conditions within the first year after infection, according to … [+10040 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "CNBC"
  //       },
  //       "author": "Sam Meredith",
  //       "title": "Putin's 'incredibly dangerous' nuclear threats raise the risk of an unprecedented disaster - CNBC",
  //       "description": "\"Coming from the person who has the sole decision-making power regarding Russian nuclear weapons this will have to be taken seriously,\" one analyst said.",
  //       "url": "https://www.cnbc.com/2022/09/23/russia-ukraine-war-putins-nuclear-threats-raise-the-risk-of-disaster.html",
  //       "urlToImage": "https://image.cnbcfm.com/api/v1/image/107039684-1648734949219-gettyimages-1222402724-putinparade68.jpeg?v=1663919372&w=1920&h=1080",
  //       "publishedAt": "2022-09-23T07:49:32Z",
  //       "content": "Speaking in a rare, televised address on Wednesday, Putin warned that if the territorial integrity of Russia is threatened, the Kremlin would \"certainly use all the means at our disposal to protect R… [+6512 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": "associated-press",
  //           "name": "Associated Press"
  //       },
  //       "author": "Frances D'emilio",
  //       "title": "'Crucial' vote could move Italy to right; many might boycott - The Associated Press",
  //       "description": "ROME (AP) — Italians will vote on Sunday in what is being billed as a crucial election as Europe reels from repercussions of Russia's war in Ukraine .",
  //       "url": "https://apnews.com/a8d0f73867b19a8f22b994d90d637f4d",
  //       "urlToImage": "https://storage.googleapis.com/afs-prod/media/65211fafe4b842ebb4f7c7a5c080e586/3000.jpeg",
  //       "publishedAt": "2022-09-23T06:51:34Z",
  //       "content": "ROME (AP) Italians will vote on Sunday in what is being billed as a crucial election as Europe reels from repercussions of Russias war in Ukraine. For the first time in Italy since the end of World W… [+6167 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "CBS Sports"
  //       },
  //       "author": "Bryan DeArdo",
  //       "title": "Steelers vs. Browns score, takeaways: Nick Chubb, Amari Cooper power Cleveland past Pittsburgh - CBS Sports",
  //       "description": "Cleveland's offensive duo shined on prime time",
  //       "url": "https://www.cbssports.com/nfl/news/steelers-vs-browns-score-takeaways-nick-chubb-amari-cooper-power-cleveland-past-pittsburgh/live/",
  //       "urlToImage": "https://sportshub.cbsistatic.com/i/r/2022/09/23/74b35def-9b2a-413a-832a-94afe0b59286/thumbnail/1200x675/380dc025d646683467a61559f83e2000/chubb-pitt.png",
  //       "publishedAt": "2022-09-23T06:21:00Z",
  //       "content": "Four days after their gut-wrenching loss, the Browns rebounded by defeating their longtime rivals at home on \"Thursday Night Football.\" Aided by Nick Chubb and a strong second half by their defense, … [+5932 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": "fox-news",
  //           "name": "Fox News"
  //       },
  //       "author": "Lawrence Richard",
  //       "title": "Florida Democrat sues DeSantis for flying migrants to Martha's Vineyard: 'He can't comply with the law' - Fox News",
  //       "description": "Florida state Sen. Jason Pizzo announced a lawsuit against Gov. Ron DeSantis after he orchestrated the transportation of 48 Venezuelan migrants from Texas to Martha's Vineyard.",
  //       "url": "https://www.foxnews.com/politics/florida-democrat-sues-desantis-flying-migrants-marthas-vineyard-cant-comply-with-law",
  //       "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/09/DeSantis-rips-into-outrage-over-Marthas-Vineyard-flights-I-didnt-hear-a-peep-about-Biden-flights.jpg",
  //       "publishedAt": "2022-09-23T06:17:54Z",
  //       "content": "A Florida state lawmaker is suing Gov. Ron DeSantis and other state officials for orchestrating the transportation of migrants from Texas to Marthas Vineyard in Massachusetts.\r\nState Sen. Jason Pizzo… [+4310 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "CNBC"
  //       },
  //       "author": "Alex Harring",
  //       "title": "Futures fall following another day of losses after Fed rate hike, sell-offs - CNBC",
  //       "description": "Futures were lower on Friday morning as investors continued responding to the Fed's decision.",
  //       "url": "https://www.cnbc.com/2022/09/22/futures-inch-higher-following-another-day-of-losses-after-fed-rate-hike-sell-offs.html",
  //       "urlToImage": "https://image.cnbcfm.com/api/v1/image/107122924-1663861625547-nys2.jpg?v=1663884877&w=1920&h=1080",
  //       "publishedAt": "2022-09-23T05:23:00Z",
  //       "content": "Stock futures were lower on Friday morning as investors continued reacting to the Fed's rate hike and concerns over a potential economic downswing.\r\nThe Nasdaq 100 was down 0.48%. Dow Jones Industria… [+1769 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "Hollywood Reporter"
  //       },
  //       "author": "Christy Piña",
  //       "title": "KTLA Anchor Mark Mester Fired After On-Air Defense of Former Colleague Lynette Romero - Hollywood Reporter",
  //       "description": "KTLA fired anchor Mark Mester days after he was suspended for going off-script and calling out how the station handled the resignation of his longtime co-anchor Lynette Romero, The Hollywood Reporter has learned. Station general manager Janene Drafs announced…",
  //       "url": "https://www.hollywoodreporter.com/news/general-news/mark-mester-fired-ktla-lynette-romero-1235226008/",
  //       "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2022/09/Mark-Mester.jpg?w=1024",
  //       "publishedAt": "2022-09-23T03:04:26Z",
  //       "content": "KTLA fired anchor Mark Mester days after he was suspended for going off-script and calling out how the station handled the resignation of his longtime co-anchor Lynette Romero, The Hollywood Reporter… [+1611 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "ESPN"
  //       },
  //       "author": null,
  //       "title": "Boston Celtics suspend coach Ime Udoka for 2022-23 season, effective immediately - ESPN",
  //       "description": "Boston's largely unprecedented suspension of coach Ime Udoka is effective immediately, and a decision about his future with the organization will be made later, the team said.",
  //       "url": "https://www.espn.com/nba/story/_/id/34646067/boston-celtics-suspend-coach-ime-udoka-2022-23-season-effective-immediately",
  //       "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0107%2Fr958805_1024x576_16%2D9.jpg",
  //       "publishedAt": "2022-09-23T03:01:02Z",
  //       "content": "The Boston Celtics have suspended coach Ime Udoka for the 2022-23 season, the team announced Thursday night.\r\nThe Celtics cited violations of team policies in their announcement. Sources previously t… [+2152 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": "politico",
  //           "name": "Politico"
  //       },
  //       "author": null,
  //       "title": "Supreme Court says Alabama can carry out execution - POLITICO",
  //       "description": "Justices in a 5-4 decision vacated an injunction that had prevented the lethal injection of Alan Miller going forward.",
  //       "url": "https://www.politico.com/news/2022/09/22/supreme-court-says-alabama-can-carry-out-execution-00058513",
  //       "urlToImage": "https://static.politico.com/39/87/cb07a88741b9a1022033ecb0bdc5/death-penalty-alabama-88958.jpg",
  //       "publishedAt": "2022-09-23T02:46:38Z",
  //       "content": "Miller testified that he had turned in paperwork four years ago selecting nitrogen hypoxia as his execution method, putting it in a slot in his cell door at the Holman Correctional Facility for a pri… [+2445 chars]"
  //   }

  //   ]

  static defaultProps = {
    country: 'in',
    pageSize: 2,
    category: 'general',
  }
  static propsTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  constructor() {
    super();
    this.state = {
      //this.articles if use internal array
      articles: [],
      loading: false,
      page: 1,
    };
  }
  //Runs After Render
  async componentDidMount() {
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8f542ee588c4486ab5f6e5ec14a6a9cf&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading:false
    });
  }
  handleprevClick = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8f542ee588c4486ab5f6e5ec14a6a9cf&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    });
  };
  handleNextClick = async () => {
    console.log("Next");
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8f542ee588c4486ab5f6e5ec14a6a9cf&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);

      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false
      });
    }
  };
  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center" style={{margin: '35px 0px'}}>NewsMonkey - Top Headlines</h2>
        { this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 45) : ""}
                  description={element.description ? element.description.slice(0, 88) : ""}
                  imageUrl={element.urlToImage}newsUrl={element.url} author={element.author}
                  date={element.publishedAt} sourceNameForCard={element.source.name}
                 
                />
              </div>
           
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handleprevClick}
          >
            {" "}
            &larr; Prev
          </button>
          <button
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
