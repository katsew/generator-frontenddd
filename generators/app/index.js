'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var mkdir = require('mkdirp');

var FrontendDevel = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the incredible ' + chalk.red('frontenddd') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'project_name',
      message: 'Project Name',
      default: this.appname
    }, {
      type: 'input',
      name: 'project_desc',
      message: 'Project Description',
      default: ''
    }, {
      type: 'input',
      name: 'author',
      message: 'Author',
      default: ''
    }, {
      type: 'list',
      name: 'license',
      message: 'License',
      choices: ['MIT', 'Apache v2 License', 'GPL v2', 'LGPL v3', 'none'],
      default: 'none'
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: function () {
    try {
      mkdir.sync(this.destinationPath('views/include'));
      mkdir.sync(this.destinationPath('views/layout'));

      mkdir.sync(this.destinationPath('assets/babel/action'));
      mkdir.sync(this.destinationPath('assets/babel/component'));
      mkdir.sync(this.destinationPath('assets/babel/store'));

      mkdir.sync(this.destinationPath('assets/stylus/deps'));
      mkdir.sync(this.destinationPath('assets/stylus/reset'));
      mkdir.sync(this.destinationPath('assets/stylus/block'));
      mkdir.sync(this.destinationPath('assets/stylus/element'));
      mkdir.sync(this.destinationPath('assets/stylus/modifier'));

      mkdir.sync(this.destinationPath('assets/image'));
    } catch (e) {
      console.log('Failed to create directories!!!');
      console.log(e);
    }


    this.fs.copy(
      this.templatePath('circle.yml'),
      this.destinationPath('circle.yml')
    );
    this.fs.copy(
      this.templatePath('_.babelrc'),
      this.destinationPath('.babelrc')
    );
    this.fs.copy(
      this.templatePath('_.editorconfig'),
      this.destinationPath('.editorconfig')
    );
    this.fs.copy(
      this.templatePath('_.gitignore'),
      this.destinationPath('.gitignore')
    );
    this.fs.copy(
      this.templatePath('gulpfile.coffee'),
      this.destinationPath('gulpfile.coffee')
    );
    this.fs.copy(
      this.templatePath('gulp'),
      this.destinationPath('gulp')
    );
    this.fs.copy(
      this.templatePath('views'),
      this.destinationPath('views')
    );
    this.fs.copy(
      this.templatePath('assets/babel/core.js'),
      this.destinationPath('assets/babel/core.js')
    );
    this.fs.copy(
      this.templatePath('reset.css'),
      this.destinationPath('assets/stylus/reset/reset.css')
    );
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath('_bower.json'),
      this.destinationPath('bower.json'),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath('_README.md'),
      this.destinationPath('README.md'),
      this.props
    );
  },

  install: function () {
    this.installDependencies();
  }
});

module.exports = FrontendDevel;
