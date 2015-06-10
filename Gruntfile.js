module.exports = function(grunt) {

    // All configuration goes here
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        less: {
            development: {
                options: {
                    paths: ["modules/*"]
                },
                files: {
                    "css/hevnly.css": "main.less",
                    "css/website.css": "website.less"
                }
            }
        },

        postcss: {
            options: {
              map: true,
              processors: [
                require('autoprefixer-core')({browsers: 'last 2 versions'}),
                require('csswring')
              ]
            },
            hevnly: {
              src: 'css/hevnly.css',
              dest: 'css/hevnly-prefixed.css'
            },
            website: {
              src: 'css/website.css',
              dest: 'css/website-prefixed.css'
            }
        },

        watch: {
            watchmain: {
                files: ['main.less', 'website.less', 'modules/*.less'],
                tasks: ['less', 'postcss'],
                options: {
                    livereload: true
                }
            }
        },
    })

    // Where we tell Grunt we plan to use this plug-in
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-postcss');

    // Where we tell Grunt what to do when we type "grunt" into the terminal
    grunt.registerTask('default', ['less', 'postcss']);
}
