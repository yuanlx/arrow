function valueInObject(object, value) {
  for (var key in object) {
    if (object[key] == value) {
      return true;
    }
  }
  return false;
}

angular.module('sandbox')
.controller('AdSelectionController', function(
    $scope, $window, $http, $sce, hashService, injectorFactory) {

  $scope.isInternalIp = 'true';
  $scope.adBlockEnabled = !!window.adBlockEnabled;

  let adBlockMessages = [
    `Gadzooks! Great Scott! Egads!
Your browser cannot load our ads.
Please try not to squawk,
We think it's AdBlock.
Just turn it off, Google comrades!`,
    `It looks like you have an ad blocker installed. Please disable. Ad revenue keeps Arrow Sandbox Free!`
  ];

  $scope.alertMessages = [
    {
      text: "It looks like you aren't on an internal google network. Some features may not work :(",
      cssClass: "iframeContainer alert-warning",
      showCondition: "!isInternalIp"
    },
    {
      text: "Not getting ads? Try changing the 'Targeting Url' from 'random'. It's a targeting issue that Arrow Team cannot control.",
      cssClass: "iframeContainer alert-info",
      showCondition: "true"
    },
    {
      text: adBlockMessages[Math.floor(Math.random()*adBlockMessages.length)],
      cssClass: "iframeContainer alert-danger",
      showCondition: "adBlockEnabled"
    }
  ];
  $http.get('/internalip').then(function(response) {
    $scope.isInternalIp = response.data === 'true';
  });
  $scope.CreativeTypes = arrowSandbox.Settings.CreativeTypes;
  $scope.FixedCreatives = arrowSandbox.Settings.FixedCreatives;
  $scope.UserAgents = arrowSandbox.Settings.UserAgentsLists;
  $scope.Servers = arrowSandbox.Settings.Servers;
  $scope.PageLevelAdTypes = arrowSandbox.Settings.PageLevelAdTypes;
  $scope.ScreenSizes = arrowSandbox.Settings.ScreenSizes;
  $scope.AdGroupIds = arrowSandbox.Settings.AdGroupIds;

  $scope.ColorSchemes = arrowSandbox.Enums.COLOR_SCHEMES;
  $scope.FontFaces = arrowSandbox.Enums.FONT_FACES;
  $scope.Hosts = arrowSandbox.Enums.HOSTS;
  $scope.TeamHosts = {};
  $scope.showTeamHostDetail = false;
  for (var key in $scope.Hosts) {
    var value = $scope.Hosts[key];
    if (value.indexOf('.corp.google.com') > -1) {
      $scope.TeamHosts[key] =
          [$sce.trustAsResourceUrl('http://' + value),
           $sce.trustAsResourceUrl('http://' + value + '/healthz')];
    }
  }
  $scope.Languages = angular.copy(arrowSandbox.Enums.LANGUAGES);
  $scope.Languages['all'] = '*';
  $scope.Countries = angular.copy(arrowSandbox.Enums.COUNTRIES);
  $scope.Countries['all'] = '*';
  $scope.Layouts = arrowSandbox.Enums.LAYOUTS;
  $scope.Urls =
      ['random'].concat(Object.keys(arrowSandbox.Enums.TARGETING_URLS));
  $scope.NativeTypes = angular.copy(arrowSandbox.Enums.NATIVE_TYPES);
  $scope.NativeStyles = angular.copy(arrowSandbox.Enums.NATIVE_STYLES);
  $scope.TemplateDefaults = angular.copy(arrowSandbox.Data.TemplateDefaults);

  var nightMode = localStorage.getItem('nightMode') === 'true';

  $scope.showSelection = true;

  $scope.data = {
    'adType': 'text',
    'append': '',
    'expFlags': '',
    'borderDecoration': true,
    'nightMode': nightMode,
    'creativeType': 1,
    'experimentId': '',
    'creatives': '',
    'adgroups': '',
    'rhls': '',
    'matchFixedCreatives': false,
    'fixedCreative': -1,
    'fixedCreativeAdGroup': -1,
    'fontFace': '',
    'format': '300x250',
    'host': 'googleads.g.doubleclick.net',
    'prodhost': true,
    'https': location.protocol == 'https:',
    'language': '',
    'country': '',
    'layout': '',
    'numAds': '',
    'platform': 'desktop',
    'rhindleDebug': false,
    'userAgent': '',
    'server': '',
    'afma': false,
    'inlineHydra': false,
    'noSizeCheck': false,
    'injectImageIntoTextAds': false,
    'urlChoice': 'random',
    'adAnalyzer': false,
    'nativeType': 'styleFrame',
    'nativeStyle': '',
    'sfTemplateSpec': '',
    'sfCss': '',
    'isFormatAutomaticallyModfied': false,
    'savedFormat': '',
    'savedNumAds': '',
  };

  $scope.getFixedCreatives = function() {
    var data = $scope.data;
    var device = 'Android';
    if (data['userAgent'] ==
        $scope.UserAgents['apps']['android phone'] ||
        data['userAgent'] ==
        $scope.UserAgents['apps']['android tablet']) {
      device = 'Android';
    }
    if (data['userAgent'] ==
        $scope.UserAgents['apps']['iPhone'] ||
        data['userAgent'] ==
        $scope.UserAgents['apps']['iPad']) {
      device = 'iOS';
    }
    if (data['platform'] == 'apps') {
      if (data.creativeType ==
          $scope.CreativeTypes.apps['text']) {
        return $scope.FixedCreatives[data.platform]['text'];
      }
      if (data.creativeType ==
          $scope.CreativeTypes.apps['image']) {
        return $scope.FixedCreatives[data.platform]['image'];
      }
      if (data.creativeType ==
          $scope.CreativeTypes.apps['text template']) {
        return $scope.FixedCreatives[data.platform]['text template'][device];
      }
      if (data.creativeType ==
          $scope.CreativeTypes.apps['image template']) {
        return $scope.FixedCreatives[data.platform]['image template'][device];
      }
      if (data.creativeType ==
          $scope.CreativeTypes.apps['video template']) {
        return $scope.FixedCreatives[data.platform]['video template'][device];
      }
    } else if (data['platform'] == 'mweb') {
      if (data.creativeType ==
          $scope.CreativeTypes.mweb['text template']) {
        return $scope.FixedCreatives[data.platform]['text template'][device];
      } else if (data.creativeType ==
          $scope.CreativeTypes.mweb['image template']) {
        return $scope.FixedCreatives[data.platform]['image template'][device];
      }
      return $scope.FixedCreatives[data.platform];
    } else {
      return $scope.FixedCreatives[data.platform];
    }
  }

  $scope.loadFormats = function() {
    if ($scope.data['platform'] == 'desktop' ||
        $scope.data['platform'] == 'mweb' ||
        $scope.data['platform'] == 'pla' ||
        $scope.data['platform'] == 'native') {
      var webFormats = arrowSandbox.Settings.Formats.Web;
      if (webFormats.indexOf($scope.data.format)) {
        $scope.data.format = '300x250';
      }
      $scope.Formats = angular.copy(arrowSandbox.Settings.Formats.Web);
    } else if ($scope.data['platform'] == 'apps') {
      var appFormats = arrowSandbox.Settings.Formats.App;
      if (appFormats.indexOf($scope.data.format)) {
        $scope.data.format = '300x250';
      }
      $scope.Formats = angular.copy(arrowSandbox.Settings.Formats.App);
    }
    for (var i in $scope.Formats) {
      if ($scope.Formats[i].indexOf(' ') >= 0) {
        $scope.Formats.splice(i, 0, 'all core');
        break;
      }
      if ($scope.Formats[i].indexOf('i') >= 0) {
        $scope.Formats.splice(i, 0, 'all banners', 'top android banners',
            'top ios banners', 'all interstitials');
        break;
      }
    }
    $scope.Formats.push('all');
  };

  $scope.switchPlatform = function(platform) {
    $scope.data['platform'] = platform;
    $scope.data['server'] = '';  // auto
    if (platform == 'desktop') {
      $scope.data['userAgent'] = '';
    } else if (platform == 'mweb') {
      $scope.data['userAgent'] = $scope.UserAgents['mweb']['android phone'];
    } else if (platform == 'apps') {
      $scope.data['userAgent'] = $scope.UserAgents['apps']['android phone'];
      $scope.data.creativeType = $scope.CreativeTypes.apps['text template'];
    } else if (platform == 'pla') {
      $scope.data.userAgent = $scope.UserAgents.apps['android phone'];
      $scope.data.plaType = $scope.PageLevelAdTypes.FLOATING_AD_POSITION_BOTTOM;
      $scope.data.screenSize = $scope.ScreenSizes[0];
      $scope.data.creativeType = $scope.CreativeTypes.pla.none;
      $scope.data.format = 'all';
    } else if (platform == 'native') {
      $scope.data['creativeType'] = 1;  // Always text.
      $scope.switchNativeType();  // Load all the other native defaults.
    }
    $scope.loadFormats();
    // Restore manually set values of the ad format and number of ads when
    // changing back from native.
    if (platform != 'native' &&
        $scope.data.isFormatAutomaticallyModfied == true) {
      $scope.data.isFormatAutomaticallyModfied = false;
      $scope.data.customFormat = $scope.data.savedFormat;
      $scope.data.numAds = $scope.data.savedNumAds;
    }
  };

  $scope.switchNativeType = function() {
    // We are changing the ad format and the number of requested ads, so we save
    // the manually set values to be reverted when switching the platform back
    // from native.
    if($scope.data.isFormatAutomaticallyModfied == false) {
      $scope.data.isFormatAutomaticallyModfied = true;
      $scope.data.savedFormat = $scope.data.customFormat;
      $scope.data.savedNumAds = $scope.data.numAds;
    }
    // Go back to the blank template (as a default).
    $scope.data.nativeStyle = '';
    // Load the default settings for the selected native type.
    if($scope.data.nativeType == 'styleFrame') {
      $scope.data.userAgent = '';  // Auto User Agent.
    } else if($scope.data.nativeType == 'nativeExpress') {
      // Android.
      $scope.data.userAgent = $scope.UserAgents.apps['android phone'];
    }
    // Load default template spec and css if necessary.
    $scope.switchNativeStyle();
  };

  $scope.switchNativeStyle = function() {
    // Check if no example was selected.
    if($scope.data.nativeStyle == '') {
      $scope.data.customFormat = $scope.data.savedFormat;
      $scope.data.numAds = $scope.data.savedNumAds;
      $scope.data.sfTemplateSpec = '';
      $scope.data.sfCss = '';
    } else {
      if($scope.data.nativeStyle == 'default') {
        // Default depends on the native type.
        var template =
            $scope.TemplateDefaults[$scope.data.nativeType + '_default'];
      } else {
        var template = $scope.TemplateDefaults[$scope.data.nativeStyle];
      }
      $scope.data.customFormat = template.format;
      $scope.data.numAds = template.numAds;
      $scope.data.sfTemplateSpec = template.template_spec;
      $scope.data.sfCss = template.css;
    }
  };

  $scope.expandInputBox = function(id) {
    $('#' + id).removeClass('collapsed').addClass('expanded');
  };

  $scope.shrinkInputBox = function(id) {
    $('#' + id).removeClass('expanded').addClass('collapsed');
  };

  $scope.submitFeedback = function() {
    $window.open(
        'https://b.corp.google.com/issues/new?cc=arrow-eng&type=FEATURE_REQUEST&priority=P2&severity=S2&hotlistIds=447750&component=18886',
        '_blank');
  };

  $scope.showMeTheAds = function(shouldSendData) {
    this.displayFrame();
    if (shouldSendData) {
      this.sendData();
    }
  };

  $scope.toggleSettings = function() {
    $scope.showSelection = !$scope.showSelection;
  };

  $scope.displayFrame = function() {
    injectorFactory.injectIFrames(this.data);
  };

  $scope.clear = function() {
    injectorFactory.clear();
  };

  $scope.copyHost = function() {
    $scope.customHost = this.data.host;
  };

  $scope.addHost = function() {
    this.Hosts.CUSTOM = $scope.customHost;
    this.data.host = $scope.customHost;
  };

  $scope.setFixedCreative = function() {
    if (this.AdGroupIds[this.data.fixedCreative]) {
      this.data.fixedCreativeAdGroup = this.AdGroupIds[this.data.fixedCreative];
    } else {
      this.data.fixedCreativeAdGroup = this.data.fixedCreative;
    }
    // If checked, update the text fields
    if (this.data.matchFixedCreatives) {
      this.data.creatives = this.data.fixedCreative;
      this.data.adgroups = this.data.fixedCreativeAdGroup;
    }
  };

  $scope.showFlagDetail = false;
  $scope.flagPieces = [];

  $scope.$watch('flagPieces', function() {
    $scope.data.expFlags = $scope.flagPieces.map(function(flagPiece) {
      return flagPiece.join(':');
    }).join(',');
  }, true);

  $scope.$watch('data.expFlags', function() {
    $scope.flagPieces = $scope.data.expFlags.split(',').map(function(flagPair) {
      return flagPair.split(':');
    });
  });

  $scope.showAppendDetail = false;
  $scope.appendParams = [];

  $scope.$watch('appendParams', function() {
    $scope.data.append = $scope.appendParams.map(function(paramPiece) {
      return paramPiece.join('=');
    }).join('&');
  }, true);

  $scope.$watch('data.append', function() {
    $scope.appendParams = $scope.data.append.split('&').map(function(appendPair) {
      return appendPair.split('=');
    });
  });

  // TODO(happykins): Make this work for mirrored requests once mirrored is less
  // awful.
  $scope.addExpFlag = function(flag, value) {
    this.data['expFlags'] = this.data['expFlags'] || '';
    if (this.data['expFlags'].length &&
        this.data['expFlags'].charAt(this.data['expFlags'].length - 1) !=
          ',') {
      this.data['expFlags'] += ',';
    }
    var flagValueStr = '' + flag + ':' + value;
    if (this.data['expFlags'].indexOf(flagValueStr) < 0) {
      this.data['expFlags'] += flagValueStr;
    }
  };

  // TODO(happykins): Make this work for mirrored requests once mirrored is less
  // awful.
  $scope.removeExpFlag = function(flag, value) {
    this.data['expFlags'] = this.data['expFlags'] || '';
    var flagValueStr = '' + flag + ':' + value;
    if (this.data['expFlags'].indexOf(flagValueStr) >= 0) {
      this.data['expFlags'] =
          this.data['expFlags'].replace(flagValueStr, '');
      this.data['expFlags'] =
          this.data['expFlags'].replace(',,', ',');
    }
  };

  $scope.upsertUrlParam = function(param, value) {
    $scope.removeUrlParam(param);
    $scope.data['append'] += ('&' + param + '=' + value);
  }

  // beware! the arguments get dumped directly into a regex constructor
  $scope.removeUrlParam = function(param, value) {
    if (typeof value === 'string') {
      var r = new RegExp('&' + param + '=' + value + '(?=(&|$))','g');
    } else {
      var r = new RegExp('&' + param + '=[^&]*','g');
    }
    $scope.data['append'] = $scope.data['append'].replace(r, '');
  }

  // beware! the arguments get dumped directly into a regex constructor
  $scope.hasUrlParam = function(param, value) {
    if (typeof value === 'string') {
      var r = new RegExp('&' + param + '=' + value + '(?=(&|$))','g');
    } else {
      var r = new RegExp('&' + param + '=[^&]*','g');
    }
    return $scope.data['append'].search(r) >= 0;
  }

  $scope.updateInlineHydra = function(inlineHydra) {
    if (inlineHydra) {
      this.removeExpFlag('use_external_hydra_js', 'true');
      this.addExpFlag('use_external_hydra_js', 'false');
    } else {
      this.removeExpFlag('use_external_hydra_js', 'false');
      this.addExpFlag('use_external_hydra_js', 'true');
    }
  };

  $scope.toggleSnakeAds = function(enableSnakeAds) {
    window.snakeAds = enableSnakeAds;
  };

  $scope.disableIframeSizeCheck = function(noSizeCheck) {
    if (noSizeCheck) {
      this.addExpFlag('max_valid_iframe_small_dimension', '9001');
      this.addExpFlag('max_valid_iframe_height', '9001');
      this.addExpFlag('max_valid_iframe_width', '9001');
      this.addExpFlag('min_valid_iframe_height', '0');
      this.addExpFlag('min_valid_iframe_width', '0');
    } else {
      this.removeExpFlag('max_valid_iframe_small_dimension', '9001');
      this.removeExpFlag('max_valid_iframe_height', '9001');
      this.removeExpFlag('max_valid_iframe_width', '9001');
      this.removeExpFlag('min_valid_iframe_height', '0');
      this.removeExpFlag('min_valid_iframe_width', '0');
    }
  };

  $scope.injectImageIntoTextAds = function(injectImage) {
    var urlValue = '//lh3.googleusercontent.com/9izlzwue2n5YoIeRHya3rBg-eBjX5cPJ3n4WXz7-dX2pXjn1sHMJtkF81FyvqiszfWRgBEq008gdZG1Xtsc3CKk0DqnYqTDzcLVJBNId5CDrUhEGpVv5Lxt-FzOPCelYNzT_qFM';
    // https\\://lh5.googleusercontent.com/-qrnOJR6Lvco/UmFOwNBFtMI/AAAAAAAAAbM/4X0-Y3XsOGQ/s250/calm_sea_view.jpg';
    console.log('Mama, no hands! ' + injectImage);
    if (injectImage) {
      this.addExpFlag('fixed_image_extension_url', urlValue);
    } else {
      this.removeExpFlag('fixed_image_extension_url', urlValue);
    }
  };

  $scope.writeNightMode = function(nightMode) {
    localStorage.setItem('nightMode', nightMode.toString());

    if (nightMode) {
      document.body.className += ' night';
    } else {
      document.body.className = document.body.className.replace(/\s+night/, ' ');
    }
  };
  $scope.writeNightMode(nightMode);

  $scope.$watch('data.append', function matchRequestCoreCheckboxState(str) {
    $scope.data['requestCore'] = $scope.hasUrlParam('ecr', 'true') &&
        $scope.hasUrlParam('crui', 'image_with_title_underneath');
  });

  $scope.toggleCoreUrlParams = function() {
    if ($scope.data['requestCore']) {
      $scope.upsertUrlParam('ecr', 'true');
      $scope.upsertUrlParam('crui', 'image_with_title_underneath');
    } else {
      $scope.removeUrlParam('ecr', 'true');
      $scope.removeUrlParam('crui', 'image_with_title_underneath');
    }
  };

  $scope.sendData = function() {
    hashService.sendData(this.data);
  };

  $scope.setData = function(data) {
    this.data = data;
    this.modifyDataIfNecessary();
    this.showMeTheAds(false);
  };

  $scope.modifyDataIfNecessary = function() {
    if (!valueInObject($scope.Hosts, $scope.data.host)) {
      $scope.Hosts.CUSTOM = $scope.data.host;
      $scope.customHost = $scope.data.host;
    }
  };

  $scope.keyPress = function(e) {
    if (e.target.type == 'text' || e.target.type == 'textarea') return;
    // 99 = c, 115 = s, 101 = e, 116 = t
    if (e.keyCode == 99) this.clear();
    if (e.keyCode == 115) this.showMeTheAds(true);
    if (e.keyCode == 116) this.toggleSettings();
  };

  for (var i = 1; i <= arrowSandbox.Settings.NumMirrors; ++i) {
    var suffix = i == 1 ? '' : i;
    $scope.data['mirrorAppend' + suffix] = '';
    $scope.data['mirrorExperimentId' + suffix] = '';
    $scope.data['mirrorExpFlags' + suffix] = '';
    $scope.data['mirrorHost' + suffix] = 'googleads.g.doubleclick.net';
  }

  var init = function() {
    console.log('Welcome to the ARROW Sandbox');
    $scope.loadFormats(arrowSandbox.Settings.Formats.Web);
    hashService.init($scope);
  };

  init();
})

