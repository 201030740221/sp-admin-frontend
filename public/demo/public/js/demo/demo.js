/*! rubix - v1.0.0 - 2014-09-11 [copyright: SketchPixy LLP, email: support@sketchpixy.com] */
(function() {
/*DO NOT MODIFY*/

/*RROUTER*/
var _RTR_=window.RRouter || {};
var Routes =_RTR_.Routes,
    Route=_RTR_.Route,
    Link=_RTR_.Link,
    RoutingContextMixin=_RTR_.RoutingContextMixin;

/*REACTBOOTSTRAP+EXTRAS*/
var _RB32_=window.ReactBootstrap || {};
var Container=_RB32_.Container,
    Grid=_RB32_.Grid,
    Row=_RB32_.Row,
    Col=_RB32_.Col,
    ColMixin=_RB32_.ColMixin,
    Lead=_RB32_.Lead,
    Table=_RB32_.Table,
    Form=_RB32_.Form,
    FormGroup=_RB32_.FormGroup,
    Label=_RB32_.Label,
    Input=_RB32_.Input,
    InputGroup=_RB32_.InputGroup,
    InputGroupAddon=_RB32_.InputGroupAddon,
    InputGroupButton=_RB32_.InputGroupButton,
    Checkbox=_RB32_.Checkbox,
    Radio=_RB32_.Radio,
    Button=_RB32_.Button,
    Textarea=_RB32_.Textarea,
    Select=_RB32_.Select,
    Static=_RB32_.Static,
    Icon=_RB32_.Icon,
    HelpBlock=_RB32_.HelpBlock,
    Img=_RB32_.Img,
    Caret=_RB32_.Caret,
    Dropdown=_RB32_.Dropdown,
    DropdownButton=_RB32_.DropdownButton,
    Menu=_RB32_.Menu,
    MenuItem=_RB32_.MenuItem,
    ButtonGroup=_RB32_.ButtonGroup,
    ButtonToolbar=_RB32_.ButtonToolbar,
    Tab=_RB32_.Tab,
    TabPane=_RB32_.TabPane,
    TabList=_RB32_.TabList,
    TabContent=_RB32_.TabContent,
    TabContainer=_RB32_.TabContainer,
    Nav=_RB32_.Nav,
    NavBar=_RB32_.NavBar,
    NavText=_RB32_.NavText,
    NavLink=_RB32_.NavLink,
    NavItem=_RB32_.NavItem,
    NavForm=_RB32_.NavForm,
    NavBrand=_RB32_.NavBrand,
    NavHeader=_RB32_.NavHeader,
    NavToggle=_RB32_.NavToggle,
    NavButton=_RB32_.NavButton,
    NavContent=_RB32_.NavContent,
    BLink=_RB32_.BLink,
    Breadcrumb=_RB32_.Breadcrumb,
    Page=_RB32_.Page,
    Pager=_RB32_.Pager,
    Pagination=_RB32_.Pagination,
    Badge=_RB32_.Badge,
    BLabel=_RB32_.BLabel,
    Jumbotron=_RB32_.Jumbotron,
    Progress=_RB32_.Progress,
    ProgressGroup=_RB32_.ProgressGroup,
    Media=_RB32_.Media,
    MediaDiv=_RB32_.MediaDiv,
    MediaBody=_RB32_.MediaBody,
    MediaList=_RB32_.MediaList,
    MediaObject=_RB32_.MediaObject,
    MediaHeading=_RB32_.MediaHeading,
    ListGroup=_RB32_.ListGroup,
    ListGroupItem=_RB32_.ListGroupItem,
    ListGroupItemText=_RB32_.ListGroupItemText,
    ListGroupItemHeading=_RB32_.ListGroupItemHeading,
    Well=_RB32_.Well,
    Modal=_RB32_.Modal,
    ModalBody=_RB32_.ModalBody,
    ModalHeader=_RB32_.ModalHeader,
    ModalFooter=_RB32_.ModalFooter,
    ModalManager=_RB32_.ModalManager,
    Panel=_RB32_.Panel,
    PanelBody=_RB32_.PanelBody,
    PanelHeader=_RB32_.PanelHeader,
    PanelFooter=_RB32_.PanelFooter,
    PanelLeft=_RB32_.PanelLeft,
    PanelRight=_RB32_.PanelRight,
    PanelContainer=_RB32_.PanelContainer,
    LoremIpsum=_RB32_.LoremIpsum,
    TimelineView=_RB32_.TimelineView,
    TimelineItem=_RB32_.TimelineItem,
    TimelineHeader=_RB32_.TimelineHeader,
    TimelineIcon=_RB32_.TimelineIcon,
    TimelineAvatar=_RB32_.TimelineAvatar,
    TimelineTitle=_RB32_.TimelineTitle,
    TimelineBody=_RB32_.TimelineBody,
    Accordian=_RB32_.Accordian,
    AccordianPane=_RB32_.AccordianPane,
    AccordianTitle=_RB32_.AccordianTitle,
    AccordianContent=_RB32_.AccordianContent,
    IonTabContainer=_RB32_.IonTabContainer,
    IonTabHead=_RB32_.IonTabHead,
    IonTabBody=_RB32_.IonTabBody,
    IonTab=_RB32_.IonTab,
    IonTabItem=_RB32_.IonTabItem,
    PricingTable=_RB32_.PricingTable,
    PricingFeature=_RB32_.PricingFeature,
    PricingTableBody=_RB32_.PricingTableBody,
    PricingTablePrice=_RB32_.PricingTablePrice,
    PricingTableHeader=_RB32_.PricingTableHeader,
    PricingTableContainer=_RB32_.PricingTableContainer,
    PricingButtonContainer=_RB32_.PricingButtonContainer,
    Alert=_RB32_.Alert,
    AlertLink=_RB32_.AlertLink,
    Tag=_RB32_.Tag,
    Sidebar=_RB32_.Sidebar,
    SidebarNav=_RB32_.SidebarNav,
    SidebarBtn=_RB32_.SidebarBtn,
    SidebarMixin=_RB32_.SidebarMixin,
    SidebarNavItem=_RB32_.SidebarNavItem,
    SidebarControls=_RB32_.SidebarControls,
    SidebarControlBtn=_RB32_.SidebarControlBtn,
    TransitionEndEvent='webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';

/*L20N*/
var _RL20n_=window.ReactL20n;
var l20n=_RL20n_.l20n,
    Entity=_RL20n_.Entity;

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	'use strict';

	/* Initialize Locales */
	l20n.initializeLocales('demo', {
	  'locales': ['en-US', 'fr', 'it', 'ge', 'ar', 'ch'],
	  'default': 'en-US'
	}, 'public');

	/* Initializing touch events */
	React.initializeTouchEvents(true);

	__webpack_require__(1);

	/* ERROR PAGES */
	var notfound = __webpack_require__(2);

	/* HOMEPAGE */
	var homepage = __webpack_require__(3);

	/* APP PAGES */
	var dashboard = __webpack_require__(4);
	var inbox = __webpack_require__(5);
	var compose = __webpack_require__(6);
	var mail = __webpack_require__(7);
	var gallery = __webpack_require__(8);
	var social = __webpack_require__(9);
	var posts = __webpack_require__(40);
	var single_post = __webpack_require__(41);

	/* COMPONENT PAGES */
	var panels = __webpack_require__(10);

	var rubix_line = __webpack_require__(45);
	var rubix_area = __webpack_require__(46);
	var rubix_barcol = __webpack_require__(47);
	var rubix_mixed = __webpack_require__(48);
	var rubix_piedonut = __webpack_require__(49);
	var chartjs = __webpack_require__(42);
	var c3js = __webpack_require__(43);
	var morrisjs = __webpack_require__(44);

	var timeline = __webpack_require__(11);
	var interactivetimeline = __webpack_require__(12);
	var codemirror = __webpack_require__(13);
	var maps = __webpack_require__(14);
	var editor = __webpack_require__(15);
	var fonts = __webpack_require__(16);
	var buttons = __webpack_require__(17);
	var dropdowns = __webpack_require__(18);
	var tabs_and_navs = __webpack_require__(19);
	var sliders = __webpack_require__(20);
	var knobs = __webpack_require__(21);
	var modals = __webpack_require__(22);
	var messenger = __webpack_require__(23);
	var form_controls = __webpack_require__(24);
	var xeditable = __webpack_require__(25);
	var wizard = __webpack_require__(26);
	var bootstraptables = __webpack_require__(27);
	var datatables = __webpack_require__(28);
	var tablesaw = __webpack_require__(29);
	var grid = __webpack_require__(30);
	var calendar = __webpack_require__(31);
	var lists = __webpack_require__(32);
	var dropzone = __webpack_require__(33);
	var crop = __webpack_require__(34);

	/* EXTRA PAGES */
	var login = __webpack_require__(35);
	var signup = __webpack_require__(36);
	var lock = __webpack_require__(37);
	var pricing = __webpack_require__(38);
	var invoice = __webpack_require__(39);

	/* ROUTES */
	var routes = (
	  Routes(null,
	    Route({name: "root", path: "/", view: homepage},
	      Route({name: "app", path: "app"},
	        Route({name: "dashboard", path: "dashboard", view: dashboard}),
	        Route({name: "mailbox", path: "mailbox"},
	          Route({name: "inbox", path: "inbox", view: inbox}),
	          Route({name: "compose", path: "compose", view: compose}),
	          Route({name: "mail", path: "mail", view: mail})
	        ),
	        Route({name: "gallery", path: "gallery", view: gallery}),
	        Route({name: "social", path: "social", view: social}),

	        Route({name: "blog", path: "blog"},
	          Route({name: "posts", path: "posts", view: posts}),
	          Route({name: "post", path: "post", view: single_post})
	        ),

	        Route({name: "panels", path: "panels", view: panels}),

	        Route({name: "charts", path: "charts"},
	          Route({name: "rubix", path: "rubix"},
	            Route({name: "line", path: "line", view: rubix_line}),
	            Route({name: "area", path: "area", view: rubix_area}),
	            Route({name: "barcol", path: "barcol", view: rubix_barcol}),
	            Route({name: "mixed", path: "mixed", view: rubix_mixed}),
	            Route({name: "piedonut", path: "piedonut", view: rubix_piedonut})
	          ),

	          Route({name: "chartjs", path: "chartjs", view: chartjs}),
	          Route({name: "c3js", path: "c3js", view: c3js}),
	          Route({name: "morrisjs", path: "morrisjs", view: morrisjs})
	        ),

	        Route({name: "fonts", path: "fonts", view: fonts}),
	        Route({name: "timeline", path: "timeline", view: timeline}),
	        Route({name: "interactive-timeline", path: "interactive-timeline", view: interactivetimeline}),
	        Route({name: "codemirror", path: "codemirror", view: codemirror}),
	        Route({name: "maps", path: "maps", view: maps}),
	        Route({name: "editor", path: "editor", view: editor}),

	        Route({name: "ui-elements", path: "ui-elements"},
	          Route({name: "buttons", path: "buttons", view: buttons}),
	          Route({name: "dropdowns", path: "dropdowns", view: dropdowns}),
	          Route({name: "tabs-and-navs", path: "tabs-and-navs", view: tabs_and_navs}),
	          Route({name: "sliders", path: "sliders", view: sliders}),
	          Route({name: "knobs", path: "knobs", view: knobs}),
	          Route({name: "modals", path: "modals", view: modals}),
	          Route({name: "messenger", path: "messenger", view: messenger})
	        ),

	        Route({name: "forms", path: "forms"},
	          Route({name: "controls", path: "controls", view: form_controls}),
	          Route({name: "xeditable", path: "xeditable", view: xeditable}),
	          Route({name: "wizard", path: "wizard", view: wizard})
	        ),

	        Route({name: "tables", path: "tables"},
	          Route({name: "bootstrap-tables", path: "bootstrap-tables", view: bootstraptables}),
	          Route({name: "datatables", path: "datatables", view: datatables}),
	          Route({name: "tablesaw", path: "tablesaw", view: tablesaw})
	        ),

	        Route({name: "grid", path: "grid", view: grid}),
	        Route({name: "calendar", path: "calendar", view: calendar}),
	        Route({name: "lists", path: "lists", view: lists}),

	        Route({name: "file-utilities", path: "file-utilities"},
	          Route({name: "dropzone", path: "dropzone", view: dropzone}),
	          Route({name: "crop", path: "crop", view: crop})
	        ),

	        Route({name: "login", path: "login", view: login}),
	        Route({name: "signup", path: "signup", view: signup}),
	        Route({name: "lock", path: "lock", view: lock}),
	        Route({name: "pricing", path: "pricing", view: pricing}),
	        Route({name: "invoice", path: "invoice", view: invoice})
	      ),

	      Route({name: "notfound", path: "/404", view: notfound})
	    )
	  )
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

	  React.renderComponent(View(null), document.getElementById('app-container'), function() {
	    // l20n initialized only after everything is rendered/updated
	    l20n.ready();
	    setTimeout(function() {
	      $('body').removeClass('fade-out');
	    }, 500);
	  });
	};

	RRouter.routing = RRouter.HashRouting.start(routes, InitializeRouter);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Preloader = React.createClass({displayName: 'Preloader',
	  getInitialState: function() {
	    return {
	      display: 'none'
	    };
	  },
	  show: function(cb) {
	    this.setState({display: 'block'}, cb);
	  },
	  hide: function(cb) {
	    this.setState({display: 'none'}, cb);
	  },
	  render: function() {
	    return (
	      React.DOM.div({className: "preloader", style: {display: this.state.display}},
	        React.DOM.img({src: "public/imgs/preloader.gif", width: "128", height: "128"})
	      )
	    );
	  }
	});

	window.Preloader = React.renderComponent(Preloader(null), document.getElementById('app-preloader'));


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(50);
	var Sidebar = __webpack_require__(51);
	var Footer = __webpack_require__(52);

	var Body = React.createClass({displayName: 'Body',
	  render: function() {
	    return (
	      Container({id: "body"},
	        Grid({gutterBottom: true},
	          Row(null,
	            Col({sm: 12, className: "text-center"},
	              PanelContainer(null,
	                Panel(null,
	                  PanelBody(null,
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.div(null,
	                            Icon({style: {fontSize: 288, lineHeight: 1}, glyph: "icon-mfizz-ghost"})
	                          ),
	                          React.DOM.h1({style: {marginBottom: 25, marginTop: 0}}, "Page not found!")
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ),
	        this.props.children
	      )
	    );
	  }
	});

	var classSet = React.addons.classSet;
	var PageNotFound = React.createClass({displayName: 'PageNotFound',
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = classSet({
	      'container-open': this.state.open
	    });
	    return (
	      Container({id: "container", className: classes},
	        Sidebar(null),
	        Header(null),
	        Body(null,
	          Footer(null)
	        )
	      )
	    );
	  }
	});

	module.exports = PageNotFound;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Hero = React.createClass({displayName: 'Hero',
	  render: function() {
	    return this.transferPropsTo(
	      React.DOM.div({className: "homepage-hero"},
	        Container({fixed: true},
	          this.props.children
	        )
	      )
	    );
	  }
	});

	var HeroHeader = React.createClass({displayName: 'HeroHeader',
	  render: function() {
	    return this.transferPropsTo(
	      React.DOM.div({className: "homepage-hero-header"},
	        this.props.children
	      )
	    );
	  }
	});

	var HeroHeader2 = React.createClass({displayName: 'HeroHeader2',
	  render: function() {
	    return this.transferPropsTo(
	      React.DOM.div({className: "homepage-hero-header2"},
	        this.props.children
	      )
	    );
	  }
	});

	var Homepage = React.createClass({displayName: 'Homepage',
	  handleNavigation: function(e) {
	    $('body').addClass('fade-out');
	    setTimeout(function() {
	      RRouter.routing.navigate('/app/dashboard');
	    }.bind(this), 250);
	  },
	  render: function() {
	    return (
	      Container({id: "homepage-container"},
	        Button({bsStyle: "deepred", id: "demo-btn", onClick: this.handleNavigation}, "View Demo"),
	        React.DOM.div(null,
	          Hero({className: "text-center hidden-xs", style: {height: 475, backgroundImage: 'url(public/imgs/homepage/background.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', overflow: 'hidden'}},
	            React.DOM.img({src: "public/imgs/homepage/simplepowerful.png", style: {marginTop: 5}})
	          ),
	          Hero({className: "text-center visible-xs", style: {height: 270, backgroundImage: 'url(public/imgs/homepage/background.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', overflow: 'hidden'}},
	            React.DOM.img({width: "270", className: "visible-xs", src: "public/imgs/homepage/simplepowerful.png", style: {margin: 'auto', marginTop: 30}})
	          )
	        ),
	        Hero(null,
	          HeroHeader(null, "Don't wait for Web Components"),
	          HeroHeader2(null, "Embrace React"),
	          Grid(null,
	            Row(null,
	              Col({sm: 7, collapseLeft: true, collapseRight: true},
	                React.DOM.p({style: {marginTop: 60}},
	                  "Facebook recently open-sourced React, a library for building User Interfaces. It uses a Virtual DOM implementation for ultra-high performance."
	                ),
	                React.DOM.p(null,
	                  "Rubix Admin app uses React for semantic markup coupled with CommonJS for composable Components. The result: ", React.DOM.strong(null, "clean and elegant code.")
	                )
	              ),
	              Col({sm: 5, collapseLeft: true, collapseRight: true},
	                React.DOM.div({className: "hidden-xs text-right"},
	                  React.DOM.img({src: "public/imgs/homepage/reactcode.png"})
	                ),
	                React.DOM.div({className: "visible-xs text-center"},
	                  React.DOM.img({width: "250", src: "public/imgs/homepage/reactcode.png"})
	                )
	              )
	            )
	          )
	        ),
	        Hero(null,
	          HeroHeader2(null, "Bootstrap on Steroids"),
	          React.DOM.div({className: "text-center", style: {marginTop: 25, marginBottom: 25}},
	            React.DOM.div({className: "hidden-xs"},
	              React.DOM.img({src: "public/imgs/homepage/bootstrapreact.png"})
	            ),
	            React.DOM.div({className: "visible-xs"},
	              React.DOM.img({width: "250", src: "public/imgs/homepage/bootstrapreact.png"})
	            )
	          ),
	          React.DOM.p({className: "text-center"},
	            "Rubix implements custom React Components for Bootstrap enabling you to write shorter, semantic markup. Say Goodbye to unwieldy classnames and spaghetti code!"
	          )
	        ),
	        Hero(null,
	          HeroHeader(null, "Internationalization and Localization"),
	          HeroHeader2(null, "Mozilla L20n.js"),
	          React.DOM.div({className: "text-center", style: {marginTop: 25, marginBottom: 25}},
	            React.DOM.div({className: "hidden-xs"},
	              React.DOM.img({src: "public/imgs/homepage/mozflags.png"})
	            ),
	            React.DOM.div({className: "visible-xs"},
	              React.DOM.img({width: "250", src: "public/imgs/homepage/mozflags.png"})
	            )
	          ),
	          React.DOM.p({className: "text-center"},
	            "Mozilla L20n is a developer friendly framework that places languages in the localizer's hand to create better translations. "
	          ),
	          React.DOM.p({className: "text-center"},
	            "It removes the need for developers to thoroughly understand the specifics of a natural language and provides an opportunity for localizers to create better translations. Rubix ships with custom React component bindings for the framework."
	          )
	        ),
	        Hero(null,
	          HeroHeader2(null, "Rubix Charts"),
	          React.DOM.div({className: "text-center", style: {marginTop: 25, marginBottom: 25}},
	            React.DOM.div({className: "hidden-xs"},
	              React.DOM.img({src: "public/imgs/homepage/rubixcharts.png"})
	            ),
	            React.DOM.div({className: "visible-xs"},
	              React.DOM.img({width: "250", src: "public/imgs/homepage/rubixcharts.png"})
	            )
	          ),
	          React.DOM.p({className: "text-center"},
	            "Rubix Charts is an aesthetically beautiful, hand-crafted charting library created exclusively for Rubix Admin app. We used the awesome D3.JS library to write all the charting components (Line, Area, Stacked, Bar, Column, Pie and Donut) that power Rubix Charts."
	          )
	        ),
	        Hero(null,
	          HeroHeader(null, "Create complex layouts easily"),
	          HeroHeader2(null, "Panels"),
	          React.DOM.div({className: "text-center", style: {marginTop: 25, marginBottom: 25}},
	            React.DOM.div({className: "hidden-xs"},
	              React.DOM.img({src: "public/imgs/homepage/panels.png"})
	            ),
	            React.DOM.div({className: "visible-xs"},
	              React.DOM.img({width: "250", src: "public/imgs/homepage/panels.png"})
	            )
	          ),
	          React.DOM.p({className: "text-center"},
	            "Rubix Panels empowers developers to create complex layouts in addition to the awesome Grid provided by Twitter Bootstrap. Pretty much every example page showcased in the demo makes use of Panels for layout."
	          )
	        ),
	        Hero({style: {position: 'relative', zIndex: 2}},
	          HeroHeader(null, "The Asset Pipeline"),
	          HeroHeader2(null, "Gulp, Flip and Bless!"),
	          React.DOM.div({className: "text-center", style: {marginTop: 25, marginBottom: 25}},
	            React.DOM.div({className: "hidden-xs"},
	              React.DOM.img({src: "public/imgs/homepage/assetpipeline.png"})
	            ),
	            React.DOM.div({className: "visible-xs"},
	              React.DOM.img({width: "250", src: "public/imgs/homepage/assetpipeline.png"})
	            )
	          ),
	          React.DOM.p({className: "text-center"},
	            "Gulp is a streaming build system. It's use of streams and code-over-configuration makes for a simpler and more intuitive build system."
	          ),
	          React.DOM.p({className: "text-center"},
	            "Rubix's Asset Pipeline depends entirely on Gulp as its backbone. ", React.DOM.strong(null, "Everything is automated"), ": be it compiling JSX, SASS or even WebFonts! We make use of Twitter's ", React.DOM.strong(null, "css-flip"), " for RTL support and the awesome ", React.DOM.strong(null, "blesscss"), " library for fixing IE9 selectors and stylesheet bug."
	          )
	        ),
	        Hero({className: "subtle-bottom-shadow"},
	          HeroHeader(null, "One Last Thing"),
	          HeroHeader2(null, "Fanatical Support!"),
	          React.DOM.div({className: "text-center", style: {marginTop: 25, marginBottom: 25}},
	            React.DOM.img({src: "public/imgs/homepage/support.png"})
	          ),
	          React.DOM.p({className: "text-center"},
	            "We have already provided extensive documentation on using/implementing Rubix. However, we take this a step further by ensuring version releases (which includes bug fixes, new features etc) for the next 6 months and general support for 1 year."
	          )
	        ),
	        React.DOM.div(null,
	          Hero({className: "text-center", style: {height: 215, backgroundImage: 'url(public/imgs/homepage/background.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', overflow: 'hidden', backgroundPosition: '0% 100%'}},
	            mq({minWidth: 550},
	              React.DOM.h1({className: "fg-white", style: {marginTop: 0, marginBottom: 25, fontWeight: 100}}, "So what are you waiting for?")
	            ),
	            mq({maxWidth: 549},
	              React.DOM.h3({className: "fg-white", style: {marginTop: 0, marginBottom: 25, fontWeight: 100}}, "So what are you waiting for?")
	            ),
	            Button({lg: true, outlined: true, inverse: true, retainBackground: true, bsStyle: "red", onClick: this.handleNavigation}, "Click here to View Demo")
	          )
	        )
	      )
	    );
	  }
	});

	module.exports = Homepage;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(50);
	var Sidebar = __webpack_require__(51);
	var Footer = __webpack_require__(52);

	var Contact = React.createClass({displayName: 'Contact',
	  getInitialState: function() {
	    return {
	      invited: this.props.invited ? true : false,
	      invitedText: this.props.invited ? 'invited' : 'invite'
	    };
	  },
	  handleClick: function(e) {
	    e.preventDefault();
	    e.stopPropagation();
	    this.setState({
	      invited: !this.state.invited,
	      invitedText: (!this.state.invited) ? 'invited': 'invite'
	    });
	  },
	  render: function() {
	    return (
	      React.DOM.tr(null,
	        React.DOM.td({style: {verticalAlign: 'middle', borderTop: this.props.noBorder ? 'none': null}},
	          React.DOM.img({src: 'public/imgs/avatars/'+this.props.avatar+'.png'})
	        ),
	        React.DOM.td({style: {verticalAlign: 'middle', borderTop: this.props.noBorder ? 'none': null}},
	          this.props.name
	        ),
	        React.DOM.td({style: {verticalAlign: 'middle', borderTop: this.props.noBorder ? 'none': null}, className: "text-right"},
	          Button({onlyOnHover: true, bsStyle: "orange", active: this.state.invited, onClick: this.handleClick},
	            this.state.invitedText
	          )
	        )
	      )
	    );
	  }
	});

	var Body = React.createClass({displayName: 'Body',
	  componentDidMount: function() {
	    (function() {
	      var chart = new Rubix('#main-chart', {
	        width: '100%',
	        height: 300,
	        title: 'Chart of Total Users',
	        titleColor: '#2EB398',
	        subtitle: 'Period: 2004 and 2008',
	        subtitleColor: '#2EB398',
	        axis: {
	          x: {
	            type: 'datetime',
	            tickCount: 3,
	            label: 'Time',
	            labelColor: '#2EB398'
	          },
	          y: {
	            type: 'linear',
	            tickFormat: 'd',
	            tickCount: 2,
	            labelColor: '#2EB398'
	          }
	        },
	        tooltip: {
	          color: '#55C9A6',
	          format: {
	            y: '.0f',
	            x: '%x'
	          }
	        },
	        margin: {
	          top: 25,
	          left: 50,
	          right: 25
	        },
	        interpolate: 'linear',
	        master_detail: true
	      });

	      var total_users = chart.area_series({
	        name: 'Total Users',
	        color: '#2EB398',
	        marker: 'circle',
	        fillopacity: 0.7,
	        noshadow: true
	      });

	      chart.extent = [1297110663*850+(86400000*20*(.35*40)), 1297110663*850+(86400000*20*(.66*40))];

	      var t = 1297110663*850;
	      var v = [5, 10, 2, 20, 40, 35, 30, 20, 25, 10, 20, 10, 20, 15, 25, 20, 30, 25, 30, 25, 30, 35, 40, 20, 15, 20, 10, 25, 15, 20, 10, 25, 30, 30, 25, 20, 10, 50, 60, 30];

	      var getValue = function() {
	        var val = v.shift();
	        v.push(val);
	        return val;
	      }

	      var data = d3.range(40).map(function() {
	        return {
	          x: (t+=(86400000*20)),
	          y: getValue()
	        };
	      });

	      total_users.addData(data);
	    })();
	    (function() {
	      var chart = new Rubix('#alert-chart', {
	        width: '100%',
	        height: 200,
	        hideLegend: true,
	        hideAxisAndGrid: true,
	        focusLineColor: '#fff',
	        theme_style: 'dark',
	        axis: {
	          x: {
	            type: 'linear'
	          },
	          y: {
	            type: 'linear',
	            tickFormat: 'd'
	          }
	        },
	        tooltip: {
	          color: '#fff',
	          format: {
	            x: 'd',
	            y: 'd'
	          }
	        },
	        margin: {
	          left: 25,
	          top: 50,
	          right: 25,
	          bottom: 25
	        }
	      });

	      var alerts = chart.column_series({
	        name: 'Load',
	        color: '#7CD5BA',
	        nostroke: true
	      });

	      alerts.addData([
	        {x: 0, y: 30},
	        {x: 1, y: 40},
	        {x: 2, y: 15},
	        {x: 3, y: 30},
	        {x: 4, y: 35},
	        {x: 5, y: 70},
	        {x: 6, y: 50},
	        {x: 7, y: 60},
	        {x: 8, y: 35},
	        {x: 9, y: 30},
	        {x: 10, y: 40},
	        {x: 11, y: 30},
	        {x: 12, y: 50},
	        {x: 13, y: 35}
	      ]);
	    })();
	    (function() {
	      var chart = new Rubix('#male-female-chart', {
	        height: 200,
	        title: 'Demographics',
	        subtitle: 'Visitors',
	        axis: {
	          x: {
	            type: 'ordinal',
	            tickFormat: 'd',
	            tickCount: 2,
	            label: 'Time'
	          },
	          y:  {
	            type: 'linear',
	            tickFormat: 'd'
	          }
	        },
	        tooltip: {
	          theme_style: 'dark',
	          format: {
	            y: '.0f'
	          },
	          abs: {
	            y: true
	          }
	        },
	        stacked: true,
	        interpolate: 'linear',
	        show_markers: true
	      });

	      var column = chart.column_series({
	        name: 'Male Visitors',
	        color: '#2D89EF',
	        marker: 'cross'
	      });

	      var data = [
	        {x: 2005, y: 21},
	        {x: 2006, y: 44},
	        {x: 2007, y: 14},
	        {x: 2008, y: 18},
	        {x: 2009, y: 23},
	        {x: 2010, y: 21}
	      ];
	      column.addData(data);

	      var column1 = chart.column_series({
	        name: 'Female Visitors',
	        color: '#FF0097',
	        marker: 'diamond'
	      });

	      var data1 = [
	        {x: 2005, y: -79},
	        {x: 2006, y: -56},
	        {x: 2007, y: -86},
	        {x: 2008, y: -82},
	        {x: 2009, y: -77},
	        {x: 2010, y: -79}
	      ];
	      column1.addData(data1);
	    })();
	    (function() {
	      var chart = new Rubix('#orderscomparision', {
	        height: 225,
	        noSort: true,
	        hideYAxis: true,
	        title: 'Mac Pro vs iPhone',
	        subtitle: 'weekly sales data',
	        hideXAxisTickLines: true,
	        hideYAxisTickLines: true,
	        hideLegend: true,
	        gridColor: '#EBEBEB',
	        tickColor: '#EBA068',
	        titleColor: '#EBA068',
	        subtitleColor: '#EBA068',
	        axis: {
	          x: {
	            type: 'ordinal'
	          },
	          y:  {
	            type: 'linear',
	            tickFormat: 'd'
	          }
	        },
	        margin: {
	          top: 50
	        },
	        tooltip: {
	          color: '#EBA068',
	          format: {
	            y: '.0f'
	          }
	        },
	        show_markers: false
	      });

	      var series1 = chart.column_series({
	        name: 'Mac Pro Sales',
	        color: '#EBA068',
	        marker: 'square',
	        fillopacity: 1
	      });

	      series1.addData([
	        {x: 'Sun', y: 1},
	        {x: 'Mon', y: 2},
	        {x: 'Tue', y: 3},
	        {x: 'Wed', y: 2},
	        {x: 'Thu', y: 2},
	        {x: 'Fri', y: 3},
	        {x: 'Sat', y: 1}
	      ]);


	      var series2 = chart.column_series({
	        name: 'iPhone Sales',
	        color: '#FFD3B1',
	        fillopacity: 1
	      });

	      series2.addData([
	        {x: 'Sun', y: 3},
	        {x: 'Mon', y: 4},
	        {x: 'Tue', y: 6},
	        {x: 'Wed', y: 5},
	        {x: 'Thu', y: 5.5},
	        {x: 'Fri', y: 3},
	        {x: 'Sat', y: 2}
	      ]);
	    })();
	    (function() {
	      var ticketsCleared = Rubix.Donut('#tickets-cleared', {
	        title: 'Tickets Cleared',
	        subtitle: 'by agents',
	        titleColor: '#EBA068',
	        subtitleColor: '#EBA068',
	        hideLegend: false,
	        height: 300,
	        tooltip: {
	          color: '#EBA068'
	        }
	      });

	      ticketsCleared.addData([
	        {
	          name: 'Karl Pohl',
	          value: 57,
	          color: '#FA824F'
	        },
	        {
	          name: 'Gamze Erdoğan',
	          value: 32,
	          color: '#EBA068'
	        },
	        {
	          name: 'Leyla Cəlilli',
	          value: 23,
	          color: '#FFC497'
	        },
	        {
	          name: 'Nadir Üzeyirzadə',
	          value: 11,
	          color: '#FFC9A0'
	        },
	        {
	          name: 'Anna Sanchez',
	          value: 7,
	          color: '#FFD3B1'
	        }
	      ]);
	    })();
	    (function() {
	      $('.line-EA7882').sparkline('html', { type: 'line', height: 25, lineColor: '#EA7882', fillColor: 'rgba(234, 120, 130, 0.5)' });
	      $('.line-2EB398').sparkline('html', { type: 'line', height: 25, lineColor: '#2EB398', fillColor: 'rgba(46, 179, 152, 0.5)' });
	      $('.line-79B0EC').sparkline('html', { type: 'line', height: 25, lineColor: '#79B0EC', fillColor: 'rgba(121, 176, 236, 0.5)' });
	      $('.line-FFC497').sparkline('html', { type: 'line', height: 25, lineColor: '#FFC497', fillColor: 'rgba(255, 196, 151, 0.5)' });
	      $('.compositebar1').sparkline('html', { type: 'bar', barColor: '#ffffff', height: 25 });
	    })();
	    (function() {
	      $(this.refs.datetimepicker1.getDOMNode()).datetimepicker({
	        widgetParent: '#datetimepicker1-parent'
	      }).hide();
	    }.bind(this))();
	    (function() {
	      var data = {
	        labels: ['Japan', 'France', 'USA', 'Russia', 'China', 'Dubai', 'India'],
	        datasets: [{
	          label: 'My First dataset',
	          fillColor: 'rgba(220,220,220,0.2)',
	          strokeColor: 'rgba(220,220,220,1)',
	          pointColor: 'rgba(220,220,220,1)',
	          pointStrokeColor: '#fff',
	          pointHighlightFill: '#fff',
	          pointHighlightStroke: 'rgba(220,220,220,1)',
	          data: [65, 59, 90, 81, 56, 55, 40]
	        }, {
	          label: 'My Second dataset',
	          fillColor: 'rgba(234, 120, 130, 0.5)',
	          strokeColor: 'rgba(234, 120, 130, 1)',
	          pointColor: 'rgba(234, 120, 130, 1)',
	          pointStrokeColor: '#fff',
	          pointHighlightFill: '#fff',
	          pointHighlightStroke: 'rgba(151,187,205,1)',
	          data: [28, 48, 40, 19, 96, 27, 100]
	        }]
	      };

	      var ctx = document.getElementById('chartjs-1').getContext('2d');
	      new Chart(ctx).Radar(data, {
	        responsive: false,
	        maintainAspectRatio: true
	      });
	    })();
	    (function() {
	      var map = new GMaps({
	        div: '#routingmap',
	        lat: 38.890792,
	        lng: -77.048518,
	        scrollwheel: false,
	        zoom: 16
	      });
	      var list = [];
	      map.travelRoute({
	        origin: [38.892428, -77.048454],
	        destination: [38.889497, -77.050181],
	        travelMode: 'walking',
	        step: function(e){
	          list.push({
	            instructions: e.instructions,
	            lat: e.end_location.lat(),
	            lng: e.end_location.lng(),
	            path: e.path
	          });
	        }.bind(this),
	        end: function(e) {
	          var lat, lng, path;
	          var processList = function(i) {
	            if(list.length === i) return;
	            lat = list[i].lat;
	            lng = list[i].lng;
	            path = list[i].path;
	            map.drawPolyline({
	              path: path,
	              strokeColor: '#FF6FCF',
	              strokeWeight: 8
	            });
	            processList(i+1);
	          }.bind(this);
	          processList(0);
	        }.bind(this)
	      });
	    })();
	    (function() {
	      var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));

	      elems.forEach(function(html) {
	        var switchery = new Switchery(html);
	      });
	    })();
	  },
	  render: function() {
	    return (
	      Container({id: "body"},
	        Grid(null,
	          Row(null,
	            Col({sm: 12},
	              PanelContainer(null,
	                Panel(null,
	                  PanelBody({style: {paddingTop: 5}},
	                    React.DOM.div({id: "main-chart"})
	                  )
	                ),
	                Panel({horizontal: true, className: "force-collapse"},
	                  PanelLeft({className: "bg-red fg-white tabs panel-sm-1"},
	                    TabContainer({className: "plain"},
	                      TabList(null,
	                        Tab({pane: "panel_tab_panel_combined_plain:bar", active: true},
	                          Icon({bundle: "fontello", glyph: "chart-bar-5"})
	                        ),
	                        Tab({pane: "panel_tab_panel_combined_plain:switches"},
	                          Icon({glyph: "icon-feather-toggle"})
	                        ),
	                        Tab({pane: "panel_tab_panel_combined_plain:note"},
	                          Icon({glyph: "icon-fontello-note-1"})
	                        )
	                      )
	                    )
	                  ),
	                  PanelBody({className: "panel-sm-4", style: {padding: 0}},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12, collapseLeft: true, collapseRight: true},
	                          TabContent(null,
	                            TabPane({ref: "panel_tab_panel_combined_plain:bar", active: true, style: {padding: 0}},
	                              React.DOM.div({id: "male-female-chart"})
	                            ),
	                            TabPane({ref: "panel_tab_panel_combined_plain:switches"},
	                              Table({className: "panel-switches", collapsed: true},
	                                React.DOM.tbody(null,
	                                  React.DOM.tr(null,
	                                    React.DOM.td(null,
	                                      Icon({glyph: "icon-fontello-twitter", className: "fg-blue"}), React.DOM.span({className: "text-uppercase panel-switches-text"}, "twitter")
	                                    ),
	                                    React.DOM.td({className: "panel-switches-holder"}, React.DOM.input({type: "checkbox", className: "js-switch", defaultChecked: true}))
	                                  ),
	                                  React.DOM.tr(null,
	                                    React.DOM.td(null,
	                                      Icon({glyph: "icon-fontello-facebook", className: "fg-darkblue"}), React.DOM.span({className: "text-uppercase panel-switches-text"}, "facebook")
	                                    ),
	                                    React.DOM.td({className: "panel-switches-holder"}, React.DOM.input({type: "checkbox", className: "js-switch"}))
	                                  ),
	                                  React.DOM.tr(null,
	                                    React.DOM.td(null,
	                                      Icon({glyph: "icon-fontello-gplus", className: "fg-deepred"}), React.DOM.span({className: "text-uppercase panel-switches-text"}, "google+")
	                                    ),
	                                    React.DOM.td({className: "panel-switches-holder"}, React.DOM.input({type: "checkbox", className: "js-switch"}))
	                                  ),
	                                  React.DOM.tr(null,
	                                    React.DOM.td(null,
	                                      Icon({glyph: "icon-fontello-linkedin", className: "fg-deepred"}), React.DOM.span({className: "text-uppercase panel-switches-text"}, "linkedin")
	                                    ),
	                                    React.DOM.td({className: "panel-switches-holder"}, React.DOM.input({type: "checkbox", className: "js-switch", defaultChecked: true}))
	                                  ),
	                                  React.DOM.tr(null,
	                                    React.DOM.td(null,
	                                      Icon({glyph: "icon-fontello-instagram", className: "fg-deepred"}), React.DOM.span({className: "text-uppercase panel-switches-text"}, "instagram")
	                                    ),
	                                    React.DOM.td({className: "panel-switches-holder"},
	                                      Button({bsStyle: "primary"}, "connect")
	                                    )
	                                  )
	                                )
	                              )
	                            ),
	                            TabPane({ref: "panel_tab_panel_combined_plain:note"},
	                              Grid(null,
	                                Row(null,
	                                  Col({xs: 12, style: {padding: 50, paddingTop: 12.5, paddingBottom: 25}, className: "text-center"},
	                                    React.DOM.h3({className: "fg-black50"}, "NOTE"),
	                                    React.DOM.hr(null),
	                                    React.DOM.p(null, LoremIpsum({query: "3s"}))
	                                  )
	                                )
	                              )
	                            )
	                          )
	                        )
	                      )
	                    )
	                  ),
	                  PanelRight({className: "bg-lightgreen fg-white panel-sm-2"},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12, className: "text-center"},
	                          React.DOM.br(null),
	                          React.DOM.div(null,
	                            React.DOM.h4(null, "Gross Revenue"),
	                            React.DOM.h2({className: "fg-green visible-xs visible-md visible-lg"}, "9,362.74"),
	                            React.DOM.h4({className: "fg-green visible-sm"}, "9,362.74")
	                          ),
	                          React.DOM.hr({className: "border-green"}),
	                          React.DOM.div(null,
	                            React.DOM.h4(null, "Net Revenue"),
	                            React.DOM.h2({className: "fg-green visible-xs visible-md visible-lg"}, "6,734.89"),
	                            React.DOM.h4({className: "fg-green visible-sm"}, "6,734.89")
	                          )
	                        )
	                      )
	                    )
	                  ),
	                  PanelRight({className: "bg-green fg-green panel-sm-4"},
	                    Grid(null,
	                      Row({className: "bg-green fg-lightgreen"},
	                        Col({xs: 6},
	                          React.DOM.h3(null, "Daily Load")
	                        ),
	                        Col({xs: 6, className: "text-right"},
	                          React.DOM.h2({className: "fg-lightgreen"}, "67%")
	                        )
	                      )
	                    ),
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.div({id: "alert-chart", className: "rubix-chart"})
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ),
	        Grid(null,
	          Row(null,
	            Col({sm: 5, collapseRight: true},
	              PanelContainer(null,
	                Panel(null,
	                  PanelBody({style: {padding: 0}},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12, className: "text-center", style: {padding: 25}},
	                          React.DOM.canvas({id: "chartjs-1", height: "250", width: "250"}),
	                          Table({striped: true, collapsed: true},
	                            React.DOM.tbody(null,
	                              React.DOM.tr(null,
	                                React.DOM.td({className: "text-left"}, "Bounce Rate:"),
	                                React.DOM.td({className: "text-center"},
	                                  BLabel({className: "bg-red fg-white"}, "+46%")
	                                ),
	                                React.DOM.td({className: "text-right"},
	                                  React.DOM.div({className: "line-EA7882", sparkBarColor: "#EA7882"}, "2,3,7,5,4,4,3,2,3,4,3,2,4,3,4,3,2,5")
	                                )
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td({className: "text-left"}, "New visits:"),
	                                React.DOM.td({className: "text-center"},
	                                  BLabel({className: "bg-darkgreen45 fg-white"}, "+23%")
	                                ),
	                                React.DOM.td({className: "text-right"},
	                                  React.DOM.div({className: "line-2EB398", sparkBarColor: "#2EB398"}, "7,7,7,7,7,7,6,7,4,7,7,7,7,5,7,7,7,9")
	                                )
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td({className: "text-left"}, "Transactions:"),
	                                React.DOM.td({className: "text-center"},
	                                  BLabel({className: "bg-blue fg-white"}, "43,000 (+50%)")
	                                ),
	                                React.DOM.td({className: "text-right"},
	                                  React.DOM.div({className: "line-79B0EC", sparkBarColor: "#79B0EC"}, "4,6,7,7,4,3,2,1,4,9,3,2,3,5,2,4,3,1")
	                                )
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td({className: "text-left"}, "Conversions:"),
	                                React.DOM.td({className: "text-center"},
	                                  BLabel({className: "bg-orange fg-white"}, "2000 (+75%)")
	                                ),
	                                React.DOM.td({className: "text-right"},
	                                  React.DOM.div({className: "line-FFC497", sparkBarColor: "#FFC497"}, "3,2,4,6,7,4,5,7,4,3,2,1,4,6,7,8,2,8")
	                                )
	                              )
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              ),
	              PanelContainer({controlStyles: "bg-lightorange fg-davygray"},
	                Panel(null,
	                  PanelHeader({className: "bg-lightorange fg-darkorange fg-tab-active tabs"},
	                    TabContainer(null,
	                      TabList(null,
	                        Tab({pane: "panel-middle-left:orders", active: true},
	                          Icon({className: "icon-1-and-quarter-x", bundle: "feather", glyph: "bar-graph-2"})
	                        ),
	                        Tab({pane: "panel-middle-left:people"},
	                          Icon({className: "icon-1-and-quarter-x", glyph: "icon-simple-line-icons-users"})
	                        ),
	                        Tab({pane: "panel-middle-left:tickets"},
	                          Icon({className: "icon-1-and-quarter-x", bundle: "feather", glyph: "pie-graph"})
	                        )
	                      )
	                    )
	                  ),
	                  PanelBody({style: {paddingTop: 0}},
	                    TabContent(null,
	                      TabPane({ref: "panel-middle-left:orders", active: true},
	                        React.DOM.div({id: "orderscomparision"}),
	                        Grid({style: {margin: -25, marginTop: 0}},
	                          Row({className: "bg-lightorange fg-darkorange text-center"},
	                            Col({xs: 12, collapseLeft: true, collapseRight: true, style: {padding: 25, paddingTop: 0}},
	                              Table({alignMiddle: true, collapsed: true},
	                                React.DOM.tbody(null,
	                                  React.DOM.tr(null,
	                                    React.DOM.td({style: {width: '33%'}},
	                                      React.DOM.h6(null, "Total Orders"),
	                                      React.DOM.h4(null, "8,584")
	                                    ),
	                                    React.DOM.td({style: {width: '33%'}},
	                                      React.DOM.div({style: {position: 'relative'}},
	                                        React.DOM.div({className: "compositebar1"}, "4,6,7,7,4,3,2,1,4,9,3,2,3,5,2,4,3,1")
	                                      )
	                                    ),
	                                    React.DOM.td({style: {width: '33%'}},
	                                      React.DOM.h4(null, "+ 12%")
	                                    )
	                                  ),
	                                  React.DOM.tr(null,
	                                    React.DOM.td({style: {width: '33%'}},
	                                      React.DOM.h6(null, "Total Orders"),
	                                      React.DOM.h4(null, "2,312")
	                                    ),
	                                    React.DOM.td({style: {width: '33%'}},
	                                      React.DOM.div({style: {position: 'relative'}},
	                                        React.DOM.div({className: "compositebar1"}, "3,2,4,6,3,6,7,3,2,1,5,7,8,9,3,2,6,7")
	                                      )
	                                    ),
	                                    React.DOM.td({style: {width: '33%'}},
	                                      React.DOM.h4(null, "0%")
	                                    )
	                                  ),
	                                  React.DOM.tr(null,
	                                    React.DOM.td({style: {width: '33%'}},
	                                      React.DOM.h6(null, "Total Orders"),
	                                      React.DOM.h4(null, "4,932")
	                                    ),
	                                    React.DOM.td({style: {width: '33%'}},
	                                      React.DOM.div({style: {position: 'relative'}},
	                                        React.DOM.div({className: "compositebar1"}, "2,3,2,4,2,6,4,2,3,5,2,5,2,1,5,2,5,2")
	                                      )
	                                    ),
	                                    React.DOM.td({style: {width: '33%'}},
	                                      React.DOM.h4(null, "- 81%")
	                                    )
	                                  )
	                                )
	                              )
	                            )
	                          )
	                        )
	                      ),
	                      TabPane({ref: "panel-middle-left:people"},
	                        Grid(null,
	                          Row(null,
	                            Col({xs: 12, style: {padding: 25}},
	                              Form(null,
	                                FormGroup(null,
	                                  InputGroup(null,
	                                    Input({type: "text", placeholder: "Type a name here...", className: "border-orange border-focus-darkorange"}),
	                                    InputGroupButton(null, Button({bsStyle: "orange"}, Icon({glyph: "icon-fontello-search"})))
	                                  )
	                                )
	                              ),
	                              React.DOM.div({className: "text-center"},
	                                Checkbox(null, "Invite all friends")
	                              ),
	                              React.DOM.div(null,
	                                Table({collapsed: true},
	                                  React.DOM.tbody(null,
	                                    Contact({name: "Jordyn Ouellet", avatar: "avatar5", noBorder: true}),
	                                    Contact({name: "Ava Perry", avatar: "avatar9"}),
	                                    Contact({name: "Angelina Mills", avatar: "avatar10", invited: true}),
	                                    Contact({name: "Crystal Ford", avatar: "avatar11"}),
	                                    Contact({name: "Toby King", avatar: "avatar7"}),
	                                    Contact({name: "Ju Lan", avatar: "avatar13", invited: true}),
	                                    Contact({name: "Alexandra Mordin", avatar: "avatar20"})
	                                  )
	                                )
	                              )
	                            )
	                          )
	                        )
	                      ),
	                      TabPane({ref: "panel-middle-left:tickets"},
	                        React.DOM.div({id: "tickets-cleared"}),
	                        Table({collapsed: true},
	                          React.DOM.tbody(null,
	                            React.DOM.tr(null,
	                              React.DOM.td({style: {padding: '12.5px 25px'}},
	                                Progress({collapseBottom: true, withLabel: "Karl Pohl", value: 57, color: "#FA824F", min: 0, max: 100})
	                              ),
	                              React.DOM.td({style: {padding: '12.5px 25px'}, className: "text-right"},
	                                BLabel(null, "57")
	                              )
	                            ),
	                            React.DOM.tr(null,
	                              React.DOM.td({style: {padding: '12.5px 25px'}},
	                                Progress({collapseBottom: true, withLabel: "Gamze Erdoğan", value: 35, color: "#EBA068", min: 0, max: 100})
	                              ),
	                              React.DOM.td({style: {padding: '12.5px 25px'}, className: "text-right"},
	                                BLabel(null, "33")
	                              )
	                            ),
	                            React.DOM.tr(null,
	                              React.DOM.td({style: {padding: '12.5px 25px'}},
	                                Progress({collapseBottom: true, withLabel: "Leyla Cəlilli", value: 30, color: "#FFC497", fgColor: "#B86A2D", min: 0, max: 100})
	                              ),
	                              React.DOM.td({style: {padding: '12.5px 25px'}, className: "text-right"},
	                                BLabel(null, "23")
	                              )
	                            ),
	                            React.DOM.tr(null,
	                              React.DOM.td({style: {padding: '12.5px 25px'}},
	                                Progress({collapseBottom: true, withLabel: "Nadir Üzeyirzadə", value: 41, color: "#FFC9A0", fgColor: "#B86A2D", min: 0, max: 100})
	                              ),
	                              React.DOM.td({style: {padding: '12.5px 25px'}, className: "text-right"},
	                                BLabel(null, "11")
	                              )
	                            ),
	                            React.DOM.tr(null,
	                              React.DOM.td({style: {padding: '12.5px 25px'}},
	                                Progress({collapseBottom: true, withLabel: "Anna Sanchez", value: 66, color: "#FFD3B1", fgColor: "#B86A2D", min: 0, max: 100})
	                              ),
	                              React.DOM.td({style: {padding: '12.5px 25px'}, className: "text-right"},
	                                BLabel(null, "7")
	                              )
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            ),
	            Col({sm: 7},
	              PanelContainer({controlStyles: "bg-brown50 fg-white"},
	                Panel({horizontal: true, className: "force-collapse"},
	                  PanelBody({className: "panel-sm-7", style: {padding: 0}},
	                    InputGroup({className: "date", ref: "datetimepicker1"},
	                      Input({type: "text", className: "form-control"}),
	                      InputGroupAddon(null,
	                        Icon({glyph: "icon-fontello-calendar"})
	                      )
	                    ),
	                    React.DOM.div(null,
	                      React.DOM.div({id: "datetimepicker1-parent", className: "datetimepicker-inline"})
	                    )
	                  ),
	                  PanelRight({className: "panel-sm-5 bg-brown50 fg-white", style: {verticalAlign: 'middle'}},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.div({className: "text-center"},
	                            Icon({glyph: "climacon rain cloud", style: {fontSize: '800%', lineHeight: 0}})
	                          )
	                        )
	                      ),
	                      Row(null,
	                        Col({xs: 6, collapseRight: true},
	                          React.DOM.h4(null, "Max: 25°")
	                        ),
	                        Col({xs: 6, collapseLeft: true, className: "text-right"},
	                          React.DOM.h4(null, "Min: 22°")
	                        )
	                      ),
	                      Row(null,
	                        Col({xs: 12, className: "text-center"},
	                          React.DOM.h5(null, "Thundershower"),
	                          React.DOM.h6(null, "Wind: 9 km/h | Humidity: 91%")
	                        )
	                      )
	                    )
	                  )
	                )
	              ),
	              PanelContainer(null,
	                Panel(null,
	                  PanelHeader(null,
	                    React.DOM.div({style: {padding: 25}},
	                      React.DOM.div({id: "routingmap", style: {height: 300}}),
	                      React.DOM.div({className: "fg-black50 text-center", style: {borderBottom: '1px solid #ccc'}},
	                        React.DOM.h5({style: {padding: 12.5, margin: 0}}, "WALK 0.3 MILES - FOR 6 MINUTES")
	                      ),
	                      React.DOM.div(null,
	                        React.DOM.div({className: "map-dest", style: {marginBottom: 12.5}},
	                          React.DOM.h3({className: "fg-black50"},
	                            Icon({glyph: "icon-fontello-dot-circled", className: "fg-darkgray"}), ' ',
	                            React.DOM.span(null, "Albert Einstein Memorial")
	                          ),
	                          React.DOM.h5(null,
	                            "2101 Constitution Ave NW, Washington, DC 20418, United States"
	                          )
	                        ),
	                        React.DOM.div({className: "map-tcontainer"},
	                          Table({className: "mapt", hover: true, collapsed: true},
	                            React.DOM.tbody(null,
	                              React.DOM.tr(null,
	                                React.DOM.td(null, Icon({className: "fg-blue", glyph: "icon-fontello-up-circle icon-2x"})),
	                                React.DOM.td(null, "Walk ", React.DOM.strong(null, "east"), " on ", React.DOM.strong(null, "Constitution Ave NW"), " towards ", React.DOM.strong(null, "Henry Bacon Dr NW")),
	                                React.DOM.td({width: "75"}, React.DOM.small(null, "171 ft"))
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, Icon({className: "fg-green", glyph: "icon-fontello-right-circle icon-2x"})),
	                                React.DOM.td(null, "Turn ", React.DOM.strong(null, "right")),
	                                React.DOM.td(null, React.DOM.small(null, "433 ft"))
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, Icon({className: "fg-darkorange", glyph: "icon-fontello-left-circle icon-2x"})),
	                                React.DOM.td(null,
	                                  React.DOM.div(null, "Follow the road ", React.DOM.strong(null, "southeast")),
	                                  React.DOM.div(null, "Turn ", React.DOM.strong(null, "left"), " ", React.DOM.em(null, "(Slight turn)"))
	                                ),
	                                React.DOM.td(null, React.DOM.small(null, "0.1 mi"))
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, Icon({className: "fg-green", glyph: "icon-fontello-right-circle icon-2x"})),
	                                React.DOM.td(null, "Turn right"),
	                                React.DOM.td(null, React.DOM.small(null, "262 ft"))
	                              )
	                            )
	                          )
	                        ),
	                        React.DOM.div({className: "map-dest"},
	                          React.DOM.h3({className: "fg-black50"},
	                            Icon({glyph: "icon-fontello-dot-circled"}), ' ',
	                            React.DOM.span(null, "Lincoln Memorial")
	                          ),
	                          React.DOM.h5({style: {marginBottom: 0}},
	                            "2 Lincoln Memorial Cir NW, Washington, DC 20037, United States"
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ),
	        this.props.children
	      )
	    );
	  }
	});

	var classSet = React.addons.classSet;
	var Dashboard = React.createClass({displayName: 'Dashboard',
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = classSet({
	      'dashboard': true,
	      'container-open': this.state.open
	    });
	    return (
	      Container({id: "container", className: classes},
	        Sidebar(null),
	        Header(null),
	        Body(null,
	          Footer(null)
	        )
	      )
	    );
	  }
	});

	module.exports = Dashboard;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(50);
	var Sidebar = __webpack_require__(51);
	var Footer = __webpack_require__(52);

	var classSet = React.addons.classSet;
	var InboxNavItem = React.createClass({displayName: 'InboxNavItem',
	  render: function() {
	    return (
	      Grid(null,
	        Row(null,
	          Col({xs: 8, collapseLeft: true, collapseRight: true},
	            Icon({glyph: this.props.glyph, className: "inbox-item-icon"}),
	            React.DOM.span(null, this.props.title)
	          ),
	          Col({xs: 4, className: "text-right", collapseLeft: true, collapseRight: true},
	            React.DOM.div({style: {marginTop: 5}}, BLabel({className: this.props.labelClass}, this.props.labelValue))
	          )
	        )
	      )
	    );
	  }
	});

	var InboxNavTag = React.createClass({displayName: 'InboxNavTag',
	  render: function() {
	    return (
	      Grid(null,
	        Row(null,
	          Col({xs: 12, collapseLeft: true, collapseRight: true},
	            Badge({className: this.props.badgeClass}, ' '),
	            React.DOM.span(null, this.props.title)
	          )
	        )
	      )
	    );
	  }
	});

	var InboxItem = React.createClass({displayName: 'InboxItem',
	  statics: {
	    ID: 0,
	    resetID: function() {
	      InboxItem.ID = 0;
	    },
	    getID: function() {
	      return ++InboxItem.ID;
	    }
	  },
	  handleClick: function(e) {
	    e.preventDefault();
	    e.stopPropagation();
	    RRouter.routing.navigate('/app/mailbox/mail');
	  },
	  render: function() {
	    var classes = React.addons.classSet({
	      'inbox-item': true,
	      'unread': this.props.unread
	    });
	    return this.transferPropsTo(
	      React.DOM.a({href: "/app/mailbox/mail/", className: classes, onClick: this.handleClick},
	        React.DOM.div({className: "inbox-avatar"},
	          React.DOM.img({src: this.props.src, width: "40", height: "40", className: this.props.imgClass + ' hidden-xs'}),
	          React.DOM.div({className: "inbox-avatar-name"},
	            React.DOM.div({className: "fg-darkgrayishblue75"}, this.props.name),
	            React.DOM.div(null, React.DOM.small(null, Badge({className: this.props.labelClass, style: {marginRight: 5, display: this.props.labelValue ? 'inline':'none'}}, this.props.labelValue), React.DOM.span(null, this.props.description)))
	          ),
	          React.DOM.div({className: "inbox-date hidden-sm hidden-xs fg-darkgray40 text-right"},
	            React.DOM.div({style: {position: 'relative', top: 5}}, this.props.date),
	            React.DOM.div({style: {position: 'relative', top: -5}}, React.DOM.small(null, "#", InboxItem.getID()))
	          )
	        )
	      )
	    );
	  }
	});

	var Body = React.createClass({displayName: 'Body',
	  handleClick: function() {
	    RRouter.routing.navigate('/app/mailbox/compose');
	  },
	  render: function() {
	    InboxItem.resetID();
	    return (
	      Container({id: "body"},
	        Grid(null,
	          Row(null,
	            Col({xs: 12},
	              PanelContainer({className: "inbox"},
	                Panel(null,
	                  PanelBody({style: {paddingTop: 0}},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 8, style: {paddingTop: 12.5}},
	                          ButtonToolbar({className: "inbox-toolbar"},
	                            ButtonGroup(null,
	                              Button({bsStyle: "blue", onClick: this.handleClick},
	                                Icon({glyph: "icon-fontello-edit-1"})
	                              )
	                            ),
	                            ButtonGroup(null,
	                              Button({outlined: true, onlyOnHover: true, bsStyle: "darkgreen45"}, Icon({glyph: "icon-fontello-reply"})),
	                              Button({outlined: true, onlyOnHover: true, bsStyle: "darkgreen45", className: "hidden-xs"}, Icon({glyph: "icon-fontello-reply-all-1"})),
	                              Button({outlined: true, onlyOnHover: true, bsStyle: "darkgreen45"}, Icon({glyph: "icon-fontello-forward"}))
	                            ),
	                            ButtonGroup({className: "hidden-xs"},
	                              Button({outlined: true, onlyOnHover: true, bsStyle: "danger", className: "text-center"}, Icon({glyph: "icon-fontello-attention-alt"})),
	                              Button({outlined: true, onlyOnHover: true, bsStyle: "danger"}, Icon({glyph: "icon-fontello-trash-1"}))
	                            )
	                          )
	                        ),
	                        Col({xs: 4, className: "text-right"},
	                          React.DOM.div({className: "inbox-avatar"},
	                            React.DOM.img({src: "public/imgs/avatars/avatar0.png", width: "40", height: "40"}),
	                            React.DOM.div({className: "inbox-avatar-name hidden-xs hidden-sm"},
	                              React.DOM.div(null, "Anna Sanchez"),
	                              React.DOM.div(null, React.DOM.small(null, "Mailbox"))
	                            )
	                          )
	                        )
	                      )
	                    ),
	                    React.DOM.hr({style: {margin: 0}}),
	                    Panel({horizontal: true},
	                      PanelLeft({className: "panel-sm-3 inbox-nav hidden-xs"},
	                        Grid(null,
	                          Row(null,
	                            Col({xs: 12},
	                              React.DOM.h6(null, React.DOM.small({className: "fg-darkgray"}, "MAILBOXES")),
	                              ListGroup({className: "list-bg-blue"},
	                                ListGroupItem({active: true},
	                                  InboxNavItem({glyph: "icon-feather-mail", title: "Inbox", labelClass: "bg-white fg-blue", labelValue: 58})
	                                ),
	                                ListGroupItem(null,
	                                  InboxNavItem({glyph: "icon-simple-line-icons-star", title: "Starred"})
	                                ),
	                                ListGroupItem(null,
	                                  InboxNavItem({glyph: "icon-dripicons-return", title: "Sent"})
	                                ),
	                                ListGroupItem(null,
	                                  InboxNavItem({glyph: "icon-feather-archive", title: "Drafts"})
	                                ),
	                                ListGroupItem(null,
	                                  InboxNavItem({glyph: "icon-dripicons-attachment", title: "Attachments"})
	                                )
	                              ),
	                              React.DOM.hr(null),
	                              React.DOM.h6(null, React.DOM.small({className: "fg-darkgray"}, "OTHERS")),
	                              ListGroup(null,
	                                ListGroupItem(null,
	                                  InboxNavItem({glyph: "icon-fontello-attention-alt", title: "Spam", labelClass: "bg-red fg-white", labelValue: 10})
	                                ),
	                                ListGroupItem(null,
	                                  InboxNavItem({glyph: "icon-fontello-trash-1", title: "Trash"})
	                                )
	                              ),
	                              React.DOM.hr(null),
	                              React.DOM.h6(null, React.DOM.small({className: "fg-darkgray"}, "TAGS")),
	                              ListGroup(null,
	                                ListGroupItem(null,
	                                  InboxNavTag({title: "#sometag", badgeClass: "bg-green fg-white"})
	                                ),
	                                ListGroupItem(null,
	                                  InboxNavTag({title: "#anothertag", badgeClass: "bg-red fg-white"})
	                                )
	                              )
	                            )
	                          )
	                        )
	                      ),
	                      PanelBody({className: "panel-sm-9 panel-xs-12"},
	                        Grid(null,
	                          Row(null,
	                            Col({xs: 12},
	                              InboxItem({unread: true, src: "public/imgs/avatars/avatar5.png", imgClass: "border-green", name: "Jordyn Ouellet (8)", labelValue: "SOME LABEL", labelClass: "bg-green fg-white", description: React.DOM.span(null, React.DOM.strong(null, "Early access: "), React.DOM.span(null, LoremIpsum({query: "1s"}))), date: "Aug 20th"}),
	                              InboxItem({unread: true, src: "public/imgs/avatars/avatar7.png", imgClass: "border-orange", name: "Toby King (4)", labelValue: "SOME LABEL", labelClass: "bg-orange fg-white", description: React.DOM.span(null, LoremIpsum({query: "1s"})), date: "Aug 19th"}),
	                              InboxItem({unread: true, src: "public/imgs/avatars/avatar9.png", imgClass: "border-blue", name: "Ava Parry", labelValue: "SOME LABEL", labelClass: "bg-blue fg-white", description: React.DOM.span(null, LoremIpsum({query: "1s"})), date: "Aug 18th"}),
	                              InboxItem({unread: true, src: "public/imgs/avatars/avatar10.png", imgClass: "border-red", name: "Angelina Mills", labelValue: "SOME LABEL", labelClass: "bg-red fg-white", description: React.DOM.span(null, LoremIpsum({query: "1s"})), date: "Aug 17rd"}),
	                              InboxItem({src: "public/imgs/avatars/avatar11.png", imgClass: "border-purple", name: "Crystal Ford", labelValue: "SOME LABEL", labelClass: "bg-purple fg-white", description: React.DOM.span(null, LoremIpsum({query: "1s"})), date: "Aug 16th"}),
	                              InboxItem({src: "public/imgs/avatars/avatar13.png", imgClass: "border-brown", name: "Ju Lan", labelValue: "SOME LABEL", labelClass: "bg-brown fg-white", description: React.DOM.span(null, LoremIpsum({query: "1s"})), date: "Aug 15th"}),
	                              InboxItem({src: "public/imgs/avatars/avatar14.png", imgClass: "border-pink", name: "Lana Collin", labelValue: "SOME LABEL", labelClass: "bg-pink fg-white", description: React.DOM.span(null, LoremIpsum({query: "1s"})), date: "Aug 14th"}),
	                              InboxItem({src: "public/imgs/avatars/avatar15.png", imgClass: "border-darkcyan", name: "Ricardo Ibarra", labelValue: "SOME LABEL", labelClass: "bg-darkcyan fg-white", description: React.DOM.span(null, LoremIpsum({query: "1s"})), date: "Aug 13th"}),
	                              InboxItem({src: "public/imgs/avatars/avatar16.png", imgClass: "border-orange75", name: "The Unknown", labelValue: "SOME LABEL", labelClass: "bg-orange75 fg-white", description: React.DOM.span(null, LoremIpsum({query: "1s"})), date: "Aug 12th"}),
	                              InboxItem({src: "public/imgs/avatars/avatar8.png", imgClass: "border-yellow", name: "Antelope Inc.", labelValue: "SOME LABEL", labelClass: "bg-yellow fg-white", description: React.DOM.span(null, LoremIpsum({query: "1s"})), date: "Aug 11th"})
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ),
	        this.props.children
	      )
	    );
	  }
	});

	var Inbox = React.createClass({displayName: 'Inbox',
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = classSet({
	      'container-open': this.state.open
	    });
	    return (
	      Container({id: "container", className: classes},
	        Sidebar(null),
	        Header(null),
	        Body(null,
	          Footer(null)
	        )
	      )
	    );
	  }
	});

	module.exports = Inbox;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(50);
	var Sidebar = __webpack_require__(51);
	var Footer = __webpack_require__(52);

	var classSet = React.addons.classSet;
	var Body = React.createClass({displayName: 'Body',
	  handleClick: function() {
	    RRouter.routing.navigate('/app/mailbox/inbox');
	  },
	  componentDidMount: function() {
	    $('#trumbowyg-demo').trumbowyg({
	      mobile: false,
	      tablet: false,
	      autogrow: true,
	      dir: $('html').attr('dir')
	    }).trumbowyg('html', '<p>Steve Jobs became the greatest business executive of our era, the one most certain to be remembered a century from now. History will place him in the pantheon right next to Edison and Ford. More than anyone else of his time, he made products that were completely innovative, combining the power of poetry and processors.</p><blockquote><p style="margin-bottom: 12.5px;"><span style="font-size: 11pt; line-height: 1.78571;">Some people say, “Give the customers what they want.” But that’s not my approach. Our job is to figure out what they’re going to want before they do. I think Henry Ford once said, <b>“If I’d asked customers what they wanted, they would have told me, ‘A faster horse!’”</b> People don’t know what they want until you show it to them. That’s why I never rely on market research. Our task is to read things that are not yet on the page.&nbsp;</span><br></p><div><span style="font-size: 11pt; line-height: 1.78571;">- Steve Jobs in <i>Steve Jobs by Walter Isaacson</i></span></div></blockquote><p>Was he smart? No, not exceptionally. Instead, he was a <b><i>genius</i></b>. His imaginative leaps were instinctive, unexpected, and at times <b><i>magical</i></b>. He was, indeed, an example of what the mathematician Mark Kac called a magician genius, someone whose insights come out of the blue and require intuition more than mere mental processing power. Like a pathfinder, he could absorb information, sniff the winds, and sense what lay ahead.</p>');
	  },
	  render: function() {
	    return (
	      Container({id: "body"},
	        Grid(null,
	          Row(null,
	            Col({xs: 12},
	              PanelContainer({className: "inbox"},
	                Panel(null,
	                  PanelBody({style: {paddingTop: 0}},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 8, style: {paddingTop: 12.5}},
	                          ButtonToolbar({className: "inbox-toolbar"},
	                            ButtonGroup(null,
	                              Button({outlined: true, onlyOnHover: true, bsStyle: "darkgreen45", onClick: this.handleClick}, Icon({glyph: "icon-dripicons-return"})),
	                              Button({outlined: true, onlyOnHover: true, bsStyle: "danger", onClick: this.handleClick}, Icon({glyph: "icon-feather-cross"}))
	                            )
	                          )
	                        ),
	                        Col({xs: 4, className: "text-right"},
	                          React.DOM.div({className: "inbox-avatar"},
	                            React.DOM.img({src: "public/imgs/avatars/avatar0.png", width: "40", height: "40"}),
	                            React.DOM.div({className: "inbox-avatar-name hidden-xs hidden-sm"},
	                              React.DOM.div(null, "Anna Sanchez"),
	                              React.DOM.div(null, React.DOM.small(null, "Compose"))
	                            )
	                          )
	                        )
	                      )
	                    ),
	                    React.DOM.hr({style: {margin: 0, marginBottom: 25}}),
	                    Panel({horizontal: true},
	                      PanelBody({className: "panel-sm-9 panel-xs-12"},
	                        Grid(null,
	                          Row(null,
	                            Col({xs: 12},
	                              Form({horizontal: true, style: {marginBottom: 25}},
	                                FormGroup(null,
	                                  Label({control: true, sm: 1, htmlFor: "email-to"}, "To"),
	                                  Col({sm: 11},
	                                    Input({type: "email", id: "email-to", placeholder: "Ex: sender@example.com", autoFocus: true})
	                                  )
	                                ),
	                                FormGroup(null,
	                                  Label({control: true, sm: 1, htmlFor: "email-cc"}, "CC"),
	                                  Col({sm: 11},
	                                    Input({type: "email", id: "email-cc"})
	                                  )
	                                ),
	                                FormGroup(null,
	                                  Label({control: true, sm: 1, htmlFor: "email-bcc"}, "BCC"),
	                                  Col({sm: 11},
	                                    Input({type: "email", id: "email-bcc"})
	                                  )
	                                ),
	                                FormGroup(null,
	                                  Label({control: true, sm: 1, htmlFor: "email-subject"}, "Subject"),
	                                  Col({sm: 11},
	                                    Input({type: "text", id: "email-subject", placeholder: "Enter a subject title here"})
	                                  )
	                                )
	                              )
	                            )
	                          ),
	                          Row(null,
	                            Col({id: "trumbowyg-demo-container", xs: 12, collapseLeft: true, collapseRight: true},
	                              React.DOM.div({id: "trumbowyg-demo"})
	                            )
	                          ),
	                          Row(null,
	                            Col({xs: 12, className: "text-right", style: {marginBottom: 16}},
	                              ButtonToolbar({style: {display: 'inline-block'}},
	                                ButtonGroup(null,
	                                  Button({outlined: true, onlyOnHover: true, bsStyle: "danger"}, "discard"),
	                                  Button({outlined: true, onlyOnHover: true, bsStyle: "green"}, "save")
	                                ),
	                                ButtonGroup(null,
	                                  Button({outlined: true, bsStyle: "blue"}, "send")
	                                )
	                              )
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ),
	        this.props.children
	      )
	    );
	  }
	});

	var Compose = React.createClass({displayName: 'Compose',
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = classSet({
	      'container-open': this.state.open
	    });
	    return (
	      Container({id: "container", className: classes},
	        Sidebar(null),
	        Header(null),
	        Body(null,
	          Footer(null)
	        )
	      )
	    );
	  }
	});

	module.exports = Compose;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(50);
	var Sidebar = __webpack_require__(51);
	var Footer = __webpack_require__(52);

	var classSet = React.addons.classSet;
	var Body = React.createClass({displayName: 'Body',
	  handleClick: function() {
	    RRouter.routing.navigate('/app/mailbox/compose');
	  },
	  handleBackClick: function() {
	    RRouter.routing.navigate('/app/mailbox/inbox');
	  },
	  handleTextareaClick: function(e) {
	    e.preventDefault();
	    e.stopPropagation();
	    this.handleClick();
	  },
	  render: function() {
	    return (
	      Container({id: "body"},
	        Grid(null,
	          Row(null,
	            Col({xs: 12},
	              PanelContainer({className: "inbox"},
	                Panel(null,
	                  PanelBody({style: {paddingTop: 0}},
	                    Grid(null,
	                      Row({className: "hidden-print"},
	                        Col({xs: 8, style: {paddingTop: 12.5}},
	                          ButtonToolbar({className: "inbox-toolbar"},
	                            ButtonGroup(null,
	                              Button({outlined: true, onlyOnHover: true, bsStyle: "darkgreen45", onClick: this.handleBackClick}, Icon({glyph: "icon-dripicons-return"}))
	                            ),
	                            ButtonGroup(null,
	                              Button({bsStyle: "blue", onClick: this.handleClick},
	                                Icon({glyph: "icon-fontello-edit-1"})
	                              )
	                            ),
	                            ButtonGroup({className: "hidden-xs"},
	                              Button({outlined: true, onlyOnHover: true, bsStyle: "darkgreen45"}, Icon({glyph: "icon-fontello-reply"})),
	                              Button({outlined: true, onlyOnHover: true, bsStyle: "darkgreen45"}, Icon({glyph: "icon-fontello-reply-all-1"})),
	                              Button({outlined: true, onlyOnHover: true, bsStyle: "darkgreen45"}, Icon({glyph: "icon-fontello-forward"}))
	                            ),
	                            ButtonGroup({className: "hidden-xs"},
	                              Button({outlined: true, onlyOnHover: true, bsStyle: "danger", className: "text-center"}, Icon({glyph: "icon-fontello-attention-alt"})),
	                              Button({outlined: true, onlyOnHover: true, bsStyle: "danger"}, Icon({glyph: "icon-fontello-trash-1"}))
	                            ),
	                            ButtonGroup({className: "hidden-xs hidden-sm"},
	                              Button({outlined: true, onlyOnHover: true, bsStyle: "brown", className: "text-center", onClick: window.print}, Icon({glyph: "icon-outlined-printer"}))
	                            )
	                          )
	                        ),
	                        Col({xs: 4, className: "text-right"},
	                          React.DOM.div({className: "inbox-avatar"},
	                            React.DOM.img({src: "public/imgs/avatars/avatar0.png", width: "40", height: "40"}),
	                            React.DOM.div({className: "inbox-avatar-name hidden-xs hidden-sm"},
	                              React.DOM.div(null, "Anna Sanchez"),
	                              React.DOM.div(null, React.DOM.small(null, "Compose"))
	                            )
	                          )
	                        )
	                      )
	                    ),
	                    React.DOM.hr({style: {margin: 0}}),
	                    Panel({horizontal: true},
	                      PanelBody({className: "panel-sm-9 panel-xs-12"},
	                        Grid(null,
	                          Row(null,
	                            Col({xs: 12},
	                              React.DOM.div({className: "inbox-avatar"},
	                                React.DOM.img({src: "public/imgs/avatars/avatar5.png", width: "40", height: "40", className: "border-green hidden-xs"}),
	                                React.DOM.div({className: "inbox-avatar-name"},
	                                  React.DOM.div({className: "fg-darkgrayishblue75"}, React.DOM.strong(null, "From: "), "Jordyn Ouellet - ", React.DOM.em(null, "jordyn_ouellet@example.com")),
	                                  React.DOM.div({className: "fg-darkgray40"}, React.DOM.strong(null, "Subject: "), "Regd financial projections for the next five years")
	                                ),
	                                React.DOM.div({className: "inbox-date fg-darkgray40 text-right hidden-xs"},
	                                  React.DOM.div({style: {position: 'relative', top: 5}},
	                                    Badge({className: "bg-blue fg-white"},
	                                      "OPPORTUNITIES"
	                                    )
	                                  ),
	                                  React.DOM.div({style: {position: 'relative'}}, React.DOM.small(null,
	                                      "Aug 21st, 11:30 PM"
	                                    )
	                                  )
	                                )
	                              )
	                            )
	                          )
	                        ),
	                        React.DOM.hr({style: {marginTop: 0}}),
	                        Grid(null,
	                          Row(null,
	                            Col({xs: 12},
	                              React.DOM.p(null,
	                                React.DOM.strong(null, "Hi Anna,")
	                              ),
	                              React.DOM.p(null,
	                                LoremIpsum({query: "4s"})
	                              ),
	                              React.DOM.p(null,
	                                LoremIpsum({query: "2s"}), React.DOM.span(null, "Bibendum est ultricies integer quis :"),
	                                React.DOM.ul(null,
	                                  React.DOM.li(null, LoremIpsum({query: "1s"})),
	                                  React.DOM.li(null, LoremIpsum({query: "1s"})),
	                                  React.DOM.li(null, LoremIpsum({query: "1s"})),
	                                  React.DOM.li(null, LoremIpsum({query: "1s"}))
	                                )
	                              ),
	                              React.DOM.p(null,
	                                React.DOM.blockquote(null,
	                                  LoremIpsum({query: "2s"})
	                                )
	                              ),
	                              React.DOM.p(null,
	                                LoremIpsum({query: "2s"})
	                              ),
	                              React.DOM.div(null, React.DOM.strong(null, "Regards,")),
	                              React.DOM.div(null, React.DOM.strong(null, "Jordyn"))
	                            )
	                          )
	                        ),
	                        React.DOM.hr(null),
	                        Grid({className: "hidden-print"},
	                          Row(null,
	                            Col({xs: 12},
	                              React.DOM.p(null,
	                                React.DOM.strong(null, "Attachments"), React.DOM.span({className: "fg-darkgray40"}, " (3 files, 680 KB)")
	                              ),
	                              React.DOM.p({className: "inbox-attachments"},
	                                Icon({glyph: "icon-1-and-quarter-x icon-outlined-image"}), React.DOM.span(null, React.DOM.strong(null, " force.gif"), " ", React.DOM.span({className: "fg-darkgray40"}, "(128 KB)")),
	                                Link({className: "inbox-attachment-download", href: "#"}, "Download")
	                              ),
	                              React.DOM.p({className: "inbox-attachments"},
	                                Icon({glyph: "icon-1-and-quarter-x icon-outlined-image"}), React.DOM.span(null, React.DOM.strong(null, " lightsaber.png"), " ", React.DOM.span({className: "fg-darkgray40"}, "(450 KB)")),
	                                Link({className: "inbox-attachment-download", href: "#"}, "Download")
	                              ),
	                              React.DOM.p({className: "inbox-attachments", style: {marginBottom: 0}},
	                                Icon({glyph: "icon-1-and-quarter-x devicon-html5-plain-wordmark"}), React.DOM.span(null, React.DOM.strong(null, " hax.html"), " ", React.DOM.span({className: "fg-darkgray40"}, "(2 KB)")),
	                                Link({className: "inbox-attachment-download", href: "#"}, "Download")
	                              )
	                            )
	                          )
	                        ),
	                        React.DOM.hr({className: "hidden-print"}),
	                        Grid({className: "hidden-print"},
	                          Row(null,
	                            Col({xs: 12},
	                              Textarea({className: "form-control", rows: "5", onClick: this.handleTextareaClick, onFocus: this.handleTextareaClick, placeholder: "Click here to reply"}), React.DOM.br(null)
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ),
	        this.props.children
	      )
	    );
	  }
	});

	var Compose = React.createClass({displayName: 'Compose',
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = classSet({
	      'container-open': this.state.open
	    });
	    return (
	      Container({id: "container", className: classes},
	        Sidebar(null),
	        Header(null),
	        Body(null,
	          Footer(null)
	        )
	      )
	    );
	  }
	});

	module.exports = Compose;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(50);
	var Sidebar = __webpack_require__(51);
	var Footer = __webpack_require__(52);

	var GalleryItem = React.createClass({displayName: 'GalleryItem',
	  getInitialState: function() {
	    return {
	      active: this.props.active || false,
	      counts: (Math.round(Math.random() * 20) + 4)
	    };
	  },
	  handleIncrement: function(e) {
	    if(this.state.active) return;
	    this.setState({
	      active: true,
	      counts: this.state.counts+1
	    });
	  },
	  render: function() {
	    return (
	      PanelContainer(null,
	        Panel(null,
	          PanelHeader(null,
	            Grid({className: "gallery-item"},
	              Row(null,
	                Col({xs: 12, style: {padding: 12.5}},
	                  React.DOM.a({className: "gallery-1 gallery-item-link", href: 'public/imgs/gallery/'+this.props.image+'.jpg', title: this.props.title},
	                    Img({responsive: true, src: 'public/imgs/gallery/'+this.props.image+'-thumb.jpg', alt: this.props.title, width: "200", height: "150"}),
	                    React.DOM.div({className: "black-wrapper text-center"},
	                      Table({style: {height: '100%', width: '100%'}},
	                        React.DOM.tbody(null,
	                          React.DOM.tr(null,
	                            React.DOM.td(null,
	                              Icon({glyph: "icon-outlined-magnifier-plus icon-3x"})
	                            )
	                          )
	                        )
	                      )
	                    )
	                  ),
	                  React.DOM.div({className: "text-center"},
	                    React.DOM.h4({className: "fg-darkgrayishblue75 hidden-xs", style: {textTransform: 'uppercase'}}, this.props.title),
	                    React.DOM.h6({className: "fg-darkgrayishblue75 visible-xs", style: {textTransform: 'uppercase'}}, this.props.title),
	                    React.DOM.h5({className: "fg-darkgray50 hidden-xs", style: {textTransform: 'uppercase'}}, this.props.subtitle),
	                    React.DOM.h6({className: "visible-xs", style: {textTransform: 'uppercase'}}, React.DOM.small({className: "fg-darkgray50"}, this.props.subtitle)),
	                      Button({outlined: true, onlyOnHover: true, bsStyle: "red", className: "fav-btn", active: this.state.active, onClick: this.handleIncrement},
	                        Icon({glyph: "icon-flatline-heart"}),
	                        React.DOM.span({className: "counts"}, this.state.counts)
	                      )
	                  )
	                )
	              )
	            )
	          )
	        )
	      )
	    );
	  }
	});

	var Body = React.createClass({displayName: 'Body',
	  componentDidMount: function() {
	    var links = document.getElementsByClassName('gallery-1');
	    $('.gallery-1').unbind('click').bind('click', function(event) {
	      blueimp.Gallery(links, {
	        index: $(this).get(0),
	        event: event
	      });
	    });
	  },
	  render: function() {
	    return (
	      Container({id: "body"},
	        Grid(null,
	          Row({className: "gallery-view"},
	            Col({xs: 6, sm: 4, collapseRight: true},
	              GalleryItem({image: "tumblr_n6es0tRk5w1st5lhmo1_1280", title: "skyline", subtitle: "10th Dec - 12th Dec"})
	            ),
	            Col({xs: 6, sm: 4, collapseRight: true},
	              GalleryItem({active: true, image: "tumblr_n6eszmeQMR1st5lhmo1_1280", title: "me at ny", subtitle: "11th Dec - 12th Dec"})
	            ),
	            Col({xs: 6, sm: 4, collapseRight: true},
	              GalleryItem({image: "tumblr_n6rzkfxeOR1st5lhmo1_1280", title: "vintage cameras", subtitle: "13th Dec - 14th Dec"})
	            ),
	            Col({xs: 6, sm: 4, collapseRight: true},
	              GalleryItem({image: "tumblr_n6rztipoQy1st5lhmo1_1280", title: "columns", subtitle: "13th Dec - 14th Dec"})
	            ),
	            Col({xs: 6, sm: 4, collapseRight: true},
	              GalleryItem({image: "tumblr_n7fg2vYZ741st5lhmo1_1280", title: "peak", subtitle: "14th Dec - 15th Dec"})
	            ),
	            Col({xs: 6, sm: 4, collapseRight: true},
	              GalleryItem({image: "tumblr_n7fgnop0bz1st5lhmo1_1280", title: "Mac", subtitle: "14th Dec - 15th Dec"})
	            ),
	            Col({xs: 6, sm: 4, collapseRight: true},
	              GalleryItem({image: "tumblr_n7yhe1sTa41st5lhmo1_1280", title: "Taxi cabs", subtitle: "14th Dec - 15th Dec"})
	            ),
	            Col({xs: 6, sm: 4, collapseRight: true},
	              GalleryItem({image: "tumblr_n8gxs0oWZ21st5lhmo1_1280", title: "Golden gate", subtitle: "14th Dec - 15th Dec"})
	            ),
	            Col({xs: 6, sm: 4, collapseRight: true},
	              GalleryItem({image: "tumblr_n9hyqfJavs1st5lhmo1_1280", title: "Empire state", subtitle: "14th Dec - 15th Dec"})
	            )
	          )
	        ),
	        this.props.children
	      )
	    );
	  }
	});

	var classSet = React.addons.classSet;
	var GalleryPage = React.createClass({displayName: 'GalleryPage',
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = classSet({
	      'container-open': this.state.open
	    });
	    return (
	      Container({id: "container", className: classes},
	        Sidebar(null),
	        Header(null),
	        Body(null,
	          Footer(null)
	        )
	      )
	    );
	  }
	});

	module.exports = GalleryPage;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(50);
	var Sidebar = __webpack_require__(51);
	var Footer = __webpack_require__(52);

	var SocialBanner = React.createClass({displayName: 'SocialBanner',
	  getInitialState: function() {
	    return {
	      follow: 'follow me',
	      followActive: false,
	      likeCount: 999,
	      likeActive: false,
	      likeTextStyle: 'fg-white'
	    };
	  },
	  handleFollow: function() {
	    this.setState({
	      follow: 'followed',
	      followActive: true
	    });
	  },
	  handleLike: function() {
	    this.setState({
	      likeCount: 1000,
	      likeActive: true,
	      likeTextStyle: 'fg-orange75'
	    });
	  },
	  render: function() {
	    return (
	      React.DOM.div({style: {height: 350, marginTop: -25, backgroundImage: 'url(public/imgs/shots/Blick_auf_Manhattan.JPG)', backgroundSize: 'cover', position: 'relative', marginBottom: 25, backgroundPosition: 'center'}},
	        React.DOM.div({className: "social-cover", style: {position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.7)'}}
	        ),
	        React.DOM.div({className: "social-desc"},
	          React.DOM.div(null,
	            React.DOM.h1({className: "fg-white"}, "Empire State, NY, USA"),
	            React.DOM.h5({className: "fg-white", style: {opacity: 0.8}}, "- Aug 20th, 2014"),
	            React.DOM.div({style: {marginTop: 50}},
	              React.DOM.div({style: {display: 'inline-block'}},
	                Button({id: "likeCount", retainBackground: true, rounded: true, bsStyle: "orange75", active: this.state.likeActive, onClick: this.handleLike},
	                  Icon({glyph: "icon-fontello-heart-1"})
	                ),
	                Label({className: "social-like-count", htmlFor: "likeCount"}, React.DOM.span({className: this.state.likeTextStyle}, this.state.likeCount, " likes"))
	              )
	            )
	          )
	        ),
	        React.DOM.div({className: "social-avatar"},
	          Img({src: "public/imgs/avatars/avatar.jpg", height: "100", width: "100", style: {display: 'block', borderRadius: 100, border: '2px solid #fff', margin: 'auto', marginTop: 50}}),
	          React.DOM.h4({className: "fg-white text-center"}, "Anna Sanchez"),
	          React.DOM.h5({className: "fg-white text-center", style: {opacity: 0.8}}, "DevOps Engineer, NY"),
	          React.DOM.hr({className: "border-black75", style: {borderWidth: 2}}),
	          React.DOM.div({className: "text-center"},
	            Button({outlined: true, inverse: true, retainBackground: true, active: this.state.followActive, bsStyle: "brightblue", onClick: this.handleFollow},
	              React.DOM.span(null, this.state.follow)
	            )
	          )
	        )
	      )
	    );
	  }
	});

	var Body = React.createClass({displayName: 'Body',
	  componentDidMount: function() {
	    $('html').addClass('social');
	    (function() {
	      // create a map in the "map" div, set the view to a given place and zoom
	      var map = L.map('map', {
	        scrollWheelZoom: false
	      }).setView([40.7127, -74.0059], 16);

	      // add an OpenStreetMap tile layer
	      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	      }).addTo(map);

	      // add a marker in the given location, attach some popup content to it and open the popup
	      L.marker([40.7127, -74.0059]).addTo(map)
	          .openPopup();
	    })();
	  },
	  componentWillUnmount: function() {
	    $('html').removeClass('social');
	  },
	  render: function() {
	    return (
	      Container({id: "body", className: "social"},
	        SocialBanner(null),
	        Grid(null,
	          Row(null,
	            Col({sm: 6, collapseRight: true},
	              PanelContainer(null,
	                PanelBody({style: {padding: 12.5}},
	                  Textarea({rows: "3", placeholder: "What's on your mind?", style: {border: 'none'}})
	                ),
	                PanelFooter({className: "fg-black75 bg-gray", style: {padding: '12.5px 25px'}},
	                  Grid(null,
	                    Row(null,
	                      Col({xs: 6, collapseLeft: true, collapseRight: true},
	                        Link({href: "#", style: {border: 'none'}}, Icon({glyph: "icon-dripicons-location icon-1-and-quarter-x fg-text", style: {marginRight: 25}})),
	                        Link({href: "#", style: {border: 'none'}}, Icon({glyph: "icon-dripicons-camera icon-1-and-quarter-x fg-text", style: {marginRight: 25}})),
	                        Link({href: "#", style: {border: 'none'}}, Icon({glyph: "icon-dripicons-calendar icon-1-and-quarter-x fg-text", style: {marginRight: 25}}))
	                      ),
	                      Col({xs: 6, className: "text-right", collapseLeft: true, collapseRight: true},
	                        Button({bsStyle: "darkgreen45"}, "send")
	                      )
	                    )
	                  )
	                )
	              ),
	              PanelContainer(null,
	                PanelBody({style: {padding: 25, paddingTop: 12.5}},
	                  React.DOM.div({className: "inbox-avatar"},
	                    React.DOM.img({src: "public/imgs/avatars/avatar7.png", width: "40", height: "40"}),
	                    React.DOM.div({className: "inbox-avatar-name"},
	                      React.DOM.div({className: "fg-darkgrayishblue75"}, "Toby King"),
	                      React.DOM.div({className: "fg-text"}, React.DOM.small(null, "Wisconsin, USA"))
	                    ),
	                    React.DOM.div({className: "inbox-date hidden-sm hidden-xs fg-text text-right"},
	                      React.DOM.div({style: {position: 'relative', top: 0}}, Icon({glyph: "icon-fontello-anchor icon-1-and-quarter-x"})),
	                      React.DOM.div({style: {position: 'relative', top: -10}}, React.DOM.small(null, React.DOM.strong(null, "2 hours ago")))
	                    )
	                  ),
	                  React.DOM.div(null,
	                    React.DOM.div({className: "fg-text"},
	                      "I'll be out of my mind and you'll be out of ideas pretty soon. So let's spend the afternoon in a cold hot air balloon. Leave your jacket behind. Lean out and touch the tree tops over town. I can't wait to kiss the ground wherever we touch back down."
	                    )
	                  ),
	                  React.DOM.div({style: {margin: -25, marginTop: 25}},
	                    Img({responsive: true, src: "public/imgs/gallery/tumblr_n8zm8ndGiY1st5lhmo1_1280.jpg"})
	                  )
	                ),
	                PanelFooter({className: "fg-black75 bg-gray", style: {padding: '12.5px 25px', margin: 0}},
	                  Grid({className: "fg-text"},
	                    Row(null,
	                      Col({xs: 6, collapseLeft: true, collapseRight: true},
	                        Link({href: "#", className: "fg-text", style: {border: 'none', marginRight: 25}}, Icon({glyph: "icon-dripicons-thumbs-up icon-1-and-quarter-x"}), React.DOM.span({style: {position: 'relative', top: -2, left: 3}}, "Like"))
	                      ),
	                      Col({xs: 6, className: "text-right", collapseLeft: true, collapseRight: true},
	                        React.DOM.span({style: {top: 5, position: 'relative'}}, React.DOM.strong(null, "523"), " people like this")
	                      )
	                    )
	                  )
	                ),
	                PanelFooter({style: {padding: 25, paddingTop: 0, paddingBottom: 0}},
	                  React.DOM.div({className: "inbox-avatar", style: {borderBottom: '1px solid #EAEDF1'}},
	                    React.DOM.img({src: "public/imgs/avatars/avatar0.png", width: "30", height: "30", style: {verticalAlign: 'top', top: 10, position: 'relative'}}),
	                    React.DOM.div({className: "inbox-avatar-name"},
	                      React.DOM.div({className: "fg-darkgrayishblue75"}, "Anna Sanchez"),
	                      React.DOM.div({className: "fg-text"}, React.DOM.small(null, "Nice!"))
	                    ),
	                    React.DOM.div({className: "inbox-date hidden-sm hidden-xs fg-text text-right"},
	                      React.DOM.div(null, React.DOM.small(null, React.DOM.strong(null, "22 minutes ago")))
	                    )
	                  ),
	                  React.DOM.div({className: "inbox-avatar", style: {borderBottom: '1px solid #EAEDF1'}},
	                    React.DOM.img({src: "public/imgs/avatars/avatar9.png", width: "30", height: "30", style: {verticalAlign: 'top', top: 10, position: 'relative'}}),
	                    React.DOM.div({className: "inbox-avatar-name"},
	                      React.DOM.div({className: "fg-darkgrayishblue75"}, "Ava Parry"),
	                      React.DOM.div({className: "fg-text"}, React.DOM.small(null, "Woah! Beautiful pic and beautiful quote! Whats the source?"))
	                    ),
	                    React.DOM.div({className: "inbox-date hidden-sm hidden-xs fg-text text-right"},
	                      React.DOM.div(null, React.DOM.small(null, React.DOM.strong(null, "2 minutes ago")))
	                    )
	                  ),
	                  React.DOM.div({className: "inbox-avatar", style: {borderBottom: '1px solid #EAEDF1'}},
	                    React.DOM.img({src: "public/imgs/avatars/avatar7.png", width: "30", height: "30", style: {verticalAlign: 'top', top: 10, position: 'relative'}}),
	                    React.DOM.div({className: "inbox-avatar-name"},
	                      React.DOM.div({className: "fg-darkgrayishblue75"}, "Ava Parry"),
	                      React.DOM.div({className: "fg-text"}, React.DOM.small(null, "Thanks guys! Appreciate! :)")),
	                      React.DOM.div({className: "fg-text"}, React.DOM.small(null, "Source: ", React.DOM.em(null, "Owl City, Ocean Eyes")))
	                    ),
	                    React.DOM.div({className: "inbox-date hidden-sm hidden-xs fg-text text-right"},
	                      React.DOM.div(null, React.DOM.small(null, React.DOM.strong(null, "few seconds ago")))
	                    )
	                  )
	                ),
	                PanelFooter({style: {padding: 12.5}},
	                  Textarea({rows: "1", placeholder: "Write a comment...", style: {border: 'none'}})
	                )
	              )
	            ),
	            Col({sm: 6},
	              PanelContainer(null,
	                PanelBody({style: {padding: 25, paddingTop: 12.5}},
	                  React.DOM.div({className: "inbox-avatar"},
	                    React.DOM.img({src: "public/imgs/avatars/avatar5.png", width: "40", height: "40"}),
	                    React.DOM.div({className: "inbox-avatar-name"},
	                      React.DOM.div({className: "fg-darkgrayishblue75"}, "Jordyn Ouellet created an event"),
	                      React.DOM.div({className: "fg-text"}, React.DOM.small(null, "Austin, USA"))
	                    ),
	                    React.DOM.div({className: "inbox-date hidden-sm hidden-xs fg-text text-right"},
	                      React.DOM.div({style: {position: 'relative', top: 0}}, Icon({glyph: "icon-ikons-calendar icon-1-and-quarter-x"})),
	                      React.DOM.div({style: {position: 'relative', top: -10}}, React.DOM.small(null, React.DOM.strong(null, "3 hours ago")))
	                    )
	                  ),
	                  React.DOM.div(null,
	                    React.DOM.div({className: "fg-darkgreen45"}, React.DOM.strong(null, "Birthday party on my Yacht in New York.")),
	                    React.DOM.div({className: "fg-text"}, "July 10 at 10:00pm"),
	                    React.DOM.div({className: "fg-text"}, "New York, USA")
	                  ),
	                  React.DOM.div({style: {margin: -25, marginTop: 25}},
	                    React.DOM.div(null,
	                      React.DOM.div({id: "map", className: "map leaflet-container leaflet-fade-anim", style: {height: 300}})
	                    )
	                  )
	                ),
	                PanelFooter({className: "fg-black75 bg-gray", style: {padding: '12.5px 25px', margin: 0}},
	                  Grid({className: "fg-text"},
	                    Row(null,
	                      Col({xs: 6, collapseLeft: true, collapseRight: true},
	                        Link({href: "#", className: "fg-text", style: {border: 'none', marginRight: 25}}, Icon({glyph: "icon-dripicons-thumbs-up icon-1-and-quarter-x"}), React.DOM.span({style: {position: 'relative', top: -2, left: 3}}, "Like"))
	                      ),
	                      Col({xs: 6, className: "text-right", collapseLeft: true, collapseRight: true},
	                        React.DOM.span({style: {top: 5, position: 'relative'}}, React.DOM.strong(null, "600"), " people like this")
	                      )
	                    )
	                  )
	                ),
	                PanelFooter({style: {padding: 12.5}},
	                  Textarea({rows: "1", placeholder: "Write a comment...", style: {border: 'none'}})
	                )
	              ),
	              PanelContainer(null,
	                PanelBody({style: {padding: 25, paddingTop: 12.5}},
	                  React.DOM.div({className: "inbox-avatar"},
	                    React.DOM.img({src: "public/imgs/avatars/avatar9.png", width: "40", height: "40"}),
	                    React.DOM.div({className: "inbox-avatar-name"},
	                      React.DOM.div({className: "fg-darkgrayishblue75"}, "Ava Parry"),
	                      React.DOM.div({className: "fg-text"}, React.DOM.small(null, "Massachusetts, USA"))
	                    ),
	                    React.DOM.div({className: "inbox-date hidden-sm hidden-xs fg-text text-right"},
	                      React.DOM.div({style: {position: 'relative', top: 0}}, Icon({glyph: "icon-feather-video icon-1-and-quarter-x"})),
	                      React.DOM.div({style: {position: 'relative', top: -10}}, React.DOM.small(null, React.DOM.strong(null, "4 hours ago")))
	                    )
	                  ),
	                  React.DOM.div(null,
	                    React.DOM.div({className: "fg-darkgreen45"},
	                      React.DOM.strong(null, "1983 Historic Apple Keynote by Steve Jobs")
	                    )
	                  ),
	                  React.DOM.div({style: {margin: -25, marginTop: 25}},
	                    React.DOM.div({className: "embed-responsive embed-responsive-16by9"},
	                      React.DOM.iframe({className: "embed-responsive-item", src: "//www.youtube.com/embed/lSiQA6KKyJo?rel=0", allowFullScreen: true})
	                    )
	                  )
	                ),
	                PanelFooter({className: "fg-black75 bg-gray", style: {padding: '12.5px 25px', margin: 0}},
	                  Grid({className: "fg-text"},
	                    Row(null,
	                      Col({xs: 6, collapseLeft: true, collapseRight: true},
	                        Link({href: "#", className: "fg-text", style: {border: 'none', marginRight: 25}}, Icon({glyph: "icon-dripicons-thumbs-up icon-1-and-quarter-x"}), React.DOM.span({style: {position: 'relative', top: -2, left: 3}}, "Like"))
	                      ),
	                      Col({xs: 6, className: "text-right", collapseLeft: true, collapseRight: true},
	                        React.DOM.span({style: {top: 5, position: 'relative'}}, React.DOM.strong(null, "4,350"), " people like this")
	                      )
	                    )
	                  )
	                ),
	                PanelFooter({style: {padding: 25, paddingTop: 0, paddingBottom: 0}},
	                  React.DOM.div({className: "inbox-avatar", style: {borderBottom: '1px solid #EAEDF1'}},
	                    React.DOM.img({src: "public/imgs/avatars/avatar0.png", width: "30", height: "30", style: {verticalAlign: 'top', top: 10, position: 'relative'}}),
	                    React.DOM.div({className: "inbox-avatar-name"},
	                      React.DOM.div({className: "fg-darkgrayishblue75"}, "Anna Sanchez"),
	                      React.DOM.div({className: "fg-text"}, React.DOM.small(null, "Love this! It also features the Superbowl ad")),
	                      React.DOM.div({className: "fg-text", style: {marginTop: -5}}, React.DOM.small(null, "which is considered the greatest ad of all time!")),
	                      React.DOM.div({className: "fg-text"}, React.DOM.small(null, "Thanks for sharing!"))
	                    ),
	                    React.DOM.div({className: "inbox-date hidden-sm hidden-xs fg-text text-right"},
	                      React.DOM.div(null, React.DOM.small(null, React.DOM.strong(null, "4 hours ago")))
	                    )
	                  ),
	                  React.DOM.div({className: "inbox-avatar", style: {borderBottom: '1px solid #EAEDF1'}},
	                    React.DOM.img({src: "public/imgs/avatars/avatar9.png", width: "30", height: "30", style: {verticalAlign: 'top', top: 10, position: 'relative'}}),
	                    React.DOM.div({className: "inbox-avatar-name"},
	                      React.DOM.div({className: "fg-darkgrayishblue75"}, "Ava Parry"),
	                      React.DOM.div({className: "fg-text"}, React.DOM.small(null, React.DOM.strong(null, "Welcome! :)")))
	                    ),
	                    React.DOM.div({className: "inbox-date hidden-sm hidden-xs fg-text text-right"},
	                      React.DOM.div(null, React.DOM.small(null, React.DOM.strong(null, "4 hours ago")))
	                    )
	                  )
	                ),
	                PanelFooter({style: {padding: 12.5}},
	                  Textarea({rows: "1", placeholder: "Write a comment...", style: {border: 'none'}})
	                )
	              )
	            )
	          )
	        ),
	        this.props.children
	      )
	    );
	  }
	});

	var classSet = React.addons.classSet;
	var Social = React.createClass({displayName: 'Social',
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = classSet({
	      'container-open': this.state.open
	    });
	    return (
	      Container({id: "container", className: classes},
	        Sidebar(null),
	        Header({pressed: true}),
	        Body(null,
	          Footer(null)
	        )
	      )
	    );
	  }
	});

	module.exports = Social;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(50);
	var Sidebar = __webpack_require__(51);
	var Footer = __webpack_require__(52);

	var Body = React.createClass({displayName: 'Body',
	  render: function() {
	    return (
	      Container({id: "body"},
	        Grid(null,
	          Row(null,
	            Col({sm: 4, smCollapseRight: true},
	              PanelContainer(null,
	                Panel(null,
	                  PanelBody({style: {padding: 0}},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h3(null, "Basic Panel"),
	                          React.DOM.p(null,
	                            LoremIpsum({query: "5s"})
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              ),
	              PanelContainer({controlStyles: "bg-blue fg-white"},
	                Panel(null,
	                  PanelHeader({className: "bg-blue"},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12, className: "fg-white"},
	                          React.DOM.h3(null, "Panel Header"),
	                          React.DOM.h6(null, "Mini Heading")
	                        )
	                      )
	                    )
	                  ),
	                  PanelBody(null,
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.p(null,
	                            LoremIpsum({query: "5s"})
	                          )
	                        )
	                      )
	                    )
	                  ),
	                  PanelFooter({className: "bg-lightblue"},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12, className: "fg-white"},
	                          React.DOM.h3(null, "Panel Footer"),
	                          React.DOM.h6(null, "Mini heading")
	                        )
	                      )
	                    )
	                  )
	                )
	              ),
	              PanelContainer({controlStyles: "bg-red fg-white"},
	                Panel({className: "force-collapse"},
	                  PanelHeader({className: "bg-red fg-white tabs"},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h4(null, "Panel Header + Plain Tabs")
	                        )
	                      )
	                    ),
	                    TabContainer({className: "plain"},
	                      TabList(null,
	                        Tab({pane: "ptpc_hf:home", active: true},
	                          Icon({bundle: "fontello", glyph: "home"})
	                        ),
	                        Tab({pane: "ptpc_hf:profile"},
	                          Icon({bundle: "fontello", glyph: "user"})
	                        ),
	                        Tab({pane: "ptpc_hf:settings"},
	                          Icon({bundle: "fontello", glyph: "cog"})
	                        )
	                      )
	                    )
	                  ),
	                  PanelBody(null,
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          TabContent(null,
	                            TabPane({ref: "ptpc_hf:home", active: true},
	                              React.DOM.h4(null, "Top Panel 1"),
	                              React.DOM.p(null, LoremIpsum({query: "2s"}))
	                            ),
	                            TabPane({ref: "ptpc_hf:profile"},
	                              React.DOM.h4(null, "Top Panel 2"),
	                              React.DOM.p(null, LoremIpsum({query: "2s"}))
	                            ),
	                            TabPane({ref: "ptpc_hf:settings"},
	                              React.DOM.h4(null, "Top Panel 3"),
	                              React.DOM.p(null, LoremIpsum({query: "2s"}))
	                            ),
	                            TabPane({ref: "ptpc_hf:table"},
	                              React.DOM.h4(null, "Bottom Panel 1"),
	                              React.DOM.p(null, LoremIpsum({query: "2s"}))
	                            ),
	                            TabPane({ref: "ptpc_hf:archive"},
	                              React.DOM.h4(null, "Bottom Panel 2"),
	                              React.DOM.p(null, LoremIpsum({query: "2s"}))
	                            ),
	                            TabPane({ref: "ptpc_hf:landscape"},
	                              React.DOM.h4(null, "Bottom Panel 3"),
	                              React.DOM.p(null, LoremIpsum({query: "2s"}))
	                            )
	                          )
	                        )
	                      )
	                    )
	                  ),
	                  PanelFooter({className: "bg-purple fg-white tabs"},
	                    TabContainer({className: "plain"},
	                      TabList(null,
	                        Tab({pane: "ptpc_hf:table"},
	                          Icon({bundle: "fontello", glyph: "th"})
	                        ),
	                        Tab({pane: "ptpc_hf:archive"},
	                          Icon({bundle: "fontello", glyph: "archive"})
	                        ),
	                        Tab({pane: "ptpc_hf:landscape"},
	                          Icon({bundle: "fontello", glyph: "docs-landscape"})
	                        )
	                      )
	                    ),
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h4(null, "Panel Footer + Plain Tabs")
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            ),
	            Col({sm: 4, smCollapseRight: true},
	              PanelContainer(null,
	                Panel(null,
	                  PanelBody(null,
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.p(null,
	                            LoremIpsum({query: "5s"})
	                          )
	                        )
	                      )
	                    )
	                  ),
	                  PanelFooter({className: "bg-red"},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12, className: "fg-white"},
	                          React.DOM.h4(null, "Panel Body + Footer without Panel Header"),
	                          React.DOM.h6(null, "Mini Heading")
	                        )
	                      )
	                    )
	                  )
	                )
	              ),
	              PanelContainer({controlStyles: "bg-purple fg-white"},
	                Panel(null,
	                  PanelHeader({className: "bg-purple fg-white tabs"},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h4(null, "Panel Header + Plain Tabs")
	                        )
	                      )
	                    ),
	                    TabContainer({className: "plain"},
	                      TabList(null,
	                        Tab({pane: "panel_tab_header:home", active: true},
	                          Icon({bundle: "fontello", glyph: "home"})
	                        ),
	                        Tab({pane: "panel_tab_header:profile"},
	                          Icon({bundle: "fontello", glyph: "user"})
	                        ),
	                        Tab({pane: "panel_tab_header:settings"},
	                          Icon({bundle: "fontello", glyph: "cog"})
	                        ),
	                        Tab(null,
	                          DropdownButton({tab: true, container: this, menu: "panel_tab_header_menu"},
	                            Icon({bundle: "fontello", glyph: "angle-down"})
	                          ),
	                          Menu({alignRight: true, ref: "panel_tab_header_menu"},
	                            MenuItem({href: "#"},
	                              Tab({dropdown: true, pane: "panel_tab_header:fat"},
	                                "@fat"
	                              )
	                            ),
	                            MenuItem({href: "#"},
	                              Tab({dropdown: true, pane: "panel_tab_header:mdo"},
	                                "@mdo"
	                              )
	                            )
	                          )
	                        )
	                      )
	                    )
	                  ),
	                  PanelBody(null,
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          TabContent(null,
	                            TabPane({ref: "panel_tab_header:home", active: true},
	                              React.DOM.p(null, LoremIpsum({query: "2s"}))
	                            ),
	                            TabPane({ref: "panel_tab_header:profile"},
	                              React.DOM.p(null, LoremIpsum({query: "2s"}))
	                            ),
	                            TabPane({ref: "panel_tab_header:settings"},
	                              React.DOM.p(null, LoremIpsum({query: "2s"}))
	                            ),
	                            TabPane({ref: "panel_tab_header:fat"},
	                              React.DOM.p(null,
	                                React.DOM.h3(null, "FAT")
	                              )
	                            ),
	                            TabPane({ref: "panel_tab_header:mdo"},
	                              React.DOM.p(null,
	                                React.DOM.h3(null, "MDO")
	                              )
	                            )
	                          )
	                        )
	                      )
	                    )
	                  ),
	                  PanelFooter({className: "bg-lightpurple"},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12, className: "fg-white"},
	                          React.DOM.h4(null, "Panel Footer"),
	                          React.DOM.h6(null, "Mini heading")
	                        )
	                      )
	                    )
	                  )
	                )
	              ),
	              PanelContainer({controlStyles: "bg-palegreen fg-white"},
	                Panel({className: "force-collapse"},
	                  PanelHeader({className: "bg-palegreen fg-white tabs"},
	                    TabContainer(null,
	                      TabList(null,
	                        Tab({pane: "tpc_hft:home", active: true},
	                          Icon({bundle: "fontello", glyph: "home"})
	                        ),
	                        Tab({pane: "tpc_hft:profile"},
	                          Icon({bundle: "fontello", glyph: "user"})
	                        ),
	                        Tab({pane: "tpc_hft:settings"},
	                          Icon({bundle: "fontello", glyph: "cog"})
	                        )
	                      )
	                    )
	                  ),
	                  PanelBody(null,
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          TabContent(null,
	                            TabPane({ref: "tpc_hft:home", active: true},
	                              React.DOM.h4(null, "Top Panel 1"),
	                              React.DOM.p(null, LoremIpsum({query: "7s"}))
	                            ),
	                            TabPane({ref: "tpc_hft:profile"},
	                              React.DOM.h4(null, "Top Panel 2"),
	                              React.DOM.p(null, LoremIpsum({query: "7s"}))
	                            ),
	                            TabPane({ref: "tpc_hft:settings"},
	                              React.DOM.h4(null, "Top Panel 3"),
	                              React.DOM.p(null, LoremIpsum({query: "7s"}))
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            ),
	            Col({sm: 4},
	              PanelContainer({controlStyles: "bg-green fg-white"},
	                Panel(null,
	                  PanelHeader({className: "bg-green"},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12, className: "fg-white"},
	                          React.DOM.h4(null, "Panel Body + Header without Panel Footer"),
	                          React.DOM.h6(null, "Mini Heading")
	                        )
	                      )
	                    )
	                  ),
	                  PanelBody(null,
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.p(null,
	                            LoremIpsum({query: "5s"})
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              ),
	              PanelContainer({controlStyles: "bg-palepink fg-white"},
	                Panel(null,
	                  PanelHeader({className: "bg-palepink"},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12, className: "fg-white"},
	                          React.DOM.h4(null, "Panel Header"),
	                          React.DOM.h6(null, "Mini heading")
	                        )
	                      )
	                    )
	                  ),
	                  PanelBody(null,
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          TabContent(null,
	                            TabPane({ref: "panel_tab_footer:home", active: true},
	                              React.DOM.p(null, LoremIpsum({query: "2s"}))
	                            ),
	                            TabPane({ref: "panel_tab_footer:profile"},
	                              React.DOM.p(null, LoremIpsum({query: "2s"}))
	                            ),
	                            TabPane({ref: "panel_tab_footer:settings"},
	                              React.DOM.p(null, LoremIpsum({query: "2s"}))
	                            ),
	                            TabPane({ref: "panel_tab_footer:fat"},
	                              React.DOM.p(null,
	                                React.DOM.h3(null, "FAT")
	                              )
	                            ),
	                            TabPane({ref: "panel_tab_footer:mdo"},
	                              React.DOM.p(null,
	                                React.DOM.h3(null, "MDO")
	                              )
	                            )
	                          )
	                        )
	                      )
	                    )
	                  ),
	                  PanelFooter({className: "bg-palepink fg-white tabs"},
	                    TabContainer({className: "plain"},
	                      TabList(null,
	                        Tab({pane: "panel_tab_footer:home", active: true},
	                          Icon({bundle: "fontello", glyph: "home"})
	                        ),
	                        Tab({pane: "panel_tab_footer:profile"},
	                          Icon({bundle: "fontello", glyph: "user"})
	                        ),
	                        Tab({pane: "panel_tab_footer:settings"},
	                          Icon({bundle: "fontello", glyph: "cog"})
	                        ),
	                        Tab({className: "dropup"},
	                          DropdownButton({tab: true, container: this, menu: "panel_tab_footer_menu"},
	                            Icon({bundle: "fontello", glyph: "angle-up"})
	                          ),
	                          Menu({alignRight: true, ref: "panel_tab_footer_menu"},
	                            MenuItem({href: "#"},
	                              Tab({dropdown: true, pane: "panel_tab_footer:fat"},
	                                "@fat"
	                              )
	                            ),
	                            MenuItem({href: "#"},
	                              Tab({dropdown: true, pane: "panel_tab_footer:mdo"},
	                                "@mdo"
	                              )
	                            )
	                          )
	                        )
	                      )
	                    ),
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h4(null, "Panel Footer + Plain Tabs")
	                        )
	                      )
	                    )
	                  )
	                )
	              ),
	              PanelContainer({controlStyles: "bg-lightorange fg-white"},
	                Panel({className: "force-collapse"},
	                  PanelBody(null,
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          TabContent(null,
	                            TabPane({active: true, ref: "tpc_hff:table"},
	                              React.DOM.h4(null, "Bottom Panel 1"),
	                              React.DOM.p(null, LoremIpsum({query: "6s"}))
	                            ),
	                            TabPane({ref: "tpc_hff:archive"},
	                              React.DOM.h4(null, "Bottom Panel 2"),
	                              React.DOM.p(null, LoremIpsum({query: "6s"}))
	                            ),
	                            TabPane({ref: "tpc_hff:landscape"},
	                              React.DOM.h4(null, "Bottom Panel 3"),
	                              React.DOM.p(null, LoremIpsum({query: "6s"}))
	                            )
	                          )
	                        )
	                      )
	                    )
	                  ),
	                  PanelFooter({className: "bg-lightorange fg-white tabs"},
	                    TabContainer(null,
	                      TabList(null,
	                        Tab({active: true, pane: "tpc_hff:table"},
	                          Icon({bundle: "fontello", glyph: "th"})
	                        ),
	                        Tab({pane: "tpc_hff:archive"},
	                          Icon({bundle: "fontello", glyph: "archive"})
	                        ),
	                        Tab({pane: "tpc_hff:landscape"},
	                          Icon({bundle: "fontello", glyph: "docs-landscape"})
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ),
	        Grid(null,
	          Row(null,
	            Col({xs: 12},
	              PanelContainer({controlStyles: "bg-grayishcyan fg-white"},
	                Panel({className: "force-collapse"},
	                  PanelHeader({className: "bg-grayishcyan fg-white tabs"},
	                    TabContainer(null,
	                      TabList(null,
	                        Tab({pane: "tpc_hf:home", active: true},
	                          Icon({bundle: "fontello", glyph: "home"})
	                        ),
	                        Tab({pane: "tpc_hf:profile"},
	                          Icon({bundle: "fontello", glyph: "user"})
	                        ),
	                        Tab({pane: "tpc_hf:settings"},
	                          Icon({bundle: "fontello", glyph: "cog"})
	                        )
	                      )
	                    )
	                  ),
	                  PanelBody(null,
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          TabContent(null,
	                            TabPane({ref: "tpc_hf:home", active: true},
	                              React.DOM.h4(null, "Top Panel 1"),
	                              React.DOM.p(null, LoremIpsum({query: "2s"}))
	                            ),
	                            TabPane({ref: "tpc_hf:profile"},
	                              React.DOM.h4(null, "Top Panel 2"),
	                              React.DOM.p(null, LoremIpsum({query: "2s"}))
	                            ),
	                            TabPane({ref: "tpc_hf:settings"},
	                              React.DOM.h4(null, "Top Panel 3"),
	                              React.DOM.p(null, LoremIpsum({query: "2s"}))
	                            ),
	                            TabPane({ref: "tpc_hf:table"},
	                              React.DOM.h4(null, "Bottom Panel 1"),
	                              React.DOM.p(null, LoremIpsum({query: "2s"}))
	                            ),
	                            TabPane({ref: "tpc_hf:archive"},
	                              React.DOM.h4(null, "Bottom Panel 2"),
	                              React.DOM.p(null, LoremIpsum({query: "2s"}))
	                            ),
	                            TabPane({ref: "tpc_hf:landscape"},
	                              React.DOM.h4(null, "Bottom Panel 3"),
	                              React.DOM.p(null, LoremIpsum({query: "2s"}))
	                            )
	                          )
	                        )
	                      )
	                    )
	                  ),
	                  PanelFooter({className: "bg-darkcyan fg-white tabs"},
	                    TabContainer(null,
	                      TabList(null,
	                        Tab({pane: "tpc_hf:table"},
	                          Icon({bundle: "fontello", glyph: "th"})
	                        ),
	                        Tab({pane: "tpc_hf:archive"},
	                          Icon({bundle: "fontello", glyph: "archive"})
	                        ),
	                        Tab({pane: "tpc_hf:landscape"},
	                          Icon({bundle: "fontello", glyph: "docs-landscape"})
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ),
	        Grid(null,
	          Row(null,
	            Col({sm: 6, smCollapseRight: true},
	              PanelContainer(null,
	                Panel({horizontal: true, className: "force-collapse"},
	                  PanelLeft({className: "bg-red fg-white tabs panel-sm-2"},
	                    TabContainer(null,
	                      TabList(null,
	                        Tab({pane: "panel_tab_panel_left:home", active: true},
	                          Icon({bundle: "fontello", glyph: "home"})
	                        ),
	                        Tab({pane: "panel_tab_panel_left:profile"},
	                          Icon({bundle: "fontello", glyph: "user"})
	                        ),
	                        Tab({pane: "panel_tab_panel_left:settings"},
	                          Icon({bundle: "fontello", glyph: "cog"})
	                        )
	                      )
	                    )
	                  ),
	                  PanelBody({className: "panel-sm-10"},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          TabContent({style: {paddingTop: 12.5}},
	                            TabPane({ref: "panel_tab_panel_left:home", active: true},
	                              React.DOM.p(null, LoremIpsum({query: "2s"}))
	                            ),
	                            TabPane({ref: "panel_tab_panel_left:profile"},
	                              React.DOM.p(null, LoremIpsum({query: "2s"}))
	                            ),
	                            TabPane({ref: "panel_tab_panel_left:settings"},
	                              React.DOM.p(null, LoremIpsum({query: "2s"}))
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            ),
	            Col({sm: 6},
	              PanelContainer(null,
	                Panel({horizontal: true, className: "force-collapse"},
	                  PanelBody({className: "panel-sm-10"},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          TabContent({style: {paddingTop: 12.5}},
	                            TabPane({ref: "panel_tab_panel_right:home", active: true},
	                              React.DOM.p(null, LoremIpsum({query: "2s"}))
	                            ),
	                            TabPane({ref: "panel_tab_panel_right:profile"},
	                              React.DOM.p(null, LoremIpsum({query: "2s"}))
	                            ),
	                            TabPane({ref: "panel_tab_panel_right:settings"},
	                              React.DOM.p(null, LoremIpsum({query: "2s"}))
	                            )
	                          )
	                        )
	                      )
	                    )
	                  ),
	                  PanelRight({className: "bg-orange fg-darkorange tabs panel-sm-2"},
	                    TabContainer(null,
	                      TabList(null,
	                        Tab({pane: "panel_tab_panel_right:home", active: true},
	                          Icon({bundle: "fontello", glyph: "home"})
	                        ),
	                        Tab({pane: "panel_tab_panel_right:profile"},
	                          Icon({bundle: "fontello", glyph: "user"})
	                        ),
	                        Tab({pane: "panel_tab_panel_right:settings"},
	                          Icon({bundle: "fontello", glyph: "cog"})
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ),
	        Grid(null,
	          Row(null,
	            Col({sm: 12},
	              PanelContainer(null,
	                Panel({horizontal: true, className: "force-collapse"},
	                  PanelLeft({className: "bg-red fg-white tabs panel-sm-1"},
	                    TabContainer(null,
	                      TabList(null,
	                        Tab({pane: "panel_tab_panel_combined:home", active: true},
	                          Icon({bundle: "fontello", glyph: "home"})
	                        ),
	                        Tab({pane: "panel_tab_panel_combined:profile"},
	                          Icon({bundle: "fontello", glyph: "user"})
	                        ),
	                        Tab({pane: "panel_tab_panel_combined:settings"},
	                          Icon({bundle: "fontello", glyph: "cog"})
	                        )
	                      )
	                    )
	                  ),
	                  PanelBody({className: "panel-sm-10"},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          TabContent({style: {paddingTop: 12.5}},
	                            TabPane({ref: "panel_tab_panel_combined:home", active: true},
	                              React.DOM.h4(null, "Left Panel"),
	                              React.DOM.p(null, LoremIpsum({query: "2s"}))
	                            ),
	                            TabPane({ref: "panel_tab_panel_combined:profile"},
	                              React.DOM.h4(null, "Left Panel"),
	                              React.DOM.p(null, LoremIpsum({query: "2s"}))
	                            ),
	                            TabPane({ref: "panel_tab_panel_combined:settings"},
	                              React.DOM.h4(null, "Left Panel"),
	                              React.DOM.p(null, LoremIpsum({query: "2s"}))
	                            ),
	                            TabPane({ref: "panel_tab_panel_combined:table"},
	                              React.DOM.h4(null, "Right Panel"),
	                              React.DOM.p(null, LoremIpsum({query: "2s"}))
	                            ),
	                            TabPane({ref: "panel_tab_panel_combined:archive"},
	                              React.DOM.h4(null, "Right Panel"),
	                              React.DOM.p(null, LoremIpsum({query: "2s"}))
	                            ),
	                            TabPane({ref: "panel_tab_panel_combined:landscape"},
	                              React.DOM.h4(null, "Right Panel"),
	                              React.DOM.p(null, LoremIpsum({query: "2s"}))
	                            )
	                          )
	                        )
	                      )
	                    )
	                  ),
	                  PanelRight({className: "bg-purple fg-white tabs panel-sm-1"},
	                    TabContainer(null,
	                      TabList(null,
	                        Tab({pane: "panel_tab_panel_combined:table"},
	                          Icon({bundle: "fontello", glyph: "th"})
	                        ),
	                        Tab({pane: "panel_tab_panel_combined:archive"},
	                          Icon({bundle: "fontello", glyph: "archive"})
	                        ),
	                        Tab({pane: "panel_tab_panel_combined:landscape"},
	                          Icon({bundle: "fontello", glyph: "docs-landscape"})
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ),
	        this.props.children
	      )
	    );
	  }
	});

	var classSet = React.addons.classSet;
	var Panels = React.createClass({displayName: 'Panels',
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = classSet({
	      'container-open': this.state.open
	    });
	    return (
	      Container({id: "container", className: classes},
	        Sidebar(null),
	        Header(null),
	        Body(null,
	          Footer(null)
	        )
	      )
	    );
	  }
	});

	module.exports = Panels;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(50);
	var Sidebar = __webpack_require__(51);
	var Footer = __webpack_require__(52);

	var Body = React.createClass({displayName: 'Body',
	  render: function() {
	    return (
	      Container({id: "body"},
	        Grid(null,
	          Row(null,
	            Col({sm: 6, smCollapseRight: true},
	              PanelContainer({bordered: true},
	                Panel(null,
	                  PanelBody(null,
	                    TimelineView({className: "border-hoverblue tl-blue"},
	                      TimelineItem(null,
	                        TimelineHeader(null,
	                          TimelineIcon({className: "bg-blue fg-white", glyph: "icon-fontello-chat-1"}),
	                          TimelineTitle(null,
	                            "Tue Jul 29 2014"
	                          )
	                        ),
	                        TimelineBody(null,
	                          React.DOM.ul(null,
	                            React.DOM.li(null,
	                              LoremIpsum({query: "2s"})
	                            )
	                          )
	                        )
	                      )
	                    ),
	                    TimelineView({className: "border-hoverblue tl-blue"},
	                      TimelineItem(null,
	                        TimelineHeader(null,
	                          TimelineIcon({className: "bg-blue fg-white", glyph: "icon-fontello-chat-1"}),
	                          TimelineTitle(null,
	                            "Tue Jul 28 2014"
	                          )
	                        ),
	                        TimelineBody(null,
	                          React.DOM.ul(null,
	                            React.DOM.li(null,
	                              LoremIpsum({query: "2s"})
	                            ),
	                            React.DOM.li(null,
	                              LoremIpsum({query: "2s"})
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            ),
	            Col({sm: 6},
	              PanelContainer({bordered: true},
	                Panel(null,
	                  PanelBody(null,
	                    TimelineView({withHeader: true, className: "border-hoverblue tl-blue"},
	                      TimelineItem(null,
	                        TimelineHeader({className: "bg-hoverblue"},
	                          TimelineIcon({className: "bg-blue fg-white", glyph: "icon-fontello-chat-1"}),
	                          TimelineTitle(null,
	                            "Tue Jul 29 2014"
	                          )
	                        ),
	                        TimelineBody(null,
	                          React.DOM.ul(null,
	                            React.DOM.li(null,
	                              LoremIpsum({query: "2s"})
	                            )
	                          )
	                        )
	                      )
	                    ),
	                    TimelineView({withHeader: true, className: "border-hovergreen tl-lightgreen"},
	                      TimelineItem(null,
	                        TimelineHeader({className: "bg-hovergreen"},
	                          TimelineIcon({className: "bg-lightgreen fg-white", glyph: "icon-fontello-chat-1"}),
	                          TimelineTitle(null,
	                            "Tue Jul 28 2014"
	                          )
	                        ),
	                        TimelineBody(null,
	                          React.DOM.ul(null,
	                            React.DOM.li(null,
	                              LoremIpsum({query: "2s"})
	                            )
	                          )
	                        )
	                      )
	                    ),
	                    TimelineView({withHeader: true, className: "border-hoveryellow tl-darkorange"},
	                      TimelineItem(null,
	                        TimelineHeader({className: "bg-hoveryellow"},
	                          TimelineIcon({className: "bg-darkorange fg-white", glyph: "icon-fontello-chat-1"}),
	                          TimelineTitle(null,
	                            "Tue Jul 28 2014"
	                          )
	                        ),
	                        TimelineBody(null,
	                          React.DOM.ul(null,
	                            React.DOM.li(null,
	                              LoremIpsum({query: "2s"})
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ),
	        Grid(null,
	          Row(null,
	            Col({sm: 6, smCollapseRight: true},
	              PanelContainer({bordered: true},
	                Panel(null,
	                  PanelBody({className: "alternate"},
	                    TimelineView({className: "border-hoverblue tl-blue"},
	                      TimelineItem(null,
	                        TimelineHeader(null,
	                          TimelineIcon({glyph: "icon-fontello-chat-1"}),
	                          TimelineTitle(null,
	                            "Tue Jul 29 2014"
	                          )
	                        ),
	                        TimelineBody(null,
	                          React.DOM.ul(null,
	                            React.DOM.li(null,
	                              React.DOM.div(null, React.DOM.strong(null, "02:39 am")),
	                              LoremIpsum({query: "2s"})
	                            ),
	                            React.DOM.li(null,
	                              React.DOM.div(null, LoremIpsum({query: "2s"}))
	                            )
	                          )
	                        )
	                      )
	                    ),
	                    TimelineView({className: "border-hovergreen tl-lightgreen"},
	                      TimelineItem(null,
	                        TimelineHeader(null,
	                          TimelineIcon({glyph: "icon-fontello-chat-1"}),
	                          TimelineTitle(null,
	                            "Tue Jul 28 2014"
	                          )
	                        ),
	                        TimelineBody(null,
	                          React.DOM.ul(null,
	                            React.DOM.li(null,
	                              React.DOM.div(null, React.DOM.strong(null, "02:39 am")),
	                              LoremIpsum({query: "2s"})
	                            ),
	                            React.DOM.li(null,
	                              React.DOM.div(null, LoremIpsum({query: "2s"}))
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            ),
	            Col({sm: 6},
	              PanelContainer({bordered: true},
	                Panel(null,
	                  PanelBody({className: "alternate"},
	                    TimelineView({withHeader: true, className: "border-hoverblue tl-blue"},
	                      TimelineItem(null,
	                        TimelineHeader({className: "bg-hoverblue"},
	                          TimelineIcon({glyph: "icon-fontello-chat-1"}),
	                          TimelineTitle(null,
	                            "Tue Jul 29 2014"
	                          )
	                        ),
	                        TimelineBody(null,
	                          React.DOM.ul(null,
	                            React.DOM.li(null,
	                              React.DOM.div(null, React.DOM.strong(null, "02:39 am")),
	                              LoremIpsum({query: "2s"})
	                            ),
	                            React.DOM.li(null,
	                              React.DOM.div(null, LoremIpsum({query: "2s"}))
	                            )
	                          )
	                        )
	                      )
	                    ),
	                    TimelineView({withHeader: true, className: "border-hovergreen tl-lightgreen"},
	                      TimelineItem(null,
	                        TimelineHeader({className: "bg-hovergreen"},
	                          TimelineIcon({glyph: "icon-fontello-chat-1"}),
	                          TimelineTitle(null,
	                            "Tue Jul 28 2014"
	                          )
	                        ),
	                        TimelineBody(null,
	                          React.DOM.ul(null,
	                            React.DOM.li(null,
	                              React.DOM.div(null, React.DOM.strong(null, "02:39 am")),
	                              LoremIpsum({query: "2s"})
	                            ),
	                            React.DOM.li({className: "left"},
	                              React.DOM.div(null, LoremIpsum({query: "2s"}))
	                            ),
	                            React.DOM.li({className: "right"},
	                              React.DOM.div(null, LoremIpsum({query: "2s"}))
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ),
	        this.props.children
	      )
	    );
	  }
	});

	var classSet = React.addons.classSet;
	var BasicTimeline = React.createClass({displayName: 'BasicTimeline',
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = classSet({
	      'container-open': this.state.open
	    });
	    return (
	      Container({id: "container", className: classes},
	        Sidebar(null),
	        Header(null),
	        Body(null,
	          Footer(null)
	        )
	      )
	    );
	  }
	});

	module.exports = BasicTimeline;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(50);
	var Sidebar = __webpack_require__(51);
	var Footer = __webpack_require__(52);

	var dataObject = JSON.parse(__webpack_require__(69));

	var Body = React.createClass({displayName: 'Body',
	  componentDidMount: function() {
	    createStoryJS({
	      type:       'timeline',
	      width:      '100%',
	      height:     '600',
	      id:         'my-timeline-story',
	      source:     dataObject,
	      embed_id:   'my-timeline'
	    });
	  },
	  render: function() {
	    return (
	      Container({id: "body"},
	        Grid(null,
	          Row(null,
	            Col({sm: 12},
	              PanelContainer({controlStyles: "bg-orange65 fg-white"},
	                PanelHeader({className: "bg-orange65 fg-white"},
	                  Grid(null,
	                    Row(null,
	                      Col({xs: 12},
	                        React.DOM.h3(null, "Interactive Timeline")
	                      )
	                    )
	                  )
	                ),
	                PanelBody(null,
	                  Grid(null,
	                    Row(null,
	                      Col({xs: 12},
	                        React.DOM.div({id: "my-timeline", dir: "ltr"})
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ),
	        this.props.children
	      )
	    );
	  }
	});

	var classSet = React.addons.classSet;
	var InteractiveTimeline = React.createClass({displayName: 'InteractiveTimeline',
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = classSet({
	      'container-open': this.state.open
	    });
	    return this.transferPropsTo(
	      Container({id: "container", className: classes},
	        Sidebar(null),
	        Header(null),
	        Body(null,
	          Footer(null)
	        )
	      )
	    );
	  }
	});

	module.exports = InteractiveTimeline;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(50);
	var Sidebar = __webpack_require__(51);
	var Footer = __webpack_require__(52);

	var codesnippet = __webpack_require__(68);

	var Body = React.createClass({displayName: 'Body',
	  componentDidMount: function() {
	    var editor = CodeMirror.fromTextArea($('#code').get(0), {
	      lineNumbers: true,
	      styleActiveLine: true,
	      matchBrackets: true,
	      theme: 'ambiance'
	    });
	  },
	  render: function() {
	    return (
	      Container({id: "body"},
	        Grid(null,
	          Row(null,
	            Col({sm: 12},
	              PanelContainer({controlStyles: "bg-blue fg-white"},
	                PanelHeader({className: "bg-blue fg-white", style: {margin: 0}},
	                  Grid(null,
	                    Row(null,
	                      Col({xs: 12},
	                        React.DOM.h3(null, "Codemirror")
	                      )
	                    )
	                  )
	                ),
	                PanelBody(null,
	                  Grid(null,
	                    Row(null,
	                      Col({xs: 12, style: {padding: 25}},
	                        Textarea({id: "code", name: "code"},
	                          codesnippet
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ),
	        this.props.children
	      )
	    );
	  }
	});

	var classSet = React.addons.classSet;
	var CodeMirrorPage = React.createClass({displayName: 'CodeMirrorPage',
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = classSet({
	      'container-open': this.state.open
	    });
	    return this.transferPropsTo(
	      Container({id: "container", className: classes},
	        Sidebar(null),
	        Header(null),
	        Body(null,
	          Footer(null)
	        )
	      )
	    );
	  }
	});

	module.exports = CodeMirrorPage;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(50);
	var Sidebar = __webpack_require__(51);
	var Footer = __webpack_require__(52);

	var MapContainer = React.createClass({displayName: 'MapContainer',
	  render: function() {
	    return (
	      PanelContainer(null,
	        Panel(null,
	          PanelBody({style: {padding: 25}},
	            React.DOM.h4({className: "text-center", style: {marginTop: 0}}, this.props.name),
	            this.props.children,
	            React.DOM.div({id: this.props.id, style: {height: 300}})
	          )
	        )
	      )
	    );
	  }
	});

	var Body = React.createClass({displayName: 'Body',
	  geocode: null,
	  routingmap: null,
	  getInitialState: function() {
	    return {
	      routeslist: []
	    };
	  },
	  geoCode: function(address) {
	    GMaps.geocode({
	      address: address,
	      callback: function(results, status) {
	        if (status == 'OK') {
	          var latlng = results[0].geometry.location;
	          this.geocode.setCenter(latlng.lat(), latlng.lng());
	          this.geocode.addMarker({
	            lat: latlng.lat(),
	            lng: latlng.lng(),
	            infoWindow: {
	              content: '<div><strong>Address:</strong> '+results[0].formatted_address+'</div>'
	            }
	          });
	        }
	      }.bind(this)
	    });
	  },
	  componentDidMount: function() {
	    (function() {
	      new GMaps({
	        scrollwheel: false,
	        div: '#basic-map',
	        lat: -12.043333,
	        lng: -77.028333
	      });
	    })();

	    (function() {
	      new GMaps({
	        scrollwheel: false,
	        div: '#map-events',
	        zoom: 16,
	        lat: -12.043333,
	        lng: -77.028333,
	        click: function(e) {
	          alert('click');
	        },
	        dragend: function(e) {
	          alert('dragend');
	        }
	      });
	    })();

	    (function() {
	      var map = new GMaps({
	        scrollwheel: false,
	        div: '#markers',
	        zoom: 16,
	        lat: -12.043333,
	        lng: -77.028333
	      });

	      map.addMarker({
	        lat: -12.043333,
	        lng: -77.028333,
	        title: 'Lima',
	        click: function(e) {
	          alert('You clicked in this marker');
	        }
	      });

	      map.addMarker({
	        lat: -12.043333,
	        lng: -77.029333,
	        title: 'Lima',
	        infoWindow: {
	          content: '<p>Some content here!</p>'
	        }
	      });
	    })();

	    (function() {
	      this.geocode = new GMaps({
	        scrollwheel: false,
	        div: '#geocode',
	        zoom: 16,
	        lat: -12.043333,
	        lng: -77.028333
	      });
	      this.geoCode('New York, NY, USA');
	    }.bind(this))();

	    (function() {
	      var map = new GMaps({
	        scrollwheel: false,
	        div: '#polyline',
	        zoom: 12,
	        lat: -12.043333,
	        lng: -77.028333
	      });

	      var path = [[-12.044012922866312, -77.02470665341184], [-12.05449279282314, -77.03024273281858], [-12.055122327623378, -77.03039293652341], [-12.075917129727586, -77.02764635449216], [-12.07635776902266, -77.02792530422971], [-12.076819390363665, -77.02893381481931], [-12.088527520066453, -77.0241058385925], [-12.090814532191756, -77.02271108990476]];

	      map.drawPolyline({
	        path: path,
	        strokeColor: '#FF0080',
	        strokeOpacity: 0.75,
	        strokeWeight: 8
	      });
	    })();

	    (function() {
	      var map = new GMaps({
	        scrollwheel: false,
	        div: '#overlays',
	        zoom: 18,
	        lat: 40.7638435,
	        lng: -73.9729691
	      });

	      map.drawOverlay({
	        lat: 40.7640135,
	        lng: -73.9729691,
	        content: '<div class="overlay">Apple Store, NY, USA<div class="overlay_arrow above"></div></div>'
	      });
	    })();

	    (function() {
	      var map = new GMaps({
	        scrollwheel: false,
	        div: '#polygon',
	        lat: -12.043333,
	        lng: -77.028333
	      });

	      var path = [[-12.040397656836609,-77.03373871559225], [-12.040248585302038,-77.03993927003302], [-12.050047116528843,-77.02448169303511], [-12.044804866577001,-77.02154422636042]];

	      polygon = map.drawPolygon({
	        paths: path, // pre-defined polygon shape
	        strokeColor: '#D71F4B',
	        strokeOpacity: 1,
	        strokeWeight: 3,
	        fillColor: '#D71F4B',
	        fillOpacity: 0.6
	      });
	    })();

	    (function() {
	      var map = new GMaps({
	        scrollwheel: false,
	        div: '#geojson',
	        lat: 39.743296277167325,
	        lng: -105.00517845153809
	      });

	      var paths = [
	                [
	                  [
	                    [-105.00432014465332, 39.74732195489861],
	                    [-105.00715255737305, 39.74620006835170],
	                    [-105.00921249389647, 39.74468219277038],
	                    [-105.01067161560059, 39.74362625960105],
	                    [-105.01195907592773, 39.74290029616054],
	                    [-105.00989913940431, 39.74078835902781],
	                    [-105.00758171081543, 39.74059036160317],
	                    [-105.00346183776855, 39.74059036160317],
	                    [-105.00097274780272, 39.74059036160317],
	                    [-105.00062942504881, 39.74072235994946],
	                    [-105.00020027160645, 39.74191033368865],
	                    [-105.00071525573731, 39.74276830198601],
	                    [-105.00097274780272, 39.74369225589818],
	                    [-105.00097274780272, 39.74461619742136],
	                    [-105.00123023986816, 39.74534214278395],
	                    [-105.00183105468751, 39.74613407445653],
	                    [-105.00432014465332, 39.74732195489861]
	                  ],[
	                    [-105.00361204147337, 39.74354376414072],
	                    [-105.00301122665405, 39.74278480127163],
	                    [-105.00221729278564, 39.74316428375108],
	                    [-105.00283956527711, 39.74390674342741],
	                    [-105.00361204147337, 39.74354376414072]
	                  ]
	                ],[
	                  [
	                    [-105.00942707061768, 39.73989736613708],
	                    [-105.00942707061768, 39.73910536278566],
	                    [-105.00685214996338, 39.73923736397631],
	                    [-105.00384807586671, 39.73910536278566],
	                    [-105.00174522399902, 39.73903936209552],
	                    [-105.00041484832764, 39.73910536278566],
	                    [-105.00041484832764, 39.73979836621592],
	                    [-105.00535011291504, 39.73986436617916],
	                    [-105.00942707061768, 39.73989736613708]
	                  ]
	                ]
	              ];

	      var polygon = map.drawPolygon({
	        paths: paths,
	        useGeoJSON: true,
	        strokeColor: '#2EB398',
	        strokeOpacity: 1,
	        strokeWeight: 3,
	        fillColor: '#2EB398',
	        fillOpacity: 0.6
	      });
	    })();

	    (function() {
	      this.routingmap = new GMaps({
	        scrollwheel: false,
	        div: '#routingmap',
	        lat: -12.043333,
	        lng: -77.028333
	      });
	    }.bind(this))();
	  },
	  handleSubmit: function(e) {
	    e.preventDefault();
	    e.stopPropagation();
	    this.geoCode($('#address').val());
	  },
	  startRouting: function(e) {
	    e.preventDefault();
	    e.stopPropagation();
	    this.setState({
	      routeslist: []
	    }, function() {
	      var map = this.routingmap;
	      var list = [];
	      map.travelRoute({
	        origin: [-12.044012922866312, -77.02470665341184],
	        destination: [-12.090814532191756, -77.02271108990476],
	        travelMode: 'driving',
	        step: function(e){
	          list.push({
	            instructions: e.instructions,
	            lat: e.end_location.lat(),
	            lng: e.end_location.lng(),
	            path: e.path
	          });
	        }.bind(this),
	        end: function(e) {
	          var lat, lng, path;
	          var processList = function(i) {
	            if(list.length === i) return;
	            lat = list[i].lat;
	            lng = list[i].lng;
	            path = list[i].path;
	            setTimeout(function() {
	              this.setState({
	                routeslist: list.slice(0, i+1)
	              });
	              map.setCenter(lat, lng);
	              map.drawPolyline({
	                path: path,
	                strokeColor: '#FF6FCF',
	                strokeWeight: 8
	              });
	              processList(i+1);
	            }.bind(this), 500);
	          }.bind(this);
	          processList(0);
	        }.bind(this)
	      });
	    }.bind(this));
	  },
	  render: function() {
	    return (
	      Container({id: "body"},
	        Grid(null,
	          Row(null,
	            Col({sm: 6, collapseRight: true},
	              MapContainer({id: "basic-map", name: "Basic Map"}),
	              MapContainer({id: "markers", name: "Map Markers"}),
	              MapContainer({id: "polyline", name: "Polylines"}),
	              MapContainer({id: "polygon", name: "Polygon"})
	            ),
	            Col({sm: 6},
	              MapContainer({id: "map-events", name: "Map Events"}),
	              MapContainer({id: "geocode", name: "Geocoding"},
	                Form({onSubmit: this.handleSubmit},
	                  FormGroup(null,
	                    InputGroup(null,
	                      Input({type: "text", id: "address", placeholder: "Address", defaultValue: "New York, NY, USA"}),
	                      InputGroupAddon({className: "plain"},
	                        Button({outlined: true, onlyOnHover: true, type: "submit", bsStyle: "darkgreen45"}, "search")
	                      )
	                    )
	                  )
	                )
	              ),
	              MapContainer({id: "overlays", name: "Overlays"}),
	              MapContainer({id: "geojson", name: "GeoJSON Polygon"})
	            )
	          ),
	          Row(null,
	            Col({xs: 12},
	              PanelContainer(null,
	                Panel(null,
	                  PanelBody({style: {padding: 25}},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12, sm: 6, collapseLeft: true},
	                          React.DOM.div({id: "routingmap", style: {height: 300}})
	                        ),
	                        Col({xs: 12, sm: 6, collapseRight: true},
	                          React.DOM.hr({className: "visible-xs"}),
	                          React.DOM.div({className: "text-center", style: {paddingBottom: 25}},
	                            Button({outlined: true, onlyOnHover: true, type: "button", bsStyle: "darkgreen45", onClick: this.startRouting}, "Start routing")
	                          ),
	                          React.DOM.div(null,
	                            React.DOM.ul(null,
	                              this.state.routeslist.map(function(route, i) {
	                                return (React.DOM.li({key: i, dangerouslySetInnerHTML: {__html: route.instructions}}));
	                              })
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ),
	        this.props.children
	      )
	    );
	  }
	});

	var classSet = React.addons.classSet;
	var MorrisJSPage = React.createClass({displayName: 'MorrisJSPage',
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = classSet({
	      'container-open': this.state.open
	    });
	    return this.transferPropsTo(
	      Container({id: "container", className: classes},
	        Sidebar(null),
	        Header(null),
	        Body(null,
	          Footer(null)
	        )
	      )
	    );
	  }
	});

	module.exports = MorrisJSPage;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(50);
	var Sidebar = __webpack_require__(51);
	var Footer = __webpack_require__(52);

	var Body = React.createClass({displayName: 'Body',
	  componentDidMount: function() {
	    $('#trumbowyg-demo').trumbowyg({
	      mobile: false,
	      tablet: false,
	      autogrow: true,
	      dir: $('html').attr('dir')
	    }).trumbowyg('html', '<p>Steve Jobs became the greatest business executive of our era, the one most certain to be remembered a century from now. History will place him in the pantheon right next to Edison and Ford. More than anyone else of his time, he made products that were completely innovative, combining the power of poetry and processors.</p><blockquote><p style="margin-bottom: 12.5px;"><span style="font-size: 11pt; line-height: 1.78571;">Some people say, “Give the customers what they want.” But that’s not my approach. Our job is to figure out what they’re going to want before they do. I think Henry Ford once said, <b>“If I’d asked customers what they wanted, they would have told me, ‘A faster horse!’”</b> People don’t know what they want until you show it to them. That’s why I never rely on market research. Our task is to read things that are not yet on the page.&nbsp;</span><br></p><div><span style="font-size: 11pt; line-height: 1.78571;">- Steve Jobs in <i>Steve Jobs by Walter Isaacson</i></span></div></blockquote><p>Was he smart? No, not exceptionally. Instead, he was a <b><i>genius</i></b>. His imaginative leaps were instinctive, unexpected, and at times <b><i>magical</i></b>. He was, indeed, an example of what the mathematician Mark Kac called a magician genius, someone whose insights come out of the blue and require intuition more than mere mental processing power. Like a pathfinder, he could absorb information, sniff the winds, and sense what lay ahead.</p>');
	  },
	  render: function() {
	    return (
	      Container({id: "body"},
	        Grid(null,
	          Row(null,
	            Col({xs: 12},
	              PanelContainer(null,
	                Panel(null,
	                  PanelHeader(null,
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h3({className: "text-center"}, "Trumbowyg Editor")
	                        )
	                      )
	                    )
	                  ),
	                  PanelBody(null,
	                    React.DOM.div({id: "trumbowyg-demo"})
	                  )
	                )
	              )
	            )
	          )
	        ),
	        this.props.children
	      )
	    );
	  }
	});

	var classSet = React.addons.classSet;
	var MorrisJSPage = React.createClass({displayName: 'MorrisJSPage',
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = classSet({
	      'container-open': this.state.open
	    });
	    return this.transferPropsTo(
	      Container({id: "container", className: classes},
	        Sidebar(null),
	        Header(null),
	        Body(null,
	          Footer(null)
	        )
	      )
	    );
	  }
	});

	module.exports = MorrisJSPage;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(50);
	var Sidebar = __webpack_require__(51);
	var Footer = __webpack_require__(52);

	var fonts = [{
	  name: 'climacon',
	  color: 'brown',
	  fonts: __webpack_require__(53)
	}, {
	  name: 'mfizz',
	  color: 'darkblue',
	  fonts: __webpack_require__(54)
	}, {
	  name: 'devicon',
	  color: 'darkgreen45',
	  fonts: __webpack_require__(55)
	}, {
	  name: 'stroke-gap-icons',
	  color: 'pink',
	  fonts: __webpack_require__(56)
	}, {
	  name: 'simple-line-icons',
	  color: 'brown',
	  fonts: __webpack_require__(57)
	}, {
	  name: 'pixelvicon',
	  color: 'purple',
	  fonts: __webpack_require__(58)
	}, {
	  name: 'nargela',
	  color: 'paleblue',
	  fonts: __webpack_require__(59)
	}, {
	  name: 'flatline',
	  color: 'desaturateddarkblue',
	  fonts: __webpack_require__(60)
	}, {
	  name: 'feather',
	  color: 'darkcyan',
	  fonts: __webpack_require__(61)
	}, {
	  name: 'dripicons',
	  color: 'deepred',
	  fonts: __webpack_require__(62)
	}, {
	  name: 'outlined',
	  color: 'blue',
	  fonts: __webpack_require__(63)
	},{
	  name: 'ikons',
	  color: 'paleorange',
	  fonts: __webpack_require__(64)
	}, {
	  name: 'fontello',
	  color: 'green',
	  fonts: __webpack_require__(65)
	}];

	var Body = React.createClass({displayName: 'Body',
	  render: function() {
	    return (
	      Container({id: "body"},
	        Grid(null,
	          Row(null,
	            Col({xs: 12},
	              fonts.map(function(font) {
	                return (
	                  PanelContainer({key: font.name, controlStyles: 'fg-white bg-'+font.color},
	                    Panel(null,
	                      PanelHeader({className: 'fg-white bg-'+font.color},
	                        Grid(null,
	                          Row(null,
	                            Col({xs: 12},
	                              React.DOM.h3({className: "text-center"}, font.name, " [Total fonts: ", font.fonts.length, "]")
	                            )
	                          )
	                        )
	                      ),
	                      PanelBody(null,
	                        Grid(null,
	                          Row(null,
	                              font.fonts.map(function(fontname) {
	                                return (
	                                  Col({key: fontname, xs: 4, className: "text-center"},
	                                    React.DOM.div(null,
	                                      Icon({className: 'fg-'+font.color, style: {fontSize: 48}, glyph: fontname})
	                                    ),
	                                    React.DOM.div(null,
	                                      fontname
	                                    )
	                                  )
	                                );
	                              }.bind(this))
	                          )
	                        )
	                      )
	                    )
	                  )
	                );
	              }.bind(this))
	            )
	          )
	        ),
	        this.props.children
	      )
	    );
	  }
	});

	var classSet = React.addons.classSet;
	var Fonts = React.createClass({displayName: 'Fonts',
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = classSet({
	      'container-open': this.state.open
	    });
	    return (
	      Container({id: "container", className: classes},
	        Sidebar(null),
	        Header(null),
	        Body(null,
	          Footer(null)
	        )
	      )
	    );
	  }
	});

	module.exports = Fonts;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(50);
	var Sidebar = __webpack_require__(51);
	var Footer = __webpack_require__(52);

	var colors = __webpack_require__(66);

	var Body = React.createClass({displayName: 'Body',
	  render: function() {
	    return (
	      Container({id: "body"},
	        Grid(null,
	          Row(null,
	            Col({sm: 6, collapseRight: true},
	              PanelContainer({controlStyles: "bg-green fg-white"},
	                Panel(null,
	                  PanelHeader({className: "bg-green fg-white"},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h3(null, "Buttons - Outlined")
	                        )
	                      )
	                    )
	                  ),
	                  PanelBody(null,
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h4(null, "Large"),
	                          React.DOM.p(null,
	                            Button({lg: true, outlined: true, style: {marginBottom: 5}, bsStyle: "default"}, "Default"), ' ',
	                            Button({lg: true, outlined: true, style: {marginBottom: 5}, bsStyle: "primary"}, "Primary"), ' ',
	                            Button({lg: true, outlined: true, style: {marginBottom: 5}, bsStyle: "success"}, "Success"), ' ',
	                            Button({lg: true, outlined: true, style: {marginBottom: 5}, bsStyle: "info"}, "Info"), ' ',
	                            Button({lg: true, outlined: true, style: {marginBottom: 5}, bsStyle: "warning"}, "Warning"), ' ',
	                            Button({lg: true, outlined: true, style: {marginBottom: 5}, bsStyle: "danger"}, "Danger"), ' '
	                          ),
	                          React.DOM.hr(null),
	                          React.DOM.h4(null, "Default"),
	                          React.DOM.p(null,
	                            Button({outlined: true, style: {marginBottom: 5}, bsStyle: "default"}, "Default"), ' ',
	                            Button({outlined: true, style: {marginBottom: 5}, bsStyle: "primary"}, "Primary"), ' ',
	                            Button({outlined: true, style: {marginBottom: 5}, bsStyle: "success"}, "Success"), ' ',
	                            Button({outlined: true, style: {marginBottom: 5}, bsStyle: "info"}, "Info"), ' ',
	                            Button({outlined: true, style: {marginBottom: 5}, bsStyle: "warning"}, "Warning"), ' ',
	                            Button({outlined: true, style: {marginBottom: 5}, bsStyle: "danger"}, "Danger"), ' '
	                          ),
	                          React.DOM.hr(null),
	                          React.DOM.h4(null, "Small"),
	                          React.DOM.p(null,
	                            Button({sm: true, outlined: true, style: {marginBottom: 5}, bsStyle: "default"}, "Default"), ' ',
	                            Button({sm: true, outlined: true, style: {marginBottom: 5}, bsStyle: "primary"}, "Primary"), ' ',
	                            Button({sm: true, outlined: true, style: {marginBottom: 5}, bsStyle: "success"}, "Success"), ' ',
	                            Button({sm: true, outlined: true, style: {marginBottom: 5}, bsStyle: "info"}, "Info"), ' ',
	                            Button({sm: true, outlined: true, style: {marginBottom: 5}, bsStyle: "warning"}, "Warning"), ' ',
	                            Button({sm: true, outlined: true, style: {marginBottom: 5}, bsStyle: "danger"}, "Danger"), ' '
	                          ),
	                          React.DOM.hr(null),
	                          React.DOM.h4(null, "Extra Small"),
	                          React.DOM.p(null,
	                            Button({xs: true, outlined: true, style: {marginBottom: 5}, bsStyle: "default"}, "Default"), ' ',
	                            Button({xs: true, outlined: true, style: {marginBottom: 5}, bsStyle: "primary"}, "Primary"), ' ',
	                            Button({xs: true, outlined: true, style: {marginBottom: 5}, bsStyle: "success"}, "Success"), ' ',
	                            Button({xs: true, outlined: true, style: {marginBottom: 5}, bsStyle: "info"}, "Info"), ' ',
	                            Button({xs: true, outlined: true, style: {marginBottom: 5}, bsStyle: "warning"}, "Warning"), ' ',
	                            Button({xs: true, outlined: true, style: {marginBottom: 5}, bsStyle: "danger"}, "Danger"), ' '
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              ),
	              PanelContainer({controlStyles: "bg-green fg-white", containerClasses: "bg-green fg-white"},
	                Panel(null,
	                  PanelHeader(null,
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h3(null, "Buttons - Outlined (Inverse)")
	                        )
	                      )
	                    )
	                  ),
	                  PanelBody(null,
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.p(null,
	                            Button({inverse: true, outlined: true, style: {marginBottom: 5}, bsStyle: "default"}, "Default"), ' ',
	                            Button({inverse: true, outlined: true, style: {marginBottom: 5}, bsStyle: "primary"}, "Primary"), ' ',
	                            Button({inverse: true, outlined: true, style: {marginBottom: 5}, bsStyle: "success"}, "Success"), ' ',
	                            Button({inverse: true, outlined: true, style: {marginBottom: 5}, bsStyle: "info"}, "Info"), ' ',
	                            Button({inverse: true, outlined: true, style: {marginBottom: 5}, bsStyle: "warning"}, "Warning"), ' ',
	                            Button({inverse: true, outlined: true, style: {marginBottom: 5}, bsStyle: "danger"}, "Danger"), ' '
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              ),
	              PanelContainer({controlStyles: "bg-paleorange fg-white"},
	                Panel(null,
	                  PanelHeader({className: "bg-paleorange fg-white"},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h3(null, "Button groups")
	                        )
	                      )
	                    )
	                  ),
	                  PanelBody({style: {padding: 0}},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h4(null, "Basic:"),
	                          React.DOM.h5(null, "Single color"),
	                          React.DOM.div({className: "text-center"},
	                            ButtonGroup(null,
	                              Button({bsStyle: "orange75"}, "Left"),
	                              Button({bsStyle: "orange75"}, "Middle"),
	                              Button({bsStyle: "orange75"}, "Right")
	                            )
	                          ),
	                          React.DOM.h5(null, "Multi-colored"),
	                          React.DOM.div({className: "text-center"},
	                            ButtonGroup(null,
	                              Button({bsStyle: "paleyellow"}, "Left"),
	                              Button({bsStyle: "pink"}, "Middle"),
	                              Button({bsStyle: "paleblue"}, "Right")
	                            )
	                          ),
	                          React.DOM.hr(null)
	                        )
	                      ),
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h4(null, "Outlined:"),
	                          React.DOM.h5(null, "Single color"),
	                          React.DOM.div({className: "text-center"},
	                            ButtonGroup(null,
	                              Button({outlined: true, bsStyle: "darkblue"}, "Left"),
	                              Button({outlined: true, bsStyle: "darkblue"}, "Middle"),
	                              Button({outlined: true, bsStyle: "darkblue"}, "Right")
	                            )
	                          ),
	                          React.DOM.h5(null, "Multi-colored"),
	                          React.DOM.div({className: "text-center"},
	                            ButtonGroup(null,
	                              Button({outlined: true, bsStyle: "red"}, "Left"),
	                              Button({outlined: true, bsStyle: "deepred"}, "Middle"),
	                              Button({outlined: true, bsStyle: "lightred"}, "Right")
	                            )
	                          ),
	                          React.DOM.br(null)
	                        )
	                      )
	                    )
	                  )
	                )
	              ),
	              PanelContainer({controlStyles: "bg-darkcyan fg-white"},
	                Panel(null,
	                  PanelHeader({className: "bg-darkcyan fg-white"},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h3(null, "Button groups : Sizing (Normal)")
	                        )
	                      )
	                    )
	                  ),
	                  PanelBody({style: {padding: 0}},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12, className: "text-center"},
	                          React.DOM.div(null,
	                            ButtonToolbar({style: {marginBottom: 10, display: 'inline-block'}},
	                              ButtonGroup({lg: true},
	                                Button({bsStyle: "red"}, "Left"),
	                                Button({bsStyle: "red"}, "Middle"),
	                                Button({bsStyle: "red"}, "Right")
	                              )
	                            )
	                          ),
	                          React.DOM.div(null,
	                            ButtonToolbar({style: {marginBottom: 10, display: 'inline-block'}},
	                              ButtonGroup(null,
	                                Button({bsStyle: "green"}, "Left"),
	                                Button({bsStyle: "green"}, "Middle"),
	                                Button({bsStyle: "green"}, "Right")
	                              )
	                            )
	                          ),
	                          React.DOM.div(null,
	                            ButtonToolbar({style: {marginBottom: 10, display: 'inline-block'}},
	                              ButtonGroup({sm: true},
	                                Button({bsStyle: "blue"}, "Left"),
	                                Button({bsStyle: "blue"}, "Middle"),
	                                Button({bsStyle: "blue"}, "Right")
	                              )
	                            )
	                          ),
	                          React.DOM.div(null,
	                            ButtonToolbar({style: {marginBottom: 10, display: 'inline-block'}},
	                              ButtonGroup({xs: true},
	                                Button({bsStyle: "orange"}, "Left"),
	                                Button({bsStyle: "orange"}, "Middle"),
	                                Button({bsStyle: "orange"}, "Right")
	                              )
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              ),
	              PanelContainer({controlStyles: "bg-grayishcyan fg-white"},
	                Panel(null,
	                  PanelHeader({className: "bg-grayishcyan fg-white"},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h3(null, "Button groups : Sizing (Outlined)")
	                        )
	                      )
	                    )
	                  ),
	                  PanelBody({style: {padding: 0}},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12, className: "text-center"},
	                          React.DOM.div(null,
	                            ButtonToolbar({style: {marginBottom: 10, display: 'inline-block'}},
	                              ButtonGroup({lg: true},
	                                Button({outlined: true, bsStyle: "red"}, "Left"),
	                                Button({outlined: true, bsStyle: "red"}, "Middle"),
	                                Button({outlined: true, bsStyle: "red"}, "Right")
	                              )
	                            )
	                          ),
	                          React.DOM.div(null,
	                            ButtonToolbar({style: {marginBottom: 10, display: 'inline-block'}},
	                              ButtonGroup(null,
	                                Button({outlined: true, bsStyle: "green"}, "Left"),
	                                Button({outlined: true, bsStyle: "green"}, "Middle"),
	                                Button({outlined: true, bsStyle: "green"}, "Right")
	                              )
	                            )
	                          ),
	                          React.DOM.div(null,
	                            ButtonToolbar({style: {marginBottom: 10, display: 'inline-block'}},
	                              ButtonGroup({sm: true},
	                                Button({outlined: true, bsStyle: "blue"}, "Left"),
	                                Button({outlined: true, bsStyle: "blue"}, "Middle"),
	                                Button({outlined: true, bsStyle: "blue"}, "Right")
	                              )
	                            )
	                          ),
	                          React.DOM.div(null,
	                            ButtonToolbar({style: {marginBottom: 10, display: 'inline-block'}},
	                              ButtonGroup({xs: true},
	                                Button({outlined: true, bsStyle: "orange"}, "Left"),
	                                Button({outlined: true, bsStyle: "orange"}, "Middle"),
	                                Button({outlined: true, bsStyle: "orange"}, "Right")
	                              )
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              ),
	              PanelContainer(null,
	                Panel(null,
	                  PanelHeader(null,
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h3(null, "Buttons - Outlined (Colors)"),
	                          React.DOM.hr(null)
	                        )
	                      )
	                    )
	                  ),
	                  PanelBody(null,
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.p(null,
	                            colors.map(function(color) {
	                              return (
	                                Button({key: color, outlined: true, style: {marginBottom: 5, marginRight: 5}, bsStyle: color}, color)
	                              );
	                            })
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            ),
	            Col({sm: 6},
	              PanelContainer({controlStyles: "bg-darkblue fg-white"},
	                Panel(null,
	                  PanelHeader({className: "bg-darkblue fg-white"},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h3(null, "Buttons - Normal")
	                        )
	                      )
	                    )
	                  ),
	                  PanelBody(null,
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h4(null, "Large"),
	                          React.DOM.p(null,
	                            Button({lg: true, style: {marginBottom: 5}, bsStyle: "default"}, "Default"), ' ',
	                            Button({lg: true, style: {marginBottom: 5}, bsStyle: "primary"}, "Primary"), ' ',
	                            Button({lg: true, style: {marginBottom: 5}, bsStyle: "success"}, "Success"), ' ',
	                            Button({lg: true, style: {marginBottom: 5}, bsStyle: "info"}, "Info"), ' ',
	                            Button({lg: true, style: {marginBottom: 5}, bsStyle: "warning"}, "Warning"), ' ',
	                            Button({lg: true, style: {marginBottom: 5}, bsStyle: "danger"}, "Danger"), ' '
	                          ),
	                          React.DOM.hr(null),
	                          React.DOM.h4(null, "Default"),
	                          React.DOM.p(null,
	                            Button({style: {marginBottom: 5}, bsStyle: "default"}, "Default"), ' ',
	                            Button({style: {marginBottom: 5}, bsStyle: "primary"}, "Primary"), ' ',
	                            Button({style: {marginBottom: 5}, bsStyle: "success"}, "Success"), ' ',
	                            Button({style: {marginBottom: 5}, bsStyle: "info"}, "Info"), ' ',
	                            Button({style: {marginBottom: 5}, bsStyle: "warning"}, "Warning"), ' ',
	                            Button({style: {marginBottom: 5}, bsStyle: "danger"}, "Danger"), ' '
	                          ),
	                          React.DOM.hr(null),
	                          React.DOM.h4(null, "Small"),
	                          React.DOM.p(null,
	                            Button({sm: true, style: {marginBottom: 5}, bsStyle: "default"}, "Default"), ' ',
	                            Button({sm: true, style: {marginBottom: 5}, bsStyle: "primary"}, "Primary"), ' ',
	                            Button({sm: true, style: {marginBottom: 5}, bsStyle: "success"}, "Success"), ' ',
	                            Button({sm: true, style: {marginBottom: 5}, bsStyle: "info"}, "Info"), ' ',
	                            Button({sm: true, style: {marginBottom: 5}, bsStyle: "warning"}, "Warning"), ' ',
	                            Button({sm: true, style: {marginBottom: 5}, bsStyle: "danger"}, "Danger"), ' '
	                          ),
	                          React.DOM.hr(null),
	                          React.DOM.h4(null, "Extra Small"),
	                          React.DOM.p(null,
	                            Button({xs: true, style: {marginBottom: 5}, bsStyle: "default"}, "Default"), ' ',
	                            Button({xs: true, style: {marginBottom: 5}, bsStyle: "primary"}, "Primary"), ' ',
	                            Button({xs: true, style: {marginBottom: 5}, bsStyle: "success"}, "Success"), ' ',
	                            Button({xs: true, style: {marginBottom: 5}, bsStyle: "info"}, "Info"), ' ',
	                            Button({xs: true, style: {marginBottom: 5}, bsStyle: "warning"}, "Warning"), ' ',
	                            Button({xs: true, style: {marginBottom: 5}, bsStyle: "danger"}, "Danger"), ' '
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              ),
	              PanelContainer({controlStyles: "bg-red fg-white"},
	                Panel(null,
	                  PanelHeader({className: "bg-red fg-white"},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h3(null, "Button groups: Button toolbar")
	                        )
	                      )
	                    )
	                  ),
	                  PanelBody({style: {padding: 0}},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h4(null, "Basic:"),
	                          React.DOM.h5(null, "Single color"),
	                          React.DOM.div({className: "text-center"},
	                            ButtonToolbar({style: {display: 'inline-block'}},
	                              ButtonGroup(null,
	                                Button({bsStyle: "darkgreen45"}, "1"),
	                                Button({bsStyle: "darkgreen45"}, "2"),
	                                Button({bsStyle: "darkgreen45"}, "3"),
	                                Button({bsStyle: "darkgreen45"}, "4")
	                              ),
	                              ButtonGroup(null,
	                                Button({bsStyle: "darkgreen45"}, "5"),
	                                Button({bsStyle: "darkgreen45"}, "6"),
	                                Button({bsStyle: "darkgreen45"}, "7")
	                              ),
	                              ButtonGroup(null,
	                                Button({bsStyle: "darkgreen45"}, "8")
	                              )
	                            )
	                          ),
	                          React.DOM.h5(null, "Multi-colored"),
	                          React.DOM.div({className: "text-center"},
	                            ButtonToolbar({style: {display: 'inline-block'}},
	                              ButtonGroup(null,
	                                Button({bsStyle: "deepred"}, "1"),
	                                Button({bsStyle: "red"}, "2"),
	                                Button({bsStyle: "lightred"}, "3"),
	                                Button({bsStyle: "brightblue"}, "4")
	                              ),
	                              ButtonGroup(null,
	                                Button({bsStyle: "blue"}, "5"),
	                                Button({bsStyle: "darkblue"}, "6"),
	                                Button({bsStyle: "purple"}, "7")
	                              ),
	                              ButtonGroup(null,
	                                Button({bsStyle: "lightpurple"}, "8")
	                              )
	                            )
	                          ),
	                          React.DOM.hr(null)
	                        )
	                      ),
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h4(null, "Outlined:"),
	                          React.DOM.h5(null, "Single color"),
	                          React.DOM.div({className: "text-center"},
	                            ButtonToolbar({style: {display: 'inline-block'}},
	                              ButtonGroup(null,
	                                Button({outlined: true, bsStyle: "purple"}, "1"),
	                                Button({outlined: true, bsStyle: "purple"}, "2"),
	                                Button({outlined: true, bsStyle: "purple"}, "3"),
	                                Button({outlined: true, bsStyle: "purple"}, "4")
	                              ),
	                              ButtonGroup(null,
	                                Button({outlined: true, bsStyle: "purple"}, "5"),
	                                Button({outlined: true, bsStyle: "purple"}, "6"),
	                                Button({outlined: true, bsStyle: "purple"}, "7")
	                              ),
	                              ButtonGroup(null,
	                                Button({outlined: true, bsStyle: "purple"}, "8")
	                              )
	                            )
	                          ),
	                          React.DOM.h5(null, "Multi-colored"),
	                          React.DOM.div({className: "text-center"},
	                            ButtonToolbar({style: {display: 'inline-block'}},
	                              ButtonGroup(null,
	                                Button({outlined: true, bsStyle: "desaturateddarkblue"}, "1"),
	                                Button({outlined: true, bsStyle: "darkcyan"}, "2"),
	                                Button({outlined: true, bsStyle: "grayishcyan"}, "3"),
	                                Button({outlined: true, bsStyle: "brown"}, "4")
	                              ),
	                              ButtonGroup(null,
	                                Button({outlined: true, bsStyle: "darkgreen40"}, "5"),
	                                Button({outlined: true, bsStyle: "darkorange"}, "6"),
	                                Button({outlined: true, bsStyle: "pinkishred"}, "7")
	                              ),
	                              ButtonGroup(null,
	                                Button({outlined: true, bsStyle: "brownishgreen"}, "8")
	                              )
	                            )
	                          ),
	                          React.DOM.br(null)
	                        )
	                      )
	                    )
	                  )
	                )
	              ),
	              PanelContainer({noOverflow: true, controlStyles: "bg-pink fg-white"},
	                Panel(null,
	                  PanelHeader({className: "bg-pink fg-white"},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h3(null, "Button groups : Nesting (Normal)")
	                        )
	                      )
	                    )
	                  ),
	                  PanelBody({style: {padding: 0}},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12, className: "text-center"},
	                          React.DOM.div(null,
	                            ButtonGroup(null,
	                              Button({bsStyle: "pink"}, "1"),
	                              Button({bsStyle: "pink"}, "2"),
	                              ButtonGroup(null,
	                                DropdownButton({bsStyle: "pink", container: this, menu: "nested-menu1"},
	                                  React.DOM.span(null, "Dropdown "), Caret(null)
	                                ),
	                                Menu({ref: "nested-menu1", bsStyle: "pink"},
	                                  MenuItem({href: "#"}, "Regular link"),
	                                  MenuItem({href: "#", disabled: true}, "Disabled link"),
	                                  MenuItem({href: "#"}, "Another link")
	                                )
	                              )
	                            )
	                          ),
	                          React.DOM.br(null)
	                        )
	                      )
	                    )
	                  )
	                )
	              ),
	              PanelContainer({noOverflow: true, controlStyles: "bg-paleblue fg-white"},
	                Panel(null,
	                  PanelHeader({className: "bg-paleblue fg-white"},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h3(null, "Button groups : Nesting (Outlined)")
	                        )
	                      )
	                    )
	                  ),
	                  PanelBody({style: {padding: 0}},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12, className: "text-center"},
	                          React.DOM.div(null,
	                            ButtonGroup(null,
	                              Button({outlined: true, bsStyle: "paleblue"}, "1"),
	                              Button({outlined: true, bsStyle: "paleblue"}, "2"),
	                              ButtonGroup(null,
	                                DropdownButton({outlined: true, bsStyle: "paleblue", container: this, menu: "nested-menu2"},
	                                  React.DOM.span(null, "Dropdown "), Caret(null)
	                                ),
	                                Menu({ref: "nested-menu2", bsStyle: "paleblue"},
	                                  MenuItem({href: "#"}, "Regular link"),
	                                  MenuItem({href: "#", disabled: true}, "Disabled link"),
	                                  MenuItem({href: "#"}, "Another link")
	                                )
	                              )
	                            )
	                          ),
	                          React.DOM.br(null)
	                        )
	                      )
	                    )
	                  )
	                )
	              ),
	              PanelContainer({noOverflow: true, controlStyles: "bg-darkorange fg-white"},
	                Panel(null,
	                  PanelHeader({className: "bg-darkorange fg-white"},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h3(null, "Button groups : Vertical variation")
	                        )
	                      )
	                    )
	                  ),
	                  PanelBody({style: {padding: 0}},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 6, className: "text-center"},
	                          React.DOM.div(null,
	                          ButtonGroup({vertical: true},
	                            Button({bsStyle: "darkorange"}, "Button"),
	                            Button({bsStyle: "darkorange"}, "Button"),
	                            ButtonGroup(null,
	                              DropdownButton({bsStyle: "darkorange", container: this, menu: "vertical-menu1"},
	                                React.DOM.span(null, "Dropdown "), Caret(null)
	                              ),
	                              Menu({bsStyle: "darkorange", ref: "vertical-menu1"},
	                                MenuItem({href: "#"}, "Regular link"),
	                                MenuItem({href: "#", disabled: true}, "Disabled link"),
	                                MenuItem({href: "#"}, "Another link")
	                              )
	                            ),
	                            Button({bsStyle: "darkorange"}, "Button"),
	                            Button({bsStyle: "darkorange"}, "Button"),
	                            ButtonGroup(null,
	                              DropdownButton({bsStyle: "darkorange", container: this, menu: "vertical-menu2"},
	                                React.DOM.span(null, "Dropdown "), Caret(null)
	                              ),
	                              Menu({bsStyle: "darkorange", ref: "vertical-menu2"},
	                                MenuItem({href: "#"}, "Regular link"),
	                                MenuItem({href: "#", disabled: true}, "Disabled link"),
	                                MenuItem({href: "#"}, "Another link")
	                              )
	                            ),
	                            ButtonGroup(null,
	                              DropdownButton({bsStyle: "darkorange", container: this, menu: "vertical-menu3"},
	                                React.DOM.span(null, "Dropdown "), Caret(null)
	                              ),
	                              Menu({bsStyle: "darkorange", ref: "vertical-menu3"},
	                                MenuItem({href: "#"}, "Regular link"),
	                                MenuItem({href: "#", disabled: true}, "Disabled link"),
	                                MenuItem({href: "#"}, "Another link")
	                              )
	                            ),
	                            ButtonGroup(null,
	                              DropdownButton({bsStyle: "darkorange", container: this, menu: "vertical-menu4"},
	                                React.DOM.span(null, "Dropdown "), Caret(null)
	                              ),
	                              Menu({bsStyle: "darkorange", ref: "vertical-menu4"},
	                                MenuItem({href: "#"}, "Regular link"),
	                                MenuItem({href: "#", disabled: true}, "Disabled link"),
	                                MenuItem({href: "#"}, "Another link")
	                              )
	                            )
	                          )
	                          ),
	                          React.DOM.br(null)
	                        ),
	                        Col({xs: 6, className: "text-center"},
	                          React.DOM.div(null,
	                          ButtonGroup({vertical: true},
	                            Button({outlined: true, bsStyle: "pinkishred"}, "Button"),
	                            Button({outlined: true, bsStyle: "pinkishred"}, "Button"),
	                            ButtonGroup(null,
	                              DropdownButton({outlined: true, bsStyle: "pinkishred", container: this, menu: "vertical-outline-menu1"},
	                                React.DOM.span(null, "Dropdown "), Caret(null)
	                              ),
	                              Menu({alignRight: true, bsStyle: "pinkishred", ref: "vertical-outline-menu1"},
	                                MenuItem({href: "#"}, "Regular link"),
	                                MenuItem({href: "#", disabled: true}, "Disabled link"),
	                                MenuItem({href: "#"}, "Another link")
	                              )
	                            ),
	                            Button({outlined: true, bsStyle: "pinkishred"}, "Button"),
	                            Button({outlined: true, bsStyle: "pinkishred"}, "Button"),
	                            ButtonGroup(null,
	                              DropdownButton({outlined: true, bsStyle: "pinkishred", container: this, menu: "vertical-outline-menu2"},
	                                React.DOM.span(null, "Dropdown "), Caret(null)
	                              ),
	                              Menu({alignRight: true, bsStyle: "pinkishred", ref: "vertical-outline-menu2"},
	                                MenuItem({href: "#"}, "Regular link"),
	                                MenuItem({href: "#", disabled: true}, "Disabled link"),
	                                MenuItem({href: "#"}, "Another link")
	                              )
	                            ),
	                            ButtonGroup(null,
	                              DropdownButton({outlined: true, bsStyle: "pinkishred", container: this, menu: "vertical-outline-menu3"},
	                                React.DOM.span(null, "Dropdown "), Caret(null)
	                              ),
	                              Menu({alignRight: true, bsStyle: "pinkishred", ref: "vertical-outline-menu3"},
	                                MenuItem({href: "#"}, "Regular link"),
	                                MenuItem({href: "#", disabled: true}, "Disabled link"),
	                                MenuItem({href: "#"}, "Another link")
	                              )
	                            ),
	                            ButtonGroup(null,
	                              DropdownButton({outlined: true, bsStyle: "pinkishred", container: this, menu: "vertical-outline-menu4"},
	                                React.DOM.span(null, "Dropdown "), Caret(null)
	                              ),
	                              Menu({alignRight: true, bsStyle: "pinkishred", ref: "vertical-outline-menu4"},
	                                MenuItem({href: "#"}, "Regular link"),
	                                MenuItem({href: "#", disabled: true}, "Disabled link"),
	                                MenuItem({href: "#"}, "Another link")
	                              )
	                            )
	                          )
	                          ),
	                          React.DOM.br(null)
	                        )
	                      )
	                    )
	                  )
	                )
	              ),
	              PanelContainer({noOverflow: true, controlStyles: "bg-paleyellow fg-white"},
	                Panel(null,
	                  PanelHeader({className: "bg-paleyellow fg-white"},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h3(null, "Button groups : Justified button groups")
	                        )
	                      )
	                    )
	                  ),
	                  PanelBody({style: {padding: 0}},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12, className: "text-center"},
	                          React.DOM.div(null,
	                          ButtonGroup({justified: true},
	                            Button({bsStyle: "brown50", componentClass: React.DOM.a}, "Left"),
	                            Button({bsStyle: "darkblue", componentClass: React.DOM.a}, "Middle"),
	                            Button({bsStyle: "darkgreen45", componentClass: React.DOM.a}, "Right")
	                          )
	                          ),
	                          React.DOM.br(null),
	                          React.DOM.div(null,
	                          ButtonGroup({justified: true},
	                            Button({bsStyle: "darkcyan", componentClass: React.DOM.a}, "Left"),
	                            Button({bsStyle: "darkbrown", componentClass: React.DOM.a}, "Middle"),
	                            ButtonGroup(null,
	                              DropdownButton({bsStyle: "brightyellow", container: this, menu: "justified-menu-1"},
	                                React.DOM.span(null, "Dropdown "), Caret(null)
	                              ),
	                              Menu({bsStyle: "brightyellow", ref: "justified-menu-1", alignRight: true},
	                                MenuItem({href: "#"}, "Regular link"),
	                                MenuItem({href: "#", disabled: true}, "Disabled link"),
	                                MenuItem({href: "#"}, "Another link")
	                              )
	                            )
	                          )
	                          ),
	                          React.DOM.br(null),
	                          React.DOM.div(null,
	                          ButtonGroup({justified: true},
	                            Button({outlined: true, bsStyle: "darkgreen45", componentClass: React.DOM.a}, "Left"),
	                            Button({outlined: true, bsStyle: "darkgreen45", componentClass: React.DOM.a}, "Middle"),
	                            Button({outlined: true, bsStyle: "darkgreen45", componentClass: React.DOM.a}, "Right")
	                          )
	                          ),
	                          React.DOM.br(null),
	                          React.DOM.div(null,
	                          ButtonGroup({justified: true},
	                            Button({outlined: true, bsStyle: "brightyellow", componentClass: React.DOM.a}, "Left"),
	                            Button({outlined: true, bsStyle: "brightyellow", componentClass: React.DOM.a}, "Middle"),
	                            ButtonGroup(null,
	                              DropdownButton({outlined: true, bsStyle: "brightyellow", container: this, menu: "justified-menu-2"},
	                                React.DOM.span(null, "Dropdown "), Caret(null)
	                              ),
	                              Menu({bsStyle: "brightyellow", ref: "justified-menu-2", alignRight: true},
	                                MenuItem({href: "#"}, "Regular link"),
	                                MenuItem({href: "#", disabled: true}, "Disabled link"),
	                                MenuItem({href: "#"}, "Another link")
	                              )
	                            )
	                          )
	                          ),
	                          React.DOM.br(null)
	                        )
	                      )
	                    )
	                  )
	                )
	              ),
	              PanelContainer(null,
	                Panel(null,
	                  PanelHeader(null,
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h3(null, "Buttons - Normal (Colors)"),
	                          React.DOM.hr(null)
	                        )
	                      )
	                    )
	                  ),
	                  PanelBody(null,
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.p(null,
	                            colors.map(function(color) {
	                              return (
	                                Button({key: color, style: {marginBottom: 5, marginRight: 5}, bsStyle: color}, color)
	                              );
	                            })
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ),
	        this.props.children
	      )
	    );
	  }
	});

	var classSet = React.addons.classSet;
	var Buttons = React.createClass({displayName: 'Buttons',
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = classSet({
	      'container-open': this.state.open
	    });
	    return (
	      Container({id: "container", className: classes},
	        Sidebar(null),
	        Header(null),
	        Body(null,
	          Footer(null)
	        )
	      )
	    );
	  }
	});

	module.exports = Buttons;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(50);
	var Sidebar = __webpack_require__(51);
	var Footer = __webpack_require__(52);

	var colors = __webpack_require__(66);

	var Body = React.createClass({displayName: 'Body',
	  render: function() {
	    return (
	      Container({id: "body"},
	        Grid(null,
	          Row(null,
	            Col({sm: 6, collapseRight: true},
	              PanelContainer({noOverflow: true, controlStyles: "bg-darkgreen45 fg-white"},
	                Panel(null,
	                  PanelHeader({className: "bg-darkgreen45 fg-white"},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h4(null, "Dropdowns and Dropups")
	                        )
	                      )
	                    )
	                  ),
	                  PanelBody(null,
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 6},
	                          Dropdown(null,
	                            DropdownButton({bsStyle: "green", container: this, menu: "menu1"},
	                              React.DOM.span(null, "Basic "), Caret(null)
	                            ),
	                            Menu({bsStyle: "green", ref: "menu1"},
	                              MenuItem({active: true, href: "#"}, "Action"),
	                              MenuItem({href: "#"}, "Another action"),
	                              MenuItem({href: "#"}, "Something else here"),
	                              MenuItem({divider: true}),
	                              MenuItem({href: "#"}, "Separated link")
	                            )
	                          ),
	                          React.DOM.br(null),
	                          Dropdown(null,
	                            DropdownButton({outlined: true, container: this, bsStyle: "lightblue", menu: "menu2"},
	                              React.DOM.span(null, "With Headers "), Caret(null)
	                            ),
	                            Menu({ref: "menu2", bsStyle: "lightblue"},
	                              MenuItem({header: true}, "Dropdown header"),
	                              MenuItem({href: "#"}, "Action"),
	                              MenuItem({href: "#"}, "Another action"),
	                              MenuItem({href: "#"}, "Something else here"),
	                              MenuItem({divider: true}),
	                              MenuItem({header: true}, "Dropdown header"),
	                              MenuItem({href: "#"}, "Separated link")
	                            )
	                          )
	                        ),
	                        Col({xs: 6, className: "text-right"},
	                          Dropdown(null,
	                            DropdownButton({outlined: true, container: this, menu: "menu3", bsStyle: "green"},
	                              React.DOM.span(null, "Outlined "), Caret(null)
	                            ),
	                            Menu({alignRight: true, ref: "menu3", bsStyle: "green"},
	                              MenuItem({active: true, href: "#"}, "Action"),
	                              MenuItem({href: "#"}, "Another action"),
	                              MenuItem({href: "#"}, "Something else here"),
	                              MenuItem({divider: true}),
	                              MenuItem({href: "#"}, "Separated link")
	                            )
	                          ),
	                          React.DOM.br(null),
	                          Dropdown(null,
	                            DropdownButton({outlined: true, container: this, menu: "menu4", bsStyle: "orange"},
	                              React.DOM.span(null, "Disabled "), Caret(null)
	                            ),
	                            Menu({alignRight: true, ref: "menu4", bsStyle: "orange"},
	                              MenuItem({disabled: true, href: "#"}, "Disabled"),
	                              MenuItem({disabled: true, href: "#"}, "Another action"),
	                              MenuItem({href: "#"}, "Something else here"),
	                              MenuItem({divider: true}),
	                              MenuItem({href: "#"}, "Separated link")
	                            )
	                          )
	                        )
	                      ),
	                      React.DOM.hr(null),
	                      Row(null,
	                        Col({xs: 6},
	                          React.DOM.div(null,
	                          ButtonGroup({dropup: true},
	                            DropdownButton({bsStyle: "green", container: this, menu: "menu6"},
	                              React.DOM.span(null, "Basic "), Caret(null)
	                            ),
	                            Menu({bsStyle: "green", ref: "menu6"},
	                              MenuItem({active: true, href: "#"}, "Action"),
	                              MenuItem({href: "#"}, "Another action"),
	                              MenuItem({href: "#"}, "Something else here"),
	                              MenuItem({divider: true}),
	                              MenuItem({href: "#"}, "Separated link")
	                            )
	                          )
	                          ),
	                          React.DOM.br(null),
	                          React.DOM.div(null,
	                          ButtonGroup({dropup: true},
	                            DropdownButton({outlined: true, container: this, bsStyle: "lightblue", menu: "menu7"},
	                              React.DOM.span(null, "With Headers "), Caret(null)
	                            ),
	                            Menu({ref: "menu7", bsStyle: "lightblue"},
	                              MenuItem({header: true}, "Dropup Header"),
	                              MenuItem({href: "#"}, "Action"),
	                              MenuItem({href: "#"}, "Another action"),
	                              MenuItem({href: "#"}, "Something else here"),
	                              MenuItem({divider: true}),
	                              MenuItem({header: true}, "Dropup Header"),
	                              MenuItem({href: "#"}, "Separated link")
	                            )
	                          )
	                          )
	                        ),
	                        Col({xs: 6, className: "text-right"},
	                          React.DOM.div(null,
	                          ButtonGroup({dropup: true},
	                            DropdownButton({outlined: true, container: this, menu: "menu8", bsStyle: "green"},
	                              React.DOM.span(null, "Outlined "), Caret(null)
	                            ),
	                            Menu({alignRight: true, ref: "menu8", bsStyle: "green"},
	                              MenuItem({active: true, href: "#"}, "Action"),
	                              MenuItem({href: "#"}, "Another action"),
	                              MenuItem({href: "#"}, "Something else here"),
	                              MenuItem({divider: true}),
	                              MenuItem({href: "#"}, "Separated link")
	                            )
	                          )
	                          ),
	                          React.DOM.br(null),
	                          React.DOM.div(null,
	                          ButtonGroup({dropup: true},
	                            DropdownButton({outlined: true, container: this, menu: "menu9", bsStyle: "orange"},
	                              React.DOM.span(null, "Disabled "), Caret(null)
	                            ),
	                            Menu({alignRight: true, ref: "menu9", bsStyle: "orange"},
	                              MenuItem({disabled: true, href: "#"}, "Disabled"),
	                              MenuItem({disabled: true, href: "#"}, "Another action"),
	                              MenuItem({href: "#"}, "Something else here"),
	                              MenuItem({divider: true}),
	                              MenuItem({href: "#"}, "Separated link")
	                            )
	                          )
	                          ),
	                          React.DOM.br(null)
	                        )
	                      )
	                    )
	                  )
	                )
	              ),
	              PanelContainer({noOverflow: true, controlStyles: "bg-darkgreen45 fg-white", containerClasses: "bg-darkgreen45 fg-white"},
	                Panel(null,
	                  PanelHeader(null,
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h4(null, "Dropdowns and Dropups (inverse)")
	                        )
	                      )
	                    )
	                  ),
	                  PanelBody(null,
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 6},
	                          Dropdown(null,
	                            DropdownButton({outlined: true, inverse: true, bsStyle: "green", container: this, menu: "inverse-menu1"},
	                              React.DOM.span(null, "Basic "), Caret(null)
	                            ),
	                            Menu({bsStyle: "green", ref: "inverse-menu1"},
	                              MenuItem({active: true, href: "#"}, "Action"),
	                              MenuItem({href: "#"}, "Another action"),
	                              MenuItem({href: "#"}, "Something else here"),
	                              MenuItem({divider: true}),
	                              MenuItem({href: "#"}, "Separated link")
	                            )
	                          ),
	                          React.DOM.br(null),
	                          Dropdown(null,
	                            DropdownButton({outlined: true, inverse: true, container: this, bsStyle: "lightblue", menu: "inverse-menu2"},
	                              React.DOM.span(null, "With Headers "), Caret(null)
	                            ),
	                            Menu({ref: "inverse-menu2", bsStyle: "lightblue"},
	                              MenuItem({header: true}, "Dropdown header"),
	                              MenuItem({href: "#"}, "Action"),
	                              MenuItem({href: "#"}, "Another action"),
	                              MenuItem({href: "#"}, "Something else here"),
	                              MenuItem({divider: true}),
	                              MenuItem({header: true}, "Dropdown header"),
	                              MenuItem({href: "#"}, "Separated link")
	                            )
	                          )
	                        ),
	                        Col({xs: 6, className: "text-right"},
	                          Dropdown(null,
	                            DropdownButton({outlined: true, inverse: true, container: this, menu: "inverse-menu3", bsStyle: "green"},
	                              React.DOM.span(null, "Outlined "), Caret(null)
	                            ),
	                            Menu({alignRight: true, ref: "inverse-menu3", bsStyle: "green"},
	                              MenuItem({active: true, href: "#"}, "Action"),
	                              MenuItem({href: "#"}, "Another action"),
	                              MenuItem({href: "#"}, "Something else here"),
	                              MenuItem({divider: true}),
	                              MenuItem({href: "#"}, "Separated link")
	                            )
	                          ),
	                          React.DOM.br(null),
	                          Dropdown(null,
	                            DropdownButton({outlined: true, inverse: true, container: this, menu: "inverse-menu4", bsStyle: "orange"},
	                              React.DOM.span(null, "Disabled "), Caret(null)
	                            ),
	                            Menu({alignRight: true, ref: "inverse-menu4", bsStyle: "orange"},
	                              MenuItem({disabled: true, href: "#"}, "Disabled"),
	                              MenuItem({disabled: true, href: "#"}, "Another action"),
	                              MenuItem({href: "#"}, "Something else here"),
	                              MenuItem({divider: true}),
	                              MenuItem({href: "#"}, "Separated link")
	                            )
	                          )
	                        )
	                      ),
	                      React.DOM.hr({className: "border-lightgreen"}),
	                      Row(null,
	                        Col({xs: 6},
	                          React.DOM.div(null,
	                          ButtonGroup({dropup: true},
	                            DropdownButton({outlined: true, inverse: true, bsStyle: "green", container: this, menu: "inverse-menu6"},
	                              React.DOM.span(null, "Basic "), Caret(null)
	                            ),
	                            Menu({bsStyle: "green", ref: "inverse-menu6"},
	                              MenuItem({active: true, href: "#"}, "Action"),
	                              MenuItem({href: "#"}, "Another action"),
	                              MenuItem({href: "#"}, "Something else here"),
	                              MenuItem({divider: true}),
	                              MenuItem({href: "#"}, "Separated link")
	                            )
	                          )
	                          ),
	                          React.DOM.br(null),
	                          React.DOM.div(null,
	                          ButtonGroup({dropup: true},
	                            DropdownButton({outlined: true, inverse: true, container: this, bsStyle: "lightblue", menu: "inverse-menu7"},
	                              React.DOM.span(null, "With Headers "), Caret(null)
	                            ),
	                            Menu({ref: "inverse-menu7", bsStyle: "lightblue"},
	                              MenuItem({header: true}, "Dropup Header"),
	                              MenuItem({href: "#"}, "Action"),
	                              MenuItem({href: "#"}, "Another action"),
	                              MenuItem({href: "#"}, "Something else here"),
	                              MenuItem({divider: true}),
	                              MenuItem({header: true}, "Dropup Header"),
	                              MenuItem({href: "#"}, "Separated link")
	                            )
	                          )
	                          ),
	                          React.DOM.br(null)
	                        ),
	                        Col({xs: 6, className: "text-right"},
	                          React.DOM.div(null,
	                          ButtonGroup({dropup: true},
	                            DropdownButton({outlined: true, inverse: true, container: this, menu: "inverse-menu8", bsStyle: "green"},
	                              React.DOM.span(null, "Outlined "), Caret(null)
	                            ),
	                            Menu({alignRight: true, ref: "inverse-menu8", bsStyle: "green"},
	                              MenuItem({active: true, href: "#"}, "Action"),
	                              MenuItem({href: "#"}, "Another action"),
	                              MenuItem({href: "#"}, "Something else here"),
	                              MenuItem({divider: true}),
	                              MenuItem({href: "#"}, "Separated link")
	                            )
	                          )
	                          ),
	                          React.DOM.br(null),
	                          React.DOM.div(null,
	                          ButtonGroup({dropup: true},
	                            DropdownButton({outlined: true, inverse: true, container: this, menu: "inverse-menu9", bsStyle: "orange"},
	                              React.DOM.span(null, "Disabled "), Caret(null)
	                            ),
	                            Menu({alignRight: true, ref: "inverse-menu9", bsStyle: "orange"},
	                              MenuItem({disabled: true, href: "#"}, "Disabled"),
	                              MenuItem({disabled: true, href: "#"}, "Another action"),
	                              MenuItem({href: "#"}, "Something else here"),
	                              MenuItem({divider: true}),
	                              MenuItem({href: "#"}, "Separated link")
	                            )
	                          )
	                          ),
	                          React.DOM.br(null)
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            ),
	            Col({sm: 6},
	              PanelContainer({noOverflow: true, controlStyles: "bg-pinkishred fg-white"},
	                Panel(null,
	                  PanelHeader({className: "bg-pinkishred fg-white"},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h4(null, "Split Button Dropdowns and Dropups")
	                        )
	                      )
	                    )
	                  ),
	                  PanelBody(null,
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 6},
	                          React.DOM.div(null,
	                          ButtonGroup(null,
	                            Button({bsStyle: "lightred"}, "Basic "),
	                            DropdownButton({bsStyle: "lightred", container: this, menu: "split-menu1"},
	                              Caret(null)
	                            ),
	                            Menu({bsStyle: "lightred", ref: "split-menu1"},
	                              MenuItem({active: true, href: "#"}, "Action"),
	                              MenuItem({href: "#"}, "Another action"),
	                              MenuItem({href: "#"}, "Something else here"),
	                              MenuItem({divider: true}),
	                              MenuItem({href: "#"}, "Separated link")
	                            )
	                          )
	                          ),
	                          React.DOM.br(null),
	                          React.DOM.div(null,
	                          ButtonGroup(null,
	                            Button({outlined: true, bsStyle: "lightblue"}, "With Headers "),
	                            DropdownButton({outlined: true, container: this, bsStyle: "lightblue", menu: "split-menu2"},
	                              Caret(null)
	                            ),
	                            Menu({ref: "split-menu2", bsStyle: "lightblue"},
	                              MenuItem({header: true}, "Dropdown header"),
	                              MenuItem({href: "#"}, "Action"),
	                              MenuItem({href: "#"}, "Another action"),
	                              MenuItem({href: "#"}, "Something else here"),
	                              MenuItem({divider: true}),
	                              MenuItem({header: true}, "Dropdown header"),
	                              MenuItem({href: "#"}, "Separated link")
	                            )
	                          )
	                          ),
	                          React.DOM.br(null)
	                        ),
	                        Col({xs: 6, className: "text-right"},
	                          React.DOM.div(null,
	                          ButtonGroup(null,
	                            Button({outlined: true, bsStyle: "green"}, "Outlined "),
	                            DropdownButton({outlined: true, container: this, menu: "split-menu3", bsStyle: "green"},
	                              Caret(null)
	                            ),
	                            Menu({alignRight: true, ref: "split-menu3", bsStyle: "green"},
	                              MenuItem({active: true, href: "#"}, "Action"),
	                              MenuItem({href: "#"}, "Another action"),
	                              MenuItem({href: "#"}, "Something else here"),
	                              MenuItem({divider: true}),
	                              MenuItem({href: "#"}, "Separated link")
	                            )
	                          )
	                          ),
	                          React.DOM.br(null),
	                          React.DOM.div(null,
	                          ButtonGroup(null,
	                            Button({outlined: true, bsStyle: "orange"}, "Disabled "),
	                            DropdownButton({outlined: true, container: this, menu: "split-menu4", bsStyle: "orange"},
	                              Caret(null)
	                            ),
	                            Menu({alignRight: true, ref: "split-menu4", bsStyle: "orange"},
	                              MenuItem({disabled: true, href: "#"}, "Disabled"),
	                              MenuItem({disabled: true, href: "#"}, "Another action"),
	                              MenuItem({href: "#"}, "Something else here"),
	                              MenuItem({divider: true}),
	                              MenuItem({href: "#"}, "Separated link")
	                            )
	                          )
	                          )
	                        )
	                      ),
	                      React.DOM.hr(null),
	                      Row(null,
	                        Col({xs: 6},
	                          React.DOM.div(null,
	                          ButtonGroup({dropup: true},
	                            Button({bsStyle: "lightred"}, "Basic "),
	                            DropdownButton({bsStyle: "lightred", container: this, menu: "split-menu6"},
	                              Caret(null)
	                            ),
	                            Menu({bsStyle: "lightred", ref: "split-menu6"},
	                              MenuItem({active: true, href: "#"}, "Action"),
	                              MenuItem({href: "#"}, "Another action"),
	                              MenuItem({href: "#"}, "Something else here"),
	                              MenuItem({divider: true}),
	                              MenuItem({href: "#"}, "Separated link")
	                            )
	                          )
	                          ),
	                          React.DOM.br(null),
	                          React.DOM.div(null,
	                          ButtonGroup({dropup: true},
	                            Button({outlined: true, bsStyle: "lightblue"}, "With Headers "),
	                            DropdownButton({outlined: true, container: this, bsStyle: "lightblue", menu: "split-menu7"},
	                              Caret(null)
	                            ),
	                            Menu({ref: "split-menu7", bsStyle: "lightblue"},
	                              MenuItem({header: true}, "Dropup Header"),
	                              MenuItem({href: "#"}, "Action"),
	                              MenuItem({href: "#"}, "Another action"),
	                              MenuItem({href: "#"}, "Something else here"),
	                              MenuItem({divider: true}),
	                              MenuItem({header: true}, "Dropup Header"),
	                              MenuItem({href: "#"}, "Separated link")
	                            )
	                          )
	                          ),
	                          React.DOM.br(null)
	                        ),
	                        Col({xs: 6, className: "text-right"},
	                          React.DOM.div(null,
	                          ButtonGroup({dropup: true},
	                            Button({outlined: true, bsStyle: "green"}, "Outlined "),
	                            DropdownButton({outlined: true, container: this, menu: "split-menu8", bsStyle: "green"},
	                              Caret(null)
	                            ),
	                            Menu({alignRight: true, ref: "split-menu8", bsStyle: "green"},
	                              MenuItem({active: true, href: "#"}, "Action"),
	                              MenuItem({href: "#"}, "Another action"),
	                              MenuItem({href: "#"}, "Something else here"),
	                              MenuItem({divider: true}),
	                              MenuItem({href: "#"}, "Separated link")
	                            )
	                          )
	                          ),
	                          React.DOM.br(null),
	                          React.DOM.div(null,
	                          ButtonGroup({dropup: true},
	                            Button({outlined: true, bsStyle: "orange"}, "Disabled "),
	                            DropdownButton({outlined: true, container: this, menu: "split-menu9", bsStyle: "orange"},
	                              Caret(null)
	                            ),
	                            Menu({alignRight: true, ref: "split-menu9", bsStyle: "orange"},
	                              MenuItem({disabled: true, href: "#"}, "Disabled"),
	                              MenuItem({disabled: true, href: "#"}, "Another action"),
	                              MenuItem({href: "#"}, "Something else here"),
	                              MenuItem({divider: true}),
	                              MenuItem({href: "#"}, "Separated link")
	                            )
	                          )
	                          ),
	                          React.DOM.br(null)
	                        )
	                      )
	                    )
	                  )
	                )
	              ),
	              PanelContainer({noOverflow: true, controlStyles: "bg-pinkishred fg-white", containerClasses: "bg-pinkishred fg-white"},
	                Panel(null,
	                  PanelHeader(null,
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h4(null, "Split Button Dropdowns and Dropups (inverse)")
	                        )
	                      )
	                    )
	                  ),
	                  PanelBody(null,
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 6},
	                          React.DOM.div(null,
	                          ButtonGroup(null,
	                            Button({outlined: true, inverse: true, bsStyle: "pink"}, "Basic "),
	                            DropdownButton({outlined: true, inverse: true, bsStyle: "pink", container: this, menu: "inverse-split-menu1"},
	                              Caret(null)
	                            ),
	                            Menu({bsStyle: "pink", ref: "inverse-split-menu1"},
	                              MenuItem({active: true, href: "#"}, "Action"),
	                              MenuItem({href: "#"}, "Another action"),
	                              MenuItem({href: "#"}, "Something else here"),
	                              MenuItem({divider: true}),
	                              MenuItem({href: "#"}, "Separated link")
	                            )
	                          )
	                          ),
	                          React.DOM.br(null),
	                          React.DOM.div(null,
	                          ButtonGroup(null,
	                            Button({outlined: true, inverse: true, bsStyle: "lightblue"}, "With Headers "),
	                            DropdownButton({outlined: true, inverse: true, container: this, bsStyle: "lightblue", menu: "inverse-split-menu2"},
	                              Caret(null)
	                            ),
	                            Menu({ref: "inverse-split-menu2", bsStyle: "lightblue"},
	                              MenuItem({header: true}, "Dropdown header"),
	                              MenuItem({href: "#"}, "Action"),
	                              MenuItem({href: "#"}, "Another action"),
	                              MenuItem({href: "#"}, "Something else here"),
	                              MenuItem({divider: true}),
	                              MenuItem({header: true}, "Dropdown header"),
	                              MenuItem({href: "#"}, "Separated link")
	                            )
	                          )
	                          ),
	                          React.DOM.br(null)
	                        ),
	                        Col({xs: 6, className: "text-right"},
	                          React.DOM.div(null,
	                          ButtonGroup(null,
	                            Button({outlined: true, inverse: true, bsStyle: "green"}, "Outlined "),
	                            DropdownButton({outlined: true, inverse: true, container: this, menu: "inverse-split-menu3", bsStyle: "green"},
	                              Caret(null)
	                            ),
	                            Menu({alignRight: true, ref: "inverse-split-menu3", bsStyle: "green"},
	                              MenuItem({active: true, href: "#"}, "Action"),
	                              MenuItem({href: "#"}, "Another action"),
	                              MenuItem({href: "#"}, "Something else here"),
	                              MenuItem({divider: true}),
	                              MenuItem({href: "#"}, "Separated link")
	                            )
	                          )
	                          ),
	                          React.DOM.br(null),
	                          React.DOM.div(null,
	                          ButtonGroup(null,
	                            Button({outlined: true, inverse: true, bsStyle: "orange"}, "Disabled "),
	                            DropdownButton({outlined: true, inverse: true, container: this, menu: "inverse-split-menu4", bsStyle: "orange"},
	                              Caret(null)
	                            ),
	                            Menu({alignRight: true, ref: "inverse-split-menu4", bsStyle: "orange"},
	                              MenuItem({disabled: true, href: "#"}, "Disabled"),
	                              MenuItem({disabled: true, href: "#"}, "Another action"),
	                              MenuItem({href: "#"}, "Something else here"),
	                              MenuItem({divider: true}),
	                              MenuItem({href: "#"}, "Separated link")
	                            )
	                          )
	                          )
	                        )
	                      ),
	                      React.DOM.hr({className: "border-lightred"}),
	                      Row(null,
	                        Col({xs: 6},
	                          React.DOM.div(null,
	                          ButtonGroup({dropup: true},
	                            Button({outlined: true, inverse: true, bsStyle: "pink"}, "Basic "),
	                            DropdownButton({outlined: true, inverse: true, bsStyle: "pink", container: this, menu: "inverse-split-menu6"},
	                              Caret(null)
	                            ),
	                            Menu({bsStyle: "pink", ref: "inverse-split-menu6"},
	                              MenuItem({active: true, href: "#"}, "Action"),
	                              MenuItem({href: "#"}, "Another action"),
	                              MenuItem({href: "#"}, "Something else here"),
	                              MenuItem({divider: true}),
	                              MenuItem({href: "#"}, "Separated link")
	                            )
	                          )
	                          ),
	                          React.DOM.br(null),
	                          React.DOM.div(null,
	                          ButtonGroup({dropup: true},
	                            Button({outlined: true, inverse: true, bsStyle: "lightblue"}, "With Headers "),
	                            DropdownButton({outlined: true, inverse: true, container: this, bsStyle: "lightblue", menu: "inverse-split-menu7"},
	                              Caret(null)
	                            ),
	                            Menu({ref: "inverse-split-menu7", bsStyle: "lightblue"},
	                              MenuItem({header: true}, "Dropup Header"),
	                              MenuItem({href: "#"}, "Action"),
	                              MenuItem({href: "#"}, "Another action"),
	                              MenuItem({href: "#"}, "Something else here"),
	                              MenuItem({divider: true}),
	                              MenuItem({header: true}, "Dropup Header"),
	                              MenuItem({href: "#"}, "Separated link")
	                            )
	                          )
	                          )
	                        ),
	                        Col({xs: 6, className: "text-right"},
	                          React.DOM.div(null,
	                          ButtonGroup({dropup: true},
	                            Button({outlined: true, inverse: true, bsStyle: "green"}, "Outlined "),
	                            DropdownButton({outlined: true, inverse: true, container: this, menu: "inverse-split-menu8", bsStyle: "green"},
	                              Caret(null)
	                            ),
	                            Menu({alignRight: true, ref: "inverse-split-menu8", bsStyle: "green"},
	                              MenuItem({active: true, href: "#"}, "Action"),
	                              MenuItem({href: "#"}, "Another action"),
	                              MenuItem({href: "#"}, "Something else here"),
	                              MenuItem({divider: true}),
	                              MenuItem({href: "#"}, "Separated link")
	                            )
	                          )
	                          ),
	                          React.DOM.br(null),
	                          React.DOM.div(null,
	                          ButtonGroup({dropup: true},
	                            Button({outlined: true, inverse: true, bsStyle: "orange"}, "Disabled "),
	                            DropdownButton({outlined: true, inverse: true, container: this, menu: "inverse-split-menu9", bsStyle: "orange"},
	                              Caret(null)
	                            ),
	                            Menu({alignRight: true, ref: "inverse-split-menu9", bsStyle: "orange"},
	                              MenuItem({disabled: true, href: "#"}, "Disabled"),
	                              MenuItem({disabled: true, href: "#"}, "Another action"),
	                              MenuItem({href: "#"}, "Something else here"),
	                              MenuItem({divider: true}),
	                              MenuItem({href: "#"}, "Separated link")
	                            )
	                          )
	                          ),
	                          React.DOM.br(null)
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ),
	        this.props.children
	      )
	    );
	  }
	});

	var classSet = React.addons.classSet;
	var Dropdowns = React.createClass({displayName: 'Dropdowns',
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = classSet({
	      'container-open': this.state.open
	    });
	    return (
	      Container({id: "container", className: classes},
	        Sidebar(null),
	        Header(null),
	        Body(null,
	          Footer(null)
	        )
	      )
	    );
	  }
	});

	module.exports = Dropdowns;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(50);
	var Sidebar = __webpack_require__(51);
	var Footer = __webpack_require__(52);

	var Body = React.createClass({displayName: 'Body',
	  render: function() {
	    return (
	      Container({id: "body"},
	        Grid(null,
	          Row(null,
	            Col({xs: 12},
	              PanelContainer({controlStyles: "bg-lightred fg-white"},
	                PanelHeader({className: "bg-lightred fg-white"},
	                  Grid(null,
	                    Row(null,
	                      Col({xs: 12},
	                        React.DOM.h3(null, "Accordian")
	                      )
	                    )
	                  )
	                ),
	                PanelBody({style: {margin: 12.5, marginTop: 0}},
	                  Accordian(null,
	                    AccordianPane({active: true},
	                      AccordianTitle(null, "Collapsible Item 1 (active)"),
	                      AccordianContent(null,
	                        LoremIpsum({query: "5s"})
	                      )
	                    ),
	                    AccordianPane(null,
	                      AccordianTitle(null, "Collapsible Item 2"),
	                      AccordianContent(null,
	                        LoremIpsum({query: "5s"})
	                      )
	                    ),
	                    AccordianPane(null,
	                      AccordianTitle(null, "Collapsible Item 3"),
	                      AccordianContent(null,
	                        LoremIpsum({query: "5s"})
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ),
	        Grid(null,
	          Row(null,
	            Col({xs: 12},
	              PanelContainer({controlStyles: "bg-brown50 fg-white"},
	                PanelHeader({className: "bg-brown50 fg-white"},
	                  Grid(null,
	                    Row(null,
	                      Col({xs: 12},
	                        React.DOM.h3(null, "Ion Tabs")
	                      )
	                    )
	                  )
	                ),
	                PanelBody({style: {margin: 12.5, marginTop: 0}},
	                  IonTabContainer({id: "tabs_1", ref: "ion_tab"},
	                    IonTabHead(null,
	                      IonTab(null, React.DOM.span(null, "Tab 1 name "), Icon({glyph: "icon-fontello-cog"})),
	                      IonTab(null, "Tab 2 name"),
	                      IonTab(null, "Tab 3 name")
	                    ),
	                    IonTabBody(null,
	                      IonTabItem(null, LoremIpsum({query: "5s"})),
	                      IonTabItem(null, LoremIpsum({query: "5s"})),
	                      IonTabItem(null, LoremIpsum({query: "5s"}))
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ),
	        Grid(null,
	          Row(null,
	            Col({sm: 6, collapseRight: true},
	              PanelContainer({controlStyles: "bg-lightgreen fg-white"},
	                PanelHeader({className: "bg-lightgreen fg-white"},
	                  Grid(null,
	                    Row(null,
	                      Col({xs: 12},
	                        React.DOM.h3(null, "Tabs: Basic")
	                      )
	                    )
	                  )
	                ),
	                PanelBody(null,
	                  TabList({bsStyle: "green"},
	                    Tab({pane: "tab1:home", active: true}, "Home"),
	                    Tab({pane: "tab1:profile"}, "Profile"),
	                    Tab(null,
	                      DropdownButton({tab: true, container: this, menu: "tabmenu1"},
	                        React.DOM.span(null, "Dropdown "), Caret(null)
	                      ),
	                      Menu({autoHide: true, bsStyle: "lightgreen", ref: "tabmenu1"},
	                        MenuItem({href: "#"},
	                          Tab({dropdown: true, pane: "tab1:fat"},
	                            "@fat"
	                          )
	                        ),
	                        MenuItem({href: "#"},
	                          Tab({dropdown: true, pane: "tab1:mdo"},
	                            "@mdo"
	                          )
	                        )
	                      )
	                    )
	                  ),
	                  Grid(null,
	                    Row(null,
	                      Col({xs: 12, style: {paddingTop: 12.5}},
	                        TabContent(null,
	                          TabPane({ref: "tab1:home", active: true},
	                            React.DOM.p(null, LoremIpsum({query: "3s"}))
	                          ),
	                          TabPane({ref: "tab1:profile"},
	                            React.DOM.p(null, LoremIpsum({query: "3s"}))
	                          ),
	                          TabPane({ref: "tab1:fat"},
	                            React.DOM.p(null, LoremIpsum({query: "3s"}))
	                          ),
	                          TabPane({ref: "tab1:mdo"},
	                            React.DOM.p(null, LoremIpsum({query: "3s"}))
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              ),
	              PanelContainer({controlStyles: "bg-lightpurple fg-white"},
	                PanelHeader({className: "bg-lightpurple fg-white"},
	                  Grid(null,
	                    Row(null,
	                      Col({xs: 12},
	                        React.DOM.h3(null, "Tabs: Inline")
	                      )
	                    )
	                  ),
	                  TabList({bsStyle: "purple"},
	                    Tab({pane: "tab2:home", active: true}, "Home"),
	                    Tab({pane: "tab2:profile"}, "Profile"),
	                    Tab(null,
	                      DropdownButton({tab: true, container: this, menu: "tabmenu2"},
	                        React.DOM.span(null, "Dropdown "), Caret(null)
	                      ),
	                      Menu({autoHide: true, bsStyle: "lightpurple", ref: "tabmenu2"},
	                        MenuItem({href: "#"},
	                          Tab({dropdown: true, pane: "tab2:fat"},
	                            "@fat"
	                          )
	                        ),
	                        MenuItem({href: "#"},
	                          Tab({dropdown: true, pane: "tab2:mdo"},
	                            "@mdo"
	                          )
	                        )
	                      )
	                    )
	                  )
	                ),
	                PanelBody(null,
	                  Grid(null,
	                    Row(null,
	                      Col({xs: 12, style: {paddingTop: 12.5}},
	                        TabContent(null,
	                          TabPane({ref: "tab2:home", active: true},
	                            React.DOM.p(null, LoremIpsum({query: "3s"}))
	                          ),
	                          TabPane({ref: "tab2:profile"},
	                            React.DOM.p(null, LoremIpsum({query: "3s"}))
	                          ),
	                          TabPane({ref: "tab2:fat"},
	                            React.DOM.p(null, LoremIpsum({query: "3s"}))
	                          ),
	                          TabPane({ref: "tab2:mdo"},
	                            React.DOM.p(null, LoremIpsum({query: "3s"}))
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              ),
	              PanelContainer({controlStyles: "bg-lightred fg-white"},
	                PanelHeader({className: "bg-lightred fg-white"},
	                  Grid(null,
	                    Row(null,
	                      Col({xs: 12},
	                        React.DOM.h3(null, "Tabs: Inline Justified"),
	                        TabList({justified: true, bsStyle: "red"},
	                          Tab({pane: "tab3:home", active: true}, "Home"),
	                          Tab({pane: "tab3:profile"}, "Profile"),
	                          Tab(null,
	                            DropdownButton({tab: true, container: this, menu: "tabmenu3"},
	                              React.DOM.span(null, "Dropdown "), Caret(null)
	                            ),
	                            Menu({autoHide: true, bsStyle: "red", ref: "tabmenu3"},
	                              MenuItem({href: "#"},
	                                Tab({dropdown: true, pane: "tab3:fat"},
	                                  "@fat"
	                                )
	                              ),
	                              MenuItem({href: "#"},
	                                Tab({dropdown: true, pane: "tab3:mdo"},
	                                  "@mdo"
	                                )
	                              )
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                ),
	                PanelBody(null,
	                  Grid(null,
	                    Row(null,
	                      Col({xs: 12, style: {paddingTop: 12.5}},
	                        TabContent(null,
	                          TabPane({ref: "tab3:home", active: true},
	                            React.DOM.p(null, LoremIpsum({query: "3s"}))
	                          ),
	                          TabPane({ref: "tab3:profile"},
	                            React.DOM.p(null, LoremIpsum({query: "3s"}))
	                          ),
	                          TabPane({ref: "tab3:fat"},
	                            React.DOM.p(null, LoremIpsum({query: "3s"}))
	                          ),
	                          TabPane({ref: "tab3:mdo"},
	                            React.DOM.p(null, LoremIpsum({query: "3s"}))
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            ),
	            Col({sm: 6},
	              PanelContainer({controlStyles: "bg-orange fg-white"},
	                PanelHeader({className: "bg-orange fg-white"},
	                  Grid(null,
	                    Row(null,
	                      Col({xs: 12},
	                        React.DOM.h3(null, "Pills: Basic")
	                      )
	                    )
	                  )
	                ),
	                PanelBody(null,
	                  TabList({pills: true, bsStyle: "orange"},
	                    Tab({pane: "pills1:home", active: true}, "Home"),
	                    Tab({pane: "pills1:profile"}, "Profile"),
	                    Tab(null,
	                      DropdownButton({tab: true, container: this, menu: "pillsmenu1"},
	                        React.DOM.span(null, "Dropdown "), Caret(null)
	                      ),
	                      Menu({autoHide: true, bsStyle: "orange", ref: "pillsmenu1"},
	                        MenuItem({href: "#"},
	                          Tab({dropdown: true, pane: "pills1:fat"},
	                            "@fat"
	                          )
	                        ),
	                        MenuItem({href: "#"},
	                          Tab({dropdown: true, pane: "pills1:mdo"},
	                            "@mdo"
	                          )
	                        )
	                      )
	                    )
	                  ),
	                  Grid(null,
	                    Row(null,
	                      Col({xs: 12, style: {paddingTop: 12.5}},
	                        TabContent(null,
	                          TabPane({ref: "pills1:home", active: true},
	                            React.DOM.p(null, LoremIpsum({query: "3s"}))
	                          ),
	                          TabPane({ref: "pills1:profile"},
	                            React.DOM.p(null, LoremIpsum({query: "3s"}))
	                          ),
	                          TabPane({ref: "pills1:fat"},
	                            React.DOM.p(null, LoremIpsum({query: "3s"}))
	                          ),
	                          TabPane({ref: "pills1:mdo"},
	                            React.DOM.p(null, LoremIpsum({query: "3s"}))
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              ),
	              PanelContainer({noOverflow: true, controlStyles: "bg-lightblue fg-white"},
	                PanelHeader({className: "bg-lightblue fg-white"},
	                  Grid(null,
	                    Row(null,
	                      Col({xs: 12},
	                        React.DOM.h3(null, "Pills: Stacked")
	                      )
	                    )
	                  )
	                ),
	                PanelBody({style: {padding: '12.5px 25px 25px 25px'}},
	                  Table({className: "tablist", style: {margin: 0}},
	                    React.DOM.tbody(null,
	                      React.DOM.tr(null,
	                        React.DOM.td({style: {width: 175, borderTop: 'none', verticalAlign: 'top'}},
	                          TabList({pills: true, stacked: true, bsStyle: "lightblue"},
	                            Tab({pane: "pills2:home", active: true}, "Home"),
	                            Tab({pane: "pills2:profile"}, "Profile"),
	                            Tab(null,
	                              DropdownButton({tab: true, container: this, menu: "pillsmenu2"},
	                                React.DOM.span(null, "Dropdown "), Caret(null)
	                              ),
	                              Menu({autoHide: true, ref: "pillsmenu2", bsStyle: "lightblue"},
	                                MenuItem({href: "#"},
	                                  Tab({dropdown: true, pane: "pills2:fat"},
	                                    "@fat"
	                                  )
	                                ),
	                                MenuItem({href: "#"},
	                                  Tab({dropdown: true, pane: "pills2:mdo"},
	                                    "@mdo"
	                                  )
	                                )
	                              )
	                            )
	                          )
	                        ),
	                        React.DOM.td({style: {borderTop: 'none', verticalAlign: 'top'}},
	                          TabContent(null,
	                            TabPane({ref: "pills2:home", active: true},
	                              React.DOM.p(null, LoremIpsum({query: "3s"}))
	                            ),
	                            TabPane({ref: "pills2:profile"},
	                              React.DOM.p(null, LoremIpsum({query: "3s"}))
	                            ),
	                            TabPane({ref: "pills2:fat"},
	                              React.DOM.p(null, LoremIpsum({query: "3s"}))
	                            ),
	                            TabPane({ref: "pills2:mdo"},
	                              React.DOM.p(null, LoremIpsum({query: "3s"}))
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              ),
	              PanelContainer({controlStyles: "bg-lightpink fg-white"},
	                PanelHeader({className: "bg-lightpink fg-white"},
	                  Grid(null,
	                    Row(null,
	                      Col({xs: 12},
	                        React.DOM.h3(null, "Pills: Justified")
	                      )
	                    )
	                  )
	                ),
	                PanelBody(null,
	                  Grid(null,
	                    Row(null,
	                      Col({xs: 12},
	                        TabList({pills: true, justified: true, bsStyle: "lightpink"},
	                          Tab({pane: "pill3:home", active: true}, "Home"),
	                          Tab({pane: "pill3:profile"}, "Profile"),
	                          Tab(null,
	                            DropdownButton({tab: true, container: this, menu: "pillmenu3"},
	                              React.DOM.span(null, "Dropdown "), Caret(null)
	                            ),
	                            Menu({autoHide: true, alignRight: true, bsStyle: "lightpink", ref: "pillmenu3"},
	                              MenuItem({href: "#"},
	                                Tab({dropdown: true, pane: "pill3:fat"},
	                                  "@fat"
	                                )
	                              ),
	                              MenuItem({href: "#"},
	                                Tab({dropdown: true, pane: "pill3:mdo"},
	                                  "@mdo"
	                                )
	                              )
	                            )
	                          )
	                        )
	                      )
	                    )
	                  ),
	                  Grid(null,
	                    Row(null,
	                      Col({xs: 12, style: {paddingTop: 12.5}},
	                        TabContent(null,
	                          TabPane({ref: "pill3:home", active: true},
	                            React.DOM.p(null, LoremIpsum({query: "3s"}))
	                          ),
	                          TabPane({ref: "pill3:profile"},
	                            React.DOM.p(null, LoremIpsum({query: "3s"}))
	                          ),
	                          TabPane({ref: "pill3:fat"},
	                            React.DOM.p(null, LoremIpsum({query: "3s"}))
	                          ),
	                          TabPane({ref: "pill3:mdo"},
	                            React.DOM.p(null, LoremIpsum({query: "3s"}))
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ),
	        Grid(null,
	          Row(null,
	            Col({xs: 12},
	              React.DOM.h3(null, "NavBars"),
	              NavBar(null,
	                Container({fluid: true},
	                  NavHeader(null,
	                    NavToggle({container: this, nav: "navcontainer1"}, "Toggle navigation"),
	                    NavBrand(null, "Brand")
	                  ),
	                  NavContent({ref: "navcontainer1", collapse: true},
	                    Nav(null,
	                      NavItem({active: true, href: "#"}, "Link 1"),
	                      NavItem({href: "#"}, "CSS"),
	                      NavItem({dropdown: true},
	                        DropdownButton({nav: true, container: this, menu: "navmenu1"},
	                          React.DOM.span(null, "Dropdown "), Caret(null)
	                        ),
	                        Menu({ref: "navmenu1"},
	                          MenuItem({href: "#"}, "Action"),
	                          MenuItem({href: "#"}, "Another Action"),
	                          MenuItem({href: "#"}, "Something else here"),
	                          MenuItem({divider: true}),
	                          MenuItem({href: "#"}, "Separated link")
	                        )
	                      )
	                    ),
	                    Nav({right: true},
	                      NavItem({href: "#"}, "Link 3"),
	                      NavItem({dropdown: true},
	                        DropdownButton({nav: true, container: this, menu: "navmenu2"},
	                          React.DOM.span(null, "Dropdown "), Caret(null)
	                        ),
	                        Menu({ref: "navmenu2"},
	                          MenuItem({href: "#"}, "Action"),
	                          MenuItem({href: "#"}, "Another Action"),
	                          MenuItem({href: "#"}, "Something else here"),
	                          MenuItem({divider: true}),
	                          MenuItem({href: "#"}, "Separated link")
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ),
	        Grid(null,
	          Row(null,
	            Col({xs: 12},
	              NavBar(null,
	                Container({fluid: true},
	                  NavHeader(null,
	                    NavToggle({container: this, nav: "navcontainer2"}, "Toggle navigation"),
	                    NavBrand(null, "Brand")
	                  ),
	                  NavContent({ref: "navcontainer2", collapse: true},
	                    NavText(null, "Signed in as Anna Sanchez")
	                  )
	                )
	              )
	            )
	          )
	        ),
	        Grid(null,
	          Row(null,
	            Col({xs: 12},
	              NavBar(null,
	                Container({fluid: true},
	                  NavHeader(null,
	                    NavBrand(null, "Brand")
	                  ),
	                  NavContent({collapse: true},
	                    NavText({right: true},
	                      React.DOM.span(null, "Signed in as "),
	                      NavLink({href: "#"},
	                        "Anna Sanchez"
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ),
	        Grid(null,
	          Row(null,
	            Col({xs: 12},
	              NavBar({inverse: true},
	                Container({fluid: true},
	                  NavHeader(null,
	                    NavBrand(null, "Brand")
	                  ),
	                  NavContent({collapse: true},
	                    Nav(null,
	                      NavItem({href: "#", active: true}, "Home"),
	                      NavItem({right: true, href: "#"}, "Link"),
	                      NavItem({dropdown: true},
	                        DropdownButton({nav: true, container: this, menu: "inversenavmenu1"},
	                          React.DOM.span(null, "Dropdown "), Caret(null)
	                        ),
	                        Menu({ref: "inversenavmenu1"},
	                          MenuItem({href: "#"}, "Action"),
	                          MenuItem({href: "#"}, "Another Action"),
	                          MenuItem({href: "#"}, "Something else here"),
	                          MenuItem({divider: true}),
	                          MenuItem({href: "#"}, "Separated link")
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ),
	        Grid(null,
	          Row(null,
	            Col({xs: 12},
	              React.DOM.h3(null, "Breadcrumbs"),
	              Breadcrumb(null,
	                BLink({href: "#"}, "Home ")
	              ),
	              Breadcrumb(null,
	                BLink({href: "#"}, "Home "),
	                BLink({href: "#", active: true}, "Library ")
	              ),
	              Breadcrumb(null,
	                BLink({href: "#"}, "Home "),
	                BLink({href: "#"}, "Library "),
	                BLink({href: "#", active: true}, "Data")
	              )
	            )
	          )
	        ),
	        Grid(null,
	          Row(null,
	            Col({xs: 12, className: "text-center"},
	              React.DOM.h3(null, "Pagination"),
	              Pagination(null,
	                Page({begin: true, disabled: true}),
	                Page({active: true, href: "#"}, "1"),
	                Page({href: "#"}, "2"),
	                Page({href: "#"}, "3"),
	                Page({href: "#"}, "4"),
	                Page({href: "#"}, "5"),
	                Page({end: true})
	              )
	            )
	          )
	        ),
	        Grid(null,
	          Row(null,
	            Col({xs: 6},
	              React.DOM.h3(null, "Pagination (small)"),
	              Pagination({sm: true},
	                Page({begin: true, disabled: true}),
	                Page({active: true, href: "#"},
	                  React.DOM.span(null, "1"),
	                  React.DOM.span({className: "sr-only"}, "(current)")
	                ),
	                Page({href: "#"}, "2"),
	                Page({href: "#"}, "3"),
	                Page({href: "#"}, "4"),
	                Page({href: "#"}, "5"),
	                Page({end: true})
	              )
	            ),
	            Col({xs: 6, className: "text-right"},
	              React.DOM.h3(null, "Pagination (Large)"),
	              Pagination({lg: true},
	                Page({begin: true, disabled: true}),
	                Page({active: true, href: "#"},
	                  React.DOM.span(null, "1"),
	                  React.DOM.span({className: "sr-only"}, "(current)")
	                ),
	                Page({href: "#"}, "2"),
	                Page({href: "#"}, "3"),
	                Page({href: "#"}, "4"),
	                Page({href: "#"}, "5"),
	                Page({end: true})
	              )
	            )
	          )
	        ),
	        Grid(null,
	          Row(null,
	            Col({xs: 12, className: "text-center"},
	              React.DOM.h3(null, "Pager"),
	              Pager(null,
	                Page({href: "#"}, "Previous"), ' ',
	                Page({href: "#"}, "Next")
	              )
	            )
	          )
	        ),
	        Grid(null,
	          Row(null,
	            Col({xs: 12},
	              React.DOM.h3(null, "Pager (previous disabled)"),
	              Pager(null,
	                Page({previous: true, disabled: true, href: "#"}, "Previous"), ' ',
	                Page({next: true, href: "#"}, "Next")
	              )
	            )
	          )
	        ),
	        this.props.children
	      )
	    );
	  }
	});

	var classSet = React.addons.classSet;
	var TabsAndNavs = React.createClass({displayName: 'TabsAndNavs',
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = classSet({
	      'container-open': this.state.open
	    });
	    return (
	      Container({id: "container", className: classes},
	        Sidebar(null),
	        Header(null),
	        Body(null,
	          Footer(null)
	        )
	      )
	    );
	  }
	});

	module.exports = TabsAndNavs;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(50);
	var Sidebar = __webpack_require__(51);
	var Footer = __webpack_require__(52);

	var ReactStyle = __webpack_require__(67);

	var Body = React.createClass({displayName: 'Body',
	  getInitialState: function() {
	    return {
	      logger: 'testing'
	    };
	  },
	  componentWillMount: function() {
	    ReactStyle.addRules(ReactStyle.create({
	      '#ex1Slider .slider-selection': {
	        background: '#55C9A6'
	      }
	    }));

	    ReactStyle.addRules(ReactStyle.create({
	      '#RGB': {
	        maxWidth: '220px',
	        height: '100px',
	        background: 'rgb(128, 200, 128)'
	      },
	      '#RC .slider-selection': {
	        background: '#FF8282'
	      },
	      '#RC .slider-handle': {
	        background: 'red'
	      },
	      '#GC .slider-selection': {
	        background: '#428041'
	      },
	      '#GC .slider-handle': {
	        background: 'green'
	      },
	      '#BC .slider-selection': {
	        background: '#8283FF'
	      },
	      '#BC .slider-handle': {
	        borderBottomColor: 'blue'
	      },
	      '#R, #G, #B': {
	        width: '300px'
	      }
	    }));
	  },
	  componentDidMount: function() {
	    $('#ex1').slider({
	      formater: function(value) {
	        return 'Current value: ' + value;
	      }
	    });
	    $('#ex2').slider({});

	    var RGBChange = function() {
	      $('#RGB').css('background', 'rgb('+r.getValue()+','+g.getValue()+','+b.getValue()+')')
	    }.bind(this);
	    var r = $('#R').slider()
	        .on('slide', RGBChange)
	        .data('slider');
	    var g = $('#G').slider()
	        .on('slide', RGBChange)
	        .data('slider');
	    var b = $('#B').slider()
	        .on('slide', RGBChange)
	        .data('slider');
	    $('#ex4').slider({
	      reversed : true
	    });
	    $('#ex6').slider();
	    $('#ex6').on('slide', function(slideEvt) {
	      $('#ex6SliderVal').text(slideEvt.value);
	    });
	    $('#ex7').slider();
	    $('#ex7-enabled').click(function() {
	      if(this.checked) {
	        $('#ex7').slider('enable');
	      }
	      else {
	        $('#ex7').slider('disable');
	      }
	    });
	    $('#ex8').slider({
	      tooltip: 'always'
	    });
	    $('#ex9').slider({
	      precision: 2,
	      value: 8.115 // Slider will instantiate showing 8.12 due to specified precision
	    });
	    $('#example_1').ionRangeSlider({
	      min: 0,
	      max: 5000,
	      type: 'double',
	      prefix: '$',
	      maxPostfix: '+',
	      prettify: false,
	      hasGrid: true,
	      gridMargin: 7
	    });
	    $('#example_2').ionRangeSlider({
	      min: 1000,
	      max: 100000,
	      from: 30000,
	      to: 90000,
	      type: 'double',
	      step: 500,
	      postfix: ' €',
	      hasGrid: true,
	      gridMargin: 15
	    });
	    $('#example_3').ionRangeSlider({
	      min: 0,
	      max: 10,
	      type: 'single',
	      step: 0.1,
	      postfix: ' carats',
	      prettify: false,
	      hasGrid: true
	    });
	    $('#example_4').ionRangeSlider({
	      min: -50,
	      max: 50,
	      from: 0,
	      postfix: '°',
	      prettify: false,
	      hasGrid: true
	    });
	    $('#example_5').ionRangeSlider({
	      values: [
	        'January', 'February',
	        'March', 'April',
	        'May', 'June',
	        'July', 'August',
	        'September', 'October',
	        'November', 'December'
	      ],
	      type: 'single',
	      hasGrid: true
	    });
	    $('#example_6').ionRangeSlider({
	      min: 10000,
	      max: 100000,
	      step: 1000,
	      postfix: ' miles',
	      from: 55000,
	      hideMinMax: false,
	      hideFromTo: true
	    });
	    $('#example_7').ionRangeSlider({
	      min: 10000,
	      max: 100000,
	      step: 100,
	      postfix: ' km',
	      from: 55000,
	      hideMinMax: true,
	      hideFromTo: false
	    });
	    $('#example_8').ionRangeSlider({
	      min: 1000000,
	      max: 100000000,
	      type: 'double',
	      postfix: ' pounds',
	      step: 10000,
	      from: 25000000,
	      to: 35000000,
	      onChange: function(obj) {
	        delete obj.input;
	        delete obj.slider;
	        this.setState({logger: JSON.stringify(obj, null, 2)}, function() {
	          Prism.highlightAll();
	        });
	      }.bind(this),
	      onLoad: function(obj) {
	        delete obj.input;
	        delete obj.slider;
	        this.setState({logger: JSON.stringify(obj, null, 2)}, function() {
	          Prism.highlightAll();
	        });
	      }.bind(this)
	    });
	  },
	  render: function() {
	    return (
	      Container({id: "body"},
	        Grid(null,
	          Row(null,
	            Col({sm: 6, collapseRight: true},
	              PanelContainer({controlStyles: "bg-green fg-white"},
	                PanelHeader({className: "bg-green fg-white"},
	                  Grid(null,
	                    Row(null,
	                      Col({xs: 12},
	                        React.DOM.h3(null, "Bootstrap Sliders")
	                      )
	                    )
	                  )
	                ),
	                PanelBody(null,
	                  Grid(null,
	                    Row(null,
	                      Col({sm: 12},
	                        Input({id: "ex1", ref: "ex1", 'data-slider-id': "ex1Slider", type: "text", 'data-slider-min': "0", 'data-slider-max': "20", 'data-slider-step': "1", 'data-slider-value': "14"})
	                      )
	                    ),
	                    React.DOM.hr(null),
	                    Row(null,
	                      Col({sm: 12},
	                        React.DOM.div(null, "Filter by price interval: ", React.DOM.b(null, "$ 10"), " ", Input({id: "ex2", ref: "ex2", type: "text", className: "span2", value: "", 'data-slider-min': "10", 'data-slider-max': "1000", 'data-slider-step': "5", 'data-slider-value': "[250,450]"}), " ", React.DOM.b(null, "$ 1000"))
	                      )
	                    ),
	                    React.DOM.hr(null),
	                    Row(null,
	                      Col({xs: 6, className: "text-right"},
	                        React.DOM.p(null,
	                          React.DOM.b(null, "R"), " ", Input({type: "text", className: "span2", value: "", 'data-slider-min': "0", 'data-slider-max': "255", 'data-slider-step': "1", 'data-slider-value': "128", 'data-slider-id': "RC", id: "R", ref: "R", 'data-slider-tooltip': "hide", 'data-slider-handle': "square"})
	                        ),
	                        React.DOM.p(null,
	                          React.DOM.b(null, "G"), " ", Input({type: "text", className: "span2", value: "", 'data-slider-min': "0", 'data-slider-max': "255", 'data-slider-step': "1", 'data-slider-value': "200", 'data-slider-id': "GC", id: "G", ref: "G", 'data-slider-tooltip': "hide", 'data-slider-handle': "round"})
	                        ),
	                        React.DOM.p(null,
	                          React.DOM.b(null, "B"), " ", Input({type: "text", className: "span2", value: "", 'data-slider-min': "0", 'data-slider-max': "255", 'data-slider-step': "1", 'data-slider-value': "128", 'data-slider-id': "BC", id: "B", ref: "B", 'data-slider-tooltip': "hide", 'data-slider-handle': "triangle"})
	                        )
	                      ),
	                      Col({xs: 6, className: "text-left"},
	                        React.DOM.div({id: "RGB"})
	                      )
	                    ),
	                    React.DOM.hr(null),
	                    Row(null,
	                      Col({sm: 4, className: "text-center"},
	                        Input({id: "ex4", ref: "ex4", type: "text", 'data-slider-min': "-5", 'data-slider-max': "20", 'data-slider-step': "1", 'data-slider-value': "-3", 'data-slider-orientation': "vertical"})
	                      ),
	                      Col({sm: 8, className: "text-center"},
	                        React.DOM.div(null,
	                          React.DOM.div(null, Label({id: "ex6CurrentSliderValLabel", ref: "ex6CurrentSliderValLabel"}, "Current Slider Value: ", React.DOM.span({id: "ex6SliderVal"}, "3"))),
	                          Input({id: "ex6", ref: "ex6", type: "text", 'data-slider-min': "-5", 'data-slider-max': "20", 'data-slider-step': "1", 'data-slider-value': "3"})
	                        ),
	                        React.DOM.hr(null),
	                        React.DOM.div(null,
	                          React.DOM.div(null,
	                            Label({style: {marginRight: 10}, htmlFor: "ex7-enabled"}, "Enabled"),
	                            Input({id: "ex7-enabled", ref: "ex7-enabled", type: "checkbox"})
	                          ),
	                          Input({id: "ex7", ref: "ex7", type: "text", 'data-slider-min': "0", 'data-slider-max': "20", 'data-slider-step': "1", 'data-slider-value': "5", 'data-slider-enabled': "false"})
	                        ),
	                        React.DOM.hr(null),
	                        React.DOM.div(null,
	                          Input({id: "ex8", ref: "ex8", 'data-slider-id': "ex1Slider", type: "text", 'data-slider-min': "0", 'data-slider-max': "20", 'data-slider-step': "1", 'data-slider-value': "14"})
	                        ),
	                        React.DOM.div(null,
	                          Input({id: "ex9", ref: "ex9", type: "text"})
	                        ),
	                        React.DOM.br(null)
	                      )
	                    )
	                  )
	                )
	              )
	            ),
	            Col({sm: 6},
	              PanelContainer({controlStyles: "bg-purple fg-white"},
	                PanelHeader({className: "bg-purple fg-white"},
	                  Grid(null,
	                    Row(null,
	                      Col({xs: 12},
	                        React.DOM.h3(null, "Ion Sliders")
	                      )
	                    )
	                  )
	                ),
	                PanelBody(null,
	                  Grid(null,
	                    Row(null,
	                      Col({xs: 12},
	                        React.DOM.div(null,
	                          Input({type: "text", id: "example_1", ref: "example_1"})
	                        ),
	                        React.DOM.hr(null)
	                      )
	                    ),
	                    Row(null,
	                      Col({xs: 12},
	                        React.DOM.div(null,
	                          Input({type: "text", id: "example_2", ref: "example_2"})
	                        ),
	                        React.DOM.hr(null)
	                      )
	                    ),
	                    Row(null,
	                      Col({xs: 12},
	                        React.DOM.div(null,
	                          Input({type: "text", id: "example_3", ref: "example_3"})
	                        ),
	                        React.DOM.hr(null)
	                      )
	                    ),
	                    Row(null,
	                      Col({xs: 12},
	                        React.DOM.div(null,
	                          Input({type: "text", id: "example_4", ref: "example_4"})
	                        ),
	                        React.DOM.hr(null)
	                      )
	                    ),
	                    Row(null,
	                      Col({xs: 12},
	                        React.DOM.div(null,
	                          Input({type: "text", id: "example_5", ref: "example_5"})
	                        ),
	                        React.DOM.hr(null)
	                      )
	                    ),
	                    Row(null,
	                      Col({xs: 12},
	                        React.DOM.div(null,
	                          Input({type: "text", id: "example_6", ref: "example_6"})
	                        ),
	                        React.DOM.hr(null)
	                      )
	                    ),
	                    Row(null,
	                      Col({xs: 12},
	                        React.DOM.div(null,
	                          Input({type: "text", id: "example_7", ref: "example_7"})
	                        ),
	                        React.DOM.hr(null)
	                      )
	                    ),
	                    Row(null,
	                      Col({xs: 12},
	                        React.DOM.div(null,
	                          Input({type: "text", id: "example_8", ref: "example_8"})
	                        ),
	                        React.DOM.pre(null,
	                          React.DOM.code({className: "language-javascript"},
	                            this.state.logger
	                          )
	                        ),
	                        React.DOM.br(null)
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ),
	        ReactStyle.renderToComponents(),
	        this.props.children
	      )
	    );
	  }
	});

	var classSet = React.addons.classSet;
	var Sliders = React.createClass({displayName: 'Sliders',
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = classSet({
	      'container-open': this.state.open
	    });
	    return this.transferPropsTo(
	      Container({id: "container", className: classes},
	        Sidebar(null),
	        Header(null),
	        Body(null,
	          Footer(null)
	        )
	      )
	    );
	  }
	});

	module.exports = Sliders;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(50);
	var Sidebar = __webpack_require__(51);
	var Footer = __webpack_require__(52);

	var Body = React.createClass({displayName: 'Body',
	  componentDidMount: function() {
	    $('.dial').knob();
	    $('.knob').knob({
	      draw : function () {
	        // 'tron' case
	        if(this.$.data('skin') == 'tron') {
	          var a = this.angle(this.cv)  // Angle
	              , sa = this.startAngle          // Previous start angle
	              , sat = this.startAngle         // Start angle
	              , ea                            // Previous end angle
	              , eat = sat + a                 // End angle
	              , r = true;

	          this.g.lineWidth = this.lineWidth;

	          this.o.cursor
	              && (sat = eat - 0.3)
	              && (eat = eat + 0.3);

	          if(this.o.displayPrevious) {
	            ea = this.startAngle + this.angle(this.value);
	            this.o.cursor
	                && (sa = ea - 0.3)
	                && (ea = ea + 0.3);
	            this.g.beginPath();
	            this.g.strokeStyle = this.previousColor;
	            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sa, ea, false);
	            this.g.stroke();
	          }

	          this.g.beginPath();
	          this.g.strokeStyle = r ? this.o.fgColor : this.fgColor ;
	          this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sat, eat, false);
	          this.g.stroke();

	          this.g.lineWidth = 2;
	          this.g.beginPath();
	          this.g.strokeStyle = this.o.fgColor;
	          this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
	          this.g.stroke();

	          return false;
	        }
	      }
	    });

	    function clock() {
	      var $s = $('.second'),
	          $m = $('.minute'),
	          $h = $('.hour');
	          d = new Date(),
	          s = d.getSeconds(),
	          m = d.getMinutes(),
	          h = d.getHours();
	      $s.val(s).trigger('change');
	      $m.val(m).trigger('change');
	      $h.val(h).trigger('change');
	      setTimeout(clock, 1000);
	    }
	    clock();
	  },
	  render: function() {
	    return (
	      Container({id: "body"},
	        Grid(null,
	          Row(null,
	            Col({sm: 12},
	              PanelContainer({controlStyles: "bg-purple fg-white"},
	                PanelHeader({className: "bg-purple fg-white"},
	                  Grid(null,
	                    Row(null,
	                      Col({xs: 12},
	                        React.DOM.h3(null, "jQuery Knobs")
	                      )
	                    )
	                  )
	                ),
	                PanelBody(null,
	                  Grid(null,
	                    React.DOM.br(null),
	                    Row(null,
	                      Col({xs: 4, className: "text-center"},
	                        React.DOM.input({type: "text", defaultValue: "75", className: "dial autosize", 'data-width': "100%", 'data-fgcolor': "#F09FA6"})
	                      ),
	                      Col({xs: 4, className: "text-center"},
	                        React.DOM.input({type: "text", defaultValue: "29", className: "dial autosize", 'data-width': "100%", 'data-cursor': "true", 'data-thickness': ".3", 'data-fgcolor': "#4A90E2"})
	                      ),
	                      Col({xs: 4, className: "text-center"},
	                        React.DOM.input({type: "text", defaultValue: "50", className: "dial autosize", 'data-width': "100%", 'data-displayprevious': "true", 'data-fgcolor': "#B4A1DD"})
	                      )
	                    ),
	                    React.DOM.hr(null),
	                    Row(null,
	                      Col({xs: 4, className: "text-center"},
	                        React.DOM.input({type: "text", defaultValue: "35", className: "dial autosize", 'data-angleoffset': "90", 'data-linecap': "round", 'data-width': "100%", 'data-fgcolor': "#A8553A"})
	                      ),
	                      Col({xs: 4, className: "text-center"},
	                        React.DOM.input({type: "text", defaultValue: "35", className: "dial autosize", 'data-angleoffset': "-125", 'data-anglearc': "250", 'data-width': "100%", 'data-fgcolor': "#FFC497"})
	                      ),
	                      Col({xs: 4, className: "text-center"},
	                        React.DOM.input({type: "text", defaultValue: "-11000", className: "dial autosize", 'data-width': "100%", 'data-step': "1000", 'data-min': "-15000", 'data-max': "15000", 'data-displayprevious': "true", 'data-fgcolor': "#306C67"})
	                      )
	                    ),
	                    React.DOM.br(null)
	                  )
	                )
	              )
	            )
	          )
	        ),
	        Grid(null,
	          Row(null,
	            Col({sm: 4, collapseRight: true},
	              PanelContainer({controlStyles: "bg-orange fg-white"},
	                PanelBody({className: "bg-orange fg-white", style: {padding: 0}},
	                  Grid(null,
	                    Row(null,
	                      Col({xs: 12},
	                        React.DOM.h3(null, "jQuery Knobs: Alternate"),
	                        React.DOM.hr({className: "border-darkorange"})
	                      )
	                    ),
	                    React.DOM.br(null),
	                    Row(null,
	                      Col({xs: 12, className: "text-center"},
	                        React.DOM.input({type: "text", defaultValue: "75", className: "dial autosize", 'data-width': "100%", 'data-thickness': "0.2", 'data-fgcolor': "#EBA068"})
	                      )
	                    ),
	                    React.DOM.br(null)
	                  )
	                )
	              )
	            ),
	            Col({sm: 8},
	              PanelContainer({controlStyles: "bg-black75 fg-white"},
	                PanelBody({className: "bg-black75 fg-white", style: {padding: 0}},
	                  Grid(null,
	                    Row(null,
	                      Col({xs: 12},
	                        React.DOM.h3(null, "jQuery Knobs: Superpose"),
	                        React.DOM.hr({className: "border-black"})
	                      )
	                    ),
	                    React.DOM.br(null),
	                    Row(null,
	                      Col({xs: 12, className: "text-center"},
	                        React.DOM.div({style: {height:365, width:'100%'}},
	                          React.DOM.div({style: {position:'relative',width:350,margin:'auto'}},
	                            React.DOM.div({style: {position:'absolute',left:10,top:10}},
	                              React.DOM.input({className: "knob hour autosize", 'data-min': "0", 'data-max': "24", 'data-bgcolor': "#333", 'data-fgcolor': "#ffec03", 'data-displayinput': "false", 'data-width': "300", 'data-height': "300", 'data-thickness': ".3"})
	                            ),
	                            React.DOM.div({style: {position:'absolute',left:60,top:60}},
	                              React.DOM.input({className: "knob minute autosize", 'data-min': "0", 'data-max': "60", 'data-bgcolor': "#333", 'data-displayinput': "false", 'data-width': "200", 'data-height': "200", 'data-thickness': ".45"})
	                            ),
	                            React.DOM.div({style: {position:'absolute',left:110,top:110}},
	                              React.DOM.input({className: "knob second autosize", 'data-min': "0", 'data-max': "60", 'data-bgcolor': "#333", 'data-fgcolor': "rgb(127, 255, 0)", 'data-displayinput': "false", 'data-width': "100", 'data-height': "100", 'data-thickness': ".3"})
	                            )
	                          )
	                        ),
	                        React.DOM.div({style: {clear:'both'}})
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ),
	        this.props.children
	      )
	    );
	  }
	});

	var classSet = React.addons.classSet;
	var Knobs = React.createClass({displayName: 'Knobs',
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = classSet({
	      'container-open': this.state.open
	    });
	    return this.transferPropsTo(
	      Container({id: "container", className: classes},
	        Sidebar(null),
	        Header(null),
	        Body(null,
	          Footer(null)
	        )
	      )
	    );
	  }
	});

	module.exports = Knobs;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(50);
	var Sidebar = __webpack_require__(51);
	var Footer = __webpack_require__(52);

	var Body = React.createClass({displayName: 'Body',
	  destroyPlanet: function() {
	    vex.dialog.confirm({
	      message: 'Are you absolutely sure you want to destroy the alien planet?',
	      callback: function(value) {
	        vex.dialog.alert(value ? 'Successfully destroyed the planet.' : 'Chicken.');
	      }
	    });
	  },
	  login: function() {
	    vex.dialog.open({
	      message: 'Enter your username and password:',
	      input: '' +
	          '<input name="username" type="text" placeholder="Username" required />' +
	          '<input name="password" type="password" placeholder="Password" required />' +
	      '',
	      buttons: [
	          $.extend({}, vex.dialog.buttons.YES, { text: 'Login' }),
	          $.extend({}, vex.dialog.buttons.NO, { text: 'Back' })
	      ],
	      callback: function (data) {
	        vex.dialog.alert('User: ' + data.username + ' Password: ' + data.password);
	      }
	    });
	  },
	  alert: function() {
	    vex.dialog.alert('Thanks for checking out Vex!');
	  },
	  prompt: function() {
	    vex.dialog.prompt({
	      message: 'What planet did the aliens come from?',
	      placeholder: 'Planet name',
	      callback: function(value) {
	        vex.dialog.alert('Callback value: <b>'+value+'</b>');
	      }
	    });
	  },
	  dtcpd: function() {
	    var todayDateString;

	    todayDateString = new Date().toJSON().slice(0, 10);

	    vex.dialog.open({
	      message: 'Select a date and color.',
	      input: "<style>\n    .vex-custom-field-wrapper {\n        margin: 1em 0;\n    }\n    .vex-custom-field-wrapper > label {\n        display: inline-block;\n        margin-bottom: .2em;\n    }\n</style>\n<div class=\"vex-custom-field-wrapper\">\n    <label for=\"date\">Date</label>\n    <div class=\"vex-custom-input-wrapper\">\n        <input name=\"date\" type=\"date\" value=\"" + todayDateString + "\" />\n    </div>\n</div>\n<div class=\"vex-custom-field-wrapper\">\n    <label for=\"color\">Color</label>\n    <div class=\"vex-custom-input-wrapper\">\n        <input name=\"color\" type=\"color\" value=\"#ff00cc\" />\n    </div>\n</div>",
	      callback: function(data) {
	        vex.dialog.alert("<h4>Result</h4>\n<p>\n    Date: <b>" + data.date + "</b><br/>\n    Color: <span style='position:absolute;width:20px;height:20px;background:"+data.color+";margin:5px;'></span>\n</p>");
	      }
	    });
	  },
	  handleClick: function() {
	    vex.dialog.alert('Woah!! This is mixed with Vex :D');
	  },
	  getModal: function() {
	    return (
	      Modal(null,
	        ModalHeader(null,
	          Button({onClick: ModalManager.remove, onTouchEnd: ModalManager.remove, close: true}),
	          React.DOM.h4({className: "modal-title"}, "Modal title")
	        ),
	        ModalBody(null,
	          React.DOM.p(null, "One fine body…")
	        ),
	        ModalFooter(null,
	          Button({outlined: true, bsStyle: "danger", onClick: ModalManager.remove, onTouchEnd: ModalManager.remove}, "Close"),
	          Button({outlined: true, bsStyle: "primary", onClick: this.handleClick}, "Save changes")
	        )
	      )
	    );
	  },
	  getSmallModal: function() {
	    return (
	      Modal({sm: true},
	        ModalHeader(null,
	          Button({onClick: ModalManager.remove, onTouchEnd: ModalManager.remove, close: true}),
	          React.DOM.h4({className: "modal-title"}, "Modal title")
	        ),
	        ModalBody(null,
	          React.DOM.p(null, LoremIpsum({query: "2s"}))
	        ),
	        ModalFooter(null,
	          Button({outlined: true, bsStyle: "danger", onClick: ModalManager.remove, onTouchEnd: ModalManager.remove}, "Close"),
	          Button({outlined: true, bsStyle: "primary", onClick: this.handleClick}, "Save changes")
	        )
	      )
	    );
	  },
	  getLargeModal: function() {
	    return (
	      Modal({lg: true},
	        ModalHeader(null,
	          Button({onClick: ModalManager.remove, onTouchEnd: ModalManager.remove, close: true}),
	          React.DOM.h4({className: "modal-title"}, "Modal title")
	        ),
	        ModalBody(null,
	          React.DOM.p(null, LoremIpsum({query: "2s"}))
	        ),
	        ModalFooter(null,
	          Button({outlined: true, bsStyle: "danger", onClick: ModalManager.remove, onTouchEnd: ModalManager.remove}, "Close"),
	          Button({outlined: true, bsStyle: "primary", onClick: this.handleClick}, "Save changes")
	        )
	      )
	    );
	  },
	  getLongModal: function() {
	    return (
	      Modal(null,
	        ModalHeader(null,
	          Button({onClick: ModalManager.remove, onTouchEnd: ModalManager.remove, close: true}),
	          React.DOM.h4({className: "modal-title"}, "Really Long Modal")
	        ),
	        ModalBody(null,
	          React.DOM.p(null,
	            React.DOM.img({src: "public/imgs/longmodal.jpg"})
	          )
	        ),
	        ModalFooter(null,
	          Button({outlined: true, bsStyle: "danger", onClick: ModalManager.remove, onTouchEnd: ModalManager.remove}, "Close"),
	          Button({outlined: true, bsStyle: "primary", onClick: this.handleClick}, "Save changes")
	        )
	      )
	    );
	  },
	  getModalWithTooltipsAndPopovers: function() {
	    var modalVisible = function() {
	      $('[data-toggle=tooltip]').tooltip();
	    };

	    return (
	      Modal({onShown: modalVisible},
	        ModalHeader(null,
	          Button({onClick: ModalManager.remove, onTouchEnd: ModalManager.remove, close: true}),
	          React.DOM.h4({className: "modal-title"}, "Modal title")
	        ),
	        ModalBody(null,
	          React.DOM.h4(null, "Text in a modal"),
	          React.DOM.p(null,
	            LoremIpsum({query: "1s"})
	          ),
	          React.DOM.h4(null, "Popover in a modal"),
	          React.DOM.p(null,
	            "This ", Button(null, "button"), " should trigger a popover on click."
	          ),
	          React.DOM.h4(null, "Tooltips in a modal"),
	          React.DOM.p(null,
	            Link({href: "#", title: "Tooltip", 'data-toggle': "tooltip", 'data-placement': "top"}, "This link"), " and ", Link({href: "#", title: "Tooltip", 'data-toggle': "tooltip", 'data-placement': "top"}, "that link"), " should have tooltips on hover."
	          ),
	          React.DOM.h4(null, "Overflowing text to show scroll behavior"),
	          React.DOM.p(null,
	            LoremIpsum({query: "2-4p"})
	          )
	        ),
	        ModalFooter(null,
	          Button({outlined: true, bsStyle: "danger", onClick: ModalManager.remove, onTouchEnd: ModalManager.remove}, "Close"),
	          Button({outlined: true, bsStyle: "primary", onClick: this.handleClick}, "Save changes")
	        )
	      )
	    );
	  },
	  render: function() {
	    return (
	      Container({id: "body"},
	        Grid(null,
	          Row(null,
	            Col({sm: 12},
	              PanelContainer({controlStyles: "bg-blue fg-white"},
	                PanelHeader({className: "bg-blue fg-white"},
	                  Grid(null,
	                    Row(null,
	                      Col({xs: 12},
	                        React.DOM.h3(null, "HubSpot Vex Modals")
	                      )
	                    )
	                  )
	                ),
	                PanelBody(null,
	                  Grid(null,
	                    Row(null,
	                      Col({xs: 12},
	                        Table({bordered: true, striped: true},
	                          React.DOM.thead(null,
	                            React.DOM.tr(null,
	                              React.DOM.th(null, "Type"),
	                              React.DOM.th({className: "text-right"}, "Call to action")
	                            )
	                          ),
	                          React.DOM.tbody(null,
	                            React.DOM.tr(null,
	                              React.DOM.td(null,
	                                "Alert demo"
	                              ),
	                              React.DOM.td({className: "text-right"},
	                                Button({outlined: true, onClick: this.alert},
	                                  "Open an alert"
	                                )
	                              )
	                            ),
	                            React.DOM.tr(null,
	                              React.DOM.td(null,
	                                "Confirm demo"
	                              ),
	                              React.DOM.td({className: "text-right"},
	                                Button({outlined: true, onClick: this.destroyPlanet},
	                                  "Destroy the Planet!"
	                                )
	                              )
	                            ),
	                            React.DOM.tr(null,
	                              React.DOM.td(null,
	                                "Prompt demo"
	                              ),
	                              React.DOM.td({className: "text-right"},
	                                Button({outlined: true, onClick: this.prompt},
	                                  "Open a prompt"
	                                )
	                              )
	                            ),
	                            React.DOM.tr(null,
	                              React.DOM.td(null,
	                                "Login demo"
	                              ),
	                              React.DOM.td({className: "text-right"},
	                                Button({outlined: true, onClick: this.login},
	                                  "Login"
	                                )
	                              )
	                            ),
	                            React.DOM.tr(null,
	                              React.DOM.td(null,
	                                "Date/time + Color picker demo"
	                              ),
	                              React.DOM.td({className: "text-right"},
	                                Button({outlined: true, onClick: this.dtcpd},
	                                  "Click me"
	                                )
	                              )
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              ),
	              PanelContainer({controlStyles: "bg-purple fg-white"},
	                PanelHeader({className: "bg-purple fg-white"},
	                  Grid(null,
	                    Row(null,
	                      Col({xs: 12},
	                        React.DOM.h3(null, "Bootstrap Modals")
	                      )
	                    )
	                  )
	                ),
	                PanelBody(null,
	                  Grid(null,
	                    Row(null,
	                      Col({xs: 12},
	                        Table({bordered: true, striped: true},
	                          React.DOM.thead(null,
	                            React.DOM.tr(null,
	                              React.DOM.th(null, "Type"),
	                              React.DOM.th({className: "text-right"}, "Call to action")
	                            )
	                          ),
	                          React.DOM.tbody(null,
	                            React.DOM.tr(null,
	                              React.DOM.td(null,
	                                "Basic demo"
	                              ),
	                              React.DOM.td({className: "text-right"},
	                                Button({outlined: true, bsStyle: "primary", onClick: ModalManager.create.bind(this, this.getModal()), onTouchEnd: ModalManager.create.bind(this, this.getModal())}, "Launch basic demo")
	                              )
	                            ),
	                            React.DOM.tr(null,
	                              React.DOM.td(null,
	                                "Small modal demo"
	                              ),
	                              React.DOM.td({className: "text-right"},
	                                Button({outlined: true, bsStyle: "primary", onClick: ModalManager.create.bind(this, this.getSmallModal()), onTouchEnd: ModalManager.create.bind(this, this.getSmallModal())}, "Launch small modal")
	                              )
	                            ),
	                            React.DOM.tr(null,
	                              React.DOM.td(null,
	                                "Large modal demo"
	                              ),
	                              React.DOM.td({className: "text-right"},
	                                Button({outlined: true, bsStyle: "primary", onClick: ModalManager.create.bind(this, this.getLargeModal()), onTouchEnd: ModalManager.create.bind(this, this.getLargeModal())}, "Launch large modal")
	                              )
	                            ),
	                            React.DOM.tr(null,
	                              React.DOM.td(null,
	                                "Long modal demo"
	                              ),
	                              React.DOM.td({className: "text-right"},
	                                Button({outlined: true, bsStyle: "primary", onClick: ModalManager.create.bind(this, this.getLongModal()), onTouchEnd: ModalManager.create.bind(this, this.getLongModal())}, "Launch long modal")
	                              )
	                            ),
	                            React.DOM.tr(null,
	                              React.DOM.td(null,
	                                "Special Modal: Tooltips and Popovers"
	                              ),
	                              React.DOM.td({className: "text-right"},
	                                Button({outlined: true, bsStyle: "primary", onClick: ModalManager.create.bind(this, this.getModalWithTooltipsAndPopovers()), onTouchEnd: ModalManager.create.bind(this, this.getModalWithTooltipsAndPopovers())}, "Launch special modal")
	                              )
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ),
	        this.props.children
	      )
	    );
	  }
	});

	var classSet = React.addons.classSet;
	var Modals = React.createClass({displayName: 'Modals',
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = classSet({
	      'container-open': this.state.open
	    });
	    return this.transferPropsTo(
	      Container({id: "container", className: classes},
	        Sidebar(null),
	        Header(null),
	        Body(null,
	          Footer(null)
	        )
	      )
	    );
	  }
	});

	module.exports = Modals;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(50);
	var Sidebar = __webpack_require__(51);
	var Footer = __webpack_require__(52);

	var Body = React.createClass({displayName: 'Body',
	  componentDidMount: function() {
	    // configuring default options for Messenger
	    Messenger.options = {
	      theme: 'flat'
	    };
	  },
	  basicNotification: function() {
	    Messenger().post('Absolutely basic notification');
	  },
	  errorNotification: function() {
	    Messenger().post({
	      id: 'error',
	      type: 'error',
	      singleton: true,
	      message: 'Whoops! we encountered an error!',
	      showCloseButton: true
	    });
	  },
	  infoNotification: function() {
	    Messenger().post({
	      id: 'info',
	      type: 'info',
	      singleton: true,
	      message: 'Just send us a mail at <a href="mailto:support@sketchpixy.com">support@sketchpixy.com</a> if you have any queries!',
	      showCloseButton: true
	    });
	  },
	  successNotification: function() {
	    Messenger().post({
	      id: 'success',
	      type: 'success',
	      singleton: false,
	      message: 'Congratulations! You are now a registered Rubixian!',
	      showCloseButton: true
	    });
	  },
	  updatingNotification: function() {
	    var msg = Messenger().post({
	      id: 'info2',
	      type: 'info',
	      singleton: false,
	      message: 'Please wait while we process your request',
	      showCloseButton: true
	    });

	    setTimeout(function() {
	      msg.update({
	        type: 'error',
	        message: 'Whoops! we encountered an error!'
	      });
	    }, 5000);
	  },
	  actionNotification: function() {
	    var msg;
	    msg = Messenger().post({
	      message: 'Launching thermonuclear war...',
	      type: 'info',
	      actions: {
	        cancel: {
	          label: 'cancel launch',
	          action: function() {
	            return msg.update({
	              message: 'Thermonuclear war averted',
	              type: 'success',
	              actions: false
	            });
	          }
	        }
	      }
	    });
	  },
	  actionRetryNotification: function() {
	    var msg;
	    msg = Messenger().post({
	      message: "This is your last chance. After this, there is no turning back. You take the blue pill—the story ends, you wake up in your bed and believe whatever you want to believe. You take the red pill—you stay in Wonderland, and I show you how deep the rabbit hole goes. Remember, all I'm offering is the truth—nothing more.",
	      singleton: false,
	      id: 'neo',
	      hideAfter: 10000000000,
	      actions: {
	        blue: {
	          label: 'take blue pill',
	          action: function() {
	            return msg.update({
	              message: 'Welcome to the Matrix!',
	              type: 'success',
	              hideAfter: 5,
	              actions: false
	            });
	          }
	        },
	        red: {
	          label: 'take red pill',
	          action: function() {
	            return msg.update({
	              message: 'We will wait for a newer and better version of yourself! Until then goodbye and good luck Neo!',
	              type: 'error',
	              hideAfter: 5,
	              actions: false
	            });
	          }
	        }
	      }
	    });
	  },
	  notificationDirection: function(dir1, dir2) {
	    var classes = 'messenger-fixed';
	    if(typeof dir1 === 'string') classes += ' messenger-on-'+dir1+' ';
	    if(typeof dir2 === 'string') classes += ' messenger-on-'+dir2+' ';
	    classes = classes.trim();

	    Messenger({
	      extraClasses: classes
	    }).post({
	      singleton: false,
	      showCloseButton: true,
	      id: 'messenger-layout',
	      message: classes
	    });
	  },
	  render: function() {
	    return (
	      Container({id: "body"},
	        Grid(null,
	          Row(null,
	            Col({sm: 12},
	              PanelContainer({controlStyles: "bg-blue fg-white"},
	                PanelHeader({className: "bg-blue fg-white"},
	                  Grid(null,
	                    Row(null,
	                      Col({xs: 12},
	                        React.DOM.h3(null, "HubSpot Messenger : Powerful Growl-like notification system")
	                      )
	                    )
	                  )
	                ),
	                PanelBody(null,
	                  Grid(null,
	                    Row(null,
	                      Col({xs: 12},
	                        Table({bordered: true, striped: true},
	                          React.DOM.thead(null,
	                            React.DOM.tr(null,
	                              React.DOM.th(null, "Type"),
	                              React.DOM.th({className: "text-right"}, "Call to action")
	                            )
	                          ),
	                          React.DOM.tbody(null,
	                            React.DOM.tr(null,
	                              React.DOM.td(null,
	                                React.DOM.div(null, "Basic notification"),
	                                React.DOM.ul(null,
	                                  React.DOM.li(null, "Timeout after 10 seconds (default)"),
	                                  React.DOM.li(null, "Fixed at bottom-right (default)")
	                                )
	                              ),
	                              React.DOM.td({className: "text-right"},
	                                Button({outlined: true, onClick: this.basicNotification},
	                                  "Trigger basic"
	                                )
	                              )
	                            ),
	                            React.DOM.tr(null,
	                              React.DOM.td(null,
	                                React.DOM.div(null, "Info and Error notification"),
	                                React.DOM.ul(null,
	                                  React.DOM.li(null, "Includes a close button"),
	                                  React.DOM.li(null, "Singleton (triggered only once)")
	                                )
	                              ),
	                              React.DOM.td({className: "text-right"},
	                                Button({bsStyle: "info", outlined: true, onClick: this.infoNotification},
	                                  "Trigger info"
	                                ), ' ',
	                                Button({bsStyle: "danger", outlined: true, onClick: this.errorNotification},
	                                  "Trigger error"
	                                )
	                              )
	                            ),
	                            React.DOM.tr(null,
	                              React.DOM.td(null,
	                                React.DOM.div(null, "Success notification"),
	                                React.DOM.ul(null,
	                                  React.DOM.li(null, "Includes a close button"),
	                                  React.DOM.li(null, "Triggers only 1 notification at a time")
	                                )
	                              ),
	                              React.DOM.td({className: "text-right"},
	                                Button({bsStyle: "success", outlined: true, onClick: this.successNotification},
	                                  "Trigger success"
	                                )
	                              )
	                            ),
	                            React.DOM.tr(null,
	                              React.DOM.td(null,
	                                React.DOM.div(null, "Updating notification"),
	                                React.DOM.ul(null,
	                                  React.DOM.li(null, "Changes notification message after specified duration (5 seconds)"),
	                                  React.DOM.li(null, "Changes state from info to error"),
	                                  React.DOM.li(null, "Triggers only 1 notification at a time")
	                                )
	                              ),
	                              React.DOM.td({className: "text-right"},
	                                Button({bsStyle: "darkgreen45", outlined: true, onClick: this.updatingNotification},
	                                  "Trigger notification"
	                                )
	                              )
	                            ),
	                            React.DOM.tr(null,
	                              React.DOM.td(null,
	                                React.DOM.div(null, "Taking actions")
	                              ),
	                              React.DOM.td({className: "text-right"},
	                                Button({bsStyle: "purple", outlined: true, onClick: this.actionNotification},
	                                  "Trigger launch"
	                                )
	                              )
	                            ),
	                            React.DOM.tr(null,
	                              React.DOM.td(null,
	                                React.DOM.div(null, "Taking actions [custom buttons]")
	                              ),
	                              React.DOM.td({className: "text-right"},
	                                Button({bsStyle: "desaturateddarkblue", outlined: true, onClick: this.actionRetryNotification},
	                                  "Make a choice Neo!"
	                                )
	                              )
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              ),
	              PanelContainer({controlStyles: "bg-darkgreen45 fg-white"},
	                PanelHeader({className: "bg-darkgreen45 fg-white"},
	                  Grid(null,
	                    Row(null,
	                      Col({xs: 12},
	                        React.DOM.h3(null, "Notification layout")
	                      )
	                    )
	                  )
	                ),
	                PanelBody(null,
	                  Grid(null,
	                    Row(null,
	                      Col({xs: 12},
	                        Table({bordered: true},
	                          React.DOM.tbody(null,
	                            React.DOM.tr(null,
	                              React.DOM.td(null,
	                                Button({bsStyle: "green", outlined: true, onClick: this.notificationDirection.bind(this, 'top', 'left')},
	                                  "Top Left"
	                                )
	                              ),
	                              React.DOM.td({className: "text-center"},
	                                Button({bsStyle: "green", outlined: true, onClick: this.notificationDirection.bind(this, 'top')},
	                                  "Top"
	                                )
	                              ),
	                              React.DOM.td({className: "text-right"},
	                                Button({bsStyle: "green", outlined: true, onClick: this.notificationDirection.bind(this, 'top', 'right')},
	                                  "Top Right"
	                                )
	                              )
	                            ),
	                            React.DOM.tr(null,
	                              React.DOM.td(null,
	                                Button({bsStyle: "green", outlined: true, onClick: this.notificationDirection.bind(this, 'bottom', 'left')},
	                                  "Bottom Left"
	                                )
	                              ),
	                              React.DOM.td({className: "text-center"},
	                                Button({bsStyle: "green", outlined: true, onClick: this.notificationDirection.bind(this, 'bottom')},
	                                  "Bottom"
	                                )
	                              ),
	                              React.DOM.td({className: "text-right"},
	                                Button({bsStyle: "green", outlined: true, onClick: this.notificationDirection.bind(this, 'bottom', 'right')},
	                                  "Bottom Right"
	                                )
	                              )
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ),
	        this.props.children
	      )
	    );
	  }
	});

	var classSet = React.addons.classSet;
	var MessengerPage = React.createClass({displayName: 'MessengerPage',
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = classSet({
	      'container-open': this.state.open
	    });
	    return this.transferPropsTo(
	      Container({id: "container", className: classes},
	        Sidebar(null),
	        Header(null),
	        Body(null,
	          Footer(null)
	        )
	      )
	    );
	  }
	});

	module.exports = MessengerPage;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(50);
	var Sidebar = __webpack_require__(51);
	var Footer = __webpack_require__(52);

	var Body = React.createClass({displayName: 'Body',
	  render: function() {
	    return (
	      Container({id: "body"},
	        Grid(null,
	          Row(null,
	            Col({sm: 6, collapseRight: true},
	              PanelContainer({noOverflow: true, controlStyles: "bg-green fg-white"},
	                Panel(null,
	                  PanelHeader({className: "bg-green fg-white"},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h3(null, "Default form")
	                        )
	                      )
	                    )
	                  ),
	                  PanelBody(null,
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          Form(null,
	                            FormGroup(null,
	                              Label({htmlFor: "emailaddress"}, "Email address"),
	                              InputGroup(null,
	                                InputGroupAddon(null,
	                                  Icon({glyph: "icon-fontello-mail"})
	                                ),
	                                Input({autoFocus: true, type: "email", id: "emailaddress", placeholder: "Email address"})
	                              )
	                            ),
	                            FormGroup(null,
	                              Label({htmlFor: "password"}, "Password"),
	                              InputGroup(null,
	                                Input({type: "password", id: "password", placeholder: "Password"}),
	                                InputGroupAddon(null,
	                                  Icon({glyph: "icon-fontello-key"})
	                                )
	                              )
	                            ),
	                            FormGroup({feedback: true},
	                              Label({htmlFor: "withicon", control: true}, "With icon"),
	                              Input({type: "text", id: "withicon", placeholder: "Search"}),
	                              Icon({bundle: "fontello", glyph: "search", feedback: true})
	                            ),
	                            FormGroup({feedback: true},
	                              Label({htmlFor: "inputwithicon", control: true}, "Input with icon"),
	                              InputGroup(null,
	                                InputGroupAddon(null,
	                                  Icon({glyph: "icon-fontello-alert"})
	                                ),
	                                Input({type: "text", id: "inputwithicon", placeholder: "Search"}),
	                                Icon({bundle: "fontello", glyph: "search", feedback: true})
	                              )
	                            ),
	                            FormGroup(null,
	                              Label({htmlFor: "disabled"}, "Disabled"),
	                              Input({disabled: true, type: "text", id: "disabled", placeholder: "Disabled"})
	                            ),
	                            FormGroup(null,
	                              Label({htmlFor: "readonly"}, "Read only"),
	                              Input({readOnly: true, type: "text", id: "readonly", placeholder: "Read only"})
	                            ),
	                            FormGroup(null,
	                              Label({htmlFor: "dropdownselect"}, "Dropdown Select"),
	                              Select({id: "dropdownselect", defaultValue: "1"},
	                                React.DOM.option({value: "1"}, "Option 1"),
	                                React.DOM.option({value: "2"}, "Option 2"),
	                                React.DOM.option({value: "3"}, "Option 3"),
	                                React.DOM.option({value: "4"}, "Option 4"),
	                                React.DOM.option({value: "5"}, "Option 5")
	                              )
	                            ),
	                            FormGroup(null,
	                              Label({htmlFor: "multiselect"}, "Multiple Select"),
	                              Select({id: "multiselect", multiple: true},
	                                React.DOM.option({value: "1"}, "Option 1"),
	                                React.DOM.option({value: "2"}, "Option 2"),
	                                React.DOM.option({value: "3"}, "Option 3"),
	                                React.DOM.option({value: "4"}, "Option 4"),
	                                React.DOM.option({value: "5"}, "Option 5")
	                              )
	                            ),
	                            FormGroup(null,
	                              Label({htmlFor: "textarea"}, "Textarea"),
	                              Textarea({id: "textarea", rows: "3", placeholder: "Some text here..."})
	                            ),
	                            FormGroup(null,
	                              Label({htmlFor: "fileinput"}, "File input"),
	                              Input({id: "fileinput", type: "file"}),
	                              HelpBlock(null, "some help text here.")
	                            ),
	                            FormGroup(null,
	                              Label(null, "Checkboxes"),
	                              Checkbox({value: "option1", name: "checkbox-options"},
	                                "Option one is great"
	                              ),
	                              Checkbox({value: "option2", defaultChecked: true, name: "checkbox-options"},
	                                "Option two is checked"
	                              ),
	                              Checkbox({value: "option3", disabled: true, name: "checkbox-options"},
	                                "Option three is disabled"
	                              ),
	                              React.DOM.hr(null)
	                            ),
	                            FormGroup(null,
	                              Label(null, "Inline checkboxes"),
	                              React.DOM.div(null,
	                                Checkbox({inline: true, value: "option1", name: "inline-checkbox-options"},
	                                  "Option one"
	                                ),
	                                Checkbox({inline: true, value: "option2", defaultChecked: true, name: "inline-checkbox-options"},
	                                  "Option two"
	                                ),
	                                Checkbox({inline: true, value: "option3", disabled: true, name: "inline-checkbox-options"},
	                                  "Option disabled"
	                                )
	                              ),
	                              React.DOM.hr(null)
	                            ),
	                            FormGroup(null,
	                              Label(null, "Radios"),
	                              Radio({value: "option1", defaultChecked: true, name: "radio-options"},
	                                "Option 1"
	                              ),
	                              Radio({value: "option2", name: "radio-options"},
	                                "Option 2"
	                              ),
	                              Radio({value: "option3", disabled: true, name: "radio-options"},
	                                "Option disabled"
	                              ),
	                              React.DOM.hr(null)
	                            ),
	                            FormGroup(null,
	                              Label(null, "Inline radios"),
	                              React.DOM.div(null,
	                                Radio({inline: true, value: "option1", name: "inline-radio-options"},
	                                  "Option one"
	                                ),
	                                Radio({inline: true, value: "option2", defaultChecked: true, name: "inline-radio-options"},
	                                  "Option two"
	                                ),
	                                Radio({inline: true, value: "option3", disabled: true, name: "inline-radio-options"},
	                                  "Option disabled"
	                                )
	                              )
	                            )
	                          )
	                        )
	                      )
	                    )
	                  ),
	                  PanelFooter({className: "bg-darkgreen45 text-right"},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.br(null),
	                          React.DOM.div(null,
	                            Button({outlined: true, bsStyle: "lightgreen"}, "cancel"), ' ',
	                            Button({outlined: true, bsStyle: "lightgreen"}, "submit")
	                          ),
	                          React.DOM.br(null)
	                        )
	                      )
	                    )
	                  )
	                )
	              ),
	              PanelContainer({noOverflow: true, controlStyles: "bg-red fg-white"},
	                Panel(null,
	                  PanelHeader({className: "bg-red fg-white"},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h3(null, "Input groups")
	                        )
	                      )
	                    )
	                  ),
	                  PanelBody(null,
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          Form(null,
	                            FormGroup(null,
	                              Label(null, "Checkbox addons"),
	                              Grid(null,
	                                Row(null,
	                                  Col({xs: 6, collapseLeft: true, collapseRight: true},
	                                    InputGroup(null,
	                                      InputGroupAddon(null, Checkbox({native: true})),
	                                      Input({type: "text", placeholder: "Username"})
	                                    )
	                                  ),
	                                  Col({xs: 6, collapseRight: true},
	                                    InputGroup(null,
	                                      Input({type: "text", placeholder: "Username"}),
	                                      InputGroupAddon(null, Checkbox({native: true}))
	                                    )
	                                  )
	                                )
	                              )
	                            ),
	                            FormGroup(null,
	                              Label(null, "Radio addons"),
	                              Grid(null,
	                                Row(null,
	                                  Col({xs: 6, collapseLeft: true, collapseRight: true},
	                                    InputGroup(null,
	                                      InputGroupAddon(null, Radio({name: "radioaddon", native: true})),
	                                      Input({type: "text", placeholder: "Username"})
	                                    )
	                                  ),
	                                  Col({xs: 6, collapseRight: true},
	                                    InputGroup(null,
	                                      Input({type: "text", placeholder: "Username"}),
	                                      InputGroupAddon(null, Radio({name: "radioaddon", native: true}))
	                                    )
	                                  )
	                                )
	                              )
	                            ),
	                            FormGroup(null,
	                              Label(null, "Button addons"),
	                              Grid(null,
	                                Row(null,
	                                  Col({xs: 6, collapseLeft: true, collapseRight: true},
	                                    InputGroup(null,
	                                      InputGroupButton(null, Button({bsStyle: "red"}, "Go!")),
	                                      Input({type: "text", placeholder: "Username"})
	                                    )
	                                  ),
	                                  Col({xs: 6, collapseRight: true},
	                                    InputGroup(null,
	                                      Input({type: "text", placeholder: "Username"}),
	                                      InputGroupButton(null, Button({bsStyle: "green"}, "Go!"))
	                                    )
	                                  )
	                                )
	                              )
	                            ),
	                            FormGroup(null,
	                              Label(null, "Button addons: Dual"),
	                              Grid(null,
	                                Row(null,
	                                  Col({xs: 12, collapseLeft: true, collapseRight: true},
	                                    InputGroup(null,
	                                      InputGroupButton(null, Button({bsStyle: "red"}, "Go!")),
	                                      Input({type: "text", placeholder: "Username"}),
	                                      InputGroupButton(null, Button({bsStyle: "green"}, "Go!"))
	                                    )
	                                  )
	                                )
	                              )
	                            ),
	                            FormGroup(null,
	                              Label(null, "Button with dropdowns"),
	                              Grid(null,
	                                Row(null,
	                                  Col({xs: 6, collapseRight: true, collapseLeft: true},
	                                    InputGroup(null,
	                                      InputGroupButton(null,
	                                        DropdownButton({container: this, menu: "btnwithdropdown1"},
	                                          React.DOM.span(null, "Action "), Caret(null)
	                                        ),
	                                        Menu({ref: "btnwithdropdown1"},
	                                          MenuItem({href: "#"}, "Action"),
	                                          MenuItem({href: "#"}, "Another Action"),
	                                          MenuItem({href: "#"}, "Something else here"),
	                                          MenuItem({divider: true}),
	                                          MenuItem({href: "#"}, "Separated link")
	                                        )
	                                      ),
	                                      Input({type: "text", placeholder: "Username"})
	                                    )
	                                  ),
	                                  Col({xs: 6, collapseRight: true},
	                                    InputGroup(null,
	                                      Input({type: "text", placeholder: "Username"}),
	                                      InputGroupButton(null,
	                                        DropdownButton({container: this, menu: "btnwithdropdown2"},
	                                          React.DOM.span(null, "Action "), Caret(null)
	                                        ),
	                                        Menu({ref: "btnwithdropdown2", alignRight: true},
	                                          MenuItem({href: "#"}, "Action"),
	                                          MenuItem({href: "#"}, "Another Action"),
	                                          MenuItem({href: "#"}, "Something else here"),
	                                          MenuItem({divider: true}),
	                                          MenuItem({href: "#"}, "Separated link")
	                                        )
	                                      )
	                                    )
	                                  )
	                                )
	                              )
	                            ),
	                            FormGroup(null,
	                              Label(null, "Button with dropdowns: Dual"),
	                              Grid(null,
	                                Row(null,
	                                  Col({xs: 12, collapseLeft: true, collapseRight: true},
	                                    InputGroup(null,
	                                      InputGroupButton(null,
	                                        DropdownButton({bsStyle: "green", container: this, menu: "btnwithdropdown3"},
	                                          React.DOM.span(null, "Action "), Caret(null)
	                                        ),
	                                        Menu({ref: "btnwithdropdown3", bsStyle: "green"},
	                                          MenuItem({href: "#"}, "Action"),
	                                          MenuItem({href: "#"}, "Another Action"),
	                                          MenuItem({href: "#"}, "Something else here"),
	                                          MenuItem({divider: true}),
	                                          MenuItem({href: "#"}, "Separated link")
	                                        )
	                                      ),
	                                      Input({type: "text", placeholder: "Username"}),
	                                      InputGroupButton(null,
	                                        DropdownButton({bsStyle: "orange", container: this, menu: "btnwithdropdown4"},
	                                          React.DOM.span(null, "Action "), Caret(null)
	                                        ),
	                                        Menu({ref: "btnwithdropdown4", bsStyle: "orange", alignRight: true},
	                                          MenuItem({href: "#"}, "Action"),
	                                          MenuItem({href: "#"}, "Another Action"),
	                                          MenuItem({href: "#"}, "Something else here"),
	                                          MenuItem({divider: true}),
	                                          MenuItem({href: "#"}, "Separated link")
	                                        )
	                                      )
	                                    )
	                                  )
	                                )
	                              )
	                            ),
	                            FormGroup(null,
	                              Label(null, "Segmented dropdowns: Dual"),
	                              Grid(null,
	                                Row(null,
	                                  Col({xs: 12, collapseLeft: true, collapseRight: true},
	                                    InputGroup(null,
	                                      InputGroupButton(null,
	                                        Button({bsStyle: "green"}, "Action"),
	                                        DropdownButton({bsStyle: "green", container: this, menu: "btnwithdropdown5"},
	                                          Caret(null)
	                                        ),
	                                        Menu({ref: "btnwithdropdown5", bsStyle: "green"},
	                                          MenuItem({href: "#"}, "Action"),
	                                          MenuItem({href: "#"}, "Another Action"),
	                                          MenuItem({href: "#"}, "Something else here"),
	                                          MenuItem({divider: true}),
	                                          MenuItem({href: "#"}, "Separated link")
	                                        )
	                                      ),
	                                      Input({type: "text", placeholder: "Username"}),
	                                      InputGroupButton(null,
	                                        Button({bsStyle: "orange"}, "Action"),
	                                        DropdownButton({bsStyle: "orange", container: this, menu: "btnwithdropdown6"},
	                                          Caret(null)
	                                        ),
	                                        Menu({ref: "btnwithdropdown6", bsStyle: "orange", alignRight: true},
	                                          MenuItem({href: "#"}, "Action"),
	                                          MenuItem({href: "#"}, "Another Action"),
	                                          MenuItem({href: "#"}, "Something else here"),
	                                          MenuItem({divider: true}),
	                                          MenuItem({href: "#"}, "Separated link")
	                                        )
	                                      )
	                                    )
	                                  )
	                                )
	                              )
	                            )
	                          )
	                        )
	                      )
	                    )
	                  ),
	                  PanelFooter({className: "bg-red text-right"},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.br(null),
	                          React.DOM.div(null,
	                            Button({outlined: true, bsStyle: "lightred"}, "cancel"), ' ',
	                            Button({outlined: true, bsStyle: "lightred"}, "submit")
	                          ),
	                          React.DOM.br(null)
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            ),
	            Col({sm: 6},
	              PanelContainer({noOverflow: true, controlStyles: "bg-darkblue fg-white"},
	                Panel(null,
	                  PanelHeader({className: "bg-darkblue fg-white"},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h3(null, "Horizontal form")
	                        )
	                      )
	                    )
	                  ),
	                  PanelBody(null,
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          Form({horizontal: true},
	                            FormGroup(null,
	                              Label({control: true, sm: 3, htmlFor: "blockhelp"}, "Block help"),
	                              Col({sm: 9},
	                                Input({type: "text", id: "blockhelp", placeholder: "Enter text"}),
	                                HelpBlock(null, "A block of help text.")
	                              )
	                            ),
	                            FormGroup(null,
	                              Label({control: true, sm: 3, htmlFor: "inlinehelp"}, "Inline help"),
	                              Col({sm: 9},
	                                Input({type: "text", id: "inlinehelp", placeholder: "Enter text", className: "inline"}),
	                                HelpBlock({className: "inline"}, "Inline help.")
	                              )
	                            ),
	                            FormGroup(null,
	                              Label({control: true, sm: 3, htmlFor: "inlineinputgroup"}, "Input group"),
	                              Col({sm: 9},
	                                InputGroup(null,
	                                  InputGroupAddon(null,
	                                    Icon({glyph: "icon-fontello-user"})
	                                  ),
	                                  Input({type: "email", id: "inlineinputgroup", placeholder: "Username", className: "inline"}),
	                                  HelpBlock({className: "inline"}, "Inline help.")
	                                )
	                              )
	                            ),
	                            FormGroup(null,
	                              Label({control: true, sm: 3, htmlFor: "inlineinputgroupmail"}, "Email address"),
	                              Col({sm: 9},
	                                InputGroup(null,
	                                  InputGroupAddon(null,
	                                    Icon({glyph: "icon-fontello-mail"})
	                                  ),
	                                  Input({type: "email", id: "inlineinputgroupmail", placeholder: "Email address"})
	                                )
	                              )
	                            ),
	                            FormGroup(null,
	                              Label({control: true, sm: 3, htmlFor: "horizontalpassword"}, "Password"),
	                              Col({sm: 9},
	                                InputGroup(null,
	                                  Input({type: "password", id: "horizontalpassword", placeholder: "Password"}),
	                                  InputGroupAddon(null,
	                                    Icon({glyph: "icon-fontello-key"})
	                                  )
	                                )
	                              )
	                            ),
	                            FormGroup({feedback: true},
	                              Label({htmlFor: "withicon", control: true, sm: 3}, "With icon"),
	                              Col({sm: 9},
	                                Input({type: "text", id: "withicon", placeholder: "Search"}),
	                                Icon({bundle: "fontello", glyph: "search", feedback: true})
	                              )
	                            ),
	                            FormGroup(null,
	                              Label({htmlFor: "searchbtnicon", control: true, sm: 3}, "Input group with button"),
	                              Col({sm: 9},
	                                InputGroup(null,
	                                  Input({type: "text", id: "searchbtnicon", placeholder: "Enter keywords here ..."}),
	                                  InputGroupAddon({className: "plain"},
	                                    Button(null,
	                                      React.DOM.span(null, "Search "),
	                                      Icon({bundle: "fontello", glyph: "search"})
	                                    )
	                                  )
	                                )
	                              )
	                            ),
	                            FormGroup(null,
	                              Label({control: true, sm: 3}, "Email"),
	                              Col({sm: 9},
	                                Static(null, "support@sketchpixy.com")
	                              )
	                            ),
	                            FormGroup(null,
	                              Label({control: true, sm: 3, htmlFor: "disabledhorizontal"}, "Disabled"),
	                              Col({sm: 9},
	                                Input({id: "disabledhorizontal", disabled: true, type: "text", placeholder: "Disabled"})
	                              )
	                            ),
	                            FormGroup(null,
	                              Label({control: true, sm: 3, htmlFor: "readonlyhorizontal"}, "Read only"),
	                              Col({sm: 9},
	                                Input({id: "readonlyhorizontal", readOnly: true, type: "text", placeholder: "Read only"})
	                              )
	                            ),
	                            FormGroup(null,
	                              Label({control: true, sm: 3, htmlFor: "dropdownselecthorizontal"}, "Dropdown Select"),
	                              Col({sm: 9},
	                                Select({id: "dropdownselecthorizontal", defaultValue: "1"},
	                                  React.DOM.option({value: "1"}, "Option 1"),
	                                  React.DOM.option({value: "2"}, "Option 2"),
	                                  React.DOM.option({value: "3"}, "Option 3"),
	                                  React.DOM.option({value: "4"}, "Option 4"),
	                                  React.DOM.option({value: "5"}, "Option 5")
	                                )
	                              )
	                            ),
	                            FormGroup(null,
	                              Label({control: true, sm: 3, htmlFor: "multiselecthorizontal"}, "Multiple Select"),
	                              Col({sm: 9},
	                                Select({id: "multiselecthorizontal", multiple: true},
	                                  React.DOM.option({value: "1"}, "Option 1"),
	                                  React.DOM.option({value: "2"}, "Option 2"),
	                                  React.DOM.option({value: "3"}, "Option 3"),
	                                  React.DOM.option({value: "4"}, "Option 4"),
	                                  React.DOM.option({value: "5"}, "Option 5")
	                                )
	                              )
	                            ),
	                            FormGroup(null,
	                              Label({control: true, sm: 3, htmlFor: "textareahorizontal"}, "Textarea"),
	                              Col({sm: 9},
	                                Textarea({id: "textareahorizontal", rows: "3", placeholder: "Some text here..."})
	                              )
	                            ),
	                            FormGroup(null,
	                              Label({control: true, sm: 3, htmlFor: "fileinputhorizontal"}, "File input"),
	                              Col({sm: 9},
	                                Input({id: "fileinputhorizontal", type: "file"}),
	                                HelpBlock(null, "some help text here.")
	                              )
	                            ),
	                            FormGroup(null,
	                              Label({control: true, sm: 3}, "Checkboxes"),
	                              Col({sm: 9},
	                                Checkbox({value: "option1", name: "horizontal-checkbox-options"},
	                                  "Option one is great"
	                                ),
	                                Checkbox({value: "option2", defaultChecked: true, name: "horizontal-checkbox-options"},
	                                  "Option two is checked"
	                                ),
	                                Checkbox({value: "option3", disabled: true, name: "horizontal-checkbox-options"},
	                                  "Option three is disabled"
	                                )
	                              ),
	                              React.DOM.hr(null)
	                            ),
	                            FormGroup(null,
	                              Label({control: true, sm: 3}, "Inline checkboxes"),
	                              Col({sm: 9},
	                                React.DOM.div(null,
	                                  Checkbox({inline: true, value: "option1", name: "horizontal-inline-checkbox-options"},
	                                    "Option 1"
	                                  ),
	                                  Checkbox({inline: true, value: "option2", defaultChecked: true, name: "horizontal-inline-checkbox-options"},
	                                    "Option 2"
	                                  ),
	                                  Checkbox({inline: true, value: "option3", disabled: true, name: "horizontal-inline-checkbox-options"},
	                                    "Disabled"
	                                  )
	                                )
	                              )
	                            ),
	                            FormGroup(null,
	                              Label({control: true, sm: 3}, "Radios"),
	                              Col({sm: 9},
	                                Radio({value: "option1", defaultChecked: true, name: "horizontal-radio-options"},
	                                  "Option 1"
	                                ),
	                                Radio({value: "option2", name: "horizontal-radio-options"},
	                                  "Option 2"
	                                ),
	                                Radio({value: "option3", disabled: true, name: "horizontal-radio-options"},
	                                  "Option disabled"
	                                )
	                              ),
	                              React.DOM.hr(null)
	                            ),
	                            FormGroup(null,
	                              Label({control: true, sm: 3}, "Inline radios"),
	                              Col({sm: 9},
	                                React.DOM.div(null,
	                                  Radio({inline: true, value: "option1", name: "horizontal-inline-radio-options"},
	                                    "Option 1"
	                                  ),
	                                  Radio({inline: true, value: "option2", defaultChecked: true, name: "horizontal-inline-radio-options"},
	                                    "Option 2"
	                                  ),
	                                  Radio({inline: true, value: "option3", disabled: true, name: "horizontal-inline-radio-options"},
	                                    "Disabled"
	                                  )
	                                )
	                              )
	                            )
	                          )
	                        )
	                      )
	                    )
	                  ),
	                  PanelFooter({className: "bg-blue text-right"},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.br(null),
	                          React.DOM.div(null,
	                            Button({outlined: true, bsStyle: "lightblue"}, "cancel"), ' ',
	                            Button({outlined: true, bsStyle: "lightblue"}, "submit")
	                          ),
	                          React.DOM.br(null)
	                        )
	                      )
	                    )
	                  )
	                )
	              ),
	              PanelContainer({noOverflow: true, controlStyles: "bg-purple fg-white"},
	                PanelHeader({className: "bg-purple fg-white"},
	                  Grid(null,
	                    Row(null,
	                      Col({xs: 12},
	                        React.DOM.h3(null, "Horizontal form: Sizing")
	                      )
	                    )
	                  )
	                ),
	                PanelBody(null,
	                  Grid(null,
	                    Row(null,
	                      Col({xs: 12},
	                        Form({horizontal: true},
	                          FormGroup(null,
	                            Label({htmlFor: "largeinput", sm: 3, control: true}, "Large input"),
	                            Col({sm: 9},
	                              Input({id: "largeinput", placeholder: "Large input", lg: true})
	                            )
	                          ),
	                          FormGroup(null,
	                            Label({htmlFor: "defaultinput", sm: 3, control: true}, "Default input"),
	                            Col({sm: 9},
	                              Input({id: "defaultinput", placeholder: "Default input"})
	                            )
	                          ),
	                          FormGroup(null,
	                            Label({htmlFor: "smallinput", sm: 3, control: true}, "Small input"),
	                            Col({sm: 9},
	                              Input({id: "smallinput", placeholder: "Small input", sm: true})
	                            )
	                          ),
	                          FormGroup(null,
	                            Label({htmlFor: "largeselect", sm: 3, control: true}, "Large select"),
	                            Col({sm: 9},
	                              Select({id: "largeselect", lg: true},
	                                React.DOM.option(null, "1"),
	                                React.DOM.option(null, "2"),
	                                React.DOM.option(null, "3"),
	                                React.DOM.option(null, "4"),
	                                React.DOM.option(null, "5")
	                              )
	                            )
	                          ),
	                          FormGroup(null,
	                            Label({htmlFor: "defaultselect", sm: 3, control: true}, "Default select"),
	                            Col({sm: 9},
	                              Select({id: "defaultselect"},
	                                React.DOM.option(null, "1"),
	                                React.DOM.option(null, "2"),
	                                React.DOM.option(null, "3"),
	                                React.DOM.option(null, "4"),
	                                React.DOM.option(null, "5")
	                              )
	                            )
	                          ),
	                          FormGroup(null,
	                            Label({htmlFor: "smallselect", sm: 3, control: true}, "Small input"),
	                            Col({sm: 9},
	                              Select({id: "smallselect", sm: true},
	                                React.DOM.option(null, "1"),
	                                React.DOM.option(null, "2"),
	                                React.DOM.option(null, "3"),
	                                React.DOM.option(null, "4"),
	                                React.DOM.option(null, "5")
	                              )
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                ),
	                PanelFooter({className: "bg-purple text-right"},
	                  Grid(null,
	                    Row(null,
	                      Col({xs: 12},
	                        React.DOM.br(null),
	                        React.DOM.div(null,
	                          Button({outlined: true, bsStyle: "lightpurple"}, "cancel"), ' ',
	                          Button({outlined: true, bsStyle: "lightpurple"}, "submit")
	                        ),
	                        React.DOM.br(null)
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ),
	        this.props.children
	      )
	    );
	  }
	});

	var classSet = React.addons.classSet;
	var Forms = React.createClass({displayName: 'Forms',
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = classSet({
	      'container-open': this.state.open
	    });
	    return (
	      Container({id: "container", className: classes},
	        Sidebar(null),
	        Header(null),
	        Body(null,
	          Footer(null)
	        )
	      )
	    );
	  }
	});

	module.exports = Forms;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(50);
	var Sidebar = __webpack_require__(51);
	var Footer = __webpack_require__(52);

	var Body = React.createClass({displayName: 'Body',
	  mixins: [RoutingContextMixin],
	  statics: {
	    counter: 0,
	    getCounter: function() {
	      return 'counter-' + ++Body.counter;
	    }
	  },
	  getInitialState: function() {
	    return {
	      mode: 'popup',
	      refresh: Body.getCounter() // used to redraw the component
	    };
	  },
	  renderEditable: function() {
	    $('.xeditable').editable({
	      mode: this.state.mode
	    });

	    $('#firstname').editable({
	      validate: function(value) {
	        if($.trim(value) == '') return 'This field is required';
	      }
	    });

	    $('#sex').editable({
	      mode: this.state.mode,
	      prepend: 'not selected',
	      source: [
	        {value: 1, text: 'Male'},
	        {value: 2, text: 'Female'}
	      ],
	      display: function(value, sourceData) {
	        var colors = {'': 'gray', 1: 'green', 2: 'blue'},
	            elem = $.grep(sourceData, function(o){return o.value == value;});

	        if(elem.length) {
	          $(this).text(elem[0].text).css('color', colors[value]);
	        } else {
	          $(this).empty();
	        }
	      }
	    });

	    $('#status').editable({
	      mode: this.state.mode
	    });

	    $('#group').editable({
	      mode: this.state.mode,
	      showbuttons: false
	    });

	    $('#event').editable({
	      placement: 'left',
	      mode: this.state.mode,
	      combodate: {
	        firstItem: 'name'
	      }
	    });

	    $('#comments').editable({
	      mode: this.state.mode,
	      showbuttons: 'bottom'
	    });

	    $('#state2').editable({
	      mode: this.state.mode,
	      value: 'California',
	      typeahead: {
	        name: 'state',
	        local: ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Dakota','North Carolina','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']
	      }
	    });

	    $('#fruits').editable({
	      mode: this.state.mode,
	      pk: 1,
	      limit: 3,
	      source: [
	        {value: 1, text: 'banana'},
	        {value: 2, text: 'peach'},
	        {value: 3, text: 'apple'},
	        {value: 4, text: 'watermelon'},
	        {value: 5, text: 'orange'}
	      ]
	     });

	    $('#tags').editable({
	      mode: this.state.mode,
	      inputclass: 'input-large',
	      select2: {
	        tags: ['html', 'javascript', 'css', 'ajax'],
	        tokenSeparators: [',', ' ']
	      }
	    });

	    var countries = [];
	    $.each({"BD": "Bangladesh", "BE": "Belgium", "BF": "Burkina Faso", "BG": "Bulgaria", "BA": "Bosnia and Herzegovina", "BB": "Barbados", "WF": "Wallis and Futuna", "BL": "Saint Bartelemey", "BM": "Bermuda", "BN": "Brunei Darussalam", "BO": "Bolivia", "BH": "Bahrain", "BI": "Burundi", "BJ": "Benin", "BT": "Bhutan", "JM": "Jamaica", "BV": "Bouvet Island", "BW": "Botswana", "WS": "Samoa", "BR": "Brazil", "BS": "Bahamas", "JE": "Jersey", "BY": "Belarus", "O1": "Other Country", "LV": "Latvia", "RW": "Rwanda", "RS": "Serbia", "TL": "Timor-Leste", "RE": "Reunion", "LU": "Luxembourg", "TJ": "Tajikistan", "RO": "Romania", "PG": "Papua New Guinea", "GW": "Guinea-Bissau", "GU": "Guam", "GT": "Guatemala", "GS": "South Georgia and the South Sandwich Islands", "GR": "Greece", "GQ": "Equatorial Guinea", "GP": "Guadeloupe", "JP": "Japan", "GY": "Guyana", "GG": "Guernsey", "GF": "French Guiana", "GE": "Georgia", "GD": "Grenada", "GB": "United Kingdom", "GA": "Gabon", "SV": "El Salvador", "GN": "Guinea", "GM": "Gambia", "GL": "Greenland", "GI": "Gibraltar", "GH": "Ghana", "OM": "Oman", "TN": "Tunisia", "JO": "Jordan", "HR": "Croatia", "HT": "Haiti", "HU": "Hungary", "HK": "Hong Kong", "HN": "Honduras", "HM": "Heard Island and McDonald Islands", "VE": "Venezuela", "PR": "Puerto Rico", "PS": "Palestinian Territory", "PW": "Palau", "PT": "Portugal", "SJ": "Svalbard and Jan Mayen", "PY": "Paraguay", "IQ": "Iraq", "PA": "Panama", "PF": "French Polynesia", "BZ": "Belize", "PE": "Peru", "PK": "Pakistan", "PH": "Philippines", "PN": "Pitcairn", "TM": "Turkmenistan", "PL": "Poland", "PM": "Saint Pierre and Miquelon", "ZM": "Zambia", "EH": "Western Sahara", "RU": "Russian Federation", "EE": "Estonia", "EG": "Egypt", "TK": "Tokelau", "ZA": "South Africa", "EC": "Ecuador", "IT": "Italy", "VN": "Vietnam", "SB": "Solomon Islands", "EU": "Europe", "ET": "Ethiopia", "SO": "Somalia", "ZW": "Zimbabwe", "SA": "Saudi Arabia", "ES": "Spain", "ER": "Eritrea", "ME": "Montenegro", "MD": "Moldova, Republic of", "MG": "Madagascar", "MF": "Saint Martin", "MA": "Morocco", "MC": "Monaco", "UZ": "Uzbekistan", "MM": "Myanmar", "ML": "Mali", "MO": "Macao", "MN": "Mongolia", "MH": "Marshall Islands", "MK": "Macedonia", "MU": "Mauritius", "MT": "Malta", "MW": "Malawi", "MV": "Maldives", "MQ": "Martinique", "MP": "Northern Mariana Islands", "MS": "Montserrat", "MR": "Mauritania", "IM": "Isle of Man", "UG": "Uganda", "TZ": "Tanzania, United Republic of", "MY": "Malaysia", "MX": "Mexico", "IL": "Israel", "FR": "France", "IO": "British Indian Ocean Territory", "FX": "France, Metropolitan", "SH": "Saint Helena", "FI": "Finland", "FJ": "Fiji", "FK": "Falkland Islands (Malvinas)", "FM": "Micronesia, Federated States of", "FO": "Faroe Islands", "NI": "Nicaragua", "NL": "Netherlands", "NO": "Norway", "NA": "Namibia", "VU": "Vanuatu", "NC": "New Caledonia", "NE": "Niger", "NF": "Norfolk Island", "NG": "Nigeria", "NZ": "New Zealand", "NP": "Nepal", "NR": "Nauru", "NU": "Niue", "CK": "Cook Islands", "CI": "Cote d'Ivoire", "CH": "Switzerland", "CO": "Colombia", "CN": "China", "CM": "Cameroon", "CL": "Chile", "CC": "Cocos (Keeling) Islands", "CA": "Canada", "CG": "Congo", "CF": "Central African Republic", "CD": "Congo, The Democratic Republic of the", "CZ": "Czech Republic", "CY": "Cyprus", "CX": "Christmas Island", "CR": "Costa Rica", "CV": "Cape Verde", "CU": "Cuba", "SZ": "Swaziland", "SY": "Syrian Arab Republic", "KG": "Kyrgyzstan", "KE": "Kenya", "SR": "Suriname", "KI": "Kiribati", "KH": "Cambodia", "KN": "Saint Kitts and Nevis", "KM": "Comoros", "ST": "Sao Tome and Principe", "SK": "Slovakia", "KR": "Korea, Republic of", "SI": "Slovenia", "KP": "Korea, Democratic People's Republic of", "KW": "Kuwait", "SN": "Senegal", "SM": "San Marino", "SL": "Sierra Leone", "SC": "Seychelles", "KZ": "Kazakhstan", "KY": "Cayman Islands", "SG": "Singapore", "SE": "Sweden", "SD": "Sudan", "DO": "Dominican Republic", "DM": "Dominica", "DJ": "Djibouti", "DK": "Denmark", "VG": "Virgin Islands, British", "DE": "Germany", "YE": "Yemen", "DZ": "Algeria", "US": "United States", "UY": "Uruguay", "YT": "Mayotte", "UM": "United States Minor Outlying Islands", "LB": "Lebanon", "LC": "Saint Lucia", "LA": "Lao People's Democratic Republic", "TV": "Tuvalu", "TW": "Taiwan", "TT": "Trinidad and Tobago", "TR": "Turkey", "LK": "Sri Lanka", "LI": "Liechtenstein", "A1": "Anonymous Proxy", "TO": "Tonga", "LT": "Lithuania", "A2": "Satellite Provider", "LR": "Liberia", "LS": "Lesotho", "TH": "Thailand", "TF": "French Southern Territories", "TG": "Togo", "TD": "Chad", "TC": "Turks and Caicos Islands", "LY": "Libyan Arab Jamahiriya", "VA": "Holy See (Vatican City State)", "VC": "Saint Vincent and the Grenadines", "AE": "United Arab Emirates", "AD": "Andorra", "AG": "Antigua and Barbuda", "AF": "Afghanistan", "AI": "Anguilla", "VI": "Virgin Islands, U.S.", "IS": "Iceland", "IR": "Iran, Islamic Republic of", "AM": "Armenia", "AL": "Albania", "AO": "Angola", "AN": "Netherlands Antilles", "AQ": "Antarctica", "AP": "Asia/Pacific Region", "AS": "American Samoa", "AR": "Argentina", "AU": "Australia", "AT": "Austria", "AW": "Aruba", "IN": "India", "AX": "Aland Islands", "AZ": "Azerbaijan", "IE": "Ireland", "ID": "Indonesia", "UA": "Ukraine", "QA": "Qatar", "MZ": "Mozambique"}, function(k, v) {
	        countries.push({id: k, text: v});
	    });
	    $('#country').editable({
	      mode: this.state.mode,
	      source: countries,
	      select2: {
	        width: 200,
	        placeholder: 'Select country',
	        allowClear: true
	      }
	    });

	    $('#address').editable({
	      mode: this.state.mode,
	      url: '/xeditable/address',
	      value: {
	        city: 'Moscow',
	        street: 'Lenina',
	        building: '12'
	      },
	      validate: function(value) {
	        if(value.city == '') return 'city is required!';
	      },
	      display: function(value) {
	        if(!value) {
	          $(this).empty();
	          return;
	        }
	        var html = '<b>' + $('<div>').text(value.city).html() + '</b>, ' + $('<div>').text(value.street).html() + ' st., bld. ' + $('<div>').text(value.building).html();
	        $(this).html(html);
	      }
	    });

	    var self = this;
	    $('#user .editable').on('hidden', function(e, reason){
	      if(reason === 'save' || reason === 'nochange') {
	        var $next = $(this).closest('tr').next().find('.editable');
	        if(self.refs.autoopen.isChecked()) {
	          setTimeout(function() {
	            $next.editable('show');
	          }, 300);
	        } else {
	          $next.focus();
	        }
	      }
	    });
	  },
	  handleModeChange: function(mode, e) {
	    e.stopPropagation();
	    this.setState({mode: mode, refresh: Body.getCounter()}, this.renderEditable);
	  },
	  toggleEditable: function() {
	    $('#user .editable').editable('toggleDisabled');
	  },
	  componentDidMount: function() {
	    this.renderEditable();
	  },
	  render: function() {
	    return (
	      Container({id: "body"},
	        Grid(null,
	          Row(null,
	            Col({xs: 12},
	              PanelContainer({noOverflow: true, controlStyles: "bg-orange75 fg-white"},
	                Panel(null,
	                  PanelHeader({className: "bg-orange75 fg-white", style: {margin: 0}},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h3(null, "X-Editable")
	                        )
	                      )
	                    )
	                  ),
	                  PanelBody({style: {padding: 25}},
	                    Form({horizontal: true},
	                      FormGroup(null,
	                        Grid(null,
	                          Row(null,
	                            Col({xs: 6},
	                              Label(null, "Change mode:"), ' ',
	                              Radio({inline: true, defaultChecked: true, name: "mode", value: "popover", onChange: this.handleModeChange.bind(this, 'popover')}, "Popover"),
	                              Radio({inline: true, name: "mode", value: "inline", onChange: this.handleModeChange.bind(this, 'inline')}, "Inline")
	                            ),
	                            Col({xs: 6, className: "text-right"},
	                              Checkbox({inline: true, ref: "autoopen"}, React.DOM.strong(null, "Auto-open next field")),
	                              React.DOM.span({style: {marginLeft: 10, marginRight: 10}}),
	                              Button({outlined: true, bsStyle: "green", onClick: this.toggleEditable}, "Enable/Disable")
	                            )
	                          )
	                        )
	                      )
	                    ),
	                    Table({striped: true, bordered: true, id: "user", style: {margin: 0}},
	                      React.DOM.tbody(null,
	                        React.DOM.tr(null,
	                          React.DOM.td({style: {width: 300}}, "Simple text field"),
	                          React.DOM.td(null,
	                            Link({href: "#", key: this.state.refresh, className: "xeditable", 'data-type': "text", 'data-title': "Enter username"}, "superuser")
	                          )
	                        ),
	                        React.DOM.tr(null,
	                          React.DOM.td(null, "Empty text field, required"),
	                          React.DOM.td(null,
	                            Link({href: "#", key: this.state.refresh, className: "xeditable", id: "firstname", 'data-type': "text", 'data-placeholder': "Required", 'data-pk': "1", 'data-title': "Enter firstname"})
	                          )
	                        ),
	                        React.DOM.tr(null,
	                          React.DOM.td(null, "Select, local array, custom display"),
	                          React.DOM.td(null,
	                            Link({href: "#", key: this.state.refresh, id: "sex", 'data-type': "select", 'data-placeholder': "Required", 'data-pk': "1", 'data-title': "Select sex", 'data-value': ""})
	                          )
	                        ),
	                        React.DOM.tr(null,
	                          React.DOM.td(null, "Select, remote array, no buttons ", React.DOM.strong(null, "(AJAX example)")),
	                          React.DOM.td(null,
	                            Link({href: "#", key: this.state.refresh, id: "group", 'data-type': "select", 'data-source': "/xeditable/groups", 'data-placeholder': "Required", 'data-pk': "1", 'data-title': "Select group", 'data-value': "5"}, "Admin")
	                          )
	                        ),
	                        React.DOM.tr(null,
	                          React.DOM.td(null, "Select, error while loading"),
	                          React.DOM.td(null,
	                            Link({href: "#", key: this.state.refresh, id: "status", 'data-type': "select", 'data-source': "/xeditable/status", 'data-placeholder': "Required", 'data-pk': "1", 'data-title': "Select status", 'data-value': "0"}, "Active")
	                          )
	                        ),
	                        React.DOM.tr(null,
	                          React.DOM.td(null, "Combodate (date)"),
	                          React.DOM.td(null,
	                            Link({href: "#", key: this.state.refresh, id: "dob", className: "xeditable", 'data-type': "combodate", 'data-placeholder': "Required", 'data-pk': "1", 'data-title': "Select Date of birth", 'data-value': "1984-05-15", 'data-format': "YYYY-MM-DD", 'data-viewformat': "DD/MM/YYYY", 'data-template': "D / MM / YYYY"})
	                          )
	                        ),
	                        React.DOM.tr(null,
	                          React.DOM.td(null, "Combodate (datetime)"),
	                          React.DOM.td(null,
	                            Link({href: "#", key: this.state.refresh, id: "event", 'data-type': "combodate", 'data-template': "D MMM YYYY  HH:mm", 'data-format': "YYYY-MM-DD HH:mm", 'data-viewformat': "MMM D, YYYY, HH:mm", 'data-pk': "1", 'data-title': "Setup event date and time"})
	                          )
	                        ),
	                        React.DOM.tr(null,
	                          React.DOM.td(null, "Textarea, buttons below. Submit by ", React.DOM.em(null, "ctrl+enter")),
	                          React.DOM.td(null,
	                            Link({href: "#", key: this.state.refresh, id: "comments", 'data-type': "textarea", 'data-pk': "1", 'data-placeholder': "Your comments here...", 'data-title': "Enter comments"}, "awesome user!")
	                          )
	                        ),
	                        React.DOM.tr(null,
	                          React.DOM.td(null, "Twitter typeahead.js"),
	                          React.DOM.td(null,
	                            Link({href: "#", key: this.state.refresh, id: "state2", 'data-type': "typeaheadjs", 'data-pk': "1", 'data-title': "Start typing State.."})
	                          )
	                        ),
	                        React.DOM.tr(null,
	                          React.DOM.td(null, "Checklist"),
	                          React.DOM.td(null,
	                            Link({href: "#", key: this.state.refresh, id: "fruits", 'data-type': "checklist", 'data-value': "2,3", 'data-title': "Select fruits"})
	                          )
	                        ),
	                        React.DOM.tr(null,
	                          React.DOM.td(null, "Select2 (tags mode)"),
	                          React.DOM.td(null,
	                            Link({href: "#", key: this.state.refresh, id: "tags", 'data-type': "select2", 'data-placement': "left", 'data-pk': "1", 'data-title': "Enter tags"}, "html, javascript")
	                          )
	                        ),
	                        React.DOM.tr(null,
	                          React.DOM.td(null, "Select2 (dropdown mode)"),
	                          React.DOM.td(null,
	                            Link({href: "#", key: this.state.refresh, id: "country", 'data-type': "select2", 'data-pk': "1", 'data-value': "BS", 'data-title': "Select country"})
	                          )
	                        ),
	                        React.DOM.tr(null,
	                          React.DOM.td(null, "Custom input, several fields"),
	                          React.DOM.td(null,
	                            Link({href: "#", key: this.state.refresh, id: "address", 'data-type': "address", 'data-pk': "1", 'data-title': "Please, fill address"})
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ),
	        this.props.children
	      )
	    );
	  }
	});

	var classSet = React.addons.classSet;
	var Xeditable = React.createClass({displayName: 'Xeditable',
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = classSet({
	      'container-open': this.state.open
	    });
	    return (
	      Container({id: "container", className: classes},
	        Sidebar(null),
	        Header(null),
	        Body(null,
	          Footer(null)
	        )
	      )
	    );
	  }
	});

	module.exports = Xeditable;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(50);
	var Sidebar = __webpack_require__(51);
	var Footer = __webpack_require__(52);

	var ReactStyle = __webpack_require__(67);

	var Body = React.createClass({displayName: 'Body',
	  createStep: function(e) {
	    e.preventDefault();
	    e.stopPropagation();
	    var data = $(e.target).serializeObject();
	    if(!data.title.length) {
	      alert('Title required!');
	      return;
	    }
	    if(!data.content.length) {
	      alert('Content required');
	      return;
	    }
	    $('#wizard-3').steps('add', { title: data.title, content: data.content });
	    $('#create-step').find('input:visible').eq(0).focus();
	  },
	  insertStep: function(e) {
	    e.preventDefault();
	    e.stopPropagation();
	    var data = $(e.target).serializeObject();
	    if(!data.position.length) {
	      alert('Position required!');
	      return;
	    }
	    if(!data.title.length) {
	      alert('Title required!');
	      return;
	    }
	    if(!data.content.length) {
	      alert('Content required');
	      return;
	    }
	    $('#wizard-3').steps('insert', Number(data.position), { title: data.title, content: data.content });
	    $('#insert-step').find('input:visible').eq(0).focus();
	  },
	  removeStep: function(e) {
	    e.preventDefault();
	    e.stopPropagation();
	    var data = $(e.target).serializeObject();
	    if(!data.position.length) {
	      alert('Position required!');
	      return;
	    }
	    $('#wizard-3').steps('remove', Number(data.position));
	    $('#remove-step').find('input:visible').eq(0).focus();
	  },
	  componentWillMount: function() {
	    var isLtr = $('html').attr('dir') === 'ltr';
	    var styles = {};

	    if(isLtr) {
	      styles['#wizard-2 .form-border'] = {
	        borderRight: '1px solid #ddd'
	      };
	    } else {
	      styles['#wizard-2 .form-border'] = {
	        borderLeft: '1px solid #ddd'
	      };
	    }

	    ReactStyle.addRules(ReactStyle.create(styles));
	  },
	  componentDidMount: function() {
	    $('#wizard-1').steps({
	      autoFocus: true
	    });

	    $("#form-2").validate({
	      rules: {
	        confirm_password: {
	          equalTo: "#password"
	        }
	      }
	    });

	    $('#wizard-2').steps({
	      onStepChanging: function (event, currentIndex, newIndex) {
	        $('#form-2').validate().settings.ignore = ':disabled,:hidden';
	        return $('#form-2').valid();
	      },
	      onFinishing: function (event, currentIndex) {
	        $('#form-2').validate().settings.ignore = ':disabled';
	        return $('#form-2').valid();
	      },
	      onFinished: function (event, currentIndex) {
	        alert('Submitted!');
	      }
	    });

	    $('#wizard-3').steps({
	      enableAllSteps: true,
	      enablePagination: false
	    });

	    $('#wizard-4').steps({
	      stepsOrientation: "vertical"
	    });

	    $('#create-step').bind('submit', this.createStep);
	    $('#insert-step').bind('submit', this.insertStep);
	    $('#remove-step').bind('submit', this.removeStep);
	  },
	  componentWillUnmount: function() {
	    $('#create-step').unbind('submit', this.createStep);
	    $('#insert-step').unbind('submit', this.insertStep);
	    $('#remove-step').unbind('submit', this.removeStep);
	  },
	  render: function() {
	    return (
	      Container({id: "body"},
	        Grid(null,
	          Row(null,
	            Col({xs: 12},
	              PanelContainer({noOverflow: true, controlStyles: "bg-darkgreen45 fg-white"},
	                Panel(null,
	                  PanelHeader({className: "bg-darkgreen45 fg-white", style: {margin: 0}},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h3(null, "jQuery Steps: Basic example")
	                        )
	                      )
	                    )
	                  ),
	                  PanelBody(null,
	                    React.DOM.div({id: "wizard-1"},
	                      React.DOM.h1(null, "First Step"),
	                      React.DOM.div(null, LoremIpsum({query: "5s"})),

	                      React.DOM.h1(null, "Second Step"),
	                      React.DOM.div(null, LoremIpsum({query: "5s"}))
	                    )
	                  )
	                )
	              ),
	              PanelContainer({noOverflow: true, controlStyles: "bg-pink fg-white"},
	                Panel(null,
	                  PanelHeader({className: "bg-pink fg-white", style: {margin: 0}},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h3(null, "jQuery Steps: Basic form example with Validation")
	                        )
	                      )
	                    )
	                  ),
	                  PanelBody(null,
	                    Form({id: "form-2"},
	                      React.DOM.div({id: "wizard-2"},
	                        React.DOM.h1(null, "Account"),
	                        React.DOM.div(null,
	                          Grid(null,
	                            Row(null,
	                              Col({sm: 4, xs: 12, collapseLeft: true, xsOnlyCollapseRight: true},
	                                FormGroup(null,
	                                  Label({htmlFor: "username"}, "User name *"),
	                                  Input({type: "text", id: "username", name: "username", className: "required"})
	                                ),
	                                FormGroup(null,
	                                  Label({htmlFor: "password"}, "Password *"),
	                                  Input({type: "password", id: "password", name: "password", className: "required"})
	                                ),
	                                FormGroup(null,
	                                  Label({htmlFor: "confirm_password"}, "Confirm password *"),
	                                  Input({type: "password", id: "confirm_password", name: "confirm_password", className: "required"})
	                                )
	                              ),
	                              Col({sm: 4, xs: 6, collapseLeft: true, className: "form-border"},
	                                FormGroup(null,
	                                  Label({htmlFor: "comment"}, "Your comment *"),
	                                  Textarea({rows: "4", id: "comment", name: "comment", className: "required"})
	                                ),
	                                FormGroup(null,
	                                  Label({htmlFor: "username"}, "E-mail *"),
	                                  Input({type: "email", id: "email", name: "email", className: "required"})
	                                )
	                              ),
	                              Col({sm: 4, xs: 6, collapseRight: true},
	                                React.DOM.p(null,
	                                  "All fields marked (*) are Mandatory."
	                                )
	                              )
	                            )
	                          )
	                        ),

	                        React.DOM.h1(null, "Terms and Conditions"),
	                        React.DOM.div(null,
	                          React.DOM.div({className: "terms"},
	                            React.DOM.h3(null, "Terms and Conditions"),
	                            LoremIpsum({query: "5p"})
	                          ),
	                          Checkbox({id: "agreetoterms", name: "agreetoterms", className: "required"}, "I agree to the Terms and Conditions")
	                        )
	                      )
	                    )
	                  )
	                )
	              ),
	              PanelContainer({noOverflow: true, controlStyles: "bg-orange75 fg-white"},
	                Panel(null,
	                  PanelHeader({className: "bg-orange75 fg-white", style: {margin: 0}},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h3(null, "jQuery Steps: Dynamic Manipulation Example")
	                        )
	                      )
	                    )
	                  ),
	                  PanelBody(null,
	                    React.DOM.div({id: "wizard-3"},
	                      React.DOM.h1(null, "Create step"),
	                      React.DOM.div(null,
	                        Form({id: "create-step"},
	                          FormGroup(null,
	                            Label({htmlFor: "add-title"}, "Tab Title *"),
	                            Input({type: "text", name: "title", id: "add-title"})
	                          ),
	                          FormGroup(null,
	                            Label({htmlFor: "add-content"}, "Tab Content *"),
	                            Textarea({id: "add-content", name: "content", rows: "5"})
	                          ),
	                          FormGroup(null,
	                            Button({type: "submit", bsStyle: "darkgreen45", outlined: true}, "create step")
	                          )
	                        )
	                      ),

	                      React.DOM.h1(null, "Insert step"),
	                      React.DOM.div(null,
	                        Form({id: "insert-step"},
	                          FormGroup(null,
	                            Label({htmlFor: "insert-position"}, "Position (zero-based) *"),
	                            Input({type: "text", name: "position", id: "insert-position"})
	                          ),
	                          FormGroup(null,
	                            Label({htmlFor: "insert-title"}, "Tab Title *"),
	                            Input({type: "text", name: "title", id: "insert-title"})
	                          ),
	                          FormGroup(null,
	                            Label({htmlFor: "insert-content"}, "Tab Content *"),
	                            Textarea({id: "insert-content", name: "content", rows: "5"})
	                          ),
	                          FormGroup(null,
	                            Button({type: "submit", bsStyle: "darkgreen45", outlined: true}, "insert step")
	                          )
	                        )
	                      ),

	                      React.DOM.h1(null, "Remove step"),
	                      React.DOM.div(null,
	                        Form({id: "remove-step"},
	                          FormGroup(null,
	                            Label({htmlFor: "remove-position"}, "Position (zero-based) *"),
	                            Input({type: "text", name: "position", id: "remove-position"})
	                          ),
	                          FormGroup(null,
	                            Button({type: "submit", bsStyle: "darkgreen45", outlined: true}, "remove step")
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              ),
	              PanelContainer({noOverflow: true, controlStyles: "bg-darkblue fg-white"},
	                Panel(null,
	                  PanelHeader({className: "bg-darkblue fg-white", style: {margin: 0}},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h3(null, "jQuery Steps: Vertical Steps Example")
	                        )
	                      )
	                    )
	                  ),
	                  PanelBody(null,
	                    React.DOM.div({id: "wizard-4"},
	                      React.DOM.h1(null, "Pane 1"),
	                      React.DOM.div(null,
	                        LoremIpsum({query: "5s"})
	                      ),

	                      React.DOM.h1(null, "Pane 2"),
	                      React.DOM.div(null,
	                        LoremIpsum({query: "5s"})
	                      ),

	                      React.DOM.h1(null, "Pane 3"),
	                      React.DOM.div(null,
	                        LoremIpsum({query: "5s"})
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ),
	        ReactStyle.renderToComponents(),
	        this.props.children
	      )
	    );
	  }
	});

	var classSet = React.addons.classSet;
	var Wizard = React.createClass({displayName: 'Wizard',
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = classSet({
	      'container-open': this.state.open
	    });
	    return (
	      Container({id: "container", className: classes},
	        Sidebar(null),
	        Header(null),
	        Body(null,
	          Footer(null)
	        )
	      )
	    );
	  }
	});

	module.exports = Wizard;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(50);
	var Sidebar = __webpack_require__(51);
	var Footer = __webpack_require__(52);

	var Body = React.createClass({displayName: 'Body',
	  render: function() {
	    return (
	      Container({id: "body"},
	        Grid(null,
	          Row(null,
	            Col({sm: 6, collapseRight: true},
	              PanelContainer(null,
	                Panel(null,
	                  PanelBody(null,
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h4({style: {marginTop: 0}}, "Regular table"),
	                          Table(null,
	                            React.DOM.thead(null,
	                              React.DOM.tr(null,
	                                React.DOM.th(null, "#"),
	                                React.DOM.th(null, "First Name"),
	                                React.DOM.th(null, "Last Name"),
	                                React.DOM.th(null, "Username")
	                              )
	                            ),
	                            React.DOM.tbody(null,
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "1"),
	                                React.DOM.td(null, "Mark"),
	                                React.DOM.td(null, "Otto"),
	                                React.DOM.td(null, "@mdo")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "2"),
	                                React.DOM.td(null, "Jacob"),
	                                React.DOM.td(null, "Thornton"),
	                                React.DOM.td(null, "@fat")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "3"),
	                                React.DOM.td(null, "Larry"),
	                                React.DOM.td(null, "the Bird"),
	                                React.DOM.td(null, "@twitter")
	                              )
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              ),
	              PanelContainer(null,
	                Panel(null,
	                  PanelBody(null,
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h4({style: {marginTop: 0}}, "Bordered table"),
	                          Table({bordered: true},
	                            React.DOM.thead(null,
	                              React.DOM.tr(null,
	                                React.DOM.th(null, "#"),
	                                React.DOM.th(null, "First Name"),
	                                React.DOM.th(null, "Last Name"),
	                                React.DOM.th(null, "Username")
	                              )
	                            ),
	                            React.DOM.tbody(null,
	                              React.DOM.tr(null,
	                                React.DOM.td({rowSpan: "2"}, "1"),
	                                React.DOM.td(null, "Mark"),
	                                React.DOM.td(null, "Otto"),
	                                React.DOM.td(null, "@mdo")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Mark"),
	                                React.DOM.td(null, "Otto"),
	                                React.DOM.td(null, "@TwBootstrap")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "2"),
	                                React.DOM.td(null, "Jacob"),
	                                React.DOM.td(null, "Thornton"),
	                                React.DOM.td(null, "@fat")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "3"),
	                                React.DOM.td(null, "Larry"),
	                                React.DOM.td(null, "the Bird"),
	                                React.DOM.td(null, "@twitter")
	                              )
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              ),
	              PanelContainer(null,
	                Panel(null,
	                  PanelBody(null,
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h4({style: {marginTop: 0}}, "Condensed table"),
	                          Table({condensed: true},
	                            React.DOM.thead(null,
	                              React.DOM.tr(null,
	                                React.DOM.th(null, "#"),
	                                React.DOM.th(null, "First Name"),
	                                React.DOM.th(null, "Last Name"),
	                                React.DOM.th(null, "Username")
	                              )
	                            ),
	                            React.DOM.tbody(null,
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "1"),
	                                React.DOM.td(null, "Mark"),
	                                React.DOM.td(null, "Otto"),
	                                React.DOM.td(null, "@mdo")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "2"),
	                                React.DOM.td(null, "Jacob"),
	                                React.DOM.td(null, "Thornton"),
	                                React.DOM.td(null, "@fat")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "3"),
	                                React.DOM.td(null, "Larry"),
	                                React.DOM.td(null, "the Bird"),
	                                React.DOM.td(null, "@twitter")
	                              )
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              ),
	              PanelContainer(null,
	                Panel(null,
	                  PanelBody(null,
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h4({style: {marginTop: 0}}, "Bordered, striped and condensed table"),
	                          Table({bordered: true, striped: true, condensed: true},
	                            React.DOM.thead(null,
	                              React.DOM.tr(null,
	                                React.DOM.th(null, "#"),
	                                React.DOM.th(null, "First Name"),
	                                React.DOM.th(null, "Last Name"),
	                                React.DOM.th(null, "Username")
	                              )
	                            ),
	                            React.DOM.tbody(null,
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "1"),
	                                React.DOM.td(null, "Mark"),
	                                React.DOM.td(null, "Otto"),
	                                React.DOM.td(null, "@mdo")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "2"),
	                                React.DOM.td(null, "Jacob"),
	                                React.DOM.td(null, "Thornton"),
	                                React.DOM.td(null, "@fat")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "3"),
	                                React.DOM.td(null, "Larry"),
	                                React.DOM.td(null, "the Bird"),
	                                React.DOM.td(null, "@twitter")
	                              )
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            ),
	            Col({sm: 6},
	              PanelContainer(null,
	                Panel(null,
	                  PanelBody(null,
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h4({style: {marginTop: 0}}, "Striped table"),
	                          Table({striped: true},
	                            React.DOM.thead(null,
	                              React.DOM.tr(null,
	                                React.DOM.th(null, "#"),
	                                React.DOM.th(null, "First Name"),
	                                React.DOM.th(null, "Last Name"),
	                                React.DOM.th(null, "Username")
	                              )
	                            ),
	                            React.DOM.tbody(null,
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "1"),
	                                React.DOM.td(null, "Mark"),
	                                React.DOM.td(null, "Otto"),
	                                React.DOM.td(null, "@mdo")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "2"),
	                                React.DOM.td(null, "Jacob"),
	                                React.DOM.td(null, "Thornton"),
	                                React.DOM.td(null, "@fat")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "3"),
	                                React.DOM.td(null, "Larry"),
	                                React.DOM.td(null, "the Bird"),
	                                React.DOM.td(null, "@twitter")
	                              )
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              ),
	              PanelContainer(null,
	                Panel(null,
	                  PanelBody(null,
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h4({style: {marginTop: 0}}, "Hover table"),
	                          Table({hover: true},
	                            React.DOM.thead(null,
	                              React.DOM.tr(null,
	                                React.DOM.th(null, "#"),
	                                React.DOM.th(null, "First Name"),
	                                React.DOM.th(null, "Last Name"),
	                                React.DOM.th(null, "Username")
	                              )
	                            ),
	                            React.DOM.tbody(null,
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "1"),
	                                React.DOM.td(null, "Mark"),
	                                React.DOM.td(null, "Otto"),
	                                React.DOM.td(null, "@mdo")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "2"),
	                                React.DOM.td(null, "Jacob"),
	                                React.DOM.td(null, "Thornton"),
	                                React.DOM.td(null, "@fat")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "3"),
	                                React.DOM.td(null, "Larry"),
	                                React.DOM.td(null, "the Bird"),
	                                React.DOM.td(null, "@twitter")
	                              )
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              ),
	              PanelContainer(null,
	                Panel(null,
	                  PanelBody(null,
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h4({style: {marginTop: 0}}, "Striped and colored table"),
	                          Table({striped: true},
	                            React.DOM.thead(null,
	                              React.DOM.tr(null,
	                                React.DOM.th(null, "#"),
	                                React.DOM.th(null, "Column heading"),
	                                React.DOM.th(null, "Column heading"),
	                                React.DOM.th(null, "Column heading")
	                              )
	                            ),
	                            React.DOM.tbody(null,
	                              React.DOM.tr({className: "active"},
	                                React.DOM.td(null, "1"),
	                                React.DOM.td(null, "Column content"),
	                                React.DOM.td(null, "Column content"),
	                                React.DOM.td(null, "Column content")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "2"),
	                                React.DOM.td(null, "Column content"),
	                                React.DOM.td(null, "Column content"),
	                                React.DOM.td(null, "Column content")
	                              ),
	                              React.DOM.tr({className: "success"},
	                                React.DOM.td(null, "3"),
	                                React.DOM.td(null, "Column content"),
	                                React.DOM.td(null, "Column content"),
	                                React.DOM.td(null, "Column content")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "Column content"),
	                                React.DOM.td(null, "Column content"),
	                                React.DOM.td(null, "Column content")
	                              ),
	                              React.DOM.tr({className: "info"},
	                                React.DOM.td(null, "5"),
	                                React.DOM.td(null, "Column content"),
	                                React.DOM.td(null, "Column content"),
	                                React.DOM.td(null, "Column content")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "6"),
	                                React.DOM.td(null, "Column content"),
	                                React.DOM.td(null, "Column content"),
	                                React.DOM.td(null, "Column content")
	                              ),
	                              React.DOM.tr({className: "warning"},
	                                React.DOM.td(null, "7"),
	                                React.DOM.td(null, "Column content"),
	                                React.DOM.td(null, "Column content"),
	                                React.DOM.td(null, "Column content")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "8"),
	                                React.DOM.td(null, "Column content"),
	                                React.DOM.td(null, "Column content"),
	                                React.DOM.td(null, "Column content")
	                              ),
	                              React.DOM.tr({className: "danger"},
	                                React.DOM.td(null, "9"),
	                                React.DOM.td(null, "Column content"),
	                                React.DOM.td(null, "Column content"),
	                                React.DOM.td(null, "Column content")
	                              )
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ),
	        Grid(null,
	          Row(null,
	            Col({xs: 12},
	              PanelContainer(null,
	                Panel(null,
	                  PanelBody(null,
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h4({style: {marginTop: 0}}, "Table bordered and responsive"),
	                          Table({bordered: true, responsive: true},
	                            React.DOM.thead(null,
	                              React.DOM.tr(null,
	                                React.DOM.th(null, "#"),
	                                React.DOM.th(null, "Table heading"),
	                                React.DOM.th(null, "Table heading"),
	                                React.DOM.th(null, "Table heading"),
	                                React.DOM.th(null, "Table heading"),
	                                React.DOM.th(null, "Table heading"),
	                                React.DOM.th(null, "Table heading")
	                              )
	                            ),
	                            React.DOM.tbody(null,
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "1"),
	                                React.DOM.td(null, "Table cell"),
	                                React.DOM.td(null, "Table cell"),
	                                React.DOM.td(null, "Table cell"),
	                                React.DOM.td(null, "Table cell"),
	                                React.DOM.td(null, "Table cell"),
	                                React.DOM.td(null, "Table cell")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "2"),
	                                React.DOM.td(null, "Table cell"),
	                                React.DOM.td(null, "Table cell"),
	                                React.DOM.td(null, "Table cell"),
	                                React.DOM.td(null, "Table cell"),
	                                React.DOM.td(null, "Table cell"),
	                                React.DOM.td(null, "Table cell")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "3"),
	                                React.DOM.td(null, "Table cell"),
	                                React.DOM.td(null, "Table cell"),
	                                React.DOM.td(null, "Table cell"),
	                                React.DOM.td(null, "Table cell"),
	                                React.DOM.td(null, "Table cell"),
	                                React.DOM.td(null, "Table cell")
	                              )
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ),
	        this.props.children
	      )
	    );
	  }
	});

	var classSet = React.addons.classSet;
	var BootstrapTables = React.createClass({displayName: 'BootstrapTables',
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = classSet({
	      'container-open': this.state.open
	    });
	    return (
	      Container({id: "container", className: classes},
	        Sidebar(null),
	        Header(null),
	        Body(null,
	          Footer(null)
	        )
	      )
	    );
	  }
	});

	module.exports = BootstrapTables;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(50);
	var Sidebar = __webpack_require__(51);
	var Footer = __webpack_require__(52);

	var Body = React.createClass({displayName: 'Body',
	  componentDidMount: function() {
	    $('#example')
	      .addClass('nowrap')
	      .dataTable({
	        responsive: true,
	        columnDefs: [
	          { targets: [-1, -3], className: 'dt-body-right' }
	        ]
	    });
	  },
	  render: function() {
	    return (
	      Container({id: "body"},
	        Grid(null,
	          Row(null,
	            Col({xs: 12},
	              PanelContainer(null,
	                Panel(null,
	                  PanelBody(null,
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          Table({id: "example", className: "display", cellSpacing: "0", width: "100%"},
	                            React.DOM.thead(null,
	                              React.DOM.tr(null,
	                                React.DOM.th(null, "Name"),
	                                React.DOM.th(null, "Position"),
	                                React.DOM.th(null, "Office"),
	                                React.DOM.th(null, "Age"),
	                                React.DOM.th(null, "Start date"),
	                                React.DOM.th(null, "Salary")
	                              )
	                            ),
	                            React.DOM.tfoot(null,
	                              React.DOM.tr(null,
	                                React.DOM.th(null, "Name"),
	                                React.DOM.th(null, "Position"),
	                                React.DOM.th(null, "Office"),
	                                React.DOM.th(null, "Age"),
	                                React.DOM.th(null, "Start date"),
	                                React.DOM.th(null, "Salary")
	                              )
	                            ),
	                            React.DOM.tbody(null,
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Tiger Nixon"),
	                                React.DOM.td(null, "System Architect"),
	                                React.DOM.td(null, "Edinburgh"),
	                                React.DOM.td(null, "61"),
	                                React.DOM.td(null, "2011/04/25"),
	                                React.DOM.td(null, "$320,800")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Garrett Winters"),
	                                React.DOM.td(null, "Accountant"),
	                                React.DOM.td(null, "Tokyo"),
	                                React.DOM.td(null, "63"),
	                                React.DOM.td(null, "2011/07/25"),
	                                React.DOM.td(null, "$170,750")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Ashton Cox"),
	                                React.DOM.td(null, "Junior Technical Author"),
	                                React.DOM.td(null, "San Francisco"),
	                                React.DOM.td(null, "66"),
	                                React.DOM.td(null, "2009/01/12"),
	                                React.DOM.td(null, "$86,000")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Cedric Kelly"),
	                                React.DOM.td(null, "Senior Javascript Developer"),
	                                React.DOM.td(null, "Edinburgh"),
	                                React.DOM.td(null, "22"),
	                                React.DOM.td(null, "2012/03/29"),
	                                React.DOM.td(null, "$433,060")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Airi Satou"),
	                                React.DOM.td(null, "Accountant"),
	                                React.DOM.td(null, "Tokyo"),
	                                React.DOM.td(null, "33"),
	                                React.DOM.td(null, "2008/11/28"),
	                                React.DOM.td(null, "$162,700")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Brielle Williamson"),
	                                React.DOM.td(null, "Integration Specialist"),
	                                React.DOM.td(null, "New York"),
	                                React.DOM.td(null, "61"),
	                                React.DOM.td(null, "2012/12/02"),
	                                React.DOM.td(null, "$372,000")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Herrod Chandler"),
	                                React.DOM.td(null, "Sales Assistant"),
	                                React.DOM.td(null, "San Francisco"),
	                                React.DOM.td(null, "59"),
	                                React.DOM.td(null, "2012/08/06"),
	                                React.DOM.td(null, "$137,500")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Rhona Davidson"),
	                                React.DOM.td(null, "Integration Specialist"),
	                                React.DOM.td(null, "Tokyo"),
	                                React.DOM.td(null, "55"),
	                                React.DOM.td(null, "2010/10/14"),
	                                React.DOM.td(null, "$327,900")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Colleen Hurst"),
	                                React.DOM.td(null, "Javascript Developer"),
	                                React.DOM.td(null, "San Francisco"),
	                                React.DOM.td(null, "39"),
	                                React.DOM.td(null, "2009/09/15"),
	                                React.DOM.td(null, "$205,500")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Sonya Frost"),
	                                React.DOM.td(null, "Software Engineer"),
	                                React.DOM.td(null, "Edinburgh"),
	                                React.DOM.td(null, "23"),
	                                React.DOM.td(null, "2008/12/13"),
	                                React.DOM.td(null, "$103,600")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Jena Gaines"),
	                                React.DOM.td(null, "Office Manager"),
	                                React.DOM.td(null, "London"),
	                                React.DOM.td(null, "30"),
	                                React.DOM.td(null, "2008/12/19"),
	                                React.DOM.td(null, "$90,560")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Quinn Flynn"),
	                                React.DOM.td(null, "Support Lead"),
	                                React.DOM.td(null, "Edinburgh"),
	                                React.DOM.td(null, "22"),
	                                React.DOM.td(null, "2013/03/03"),
	                                React.DOM.td(null, "$342,000")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Charde Marshall"),
	                                React.DOM.td(null, "Regional Director"),
	                                React.DOM.td(null, "San Francisco"),
	                                React.DOM.td(null, "36"),
	                                React.DOM.td(null, "2008/10/16"),
	                                React.DOM.td(null, "$470,600")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Haley Kennedy"),
	                                React.DOM.td(null, "Senior Marketing Designer"),
	                                React.DOM.td(null, "London"),
	                                React.DOM.td(null, "43"),
	                                React.DOM.td(null, "2012/12/18"),
	                                React.DOM.td(null, "$313,500")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Tatyana Fitzpatrick"),
	                                React.DOM.td(null, "Regional Director"),
	                                React.DOM.td(null, "London"),
	                                React.DOM.td(null, "19"),
	                                React.DOM.td(null, "2010/03/17"),
	                                React.DOM.td(null, "$385,750")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Michael Silva"),
	                                React.DOM.td(null, "Marketing Designer"),
	                                React.DOM.td(null, "London"),
	                                React.DOM.td(null, "66"),
	                                React.DOM.td(null, "2012/11/27"),
	                                React.DOM.td(null, "$198,500")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Paul Byrd"),
	                                React.DOM.td(null, "Chief Financial Officer (CFO)"),
	                                React.DOM.td(null, "New York"),
	                                React.DOM.td(null, "64"),
	                                React.DOM.td(null, "2010/06/09"),
	                                React.DOM.td(null, "$725,000")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Gloria Little"),
	                                React.DOM.td(null, "Systems Administrator"),
	                                React.DOM.td(null, "New York"),
	                                React.DOM.td(null, "59"),
	                                React.DOM.td(null, "2009/04/10"),
	                                React.DOM.td(null, "$237,500")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Bradley Greer"),
	                                React.DOM.td(null, "Software Engineer"),
	                                React.DOM.td(null, "London"),
	                                React.DOM.td(null, "41"),
	                                React.DOM.td(null, "2012/10/13"),
	                                React.DOM.td(null, "$132,000")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Dai Rios"),
	                                React.DOM.td(null, "Personnel Lead"),
	                                React.DOM.td(null, "Edinburgh"),
	                                React.DOM.td(null, "35"),
	                                React.DOM.td(null, "2012/09/26"),
	                                React.DOM.td(null, "$217,500")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Jenette Caldwell"),
	                                React.DOM.td(null, "Development Lead"),
	                                React.DOM.td(null, "New York"),
	                                React.DOM.td(null, "30"),
	                                React.DOM.td(null, "2011/09/03"),
	                                React.DOM.td(null, "$345,000")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Yuri Berry"),
	                                React.DOM.td(null, "Chief Marketing Officer (CMO)"),
	                                React.DOM.td(null, "New York"),
	                                React.DOM.td(null, "40"),
	                                React.DOM.td(null, "2009/06/25"),
	                                React.DOM.td(null, "$675,000")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Caesar Vance"),
	                                React.DOM.td(null, "Pre-Sales Support"),
	                                React.DOM.td(null, "New York"),
	                                React.DOM.td(null, "21"),
	                                React.DOM.td(null, "2011/12/12"),
	                                React.DOM.td(null, "$106,450")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Doris Wilder"),
	                                React.DOM.td(null, "Sales Assistant"),
	                                React.DOM.td(null, "Sidney"),
	                                React.DOM.td(null, "23"),
	                                React.DOM.td(null, "2010/09/20"),
	                                React.DOM.td(null, "$85,600")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Angelica Ramos"),
	                                React.DOM.td(null, "Chief Executive Officer (CEO)"),
	                                React.DOM.td(null, "London"),
	                                React.DOM.td(null, "47"),
	                                React.DOM.td(null, "2009/10/09"),
	                                React.DOM.td(null, "$1,200,000")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Gavin Joyce"),
	                                React.DOM.td(null, "Developer"),
	                                React.DOM.td(null, "Edinburgh"),
	                                React.DOM.td(null, "42"),
	                                React.DOM.td(null, "2010/12/22"),
	                                React.DOM.td(null, "$92,575")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Jennifer Chang"),
	                                React.DOM.td(null, "Regional Director"),
	                                React.DOM.td(null, "Singapore"),
	                                React.DOM.td(null, "28"),
	                                React.DOM.td(null, "2010/11/14"),
	                                React.DOM.td(null, "$357,650")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Brenden Wagner"),
	                                React.DOM.td(null, "Software Engineer"),
	                                React.DOM.td(null, "San Francisco"),
	                                React.DOM.td(null, "28"),
	                                React.DOM.td(null, "2011/06/07"),
	                                React.DOM.td(null, "$206,850")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Fiona Green"),
	                                React.DOM.td(null, "Chief Operating Officer (COO)"),
	                                React.DOM.td(null, "San Francisco"),
	                                React.DOM.td(null, "48"),
	                                React.DOM.td(null, "2010/03/11"),
	                                React.DOM.td(null, "$850,000")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Shou Itou"),
	                                React.DOM.td(null, "Regional Marketing"),
	                                React.DOM.td(null, "Tokyo"),
	                                React.DOM.td(null, "20"),
	                                React.DOM.td(null, "2011/08/14"),
	                                React.DOM.td(null, "$163,000")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Michelle House"),
	                                React.DOM.td(null, "Integration Specialist"),
	                                React.DOM.td(null, "Sidney"),
	                                React.DOM.td(null, "37"),
	                                React.DOM.td(null, "2011/06/02"),
	                                React.DOM.td(null, "$95,400")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Suki Burks"),
	                                React.DOM.td(null, "Developer"),
	                                React.DOM.td(null, "London"),
	                                React.DOM.td(null, "53"),
	                                React.DOM.td(null, "2009/10/22"),
	                                React.DOM.td(null, "$114,500")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Prescott Bartlett"),
	                                React.DOM.td(null, "Technical Author"),
	                                React.DOM.td(null, "London"),
	                                React.DOM.td(null, "27"),
	                                React.DOM.td(null, "2011/05/07"),
	                                React.DOM.td(null, "$145,000")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Gavin Cortez"),
	                                React.DOM.td(null, "Team Leader"),
	                                React.DOM.td(null, "San Francisco"),
	                                React.DOM.td(null, "22"),
	                                React.DOM.td(null, "2008/10/26"),
	                                React.DOM.td(null, "$235,500")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Martena Mccray"),
	                                React.DOM.td(null, "Post-Sales support"),
	                                React.DOM.td(null, "Edinburgh"),
	                                React.DOM.td(null, "46"),
	                                React.DOM.td(null, "2011/03/09"),
	                                React.DOM.td(null, "$324,050")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Unity Butler"),
	                                React.DOM.td(null, "Marketing Designer"),
	                                React.DOM.td(null, "San Francisco"),
	                                React.DOM.td(null, "47"),
	                                React.DOM.td(null, "2009/12/09"),
	                                React.DOM.td(null, "$85,675")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Howard Hatfield"),
	                                React.DOM.td(null, "Office Manager"),
	                                React.DOM.td(null, "San Francisco"),
	                                React.DOM.td(null, "51"),
	                                React.DOM.td(null, "2008/12/16"),
	                                React.DOM.td(null, "$164,500")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Hope Fuentes"),
	                                React.DOM.td(null, "Secretary"),
	                                React.DOM.td(null, "San Francisco"),
	                                React.DOM.td(null, "41"),
	                                React.DOM.td(null, "2010/02/12"),
	                                React.DOM.td(null, "$109,850")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Vivian Harrell"),
	                                React.DOM.td(null, "Financial Controller"),
	                                React.DOM.td(null, "San Francisco"),
	                                React.DOM.td(null, "62"),
	                                React.DOM.td(null, "2009/02/14"),
	                                React.DOM.td(null, "$452,500")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Timothy Mooney"),
	                                React.DOM.td(null, "Office Manager"),
	                                React.DOM.td(null, "London"),
	                                React.DOM.td(null, "37"),
	                                React.DOM.td(null, "2008/12/11"),
	                                React.DOM.td(null, "$136,200")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Jackson Bradshaw"),
	                                React.DOM.td(null, "Director"),
	                                React.DOM.td(null, "New York"),
	                                React.DOM.td(null, "65"),
	                                React.DOM.td(null, "2008/09/26"),
	                                React.DOM.td(null, "$645,750")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Olivia Liang"),
	                                React.DOM.td(null, "Support Engineer"),
	                                React.DOM.td(null, "Singapore"),
	                                React.DOM.td(null, "64"),
	                                React.DOM.td(null, "2011/02/03"),
	                                React.DOM.td(null, "$234,500")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Bruno Nash"),
	                                React.DOM.td(null, "Software Engineer"),
	                                React.DOM.td(null, "London"),
	                                React.DOM.td(null, "38"),
	                                React.DOM.td(null, "2011/05/03"),
	                                React.DOM.td(null, "$163,500")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Sakura Yamamoto"),
	                                React.DOM.td(null, "Support Engineer"),
	                                React.DOM.td(null, "Tokyo"),
	                                React.DOM.td(null, "37"),
	                                React.DOM.td(null, "2009/08/19"),
	                                React.DOM.td(null, "$139,575")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Thor Walton"),
	                                React.DOM.td(null, "Developer"),
	                                React.DOM.td(null, "New York"),
	                                React.DOM.td(null, "61"),
	                                React.DOM.td(null, "2013/08/11"),
	                                React.DOM.td(null, "$98,540")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Finn Camacho"),
	                                React.DOM.td(null, "Support Engineer"),
	                                React.DOM.td(null, "San Francisco"),
	                                React.DOM.td(null, "47"),
	                                React.DOM.td(null, "2009/07/07"),
	                                React.DOM.td(null, "$87,500")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Serge Baldwin"),
	                                React.DOM.td(null, "Data Coordinator"),
	                                React.DOM.td(null, "Singapore"),
	                                React.DOM.td(null, "64"),
	                                React.DOM.td(null, "2012/04/09"),
	                                React.DOM.td(null, "$138,575")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Zenaida Frank"),
	                                React.DOM.td(null, "Software Engineer"),
	                                React.DOM.td(null, "New York"),
	                                React.DOM.td(null, "63"),
	                                React.DOM.td(null, "2010/01/04"),
	                                React.DOM.td(null, "$125,250")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Zorita Serrano"),
	                                React.DOM.td(null, "Software Engineer"),
	                                React.DOM.td(null, "San Francisco"),
	                                React.DOM.td(null, "56"),
	                                React.DOM.td(null, "2012/06/01"),
	                                React.DOM.td(null, "$115,000")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Jennifer Acosta"),
	                                React.DOM.td(null, "Junior Javascript Developer"),
	                                React.DOM.td(null, "Edinburgh"),
	                                React.DOM.td(null, "43"),
	                                React.DOM.td(null, "2013/02/01"),
	                                React.DOM.td(null, "$75,650")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Cara Stevens"),
	                                React.DOM.td(null, "Sales Assistant"),
	                                React.DOM.td(null, "New York"),
	                                React.DOM.td(null, "46"),
	                                React.DOM.td(null, "2011/12/06"),
	                                React.DOM.td(null, "$145,600")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Hermione Butler"),
	                                React.DOM.td(null, "Regional Director"),
	                                React.DOM.td(null, "London"),
	                                React.DOM.td(null, "47"),
	                                React.DOM.td(null, "2011/03/21"),
	                                React.DOM.td(null, "$356,250")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Lael Greer"),
	                                React.DOM.td(null, "Systems Administrator"),
	                                React.DOM.td(null, "London"),
	                                React.DOM.td(null, "21"),
	                                React.DOM.td(null, "2009/02/27"),
	                                React.DOM.td(null, "$103,500")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Jonas Alexander"),
	                                React.DOM.td(null, "Developer"),
	                                React.DOM.td(null, "San Francisco"),
	                                React.DOM.td(null, "30"),
	                                React.DOM.td(null, "2010/07/14"),
	                                React.DOM.td(null, "$86,500")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Shad Decker"),
	                                React.DOM.td(null, "Regional Director"),
	                                React.DOM.td(null, "Edinburgh"),
	                                React.DOM.td(null, "51"),
	                                React.DOM.td(null, "2008/11/13"),
	                                React.DOM.td(null, "$183,000")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Michael Bruce"),
	                                React.DOM.td(null, "Javascript Developer"),
	                                React.DOM.td(null, "Singapore"),
	                                React.DOM.td(null, "29"),
	                                React.DOM.td(null, "2011/06/27"),
	                                React.DOM.td(null, "$183,000")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Donna Snider"),
	                                React.DOM.td(null, "Customer Support"),
	                                React.DOM.td(null, "New York"),
	                                React.DOM.td(null, "27"),
	                                React.DOM.td(null, "2011/01/25"),
	                                React.DOM.td(null, "$112,000")
	                              )
	                            )
	                          ),
	                          React.DOM.br(null)
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ),
	        this.props.children
	      )
	    );
	  }
	});

	var classSet = React.addons.classSet;
	var BootstrapTables = React.createClass({displayName: 'BootstrapTables',
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = classSet({
	      'container-open': this.state.open
	    });
	    return (
	      Container({id: "container", className: classes},
	        Sidebar(null),
	        Header(null),
	        Body(null,
	          Footer(null)
	        )
	      )
	    );
	  }
	});

	module.exports = BootstrapTables;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(50);
	var Sidebar = __webpack_require__(51);
	var Footer = __webpack_require__(52);

	var Body = React.createClass({displayName: 'Body',
	  componentDidMount: function() {
	    $('.tablesaw').table();
	  },
	  render: function() {
	    return (
	      Container({id: "body"},
	        Grid(null,
	          Row(null,
	            Col({xs: 12},
	              PanelContainer({noOverflow: true, controlStyles: "bg-darkgreen45 fg-white"},
	                Panel(null,
	                  PanelHeader({className: "bg-darkgreen45 fg-white"},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h3(null, "Tablesaw: Stack Table (Basic)")
	                        )
	                      )
	                    )
	                  ),
	                  PanelBody(null,
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.p(null, "The Stack Table stacks the table headers to a two column layout with headers on the left. Resize your viewport to across the 40em (640px) breakpoint to see the change."),
	                          Table({bordered: true, striped: true, className: "tablesaw", 'data-mode': "stack"},
	                            React.DOM.thead(null,
	                              React.DOM.tr(null,
	                                React.DOM.th(null, "Skill"),
	                                React.DOM.th(null, "Last Entry"),
	                                React.DOM.th(null, "Alphabet"),
	                                React.DOM.th(null, "More Alphabet")
	                              )
	                            ),
	                            React.DOM.tbody(null,
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Bartender"),
	                                React.DOM.td(null, "May 2, 1:34p John K."),
	                                React.DOM.td(null, "A, B, C, D"),
	                                React.DOM.td(null, "E, F, G, H")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "Host"),
	                                React.DOM.td(null, "May 11, 12:45a"),
	                                React.DOM.td(null, "A, B, C, D"),
	                                React.DOM.td(null, "E, F, G, H")
	                              )
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              ),
	              PanelContainer({noOverflow: true, controlStyles: "bg-orange75 fg-white"},
	                Panel(null,
	                  PanelHeader({className: "bg-orange75 fg-white"},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h3(null, "Tablesaw: Swipe Table (Basic)")
	                        )
	                      )
	                    )
	                  ),
	                  PanelBody(null,
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.p(null, "Resize to see it in action"),
	                          Table({bordered: true, striped: true, className: "tablesaw", 'data-mode': "swipe"},
	                            React.DOM.thead(null,
	                              React.DOM.tr(null,
	                                React.DOM.th({'data-priority': "persist"}, "Name"),
	                                React.DOM.th(null, "Rank"),
	                                React.DOM.th(null, "Money"),
	                                React.DOM.th(null, "Money"),
	                                React.DOM.th(null, "A (1–5)"),
	                                React.DOM.th(null, "B (1–5)"),
	                                React.DOM.th(null, "C (%)"),
	                                React.DOM.th(null, "D (1–5)"),
	                                React.DOM.th(null, "E (1–5)"),
	                                React.DOM.th(null, "F (1–5)")
	                              )
	                            ),
	                            React.DOM.tbody(null,
	                              React.DOM.tr(null,
	                                React.DOM.th({className: "ranked-name"}, React.DOM.a({href: "#"}, "Amanda")),
	                                React.DOM.td({className: "current-ranking"}, "1"),
	                                React.DOM.td(null, "19.45"),
	                                React.DOM.td(null, "18.72"),
	                                React.DOM.td(null, "5"),
	                                React.DOM.td(null, "5"),
	                                React.DOM.td(null, "98"),
	                                React.DOM.td(null, "5"),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "3")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.th({className: "ranked-name"}, React.DOM.a({href: "#"}, "Dave")),
	                                React.DOM.td(null, "2"),
	                                React.DOM.td(null, "36.32"),
	                                React.DOM.td(null, "20.52"),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "3"),
	                                React.DOM.td(null, "87"),
	                                React.DOM.td(null, "5"),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "3")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.th({className: "ranked-name"}, React.DOM.a({href: "#"}, "Kristen")),
	                                React.DOM.td(null, "3"),
	                                React.DOM.td(null, "35.23"),
	                                React.DOM.td(null, "21.36"),
	                                React.DOM.td(null, "2"),
	                                React.DOM.td(null, "5"),
	                                React.DOM.td(null, "89"),
	                                React.DOM.td(null, "5"),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "3")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.th({className: "ranked-name"}, React.DOM.a({href: "#"}, "Kenny")),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "34.65"),
	                                React.DOM.td(null, "27.15"),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "98"),
	                                React.DOM.td(null, "5"),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "3")
	                              )
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              ),
	              PanelContainer({noOverflow: true, controlStyles: "bg-blue fg-white"},
	                Panel(null,
	                  PanelHeader({className: "bg-blue fg-white"},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h3(null, "Tablesaw: Column Toggle")
	                        )
	                      )
	                    )
	                  ),
	                  PanelBody(null,
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.p(null, "The Column Toggle Table allows the user to select the columns they want to be visible."),
	                          Table({bordered: true, striped: true, className: "tablesaw", 'data-mode': "columntoggle", 'data-minimap': true},
	                            React.DOM.thead(null,
	                              React.DOM.tr(null,
	                                React.DOM.th({'data-priority': "persist"}, "Name"),
	                                React.DOM.th({'data-priority': "1"}, "Rank"),
	                                React.DOM.th({'data-priority': "2"}, "Money"),
	                                React.DOM.th({'data-priority': "3"}, "Money"),
	                                React.DOM.th({'data-priority': "4"}, "A (1–5)"),
	                                React.DOM.th({'data-priority': "5"}, "B (1–5)"),
	                                React.DOM.th({'data-priority': "6"}, "C (%)"),
	                                React.DOM.th({'data-priority': "1"}, "D (1–5)"),
	                                React.DOM.th({'data-priority': "2"}, "E (1–5)"),
	                                React.DOM.th({'data-priority': "3"}, "F (1–5)")
	                              )
	                            ),
	                            React.DOM.tbody(null,
	                              React.DOM.tr(null,
	                                React.DOM.th({className: "ranked-name"},
	                                  React.DOM.a({href: "#"}, "Amanda ")
	                                ),
	                                React.DOM.td({className: "current-ranking"}, "1"),
	                                React.DOM.td(null, "19.45"),
	                                React.DOM.td(null, "18.72"),
	                                React.DOM.td(null, "5"),
	                                React.DOM.td(null, "5"),
	                                React.DOM.td(null, "98"),
	                                React.DOM.td(null, "5"),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "3")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.th({className: "ranked-name"},
	                                  React.DOM.a({href: "#"}, "Dave ")
	                                ),
	                                React.DOM.td(null, "2"),
	                                React.DOM.td(null, "36.32"),
	                                React.DOM.td(null, "20.52"),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "3"),
	                                React.DOM.td(null, "87"),
	                                React.DOM.td(null, "5"),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "3")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.th({className: "ranked-name"},
	                                  React.DOM.a({href: "#"}, "Kristen ")
	                                ),
	                                React.DOM.td(null, "3"),
	                                React.DOM.td(null, "35.23"),
	                                React.DOM.td(null, "21.36"),
	                                React.DOM.td(null, "2"),
	                                React.DOM.td(null, "5"),
	                                React.DOM.td(null, "89"),
	                                React.DOM.td(null, "5"),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "3")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.th({className: "ranked-name"},
	                                  React.DOM.a({href: "#"}, "Kenny ")
	                                ),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "34.65"),
	                                React.DOM.td(null, "27.15"),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "98"),
	                                React.DOM.td(null, "5"),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "3")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.th({className: "ranked-name"},
	                                  React.DOM.a({href: "#"}, "Kenny ")
	                                ),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "34.65"),
	                                React.DOM.td(null, "27.15"),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "98"),
	                                React.DOM.td(null, "5"),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "3")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.th({className: "ranked-name"},
	                                  React.DOM.a({href: "#"}, "Kenny ")
	                                ),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "34.65"),
	                                React.DOM.td(null, "27.15"),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "98"),
	                                React.DOM.td(null, "5"),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "3")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.th({className: "ranked-name"},
	                                  React.DOM.a({href: "#"}, "Kenny ")
	                                ),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "34.65"),
	                                React.DOM.td(null, "27.15"),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "98"),
	                                React.DOM.td(null, "5"),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "3")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.th({className: "ranked-name"},
	                                  React.DOM.a({href: "#"}, "Kenny ")
	                                ),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "34.65"),
	                                React.DOM.td(null, "27.15"),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "98"),
	                                React.DOM.td(null, "5"),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "3")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.th({className: "ranked-name"},
	                                  React.DOM.a({href: "#"}, "Kenny ")
	                                ),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "34.65"),
	                                React.DOM.td(null, "27.15"),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "98"),
	                                React.DOM.td(null, "5"),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "3")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.th({className: "ranked-name"},
	                                  React.DOM.a({href: "#"}, "Kenny ")
	                                ),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "34.65"),
	                                React.DOM.td(null, "27.15"),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "98"),
	                                React.DOM.td(null, "5"),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "3")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.th({className: "ranked-name"},
	                                  React.DOM.a({href: "#"}, "Kenny ")
	                                ),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "34.65"),
	                                React.DOM.td(null, "27.15"),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "98"),
	                                React.DOM.td(null, "5"),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "3")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.th({className: "ranked-name"},
	                                  React.DOM.a({href: "#"}, "Kenny ")
	                                ),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "34.65"),
	                                React.DOM.td(null, "27.15"),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "98"),
	                                React.DOM.td(null, "5"),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "3")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.th({className: "ranked-name"},
	                                  React.DOM.a({href: "#"}, "Kenny ")
	                                ),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "34.65"),
	                                React.DOM.td(null, "27.15"),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "98"),
	                                React.DOM.td(null, "5"),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "3")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.th({className: "ranked-name"},
	                                  React.DOM.a({href: "#"}, "Kenny ")
	                                ),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "34.65"),
	                                React.DOM.td(null, "27.15"),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "98"),
	                                React.DOM.td(null, "5"),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "3")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.th({className: "ranked-name"},
	                                  React.DOM.a({href: "#"}, "Kenny ")
	                                ),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "34.65"),
	                                React.DOM.td(null, "27.15"),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "98"),
	                                React.DOM.td(null, "5"),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "3")
	                              )
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              ),
	              PanelContainer({noOverflow: true, controlStyles: "bg-brown50 fg-white"},
	                Panel(null,
	                  PanelHeader({className: "bg-brown50 fg-white"},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h3(null, "Tablesaw: Sortable")
	                        )
	                      )
	                    )
	                  ),
	                  PanelBody(null,
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.p(null,
	                            "Default appearance (with optional sortable-switch <select>)"
	                          ),
	                          Table({striped: true, bordered: true, className: "tablesaw", 'data-sortable': true, 'data-sortable-switch': true},
	                            React.DOM.thead(null,
	                              React.DOM.tr(null,
	                                React.DOM.th({'data-sortable-col': true, 'data-sortable-default-col': true}, "Rank"),
	                                React.DOM.th({'data-sortable-col': true}, "Movie Title"),
	                                React.DOM.th({id: "third", 'data-sortable-col': true}, "Year"),
	                                React.DOM.th({'data-sortable-col': true}, React.DOM.abbr({title: "Rotten Tomato Rating"}, "Rating")),
	                                React.DOM.th(null, "Reviews"),
	                                React.DOM.th({'data-sortable-col': true, 'data-sortable-numeric': true}, "Box Office")
	                              )
	                            ),
	                            React.DOM.tbody(null,
	                              React.DOM.tr(null,
	                                React.DOM.th(null, "1"),
	                                React.DOM.td(null, React.DOM.a({href: "http://en.wikipedia.org/wiki/Citizen_Kane", 'data-rel': "external"}, "Citizen Kane")),
	                                React.DOM.td(null, "1941"),
	                                React.DOM.td(null, "100%"),
	                                React.DOM.td(null, "74"),
	                                React.DOM.td(null, "$2M")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.th(null, "1"),
	                                React.DOM.td(null, React.DOM.a({href: "http://en.wikipedia.org/wiki/Citizen_Kane", 'data-rel': "external"}, "citizen kane")),
	                                React.DOM.td(null, "1941"),
	                                React.DOM.td(null, "100%"),
	                                React.DOM.td(null, "74"),
	                                React.DOM.td(null, "$1M")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.th(null, "1.2"),
	                                React.DOM.td(null, React.DOM.a({href: "http://en.wikipedia.org/wiki/Citizen_Kane", 'data-rel': "external"}, "citizen blane")),
	                                React.DOM.td(null, "1941"),
	                                React.DOM.td(null, "100%"),
	                                React.DOM.td(null, "74"),
	                                React.DOM.td(null, "$12M")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.th(null, "1.3"),
	                                React.DOM.td(null, React.DOM.a({href: "http://en.wikipedia.org/wiki/Citizen_Kane", 'data-rel': "external"}, "citizen Lane")),
	                                React.DOM.td(null, "1941"),
	                                React.DOM.td(null, "100%"),
	                                React.DOM.td(null, "74"),
	                                React.DOM.td(null, "$4.2M")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.th(null, "2"),
	                                React.DOM.td(null, React.DOM.a({href: "http://en.wikipedia.org/wiki/Casablanca_(film)", 'data-rel': "external"}, "Casablanca")),
	                                React.DOM.td(null, "1942"),
	                                React.DOM.td(null, "97%"),
	                                React.DOM.td(null, "64"),
	                                React.DOM.td(null, "$1M")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.th(null, "3"),
	                                React.DOM.td(null, React.DOM.a({href: "http://en.wikipedia.org/wiki/The_Godfather", 'data-rel': "external"}, "The Godfather")),
	                                React.DOM.td(null, "1972"),
	                                React.DOM.td(null, "97%"),
	                                React.DOM.td(null, "87"),
	                                React.DOM.td(null, "$1M")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.th(null, "4"),
	                                React.DOM.td(null, React.DOM.a({href: "http://en.wikipedia.org/wiki/Gone_with_the_Wind_(film)", 'data-rel': "external"}, "Gone with the Wind")),
	                                React.DOM.td(null, "1939"),
	                                React.DOM.td(null, "96%"),
	                                React.DOM.td(null, "87"),
	                                React.DOM.td(null, "$1M")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.th(null, "5"),
	                                React.DOM.td(null, React.DOM.a({href: "http://en.wikipedia.org/wiki/Lawrence_of_Arabia_(film)", 'data-rel': "external"}, "Lawrence of Arabia")),
	                                React.DOM.td(null, "1962"),
	                                React.DOM.td(null, "94%"),
	                                React.DOM.td(null, "87"),
	                                React.DOM.td(null, "$1M")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.th(null, "6"),
	                                React.DOM.td(null, React.DOM.a({href: "http://en.wikipedia.org/wiki/Dr._Strangelove", 'data-rel': "external"}, "Dr. Strangelove ...")),
	                                React.DOM.td(null, "1964"),
	                                React.DOM.td(null, "92%"),
	                                React.DOM.td(null, "74"),
	                                React.DOM.td(null, "$1M")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.th(null, "7"),
	                                React.DOM.td(null, React.DOM.a({href: "http://en.wikipedia.org/wiki/The_Graduate", 'data-rel': "external"}, "The Graduate")),
	                                React.DOM.td(null, "1967"),
	                                React.DOM.td(null, "91%"),
	                                React.DOM.td(null, "122"),
	                                React.DOM.td(null, "$1M")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.th(null, "8"),
	                                React.DOM.td(null, React.DOM.a({href: "http://en.wikipedia.org/wiki/The_Wizard_of_Oz_(1939_film)", 'data-rel': "external"}, "The Wizard of Oz")),
	                                React.DOM.td(null, "1939"),
	                                React.DOM.td(null, "90%"),
	                                React.DOM.td(null, "72"),
	                                React.DOM.td(null, "$1M")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.th(null, "9"),
	                                React.DOM.td(null, React.DOM.a({href: "http://en.wikipedia.org/wiki/Singin%27_in_the_Rain", 'data-rel': "external"}, "Singin in the Rain")),
	                                React.DOM.td(null, "1952"),
	                                React.DOM.td(null, "89%"),
	                                React.DOM.td(null, "85"),
	                                React.DOM.td(null, "$1M")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.th(null, "10"), React.DOM.td({className: "title"}, React.DOM.a({href: "http://en.wikipedia.org/wiki/Inception", 'data-rel': "external"}, "Inception")),
	                                React.DOM.td(null, "2010"),
	                                React.DOM.td(null, "84%"),
	                                React.DOM.td(null, "78"),
	                                React.DOM.td(null, "$1M")
	                              )
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              ),
	              PanelContainer({noOverflow: true, controlStyles: "bg-red fg-white"},
	                Panel(null,
	                  PanelHeader({className: "bg-red fg-white"},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h3(null, "Tablesaw: Mode Switch")
	                        )
	                      )
	                    )
	                  ),
	                  PanelBody(null,
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          Table({striped: true, bordered: true, className: "tablesaw", 'data-mode-switch': true, 'data-mode': "columntoggle"},
	                            React.DOM.thead(null,
	                              React.DOM.tr(null,
	                                React.DOM.th({'data-priority': "3"}, "Rank"),
	                                React.DOM.th({'data-priority': "persist"}, "Movie Title"),
	                                React.DOM.th({'data-priority': "2"}, "Year"),
	                                React.DOM.th({'data-priority': "1"},
	                                  React.DOM.abbr({title: "Rotten Tomato Rating"}, "Rating")
	                                ),
	                                React.DOM.th({'data-priority': "4"}, "Reviews")
	                              )
	                            ),
	                            React.DOM.tbody(null,
	                              React.DOM.tr(null,
	                                React.DOM.th(null, "1"),
	                                React.DOM.td(null,
	                                  React.DOM.a({href: "http://en.wikipedia.org/wiki/Citizen_Kane", 'data-rel': "external"}, "Citizen Kane")
	                                ),
	                                React.DOM.td(null, "1941"),
	                                React.DOM.td(null, "100%"),
	                                React.DOM.td(null, "74")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.th(null, "2"),
	                                React.DOM.td(null,
	                                  React.DOM.a({href: "http://en.wikipedia.org/wiki/Casablanca_(film)", 'data-rel': "external"}, "Casablanca")
	                                ),
	                                React.DOM.td(null, "1942"),
	                                React.DOM.td(null, "97%"),
	                                React.DOM.td(null, "64")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.th(null, "3"),
	                                React.DOM.td(null,
	                                  React.DOM.a({href: "http://en.wikipedia.org/wiki/The_Godfather", 'data-rel': "external"}, "The Godfather")
	                                ),
	                                React.DOM.td(null, "1972"),
	                                React.DOM.td(null, "97%"),
	                                React.DOM.td(null, "87")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.th(null, "4"),
	                                React.DOM.td(null,
	                                  React.DOM.a({href: "http://en.wikipedia.org/wiki/Gone_with_the_Wind_(film)", 'data-rel': "external"}, "Gone with the Wind")
	                                ),
	                                React.DOM.td(null, "1939"),
	                                React.DOM.td(null, "96%"),
	                                React.DOM.td(null, "87")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.th(null, "5"),
	                                React.DOM.td(null,
	                                  React.DOM.a({href: "http://en.wikipedia.org/wiki/Lawrence_of_Arabia_(film)", 'data-rel': "external"}, "Lawrence of Arabia")
	                                ),
	                                React.DOM.td(null, "1962"),
	                                React.DOM.td(null, "94%"),
	                                React.DOM.td(null, "87")
	                              )
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              ),
	              PanelContainer({noOverflow: true, controlStyles: "bg-purple fg-white"},
	                Panel(null,
	                  PanelHeader({className: "bg-purple fg-white"},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h3(null, "Tablesaw: Kitchen Sink")
	                        )
	                      )
	                    )
	                  ),
	                  PanelBody(null,
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.p(null, "Swipe Mode, ModeSwitch, Sortable, SortableSwitch"),
	                          Table({striped: true, bordered: true, className: "tablesaw", 'data-mode': "swipe", 'data-sortable': true, 'data-sortable-switch': true, 'data-mode-switch': true},
	                            React.DOM.thead(null,
	                              React.DOM.tr(null,
	                                React.DOM.th({'data-sortable-col': true, 'data-sortable-default-col': true, 'data-priority': "persist"}, "Movie Title"),
	                                React.DOM.th({'data-sortable-col': true, 'data-priority': "3"}, "Rank"),
	                                React.DOM.th({'data-sortable-col': true, 'data-priority': "2"}, "Year"),
	                                React.DOM.th({'data-sortable-col': true, 'data-priority': "1"}, React.DOM.abbr({title: "Rotten Tomato Rating"}, "Rating")),
	                                React.DOM.th({'data-sortable-col': true, 'data-priority': "4"}, "Reviews")
	                              )
	                            ),
	                            React.DOM.tbody(null,
	                              React.DOM.tr(null,
	                                React.DOM.td(null, React.DOM.a({href: "http://en.wikipedia.org/wiki/Citizen_Kane", 'data-rel': "external"}, "Citizen Kane")), React.DOM.td({className: "har"}, "1"),
	                                React.DOM.td(null, "1941"),
	                                React.DOM.td(null, "100%"),
	                                React.DOM.td(null, "74")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, React.DOM.a({href: "http://en.wikipedia.org/wiki/Casablanca_(film)", 'data-rel': "external"}, "Casablanca")),
	                                React.DOM.td(null, "2"),
	                                React.DOM.td(null, "1942"),
	                                React.DOM.td(null, "97%"),
	                                React.DOM.td(null, "64")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, React.DOM.a({href: "http://en.wikipedia.org/wiki/The_Godfather", 'data-rel': "external"}, "The Godfather")),
	                                React.DOM.td(null, "3"),
	                                React.DOM.td(null, "1972"),
	                                React.DOM.td(null, "97%"),
	                                React.DOM.td(null, "87")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, React.DOM.a({href: "http://en.wikipedia.org/wiki/Gone_with_the_Wind_(film)", 'data-rel': "external"}, "Gone with the Wind")),
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "1939"),
	                                React.DOM.td(null, "96%"),
	                                React.DOM.td(null, "87")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, React.DOM.a({href: "http://en.wikipedia.org/wiki/Lawrence_of_Arabia_(film)", 'data-rel': "external"}, "Lawrence of Arabia")),
	                                React.DOM.td(null, "5"),
	                                React.DOM.td(null, "1962"),
	                                React.DOM.td(null, "94%"),
	                                React.DOM.td(null, "87")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, React.DOM.a({href: "http://en.wikipedia.org/wiki/Lawrence_of_Arabia_(film)", 'data-rel': "external"}, "Lawrence of Arabia")),
	                                React.DOM.td(null, "5"),
	                                React.DOM.td(null, "1962"),
	                                React.DOM.td(null, "94%"),
	                                React.DOM.td(null, "87")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, React.DOM.a({href: "http://en.wikipedia.org/wiki/Lawrence_of_Arabia_(film)", 'data-rel': "external"}, "Lawrence of Arabia")),
	                                React.DOM.td(null, "5"),
	                                React.DOM.td(null, "1962"),
	                                React.DOM.td(null, "94%"),
	                                React.DOM.td(null, "87")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, React.DOM.a({href: "http://en.wikipedia.org/wiki/Lawrence_of_Arabia_(film)", 'data-rel': "external"}, "Lawrence of Arabia")),
	                                React.DOM.td(null, "5"),
	                                React.DOM.td(null, "1962"),
	                                React.DOM.td(null, "94%"),
	                                React.DOM.td(null, "87")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, React.DOM.a({href: "http://en.wikipedia.org/wiki/Lawrence_of_Arabia_(film)", 'data-rel': "external"}, "Lawrence of Arabia")),
	                                React.DOM.td(null, "5"),
	                                React.DOM.td(null, "1962"),
	                                React.DOM.td(null, "94%"),
	                                React.DOM.td(null, "87")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, React.DOM.a({href: "http://en.wikipedia.org/wiki/Lawrence_of_Arabia_(film)", 'data-rel': "external"}, "Lawrence of Arabia")),
	                                React.DOM.td(null, "5"),
	                                React.DOM.td(null, "1962"),
	                                React.DOM.td(null, "94%"),
	                                React.DOM.td(null, "87")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, React.DOM.a({href: "http://en.wikipedia.org/wiki/Lawrence_of_Arabia_(film)", 'data-rel': "external"}, "Lawrence of Arabia")),
	                                React.DOM.td(null, "5"),
	                                React.DOM.td(null, "1962"),
	                                React.DOM.td(null, "94%"),
	                                React.DOM.td(null, "87")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, React.DOM.a({href: "http://en.wikipedia.org/wiki/Lawrence_of_Arabia_(film)", 'data-rel': "external"}, "Lawrence of Arabia")),
	                                React.DOM.td(null, "5"),
	                                React.DOM.td(null, "1962"),
	                                React.DOM.td(null, "94%"),
	                                React.DOM.td(null, "87")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, React.DOM.a({href: "http://en.wikipedia.org/wiki/Lawrence_of_Arabia_(film)", 'data-rel': "external"}, "Lawrence of Arabia")),
	                                React.DOM.td(null, "5"),
	                                React.DOM.td(null, "1962"),
	                                React.DOM.td(null, "94%"),
	                                React.DOM.td(null, "87")
	                              )
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ),
	        this.props.children
	      )
	    );
	  }
	});

	var classSet = React.addons.classSet;
	var Tablesaw = React.createClass({displayName: 'Tablesaw',
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = classSet({
	      'container-open': this.state.open
	    });
	    return (
	      Container({id: "container", className: classes},
	        Sidebar(null),
	        Header(null),
	        Body(null,
	          Footer(null)
	        )
	      )
	    );
	  }
	});

	module.exports = Tablesaw;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(50);
	var Sidebar = __webpack_require__(51);
	var Footer = __webpack_require__(52);

	var Body = React.createClass({displayName: 'Body',
	  render: function() {
	    return (
	      Container({id: "body"},
	        Grid(null,
	          Row(null,
	            Col({sm: 12},
	              PanelContainer(null,
	                Panel(null,
	                  PanelBody(null,
	                    React.DOM.h3({className: "text-center", style: {margin: 25, marginTop: 0}}, "Twelve")
	                  )
	                )
	              )
	            )
	          ),
	          Row(null,
	            Col({sm: 6, collapseRight: true},
	              PanelContainer(null,
	                Panel(null,
	                  PanelBody(null,
	                    React.DOM.h3({className: "text-center", style: {margin: 25, marginTop: 0}}, "Six")
	                  )
	                )
	              )
	            ),
	            Col({sm: 6},
	              PanelContainer(null,
	                Panel(null,
	                  PanelBody(null,
	                    React.DOM.h3({className: "text-center", style: {margin: 25, marginTop: 0}}, "Six")
	                  )
	                )
	              )
	            )
	          ),
	          Row(null,
	            Col({sm: 4, collapseRight: true},
	              PanelContainer(null,
	                Panel(null,
	                  PanelBody(null,
	                    React.DOM.h3({className: "text-center", style: {margin: 25, marginTop: 0}}, "Four")
	                  )
	                )
	              )
	            ),
	            Col({sm: 4, collapseRight: true},
	              PanelContainer(null,
	                Panel(null,
	                  PanelBody(null,
	                    React.DOM.h3({className: "text-center", style: {margin: 25, marginTop: 0}}, "Four")
	                  )
	                )
	              )
	            ),
	            Col({sm: 4},
	              PanelContainer(null,
	                Panel(null,
	                  PanelBody(null,
	                    React.DOM.h3({className: "text-center", style: {margin: 25, marginTop: 0}}, "Four")
	                  )
	                )
	              )
	            )
	          ),
	          Row(null,
	            Col({sm: 3, collapseRight: true},
	              PanelContainer(null,
	                Panel(null,
	                  PanelBody(null,
	                    React.DOM.h3({className: "text-center", style: {margin: 25, marginTop: 0}}, "Three")
	                  )
	                )
	              )
	            ),
	            Col({sm: 3, collapseRight: true},
	              PanelContainer(null,
	                Panel(null,
	                  PanelBody(null,
	                    React.DOM.h3({className: "text-center", style: {margin: 25, marginTop: 0}}, "Three")
	                  )
	                )
	              )
	            ),
	            Col({sm: 3, collapseRight: true},
	              PanelContainer(null,
	                Panel(null,
	                  PanelBody(null,
	                    React.DOM.h3({className: "text-center", style: {margin: 25, marginTop: 0}}, "Three")
	                  )
	                )
	              )
	            ),
	            Col({sm: 3},
	              PanelContainer(null,
	                Panel(null,
	                  PanelBody(null,
	                    React.DOM.h3({className: "text-center", style: {margin: 25, marginTop: 0}}, "Three")
	                  )
	                )
	              )
	            )
	          ),
	          Row(null,
	            Col({sm: 8, collapseRight: true},
	              PanelContainer(null,
	                Panel(null,
	                  PanelBody(null,
	                    React.DOM.h3({className: "text-center", style: {margin: 25, marginTop: 0}}, "Eight")
	                  )
	                )
	              )
	            ),
	            Col({sm: 4},
	              PanelContainer(null,
	                Panel(null,
	                  PanelBody(null,
	                    React.DOM.h3({className: "text-center", style: {margin: 25, marginTop: 0}}, "Four")
	                  )
	                )
	              )
	            )
	          ),
	          Row(null,
	            Col({sm: 10, collapseRight: true},
	              PanelContainer(null,
	                Panel(null,
	                  PanelBody(null,
	                    React.DOM.h3({className: "text-center", style: {margin: 25, marginTop: 0}}, "Ten")
	                  )
	                )
	              )
	            ),
	            Col({sm: 2},
	              PanelContainer(null,
	                Panel(null,
	                  PanelBody(null,
	                    React.DOM.h3({className: "text-center", style: {margin: 25, marginTop: 0}}, "Two")
	                  )
	                )
	              )
	            )
	          ),
	          Row(null,
	            Col({sm: 5, collapseRight: true},
	              PanelContainer(null,
	                Panel(null,
	                  PanelBody(null,
	                    React.DOM.h3({className: "text-center", style: {margin: 25, marginTop: 0}}, "Five")
	                  )
	                )
	              )
	            ),
	            Col({sm: 3, collapseRight: true},
	              PanelContainer(null,
	                Panel(null,
	                  PanelBody(null,
	                    React.DOM.h3({className: "text-center", style: {margin: 25, marginTop: 0}}, "Three")
	                  )
	                )
	              )
	            ),
	            Col({sm: 4},
	              PanelContainer(null,
	                Panel(null,
	                  PanelBody(null,
	                    React.DOM.h3({className: "text-center", style: {margin: 25, marginTop: 0}}, "Four")
	                  )
	                )
	              )
	            )
	          )
	        ),
	        this.props.children
	      )
	    );
	  }
	});

	var classSet = React.addons.classSet;
	var GridPage = React.createClass({displayName: 'GridPage',
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = classSet({
	      'container-open': this.state.open
	    });
	    return (
	      Container({id: "container", className: classes},
	        Sidebar(null),
	        Header(null),
	        Body(null,
	          Footer(null)
	        )
	      )
	    );
	  }
	});

	module.exports = GridPage;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(50);
	var Sidebar = __webpack_require__(51);
	var Footer = __webpack_require__(52);

	var Body = React.createClass({displayName: 'Body',
	  componentDidMount: function() {
	    $('#calendar').fullCalendar({
	      header: {
	        left: 'prev,next today',
	        center: 'title',
	        right: 'month,agendaWeek,agendaDay'
	      },
	      defaultDate: '2014-08-12',
	      editable: true,
	      eventLimit: true, // allow "more" link when too many events
	      events: [
	        {
	          title: 'All Day Event',
	          start: '2014-08-01'
	        },
	        {
	          title: 'Long Event',
	          start: '2014-08-07',
	          end: '2014-08-10'
	        },
	        {
	          id: 999,
	          title: 'Repeating Event',
	          start: '2014-08-09T16:00:00'
	        },
	        {
	          id: 999,
	          title: 'Repeating Event',
	          start: '2014-08-16T16:00:00'
	        },
	        {
	          title: 'Conference',
	          start: '2014-08-11',
	          end: '2014-08-13'
	        },
	        {
	          title: 'Meeting',
	          start: '2014-08-12T10:30:00',
	          end: '2014-08-12T12:30:00'
	        },
	        {
	          title: 'Lunch',
	          start: '2014-08-12T12:00:00'
	        },
	        {
	          title: 'Meeting',
	          start: '2014-08-12T14:30:00'
	        },
	        {
	          title: 'Happy Hour',
	          start: '2014-08-12T17:30:00'
	        },
	        {
	          title: 'Dinner',
	          start: '2014-08-12T20:00:00'
	        },
	        {
	          title: 'Birthday Party',
	          start: '2014-08-13T07:00:00'
	        },
	        {
	          title: 'Click for Google',
	          url: 'http://google.com/',
	          start: '2014-08-28'
	        }
	      ]
	    });


	    /* initialize the external events
	    -----------------------------------------------------------------*/

	    $('#external-events div.external-event').each(function() {

	      // create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
	      // it doesn't need to have a start or end
	      var eventObject = {
	        title: $.trim($(this).text()) // use the element's text as the event title
	      };

	      // store the Event Object in the DOM element so we can get to it later
	      $(this).data('eventObject', eventObject);

	      // make the event draggable using jQuery UI
	      $(this).draggable({
	        zIndex: 999,
	        revert: true,      // will cause the event to go back to its
	        revertDuration: 0  //  original position after the drag
	      });

	    });


	    /* initialize the calendar
	    -----------------------------------------------------------------*/

	    $('#external-calendar').fullCalendar({
	      header: {
	        left: 'prev,next today',
	        center: 'title',
	        right: 'month,agendaWeek,agendaDay'
	      },
	      editable: true,
	      droppable: true, // this allows things to be dropped onto the calendar !!!
	      drop: function(date) { // this function is called when something is dropped

	        // retrieve the dropped element's stored Event Object
	        var originalEventObject = $(this).data('eventObject');

	        // we need to copy it, so that multiple events don't have a reference to the same object
	        var copiedEventObject = $.extend({}, originalEventObject);

	        // assign it the date that was reported
	        copiedEventObject.start = date;

	        // render the event on the calendar
	        // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
	        $('#external-calendar').fullCalendar('renderEvent', copiedEventObject, true);

	        // is the "remove after drop" checkbox checked?
	        if ($('#drop-remove').is(':checked')) {
	          // if so, remove the element from the "Draggable Events" list
	          $(this).remove();
	        }

	      }
	    });
	  },
	  render: function() {
	    return (
	      Container({id: "body"},
	        Grid(null,
	          Row(null,
	            Col({sm: 12},
	              PanelContainer({controlStyles: "bg-darkgreen45 fg-white"},
	                Panel(null,
	                  PanelHeader({className: "bg-darkgreen45 fg-white", style: {marginBottom: 0}},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h3(null, "Calendar: Agenda")
	                        )
	                      )
	                    )
	                  ),
	                  PanelBody({style: {padding: 25}},
	                    React.DOM.div({id: "calendar"})
	                  )
	                )
	              ),
	              PanelContainer({controlStyles: "bg-orange75 fg-white"},
	                Panel(null,
	                  PanelHeader({className: "bg-orange75 fg-white", style: {marginBottom: 0}},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h3(null, "Calendar: External Events")
	                        )
	                      )
	                    )
	                  ),
	                  PanelBody({style: {padding: 25}},
	                    React.DOM.div({id: "wrap"},
	                      React.DOM.div({id: "external-events"},
	                        React.DOM.h4(null, "Draggable Events"),
	                        React.DOM.div({className: "external-event"}, "My Event 1"),
	                        React.DOM.div({className: "external-event"}, "My Event 2"),
	                        React.DOM.div({className: "external-event"}, "My Event 3"),
	                        React.DOM.div({className: "external-event"}, "My Event 4"),
	                        React.DOM.div({className: "external-event"}, "My Event 5"),
	                        Checkbox({id: "drop-remove"},
	                          "remove after drop"
	                        )
	                      ),
	                      React.DOM.div({id: "external-calendar"}),
	                      React.DOM.div({style: {clear:'both'}})
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ),
	        this.props.children
	      )
	    );
	  }
	});

	var classSet = React.addons.classSet;
	var Calendar = React.createClass({displayName: 'Calendar',
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = classSet({
	      'container-open': this.state.open
	    });
	    return (
	      Container({id: "container", className: classes},
	        Sidebar(null),
	        Header(null),
	        Body(null,
	          Footer(null)
	        )
	      )
	    );
	  }
	});

	module.exports = Calendar;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(50);
	var Sidebar = __webpack_require__(51);
	var Footer = __webpack_require__(52);

	var Body = React.createClass({displayName: 'Body',
	  componentDidMount: function() {
	    $('#nestable').nestable({
	      group: 1
	    });
	  },
	  render: function() {
	    return (
	      Container({id: "body"},
	        Grid(null,
	          Row(null,
	            Col({sm: 12},
	              PanelContainer({controlStyles: "bg-darkgreen45 fg-white"},
	                Panel(null,
	                  PanelHeader({className: "bg-darkgreen45 fg-white", style: {margin: 0}},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h3(null, "Nestable List")
	                        )
	                      )
	                    )
	                  ),
	                  PanelBody(null,
	                    React.DOM.div({className: "dd", id: "nestable", className: "nestable"},
	                        React.DOM.ol({className: "dd-list"},
	                            React.DOM.li({className: "dd-item", 'data-id': "1"},
	                                React.DOM.div({className: "dd-handle"}, "Item 1")
	                            ),
	                            React.DOM.li({className: "dd-item", 'data-id': "2"},
	                                React.DOM.div({className: "dd-handle"}, "Item 2"),
	                                React.DOM.ol({className: "dd-list"},
	                                    React.DOM.li({className: "dd-item", 'data-id': "3"}, React.DOM.div({className: "dd-handle"}, "Item 3")),
	                                    React.DOM.li({className: "dd-item", 'data-id': "4"}, React.DOM.div({className: "dd-handle"}, "Item 4")),
	                                    React.DOM.li({className: "dd-item", 'data-id': "5"},
	                                        React.DOM.div({className: "dd-handle"}, "Item 5"),
	                                        React.DOM.ol({className: "dd-list"},
	                                            React.DOM.li({className: "dd-item", 'data-id': "6"}, React.DOM.div({className: "dd-handle"}, "Item 6")),
	                                            React.DOM.li({className: "dd-item", 'data-id': "7"}, React.DOM.div({className: "dd-handle"}, "Item 7")),
	                                            React.DOM.li({className: "dd-item", 'data-id': "8"}, React.DOM.div({className: "dd-handle"}, "Item 8"))
	                                        )
	                                    ),
	                                    React.DOM.li({className: "dd-item", 'data-id': "9"}, React.DOM.div({className: "dd-handle"}, "Item 9")),
	                                    React.DOM.li({className: "dd-item", 'data-id': "10"}, React.DOM.div({className: "dd-handle"}, "Item 10"))
	                                )
	                            ),
	                            React.DOM.li({className: "dd-item", 'data-id': "11"},
	                                React.DOM.div({className: "dd-handle"}, "Item 11")
	                            ),
	                            React.DOM.li({className: "dd-item", 'data-id': "12"},
	                                React.DOM.div({className: "dd-handle"}, "Item 12")
	                            )
	                        )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ),
	        this.props.children
	      )
	    );
	  }
	});

	var classSet = React.addons.classSet;
	var Lists = React.createClass({displayName: 'Lists',
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = classSet({
	      'container-open': this.state.open
	    });
	    return (
	      Container({id: "container", className: classes},
	        Sidebar(null),
	        Header(null),
	        Body(null,
	          Footer(null)
	        )
	      )
	    );
	  }
	});

	module.exports = Lists;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(50);
	var Sidebar = __webpack_require__(51);
	var Footer = __webpack_require__(52);

	var Body = React.createClass({displayName: 'Body',
	  componentDidMount: function() {
	    $('#my-awesome-dropzone').dropzone({
	      paramName: "file", // The name that will be used to transfer the file
	      maxFilesize: 2, // MB
	      accept: function(file, done) {
	        done();
	      }
	    });
	  },
	  render: function() {
	    return (
	      Container({id: "body"},
	        Grid(null,
	          Row(null,
	            Col({sm: 12},
	              PanelContainer({controlStyles: "bg-darkgreen45 fg-white"},
	                Panel(null,
	                  PanelHeader({className: "bg-darkgreen45 fg-white", style: {margin: 0}},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h3(null, "Dropzone")
	                        )
	                      )
	                    )
	                  ),
	                  PanelBody(null,
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h4(null,
	                            "DropzoneJS is an open source library that provides drag'n'drop file uploads with image previews."
	                          ),
	                          Form({action: "/dropzone/file-upload",
	                                className: "dropzone",
	                                id: "my-awesome-dropzone"}
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ),
	        this.props.children
	      )
	    );
	  }
	});

	var classSet = React.addons.classSet;
	var Dropzone = React.createClass({displayName: 'Dropzone',
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = classSet({
	      'container-open': this.state.open
	    });
	    return (
	      Container({id: "container", className: classes},
	        Sidebar(null),
	        Header(null),
	        Body(null,
	          Footer(null)
	        )
	      )
	    );
	  }
	});

	module.exports = Dropzone;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(50);
	var Sidebar = __webpack_require__(51);
	var Footer = __webpack_require__(52);

	var Body = React.createClass({displayName: 'Body',
	  componentDidMount: function() {
	    (function() {
	      $(this.refs.target.getDOMNode()).Jcrop({
	        setSelect: [ 60, 50, 540, 300 ]
	      });
	    }.bind(this))();

	    (function() {
	      var jcrop_api;

	      // Simple event handler, called from onChange and onSelect
	      // event handlers, as per the Jcrop invocation above
	      var showCoords = function(c) {
	        $('#x1').val(c.x);
	        $('#y1').val(c.y);
	        $('#x2').val(c.x2);
	        $('#y2').val(c.y2);
	        $('#w').val(c.w);
	        $('#h').val(c.h);
	      };

	      var clearCoords = function() {
	        $('#coords input').val('');
	      };

	      $(this.refs.eventtarget.getDOMNode()).Jcrop({
	        onChange : showCoords,
	        onSelect : showCoords,
	        onRelease: clearCoords,
	        setSelect: [ 60, 50, 540, 300 ]
	      },function(){
	        jcrop_api = this;
	      });

	      $('#coords').on('change','input',function(e){
	        var x1 = $('#x1').val(),
	            x2 = $('#x2').val(),
	            y1 = $('#y1').val(),
	            y2 = $('#y2').val();
	        jcrop_api.setSelect([x1,y1,x2,y2]);
	      });
	    }.bind(this))();

	    (function() {
	      // Create variables (in this scope) to hold the API and image size
	      var jcrop_api,
	          boundx,
	          boundy,

	          // Grab some information about the preview pane
	          $preview = $('#preview-pane'),
	          $pcnt = $('#preview-pane .preview-container'),
	          $pimg = $('#preview-pane .preview-container img'),

	          xsize = $pcnt.width(),
	          ysize = $pcnt.height();

	      var updatePreview = function(c) {
	        if (parseInt(c.w) > 0) {
	          var rx = xsize / c.w;
	          var ry = ysize / c.h;

	          $pimg.css({
	            width: Math.round(rx * boundx) + 'px',
	            height: Math.round(ry * boundy) + 'px',
	            marginLeft: '-' + Math.round(rx * c.x) + 'px',
	            marginTop: '-' + Math.round(ry * c.y) + 'px'
	          });
	        }
	      };

	      $(this.refs.aspectwithpreview.getDOMNode()).Jcrop({
	        onChange: updatePreview,
	        onSelect: updatePreview,
	        aspectRatio: xsize / ysize,
	        setSelect: [ 60, 50, 540, 300 ]
	      },function(){
	        // Use the API to get the real image size
	        var bounds = this.getBounds();
	        boundx = bounds[0];
	        boundy = bounds[1];
	        // Store the API in the jcrop_api variable
	        jcrop_api = this;

	        // Move the preview into the jcrop container for css positioning
	        $preview.appendTo(jcrop_api.ui.holder);
	      });
	    }.bind(this))();

	    (function() {
	      var jcrop_api;

	      $(this.refs.animationstransitions.getDOMNode()).Jcrop({
	        bgFade:     true,
	        bgOpacity: .2,
	        setSelect: [ 60, 50, 540, 300 ]
	      },function(){
	        jcrop_api = this;
	      });

	      $('#fadetog').change(function(){
	        jcrop_api.setOptions({
	          bgFade: this.checked
	        });
	      }).attr('checked','checked');

	      $('#shadetog').change(function(){
	        if (this.checked) $('#shadetxt').slideDown();
	          else $('#shadetxt').slideUp();
	        jcrop_api.setOptions({
	          shade: this.checked
	        });
	      }).attr('checked',false);

	      // Define page sections
	      var sections = {
	        bgc_buttons: 'Change bgColor',
	        bgo_buttons: 'Change bgOpacity',
	        anim_buttons: 'Animate Selection'
	      };
	      // Define animation buttons
	      var ac = {
	        anim1: [217,122,382,284],
	        anim2: [20,20,580,380],
	        anim3: [24,24,176,376],
	        anim4: [347,165,550,355],
	        anim5: [136,55,472,183]
	      };
	      // Define bgOpacity buttons
	      var bgo = {
	        Low: .2,
	        Mid: .5,
	        High: .8,
	        Full: 1
	      };
	      // Define bgColor buttons
	      var bgc = {
	        R: '#900',
	        B: '#4BB6F0',
	        Y: '#F0B207',
	        G: '#46B81C',
	        W: 'white',
	        K: 'black'
	      };
	      // Create fieldset targets for buttons
	      for(i in sections)
	        insertSection(i,sections[i]);

	      function create_btn(c) {
	        var $o = $('<button />').addClass('btn btn-small btn-outlined btn-primary');
	        if (c) $o.append(c);
	        return $o;
	      }

	      var a_count = 1;
	      // Create animation buttons
	      for(i in ac) {
	        $('#anim_buttons .btn-group')
	          .append(
	            create_btn(a_count++).click(animHandler(ac[i])),
	            ' '
	          );
	      }

	      $('#anim_buttons .btn-group').append(
	        create_btn('Bye!').click(function(e){
	          $(e.target).addClass('active');
	          jcrop_api.animateTo(
	            [300,200,300,200],
	            function(){
	              this.release();
	              $(e.target).closest('.btn-group').find('.active').removeClass('active');
	            }
	          );
	          return false;
	        })
	      );

	      // Create bgOpacity buttons
	      for(i in bgo) {
	        $('#bgo_buttons .btn-group').append(
	          create_btn(i).click(setoptHandler('bgOpacity',bgo[i])),
	          ' '
	        );
	      }
	      // Create bgColor buttons
	      for(i in bgc) {
	        $('#bgc_buttons .btn-group').append(
	          create_btn(i).css({
	            background: bgc[i],
	            color: ((i == 'K') || (i == 'R'))?'white':'black'
	          }).click(setoptHandler('bgColor',bgc[i])), ' '
	        );
	      }
	      // Function to insert named sections into interface
	      function insertSection(k,v) {
	        $('#interface').prepend(
	          $('<fieldset></fieldset>').attr('id',k).append(
	            $('<legend></legend>').append(v),
	            '<div class="btn-toolbar"><div class="btn-group"></div></div>'
	          )
	        );
	      };
	      // Handler for option-setting buttons
	      function setoptHandler(k,v) {
	        return function(e) {
	          $(e.target).closest('.btn-group').find('.active').removeClass('active');
	          $(e.target).addClass('active');
	          var opt = { };
	          opt[k] = v;
	          jcrop_api.setOptions(opt);
	          return false;
	        };
	      };
	      // Handler for animation buttons
	      function animHandler(v) {
	        return function(e) {
	          $(e.target).addClass('active');
	          jcrop_api.animateTo(v,function(){
	            $(e.target).closest('.btn-group').find('.active').removeClass('active');
	          });
	          return false;
	        };
	      };

	      $('#bgo_buttons .btn:first,#bgc_buttons .btn:last').addClass('active');
	      $('#interface').show();
	    }.bind(this))();
	  },
	  render: function() {
	    return (
	      Container({id: "body"},
	        Grid(null,
	          Row(null,
	            Col({sm: 12},
	              PanelContainer({controlStyles: "bg-orange75 fg-white"},
	                Panel(null,
	                  PanelHeader({className: "bg-orange75 fg-white", style: {margin: 0}},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h3(null, "jCrop : Basic")
	                        )
	                      )
	                    )
	                  ),
	                  PanelBody(null,
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.br(null),
	                          React.DOM.div(null, React.DOM.img({src: "public/imgs/wefunction/020.jpg", ref: "target", alt: "[Jcrop example]", width: "100%", height: "350"})),
	                          React.DOM.br(null),
	                          React.DOM.p(null,
	                            React.DOM.strong(null,
	                              "This example demonstrates the default behavior of Jcrop."
	                            ), React.DOM.br(null),
	                            React.DOM.span(null, "Since no event handlers have been attached it only performs the cropping behavior.")
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              ),
	              PanelContainer({controlStyles: "bg-darkgreen45 fg-white"},
	                Panel(null,
	                  PanelHeader({className: "bg-darkgreen45 fg-white", style: {margin: 0}},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h3(null, "jCrop : Handler")
	                        )
	                      )
	                    )
	                  ),
	                  PanelBody(null,
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.br(null),
	                          React.DOM.div(null, React.DOM.img({src: "public/imgs/unsplash/parie.jpg", ref: "eventtarget", alt: "[Jcrop example]", width: "100%", height: "350"})),
	                          React.DOM.br(null),
	                          Form({id: "coords",
	                            className: "coords"},
	                            React.DOM.div({className: "inline-labels"},
	                              Label({inline: true}, "X1 ", Input({defaultValue: 0, className: "form-control", type: "text", size: "4", id: "x1", name: "x1"})),
	                              Label({inline: true}, "Y1 ", Input({defaultValue: 0, className: "form-control", type: "text", size: "4", id: "y1", name: "y1"})),
	                              Label({inline: true}, "X2 ", Input({defaultValue: 0, className: "form-control", type: "text", size: "4", id: "x2", name: "x2"})),
	                              Label({inline: true}, "Y2 ", Input({defaultValue: 0, className: "form-control", type: "text", size: "4", id: "y2", name: "y2"})),
	                              Label({inline: true}, "W ", Input({defaultValue: 0, className: "form-control", type: "text", size: "4", id: "w", name: "w"})),
	                              Label({inline: true}, "H ", Input({defaultValue: 0, className: "form-control", type: "text", size: "4", id: "h", name: "h"}))
	                            )
	                          ),

	                          React.DOM.div({className: "description"},
	                            React.DOM.p(null,
	                              React.DOM.b(null, "An example with a basic event handler."), "Here we've tied several form values together with a simple event handler invocation. The result is that the form values are updated in real-time as the selection is changed using Jcrop's ", React.DOM.em(null, "onChange"), " handler."
	                            ),

	                            React.DOM.p(null,
	                              "That's how easily Jcrop can be integrated into a traditional web form!"
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              ),
	              PanelContainer({controlStyles: "bg-red fg-white"},
	                Panel(null,
	                  PanelHeader({className: "bg-red fg-white", style: {margin: 0}},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h3(null, "jCrop : Aspect Ratio with Preview Pane")
	                        )
	                      )
	                    )
	                  ),
	                  PanelBody(null,
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.br(null),
	                          Grid(null,
	                            Row(null,
	                              Col({sm: 8, collapseLeft: true, collapseRight: true},
	                                React.DOM.img({src: "public/imgs/unsplash/hot-air-baloon.jpg", ref: "aspectwithpreview", alt: "[Jcrop example]", width: "100%", height: "350"})
	                              ),
	                              Col({sm: 4, collapseLeft: true, collapseRight: true},
	                                React.DOM.div({id: "preview-pane", style: {display: 'block', position: 'absolute', zIndex: 2000, top: 10, right: '-250px', padding: 6, border: '1px rgba(0,0,0,.4) solid', background: 'white', borderRadius: 6}},
	                                  React.DOM.div({className: "preview-container", style: {width: 225, height: 170, overflow: 'hidden'}},
	                                    React.DOM.img({src: "public/imgs/unsplash/hot-air-baloon.jpg", alt: "[Jcrop example]", className: "jcrop-preview", alt: "Preview", width: "100%"})
	                                  )
	                                )
	                              )
	                            )
	                          ),
	                          React.DOM.br(null),
	                          React.DOM.div({className: "description"},
	                            React.DOM.p(null,
	                              React.DOM.b(null, "An example implementing a preview pane."),
	                                "Obviously the most visual demo, the preview pane is accomplished" + ' ' +
	                                "entirely outside of Jcrop with a simple jQuery-flavored callback." + ' ' +
	                                "This type of interface could be useful for creating a thumbnail" + ' ' +
	                                "or avatar. The onChange event handler is used to update the" + ' ' +
	                                "view in the preview pane."
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              ),
	              PanelContainer({controlStyles: "bg-purple fg-white"},
	                Panel(null,
	                  PanelHeader({className: "bg-purple fg-white", style: {margin: 0}},
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.h3(null, "jCrop : Animations + Transitions")
	                        )
	                      )
	                    )
	                  ),
	                  PanelBody(null,
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          React.DOM.br(null),
	                          Grid(null,
	                            Row(null,
	                              Col({sm: 7, collapseLeft: true, collapseRight: true},
	                                React.DOM.div(null, React.DOM.img({src: "public/imgs/wefunction/020.jpg", ref: "animationstransitions", alt: "[Jcrop example]", width: "100%", height: "350"})),
	                                React.DOM.br(null),
	                                React.DOM.div({className: "description"},
	                                  React.DOM.p({id: "shadetxt", style: {display:'none', color:'#900;'}},
	                                    React.DOM.b(null, "Experimental shader active."),
	                                    React.DOM.span(null, "Jcrop now includes a shading mode that facilitates building better transparent Jcrop instances. The experimental shader is less robust than Jcrop's default shading method and should only be used if you require this functionality.")
	                                  ),
	                                  React.DOM.p(null,
	                                    React.DOM.b(null, "Animation/Transitions."),
	                                    React.DOM.span(null, "Demonstration of animateTo API method and transitions for bgColor and bgOpacity options. Color fading requires inclusion of John Resig's jQuery"), React.DOM.a({href: "http://plugins.jquery.com/project/color"}, "Color  Animations"), " plugin. If it is not included, colors will not fade."
	                                  )
	                                )
	                              ),
	                              Col({sm: 5, id: "interface"},
	                                Checkbox({id: "fadetog"},
	                                  "Enable fading (bgFade: true)"
	                                ),
	                                Checkbox({id: "shadetog"},
	                                  "Use experimental shader (shade: true)"
	                                )
	                              )
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ),
	        this.props.children
	      )
	    );
	  }
	});

	var classSet = React.addons.classSet;
	var Crop = React.createClass({displayName: 'Crop',
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = classSet({
	      'container-open': this.state.open
	    });
	    return (
	      Container({id: "container", className: classes},
	        Sidebar(null),
	        Header(null),
	        Body(null,
	          Footer(null)
	        )
	      )
	    );
	  }
	});

	module.exports = Crop;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(50);
	var Sidebar = __webpack_require__(51);
	var Footer = __webpack_require__(52);

	var Body = React.createClass({displayName: 'Body',
	  back: function(e) {
	    e.preventDefault();
	    e.stopPropagation();
	    RRouter.routing.navigate('/app/invoice');
	  },
	  componentWillMount: function() {
	    $('html').addClass('authentication');
	  },
	  componentWillUnmount: function() {
	    $('html').removeClass('authentication');
	  },
	  render: function() {
	    return (
	      Container({id: "auth-container", className: "login"},
	        Container({id: "auth-row"},
	          Container({id: "auth-cell"},
	            Grid(null,
	              Row(null,
	                Col({sm: 12},
	                  PanelContainer({noControls: true},
	                    Panel(null,
	                      PanelBody({style: {padding: 0}},
	                        React.DOM.div({className: "text-center bg-darkblue fg-white"},
	                          React.DOM.h3({style: {margin: 0, padding: 25}}, "Sign in to Rubix")
	                        ),
	                        React.DOM.div({className: "bg-hoverblue fg-black50 text-center", style: {padding: 12.5}},
	                          React.DOM.div(null, "You need to sign in for those awesome features"),
	                          React.DOM.div({style: {marginTop: 12.5, marginBottom: 12.5}},
	                            Button({id: "facebook-btn", lg: true, bsStyle: "darkblue", type: "submit", onClick: this.back},
	                              Icon({glyph: "icon-fontello-facebook"}),
	                              React.DOM.span(null, "Sign in with facebook")
	                            )
	                          ),
	                          React.DOM.div(null,
	                            React.DOM.a({id: "twitter-link", href: "#", onClick: this.back}, Icon({glyph: "icon-fontello-twitter"}), React.DOM.span(null, " or with twitter"))
	                          )
	                        ),
	                        React.DOM.div(null,
	                          React.DOM.div({className: "text-center", style: {padding: 12.5}},
	                            "or use your Rubix account"
	                          ),
	                          React.DOM.div({style: {padding: 25, paddingTop: 0, paddingBottom: 0, margin: 'auto', marginBottom: 25, marginTop: 25}},
	                            Form({onSubmit: this.back},
	                              FormGroup(null,
	                                InputGroup({lg: true},
	                                  InputGroupAddon(null,
	                                    Icon({glyph: "icon-fontello-mail"})
	                                  ),
	                                  Input({autoFocus: true, type: "email", id: "emailaddress", className: "border-focus-blue", placeholder: "support@sketchpixy.com"})
	                                )
	                              ),
	                              FormGroup(null,
	                                InputGroup({lg: true},
	                                  InputGroupAddon(null,
	                                    Icon({glyph: "icon-fontello-key"})
	                                  ),
	                                  Input({type: "password", id: "password", className: "border-focus-blue", placeholder: "password"})
	                                )
	                              ),
	                              FormGroup(null,
	                                Grid(null,
	                                  Row(null,
	                                    Col({xs: 6, collapseLeft: true, collapseRight: true, style: {paddingTop: 10}},
	                                      Link({href: "/app/signup"}, "Create a Rubix account")
	                                    ),
	                                    Col({xs: 6, collapseLeft: true, collapseRight: true, className: "text-right"},
	                                      Button({outlined: true, lg: true, type: "submit", bsStyle: "blue", onClick: this.back}, "Login")
	                                    )
	                                  )
	                                )
	                              )
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        )
	      )
	    );
	  }
	});

	var classSet = React.addons.classSet;
	var LoginPage = React.createClass({displayName: 'LoginPage',
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = classSet({
	      'container-open': this.state.open
	    });
	    return this.transferPropsTo(
	      Container({id: "container", className: classes},
	        Body(null)
	      )
	    );
	  }
	});

	module.exports = LoginPage;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(50);
	var Sidebar = __webpack_require__(51);
	var Footer = __webpack_require__(52);

	var Body = React.createClass({displayName: 'Body',
	  back: function(e) {
	    e.preventDefault();
	    e.stopPropagation();
	    RRouter.routing.navigate('/app/invoice');
	  },
	  componentWillMount: function() {
	    $('html').addClass('authentication');
	  },
	  componentWillUnmount: function() {
	    $('html').removeClass('authentication');
	  },
	  render: function() {
	    return (
	      Container({id: "auth-container", className: "signup"},
	        Container({id: "auth-row"},
	          Container({id: "auth-cell"},
	            Grid(null,
	              Row(null,
	                Col({sm: 12},
	                  PanelContainer({noControls: true},
	                    Panel(null,
	                      PanelBody({style: {padding: 0}},
	                        React.DOM.div({className: "text-center bg-darkblue fg-white"},
	                          React.DOM.h3({style: {margin: 0, padding: 25}}, "Sign up")
	                        ),
	                        React.DOM.div(null,
	                          React.DOM.div({style: {padding: 25, paddingTop: 0, paddingBottom: 0, margin: 'auto', marginBottom: 25, marginTop: 25}},
	                            Form({onSubmit: this.back},
	                              FormGroup(null,
	                                InputGroup({lg: true},
	                                  InputGroupAddon(null,
	                                    Icon({glyph: "icon-fontello-user"})
	                                  ),
	                                  Input({autoFocus: true, type: "text", id: "username", className: "border-focus-blue", placeholder: "Username"})
	                                )
	                              ),
	                              FormGroup(null,
	                                InputGroup({lg: true},
	                                  InputGroupAddon(null,
	                                    Icon({glyph: "icon-fontello-mail"})
	                                  ),
	                                  Input({type: "email", id: "emailaddress", className: "border-focus-blue", placeholder: "support@sketchpixy.com"})
	                                )
	                              ),
	                              FormGroup(null,
	                                InputGroup({lg: true},
	                                  InputGroupAddon(null,
	                                    Icon({glyph: "icon-fontello-key"})
	                                  ),
	                                  Input({type: "password", id: "password", className: "border-focus-blue", placeholder: "password"})
	                                )
	                              ),
	                              FormGroup(null,
	                                Grid(null,
	                                  Row(null,
	                                    Col({xs: 12, collapseLeft: true, collapseRight: true},
	                                      Button({type: "submit", outlined: true, lg: true, bsStyle: "blue", block: true, onClick: this.back}, "Create account")
	                                    )
	                                  )
	                                )
	                              )
	                            )
	                          ),
	                          React.DOM.div({className: "bg-hoverblue fg-black50 text-center", style: {padding: 25, paddingTop: 12.5}},
	                            React.DOM.div({style: {marginBottom: 12.5}}, "SIGN UP WITH"),
	                            Grid(null,
	                              Row(null,
	                                Col({xs: 6, className: "facebook-container", collapseLeft: true, collapseRight: true},
	                                  Button({block: true, type: "submit", id: "facebook-btn", lg: true, bsStyle: "darkblue", onClick: this.back},
	                                    Icon({glyph: "icon-fontello-facebook"}),
	                                    React.DOM.span(null, "Facebook")
	                                  )
	                                ),
	                                Col({xs: 6, className: "twitter-container", collapseLeft: true, collapseRight: true},
	                                  Button({block: true, type: "submit", id: "twitter-btn", lg: true, bsStyle: "darkblue", onClick: this.back},
	                                    Icon({glyph: "icon-fontello-twitter"}),
	                                    React.DOM.span(null, "Twitter")
	                                  )
	                                )
	                              )
	                            ),
	                            React.DOM.div({style: {marginTop: 25}},
	                              "Already have an account? ", Link({href: "/app/login"}, "Login")
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        )
	      )
	    );
	  }
	});

	var classSet = React.addons.classSet;
	var SignupPage = React.createClass({displayName: 'SignupPage',
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = classSet({
	      'container-open': this.state.open
	    });
	    return this.transferPropsTo(
	      Container({id: "container", className: classes},
	        Body(null)
	      )
	    );
	  }
	});

	module.exports = SignupPage;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(50);
	var Sidebar = __webpack_require__(51);
	var Footer = __webpack_require__(52);

	var Body = React.createClass({displayName: 'Body',
	  interval: null,
	  getTimeState: function() {
	    return {
	      time: moment().format('hh:mm:ss'),
	      date: moment().format('dddd, MMMM YYYY')
	    }
	  },
	  getInitialState: function() {
	    return this.getTimeState();
	  },
	  back: function(e) {
	    e.preventDefault();
	    e.stopPropagation();
	    window.history.back();
	  },
	  componentWillMount: function() {
	    $('html').addClass('authentication');
	  },
	  componentWillUnmount: function() {
	    clearInterval(this.interval);
	    $('html').removeClass('authentication');
	  },
	  componentDidMount: function() {
	    this.interval = setInterval(function() {
	      this.setState(this.getTimeState());
	    }.bind(this), 500);
	  },
	  render: function() {
	    return (
	      Container({id: "auth-container", className: "lockpage"},
	        Container({id: "auth-row"},
	          Container({id: "auth-cell"},
	            Grid(null,
	              Row(null,
	                Col({sm: 12, className: "text-center"},
	                  React.DOM.h1({className: "fg-white", style: {fontSize: 81, fontWeight: 300}}, this.state.time),
	                  React.DOM.h6({className: "fg-white"}, this.state.date)
	                )
	              ),
	              Row({style: {marginTop: 50}},
	                Col({sm: 12, className: "text-center"},
	                  Form({onSubmit: this.back},
	                    Label({htmlFor: "annasanchez"}, "Anna Sanchez"),
	                    React.DOM.img({src: "public/imgs/avatars/avatar.jpg"}),
	                    Input({type: "password", placeholder: "Password", autoFocus: true}),
	                    Button({type: "submit", className: "hidden"}, "Unlock")
	                  )
	                )
	              )
	            )
	          )
	        )
	      )
	    );
	  }
	});

	var classSet = React.addons.classSet;
	var LockPage = React.createClass({displayName: 'LockPage',
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = classSet({
	      'container-open': this.state.open
	    });
	    return this.transferPropsTo(
	      Container({id: "container", className: classes},
	        Body(null)
	      )
	    );
	  }
	});

	module.exports = LockPage;


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(50);
	var Sidebar = __webpack_require__(51);
	var Footer = __webpack_require__(52);

	var Body = React.createClass({displayName: 'Body',
	  render: function() {
	    return (
	      Container({id: "body"},
	        Grid(null,
	          Row(null,
	            Col({sm: 12},
	              PricingTableContainer(null,
	                PricingTable({sm: 3},
	                  PricingTableHeader(null,
	                    React.DOM.div(null, "starter"),
	                    PricingTablePrice(null, "$19")
	                  ),
	                  PricingTableBody(null,
	                    PricingFeature(null,
	                      React.DOM.strong(null, "1"), " domain"
	                    ),
	                    PricingFeature(null,
	                      React.DOM.strong(null, "0.25GHz"), " CPU"
	                    ),
	                    PricingFeature(null,
	                      React.DOM.strong(null, "512MB"), " RAM"
	                    ),
	                    PricingFeature(null,
	                      React.DOM.strong(null, "10GB"), " bandwidth"
	                    ),
	                    PricingFeature(null,
	                      React.DOM.strong(null, "10GB"), " storage space"
	                    ),
	                    PricingButtonContainer(null,
	                      Button({outlined: true, lg: true, onlyOnHover: true, bsStyle: "lightblue50"}, "choose plan")
	                    )
	                  )
	                ),

	                PricingTable({sm: 3},
	                  PricingTableHeader(null,
	                    React.DOM.div(null, "basic"),
	                    PricingTablePrice(null, "$29")
	                  ),
	                  PricingTableBody(null,
	                    PricingFeature(null,
	                      React.DOM.strong(null, "2"), " domains"
	                    ),
	                    PricingFeature(null,
	                      React.DOM.strong(null, "0.5GHz"), " CPU"
	                    ),
	                    PricingFeature(null,
	                      React.DOM.strong(null, "1GB"), " RAM"
	                    ),
	                    PricingFeature(null,
	                      React.DOM.strong(null, "20GB"), " bandwidth"
	                    ),
	                    PricingFeature(null,
	                      React.DOM.strong(null, "20GB"), " storage space"
	                    ),
	                    PricingButtonContainer(null,
	                      Button({outlined: true, lg: true, onlyOnHover: true, bsStyle: "lightblue50"}, "choose plan")
	                    )
	                  )
	                ),

	                PricingTable({sm: 3, preferred: true, className: "border-theme"},
	                  PricingTableHeader({className: "bg-theme fg-white"},
	                    React.DOM.div(null, "pro"),
	                    PricingTablePrice({className: "bg-theme"}, "$49")
	                  ),
	                  PricingTableBody(null,
	                    PricingFeature(null,
	                      React.DOM.strong(null, "5"), " domains"
	                    ),
	                    PricingFeature(null,
	                      React.DOM.strong(null, "1.5GHz"), " CPU"
	                    ),
	                    PricingFeature(null,
	                      React.DOM.strong(null, "2GB"), " RAM"
	                    ),
	                    PricingFeature(null,
	                      React.DOM.strong(null, "100GB"), " bandwidth"
	                    ),
	                    PricingFeature(null,
	                      React.DOM.strong(null, "500GB"), " storage space"
	                    ),
	                    PricingButtonContainer(null,
	                      Button({lg: true, bsStyle: "theme"}, "choose plan")
	                    )
	                  )
	                ),

	                PricingTable({sm: 3},
	                  PricingTableHeader(null,
	                    React.DOM.div(null, "ultra"),
	                    PricingTablePrice(null, "$99")
	                  ),
	                  PricingTableBody(null,
	                    PricingFeature(null,
	                      React.DOM.strong(null, "20"), " domains"
	                    ),
	                    PricingFeature(null,
	                      React.DOM.strong(null, "4GHz"), " CPU"
	                    ),
	                    PricingFeature(null,
	                      React.DOM.strong(null, "10GB"), " RAM"
	                    ),
	                    PricingFeature(null,
	                      React.DOM.strong(null, "2TB"), " bandwidth"
	                    ),
	                    PricingFeature(null,
	                      React.DOM.strong(null, "5TB"), " storage space"
	                    ),
	                    PricingButtonContainer(null,
	                      Button({outlined: true, lg: true, onlyOnHover: true, bsStyle: "lightblue50"}, "choose plan")
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ),
	        this.props.children
	      )
	    );
	  }
	});

	var classSet = React.addons.classSet;
	var PricingTablesPage = React.createClass({displayName: 'PricingTablesPage',
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = classSet({
	      'container-open': this.state.open
	    });
	    return this.transferPropsTo(
	      Container({id: "container", className: classes},
	        Sidebar(null),
	        Header(null),
	        Body(null,
	          Footer(null)
	        )
	      )
	    );
	  }
	});

	module.exports = PricingTablesPage;


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(50);
	var Sidebar = __webpack_require__(51);
	var Footer = __webpack_require__(52);

	var Body = React.createClass({displayName: 'Body',
	  render: function() {
	    return (
	      Container({id: "body"},
	        Grid(null,
	          Row(null,
	            Col({xs: 12},
	              PanelContainer(null,
	                Panel(null,
	                  PanelHeader(null,
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 6, style: {paddingTop: 25}},
	                          React.DOM.div(null, React.DOM.img({src: "public/imgs/shots/liontechlogo.jpg"})), React.DOM.br(null),
	                          React.DOM.address(null,
	                            React.DOM.strong({className: "fg-black50"}, "LionTech Dummy Corp."), React.DOM.br(null),
	                            "123 Folsom Ave, Suite 600", React.DOM.br(null),
	                            "San Francisco, CA 94107", React.DOM.br(null),
	                            React.DOM.abbr({title: "Phone"}, "P:"), " (123) 456-7890", React.DOM.br(null),
	                            React.DOM.div({className: "hidden-print"}, React.DOM.abbr({title: "Email"}, "E:"), ' ', React.DOM.a({href: "mailto:support@sketchpixy.com"}, "support@sketchpixy.com"))
	                          )
	                        ),
	                        Col({xs: 6, className: "text-right", style: {paddingTop: 25}},
	                          React.DOM.h2({className: "fg-black", style: {margin: 0, marginBottom: 12.5}}, "Invoice #006699"),
	                          React.DOM.div(null, "Issued April 24th, 2014"),
	                          React.DOM.div({className: "fg-red hidden-print"}, "Payment due September 25th, 2014"), React.DOM.br(null),
	                          React.DOM.address(null,
	                            React.DOM.strong({className: "fg-black50"}, "SuperTech Client."), React.DOM.br(null),
	                            "795 Folsom Ave, Suite 300", React.DOM.br(null),
	                            "San Francisco, CA 12345", React.DOM.br(null),
	                            React.DOM.abbr({title: "Phone"}, "P:"), " (098) 765-4321"
	                          )
	                        )
	                      )
	                    ),
	                    React.DOM.hr({className: "hidden-print", style: {marginTop: 0}})
	                  ),
	                  PanelBody(null,
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 12},
	                          Table({striped: true},
	                            React.DOM.thead({className: "bg-darkgrayishblue75 fg-white"},
	                              React.DOM.tr(null,
	                                React.DOM.th(null, "#"),
	                                React.DOM.th(null, "Item"),
	                                React.DOM.th(null, "Quantity"),
	                                React.DOM.th(null, "Unit Price"),
	                                React.DOM.th(null, "Sub-total")
	                              )
	                            ),
	                            React.DOM.tbody(null,
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "1"),
	                                React.DOM.td(null, "Website wireframe for 5 pages"),
	                                React.DOM.td(null, "10 hours"),
	                                React.DOM.td(null, "$75"),
	                                React.DOM.td(null, "$750")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "2"),
	                                React.DOM.td(null, "Design and layout of 5 pages in Photoshop"),
	                                React.DOM.td(null, "20 hours"),
	                                React.DOM.td(null, "$75"),
	                                React.DOM.td(null, "$1,500")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "3"),
	                                React.DOM.td(null, "Logo design"),
	                                React.DOM.td(null, "1"),
	                                React.DOM.td(null, "$500"),
	                                React.DOM.td(null, "$500")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "4"),
	                                React.DOM.td(null, "PSD to HTML coding"),
	                                React.DOM.td(null, "25 hours"),
	                                React.DOM.td(null, "$100"),
	                                React.DOM.td(null, "$2,500")
	                              ),
	                              React.DOM.tr(null,
	                                React.DOM.td(null, "5"),
	                                React.DOM.td(null, "E-Commerce development"),
	                                React.DOM.td(null, "10 hours"),
	                                React.DOM.td(null, "$100"),
	                                React.DOM.td(null, "$1,000")
	                              )
	                            ),
	                            React.DOM.tfoot({className: "bg-darkgrayishblue75 fg-white"},
	                              React.DOM.tr(null,
	                                React.DOM.th({colSpan: "3"}),
	                                React.DOM.th(null, "Total"),
	                                React.DOM.th(null, "$6,250")
	                              )
	                            )
	                          )
	                        )
	                      )
	                    ),
	                    React.DOM.hr({className: "hidden-print", style: {marginTop: 0}}),
	                    Grid(null,
	                      Row(null,
	                        Col({xs: 8},
	                          React.DOM.p(null,
	                            LoremIpsum({query: "6s"})
	                          ),
	                          React.DOM.p(null,
	                            React.DOM.strong(null, "Thank you very much for choosing us. It was a pleasure to have worked with you.")
	                          ),
	                          React.DOM.p(null,
	                            React.DOM.img({src: "public/imgs/shots/paypal.jpg", style: {marginLeft: -8, marginRight: -8}})
	                          )
	                        ),
	                        Col({xs: 4},
	                          React.DOM.div({className: "bg-darkgrayishblue75 text-uppercase text-centered"},
	                              React.DOM.h5({className: "subheader fg-white", style: {margin: 0, padding: 12.5}}, "amount due")
	                          ),
	                          React.DOM.div(null,
	                              Table(null,
	                                React.DOM.tbody(null,
	                                  React.DOM.tr(null,
	                                    React.DOM.td(null, "Subtotal"),
	                                    React.DOM.td(null, "$6,250")
	                                  ),
	                                  React.DOM.tr(null,
	                                    React.DOM.td(null, "Tax (2%)"),
	                                    React.DOM.td(null, "$125")
	                                  ),
	                                  React.DOM.tr(null,
	                                    React.DOM.td(null, "Total"),
	                                    React.DOM.td(null, "$6,375")
	                                  )
	                                )
	                              )
	                          )
	                        )
	                      )
	                    ),
	                    React.DOM.hr({className: "hidden-print", style: {marginTop: 0}}),
	                    Grid({className: "hidden-print"},
	                      Row(null,
	                        Col({xs: 12, className: "text-right"},
	                          React.DOM.div(null, Button({outlined: true, lg: true, bsStyle: "darkgrayishblue75", onClick: window.print}, "print invoice")), React.DOM.br(null)
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ),
	        this.props.children
	      )
	    );
	  }
	});

	var classSet = React.addons.classSet;
	var Invoice = React.createClass({displayName: 'Invoice',
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = classSet({
	      'container-open': this.state.open
	    });
	    return this.transferPropsTo(
	      Container({id: "container", className: classes},
	        Sidebar(null),
	        Header(null),
	        Body(null,
	          Footer(null)
	        )
	      )
	    );
	  }
	});

	module.exports = Invoice;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(50);
	var Sidebar = __webpack_require__(51);
	var Footer = __webpack_require__(52);

	var PostSummary = React.createClass({displayName: 'PostSummary',
	  render: function() {
	    return (
	      PanelContainer({noControls: true},
	        Panel(null,
	          PanelHeader(null,
	            React.DOM.div({style: {background: 'url('+this.props.img+')', height: 250, backgroundSize: 'cover', backgroundPosition: 'center'}})
	          ),
	          PanelBody(null,
	            Grid(null,
	              Row(null,
	                Col({xs: 12},
	                  React.DOM.h3({className: "fg-black50"}, this.props.header),
	                  Grid(null,
	                    Row(null,
	                      Col({xs: 6, collapseLeft: true, collapseRight: true},
	                        React.DOM.div({className: "fg-darkgray50"},
	                          React.DOM.small(null, "by ", Link({href: "/app/blog/post"}, this.props.author), " / ", this.props.date)
	                        )
	                      ),
	                      Col({xs: 6, collapseLeft: true, collapseRight: true, className: "text-right"},
	                        React.DOM.div({className: "fg-darkgray25 fg-hover-black50"},
	                          React.DOM.small(null, Icon({glyph: "icon-ikons-time", style: {position: 'relative', top: 1}}), React.DOM.span(null, " ", this.props.minutes, " minutes read"))
	                        )
	                      )
	                    )
	                  ),
	                  React.DOM.p({style: {marginTop: 25}},
	                    React.DOM.span(null, this.props.children, "..")
	                  ),
	                  React.DOM.p(null,
	                    Link({href: "/app/blog/post"}, "Read More")
	                  )
	                )
	              )
	            ),
	            React.DOM.hr({style: {margin: 0}})
	          ),
	          PanelFooter(null,
	            Grid(null,
	              Row(null,
	                Col({xs: 4, style: {paddingTop: 12.5, paddingBottom: 12.5}},
	                  React.DOM.div(null, React.DOM.small(null, Icon({glyph: "icon-ikons-hashtag", style: {position: 'relative', top: 1}}), " ", this.props.tag))
	                ),
	                Col({xs: 8, className: "text-right", style: {paddingTop: 12.5, paddingBottom: 12.5}},
	                  React.DOM.div({style: {display: 'inline-block', marginLeft: 25}},
	                    Icon({style: {position: 'relative', lineHeight: 0, top: 2}, glyph: "icon-ikons-speech-3"}), React.DOM.span(null, " ", this.props.comments)
	                  ), ' ',
	                  React.DOM.div({style: {display: 'inline-block', marginLeft: 25}},
	                    Icon({style: {position: 'relative', lineHeight: 0}, glyph: "icon-fontello-share"}), React.DOM.span(null, " ", Math.round(this.props.comments * Math.random())+2)
	                  ),
	                  React.DOM.div({className: "fg-pink", style: {display: 'inline-block', marginLeft: 25}},
	                    Icon({style: {position: 'relative', lineHeight: 0, top: 2}, glyph: "icon-ikons-heart"}), React.DOM.span(null, " ", Math.round(this.props.comments * Math.random())+5)
	                  )
	                )
	              )
	            )
	          )
	        )
	      )
	    );
	  }
	});

	var Avatar = React.createClass({displayName: 'Avatar',
	  render: function() {
	    return (
	      React.DOM.div({className: "inbox-avatar"},
	        React.DOM.img({src: this.props.src, width: "40", height: "40"}),
	        React.DOM.div({className: "inbox-avatar-name"},
	          React.DOM.div({className: "fg-darkgrayishblue75", style: {top: 0}}, this.props.children)
	        )
	      )
	    );
	  }
	});

	var Body = React.createClass({displayName: 'Body',
	  render: function() {
	    return (
	      Container({id: "body"},
	        PanelContainer({plain: true, collapseBottom: true},
	          Panel({horizontal: true},
	            PanelLeft(null,
	              Grid(null,
	                Row(null,
	                  Col({xs: 12},
	                    PostSummary({
	                      img: "public/imgs/gallery/tumblr_na0kb0BLqR1st5lhmo1_1280.jpg",
	                      header: "Is Paris Best Experienced Through The Lens Of A Camera?",
	                      author: "Jordyn Ouellet (guest author)",
	                      date: "Sep 2, 2014",
	                      minutes: "5",
	                      tag: "ENTERTAINMENT",
	                      comments: "55"},
	                        LoremIpsum({query: "4s"})
	                    ),
	                    PostSummary({
	                      img: "public/imgs/gallery/tumblr_n7fgnop0bz1st5lhmo1_1280.jpg",
	                      header: "10 Things You Didn't Know Your Mac Could Do!",
	                      author: "Anna Sanchez",
	                      date: "Sep 3, 2014",
	                      minutes: "10",
	                      tag: "TECHNOLOGY",
	                      comments: "140"},
	                        LoremIpsum({query: "4s"})
	                    ),
	                    PostSummary({
	                      img: "public/imgs/gallery/tumblr_n9hyk7kMxc1st5lhmo1_1280.jpg",
	                      header: "Nostalgia is denial - denial of the painful present. The name for this denial is golden age thinking.",
	                      author: "Angelina Mills",
	                      date: "Sep 4, 2014",
	                      minutes: "22",
	                      tag: "PHILOSOPHY",
	                      comments: "300"},
	                        LoremIpsum({query: "4s"})
	                    )
	                  )
	                )
	              ),

	              React.DOM.div({className: "text-center"},
	                Pagination({sm: true},
	                  Page({begin: true, disabled: true}),
	                  Page({active: true, href: "#"},
	                    React.DOM.span(null, "1"),
	                    React.DOM.span({className: "sr-only"}, "(current)")
	                  ),
	                  Page({href: "#"}, "2"),
	                  Page({href: "#"}, "3"),
	                  Page({href: "#"}, "4"),
	                  Page({href: "#"}, "5"),
	                  Page({end: true})
	                )
	              )
	            ),
	            PanelRight({className: "hidden-xs", style: {width: 350}},
	              Grid(null,
	                Row(null,
	                  Col({xs: 12, collapseLeft: true},
	                    PanelContainer({noControls: true},
	                      Panel({horizontal: true},
	                        PanelLeft({style: {verticalAlign: 'middle'}},
	                          Grid(null,
	                            Row(null,
	                              Col({xs: 12},
	                                React.DOM.div(null,
	                                  React.DOM.div({style: {paddingTop: 12.5, paddingBottom: 12.5}},
	                                    "Hi! My name is Anna Sanchez and I'm an innate minimalist."
	                                  )
	                                )
	                              )
	                            )
	                          )
	                        ),
	                        PanelRight({className: "bg-yellow", style: {verticalAlign: 'middle', padding: 12.5, width: 80}},
	                          React.DOM.div({className: "text-center"}, Img({src: "public/imgs/avatars/avatar0.png", width: "40", height: "40", style: {borderRadius: 100}}))
	                        )
	                      )
	                    ),

	                    PanelContainer({noControls: true},
	                      PanelBody({style: {paddingBottom: 25, verticalAlign: 'middle'}},
	                        React.DOM.div({className: "text-center"},
	                          Button({bsStyle: "darkblue", className: "btn-icon", onlyOnHover: true},
	                            Icon({glyph: "icon-fontello-facebook"})
	                          ), ' ',
	                          Button({bsStyle: "blue", className: "btn-icon", onlyOnHover: true},
	                            Icon({glyph: "icon-fontello-twitter"})
	                          ), ' ',
	                          Button({bsStyle: "red", className: "btn-icon", onlyOnHover: true},
	                            Icon({glyph: "icon-fontello-gplus"})
	                          ), ' ',
	                          Button({bsStyle: "pink", className: "btn-icon", onlyOnHover: true},
	                            Icon({glyph: "icon-fontello-dribbble"})
	                          ), ' ',
	                          Button({bsStyle: "red", className: "btn-icon", onlyOnHover: true},
	                            Icon({glyph: "icon-fontello-flickr"})
	                          ), ' ',
	                          Button({bsStyle: "orange75", className: "btn-icon", onlyOnHover: true},
	                            Icon({glyph: "icon-fontello-instagram"})
	                          )
	                        )
	                      )
	                    ),

	                    PanelContainer({noControls: true},
	                      PanelBody({style: {paddingBottom: 12.5}},
	                        Grid(null,
	                          Row(null,
	                            Col({xs: 12, className: "text-center"},
	                              React.DOM.div({className: "text-left"},
	                                React.DOM.div({className: "text-uppercase blog-sidebar-heading"},
	                                  React.DOM.small(null, "Trending posts")
	                                ),
	                                React.DOM.div({style: {marginBottom: 12.5}},
	                                  Link({href: "/app/blog/post"},
	                                    LoremIpsum({className: "text-capitalize", query: "3w"}), ". ", LoremIpsum({className: "text-capitalize", query: "2w"}), "?"
	                                  ),
	                                  React.DOM.div(null, React.DOM.small({className: "fg-darkgray50"}, React.DOM.em(null, "2 minutes ago"), " - ", React.DOM.span({className: "fg-lightgreen"}, "Jordyn Ouellet")))
	                                ),
	                                React.DOM.div({style: {marginBottom: 12.5}},
	                                  Link({href: "/app/blog/post"}, LoremIpsum({className: "text-capitalize", query: "3w"})),
	                                  React.DOM.div(null, React.DOM.small({className: "fg-darkgray50"}, React.DOM.em(null, "5 hours ago"), " - ", React.DOM.span({className: "fg-lightgreen"}, "Toby King")))
	                                ),
	                                React.DOM.div({style: {marginBottom: 12.5}},
	                                  Link({href: "/app/blog/post"}, LoremIpsum({className: "text-capitalize", query: "3w"})),
	                                  React.DOM.div(null, React.DOM.small({className: "fg-darkgray50"}, React.DOM.em(null, "3 days ago"), " - ", React.DOM.span({className: "fg-lightgreen"}, "Angelina Mills")))
	                                ),
	                                React.DOM.div(null,
	                                  Link({href: "/app/blog/post"}, LoremIpsum({className: "text-capitalize", query: "3w"})),
	                                  React.DOM.div(null, React.DOM.small({className: "fg-darkgray50"}, React.DOM.em(null, "4 months ago"), " - ", React.DOM.span({className: "fg-lightgreen"}, "Anna Sanchez")))
	                                )
	                              )
	                            )
	                          )
	                        ),
	                        React.DOM.hr(null),
	                        Grid(null,
	                          Row(null,
	                            Col({xs: 12, className: "text-center"},
	                              Tag(null, "web"), ' ',
	                              Tag(null, "travel"), ' ',
	                              Tag(null, "w3c"), ' ',
	                              Tag(null, "semantic"), ' ',
	                              Tag(null, "mac"), ' ',
	                              Tag(null, "music"), ' ',
	                              Tag(null, "html"), ' ',
	                              Tag(null, "javascript"), ' ',
	                              Tag(null, "css3"), ' ',
	                              Tag(null, "nodejs"), ' ',
	                              Tag(null, "linux"), ' ',
	                              Tag(null, "reactjs"), ' '
	                            )
	                          )
	                        )
	                      )
	                    ),

	                    PanelContainer({noControls: true},
	                      Panel(null,
	                        PanelBody({style: {paddingBottom: 25}},
	                          Grid(null,
	                            Row(null,
	                              Col({xs: 12},
	                                React.DOM.div(null,
	                                  React.DOM.div({className: "text-uppercase blog-sidebar-heading"},
	                                    React.DOM.small(null, "Our writers")
	                                  ),
	                                  Avatar({src: "public/imgs/avatars/avatar5.png"}, "Jordyn Ouellet"),
	                                  Avatar({src: "public/imgs/avatars/avatar9.png"}, "Ava Parry"),
	                                  Avatar({src: "public/imgs/avatars/avatar10.png"}, "Angelina Mills"),
	                                  Avatar({src: "public/imgs/avatars/avatar7.png"}, "Toby King")
	                                )
	                              )
	                            )
	                          ),
	                          React.DOM.hr(null),
	                          Grid(null,
	                            Row(null,
	                              Col({xs: 12},
	                                InputGroup(null,
	                                  Input({type: "text", placeholder: "email@example.com"}),
	                                  InputGroupButton(null, Button({bsStyle: "darkgreen45"}, "subscribe"))
	                                )
	                              )
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ),
	        this.props.children
	      )
	    );
	  }
	});

	var classSet = React.addons.classSet;
	var BlogPostsPage = React.createClass({displayName: 'BlogPostsPage',
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = classSet({
	      'container-open': this.state.open
	    });
	    return (
	      Container({id: "container", className: classes},
	        Sidebar(null),
	        Header(null),
	        Body(null,
	          Footer(null)
	        )
	      )
	    );
	  }
	});

	module.exports = BlogPostsPage;


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(50);
	var Sidebar = __webpack_require__(51);
	var Footer = __webpack_require__(52);

	var Post = React.createClass({displayName: 'Post',
	  render: function() {
	    return this.transferPropsTo(
	      PanelContainer({noControls: true},
	        Panel(null,
	          PanelHeader(null,
	            React.DOM.div({style: {position: 'relative', height: 350}},
	              React.DOM.div({className: "blog-post-header"}),
	              React.DOM.div({className: "text-center", style: {position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}},
	                Grid(null,
	                  Row(null,
	                    Col({xs: 12, className: "fg-white"},
	                      React.DOM.div({style: {maxWidth: 600, margin: 'auto'}},
	                        React.DOM.h3({style: {margin: 25, fontWeight: 100, color: 'rgba(255,255,255,0.35)'}}, "⸺"),
	                        React.DOM.h1({style: {fontWeight: 800}}, "Paris Experience"),
	                        React.DOM.p({style: {fontWeight: 300, color: 'rgba(255,255,255,0.75)', marginBottom: 25}},
	                          LoremIpsum({query: "5s", className: "hidden-xs"}),
	                          LoremIpsum({query: "3s", className: "visible-xs"})
	                        ),
	                        React.DOM.div({className: "text-center blog-post-btn-holder"},
	                          Button({bsStyle: "darkblue", className: "btn-icon", retainBackground: true},
	                            Icon({glyph: "icon-fontello-facebook"})
	                          ), ' ',
	                          Button({bsStyle: "blue", className: "btn-icon", retainBackground: true},
	                            Icon({glyph: "icon-fontello-twitter"})
	                          ), ' ',
	                          Button({bsStyle: "red", className: "btn-icon", retainBackground: true},
	                            Icon({glyph: "icon-fontello-gplus"})
	                          ), ' ',
	                          Button({bsStyle: "orange75", className: "btn-icon", retainBackground: true},
	                            Icon({glyph: "icon-fontello-instagram"})
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          ),
	          PanelBody(null,
	            Grid(null,
	              Row(null,
	                Col({xs: 12, style: {padding: 60}},
	                  React.DOM.h2({className: "fg-black", style: {fontWeight: 800, marginTop: 0}}, this.props.header),
	                  Grid({gutterBottom: true},
	                    Row(null,
	                      Col({xs: 6, collapseLeft: true, collapseRight: true},
	                        React.DOM.div({className: "fg-darkgray50"},
	                          React.DOM.small(null, "by ", Link({href: "#"}, this.props.author), " / ", this.props.date)
	                        )
	                      ),
	                      Col({xs: 6, collapseLeft: true, collapseRight: true, className: "text-right"},
	                        React.DOM.div({className: "fg-darkgray25 fg-hover-black50"},
	                          React.DOM.small(null, Icon({glyph: "icon-ikons-time", style: {position: 'relative', top: 1}}), React.DOM.span(null, " ", this.props.minutes, " minutes read"))
	                        )
	                      )
	                    )
	                  ),
	                  React.DOM.div(null, this.props.children)
	                )
	              )
	            )
	          )
	        )
	      )
	    );
	  }
	});

	var Body = React.createClass({displayName: 'Body',
	  render: function() {
	    return (
	      Container({id: "body"},
	        Grid(null,
	          Row(null,
	            Col({xs: 12},
	              Post({
	                header: "Paris through Pentax",
	                author: "Jordyn Ouellet (guest author)",
	                date: "Sep 2, 2014",
	                minutes: "2",
	                tag: "ENTERTAINMENT",
	                comments: "10"},
	                Lead({className: "fg-black75"},
	                  LoremIpsum({query: "4s"}), ".."
	                ),
	                React.DOM.p(null,
	                  LoremIpsum({query: "2s"}), ' ',
	                  Link({href: "#", className: "text-capitalize"}, LoremIpsum({query: "2w"})), ' ',
	                  LoremIpsum({query: "3s"})
	                ),
	                React.DOM.div(null,
	                  React.DOM.div({className: "embed-responsive embed-responsive-16by9", style: {marginTop: 25, marginBottom: 25}},
	                    React.DOM.iframe({className: "embed-responsive-item", src: "//player.vimeo.com/video/104088954", allowFullScreen: true})
	                  )
	                ),
	                React.DOM.div(null,
	                  React.DOM.h3({className: "fg-black text-capitalize", style: {fontWeight: 800}}, LoremIpsum({query: "3w"})),
	                  React.DOM.p(null, LoremIpsum({query: "1s"}), ' ', React.DOM.strong(null, React.DOM.em(null, LoremIpsum({query: "1s"})))),
	                  React.DOM.blockquote(null,
	                    LoremIpsum({query: "3s"})
	                  ),
	                  React.DOM.p(null, LoremIpsum({query: "7s"})),
	                  React.DOM.div({className: "text-uppercase"},
	                    React.DOM.small(null,
	                      React.DOM.span(null, React.DOM.strong(null, "Tagged in: ")), Link({href: "/app/blog/posts"}, "Entertainment"),
	                      React.DOM.span(null, " • "),
	                      Link({href: "#"}, "No comments")
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ),
	        this.props.children
	      )
	    );
	  }
	});

	var classSet = React.addons.classSet;
	var SinglePost = React.createClass({displayName: 'SinglePost',
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = classSet({
	      'container-open': this.state.open
	    });
	    return (
	      Container({id: "container", className: classes},
	        Sidebar(null),
	        Header(null),
	        Body(null,
	          Footer(null)
	        )
	      )
	    );
	  }
	});

	module.exports = SinglePost;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(50);
	var Sidebar = __webpack_require__(51);
	var Footer = __webpack_require__(52);

	var ChartContainer = React.createClass({displayName: 'ChartContainer',
	  render: function() {
	    return (
	      PanelContainer({noOverflow: true},
	        Panel(null,
	          PanelBody({style: {padding: 25}, className: "text-center"},
	            React.DOM.h4(null, this.props.name),
	            React.DOM.div(null, React.DOM.canvas({id: this.props.id, width: this.props.width, height: this.props.height}))
	          )
	        )
	      )
	    );
	  }
	});

	var Body = React.createClass({displayName: 'Body',
	  getInitialState: function() {
	    return {
	      legend: ''
	    };
	  },
	  componentDidMount: function() {
	    (function() {
	      var ctx = $("#line-chart").get(0).getContext("2d");
	      var data = {
	        labels: ["January", "February", "March", "April", "May", "June", "July"],
	        datasets: [
	          {
	            label: "My First dataset",
	            fillColor: "rgba(220,220,220,0.2)",
	            strokeColor: "rgba(220,220,220,1)",
	            pointColor: "rgba(220,220,220,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(220,220,220,1)",
	            data: [65, 59, 80, 81, 56, 55, 40]
	          },
	          {
	            label: "My Second dataset",
	            fillColor: "rgba(151,187,205,0.2)",
	            strokeColor: "rgba(151,187,205,1)",
	            pointColor: "rgba(151,187,205,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(151,187,205,1)",
	            data: [28, 48, 40, 19, 86, 27, 90]
	          }
	        ]
	      };
	      new Chart(ctx).Line(data);
	    })();
	    (function() {
	      var ctx = $("#bar-chart").get(0).getContext("2d");
	      var data = {
	        labels: ["January", "February", "March", "April", "May", "June", "July"],
	        datasets: [
	          {
	            label: "My First dataset",
	            fillColor: "rgba(220,220,220,0.5)",
	            strokeColor: "rgba(220,220,220,0.8)",
	            highlightFill: "rgba(220,220,220,0.75)",
	            highlightStroke: "rgba(220,220,220,1)",
	            data: [65, 59, 80, 81, 56, 55, 40]
	          },
	          {
	            label: "My Second dataset",
	            fillColor: "rgba(151,187,205,0.5)",
	            strokeColor: "rgba(151,187,205,0.8)",
	            highlightFill: "rgba(151,187,205,0.75)",
	            highlightStroke: "rgba(151,187,205,1)",
	            data: [28, 48, 40, 19, 86, 27, 90]
	          }
	        ]
	      };
	      new Chart(ctx).Bar(data);
	    })();
	    (function() {
	      var ctx = $("#pie-chart").get(0).getContext("2d");
	      var data = [
	        {
	          value: 300,
	          color:"#F7464A",
	          highlight: "#FF5A5E",
	          label: "Red"
	        },
	        {
	          value: 50,
	          color: "#46BFBD",
	          highlight: "#5AD3D1",
	          label: "Green"
	        },
	        {
	          value: 100,
	          color: "#FDB45C",
	          highlight: "#FFC870",
	          label: "Yellow"
	        }
	      ]
	      new Chart(ctx).Pie(data);
	    })();

	    (function() {
	      var ctx = $("#donut-chart").get(0).getContext("2d");
	      var data = [
	        {
	          value: 300,
	          color:"#F7464A",
	          highlight: "#FF5A5E",
	          label: "Red"
	        },
	        {
	          value: 50,
	          color: "#46BFBD",
	          highlight: "#5AD3D1",
	          label: "Green"
	        },
	        {
	          value: 100,
	          color: "#FDB45C",
	          highlight: "#FFC870",
	          label: "Yellow"
	        }
	      ];
	      new Chart(ctx).Doughnut(data);
	    })();

	    (function() {
	      var ctx = $("#radar-chart").get(0).getContext("2d");
	      var data = {
	        labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
	        datasets: [
	          {
	            label: "My First dataset",
	            fillColor: "rgba(220,220,220,0.2)",
	            strokeColor: "rgba(220,220,220,1)",
	            pointColor: "rgba(220,220,220,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(220,220,220,1)",
	            data: [65, 59, 90, 81, 56, 55, 40]
	          },
	          {
	            label: "My Second dataset",
	            fillColor: "rgba(151,187,205,0.2)",
	            strokeColor: "rgba(151,187,205,1)",
	            pointColor: "rgba(151,187,205,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(151,187,205,1)",
	            data: [28, 48, 40, 19, 96, 27, 100]
	          }
	        ]
	      };
	      new Chart(ctx).Radar(data);
	    })();

	    (function() {
	      var ctx = $("#polar-chart").get(0).getContext("2d");
	      var data = [
	        {
	          value: 300,
	          color:"#F7464A",
	          highlight: "#FF5A5E",
	          label: "Red"
	        },
	        {
	          value: 50,
	          color: "#46BFBD",
	          highlight: "#5AD3D1",
	          label: "Green"
	        },
	        {
	          value: 100,
	          color: "#FDB45C",
	          highlight: "#FFC870",
	          label: "Yellow"
	        },
	        {
	          value: 40,
	          color: "#949FB1",
	          highlight: "#A8B3C5",
	          label: "Grey"
	        },
	        {
	          value: 120,
	          color: "#4D5360",
	          highlight: "#616774",
	          label: "Dark Grey"
	        }
	      ];
	      new Chart(ctx).PolarArea(data);
	    })();
	  },
	  render: function() {
	    return (
	      Container({id: "body"},
	        Grid(null,
	          Row(null,
	            Col({sm: 12},
	              ChartContainer({id: "line-chart", height: "75", width: "250", name: "Line Chart"}),
	              ChartContainer({id: "bar-chart", height: "75", width: "250", name: "Bar Chart"}),
	              ChartContainer({id: "radar-chart", height: "75", width: "250", name: "Radar Chart"}),
	              ChartContainer({id: "polar-chart", height: "75", width: "250", name: "Polar Chart"}),
	              PanelContainer({noOverflow: true},
	                Panel(null,
	                  PanelBody({style: {padding: 25}, className: "text-center"},
	                    React.DOM.h4(null, "Pie + Donut Chart"),
	                    React.DOM.div({style: {width: '50%', display: 'inline-block'}}, React.DOM.canvas({id: "pie-chart"})),
	                    React.DOM.div({style: {width: '50%', display: 'inline-block'}}, React.DOM.canvas({id: "donut-chart"}))
	                  )
	                )
	              )
	            )
	          )
	        ),
	        this.props.children
	      )
	    );
	  }
	});

	var classSet = React.addons.classSet;
	var ChartJSPage = React.createClass({displayName: 'ChartJSPage',
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = classSet({
	      'container-open': this.state.open
	    });
	    return this.transferPropsTo(
	      Container({id: "container", className: classes},
	        Sidebar(null),
	        Header(null),
	        Body(null,
	          Footer(null)
	        )
	      )
	    );
	  }
	});

	module.exports = ChartJSPage;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(50);
	var Sidebar = __webpack_require__(51);
	var Footer = __webpack_require__(52);

	var ChartContainer = React.createClass({displayName: 'ChartContainer',
	  render: function() {
	    return (
	      PanelContainer({noOverflow: true},
	        Panel(null,
	          PanelBody({style: {padding: 25}, className: "text-center"},
	            React.DOM.h4(null, this.props.name),
	            React.DOM.div(null, React.DOM.div({id: this.props.id}))
	          )
	        )
	      )
	    );
	  }
	});

	var Body = React.createClass({displayName: 'Body',
	  componentDidMount: function() {
	    (function() {
	      var chart = c3.generate({
	        bindto: '#line-chart',
	        data: {
	          columns: [
	            ['data1', 30, 200, 100, 400, 150, 250],
	            ['data2', 50, 20, 10, 40, 15, 25]
	            ]
	          }
	      });

	      setTimeout(function () {
	        chart.load({
	          columns: [
	            ['data1', 230, 190, 300, 500, 300, 400]
	          ]
	        });
	      }, 1000);

	      setTimeout(function () {
	        chart.load({
	          columns: [
	            ['data3', 130, 150, 200, 300, 200, 100]
	          ]
	        });
	      }, 1500);

	      setTimeout(function () {
	        chart.unload({
	          ids: 'data1'
	        });
	      }, 2000);
	    })();

	    (function() {
	      var chart = c3.generate({
	        bindto: '#timeseries-chart',
	        data: {
	          x: "x",
	          columns: ["x 2013-01-01 2013-01-02 2013-01-03 2013-01-04 2013-01-05 2013-01-06".split(" "), ["data1", 30, 200, 100, 400, 150, 250],
	              ["data2", 130, 340, 200, 500, 250, 350]
	          ]
	        },
	        axis: {
	          x: {
	            type: "timeseries",
	            tick: {
	              format: "%Y-%m-%d"
	            }
	          }
	        }
	      });
	      setTimeout(function() {
	        chart.load({
	          columns: [
	            ["data3", 400, 500, 450, 700, 600, 500]
	          ]
	        });
	      }, 2000);
	    })();

	    (function() {
	      var chart = c3.generate({
	        bindto: '#spline-chart',
	        data: {
	          columns: [
	            ['data1', 30, 200, 100, 400, 150, 250],
	            ['data2', 130, 100, 140, 200, 150, 50]
	          ],
	          type: 'spline'
	        }
	      });
	    })();

	    (function() {
	      var chart = c3.generate({
	        bindto: '#step-chart',
	        data: {
	          columns: [
	            ['data1', 300, 350, 300, 0, 0, 100],
	            ['data2', 130, 100, 140, 200, 150, 50]
	          ],
	          types: {
	            data1: 'step',
	            data2: 'area-step'
	          }
	        }
	      });
	    })();

	    (function() {
	      var chart = c3.generate({
	        bindto: '#area-chart',
	        data: {
	          columns: [
	            ['data1', 300, 350, 300, 0, 0, 0],
	            ['data2', 130, 100, 140, 200, 150, 50]
	          ],
	          types: {
	            data1: 'area',
	            data2: 'area-spline'
	          }
	        }
	      });
	    })();

	    (function() {
	      var chart = c3.generate({
	        bindto: '#bar-chart',
	        data: {
	          columns: [
	            ['data1', 30, 200, 100, 400, 150, 250],
	            ['data2', 130, 100, 140, 200, 150, 50],
	            ['data3', 130, -150, 200, 300, -200, 100]
	          ],
	          type: 'bar'
	        },
	        bar: {
	          width: {
	            ratio: 0.5
	          }
	        }
	      });
	    })();

	    (function() {
	      var chart = c3.generate({
	        bindto: '#stackedbar-chart',
	        data: {
	          columns: [
	            ['data1', -30, 200, 200, 400, -150, 250],
	            ['data2', 130, 100, -100, 200, -150, 50],
	            ['data3', -230, 200, 200, -300, 250, 250]
	          ],
	          type: 'bar',
	          groups: [
	            ['data1', 'data2']
	          ]
	        },
	        grid: {
	          y: {
	            lines: [{value:0}]
	          }
	        }
	      });

	      setTimeout(function () {
	        chart.groups([['data1', 'data2', 'data3']])
	      }, 1000);

	      setTimeout(function () {
	        chart.load({
	          columns: [['data4', 100, -50, 150, 200, -300, -100]]
	        });
	      }, 1500);

	      setTimeout(function () {
	        chart.groups([['data1', 'data2', 'data3', 'data4']])
	      }, 2000);
	    })();

	    (function() {
	      var chart = c3.generate({
	        bindto: '#scatter-chart',
	        data: {
	          xs: {
	              setosa: 'setosa_x',
	              versicolor: 'versicolor_x',
	          },
	          // iris data from R
	          columns: [
	            ["setosa_x", 3.5, 3.0, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3.0, 3.0, 4.0, 4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3.0, 3.4, 3.5, 3.4, 3.2, 3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3.0, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3.0, 3.8, 3.2, 3.7, 3.3],
	            ["versicolor_x", 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2.0, 3.0, 2.2, 2.9, 2.9, 3.1, 3.0, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3.0, 2.8, 3.0, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3.0, 3.4, 3.1, 2.3, 3.0, 2.5, 2.6, 3.0, 2.6, 2.3, 2.7, 3.0, 2.9, 2.9, 2.5, 2.8],
	            ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
	            ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3]
	          ],
	          type: 'scatter'
	        },
	        axis: {
	          x: {
	            label: 'Sepal.Width',
	            tick: {
	              fit: false
	            }
	          },
	          y: {
	            label: 'Petal.Width'
	          }
	        }
	      });

	      setTimeout(function () {
	        chart.load({
	          xs: {
	            virginica: 'virginica_x'
	          },
	          columns: [
	            ["virginica_x", 3.3, 2.7, 3.0, 2.9, 3.0, 3.0, 2.5, 2.9, 2.5, 3.6, 3.2, 2.7, 3.0, 2.5, 2.8, 3.2, 3.0, 3.8, 2.6, 2.2, 3.2, 2.8, 2.8, 2.7, 3.3, 3.2, 2.8, 3.0, 2.8, 3.0, 2.8, 3.8, 2.8, 2.8, 2.6, 3.0, 3.4, 3.1, 3.0, 3.1, 3.1, 3.1, 2.7, 3.2, 3.3, 3.0, 2.5, 3.0, 3.4, 3.0],
	            ["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8]
	          ]
	        });
	      }, 5000);

	      setTimeout(function () {
	        chart.unload({
	          ids: 'setosa'
	        });
	      }, 7000);

	      setTimeout(function () {
	        chart.load({
	          columns: [
	            ["virginica", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
	          ]
	        });
	      }, 9000);
	    })();

	    (function() {
	      var chart = c3.generate({
	        bindto: '#gauge-chart',
	        data: {
	          columns: [
	            ['data', 91.4]
	          ],
	          type: 'gauge'
	        },
	        color: {
	          pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'],
	          threshold: {
	            values: [30, 60, 90, 100]
	          }
	        }
	      });

	      setTimeout(function () {
	        chart.load({
	          columns: [['data', 10]]
	        });
	      }, 10000);

	      setTimeout(function () {
	        chart.load({
	          columns: [['data', 50]]
	        });
	      }, 12000);

	      setTimeout(function () {
	        chart.load({
	          columns: [['data', 70]]
	        });
	      }, 13000);

	      setTimeout(function () {
	        chart.load({
	          columns: [['data', 0]]
	        });
	      }, 14000);

	      setTimeout(function () {
	        chart.load({
	          columns: [['data', 100]]
	        });
	      }, 15000);
	    })();

	    (function() {
	      var chart = c3.generate({
	        bindto: '#pie-chart',
	        data: {
	          columns: [
	            ['data1', 30],
	            ['data2', 120],
	          ],
	          type : 'pie'
	        }
	      });
	    })();
	  },
	  render: function() {
	    return (
	      Container({id: "body"},
	        Grid(null,
	          Row(null,
	            Col({sm: 12},
	            ChartContainer({id: "stackedbar-chart", name: "Stacked Bar Chart"}),
	            ChartContainer({id: "bar-chart", name: "Bar Chart"}),
	            ChartContainer({id: "line-chart", name: "Line Chart"}),
	            ChartContainer({id: "timeseries-chart", name: "Timeseries Chart"}),
	            ChartContainer({id: "spline-chart", name: "Spline Chart"}),
	            ChartContainer({id: "scatter-chart", name: "Scatter Chart"}),
	            ChartContainer({id: "step-chart", name: "Step Chart"}),
	            ChartContainer({id: "area-chart", name: "Area Chart"}),
	            ChartContainer({id: "pie-chart", name: "Pie Chart"}),
	            ChartContainer({id: "gauge-chart", name: "Gauge"})
	            )
	          )
	        ),
	        this.props.children
	      )
	    );
	  }
	});

	var classSet = React.addons.classSet;
	var C3JSPage = React.createClass({displayName: 'C3JSPage',
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = classSet({
	      'container-open': this.state.open
	    });
	    return this.transferPropsTo(
	      Container({id: "container", className: classes},
	        Sidebar(null),
	        Header(null),
	        Body(null,
	          Footer(null)
	        )
	      )
	    );
	  }
	});

	module.exports = C3JSPage;


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(50);
	var Sidebar = __webpack_require__(51);
	var Footer = __webpack_require__(52);

	var ChartContainer = React.createClass({displayName: 'ChartContainer',
	  render: function() {
	    return (
	      PanelContainer({noOverflow: true},
	        Panel(null,
	          PanelBody({style: {padding: 25}, className: "text-center"},
	            React.DOM.h4(null, this.props.name),
	            React.DOM.div({id: this.props.id})
	          )
	        )
	      )
	    );
	  }
	});

	var Body = React.createClass({displayName: 'Body',
	  componentDidMount: function() {
	    (function() {
	      // data stolen from http://howmanyleft.co.uk/vehicle/jaguar_'e'_type
	      var tax_data = [
	           {"period": "2011 Q3", "licensed": 3407, "sorned": 660},
	           {"period": "2011 Q2", "licensed": 3351, "sorned": 629},
	           {"period": "2011 Q1", "licensed": 3269, "sorned": 618},
	           {"period": "2010 Q4", "licensed": 3246, "sorned": 661},
	           {"period": "2009 Q4", "licensed": 3171, "sorned": 676},
	           {"period": "2008 Q4", "licensed": 3155, "sorned": 681},
	           {"period": "2007 Q4", "licensed": 3226, "sorned": 620},
	           {"period": "2006 Q4", "licensed": 3245, "sorned": null},
	           {"period": "2005 Q4", "licensed": 3289, "sorned": null}
	      ];
	      Morris.Line({
	        element: 'hero-graph',
	        data: tax_data,
	        xkey: 'period',
	        ykeys: ['licensed', 'sorned'],
	        labels: ['Licensed', 'Off the road']
	      });

	      Morris.Donut({
	        element: 'hero-donut',
	        data: [
	          {label: 'Jam', value: 25 },
	          {label: 'Frosted', value: 40 },
	          {label: 'Custard', value: 25 },
	          {label: 'Sugar', value: 10 }
	        ],
	        formatter: function (y) { return y + "%" }
	      });

	      Morris.Area({
	        element: 'hero-area',
	        data: [
	          {period: '2010 Q1', iphone: 2666, ipad: null, itouch: 2647},
	          {period: '2010 Q2', iphone: 2778, ipad: 2294, itouch: 2441},
	          {period: '2010 Q3', iphone: 4912, ipad: 1969, itouch: 2501},
	          {period: '2010 Q4', iphone: 3767, ipad: 3597, itouch: 5689},
	          {period: '2011 Q1', iphone: 6810, ipad: 1914, itouch: 2293},
	          {period: '2011 Q2', iphone: 5670, ipad: 4293, itouch: 1881},
	          {period: '2011 Q3', iphone: 4820, ipad: 3795, itouch: 1588},
	          {period: '2011 Q4', iphone: 15073, ipad: 5967, itouch: 5175},
	          {period: '2012 Q1', iphone: 10687, ipad: 4460, itouch: 2028},
	          {period: '2012 Q2', iphone: 8432, ipad: 5713, itouch: 1791}
	        ],
	        xkey: 'period',
	        ykeys: ['iphone', 'ipad', 'itouch'],
	        labels: ['iPhone', 'iPad', 'iPod Touch'],
	        pointSize: 2,
	        hideHover: 'auto'
	      });

	      Morris.Bar({
	        element: 'hero-bar',
	        data: [
	          {device: 'iPhone', geekbench: 136},
	          {device: 'iPhone 3G', geekbench: 137},
	          {device: 'iPhone 3GS', geekbench: 275},
	          {device: 'iPhone 4', geekbench: 380},
	          {device: 'iPhone 4S', geekbench: 655},
	          {device: 'iPhone 5', geekbench: 1571}
	        ],
	        xkey: 'device',
	        ykeys: ['geekbench'],
	        labels: ['Geekbench'],
	        barRatio: 0.4,
	        xLabelAngle: 35,
	        hideHover: 'auto'
	      });
	    })();
	  },
	  render: function() {
	    return (
	      Container({id: "body"},
	        Grid(null,
	          Row(null,
	            Col({sm: 6, collapseRight: true},
	              ChartContainer({id: "hero-graph", name: "Jaguar 'E' Type vehicles in the UK"}),
	              ChartContainer({id: "hero-area", name: "Quarterly Apple iOS device unit sales"})
	            ),
	            Col({sm: 6},
	              ChartContainer({id: "hero-bar", name: "iPhone CPU benchmarks"}),
	              ChartContainer({id: "hero-donut", name: "Donut Flavours"})
	            )
	          )
	        ),
	        this.props.children
	      )
	    );
	  }
	});

	var classSet = React.addons.classSet;
	var MorrisJSPage = React.createClass({displayName: 'MorrisJSPage',
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = classSet({
	      'container-open': this.state.open
	    });
	    return this.transferPropsTo(
	      Container({id: "container", className: classes},
	        Sidebar(null),
	        Header(null),
	        Body(null,
	          Footer(null)
	        )
	      )
	    );
	  }
	});

	module.exports = MorrisJSPage;


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(50);
	var Sidebar = __webpack_require__(51);
	var Footer = __webpack_require__(52);

	var Chart = React.createClass({displayName: 'Chart',
	  render: function() {
	    return (
	      PanelContainer(null,
	        Panel(null,
	          PanelBody({style: {padding: 25}},
	            React.DOM.div({id: this.props.id})
	          )
	        )
	      )
	    );
	  }
	});

	var Body = React.createClass({displayName: 'Body',
	  componentDidMount: function() {
	    var t = 0,
	        v = 100;

	    var next = function() {
	      return {
	        x: ++t,
	        y: v = ~~Math.max(10, Math.min(90, v + 10 * (Math.random() - .5)))
	      };
	    };

	    (function() {
	      var chart = new Rubix('#slcnm', {
	        title: 'Single Line Chart',
	        subtitle: 'No markers',
	        width: '100%',
	        height: 200,
	        tooltip: {
	          color: '#0054A9',
	          format: {
	            x: '.0f',
	            y: '.0f'
	          }
	        }
	      });

	      var line = chart.line_series({
	        name: 'Series A',
	        color: '#0054A9'
	      });

	      var data = d3.range(100).map(next);
	      line.addData(data);
	    })();

	    (function() {
	      var chart = new Rubix('#mslc', {
	        height: 300,
	        title: 'Multi-Line Series Chart',
	        subtitle: 'With Markers',
	        tooltip: {
	          color: '#ECC279',
	          format: {
	            x: '.0f',
	            y: '.0f'
	          }
	        },
	        show_markers: true
	      });

	      var line = chart.line_series({
	        name: 'Series A',
	        color: '#79B0EC',
	        marker: 'circle'
	      });

	      var data = [
	        {x: 1, y: 10},
	        {x: 2, y: 15},
	        {x: 3, y: 5},
	        {x: 4, y: 12},
	        {x: 5, y: 7},
	        {x: 6, y: 9},
	        {x: 7, y: 2},
	        {x: 8, y: 5},
	        {x: 9, y: 10},
	        {x: 10, y: 12}
	      ];

	      line.addData(data);

	      var line2 = chart.line_series({
	        name: 'Series B',
	        color: '#426F9F',
	        marker: 'square'
	      });

	      var data2 = [];

	      for(var i=0; i < data.length; i++) {
	        data2.push({
	          x: data[i].x,
	          y: data[i].y+5
	        });
	      }

	      line2.addData(data2);

	      var line3 = chart.line_series({
	        name: 'Series C',
	        color: '#9F7832',
	        marker: 'cross'
	      });

	      var data3 = [];

	      for(var i=0; i < data2.length; i++) {
	        data3.push({
	          x: data2[i].x,
	          y: data2[i].y+5
	        });
	      }

	      line3.addData(data3);

	      var line4 = chart.line_series({
	        name: 'Series D',
	        color: '#ECC279',
	        marker: 'triangle-up'
	      });

	      var data4 = [];

	      for(var i=0; i < data3.length; i++) {
	        data4.push({
	          x: data3[i].x,
	          y: data3[i].y+Math.round((Math.random() * 10) + 2.5)
	        });
	      }

	      line4.addData(data4);
	    })();

	    (function() {
	      var genChart = function(id, symbol, color, subtitle) {
	        var chart = new Rubix(id, {
	          height: 200,
	          title: 'Markers',
	          titleColor: color,
	          subtitle: subtitle,
	          subtitleColor: color,
	          axis: {
	            x: {
	              tickCount: 4
	            }
	          },
	          tooltip: {
	            color: color,
	            format: {
	              x: '.0f',
	              y: '.0f'
	            }
	          },
	          show_markers: true
	        });

	        var line = chart.line_series({
	          name: symbol,
	          color: color,
	          marker: symbol
	        });

	        var data = d3.range(20).map(next);

	        line.addData(data);
	      };

	      genChart('#cirm', 'circle' , 'green', 'Circular');
	      genChart('#crom', 'cross'  , '#9F00A7', 'Cross shaped');
	      genChart('#sqm' , 'square' , '#DA532C', 'Square shaped');
	      genChart('#diam' , 'diamond' , '#00ABA9', 'Diamond shaped');
	      genChart('#tmu' , 'triangle-up' , '#b91d47', 'Triangle Up');
	      genChart('#tmd' , 'triangle-down' , '#2d89ef' ,'Triangle Down');
	    })();

	    (function() {
	      var chart = new Rubix('#scatter-plot', {
	        title: 'Scatter plot',
	        subtitle: 'Rendering 1,000 points',
	        titleColor: 'steelblue',
	        subtitleColor: 'steelblue',
	        height: 300,
	        tooltip: {
	          color: 'steelblue',
	          format: {
	            x: '.0f',
	            y: '.0f'
	          }
	        },
	        show_markers: true
	      });

	      var scatter = chart.line_series({
	        name: 'Scatter',
	        color: 'steelblue',
	        marker: 'circle',
	        scatter: true
	      });

	      var t = 1,
	          v = 100,
	          data = d3.range(333).map(function() {
	            return {
	              x: ++t,
	              y: Math.round(Math.random() * 300)
	            }
	          });
	          data = d3.merge([data, d3.range(333).map(function() {
	            return {
	              x: ++t,
	              y: Math.round(Math.random() * 300) + 300
	            }
	          })]);
	          data = d3.merge([data, d3.range(333).map(function() {
	            return {
	              x: ++t,
	              y: Math.round(Math.random() * 400) + 600
	            }
	          })]);
	      data[0] = {x:0, y: 0};
	      data.push({x: 1000, y: 1000});

	      scatter.addData(data);
	    })();

	    (function() {
	      var genChart = function(id, symbol, color, interpolation) {
	        var chart = new Rubix(id, {
	          height: 200,
	          title: interpolation + ' Interpolation',
	          titleColor: color,
	          tooltip: {
	            color: color,
	            format: {
	              x: '.0f',
	              y: '.0f'
	            }
	          },
	          interpolate: interpolation.toLowerCase()
	        });

	        var line = chart.line_series({
	          name: interpolation,
	          color: color,
	          marker: symbol
	        });

	        var data = d3.range(50).map(next);

	        line.addData(data);
	      };

	      genChart('#slcwis', 'cross', '#800040', 'Sankey');
	      genChart('#slcwim', 'diamond', 'cornflowerblue', 'Monotone');
	      genChart('#slcwisb', 'square', '#0080FF', 'Step-Before');
	      genChart('#slcwisa', 'triangle-up', '#FF0000', 'Step-After');
	      genChart('#slcwic', 'triangle-down', '#8000FF', 'Cardinal');
	      genChart('#slcwil', 'circle', '#804000', 'Linear');
	    })();
	  },
	  render: function() {
	    return (
	      Container({id: "body"},
	        Grid(null,
	          Row(null,
	            Col({sm: 12},
	              Chart({id: "slcnm"})
	            )
	          ),
	          Row(null,
	            Col({sm: 6, collapseRight: true},
	              Chart({id: "cirm"}),
	              Chart({id: "sqm"}),
	              Chart({id: "tmu"})
	            ),
	            Col({sm: 6},
	              Chart({id: "crom"}),
	              Chart({id: "diam"}),
	              Chart({id: "tmd"})
	            )
	          ),
	          Row(null,
	            Col({sm: 12},
	              Chart({id: "scatter-plot"})
	            )
	          ),
	          Row(null,
	            Col({sm: 6, collapseRight: true},
	              Chart({id: "slcwis"}),
	              Chart({id: "slcwim"}),
	              Chart({id: "slcwisb"})
	            ),
	            Col({sm: 6},
	              Chart({id: "slcwisa"}),
	              Chart({id: "slcwic"}),
	              Chart({id: "slcwil"})
	            )
	          ),
	          Row(null,
	            Col({sm: 12},
	              Chart({id: "mslc"})
	            )
	          )
	        ),
	        this.props.children
	      )
	    );
	  }
	});

	var classSet = React.addons.classSet;
	var RubixLineSeries = React.createClass({displayName: 'RubixLineSeries',
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = classSet({
	      'container-open': this.state.open
	    });
	    return this.transferPropsTo(
	      Container({id: "container", className: classes},
	        Sidebar(null),
	        Header(null),
	        Body(null,
	          Footer(null)
	        )
	      )
	    );
	  }
	});

	module.exports = RubixLineSeries;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(50);
	var Sidebar = __webpack_require__(51);
	var Footer = __webpack_require__(52);

	var Chart = React.createClass({displayName: 'Chart',
	  render: function() {
	    return (
	      PanelContainer(null,
	        Panel(null,
	          PanelBody({style: {padding: 25}},
	            React.DOM.div({id: this.props.id})
	          )
	        )
	      )
	    );
	  }
	});

	var Body = React.createClass({displayName: 'Body',
	  interval: null,
	  componentWillUnmount: function() {
	    clearInterval(this.interval);
	  },
	  componentDidMount: function() {
	    var t = 0,
	        v = 100;

	    var next = function() {
	      return {
	        x: ++t,
	        y: v = ~~Math.max(10, Math.min(90, v + 10 * (Math.random() - .5)))
	      };
	    };

	    (function() {
	      var chart = new Rubix('#slcnm', {
	        width: '100%',
	        height: 200,
	        title: 'Single area chart',
	        subtitle: 'no markers',
	        titleColor: '#0054A9',
	        subtitleColor: '#0054A9',
	        tooltip: {
	          color: '#0054A9',
	          format: {
	            x: '.0f',
	            y: '.0f'
	          }
	        }
	      });

	      var line = chart.area_series({
	        name: 'Series A',
	        color: '#0054A9'
	      });

	      var data = d3.range(100).map(next);
	      line.addData(data);
	    })();

	    (function() {
	      var chart = new Rubix('#stacked-area-offset-zero', {
	        height: 200,
	        title: 'Stacked Area',
	        subtitle: 'Offset: Zero',
	        tooltip: {
	          color: 'white',
	          format: {
	            x: '.0f',
	            y: '.0f'
	          }
	        },
	        stacked: true,
	        offset: 'zero'
	      });

	      var area = chart.area_series({
	        name: 'Series A',
	        color: '#804000',
	        marker: 'circle'
	      });

	      var t = 0,
	          v = 20,
	          data = d3.range(10).map(next);

	      area.addData(data);

	      var area2 = chart.area_series({
	        name: 'Series B',
	        color: 'cornflowerblue',
	        marker: 'square'
	      });

	      var t = 0,
	          v = 20,
	          data2 = d3.range(10).map(next);

	      area2.addData(data2);

	      var area3 = chart.area_series({
	        name: 'Series C',
	        color: 'brown',
	        marker: 'cross'
	      });

	      var t = 0,
	          v = 20,
	          data3 = d3.range(10).map(next);

	      function next() {
	        return {
	          x: ++t,
	          y: v = ~~Math.max(10, Math.min(90, v + 10 * (Math.random() - .5)))
	        };
	      }

	      area3.addData(data3);
	    })();

	    (function() {
	      var chart = new Rubix('#stacked-area-offset-wiggle', {
	        height: 200,
	        title: 'Stacked Area',
	        subtitle: 'Offset: Wiggle',
	        tooltip: {
	          color: 'white',
	          format: {
	            x: '.0f',
	            y: '.0f'
	          }
	        },
	        stacked: true,
	        offset: 'wiggle'
	      });

	      var area = chart.area_series({
	        name: 'Series A',
	        color: 'purple',
	        marker: 'circle'
	      });

	      var t = 0,
	          v = 50,
	          data = d3.range(10).map(next);

	      area.addData(data);

	      var area2 = chart.area_series({
	        name: 'Series B',
	        color: 'cornflowerblue',
	        marker: 'square'
	      });

	      var t = 0,
	          v = 50,
	          data2 = d3.range(10).map(next);

	      area2.addData(data2);

	      var area3 = chart.area_series({
	        name: 'Series C',
	        color: 'green',
	        marker: 'cross'
	      });

	      var t = 0,
	          v = 50,
	          data3 = d3.range(10).map(next);

	      function next() {
	          return {
	              x: ++t,
	              y: v = ~~Math.max(20, Math.min(90, v + 10 * (Math.random() - .5)))
	          };
	      }

	      area3.addData(data3);
	    })();

	    (function() {
	      var chart = new Rubix('#stacked-area-offset-silhouette', {
	        height: 200,
	        title: 'Stacked Area',
	        subtitle: 'Offset: Silhouette',
	        tooltip: {
	          color: 'white',
	          format: {
	            x: '.0f',
	            y: '.0f'
	          }
	        },
	        stacked: true,
	        offset: 'silhouette'
	      });

	      var area = chart.area_series({
	        name: 'Series A',
	        color: 'orange',
	        marker: 'circle'
	      });

	      var t = 0,
	          v = 20,
	          data = d3.range(10).map(next);

	      area.addData(data);

	      var area2 = chart.area_series({
	        name: 'Series B',
	        color: '#858400',
	        marker: 'square'
	      });

	      var t = 0,
	          v = 20,
	          data2 = d3.range(10).map(next);

	      area2.addData(data2);

	      var area3 = chart.area_series({
	        name: 'Series C',
	        color: 'lime',
	        marker: 'cross'
	      });

	      var t = 0,
	          v = 20,
	          data3 = d3.range(10).map(next);

	      area3.addData(data3);
	    })();

	    (function() {
	      var chart = new Rubix('#stacked-area-offset-expand', {
	        height: 200,
	        title: 'Stacked area',
	        subtitle: 'Offset: Expand',
	        tooltip: {
	          color: 'white',
	          format: {
	            x: '.0f',
	            y: '%'
	          }
	        },
	        axis: {
	          y: {
	            tickFormat: '%'
	          }
	        },
	        stacked: true,
	        offset: 'expand'
	      });

	      var area = chart.area_series({
	        name: 'Series A',
	        color: 'silver',
	        marker: 'circle'
	      });

	      var t = 0,
	          v = 20,
	          data = d3.range(10).map(next);

	      area.addData(data);

	      var area2 = chart.area_series({
	        name: 'Series B',
	        color: 'gray',
	        marker: 'square'
	      });

	      var t = 0,
	          v = 20,
	          data2 = d3.range(10).map(next);

	      area2.addData(data2);

	      var area3 = chart.area_series({
	        name: 'Series C',
	        color: '#666',
	        marker: 'cross'
	      });

	      var t = 0,
	          v = 20,
	          data3 = d3.range(10).map(next);

	      function next() {
	        return {
	          x: ++t,
	          y: v = ~~Math.max(10, Math.min(90, v + 10 * (Math.random() - .5)))
	        };
	      }

	      area3.addData(data3);
	    })();

	    (function() {
	      var chart = new Rubix('#realtime-stacked-chart', {
	        width: '100%',
	        height: 200,
	        title: 'Realtime Streamgraph (Silhouette + Monotone Interpolation)',
	        subtitle: 'Interval-based, immediate shift',
	        tooltip: {
	          color: 'cornflowerblue',
	          format: {
	            x: '.0f',
	            y: '.0f'
	          }
	        },
	        stacked: true,
	        offset: 'silhouette',
	        interpolate: 'monotone'
	      });

	      var area = chart.area_series({
	        name: 'Series A',
	        color: '#0054A9'
	      });

	      var t = 0,
	          v = 10,
	          data = d3.range(100).map(realtime_stacked_intvl);

	      function realtime_stacked_intvl() {
	        return {
	          x: ++t,
	          y: v = ~~Math.max(10, Math.min(90, v + 10 * (Math.random() - .5)))
	        };
	      }

	      area.addData(data);

	      var area2 = chart.area_series({
	        name: 'Series B',
	        color: 'cornflowerblue',
	        marker: 'square'
	      });

	      var t = 0,
	          v = 44,
	          data2 = d3.range(100).map(realtime_stacked_intvl);

	      area2.addData(data2);

	      this.interval = setInterval(function() {
	        area.addPoint(realtime_stacked_intvl(), true);
	        --t;
	        area2.addPoint(realtime_stacked_intvl(), true);
	      }, 2500);
	    }.bind(this))();
	  },
	  render: function() {
	    return (
	      Container({id: "body"},
	        Grid(null,
	          Row(null,
	            Col({sm: 12},
	              Chart({id: "slcnm"})
	            )
	          ),
	          Row(null,
	            Col({sm: 6, collapseRight: true},
	              Chart({id: "stacked-area-offset-zero"}),
	              Chart({id: "stacked-area-offset-silhouette"})
	            ),
	            Col({sm: 6},
	              Chart({id: "stacked-area-offset-wiggle"}),
	              Chart({id: "stacked-area-offset-expand"})
	            )
	          ),
	          Row(null,
	            Col({sm: 12},
	              Chart({id: "realtime-stacked-chart"})
	            )
	          )
	        ),
	        this.props.children
	      )
	    );
	  }
	});

	var classSet = React.addons.classSet;
	var RubixAreaSeries = React.createClass({displayName: 'RubixAreaSeries',
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = classSet({
	      'container-open': this.state.open
	    });
	    return this.transferPropsTo(
	      Container({id: "container", className: classes},
	        Sidebar(null),
	        Header(null),
	        Body(null,
	          Footer(null)
	        )
	      )
	    );
	  }
	});

	module.exports = RubixAreaSeries;


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(50);
	var Sidebar = __webpack_require__(51);
	var Footer = __webpack_require__(52);

	var Chart = React.createClass({displayName: 'Chart',
	  render: function() {
	    return (
	      PanelContainer(null,
	        Panel(null,
	          PanelBody({style: {padding: 25}},
	            React.DOM.div({id: this.props.id})
	          )
	        )
	      )
	    );
	  }
	});

	var Body = React.createClass({displayName: 'Body',
	  componentDidMount: function() {
	    (function() {
	        var chart = new Rubix('#single-series-column-chart', {
	          height: 300,
	          title: 'Single Series Column Chart',
	          subtitle: 'Fruits',
	          titleColor: '#D71F4B',
	          subtitleColor: '#D71F4B',
	          axis: {
	            x: {
	              type: 'ordinal',
	            },
	            y: {
	              type: 'linear',
	              tickFormat: 'd'
	            }
	          },
	          tooltip: {
	            color: '#D71F4B',
	            format: {
	              y: '.0f'
	            }
	          },
	          margin: {
	            left: 50
	          },
	          grouped: false,
	          show_markers: true
	        });

	        var fruits = chart.column_series({
	          name: 'Fruits',
	          color: '#D71F4B'
	        });

	        fruits.addData([
	          {x: 'Apples', y: 5},
	          {x: 'Oranges', y: 3},
	          {x: 'Pears', y: 4},
	          {x: 'Grapes', y: 7},
	          {x: 'Bananas', y: 2},
	          {x: 'Strawberry', y: 15}
	        ]);
	    })();

	    (function() {
	        var chart = new Rubix('#single-series-bar-chart', {
	          height: 300,
	          title: 'Single series bar chart',
	          titleColor: '#E299B7',
	          subtitle: 'Fruits',
	          subtitleColor: '#E299B7',
	          axis: {
	            x: {
	              type: 'ordinal',
	            },
	            y:  {
	              type: 'linear',
	              tickFormat: 'd'
	            }
	          },
	          tooltip: {
	            color: '#E299B7',
	            format: {
	              y: '.0f'
	            }
	          },
	          grouped: false,
	          show_markers: true
	        });

	        var fruits = chart.bar_series({
	          name: 'Fruits',
	          color: '#E299B7',
	          marker: 'square'
	        });

	        fruits.addData([
	          {x: 'Apples1', y: 5},
	          {x: 'Oranges1', y: 3},
	          {x: 'Pears1', y: 4},
	          {x: 'Grapes1', y: 7},
	          {x: 'Bananas1', y: 2},
	          {x: 'Strawberry1', y: 15}
	        ]);
	    })();

	    (function() {
	      var chart = new Rubix('#grouped-multi-series-column-chart', {
	        title: 'Grouped multi series column chart',
	        subtitle: 'Sales by Sales Persons [2006 - 2007]',
	        titleColor: '#2EB398',
	        subtitleColor: '#2EB398',
	        height: 300,
	        axis: {
	          x: {
	            type: 'ordinal',
	          },
	          y:  {
	            type: 'linear',
	            tickFormat: 'd'
	          }
	        },
	        tooltip: {
	          color: '#2EB398',
	          format: {
	            y: '.0f'
	          }
	        },
	        grouped: true,
	        show_markers: true
	      });

	      var year2006 = chart.column_series({
	        name: '2006',
	        color: '#2EB398'
	      });

	      year2006.addData([
	        {x: 'Amy Alberts', y: 1000},
	        {x: 'David Campbell', y: 1170},
	        {x: 'Garret Young', y: 660},
	        {x: 'Jae Pak', y: 1030}
	      ]);

	      var year2007 = chart.column_series({
	        name: '2007',
	        color: '#7CD5BA'
	      });

	      year2007.addData([
	        {x: 'Amy Alberts', y: 2000},
	        {x: 'David Campbell', y: 5170},
	        {x: 'Garret Young', y: 160},
	        {x: 'Jae Pak', y: 2030}
	      ]);
	    })();

	    (function() {
	      var chart = new Rubix('#grouped-multi-series-bar-chart', {
	        title: 'Grouped multi series bar chart',
	        subtitle: 'Company Performance [2004 - 2007]',
	        titleColor: '#EE682F',
	        subtitleColor: '#EE682F',
	        height: 300,
	        axis: {
	          x: {
	            type: 'ordinal',
	          },
	          y:  {
	            type: 'linear',
	            tickFormat: 'd'
	          }
	        },
	        tooltip: {
	          color: '#EE682F',
	          format: {
	            y: '.0f'
	          }
	        },
	        grouped: true,
	        show_markers: true
	      });

	      var sales = chart.bar_series({
	        name: 'Sales',
	        color: '#FFC9A0'
	      });

	      sales.addData([
	        {x: 2004, y: 1000},
	        {x: 2005, y: 1170},
	        {x: 2006, y: 660},
	        {x: 2007, y: 1030}
	      ]);

	      var expenses = chart.bar_series({
	        name: 'Expenses',
	        color: '#EE682F'
	      });

	      expenses.addData([
	        {x: 2004, y: 400},
	        {x: 2005, y: 460},
	        {x: 2006, y: 1120},
	        {x: 2007, y: 540}
	      ]);
	    })();

	    (function() {
	      var chart = new Rubix('#stacked-multi-series-column-chart', {
	        title: 'Stacked Multi Series Column chart',
	        subtitle: 'Total fruit consumption',
	        titleColor: '#EA7882',
	        subtitleColor: '#EA7882',
	        height: 300,
	        axis: {
	          x: {
	            type: 'ordinal'
	          },
	          y:  {
	            type: 'linear',
	            tickFormat: 'd',
	            label: 'Total fruit consumption'
	          }
	        },
	        tooltip: {
	          color: 'white',
	          format: {
	            y: '.0f'
	          }
	        },
	        show_markers: true
	      });

	      var john = chart.column_series({
	        name: 'John',
	        color: '#EA7882'
	      });

	      john.addData([
	        {x: 'Apples', y: 5},
	        {x: 'Oranges', y: 3},
	        {x: 'Pears', y: 4},
	        {x: 'Grapes', y: 7},
	        {x: 'Bananas', y: 2}
	      ]);

	      var jane = chart.column_series({
	        name: 'Jane',
	        color: '#79B0EC',
	        marker: 'square'
	      });

	      jane.addData([
	        {x: 'Apples', y: 2},
	        {x: 'Oranges', y: 2},
	        {x: 'Pears', y: 3},
	        {x: 'Grapes', y: 2},
	        {x: 'Bananas', y: 1}
	      ]);

	      var joe = chart.column_series({
	        name: 'Joe',
	        color: '#55C9A6',
	        marker: 'diamond'
	      });

	      joe.addData([
	        {x: 'Apples', y: 3},
	        {x: 'Oranges', y: 4},
	        {x: 'Pears', y: 4},
	        {x: 'Grapes', y: 2},
	        {x: 'Bananas', y: 5}
	      ]);
	    })();

	    (function() {
	      var chart = new Rubix('#stacked-multi-series-bar-chart', {
	        title: 'Stacked Multi series bar chart',
	        subtitle: 'Total fruit consumption',
	        titleColor: '#C36849',
	        subtitleColor: '#C36849',
	        height: 500,
	        axis: {
	          x: {
	            type: 'ordinal'
	          },
	          y:  {
	            type: 'linear',
	            tickFormat: 'd',
	            label: 'Total fruit consumption'
	          }
	        },
	        tooltip: {
	          color: '#C36849',
	          format: {
	            y: '.0f'
	          }
	        },
	        show_markers: true
	      });

	      var john = chart.bar_series({
	        name: 'John',
	        color: '#3E5F90'
	      });

	      john.addData([
	        {x: 'Apples', y: 5},
	        {x: 'Oranges', y: 3},
	        {x: 'Pears', y: 4},
	        {x: 'Grapes', y: 7},
	        {x: 'Bananas', y: 2}
	      ]);

	      var jane = chart.bar_series({
	        name: 'Jane',
	        color: '#C67055',
	        marker: 'square'
	      });

	      jane.addData([
	        {x: 'Apples', y: 2},
	        {x: 'Oranges', y: 2},
	        {x: 'Pears', y: 3},
	        {x: 'Grapes', y: 2},
	        {x: 'Bananas', y: 1}
	      ]);

	      var joe = chart.bar_series({
	        name: 'Joe',
	        color: '#E69E8F',
	        marker: 'diamond'
	      });

	      joe.addData([
	        {x: 'Apples', y: 3},
	        {x: 'Oranges', y: 4},
	        {x: 'Pears', y: 4},
	        {x: 'Grapes', y: 2},
	        {x: 'Bananas', y: 5}
	      ]);
	    })();

	    (function() {
	      var chart = new Rubix('#stacked-multi-series-column-chart-negative', {
	        title: 'Stacked column chart with negative values',
	        subtitle: 'Profit/Expense chart',
	        titleColor: '#0080FF',
	        subtitleColor: '#0080FF',
	        height: 300,
	        axis: {
	          x: {
	            type: 'ordinal'
	          },
	          y:  {
	            type: 'linear',
	            tickFormat: ',.0f',
	            label: 'Revenue'
	          }
	        },
	        tooltip: {
	          color: 'white',
	          format: {
	            y: ',.0f'
	          }
	        },
	        show_markers: true
	      });

	      var profit = chart.column_series({
	        name: 'Profit',
	        color: '#0080FF'
	      });

	      profit.addData([
	        {x: 'Jan', y: 30000},
	        {x: 'Feb', y: 25000},
	        {x: 'Mar', y: 25000},
	        {x: 'Apr', y: 30000},
	        {x: 'May', y: 35000},
	        {x: 'Jun', y: 15000}
	      ]);

	      var expenses = chart.column_series({
	        name: 'Expense',
	        color: '#FF6666',
	        marker: 'square'
	      });

	      expenses.addData([
	        {x: 'Jan', y: -25000},
	        {x: 'Feb', y: -10000},
	        {x: 'Mar', y: -10000},
	        {x: 'Apr', y: -15000},
	        {x: 'May', y: -15000},
	        {x: 'Jun', y: -5000}
	      ]);
	    })();


	    (function() {
	      var chart = new Rubix('#stacked-multi-series-bar-chart-negative', {
	        title: 'Stacked bar chart with negative values',
	        subtitle: 'Profit/Expense chart',
	        titleColor: '#0080FF',
	        subtitleColor: '#0080FF',
	        height: 300,
	        axis: {
	          x: {
	            type: 'ordinal'
	          },
	          y:  {
	            type: 'linear',
	            tickFormat: ',.0f',
	            label: 'Revenue',
	            tickCount: 5
	          }
	        },
	        tooltip: {
	          color: 'white',
	          format: {
	            y: ',.0f'
	          }
	        },
	        show_markers: true
	      });

	      var profit = chart.bar_series({
	        name: 'Profit',
	        color: '#0080FF'
	      });

	      profit.addData([
	        {x: 'Jan', y: 30000},
	        {x: 'Feb', y: 25000},
	        {x: 'Mar', y: 25000},
	        {x: 'Apr', y: 30000},
	        {x: 'May', y: 65000},
	        {x: 'Jun', y: 15000}
	      ]);

	      var expenses = chart.bar_series({
	          name: 'Expense',
	          color: '#FF6666',
	          marker: 'square'
	      });

	      expenses.addData([
	        {x: 'Jan', y: -35000},
	        {x: 'Feb', y: -10000},
	        {x: 'Mar', y: -10000},
	        {x: 'Apr', y: -15000},
	        {x: 'May', y: -15000},
	        {x: 'Jun', y: -5000}
	      ]);
	    })();
	  },
	  render: function() {
	    return (
	      Container({id: "body"},
	        Grid(null,
	          Row(null,
	            Col({sm: 12},
	              Chart({id: "single-series-column-chart"}),
	              Chart({id: "single-series-bar-chart"}),
	              Chart({id: "grouped-multi-series-column-chart"}),
	              Chart({id: "grouped-multi-series-bar-chart"}),
	              Chart({id: "stacked-multi-series-column-chart"}),
	              Chart({id: "stacked-multi-series-bar-chart"}),
	              Chart({id: "stacked-multi-series-column-chart-negative"}),
	              Chart({id: "stacked-multi-series-bar-chart-negative"})
	            )
	          )
	        ),
	        this.props.children
	      )
	    );
	  }
	});

	var classSet = React.addons.classSet;
	var RubixBarColSeries = React.createClass({displayName: 'RubixBarColSeries',
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = classSet({
	      'container-open': this.state.open
	    });
	    return this.transferPropsTo(
	      Container({id: "container", className: classes},
	        Sidebar(null),
	        Header(null),
	        Body(null,
	          Footer(null)
	        )
	      )
	    );
	  }
	});

	module.exports = RubixBarColSeries;


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(50);
	var Sidebar = __webpack_require__(51);
	var Footer = __webpack_require__(52);

	var Chart = React.createClass({displayName: 'Chart',
	  render: function() {
	    return (
	      PanelContainer(null,
	        Panel(null,
	          PanelBody({style: {padding: 25}},
	            React.DOM.div({id: this.props.id})
	          )
	        )
	      )
	    );
	  }
	});

	var Body = React.createClass({displayName: 'Body',
	  componentDidMount: function() {
	    var v, t, next = function() {
	      return {
	        x: ++t,
	        y: v = ~~Math.max(10, Math.min(90, v + 10 * (Math.random() - .5)))
	      };
	    };

	    (function() {
	      var chart = new Rubix('#line-scatter-chart', {
	        title: 'Line + Scatter Plot (Step-After Interpolation)',
	        width: '100%',
	        height: 300,
	        tooltip: {
	          color: 'white',
	          format: {
	            x: '.0f',
	            y: '.0f'
	          }
	        },
	        show_markers: true,
	        interpolate: 'step-after'
	      });

	      var scatter = chart.line_series({
	        name: 'Scatter Plot',
	        color: '#4572a7',
	        scatter: true
	      });

	      t = 0, v = 100, scatter_data = d3.range(100).map(next);

	      scatter.addData(scatter_data);

	      var line = chart.line_series({
	        name: 'Line Series',
	        color: '#D71F4B',
	        show_markers: false
	      });

	      t = 0, v = 100, data = d3.range(100).map(next);

	      line.addData(data);
	    })();

	    (function() {
	      var chart = new Rubix('#line-column-chart', {
	        title: 'Line + Column Series (Monotone Interpolation)',
	        titleColor: '#2EB398',
	        width: '100%',
	        height: 300,
	        tooltip: {
	          color: '#2EB398',
	          format: {
	            x: '.0f',
	            y: '.0f'
	          }
	        },
	        show_markers: true,
	        interpolate: 'monotone'
	      });

	      var data = [
	        {x: 1, y: 10},
	        {x: 2, y: 15},
	        {x: 3, y: 5},
	        {x: 4, y: 25},
	        {x: 5, y: 5},
	      ];

	      var column = chart.column_series({
	        name: 'Column Series',
	        color: '#7CD5BA',
	        marker: 'square'
	      });

	      column.addData(data);

	      var line = chart.line_series({
	        name: 'Line Series',
	        color: '#2EB398',
	        show_markers: false
	      });

	      line.addData(data);
	    })();

	    (function() {
	      var chart = new Rubix('#line-bar-chart', {
	        title: 'Line + Bar Series',
	        titleColor: '#D71F4B',
	        width: '100%',
	        height: 400,
	        tooltip: {
	          color: '#D71F4B',
	          format: {
	            x: '.0f',
	            y: '.0f'
	          }
	        },
	        show_markers: true
	      });

	      var line = chart.line_series({
	        name: 'Line Series',
	        color: '#D71F4B'
	      });

	      var data = [
	        {x: 1, y: 10},
	        {x: 2, y: 15},
	        {x: 3, y: 5},
	        {x: 4, y: 25},
	        {x: 5, y: 5},
	      ];

	      line.addData(data);

	      var bar = chart.bar_series({
	        name: 'Bar Series',
	        color: '#F09FA6',
	        marker: 'square'
	      });

	      bar.addData(data);
	    })();

	    (function() {
	      var chart = new Rubix('#line-area-chart', {
	        title: 'Line + Area (Sankey Interpolation)',
	        titleColor: 'steelblue',
	        height: 200,
	        tooltip: {
	          color: 'steelblue',
	          format: {
	            x: '.0f',
	            y: '.0f'
	          }
	        },
	        interpolate: 'sankey',
	        show_markers: true
	      });

	      var area = chart.area_series({
	        name: 'Area Series',
	        color: '#A0C7F2'
	      });

	      var data2 = [
	        {x: 1, y: 1},
	        {x: 2, y: 3},
	        {x: 3, y: 5},
	        {x: 4, y: 8},
	        {x: 5, y: 9},
	        {x: 6, y: 4},
	        {x: 7, y: 2},
	        {x: 8, y: 5},
	        {x: 9, y: 4},
	        {x: 10, y: 7},
	      ];

	      area.addData(data2);

	      var line = chart.line_series({
	        name: 'Line Series',
	        color: 'steelblue'
	      });

	      var data = [
	        {x: 1, y: 11},
	        {x: 2, y: 3},
	        {x: 3, y: 15},
	        {x: 4, y: 4},
	        {x: 5, y: 9},
	        {x: 6, y: 3},
	        {x: 7, y: 1},
	        {x: 8, y: 7},
	        {x: 9, y: 14},
	        {x: 10, y: 10},
	      ];

	      line.addData(data);
	    })();


	    (function() {
	      var chart = new Rubix('#line-stackedarea-chart', {
	        title: 'Line + Stacked Area (Cardinal Interpolation)',
	        height: 300,
	        tooltip: {
	          color: 'white',
	          format: {
	            x: '.0f',
	            y: '.0f'
	          }
	        },
	        stacked: true,
	        show_markers: false,
	        interpolate: 'cardinal'
	      });

	      var line = chart.line_series({
	        name: 'Line Series',
	        color: '#B4A1DD',
	        show_markers: true
	      });

	      var data = [
	        {x: 1, y: 11},
	        {x: 2, y: 14},
	        {x: 3, y: 25},
	        {x: 4, y: 24},
	        {x: 5, y: 16},
	        {x: 6, y: 23},
	        {x: 7, y: 21},
	        {x: 8, y: 27},
	        {x: 9, y: 14},
	        {x: 10, y: 20},
	      ];

	      line.addData(data);

	      var area = chart.area_series({
	        name: 'Area Series',
	        color: '#aa4643'
	      });

	      var data2 = [
	        {x: 1, y: 3},
	        {x: 2, y: 4},
	        {x: 3, y: 7},
	        {x: 4, y: 2},
	        {x: 5, y: 6},
	        {x: 6, y: 4},
	        {x: 7, y: 5},
	        {x: 8, y: 2},
	        {x: 9, y: 6},
	        {x: 10, y: 2},
	      ];

	      area.addData(data2);

	      var area2 = chart.area_series({
	        name: 'Area Series 2',
	        color: '#4572a7'
	      });

	      var data3 = [
	        {x: 1, y: 1},
	        {x: 2, y: 4},
	        {x: 3, y: 2},
	        {x: 4, y: 1},
	        {x: 5, y: 6},
	        {x: 6, y: 7},
	        {x: 7, y: 8},
	        {x: 8, y: 5},
	        {x: 9, y: 4},
	        {x: 10, y: 7},
	      ];

	      area2.addData(data3);
	    })();
	  },
	  render: function() {
	    return (
	      Container({id: "body"},
	        Grid(null,
	          Row(null,
	            Col({sm: 12},
	              Chart({id: "line-scatter-chart"}),
	              Chart({id: "line-column-chart"}),
	              Chart({id: "line-bar-chart"}),
	              Chart({id: "line-area-chart"}),
	              Chart({id: "line-stackedarea-chart"})
	            )
	          )
	        ),
	        this.props.children
	      )
	    );
	  }
	});

	var classSet = React.addons.classSet;
	var RubixMixedSeries = React.createClass({displayName: 'RubixMixedSeries',
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = classSet({
	      'container-open': this.state.open
	    });
	    return this.transferPropsTo(
	      Container({id: "container", className: classes},
	        Sidebar(null),
	        Header(null),
	        Body(null,
	          Footer(null)
	        )
	      )
	    );
	  }
	});

	module.exports = RubixMixedSeries;


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(50);
	var Sidebar = __webpack_require__(51);
	var Footer = __webpack_require__(52);

	var Chart = React.createClass({displayName: 'Chart',
	  render: function() {
	    return (
	      PanelContainer({noOverflow: true},
	        Panel(null,
	          PanelBody({style: {padding: 25}},
	            React.DOM.div({id: this.props.id})
	          )
	        )
	      )
	    );
	  }
	});

	var Body = React.createClass({displayName: 'Body',
	  interval: null,
	  componentWillUnmount: function() {
	    clearInterval(this.interval);
	  },
	  componentDidMount: function() {
	    setTimeout(function() {
	      (function() {
	        var pie = Rubix.Pie('#pie-chart', {
	          title: 'Pie chart',
	          subtitle: 'Browser Share',
	          height: 300
	        });

	        pie.addData([
	          {
	            name: 'Firefox',
	            value: 45.0,
	            color: '#4572a7'
	          },
	          {
	            name: 'IE',
	            value: 26.8,
	            color: '#aa4643'
	          },
	          {
	            name: 'Chrome',
	            value: 12.8,
	            color: '#89a54e'
	          },
	          {
	            name: 'Safari',
	            value: 8.5,
	            color: '#80699b'
	          },
	          {
	            name: 'Opera',
	            value: 6.2,
	            color: '#3d96ae'
	          },
	          {
	            name: 'Others',
	            value: 0.7,
	            color: '#db843d'
	          }
	        ]);
	      })();

	      (function() {
	        var donut = Rubix.Donut('#donut-chart', {
	          title: 'Realtime Donut chart',
	          subtitle: 'Browser Share',
	          height: 300
	        });

	        donut.addData([
	          {
	            name: 'Firefox',
	            value: 45.0,
	            color: '#4572a7'
	          },
	          {
	            name: 'IE',
	            value: 26.8,
	            color: '#aa4643'
	          },
	          {
	            name: 'Chrome',
	            value: 12.8,
	            color: '#89a54e'
	          },
	          {
	            name: 'Safari',
	            value: 8.5,
	            color: '#80699b'
	          },
	          {
	            name: 'Opera',
	            value: 6.2,
	            color: '#3d96ae'
	          },
	          {
	            name: 'Others',
	            value: 0.7,
	            color: '#db843d'
	          }
	        ]);

	        var browsers = ['Firefox', 'IE', 'Chrome', 'Safari', 'Opera', 'Others'], name;

	        var redrawDonut = function() {
	          name = browsers.shift();
	          browsers.push(name);
	          return {
	            name: name,
	            value: Math.random() * 100
	          };
	        };

	        this.interval = setInterval(function() {
	          donut.updatePoint(redrawDonut());
	        }, 1000);
	      }.bind(this))();
	    }.bind(this), 15);
	  },
	  render: function() {
	    return (
	      Container({id: "body"},
	        Grid(null,
	          Row(null,
	            Col({sm: 6, collapseRight: true},
	              Chart({id: "pie-chart"})
	            ),
	            Col({sm: 6},
	              Chart({id: "donut-chart"})
	            )
	          )
	        ),
	        this.props.children
	      )
	    );
	  }
	});

	var classSet = React.addons.classSet;
	var PieDonutSeries = React.createClass({displayName: 'PieDonutSeries',
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = classSet({
	      'container-open': this.state.open
	    });
	    return this.transferPropsTo(
	      Container({id: "container", className: classes},
	        Sidebar(null),
	        Header(null),
	        Body(null,
	          Footer(null)
	        )
	      )
	    );
	  }
	});

	module.exports = PieDonutSeries;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Brand = React.createClass({displayName: 'Brand',
	  render: function() {
	    return this.transferPropsTo(
	      NavHeader(null,
	        NavBrand({tabIndex: "-1"},
	          React.DOM.img({src: "public/imgs/logo.png", alt: "rubix", width: "111", height: "28"})
	        )
	      )
	    );
	  }
	});

	var LocaleMenuItem = React.createClass({displayName: 'LocaleMenuItem',
	  render: function() {
	    return (
	      MenuItem({flag: this.props.flag, locale: this.props.locale, parent: this.props.parent, href: "#", active: this.props.active},
	        Grid(null,
	          Row(null,
	            Col({xs: 2},
	              React.DOM.img({src: 'public/imgs/flags/flags/flat/32/'+this.props.flag+'.png', width: "32", height: "32"})
	            ),
	            Col({xs: 10},
	              Entity({className: "lang-menu-text", entity: "languageMenu", data: {lang: this.props.lang}})
	            )
	          )
	        )
	      )
	    );
	  }
	});

	var DirectNavItem = React.createClass({displayName: 'DirectNavItem',
	  mixins: [RoutingContextMixin],
	  render: function() {
	    var classes = React.addons.classSet({
	      'pressed': (this.getRouting().getPath() === this.props.path)
	    });
	    return this.transferPropsTo(
	      NavItem({className: classes.trim()},
	        Link({href: this.props.path},
	          Icon({bundle: this.props.bundle || 'fontello', glyph: this.props.glyph})
	        )
	      )
	    );
	  }
	});

	var Skins = React.createClass({displayName: 'Skins',
	  statics: {
	    skins: ['default', 'green', 'blue', 'purple', 'brown', 'cyan']
	  },
	  switchSkin: function(skin, e) {
	    e.preventDefault();
	    e.stopPropagation();
	    for(var i=0; i < Skins.skins.length; i++) {
	      $('html').removeClass(Skins.skins[i]);
	    }
	    $('html').addClass(skin);
	    vex.close(this.props.id);
	  },
	  render: function() {
	    return (
	      Grid({style: {margin: '-2em'}},
	        Row(null,
	          Col({xs: 12, className: "text-center bg-darkgrayishblue75", style: {marginBottom: 25}},
	            React.DOM.div({className: "fg-white", style: {fontSize: 24, lineHeight: 1, padding: '25px 10px'}},
	              "Choose a theme:"
	            )
	          )
	        ),
	        Row(null,
	          Col({xs: 4, className: "text-center"},
	            React.DOM.a({href: "#", style: {border: 'none'}, onClick: this.switchSkin.bind(this, 'default')},
	              Icon({glyph: "icon-fontello-stop icon-4x", style: {color: '#E76049'}})
	            )
	          ),
	          Col({xs: 4, className: "text-center"},
	            React.DOM.a({href: "#", style: {border: 'none'}, onClick: this.switchSkin.bind(this, 'green')},
	              Icon({glyph: "icon-fontello-stop icon-4x", className: "fg-darkgreen45"})
	            )
	          ),
	          Col({xs: 4, className: "text-center"},
	            React.DOM.a({href: "#", style: {border: 'none'}, onClick: this.switchSkin.bind(this, 'blue')},
	              Icon({glyph: "icon-fontello-stop icon-4x", className: "fg-blue"})
	            )
	          )
	        ),
	        Row(null,
	          Col({xs: 4, className: "text-center"},
	            React.DOM.a({href: "#", style: {border: 'none'}, onClick: this.switchSkin.bind(this, 'purple')},
	              Icon({glyph: "icon-fontello-stop icon-4x", className: "fg-purple"})
	            )
	          ),
	          Col({xs: 4, className: "text-center"},
	            React.DOM.a({href: "#", style: {border: 'none'}, onClick: this.switchSkin.bind(this, 'brown')},
	              Icon({glyph: "icon-fontello-stop icon-4x", className: "fg-brown"})
	            )
	          ),
	          Col({xs: 4, className: "text-center"},
	            React.DOM.a({href: "#", style: {border: 'none'}, onClick: this.switchSkin.bind(this, 'cyan')},
	              Icon({glyph: "icon-fontello-stop icon-4x", className: "fg-darkcyan"})
	            )
	          )
	        )
	      )
	    );
	  }
	});

	var Navigation = React.createClass({displayName: 'Navigation',
	  getInitialState: function() {
	    return {
	      selectedFlag: 'United-States'
	    };
	  },
	  handleSkinSwitch: function(e) {
	    e.preventDefault();
	    e.stopPropagation();
	    var vexContent;
	    vex.dialog.open({
	      afterOpen: function($vexContent) {
	        vexContent = $vexContent;
	        return React.renderComponent(Skins({id: $vexContent.data().vex.id}), $vexContent.get(0));
	      },
	      afterClose: function() {
	        React.unmountComponentAtNode(vexContent);
	      }
	    });
	  },
	  handleLayoutRadioChange: function(e) {
	    var dir = e.target.value;
	    var current_dir = $('html').attr('dir');
	    if(current_dir === 'ltr') {
	      window.location.href = window.location.href.replace('/#/', '/index-rtl.html#/');
	    } else {
	      window.location.href = window.location.href.replace('/index-rtl.html#/', '/#/');
	    }
	  },
	  bodyLayoutRadioChange: function(value) {
	    if(!value) return;
	    if(value === 'fixed-body') {
	      $('html').removeClass('static');
	      localStorage.setItem('bodyLayout', 'fixed-body');
	      ReactBootstrap.Dispatcher.emit('sidebar:reinitialize');
	    } else if(value === 'static-body') {
	      $('html').addClass('static');
	      localStorage.setItem('bodyLayout', 'static-body');
	      ReactBootstrap.Dispatcher.emit('sidebar:destroy');
	    }
	    this.refs[value].setChecked(true);
	  },
	  handleBodyLayoutRadioChange: function(e) {
	    this.bodyLayoutRadioChange(e.target.value);
	  },
	  changeFlag: function(props) {
	    this.setState({
	      selectedFlag: props.flag
	    }, function() {
	      if(props.locale === 'ar')
	        $('html').addClass('arabic');
	      else
	        $('html').removeClass('arabic');
	      Preloader.show();
	      l20n.changeLocale(props.locale);
	    }.bind(this));
	  },
	  l20nContextReady: function() {
	    var selectedFlag = l20n.ctx.getSync('selectedFlag');
	    this.state.selectedFlag = selectedFlag;
	    this.refs['flag-menu'].selectItem('flag', selectedFlag);
	    this.setState(this.state, function() {
	      Preloader.hide();
	    });
	  },
	  changeSettingsMenuItemState: function(item) {
	    if(item === 'fluid' || item === null || item === undefined) {
	      this.refs['settings-menu'].selectItem('data-val', 'fluid');
	      $('html').removeClass('boxed');
	    } else if(item === 'boxed') {
	      this.refs['settings-menu'].selectItem('data-val', 'boxed');
	      $('html').addClass('boxed');
	    }
	    setTimeout(function() {
	      $(window).trigger('resize');
	    }, 300);
	  },
	  changeViewport: function(props) {
	    switch(props['data-type']) {
	      case 'dimension':
	        if(props['data-val'] === 'boxed') {
	          localStorage.setItem('settingsMenu', 'boxed');
	          this.changeSettingsMenuItemState('boxed');
	        } else {
	          localStorage.setItem('settingsMenu', 'fluid');
	          this.changeSettingsMenuItemState('fluid');
	        }
	      break;
	      default:
	      break;
	    }
	  },
	  handleLogout: function() {
	    $('body').addClass('fade-out');
	    setTimeout(function() {
	      RRouter.routing.navigate('/');
	    }.bind(this), 250);
	  },
	  componentWillMount: function() {
	    ReactBootstrap.Dispatcher.on('ctx:ready', this.l20nContextReady);
	  },
	  componentDidMount: function() {
	    (function() {
	      var item = localStorage.getItem('settingsMenu');
	      this.changeSettingsMenuItemState(item);
	      localStorage.setItem('settingsMenu', item || 'fluid');
	    }.bind(this))();

	    (function() {
	      if($('html').attr('dir') === 'ltr') {
	        this.refs.ltr.setChecked(true);
	      } else {
	        this.refs.rtl.setChecked(true);
	      }
	    }.bind(this))();

	    (function() {
	      this.bodyLayoutRadioChange(localStorage.getItem('bodyLayout'));
	    }.bind(this))();

	    (function() {
	      var chart = new Rubix('#commit-column-chart', {
	          width: '100%',
	          height: 100,
	          hideAxisAndGrid: true,
	          hideLegend: true,
	          tooltip: {
	            color: '#2EB398'
	          },
	          margin: {
	            top: 25,
	            bottom: 25
	          }
	      });

	      var alerts = chart.column_series({
	          name: 'Commits',
	          color: '#2EB398'
	      });

	      alerts.addData([
	          {x: 10, y: 20},
	          {x: 11, y: 50},
	          {x: 12, y: 35},
	          {x: 13, y: 30},
	          {x: 14, y: 20},
	          {x: 15, y: 25},
	          {x: 16, y: 30},
	          {x: 17, y: 50},
	          {x: 18, y: 20},
	          {x: 19, y: 30},
	          {x: 20, y: 50},
	          {x: 21, y: 20},
	          {x: 22, y: 50},
	          {x: 23, y: 35},
	          {x: 24, y: 30},
	          {x: 25, y: 20},
	          {x: 26, y: 30}
	      ]);
	    })();
	  },
	  componentWillUnmount: function() {
	    ReactBootstrap.Dispatcher.off('ctx:ready', this.l20nContextReady);
	  },
	  render: function() {
	    return this.transferPropsTo(
	      NavContent({className: "pull-right"},
	        Nav({className: "hidden-xs"},
	          NavItem({divider: true}),
	          NavItem({className: "hidden-sm"},
	            React.DOM.a({href: "#", onClick: this.handleSkinSwitch},
	              Icon({glyph: "icon-fontello-circle", className: "fg-theme", style: {lineHeight: 1, fontSize: 24}})
	            )
	          ),
	          NavItem({divider: true}),
	          NavItem({dropdown: true},
	            DropdownButton({id: "flag-menu-btn", nav: true, toggleOnHover: true, container: this, menu: "flag-menu"},
	              React.DOM.img({src: 'public/imgs/flags/flags/flat/32/' + this.state.selectedFlag + '.png', width: "32", height: "32"})
	            ),
	            Menu({alignRight: true, noTimer: true, bsStyle: "theme", ref: "flag-menu", id: "flag-menu", className: "double-width", onItemSelect: this.changeFlag, style: {paddingBottom: 0}},
	              MenuItem({header: true},
	                Entity({entity: "languageMenuHeading"})
	              ),
	              LocaleMenuItem({lang: "enUS", locale: "en-US", flag: "United-States"}),
	              LocaleMenuItem({lang: "fr", locale: "fr", flag: "France"}),
	              LocaleMenuItem({lang: "it", locale: "it", flag: "Italy"}),
	              LocaleMenuItem({lang: "ge", locale: "ge", flag: "Germany"}),
	              LocaleMenuItem({lang: "ar", locale: "ar", flag: "Saudi-Arabia"}),
	              LocaleMenuItem({lang: "ch", locale: "ch", flag: "China"})
	            )
	          ),
	          NavItem({divider: true}),
	          DirectNavItem({glyph: "user-female", path: "/app/social", className: "small-font"}),
	          NavItem({dropdown: true, className: "small-font collapse-left"},
	            DropdownButton({nav: true, toggleOnHover: true, container: this, menu: "settings-menu"},
	              Icon({bundle: "fontello", glyph: "cog-7"})
	            ),
	            Menu({alignRight: true, noTimer: true, bsStyle: "theme", style: {width: 375}, ref: "settings-menu", id: "settings-menu", onItemSelect: this.changeViewport},
	              MenuItem({header: true},
	                Entity({entity: "settingsMenuHeading"})
	              ),
	              MenuItem({'data-type': "dimension", 'data-val': "fluid", href: "#"},
	                Entity({entity: "settingsMenuFluid"})
	              ),
	              MenuItem({'data-type': "dimension", 'data-val': "boxed", href: "#"},
	                Entity({entity: "settingsMenuBoxed"})
	              ),
	              MenuItem({header: true},
	                "Layout"
	              ),
	              MenuItem({noHover: true},
	                Grid(null,
	                  Row(null,
	                    Col({xs: 6},
	                      Radio({browser: true, ref: "ltr", value: "ltr", name: "switch-layout", defaultChecked: true, onChange: this.handleLayoutRadioChange},
	                        "LTR"
	                      )
	                    ),
	                    Col({xs: 6, className: "text-right"},
	                      Radio({browser: true, ref: "rtl", value: "rtl", name: "switch-layout", onChange: this.handleLayoutRadioChange},
	                        "RTL"
	                      )
	                    )
	                  )
	                )
	              ),
	              MenuItem({header: true},
	                "Body Layout"
	              ),
	              MenuItem({noHover: true},
	                Grid(null,
	                  Row(null,
	                    Col({xs: 8},
	                      Radio({browser: true, ref: "fixed-body", value: "fixed-body", name: "switch-body-layout", defaultChecked: true, onChange: this.handleBodyLayoutRadioChange},
	                        "Fixed (Header + Sidebar)"
	                      )
	                    ),
	                    Col({xs: 4, className: "text-right"},
	                      Radio({browser: true, ref: "static-body", value: "static-body", name: "switch-body-layout", onChange: this.handleBodyLayoutRadioChange},
	                        "Static"
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          ),
	          NavItem({divider: true}),
	          DirectNavItem({glyph: "mail-3", path: "/app/mailbox/inbox"}),
	          NavItem({dropdown: true, className: "collapse-left"},
	            DropdownButton({nav: true, toggleOnHover: true, container: this, menu: "bullhorn-menu"},
	              Icon({bundle: "fontello", glyph: "bullhorn"}),
	              Badge({className: "fg-darkbrown bg-orange notification-badge"}, "3")
	            ),
	            Menu({alignRight: true, noTimer: true, id: "notifications-menu", ref: "bullhorn-menu", className: "double-width", alwaysInactive: true},
	              MenuItem({header: true},
	                Entity({entity: "notificationsMenuHeading"})
	              ),
	              MenuItem({href: "#"},
	                Grid(null,
	                  Row(null,
	                    Col({xs: 2, className: "avatar-container", collapseRight: true},
	                      React.DOM.div(null, React.DOM.img({src: "public/imgs/avatars/avatar22.png", width: "40", height: "40", alt: "sarah_patchett"})),
	                      React.DOM.div({className: "text-center"},
	                        BLabel({bsStyle: "info"}, "NEW")
	                      )
	                    ),
	                    Col({xs: 10, className: "notification-container", collapseLeft: true, collapseRight: true},
	                      React.DOM.div({className: "time"},
	                        React.DOM.strong({className: "fg-darkgray50"}, Icon({bundle: "fontello", glyph: "chat-5"}), React.DOM.em(null, Entity({entity: "notificationsTimeFirst"})))
	                      ),
	                      React.DOM.div({className: "message-header"},
	                        React.DOM.strong({className: "fg-darkgreen45"}, "Sarah Patchett sent you a private message")
	                      ),
	                      React.DOM.div({className: "message-details fg-text"},
	                        React.DOM.span(null, "Hey Anna! Sorry for delayed response. I've just finished reading the mail you sent couple of days ago...")
	                      )
	                    )
	                  )
	                )
	              ),
	              MenuItem({href: "#"},
	                Grid(null,
	                  Row(null,
	                    Col({xs: 2, className: "avatar-container", collapseRight: true},
	                      React.DOM.img({src: "public/imgs/avatars/avatar21.png", width: "40", height: "40", alt: "john_young"})
	                    ),
	                    Col({xs: 10, className: "notification-container", collapseLeft: true, collapseRight: true},
	                      React.DOM.div({className: "time"},
	                        React.DOM.strong({className: "fg-darkgray50"}, Icon({bundle: "fontello", glyph: "user-add"}), React.DOM.em(null, "2 hours ago"))
	                      ),
	                      React.DOM.div({className: "message-header"},
	                        React.DOM.strong({className: "fg-darkgreen45"}, "John Young added you as a collaborator")
	                      ),
	                      React.DOM.div({className: "message-details fg-text"},
	                        React.DOM.span(null, "to the repository "), React.DOM.em({className: "fg-darkblue"}, "sketchpixy/rubix")
	                      )
	                    )
	                  )
	                )
	              ),
	              MenuItem({href: "#"},
	                Grid(null,
	                  Row(null,
	                    Col({xs: 2, className: "avatar-container", collapseRight: true},
	                      React.DOM.div(null, React.DOM.img({src: "public/imgs/github.png", width: "40", height: "40", alt: "github"})),
	                      React.DOM.div({className: "text-center"},
	                        BLabel({bsStyle: "danger"}, "ALERT")
	                      )
	                    ),
	                    Col({xs: 10, className: "notification-container", collapseLeft: true, collapseRight: true},
	                      React.DOM.div({className: "time"},
	                        React.DOM.strong({className: "fg-darkgray50"}, Icon({bundle: "fontello", glyph: "attention-alt-1"}), React.DOM.em(null, "5 days ago"))
	                      ),
	                      React.DOM.div({className: "message-header"},
	                        React.DOM.strong({className: "fg-darkgreen45"}, "Github sent you a notification")
	                      ),
	                      React.DOM.div({className: "message-details fg-text"},
	                        React.DOM.span(null, "Your "), React.DOM.span({className: "fg-darkblue"}, "Large Plan"), React.DOM.span(null, " will expire in one week. Please update your billing details at our Billing center. Thank you!")
	                      )
	                    )
	                  )
	                )
	              ),
	              MenuItem({noHover: true},
	                Grid({collapse: true, style: {marginBottom: -10}},
	                  Row(null,
	                    Col({xs: 6, collapseLeft: true, collapseRight: true},
	                      Button({block: true, className: "notification-footer-btn left-btn"}, "MARK ALL READ")
	                    ),
	                    Col({xs: 6, collapseLeft: true, collapseRight: true},
	                      Button({block: true, className: "notification-footer-btn right-btn"}, "VIEW ALL")
	                    )
	                  )
	                )
	              )
	            )
	          ),
	          NavItem({dropdown: true, className: "collapse-left"},
	            DropdownButton({nav: true, toggleOnHover: true, container: this, menu: "rss-menu"},
	              Icon({bundle: "fontello", glyph: "rss-1"}),
	              Badge({className: "fg-darkgreen bg-darkgreen40 notification-badge"}, "4")
	            ),
	            Menu({alignRight: true, noTimer: true, id: "rss-menu", ref: "rss-menu", className: "double-width", alwaysInactive: true},
	              MenuItem({header: true}, "Your news feed"),
	              MenuItem({href: "#"},
	                Grid(null,
	                  Row(null,
	                    Col({xs: 2},
	                      Icon({className: "fg-text", bundle: "fontello", glyph: "star"})
	                    ),
	                    Col({xs: 10, collapseLeft: true, className: "notification-container", style: {width: 265}},
	                      React.DOM.div({className: "time"},
	                        React.DOM.strong({className: "fg-darkgray50"}, React.DOM.em(null, "an hour ago"))
	                      ),
	                      React.DOM.div({className: "message-header fg-darkgray50"},
	                        React.DOM.strong({className: "fg-darkgreen45"}, "@johndoe"), React.DOM.strong(null, " starred "), React.DOM.strong({className: "fg-darkblue"}, "joyent/node")
	                      ),
	                      React.DOM.div({className: "message-details fg-text"},
	                        "evented I/O for v8 javascript"
	                      )
	                    )
	                  )
	                )
	              ),
	              MenuItem({href: "#"},
	                Grid(null,
	                  Row(null,
	                    Col({xs: 2},
	                      Icon({className: "fg-text", bundle: "fontello", glyph: "chat-1"})
	                    ),
	                    Col({xs: 10, collapseLeft: true, className: "notification-container", style: {width: 265}},
	                      React.DOM.div({className: "time"},
	                        React.DOM.strong({className: "fg-darkgray50"}, React.DOM.em(null, "2 hours ago"))
	                      ),
	                      React.DOM.div({className: "message-header fg-darkgray50"},
	                        React.DOM.strong({className: "fg-darkgreen45"}, "@jackie"), React.DOM.strong(null, " commented on issue "), React.DOM.strong({className: "fg-darkblue"}, "#150")
	                      ),
	                      React.DOM.div({className: "message-details fg-text"},
	                        "Nice catch! I'll get this fixed soon. Meanwhile..."
	                      )
	                    )
	                  )
	                )
	              ),
	              MenuItem({href: "#"},
	                Grid(null,
	                  Row(null,
	                    Col({xs: 2},
	                      Icon({className: "fg-text", bundle: "fontello", glyph: "fork"})
	                    ),
	                    Col({xs: 10, collapseLeft: true, className: "notification-container", style: {width: 265}},
	                      React.DOM.div({className: "time"},
	                        React.DOM.strong({className: "fg-darkgray50"}, React.DOM.em(null, "5 hours ago"))
	                      ),
	                      React.DOM.div({className: "message-header fg-darkgray50"},
	                        React.DOM.strong({className: "fg-darkgreen45"}, "@sketchpixy"), React.DOM.strong(null, " forked "), React.DOM.strong({className: "fg-darkblue"}, "facebook/react")
	                      ),
	                      React.DOM.div({className: "message-details fg-text"},
	                        "to sketchpixy/react"
	                      )
	                    )
	                  )
	                )
	              ),
	              MenuItem({href: "#"},
	                Grid(null,
	                  Row(null,
	                    Col({xs: 2},
	                      Icon({className: "fg-text", bundle: "fontello", glyph: "attention-alt-1"})
	                    ),
	                    Col({xs: 10, collapseLeft: true, className: "notification-container", style: {width: 265}},
	                      React.DOM.div({className: "time"},
	                        React.DOM.strong({className: "fg-darkgray50"}, React.DOM.em(null, "2 days ago"))
	                      ),
	                      React.DOM.div({className: "message-header fg-darkgray50"},
	                        React.DOM.strong({className: "fg-darkgreen45"}, "@mario"), React.DOM.strong(null, " opened issue "), React.DOM.strong({className: "fg-darkblue"}, "twbs/bootstrap#44")
	                      ),
	                      React.DOM.div({className: "message-details fg-text"},
	                        "Request: Support RTL version"
	                      )
	                    )
	                  )
	                )
	              ),
	              MenuItem({header: true}, "Your commit activity"),
	              MenuItem({noHover: true},
	                Grid({style: {marginBottom: -10}},
	                  Row(null,
	                    Col({xs: 12},
	                      React.DOM.div({id: "commit-column-chart"})
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ),
	        Nav(null,
	          NavItem({className: "logout", href: "#", onClick: this.handleLogout},
	            Icon({bundle: "fontello", glyph: "off-1"})
	          )
	        )
	      )
	    );
	  }
	});

	var Header = React.createClass({displayName: 'Header',
	  render: function() {
	    return this.transferPropsTo(
	      Grid({id: "navbar"},
	        Row(null,
	          Col({xs: 12},
	            NavBar({fixedTop: true, id: "rubix-nav-header"},
	              Container({fluid: true},
	                Row(null,
	                  Col({xs: 3, visible: "xs"},
	                    SidebarBtn(null)
	                  ),
	                  Col({xs: 6, sm: 4},
	                    Brand(null)
	                  ),
	                  Col({xs: 3, sm: 8},
	                    Navigation({pressed: this.props.pressed})
	                  )
	                )
	              )
	            )
	          )
	        )
	      )
	    );
	  }
	});

	module.exports = Header;


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var ChatComponent = __webpack_require__(70)

	var ApplicationSidebar = React.createClass({displayName: 'ApplicationSidebar',
	  render: function() {
	    return (
	      React.DOM.div(null,
	        Grid(null,
	          Row(null,
	            Col({xs: 12},
	              React.DOM.div({className: "sidebar-header"}, "PAGES"),
	              React.DOM.div({className: "sidebar-nav-container"},
	                SidebarNav({style: {marginBottom: 0}},
	                  SidebarNavItem({glyph: "icon-fontello-gauge", name: "Dashboard", href: "/app/dashboard"}),
	                  SidebarNavItem({glyph: "icon-feather-mail", name: React.DOM.span(null, "Mailbox ", BLabel({className: "bg-darkgreen45 fg-white"}, "3"))},
	                    SidebarNav(null,
	                      SidebarNavItem({glyph: "icon-feather-inbox", name: "Inbox", href: "/app/mailbox/inbox"}),
	                      SidebarNavItem({glyph: "icon-outlined-mail-open", name: "Mail", href: "/app/mailbox/mail"}),
	                      SidebarNavItem({glyph: "icon-dripicons-message", name: "Compose", href: "/app/mailbox/compose"})
	                    )
	                  ),
	                  SidebarNavItem({glyph: "icon-pixelvicon-photo-gallery", name: "Gallery", href: "/app/gallery"}),
	                  SidebarNavItem({glyph: "icon-feather-share", name: "Social", href: "/app/social"}),
	                  SidebarNavItem({glyph: "icon-stroke-gap-icons-Blog", name: React.DOM.span(null, "Blog ", BLabel({className: "bg-darkcyan fg-white"}, "2"))},
	                    SidebarNav(null,
	                      SidebarNavItem({glyph: "icon-feather-layout", name: "Posts", href: "/app/blog/posts"}),
	                      SidebarNavItem({glyph: "icon-feather-paper", name: "Single Post", href: "/app/blog/post"})
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ),
	        React.DOM.hr({style: {borderColor: '#3B4648', borderWidth: 2, marginTop: 15, marginBottom: 0, width: 200}}),
	        Grid(null,
	          Row(null,
	            Col({xs: 12},
	              React.DOM.div({className: "sidebar-header"}, "COMPONENTS"),
	              React.DOM.div({className: "sidebar-nav-container"},
	                SidebarNav({style: {marginBottom: 0}},
	                  SidebarNavItem({glyph: "icon-simple-line-icons-layers float-right-rtl", name: "Panels", href: "/app/panels"}),
	                  SidebarNavItem({glyph: "icon-ikons-bar-chart-2 float-right-rtl", name: React.DOM.span(null, "Charts ", BLabel({className: "bg-brown50 fg-white"}, "4"))},
	                    SidebarNav(null,
	                      SidebarNavItem({glyph: "icon-fontello-chart-area", name: "Rubix Charts"},
	                        SidebarNav(null,
	                          SidebarNavItem({name: "Line Series", href: "/app/charts/rubix/line"}),
	                          SidebarNavItem({name: "Area Series", href: "/app/charts/rubix/area"}),
	                          SidebarNavItem({name: "Bar + Column Series", href: "/app/charts/rubix/barcol"}),
	                          SidebarNavItem({name: "Mixed Series", href: "/app/charts/rubix/mixed"}),
	                          SidebarNavItem({name: "Pie + Donut Series", href: "/app/charts/rubix/piedonut"})
	                        )
	                      ),
	                      SidebarNavItem({glyph: "icon-simple-line-icons-graph", name: "Chart.JS", href: "/app/charts/chartjs"}),
	                      SidebarNavItem({glyph: "icon-dripicons-graph-line", name: "C3.JS", href: "/app/charts/c3js"}),
	                      SidebarNavItem({glyph: "icon-feather-pie-graph", name: "Morris.JS", href: "/app/charts/morrisjs"})
	                    )
	                  ),
	                  SidebarNavItem({href: "/app/timeline", glyph: "icon-ikons-time", name: "Static Timeline"}),
	                  SidebarNavItem({href: "/app/interactive-timeline", glyph: "icon-fontello-back-in-time", name: "Interactive Timeline"}),
	                  SidebarNavItem({href: "/app/codemirror", glyph: "icon-dripicons-code", name: "Codemirror"}),
	                  SidebarNavItem({href: "/app/maps", glyph: "icon-ikons-pin-2", name: "Maps"}),
	                  SidebarNavItem({href: "/app/editor", glyph: "icon-simple-line-icons-note", name: "Editor"}),
	                  SidebarNavItem({glyph: "icon-feather-toggle", name: React.DOM.span(null, "UI Elements ", BLabel({className: "bg-deepred fg-white"}, "7"))},
	                    SidebarNav(null,
	                      SidebarNavItem({href: "/app/ui-elements/buttons", glyph: "icon-mfizz-oracle", name: "Buttons"}),
	                      SidebarNavItem({href: "/app/ui-elements/dropdowns", glyph: "icon-outlined-arrow-down", name: "Dropdowns"}),
	                      SidebarNavItem({href: "/app/ui-elements/tabs-and-navs", glyph: "icon-nargela-navigation", name: "Tabs & Navs"}),
	                      SidebarNavItem({href: "/app/ui-elements/sliders", glyph: "icon-outlined-three-stripes-horiz", name: "Sliders"}),
	                      SidebarNavItem({href: "/app/ui-elements/knobs", glyph: "icon-ikons-chart-3-8", name: "Knobs"}),
	                      SidebarNavItem({href: "/app/ui-elements/modals", glyph: "icon-pixelvicon-browser-1", name: "Modals"}),
	                      SidebarNavItem({href: "/app/ui-elements/messenger", glyph: "icon-dripicons-message", name: "Messenger"})
	                    )
	                  ),
	                  SidebarNavItem({glyph: "icon-stroke-gap-icons-Files float-right-rtl", name: React.DOM.span(null, "Forms ", BLabel({className: "bg-danger fg-white"}, "3"))},
	                    SidebarNav(null,
	                      SidebarNavItem({glyph: "icon-mfizz-fire-alt", href: "/app/forms/controls", name: "Controls"}),
	                      SidebarNavItem({glyph: "icon-stroke-gap-icons-Edit", href: "/app/forms/xeditable", name: "X-Editable"}),
	                      SidebarNavItem({glyph: "icon-simple-line-icons-magic-wand", href: "/app/forms/wizard", name: "Wizard"})
	                    )
	                  ),
	                  SidebarNavItem({glyph: "icon-fontello-table", name: React.DOM.span(null, "Tables ", BLabel({className: "bg-blue fg-white"}, "3"))},
	                    SidebarNav(null,
	                      SidebarNavItem({href: "/app/tables/bootstrap-tables", glyph: "icon-fontello-th-thumb", name: "Bootstrap Tables"}),
	                      SidebarNavItem({href: "/app/tables/datatables", glyph: "icon-fontello-th-2", name: "Datatables"}),
	                      SidebarNavItem({href: "/app/tables/tablesaw", glyph: "icon-fontello-view-mode", name: "Tablesaw"})
	                    )
	                  ),
	                  SidebarNavItem({href: "/app/grid", glyph: "icon-ikons-grid-1 float-right-rtl", name: "Grid"}),
	                  SidebarNavItem({href: "/app/calendar", glyph: "icon-fontello-calendar-alt", name: "Calendar"}),
	                  SidebarNavItem({href: "/app/lists", glyph: "icon-fontello-flow-cascade", name: "Lists"}),
	                  SidebarNavItem({glyph: "icon-fontello-folder-open-empty", name: React.DOM.span(null, "File Utilities ", BLabel({className: "bg-orange fg-darkbrown"}, "2"))},
	                    SidebarNav(null,
	                      SidebarNavItem({href: "/app/file-utilities/dropzone", glyph: "icon-stroke-gap-icons-Download", name: "Dropzone"}),
	                      SidebarNavItem({href: "/app/file-utilities/crop", glyph: "icon-ikons-crop", name: "Image Cropping"})
	                    )
	                  ),
	                  SidebarNavItem({href: "/app/fonts", glyph: "icon-fontello-fontsize", name: "Fonts"})
	                )
	              )
	            )
	          )
	        ),
	        React.DOM.hr({style: {borderColor: '#3B4648', borderWidth: 2, marginTop: 15, marginBottom: 0, width: 200}}),
	        Grid({gutterBottom: true},
	          Row(null,
	            Col({xs: 12},
	              React.DOM.div({className: "sidebar-header"}, "EXTRAS"),
	              React.DOM.div({className: "sidebar-nav-container"},
	                SidebarNav({style: {marginBottom: 0}},
	                  SidebarNavItem({glyph: "icon-ikons-login", name: "Login", href: "/app/login"}),
	                  SidebarNavItem({glyph: "icon-simple-line-icons-users", name: "Signup", href: "/app/signup"}),
	                  SidebarNavItem({glyph: "icon-ikons-lock", name: "Lock Page", href: "/app/lock"}),
	                  SidebarNavItem({glyph: "icon-dripicons-document", name: "Invoice", href: "/app/invoice"}),
	                  SidebarNavItem({glyph: "icon-feather-tag icon-rotate-135", name: "Pricing Tables", href: "/app/pricing"})
	                )
	              )
	            )
	          )
	        )
	      )
	    );
	  }
	});

	var StatisticsComponent = React.createClass({displayName: 'StatisticsComponent',
	  componentDidMount: function() {
	    (function() {
	      var data = [
	        {
	          value: 200,
	          color:'#F7464A',
	          highlight: '#FF5A5E',
	          label: 'Red'
	        },
	        {
	          value: 100,
	          color: '#46BFBD',
	          highlight: '#5AD3D1',
	          label: 'Green'
	        },
	        {
	          value: 110,
	          color: '#FDB45C',
	          highlight: '#FFC870',
	          label: 'Yellow'
	        },
	        {
	          value: 130,
	          color: '#949FB1',
	          highlight: '#A8B3C5',
	          label: 'Grey'
	        },
	        {
	          value: 120,
	          color: '#4D5360',
	          highlight: '#616774',
	          label: 'Dark Grey'
	        }
	      ];
	      var ctx = this.refs.myChart.getDOMNode().getContext('2d');
	      new Chart(ctx).PolarArea(data, {
	        maintainAspectRatio: true,
	        scaleLineColor: 'rgba(255,255,255,0.1)'
	      });
	    }.bind(this))();

	    (function() {
	      $(this.refs.sparklineOne.getDOMNode()).sparkline([2,3,5,1,2,5,8,6,7,9,3,5,7,8,3,3,2,9,5,3,2,2,4,6,7,8,9,1,12,14,11,3,4,6,9,17,19,9,5,3,2,2,4,6,7,8,9,10,11,12,14,23,2,3,1,5,6,7,3,2,8,14,12,4,7,14,19,18,22,3,14], {
	          type: 'line',
	          width: '200',
	          height: '40',
	          lineColor: '#FADD7F',
	          fillColor: 'rgba(250, 221, 127, 0.5)'});

	      $(this.refs.sparklineTwo.getDOMNode()).sparkline([0,1,2,1,2,-0.25,-4,-2,-2,-0.6,-2,-0.5,-0.25], {
	          type: 'bar',
	          height: '30',
	          barWidth: 6,
	          zeroAxis: false,
	          barColor: '#ff5a5e',
	          negBarColor: '#52b27e',
	          stackedBarColor: []});

	      var dynamic_data = {
	        nasdaq_prices: [4415.49,4440.42,4416.39,4425.97,4363.45,4432.15,4424.70,4456.02,4473.70,4472.11,4449.56,4444.91,4442.70,4462.90,4369.77,4352.64,4383.89,4352.84,4355.05,4334.97,4370.90,4401.33,4389.25,4434.13,4453.00,4464.93,4508.31,4527.51,4526.48,4532.10],
	        nasdaq_volume: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	        dow_prices: [16943.81,17055.42,17060.68,17138.20,16976.81,17100.18,17051.73,17113.54,17086.63,17083.80,16960.57,16982.59,16912.11,16880.36,16563.30,16493.37,16569.28,16429.47,16443.34,16368.27,16553.93,16569.98,16560.54,16651.80,16713.58,16662.91,16838.74,16919.59,16979.13,17039.49],
	        dow_volume: [60599405,60569705,101734854,111503036,99238723,112530379,67590253,77958670,73444902,66387656,67289449,66187279,75984025,77746377,101667914,84856015,76255891,76627473,78599736,80426811,82415249,65558636,62768164,66015422,62370832,109183219,75671468,67221266,61963156,65160621]
	      };
	      $(this.refs.dow.getDOMNode()).sparkline(dynamic_data.dow_volume, {height: '1.3em', type: 'bar', barSpacing: 0, barWidth: 3, barColor: '#374B55', tooltipPrefix: 'Volume: '});
	      $(this.refs.dow.getDOMNode()).sparkline(dynamic_data.dow_prices, {composite: true, height: '1.3em', fillColor:false, lineColor:'#EE682F', tooltipPrefix: 'Index: '});
	      $(this.refs.nasdaq.getDOMNode()).sparkline(dynamic_data.nasdaq_prices, {composite: false, height: '1.3em', fillColor:false, lineColor:'#7CD5BA', tooltipPrefix: 'Index: '});
	      $(this.refs.malefemale.getDOMNode()).sparkline('html', {
	          type: 'bar',
	          height: '30',
	          barWidth: 5,
	          barColor: '#79b0ec',
	          stackedBarColor: ['#79b0ec','#EA7882']});
	    }.bind(this))();
	  },
	  render: function() {
	    return (
	      React.DOM.div(null,
	        Grid(null,
	          Row(null,
	            Col({xs: 12},
	              React.DOM.div({className: "sidebar-header text-center"}, "STATISTICS"),
	              React.DOM.div({style: {marginLeft: -25, marginRight: -25, marginTop: 12.5, marginBottom: 12.5}}, React.DOM.canvas({width: "250", height: "150", ref: "myChart"})),
	              React.DOM.hr({style: {borderColor: 'rgba(255,255,255,0.1)', borderWidth: 2, marginTop: 12.5, marginBottom: 12.5, width: 200}}),
	              React.DOM.div(null,
	                React.DOM.div({ref: "sparklineOne"})
	              ),
	              React.DOM.div(null,
	                Grid(null,
	                  Row(null,
	                    Col({xs: 6, collapseLeft: true, collapseRight: true},
	                      React.DOM.div({className: "sidebar-header"}, "AAPL"),
	                      React.DOM.div({ref: "sparklineTwo"})
	                    ),
	                    Col({xs: 6, collapseLeft: true, collapseRight: true},
	                      React.DOM.div({className: "sidebar-header text-left", style: {marginRight: 5, marginLeft: 5}}, "Yearly Change"),
	                      React.DOM.div(null,
	                        React.DOM.h5({className: "bg-darkgreen45 fg-white text-center", style: {margin: 0, height: 30, paddingTop: 7, marginLeft: 5, marginRight: 5}}, "+127.01")
	                      )
	                    )
	                  )
	                )
	              ),
	              React.DOM.hr({style: {borderColor: 'rgba(255,255,255,0.1)', borderWidth: 2, marginTop: 25, marginBottom: 12.5, width: 200}}),
	              React.DOM.div(null,
	                Grid(null,
	                  Row(null,
	                    Col({xs: 6, collapseLeft: true, collapseRight: true},
	                      React.DOM.div({className: "sidebar-header"}, "NASDAQ"),
	                      React.DOM.div({ref: "nasdaq"})
	                    ),
	                    Col({xs: 6, collapseLeft: true, collapseRight: true},
	                      React.DOM.div({className: "sidebar-header"}, "DOW"),
	                      React.DOM.div({ref: "dow"})
	                    )
	                  )
	                )
	              ),
	              React.DOM.div(null,
	                Grid(null,
	                  Row(null,
	                    Col({xs: 6, collapseLeft: true, collapseRight: true},
	                      React.DOM.div(null,
	                        React.DOM.span({className: "fg-yellow"}, "USD "),
	                        React.DOM.span({className: "fg-green"}, "0.43% ", Icon({glyph: "icon-fontello-up-dir"}))
	                      ),
	                      React.DOM.div({className: "fg-white"},
	                        React.DOM.h4({style: {marginTop: 0}}, "$518.47")
	                      ),
	                      React.DOM.p(null,
	                        React.DOM.span({className: "fg-yellow"}, "EUR "),
	                        React.DOM.span({className: "fg-white"}, "€391.85")
	                      )
	                    ),
	                    Col({xs: 6, collapseLeft: true, collapseRight: true},
	                      React.DOM.div(null,
	                        React.DOM.span({className: "fg-yellow"}, "CNY "),
	                        React.DOM.span({className: "fg-red"}, "0.24% ", Icon({glyph: "icon-fontello-down-dir"}))
	                      ),
	                      React.DOM.div({className: "fg-white"},
	                        React.DOM.h4({style: {marginTop: 0}}, "¥3,170.65")
	                      ),
	                      React.DOM.p(null,
	                        React.DOM.span({className: "fg-yellow"}, "GBP "),
	                        React.DOM.span({className: "fg-white"}, "£312.89")
	                      )
	                    )
	                  )
	                )
	              ),
	              React.DOM.hr({style: {borderColor: 'rgba(255,255,255,0.1)', borderWidth: 2, marginTop: 12.5, marginBottom: 25, width: 200}}),
	              React.DOM.div(null,
	                Grid(null,
	                  Row(null,
	                    Col({xs: 12, collapseLeft: true, collapseRight: true},
	                      React.DOM.div({ref: "malefemale"}, "1:1,1:2,1:3,2:0.01,1:0.1,0.2:1,2:2,2:1.5,2:1.2,1.2:2,1:3,1:0.25,2:0.02,1:3,3:0.5,2:4,4:1,1:1,1:2,1:4,2:1,2:3,2:1.5,2:0.5,2:0.25,1:0.01,1:0.1,0.2:1,2:2,2:1.5,2:1.2,1.2:2,1:3"),
	                      React.DOM.br(null)
	                    )
	                  ),
	                  Row(null,
	                    Col({xs: 4, collapseLeft: true, collapseRight: true},
	                      React.DOM.span({className: "sidebar-header"}, "MALE")
	                    ),
	                    Col({xs: 8, collapseLeft: true, collapseRight: true},
	                      Icon({glyph: "icon-fontello-male fg-blue"}),
	                      Icon({glyph: "icon-fontello-male fg-blue"}),
	                      Icon({glyph: "icon-fontello-male fg-blue"}),
	                      Icon({glyph: "icon-fontello-male fg-blue"}),
	                      Icon({glyph: "icon-fontello-male fg-blue"}),
	                      Icon({glyph: "icon-fontello-male fg-black75"}),
	                      Icon({glyph: "icon-fontello-male fg-black75"}),
	                      Icon({glyph: "icon-fontello-male fg-black75"}),
	                      Icon({glyph: "icon-fontello-male fg-black75"}),
	                      Icon({glyph: "icon-fontello-male fg-black75"}),
	                      Icon({glyph: "icon-fontello-male fg-black75"}),
	                      Icon({glyph: "icon-fontello-male fg-black75"}),
	                      Icon({glyph: "icon-fontello-male fg-black75"}),
	                      Icon({glyph: "icon-fontello-male fg-black75"}),
	                      Icon({glyph: "icon-fontello-male fg-black75"})
	                    )
	                  ),
	                  Row(null,
	                    Col({xs: 4, collapseLeft: true, collapseRight: true},
	                      React.DOM.span({className: "sidebar-header"}, "FEMALE")
	                    ),
	                    Col({xs: 8, collapseLeft: true, collapseRight: true},
	                      Icon({glyph: "icon-fontello-female fg-red"}),
	                      Icon({glyph: "icon-fontello-female fg-red"}),
	                      Icon({glyph: "icon-fontello-female fg-red"}),
	                      Icon({glyph: "icon-fontello-female fg-red"}),
	                      Icon({glyph: "icon-fontello-female fg-red"}),
	                      Icon({glyph: "icon-fontello-female fg-red"}),
	                      Icon({glyph: "icon-fontello-female fg-red"}),
	                      Icon({glyph: "icon-fontello-female fg-black75"}),
	                      Icon({glyph: "icon-fontello-female fg-black75"}),
	                      Icon({glyph: "icon-fontello-female fg-black75"}),
	                      Icon({glyph: "icon-fontello-female fg-black75"}),
	                      Icon({glyph: "icon-fontello-female fg-black75"})
	                    )
	                  )
	                )
	              ),
	              React.DOM.br(null)
	            )
	          )
	        )
	      )
	    );
	  }
	});

	var TimelineComponent = React.createClass({displayName: 'TimelineComponent',
	  render: function() {
	    return (
	      React.DOM.div(null,
	        Grid(null,
	          Row(null,
	            Col({xs: 12, collapseLeft: true, collapseRight: true},
	              TimelineView({className: "border-black50 tl-blue"},
	                TimelineItem(null,
	                  TimelineHeader(null,
	                    TimelineAvatar({src: "public/imgs/avatars/avatar5.png", className: "border-blue"}),
	                    TimelineTitle(null,
	                      "Jordyn Ouellet"
	                    )
	                  ),
	                  TimelineBody(null,
	                    React.DOM.ul(null,
	                      React.DOM.li(null,
	                        React.DOM.div(null,
	                          React.DOM.div({className: "fg-lightgray"}, React.DOM.small(null, React.DOM.strong(null, "Aug 10, 2014"))),
	                          React.DOM.div(null, React.DOM.small(null, "Sent you a friend request!"))
	                        ),
	                        React.DOM.br(null),
	                        React.DOM.div({className: "text-center"},
	                          Button({xs: true, outlined: true, bsStyle: "darkgreen45"},
	                            "Accept"
	                          ), ' ',
	                          Button({xs: true, outlined: true, bsStyle: "red"},
	                            "Reject"
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              ),
	              TimelineView({className: "border-black50 tl-green"},
	                TimelineItem(null,
	                  TimelineHeader(null,
	                    TimelineAvatar({src: "public/imgs/avatars/avatar7.png", className: "border-green"}),
	                    TimelineTitle(null,
	                      "Toby King"
	                    )
	                  ),
	                  TimelineBody(null,
	                    React.DOM.ul(null,
	                      React.DOM.li(null,
	                        React.DOM.div({className: "fg-lightgray"}, React.DOM.small(null, React.DOM.strong(null, "Aug 9, 2014"))),
	                        React.DOM.div(null,
	                          React.DOM.small(null, "Visiting ", React.DOM.strong({className: "fg-darkgreen45"}, "The Museum of Modern Art"), " at ", React.DOM.strong(null, React.DOM.em(null, "11 W 53rd St, New York, NY 10019")))
	                        ),
	                        React.DOM.br(null),
	                        React.DOM.img({border: "0", src: "public/imgs/staticmap.png", alt: "Points of Interest in Lower Manhattan"})
	                      ),
	                      React.DOM.li(null,
	                        React.DOM.div({className: "fg-lightgray"}, React.DOM.small(null, React.DOM.strong(null, "Aug 8, 2014"))),
	                        React.DOM.div(null,
	                          React.DOM.small(null, "Driving through! :)")
	                        ),
	                        React.DOM.br(null),
	                        React.DOM.img({border: "0", width: "155", src: "public/imgs/gallery/tumblr_n7yhe1sTa41st5lhmo1_1280-thumb.jpg", alt: "the taxi"})
	                      )
	                    )
	                  )
	                )
	              ),
	              TimelineView({className: "border-black50 tl-yellow"},
	                TimelineItem(null,
	                  TimelineHeader(null,
	                    TimelineAvatar({src: "public/imgs/avatars/avatar10.png", className: "border-yellow"}),
	                    TimelineTitle(null,
	                      "Angelina Mills"
	                    )
	                  ),
	                  TimelineBody(null,
	                    React.DOM.ul(null,
	                      React.DOM.li(null,
	                        React.DOM.div({className: "fg-lightgray"}, React.DOM.small(null, React.DOM.strong(null, "Aug 8, 2014"))),
	                        React.DOM.div(null,
	                          React.DOM.small(null, "Hey you free tomorrow? Lets go shopping!")
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        )
	      )
	    );
	  }
	});

	var NotificationComponent = React.createClass({displayName: 'NotificationComponent',
	  componentDidMount: function() {
	    (function() {
	      $(this.refs.sparklineOne.getDOMNode()).sparkline([2,3,5,1,2,5,8,6,7,9,3,5,7,8,3,3,2,9,5,3,2,2,4,6,7,8,9,1,12,14,11,3,4,6,9,10,12,9,5,3,2,2,4,6,7,8,9,10,11,12,14,23], {
	          type: 'bar',
	          barWidth: 2,
	          height: '40',
	          barSpacing: 1,
	          barColor: '#D71F4B'});
	      $(this.refs.sparklineTwo.getDOMNode()).sparkline([10,40,20,30,20,20,40,20,25,35,44,55,66,20,20,30,50,60,30,40,50,60,50,30,20,90,100,100,100,100,100,100], {
	          type: 'bar',
	          barWidth: 4,
	          height: '40',
	          barSpacing: 1,
	          barColor: '#FADD7F'});
	      $(this.refs.pieOne.getDOMNode()).sparkline([1,0.2], {
	          type: 'pie',
	          width: '35',
	          height: '35',
	          sliceColors: ['#FADD7F','#D71F4B']});
	      $(this.refs.pieTwo.getDOMNode()).sparkline([0.2,1], {
	          type: 'pie',
	          width: '35',
	          height: '35',
	          sliceColors: ['#ff9900','#109618']});
	      $(this.refs.pieThree.getDOMNode()).sparkline([1,0.2,0.3,0.2], {
	          type: 'pie',
	          width: '35',
	          height: '35',
	          sliceColors: ['#ff9900','#109618','#66aa00','#dd4477']});
	      $(this.refs.pieFour.getDOMNode()).sparkline([0.2,0.3,0.4,0.1,1,0.2], {
	          type: 'pie',
	          width: '35',
	          height: '35',
	          sliceColors: ['#dd4477','#0099c6','#990099','#ff9900','#B4A1DD','#66aa00']});
	    }.bind(this))();
	  },
	  render: function() {
	    return (
	      React.DOM.div(null,
	        Grid(null,
	          Row(null,
	            Col({xs: 12, collapseLeft: true, collapseRight: true},
	              TimelineView({className: "border-black50 tl-deepred"},
	                TimelineItem(null,
	                  TimelineHeader(null,
	                    TimelineIcon({glyph: "icon-fontello-attention-3 bg-deepred fg-white"}),
	                    TimelineTitle(null,
	                      "SYSTEM-WIDE ALERTS"
	                    )
	                  ),
	                  TimelineBody(null,
	                    React.DOM.ul(null,
	                      React.DOM.li(null,
	                        React.DOM.div(null,
	                          React.DOM.div({className: "fg-lightgray"}, React.DOM.small(null, React.DOM.strong(null, "Aug 12, 2014"))),
	                          React.DOM.div(null, React.DOM.small(null, "Spike in network traffic detected.")),
	                          React.DOM.div(null, React.DOM.div({ref: "sparklineOne"}))
	                        )
	                      ),
	                      React.DOM.li(null,
	                        React.DOM.div(null,
	                          React.DOM.div({className: "fg-lightgray"}, React.DOM.small(null, React.DOM.strong(null, "Aug 10, 2014"))),
	                          React.DOM.div(null, React.DOM.small(null, "Node 1 down for 30 minutes! Take action!"))
	                        ),
	                        React.DOM.br(null),
	                        React.DOM.div({className: "text-center"},
	                          Button({xs: true, outlined: true, bsStyle: "darkgreen45"},
	                            "Restore"
	                          ), ' ',
	                          Button({xs: true, outlined: true, bsStyle: "red"},
	                            "Destroy"
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              ),
	              TimelineView({className: "border-black50 tl-yellow"},
	                TimelineItem(null,
	                  TimelineHeader(null,
	                    TimelineIcon({glyph: "icon-fontello-attention-3 bg-yellow fg-red"}),
	                    TimelineTitle(null,
	                      "NODE ALERTS"
	                    )
	                  ),
	                  TimelineBody(null,
	                    React.DOM.ul(null,
	                      React.DOM.li(null,
	                        React.DOM.div(null,
	                          React.DOM.div({className: "fg-lightgray"}, React.DOM.small(null, React.DOM.strong(null, "Aug 12, 2014"))),
	                          React.DOM.div(null, React.DOM.small(null, "CPU running at 100% on Node 1.")),
	                          React.DOM.div(null, React.DOM.div({ref: "sparklineTwo"}))
	                        )
	                      ),
	                      React.DOM.li(null,
	                        React.DOM.div(null,
	                          React.DOM.div({className: "fg-lightgray"}, React.DOM.small(null, React.DOM.strong(null, "Aug 10, 2014"))),
	                          React.DOM.div(null, React.DOM.small(null, "Running out of disk space on ", React.DOM.strong({className: "fg-yellow"}, "Node 2"), ", ", React.DOM.strong({className: "fg-yellow"}, "Node 3"), ", ", React.DOM.strong({className: "fg-yellow"}, "Node 5"), " and ", React.DOM.strong({className: "fg-yellow"}, "Node 7")))
	                        ),
	                        React.DOM.br(null),
	                        React.DOM.div({className: "text-center"},
	                          React.DOM.span({ref: "pieOne", style: {marginLeft: 5}}),
	                          React.DOM.span({ref: "pieTwo", style: {marginLeft: 5}}),
	                          React.DOM.span({ref: "pieThree", style: {marginLeft: 5}}),
	                          React.DOM.span({ref: "pieFour", style: {marginLeft: 5}})
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        )
	      )
	    );
	  }
	});

	var SidebarSection = React.createClass({displayName: 'SidebarSection',
	  render: function() {
	    return this.transferPropsTo(
	      React.DOM.div({id: "sidebar"},
	        React.DOM.div({id: "avatar"},
	          Grid(null,
	            Row({className: "fg-white"},
	              Col({xs: 4, collapseRight: true},
	                React.DOM.img({src: "public/imgs/avatars/avatar0.png", width: "40", height: "40"})
	              ),
	              Col({xs: 8, collapseLeft: true, id: "avatar-col"},
	                React.DOM.div({style: {top: 23, fontSize: 16, lineHeight: 1, position: 'relative'}}, "Anna Sanchez"),
	                React.DOM.div(null,
	                  Progress({id: "demo-progress", value: 30, min: 0, max: 100, color: "#ffffff"}),
	                  Link({href: "/app/lock"}, Icon({id: "demo-icon", bundle: "fontello", glyph: "lock-5"}))
	                )
	              )
	            )
	          )
	        ),
	        SidebarControls(null,
	          SidebarControlBtn({bundle: "fontello", glyph: "docs", key: 0}),
	          SidebarControlBtn({bundle: "fontello", glyph: "chat-1", key: 1}),
	          SidebarControlBtn({bundle: "fontello", glyph: "chart-pie-2", key: 2}),
	          SidebarControlBtn({bundle: "fontello", glyph: "th-list-2", key: 3}),
	          SidebarControlBtn({bundle: "fontello", glyph: "bell-5", key: 4})
	        ),
	        React.DOM.div({id: "sidebar-container"},
	          Sidebar({key: 0, active: true},
	            ApplicationSidebar(null)
	          ),
	          Sidebar({key: 1},
	            ChatComponent(null)
	          ),
	          Sidebar({key: 2},
	            StatisticsComponent(null)
	          ),
	          Sidebar({key: 3},
	            TimelineComponent(null)
	          ),
	          Sidebar({key: 4},
	            NotificationComponent(null)
	          )
	        )
	      )
	    );
	  }
	});

	module.exports = SidebarSection;


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Footer = React.createClass({displayName: 'Footer',
	  getInitialState: function() {
	    return {
	      version: 0
	    };
	  },
	  componentDidMount: function() {
	    this.setState({
	      version: document.getElementsByTagName('body')[0].getAttribute('data-version')
	    });
	  },
	  render: function() {
	    return (
	      React.DOM.div(null,
	        Grid({gutterBottom: true}),
	        Grid({id: "footer", className: "text-center"},
	          Row(null,
	            Col({xs: 12},
	              React.DOM.div(null, "© 2014 SketchPixy Creative - v", this.state.version)
	            )
	          )
	        )
	      )
	    );
	  }
	});

	module.exports = Footer;


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	module.exports = [
	 "climacon cloud",
	 "climacon cloud sun",
	 "climacon cloud moon",
	 "climacon rain",
	 "climacon rain cloud",
	 "climacon rain sun",
	 "climacon rain cloud sun",
	 "climacon rain moon",
	 "climacon rain cloud moon",
	 "climacon showers",
	 "climacon showers cloud",
	 "climacon showers sun",
	 "climacon showers cloud sun",
	 "climacon showers moon",
	 "climacon showers cloud moon",
	 "climacon downpour",
	 "climacon downpour cloud",
	 "climacon downpour sun",
	 "climacon downpour cloud sun",
	 "climacon downpour moon",
	 "climacon downpour cloud moon",
	 "climacon drizzle",
	 "climacon drizzle cloud",
	 "climacon drizzle sun",
	 "climacon drizzle cloud sun",
	 "climacon drizzle moon",
	 "climacon drizzle cloud moon",
	 "climacon sleet",
	 "climacon sleet cloud",
	 "climacon sleet sun",
	 "climacon sleet cloud sun",
	 "climacon sleet moon",
	 "climacon sleet cloud moon",
	 "climacon hail",
	 "climacon hail cloud",
	 "climacon hail sun",
	 "climacon hail cloud sun",
	 "climacon hail moon",
	 "climacon hail cloud moon",
	 "climacon flurries",
	 "climacon flurries cloud",
	 "climacon flurries sun",
	 "climacon flurries cloud sun",
	 "climacon flurries moon",
	 "climacon flurries cloud moon",
	 "climacon snow",
	 "climacon snow cloud",
	 "climacon snow sun",
	 "climacon snow cloud sun",
	 "climacon snow moon",
	 "climacon snow cloud moon",
	 "climacon fog",
	 "climacon fog cloud",
	 "climacon fog sun",
	 "climacon fog cloud sun",
	 "climacon fog moon",
	 "climacon fog cloud moon",
	 "climacon haze",
	 "climacon haze sun",
	 "climacon haze moon",
	 "climacon wind",
	 "climacon wind cloud",
	 "climacon wind sun",
	 "climacon wind cloud sun",
	 "climacon wind moon",
	 "climacon wind cloud moon",
	 "climacon lightning",
	 "climacon lightning cloud",
	 "climacon lightning sun",
	 "climacon lightning cloud sun",
	 "climacon lightning moon",
	 "climacon lightning cloud moon",
	 "climacon sun",
	 "climacon sun set",
	 "climacon sunset",
	 "climacon sun rise",
	 "climacon sunrise",
	 "climacon sun low",
	 "climacon sun-low",
	 "climacon low-sun",
	 "climacon sun lower",
	 "climacon sun-lower",
	 "climacon lower-sun",
	 "climacon moon",
	 "climacon moon new",
	 "climacon moon waxing crescent",
	 "climacon moon first-crescent",
	 "climacon moon waxing quarter",
	 "climacon moon first-quarter",
	 "climacon moon waxing half",
	 "climacon moon first-half",
	 "climacon moon waxing gibbous",
	 "climacon moon first-gibbous",
	 "climacon moon waxing three-quarter",
	 "climacon moon first-three-quarter",
	 "climacon moon full",
	 "climacon moon waning gibbous",
	 "climacon moon last-gibbous",
	 "climacon moon waning three-quarter",
	 "climacon moon last-three-quarter",
	 "climacon moon waning quarter",
	 "climacon moon last-quarter",
	 "climacon moon waning half",
	 "climacon moon last-half",
	 "climacon moon waning crescent",
	 "climacon moon last-crescent",
	 "climacon snowflake",
	 "climacon tornado",
	 "climacon thermometer empty",
	 "climacon thermometer",
	 "climacon thermometer low",
	 "climacon thermometer medium-low",
	 "climacon thermometer medium-high",
	 "climacon thermometer high",
	 "climacon thermometer full",
	 "climacon celcius",
	 "climacon farenheit",
	 "climacon compass",
	 "climacon compass north",
	 "climacon compass east",
	 "climacon compass south",
	 "climacon compass west",
	 "climacon umbrella",
	 "climacon sunglasses",
	 "climacon cloud cycle",
	 "climacon cloud refresh",
	 "climacon cloud down",
	 "climacon cloud download",
	 "climacon cloud up",
	 "climacon cloud upload",
	];


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	module.exports = [
	  "icon-mfizz-microscope",
	  "icon-mfizz-cplusplus",
	  "icon-mfizz-wireless",
	  "icon-mfizz-fire-alt",
	  "icon-mfizz-mobile-device",
	  "icon-mfizz-objc",
	  "icon-mfizz-redhat",
	  "icon-mfizz-freebsd",
	  "icon-mfizz-heroku",
	  "icon-mfizz-python",
	  "icon-mfizz-java",
	  "icon-mfizz-satellite",
	  "icon-mfizz-debian",
	  "icon-mfizz-grails",
	  "icon-mfizz-c",
	  "icon-mfizz-postgres",
	  "icon-mfizz-database-alt2",
	  "icon-mfizz-raspberrypi",
	  "icon-mfizz-nginx",
	  "icon-mfizz-ruby-on-rails",
	  "icon-mfizz-redis",
	  "icon-mfizz-scala",
	  "icon-mfizz-gnome",
	  "icon-mfizz-perl",
	  "icon-mfizz-mysql",
	  "icon-mfizz-fedora",
	  "icon-mfizz-ghost",
	  "icon-mfizz-google",
	  "icon-mfizz-netbsd",
	  "icon-mfizz-aws",
	  "icon-mfizz-bomb",
	  "icon-mfizz-looking",
	  "icon-mfizz-ruby",
	  "icon-mfizz-mysql-alt",
	  "icon-mfizz-playframework-alt",
	  "icon-mfizz-osx",
	  "icon-mfizz-database",
	  "icon-mfizz-database-alt",
	  "icon-mfizz-shell",
	  "icon-mfizz-script",
	  "icon-mfizz-antenna",
	  "icon-mfizz-coffee-bean",
	  "icon-mfizz-scala-alt",
	  "icon-mfizz-platter",
	  "icon-mfizz-java-duke",
	  "icon-mfizz-iphone",
	  "icon-mfizz-script-alt",
	  "icon-mfizz-google-alt",
	  "icon-mfizz-haskell",
	  "icon-mfizz-mariadb",
	  "icon-mfizz-phone-retro",
	  "icon-mfizz-phone-alt",
	  "icon-mfizz-csharp",
	  "icon-mfizz-php",
	  "icon-mfizz-postgres-alt",
	  "icon-mfizz-html",
	  "icon-mfizz-mfizz",
	  "icon-mfizz-apache",
	  "icon-mfizz-hadoop",
	  "icon-mfizz-ruby-on-rails-alt",
	  "icon-mfizz-mobile-phone-broadcast",
	  "icon-mfizz-css",
	  "icon-mfizz-playframework",
	  "icon-mfizz-clojure",
	  "icon-mfizz-mobile-phone-alt",
	  "icon-mfizz-suse",
	  "icon-mfizz-java-bold",
	  "icon-mfizz-nginx-alt",
	  "icon-mfizz-nginx-alt2",
	  "icon-mfizz-linux-mint",
	  "icon-mfizz-dreamhost",
	  "icon-mfizz-blackberry",
	  "icon-mfizz-javascript",
	  "icon-mfizz-ubuntu",
	  "icon-mfizz-php-alt",
	  "icon-mfizz-centos",
	  "icon-mfizz-nodejs",
	  "icon-mfizz-splatter",
	  "icon-mfizz-3dprint",
	  "icon-mfizz-line-graph",
	  "icon-mfizz-cassandra",
	  "icon-mfizz-solaris",
	  "icon-mfizz-jetty",
	  "icon-mfizz-tomcat",
	  "icon-mfizz-oracle",
	  "icon-mfizz-oracle-alt",
	  "icon-mfizz-mssql",
	  "icon-mfizz-google-developers",
	  "icon-mfizz-google-code",
	  "icon-mfizz-kde",
	  "icon-mfizz-grails-alt"
	];


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	module.exports = [
	  "devicon-postgresql-plain",
	  "devicon-postgresql-plain-wordmark",
	  "devicon-nodejs-plain",
	  "devicon-nodejs-plain-wordmark",
	  "devicon-mongodb-plain",
	  "devicon-mongodb-plain-wordmark",
	  "devicon-krakenjs-plain",
	  "devicon-krakenjs-plain-wordmark",
	  "devicon-travis-plain-wordmark",
	  "devicon-travis-plain",
	  "devicon-linux-plain",
	  "devicon-ubuntu-plain-wordmark",
	  "devicon-ubuntu-plain",
	  "devicon-debian-plain-wordmark",
	  "devicon-debian-plain",
	  "devicon-firefox-plain-wordmark",
	  "devicon-firefox-plain",
	  "devicon-chrome-plain-wordmark",
	  "devicon-chrome-plain",
	  "devicon-backbone-line-wordmark",
	  "devicon-backbone-line",
	  "devicon-backbone-plain-wordmark",
	  "devicon-backbone-plain",
	  "devicon-rails-plain-wordmark",
	  "devicon-rails-plain",
	  "devicon-ruby-plain-wordmark",
	  "devicon-ruby-plain",
	  "devicon-dot-net-plain-wordmark",
	  "devicon-dot-net-plain",
	  "devicon-gulp-plain",
	  "devicon-zend-plain-wordmark",
	  "devicon-zend-plain",
	  "devicon-yii-plain-wordmark",
	  "devicon-yii-plain",
	  "devicon-wordpress-plain-wordmark",
	  "devicon-wordpress-plain",
	  "devicon-sass-plain",
	  "devicon-python-plain-wordmark",
	  "devicon-python-plain",
	  "devicon-php-plain",
	  "devicon-photoshop-line",
	  "devicon-photoshop-plain",
	  "devicon-mysql-line",
	  "devicon-mysql-line-wordmark",
	  "devicon-less-plain",
	  "devicon-laravel-plain-wordmark",
	  "devicon-laravel-plain",
	  "devicon-jquery-plain-wordmark",
	  "devicon-jquery-plain",
	  "devicon-javascript-plain",
	  "devicon-java-line-wordmark",
	  "devicon-java-line",
	  "devicon-illustrator-line",
	  "devicon-illustrator-plain",
	  "devicon-html5-plain-wordmark",
	  "devicon-html5-plain",
	  "devicon-grunt-line-wordmark",
	  "devicon-grunt-line",
	  "devicon-grunt-plain-wordmark",
	  "devicon-grunt-plain",
	  "devicon-git-plain-wordmark",
	  "devicon-git-plain",
	  "devicon-foundation-plain-wordmark",
	  "devicon-foundation-plain",
	  "devicon-devicon-line",
	  "devicon-devicon-plain",
	  "devicon-css3-plain-wordmark",
	  "devicon-css3-plain",
	  "devicon-codeigniter-plain-wordmark",
	  "devicon-codeigniter-plain",
	  "devicon-bower-line-wordmark",
	  "devicon-bower-line",
	  "devicon-bower-plain-wordmark",
	  "devicon-bower-plain",
	  "devicon-bootstrap-line-wordmark",
	  "devicon-bootstrap-line",
	  "devicon-bootstrap-plain-wordmark",
	  "devicon-bootstrap-plain",
	  "devicon-angularjs-plain-wordmark",
	  "devicon-angularjs-plain"
	];


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	module.exports = [
	  "icon-stroke-gap-icons-WorldWide",
	  "icon-stroke-gap-icons-WorldGlobe",
	  "icon-stroke-gap-icons-Underpants",
	  "icon-stroke-gap-icons-Tshirt",
	  "icon-stroke-gap-icons-Trousers",
	  "icon-stroke-gap-icons-Tie",
	  "icon-stroke-gap-icons-TennisBall",
	  "icon-stroke-gap-icons-Telesocpe",
	  "icon-stroke-gap-icons-Stop",
	  "icon-stroke-gap-icons-Starship",
	  "icon-stroke-gap-icons-Starship2",
	  "icon-stroke-gap-icons-Speaker",
	  "icon-stroke-gap-icons-Speaker2",
	  "icon-stroke-gap-icons-Soccer",
	  "icon-stroke-gap-icons-Snikers",
	  "icon-stroke-gap-icons-Scisors",
	  "icon-stroke-gap-icons-Puzzle",
	  "icon-stroke-gap-icons-Printer",
	  "icon-stroke-gap-icons-Pool",
	  "icon-stroke-gap-icons-Podium",
	  "icon-stroke-gap-icons-Play",
	  "icon-stroke-gap-icons-Planet",
	  "icon-stroke-gap-icons-Pause",
	  "icon-stroke-gap-icons-Next",
	  "icon-stroke-gap-icons-MusicNote2",
	  "icon-stroke-gap-icons-MusicNote",
	  "icon-stroke-gap-icons-MusicMixer",
	  "icon-stroke-gap-icons-Microphone",
	  "icon-stroke-gap-icons-Medal",
	  "icon-stroke-gap-icons-ManFigure",
	  "icon-stroke-gap-icons-Magnet",
	  "icon-stroke-gap-icons-Like",
	  "icon-stroke-gap-icons-Hanger",
	  "icon-stroke-gap-icons-Handicap",
	  "icon-stroke-gap-icons-Forward",
	  "icon-stroke-gap-icons-Footbal",
	  "icon-stroke-gap-icons-Flag",
	  "icon-stroke-gap-icons-FemaleFigure",
	  "icon-stroke-gap-icons-Dislike",
	  "icon-stroke-gap-icons-DiamondRing",
	  "icon-stroke-gap-icons-Cup",
	  "icon-stroke-gap-icons-Crown",
	  "icon-stroke-gap-icons-Column",
	  "icon-stroke-gap-icons-Click",
	  "icon-stroke-gap-icons-Cassette",
	  "icon-stroke-gap-icons-Bomb",
	  "icon-stroke-gap-icons-BatteryLow",
	  "icon-stroke-gap-icons-BatteryFull",
	  "icon-stroke-gap-icons-Bascketball",
	  "icon-stroke-gap-icons-Astronaut",
	  "icon-stroke-gap-icons-WineGlass",
	  "icon-stroke-gap-icons-Water",
	  "icon-stroke-gap-icons-Wallet",
	  "icon-stroke-gap-icons-Umbrella",
	  "icon-stroke-gap-icons-TV",
	  "icon-stroke-gap-icons-TeaMug",
	  "icon-stroke-gap-icons-Tablet",
	  "icon-stroke-gap-icons-Soda",
	  "icon-stroke-gap-icons-SodaCan",
	  "icon-stroke-gap-icons-SimCard",
	  "icon-stroke-gap-icons-Signal",
	  "icon-stroke-gap-icons-Shaker",
	  "icon-stroke-gap-icons-Radio",
	  "icon-stroke-gap-icons-Pizza",
	  "icon-stroke-gap-icons-Phone",
	  "icon-stroke-gap-icons-Notebook",
	  "icon-stroke-gap-icons-Mug",
	  "icon-stroke-gap-icons-Mastercard",
	  "icon-stroke-gap-icons-Ipod",
	  "icon-stroke-gap-icons-Info",
	  "icon-stroke-gap-icons-Icecream2",
	  "icon-stroke-gap-icons-Icecream1",
	  "icon-stroke-gap-icons-Hourglass",
	  "icon-stroke-gap-icons-Help",
	  "icon-stroke-gap-icons-Goto",
	  "icon-stroke-gap-icons-Glasses",
	  "icon-stroke-gap-icons-Gameboy",
	  "icon-stroke-gap-icons-ForkandKnife",
	  "icon-stroke-gap-icons-Export",
	  "icon-stroke-gap-icons-Exit",
	  "icon-stroke-gap-icons-Espresso",
	  "icon-stroke-gap-icons-Drop",
	  "icon-stroke-gap-icons-Download",
	  "icon-stroke-gap-icons-Dollars",
	  "icon-stroke-gap-icons-Dollar",
	  "icon-stroke-gap-icons-DesktopMonitor",
	  "icon-stroke-gap-icons-Corkscrew",
	  "icon-stroke-gap-icons-CoffeeToGo",
	  "icon-stroke-gap-icons-Chart",
	  "icon-stroke-gap-icons-ChartUp",
	  "icon-stroke-gap-icons-ChartDown",
	  "icon-stroke-gap-icons-Calculator",
	  "icon-stroke-gap-icons-Bread",
	  "icon-stroke-gap-icons-Bourbon",
	  "icon-stroke-gap-icons-BottleofWIne",
	  "icon-stroke-gap-icons-Bag",
	  "icon-stroke-gap-icons-Arrow",
	  "icon-stroke-gap-icons-Antenna2",
	  "icon-stroke-gap-icons-Antenna1",
	  "icon-stroke-gap-icons-Anchor",
	  "icon-stroke-gap-icons-Wheelbarrow",
	  "icon-stroke-gap-icons-Webcam",
	  "icon-stroke-gap-icons-Unlinked",
	  "icon-stroke-gap-icons-Truck",
	  "icon-stroke-gap-icons-Timer",
	  "icon-stroke-gap-icons-Time",
	  "icon-stroke-gap-icons-StorageBox",
	  "icon-stroke-gap-icons-Star",
	  "icon-stroke-gap-icons-ShoppingCart",
	  "icon-stroke-gap-icons-Shield",
	  "icon-stroke-gap-icons-Seringe",
	  "icon-stroke-gap-icons-Pulse",
	  "icon-stroke-gap-icons-Plaster",
	  "icon-stroke-gap-icons-Plaine",
	  "icon-stroke-gap-icons-Pill",
	  "icon-stroke-gap-icons-PicnicBasket",
	  "icon-stroke-gap-icons-Phone2",
	  "icon-stroke-gap-icons-Pencil",
	  "icon-stroke-gap-icons-Pen",
	  "icon-stroke-gap-icons-PaperClip",
	  "icon-stroke-gap-icons-On-Off",
	  "icon-stroke-gap-icons-Mouse",
	  "icon-stroke-gap-icons-Megaphone",
	  "icon-stroke-gap-icons-Linked",
	  "icon-stroke-gap-icons-Keyboard",
	  "icon-stroke-gap-icons-House",
	  "icon-stroke-gap-icons-Heart",
	  "icon-stroke-gap-icons-Headset",
	  "icon-stroke-gap-icons-FullShoppingCart",
	  "icon-stroke-gap-icons-FullScreen",
	  "icon-stroke-gap-icons-Folder",
	  "icon-stroke-gap-icons-Floppy",
	  "icon-stroke-gap-icons-Files",
	  "icon-stroke-gap-icons-File",
	  "icon-stroke-gap-icons-FileBox",
	  "icon-stroke-gap-icons-ExitFullScreen",
	  "icon-stroke-gap-icons-EmptyBox",
	  "icon-stroke-gap-icons-Delete",
	  "icon-stroke-gap-icons-Controller",
	  "icon-stroke-gap-icons-Compass",
	  "icon-stroke-gap-icons-CompassTool",
	  "icon-stroke-gap-icons-ClipboardText",
	  "icon-stroke-gap-icons-ClipboardChart",
	  "icon-stroke-gap-icons-ChemicalGlass",
	  "icon-stroke-gap-icons-CD",
	  "icon-stroke-gap-icons-Carioca",
	  "icon-stroke-gap-icons-Car",
	  "icon-stroke-gap-icons-Book",
	  "icon-stroke-gap-icons-BigTruck",
	  "icon-stroke-gap-icons-Bicycle",
	  "icon-stroke-gap-icons-Wrench",
	  "icon-stroke-gap-icons-Web",
	  "icon-stroke-gap-icons-Watch",
	  "icon-stroke-gap-icons-Volume",
	  "icon-stroke-gap-icons-Video",
	  "icon-stroke-gap-icons-Users",
	  "icon-stroke-gap-icons-User",
	  "icon-stroke-gap-icons-UploadCLoud",
	  "icon-stroke-gap-icons-Typing",
	  "icon-stroke-gap-icons-Tools",
	  "icon-stroke-gap-icons-Tag",
	  "icon-stroke-gap-icons-Speedometter",
	  "icon-stroke-gap-icons-Share",
	  "icon-stroke-gap-icons-Settings",
	  "icon-stroke-gap-icons-Search",
	  "icon-stroke-gap-icons-Screwdriver",
	  "icon-stroke-gap-icons-Rolodex",
	  "icon-stroke-gap-icons-Ringer",
	  "icon-stroke-gap-icons-Resume",
	  "icon-stroke-gap-icons-Restart",
	  "icon-stroke-gap-icons-PowerOff",
	  "icon-stroke-gap-icons-Pointer",
	  "icon-stroke-gap-icons-Picture",
	  "icon-stroke-gap-icons-OpenedLock",
	  "icon-stroke-gap-icons-Notes",
	  "icon-stroke-gap-icons-Mute",
	  "icon-stroke-gap-icons-Movie",
	  "icon-stroke-gap-icons-Microphone2",
	  "icon-stroke-gap-icons-Message",
	  "icon-stroke-gap-icons-MessageRight",
	  "icon-stroke-gap-icons-MessageLeft",
	  "icon-stroke-gap-icons-Menu",
	  "icon-stroke-gap-icons-Media",
	  "icon-stroke-gap-icons-Mail",
	  "icon-stroke-gap-icons-List",
	  "icon-stroke-gap-icons-Layers",
	  "icon-stroke-gap-icons-Key",
	  "icon-stroke-gap-icons-Imbox",
	  "icon-stroke-gap-icons-Eye",
	  "icon-stroke-gap-icons-Edit",
	  "icon-stroke-gap-icons-DSLRCamera",
	  "icon-stroke-gap-icons-DownloadCloud",
	  "icon-stroke-gap-icons-CompactCamera",
	  "icon-stroke-gap-icons-Cloud",
	  "icon-stroke-gap-icons-ClosedLock",
	  "icon-stroke-gap-icons-Chart2",
	  "icon-stroke-gap-icons-Bulb",
	  "icon-stroke-gap-icons-Briefcase",
	  "icon-stroke-gap-icons-Blog",
	  "icon-stroke-gap-icons-Agenda"
	];


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	module.exports = [
	  "icon-simple-line-icons-user-female",
	  "icon-simple-line-icons-user-follow",
	  "icon-simple-line-icons-user-following",
	  "icon-simple-line-icons-user-unfollow",
	  "icon-simple-line-icons-trophy",
	  "icon-simple-line-icons-screen-smartphone",
	  "icon-simple-line-icons-screen-desktop",
	  "icon-simple-line-icons-plane",
	  "icon-simple-line-icons-notebook",
	  "icon-simple-line-icons-moustache",
	  "icon-simple-line-icons-mouse",
	  "icon-simple-line-icons-magnet",
	  "icon-simple-line-icons-energy",
	  "icon-simple-line-icons-emoticon-smile",
	  "icon-simple-line-icons-disc",
	  "icon-simple-line-icons-cursor-move",
	  "icon-simple-line-icons-crop",
	  "icon-simple-line-icons-credit-card",
	  "icon-simple-line-icons-chemistry",
	  "icon-simple-line-icons-user",
	  "icon-simple-line-icons-speedometer",
	  "icon-simple-line-icons-social-youtube",
	  "icon-simple-line-icons-social-twitter",
	  "icon-simple-line-icons-social-tumblr",
	  "icon-simple-line-icons-social-facebook",
	  "icon-simple-line-icons-social-dropbox",
	  "icon-simple-line-icons-social-dribbble",
	  "icon-simple-line-icons-shield",
	  "icon-simple-line-icons-screen-tablet",
	  "icon-simple-line-icons-magic-wand",
	  "icon-simple-line-icons-hourglass",
	  "icon-simple-line-icons-graduation",
	  "icon-simple-line-icons-ghost",
	  "icon-simple-line-icons-game-controller",
	  "icon-simple-line-icons-fire",
	  "icon-simple-line-icons-eyeglasses",
	  "icon-simple-line-icons-envelope-open",
	  "icon-simple-line-icons-envelope-letter",
	  "icon-simple-line-icons-bell",
	  "icon-simple-line-icons-badge",
	  "icon-simple-line-icons-anchor",
	  "icon-simple-line-icons-wallet",
	  "icon-simple-line-icons-vector",
	  "icon-simple-line-icons-speech",
	  "icon-simple-line-icons-puzzle",
	  "icon-simple-line-icons-printer",
	  "icon-simple-line-icons-present",
	  "icon-simple-line-icons-playlist",
	  "icon-simple-line-icons-pin",
	  "icon-simple-line-icons-picture",
	  "icon-simple-line-icons-map",
	  "icon-simple-line-icons-layers",
	  "icon-simple-line-icons-handbag",
	  "icon-simple-line-icons-globe-alt",
	  "icon-simple-line-icons-globe",
	  "icon-simple-line-icons-frame",
	  "icon-simple-line-icons-folder-alt",
	  "icon-simple-line-icons-film",
	  "icon-simple-line-icons-feed",
	  "icon-simple-line-icons-earphones-alt",
	  "icon-simple-line-icons-earphones",
	  "icon-simple-line-icons-drop",
	  "icon-simple-line-icons-drawer",
	  "icon-simple-line-icons-docs",
	  "icon-simple-line-icons-directions",
	  "icon-simple-line-icons-direction",
	  "icon-simple-line-icons-diamond",
	  "icon-simple-line-icons-cup",
	  "icon-simple-line-icons-compass",
	  "icon-simple-line-icons-call-out",
	  "icon-simple-line-icons-call-in",
	  "icon-simple-line-icons-call-end",
	  "icon-simple-line-icons-calculator",
	  "icon-simple-line-icons-bubbles",
	  "icon-simple-line-icons-briefcase",
	  "icon-simple-line-icons-book-open",
	  "icon-simple-line-icons-basket-loaded",
	  "icon-simple-line-icons-basket",
	  "icon-simple-line-icons-bag",
	  "icon-simple-line-icons-action-undo",
	  "icon-simple-line-icons-action-redo",
	  "icon-simple-line-icons-wrench",
	  "icon-simple-line-icons-umbrella",
	  "icon-simple-line-icons-trash",
	  "icon-simple-line-icons-tag",
	  "icon-simple-line-icons-support",
	  "icon-simple-line-icons-size-fullscreen",
	  "icon-simple-line-icons-size-actual",
	  "icon-simple-line-icons-shuffle",
	  "icon-simple-line-icons-share-alt",
	  "icon-simple-line-icons-share",
	  "icon-simple-line-icons-rocket",
	  "icon-simple-line-icons-question",
	  "icon-simple-line-icons-pie-chart",
	  "icon-simple-line-icons-pencil",
	  "icon-simple-line-icons-note",
	  "icon-simple-line-icons-music-tone-alt",
	  "icon-simple-line-icons-music-tone",
	  "icon-simple-line-icons-microphone",
	  "icon-simple-line-icons-loop",
	  "icon-simple-line-icons-logout",
	  "icon-simple-line-icons-login",
	  "icon-simple-line-icons-list",
	  "icon-simple-line-icons-like",
	  "icon-simple-line-icons-home",
	  "icon-simple-line-icons-grid",
	  "icon-simple-line-icons-graph",
	  "icon-simple-line-icons-equalizer",
	  "icon-simple-line-icons-dislike",
	  "icon-simple-line-icons-cursor",
	  "icon-simple-line-icons-control-start",
	  "icon-simple-line-icons-control-rewind",
	  "icon-simple-line-icons-control-play",
	  "icon-simple-line-icons-control-pause",
	  "icon-simple-line-icons-control-forward",
	  "icon-simple-line-icons-control-end",
	  "icon-simple-line-icons-calendar",
	  "icon-simple-line-icons-bulb",
	  "icon-simple-line-icons-bar-chart",
	  "icon-simple-line-icons-arrow-up",
	  "icon-simple-line-icons-arrow-right",
	  "icon-simple-line-icons-arrow-left",
	  "icon-simple-line-icons-arrow-down",
	  "icon-simple-line-icons-ban",
	  "icon-simple-line-icons-bubble",
	  "icon-simple-line-icons-camcorder",
	  "icon-simple-line-icons-camera",
	  "icon-simple-line-icons-check",
	  "icon-simple-line-icons-clock",
	  "icon-simple-line-icons-close",
	  "icon-simple-line-icons-cloud-download",
	  "icon-simple-line-icons-cloud-upload",
	  "icon-simple-line-icons-doc",
	  "icon-simple-line-icons-envelope",
	  "icon-simple-line-icons-eye",
	  "icon-simple-line-icons-flag",
	  "icon-simple-line-icons-folder",
	  "icon-simple-line-icons-heart",
	  "icon-simple-line-icons-info",
	  "icon-simple-line-icons-key",
	  "icon-simple-line-icons-link",
	  "icon-simple-line-icons-lock",
	  "icon-simple-line-icons-lock-open",
	  "icon-simple-line-icons-magnifier",
	  "icon-simple-line-icons-magnifier-add",
	  "icon-simple-line-icons-magnifier-remove",
	  "icon-simple-line-icons-paper-clip",
	  "icon-simple-line-icons-paper-plane",
	  "icon-simple-line-icons-plus",
	  "icon-simple-line-icons-pointer",
	  "icon-simple-line-icons-power",
	  "icon-simple-line-icons-refresh",
	  "icon-simple-line-icons-reload",
	  "icon-simple-line-icons-settings",
	  "icon-simple-line-icons-star",
	  "icon-simple-line-icons-symbol-female",
	  "icon-simple-line-icons-symbol-male",
	  "icon-simple-line-icons-target",
	  "icon-simple-line-icons-volume-1",
	  "icon-simple-line-icons-volume-2",
	  "icon-simple-line-icons-volume-off",
	  "icon-simple-line-icons-users"
	];


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	module.exports = [
	  "icon-pixelvicon-browser-1",
	  "icon-pixelvicon-browser-2",
	  "icon-pixelvicon-browser-3",
	  "icon-pixelvicon-browser-4",
	  "icon-pixelvicon-browser-5",
	  "icon-pixelvicon-browser-6",
	  "icon-pixelvicon-imac",
	  "icon-pixelvicon-laptop",
	  "icon-pixelvicon-monitor",
	  "icon-pixelvicon-pc-case",
	  "icon-pixelvicon-tablet-1",
	  "icon-pixelvicon-tablet-2",
	  "icon-pixelvicon-tablet-3",
	  "icon-pixelvicon-tablet-4",
	  "icon-pixelvicon-smart-phone-1",
	  "icon-pixelvicon-smart-phone-2",
	  "icon-pixelvicon-smart-phone-3",
	  "icon-pixelvicon-smart-phone-4",
	  "icon-pixelvicon-printer",
	  "icon-pixelvicon-calculator",
	  "icon-pixelvicon-keyboard",
	  "icon-pixelvicon-mouse",
	  "icon-pixelvicon-video-game-controller",
	  "icon-pixelvicon-floppy-disk",
	  "icon-pixelvicon-coffee",
	  "icon-pixelvicon-mug",
	  "icon-pixelvicon-briefcase-1",
	  "icon-pixelvicon-briefcase-2",
	  "icon-pixelvicon-briefcase-3",
	  "icon-pixelvicon-first-aid",
	  "icon-pixelvicon-shopping-bag",
	  "icon-pixelvicon-gift",
	  "icon-pixelvicon-notepad-1",
	  "icon-pixelvicon-notepad-2",
	  "icon-pixelvicon-list-1",
	  "icon-pixelvicon-list-2",
	  "icon-pixelvicon-list-3",
	  "icon-pixelvicon-book",
	  "icon-pixelvicon-calendar-1",
	  "icon-pixelvicon-calendar-2",
	  "icon-pixelvicon-notebook",
	  "icon-pixelvicon-ruler",
	  "icon-pixelvicon-pen-1",
	  "icon-pixelvicon-pen-2",
	  "icon-pixelvicon-document-1",
	  "icon-pixelvicon-document-2",
	  "icon-pixelvicon-document-3",
	  "icon-pixelvicon-film",
	  "icon-pixelvicon-photo-gallery",
	  "icon-pixelvicon-clock",
	  "icon-pixelvicon-cupboard",
	  "icon-pixelvicon-drawer",
	  "icon-pixelvicon-dresser",
	  "icon-pixelvicon-chair",
	  "icon-pixelvicon-sofa",
	  "icon-pixelvicon-desk",
	  "icon-pixelvicon-table",
	  "icon-pixelvicon-door",
	  "icon-pixelvicon-window",
	  "icon-pixelvicon-brick-wall",
	  "icon-pixelvicon-trash-1",
	  "icon-pixelvicon-trash-2",
	  "icon-pixelvicon-lock",
	  "icon-pixelvicon-unlock",
	  "icon-pixelvicon-plus",
	  "icon-pixelvicon-minus",
	  "icon-pixelvicon-battery-1",
	  "icon-pixelvicon-battery-2",
	  "icon-pixelvicon-battery-3",
	  "icon-pixelvicon-battery-4",
	  "icon-pixelvicon-transform",
	  "icon-pixelvicon-resize",
	  "icon-pixelvicon-grid",
	  "icon-pixelvicon-menu",
	  "icon-pixelvicon-fullscreen",
	  "icon-pixelvicon-outline",
	  "icon-pixelvicon-align-left",
	  "icon-pixelvicon-align-center",
	  "icon-pixelvicon-align-right",
	  "icon-pixelvicon-align-justify"
	];


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	module.exports = [
	  "icon-nargela-align-left",
	  "icon-nargela-align-middle",
	  "icon-nargela-align-right",
	  "icon-nargela-arrow",
	  "icon-nargela-battery",
	  "icon-nargela-bell",
	  "icon-nargela-blank",
	  "icon-nargela-bluetooth",
	  "icon-nargela-browser",
	  "icon-nargela-camera",
	  "icon-nargela-cart",
	  "icon-nargela-chat",
	  "icon-nargela-check-mark",
	  "icon-nargela-clock",
	  "icon-nargela-close",
	  "icon-nargela-cocktail",
	  "icon-nargela-compass",
	  "icon-nargela-connection",
	  "icon-nargela-cursor",
	  "icon-nargela-display",
	  "icon-nargela-download",
	  "icon-nargela-drop",
	  "icon-nargela-empty-blank",
	  "icon-nargela-flag",
	  "icon-nargela-forward",
	  "icon-nargela-forward-2",
	  "icon-nargela-gift",
	  "icon-nargela-graphic",
	  "icon-nargela-grid",
	  "icon-nargela-hamburger-menu",
	  "icon-nargela-headphones",
	  "icon-nargela-heart",
	  "icon-nargela-home",
	  "icon-nargela-hyperlink",
	  "icon-nargela-justify-all",
	  "icon-nargela-key",
	  "icon-nargela-label",
	  "icon-nargela-launch",
	  "icon-nargela-lock-closed",
	  "icon-nargela-lock-open",
	  "icon-nargela-magnet",
	  "icon-nargela-magnifying-glass",
	  "icon-nargela-magnifying-glass-2",
	  "icon-nargela-magnifying-glass-minus",
	  "icon-nargela-magnifying-glass-plus",
	  "icon-nargela-mail",
	  "icon-nargela-map",
	  "icon-nargela-map-pin",
	  "icon-nargela-maximize",
	  "icon-nargela-microphone",
	  "icon-nargela-minimize",
	  "icon-nargela-minus",
	  "icon-nargela-mouse",
	  "icon-nargela-music",
	  "icon-nargela-navigation",
	  "icon-nargela-notifications",
	  "icon-nargela-pause",
	  "icon-nargela-pencil",
	  "icon-nargela-play",
	  "icon-nargela-plus",
	  "icon-nargela-power",
	  "icon-nargela-print",
	  "icon-nargela-repeat",
	  "icon-nargela-rule",
	  "icon-nargela-selection",
	  "icon-nargela-settings",
	  "icon-nargela-share",
	  "icon-nargela-shuffle",
	  "icon-nargela-sound-minus",
	  "icon-nargela-sound-plus",
	  "icon-nargela-speaker",
	  "icon-nargela-star",
	  "icon-nargela-statistics",
	  "icon-nargela-stop",
	  "icon-nargela-sun",
	  "icon-nargela-trash-bin",
	  "icon-nargela-umbrella",
	  "icon-nargela-upload",
	  "icon-nargela-video-camera",
	  "icon-nargela-wifi",
	];


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	module.exports = [
	  "icon-flatline-download-alt",
	  "icon-flatline-tags",
	  "icon-flatline-tag",
	  "icon-flatline-book",
	  "icon-flatline-volume-up",
	  "icon-flatline-volume-off",
	  "icon-flatline-volume-down",
	  "icon-flatline-qrcode",
	  "icon-flatline-lock",
	  "icon-flatline-list-alt",
	  "icon-flatline-headphones",
	  "icon-flatline-flag",
	  "icon-flatline-barcode",
	  "icon-flatline-repeat",
	  "icon-flatline-refresh",
	  "icon-flatline-play-circle",
	  "icon-flatline-inbox",
	  "icon-flatline-zoom-out",
	  "icon-flatline-zoom-in",
	  "icon-flatline-user",
	  "icon-flatline-upload",
	  "icon-flatline-trash",
	  "icon-flatline-time",
	  "icon-flatline-th",
	  "icon-flatline-th-list",
	  "icon-flatline-th-large",
	  "icon-flatline-star",
	  "icon-flatline-star-empty",
	  "icon-flatline-signal",
	  "icon-flatline-search",
	  "icon-flatline-road",
	  "icon-flatline-remove",
	  "icon-flatline-plus",
	  "icon-flatline-pencil",
	  "icon-flatline-ok",
	  "icon-flatline-off",
	  "icon-flatline-music",
	  "icon-flatline-minus",
	  "icon-flatline-home",
	  "icon-flatline-heart",
	  "icon-flatline-heart-empty",
	  "icon-flatline-glass",
	  "icon-flatline-film",
	  "icon-flatline-file",
	  "icon-flatline-euro",
	  "icon-flatline-envelope",
	  "icon-flatline-download",
	  "icon-flatline-cog",
	  "icon-flatline-cloud",
	  "icon-flatline-asterisk"
	];


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	module.exports = [
	  "icon-feather-eye",
	  "icon-feather-paper-clip",
	  "icon-feather-mail",
	  "icon-feather-toggle",
	  "icon-feather-layout",
	  "icon-feather-link",
	  "icon-feather-bell",
	  "icon-feather-lock",
	  "icon-feather-unlock",
	  "icon-feather-ribbon",
	  "icon-feather-image",
	  "icon-feather-signal",
	  "icon-feather-target",
	  "icon-feather-clipboard",
	  "icon-feather-clock",
	  "icon-feather-watch",
	  "icon-feather-air-play",
	  "icon-feather-camera",
	  "icon-feather-video",
	  "icon-feather-disc",
	  "icon-feather-printer",
	  "icon-feather-monitor",
	  "icon-feather-server",
	  "icon-feather-cog",
	  "icon-feather-heart",
	  "icon-feather-paragraph",
	  "icon-feather-align-justify",
	  "icon-feather-align-left",
	  "icon-feather-align-center",
	  "icon-feather-align-right",
	  "icon-feather-book",
	  "icon-feather-layers",
	  "icon-feather-stack",
	  "icon-feather-stack-2",
	  "icon-feather-paper",
	  "icon-feather-paper-stack",
	  "icon-feather-search",
	  "icon-feather-zoom-in",
	  "icon-feather-zoom-out",
	  "icon-feather-reply",
	  "icon-feather-circle-plus",
	  "icon-feather-circle-minus",
	  "icon-feather-circle-check",
	  "icon-feather-circle-cross",
	  "icon-feather-square-plus",
	  "icon-feather-square-minus",
	  "icon-feather-square-check",
	  "icon-feather-square-cross",
	  "icon-feather-microphone",
	  "icon-feather-record",
	  "icon-feather-skip-back",
	  "icon-feather-rewind",
	  "icon-feather-play",
	  "icon-feather-pause",
	  "icon-feather-stop",
	  "icon-feather-fast-forward",
	  "icon-feather-skip-forward",
	  "icon-feather-shuffle",
	  "icon-feather-repeat",
	  "icon-feather-folder",
	  "icon-feather-umbrella",
	  "icon-feather-moon",
	  "icon-feather-thermometer",
	  "icon-feather-drop",
	  "icon-feather-sun",
	  "icon-feather-cloud",
	  "icon-feather-cloud-upload",
	  "icon-feather-cloud-download",
	  "icon-feather-upload",
	  "icon-feather-download",
	  "icon-feather-location",
	  "icon-feather-location-2",
	  "icon-feather-map",
	  "icon-feather-battery",
	  "icon-feather-head",
	  "icon-feather-briefcase",
	  "icon-feather-speech-bubble",
	  "icon-feather-anchor",
	  "icon-feather-globe",
	  "icon-feather-box",
	  "icon-feather-reload",
	  "icon-feather-share",
	  "icon-feather-marquee",
	  "icon-feather-marquee-plus",
	  "icon-feather-marquee-minus",
	  "icon-feather-tag",
	  "icon-feather-power",
	  "icon-feather-command",
	  "icon-feather-alt",
	  "icon-feather-esc",
	  "icon-feather-bar-graph",
	  "icon-feather-bar-graph-2",
	  "icon-feather-pie-graph",
	  "icon-feather-star",
	  "icon-feather-arrow-left",
	  "icon-feather-arrow-right",
	  "icon-feather-arrow-up",
	  "icon-feather-arrow-down",
	  "icon-feather-volume",
	  "icon-feather-mute",
	  "icon-feather-content-right",
	  "icon-feather-content-left",
	  "icon-feather-grid",
	  "icon-feather-grid-2",
	  "icon-feather-columns",
	  "icon-feather-loader",
	  "icon-feather-bag",
	  "icon-feather-ban",
	  "icon-feather-flag",
	  "icon-feather-trash",
	  "icon-feather-expand",
	  "icon-feather-contract",
	  "icon-feather-maximize",
	  "icon-feather-minimize",
	  "icon-feather-plus",
	  "icon-feather-minus",
	  "icon-feather-check",
	  "icon-feather-cross",
	  "icon-feather-move",
	  "icon-feather-delete",
	  "icon-feather-menu",
	  "icon-feather-archive",
	  "icon-feather-inbox",
	  "icon-feather-outbox",
	  "icon-feather-file",
	  "icon-feather-file-add",
	  "icon-feather-file-subtract",
	  "icon-feather-help",
	  "icon-feather-open",
	  "icon-feather-ellipsis"
	];


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	module.exports = [
	  "icon-dripicons-align-center",
	  "icon-dripicons-align-justify",
	  "icon-dripicons-align-left",
	  "icon-dripicons-align-right",
	  "icon-dripicons-arrow-down",
	  "icon-dripicons-arrow-left",
	  "icon-dripicons-arrow-thin-down",
	  "icon-dripicons-arrow-right",
	  "icon-dripicons-arrow-thin-left",
	  "icon-dripicons-arrow-thin-up",
	  "icon-dripicons-arrow-up",
	  "icon-dripicons-attachment",
	  "icon-dripicons-arrow-thin-right",
	  "icon-dripicons-code",
	  "icon-dripicons-cloud",
	  "icon-dripicons-chevron-right",
	  "icon-dripicons-chevron-up",
	  "icon-dripicons-chevron-down",
	  "icon-dripicons-chevron-left",
	  "icon-dripicons-camera",
	  "icon-dripicons-checkmark",
	  "icon-dripicons-calendar",
	  "icon-dripicons-clockwise",
	  "icon-dripicons-conversation",
	  "icon-dripicons-direction",
	  "icon-dripicons-cross",
	  "icon-dripicons-graph-line",
	  "icon-dripicons-gear",
	  "icon-dripicons-graph-bar",
	  "icon-dripicons-export",
	  "icon-dripicons-feed",
	  "icon-dripicons-folder",
	  "icon-dripicons-forward",
	  "icon-dripicons-folder-open",
	  "icon-dripicons-download",
	  "icon-dripicons-document-new",
	  "icon-dripicons-document-edit",
	  "icon-dripicons-document",
	  "icon-dripicons-gaming",
	  "icon-dripicons-graph-pie",
	  "icon-dripicons-heart",
	  "icon-dripicons-headset",
	  "icon-dripicons-help",
	  "icon-dripicons-information",
	  "icon-dripicons-loading",
	  "icon-dripicons-lock",
	  "icon-dripicons-location",
	  "icon-dripicons-lock-open",
	  "icon-dripicons-mail",
	  "icon-dripicons-map",
	  "icon-dripicons-media-loop",
	  "icon-dripicons-mobile-portrait",
	  "icon-dripicons-mobile-landscape",
	  "icon-dripicons-microphone",
	  "icon-dripicons-minus",
	  "icon-dripicons-message",
	  "icon-dripicons-menu",
	  "icon-dripicons-media-stop",
	  "icon-dripicons-media-shuffle",
	  "icon-dripicons-media-previous",
	  "icon-dripicons-media-play",
	  "icon-dripicons-media-next",
	  "icon-dripicons-media-pause",
	  "icon-dripicons-monitor",
	  "icon-dripicons-move",
	  "icon-dripicons-plus",
	  "icon-dripicons-phone",
	  "icon-dripicons-preview",
	  "icon-dripicons-print",
	  "icon-dripicons-media-record",
	  "icon-dripicons-music",
	  "icon-dripicons-home",
	  "icon-dripicons-question",
	  "icon-dripicons-reply",
	  "icon-dripicons-reply-all",
	  "icon-dripicons-return",
	  "icon-dripicons-retweet",
	  "icon-dripicons-search",
	  "icon-dripicons-view-thumb",
	  "icon-dripicons-view-list-large",
	  "icon-dripicons-view-list",
	  "icon-dripicons-upload",
	  "icon-dripicons-user-group",
	  "icon-dripicons-trash",
	  "icon-dripicons-user",
	  "icon-dripicons-thumbs-up",
	  "icon-dripicons-thumbs-down",
	  "icon-dripicons-tablet-portrait",
	  "icon-dripicons-tablet-landscape",
	  "icon-dripicons-tag",
	  "icon-dripicons-star",
	  "icon-dripicons-volume-full",
	  "icon-dripicons-volume-off",
	  "icon-dripicons-warning",
	  "icon-dripicons-window"
	];


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	module.exports = [
	  "icon-outlined-boat",
	  "icon-outlined-booknote",
	  "icon-outlined-booknote-add",
	  "icon-outlined-booknote-remove",
	  "icon-outlined-camera-1",
	  "icon-outlined-camera-2",
	  "icon-outlined-cloud-check",
	  "icon-outlined-cloud-delete",
	  "icon-outlined-cloud-download",
	  "icon-outlined-cloud-upload",
	  "icon-outlined-cloudy",
	  "icon-outlined-cocktail",
	  "icon-outlined-coffee",
	  "icon-outlined-compass",
	  "icon-outlined-compress",
	  "icon-outlined-cutlery",
	  "icon-outlined-delete",
	  "icon-outlined-delete-folder",
	  "icon-outlined-dialogue-add",
	  "icon-outlined-dialogue-delete",
	  "icon-outlined-dialogue-happy",
	  "icon-outlined-dialogue-sad",
	  "icon-outlined-dialogue-text",
	  "icon-outlined-dialogue-think",
	  "icon-outlined-diamond",
	  "icon-outlined-dish-fork",
	  "icon-outlined-dish-spoon",
	  "icon-outlined-download",
	  "icon-outlined-download-folder",
	  "icon-outlined-expand",
	  "icon-outlined-eye",
	  "icon-outlined-fast-food",
	  "icon-outlined-flag",
	  "icon-outlined-folder",
	  "icon-outlined-geolocalizator",
	  "icon-outlined-globe",
	  "icon-outlined-graph",
	  "icon-outlined-graph-descending",
	  "icon-outlined-graph-rising",
	  "icon-outlined-hammer",
	  "icon-outlined-happy-drop",
	  "icon-outlined-headphones",
	  "icon-outlined-heart",
	  "icon-outlined-heart-broken",
	  "icon-outlined-home",
	  "icon-outlined-hourglass",
	  "icon-outlined-image",
	  "icon-outlined-key",
	  "icon-outlined-life-buoy",
	  "icon-outlined-list",
	  "icon-outlined-lock-closed",
	  "icon-outlined-lock-open",
	  "icon-outlined-loudspeaker",
	  "icon-outlined-magnifier",
	  "icon-outlined-magnifier-minus",
	  "icon-outlined-magnifier-plus",
	  "icon-outlined-mail",
	  "icon-outlined-mail-open",
	  "icon-outlined-map",
	  "icon-outlined-medical-case",
	  "icon-outlined-microphone-1",
	  "icon-outlined-microphone-2",
	  "icon-outlined-minus",
	  "icon-outlined-multiple-image",
	  "icon-outlined-music-back",
	  "icon-outlined-music-backtoend",
	  "icon-outlined-music-eject",
	  "icon-outlined-music-forward",
	  "icon-outlined-music-forwardtoend",
	  "icon-outlined-music-pause",
	  "icon-outlined-music-play",
	  "icon-outlined-music-random",
	  "icon-outlined-music-repeat",
	  "icon-outlined-music-stop",
	  "icon-outlined-musical-note",
	  "icon-outlined-musical-note-2",
	  "icon-outlined-old-video-cam",
	  "icon-outlined-paper-pen",
	  "icon-outlined-paper-pencil",
	  "icon-outlined-paper-sheet",
	  "icon-outlined-pen-pencil-ruler",
	  "icon-outlined-pencil",
	  "icon-outlined-pencil-ruler",
	  "icon-outlined-plus",
	  "icon-outlined-portable-pc",
	  "icon-outlined-pricetag",
	  "icon-outlined-printer",
	  "icon-outlined-profile",
	  "icon-outlined-profile-add",
	  "icon-outlined-profile-remove",
	  "icon-outlined-rainy",
	  "icon-outlined-rotate",
	  "icon-outlined-setting-1",
	  "icon-outlined-setting-2",
	  "icon-outlined-share",
	  "icon-outlined-shield-down",
	  "icon-outlined-shield-left",
	  "icon-outlined-shield-right",
	  "icon-outlined-shield-up",
	  "icon-outlined-shopping-cart",
	  "icon-outlined-shopping-cart-content",
	  "icon-outlined-sinth",
	  "icon-outlined-smartphone",
	  "icon-outlined-spread",
	  "icon-outlined-squares",
	  "icon-outlined-stormy",
	  "icon-outlined-sunny",
	  "icon-outlined-tablet",
	  "icon-outlined-three-stripes-horiz",
	  "icon-outlined-three-stripes-vert",
	  "icon-outlined-ticket",
	  "icon-outlined-todolist",
	  "icon-outlined-todolist-add",
	  "icon-outlined-todolist-check",
	  "icon-outlined-trash-bin",
	  "icon-outlined-tshirt",
	  "icon-outlined-tv-monitor",
	  "icon-outlined-umbrella",
	  "icon-outlined-upload",
	  "icon-outlined-upload-folder",
	  "icon-outlined-variable",
	  "icon-outlined-video-cam",
	  "icon-outlined-volume-higher",
	  "icon-outlined-volume-lower",
	  "icon-outlined-volume-off",
	  "icon-outlined-watch",
	  "icon-outlined-waterfall",
	  "icon-outlined-website-1",
	  "icon-outlined-website-2",
	  "icon-outlined-wine",
	  "icon-outlined-calendar",
	  "icon-outlined-alarm-clock",
	  "icon-outlined-add-folder",
	  "icon-outlined-accelerator",
	  "icon-outlined-agenda",
	  "icon-outlined-arrow-left",
	  "icon-outlined-arrow-down",
	  "icon-outlined-battery-1",
	  "icon-outlined-case",
	  "icon-outlined-arrow-up",
	  "icon-outlined-arrow-right",
	  "icon-outlined-case-2",
	  "icon-outlined-cd",
	  "icon-outlined-battery-2",
	  "icon-outlined-battery-3",
	  "icon-outlined-check",
	  "icon-outlined-battery-4",
	  "icon-outlined-chronometer",
	  "icon-outlined-clock",
	  "icon-outlined-blackboard-graph"
	]


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	module.exports = [
	  "icon-ikons-alarm",
	  "icon-ikons-alt",
	  "icon-ikons-android",
	  "icon-ikons-apple",
	  "icon-ikons-appstore",
	  "icon-ikons-arrow-1",
	  "icon-ikons-arrow-2",
	  "icon-ikons-arrow-down",
	  "icon-ikons-arrow-left",
	  "icon-ikons-arrow-right",
	  "icon-ikons-arrow-up",
	  "icon-ikons-arrows",
	  "icon-ikons-arrows-horizontal",
	  "icon-ikons-arrows-horizontal-2",
	  "icon-ikons-arrows-vertical",
	  "icon-ikons-arrows-vertical-2",
	  "icon-ikons-bar-chart-1",
	  "icon-ikons-bar-chart-2",
	  "icon-ikons-bar-chart-3",
	  "icon-ikons-bar-graph",
	  "icon-ikons-basket",
	  "icon-ikons-basket-add",
	  "icon-ikons-basket-delete",
	  "icon-ikons-basket-ok",
	  "icon-ikons-basket-remove",
	  "icon-ikons-battery-1-3",
	  "icon-ikons-battery-2-3",
	  "icon-ikons-battery-empty",
	  "icon-ikons-battery-full",
	  "icon-ikons-behance",
	  "icon-ikons-bell",
	  "icon-ikons-bin",
	  "icon-ikons-block",
	  "icon-ikons-bluetooth",
	  "icon-ikons-book",
	  "icon-ikons-book-1",
	  "icon-ikons-book-2",
	  "icon-ikons-bookmark",
	  "icon-ikons-brightness-high",
	  "icon-ikons-brightness-low",
	  "icon-ikons-browser",
	  "icon-ikons-browser-add",
	  "icon-ikons-browser-delete",
	  "icon-ikons-browser-layout-1",
	  "icon-ikons-browser-layout-2",
	  "icon-ikons-browser-layout-3",
	  "icon-ikons-browser-ok",
	  "icon-ikons-browser-remove",
	  "icon-ikons-bullseye",
	  "icon-ikons-calendar",
	  "icon-ikons-calendar-add",
	  "icon-ikons-calendar-ok",
	  "icon-ikons-camera",
	  "icon-ikons-cassette",
	  "icon-ikons-chart",
	  "icon-ikons-chart-1-2",
	  "icon-ikons-chart-1-4",
	  "icon-ikons-chart-1-8",
	  "icon-ikons-chart-3-4",
	  "icon-ikons-chart-3-8",
	  "icon-ikons-chart-5-8",
	  "icon-ikons-chart-7-8",
	  "icon-ikons-circle",
	  "icon-ikons-circle-delete",
	  "icon-ikons-circle-down",
	  "icon-ikons-circle-fast-forward",
	  "icon-ikons-circle-left",
	  "icon-ikons-circle-minus",
	  "icon-ikons-circle-ok",
	  "icon-ikons-circle-pause",
	  "icon-ikons-circle-play",
	  "icon-ikons-circle-plus",
	  "icon-ikons-circle-rewind",
	  "icon-ikons-circle-right",
	  "icon-ikons-circle-skip-next",
	  "icon-ikons-circle-skip-previous",
	  "icon-ikons-circle-stop",
	  "icon-ikons-circle-up",
	  "icon-ikons-clip",
	  "icon-ikons-close",
	  "icon-ikons-cloud",
	  "icon-ikons-cloud-download",
	  "icon-ikons-cloud-fail",
	  "icon-ikons-cloud-ok",
	  "icon-ikons-cloud-upload",
	  "icon-ikons-code",
	  "icon-ikons-cog",
	  "icon-ikons-columns",
	  "icon-ikons-command",
	  "icon-ikons-compass",
	  "icon-ikons-computer-add",
	  "icon-ikons-computer-delete",
	  "icon-ikons-computer-download",
	  "icon-ikons-computer-ok",
	  "icon-ikons-computer-remove",
	  "icon-ikons-computer-upload",
	  "icon-ikons-copy-1",
	  "icon-ikons-copy-2",
	  "icon-ikons-credit-card",
	  "icon-ikons-crop",
	  "icon-ikons-diskette",
	  "icon-ikons-document",
	  "icon-ikons-document-add",
	  "icon-ikons-document-delete",
	  "icon-ikons-document-download",
	  "icon-ikons-document-ok",
	  "icon-ikons-document-remove",
	  "icon-ikons-document-upload",
	  "icon-ikons-documents",
	  "icon-ikons-download",
	  "icon-ikons-dribbble",
	  "icon-ikons-drop",
	  "icon-ikons-dropbox",
	  "icon-ikons-eject",
	  "icon-ikons-equalizer",
	  "icon-ikons-facebook-1",
	  "icon-ikons-facebook-2",
	  "icon-ikons-fast-forward",
	  "icon-ikons-first-aid",
	  "icon-ikons-folder",
	  "icon-ikons-folder-add",
	  "icon-ikons-folder-delete",
	  "icon-ikons-folder-ok",
	  "icon-ikons-folder-remove",
	  "icon-ikons-followers",
	  "icon-ikons-following",
	  "icon-ikons-font-size-down",
	  "icon-ikons-font-size-up",
	  "icon-ikons-forrst",
	  "icon-ikons-foursquare",
	  "icon-ikons-frame",
	  "icon-ikons-globe",
	  "icon-ikons-google-plus",
	  "icon-ikons-graph-fall",
	  "icon-ikons-graph-rise",
	  "icon-ikons-grid-1",
	  "icon-ikons-grid-2",
	  "icon-ikons-hashtag",
	  "icon-ikons-heart",
	  "icon-ikons-home",
	  "icon-ikons-imac",
	  "icon-ikons-image",
	  "icon-ikons-inbox",
	  "icon-ikons-inbox-in",
	  "icon-ikons-inbox-out",
	  "icon-ikons-instagram",
	  "icon-ikons-ipad",
	  "icon-ikons-iphone",
	  "icon-ikons-layers",
	  "icon-ikons-line-graph",
	  "icon-ikons-line-graph-square",
	  "icon-ikons-link",
	  "icon-ikons-linkedin",
	  "icon-ikons-list",
	  "icon-ikons-list-2",
	  "icon-ikons-loading",
	  "icon-ikons-location",
	  "icon-ikons-lock",
	  "icon-ikons-login",
	  "icon-ikons-logout",
	  "icon-ikons-macbook",
	  "icon-ikons-magnifying-glass",
	  "icon-ikons-magnifying-glass-add",
	  "icon-ikons-magnifying-glass-remove",
	  "icon-ikons-mail",
	  "icon-ikons-mail-incoming",
	  "icon-ikons-mail-outgoing",
	  "icon-ikons-map",
	  "icon-ikons-map-add",
	  "icon-ikons-map-delete",
	  "icon-ikons-map-ok",
	  "icon-ikons-map-remove",
	  "icon-ikons-microphone",
	  "icon-ikons-microphone-off",
	  "icon-ikons-microsoft",
	  "icon-ikons-minus",
	  "icon-ikons-more",
	  "icon-ikons-more-2",
	  "icon-ikons-moustache",
	  "icon-ikons-music",
	  "icon-ikons-notepad",
	  "icon-ikons-notepad-add",
	  "icon-ikons-notepad-delete",
	  "icon-ikons-notepad-ok",
	  "icon-ikons-notepad-remove",
	  "icon-ikons-pause",
	  "icon-ikons-paypal",
	  "icon-ikons-pen-1",
	  "icon-ikons-pen-2",
	  "icon-ikons-pen-3",
	  "icon-ikons-picture",
	  "icon-ikons-pie-chart",
	  "icon-ikons-pill",
	  "icon-ikons-pin-1",
	  "icon-ikons-pin-2",
	  "icon-ikons-pin-zoom-in",
	  "icon-ikons-pin-zoom-out",
	  "icon-ikons-pinterest-1",
	  "icon-ikons-pinterest-2",
	  "icon-ikons-play",
	  "icon-ikons-plug",
	  "icon-ikons-plus",
	  "icon-ikons-polaroid",
	  "icon-ikons-polaroids",
	  "icon-ikons-power",
	  "icon-ikons-presentation",
	  "icon-ikons-printer",
	  "icon-ikons-progress",
	  "icon-ikons-record",
	  "icon-ikons-repeat",
	  "icon-ikons-repeat-1",
	  "icon-ikons-repeat-2",
	  "icon-ikons-resize-1",
	  "icon-ikons-resize-2",
	  "icon-ikons-resize-3",
	  "icon-ikons-resize-4",
	  "icon-ikons-resize-5",
	  "icon-ikons-resize-6",
	  "icon-ikons-rewind",
	  "icon-ikons-rss",
	  "icon-ikons-screen-expand-1",
	  "icon-ikons-screen-expand-2",
	  "icon-ikons-screen-expand-3",
	  "icon-ikons-share",
	  "icon-ikons-share-2",
	  "icon-ikons-shop",
	  "icon-ikons-shopping-bag",
	  "icon-ikons-shopping-cart",
	  "icon-ikons-shopping-cart-add",
	  "icon-ikons-shopping-cart-delete",
	  "icon-ikons-shopping-cart-ok",
	  "icon-ikons-shopping-cart-remove",
	  "icon-ikons-shuffle",
	  "icon-ikons-skip-next",
	  "icon-ikons-skip-previous",
	  "icon-ikons-skype",
	  "icon-ikons-slideshow",
	  "icon-ikons-speech-1",
	  "icon-ikons-speech-2",
	  "icon-ikons-speech-3",
	  "icon-ikons-speech-4",
	  "icon-ikons-speech-bubble-1",
	  "icon-ikons-speech-bubble-2",
	  "icon-ikons-speech-bubbles",
	  "icon-ikons-spotify",
	  "icon-ikons-square",
	  "icon-ikons-square-add",
	  "icon-ikons-square-dashed",
	  "icon-ikons-square-delete",
	  "icon-ikons-square-down",
	  "icon-ikons-square-left",
	  "icon-ikons-square-ok",
	  "icon-ikons-square-remove",
	  "icon-ikons-square-right",
	  "icon-ikons-square-up",
	  "icon-ikons-star",
	  "icon-ikons-stop",
	  "icon-ikons-suitcase",
	  "icon-ikons-tag",
	  "icon-ikons-tags",
	  "icon-ikons-target",
	  "icon-ikons-terminal",
	  "icon-ikons-text-center",
	  "icon-ikons-text-justify",
	  "icon-ikons-text-left",
	  "icon-ikons-text-right",
	  "icon-ikons-tick",
	  "icon-ikons-time",
	  "icon-ikons-timer",
	  "icon-ikons-tumblr",
	  "icon-ikons-twitter",
	  "icon-ikons-unlock",
	  "icon-ikons-upload",
	  "icon-ikons-user",
	  "icon-ikons-user-add",
	  "icon-ikons-user-circle",
	  "icon-ikons-user-delete",
	  "icon-ikons-user-ok",
	  "icon-ikons-user-remove",
	  "icon-ikons-user-square",
	  "icon-ikons-users",
	  "icon-ikons-view",
	  "icon-ikons-view-off",
	  "icon-ikons-vimeo",
	  "icon-ikons-voicemail",
	  "icon-ikons-volume-1",
	  "icon-ikons-volume-2",
	  "icon-ikons-volume-3",
	  "icon-ikons-volume-down",
	  "icon-ikons-volume-mute",
	  "icon-ikons-volume-off",
	  "icon-ikons-volume-up",
	  "icon-ikons-warning",
	  "icon-ikons-wifi-1",
	  "icon-ikons-wifi-2",
	  "icon-ikons-wifi-3",
	  "icon-ikons-windows",
	  "icon-ikons-youtube",
	  "icon-ikons-zoom-in",
	  "icon-ikons-zoom-out"
	];


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	module.exports = [
	  "icon-fontello-emo-happy",
	  "icon-fontello-odnoklassniki-rect-1",
	  "icon-fontello-emo-wink2",
	  "icon-fontello-emo-unhappy",
	  "icon-fontello-emo-sleep",
	  "icon-fontello-emo-thumbsup",
	  "icon-fontello-emo-devil",
	  "icon-fontello-emo-surprised",
	  "icon-fontello-emo-tongue",
	  "icon-fontello-emo-coffee",
	  "icon-fontello-emo-sunglasses",
	  "icon-fontello-emo-displeased",
	  "icon-fontello-emo-beer",
	  "icon-fontello-emo-grin",
	  "icon-fontello-emo-angry",
	  "icon-fontello-emo-saint",
	  "icon-fontello-emo-cry",
	  "icon-fontello-emo-shoot",
	  "icon-fontello-emo-squint",
	  "icon-fontello-emo-laugh",
	  "icon-fontello-spin1",
	  "icon-fontello-spin2",
	  "icon-fontello-spin3",
	  "icon-fontello-spin4",
	  "icon-fontello-spin5",
	  "icon-fontello-spin6",
	  "icon-fontello-firefox",
	  "icon-fontello-chrome",
	  "icon-fontello-opera",
	  "icon-fontello-ie",
	  "icon-fontello-crown",
	  "icon-fontello-crown-plus",
	  "icon-fontello-crown-minus",
	  "icon-fontello-marquee",
	  "icon-fontello-glass",
	  "icon-fontello-music-1",
	  "icon-fontello-search-1",
	  "icon-fontello-mail-1",
	  "icon-fontello-mail-alt",
	  "icon-fontello-heart-1",
	  "icon-fontello-heart-empty-1",
	  "icon-fontello-star-1",
	  "icon-fontello-star-empty-1",
	  "icon-fontello-star-half",
	  "icon-fontello-star-half-alt",
	  "icon-fontello-user-1",
	  "icon-fontello-users-1",
	  "icon-fontello-male",
	  "icon-fontello-female",
	  "icon-fontello-video-1",
	  "icon-fontello-videocam",
	  "icon-fontello-picture-1",
	  "icon-fontello-camera-1",
	  "icon-fontello-camera-alt",
	  "icon-fontello-th-large",
	  "icon-fontello-th",
	  "icon-fontello-th-list",
	  "icon-fontello-ok",
	  "icon-fontello-ok-circle",
	  "icon-fontello-ok-circle2",
	  "icon-fontello-ok-squared",
	  "icon-fontello-cancel-1",
	  "icon-fontello-cancel-circle",
	  "icon-fontello-cancel-circle2",
	  "icon-fontello-plus-1",
	  "icon-fontello-plus-circle",
	  "icon-fontello-plus-squared-1",
	  "icon-fontello-plus-squared-alt",
	  "icon-fontello-minus-1",
	  "icon-fontello-minus-circle",
	  "icon-fontello-minus-squared",
	  "icon-fontello-minus-squared-alt",
	  "icon-fontello-help",
	  "icon-fontello-help-circle",
	  "icon-fontello-info-circle",
	  "icon-fontello-info",
	  "icon-fontello-home-1",
	  "icon-fontello-link-1",
	  "icon-fontello-unlink",
	  "icon-fontello-link-ext",
	  "icon-fontello-link-ext-alt",
	  "icon-fontello-attach-1",
	  "icon-fontello-lock-1",
	  "icon-fontello-lock-open-1",
	  "icon-fontello-lock-open-alt",
	  "icon-fontello-pin",
	  "icon-fontello-eye-1",
	  "icon-fontello-eye-off",
	  "icon-fontello-tag-1",
	  "icon-fontello-tags",
	  "icon-fontello-bookmark-1",
	  "icon-fontello-bookmark-empty",
	  "icon-fontello-flag-1",
	  "icon-fontello-flag-empty",
	  "icon-fontello-flag-checkered",
	  "icon-fontello-thumbs-up-1",
	  "icon-fontello-thumbs-down-1",
	  "icon-fontello-thumbs-up-alt",
	  "icon-fontello-thumbs-down-alt",
	  "icon-fontello-download-1",
	  "icon-fontello-upload-1",
	  "icon-fontello-download-cloud",
	  "icon-fontello-upload-cloud-1",
	  "icon-fontello-reply-1",
	  "icon-fontello-reply-all",
	  "icon-fontello-forward-1",
	  "icon-fontello-quote-left",
	  "icon-fontello-quote-right",
	  "icon-fontello-code",
	  "icon-fontello-export-1",
	  "icon-fontello-export-alt",
	  "icon-fontello-pencil-1",
	  "icon-fontello-pencil-squared",
	  "icon-fontello-edit",
	  "icon-fontello-print-1",
	  "icon-fontello-retweet-1",
	  "icon-fontello-keyboard",
	  "icon-fontello-gamepad",
	  "icon-fontello-comment-1",
	  "icon-fontello-chat-1",
	  "icon-fontello-comment-empty",
	  "icon-fontello-chat-empty",
	  "icon-fontello-bell-1",
	  "icon-fontello-bell-alt",
	  "icon-fontello-attention-alt",
	  "icon-fontello-attention-1",
	  "icon-fontello-attention-circle",
	  "icon-fontello-location-1",
	  "icon-fontello-direction",
	  "icon-fontello-compass",
	  "icon-fontello-trash-1",
	  "icon-fontello-doc-1",
	  "icon-fontello-docs-1",
	  "icon-fontello-doc-text",
	  "icon-fontello-doc-inv",
	  "icon-fontello-doc-text-inv",
	  "icon-fontello-folder-1",
	  "icon-fontello-folder-open",
	  "icon-fontello-folder-empty",
	  "icon-fontello-folder-open-empty",
	  "icon-fontello-box",
	  "icon-fontello-rss-1",
	  "icon-fontello-rss-squared",
	  "icon-fontello-phone-1",
	  "icon-fontello-phone-squared",
	  "icon-fontello-menu-1",
	  "icon-fontello-cog-1",
	  "icon-fontello-cog-alt",
	  "icon-fontello-wrench",
	  "icon-fontello-basket-1",
	  "icon-fontello-calendar-1",
	  "icon-fontello-calendar-empty",
	  "icon-fontello-login-1",
	  "icon-fontello-logout-1",
	  "icon-fontello-mic",
	  "icon-fontello-mute",
	  "icon-fontello-volume-off",
	  "icon-fontello-volume-down",
	  "icon-fontello-volume-up",
	  "icon-fontello-headphones",
	  "icon-fontello-clock-1",
	  "icon-fontello-lightbulb",
	  "icon-fontello-block-1",
	  "icon-fontello-resize-full-1",
	  "icon-fontello-resize-full-alt",
	  "icon-fontello-resize-small-1",
	  "icon-fontello-resize-vertical",
	  "icon-fontello-resize-horizontal",
	  "icon-fontello-move",
	  "icon-fontello-zoom-in",
	  "icon-fontello-zoom-out",
	  "icon-fontello-down-circle2",
	  "icon-fontello-up-circle2",
	  "icon-fontello-left-circled2",
	  "icon-fontello-right-circled2",
	  "icon-fontello-down-dir-1",
	  "icon-fontello-up-dir-1",
	  "icon-fontello-left-dir-1",
	  "icon-fontello-right-dir-1",
	  "icon-fontello-down-open-1",
	  "icon-fontello-left-open-1",
	  "icon-fontello-right-open-1",
	  "icon-fontello-up-open-1",
	  "icon-fontello-angle-left",
	  "icon-fontello-angle-right",
	  "icon-fontello-angle-up",
	  "icon-fontello-angle-down",
	  "icon-fontello-angle-circled-left",
	  "icon-fontello-angle-circled-right",
	  "icon-fontello-angle-circled-up",
	  "icon-fontello-angle-circled-down",
	  "icon-fontello-angle-double-left",
	  "icon-fontello-angle-double-right",
	  "icon-fontello-angle-double-up",
	  "icon-fontello-angle-double-down",
	  "icon-fontello-down",
	  "icon-fontello-right",
	  "icon-fontello-left",
	  "icon-fontello-up",
	  "icon-fontello-down-1",
	  "icon-fontello-left-1",
	  "icon-fontello-emo-wink",
	  "icon-fontello-up-1",
	  "icon-fontello-right-hand",
	  "icon-fontello-left-hand",
	  "icon-fontello-up-hand",
	  "icon-fontello-down-hand",
	  "icon-fontello-left-circled-1",
	  "icon-fontello-right-circled-1",
	  "icon-fontello-up-circled-1",
	  "icon-fontello-down-circled-1",
	  "icon-fontello-cw-1",
	  "icon-fontello-ccw-1",
	  "icon-fontello-arrows-cw",
	  "icon-fontello-level-up",
	  "icon-fontello-level-down",
	  "icon-fontello-shuffle-1",
	  "icon-fontello-exchange",
	  "icon-fontello-collapse",
	  "icon-fontello-collapse-top",
	  "icon-fontello-expand",
	  "icon-fontello-collapse-left",
	  "icon-fontello-play-1",
	  "icon-fontello-play-circled",
	  "icon-fontello-play-circle2",
	  "icon-fontello-stop-1",
	  "icon-fontello-pause-1",
	  "icon-fontello-to-end-1",
	  "icon-fontello-to-end-alt",
	  "icon-fontello-to-start-1",
	  "icon-fontello-to-start-alt",
	  "icon-fontello-fast-fw",
	  "icon-fontello-fast-bw",
	  "icon-fontello-eject",
	  "icon-fontello-target-1",
	  "icon-fontello-signal-1",
	  "icon-fontello-award",
	  "icon-fontello-desktop",
	  "icon-fontello-laptop",
	  "icon-fontello-tablet",
	  "icon-fontello-mobile-1",
	  "icon-fontello-inbox-1",
	  "icon-fontello-globe-1",
	  "icon-fontello-sun",
	  "icon-fontello-cloud-1",
	  "icon-fontello-flash-1",
	  "icon-fontello-moon",
	  "icon-fontello-umbrella",
	  "icon-fontello-flight-1",
	  "icon-fontello-fighter-jet",
	  "icon-fontello-leaf-1",
	  "icon-fontello-font",
	  "icon-fontello-bold",
	  "icon-fontello-italic",
	  "icon-fontello-text-height",
	  "icon-fontello-text-width",
	  "icon-fontello-align-left",
	  "icon-fontello-align-center",
	  "icon-fontello-align-right",
	  "icon-fontello-align-justify",
	  "icon-fontello-list-1",
	  "icon-fontello-indent-left",
	  "icon-fontello-indent-right",
	  "icon-fontello-list-bullet",
	  "icon-fontello-list-numbered",
	  "icon-fontello-strike",
	  "icon-fontello-underline",
	  "icon-fontello-superscript",
	  "icon-fontello-subscript",
	  "icon-fontello-table",
	  "icon-fontello-columns",
	  "icon-fontello-crop",
	  "icon-fontello-scissors",
	  "icon-fontello-paste",
	  "icon-fontello-briefcase-1",
	  "icon-fontello-suitcase-1",
	  "icon-fontello-ellipsis",
	  "icon-fontello-ellipsis-vert",
	  "icon-fontello-off",
	  "icon-fontello-road",
	  "icon-fontello-list-alt",
	  "icon-fontello-qrcode",
	  "icon-fontello-barcode",
	  "icon-fontello-book-1",
	  "icon-fontello-ajust",
	  "icon-fontello-tint",
	  "icon-fontello-check-1",
	  "icon-fontello-check-empty",
	  "icon-fontello-circle",
	  "icon-fontello-circle-empty",
	  "icon-fontello-dot-circled",
	  "icon-fontello-asterisk",
	  "icon-fontello-gift",
	  "icon-fontello-fire",
	  "icon-fontello-magnet-1",
	  "icon-fontello-chart-bar-1",
	  "icon-fontello-ticket",
	  "icon-fontello-credit-card-1",
	  "icon-fontello-floppy-1",
	  "icon-fontello-megaphone-1",
	  "icon-fontello-hdd",
	  "icon-fontello-key-1",
	  "icon-fontello-fork",
	  "icon-fontello-rocket",
	  "icon-fontello-bug",
	  "icon-fontello-certificate",
	  "icon-fontello-tasks",
	  "icon-fontello-filter",
	  "icon-fontello-beaker",
	  "icon-fontello-magic",
	  "icon-fontello-truck",
	  "icon-fontello-money",
	  "icon-fontello-euro",
	  "icon-fontello-pound",
	  "icon-fontello-dollar",
	  "icon-fontello-rupee",
	  "icon-fontello-yen",
	  "icon-fontello-renminbi",
	  "icon-fontello-try",
	  "icon-fontello-won",
	  "icon-fontello-bitcoin",
	  "icon-fontello-sort",
	  "icon-fontello-sort-down",
	  "icon-fontello-sort-up",
	  "icon-fontello-sort-alt-up",
	  "icon-fontello-sort-alt-down",
	  "icon-fontello-sort-name-up",
	  "icon-fontello-sort-name-down",
	  "icon-fontello-sort-number-up",
	  "icon-fontello-sort-number-down",
	  "icon-fontello-hammer",
	  "icon-fontello-gauge-1",
	  "icon-fontello-sitemap",
	  "icon-fontello-spinner",
	  "icon-fontello-coffee",
	  "icon-fontello-food",
	  "icon-fontello-beer",
	  "icon-fontello-user-md",
	  "icon-fontello-stethoscope",
	  "icon-fontello-ambulance",
	  "icon-fontello-medkit",
	  "icon-fontello-h-sigh",
	  "icon-fontello-hospital",
	  "icon-fontello-building",
	  "icon-fontello-smile",
	  "icon-fontello-frown",
	  "icon-fontello-meh",
	  "icon-fontello-anchor",
	  "icon-fontello-terminal",
	  "icon-fontello-eraser",
	  "icon-fontello-puzzle",
	  "icon-fontello-shield",
	  "icon-fontello-extinguisher",
	  "icon-fontello-bullseye",
	  "icon-fontello-wheelchair",
	  "icon-fontello-adn",
	  "icon-fontello-android",
	  "icon-fontello-apple",
	  "icon-fontello-bitbucket",
	  "icon-fontello-bitbucket-squared",
	  "icon-fontello-css3",
	  "icon-fontello-dribbble",
	  "icon-fontello-dropbox",
	  "icon-fontello-facebook",
	  "icon-fontello-facebook-squared",
	  "icon-fontello-flickr",
	  "icon-fontello-foursquare",
	  "icon-fontello-github",
	  "icon-fontello-github-squared",
	  "icon-fontello-github-circled-1",
	  "icon-fontello-gittip",
	  "icon-fontello-gplus-squared",
	  "icon-fontello-gplus",
	  "icon-fontello-html5",
	  "icon-fontello-instagramm",
	  "icon-fontello-linkedin-squared",
	  "icon-fontello-linux",
	  "icon-fontello-linkedin",
	  "icon-fontello-maxcdn",
	  "icon-fontello-pagelines",
	  "icon-fontello-pinterest-circled",
	  "icon-fontello-pinterest-squared",
	  "icon-fontello-renren",
	  "icon-fontello-skype",
	  "icon-fontello-stackexchange",
	  "icon-fontello-stackoverflow",
	  "icon-fontello-trello",
	  "icon-fontello-tumblr",
	  "icon-fontello-tumblr-squared",
	  "icon-fontello-twitter-squared",
	  "icon-fontello-twitter",
	  "icon-fontello-vimeo-squared",
	  "icon-fontello-vkontakte",
	  "icon-fontello-weibo",
	  "icon-fontello-windows",
	  "icon-fontello-xing",
	  "icon-fontello-xing-squared",
	  "icon-fontello-youtube",
	  "icon-fontello-youtube-squared",
	  "icon-fontello-youtube-play",
	  "icon-fontello-blank",
	  "icon-fontello-lemon",
	  "icon-fontello-note",
	  "icon-fontello-note-beamed",
	  "icon-fontello-music",
	  "icon-fontello-search",
	  "icon-fontello-flashlight",
	  "icon-fontello-mail",
	  "icon-fontello-heart",
	  "icon-fontello-heart-empty",
	  "icon-fontello-star",
	  "icon-fontello-star-empty",
	  "icon-fontello-user",
	  "icon-fontello-users",
	  "icon-fontello-user-add",
	  "icon-fontello-video",
	  "icon-fontello-picture",
	  "icon-fontello-camera",
	  "icon-fontello-layout",
	  "icon-fontello-menu",
	  "icon-fontello-check",
	  "icon-fontello-cancel",
	  "icon-fontello-cancel-circled",
	  "icon-fontello-cancel-squared",
	  "icon-fontello-plus",
	  "icon-fontello-plus-circled",
	  "icon-fontello-plus-squared",
	  "icon-fontello-minus",
	  "icon-fontello-minus-circled",
	  "icon-fontello-minus-squared-1",
	  "icon-fontello-help-1",
	  "icon-fontello-help-circled",
	  "icon-fontello-info-1",
	  "icon-fontello-info-circled",
	  "icon-fontello-back",
	  "icon-fontello-home",
	  "icon-fontello-link",
	  "icon-fontello-attach",
	  "icon-fontello-lock",
	  "icon-fontello-lock-open",
	  "icon-fontello-eye",
	  "icon-fontello-tag",
	  "icon-fontello-bookmark",
	  "icon-fontello-bookmarks",
	  "icon-fontello-flag",
	  "icon-fontello-thumbs-up",
	  "icon-fontello-thumbs-down",
	  "icon-fontello-download",
	  "icon-fontello-upload",
	  "icon-fontello-upload-cloud",
	  "icon-fontello-reply",
	  "icon-fontello-reply-all-1",
	  "icon-fontello-forward",
	  "icon-fontello-quote",
	  "icon-fontello-code-1",
	  "icon-fontello-export",
	  "icon-fontello-pencil",
	  "icon-fontello-feather",
	  "icon-fontello-print",
	  "icon-fontello-retweet",
	  "icon-fontello-keyboard-1",
	  "icon-fontello-comment",
	  "icon-fontello-chat",
	  "icon-fontello-bell",
	  "icon-fontello-attention",
	  "icon-fontello-alert",
	  "icon-fontello-vcard",
	  "icon-fontello-address",
	  "icon-fontello-location",
	  "icon-fontello-map",
	  "icon-fontello-direction-1",
	  "icon-fontello-compass-1",
	  "icon-fontello-cup",
	  "icon-fontello-trash",
	  "icon-fontello-doc",
	  "icon-fontello-docs",
	  "icon-fontello-doc-landscape",
	  "icon-fontello-doc-text-1",
	  "icon-fontello-doc-text-inv-1",
	  "icon-fontello-newspaper",
	  "icon-fontello-book-open",
	  "icon-fontello-book",
	  "icon-fontello-folder",
	  "icon-fontello-archive",
	  "icon-fontello-box-1",
	  "icon-fontello-rss",
	  "icon-fontello-phone",
	  "icon-fontello-cog",
	  "icon-fontello-tools",
	  "icon-fontello-share",
	  "icon-fontello-shareable",
	  "icon-fontello-basket",
	  "icon-fontello-bag",
	  "icon-fontello-calendar",
	  "icon-fontello-login",
	  "icon-fontello-logout",
	  "icon-fontello-mic-1",
	  "icon-fontello-mute-1",
	  "icon-fontello-sound",
	  "icon-fontello-volume",
	  "icon-fontello-clock",
	  "icon-fontello-hourglass",
	  "icon-fontello-lamp",
	  "icon-fontello-light-down",
	  "icon-fontello-light-up",
	  "icon-fontello-adjust",
	  "icon-fontello-block",
	  "icon-fontello-resize-full",
	  "icon-fontello-resize-small",
	  "icon-fontello-popup",
	  "icon-fontello-publish",
	  "icon-fontello-window",
	  "icon-fontello-arrow-combo",
	  "icon-fontello-down-circled",
	  "icon-fontello-left-circled",
	  "icon-fontello-right-circled",
	  "icon-fontello-up-circled",
	  "icon-fontello-down-open",
	  "icon-fontello-left-open",
	  "icon-fontello-right-open",
	  "icon-fontello-up-open",
	  "icon-fontello-down-open-mini",
	  "icon-fontello-left-open-mini",
	  "icon-fontello-right-open-mini",
	  "icon-fontello-up-open-mini",
	  "icon-fontello-down-open-big",
	  "icon-fontello-left-open-big",
	  "icon-fontello-right-open-big",
	  "icon-fontello-up-open-big",
	  "icon-fontello-down-2",
	  "icon-fontello-left-2",
	  "icon-fontello-right-2",
	  "icon-fontello-up-2",
	  "icon-fontello-down-dir",
	  "icon-fontello-left-dir",
	  "icon-fontello-right-dir",
	  "icon-fontello-up-dir",
	  "icon-fontello-down-bold",
	  "icon-fontello-left-bold",
	  "icon-fontello-right-bold",
	  "icon-fontello-up-bold",
	  "icon-fontello-down-thin",
	  "icon-fontello-left-thin",
	  "icon-fontello-right-thin",
	  "icon-fontello-up-thin",
	  "icon-fontello-ccw",
	  "icon-fontello-cw",
	  "icon-fontello-arrows-ccw",
	  "icon-fontello-level-down-1",
	  "icon-fontello-level-up-1",
	  "icon-fontello-shuffle",
	  "icon-fontello-loop",
	  "icon-fontello-switch",
	  "icon-fontello-play",
	  "icon-fontello-stop",
	  "icon-fontello-pause",
	  "icon-fontello-record",
	  "icon-fontello-to-end",
	  "icon-fontello-to-start",
	  "icon-fontello-fast-forward",
	  "icon-fontello-fast-backward",
	  "icon-fontello-progress-0",
	  "icon-fontello-progress-1",
	  "icon-fontello-progress-2",
	  "icon-fontello-progress-3",
	  "icon-fontello-target",
	  "icon-fontello-palette",
	  "icon-fontello-list",
	  "icon-fontello-list-add",
	  "icon-fontello-signal",
	  "icon-fontello-trophy",
	  "icon-fontello-battery",
	  "icon-fontello-back-in-time",
	  "icon-fontello-monitor",
	  "icon-fontello-mobile",
	  "icon-fontello-network",
	  "icon-fontello-cd",
	  "icon-fontello-inbox",
	  "icon-fontello-install",
	  "icon-fontello-globe",
	  "icon-fontello-cloud",
	  "icon-fontello-cloud-thunder",
	  "icon-fontello-flash",
	  "icon-fontello-moon-1",
	  "icon-fontello-flight",
	  "icon-fontello-paper-plane",
	  "icon-fontello-leaf",
	  "icon-fontello-lifebuoy",
	  "icon-fontello-mouse",
	  "icon-fontello-briefcase",
	  "icon-fontello-suitcase",
	  "icon-fontello-dot",
	  "icon-fontello-dot-2",
	  "icon-fontello-dot-3",
	  "icon-fontello-brush",
	  "icon-fontello-magnet",
	  "icon-fontello-infinity",
	  "icon-fontello-erase",
	  "icon-fontello-chart-pie",
	  "icon-fontello-chart-line",
	  "icon-fontello-chart-bar",
	  "icon-fontello-chart-area",
	  "icon-fontello-tape",
	  "icon-fontello-graduation-cap",
	  "icon-fontello-language",
	  "icon-fontello-ticket-1",
	  "icon-fontello-water",
	  "icon-fontello-droplet",
	  "icon-fontello-air",
	  "icon-fontello-credit-card",
	  "icon-fontello-floppy",
	  "icon-fontello-clipboard",
	  "icon-fontello-megaphone",
	  "icon-fontello-database",
	  "icon-fontello-drive",
	  "icon-fontello-bucket",
	  "icon-fontello-thermometer",
	  "icon-fontello-key",
	  "icon-fontello-flow-cascade",
	  "icon-fontello-flow-branch",
	  "icon-fontello-flow-tree",
	  "icon-fontello-flow-line",
	  "icon-fontello-flow-parallel",
	  "icon-fontello-rocket-1",
	  "icon-fontello-gauge",
	  "icon-fontello-traffic-cone",
	  "icon-fontello-cc",
	  "icon-fontello-cc-by",
	  "icon-fontello-cc-nc",
	  "icon-fontello-cc-nc-eu",
	  "icon-fontello-cc-nc-jp",
	  "icon-fontello-cc-sa",
	  "icon-fontello-cc-nd",
	  "icon-fontello-cc-pd",
	  "icon-fontello-cc-zero",
	  "icon-fontello-cc-share",
	  "icon-fontello-cc-remix",
	  "icon-fontello-github-1",
	  "icon-fontello-github-circled",
	  "icon-fontello-flickr-1",
	  "icon-fontello-flickr-circled",
	  "icon-fontello-vimeo",
	  "icon-fontello-vimeo-circled",
	  "icon-fontello-twitter-1",
	  "icon-fontello-twitter-circled",
	  "icon-fontello-facebook-1",
	  "icon-fontello-facebook-circled",
	  "icon-fontello-facebook-squared-1",
	  "icon-fontello-gplus-1",
	  "icon-fontello-gplus-circled",
	  "icon-fontello-pinterest",
	  "icon-fontello-pinterest-circled-1",
	  "icon-fontello-tumblr-1",
	  "icon-fontello-tumblr-circled",
	  "icon-fontello-linkedin-1",
	  "icon-fontello-linkedin-circled",
	  "icon-fontello-dribbble-1",
	  "icon-fontello-dribbble-circled",
	  "icon-fontello-stumbleupon",
	  "icon-fontello-stumbleupon-circled",
	  "icon-fontello-lastfm",
	  "icon-fontello-lastfm-circled",
	  "icon-fontello-rdio",
	  "icon-fontello-rdio-circled",
	  "icon-fontello-spotify",
	  "icon-fontello-spotify-circled",
	  "icon-fontello-qq",
	  "icon-fontello-instagram",
	  "icon-fontello-dropbox-1",
	  "icon-fontello-evernote",
	  "icon-fontello-flattr",
	  "icon-fontello-skype-1",
	  "icon-fontello-skype-circled",
	  "icon-fontello-renren-1",
	  "icon-fontello-sina-weibo",
	  "icon-fontello-paypal",
	  "icon-fontello-picasa",
	  "icon-fontello-soundcloud",
	  "icon-fontello-mixi",
	  "icon-fontello-behance",
	  "icon-fontello-google-circles",
	  "icon-fontello-vkontakte-1",
	  "icon-fontello-smashing",
	  "icon-fontello-sweden",
	  "icon-fontello-db-shape",
	  "icon-fontello-logo-db",
	  "icon-fontello-music-outline",
	  "icon-fontello-music-2",
	  "icon-fontello-search-outline",
	  "icon-fontello-search-2",
	  "icon-fontello-mail-2",
	  "icon-fontello-heart-2",
	  "icon-fontello-heart-filled",
	  "icon-fontello-star-2",
	  "icon-fontello-star-filled",
	  "icon-fontello-user-outline",
	  "icon-fontello-user-2",
	  "icon-fontello-users-outline",
	  "icon-fontello-users-2",
	  "icon-fontello-user-add-outline",
	  "icon-fontello-user-add-1",
	  "icon-fontello-user-delete-outline",
	  "icon-fontello-user-delete",
	  "icon-fontello-video-2",
	  "icon-fontello-videocam-outline",
	  "icon-fontello-videocam-1",
	  "icon-fontello-picture-outline",
	  "icon-fontello-picture-2",
	  "icon-fontello-camera-outline",
	  "icon-fontello-camera-2",
	  "icon-fontello-th-outline",
	  "icon-fontello-th-1",
	  "icon-fontello-th-large-outline",
	  "icon-fontello-th-large-1",
	  "icon-fontello-th-list-outline",
	  "icon-fontello-th-list-1",
	  "icon-fontello-ok-outline",
	  "icon-fontello-ok-1",
	  "icon-fontello-cancel-outline",
	  "icon-fontello-cancel-2",
	  "icon-fontello-cancel-alt",
	  "icon-fontello-cancel-alt-filled",
	  "icon-fontello-cancel-circled-outline",
	  "icon-fontello-cancel-circled-1",
	  "icon-fontello-plus-outline",
	  "icon-fontello-plus-2",
	  "icon-fontello-minus-outline",
	  "icon-fontello-minus-2",
	  "icon-fontello-divide-outline",
	  "icon-fontello-divide",
	  "icon-fontello-eq-outline",
	  "icon-fontello-eq",
	  "icon-fontello-info-outline",
	  "icon-fontello-info-2",
	  "icon-fontello-home-outline",
	  "icon-fontello-home-2",
	  "icon-fontello-link-outline",
	  "icon-fontello-link-2",
	  "icon-fontello-attach-outline",
	  "icon-fontello-attach-2",
	  "icon-fontello-lock-2",
	  "icon-fontello-lock-filled",
	  "icon-fontello-lock-open-2",
	  "icon-fontello-lock-open-filled",
	  "icon-fontello-pin-outline",
	  "icon-fontello-pin-1",
	  "icon-fontello-eye-outline",
	  "icon-fontello-eye-2",
	  "icon-fontello-tag-2",
	  "icon-fontello-tags-1",
	  "icon-fontello-bookmark-2",
	  "icon-fontello-flag-2",
	  "icon-fontello-flag-filled",
	  "icon-fontello-thumbs-up-2",
	  "icon-fontello-thumbs-down-2",
	  "icon-fontello-download-outline",
	  "icon-fontello-download-2",
	  "icon-fontello-upload-outline",
	  "icon-fontello-upload-2",
	  "icon-fontello-upload-cloud-outline",
	  "icon-fontello-upload-cloud-2",
	  "icon-fontello-reply-outline",
	  "icon-fontello-reply-2",
	  "icon-fontello-forward-outline",
	  "icon-fontello-forward-2",
	  "icon-fontello-code-outline",
	  "icon-fontello-code-2",
	  "icon-fontello-export-outline",
	  "icon-fontello-export-2",
	  "icon-fontello-pencil-2",
	  "icon-fontello-pen",
	  "icon-fontello-feather-1",
	  "icon-fontello-edit-1",
	  "icon-fontello-print-2",
	  "icon-fontello-comment-2",
	  "icon-fontello-chat-2",
	  "icon-fontello-chat-alt",
	  "icon-fontello-bell-2",
	  "icon-fontello-attention-2",
	  "icon-fontello-attention-filled",
	  "icon-fontello-warning-empty",
	  "icon-fontello-warning",
	  "icon-fontello-contacts",
	  "icon-fontello-vcard-1",
	  "icon-fontello-address-1",
	  "icon-fontello-location-outline",
	  "icon-fontello-location-2",
	  "icon-fontello-map-1",
	  "icon-fontello-direction-outline",
	  "icon-fontello-direction-2",
	  "icon-fontello-compass-2",
	  "icon-fontello-trash-2",
	  "icon-fontello-doc-2",
	  "icon-fontello-doc-text-2",
	  "icon-fontello-doc-add",
	  "icon-fontello-doc-remove",
	  "icon-fontello-news",
	  "icon-fontello-folder-2",
	  "icon-fontello-folder-add",
	  "icon-fontello-folder-delete",
	  "icon-fontello-archive-1",
	  "icon-fontello-box-2",
	  "icon-fontello-rss-outline",
	  "icon-fontello-rss-2",
	  "icon-fontello-phone-outline",
	  "icon-fontello-phone-2",
	  "icon-fontello-menu-outline",
	  "icon-fontello-menu-2",
	  "icon-fontello-cog-outline",
	  "icon-fontello-cog-2",
	  "icon-fontello-wrench-outline",
	  "icon-fontello-wrench-1",
	  "icon-fontello-basket-2",
	  "icon-fontello-calendar-outlilne",
	  "icon-fontello-calendar-2",
	  "icon-fontello-mic-outline",
	  "icon-fontello-mic-2",
	  "icon-fontello-volume-off-1",
	  "icon-fontello-volume-low",
	  "icon-fontello-volume-middle",
	  "icon-fontello-volume-high",
	  "icon-fontello-headphones-1",
	  "icon-fontello-clock-2",
	  "icon-fontello-wristwatch",
	  "icon-fontello-stopwatch",
	  "icon-fontello-lightbulb-1",
	  "icon-fontello-block-outline",
	  "icon-fontello-block-2",
	  "icon-fontello-resize-full-outline",
	  "icon-fontello-resize-full-2",
	  "icon-fontello-resize-normal-outline",
	  "icon-fontello-resize-normal",
	  "icon-fontello-move-outline",
	  "icon-fontello-move-1",
	  "icon-fontello-popup-1",
	  "icon-fontello-zoom-in-outline",
	  "icon-fontello-zoom-in-1",
	  "icon-fontello-zoom-out-outline",
	  "icon-fontello-zoom-out-1",
	  "icon-fontello-popup-2",
	  "icon-fontello-left-open-outline",
	  "icon-fontello-left-open-2",
	  "icon-fontello-right-open-outline",
	  "icon-fontello-right-open-2",
	  "icon-fontello-down-3",
	  "icon-fontello-left-3",
	  "icon-fontello-right-3",
	  "icon-fontello-up-3",
	  "icon-fontello-down-outline",
	  "icon-fontello-left-outline",
	  "icon-fontello-right-outline",
	  "icon-fontello-up-outline",
	  "icon-fontello-down-small",
	  "icon-fontello-left-small",
	  "icon-fontello-right-small",
	  "icon-fontello-up-small",
	  "icon-fontello-cw-outline",
	  "icon-fontello-cw-2",
	  "icon-fontello-arrows-cw-outline",
	  "icon-fontello-arrows-cw-1",
	  "icon-fontello-loop-outline",
	  "icon-fontello-loop-1",
	  "icon-fontello-loop-alt-outline",
	  "icon-fontello-loop-alt",
	  "icon-fontello-shuffle-2",
	  "icon-fontello-play-outline",
	  "icon-fontello-play-2",
	  "icon-fontello-stop-outline",
	  "icon-fontello-stop-2",
	  "icon-fontello-pause-outline",
	  "icon-fontello-pause-2",
	  "icon-fontello-fast-fw-outline",
	  "icon-fontello-fast-fw-1",
	  "icon-fontello-rewind-outline",
	  "icon-fontello-rewind",
	  "icon-fontello-record-outline",
	  "icon-fontello-record-1",
	  "icon-fontello-eject-outline",
	  "icon-fontello-eject-1",
	  "icon-fontello-eject-alt-outline",
	  "icon-fontello-eject-alt",
	  "icon-fontello-bat1",
	  "icon-fontello-bat2",
	  "icon-fontello-bat3",
	  "icon-fontello-bat4",
	  "icon-fontello-bat-charge",
	  "icon-fontello-plug",
	  "icon-fontello-target-outline",
	  "icon-fontello-target-2",
	  "icon-fontello-wifi-outline",
	  "icon-fontello-wifi",
	  "icon-fontello-desktop-1",
	  "icon-fontello-laptop-1",
	  "icon-fontello-tablet-1",
	  "icon-fontello-mobile-2",
	  "icon-fontello-contrast",
	  "icon-fontello-globe-outline",
	  "icon-fontello-globe-2",
	  "icon-fontello-globe-alt-outline",
	  "icon-fontello-globe-alt",
	  "icon-fontello-sun-1",
	  "icon-fontello-sun-filled",
	  "icon-fontello-cloud-2",
	  "icon-fontello-flash-outline",
	  "icon-fontello-flash-2",
	  "icon-fontello-moon-2",
	  "icon-fontello-waves-outline",
	  "icon-fontello-waves",
	  "icon-fontello-rain",
	  "icon-fontello-cloud-sun",
	  "icon-fontello-drizzle",
	  "icon-fontello-snow",
	  "icon-fontello-cloud-flash",
	  "icon-fontello-cloud-wind",
	  "icon-fontello-wind",
	  "icon-fontello-plane-outline",
	  "icon-fontello-plane",
	  "icon-fontello-leaf-2",
	  "icon-fontello-lifebuoy-1",
	  "icon-fontello-briefcase-2",
	  "icon-fontello-brush-1",
	  "icon-fontello-pipette",
	  "icon-fontello-power-outline",
	  "icon-fontello-power",
	  "icon-fontello-check-outline",
	  "icon-fontello-check-2",
	  "icon-fontello-gift-1",
	  "icon-fontello-temperatire",
	  "icon-fontello-chart-outline",
	  "icon-fontello-chart",
	  "icon-fontello-chart-alt-outline",
	  "icon-fontello-chart-alt",
	  "icon-fontello-chart-bar-outline",
	  "icon-fontello-chart-bar-2",
	  "icon-fontello-chart-pie-outline",
	  "icon-fontello-chart-pie-1",
	  "icon-fontello-ticket-2",
	  "icon-fontello-credit-card-2",
	  "icon-fontello-clipboard-1",
	  "icon-fontello-database-1",
	  "icon-fontello-key-outline",
	  "icon-fontello-key-2",
	  "icon-fontello-flow-split",
	  "icon-fontello-flow-merge",
	  "icon-fontello-flow-parallel-1",
	  "icon-fontello-flow-cross",
	  "icon-fontello-certificate-outline",
	  "icon-fontello-certificate-1",
	  "icon-fontello-scissors-outline",
	  "icon-fontello-scissors-1",
	  "icon-fontello-flask",
	  "icon-fontello-wine",
	  "icon-fontello-coffee-1",
	  "icon-fontello-beer-1",
	  "icon-fontello-anchor-outline",
	  "icon-fontello-anchor-1",
	  "icon-fontello-puzzle-outline",
	  "icon-fontello-puzzle-1",
	  "icon-fontello-tree",
	  "icon-fontello-calculator",
	  "icon-fontello-infinity-outline",
	  "icon-fontello-infinity-1",
	  "icon-fontello-pi-outline",
	  "icon-fontello-pi",
	  "icon-fontello-at",
	  "icon-fontello-at-circled",
	  "icon-fontello-looped-square-outline",
	  "icon-fontello-looped-square-interest",
	  "icon-fontello-sort-alphabet-outline",
	  "icon-fontello-sort-alphabet",
	  "icon-fontello-sort-numeric-outline",
	  "icon-fontello-sort-numeric",
	  "icon-fontello-dribbble-circled-1",
	  "icon-fontello-dribbble-2",
	  "icon-fontello-facebook-circled-1",
	  "icon-fontello-facebook-2",
	  "icon-fontello-flickr-circled-1",
	  "icon-fontello-flickr-2",
	  "icon-fontello-github-circled-2",
	  "icon-fontello-github-2",
	  "icon-fontello-lastfm-circled-1",
	  "icon-fontello-lastfm-1",
	  "icon-fontello-linkedin-circled-1",
	  "icon-fontello-linkedin-2",
	  "icon-fontello-pinterest-circled-2",
	  "icon-fontello-pinterest-1",
	  "icon-fontello-skype-outline",
	  "icon-fontello-skype-2",
	  "icon-fontello-tumbler-circled",
	  "icon-fontello-tumbler",
	  "icon-fontello-twitter-circled-1",
	  "icon-fontello-twitter-2",
	  "icon-fontello-vimeo-circled-1",
	  "icon-fontello-vimeo-1",
	  "icon-fontello-search-3",
	  "icon-fontello-mail-3",
	  "icon-fontello-heart-3",
	  "icon-fontello-heart-empty-2",
	  "icon-fontello-star-3",
	  "icon-fontello-user-3",
	  "icon-fontello-video-3",
	  "icon-fontello-picture-3",
	  "icon-fontello-camera-3",
	  "icon-fontello-ok-2",
	  "icon-fontello-ok-circle-1",
	  "icon-fontello-cancel-3",
	  "icon-fontello-cancel-circle-1",
	  "icon-fontello-plus-3",
	  "icon-fontello-plus-circle-1",
	  "icon-fontello-minus-3",
	  "icon-fontello-minus-circle-1",
	  "icon-fontello-help-2",
	  "icon-fontello-info-3",
	  "icon-fontello-home-3",
	  "icon-fontello-link-3",
	  "icon-fontello-attach-3",
	  "icon-fontello-lock-3",
	  "icon-fontello-lock-empty",
	  "icon-fontello-lock-open-3",
	  "icon-fontello-lock-open-empty",
	  "icon-fontello-pin-2",
	  "icon-fontello-eye-3",
	  "icon-fontello-tag-3",
	  "icon-fontello-tag-empty",
	  "icon-fontello-download-3",
	  "icon-fontello-upload-3",
	  "icon-fontello-download-cloud-1",
	  "icon-fontello-upload-cloud-3",
	  "icon-fontello-quote-left-1",
	  "icon-fontello-quote-right-1",
	  "icon-fontello-quote-left-alt",
	  "icon-fontello-quote-right-alt",
	  "icon-fontello-pencil-3",
	  "icon-fontello-pencil-neg",
	  "icon-fontello-pencil-alt",
	  "icon-fontello-undo",
	  "icon-fontello-comment-3",
	  "icon-fontello-comment-inv",
	  "icon-fontello-comment-alt",
	  "icon-fontello-comment-inv-alt",
	  "icon-fontello-comment-alt2",
	  "icon-fontello-comment-inv-alt2",
	  "icon-fontello-chat-3",
	  "icon-fontello-chat-inv",
	  "icon-fontello-location-3",
	  "icon-fontello-location-inv",
	  "icon-fontello-location-alt",
	  "icon-fontello-compass-3",
	  "icon-fontello-trash-3",
	  "icon-fontello-trash-empty",
	  "icon-fontello-doc-3",
	  "icon-fontello-doc-inv-1",
	  "icon-fontello-doc-alt",
	  "icon-fontello-doc-inv-alt",
	  "icon-fontello-article",
	  "icon-fontello-article-alt",
	  "icon-fontello-book-open-1",
	  "icon-fontello-folder-3",
	  "icon-fontello-folder-empty-1",
	  "icon-fontello-box-3",
	  "icon-fontello-rss-3",
	  "icon-fontello-rss-alt",
	  "icon-fontello-cog-3",
	  "icon-fontello-wrench-2",
	  "icon-fontello-share-1",
	  "icon-fontello-calendar-3",
	  "icon-fontello-calendar-inv",
	  "icon-fontello-calendar-alt",
	  "icon-fontello-mic-3",
	  "icon-fontello-volume-off-2",
	  "icon-fontello-volume-up-1",
	  "icon-fontello-headphones-2",
	  "icon-fontello-clock-3",
	  "icon-fontello-lamp-1",
	  "icon-fontello-block-3",
	  "icon-fontello-resize-full-3",
	  "icon-fontello-resize-full-alt-1",
	  "icon-fontello-resize-small-2",
	  "icon-fontello-resize-small-alt",
	  "icon-fontello-resize-vertical-1",
	  "icon-fontello-resize-horizontal-1",
	  "icon-fontello-move-2",
	  "icon-fontello-popup-3",
	  "icon-fontello-down-4",
	  "icon-fontello-left-4",
	  "icon-fontello-right-4",
	  "icon-fontello-up-4",
	  "icon-fontello-down-circle",
	  "icon-fontello-left-circle",
	  "icon-fontello-right-circle",
	  "icon-fontello-up-circle",
	  "icon-fontello-cw-3",
	  "icon-fontello-loop-2",
	  "icon-fontello-loop-alt-1",
	  "icon-fontello-exchange-1",
	  "icon-fontello-split",
	  "icon-fontello-arrow-curved",
	  "icon-fontello-play-3",
	  "icon-fontello-play-circle2-1",
	  "icon-fontello-stop-3",
	  "icon-fontello-pause-3",
	  "icon-fontello-to-start-2",
	  "icon-fontello-to-end-2",
	  "icon-fontello-eject-2",
	  "icon-fontello-target-3",
	  "icon-fontello-signal-2",
	  "icon-fontello-award-1",
	  "icon-fontello-award-empty",
	  "icon-fontello-list-2",
	  "icon-fontello-list-nested",
	  "icon-fontello-bat-empty",
	  "icon-fontello-bat-half",
	  "icon-fontello-bat-full",
	  "icon-fontello-bat-charge-1",
	  "icon-fontello-mobile-3",
	  "icon-fontello-cd-1",
	  "icon-fontello-equalizer",
	  "icon-fontello-cursor",
	  "icon-fontello-aperture",
	  "icon-fontello-aperture-alt",
	  "icon-fontello-steering-wheel",
	  "icon-fontello-book-2",
	  "icon-fontello-book-alt",
	  "icon-fontello-brush-2",
	  "icon-fontello-brush-alt",
	  "icon-fontello-eyedropper",
	  "icon-fontello-layers",
	  "icon-fontello-layers-alt",
	  "icon-fontello-sun-2",
	  "icon-fontello-sun-inv",
	  "icon-fontello-cloud-3",
	  "icon-fontello-rain-1",
	  "icon-fontello-flash-3",
	  "icon-fontello-moon-3",
	  "icon-fontello-moon-inv",
	  "icon-fontello-umbrella-1",
	  "icon-fontello-chart-bar-3",
	  "icon-fontello-chart-pie-2",
	  "icon-fontello-chart-pie-alt",
	  "icon-fontello-key-3",
	  "icon-fontello-key-inv",
	  "icon-fontello-hash",
	  "icon-fontello-at-1",
	  "icon-fontello-pilcrow",
	  "icon-fontello-dial",
	  "icon-fontello-search-4",
	  "icon-fontello-mail-4",
	  "icon-fontello-heart-4",
	  "icon-fontello-star-4",
	  "icon-fontello-user-4",
	  "icon-fontello-user-woman",
	  "icon-fontello-user-pair",
	  "icon-fontello-video-alt",
	  "icon-fontello-videocam-2",
	  "icon-fontello-videocam-alt",
	  "icon-fontello-camera-4",
	  "icon-fontello-th-2",
	  "icon-fontello-th-list-2",
	  "icon-fontello-ok-3",
	  "icon-fontello-cancel-4",
	  "icon-fontello-cancel-circle-2",
	  "icon-fontello-plus-4",
	  "icon-fontello-home-4",
	  "icon-fontello-lock-4",
	  "icon-fontello-lock-open-4",
	  "icon-fontello-eye-4",
	  "icon-fontello-tag-4",
	  "icon-fontello-thumbs-up-3",
	  "icon-fontello-thumbs-down-3",
	  "icon-fontello-download-4",
	  "icon-fontello-export-3",
	  "icon-fontello-pencil-4",
	  "icon-fontello-pencil-alt-1",
	  "icon-fontello-edit-2",
	  "icon-fontello-chat-4",
	  "icon-fontello-print-3",
	  "icon-fontello-bell-3",
	  "icon-fontello-attention-3",
	  "icon-fontello-info-4",
	  "icon-fontello-question",
	  "icon-fontello-location-4",
	  "icon-fontello-trash-4",
	  "icon-fontello-doc-4",
	  "icon-fontello-article-1",
	  "icon-fontello-article-alt-1",
	  "icon-fontello-rss-4",
	  "icon-fontello-wrench-3",
	  "icon-fontello-basket-3",
	  "icon-fontello-basket-alt",
	  "icon-fontello-calendar-4",
	  "icon-fontello-calendar-alt-1",
	  "icon-fontello-volume-off-3",
	  "icon-fontello-volume-down-1",
	  "icon-fontello-volume-up-2",
	  "icon-fontello-bullhorn",
	  "icon-fontello-clock-4",
	  "icon-fontello-clock-alt",
	  "icon-fontello-stop-4",
	  "icon-fontello-resize-full-4",
	  "icon-fontello-resize-small-3",
	  "icon-fontello-zoom-in-2",
	  "icon-fontello-zoom-out-2",
	  "icon-fontello-popup-4",
	  "icon-fontello-down-dir-2",
	  "icon-fontello-left-dir-2",
	  "icon-fontello-right-dir-2",
	  "icon-fontello-up-dir-2",
	  "icon-fontello-down-5",
	  "icon-fontello-up-5",
	  "icon-fontello-cw-4",
	  "icon-fontello-signal-3",
	  "icon-fontello-award-2",
	  "icon-fontello-mobile-4",
	  "icon-fontello-mobile-alt",
	  "icon-fontello-tablet-2",
	  "icon-fontello-ipod",
	  "icon-fontello-cd-2",
	  "icon-fontello-grid",
	  "icon-fontello-book-3",
	  "icon-fontello-easel",
	  "icon-fontello-globe-3",
	  "icon-fontello-chart-1",
	  "icon-fontello-chart-bar-4",
	  "icon-fontello-chart-pie-3",
	  "icon-fontello-dollar-1",
	  "icon-fontello-at-2",
	  "icon-fontello-colon",
	  "icon-fontello-semicolon",
	  "icon-fontello-squares",
	  "icon-fontello-money-1",
	  "icon-fontello-facebook-3",
	  "icon-fontello-facebook-rect",
	  "icon-fontello-twitter-3",
	  "icon-fontello-twitter-bird",
	  "icon-fontello-twitter-rect",
	  "icon-fontello-youtube-1",
	  "icon-fontello-windy-rain-inv",
	  "icon-fontello-snow-inv",
	  "icon-fontello-snow-heavy-inv",
	  "icon-fontello-hail-inv",
	  "icon-fontello-clouds-inv",
	  "icon-fontello-clouds-flash-inv",
	  "icon-fontello-temperature",
	  "icon-fontello-compass-4",
	  "icon-fontello-na",
	  "icon-fontello-celcius",
	  "icon-fontello-fahrenheit",
	  "icon-fontello-clouds-flash-alt",
	  "icon-fontello-sun-inv-1",
	  "icon-fontello-moon-inv-1",
	  "icon-fontello-cloud-sun-inv",
	  "icon-fontello-cloud-moon-inv",
	  "icon-fontello-cloud-inv",
	  "icon-fontello-cloud-flash-inv",
	  "icon-fontello-drizzle-inv",
	  "icon-fontello-rain-inv",
	  "icon-fontello-windy-inv",
	  "icon-fontello-sunrise",
	  "icon-fontello-sun-3",
	  "icon-fontello-moon-4",
	  "icon-fontello-eclipse",
	  "icon-fontello-mist",
	  "icon-fontello-wind-1",
	  "icon-fontello-snowflake",
	  "icon-fontello-cloud-sun-1",
	  "icon-fontello-cloud-moon",
	  "icon-fontello-fog-sun",
	  "icon-fontello-fog-moon",
	  "icon-fontello-fog-cloud",
	  "icon-fontello-fog",
	  "icon-fontello-cloud-4",
	  "icon-fontello-cloud-flash-1",
	  "icon-fontello-cloud-flash-alt",
	  "icon-fontello-drizzle-1",
	  "icon-fontello-rain-2",
	  "icon-fontello-windy",
	  "icon-fontello-windy-rain",
	  "icon-fontello-snow-1",
	  "icon-fontello-snow-alt",
	  "icon-fontello-snow-heavy",
	  "icon-fontello-hail",
	  "icon-fontello-clouds",
	  "icon-fontello-clouds-flash",
	  "icon-fontello-search-5",
	  "icon-fontello-mail-5",
	  "icon-fontello-heart-5",
	  "icon-fontello-heart-broken",
	  "icon-fontello-star-5",
	  "icon-fontello-star-empty-2",
	  "icon-fontello-star-half-1",
	  "icon-fontello-star-half_empty",
	  "icon-fontello-user-5",
	  "icon-fontello-user-male",
	  "icon-fontello-user-female",
	  "icon-fontello-users-3",
	  "icon-fontello-movie",
	  "icon-fontello-videocam-3",
	  "icon-fontello-isight",
	  "icon-fontello-camera-5",
	  "icon-fontello-menu-3",
	  "icon-fontello-th-thumb",
	  "icon-fontello-th-thumb-empty",
	  "icon-fontello-th-list-3",
	  "icon-fontello-ok-4",
	  "icon-fontello-ok-circled",
	  "icon-fontello-cancel-5",
	  "icon-fontello-cancel-circled-2",
	  "icon-fontello-plus-5",
	  "icon-fontello-help-circled-1",
	  "icon-fontello-help-circled-alt",
	  "icon-fontello-info-circled-1",
	  "icon-fontello-info-circled-alt",
	  "icon-fontello-home-5",
	  "icon-fontello-link-4",
	  "icon-fontello-attach-4",
	  "icon-fontello-lock-5",
	  "icon-fontello-lock-alt",
	  "icon-fontello-lock-open-5",
	  "icon-fontello-lock-open-alt-1",
	  "icon-fontello-eye-5",
	  "icon-fontello-download-5",
	  "icon-fontello-upload-4",
	  "icon-fontello-download-cloud-2",
	  "icon-fontello-upload-cloud-4",
	  "icon-fontello-reply-3",
	  "icon-fontello-pencil-5",
	  "icon-fontello-export-4",
	  "icon-fontello-print-4",
	  "icon-fontello-retweet-2",
	  "icon-fontello-comment-4",
	  "icon-fontello-chat-5",
	  "icon-fontello-bell-4",
	  "icon-fontello-attention-4",
	  "icon-fontello-attention-alt-1",
	  "icon-fontello-location-5",
	  "icon-fontello-trash-5",
	  "icon-fontello-doc-5",
	  "icon-fontello-newspaper-1",
	  "icon-fontello-folder-4",
	  "icon-fontello-folder-open-1",
	  "icon-fontello-folder-empty-2",
	  "icon-fontello-folder-open-empty-1",
	  "icon-fontello-cog-4",
	  "icon-fontello-calendar-5",
	  "icon-fontello-login-2",
	  "icon-fontello-logout-2",
	  "icon-fontello-mic-4",
	  "icon-fontello-mic-off",
	  "icon-fontello-clock-5",
	  "icon-fontello-stopwatch-1",
	  "icon-fontello-hourglass-1",
	  "icon-fontello-zoom-in-3",
	  "icon-fontello-zoom-out-3",
	  "icon-fontello-down-open-2",
	  "icon-fontello-left-open-3",
	  "icon-fontello-right-open-3",
	  "icon-fontello-up-open-2",
	  "icon-fontello-down-6",
	  "icon-fontello-left-5",
	  "icon-fontello-right-5",
	  "icon-fontello-up-6",
	  "icon-fontello-down-bold-1",
	  "icon-fontello-left-bold-1",
	  "icon-fontello-right-bold-1",
	  "icon-fontello-up-bold-1",
	  "icon-fontello-down-fat",
	  "icon-fontello-left-fat",
	  "icon-fontello-right-fat",
	  "icon-fontello-up-fat",
	  "icon-fontello-ccw-2",
	  "icon-fontello-shuffle-3",
	  "icon-fontello-play-4",
	  "icon-fontello-pause-4",
	  "icon-fontello-stop-5",
	  "icon-fontello-to-end-3",
	  "icon-fontello-to-start-3",
	  "icon-fontello-fast-forward-1",
	  "icon-fontello-fast-backward-1",
	  "icon-fontello-trophy-1",
	  "icon-fontello-monitor-1",
	  "icon-fontello-tablet-3",
	  "icon-fontello-mobile-5",
	  "icon-fontello-data-science",
	  "icon-fontello-data-science-inv",
	  "icon-fontello-inbox-2",
	  "icon-fontello-globe-4",
	  "icon-fontello-globe-inv",
	  "icon-fontello-flash-4",
	  "icon-fontello-cloud-5",
	  "icon-fontello-coverflow",
	  "icon-fontello-coverflow-empty",
	  "icon-fontello-math",
	  "icon-fontello-math-circled",
	  "icon-fontello-math-circled-empty",
	  "icon-fontello-paper-plane-1",
	  "icon-fontello-paper-plane-alt",
	  "icon-fontello-paper-plane-alt2",
	  "icon-fontello-fontsize",
	  "icon-fontello-color-adjust",
	  "icon-fontello-fire-1",
	  "icon-fontello-chart-bar-5",
	  "icon-fontello-hdd-1",
	  "icon-fontello-connected-object",
	  "icon-fontello-ruler",
	  "icon-fontello-vector",
	  "icon-fontello-vector-pencil",
	  "icon-fontello-at-3",
	  "icon-fontello-hash-1",
	  "icon-fontello-female-1",
	  "icon-fontello-male-1",
	  "icon-fontello-spread",
	  "icon-fontello-king",
	  "icon-fontello-anchor-2",
	  "icon-fontello-joystick",
	  "icon-fontello-spinner1",
	  "icon-fontello-spinner2",
	  "icon-fontello-github-3",
	  "icon-fontello-github-circled-3",
	  "icon-fontello-github-circled-alt",
	  "icon-fontello-github-circled-alt2",
	  "icon-fontello-twitter-4",
	  "icon-fontello-twitter-circled-2",
	  "icon-fontello-facebook-4",
	  "icon-fontello-facebook-circled-2",
	  "icon-fontello-gplus-2",
	  "icon-fontello-gplus-circled-1",
	  "icon-fontello-linkedin-3",
	  "icon-fontello-linkedin-circled-2",
	  "icon-fontello-dribbble-3",
	  "icon-fontello-dribbble-circled-2",
	  "icon-fontello-instagram-1",
	  "icon-fontello-instagram-circled",
	  "icon-fontello-soundcloud-1",
	  "icon-fontello-soundcloud-circled",
	  "icon-fontello-mfg-logo",
	  "icon-fontello-mfg-logo-circled",
	  "icon-fontello-aboveground-rail",
	  "icon-fontello-airfield",
	  "icon-fontello-airport",
	  "icon-fontello-art-gallery",
	  "icon-fontello-bar",
	  "icon-fontello-baseball",
	  "icon-fontello-basketball",
	  "icon-fontello-beer-2",
	  "icon-fontello-belowground-rail",
	  "icon-fontello-bicycle",
	  "icon-fontello-bus",
	  "icon-fontello-cafe",
	  "icon-fontello-campsite",
	  "icon-fontello-cemetery",
	  "icon-fontello-cinema",
	  "icon-fontello-college",
	  "icon-fontello-commerical-building",
	  "icon-fontello-credit-card-3",
	  "icon-fontello-cricket",
	  "icon-fontello-embassy",
	  "icon-fontello-fast-food",
	  "icon-fontello-ferry",
	  "icon-fontello-fire-station",
	  "icon-fontello-football",
	  "icon-fontello-fuel",
	  "icon-fontello-garden",
	  "icon-fontello-giraffe",
	  "icon-fontello-golf",
	  "icon-fontello-grocery-store",
	  "icon-fontello-harbor",
	  "icon-fontello-heliport",
	  "icon-fontello-hospital-1",
	  "icon-fontello-industrial-building",
	  "icon-fontello-library",
	  "icon-fontello-lodging",
	  "icon-fontello-london-underground",
	  "icon-fontello-minefield",
	  "icon-fontello-monument",
	  "icon-fontello-museum",
	  "icon-fontello-pharmacy",
	  "icon-fontello-pitch",
	  "icon-fontello-police",
	  "icon-fontello-post",
	  "icon-fontello-prison",
	  "icon-fontello-rail",
	  "icon-fontello-religious-christian",
	  "icon-fontello-religious-islam",
	  "icon-fontello-religious-jewish",
	  "icon-fontello-restaurant",
	  "icon-fontello-roadblock",
	  "icon-fontello-school",
	  "icon-fontello-shop",
	  "icon-fontello-skiing",
	  "icon-fontello-soccer",
	  "icon-fontello-swimming",
	  "icon-fontello-tennis",
	  "icon-fontello-theatre",
	  "icon-fontello-toilet",
	  "icon-fontello-town-hall",
	  "icon-fontello-trash-6",
	  "icon-fontello-tree-1",
	  "icon-fontello-tree-2",
	  "icon-fontello-warehouse",
	  "icon-fontello-duckduckgo",
	  "icon-fontello-aim",
	  "icon-fontello-delicious",
	  "icon-fontello-paypal-1",
	  "icon-fontello-flattr-1",
	  "icon-fontello-android-1",
	  "icon-fontello-eventful",
	  "icon-fontello-smashmag",
	  "icon-fontello-gplus-3",
	  "icon-fontello-wikipedia",
	  "icon-fontello-lanyrd",
	  "icon-fontello-calendar-6",
	  "icon-fontello-stumbleupon-1",
	  "icon-fontello-fivehundredpx",
	  "icon-fontello-pinterest-2",
	  "icon-fontello-bitcoin-1",
	  "icon-fontello-w3c",
	  "icon-fontello-foursquare-1",
	  "icon-fontello-html5-1",
	  "icon-fontello-ie-1",
	  "icon-fontello-call",
	  "icon-fontello-grooveshark",
	  "icon-fontello-ninetyninedesigns",
	  "icon-fontello-forrst",
	  "icon-fontello-digg",
	  "icon-fontello-spotify-1",
	  "icon-fontello-reddit",
	  "icon-fontello-guest",
	  "icon-fontello-gowalla",
	  "icon-fontello-appstore",
	  "icon-fontello-blogger",
	  "icon-fontello-cc-1",
	  "icon-fontello-dribbble-4",
	  "icon-fontello-evernote-1",
	  "icon-fontello-flickr-3",
	  "icon-fontello-google",
	  "icon-fontello-viadeo",
	  "icon-fontello-instapaper",
	  "icon-fontello-weibo-1",
	  "icon-fontello-klout",
	  "icon-fontello-linkedin-4",
	  "icon-fontello-meetup",
	  "icon-fontello-vk",
	  "icon-fontello-plancast",
	  "icon-fontello-disqus",
	  "icon-fontello-rss-5",
	  "icon-fontello-skype-3",
	  "icon-fontello-twitter-5",
	  "icon-fontello-youtube-2",
	  "icon-fontello-vimeo-2",
	  "icon-fontello-windows-1",
	  "icon-fontello-xing-1",
	  "icon-fontello-yahoo",
	  "icon-fontello-chrome-1",
	  "icon-fontello-email",
	  "icon-fontello-macstore",
	  "icon-fontello-myspace",
	  "icon-fontello-podcast",
	  "icon-fontello-amazon",
	  "icon-fontello-steam",
	  "icon-fontello-cloudapp",
	  "icon-fontello-dropbox-2",
	  "icon-fontello-ebay",
	  "icon-fontello-facebook-5",
	  "icon-fontello-github-4",
	  "icon-fontello-github-circled-4",
	  "icon-fontello-googleplay",
	  "icon-fontello-itunes",
	  "icon-fontello-plurk",
	  "icon-fontello-songkick",
	  "icon-fontello-lastfm-2",
	  "icon-fontello-gmail",
	  "icon-fontello-pinboard",
	  "icon-fontello-openid",
	  "icon-fontello-quora",
	  "icon-fontello-soundcloud-2",
	  "icon-fontello-tumblr-2",
	  "icon-fontello-eventasaurus",
	  "icon-fontello-wordpress",
	  "icon-fontello-yelp",
	  "icon-fontello-intensedebate",
	  "icon-fontello-eventbrite",
	  "icon-fontello-scribd",
	  "icon-fontello-posterous",
	  "icon-fontello-stripe",
	  "icon-fontello-opentable",
	  "icon-fontello-cart",
	  "icon-fontello-print-5",
	  "icon-fontello-angellist",
	  "icon-fontello-instagram-2",
	  "icon-fontello-dwolla",
	  "icon-fontello-appnet",
	  "icon-fontello-statusnet",
	  "icon-fontello-acrobat",
	  "icon-fontello-drupal",
	  "icon-fontello-buffer",
	  "icon-fontello-pocket",
	  "icon-fontello-bitbucket-1",
	  "icon-fontello-lego",
	  "icon-fontello-login-3",
	  "icon-fontello-stackoverflow-1",
	  "icon-fontello-hackernews",
	  "icon-fontello-lkdto",
	  "icon-fontello-facebook-6",
	  "icon-fontello-facebook-rect-1",
	  "icon-fontello-twitter-6",
	  "icon-fontello-twitter-bird-1",
	  "icon-fontello-vimeo-3",
	  "icon-fontello-vimeo-rect",
	  "icon-fontello-tumblr-3",
	  "icon-fontello-tumblr-rect",
	  "icon-fontello-googleplus-rect",
	  "icon-fontello-github-text",
	  "icon-fontello-github-5",
	  "icon-fontello-skype-4",
	  "icon-fontello-icq",
	  "icon-fontello-yandex",
	  "icon-fontello-yandex-rect",
	  "icon-fontello-vkontakte-rect",
	  "icon-fontello-odnoklassniki",
	  "icon-fontello-odnoklassniki-rect",
	  "icon-fontello-friendfeed",
	  "icon-fontello-friendfeed-rect",
	  "icon-fontello-blogger-1",
	  "icon-fontello-blogger-rect",
	  "icon-fontello-deviantart",
	  "icon-fontello-jabber",
	  "icon-fontello-lastfm-3",
	  "icon-fontello-lastfm-rect",
	  "icon-fontello-linkedin-5",
	  "icon-fontello-linkedin-rect",
	  "icon-fontello-picasa-1",
	  "icon-fontello-wordpress-1",
	  "icon-fontello-instagram-3",
	  "icon-fontello-instagram-filled",
	  "icon-fontello-diigo",
	  "icon-fontello-box-4",
	  "icon-fontello-box-rect",
	  "icon-fontello-tudou",
	  "icon-fontello-youku",
	  "icon-fontello-win8",
	  "icon-fontello-amex",
	  "icon-fontello-discover",
	  "icon-fontello-visa",
	  "icon-fontello-mastercard",
	  "icon-fontello-glass-1",
	  "icon-fontello-music-3",
	  "icon-fontello-search-6",
	  "icon-fontello-search-circled",
	  "icon-fontello-mail-6",
	  "icon-fontello-mail-circled",
	  "icon-fontello-heart-6",
	  "icon-fontello-heart-circled",
	  "icon-fontello-heart-empty-3",
	  "icon-fontello-star-6",
	  "icon-fontello-star-circled",
	  "icon-fontello-star-empty-3",
	  "icon-fontello-user-6",
	  "icon-fontello-group",
	  "icon-fontello-group-circled",
	  "icon-fontello-torso",
	  "icon-fontello-video-4",
	  "icon-fontello-video-circled",
	  "icon-fontello-video-alt-1",
	  "icon-fontello-videocam-4",
	  "icon-fontello-video-chat",
	  "icon-fontello-picture-4",
	  "icon-fontello-camera-6",
	  "icon-fontello-photo",
	  "icon-fontello-photo-circled",
	  "icon-fontello-th-large-2",
	  "icon-fontello-th-3",
	  "icon-fontello-th-list-4",
	  "icon-fontello-view-mode",
	  "icon-fontello-ok-5",
	  "icon-fontello-ok-circled-1",
	  "icon-fontello-ok-circled2",
	  "icon-fontello-cancel-6",
	  "icon-fontello-cancel-circled-3",
	  "icon-fontello-cancel-circled2",
	  "icon-fontello-plus-6",
	  "icon-fontello-plus-circled-1",
	  "icon-fontello-minus-4",
	  "icon-fontello-minus-circled-1",
	  "icon-fontello-help-3",
	  "icon-fontello-help-circled-2",
	  "icon-fontello-info-circled-2",
	  "icon-fontello-home-6",
	  "icon-fontello-home-circled",
	  "icon-fontello-website",
	  "icon-fontello-website-circled",
	  "icon-fontello-attach-5",
	  "icon-fontello-attach-circled",
	  "icon-fontello-lock-6",
	  "icon-fontello-lock-circled",
	  "icon-fontello-lock-open-6",
	  "icon-fontello-lock-open-alt-2",
	  "icon-fontello-eye-6",
	  "icon-fontello-eye-off-1",
	  "icon-fontello-tag-5",
	  "icon-fontello-tags-2",
	  "icon-fontello-bookmark-3",
	  "icon-fontello-bookmark-empty-1",
	  "icon-fontello-flag-3",
	  "icon-fontello-flag-circled",
	  "icon-fontello-thumbs-up-4",
	  "icon-fontello-thumbs-down-4",
	  "icon-fontello-download-6",
	  "icon-fontello-download-alt",
	  "icon-fontello-upload-5",
	  "icon-fontello-share-2",
	  "icon-fontello-quote-1",
	  "icon-fontello-quote-circled",
	  "icon-fontello-export-5",
	  "icon-fontello-pencil-6",
	  "icon-fontello-pencil-circled",
	  "icon-fontello-edit-3",
	  "icon-fontello-edit-circled",
	  "icon-fontello-edit-alt",
	  "icon-fontello-print-6",
	  "icon-fontello-retweet-3",
	  "icon-fontello-comment-5",
	  "icon-fontello-comment-alt-1",
	  "icon-fontello-bell-5",
	  "icon-fontello-warning-1",
	  "icon-fontello-exclamation",
	  "icon-fontello-error",
	  "icon-fontello-error-alt",
	  "icon-fontello-location-6",
	  "icon-fontello-location-circled",
	  "icon-fontello-compass-5",
	  "icon-fontello-compass-circled",
	  "icon-fontello-trash-7",
	  "icon-fontello-trash-circled",
	  "icon-fontello-doc-6",
	  "icon-fontello-doc-circled",
	  "icon-fontello-doc-new",
	  "icon-fontello-doc-new-circled",
	  "icon-fontello-folder-5",
	  "icon-fontello-folder-circled",
	  "icon-fontello-folder-close",
	  "icon-fontello-folder-open-2",
	  "icon-fontello-rss-6",
	  "icon-fontello-phone-3",
	  "icon-fontello-phone-circled",
	  "icon-fontello-cog-5",
	  "icon-fontello-cog-circled",
	  "icon-fontello-cogs",
	  "icon-fontello-wrench-4",
	  "icon-fontello-wrench-circled",
	  "icon-fontello-basket-4",
	  "icon-fontello-basket-circled",
	  "icon-fontello-calendar-7",
	  "icon-fontello-calendar-circled",
	  "icon-fontello-mic-5",
	  "icon-fontello-mic-circled",
	  "icon-fontello-volume-off-4",
	  "icon-fontello-volume-down-2",
	  "icon-fontello-volume-1",
	  "icon-fontello-volume-up-3",
	  "icon-fontello-headphones-3",
	  "icon-fontello-clock-6",
	  "icon-fontello-clock-circled",
	  "icon-fontello-lightbulb-2",
	  "icon-fontello-lightbulb-alt",
	  "icon-fontello-block-4",
	  "icon-fontello-resize-full-5",
	  "icon-fontello-resize-full-alt-2",
	  "icon-fontello-resize-small-4",
	  "icon-fontello-resize-vertical-2",
	  "icon-fontello-resize-horizontal-2",
	  "icon-fontello-move-3",
	  "icon-fontello-zoom-in-4",
	  "icon-fontello-zoom-out-4",
	  "icon-fontello-down-open-3",
	  "icon-fontello-left-open-4",
	  "icon-fontello-right-open-4",
	  "icon-fontello-up-open-3",
	  "icon-fontello-down-7",
	  "icon-fontello-left-6",
	  "icon-fontello-right-6",
	  "icon-fontello-up-7",
	  "icon-fontello-down-circled-2",
	  "icon-fontello-left-circled-2",
	  "icon-fontello-right-circled-2",
	  "icon-fontello-up-circled-2",
	  "icon-fontello-down-hand-1",
	  "icon-fontello-left-hand-1",
	  "icon-fontello-right-hand-1",
	  "icon-fontello-up-hand-1",
	  "icon-fontello-cw-5",
	  "icon-fontello-cw-circled",
	  "icon-fontello-arrows-cw-2",
	  "icon-fontello-shuffle-4",
	  "icon-fontello-play-5",
	  "icon-fontello-play-circled-1",
	  "icon-fontello-play-circled2",
	  "icon-fontello-stop-6",
	  "icon-fontello-stop-circled",
	  "icon-fontello-pause-5",
	  "icon-fontello-pause-circled",
	  "icon-fontello-record-2",
	  "icon-fontello-eject-3",
	  "icon-fontello-backward",
	  "icon-fontello-backward-circled",
	  "icon-fontello-fast-backward-2",
	  "icon-fontello-fast-forward-2",
	  "icon-fontello-forward-3",
	  "icon-fontello-forward-circled",
	  "icon-fontello-step-backward",
	  "icon-fontello-step-forward",
	  "icon-fontello-target-4",
	  "icon-fontello-signal-4",
	  "icon-fontello-desktop-2",
	  "icon-fontello-desktop-circled",
	  "icon-fontello-laptop-2",
	  "icon-fontello-laptop-circled",
	  "icon-fontello-network-1",
	  "icon-fontello-inbox-3",
	  "icon-fontello-inbox-circled",
	  "icon-fontello-inbox-alt",
	  "icon-fontello-globe-5",
	  "icon-fontello-globe-alt-1",
	  "icon-fontello-cloud-6",
	  "icon-fontello-cloud-circled",
	  "icon-fontello-flight-2",
	  "icon-fontello-leaf-3",
	  "icon-fontello-font-1",
	  "icon-fontello-fontsize-1",
	  "icon-fontello-bold-1",
	  "icon-fontello-italic-1",
	  "icon-fontello-text-height-1",
	  "icon-fontello-text-width-1",
	  "icon-fontello-align-left-1",
	  "icon-fontello-align-center-1",
	  "icon-fontello-align-right-1",
	  "icon-fontello-align-justify-1",
	  "icon-fontello-list-3",
	  "icon-fontello-indent-left-1",
	  "icon-fontello-indent-right-1",
	  "icon-fontello-briefcase-3",
	  "icon-fontello-off-1",
	  "icon-fontello-road-1",
	  "icon-fontello-qrcode-1",
	  "icon-fontello-barcode-1",
	  "icon-fontello-braille",
	  "icon-fontello-book-4",
	  "icon-fontello-adjust-1",
	  "icon-fontello-tint-1",
	  "icon-fontello-check-3",
	  "icon-fontello-check-empty-1",
	  "icon-fontello-asterisk-1",
	  "icon-fontello-gift-2",
	  "icon-fontello-fire-2",
	  "icon-fontello-magnet-2",
	  "icon-fontello-chart-2",
	  "icon-fontello-chart-circled",
	  "icon-fontello-credit-card-4",
	  "icon-fontello-megaphone-2",
	  "icon-fontello-clipboard-2",
	  "icon-fontello-hdd-2",
	  "icon-fontello-key-4",
	  "icon-fontello-certificate-2",
	  "icon-fontello-tasks-1",
	  "icon-fontello-filter-1",
	  "icon-fontello-gauge-2",
	  "icon-fontello-smiley",
	  "icon-fontello-smiley-circled",
	  "icon-fontello-address-book",
	  "icon-fontello-address-book-alt",
	  "icon-fontello-asl",
	  "icon-fontello-glasses",
	  "icon-fontello-hearing-impaired",
	  "icon-fontello-iphone-home",
	  "icon-fontello-person",
	  "icon-fontello-adult",
	  "icon-fontello-child",
	  "icon-fontello-blind",
	  "icon-fontello-guidedog",
	  "icon-fontello-accessibility",
	  "icon-fontello-universal-access",
	  "icon-fontello-male-2",
	  "icon-fontello-female-2",
	  "icon-fontello-behance-1",
	  "icon-fontello-blogger-2",
	  "icon-fontello-cc-2",
	  "icon-fontello-css",
	  "icon-fontello-delicious-1",
	  "icon-fontello-deviantart-1",
	  "icon-fontello-digg-1",
	  "icon-fontello-dribbble-5",
	  "icon-fontello-facebook-7",
	  "icon-fontello-flickr-4",
	  "icon-fontello-foursquare-2",
	  "icon-fontello-friendfeed-1",
	  "icon-fontello-friendfeed-rect-1",
	  "icon-fontello-github-6",
	  "icon-fontello-github-text-1",
	  "icon-fontello-googleplus",
	  "icon-fontello-instagram-4",
	  "icon-fontello-linkedin-6",
	  "icon-fontello-path",
	  "icon-fontello-picasa-2",
	  "icon-fontello-pinterest-3",
	  "icon-fontello-reddit-1",
	  "icon-fontello-skype-5",
	  "icon-fontello-slideshare",
	  "icon-fontello-stackoverflow-2",
	  "icon-fontello-stumbleupon-2",
	  "icon-fontello-twitter-7",
	  "icon-fontello-tumblr-4",
	  "icon-fontello-vimeo-4",
	  "icon-fontello-vkontakte-2",
	  "icon-fontello-w3c-1",
	  "icon-fontello-wordpress-2",
	  "icon-fontello-youtube-3",
	  "icon-fontello-music-4",
	  "icon-fontello-search-7",
	  "icon-fontello-mail-7",
	  "icon-fontello-heart-7",
	  "icon-fontello-star-7",
	  "icon-fontello-user-7",
	  "icon-fontello-videocam-5",
	  "icon-fontello-camera-7",
	  "icon-fontello-photo-1",
	  "icon-fontello-attach-6",
	  "icon-fontello-lock-7",
	  "icon-fontello-eye-7",
	  "icon-fontello-tag-6",
	  "icon-fontello-thumbs-up-5",
	  "icon-fontello-pencil-7",
	  "icon-fontello-comment-6",
	  "icon-fontello-location-7",
	  "icon-fontello-cup-1",
	  "icon-fontello-trash-8",
	  "icon-fontello-doc-7",
	  "icon-fontello-note-1",
	  "icon-fontello-cog-6",
	  "icon-fontello-params",
	  "icon-fontello-calendar-8",
	  "icon-fontello-sound-1",
	  "icon-fontello-clock-7",
	  "icon-fontello-lightbulb-3",
	  "icon-fontello-tv",
	  "icon-fontello-desktop-3",
	  "icon-fontello-mobile-6",
	  "icon-fontello-cd-3",
	  "icon-fontello-inbox-4",
	  "icon-fontello-globe-6",
	  "icon-fontello-cloud-7",
	  "icon-fontello-paper-plane-2",
	  "icon-fontello-fire-3",
	  "icon-fontello-graduation-cap-1",
	  "icon-fontello-megaphone-3",
	  "icon-fontello-database-2",
	  "icon-fontello-key-5",
	  "icon-fontello-beaker-1",
	  "icon-fontello-truck-1",
	  "icon-fontello-money-2",
	  "icon-fontello-food-1",
	  "icon-fontello-shop-1",
	  "icon-fontello-diamond",
	  "icon-fontello-t-shirt",
	  "icon-fontello-wallet",
	  "icon-fontello-search-8",
	  "icon-fontello-mail-8",
	  "icon-fontello-heart-8",
	  "icon-fontello-heart-empty-4",
	  "icon-fontello-star-8",
	  "icon-fontello-user-8",
	  "icon-fontello-video-5",
	  "icon-fontello-picture-5",
	  "icon-fontello-th-large-3",
	  "icon-fontello-th-4",
	  "icon-fontello-th-list-5",
	  "icon-fontello-ok-6",
	  "icon-fontello-ok-circle-2",
	  "icon-fontello-cancel-7",
	  "icon-fontello-cancel-circle-3",
	  "icon-fontello-plus-circle-2",
	  "icon-fontello-minus-circle-2",
	  "icon-fontello-link-5",
	  "icon-fontello-attach-7",
	  "icon-fontello-lock-8",
	  "icon-fontello-lock-open-7",
	  "icon-fontello-tag-7",
	  "icon-fontello-reply-4",
	  "icon-fontello-reply-all-2",
	  "icon-fontello-forward-4",
	  "icon-fontello-code-3",
	  "icon-fontello-retweet-4",
	  "icon-fontello-comment-7",
	  "icon-fontello-comment-alt-2",
	  "icon-fontello-chat-6",
	  "icon-fontello-attention-5",
	  "icon-fontello-location-8",
	  "icon-fontello-doc-8",
	  "icon-fontello-docs-landscape",
	  "icon-fontello-folder-6",
	  "icon-fontello-archive-2",
	  "icon-fontello-rss-7",
	  "icon-fontello-rss-alt-1",
	  "icon-fontello-cog-7",
	  "icon-fontello-logout-3",
	  "icon-fontello-clock-8",
	  "icon-fontello-block-5",
	  "icon-fontello-resize-full-6",
	  "icon-fontello-resize-full-circle",
	  "icon-fontello-popup-5",
	  "icon-fontello-left-open-5",
	  "icon-fontello-right-open-5",
	  "icon-fontello-down-circle-1",
	  "icon-fontello-left-circle-1",
	  "icon-fontello-right-circle-1",
	  "icon-fontello-up-circle-1",
	  "icon-fontello-down-dir-3",
	  "icon-fontello-right-dir-3",
	  "icon-fontello-down-micro",
	  "icon-fontello-up-micro",
	  "icon-fontello-cw-circle",
	  "icon-fontello-arrows-cw-3",
	  "icon-fontello-updown-circle",
	  "icon-fontello-target-5",
	  "icon-fontello-signal-5",
	  "icon-fontello-progress-4",
	  "icon-fontello-progress-5",
	  "icon-fontello-progress-6",
	  "icon-fontello-progress-7",
	  "icon-fontello-progress-8",
	  "icon-fontello-progress-9",
	  "icon-fontello-progress-10",
	  "icon-fontello-progress-11",
	  "icon-fontello-font-2",
	  "icon-fontello-list-4",
	  "icon-fontello-list-numbered-1",
	  "icon-fontello-indent-left-2",
	  "icon-fontello-indent-right-2",
	  "icon-fontello-cloud-8",
	  "icon-fontello-terminal-1",
	  "icon-fontello-facebook-rect-2",
	  "icon-fontello-twitter-bird-2",
	  "icon-fontello-vimeo-rect-1",
	  "icon-fontello-tumblr-rect-1",
	  "icon-fontello-googleplus-rect-1",
	  "icon-fontello-linkedin-rect-1",
	  "icon-fontello-skype-6",
	  "icon-fontello-vkontakte-rect-1",
	  "icon-fontello-youtube-4",
	  "icon-fontello-right-1"
	];


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */
	module.exports = [
	  "deepred",
	  "red",
	  "lightred",
	  "brightblue",
	  "darkblue",
	  "blue",
	  "lightblue",
	  "purple",
	  "lightpurple",
	  "darkbrown",
	  "brown",
	  "brown75",
	  "brown60",
	  "brown50",
	  "brownishgreen",
	  "orange",
	  "paleorange",
	  "pinkishred",
	  "orange75",
	  "orange65",
	  "orange45",
	  "darkorange",
	  "lightorange",
	  "darkgreen",
	  "darkgreen85",
	  "darkgreen75",
	  "darkgreen65",
	  "darkgreen55",
	  "darkgreen50",
	  "darkgreen45",
	  "darkgreen40",
	  "green",
	  "lightgreen",
	  "brightyellow",
	  "brightyellow75",
	  "brightyellow65",
	  "yellow",
	  "paleyellow",
	  "lightyellow",
	  "pink",
	  "lightpink",
	  "paleblue",
	  "palegreen",
	  "palepink",
	  "brownishgray",
	  "brownishgray75",
	  "darkgray",
	  "darkgray75",
	  "darkgray50",
	  "darkgray40",
	  "darkgray25",
	  "black",
	  "black75",
	  "davygray",
	  "darkgrayishblue75",
	  "darkgrayishblue",
	  "desaturateddarkblue",
	  "desaturateddarkblue75",
	  "darkcyan",
	  "grayishcyan"
	];


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @providesModule ReactStyle
	 */

	var ReactStyleRules = __webpack_require__(71);
	var ReactStyleRulesManager = __webpack_require__(72);

	/**
	 * @constructor
	 */
	function ReactStyle() {
	  // Stylesheet has limits in Internet Explorer 8 and 9 so we need to
	  // shard style rules into several stylesheets.
	  // 1. A sheet may contain up to 4095 rules.
	  // 2. A sheet may @import up to 31 sheets
	  // See http://bit.ly/mARqBv
	  this._rulesManager = new ReactStyleRulesManager(4095, 31);
	  this._listenersMap = {};
	  this._changeEvent = {target: this, type: 'change'};
	}

	/**
	 * @param {object} rulesMap
	 * @return {ReactStyleRules}
	 */
	ReactStyle.prototype.create = function(rulesMap) {
	  return new ReactStyleRules(rulesMap);
	};

	/**
	 * @param {ReactStyleRules} styleRules
	 * @return {ReactStyle}
	 */
	ReactStyle.prototype.addRules = function(styleRules) {
	  if (this._rulesManager.addRules(styleRules)) {
	    this.dispatchEvent(this._changeEvent);
	  }
	  return this;
	};

	/**
	 * @return {array<object>}
	 */
	ReactStyle.prototype.renderToComponents = function() {
	  return this._rulesManager.renderToComponents();
	};

	/**
	 * Implements W3C {EventTarget} interface
	 * @param {string} type
	 * @param {function|EventListener}
	 */
	ReactStyle.prototype.addEventListener = function(type, listener) {
	  var listeners = this._listenersMap[type] || [];
	  if (listeners.indexOf(listener) < 0) {
	    listeners.push(listener);
	  }
	  this._listenersMap[type] = listeners;
	};

	/**
	 * Implements W3C {EventTarget} interface
	 * @param {string} type
	 * @param {function|EventListener}
	 */
	ReactStyle.prototype.removeEventListener = function(type, listener) {
	  var listeners = this._listenersMap[type];
	  if (listeners) {
	    var idx = listeners.indexOf(listener);
	    if (idx > -1) {
	      listener.splice(listener);
	    }
	  }
	};

	/**
	 * Implements W3C {EventTarget} interface
	 * @param {object} evt
	 * @return {boolean}
	 */
	ReactStyle.prototype.dispatchEvent = function(evt) {
	  var type = evt.type;
	  var listeners = this._listenersMap[type];
	  if (listeners) {
	    for (var i = 0, j = listeners.length; i < j; i++) {
	      var handler = listeners[i];
	      if (handler.handleEvent) {
	        handler.handleEvent.call(this, evt);
	      } else {
	        handler.call(this, evt);
	      }
	    }
	  }
	  return true;
	};


	// Export the singleton instance.
	module.exports = new ReactStyle();


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "function findSequence(goal) {\n  function find(start, history) {\n    if (start == goal)\n      return history;\n    else if (start > goal)\n      return null;\n    else\n      return find(start + 5, \"(\" + history + \" + 5)\") ||\n             find(start * 3, \"(\" + history + \" * 3)\");\n  }\n  return find(1, \"1\");\n}\n"

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n{\n    \"timeline\":  \n    {\n        \"headline\":\"Revolutionary User Interfaces\",\n    \"startDate\":\"1600\",\n        \"text\":\"<p>The human computer interface helps to define computing at any one time. As computers have become more mainstream the interfaces have become more intimate. This is the journey of computer technology and how it has come to touch all of our lives.</p>\",\n        \"type\":\"default\",\n    \"asset\":\n        {\n            \"media\":\"public/imgs/timeline/user-interface/input.png\",\n            \"credit\":\"credit: Arjuna Soriano\",\n            \"caption\":\"From punch cards to multi touch.\"\n    },\n    \"date\": [\n            {\n                \"startDate\":\"1600\",\n                \"headline\":\"The Antikythera\",\n                \"text\":\"In the year 1900, sponge divers discovered the Antikythera Mechanism, a remarkable mechanical computer used to track the cycles of the solar system dated to as early as 89 B.C. There was no input however. All computations were carried out by the intricate system of clockwork like plates and wheels..\",\n                \"asset\":\n                {\n                    \"media\":\"http://youtu.be/DiQSHiAYt98\",\n                    \"credit\":\"credit: <a href=\\\"http://www.nature.com/nature/videoarchive/index.html\\\">Nature Video Channel</a>\",\n                    \"caption\":\"\"\n                }\n            },\n        {\n                \"startDate\":\"1642\",\n                \"headline\":\"Pascal's Calculator\",\n                \"text\":\"<p>Blaise Pascal invented this calculator to help his father reorganize the French tax system. It could add and subtract in one step and multiply and divide by repetition.</p><p>Input was achieved by spinning the little wheels: inspiration for the iPod click wheel?</p>\",\n                \"asset\":\n                {\n                    \"media\":\"public/imgs/timeline/user-interface/pascaline.jpg\",\n                    \"credit\":\"credit: Â© 2005 <a href=\\\"http://commons.wikimedia.org/wiki/User:David.Monniaux\\\">David Monniaux</a>  \",\n                    \"caption\":\"This piece is on display at MusÃ©e des Arts et MÃ©tiers, Paris.\"\n                }\n            },\n        {\n                \"startDate\":\"1820\",\n                \"headline\":\"Thomas Arithometer\",\n                \"text\":\"This is the first mass-produced calculator that could add, subtract, multiply and divide. Numbers were  input with all of the little knobs and dials and then the handle was twisted to perform the calculation.\",\n                \"asset\":\n                {\n                    \"media\":\"http://upload.wikimedia.org/wikipedia/commons/5/59/Arithmometre.jpg\",\n                    \"credit\":\"credit: By <a href=\\\"http://commons.wikimedia.org/wiki/File%3AArithmometre.jpg\\\">Ezrdr</a>, via Wikimedia Commons\",\n                    \"caption\":\"\"\n                }\n            },\n            {\n                \"startDate\":\"1801\",\n                \"headline\":\"Jacquard Loom\",\n                \"text\":\"A loom is not a computer. It is the first machine however to use punch-cards as a means of input into a machine. By changing the arrangement of the holes in the card, the loom would weave different patterns. \",\n                \"asset\":\n                {\n                    \"media\":\"http://youtu.be/2ypE4ZJF7qY\",\n                    \"credit\":\"credit: <a href='http://www.youtube.com/user/FiberMusings'>FiberMusings</a>\",\n                    \"caption\":\"The Jacquard loom is still in use today in modern factories. The punch-cards can be clearly seen being pulled to the top of the loom.\"\n                }\n            },\n            {\n                \"startDate\":\"1833\",\n                \"headline\":\"The Analytical Engine\",\n                \"text\":\"Charles Babbage designed but was never able to produce a working model but it is significant in that it relied upon punched cards for data and programs and would employ a language similar to modern assembly language complete with loops and conditional branching (for the nerds out there).\",\n                \"asset\":\n                {\n                    \"media\":\"http://upload.wikimedia.org/wikipedia/commons/a/a4/Analytical_Engine_%282290032530%29.jpg\",\n                    \"credit\":\"credit: By <a href='http://commons.wikimedia.org/wiki/File%3AAnalytical_Engine_(2290032530).jpg'>Marcin Wichary</a> via Wikimedia Commons\",\n                    \"caption\":\"This modern model of the Analytical Engine is housed at the Science Museum in London.\"\n                }\n            },\n            {\n                \"startDate\":\"1868\",\n                \"headline\":\"The Typewriter\",\n                \"text\":\"Again, not a computer but an important step forward in user interfaces. Invented by Christopher Sholes, An American engineer, the typewriter was layed out in the familiar QWERTY style.\",\n                \"asset\":\n                {\n                    \"media\":\"http://upload.wikimedia.org/wikipedia/commons/9/9a/Sholes_typewriter.jpg\",\n                    \"credit\":\"credit:By George Iles, via Wikimedia Commons\",\n                    \"caption\":\"A prototype of the typewriter with the QWERTY layout clearly visible.\"\n                }\n            },\n            {\n                \"startDate\":\"1890\",\n                \"headline\":\"Herman Hollerith\",\n                \"text\":\"In 1890, Hollerith introduced his tabulating machine to be used in the census. He also later invented a key punch, a machine that punched the holes into cards operated by a keyboard. His company was one of the companies that later merged to form IBM.\",\n                \"asset\":\n                {\n                    \"media\":\"http://youtu.be/UZVEp78b0XI?t=1m54s\",\n                    \"credit\":\"credit:<a href=\\\"http://www.youtube.com/user/clipcafe\\\">clipcafe</a>\",\n                    \"caption\":\"A history of early IBM punch card machines and featuring a Pascal calculator.\"\n                }\n            },\n            {\n                \"startDate\":\"1940\",\n                \"headline\":\"Remote Access Computing\",\n                \"text\":\"George Stibitz demonstrated the Complex Number Calculator (CNC) at Dartmouth College. The astonishing part was that the CNC was in New York City.\",\n                \"asset\":\n                {\n                    \"media\":\"\",\n                    \"credit\":\"\",\n                    \"caption\":\"\"\n                }\n            },\n            {\n                \"startDate\":\"1946\",\n                \"headline\":\"ENIAC\",\n                \"text\":\"Weighing 30 tons, and containing over 18,000 vacuum tubes, the ENIAC was the first truly modern computer. It could be programmed for many complex programs and used an early keyboard as its input.\",\n                \"asset\":\n                {\n                    \"media\":\"http://upload.wikimedia.org/wikipedia/commons/1/16/Classic_shot_of_the_ENIAC.jpg\",\n                    \"credit\":\"credit: U.S. Army photo\",\n                    \"caption\":\"\\\"Cpl. Irwin Goldstein (foreground) sets the switches on one of the ENIAC's function tables at the Moore School of Electrical Engineering.\\\" (Caption via Wikimedia)\"\n                }\n            },\n            {\n                \"startDate\":\"1951\",\n                \"headline\":\"UNICVAC I\",\n                \"text\":\"The Universal Automatic Computer I weighed in at 13 tons and sold for over one million dollars. It was the first mass produced computer, selling 46 units. The massive cockpit of a console featured a keyboard\",\n                \"asset\":\n                {\n                    \"media\":\"http://upload.wikimedia.org/wikipedia/commons/5/55/Museum_of_Science%2C_Boston%2C_MA_-_IMG_3163.JPG\",\n                    \"credit\":\"credit: By Daderot (Own work) [Public domain], via Wikimedia Commons\",\n                    \"caption\":\"Input for the UNIVAC I was via keyboard in this massive input console.\"\n                }\n            },\n            {\n                \"startDate\":\"1964\",\n                \"headline\":\"Multics\",\n                \"text\":\"A collaboration between MIT, Bell Laboratories and General Electric created the Multics system. It was a multi-user, time sharing system that spurred along the use of a new interface, a monitor.\",\n                \"asset\":\n                {\n                    \"media\":\"\",\n                    \"credit\":\"\",\n                    \"caption\":\"\"\n                }\n            },\n            {\n                \"startDate\":\"1968\",\n                \"headline\":\"Minicomputer\",\n                \"text\":\"Data General introduces the Nova Minicomputer which served as an inspiration for Steve Wozniak's design of the Apple I.\",\n                \"asset\":\n                {\n                    \"media\":\"http://upload.wikimedia.org/wikipedia/commons/7/7f/Data_General_Nova_SN_1.agr.JPG\",\n                    \"credit\":\"credit: By Arnold Reinhold, via Wikimedia Commons\",\n                    \"caption\":\"The first Data General Nova minicomputer displayed at the Computer History Museum in Silicon Valley.\"\n                }\n            },\n            {\n                \"startDate\":\"1968,12,9\",\n                \"headline\":\"The Mouse\",\n                \"text\":\"Douglas C. Engelbart and his team demonstrated an online system featuring a mouse, hypertext and the first graphical user interface, a \\\"windows\\\" system. The mouse was encased in a wood body and had only one button.\",\n                \"asset\":\n                {\n                    \"media\":\"http://upload.wikimedia.org/wikipedia/commons/f/f0/SRI_Douglas_Engelbart_2008.jpg\",\n                    \"credit\":\"credit: By SRI International, via Wikimedia Commons\",\n                    \"caption\":\"Douglas Engelbart with the first computer mouse prototype.\"\n                }\n            },\n            {\n                \"startDate\":\"1974\",\n                \"headline\":\"Xerox Alto\",\n                \"text\":\"The Xerox Alto was the first workstation with a built in mouse with three buttons.\",\n                \"asset\":\n                {\n                    \"media\":\"http://upload.wikimedia.org/wikipedia/commons/5/5e/Xerox_Alto_mit_Rechner.JPG\",\n                    \"credit\":\"credit: By Joho345, via Wikimedia Commons\",\n                    \"caption\":\"\"\n                }\n            },\n            {\n                \"startDate\":\"1976\",\n                \"headline\":\"Apple I\",\n                \"text\":\"Steve Wozniak designed the Apple I, a single-board computer that he and Steve Jobs sold for $500 each. Thus began Apple Inc. and the Personal Computer.\",\n                \"asset\":\n                {\n                    \"media\":\"http://www.flickr.com/photos/euthman/281712899/\",\n                    \"credit\":\"credit: <a href='http://www.flickr.com/photos/euthman/281712899/'>Ed Uthman</a> via Flickr\",\n                    \"caption\":\"An Apple I computer on display at the Smithsonian.\"\n                }\n            },\n            {\n                \"startDate\":\"1976\",\n                \"headline\":\"The Osborne I\",\n                \"text\":\"Weighing 24 pounds and costing under $2,000, the Osborne I was the first portable computer, although you probably couldn't use it in your lap for too long.\",\n                \"asset\":\n                {\n                    \"media\":\"http://www.flickr.com/photos/mightyohm/5333827381/\",\n                    \"credit\":\"credit: <a href='http://www.flickr.com/photos/mightyohm/5333827381/'>Jeff Keyzer</a> via Flickr\",\n                    \"caption\":\"An Apple I computer on display at the Smithsonian.\"\n                }\n            },\n            {\n                \"startDate\":\"1982\",\n                \"headline\":\"Windows 1.0\",\n                \"text\":\"Microsoft unveils what will become the dominant operating system for the next several decades.\",\n                \"asset\":\n                {\n                    \"media\":\"http://upload.wikimedia.org/wikipedia/commons/a/a9/Microsoft_Windows_1.0_page1.jpg\",\n                    \"credit\":\"credit: By Microsoft, via Wikimedia Commons\",\n                    \"caption\":\"\"\n                }\n            },\n            {\n                \"startDate\":\"1984\",\n                \"headline\":\"The Macintosh\",\n                \"text\":\"Apple introduced the Macintosh which was the first commercially successful computer with a mouse and a Graphical User Interface. Apple's Think Different Superbowl commercial also plays this year.\",\n                \"asset\":\n                {\n                    \"media\":\"https://farm3.staticflickr.com/2077/2179402603_bd8f1fcbe6_b.jpg\",\n                    \"credit\":\"credit: <a href='http://www.flickr.com/photos/mwichary/2179402603/'>Marcin Wichary</a> via Flickr\",\n                    \"caption\":\"The Original Macintosh with extra external floppy drive.\"\n                }\n            },\n            {\n                \"startDate\":\"1997\",\n                \"headline\":\"The Stylus\",\n                \"text\":\"Personal digital assistants introduce the touch screen with the use of a stylus. Handwriting recognition was hit or miss but some companies developed simplified alphabet input strokes to improve recognition.\",\n                \"asset\":\n                {\n                    \"media\":\"public/imgs/timeline/user-interface/palm.png\",\n                    \"credit\":\"credit: <a href='http://en.wikipedia.org/wiki/File:Palmpilot5000_eu.png'>Channel R</a> via Wikimedia Commons\",\n                    \"caption\":\"A Palm Pilot.\"\n                }\n            },\n            {\n                \"startDate\":\"2001,10,23\",\n                \"headline\":\"Continuous Scrolling\",\n                \"text\":\"The first iPod introduces the wheel as a user interface. It allowed users to continuously scroll through thousands of songs seemlessly. This interface helped Apple dominate the music player business and eventually the music content business through its iTunes ecosystem.\",\n                \"asset\":\n                {\n                    \"media\":\"http://upload.wikimedia.org/wikipedia/commons/3/35/Ipod_1G.png\",\n                    \"credit\":\"credit: By Rjcflyer@aol.com at en.wikipedia via Wikimedia Commons\",\n                    \"caption\":\"The Original iPod with click wheel user interface.\"\n                }\n            },\n            {\n                \"startDate\":\"2007\",\n                \"headline\":\"Multi Touch\",\n                \"text\":\"Steve Jobs unveils the iPhone and the multi touch interface.\",\n                \"asset\":\n                {\n                    \"media\":\"http://upload.wikimedia.org/wikipedia/commons/4/49/IPhone_at_Macworld_%28angled_view%29.jpg\",\n                    \"credit\":\"credit: By blakeburris, via <a href='http://commons.wikimedia.org/wiki/File:IPhone_at_Macworld_(angled_view).jpg'>Wikimedia Commons</a>\",\n                    \"caption\":\"\"\n                }\n            },\n            {\n                \"startDate\":\"2012\",\n                \"headline\":\"Speech Recognition\",\n                \"text\":\"<p>Speech recognition has been tested and improved upon for years in military cockpits in the U.S. France and U.K. In fact, Siri, the speech recognition engine used in the iPhone 4S was developed first by DARPA, the Defense Advanced Research Projects Agency.</p>\",\n                \"asset\":\n                {\n                    \"media\":\"public/imgs/timeline/user-interface/4s.jpg\",\n                    \"credit\":\"credit: Apple Inc.\",\n                    \"caption\":\"\"\n                }\n            }\n        ]\n    }\n}\n"

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var ChatNav = React.createClass({displayName: 'ChatNav',
	  render: function() {
	    return this.transferPropsTo(
	      React.DOM.ul({className: "sidebar-nav"},
	        this.props.children
	      )
	    );
	  }
	});

	var ChatItem = React.createClass({displayName: 'ChatItem',
	  mixins: [RoutingContextMixin],
	  render: function() {
	    var isOffline = true;
	    var status = 'border-darkgray';
	    if(this.props.idle) status = 'border-yellow';
	    if(this.props.busy) status = 'border-red';
	    if(this.props.online) status = 'border-green';
	    if(status !== 'border-darkgray') isOffline = false;
	    return this.transferPropsTo(
	      React.DOM.li({name: null, tabIndex: "-1"},
	        Link({href: '#', name: null, tabIndex: "-1"},
	          React.DOM.img({src: 'public/imgs/avatars/'+this.props.avatar+'.png', width: "30", height: "30", className: status, style: {borderWidth: 2, borderStyle: 'solid', borderRadius: 100, padding: 2, position: 'relative', top: -7, opacity: isOffline ? 0.4 : 1}}),
	          React.DOM.span({className: "name", style: {position: 'relative', top: -2, opacity: isOffline ? 0.4 : 1}}, this.props.name)
	        )
	      )
	    );
	  }
	});

	var Chat = React.createClass({displayName: 'Chat',
	  render: function() {
	    return (
	      React.DOM.div(null,
	        Grid(null,
	          Row(null,
	            Col({xs: 12},
	              React.DOM.div({className: "sidebar-header"}, "ONLINE (4)"),
	              React.DOM.div({className: "sidebar-nav-container"},
	                ChatNav({style: {marginBottom: 0}},
	                  ChatItem({name: "Jordyn Ouellet", avatar: "avatar5", online: true}),
	                  ChatItem({name: "Ava Parry", avatar: "avatar9", online: true}),
	                  ChatItem({name: "Angelina Mills", avatar: "avatar10", online: true}),
	                  ChatItem({name: "Crystal Ford", avatar: "avatar11", online: true})
	                )
	              ),
	              React.DOM.div({className: "sidebar-header"}, "IDLE (3)"),
	              React.DOM.div({className: "sidebar-nav-container"},
	                ChatNav({style: {marginBottom: 0}},
	                  ChatItem({name: "Toby King", avatar: "avatar7", idle: true}),
	                  ChatItem({name: "Ju Lan", avatar: "avatar13", idle: true}),
	                  ChatItem({name: "Lana Collin", avatar: "avatar14", idle: true})
	                )
	              ),
	              React.DOM.div({className: "sidebar-header"}, "BUSY (4)"),
	              React.DOM.div({className: "sidebar-nav-container"},
	                ChatNav({style: {marginBottom: 0}},
	                  ChatItem({name: "Alexandra Mordin", avatar: "avatar20", busy: true}),
	                  ChatItem({name: "Jonas Schäfer", avatar: "avatar17", busy: true}),
	                  ChatItem({name: "Ricardo Ibarra", avatar: "avatar15", busy: true}),
	                  ChatItem({name: "The Unknown", avatar: "avatar16", busy: true})
	                )
	              ),
	              React.DOM.div({className: "sidebar-header"}, "OFFLINE (3)"),
	              React.DOM.div({className: "sidebar-nav-container"},
	                ChatNav({style: {marginBottom: 0}},
	                  ChatItem({name: "Evan Poulain", avatar: "avatar19"}),
	                  ChatItem({name: "Canan Erdem", avatar: "avatar18"}),
	                  ChatItem({name: "Antelope Inc.", avatar: "avatar8"})
	                ),
	                React.DOM.br(null)
	              )
	            )
	          )
	        )
	      )
	    );
	  }
	});

	module.exports = Chat;


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @providesModule ReactStyleRules
	 */

	'use strict'

	/**
	 * @type {RegExp}
	 */
	var CLASSNAME_SELECTOR_PATTERN = /(\.)([a-zA-Z_\-][a-zA-Z_\-\d]*)/ig;

	/**
	 * @type {RegExp}
	 */
	var HYPHENATE_PATTERN = /([a-z])([A-Z])/g;

	/**
	 * @type {number}
	 */
	var _namespaceID = 0;

	/**
	 * @param {object} rulesMap
	 * @constructor
	 */
	function ReactStyleRules(rulesMap) {
	  var namespace = '';
	  var i = 0;
	  var rules = [];
	  var replacer = namespaceReplacer.bind(null, this, namespace);
	  for (var selectors in rulesMap) {
	    var ruleText = namespacify(selectors, replacer) + '{';
	    var declarations = rulesMap[selectors];
	    for (var property in declarations) {
	      var value = declarations[property];
	      ruleText += hyphenate(property) + ':' + value + ';';
	    }
	    ruleText += '}';
	    rules[i] = ruleText.replace("\\", '');
	    i++;
	  }

	  this._rules = rules;
	  this._namespace = namespace;
	  this.length = rules.length;
	}

	/**
	 * @return {string}
	 */
	ReactStyleRules.prototype.toString = function() {
	  return this._rules.join('\n');
	};

	/**
	 * @param {string} str
	 * @param {string} newSubStr
	 * @return {string}
	 */
	function namespacify(str, newSubStr) {
	  return str.replace(CLASSNAME_SELECTOR_PATTERN, newSubStr);
	}

	/**
	 * @param {object} classNameMap
	 * @param {string} namespace
	 * @param {string} m1
	 * @param {string} m2
	 * @param {string} className
	 * @return {string}
	 */
	function namespaceReplacer(classNameMap, namespace, m1, m2, className) {
	  var newClassName = namespace + className;
	  classNameMap[className] = newClassName;
	  return '.\\' + newClassName;
	}

	/**
	 * @param {string} str
	 * @return {string}
	 */
	function hyphenate(str) {
	  return str.replace(HYPHENATE_PATTERN, '$1-$2').toLowerCase();
	}

	module.exports = ReactStyleRules;


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @providesModule ReactStyleRulesManager
	 * @jsx React.DOM
	 */

	'use strict'

	var ReactStyleRules = __webpack_require__(71);

	/**
	 * @param {number} maxRulesLengthPerStyle
	 * @param {number} maxComponentsLength
	 * @constructor
	 */
	function ReactStyleRulesManager(maxRulesLengthPerStyle, maxComponentsLength) {
	  /**
	   * @type {array<ReactStyleRules>}
	   */
	  this._styleRulesList = [];

	  /**
	   * @type {number}
	   */
	  this._maxRulesLengthPerStyle = maxRulesLengthPerStyle;

	  /**
	   * @type {number}
	   */
	  this._maxComponentsLength = maxComponentsLength;
	}

	/**
	 * @param {ReactStyleRules} styleRules
	 * @return {boolean}
	 */
	ReactStyleRulesManager.prototype.addRules = function(styleRules) {
	  if (!styleRules || styleRules.constructor !== ReactStyleRules) {
	    throw new Error('Invalid rules');
	  }
	  var styleRulesList = this._styleRulesList;
	  for (var i = 0, j = styleRulesList.lenth; i < j; i++) {
	    var anotherReactStyleRules = styleRulesList[i];
	    if (anotherReactStyleRules === styleRules) {
	      return false;
	    }
	  }
	  styleRulesList.push(styleRules);
	  return true;
	};


	/**
	 * @return {array<object>}
	 */
	ReactStyleRulesManager.prototype.renderToComponents = function() {
	  var styleRulesList = this._styleRulesList;
	  var components = [];
	  var cssText = '';
	  var rulesCount = 0;
	  var index = 0;
	  var maxRulesLengthPerStyle = this._maxRulesLengthPerStyle;
	  var maxComponentsLength = this._maxComponentsLength;

	  for (var i = 0, j = styleRulesList.length; i < j; i++) {
	    var styleRules = styleRulesList[i];
	    var newRulesCount = rulesCount + styleRules.length;
	    if (newRulesCount > maxRulesLengthPerStyle) {
	      if (cssText) {
	        components.push(
	          React.DOM.style({
	            key: 's' + (index++),
	            dangerouslySetInnerHTML: {__html: cssText}}
	          )
	        );
	        cssText = '';
	        rulesCount = 0;
	      }
	    } else {
	      rulesCount = newRulesCount;
	      cssText += styleRules.toString();
	    }
	  }

	  if (cssText) {
	    components.push(
	      React.DOM.style({
	        key: 's' + (index++),
	        dangerouslySetInnerHTML: {__html: cssText}}
	      )
	    );
	    cssText = null;
	  }

	  if (components.lenth > maxComponentsLength) {
	    throw new Error('Too many styles');
	  }

	  return components;
	}

	module.exports = ReactStyleRulesManager;



/***/ }
/******/ ])
})();