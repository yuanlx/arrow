var arrowSandbox = {};

arrowSandbox.Enums = {
  COLOR_SCHEMES: {
    'forced defaults': {
      'border': '',
      'background': 'ffffff',
      'title': '0000ff',
      'body': '0',
      'url': '008000'
    },
    'blue url': {
      'border': '',
      'background': 'ffffff',
      'title': '0033cc',
      'body': '444444',
      'url': '0033cc'
    },
    'black title, blue url': {
      'border': '',
      'background': 'ffffff',
      'title': '333333',
      'body': '444444',
      'url': '0066cc'
    },
    'grey text': {
      'border': '',
      'background': '0',
      'title': 'ffffff',
      'body': 'ffffff',
      'url': '0'
    },
    'black title': {
      'border': '',
      'background': 'ffffff',
      'title': '333333',
      'body': '666666',
      'url': '0'
    },
    'black text on grey background': {
      'border': '',
      'background': 'f0f0f0',
      'title': '222222',
      'body': '333333',
      'url': '008000'
    },
    'white text on blue background': {
      'border': '',
      'background': '356fa8',
      'title': 'ffffff',
      'body': 'ffffff',
      'url': '0'
    },
    'blue border': {'border': '0066cc'},
    'auto': undefined
  },
  FONT_FACES: {
    'auto': '',
    'Arial': 'arial',
    'Comic Sans': 'comic-sans',
    'Georgia': 'georgia',
    'Helvetica': 'helvetica',
    'Open Sans': 'open-sans',
    'Open Sans  Light': 'open-sans-light',
    'Roboto Light': 'roboto-light',
    'Slabo 27': 'slabo-27',
    'Tahoma': 'tahoma',
    'Times': 'times',
    'Lora': 'lora',
    'Verdana': 'verdana',
    'Ubuntu Light': 'ubuntu-light'
  },
  HOSTS: {
    AA_0_PRODUCTION: 'googleads.g.doubleclick.net',
    AA_1_SARA: 'happykins.mtv.corp.google.com:8080',
    AA_2_LOCALHOST: 'localhost:8080',
    AA_3_BOWTEST: '0.cat2-bowtest.bow.bowtest-owners.vk.borg.google.com',
    AA_4_CAFE_SANDBOX: 'cafe-sandbox.googleusercontent.com',
    ALEX: 'stormbird.mtv.corp.google.com:8080',
    ALEXANDER: 'alexmermel0.mtv.corp.google.com:8080',
    CLYDE: 'clydeli.mtv.corp.google.com:8080',
    DANIELLE: 'nashda.mtv.corp.google.com:8080',
    KRISTEN: 'kwchui.mtv.corp.google.com:8080',
    LIYUAN: 'llychome.mtv.corp.google.com:8080',
    LUONA: 'luona.mtv.corp.google.com:8080',
    LUYAO: 'luyaochen.mtv.corp.google.com:8080',
    MATT: 'friz.mtv.corp.google.com:8080',
    MIKITA: 'nbeloglazov0.mtv.corp.google.com:8080',
    NATE: 'cash.mtv.corp.google.com:8080',
    OMER: 'obokaman.mtv.corp.google.com:8080',
    PRIYANK: 'prnk0.mtv.corp.google.com:8080',
    RICKY: 'yingjia.mtv.corp.google.com:8080',
    RUIJUN: 'ruijunwang0.mtv.corp.google.com:8080',
    STEPHEN: 'syuan.mtv.corp.google.com:8080',
    TRICIA: 'hinkson.mtv.corp.google.com:8080',
    WEIMING: 'weimingliu.sha.corp.google.com:8080',
  },
  // More country IPs can be found at
  // googledata/wireless/carriers/carrier-ips.txt
  COUNTRIES: {
    'auto': '',
    'Australia (AU)': '1.123.45.1',
    'Canada (CA)': '65.92.202.1',
    'China (CN)': '39.180.12.1',
    'France (FR)': '80.214.32.1',
    'Germany (DE)': '46.115.32.1',
    'United Kingdom (GB)': '92.40.149.1',
    'Hong Kong (HK)': '124.217.128.1',
    'Israel (IL)': '46.210.65.1',
    'Japan (JP)': '36.240.128.1',
    'Mexico (MX)': '187.190.35.1',
    'South Korea (KR)': '1.100.200.1',
    'Spain (ES)': '37.218.48.1',
    'United States (US)': '12.20.118.1',
  },
  LANGUAGES: {
    'auto': '',
    'Arabic': 'ar',
    'Bulgarian': 'bg',
    'Catalan': 'ca',
    'Chinese Simplified': 'zh-CN',
    'Chinese Traditional': 'zh-TW',
    'Croatian': 'hr',
    'Czech': 'cs',
    'Danish': 'da',
    'Dutch': 'nl',
    'English': 'en',
    'Estonian': 'et',
    'Finnish': 'fi',
    'French': 'fr',
    'German': 'de',
    'Greek': 'el',
    'Hebrew': 'iw',
    'Hindi': 'hi',
    'Hungarian': 'hu',
    'Indonesian': 'id',
    'Italian': 'it',
    'Japanese': 'ja',
    'Korean': 'ko',
    'Latvian': 'lv',
    'Lithuanian': 'lt',
    'Malay': 'ms',
    'Norwegian': 'no',
    'Polish': 'pl',
    'Portugese': 'pt',
    'Romanian': 'ro',
    'Russian': 'ru',
    'Slovenian': 'sl',
    'Serbian': 'sr',
    'Slovak': 'sk',
    'Spanish': 'es',
    'Swedish': 'sv',
    'Thai': 'th',
    'Turkish': 'tr',
    'Ukranian': 'uk',
    'Vietnamese': 'vi'
  },
  LAYOUTS: {
    'classic (three line)': '3',
    'two line': '2',
    'one line': '1',
    'auto': ''
  },
  USER_AGENTS: {
    IE9: 'Mozilla/5.0 (MSIE 9.0; Windows NT 6.1; Trident/5.0)',
    IE8:
        'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.0; WOW64; Trident/4.0; SLCC1)',
    IE7:
        'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.0; WOW64; Trident/4.0; SLCC1)',
    IE6:
        'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.0; WOW64; Trident/4.0; SLCC1)',
    'Opera9.8':
        'Opera/9.80 (Macintosh; Intel Mac OS X; U; en) Presto/2.2.15 Version/10.00',
    Firefox15:
        'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:15.0) Gecko/20120427 Firefox/15.0a1',
    Safari5:
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_3) AppleWebKit/534.55.3 (KHTML, like Gecko) Version/5.1.3 Safari/534.53.10',
    'Android Phone':
        'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5 Build/LMY48B)  AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.83 Safari/537.36',
    'Android Tablet':
        'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 7 Build/MRA58V) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.83 Safari/537.36',
    iPhone:
        'Mozilla/5.0 (iPhone; CPU iPhone OS 10_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53',
    iPad:
        'Mozilla/5.0(iPad; U; CPU iPhone OS 10_0 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B314 Safari/531.21.10'
  },
  SCREEN_SIZES: [
    '360x640',  // Android top size
    '320x568',  // iOS top size
    '375x667',  // iOS top size
    '375x812',  // iphone x
    '480x800', '768x1024', '720x1280', '320x480', '320x534',  '480x854',
    '540x960', '240x320',  '414x736',  '320x570', '1280x800', '1080x1920',
    '640x360', '320x240',  '360x592',  '300x371', '600x1024',
  ],

  // Targeting urls is mapping from a url to web property it belongs to.
  // Since go/site-level-approvals-dd we no longer can use any page url with
  // any web property.
  // This list is compiled by going to powerdrill and looking at top
  // domains by clicks.
  TARGETING_URLS: {
    'www.naija.ng': 'ca-pub-8095939199768966',
    'www.elkhadra.com': 'ca-pub-8963598323948591',
    'm.accuweather.com': 'ca-pub-5771594739411148',
    'www.tuko.co.ke': 'ca-pub-8095939199768966',
    // Arrow team website and test web property.
    'arrowsamples.com': 'ca-pub-8588820008944775',
  },

  TARGET_URLS_2: {},

  NATIVE_TYPES: {
    'StyleFrame': 'styleFrame',
    'Native Express': 'nativeExpress',
    'InArticle': 'nativeInArticle',
  },

  NATIVE_STYLES: [
    '',
    'default',
    'multi_ad_with_image',
    'multi_ad_without_image',
    'one_ad_with_image',
    'one_ad_without_image',
    'one_ad_with_url',
    'one_ad_with_button',
  ]
};

