require.config({
  paths: {
    jquery: '../bower_components/jquery/dist/jquery',
    dateFormat: './dateFormat',
    timelineAnimate: './timeline-animate',
    utils: './utils',
    domReady: '../bower_components/requirejs-domready/domReady',
    listjs: '../bower_components/listjs/dist/list',
    loadJson: './load-json',
    modernizr: '../bower_components/modernizr/modernizr'
  },
  deps: ["main"] // load the main app

});
