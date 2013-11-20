'use strict'
module.exports = (grunt) ->
  grunt.initConfig
    watch:
      sass:
        files: ['app/stylesheets/**/*.scss']
        tasks: ['sass']
      
      templates:
        files: ['app/templates/**/*.hbs']
        tasks: ['emberTemplates']
      
      coffee:
        files: ['app/**/**/*.coffee', 'test/**/*.coffee']
        tasks: ['coffee']
    
    emberTemplates:
      compile:
        options:
          amd: true,
          templateBasePath: /app\/templates\//
          templateFileExtensions: /\.hbs/
        files: 'public/javascripts/templates.js': 'app/templates/**/*.hbs'
      
    coffee:
      compile:
        files:
          'public/javascripts/application.js': ['app/**/**/*.coffee']
          'public/javascripts/tests.js': ['test/**/*.coffee']
    
    sass:
      compile:
        files:
          'public/stylesheets/application.css': ['app/stylesheets/**/*.scss']
    
    grunt.loadNpmTasks 'grunt-contrib-watch'
    grunt.loadNpmTasks 'grunt-contrib-coffee'
    grunt.loadNpmTasks 'grunt-contrib-sass'
    grunt.loadNpmTasks 'grunt-ember-templates'
    grunt.loadNpmTasks 'grunt-commonjs'
    
    
    grunt.registerTask 'default', ['emberTemplates', 'coffee', 'sass']