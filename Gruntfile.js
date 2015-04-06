module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      jsHint: {
        files: ['src/assets/**/*.js', 'src/component/**/*.js'],
        tasks: ['jshint']
      },
      cssPrefixer: {
        files: ['src/assets/css/style.css'],
        tasks: ['autoprefixer']
      }
    },
    clean: {
      target:['dist/assets/']
    },
    stylus: {
      options: {
        use: [ function() { return require('autoprefixer-stylus')({ browsers: ['ie 7', 'ie 8'] }); } ]
      },
      compile: {
        files: {
          'dist/assets/css/style.css': 'src/assets/css/style.styl'
        }
      }
    },
    concat : {
      options: {
        seperator: ';',
      },
      target: {
        src: ['src/assets/**/*.js', 'src/component/**/*.js'],
        dest: 'src/js_concat.js'
      }
    },
    uglify: {
      options: {
        mangle: true,
        compress: true,
        sourceMap: true,
        banner: '/* <%= pkg.author %> |  <%= pkg.license %> | <%= grunt.template.today("yyyy-mm-dd") %> */'
      },
      target: {
        src: 'src/js_concat.js',
        dest: 'dist/assets/js/gyosun.min.js'
      }
    },
    jshint : {
      options: {
        eqeqeq: true,
        curly: true,
        undef: true,
        // unused: true
      },
      target: {
        // src: ['src/assets/**/*.js', 'src/component/**/*.js']
        src: 'src/assets/js/js.js'
      }
    },
    autoprefixer: {
      dist: {
        files: {
          'dist/assets/css/style.css': 'src/assets/css/style.css'
        }
      }
    },
  });
 
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('autoprefixer-stylus'); 
 
  grunt.registerTask('watch:dev', function() {
    var config = {
      options: {
        interrupt: true
      },
      cssStylus: {
        files: ['src/assets/css/style.styl'],
        tasks: ['stylus']
      },
      jsConcat: {
        files: ['src/assets/**/*.js', 'src/component/**/*.js'],
        tasks: ['concat']
      },
      jsUglify: {
        files: ['src/js_concat.js'],
        tasks: ['uglify']
      }
    };
    grunt.config('watch', config);
    grunt.task.run('watch');
  });
}