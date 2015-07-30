/**
 * Created by Sang Nguyen on 30/07/2015.
 */

//Gruntfile
module.exports = function(grunt) {


    //Initializing the configuration object
    grunt.initConfig({

        cssmin: {
            admin: {
                files: {
                    './public/css/style.min.css': ['./public/css/style.css'],

                }
            }
        },
        watch:{
            less: {
                files: [
                    './public/css/*.css',
                ],  //watched files
                tasks: ['cssmin'],
                options: {
                    livereload: true                        //reloads the browser
                }//tasks to run
            },
            livereload: {
                files: [
                    './public/css/*.css'
                ],
                options: {
                    livereload: true
                }

            }

        }

    });

    // // Plugin loading
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');


    // Task definition
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['cssmin']);

};
