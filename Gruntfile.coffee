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
        files: ['app/**/*.coffee', 'test/**/*.coffee']
        tasks: ['coffee']

      vendor:
        files: ['vendor/javascripts/**/*.js', 'vendor/stylesheets/**/*.css']
        tasks: ['concat']

    emberTemplates:
      compile:
        options:
          amd: false,
          templateBasePath: /app\/templates\//
          templateFileExtensions: /\.hbs/
        files: 'public/javascripts/templates.js': 'app/templates/**/*.hbs'

    coffee:
      compile:
        files:
          'public/javascripts/application.js': ['app/*.coffee', 'app/models/**/*.coffee', 'app/views/**/*.coffee', 'app/controllers/**/*.coffee', 'app/routes/**/*.coffee']
          'public/javascripts/tests.js': ['test/**/*.coffee']

    sass:
      compile:
        files:
          'public/stylesheets/application.css': ['app/stylesheets/application.scss']

    concat:
      vendor_js:
        src: [
          'vendor/javascripts/handlebars-1.0.0.js',
          'vendor/javascripts/ember.js',
          'vendor/javascripts/ember-data.js',
          'vendor/javascripts/profitably-branding.js'
        ]
        dest: 'public/javascripts/vendor.js'
      vendor_css:
        src: [
          'vendor/stylesheets/profitably-branding.css'
        ]
        dest: 'public/stylesheets/vendor.css'

    express:
      server:
        options:
          port: 9000
          bases: 'public'

    'gh-pages':
      options:
        base: 'public'
      src: ['**']

    grunt.loadNpmTasks 'grunt-contrib-concat'
    grunt.loadNpmTasks 'grunt-contrib-watch'
    grunt.loadNpmTasks 'grunt-contrib-coffee'
    grunt.loadNpmTasks 'grunt-contrib-sass'
    grunt.loadNpmTasks 'grunt-ember-templates'
    grunt.loadNpmTasks 'grunt-express'
    grunt.loadNpmTasks('grunt-gh-pages')

    grunt.registerTask 'default', ['emberTemplates', 'coffee', 'sass', 'concat', 'express', 'watch']