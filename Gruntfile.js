module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
    	pkg: grunt.file.readJSON('package.json'),

      copy: {
        css: {expand: true, src: ['css/*'], dest: 'dist/', filter: 'isFile'},
        data: {expand: true, src: ['data/*'], dest: 'dist/', filter: 'isFile'},
        fonts: {expand: true, src: ['fonts/*'], dest: 'dist/', filter: 'isFile'},
        requirejs: {
          src: 'bower_components/requirejs/require.js',
          dest: 'dist/js/require.js'
        }
      },
      requirejs: {
        compile: {
          options: {

            mainConfigFile: "js/config.js",
            baseUrl: 'js',
            name: '../node_modules/almond/almond',
            include: ['main'],
            insertRequire: ['main'],
            wrap:true,
            out: "dist/js/jrnl-timeline.min.js"
          }
        }
      },
      htmlbuild: {
        dist: {
          src: 'index.html',
          dest: 'dist/',
          options: {
            beautify: true,
            relative: true,
            scripts: {
              bundle: [
              'dist/js/*.js'
              ]
            },

            styles: {
              bundle: [
              'dist/css/*.css'               
              ]
            }
          }
        }
      },
      cssmin: {
        minify: {
          expand: true,
          cwd: 'css/',
          src: ['*.css', '!*.min.css'],
          dest: 'dist/css/',
          ext: '.min.css'
        }
      }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-html-build');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['copy:data','copy:fonts','requirejs:compile','cssmin','htmlbuild']);

  };