arrowSandbox.Settings = {
  // from ads/base/enums.h
  CreativeTypes: {
    desktop: {
      'text': 1,
      'static image': 2,
      'dynamic image': 3,
      'flash': 4,
      '3pas': 17,
      'flash template': 25,
      'html5 template': 46
    },
    mweb: {
      'text': 1,
      'static image': 2,
      'dynamic image': 3,
      '3pas': 17,
      'text template': 26,
      'html5 template': 46,
      'image template': 57
    },
    apps: {
      'text': 1,
      'image': 2,
      'text template': 26,
      'video template': 28,
      'image template': 57,
      'html5 template': 46,
      'backfill text': -1,
      'backfill image': -2
    },
    pla: {
      'none': -1,
      'text': 1,
      'static image': 2,
      'dynamic image': 3,
      '3pas': 17,
      'html5 template': 46
    },
    native: {
      'text': 1,
    }
  },
  DebugParams: [
    '', 'c', 'r', 'rp', 'log', 'fo', 'fp', 'fp2', 't', 's1t', 'rcv', 'rdcfg',
    'rr'
  ],
  FixedCreatives: {
    desktop: {'none': -1, 'gpa_text_ad': 'gpa'},
    mweb: {
      'none': -1,
      'gpa_text_ad': 'gpa',
      'text template': {
        'Android': {
          'Wish #1': 239636942629,
          'Wish #2': 239636942632,
          'Wish #3': 239636942635,
          'Wish #4': 239636942761,
          'Duo #1': 239649332134,
          'Duo #2': 239649332137,
          'Duo #3': 239649332140,
          'Duo #4': 239649332143,
          'Allo #1': 240960875736,
          'Allo #2': 240960875739,
          'Allo #3': 240960875742,
          'Allo #4': 240960875745,
          'Pokemon Go #1': 240975902815,
          'Pokemon Go #2': 240975902818,
          'Pokemon Go #3': 240975902821,
          'Pokemon Go #4': 240975902824,
          'Amazon #1': 239388984428,
          'Amazon #2': 239388984431,
          'Amazon #3': 239388984434,
          'Tez #1': 239953356874,
          'Tez #2': 239953356877,
          'Tez #3': 239953356880,
          'Tez #4': 239953356883,
          'Tez #5': 239953356886,
          'Tez #6': 239953356889,
          'Tez #7': 239953356892,
        },
        'iOS': {
          'Wish #1': 239638470955,
          'Wish #2': 239638470958,
          'Wish #3': 239638471081,
          'Duo #1': 239676464867,
          'Duo #2': 239676464870,
          'Duo #3': 239676464873,
          'Duo #4': 239676464876,
          'Allo #1': 240990319169,
          'Allo #2': 240990319172,
          'Allo #3': 240990319175,
          'Allo #4': 240990319178,
          'Pokemon Go #1': 240964466154,
          'Pokemon Go #2': 240964466157,
          'Pokemon Go #3': 240964466280,
          'Pokemon Go #4': 240964466283,
          'Amazon #1': 164793680811,
          'Amazon #2': 164793680814,
          'Amazon #3': 164793680817,
          'Tez #1': 239956725746,
          'Tez #2': 239956725749,
          'Tez #3': 239956725752,
          'Tez #4': 239956725755,
          'Tez #5': 239956725764,
          'Tez #6': 239956725767,
          'Tez #7': 239956725770,
        }
      },
      'image template': {
        'Android': {
          'Wish (320x50)': 239636942638,
          'Duo (300x250)': 239649332146,
          'Duo (320x480)': 239649332149,
          'Tez (320x50)': 239953356898,
          'Tez (300x250)': 239953356895,
        },
        'iOS': {
          'Wish (320x50)': 239638471084,
          'Duo (320x50)': 239676465005,
          'Duo (300x250)': 239676464879,
          'Duo (320x480)': 239676465002,
          'Tez (320x50)': 239956725758,
          'Tez (300x250)': 239956725761,
        }
      }
    },
    apps: {
      'text': {
        'none': -1,
        'text': 93260746603,
        'text (DRA/responsive)': 166234964108,
      },
      'text template': {
        'Android': {
          'none': -1,
          'Wish #1': 239636917849,
          'Wish #2': 239636917852,
          'Wish #3': 239636917853,
          'Wish #4': 239636917855,
          'Duo #1': 239649742720,
          'Duo #2': 239649742723,
          'Duo #3': 239649742726,
          'Duo #4': 239649742729,
          'Allo #1': 240987449933,
          'Allo #2': 240987449936,
          'Allo #3': 240987449939,
          'Allo #4': 240987449942,
          'Tez (required text) #1': 239935024557,
          'Tez (required text) #2': 239935024680,
          'Tez (required text) #3': 239935024683,
          'Tez (required text) #4': 239935024686,
          'Tez (required text) #5': 239935024689,
          'Tez (required text) #6': 239935024692,
          'Tez (required text) #7': 239935024695,
          'Amazon #1': 239388992153,
          'Amazon #2': 239388992156,
          'Amazon #3': 239388992159,
          'Pokemon Go #1': 240987805880,
          'Pokemon Go #2': 240987805883,
          'Pokemon Go #3': 240987805886,
          'Pokemon Go #4': 240987805889,
          'Jet #1': 240962070468,
          'Jet #2': 240962070471,
          'Jet #3': 240962070474,
          'Jet #4': 240962070477,
          'Lyft #1': 164792778437,
          'Lyft #2': 164792778440,
          'Lyft #3': 164792778443,
          'Word Streak #1': 240962229039,
          'Word Streak #2': 240962229042,
          'Word Streak #3': 240962229045,
          'Word Streak #4': 240962229048,
          'AirBnB #1': 240989241599,
          'AirBnB #2': 240989241722,
          'AirBnB #3': 240989241725,
          'AirBnB #4': 240989241728,
          'Minecraft #1': 240991719824,
          'Minecraft #2': 240991719827,
          'Minecraft #3': 240991719830,
          'Minecraft #4': 240991719833,
          'Cookie Jam #1': 240998244137,
          'Cookie Jam #2': 240998244140,
          'Cookie Jam #3': 240998244143,
          'Cookie Jam #4': 240998244155,
          // Everything below is from pre-UAC and/or non-test ads we don't
          // own.
          // These may stop working when the Track 1 whitelist stops being
          // honored, or the "real ad" is turned down.
          'Low Rating App': 80632991661,
        },
        'iOS': {
          'none': -1,
          'Wish #1': 239640924422,
          'Wish #2': 239640924425,
          'Wish #3': 239640924428,
          'Duo #1': 239674008670,
          'Duo #2': 239674008673,
          'Duo #3': 239674008676,
          'Duo #4': 239674008679,
          'Allo #1': 240963661134,
          'Allo #2': 240963661137,
          'Allo #3': 240963661140,
          'Allo #4': 240963661143,
          'Tez (required text) #1': 239935070613,
          'Tez (required text) #2': 239935070616,
          'Tez (required text) #3': 239935070619,
          'Tez (required text) #4': 239935070622,
          'Tez (required text) #5': 239935070631,
          'Tez (required text) #6': 239935070634,
          'Tez (required text) #7': 239935070637,
          'Amazon #1': 164787824293,
          'Amazon #2': 164787824296,
          'Amazon #3': 164787824299,
          'Pokemon Go #1': 240978870430,
          'Pokemon Go #2': 240978870433,
          'Pokemon Go #3': 240978870436,
          'Pokemon Go #4': 240978870439,
          'Minecraft #1': 240965224284,
          'Minecraft #2': 240965224287,
          'Minecraft #3': 240965224290,
          'Minecraft #4': 240965224293,
          'AirBnb #1': 240991290419,
          'AirBnb #2': 240991290422,
          'AirBnb #3': 240991290425,
          'AirBnb #4': 240991290428,
          'HBO Now #1': 240980067058,
          'HBO Now #2': 240980067061,
          'HBO Now #3': 240980067064,
          'HBO Now #4': 240980067067,
          'Uptime #1': 240980269351,
          'Uptime #2': 240980269354,
          'Uptime #3': 240980269357,
          'Uptime #4': 240980269360,
          'Cookie Jam #1': 240972499392,
          'Cookie Jam #2': 240972499395,
          'Cookie Jam #3': 240972499398,
          'Cookie Jam #4': 240972499413,
        },
      },
      'image template': {
        'Android': {
          'none': -1,
          'Wish 320x50': 239636917858,
          'Duo 300x250': 239649742732,
          'Duo 320x480': 239649742735,
          'Duo 300x250 (anim)': 239649742738,
          'Tez 300x250 (finance)': 239935024698,
          'Tez 320x50 (finance)': 239935024701,
          'Cookie Jam 300x250': 240998244146,
          'Cookie Jam 320x480': 240998244149,
          'Cookie Jam 320x50': 240998244152,
        },
        'iOS': {
          'none': -1,
          'Wish 320x50': 239640924431,
          'Duo 300x250 (anim)': 239674008682,
          'Duo 320x480': 239674008685,
          'Duo 320x50': 239674008688,
          'Duo 300x250': 239674008691,
          'Tez 320x50 (finance)': 239935070625,
          'Tez 300x250 (finance)': 239935070628,
          'Cookie Jam 320x50': 240972499401,
          'Cookie Jam 320x480': 240972499404,
          'Cookie Jam 300x250': 240972499407,
          'Cookie Jam 300x250 #2': 240972499410,
        },
      },
      'video template': {
        'Android': {
          'none': -1,
          'Wish #1': 239619159489,
          'Wish #2': 239619159492,
          'Wish #3': 239619159495,
          'Duo #1': 239631789801,
          'Duo #2': 239631789804,
          'Duo #3': 239631789807,
          'Tez #1': 239953292827,
          'Tez #2': 239953292830,
          'Tez #3': 239953292833,
          'Cookie Jam #1': 240998258396,
          'Cookie Jam #2': 240998258399,
          'Cookie Jam #3': 240998258522,
        },
        'iOS': {
          'none': -1,
          'Wish #1': 239640924398,
          'Wish #2': 239640924401,
          'Wish #3': 239640924404,
          'Duo #1': 239656169994,
          'Duo #2': 239656169997,
          'Duo #3': 239656170120,
          'Tez #1': 239934838785,
          'Tez #2': 239934838788,
          'Tez #3': 239934838791,
          'Cookie Jam #1': 240987204403,
          'Cookie Jam #2': 240987204406,
          'Cookie Jam #3': 240987204409,
        },
      },
      'image': {
        'none': -1,
        '320x50': 170148153065,
        '480x32': 172771869483,
        '468x60': 30937157061,
        '728x90': 170153610429,
        '300x250': 93261114763,
        '320x480': 165447956380,
        '480x320': 165452598227,
        '768x1024': 165451997508,
        '1024x768': 165452715539,
      }
    },
    pla: {},
    native: {}
  },
  // Following are the adGroupIds for the fixed creativeIds.
  // TODO(happykins): Make the creative ids tuples instead of this mapping
  // that
  //                  is really hard to keep updated.
  AdGroupIds: {
    '240960875736': '51835002378',
    '240960875739': '51835002378',
    '240960875742': '51835002378',
    '240960875745': '51835002378',
    '240975902815': '49228960694',
    '240975902818': '49228960694',
    '240975902821': '49228960694',
    '240975902824': '49228960694',
    '240990319169': '52826711440',
    '240990319172': '52826711440',
    '240990319175': '52826711440',
    '240990319178': '52826711440',
    '240964466154': '51338103118',
    '240964466157': '51338103118',
    '240964466280': '51338103118',
    '240964466283': '51338103118',
    '239388984428': '49620499146',
    '239388984431': '49620499146',
    '239388984434': '49620499146',
    '164793680811': '42842650972',
    '164793680814': '42842650972',
    '164793680817': '42842650972',
    '239636942629': '50219232415',
    '239636942632': '50219232415',
    '239636942635': '50219232415',
    '239636942761': '50219232415',
    '239649332134': '49625506003',
    '239649332137': '49625506003',
    '239649332140': '49625506003',
    '239649332143': '49625506003',
    '239953356874': '55565050532',
    '239953356877': '55565050532',
    '239953356880': '55565050532',
    '239953356883': '55565050532',
    '239953356886': '55565050532',
    '239953356889': '55565050532',
    '239953356892': '55565050532',
    '239638470955': '51790058324',
    '239638470958': '51790058324',
    '239638471081': '51790058324',
    '239676464867': '48809230303',
    '239676464870': '48809230303',
    '239676464873': '48809230303',
    '239676464876': '48809230303',
    '239956725746': '50205172956',
    '239956725749': '50205172956',
    '239956725752': '50205172956',
    '239956725755': '50205172956',
    '239956725764': '50205172956',
    '239956725767': '50205172956',
    '239956725770': '50205172956',
    '239636942638': '50219232415',
    '239649332146': '49625506003',
    '239649332149': '49625506003',
    '239953356898': '55565050532',
    '239953356895': '55565050532',
    '239638471084': '51790058324',
    '239676465005': '48809230303',
    '239676464879': '48809230303',
    '239676465002': '48809230303',
    '239956725758': '50205172956',
    '239956725761': '50205172956',
    '209823706735': '199731021',
    '209824255387': '199731021',
    '93260746603': '23215399123',
    '166234964108': '34630395779',
    '110198589501': '11518680381',
    '165406339663': '11518680381',
    '94738480461': '11518680381',
    '90396834861': '11518680381',
    '91355830821': '11518680381',
    '94279280541': '11518680381',
    '102512963181': '11518680381',
    '41400470781': '11518680381',
    '96898276701': '11518680381',
    '96898287861': '11518680381',
    '96898288221': '11518680381',
    '96898289781': '11518680381',
    '96898288461': '11518680381',
    '199536552418': '11518680381',
    '199881083474': '11518680381',
    '199520513670': '11518680381',
    '170148153065': '35713561605',
    '172771869483': '35713561605',
    '170153610429': '35713561605',
    '165452598227': '35713561605',
    '165447956380': '35713561605',
    '165451997508': '35713561605',
    '165452715539': '35713561605',
    '195959782976': '35713561605',
    '30937157061': '7115489901',
    '93261114763': '24132501283',
    '80632976901': '18486387021',
    '80632991661': '18486387021',
    // android wish uac
    '239636917849': '48479847245',
    '239636917852': '48479847245',
    '239636917855': '48479847245',
    '239636917861': '48479847245',
    '239636917858': '48479847245',
    '239619159489': '47599855182',
    '239619159492': '47599855182',
    '239619159495': '47599855182',
    // ios wish uac
    '239640924422': '52766777249',
    '239640924425': '52766777249',
    '239640924428': '52766777249',
    '239640924431': '52766777249',
    '239640924398': '51627785258',
    '239640924401': '51627785258',
    '239640924404': '51627785258',
    // android google duo uac
    '239649742720': '52767213049',
    '239649742723': '52767213049',
    '239649742726': '52767213049',
    '239649742729': '52767213049',
    '239649742732': '52767213049',
    '239649742735': '52767213049',
    '239649742738': '52767213049',
    '239631789801': '51140754878',
    '239631789804': '51140754878',
    '239631789807': '51140754878',
    // ios google duo uac
    '239674008670': '51619892633',
    '239674008673': '51619892633',
    '239674008676': '51619892633',
    '239674008679': '51619892633',
    '239674008682': '51619892633',
    '239674008685': '51619892633',
    '239674008688': '51619892633',
    '239674008691': '51619892633',
    '239656169994': '45564878050',
    '239656169997': '45564878050',
    '239656170120': '45564878050',
    // android google tez uac
    '239935024557': '54073574310',
    '239935024680': '54073574310',
    '239935024683': '54073574310',
    '239935024686': '54073574310',
    '239935024689': '54073574310',
    '239935024692': '54073574310',
    '239935024695': '54073574310',
    '239935024698': '54073574310',
    '239935024701': '54073574310',
    '239953292827': '48809538183',
    '239953292830': '48809538183',
    '239953292833': '48809538183',
    // ios google tez uac
    '239935070613': '52803555249',
    '239935070616': '52803555249',
    '239935070619': '52803555249',
    '239935070622': '52803555249',
    '239935070631': '52803555249',
    '239935070634': '52803555249',
    '239935070637': '52803555249',
    '239935070625': '52803555249',
    '239935070628': '52803555249',
    '239934838785': '54110667550',
    '239934838788': '54110667550',
    '239934838791': '54110667550',
    // android amazon uac
    '239388992153': '58497843828',
    '239388992156': '58497843828',
    '239388992159': '58497843828',
    // ios amazon uac
    '164787824293': '42842650932',
    '164787824296': '42842650932',
    '164787824299': '42842650932',
    // android allo uac
    '240987449933': '50639812936',
    '240987449936': '50639812936',
    '240987449939': '50639812936',
    '240987449942': '50639812936',
    // ios allo uac
    '240963661134': '47800690262',
    '240963661137': '47800690262',
    '240963661140': '47800690262',
    '240963661143': '47800690262',
    // android pokemon uac
    '240987805880': '49726709269',
    '240987805883': '49726709269',
    '240987805886': '49726709269',
    '240987805889': '49726709269',
    // ios pokemon uac
    '240978870430': '51338101878',
    '240978870433': '51338101878',
    '240978870436': '51338101878',
    '240978870439': '51338101878',
    // android jet uac
    '240962070468': '49827943603',
    '240962070471': '49827943603',
    '240962070474': '49827943603',
    '240962070477': '49827943603',
    // android word streak uac
    '240962229039': '52990013751',
    '240962229042': '52990013751',
    '240962229045': '52990013751',
    '240962229048': '52990013751',
    // android airbnb uac
    '240989241599': '53131359514',
    '240989241722': '53131359514',
    '240989241725': '53131359514',
    '240989241725': '53131359514',
    // ios airbnb uac
    '240991290419': '55968390931',
    '240991290422': '55968390931',
    '240991290425': '55968390931',
    '240991290428': '55968390931',
    // android minecraft uac
    '240991719824': '49230376774',
    '240991719827': '49230376774',
    '240991719830': '49230376774',
    '240991719833': '49230376774',
    // ios minecraft uac
    '240965224284': '49756403425',
    '240965224287': '49756403425',
    '240965224290': '49756403425',
    '240965224293': '49756403425',
    // ios hbo uac
    '240980067058': '49756432545',
    '240980067061': '49756432545',
    '240980067064': '49756432545',
    '240980067067': '49756432545',
    // ios uptime uac
    '240980269351': '49097317406',
    '240980269354': '49097317406',
    '240980269357': '49097317406',
    '240980269360': '49097317406',
    // android cookie jam uac
    '240998244137': '52980755449',
    '240998244140': '52980755449',
    '240998244143': '52980755449',
    '240998244155': '52980755449',
    '240998244146': '52980755449',
    '240998244149': '52980755449',
    '240998244152': '52980755449',
    '240972614397': '52980755449',
    '240998258396': '49962165093',
    '240998258399': '49962165093',
    '240998258522': '49962165093',
    // ios cookie jam uac
    '240972499392': '50640862736',
    '240972499395': '50640862736',
    '240972499398': '50640862736',
    '240972499413': '50640862736',
    '240972499401': '50640862736',
    '240972499404': '50640862736',
    '240972499407': '50640862736',
    '240972499410': '50640862736',
    '240987204403': '49231103934',
    '240987204406': '49231103934',
    '240987204409': '49231103934',
  },
  Formats: {
    Web: [
      // Core web formats
      '120x240', '120x600', '125x125', '160x600', '180x150', '200x200',
      '234x60', '250x250', '300x250', '300x600', '300x1050', '320x50',
      '336x280', '468x60', '728x90', '970x90', '970x250',
      // Other web formats
      '240x400 (adx)', '250x360 (adx)', '580x400 (adx)', '930x180 (adx)',
      '980x120 (adx)',
      // Radlinks
      '120x90_0ads_al', '200x90_0ads_al', '300x130_0ads_al', '468x15_0ads_al',
      '728x15_0ads_al', '1200x30_0ads_al'
    ],
    App: [
      // Official sizes, top Android sizes, and top iOS sizes
      '480x32',   // Smallest screen width on ios
      '568x32',   // Top ios smart banner size
      '667x32',   // Top ios smart banner size
      '320x50',   // Standard banner size
      '360x50',   // Top android smart banner size
      '414x50',   // Top ios smart banner size
      '1024x50',  // Top android smart banner size
      '468x60',   // Standard banner size
      '480x70',   // Special 70 size
      '600x90',   // Top android smart banner size
      '728x90',   // Standard banner size
      '1024x90',  // Top ios smart banner size
      '320x100',  // Standard banner size
      '300x250',  // Standard banner size
      '340x303',  // Top android smart banner size
      '160x600',  // Skyscraper
      // Interstitial formats. This is NOT the real param we are sending.
      // 320x480(i) will be sent as format=interstitial_mb&u_w=320&u_h=480
      '360x640(i)', '640x360(i)',  // top android size
      '320x568(i)', '568x320(i)',  // top ios size
      '375x667(i)', '667x375(i)',  // top ios size
      '375x812(i)', '812x375(i)',  // iphone x
      '320x480(i)', '480x320(i)',  // smallest size supported
      '768x1024(i)', '1024x768(i)', '600x900(i)', '900x600(i)'  // tablets
    ],
    Android: [
      // Android top sizes
      '320x50', '360x50', '1024x50', '468x60', '600x90', '728x90', '300x250',
      '340x303'
    ],
    Ios: [
      // iOS Top sizes
      '480x32', '568x32', '667x32', '320x50', '414x50', '468x60', '728x90',
      '1024x90', '300x250'
    ]
  },
  NumMirrors: 3,
  Servers: {
    'auto': '',
    'cat2': 'cat2',
    'gmob': 'gmob',
    'adx': 'adx',
    'dfp': 'dfp',
    'xfa': 'xfa'
  },
  UserAgentsLists: {
    desktop: {
      IE9: arrowSandbox.Enums.USER_AGENTS.IE9,
      IE8: arrowSandbox.Enums.USER_AGENTS.IE8,
      IE7: arrowSandbox.Enums.USER_AGENTS.IE7,
      IE6: arrowSandbox.Enums.USER_AGENTS.IE6,
      'Opera9.8': arrowSandbox.Enums.USER_AGENTS['Opera9.8'],
      Firefox15: arrowSandbox.Enums.USER_AGENTS.Firefox15,
      Safari5: arrowSandbox.Enums.USER_AGENTS.Safari5,
      auto: ''
    },
    mweb: {
      'android phone': arrowSandbox.Enums.USER_AGENTS['Android Phone'],
      'android tablet': arrowSandbox.Enums.USER_AGENTS['Android Tablet'],
      iPhone: arrowSandbox.Enums.USER_AGENTS.iPhone,
      iPad: arrowSandbox.Enums.USER_AGENTS.iPad,
      auto: ''
    },
    apps: {
      'android phone': arrowSandbox.Enums.USER_AGENTS['Android Phone'],
      'android tablet': arrowSandbox.Enums.USER_AGENTS['Android Tablet'],
      iPhone: arrowSandbox.Enums.USER_AGENTS.iPhone,
      iPad: arrowSandbox.Enums.USER_AGENTS.iPad,
      auto: ''
    },
    pla: {
      'android phone': arrowSandbox.Enums.USER_AGENTS['Android Phone'],
      iPhone: arrowSandbox.Enums.USER_AGENTS.iPhone,
      iPad: arrowSandbox.Enums.USER_AGENTS.iPad,
      auto: ''
    },
    native: {
      IE9: arrowSandbox.Enums.USER_AGENTS.IE9,
      IE8: arrowSandbox.Enums.USER_AGENTS.IE8,
      IE7: arrowSandbox.Enums.USER_AGENTS.IE7,
      IE6: arrowSandbox.Enums.USER_AGENTS.IE6,
      'Opera9.8': arrowSandbox.Enums.USER_AGENTS['Opera9.8'],
      Firefox15: arrowSandbox.Enums.USER_AGENTS.Firefox15,
      Safari5: arrowSandbox.Enums.USER_AGENTS.Safari5,
      'android phone': arrowSandbox.Enums.USER_AGENTS['Android Phone'],
      'android tablet': arrowSandbox.Enums.USER_AGENTS['Android Tablet'],
      iPhone: arrowSandbox.Enums.USER_AGENTS.iPhone,
      iPad: arrowSandbox.Enums.USER_AGENTS.iPad,
      auto: ''
    }
  },
  ScreenSizes: arrowSandbox.Enums.SCREEN_SIZES,
  PageLevelAdTypes: {
    FLOATING_AD_POSITION_BOTTOM: 1,
    GDN_INTERSTITIAL: 8,
    SCROLL_TRIGGERED_VIGNETTE: 9,
    RESPONSIVE_RESIZE: 16,
    LADDER_RUNG: 25,
    PEDESTAL: 30,
    INFINITE_SCROLL_INVISIBLE_REQUEST: 32
  }
};

