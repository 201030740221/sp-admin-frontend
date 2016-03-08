/** @jsx React.DOM */

'use strict';

/* Initialize Locales */
l20n.initializeLocales('docs', {
  'locales': ['en-US'],
  'default': 'en-US'
}, 'public');

/* Initializing touch events */
React.initializeTouchEvents(true);

/* APP PAGES */
var homepage = require('./routes/app/homepage.jsx');

/* DOCUMENTATION PAGES */
var css = require('./routes/app/docs/css.jsx');
var components = require('./routes/app/docs/components.jsx');
var installation = require('./routes/app/docs/installation.jsx');
var gulpfilebasics = require('./routes/app/docs/gulpfilebasics.jsx');
var gulpfilesass = require('./routes/app/docs/gulpfilesass.jsx');
var gulpfilejsx = require('./routes/app/docs/gulpfilejsx.jsx');
var gulpfilewebfont = require('./routes/app/docs/gulpfilewebfont.jsx');
var gulpfilescaffolding = require('./routes/app/docs/gulpfilescaffolding.jsx');
var gulpfileexternalplugins = require('./routes/app/docs/gulpfileexternalplugins.jsx');
var reactdoc = require('./routes/app/docs/reactdoc.jsx');
var rubixdoc = require('./routes/app/docs/rubix.jsx');
var rubixsassdoc = require('./routes/app/docs/rubixsass.jsx');
var bootstrapgrid = require('./routes/app/docs/bootstrap/grid.jsx');
var typography = require('./routes/app/docs/bootstrap/typography.jsx');
var code = require('./routes/app/docs/bootstrap/code.jsx');
var tables = require('./routes/app/docs/bootstrap/tables.jsx');
var forms = require('./routes/app/docs/bootstrap/forms.jsx');
var inputsdocs = require('./routes/app/docs/bootstrap/inputsdocs.jsx');
var textareadocs = require('./routes/app/docs/bootstrap/textareadocs.jsx');
var checkradio = require('./routes/app/docs/bootstrap/checkradio.jsx');
var selectdocs = require('./routes/app/docs/bootstrap/select.jsx');
var buttondocs = require('./routes/app/docs/bootstrap/buttons.jsx');
var dropdowndocs = require('./routes/app/docs/bootstrap/dropdowns.jsx');
var buttongroupdocs = require('./routes/app/docs/bootstrap/button_groups.jsx');
var inputgroupdocs = require('./routes/app/docs/bootstrap/input_groups.jsx');
var navdocs = require('./routes/app/docs/bootstrap/navs.jsx');
var navbardocs = require('./routes/app/docs/bootstrap/navbar.jsx');
var breadcrumbdocs = require('./routes/app/docs/bootstrap/breadcrumbs.jsx');
var paginationdocs = require('./routes/app/docs/bootstrap/pagination.jsx');
var labelsbadgesdocs = require('./routes/app/docs/bootstrap/labels_and_badges.jsx');
var jumbodocs = require('./routes/app/docs/bootstrap/jumbotron.jsx');
var alertdocs = require('./routes/app/docs/bootstrap/alerts.jsx');
var progressdocs = require('./routes/app/docs/bootstrap/progress.jsx');
var mediadocs = require('./routes/app/docs/bootstrap/media.jsx');
var listgroupdocs = require('./routes/app/docs/bootstrap/list_group.jsx');
var l20ndocs = require('./routes/app/docs/l20ndocs.jsx');

/* ROUTES */
var routes = (
  <Routes>
    <Route name='root' path='/' view={homepage} />

    <Route name='docs' path='docs'>
      <Route name='installation' path='installation' view={installation} />
      <Route name='css' path='css' view={css} />
      <Route name='components' path='components' view={components} />

      <Route name='gulpfile' path='gulpfile'>
        <Route name='basics' path='basics' view={gulpfilebasics} />
        <Route name='sass' path='sass' view={gulpfilesass} />
        <Route name='jsx' path='jsx' view={gulpfilejsx} />
        <Route name='webfonts' path='webfonts' view={gulpfilewebfont} />
        <Route name='scaffolding' path='scaffolding' view={gulpfilescaffolding} />
        <Route name='externalplugins' path='externalplugins' view={gulpfileexternalplugins} />
      </Route>

      <Route name='rubix' path='rubix'>
        <Route name='react' path='react' view={reactdoc} />
        <Route name='rubix-jsx' path='rubix-jsx' view={rubixdoc} />
        <Route name='rubix-sass' path='rubix-sass' view={rubixsassdoc} />
      </Route>

      <Route name='bootstrap' path='bootstrap'>
        <Route name='grid' path='grid' view={bootstrapgrid} />
        <Route name='typography' path='typography' view={typography} />
        <Route name='code' path='code' view={code} />
        <Route name='tables' path='tables' view={tables} />
        <Route name='forms' path='forms' view={forms} />

        <Route name='form_controls' path='form_controls'>
          <Route name='inputs' path='inputs' view={inputsdocs} />
          <Route name='textarea' path='textarea' view={textareadocs} />
          <Route name='checkradio' path='checkradio' view={checkradio} />
          <Route name='select' path='select' view={selectdocs} />
          <Route name='buttons' path='buttons' view={buttondocs} />
        </Route>

        <Route name='components' path='components'>
          <Route name='dropdowns' path='dropdowns' view={dropdowndocs} />
          <Route name='button_groups' path='button_groups' view={buttongroupdocs} />
          <Route name='input_groups' path='input_groups' view={inputgroupdocs} />
          <Route name='navs' path='navs' view={navdocs} />
          <Route name='navbar' path='navbar' view={navbardocs} />
          <Route name='breadcrumbs' path='breadcrumbs' view={breadcrumbdocs} />
          <Route name='pagination' path='pagination' view={paginationdocs} />
          <Route name='labels_and_badges' path='labels_and_badges' view={labelsbadgesdocs} />
          <Route name='jumbotron' path='jumbotron' view={jumbodocs} />
          <Route name='alerts' path='alerts' view={alertdocs} />
          <Route name='progress-bars' path='progress-bars' view={progressdocs} />
          <Route name='media' path='media' view={mediadocs} />
          <Route name='list-group' path='list-group' view={listgroupdocs} />
        </Route>
      </Route>

      <Route name='l20n' path='l20n' view={l20ndocs} />
    </Route>
  </Routes>
);

Pace.once('hide', function() {
  $('#pace-loader').removeClass('pace-big').addClass('pace-small');
});

var InitializeRouter = function(View) {
  // cleanup
  if(window.Rubix) window.Rubix.Cleanup();
  Pace.restart();
  if(window.hasOwnProperty('ga') && typeof window.ga === 'function') {
    window.ga('send', 'pageview', {
     'page': window.location.pathname + window.location.search  + window.location.hash
    });
  }

  React.renderComponent(<View />, document.getElementById('app-container'), function() {
    // l20n initialized only after everything is rendered/updated
    l20n.ready();
    setTimeout(function() {
      $('body').removeClass('fade-out');
    }, 500);
  });
};

RRouter.routing = RRouter.HashRouting.start(routes, InitializeRouter);