.controller('OutputController', function($scope, injectorFactory) {
  $scope.output = injectorFactory.output;

  $scope.removeAdGroup = function(group) {
    $scope.output.splice($scope.output.indexOf(group), 1);
  };
  $scope.reloadAdGroup = function() {
    // Not angular-ish quick hack. :P
    var adGroupIframes = event.target.parentNode.getElementsByTagName('iframe');
    for (var i = 0; i < adGroupIframes.length; ++i) {
      adGroupIframes[i].src = adGroupIframes[i].src;
    }
  };
})

.directive('pla', function($http) {
  var tplLoaded = $http.get('templates/plaIframe.tpl');
  var iframes = [];
  window.addEventListener('message', function(e) {
    iframes.forEach(function(iframe) {
      console.log('message', iframe, e);
      iframe.contentWindow.postMessage(e.data, '*');
    });
  });

  return {
    restrict: 'E',
    link: function(scope, element, attrs) {
      var adobject = scope.adobject;
      var params = adobject.adFrame.params;
      var adUrl = adobject.url.$$unwrapTrustedValue();
      var host = adUrl.match(/:\/\/([^\/]+)\//)[1];
      var screenSize = adobject.screenSize || '360x640';
      var deviceWidth = screenSize.split('x')[0];
      var deviceHeight = screenSize.split('x')[1];
      var $iframe = angular.element('<iframe style="width:' + deviceWidth + 'px; height:' + deviceHeight + 'px;" class="plaIframe"></iframe>');
      var iframe = $iframe[0];
      element.append($iframe);
      iframes.push(iframe);
      var data = {
        adHeight: adobject.height,
        adType: params.ad_type,
        adWidth: adobject.width,
        client: params.client,
        deviceHeight: deviceHeight,
        deviceWidth: deviceWidth,
        host: host,
        language: adobject.language,
        plaType: adobject.plaType,
        url: params.url,
        userAgent: params.useragent,
        server: params.server
      };
      tplLoaded.success(function(tpl) {
        var doc = iframe.contentWindow.document;
        doc.open();
        doc.write(tpl.replace(/{{(\w+)}}/g, function(_, name) {
          return data[name] == null ? '' : data[name];
        }));
        doc.close();
      });
    }
  };
})

.directive('debug', function() {
  return {
    restrict: 'E',
    link: function link(scope, elem, attrs) {
      var baseUrl = attrs.baseurl;
      var contains = '';
      var debugParams = arrowSandbox.Settings.DebugParams;
      for (var i = 0; i < debugParams.length; i++) {
        var sep = i == debugParams.length - 1 ? '' : ' ';
        var label = debugParams[i] || 'new tab';
        var debParam = debugParams[i] ? '&deb=' + debugParams[i] : '';
        contains += '<a class="btn btn-default" href="' + baseUrl + debParam +
            '" target="_blank">' + label + '</a>' + sep;
      }
      elem.html('<div class="btn btn-sm btn-success main">Debug</div>' +
          '<div class="btn-group btn-group-sm options">' + contains + '</div>');
    }
  };
});