arrowSandbox.Data = {
  TemplateDefaults: {
    styleFrame_default: {
      'format': '300x250',
      'numAds': '1',
      'template_spec': 'image,title,body,url',
      'css':
          'body{background-color:#f4f4f4}.title-link{color:#000}.button{background-color:#4cbe99}.button-text,.button-link{color:#fff}.price,.reviews{color:rgba(0,0,0,.5)}.reviews svg{fill:rgba(0,0,0,.7)}.url-link{color:rgba(0,0,0,.3)}.body{color:rgba(0,0,0,.7)}body{font-family:"Roboto-Regular",Arial,sans-serif;font-weight:normal;font-size:10px}@media (min-height:300px){body{font-size:11px}}@media (min-width:360px) and (min-height:300px){body{font-size:12px}}@media (min-width:700px) and (min-height:300px){body{font-size:16px}}.title{font-size:1.1em;line-height:1.2em}.button{font-size:1.1em}.body,.price,.reviews,.url{font-size:1em;line-height:1.1em}@media (min-width:360px) and (min-height:300px){.title{font-size:1.2em;line-height:1.25em}.button{font-size:1.2em}}@media (min-width:700px) and (min-height:300px){.title{font-size:1.3em;line-height:1.35em}.button{font-size:1.3em}}.title{margin-bottom:5px;padding:5px 0 0 8px}.body{clear:both;margin:2px 8px}.image-gallery,.video,.image{clear:both;margin:8px auto}.button{position:absolute;bottom:8px;left:8px}.app-icon{float:left;margin:0 8px 4px 8px;padding:0}.app-store{display:table}@media (min-width:360px){.app-store{display:inline-block;position:relative;margin-right:4px;top:4px}}.price,.reviews{display:inline-block}.rating-stars,.reviews-count{display:inline}.reviews-count{margin-left:2px}.url{padding:4px 8px}.body{}.app-icon img{height:50px;width:50px;border-radius:20%}@media (min-width:360px) and (min-height:300px){.app-icon img{height:70px;width:70px}}.title{display:block;text-align:left}.button{border:none;border-radius:2px;box-shadow:0 0 2px rgba(0,0,0,.12) , 0 2px 2px rgba(0,0,0,.24)}.button-link{display:block;padding:0 1em}.button svg{display:none}.button{width:90%;width:calc(100% - 16px);height:2.8em}.button-text{display:block;line-height:2.8em;text-align:center}@media (min-width:700px) and (min-height:300px){.button{height:2em}.button-text{line-height:2em}}.app-store{border:none}.app-store a{display:inline-block}.app-store img{height:1.4em}.price{}.reviews{border:none;line-height:1.1em}.rating-star{display:inline;float:left;height:1.1em;width:1.1em}.url{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.image-link{height:100%;width:100%},.image img{height:100%;width:100%}.image-link img{height:100%;display:block;}.image-gallery a,.image a{display:block;line-height:0}.image-gallery,.video,.image{width:90%;width:calc(100% - 16px)}.image-gallery,.video{height:50%;height:calc(100% - 13.5em)}.image{height:50%;height:calc(100% - 12em)}@media (min-width:700px) and (min-height:300px){.image-gallery,.video{height:calc(100% - 10.5em)}.image{height:calc(100% - 9.5em)}}.attribution{background-color:#fbb320;border-radius:2px;color:#fff;display:table;font-size:13px;line-height:13px;margin:4px 8px;padding:0 3px;position:absolute;top:0;left:0}.rtl .attribution{left:auto;right:0}.ads a{text-decoration:none}.ads,.ad{height:100%;width:100%;padding:0;word-wrap:break-word}.ad{padding-top:23px;height:calc(100% - 23px)}'
    },
    nativeExpress_default: {
      'format': '300x250',
      'numAds': '1',
      'template_spec': 'title,url,body,image,visit-site-button',
      'css':
          'body{background-color:#f4f4f4}.title-link{color:#000}.button{background-color:#4cbe99}.button-text,.button-link{color:#fff}.price,.reviews{color:rgba(0,0,0,.5)}.reviews svg{fill:rgba(0,0,0,.7)}.url-link{color:rgba(0,0,0,.3)}.body{color:rgba(0,0,0,.7)}body{font-family:"Roboto-Regular",Arial,sans-serif;font-weight:normal;font-size:10px}@media (min-height:300px){body{font-size:11px}}@media (min-width:360px) and (min-height:300px){body{font-size:12px}}@media (min-width:700px) and (min-height:300px){body{font-size:16px}}.title{font-size:1.1em;line-height:1.2em}.button{font-size:1.1em}.body,.price,.reviews,.url{font-size:1em;line-height:1.1em}@media (min-width:360px) and (min-height:300px){.title{font-size:1.2em;line-height:1.25em}.button{font-size:1.2em}}@media (min-width:700px) and (min-height:300px){.title{font-size:1.3em;line-height:1.35em}.button{font-size:1.3em}}.title{margin-bottom:5px;padding:5px 0 0 8px}.body{clear:both;margin:2px 8px}.image-gallery,.video,.image{clear:both;margin:8px auto}.button{position:absolute;bottom:8px;left:8px}.app-icon{float:left;margin:0 8px 4px 8px;padding:0}.app-store{display:table}@media (min-width:360px){.app-store{display:inline-block;position:relative;margin-right:4px;top:4px}}.price,.reviews{display:inline-block}.rating-stars,.reviews-count{display:inline}.reviews-count{margin-left:2px}.url{padding:4px 8px}.body{}.app-icon img{height:50px;width:50px;border-radius:20%}@media (min-width:360px) and (min-height:300px){.app-icon img{height:70px;width:70px}}.title{display:block;text-align:left}.button{border:none;border-radius:2px;box-shadow:0 0 2px rgba(0,0,0,.12) , 0 2px 2px rgba(0,0,0,.24)}.button-link{display:block;padding:0 1em}.button svg{display:none}.button{width:90%;width:calc(100% - 16px);height:2.8em}.button-text{display:block;line-height:2.8em;text-align:center}@media (min-width:700px) and (min-height:300px){.button{height:2em}.button-text{line-height:2em}}.app-store{border:none}.app-store a{display:inline-block}.app-store img{height:1.4em}.price{}.reviews{border:none;line-height:1.1em}.rating-star{display:inline;float:left;height:1.1em;width:1.1em}.url{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.image-link{height:100%;width:100%},.image img{height:100%;width:100%}.image-link img{height:100%;display:block;margin:auto;}.image-gallery a,.image a{display:block;line-height:0}.image-gallery,.video,.image{width:90%;width:calc(100% - 16px)}.image-gallery,.video{height:50%;height:calc(100% - 13.5em)}.image{height:50%;height:calc(100% - 12em)}@media (min-width:700px) and (min-height:300px){.image-gallery,.video{height:calc(100% - 10.5em)}.image{height:calc(100% - 9.5em)}}.attribution{background-color:#fbb320;border-radius:2px;color:#fff;display:table;font-size:13px;line-height:13px;margin:4px 8px;padding:0 3px;position:absolute;top:0;left:0}.rtl .attribution{left:auto;right:0}.ads a{text-decoration:none}.ads,.ad{height:100%;width:100%;padding:0;word-wrap:break-word}.ad{padding-top:23px;height:calc(100% - 23px)}'
    },
    'multi_ad_with_image': {
      'format': '600x300',
      'numAds': '3',
      'template_spec': 'image,title,body,url',
      'css':
          'body{font-family:Verdana,Geneva,sans-serif;background:#e6eaef}.attribution{width:588px;border:1px solid #b2b2b2;border-bottom:0;font-size:13px;color:#7f7f7f;padding:5px;font-family:Helvetica,sans-serif}div{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}a{text-decoration:none}.image{float:left}.image img{height:65px}.title,.body,.url{margin:0 0 1px 80px}.title{font-weight:bold}.url{font-size:13px}.ads{width:598px;margin:0;padding:0;text-align:left;font-size:12px;display:block;overflow:hidden;text-overflow:ellipsis;border-right:1px solid #b2b2b2;border-left:1px solid #b2b2b2;border-bottom:1px solid #b2b2b2}.ad{width:570px}.ads .ad{margin:5px;padding:5px;background:#e6eaef;font-family:Helvetica,sans-serif}.ads a,.ads a:visited{color:#000;text-decoration:none;font-family:Helvetica,sans-serif}.ads a:hover,.ads a:focus,.ads a:active{text-decoration:underline}.ads .title{font-weight:bold;font-size:24px;font-family:Helvetica,sans-serif}.ads .title a{color:#337ab7}.ads .title,.ads .body{font-family:Helvetica,sans-serif}.ads .body,.ads .url{font-size:12px;font-family:Helvetica,sans-serif}.ads .url a{color:#666}'
    },
    'multi_ad_without_image': {
      'format': '620x220',
      'numAds': '3',
      'template_spec': 'title,body,url',
      'css':
          '.attribution{font:13px Open Sans,sans-serif;line-height:1.4;color:#999}.ads{font:14px Open Sans,sans-serif;line-height:1.4}.title-link{color:#298ec8;font-weight:bold}.url{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.url-link{color:#999}.button img{display:none}.ad{margin-bottom:15px}'
    },
    'one_ad_with_image': {
      'format': '890x165',
      'numAds': '1',
      'template_spec': 'image,title,body,url',
      'css':
          'body{font-family:Arial,sans-serif;font-size:13px;color:#a0a0a0}a{border:none;color:#168eca;text-decoration:none}a:hover{text-decoration:underline}.attribution{font-size:10px}.url-link{color:#909090}.title{padding-top:5px;line-height:20px}.title-link{font-weight:bold;font-size:16px}.body{padding-top:5px;line-height:16px}.url{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.image img{border:none;height:130px;width:168px}.image{height:130px;width:168px;clear:left;float:left;padding:0;display:inline-block;vertical-align:top;background:#f7f7f7;margin-right:10px}.ad{padding:8px 0;border-bottom:1px solid #f0f0f0;overflow:hidden;background:#fafafa}'
    },
    'one_ad_without_image': {
      'format': '700x90',
      'numAds': '1',
      'template_spec': 'title,body,url',
      'css':
          'body{font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:15px}a{border:none;color:#0053f9;text-decoration:none}a:hover{text-decoration:underline;color:#036}.url-link{text-decoration:underline;color:#0053f9}.title{display:table-cell;width:260px;font-size:16px;color:#0053f9}.title-link{font-weight:600;text-decoration:underline}.url{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:14px;color:#0053f9}.ad{display:table;padding-bottom:20px}.attribution{color:#999;font-size:14px}'
    },
    'one_ad_with_url': {
      'format': '320x130',
      'numAds': '1',
      'template_spec': 'image,title,body,url',
      'css':
          'body{font-family:Roboto,Arial,Helvetica,sans-serif;font-size:18px;color:#f70}a{border:none;color:#567dc4;text-decoration:none}.url-link,.attribution{color:#777}.attribution{color:#777}.title-link{color:#3e4039;font-size:16px}.url,.attribution{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:11px}.image img{border:none;height:116px;width:111px}.image{clear:left;float:left;padding:0 10px 0 0}.ad{min-height:130px}.body{font-size:15px;line-height:20px}'
    },
    'one_ad_with_button': {
      'format': '536x165',
      'numAds': '1',
      'template_spec': 'title,url,body,button',
      'css':
          'body{font-family:Arial;font-size:15px;line-height:19px}.title{font-size:17px;line-height:21px;margin-bottom:10px;padding-right:20px}.title a{text-decoration:none;color:#000;font-weight:bold}.body{font-family:Arial;font-size:15px;line-height:20px;padding-right:20px}.url{padding-right:6px;float:left}.url a{color:#00628b;text-decoration:none}.button{display:block;margin-top:24px;margin-left:400px;background:#0194d2;padding:8px 8px 6px 8px;width:120px;text-align:center}.button:hover{background:#007aad}.button a{width:100%;display:block}.button img{height:20px}.attribution{font-size:10px;line-height:14px;color:#000;font-family:Tahoma,Geneva,sans-serif;font-weight:normal;text-decoration:none;font-weight:100;letter-spacing:1.5px}'
    }
  }
};
