module.exports = function(grunt) {
  grunt.initConfig({
    pkg : grunt.file.readJSON('package.json'),//read all the packages inside the json file

    uglify: {
      build: {
        src: 'js/main.js',
        dest: 'prod/main.min.js'
      }
    },
    watch: {
      sass: {
        files: "css/main.scss",
        tasks: ['sass']
      }
    },
    sass: {
        dev: {
            files: {
                "css/main.css" : "css/main.scss"
            }
        }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['uglify']);
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
};
