/** @jsx React.DOM */

'use strict';

/* Initialize Locales */
l20n.initializeLocales('demo', {
  'locales': ['en-US', 'fr', 'it', 'ge', 'ar', 'ch'],
  'default': 'en-US'
}, 'public');

/* Initializing touch events */
React.initializeTouchEvents(true);

require('./preloader.jsx');

/* ERROR PAGES */
var notfound = require('./routes/notfound.jsx');

/* HOMEPAGE */
var homepage = require('./routes/app/homepage.jsx');

/* APP PAGES */
var dashboard = require('./routes/app/dashboard.jsx');
var inbox = require('./routes/app/inbox.jsx');
var compose = require('./routes/app/compose.jsx');
var mail = require('./routes/app/mail.jsx');
var gallery = require('./routes/app/gallery.jsx');
var social = require('./routes/app/social.jsx');
var posts = require('./routes/app/blog/posts.jsx');
var single_post = require('./routes/app/blog/single_post.jsx');

/* COMPONENT PAGES */
var panels = require('./routes/app/panels.jsx');

var rubix_line = require('./routes/app/charts/rubix/line_series.jsx');
var rubix_area = require('./routes/app/charts/rubix/area_series.jsx');
var rubix_barcol = require('./routes/app/charts/rubix/barcol_series.jsx');
var rubix_mixed = require('./routes/app/charts/rubix/mixed_series.jsx');
var rubix_piedonut = require('./routes/app/charts/rubix/piedonut_series.jsx');
var chartjs = require('./routes/app/charts/chartjs.jsx');
var c3js = require('./routes/app/charts/c3.jsx');
var morrisjs = require('./routes/app/charts/morris.jsx');

var timeline = require('./routes/app/timeline.jsx');
var interactivetimeline = require('./routes/app/interactive-timeline.jsx');
var codemirror = require('./routes/app/codemirror.jsx');
var maps = require('./routes/app/maps.jsx');
var editor = require('./routes/app/editor.jsx');
var fonts = require('./routes/app/fonts.jsx');
var buttons = require('./routes/app/buttons.jsx');
var dropdowns = require('./routes/app/dropdowns.jsx');
var tabs_and_navs = require('./routes/app/tabs_and_navs.jsx');
var sliders = require('./routes/app/sliders.jsx');
var knobs = require('./routes/app/knobs.jsx');
var modals = require('./routes/app/modals.jsx');
var messenger = require('./routes/app/messenger.jsx');
var form_controls = require('./routes/app/form_controls.jsx');
var xeditable = require('./routes/app/xeditable.jsx');
var wizard = require('./routes/app/wizard.jsx');
var bootstraptables = require('./routes/app/bootstrap-tables.jsx');
var datatables = require('./routes/app/datatables.jsx');
var tablesaw = require('./routes/app/tablesaw.jsx');
var grid = require('./routes/app/grid.jsx');
var calendar = require('./routes/app/calendar.jsx');
var lists = require('./routes/app/lists.jsx');
var dropzone = require('./routes/app/dropzone.jsx');
var crop = require('./routes/app/crop.jsx');

/* EXTRA PAGES */
var login = require('./routes/app/login.jsx');
var signup = require('./routes/app/signup.jsx');
var lock = require('./routes/app/lock.jsx');
var pricing = require('./routes/app/pricing.jsx');
var invoice = require('./routes/app/invoice.jsx');

/* ROUTES */
var routes = (
  <Routes>
    <Route name='root' path='/' view={homepage}>
      <Route name='app' path='app'>
        <Route name='dashboard' path='dashboard' view={dashboard} />
        <Route name='mailbox' path='mailbox'>
          <Route name='inbox' path='inbox' view={inbox} />
          <Route name='compose' path='compose' view={compose} />
          <Route name='mail' path='mail' view={mail} />
        </Route>
        <Route name='gallery' path='gallery' view={gallery} />
        <Route name='social' path='social' view={social} />

        <Route name='blog' path='blog'>
          <Route name='posts' path='posts' view={posts} />
          <Route name='post' path='post' view={single_post} />
        </Route>

        <Route name='panels' path='panels' view={panels} />

        <Route name='charts' path='charts'>
          <Route name='rubix' path='rubix'>
            <Route name='line' path='line' view={rubix_line} />
            <Route name='area' path='area' view={rubix_area} />
            <Route name='barcol' path='barcol' view={rubix_barcol} />
            <Route name='mixed' path='mixed' view={rubix_mixed} />
            <Route name='piedonut' path='piedonut' view={rubix_piedonut} />
          </Route>

          <Route name='chartjs' path='chartjs' view={chartjs} />
          <Route name='c3js' path='c3js' view={c3js} />
          <Route name='morrisjs' path='morrisjs' view={morrisjs} />
        </Route>

        <Route name='fonts' path='fonts' view={fonts} />
        <Route name='timeline' path='timeline' view={timeline} />
        <Route name='interactive-timeline' path='interactive-timeline' view={interactivetimeline} />
        <Route name='codemirror' path='codemirror' view={codemirror} />
        <Route name='maps' path='maps' view={maps} />
        <Route name='editor' path='editor' view={editor} />

        <Route name='ui-elements' path='ui-elements'>
          <Route name='buttons' path='buttons' view={buttons} />
          <Route name='dropdowns' path='dropdowns' view={dropdowns} />
          <Route name='tabs-and-navs' path='tabs-and-navs' view={tabs_and_navs} />
          <Route name='sliders' path='sliders' view={sliders} />
          <Route name='knobs' path='knobs' view={knobs} />
          <Route name='modals' path='modals' view={modals} />
          <Route name='messenger' path='messenger' view={messenger} />
        </Route>

        <Route name='forms' path='forms'>
          <Route name='controls' path='controls' view={form_controls} />
          <Route name='xeditable' path='xeditable' view={xeditable} />
          <Route name='wizard' path='wizard' view={wizard} />
        </Route>

        <Route name='tables' path='tables'>
          <Route name='bootstrap-tables' path='bootstrap-tables' view={bootstraptables} />
          <Route name='datatables' path='datatables' view={datatables} />
          <Route name='tablesaw' path='tablesaw' view={tablesaw} />
        </Route>

        <Route name='grid' path='grid' view={grid} />
        <Route name='calendar' path='calendar' view={calendar} />
        <Route name='lists' path='lists' view={lists} />

        <Route name='file-utilities' path='file-utilities'>
          <Route name='dropzone' path='dropzone' view={dropzone} />
          <Route name='crop' path='crop' view={crop} />
        </Route>

        <Route name='login' path='login' view={login} />
        <Route name='signup' path='signup' view={signup} />
        <Route name='lock' path='lock' view={lock} />
        <Route name='pricing' path='pricing' view={pricing} />
        <Route name='invoice' path='invoice' view={invoice} />
      </Route>

      <Route name='notfound' path='/404' view={notfound} />
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
