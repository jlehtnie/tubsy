module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                 banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'out/<%= pkg.name %>.min.js'
            }
        },
        // Copy original html-files with debug-suffix to out
        copy: {
            files: {
                cwd: 'src',
                src: '*.html',
                dest: 'out/',
                flatten: true,
                expand: true,
                rename: function(dest, src) {
                    return dest + src.replace(/.html$/, ".debug.html");
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'copy']);

};
