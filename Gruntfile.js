module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    sourcemap: 'none',
                    require: 'sass-media_query_combiner'
                },
                files: {
                    'Droopy.css': 'Droopy.scss'
                }
            }
        },
        scsslint: {
            allFiles: [
                'modules/*.scss',
                'partials/*.scss'
            ],
            options: {
                config: '.scss-lint.yml'
            }
        },
        jshint: {
            options: {
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true
                },
                reporter: require('jshint-stylish')
            },
            all: ['Gruntfile.js', 'Droopy.js']
        },
        uglify: {
            options: {
                mangle: true,
                screwIE8: true
            },
            dist: {
                files: {
                    'Droopy.min.js': [ 'Droopy.js' ]
                }
            }
        },
        watch: {
            scripts: {
                files: [ 'Droopy.js' ],
                tasks: [ 'js' ],
                options: {
                    spawn: true
                }
            },
            styles: {
                files: [
                    'modules/*.scss',
                    'partials/*.scss'
                ],
                tasks: [ 'sass:dist' ]
            }
        }
    });

    grunt.registerTask('css', [ 'sass:dist' ]);
    grunt.registerTask('js', [ 'jshint', 'uglify' ]);
    grunt.registerTask('default', [ 'css', 'js' ]);
};