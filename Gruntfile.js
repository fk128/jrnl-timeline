module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
    	pkg: grunt.file.readJSON('package.json'),

  requirejs: {
    compile: {
    options: {
      mainConfigFile: "js/config.js",
      name: "main", // assumes a production build using almond
      out: "js/build/optimized.js"
    }
  }
}

});

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-requirejs');
   
    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['requirejs']);
   

};