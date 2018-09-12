angular.module('sandbox').factory('injectorFactory', function($sce) {

  /**
   * The output will be formatted in the following structure, see function
   * injectIFramesInner for more information;
   * [
   *   // An ad group.
   *   [
   *     // An ad object.
   *     { // Defined in function injectIFramesInner. },
   *     // More ad objects if request is mirrored.
   *   ],
   *   // More ad groups...
   * ]
   */
  var output = [];

  function AdObject(adFrame, data) {
    this.adFrame = adFrame;
    this.format = data.format;
    this.platform = data.platform;
    this.width = data.format.match(/^[0-9]*/)[0];
    this.height = data.format.match(/x([0-9]*)/)[1];
    this.url = $sce.trustAsResourceUrl(adFrame.toUrl());
    this.plaType = data.plaType;
    this.screenSize = data.screenSize;
    this.language = data.language;
  }

  function injectIFrames(data) {
    var dataCopy = angular.copy(data);
    // Expand by languages if applicable.
    if (dataCopy['language'] == '*') {
      for (var i in arrowSandbox.Enums.LANGUAGES) {
        dataCopy['language'] = arrowSandbox.Enums.LANGUAGES[i];
        injectIFramesInner(dataCopy);
      }
      return;
    }
    // Expand by countries if applicable.
    if (dataCopy['country'] == '*') {
      for (var i in arrowSandbox.Enums.COUNTRIES) {
        dataCopy['country'] = arrowSandbox.Enums.COUNTRIES[i];
        injectIFramesInner(dataCopy);
      }
      return;
    }
    // Custom format overrides format.
    if (dataCopy['customFormat']) dataCopy['format'] = dataCopy['customFormat'];

    // Expand by formats if applicable.
    var format = dataCopy['format'];
    var enumFormats =
        dataCopy['platform'] == 'apps' ?
            arrowSandbox.Settings.Formats.App :
            arrowSandbox.Settings.Formats.Web;

    if (isAListOfFormat(format)) {
      var sizes = format.split(',');
      for (var i = 0; i < sizes.length; i++) {
        dataCopy['format'] = sizes[i].trim();
        injectIFramesInner(dataCopy);
      }
      return;
    }

    if (isUnionFormat(format)) {
      for (var i = 0; i < enumFormats.length; i++) {
        var curFormat = enumFormats[i];
        if (format == 'all'
            || (format == 'all core') && isCoreFormat(curFormat)
            || (format == 'all banners') && isBannerFormat(curFormat)
            || (format == 'top android banners') && isAndroidBannerFormat(curFormat)
            || (format == 'top ios banners') && isIosBannerFormat(curFormat)
            || (format == 'all interstitials') && !isBannerFormat(curFormat)) {
          // Consider keeping stripped formats in a separate enum, instead of
          // stripping at each call.
          dataCopy['format'] = stripFormat(curFormat);
          injectIFramesInner(dataCopy);
        }
      }
      return;
    }

    injectIFramesInner(dataCopy);
  };

  function injectIFramesInner(data, opt_obsoleteAdGroup) {
    const allUrls = Object.keys(arrowSandbox.Enums.TARGETING_URLS);
    data['url'] = data['urlChoice'] === 'random' ?
        allUrls[Math.floor(Math.random() * allUrls.length)] :
        data['urlChoice'];
    data['client'] = arrowSandbox.Enums.TARGETING_URLS[data['url']];
    var adGroup = [];
    var adFrame = new sandbox.AdFrame(data);
    var adObject = new AdObject(adFrame, data);
    adGroup.push(adObject);

    // Insert the mirrored ones
    for (var i = 1; data['mirrorAds' + (i == 1 ? '' : i)]; ++i) {
      var appendix = (i == 1 ? '' : i);
      var mirrorData = angular.copy(data);
      mirrorData['host'] = (data['mirrorHost' + appendix] ||
          'googleads.g.doubleclick.net');
      mirrorData['experimentId'] = data['mirrorExperimentId' + appendix] || '';
      mirrorData['expFlags'] = data['mirrorExpFlags' + appendix] || '';
      mirrorData['append'] = data['mirrorAppend' + appendix] || '';
      var mirrorAdFrame = new sandbox.AdFrame(mirrorData);
      var mirrorAdObject = new AdObject(mirrorAdFrame, mirrorData);
      adGroup.push(mirrorAdObject);
    }

    // adGroup is an array, but add a refresh property anyway
    adGroup.refresh = injectIFramesInner.bind(this, data, adGroup);

    if (opt_obsoleteAdGroup) {
      var idx = output.indexOf(opt_obsoleteAdGroup);
      if (idx >= 0) {
        output[idx] = adGroup;
        return;
      }
    }

    output.push(adGroup);
  };

  function clear() { output.length = 0; };

  // Utility functions
  function isCoreFormat(format) {
    return (format.indexOf(' ') == -1) && (format.indexOf('_') == -1);
  };
  function isBannerFormat(format) { return format.indexOf('i') == -1;};
  function isAndroidBannerFormat(format) {
    var len = arrowSandbox.Settings.Formats.Android.length;
    for (var i = 0; i < len; ++i)
      if (arrowSandbox.Settings.Formats.Android[i] == format)
        return true;
    return false;
  };
  function isIosBannerFormat(format) {
    var len = arrowSandbox.Settings.Formats.Ios.length;
    for (var i = 0; i < len; ++i)
      if (arrowSandbox.Settings.Formats.Ios[i] == format)
        return true;
    return false;
  }
  function isUnionFormat(format) {
    var check = format.split(' ')[0];
    return check == 'all' || check == 'top';
  };
  function isAListOfFormat(format) {
    return format.includes(',');
  };
  function stripFormat(format) { return format.split(' ')[0]; };

  return {
    output: output,
    injectIFrames: injectIFrames,
    clear: clear
  };

});

