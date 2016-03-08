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
	l20n.initializeLocales('docs', {
	  'locales': ['en-US'],
	  'default': 'en-US'
	}, 'public');

	/* Initializing touch events */
	React.initializeTouchEvents(true);

	/* APP PAGES */
	var homepage = __webpack_require__(1);

	/* DOCUMENTATION PAGES */
	var css = __webpack_require__(2);
	var components = __webpack_require__(3);
	var installation = __webpack_require__(4);
	var gulpfilebasics = __webpack_require__(5);
	var gulpfilesass = __webpack_require__(6);
	var gulpfilejsx = __webpack_require__(7);
	var gulpfilewebfont = __webpack_require__(8);
	var gulpfilescaffolding = __webpack_require__(9);
	var gulpfileexternalplugins = __webpack_require__(10);
	var reactdoc = __webpack_require__(11);
	var rubixdoc = __webpack_require__(12);
	var rubixsassdoc = __webpack_require__(13);
	var bootstrapgrid = __webpack_require__(15);
	var typography = __webpack_require__(16);
	var code = __webpack_require__(17);
	var tables = __webpack_require__(18);
	var forms = __webpack_require__(19);
	var inputsdocs = __webpack_require__(20);
	var textareadocs = __webpack_require__(21);
	var checkradio = __webpack_require__(22);
	var selectdocs = __webpack_require__(23);
	var buttondocs = __webpack_require__(24);
	var dropdowndocs = __webpack_require__(25);
	var buttongroupdocs = __webpack_require__(26);
	var inputgroupdocs = __webpack_require__(27);
	var navdocs = __webpack_require__(28);
	var navbardocs = __webpack_require__(29);
	var breadcrumbdocs = __webpack_require__(30);
	var paginationdocs = __webpack_require__(31);
	var labelsbadgesdocs = __webpack_require__(32);
	var jumbodocs = __webpack_require__(33);
	var alertdocs = __webpack_require__(34);
	var progressdocs = __webpack_require__(35);
	var mediadocs = __webpack_require__(36);
	var listgroupdocs = __webpack_require__(37);
	var l20ndocs = __webpack_require__(14);

	/* ROUTES */
	var routes = (
	  Routes(null, 
	    Route({name: "root", path: "/", view: homepage}), 

	    Route({name: "docs", path: "docs"}, 
	      Route({name: "installation", path: "installation", view: installation}), 
	      Route({name: "css", path: "css", view: css}), 
	      Route({name: "components", path: "components", view: components}), 

	      Route({name: "gulpfile", path: "gulpfile"}, 
	        Route({name: "basics", path: "basics", view: gulpfilebasics}), 
	        Route({name: "sass", path: "sass", view: gulpfilesass}), 
	        Route({name: "jsx", path: "jsx", view: gulpfilejsx}), 
	        Route({name: "webfonts", path: "webfonts", view: gulpfilewebfont}), 
	        Route({name: "scaffolding", path: "scaffolding", view: gulpfilescaffolding}), 
	        Route({name: "externalplugins", path: "externalplugins", view: gulpfileexternalplugins})
	      ), 

	      Route({name: "rubix", path: "rubix"}, 
	        Route({name: "react", path: "react", view: reactdoc}), 
	        Route({name: "rubix-jsx", path: "rubix-jsx", view: rubixdoc}), 
	        Route({name: "rubix-sass", path: "rubix-sass", view: rubixsassdoc})
	      ), 

	      Route({name: "bootstrap", path: "bootstrap"}, 
	        Route({name: "grid", path: "grid", view: bootstrapgrid}), 
	        Route({name: "typography", path: "typography", view: typography}), 
	        Route({name: "code", path: "code", view: code}), 
	        Route({name: "tables", path: "tables", view: tables}), 
	        Route({name: "forms", path: "forms", view: forms}), 

	        Route({name: "form_controls", path: "form_controls"}, 
	          Route({name: "inputs", path: "inputs", view: inputsdocs}), 
	          Route({name: "textarea", path: "textarea", view: textareadocs}), 
	          Route({name: "checkradio", path: "checkradio", view: checkradio}), 
	          Route({name: "select", path: "select", view: selectdocs}), 
	          Route({name: "buttons", path: "buttons", view: buttondocs})
	        ), 

	        Route({name: "components", path: "components"}, 
	          Route({name: "dropdowns", path: "dropdowns", view: dropdowndocs}), 
	          Route({name: "button_groups", path: "button_groups", view: buttongroupdocs}), 
	          Route({name: "input_groups", path: "input_groups", view: inputgroupdocs}), 
	          Route({name: "navs", path: "navs", view: navdocs}), 
	          Route({name: "navbar", path: "navbar", view: navbardocs}), 
	          Route({name: "breadcrumbs", path: "breadcrumbs", view: breadcrumbdocs}), 
	          Route({name: "pagination", path: "pagination", view: paginationdocs}), 
	          Route({name: "labels_and_badges", path: "labels_and_badges", view: labelsbadgesdocs}), 
	          Route({name: "jumbotron", path: "jumbotron", view: jumbodocs}), 
	          Route({name: "alerts", path: "alerts", view: alertdocs}), 
	          Route({name: "progress-bars", path: "progress-bars", view: progressdocs}), 
	          Route({name: "media", path: "media", view: mediadocs}), 
	          Route({name: "list-group", path: "list-group", view: listgroupdocs})
	        )
	      ), 

	      Route({name: "l20n", path: "l20n", view: l20ndocs})
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

	var Header = __webpack_require__(39);
	var Sidebar = __webpack_require__(40);
	var Footer = __webpack_require__(41);

	var Body = React.createClass({displayName: 'Body',
	  mixins: [RoutingContextMixin],
	  componentDidMount: function() {
	    this.getRouting().navigate('/docs/installation');
	  },
	  render: function() {
	    return (
	      Container({id: "body"}, 
	        this.props.children
	      )
	    );
	  }
	});

	var Page = React.createClass({displayName: 'Page',
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = React.addons.classSet({
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

	module.exports = Page;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	'use strict';

	var Navigation = __webpack_require__(42);

	var CSS = React.createClass({displayName: 'CSS',
	  mixins: [RoutingContextMixin, React.addons.LinkedStateMixin],
	  handleSubmit: function() {
	    alert('submitting!');
	  },
	  render: function() {
	    return (
	      Container({id: "body"}, 
	        Navigation({activeLink: "CSS"}), 
	        Grid(null, 
	          Row(null, 
	            Col({sm: 6, md: 6, lg: 6, xsOnlyGutterBottom: true, smCollapseRight: true}, 
	              React.DOM.div({style: {padding: 25, background: '#EAEDF1'}}, "Col(lg:6)")
	            ), 
	            Col({sm: 6, md: 6, lg: 6}, 
	              React.DOM.div({style: {padding: 25, background: '#EAEDF1'}}, "Col(lg:6)")
	            )
	          )
	        ), 
	        Grid({gutterTop: true}, 
	          Row(null, 
	            Col({sm: 4, md: 4, lg: 4, xsOnlyGutterBottom: true, smCollapseRight: true}, 
	              React.DOM.div({style: {padding: 25, background: '#EAEDF1'}}, "Col(lg:4)")
	            ), 
	            Col({sm: 4, md: 4, lg: 4, xsOnlyGutterBottom: true, smCollapseRight: true}, 
	              React.DOM.div({style: {padding: 25, background: '#EAEDF1'}}, "Col(lg:4)")
	            ), 
	            Col({sm: 4, md: 4, lg: 4}, 
	              React.DOM.div({style: {padding: 25, background: '#EAEDF1'}}, "Col(lg:4)")
	            )
	          )
	        ), 
	        Grid({gutterTop: true}, 
	          Row(null, 
	            Col({sm: 3, md: 3, lg: 3, xsOnlyGutterBottom: true, smCollapseRight: true}, 
	              React.DOM.div({style: {padding: 25, background: '#EAEDF1'}}, "Col(lg:3)")
	            ), 
	            Col({sm: 3, md: 3, lg: 3, xsOnlyGutterBottom: true, smCollapseRight: true}, 
	              React.DOM.div({style: {padding: 25, background: '#EAEDF1'}}, "Col(lg:3)")
	            ), 
	            Col({sm: 6, md: 6, lg: 6}, 
	              React.DOM.div({style: {padding: 25, background: '#EAEDF1'}}, "Col(lg:6)")
	            )
	          )
	        ), 
	        Grid({gutterTop: true, gutterBottom: true}, 
	          Row(null, 
	            Col({md: 2, lg: 2, xsOnlyGutterBottom: true, smOnlyGutterBottom: true, mdCollapseRight: true}, 
	              React.DOM.div({style: {padding: 25, background: '#EAEDF1'}}, "Col(lg:2)")
	            ), 
	            Col({md: 4, lg: 4, xsOnlyGutterBottom: true, smOnlyGutterBottom: true, mdCollapseRight: true}, 
	              React.DOM.div({style: {padding: 25, background: '#EAEDF1'}}, "Col(lg:4)")
	            ), 
	            Col({md: 6, lg: 6}, 
	              React.DOM.div({style: {padding: 25, background: '#EAEDF1'}}, "Col(lg:6)")
	            )
	          )
	        ), 
	        Grid({gutterTop: true, gutterBottom: true}, 
	          Row(null, 
	            Col({xs: 6, sm: 3, xsCollapseRight: true, xsOnlyGutterBottom: true}, 
	              React.DOM.div({style: {padding: 25, background: '#EAEDF1'}}, 
	                ".col-xs-6 .col-sm-3" + ' ' +
	                "Resize your viewport or check it out on your phone for an example."
	              )
	            ), 
	            Col({xs: 6, sm: 3, smCollapseRight: true}, 
	              React.DOM.div({style: {padding: 25, background: '#EAEDF1'}}, 
	                ".col-xs-6 .col-sm-3"
	              )
	            ), 
	            Col({clearfix: true, visible: "xs-block, sm-block", hidden: "md-block"}), 
	            Col({xs: 6, sm: 3, xsCollapseRight: true}, 
	              React.DOM.div({style: {padding: 25, background: '#EAEDF1'}}, 
	                ".col-xs-6 .col-sm-3"
	              )
	            ), 
	            Col({xs: 6, sm: 3}, 
	              React.DOM.div({style: {padding: 25, background: '#EAEDF1'}}, 
	                ".col-xs-6 .col-sm-3"
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid({gutterTop: true, gutterBottom: true}, 
	          Row(null, 
	            Col({md: 9, mdPush: 3, smOnlyGutterBottom: true, xsOnlyGutterBottom: true}, 
	              React.DOM.div({style: {padding: 25, background: '#EAEDF1'}}, 
	                ".col-md-9 .col-md-push-3"
	              )
	            ), 
	            Col({md: 3, mdPull: 9, mdCollapseRight: true}, 
	              React.DOM.div({style: {padding: 25, background: '#EAEDF1'}}, 
	                ".col-md-3 .col-md-pull-9"
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid({gutterTop: true, gutterBottom: true}, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.p(null, 
	                "Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula." + ' ' +

	                "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla." + ' ' +

	                "Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit."
	              ), 
	              Lead(null, "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus."), 
	              React.DOM.div(null, React.DOM.strong(null, "The above texts show examples of ", React.DOM.em(null, "body copy"), " and ", React.DOM.em(null, "lead body copy")))
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid({gutterTop: true, gutterBottom: true}, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.div(null, 
	                "You can use the mark tag to ", React.DOM.mark(null, "highlight"), " text."
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid({gutterTop: true, gutterBottom: true}, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.div(null, 
	                React.DOM.del(null, "This line of text is meant to be treated as deleted text.")
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid({gutterTop: true, gutterBottom: true}, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.div(null, 
	                React.DOM.s(null, "This line of text is meant to be treated as no longer accurate.")
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid({gutterTop: true, gutterBottom: true}, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.div(null, 
	                React.DOM.ins(null, "This line of text is meant to be treated as an addition to the document.")
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid({gutterTop: true, gutterBottom: true}, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.div(null, 
	                React.DOM.u(null, "This line of text will render as underlined")
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid({gutterTop: true, gutterBottom: true}, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.div(null, 
	                React.DOM.small(null, "This line of text is meant to be treated as fine print.")
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid({gutterTop: true, gutterBottom: true}, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.div(null, 
	                React.DOM.strong(null, "rendered as bold text")
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid({gutterTop: true, gutterBottom: true}, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.div(null, 
	                React.DOM.em(null, "rendered as italicized text")
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid({gutterTop: true, gutterBottom: true}, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.p({className: "text-left"}, "Left aligned text."), 
	              React.DOM.p({className: "text-center"}, "Center aligned text."), 
	              React.DOM.p({className: "text-right"}, "Right aligned text."), 
	              React.DOM.p({className: "text-justify"}, "Justified text."), 
	              React.DOM.p({className: "text-nowrap"}, "No wrap text.")
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid({gutterTop: true, gutterBottom: true}, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.p({className: "text-lowercase"}, "Lowercased text."), 
	              React.DOM.p({className: "text-uppercase"}, "Uppercased text."), 
	              React.DOM.p({className: "text-capitalize"}, "Capitalized text.")
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid({gutterTop: true, gutterBottom: true}, 
	          Row(null, 
	            Col({xs: 12}, 
	              "An abbreviation of the word attribute is ", React.DOM.abbr({title: "attribute"}, "attr"), "."
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid({gutterTop: true, gutterBottom: true}, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.abbr({title: "HyperText Markup Language", className: "initialism"}, "HTML"), " is the best thing since sliced bread."
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid({gutterTop: true, gutterBottom: true}, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.address(null, 
	                React.DOM.strong(null, "Twitter, Inc."), React.DOM.br(null), 
	                "795 Folsom Ave, Suite 600", React.DOM.br(null), 
	                "San Francisco, CA 94107", React.DOM.br(null), 
	                React.DOM.abbr({title: "Phone"}, "P:"), " (123) 456-7890"
	              ), 

	              React.DOM.address(null, 
	                React.DOM.strong(null, "Full Name"), React.DOM.br(null), 
	                React.DOM.a({href: "mailto:#"}, "first.last@example.com")
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid({gutterTop: true, gutterBottom: true}, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.blockquote(null, 
	                React.DOM.p(null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.")
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid({gutterTop: true, gutterBottom: true}, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.blockquote(null, 
	                React.DOM.p(null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."), 
	                React.DOM.footer(null, "Someone famous in ", React.DOM.cite({title: "Source Title"}, "Source Title"))
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid({gutterTop: true, gutterBottom: true}, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.blockquote({className: "blockquote-reverse"}, 
	                React.DOM.p(null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.")
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid({gutterTop: true, gutterBottom: true}, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.ul(null, 
	                React.DOM.li(null, "Lorem ipsum dolor sit amet"), 
	                React.DOM.li(null, "Consectetur adipiscing elit"), 
	                React.DOM.li(null, "Integer molestie lorem at massa"), 
	                React.DOM.li(null, "Facilisis in pretium nisl aliquet"), 
	                React.DOM.li(null, "Nulla volutpat aliquam velit", 
	                  React.DOM.ul(null, 
	                    React.DOM.li(null, "Phasellus iaculis neque"), 
	                    React.DOM.li(null, "Purus sodales ultricies"), 
	                    React.DOM.li(null, "Vestibulum laoreet porttitor sem"), 
	                    React.DOM.li(null, "Ac tristique libero volutpat at")
	                  )
	                ), 
	                React.DOM.li(null, "Faucibus porta lacus fringilla vel"), 
	                React.DOM.li(null, "Aenean sit amet erat nunc"), 
	                React.DOM.li(null, "Eget porttitor lorem")
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid({gutterTop: true, gutterBottom: true}, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.ol(null, 
	                React.DOM.li(null, "Lorem ipsum dolor sit amet"), 
	                React.DOM.li(null, "Consectetur adipiscing elit"), 
	                React.DOM.li(null, "Integer molestie lorem at massa"), 
	                React.DOM.li(null, "Facilisis in pretium nisl aliquet"), 
	                React.DOM.li(null, "Nulla volutpat aliquam velit"), 
	                React.DOM.li(null, "Faucibus porta lacus fringilla vel"), 
	                React.DOM.li(null, "Aenean sit amet erat nunc"), 
	                React.DOM.li(null, "Eget porttitor lorem")
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid({gutterTop: true, gutterBottom: true}, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.ul({className: "list-unstyled"}, 
	                React.DOM.li(null, "Lorem ipsum dolor sit amet"), 
	                React.DOM.li(null, "Consectetur adipiscing elit"), 
	                React.DOM.li(null, "Integer molestie lorem at massa"), 
	                React.DOM.li(null, "Facilisis in pretium nisl aliquet"), 
	                React.DOM.li(null, "Nulla volutpat aliquam velit", 
	                  React.DOM.ul(null, 
	                    React.DOM.li(null, "Phasellus iaculis neque"), 
	                    React.DOM.li(null, "Purus sodales ultricies"), 
	                    React.DOM.li(null, "Vestibulum laoreet porttitor sem"), 
	                    React.DOM.li(null, "Ac tristique libero volutpat at")
	                  )
	                ), 
	                React.DOM.li(null, "Faucibus porta lacus fringilla vel"), 
	                React.DOM.li(null, "Aenean sit amet erat nunc"), 
	                React.DOM.li(null, "Eget porttitor lorem")
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid({gutterTop: true, gutterBottom: true}, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.ul({className: "list-inline"}, 
	                React.DOM.li(null, "Lorem ipsum"), 
	                React.DOM.li(null, "Phasellus iaculis"), 
	                React.DOM.li(null, "Nulla volutpat")
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid({gutterTop: true, gutterBottom: true}, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.dl(null, 
	                React.DOM.dt(null, "Description lists"), 
	                React.DOM.dd(null, "A description list is perfect for defining terms."), 
	                React.DOM.dt(null, "Euismod"), 
	                React.DOM.dd(null, "Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit."), 
	                React.DOM.dd(null, "Donec id elit non mi porta gravida at eget metus."), 
	                React.DOM.dt(null, "Malesuada porta"), 
	                React.DOM.dd(null, "Etiam porta sem malesuada magna mollis euismod.")
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid({gutterTop: true, gutterBottom: true}, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.dl({className: "dl-horizontal"}, 
	                React.DOM.dt(null, "Description lists"), 
	                React.DOM.dd(null, "A description list is perfect for defining terms."), 
	                React.DOM.dt(null, "Euismod"), 
	                React.DOM.dd(null, "Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit."), 
	                React.DOM.dd(null, "Donec id elit non mi porta gravida at eget metus."), 
	                React.DOM.dt(null, "Malesuada porta"), 
	                React.DOM.dd(null, "Etiam porta sem malesuada magna mollis euismod."), 
	                React.DOM.dt(null, "Felis euismod semper eget lacinia"), 
	                React.DOM.dd(null, "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.")
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid({gutterTop: true, gutterBottom: true}, 
	          Row(null, 
	            Col({xs: 12}, 
	              "For example, ", React.DOM.code(null, "<section>"), " should be wrapped as inline."
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid({gutterTop: true, gutterBottom: true}, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.div(null, 
	                "To switch directories, type ", React.DOM.kbd(null, "cd"), " followed by the name of the directory.", React.DOM.br(null), "To edit settings, press ", React.DOM.kbd(null, React.DOM.kbd(null, "ctrl"), " + ", React.DOM.kbd(null, ","))
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid({gutterTop: true, gutterBottom: true}, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.pre(null, "<p>Sample text here...</p>")
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid({gutterTop: true, gutterBottom: true}, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.var(null, "y"), " = ", React.DOM.var(null, "m"), React.DOM.var(null, "x"), " + ", React.DOM.var(null, "b")
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid({gutterTop: true, gutterBottom: true}, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.samp(null, "This text is meant to be treated as sample output from a computer program.")
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid({gutterTop: true, gutterBottom: true}, 
	          Row(null, 
	            Col({xs: 12}, 
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
	        ), 
	        React.DOM.hr(null), 
	        Grid({gutterTop: true, gutterBottom: true}, 
	          Row(null, 
	            Col({xs: 12}, 
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
	        ), 
	        React.DOM.hr(null), 
	        Grid({gutterTop: true, gutterBottom: true}, 
	          Row(null, 
	            Col({xs: 12}, 
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
	        ), 
	        React.DOM.hr(null), 
	        Grid({gutterTop: true, gutterBottom: true}, 
	          Row(null, 
	            Col({xs: 12}, 
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
	        ), 
	        React.DOM.hr(null), 
	        Grid({gutterTop: true, gutterBottom: true}, 
	          Row(null, 
	            Col({xs: 12}, 
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
	        ), 
	        React.DOM.hr(null), 
	        Grid({gutterTop: true, gutterBottom: true}, 
	          Row(null, 
	            Col({xs: 12}, 
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
	        ), 
	        React.DOM.hr(null), 
	        Grid({gutterTop: true, gutterBottom: true}, 
	          Row(null, 
	            Col({xs: 12}, 
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
	        ), 
	        React.DOM.hr(null), 
	        Grid({gutterBottom: true}, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.h3(null, "Basic form"), 
	              Form(null, 
	                FormGroup(null, 
	                  Label({htmlFor: "exampleInputEmail1"}, "Email address"), 
	                  Input({type: "email", id: "exampleInputEmail1", placeholder: "Enter email"})
	                ), 
	                FormGroup(null, 
	                  Label({htmlFor: "exampleInputPassword1"}, "Password"), 
	                  Input({type: "password", id: "exampleInputPassword1", placeholder: "Password"})
	                ), 
	                FormGroup(null, 
	                  Label({htmlFor: "exampleInputFile"}, "File input"), 
	                  Input({type: "file", id: "exampleInputFile"}), 
	                  HelpBlock(null, "Example block-level help text here.")
	                ), 
	                Checkbox({browser: true}, "Check me out"), 
	                Button({type: "submit"}, "Submit")
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid({gutterBottom: true}, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.h3(null, "Inline form"), 
	              Form({inline: true, onSubmit: this.handleSubmit}, 
	                FormGroup(null, 
	                  Label({className: "sr-only", htmlFor: "exampleInputEmail2"}, 
	                    "Email address"
	                  ), 
	                  Input({type: "email", id: "exampleInputEmail2", placeholder: "Enter email"})
	                ), 
	                FormGroup(null, 
	                  InputGroup(null, 
	                    InputGroupAddon(null, "@"), 
	                    Input({type: "email", placeholder: "Enter email"})
	                  )
	                ), 
	                FormGroup(null, 
	                  Label({className: "sr-only", htmlFor: "exampleInputPassword2"}, 
	                    "Password"
	                  ), 
	                  Input({type: "password", id: "exampleInputPassword2", placeholder: "Password"})
	                ), 
	                Checkbox({browser: true}, "Remember me"), 
	                Button({type: "submit"}, "Sign in")
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid({gutterBottom: true}, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.h3(null, "Horizontal form"), 
	              Form({horizontal: true}, 
	                FormGroup(null, 
	                  Label({htmlFor: "inputEmail3", sm: 2, control: true}, "Email"), 
	                  Col({sm: 10}, 
	                    Input({type: "email", id: "inputEmail3", placeholder: "Email"})
	                  )
	                ), 
	                FormGroup(null, 
	                  Label({htmlFor: "inputPassword3", sm: 2, control: true}, "Password"), 
	                  Col({sm: 10}, 
	                    Input({type: "password", id: "inputPassword3", placeholder: "Password"})
	                  )
	                ), 
	                FormGroup(null, 
	                  Label({htmlFor: "inputWeek3", sm: 2, control: true}, "Week"), 
	                  Col({sm: 10}, 
	                    Input({type: "week", id: "inputWeek3"})
	                  )
	                ), 
	                FormGroup(null, 
	                  Col({sm: 10, smOffset: 2}, 
	                    Checkbox({browser: true}, "Remember me")
	                  )
	                ), 
	                FormGroup(null, 
	                  Col({sm: 10, smOffset: 2}, 
	                    Button({type: "submit"}, "Sign in")
	                  )
	                )
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid({gutterTop: true, gutterBottom: true}, 
	          Row(null, 
	            Col({xs: 12}, 
	              Textarea({rows: "3", placeholder: "Hello, World"})
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid({gutterTop: true, gutterBottom: true}, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.h3(null, "Checkboxes and radios"), 
	              Checkbox({browser: true, value: "option1"}, 
	                "Option one is this and that—be sure to include why its great"
	              ), 
	              Checkbox({browser: true, value: "option2", defaultChecked: true}, 
	                "Option two is checked"
	              ), 
	              Checkbox({browser: true, value: "option3", disabled: true}, 
	                "Option three is disabled"
	              ), 
	              React.DOM.hr(null), 
	              Radio({browser: true, value: "option1", name: "inlineoptions", defaultChecked: true}, 
	                "Option one is this and that—be sure to include why its great"
	              ), 
	              Radio({browser: true, value: "option2", name: "inlineoptions"}, 
	                "Option two can be something else and selecting it will deselect option one"
	              ), 
	              Radio({browser: true, value: "option3", name: "inlineoptions", disabled: true}, 
	                "Option three is disabled"
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid({gutterTop: true, gutterBottom: true}, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.h3(null, "Inline checkboxes and radios"), 
	              Checkbox({browser: true, inline: true, value: "option1"}, 
	                "1"
	              ), 
	              Checkbox({browser: true, inline: true, value: "option2", defaultChecked: true}, 
	                "2"
	              ), 
	              Checkbox({browser: true, inline: true, value: "option3", disabled: true}, 
	                "3"
	              ), 
	              React.DOM.hr(null), 
	              Radio({browser: true, inline: true, value: "option1", name: "options", defaultChecked: true}, 
	                "1"
	              ), 
	              Radio({browser: true, inline: true, value: "option2", name: "options"}, 
	                "2"
	              ), 
	              Radio({browser: true, inline: true, value: "option3", name: "options", disabled: true}, 
	                "3"
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid({gutterTop: true, gutterBottom: true}, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.h3(null, "Selects"), 
	              Select({defaultValue: "3"}, 
	                React.DOM.option({ref: "option1", value: "1"}, "1"), 
	                React.DOM.option({value: "2"}, "2"), 
	                React.DOM.option({value: "3"}, "3"), 
	                React.DOM.option({value: "4"}, "4"), 
	                React.DOM.option({value: "5"}, "5")
	              ), 
	              React.DOM.hr(null), 
	              Select({defaultValue: [1,3,5], multiple: true}, 
	                React.DOM.option({value: "1"}, "1"), 
	                React.DOM.option({value: "2"}, "2"), 
	                React.DOM.option({value: "3"}, "3"), 
	                React.DOM.option({value: "4"}, "4"), 
	                React.DOM.option({value: "5"}, "5")
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid({gutterTop: true, gutterBottom: true}, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.h3(null, "Static control"), 
	              Form({horizontal: true}, 
	                FormGroup(null, 
	                  Label({control: true, sm: 2}, "Email"), 
	                  Col({sm: 10}, 
	                    Static(null, "email@example.com")
	                  )
	                ), 
	                FormGroup(null, 
	                  Label({htmlFor: "inputPassword", sm: 2, control: true}, 
	                    "Password"
	                  ), 
	                  Col({sm: 10}, 
	                    Input({type: "password", id: "inputPassword", placeholder: "Password"})
	                  )
	                )
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid({gutterTop: true, gutterBottom: true}, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.h3(null, "Disabled inputs"), 
	              Form(null, 
	                FormGroup(null, 
	                  Input({type: "text", id: "disabledInput", placeholder: "Disabled input here...", disabled: true})
	                )
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid({gutterTop: true, gutterBottom: true}, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.h3(null, "Disabled fieldsets"), 
	              Form(null, 
	                React.DOM.fieldset({disabled: true}, 
	                  FormGroup(null, 
	                    Label({htmlFor: "disabledTextInput"}, "Disabled input"), 
	                    Input({type: "text", id: "disabledTextInput", placeholder: "Disabled input"})
	                  ), 
	                  FormGroup(null, 
	                    Label({htmlFor: "disabledSelect"}, "Disabled select menu"), 
	                    Select({id: "disabledSelect"}, 
	                      React.DOM.option(null, "Disabled select")
	                    ), 
	                    Checkbox({browser: true}, "Cant check this"), 
	                    Button({type: "submit", bsStyle: "primary"}, "Submit")
	                  )
	                )
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid({gutterTop: true, gutterBottom: true}, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.h3(null, "Readonly inputs"), 
	              Form(null, 
	                FormGroup(null, 
	                  Input({type: "text", id: "readonlyInput", placeholder: "Readonly input here...", readOnly: true})
	                )
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid({gutterTop: true, gutterBottom: true}, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.h3(null, "Validation states"), 
	              Form(null, 
	                FormGroup({success: true}, 
	                  Label({htmlFor: "inputSuccess1", control: true}, "Input with success"), 
	                  Input({type: "text", id: "inputSuccess1"})
	                ), 
	                FormGroup({warning: true}, 
	                  Label({htmlFor: "inputWarning1", control: true}, "Input with warning"), 
	                  Input({type: "text", id: "inputWarning1"})
	                ), 
	                FormGroup({error: true}, 
	                  Label({htmlFor: "inputError1", control: true}, "Input with error"), 
	                  Input({type: "text", id: "inputError1"})
	                )
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid({gutterTop: true, gutterBottom: true}, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.h3(null, "With optional icons"), 
	              Form(null, 
	                FormGroup({success: true, feedback: true}, 
	                  Label({htmlFor: "inputSuccess2", control: true}, "Input with success"), 
	                  Input({type: "text", id: "inputSuccess2"}), 
	                  Icon({bundle: "fontello", glyph: "ok", feedback: true})
	                ), 
	                FormGroup({warning: true, feedback: true}, 
	                  Label({htmlFor: "inputWarning2", control: true}, "Input with warning"), 
	                  Input({type: "text", id: "inputWarning2"}), 
	                  Icon({bundle: "fontello", glyph: "warning", feedback: true})
	                ), 
	                FormGroup({error: true, feedback: true}, 
	                  Label({htmlFor: "inputError2", control: true}, "Input with error"), 
	                  Input({type: "text", id: "inputError2"}), 
	                  Icon({bundle: "fontello", glyph: "alert", feedback: true})
	                )
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid({gutterTop: true, gutterBottom: true}, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.h3(null, "Optional icons in horizontal and inline forms"), 
	              Form({horizontal: true}, 
	                FormGroup({success: true, feedback: true}, 
	                  Label({htmlFor: "inputSuccess3", control: true, sm: 3}, "Input with success"), 
	                  Col({sm: 9}, 
	                    Input({type: "text", id: "inputSuccess3"}), 
	                    Icon({bundle: "fontello", glyph: "ok", feedback: true})
	                  )
	                )
	              ), 
	              Form({inline: true}, 
	                FormGroup({success: true, feedback: true}, 
	                  Label({htmlFor: "inputSuccess4", control: true}, "Input with success"), ' ', 
	                  Input({type: "text", id: "inputSuccess4"}), 
	                  Icon({bundle: "fontello", glyph: "ok", feedback: true})
	                )
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid({gutterTop: true, gutterBottom: true}, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.h3(null, "Optional icons with hidden ", React.DOM.code(null, ".sr-only"), " labels"), 
	              Form(null, 
	                FormGroup({success: true, feedback: true}, 
	                  Label({htmlFor: "inputSuccess5", className: "sr-only", control: true}, "Input with success"), ' ', 
	                  Input({type: "text", id: "inputSuccess5"}), 
	                  Icon({bundle: "fontello", glyph: "ok", feedback: true})
	                )
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid({gutterTop: true, gutterBottom: true}, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.h3(null, "Control sizing: height sizing"), 
	              Form(null, 
	                FormGroup(null, 
	                  Input({lg: true, type: "text", placeholder: ".input-lg"})
	                ), 
	                FormGroup(null, 
	                  Input({type: "text", placeholder: "Default input"})
	                ), 
	                FormGroup(null, 
	                  Input({sm: true, type: "text", placeholder: ".input-sm"})
	                ), 
	                FormGroup(null, 
	                  Select({lg: true}, 
	                    React.DOM.option(null, ".input-lg")
	                  )
	                ), 
	                FormGroup(null, 
	                  Select(null, 
	                    React.DOM.option(null, "Default select")
	                  )
	                ), 
	                FormGroup(null, 
	                  Select({sm: true}, 
	                    React.DOM.option(null, ".input-sm")
	                  )
	                )
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.h3(null, "Horizontal form group sizes"), 
	              Form({horizontal: true}, 
	                FormGroup({lg: true}, 
	                  Label({sm: 2, htmlFor: "formGroupInputLarge", control: true}, "Large label"), 
	                  Col({sm: 10}, 
	                    Input({type: "text", id: "formGroupInputLarge", placeholder: "Large input"})
	                  )
	                ), 
	                FormGroup({sm: true}, 
	                  Label({sm: 2, htmlFor: "formGroupInputSmall", control: true}, "Small label"), 
	                  Col({sm: 10}, 
	                    Input({type: "text", id: "formGroupInputSmall", placeholder: "Small input"})
	                  )
	                )
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.h3(null, "Column sizing")
	            )
	          ), 
	          Row(null, 
	            Col({xs: 2}, 
	              Input({type: "text", placeholder: ".col-xs-2"})
	            ), 
	            Col({xs: 3}, 
	              Input({type: "text", placeholder: ".col-xs-3"})
	            ), 
	            Col({xs: 4}, 
	              Input({type: "text", placeholder: ".col-xs-4"})
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.h3(null, "Help text"), 
	              Form(null, 
	                FormGroup(null, 
	                  Input({type: "text"}), 
	                  HelpBlock(null, "A block of help text that breaks onto a new line and may extend beyond one line.")
	                )
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.h3(null, "Buttons: Options"), 
	              React.DOM.div(null, 
	                Button({bsStyle: "default"}, "Default"), ' ', 
	                Button({bsStyle: "primary"}, "Primary"), ' ', 
	                Button({bsStyle: "success"}, "Success"), ' ', 
	                Button({bsStyle: "info"}, "Info"), ' ', 
	                Button({bsStyle: "warning"}, "Warning"), ' ', 
	                Button({bsStyle: "danger"}, "Danger"), ' ', 
	                Button({bsStyle: "link"}, "Link")
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.h3(null, "Buttons: Sizes"), 
	              React.DOM.p(null, 
	                Button({lg: true, bsStyle: "primary"}, "Large button"), ' ', 
	                Button({lg: true, bsStyle: "default"}, "Large button")
	              ), 
	              React.DOM.p(null, 
	                Button({bsStyle: "primary"}, "Default button"), ' ', 
	                Button({bsStyle: "default"}, "Default button")
	              ), 
	              React.DOM.p(null, 
	                Button({sm: true, bsStyle: "primary"}, "Small button"), ' ', 
	                Button({sm: true, bsStyle: "default"}, "Small button")
	              ), 
	              React.DOM.p(null, 
	                Button({xs: true, bsStyle: "primary"}, "Extra small button"), ' ', 
	                Button({xs: true, bsStyle: "default"}, "Extra small button")
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.h3(null, "Buttons: Block level"), 
	              React.DOM.div({className: "well"}, 
	                Button({lg: true, block: true, bsStyle: "primary"}, "Block level button"), 
	                Button({lg: true, block: true, bsStyle: "default"}, "Block level button")
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.h3(null, "Buttons: Active state"), 
	              React.DOM.div({className: "well"}, 
	                Button({lg: true, active: true, bsStyle: "primary"}, "Primary button"), ' ', 
	                Button({lg: true, active: true, bsStyle: "default"}, "Button")
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.h3(null, "Buttons: Disabled state"), 
	              React.DOM.div({className: "well"}, 
	                Button({lg: true, disabled: true, bsStyle: "primary"}, "Primary button"), ' ', 
	                Button({lg: true, disabled: true, bsStyle: "default"}, "Button")
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.h3({id: "content"}, "Image shapes"), 
	              React.DOM.div(null, 
	                Img({src: "", alt: "", rounded: true, width: "140", height: "140"}), ' ', 
	                Img({src: "", alt: "", circle: true, width: "140", height: "140"}), " ", ' ', 
	                Img({src: "", alt: "", thumbnail: true, width: "140", height: "140"})
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.h3(null, "Close icon"), 
	              React.DOM.p(null, Button({close: true, className: "pull-left"}))
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.h3(null, "Caret"), 
	              React.DOM.p(null, Caret(null))
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.h3(null, "Quick floats"), 
	              React.DOM.p(null, React.DOM.div({className: "pull-left"}, "Pull left")), 
	              React.DOM.p(null, React.DOM.div({className: "pull-right"}, "Pull right"))
	            )
	          )
	        ), 
	        React.DOM.hr(null)
	      )
	    );
	  }
	});

	module.exports = CSS;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	'use strict';

	var Navigation = __webpack_require__(42);

	var Components = React.createClass({displayName: 'Components',
	  mixins: [RoutingContextMixin],
	  handleSelection: function() {
	    alert('handleSelection called!');
	  },
	  closeDemoModal1: function(e) {
	    e.preventDefault();
	    e.stopPropagation();

	    this.refs.modal1.close();
	  },
	  launchDemoModal1: function(e) {
	    e.preventDefault();
	    e.stopPropagation();

	    this.refs.modal1.open();
	  },
	  componentDidMount: function() {
	    $('[data-toggle=tooltip]').tooltip({
	      container: 'body'
	    });
	  },
	  render: function() {
	    return (
	      Container({id: "body"}, 
	        Navigation({activeLink: "Components"}), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.h3(null, "Dropdowns: Basic"), 
	              Dropdown(null, 
	                DropdownButton({container: this, menu: "menu1"}, 
	                  React.DOM.span(null, "Dropdown "), Caret(null)
	                ), 
	                Menu({ref: "menu1", onItemSelect: this.handleSelection}, 
	                  MenuItem({active: true, href: "#"}, "Action"), 
	                  MenuItem({href: "#"}, "Another action"), 
	                  MenuItem({href: "#"}, "Something else here"), 
	                  MenuItem({divider: true}), 
	                  MenuItem({href: "#"}, "Separated link"), 
	                  MenuItem({divider: true}), 
	                  MenuItem({noHover: true, style: {width: 350}}, 
	                    Grid(null, 
	                      Row(null, 
	                        Col({xs: 6}, 
	                          "Not registered?"
	                        ), 
	                        Col({xs: 6, className: "text-right"}, 
	                          Button({bsStyle: "success"}, "Sign Up")
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12, className: "text-right"}, 
	              React.DOM.h3(null, "Dropdowns: Alignment"), 
	              Dropdown(null, 
	                DropdownButton({container: this, menu: "menu2"}, 
	                  React.DOM.span(null, "Dropdown "), Caret(null)
	                ), 
	                Menu({ref: "menu2", alignRight: true}, 
	                  MenuItem({href: "#"}, "Action"), 
	                  MenuItem({href: "#"}, "Another action"), 
	                  MenuItem({href: "#"}, "Something else here"), 
	                  MenuItem({divider: true}), 
	                  MenuItem({href: "#"}, "Separated link")
	                )
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.h3(null, "Dropdowns: Headers"), 
	              Dropdown(null, 
	                DropdownButton({container: this, menu: "menu3"}, 
	                  React.DOM.span(null, "Dropdown "), Caret(null)
	                ), 
	                Menu({ref: "menu3"}, 
	                  MenuItem({header: true}, "Dropdown header"), 
	                  MenuItem({href: "#"}, "Action"), 
	                  MenuItem({href: "#"}, "Another action"), 
	                  MenuItem({href: "#"}, "Something else here"), 
	                  MenuItem({divider: true}), 
	                  MenuItem({header: true}, "Dropdown header"), 
	                  MenuItem({href: "#"}, "Separated link")
	                )
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.h3(null, "Dropdowns: Disabled menu items"), 
	              Dropdown(null, 
	                DropdownButton({container: this, menu: "menu4"}, 
	                  React.DOM.span(null, "Dropdown "), Caret(null)
	                ), 
	                Menu({ref: "menu4"}, 
	                  MenuItem({href: "#"}, "Regular link"), 
	                  MenuItem({href: "#", disabled: true}, "Disabled link"), 
	                  MenuItem({href: "#"}, "Another link")
	                )
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.h3(null, "Button groups: Basic example"), 
	              ButtonGroup(null, 
	                Button(null, "Left"), 
	                Button(null, "Middle"), 
	                Button(null, "Right")
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.h3(null, "Button groups: Button toolbar"), 
	              ButtonToolbar(null, 
	                ButtonGroup(null, 
	                  Button(null, "1"), 
	                  Button(null, "2"), 
	                  Button(null, "3"), 
	                  Button(null, "4")
	                ), 
	                ButtonGroup(null, 
	                  Button(null, "5"), 
	                  Button(null, "6"), 
	                  Button(null, "7")
	                ), 
	                ButtonGroup(null, 
	                  Button(null, "8")
	                )
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.h3(null, "Button groups: Sizing"), 
	              ButtonToolbar({style: {marginBottom: 10}}, 
	                ButtonGroup({lg: true}, 
	                  Button(null, "Left"), 
	                  Button(null, "Middle"), 
	                  Button(null, "Right")
	                )
	              ), 
	              ButtonToolbar({style: {marginBottom: 10}}, 
	                ButtonGroup(null, 
	                  Button(null, "Left"), 
	                  Button(null, "Middle"), 
	                  Button(null, "Right")
	                )
	              ), 
	              ButtonToolbar({style: {marginBottom: 10}}, 
	                ButtonGroup({sm: true}, 
	                  Button(null, "Left"), 
	                  Button(null, "Middle"), 
	                  Button(null, "Right")
	                )
	              ), 
	              ButtonToolbar({style: {marginBottom: 10}}, 
	                ButtonGroup({xs: true}, 
	                  Button(null, "Left"), 
	                  Button(null, "Middle"), 
	                  Button(null, "Right")
	                )
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.h3(null, "Button groups: Nesting"), 
	              ButtonGroup(null, 
	                Button(null, "1"), 
	                Button(null, "2"), 
	                ButtonGroup(null, 
	                  DropdownButton({container: this, menu: "menu5"}, 
	                    React.DOM.span(null, "Dropdown "), Caret(null)
	                  ), 
	                  Menu({ref: "menu5"}, 
	                    MenuItem({href: "#"}, "Regular link"), 
	                    MenuItem({href: "#", disabled: true}, "Disabled link"), 
	                    MenuItem({href: "#"}, "Another link")
	                  )
	                )
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.h3(null, "Button groups: Vertical variation"), 
	              ButtonGroup({vertical: true}, 
	                Button(null, "Button"), 
	                Button(null, "Button"), 
	                ButtonGroup(null, 
	                  DropdownButton({container: this, menu: "menu6"}, 
	                    React.DOM.span(null, "Dropdown "), Caret(null)
	                  ), 
	                  Menu({ref: "menu6"}, 
	                    MenuItem({href: "#"}, "Regular link"), 
	                    MenuItem({href: "#", disabled: true}, "Disabled link"), 
	                    MenuItem({href: "#"}, "Another link")
	                  )
	                ), 
	                Button(null, "Button"), 
	                Button(null, "Button"), 
	                ButtonGroup(null, 
	                  DropdownButton({container: this, menu: "menu7"}, 
	                    React.DOM.span(null, "Dropdown "), Caret(null)
	                  ), 
	                  Menu({ref: "menu7"}, 
	                    MenuItem({href: "#"}, "Regular link"), 
	                    MenuItem({href: "#", disabled: true}, "Disabled link"), 
	                    MenuItem({href: "#"}, "Another link")
	                  )
	                ), 
	                ButtonGroup(null, 
	                  DropdownButton({container: this, menu: "menu8"}, 
	                    React.DOM.span(null, "Dropdown "), Caret(null)
	                  ), 
	                  Menu({ref: "menu8"}, 
	                    MenuItem({href: "#"}, "Regular link"), 
	                    MenuItem({href: "#", disabled: true}, "Disabled link"), 
	                    MenuItem({href: "#"}, "Another link")
	                  )
	                ), 
	                ButtonGroup(null, 
	                  DropdownButton({container: this, menu: "menu9"}, 
	                    React.DOM.span(null, "Dropdown "), Caret(null)
	                  ), 
	                  Menu({ref: "menu9"}, 
	                    MenuItem({href: "#"}, "Regular link"), 
	                    MenuItem({href: "#", disabled: true}, "Disabled link"), 
	                    MenuItem({href: "#"}, "Another link")
	                  )
	                )
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.h3(null, "Button groups: Justified button groups"), 
	              ButtonGroup({justified: true, style: {marginBottom: 20}}, 
	                Button({componentClass: React.DOM.a}, "Left"), 
	                Button({componentClass: React.DOM.a}, "Middle"), 
	                Button({componentClass: React.DOM.a}, "Right")
	              ), 
	              ButtonGroup({justified: true}, 
	                Button({componentClass: React.DOM.a}, "Left"), 
	                Button({componentClass: React.DOM.a}, "Middle"), 
	                ButtonGroup(null, 
	                  DropdownButton({container: this, menu: "menu10"}, 
	                    React.DOM.span(null, "Dropdown "), Caret(null)
	                  ), 
	                  Menu({ref: "menu10", alignRight: true}, 
	                    MenuItem({href: "#"}, "Regular link"), 
	                    MenuItem({href: "#", disabled: true}, "Disabled link"), 
	                    MenuItem({href: "#"}, "Another link")
	                  )
	                )
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.h3(null, "Button groups: Justified button groups ", React.DOM.h4(null, "[With ", React.DOM.code(null, "<button>"), " elements]")), 
	              ButtonGroup({justified: true, style: {marginBottom: 20}}, 
	                ButtonGroup(null, Button(null, "Left")), 
	                ButtonGroup(null, Button(null, "Middle")), 
	                ButtonGroup(null, Button(null, "Right"))
	              ), 
	              ButtonGroup({justified: true}, 
	                ButtonGroup(null, Button(null, "Left")), 
	                ButtonGroup(null, Button(null, "Middle")), 
	                ButtonGroup(null, 
	                  DropdownButton({container: this, menu: "menu11"}, 
	                    React.DOM.span(null, "Dropdown "), Caret(null)
	                  ), 
	                  Menu({ref: "menu11", alignRight: true}, 
	                    MenuItem({href: "#"}, "Regular link"), 
	                    MenuItem({href: "#", disabled: true}, "Disabled link"), 
	                    MenuItem({href: "#"}, "Another link")
	                  )
	                )
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.h3(null, "Button dropdowns: Single button dropdowns"), 
	              ButtonGroup(null, 
	                DropdownButton({container: this, menu: "menu12"}, 
	                  React.DOM.span(null, "Default "), Caret(null)
	                ), 
	                Menu({ref: "menu12"}, 
	                  MenuItem({href: "#"}, "Action"), 
	                  MenuItem({href: "#"}, "Another Action"), 
	                  MenuItem({href: "#"}, "Something else here"), 
	                  MenuItem({divider: true}), 
	                  MenuItem({href: "#"}, "Separated link")
	                )
	              ), ' ', 
	              ButtonGroup(null, 
	                DropdownButton({container: this, menu: "menu13", bsStyle: "primary"}, 
	                  React.DOM.span(null, "Primary "), Caret(null)
	                ), 
	                Menu({ref: "menu13"}, 
	                  MenuItem({href: "#"}, "Action"), 
	                  MenuItem({href: "#"}, "Another Action"), 
	                  MenuItem({href: "#"}, "Something else here"), 
	                  MenuItem({divider: true}), 
	                  MenuItem({href: "#"}, "Separated link")
	                )
	              ), ' ', 
	              ButtonGroup(null, 
	                DropdownButton({container: this, menu: "menu14", bsStyle: "success"}, 
	                  React.DOM.span(null, "Success "), Caret(null)
	                ), 
	                Menu({ref: "menu14"}, 
	                  MenuItem({href: "#"}, "Action"), 
	                  MenuItem({href: "#"}, "Another Action"), 
	                  MenuItem({href: "#"}, "Something else here"), 
	                  MenuItem({divider: true}), 
	                  MenuItem({href: "#"}, "Separated link")
	                )
	              ), ' ', 
	              ButtonGroup(null, 
	                DropdownButton({container: this, menu: "menu15", bsStyle: "info"}, 
	                  React.DOM.span(null, "Info "), Caret(null)
	                ), 
	                Menu({ref: "menu15"}, 
	                  MenuItem({href: "#"}, "Action"), 
	                  MenuItem({href: "#"}, "Another Action"), 
	                  MenuItem({href: "#"}, "Something else here"), 
	                  MenuItem({divider: true}), 
	                  MenuItem({href: "#"}, "Separated link")
	                )
	              ), ' ', 
	              ButtonGroup(null, 
	                DropdownButton({container: this, menu: "menu16", bsStyle: "warning"}, 
	                  React.DOM.span(null, "Warning "), Caret(null)
	                ), 
	                Menu({ref: "menu16"}, 
	                  MenuItem({href: "#"}, "Action"), 
	                  MenuItem({href: "#"}, "Another Action"), 
	                  MenuItem({href: "#"}, "Something else here"), 
	                  MenuItem({divider: true}), 
	                  MenuItem({href: "#"}, "Separated link")
	                )
	              ), ' ', 
	              ButtonGroup(null, 
	                DropdownButton({container: this, menu: "menu17", bsStyle: "danger"}, 
	                  React.DOM.span(null, "Danger "), Caret(null)
	                ), 
	                Menu({ref: "menu17"}, 
	                  MenuItem({href: "#"}, "Action"), 
	                  MenuItem({href: "#"}, "Another Action"), 
	                  MenuItem({href: "#"}, "Something else here"), 
	                  MenuItem({divider: true}), 
	                  MenuItem({href: "#"}, "Separated link")
	                )
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.h3(null, "Button dropdowns: Split button dropdowns"), 
	              ButtonGroup(null, 
	                Button(null, "Default"), 
	                DropdownButton({container: this, menu: "menu18"}, 
	                  Caret(null)
	                ), 
	                Menu({ref: "menu18"}, 
	                  MenuItem({href: "#"}, "Action"), 
	                  MenuItem({href: "#"}, "Another Action"), 
	                  MenuItem({href: "#"}, "Something else here"), 
	                  MenuItem({divider: true}), 
	                  MenuItem({href: "#"}, "Separated link")
	                )
	              ), ' ', 
	              ButtonGroup(null, 
	                Button({bsStyle: "primary"}, "Primary"), 
	                DropdownButton({container: this, menu: "menu19", bsStyle: "primary"}, 
	                  Caret(null)
	                ), 
	                Menu({ref: "menu19"}, 
	                  MenuItem({href: "#"}, "Action"), 
	                  MenuItem({href: "#"}, "Another Action"), 
	                  MenuItem({href: "#"}, "Something else here"), 
	                  MenuItem({divider: true}), 
	                  MenuItem({href: "#"}, "Separated link")
	                )
	              ), ' ', 
	              ButtonGroup(null, 
	                Button({bsStyle: "success"}, "Success"), 
	                DropdownButton({container: this, menu: "menu20", bsStyle: "success"}, 
	                  Caret(null)
	                ), 
	                Menu({ref: "menu20"}, 
	                  MenuItem({href: "#"}, "Action"), 
	                  MenuItem({href: "#"}, "Another Action"), 
	                  MenuItem({href: "#"}, "Something else here"), 
	                  MenuItem({divider: true}), 
	                  MenuItem({href: "#"}, "Separated link")
	                )
	              ), ' ', 
	              ButtonGroup(null, 
	                Button({bsStyle: "info"}, "Info"), 
	                DropdownButton({container: this, menu: "menu21", bsStyle: "info"}, 
	                  Caret(null)
	                ), 
	                Menu({ref: "menu21"}, 
	                  MenuItem({href: "#"}, "Action"), 
	                  MenuItem({href: "#"}, "Another Action"), 
	                  MenuItem({href: "#"}, "Something else here"), 
	                  MenuItem({divider: true}), 
	                  MenuItem({href: "#"}, "Separated link")
	                )
	              ), ' ', 
	              ButtonGroup(null, 
	                Button({bsStyle: "warning"}, "Warning"), 
	                DropdownButton({container: this, menu: "menu22", bsStyle: "warning"}, 
	                  Caret(null)
	                ), 
	                Menu({ref: "menu22"}, 
	                  MenuItem({href: "#"}, "Action"), 
	                  MenuItem({href: "#"}, "Another Action"), 
	                  MenuItem({href: "#"}, "Something else here"), 
	                  MenuItem({divider: true}), 
	                  MenuItem({href: "#"}, "Separated link")
	                )
	              ), ' ', 
	              ButtonGroup(null, 
	                Button({bsStyle: "danger"}, "Danger"), 
	                DropdownButton({container: this, menu: "menu23", bsStyle: "danger"}, 
	                  Caret(null)
	                ), 
	                Menu({ref: "menu23"}, 
	                  MenuItem({href: "#"}, "Action"), 
	                  MenuItem({href: "#"}, "Another Action"), 
	                  MenuItem({href: "#"}, "Something else here"), 
	                  MenuItem({divider: true}), 
	                  MenuItem({href: "#"}, "Separated link")
	                )
	              ), ' '
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.h3(null, "Button dropdowns: Sizing"), 
	              ButtonGroup(null, 
	                DropdownButton({container: this, menu: "menu24", lg: true}, 
	                  React.DOM.span(null, "Large button "), Caret(null)
	                ), 
	                Menu({ref: "menu24"}, 
	                  MenuItem({href: "#"}, "Action"), 
	                  MenuItem({href: "#"}, "Another Action"), 
	                  MenuItem({href: "#"}, "Something else here"), 
	                  MenuItem({divider: true}), 
	                  MenuItem({href: "#"}, "Separated link")
	                )
	              ), ' ', 
	              ButtonGroup(null, 
	                DropdownButton({container: this, menu: "menu25", sm: true}, 
	                  React.DOM.span(null, "Small button "), Caret(null)
	                ), 
	                Menu({ref: "menu25"}, 
	                  MenuItem({href: "#"}, "Action"), 
	                  MenuItem({href: "#"}, "Another Action"), 
	                  MenuItem({href: "#"}, "Something else here"), 
	                  MenuItem({divider: true}), 
	                  MenuItem({href: "#"}, "Separated link")
	                )
	              ), ' ', 
	              ButtonGroup(null, 
	                DropdownButton({container: this, menu: "menu26", xs: true}, 
	                  React.DOM.span(null, "Extra small button "), Caret(null)
	                ), 
	                Menu({ref: "menu26"}, 
	                  MenuItem({href: "#"}, "Action"), 
	                  MenuItem({href: "#"}, "Another Action"), 
	                  MenuItem({href: "#"}, "Something else here"), 
	                  MenuItem({divider: true}), 
	                  MenuItem({href: "#"}, "Separated link")
	                )
	              ), ' '
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.h3(null, "Button dropdowns: Dropup variation"), 
	              ButtonGroup({dropup: true}, 
	                Button(null, "Dropup "), 
	                DropdownButton({container: this, menu: "menu27"}, 
	                  Caret(null)
	                ), 
	                Menu({ref: "menu27"}, 
	                  MenuItem({href: "#"}, "Action"), 
	                  MenuItem({href: "#"}, "Another Action"), 
	                  MenuItem({href: "#"}, "Something else here"), 
	                  MenuItem({divider: true}), 
	                  MenuItem({href: "#"}, "Separated link")
	                )
	              ), ' ', 
	              ButtonGroup({dropup: true}, 
	                Button({bsStyle: "primary"}, "Dropup "), 
	                DropdownButton({container: this, menu: "menu28", bsStyle: "primary"}, 
	                  Caret(null)
	                ), 
	                Menu({ref: "menu28"}, 
	                  MenuItem({href: "#"}, "Action"), 
	                  MenuItem({href: "#"}, "Another Action"), 
	                  MenuItem({href: "#"}, "Something else here"), 
	                  MenuItem({divider: true}), 
	                  MenuItem({href: "#"}, "Separated link")
	                )
	              ), ' '
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.h3(null, "Input groups: Basic example"), 
	              InputGroup({style: {marginBottom: 25}}, 
	                InputGroupAddon(null, "@"), 
	                Input({type: "text", placeholder: "Username"})
	              ), 
	              InputGroup({style: {marginBottom: 25}}, 
	                Input({type: "text"}), 
	                InputGroupAddon(null, ".00")
	              ), 
	              InputGroup(null, 
	                InputGroupAddon(null, "$"), 
	                Input({type: "text"}), 
	                InputGroupAddon(null, ".00")
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.h3(null, "Input groups: Sizing"), 
	              InputGroup({style: {marginBottom: 25}, lg: true}, 
	                InputGroupAddon(null, "@"), 
	                Input({type: "text", placeholder: "Username"})
	              ), 
	              InputGroup({style: {marginBottom: 25}}, 
	                InputGroupAddon(null, "@"), 
	                Input({type: "text", placeholder: "Username"})
	              ), 
	              InputGroup({sm: true}, 
	                InputGroupAddon(null, "@"), 
	                Input({type: "text", placeholder: "Username"})
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.h3(null, "Input groups: Checkboxes and radio addons")
	            )
	          ), 
	          Row(null, 
	            Col({xs: 6}, 
	              InputGroup(null, 
	                InputGroupAddon(null, Checkbox({browser: true, native: true})), 
	                Input({type: "text", placeholder: "Username"})
	              )
	            ), 
	            Col({xs: 6}, 
	              InputGroup(null, 
	                InputGroupAddon(null, Radio({browser: true, native: true})), 
	                Input({type: "text", placeholder: "Username"})
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.h3(null, "Input groups: Button addons")
	            )
	          ), 
	          Row(null, 
	            Col({xs: 6}, 
	              InputGroup(null, 
	                InputGroupButton(null, Button(null, "Go!")), 
	                Input({type: "text", placeholder: "Username"})
	              )
	            ), 
	            Col({xs: 6}, 
	              InputGroup(null, 
	                Input({type: "text", placeholder: "Username"}), 
	                InputGroupButton(null, Button(null, "Go!"))
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.h3(null, "Input groups: Button with dropdowns")
	            )
	          ), 
	          Row(null, 
	            Col({xs: 6}, 
	              InputGroup(null, 
	                InputGroupButton(null, 
	                  DropdownButton({container: this, menu: "menu29"}, 
	                    React.DOM.span(null, "Action "), Caret(null)
	                  ), 
	                  Menu({ref: "menu29"}, 
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
	            Col({xs: 6}, 
	              InputGroup(null, 
	                Input({type: "text", placeholder: "Username"}), 
	                InputGroupButton(null, 
	                  DropdownButton({container: this, menu: "menu30"}, 
	                    React.DOM.span(null, "Action "), Caret(null)
	                  ), 
	                  Menu({ref: "menu30", alignRight: true}, 
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
	        ), 
	        React.DOM.hr(null), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.h3(null, "Input groups: Segmented button dropdowns")
	            )
	          ), 
	          Row(null, 
	            Col({xs: 6}, 
	              InputGroup(null, 
	                InputGroupButton(null, 
	                  Button(null, "Action "), 
	                  DropdownButton({container: this, menu: "menu31"}, 
	                    Caret(null)
	                  ), 
	                  Menu({ref: "menu31"}, 
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
	            Col({xs: 6}, 
	              InputGroup(null, 
	                Input({type: "text", placeholder: "Username"}), 
	                InputGroupButton(null, 
	                  Button(null, "Action "), 
	                  DropdownButton({container: this, menu: "menu32"}, 
	                    Caret(null)
	                  ), 
	                  Menu({ref: "menu32", alignRight: true}, 
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
	        ), 
	        React.DOM.hr(null), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.h3(null, "Tabs"), 
	              TabList(null, 
	                Tab({pane: "tab1:home", active: true}, "Home"), 
	                Tab({pane: "tab1:profile"}, "Profile"), 
	                Tab(null, 
	                  DropdownButton({tab: true, container: this, menu: "menu33"}, 
	                    React.DOM.span(null, "Dropdown "), Caret(null)
	                  ), 
	                  Menu({autoHide: true, ref: "menu33"}, 
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
	              TabContent(null, 
	                TabPane({ref: "tab1:home", active: true}, 
	                  "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui."
	                ), 
	                TabPane({ref: "tab1:profile"}, 
	                  "Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park."
	                ), 
	                TabPane({ref: "tab1:fat"}, 
	                  "Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr."
	                ), 
	                TabPane({ref: "tab1:mdo"}, 
	                  "Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral, mustache readymade thundercats keffiyeh craft beer marfa ethical. Wolf salvia freegan, sartorial keffiyeh echo park vegan."
	                )
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.h3(null, "Pills"), 
	              TabList({pills: true}, 
	                Tab({pane: "pills1:home", active: true}, "Home"), 
	                Tab({pane: "pills1:profile"}, "Profile"), 
	                Tab(null, 
	                  DropdownButton({tab: true, container: this, menu: "menu34"}, 
	                    React.DOM.span(null, "Dropdown "), Caret(null)
	                  ), 
	                  Menu({autoHide: true, ref: "menu34"}, 
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
	              TabContent(null, 
	                TabPane({ref: "pills1:home", active: true}, 
	                  "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui."
	                ), 
	                TabPane({ref: "pills1:profile"}, 
	                  "Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park."
	                ), 
	                TabPane({ref: "pills1:fat"}, 
	                  "Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr."
	                ), 
	                TabPane({ref: "pills1:mdo"}, 
	                  "Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral, mustache readymade thundercats keffiyeh craft beer marfa ethical. Wolf salvia freegan, sartorial keffiyeh echo park vegan."
	                )
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.h3(null, "Pills: Stacked"), 
	              Table({style: {marginBottom: 0}}, 
	                React.DOM.tbody(null, 
	                  React.DOM.tr(null, 
	                    React.DOM.td({style: {width: 150}}, 
	                      TabList({pills: true, stacked: true}, 
	                        Tab({pane: "pills2:home", active: true}, "Home"), 
	                        Tab({pane: "pills2:profile"}, "Profile"), 
	                        Tab(null, 
	                          DropdownButton({tab: true, container: this, menu: "menu35"}, 
	                            React.DOM.span(null, "Dropdown "), Caret(null)
	                          ), 
	                          Menu({autoHide: true, ref: "menu35"}, 
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
	                    React.DOM.td(null, 
	                      TabContent(null, 
	                        TabPane({ref: "pills2:home", active: true}, 
	                          "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui."
	                        ), 
	                        TabPane({ref: "pills2:profile"}, 
	                          "Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park."
	                        ), 
	                        TabPane({ref: "pills2:fat"}, 
	                          "Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr."
	                        ), 
	                        TabPane({ref: "pills2:mdo"}, 
	                          "Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral, mustache readymade thundercats keffiyeh craft beer marfa ethical. Wolf salvia freegan, sartorial keffiyeh echo park vegan."
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.h3(null, "Tabs: Justified"), 
	              TabList({justified: true}, 
	                Tab({pane: "tab2:home", active: true}, "Home"), 
	                Tab({pane: "tab2:profile"}, "Profile"), 
	                Tab(null, 
	                  DropdownButton({tab: true, container: this, menu: "menu36"}, 
	                    React.DOM.span(null, "Dropdown "), Caret(null)
	                  ), 
	                  Menu({autoHide: true, ref: "menu36"}, 
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
	              ), 
	              TabContent(null, 
	                TabPane({ref: "tab2:home", active: true}, 
	                  "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui."
	                ), 
	                TabPane({ref: "tab2:profile"}, 
	                  "Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park."
	                ), 
	                TabPane({ref: "tab2:fat"}, 
	                  "Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr."
	                ), 
	                TabPane({ref: "tab2:mdo"}, 
	                  "Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral, mustache readymade thundercats keffiyeh craft beer marfa ethical. Wolf salvia freegan, sartorial keffiyeh echo park vegan."
	                )
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.h3(null, "Pills: Justified"), 
	              TabList({pills: true, justified: true}, 
	                Tab({pane: "pills3:home", active: true}, "Home"), 
	                Tab({pane: "pills3:profile", disabled: true}, "Profile"), 
	                Tab(null, 
	                  DropdownButton({tab: true, container: this, menu: "menu37"}, 
	                    React.DOM.span(null, "Dropdown "), Caret(null)
	                  ), 
	                  Menu({autoHide: true, ref: "menu37"}, 
	                    MenuItem({href: "#"}, 
	                      Tab({dropdown: true, pane: "pills3:fat"}, 
	                        "@fat"
	                      )
	                    ), 
	                    MenuItem({href: "#"}, 
	                      Tab({dropdown: true, pane: "pills3:mdo"}, 
	                        "@mdo"
	                      )
	                    )
	                  )
	                )
	              ), 
	              TabContent(null, 
	                TabPane({ref: "pills3:home", active: true}, 
	                  "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui."
	                ), 
	                TabPane({ref: "pills3:profile"}, 
	                  "Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park."
	                ), 
	                TabPane({ref: "pills3:fat"}, 
	                  "Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr."
	                ), 
	                TabPane({ref: "pills3:mdo"}, 
	                  "Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral, mustache readymade thundercats keffiyeh craft beer marfa ethical. Wolf salvia freegan, sartorial keffiyeh echo park vegan."
	                )
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              NavBar(null, 
	                Container({fluid: true}, 
	                  NavHeader(null, 
	                    NavToggle({container: this, nav: "navcontainer"}, "Toggle navigation"), 
	                    NavBrand(null, "Brand")
	                  ), 
	                  NavContent({ref: "navcontainer", collapse: true}, 
	                    Nav(null, 
	                      NavItem({active: true, href: "#"}, "Link 1"), 
	                      NavItem({link: "/docs/css"}, "CSS"), 
	                      NavItem({dropdown: true}, 
	                        DropdownButton({nav: true, container: this, menu: "menu38"}, 
	                          React.DOM.span(null, "Dropdown "), Caret(null)
	                        ), 
	                        Menu({ref: "menu38"}, 
	                          MenuItem({href: "#"}, "Action"), 
	                          MenuItem({href: "#"}, "Another Action"), 
	                          MenuItem({href: "#"}, "Something else here"), 
	                          MenuItem({divider: true}), 
	                          MenuItem({href: "#"}, "Separated link")
	                        )
	                      )
	                    ), 
	                    NavForm({left: true, role: "search"}, 
	                      FormGroup(null, 
	                        Input({placeholder: "Search"})
	                      ), ' ', 
	                      Button(null, "Submit")
	                    ), 
	                    Nav({right: true}, 
	                      NavItem({href: "#"}, "Link 3"), 
	                      NavItem({dropdown: true}, 
	                        DropdownButton({nav: true, container: this, menu: "menu39"}, 
	                          React.DOM.span(null, "Dropdown "), Caret(null)
	                        ), 
	                        Menu({ref: "menu39"}, 
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
	        React.DOM.hr(null), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              NavBar(null, 
	                Container({fluid: true}, 
	                  NavHeader(null, 
	                    NavBrand(null, "Brand")
	                  ), 
	                  NavContent({collapse: true}, 
	                    NavText(null, "Signed in as Mark Otto")
	                  )
	                )
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
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
	                        "Mark Otto"
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              NavBar({staticTop: true}, 
	                Container({fluid: true}, 
	                  NavHeader(null, 
	                    NavBrand(null, "Brand")
	                  ), 
	                  NavContent({collapse: true}, 
	                    Nav(null, 
	                      NavItem({href: "#", active: true}, "Home"), 
	                      NavItem({href: "#"}, "Link"), 
	                      NavItem({right: true, href: "#"}, "Link")
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              NavBar(null, 
	                Container({fluid: true}, 
	                  NavHeader(null, 
	                    NavBrand(null, "Brand")
	                  ), 
	                  NavContent({collapse: true}, 
	                    Nav(null, 
	                      NavItem({href: "#", active: true}, "Home"), 
	                      NavItem({href: "#"}, "Link"), 
	                      NavItem({right: true, href: "#"}, "Link")
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
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
	                      NavItem({href: "#"}, "Link"), 
	                      NavItem({right: true, href: "#"}, "Link")
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              Breadcrumb(null, 
	                BLink({href: "#"}, "Home "), 
	                BLink({href: "#"}, "Library "), 
	                BLink({href: "#", active: true}, "Data")
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              Pagination(null, 
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
	        React.DOM.hr(null), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
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
	          ), 
	          Row(null, 
	            Col({xs: 12}, 
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
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              Pager(null, 
	                Page({href: "#"}, "Previous"), ' ', 
	                Page({href: "#"}, "Next")
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              Pager(null, 
	                Page({previous: true, disabled: true, href: "#"}, "Previous"), ' ', 
	                Page({next: true, href: "#"}, "Next")
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.h1(null, "Example heading ", BLabel({bsStyle: "default"}, "New")), 
	              React.DOM.h2(null, "Example heading ", BLabel({bsStyle: "default"}, "New")), 
	              React.DOM.h3(null, "Example heading ", BLabel({bsStyle: "default"}, "New")), 
	              React.DOM.h4(null, "Example heading ", BLabel({bsStyle: "default"}, "New")), 
	              React.DOM.h5(null, "Example heading ", BLabel({bsStyle: "default"}, "New")), 
	              React.DOM.h6(null, "Example heading ", BLabel({bsStyle: "default"}, "New"))
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              BLabel({bsStyle: "default"}, "Default"), ' ', 
	              BLabel({bsStyle: "primary"}, "Primary"), ' ', 
	              BLabel({bsStyle: "success"}, "Success"), ' ', 
	              BLabel({bsStyle: "info"}, "Info"), ' ', 
	              BLabel({bsStyle: "warning"}, "Warning"), ' ', 
	              BLabel({bsStyle: "danger"}, "Danger")
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              Badge({bsStyle: "default"}, "Default"), ' ', 
	              Badge({bsStyle: "primary"}, "Primary"), ' ', 
	              Badge({bsStyle: "success"}, "Success"), ' ', 
	              Badge({bsStyle: "info"}, "Info"), ' ', 
	              Badge({bsStyle: "warning"}, "Warning"), ' ', 
	              Badge({bsStyle: "danger"}, "Danger")
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              Progress({value: 60, min: 0, max: 100}), 
	              Progress({withLabel: true, value: 60, min: 0, max: 100}), 
	              Progress({withLabel: true, value: 0, min: 0, max: 100}), 
	              Progress({withLabel: true, value: 2, min: 0, max: 100})
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              Progress({info: true, withLabel: true, value: 60, min: 0, max: 100}), 
	              Progress({danger: true, withLabel: true, value: 60, min: 0, max: 100}), 
	              Progress({success: true, withLabel: true, value: 60, min: 0, max: 100}), 
	              Progress({warning: true, withLabel: true, value: 60, min: 0, max: 100})
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              Progress({striped: true, info: true, withLabel: true, value: 60, min: 0, max: 100}), 
	              Progress({striped: true, danger: true, withLabel: true, value: 60, min: 0, max: 100}), 
	              Progress({striped: true, success: true, withLabel: true, value: 60, min: 0, max: 100}), 
	              Progress({striped: true, warning: true, withLabel: true, value: 60, min: 0, max: 100})
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              Progress({active: true, striped: true, info: true, withLabel: true, value: 60, min: 0, max: 100}), 
	              Progress({active: true, striped: true, danger: true, withLabel: true, value: 60, min: 0, max: 100}), 
	              Progress({active: true, striped: true, success: true, withLabel: true, value: 60, min: 0, max: 100}), 
	              Progress({active: true, striped: true, warning: true, withLabel: true, value: 60, min: 0, max: 100})
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              ProgressGroup(null, 
	                Progress({stack: true, active: true, striped: true, info: true, withLabel: true, value: 35, min: 0, max: 100}), 
	                Progress({stack: true, active: true, striped: true, danger: true, withLabel: true, value: 20, min: 0, max: 100}), 
	                Progress({stack: true, active: true, striped: true, warning: true, withLabel: true, value: 20, min: 0, max: 100}), 
	                Progress({stack: true, active: true, striped: true, success: true, withLabel: true, value: 10, min: 0, max: 100})
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              Modal({style: {position: 'relative', display: 'block'}}, 
	                ModalHeader(null, 
	                  Button({close: true}), 
	                  React.DOM.h4({className: "modal-title"}, "Modal title")
	                ), 
	                ModalBody(null, 
	                  React.DOM.p(null, "One fine body…")
	                ), 
	                ModalFooter(null, 
	                  Button(null, "Close"), 
	                  Button({bsStyle: "primary"}, "Save changes")
	                )
	              )
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              Modal({ref: "modal1"}, 
	                ModalHeader(null, 
	                  Button({onClick: this.closeDemoModal1, onTouchEnd: this.closeDemoModal1, close: true}), 
	                  React.DOM.h4({className: "modal-title"}, "Modal title")
	                ), 
	                ModalBody(null, 
	                  React.DOM.p(null, "One fine body…")
	                ), 
	                ModalFooter(null, 
	                  Button({onClick: this.closeDemoModal1, onTouchEnd: this.closeDemoModal1}, "Close"), 
	                  Button({bsStyle: "primary"}, "Save changes")
	                )
	              ), 
	              Button({lg: true, bsStyle: "primary", onClick: this.launchDemoModal1, onTouchEnd: this.launchDemoModal1}, "Launch demo modal")
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              Modal({ref: "modal2"}, 
	                ModalHeader(null, 
	                  Button({onClick: function(e) {
	                    e.preventDefault();
	                    e.stopPropagation();
	                    this.refs.modal2.close();
	                  }.bind(this), onTouchEnd: function(e) {
	                    e.preventDefault();
	                    e.stopPropagation();
	                    this.refs.modal2.close();
	                  }.bind(this), close: true}), 
	                  React.DOM.h4({className: "modal-title"}, "Modal title")
	                ), 
	                ModalBody(null, 
	                  React.DOM.p(null, 
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…" + ' ' +
	                    "Yeah whatever…"
	                  )
	                ), 
	                ModalFooter(null, 
	                  Button({onClick: function(e) {
	                    e.preventDefault();
	                    e.stopPropagation();
	                    this.refs.modal2.close();
	                  }.bind(this), onTouchEnd: function(e) {
	                    e.preventDefault();
	                    e.stopPropagation();
	                    this.refs.modal2.close();
	                  }.bind(this)}, "Close"), 
	                  Button({bsStyle: "primary"}, "Save changes")
	                )
	              ), 
	              Button({lg: true, bsStyle: "primary", onClick: function(e) {
	                    e.preventDefault();
	                    e.stopPropagation();
	                    this.refs.modal2.open();
	                  }.bind(this), onTouchEnd: function(e) {
	                    e.preventDefault();
	                    e.stopPropagation();
	                    this.refs.modal2.open();
	                  }.bind(this)}, "Launch demo modal")
	            )
	          )
	        ), 
	        React.DOM.hr(null), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              Button({title: "tooltip on top", 'data-toggle': "tooltip", 'data-placement': "top"}, "Tooltip on top")
	            )
	          )
	        ), 
	        React.DOM.hr(null)
	      )
	    );
	  }
	});

	module.exports = Components;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(39);
	var Sidebar = __webpack_require__(40);
	var Footer = __webpack_require__(41);

	var package_snippet = __webpack_require__(43);

	var Body = React.createClass({displayName: 'Body',
	  componentDidMount: function() {
	    Prism.highlightAll();
	  },
	  render: function() {
	    return (
	      Container({id: "body"}, 
	        Grid(null, 
	          Row(null, 
	            Col({sm: 12}, 
	              PanelContainer({controlStyles: "bg-green fg-white"}, 
	                Panel(null, 
	                  PanelHeader({className: "bg-green fg-white"}, 
	                    Grid(null, 
	                      Row(null, 
	                        Col({xs: 12}, 
	                          React.DOM.h3(null, "Introduction")
	                        )
	                      )
	                    )
	                  ), 
	                  PanelBody(null, 
	                    Grid(null, 
	                      Row(null, 
	                        Col({xs: 12}, 
	                          React.DOM.p(null, "Rubix only utilizes Node.JS for dependency resolution (CommonJS) and compiling/uglifying assets. You can always plug in any backend in the language of your choice (which includes PHP/ASP.NET etc)."), 
	                          React.DOM.p(null, "Remember that support is always available at : ", React.DOM.a({target: "_blank", href: "mailto:support@sketchpixy.com"}, "support@sketchpixy.com"))
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
	                          React.DOM.h3(null, "Pre-built Demo")
	                        )
	                      )
	                    )
	                  ), 
	                  PanelBody(null, 
	                    Grid(null, 
	                      Row(null, 
	                        Col({xs: 12}, 
	                          React.DOM.p(null, "We have included a pre-built demo which you can find in the ", React.DOM.strong(null, "rubix-static"), " directory. You can just drop this directory into a local server of your choice (like Apache/Nginx/Lighthttpd etc) and navigate around to see if the demo works as expected. Note that some features in X-Editable's AJAX demo does not work with this setup."), 
	                          React.DOM.p(null, 
	                            "This pre-built demo also includes documentation. Just navigate to ", React.DOM.strong(null, "rubix-static/documentation.html"), " to access the offline documentation."
	                          ), 
	                          React.DOM.p(null, 
	                            "However, if you want to develop/make changes to the demo project you'll need to install NodeJS. The instructions for doing so are provided in the next section."
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              ), 
	              PanelContainer({controlStyles: "bg-blue fg-white"}, 
	                Panel(null, 
	                  PanelHeader({className: "bg-blue fg-white"}, 
	                    Grid(null, 
	                      Row(null, 
	                        Col({xs: 12}, 
	                          React.DOM.h3(null, "Installation - Node.JS + NPM")
	                        )
	                      )
	                    )
	                  ), 
	                  PanelBody(null, 
	                    Grid(null, 
	                      Row(null, 
	                        Col({xs: 12}, 
	                          React.DOM.p(null, "To get started, head over to the Node.JS official website and download the installer for the platform of your choice: "), 
	                          React.DOM.h3({className: "text-center"}, 
	                            React.DOM.a({target: "_blank", href: "http://nodejs.org/download/"}, 
	                              Icon({glyph: "icon-dripicons-download"}), ' ', 
	                              React.DOM.span(null, "Download")
	                            )
	                          ), 
	                          React.DOM.p(null, 
	                            React.DOM.span(null, "NPM is needed for installing the dependencies defined in package.json (found in the root of Rubix folder). It should be bundled by default in the Node.JS installation for Windows (if you downloaded and installed the MSI) / MacOSX (if you downloaded and installed the PKG file) / if you built from source.")
	                          ), 
	                          React.DOM.p(null, 
	                            "If it isn't available in your environment for some reason you can try one of the fancy installs suggested in the NPM documentation located here: ", 
	                            React.DOM.a({target: "_blank", href: "https://github.com/npm/npm#fancy-install-unix"}, "https://github.com/npm/npm#fancy-install-unix")
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
	                          React.DOM.h3(null, "package.json")
	                        )
	                      )
	                    )
	                  ), 
	                  PanelBody(null, 
	                    Grid(null, 
	                      Row(null, 
	                        Col({xs: 12}, 
	                          React.DOM.p(null, 
	                            "Change directory to root of Rubix and run the following command (this launches the 'app' starter project) depending on your OS environment:"
	                          ), 
	                          React.DOM.p(null, 
	                            React.DOM.span(null, React.DOM.strong(null, "Windows:")), 
	                            React.DOM.pre(null, 
	                              React.DOM.code({className: "language-bash"}, 
	                                "> cd path\\to\\rubix\n> npm install .\n> npm install -g gulp\n> gulp"
	                              )
	                            )
	                          ), 
	                          React.DOM.p(null, 
	                            React.DOM.span(null, "To launch the ", React.DOM.strong(null, "demo"), " run this command instead:"), 
	                            React.DOM.pre(null, 
	                              React.DOM.code({className: "language-bash"}, 
	                                "> gulp --rtl --name demo"
	                              )
	                            )
	                          ), 
	                          React.DOM.p(null, 
	                            React.DOM.span(null, React.DOM.strong(null, "MacOSX/Linux:")), 
	                            React.DOM.pre(null, 
	                              React.DOM.code({className: "language-bash"}, 
	                                "$ cd path/to/rubix\n$ npm install .\n$ npm install -g gulp\n$ gulp"
	                              )
	                            )
	                          ), 
	                          React.DOM.p(null, 
	                            React.DOM.span(null, "To launch the ", React.DOM.strong(null, "demo"), " run this command instead:"), 
	                            React.DOM.pre(null, 
	                              React.DOM.code({className: "language-bash"}, 
	                                "$ gulp --rtl --name demo"
	                              )
	                            )
	                          ), 
	                          React.DOM.div({className: "text-center"}, 
	                            React.DOM.p(null, 
	                              Img({src: "public/imgs/shots/gulp-terminal.png", width: "100%", height: "100%"})
	                            ), 
	                            React.DOM.div(null, React.DOM.strong(null, "Screenshot of gulp output"))
	                          ), 
	                          React.DOM.hr(null), 
	                          React.DOM.p(null, 
	                            React.DOM.h4({className: "text-center"}, React.DOM.strong(null, "We are done!"), " Now open your favorite web browser and navigate to ", React.DOM.a({target: "_blank", href: "http://localhost:8080/ltr/#/"}, 'http://localhost:8080/ltr/#/'))
	                          ), 
	                          React.DOM.hr(null), 
	                          React.DOM.p(null, "Here is a list of all the modules that ship with Rubix (which you can inspect by looking at the package.json file):"), 
	                          React.DOM.pre(null, 
	                            React.DOM.code({className: "language-javascript"}, 
	                              package_snippet
	                            )
	                          ), 
	                          React.DOM.hr(null), 
	                          React.DOM.p(null, 
	                            React.DOM.span(null, "Here is a rundown of each module's functionality:")
	                          ), 
	                          React.DOM.div(null, 
	                            Table({striped: true, bordered: true, style: {tableLayout: 'fixed'}}, 
	                              React.DOM.thead(null, 
	                                React.DOM.tr(null, 
	                                  React.DOM.th({className: "text-center"}, "Plugin(s)"), 
	                                  React.DOM.th({className: "text-center"}, "Functionality")
	                                )
	                              ), 
	                              React.DOM.tbody(null, 
	                                React.DOM.tr(null, 
	                                  React.DOM.td(null, React.DOM.strong(null, React.DOM.a({target: "_blank", href: "https://www.npmjs.org/package/gulp"}, "gulp"), ", ", React.DOM.a({target: "_blank", href: "https://www.npmjs.org/package/gulp-util"}, "gulp-util"), ", ", React.DOM.a({target: "_blank", href: "https://www.npmjs.org/package/run-sequence"}, "run-sequence"))), 
	                                  React.DOM.td(null, 
	                                    React.DOM.p(null, "The streaming build system."), 
	                                    React.DOM.div(null, 
	                                      React.DOM.div(null, React.DOM.strong(null, React.DOM.em(null, "Why Gulp and not Grunt?"))), 
	                                      React.DOM.p(null, "We evaluated both Grunt and Gulp and decided to go with Gulp for it's use of streams. Grunt is more declarative while Gulp is imperative. This means that the build file (called the gulpfile) follows a code-over-configuration approach. Because of its minimal API surface it doesn't have the steep learning curve that Grunt does.")
	                                    ), 
	                                    React.DOM.div(null, 
	                                      React.DOM.div(null, React.DOM.strong(null, React.DOM.em(null, "gulp-util"))), 
	                                      React.DOM.p(null, "Helpers for gulp. Used for formatting dates (copyright banners) and logging to the terminal.")
	                                    ), 
	                                    React.DOM.div(null, 
	                                      React.DOM.div(null, React.DOM.strong(null, React.DOM.em(null, "run-sequence"))), 
	                                      React.DOM.p(null, "A module to help run tasks in series in gulp. This is a temporary solution which will be removed once gulp 3.0 is released.")
	                                    )
	                                  )
	                                ), 
	                                React.DOM.tr(null, 
	                                  React.DOM.td(null, React.DOM.strong(null, React.DOM.a({target: "_blank", href: "https://www.npmjs.org/package/gulp-webpack"}, "gulp-webpack"))), 
	                                  React.DOM.td(null, 
	                                    React.DOM.p(null, "Primarily a bundler for CommonJS/AMD modules but can be used to bundle anything. Its fast because of its support for incremental building and smart caching.")
	                                  )
	                                ), 
	                                React.DOM.tr(null, 
	                                  React.DOM.td(null, React.DOM.strong(null, React.DOM.a({target: "_blank", href: "http://facebook.github.io/react/"}, "React"), ", ", React.DOM.a({target: "_blank", href: "http://fluxxor.com/"}, "Fluxxor"), ", ", React.DOM.a({target: "_blank", href: "https://www.npmjs.org/package/jsx-loader"}, "jsx-loader"))), 
	                                  React.DOM.td(null, 
	                                    React.DOM.div(null, 
	                                      React.DOM.div(null, React.DOM.strong(null, React.DOM.em(null, "React:"))), 
	                                      React.DOM.p(null, 
	                                        "A Javascript library for building User interfaces open-sourced by Facebook. It uses a virtual DOM diff implementation for ultra-high performance. It also implements a one-way reactive data flow which reduces boilerplate and is easier to reason about than traditional data binding."
	                                      )
	                                    ), 
	                                    React.DOM.div(null, 
	                                      React.DOM.div(null, React.DOM.strong(null, React.DOM.em(null, "Flux and Fluxxor:"))), 
	                                      React.DOM.p(null, 
	                                        "Flux is the application architecture that Facebook uses for building client-side web applications. It complements React's composable view components by utilizing a unidirectional data flow."
	                                      ), 
	                                      React.DOM.p(null, 
	                                        "Fluxxor is a set of tools to facilitate building Javascript data layers using the Flux architecture by reifying many of the core Flux concepts."
	                                      )
	                                    ), 
	                                    React.DOM.div(null, 
	                                      React.DOM.div(null, React.DOM.strong(null, React.DOM.em(null, "jsx-loader:"))), 
	                                      React.DOM.p(null, 
	                                        "This is a loader for webpack which loads, compiles and concatenates JSX modules."
	                                      )
	                                    )
	                                  )
	                                ), 
	                                React.DOM.tr(null, 
	                                  React.DOM.td(null, React.DOM.strong(null, React.DOM.a({target: "_blank", href: "http://sass-lang.com/"}, "Sass"), ", ", React.DOM.a({target: "_blank", href: "https://www.npmjs.org/package/gulp-sass"}, "gulp-sass"), ", ", React.DOM.a({target: "_blank", href: "https://www.npmjs.org/package/gulp-minify-css"}, "gulp-minify-css"), ", ", React.DOM.a({target: "_blank", href: "https://www.npmjs.org/package/css-flip"}, "css-flip"), ", ", React.DOM.a({target: "_blank", href: "https://www.npmjs.org/package/gulp-autoprefixer"}, "gulp-autoprefixer"), ", ", React.DOM.a({target: "_blank", href: "https://www.npmjs.org/package/gulp-bless"}, "gulp-bless"))), 
	                                  React.DOM.td(null, 
	                                    React.DOM.div(null, 
	                                      React.DOM.div(null, React.DOM.strong(null, React.DOM.em(null, "Sass:"))), 
	                                      React.DOM.p(null, 
	                                        "Sass (Syntactically Awesome StyleSheets) is the most mature, stable, and poweful professional grade CSS extension language in the world."
	                                      )
	                                    ), 
	                                    React.DOM.div(null, 
	                                      React.DOM.div(null, React.DOM.strong(null, React.DOM.em(null, "gulp-sass:"))), 
	                                      React.DOM.p(null, 
	                                        "We chose gulp-sass because it used node-sass which provides a binding to libsass (C/C++ implementation of Sass compiler) under the hood. This version is ultra-fast in comparison to the original Ruby implementation and reduces dev time by a big margin."
	                                      )
	                                    ), 
	                                    React.DOM.div(null, 
	                                      React.DOM.div(null, React.DOM.strong(null, React.DOM.em(null, "gulp-minify-css:"))), 
	                                      React.DOM.p(null, 
	                                        "A gulp plugin to minify CSS files."
	                                      )
	                                    ), 
	                                    React.DOM.div(null, 
	                                      React.DOM.div(null, React.DOM.strong(null, React.DOM.em(null, "css-flip:"))), 
	                                      React.DOM.p(null, 
	                                        "A module maintained by Twitter to flip CSS stylesheets from LTR to RTL and vice-versa."
	                                      )
	                                    ), 
	                                    React.DOM.div(null, 
	                                      React.DOM.div(null, React.DOM.strong(null, React.DOM.em(null, "gulp-autoprefixer:"))), 
	                                      React.DOM.p(null, 
	                                        "Don't use mixins for generating vendor prefixes for shadows/gradients etc. Write standard code and use gulp-autoprefixer instead to add vendor prefixes."
	                                      )
	                                    ), 
	                                    React.DOM.div(null, 
	                                      React.DOM.div(null, React.DOM.strong(null, React.DOM.em(null, "gulp-bless:"))), 
	                                      React.DOM.p(null, 
	                                        "We use gulp-bless to split up the resulting CSS output from SASS to ensure that the maximum selectors limit bug in IE9 is not hit. See this link: ", React.DOM.a({href: "http://blesscss.com/", target: "_blank"}, "blesscss"), " for more information on the bug."
	                                      )
	                                    )
	                                  )
	                                ), 
	                                React.DOM.tr(null, 
	                                  React.DOM.td(null, React.DOM.strong(null, React.DOM.a({target: "_blank", href: "http://www.npmjs.org/package/gulp-ttf2woff"}, "gulp-ttf2woff"), ", ", React.DOM.a({target: "_blank", href: "http://www.npmjs.org/package/gulp-cssfont64"}, "gulp-cssfont64"))), 
	                                  React.DOM.td(null, 
	                                    React.DOM.div(null, 
	                                      React.DOM.div(null, React.DOM.strong(null, React.DOM.em(null, "Why gulp-ttf2woff and gulp-cssfont64?"))), 
	                                      React.DOM.p(null, 
	                                        "Instead of serving users with TTF, SVG, EOT and WOFF files with IE specific hacks we decided to use embedded Base64 fonts. This has multiple advantages:", 
	                                        React.DOM.ul(null, 
	                                          React.DOM.li(null, "Single HTTP request (as all fonts are embedded in a single CSS file)"), 
	                                          React.DOM.li(null, "Better maintainability (only drop the TTF into designated folder rather than maintain 4 different formats with IE specific hacks)"), 
	                                          React.DOM.li(null, "No font flashing"), 
	                                          React.DOM.li(null, "Cross-Browser support")
	                                        )
	                                      )
	                                    ), 
	                                    React.DOM.div(null, 
	                                      React.DOM.div(null, React.DOM.strong(null, React.DOM.em(null, "gulp-ttf2woff:"))), 
	                                      React.DOM.p(null, 
	                                        "Converts TTF font files to WOFF type."
	                                      )
	                                    ), 
	                                    React.DOM.div(null, 
	                                      React.DOM.div(null, React.DOM.strong(null, React.DOM.em(null, "gulp-cssfont64:"))), 
	                                      React.DOM.p(null, 
	                                        "Embeds WOFF fonts into CSS files by converting them to Base64 format."
	                                      )
	                                    )
	                                  )
	                                ), 
	                                React.DOM.tr(null, 
	                                  React.DOM.td(null, React.DOM.strong(null, React.DOM.a({target: "_blank", href: "http://www.npmjs.org/package/gulp-uglifyjs"}, "gulp-uglifyjs"))), 
	                                  React.DOM.td(null, 
	                                    React.DOM.div(null, 
	                                      React.DOM.p(null, 
	                                        "Uglify static assets."
	                                      )
	                                    )
	                                  )
	                                ), 
	                                React.DOM.tr(null, 
	                                  React.DOM.td(null, React.DOM.strong(null, React.DOM.a({target: "_blank", href: "http://www.npmjs.org/package/del"}, "del"), ", ", React.DOM.a({target: "_blank", href: "http://www.npmjs.org/package/gulp-concat"}, "gulp-concat"), ", ", React.DOM.a({target: "_blank", href: "http://www.npmjs.org/package/gulp-insert"}, "gulp-insert"), ", ", React.DOM.a({target: "_blank", href: "http://www.npmjs.org/package/gulp-rename"}, "gulp-rename"), ", ", React.DOM.a({target: "_blank", href: "http://www.npmjs.org/package/gulp-replace"}, "gulp-replace"), ", ", React.DOM.a({target: "_blank", href: "http://www.npmjs.org/package/map-stream"}, "map-stream"), ", ", React.DOM.a({target: "_blank", href: "http://www.npmjs.org/package/through"}, "through"), ", ", React.DOM.a({target: "_blank", href: "http://www.npmjs.org/package/transform-loader"}, "transform-loader"), ", ", React.DOM.a({target: "_blank", href: "http://www.npmjs.org/package/raw-loader"}, "raw-loader"), ", ", React.DOM.a({target: "_blank", href: "http://www.npmjs.org/package/vinyl-transform"}, "vinyl-transform"))), 
	                                  React.DOM.td(null, 
	                                    React.DOM.div(null, 
	                                      React.DOM.p(null, 
	                                        "File manipulation utilities and webpack loaders for performing all the grunt work."
	                                      )
	                                    )
	                                  )
	                                ), 
	                                React.DOM.tr(null, 
	                                  React.DOM.td(null, React.DOM.strong(null, React.DOM.a({target: "_blank", href: "http://www.npmjs.org/package/express"}, "express"), ", ", React.DOM.a({target: "_blank", href: "http://www.npmjs.org/package/compression"}, "compression"), ", ", React.DOM.a({target: "_blank", href: "http://www.npmjs.org/package/ua-parser"}, "ua-parser"))), 
	                                  React.DOM.td(null, 
	                                    React.DOM.div(null, 
	                                      React.DOM.p(null, 
	                                        "Express is a web server for Node.JS. Use it for dev environment to test the frontend. Compression library provides for Gzip based compression and ua-parser is optional."
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
	        ), 
	        this.props.children
	      )
	    );
	  }
	});

	var classSet = React.addons.classSet;
	var Installation = React.createClass({displayName: 'Installation',
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

	module.exports = Installation;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(39);
	var Sidebar = __webpack_require__(40);
	var Footer = __webpack_require__(41);

	var Body = React.createClass({displayName: 'Body',
	  render: function() {
	    return (
	      Container({id: "body"}, 
	        Grid(null, 
	          Row(null, 
	            Col({sm: 12}, 
	              PanelContainer({controlStyles: "bg-darkgreen45 fg-white"}, 
	                Panel(null, 
	                  PanelHeader({className: "bg-darkgreen45 fg-white"}, 
	                    Grid(null, 
	                      Row(null, 
	                        Col({xs: 12}, 
	                          React.DOM.h3(null, "Gulpfile: The Basics")
	                        )
	                      )
	                    )
	                  ), 
	                  PanelBody(null, 
	                    Grid(null, 
	                      Row(null, 
	                        Col({xs: 12}, 
	                          React.DOM.p(null, 
	                            "The Gulpfile is divided into 4 main sections: One that handles SASS to CSS compilation, JSX to JS compilation, WebFont compilation and the Development server for quick testing and debugging."
	                          ), 
	                          React.DOM.p(null, 
	                            "We'll handle each section in its own individual doc pages later. However, before we get to that lets discuss the environment options provided:"
	                          ), 
	                          Table({bordered: true, striped: true, responsive: true}, 
	                            React.DOM.thead(null, 
	                              React.DOM.tr(null, 
	                                React.DOM.th(null, "Option"), 
	                                React.DOM.th(null, "Functionality")
	                              )
	                            ), 
	                            React.DOM.tbody(null, 
	                              React.DOM.tr(null, 
	                                React.DOM.td({style: {width: '35%'}}, 
	                                  React.DOM.div(null, React.DOM.strong(null, "--name")), 
	                                  React.DOM.div(null, 
	                                    React.DOM.em(null, "(Optional, defaults to ", React.DOM.strong(null, "app"), ")")
	                                  ), 
	                                  React.DOM.div(null, 
	                                    React.DOM.small(null, React.DOM.em(null, React.DOM.strong(null, "Usage: "), React.DOM.span(null), "gulp --name somenamehere"))
	                                  )
	                                ), 
	                                React.DOM.td(null, 
	                                  React.DOM.div(null, 
	                                    React.DOM.p(null, "A name for your project/app. The necessary file structures need to exist before you can call this command. Consult the documentation on how to scaffold one if you're starting a blank project."), 
	                                    React.DOM.p(null, "By default we ship a ", React.DOM.strong(null, "demo"), " project and a ", React.DOM.strong(null, "app"), " starter project."), 
	                                    React.DOM.p(null, "Use the demo project as a reference while creating your own project")
	                                  )
	                                )
	                              ), 
	                              React.DOM.tr(null, 
	                                React.DOM.td(null, 
	                                  React.DOM.div(null, React.DOM.strong(null, "--rtl")), 
	                                  React.DOM.div(null, 
	                                    React.DOM.em(null, "(Optional, defaults to ", React.DOM.strong(null, "false"), ")")
	                                  ), 
	                                  React.DOM.div(null, 
	                                    React.DOM.small(null, React.DOM.em(null, React.DOM.strong(null, "Usage: "), React.DOM.span(null), "gulp --rtl"))
	                                  )
	                                ), 
	                                React.DOM.td(null, 
	                                  React.DOM.div(null, 
	                                    React.DOM.p(null, "A switch that automatically generates an RTL equivalent of the compiled CSS files using Twitter's css-flip. This is turned off by default. To access the RTL resource point your browser to http://localhost:8080/rtl/#/")
	                                  )
	                                )
	                              ), 
	                              React.DOM.tr(null, 
	                                React.DOM.td(null, 
	                                  React.DOM.div(null, React.DOM.strong(null, "--port")), 
	                                  React.DOM.div(null, 
	                                    React.DOM.em(null, "(Optional, defaults to ", React.DOM.strong(null, "8080"), ")")
	                                  ), 
	                                  React.DOM.div(null, 
	                                    React.DOM.small(null, React.DOM.em(null, React.DOM.strong(null, "Usage: "), React.DOM.span(null), "gulp --port 3000"))
	                                  )
	                                ), 
	                                React.DOM.td(null, 
	                                  React.DOM.div(null, 
	                                    React.DOM.p(null, "Development server port.")
	                                  )
	                                )
	                              ), 
	                              React.DOM.tr(null, 
	                                React.DOM.td(null, 
	                                  React.DOM.div(null, React.DOM.strong(null, "--production")), 
	                                  React.DOM.div(null, 
	                                    React.DOM.em(null, "(Optional, defaults to ", React.DOM.strong(null, "false"), ")")
	                                  ), 
	                                  React.DOM.div(null, 
	                                    React.DOM.small(null, React.DOM.em(null, React.DOM.strong(null, "Usage: "), React.DOM.span(null), "gulp --production"))
	                                  )
	                                ), 
	                                React.DOM.td(null, 
	                                  React.DOM.div(null, 
	                                    React.DOM.p(null, "A boolean flag like ", React.DOM.strong(null, "--rtl"), ". Run this when you are done with development as it compiles, minifies and bundles all the source CSS and JS files. For bundling external plugins please consult ", React.DOM.strong(null, Link({href: "/app/docs/gulpfile/externalplugins"}, "Gulpfile.js > External Plugins")), " doc page.")
	                                  )
	                                )
	                              )
	                            )
	                          ), 
	                          React.DOM.p(null, 
	                            "Here is an image of the gulp command (run with above options) executed in a terminal:"
	                          ), 
	                          React.DOM.div(null, 
	                            Img({responsive: true, src: "public/imgs/shots/gulp-options-terminal.png"})
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
	var GulpfileBasics = React.createClass({displayName: 'GulpfileBasics',
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

	module.exports = GulpfileBasics;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(39);
	var Sidebar = __webpack_require__(40);
	var Footer = __webpack_require__(41);

	var Body = React.createClass({displayName: 'Body',
	  componentDidMount: function() {
	    Prism.highlightAll();
	  },
	  render: function() {
	    return (
	      Container({id: "body"}, 
	        Grid(null, 
	          Row(null, 
	            Col({sm: 12}, 
	              PanelContainer({controlStyles: "bg-darkgreen45 fg-white"}, 
	                Panel(null, 
	                  PanelHeader({className: "bg-darkgreen45 fg-white"}, 
	                    Grid(null, 
	                      Row(null, 
	                        Col({xs: 12}, 
	                          React.DOM.h3(null, "Gulpfile: Sass to CSS")
	                        )
	                      )
	                    )
	                  ), 
	                  PanelBody(null, 
	                    Grid(null, 
	                      Row(null, 
	                        Col({xs: 12}, 
	                          React.DOM.p(null, 
	                            "The Sass section in the Gulpfile is delimited by a ", React.DOM.code(null, "BEGIN APP:SASS"), " and ", React.DOM.code(null, "END APP:SASS"), " and consists of 6 tasks. Lets begin by understanding the flow of each task. While describing the following tasks we assume the project name to be ", React.DOM.strong(null, React.DOM.em(null, "app")), "."
	                          ), 
	                          Table({bordered: true, striped: true, responsive: true}, 
	                            React.DOM.thead(null, 
	                              React.DOM.tr(null, 
	                                React.DOM.th(null, "Tasks"), 
	                                React.DOM.th(null, "Flow")
	                              )
	                            ), 
	                            React.DOM.tbody(null, 
	                              React.DOM.tr(null, 
	                                React.DOM.td({style: {width: '15%'}}, 
	                                  React.DOM.div(null, "Task 1 (sass:app)")
	                                ), 
	                                React.DOM.td(null, 
	                                  React.DOM.p(null, 
	                                    "The first sass gulp task called \"sass:app\" compiles all the ", React.DOM.code(null, "scss"), " files located in ", React.DOM.code(null, "src/sass/app"), " by piping the files through the ", React.DOM.strong(null, "sass"), " gulp plugin, whose result is inturn piped through ", React.DOM.strong(null, "autoprefixer"), ", whose result is piped through ", React.DOM.strong(null, "insert"), " plugin (which inserts a banner and a charset statement) and the final modified output is written to the destination folder ", React.DOM.code(null, "public/css/app/raw/ltr")
	                                  ), 
	                                  React.DOM.p(null, 
	                                    "We have included autoprefixer so that you can keep your sass files clean by not using mixins or specific browser/vendor prefixes. Autoprefixer takes care of that for you and you should generally avoid hardcoding prefixes which are bound to get deprecated in the future."
	                                  )
	                                )
	                              ), 
	                              React.DOM.tr(null, 
	                                React.DOM.td(null, 
	                                  React.DOM.div(null, "Task 2 (sass:app:rtl)"), 
	                                  React.DOM.div(null, React.DOM.small(null, React.DOM.em(null, "Depends on Task (1)")))
	                                ), 
	                                React.DOM.td(null, 
	                                  React.DOM.p(null, 
	                                    "The second gulp task called \"sass:app:rtl\" depends on \"sass:app\". This task is only called if the argument ", React.DOM.strong(null, "--rtl"), " is passed to gulp command (See: ", Link({href: "/app/docs/gulpfile/basics"}, React.DOM.strong(null, "Gulpfile.js > Basics")), " for more info). This task collects all the files generated from Task 1 above and flips them to RTL format and the final modified output is written to the destination folder ", React.DOM.code(null, "public/css/app/raw/rtl")
	                                  )
	                                )
	                              ), 
	                              React.DOM.tr(null, 
	                                React.DOM.td(null, 
	                                  React.DOM.div(null, "Task 3 (minifycss:app) and Task 4 (minifycss:app:rtl)")
	                                ), 
	                                React.DOM.td(null, 
	                                  React.DOM.p(null, 
	                                    "The third and fourth gulp task are run during production (if argument ", React.DOM.strong(null, "--production"), " is passed to gulp command). The fourth task also depends on ", React.DOM.strong(null, "--rtl"), " argument being passed to gulp command. These tasks minify the CSS generated from Task 1 and Task 2."
	                                  )
	                                )
	                              ), 
	                              React.DOM.tr(null, 
	                                React.DOM.td(null, 
	                                  React.DOM.div(null, "Task 5 (bless:app) and Task 6 (bless:app:rtl)")
	                                ), 
	                                React.DOM.td(null, 
	                                  React.DOM.p(null, 
	                                    "The fifth and sixth gulp task are run during production (if argument ", React.DOM.strong(null, "--production"), " is passed to gulp command). The sixth task also depends on ", React.DOM.strong(null, "--rtl"), " argument being passed to gulp command. These tasks take care of a very specific and lesser known IE9 related stylesheet bug. IE9 has hard limits on the number of selectors allowed in a CSS file. Once the limit is reached, IE silently fails and just ignores any further CSS leaving parts of your site totally unstyled. To fix this issue we use the awesome ", React.DOM.a({target: "_blank", href: "http://blesscss.com/"}, "blesscss"), " library."
	                                  ), 
	                                  React.DOM.p(null, 
	                                    "The blessed files are written to ", React.DOM.code(null, "public/css/app/blessed/ltr"), " and ", React.DOM.code(null, "public/css/app/blessed/rtl"), "."
	                                  ), 
	                                  React.DOM.p(null, 
	                                    "The blessed files are ordered (ex: main-blessed1.css, main.css). These stylesheets should be placed, in a descending order, before the closing of the ", React.DOM.code(null, "<head>"), " tag. Here is an example snippet:"
	                                  )
	                                )
	                              )
	                            )
	                          ), 
	                          React.DOM.pre(null, 
	                            React.DOM.code({className: "language-markup"}, 
	                            "  <link rel='stylesheet' type='text/css' media='screen,print' href='/css/app/blessed/ltr/main-blessed1.css' />\n", 
	                            "  <link rel='stylesheet' type='text/css' media='screen,print' href='/css/app/blessed/ltr/main.css' />\n", 
	                            "  <link rel='stylesheet' type='text/css' media='screen' href='/css/app/blessed/ltr/theme.css' />\n", 
	                            "  <link rel='stylesheet' type='text/css' media='screen' href='/css/app/blessed/ltr/colors-blessed1.css' />\n", 
	                            "  <link rel='stylesheet' type='text/css' media='screen' href='/css/app/blessed/ltr/colors.css' />\n", 
	                            "  <link rel='stylesheet' type='text/css' media='screen' href='/css/app/blessed/ltr/font-faces.css' />\n"
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
	var GulpfileSass = React.createClass({displayName: 'GulpfileSass',
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

	module.exports = GulpfileSass;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(39);
	var Sidebar = __webpack_require__(40);
	var Footer = __webpack_require__(41);

	var Body = React.createClass({displayName: 'Body',
	  render: function() {
	    return (
	      Container({id: "body"}, 
	        Grid(null, 
	          Row(null, 
	            Col({sm: 12}, 
	              PanelContainer({controlStyles: "bg-darkgreen45 fg-white"}, 
	                Panel(null, 
	                  PanelHeader({className: "bg-darkgreen45 fg-white"}, 
	                    Grid(null, 
	                      Row(null, 
	                        Col({xs: 12}, 
	                          React.DOM.h3(null, "Gulpfile: JSX to JS")
	                        )
	                      )
	                    )
	                  ), 
	                  PanelBody(null, 
	                    Grid(null, 
	                      Row(null, 
	                        Col({xs: 12}, 
	                          React.DOM.p(null, 
	                            "The JSX section in the Gulpfile is delimited by a ", React.DOM.code(null, "BEGIN REACT"), " and ", React.DOM.code(null, "END APP:JS"), " and consists of 10 tasks. Lets begin by understanding the flow of each task. While describing the following tasks we assume the project name to be ", React.DOM.strong(null, React.DOM.em(null, "app")), "."
	                          ), 
	                          Table({bordered: true, striped: true, responsive: true}, 
	                            React.DOM.thead(null, 
	                              React.DOM.tr(null, 
	                                React.DOM.th(null, "Tasks"), 
	                                React.DOM.th(null, "Flow")
	                              )
	                            ), 
	                            React.DOM.tbody(null, 
	                              React.DOM.tr(null, 
	                                React.DOM.td({style: {width: '15%'}}, 
	                                  React.DOM.div(null, "Task 1 (react:react), Task 2 (uglify:react) and Task 3 (clean:react)")
	                                ), 
	                                React.DOM.td(null, 
	                                  React.DOM.p(null, 
	                                    "The first task compiles the React core library (", React.DOM.code(null, "react.js"), "). The second task minifies the core library (", React.DOM.code(null, "react.min.js"), ") and finally the third task cleans up any temporary files that were created during this process. All output is written to ", React.DOM.code(null, "public/js/common/react")
	                                  ), 
	                                  React.DOM.p(null, 
	                                    "The first and third task is run only on startup. The second task is run only when a ", React.DOM.strong(null, "--production"), " flag is passed to gulp command."
	                                  )
	                                )
	                              ), 
	                              React.DOM.tr(null, 
	                                React.DOM.td(null, 
	                                  React.DOM.div(null, "Task 4 (react:react-l20n) and Task 5 (uglify:react-l20n)")
	                                ), 
	                                React.DOM.td(null, 
	                                  React.DOM.p(null, 
	                                    "The fourth task is run once during startup and everytime there is a change to respective files. These files should not be modified as any modification might conflict with future updates. It compiles L20n react bindings (", React.DOM.code(null, "react-l20n.js"), "). The fifth task is run only when a ", React.DOM.strong(null, "--production"), " flag is passed to gulp command. It minifies the compiled file from previous task (", React.DOM.code(null, "react-l20n.min.js"), "). All output is written to ", React.DOM.code(null, "public/js/common/react-l20n")
	                                  )
	                                )
	                              ), 
	                              React.DOM.tr(null, 
	                                React.DOM.td(null, 
	                                  React.DOM.div(null, "Task 6 (react:react-bootstrap) and Task 7 (uglify:react-bootstrap)")
	                                ), 
	                                React.DOM.td(null, 
	                                  React.DOM.p(null, 
	                                    "The sixth task is run once during startup and everytime there is a change to respective files. These files should not be modified as any modification might conflict with future updates. It compiles Bootstrap react bindings (", React.DOM.code(null, "react-bootstrap.js"), "). The seventh task is run only when a ", React.DOM.strong(null, "--production"), " flag is passed to gulp command. It minifies the compiled file from previous task (", React.DOM.code(null, "react-bootstrap.min.js"), "). All output is written to ", React.DOM.code(null, "public/js/common/react-bootstrap")
	                                  )
	                                )
	                              ), 
	                              React.DOM.tr(null, 
	                                React.DOM.td(null, 
	                                  React.DOM.div(null, "Task 8 (react:app), Task 9 (react:concat) and Task 10 (uglify:app)")
	                                ), 
	                                React.DOM.td(null, 
	                                  React.DOM.p(null, 
	                                    "The eighth and ninth tasks look for changes to ", React.DOM.code(null, "src/jsx/app"), " directory and compiles the JSX files to JS (", React.DOM.code(null, "app.js"), "). NOTE: The starting point of your project is located at ", React.DOM.code(null, "src/jsx/app/main.jsx"), " (assuming ", React.DOM.code(null, "app"), " is your project name). All output is written to ", React.DOM.code(null, "public/js/app")
	                                  ), 
	                                  React.DOM.p(null, 
	                                    "The final task is run only when a ", React.DOM.strong(null, "--production"), " flag is passed to gulp command. It minifies the compiled file from previous task (", React.DOM.code(null, "app.min.js"), "). All output is written to ", React.DOM.code(null, "public/js/app")
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
	        ), 
	        this.props.children
	      )
	    );
	  }
	});

	var classSet = React.addons.classSet;
	var GulpfileJSX = React.createClass({displayName: 'GulpfileJSX',
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

	module.exports = GulpfileJSX;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(39);
	var Sidebar = __webpack_require__(40);
	var Footer = __webpack_require__(41);

	var Body = React.createClass({displayName: 'Body',
	  render: function() {
	    return (
	      Container({id: "body"}, 
	        Grid(null, 
	          Row(null, 
	            Col({sm: 12}, 
	              PanelContainer({controlStyles: "bg-darkgreen45 fg-white"}, 
	                Panel(null, 
	                  PanelHeader({className: "bg-darkgreen45 fg-white"}, 
	                    Grid(null, 
	                      Row(null, 
	                        Col({xs: 12}, 
	                          React.DOM.h3(null, "Gulpfile: WebFonts")
	                        )
	                      )
	                    )
	                  ), 
	                  PanelBody(null, 
	                    Grid(null, 
	                      Row(null, 
	                        Col({xs: 12}, 
	                          React.DOM.p(null, 
	                            "The JSX section in the Gulpfile is delimited by a ", React.DOM.code(null, "BEGIN Base64 CSS"), " and ", React.DOM.code(null, "END Base64 CSS"), " and consists of 3 tasks. Of the 3 the most important is the first task ", React.DOM.code(null, "base64-css:convert"), "."
	                          ), 
	                          React.DOM.p(null, 
	                            "Assuming that your project name is ", React.DOM.strong(null, React.DOM.em(null, "app")), " your webfont folder should be located at ", React.DOM.code(null, "public/fonts/dropbox/app"), ". We have simplified the process of including webfonts in your project. All you have to do is drop a TTF file of your favorite font into the above folder and let gulp take care of the rest."
	                          ), 
	                          React.DOM.p(null, 
	                            "Behind the scenes gulp converts the TTF file to WOFF format and then base64 encodes the binary output and concatenates it with the other fonts and writes it to ", React.DOM.code(null, "public/css/fonts/app/fonts.css"), ". This is the preferred way of including web fonts in your project. You'll notice performance improvements immediately and you needn't worry about maintaining and serving 5 different font types."
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
	var GulpfileWebFont = React.createClass({displayName: 'GulpfileWebFont',
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

	module.exports = GulpfileWebFont;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(39);
	var Sidebar = __webpack_require__(40);
	var Footer = __webpack_require__(41);

	var Body = React.createClass({displayName: 'Body',
	  componentDidMount: function() {
	    Prism.highlightAll();
	  },
	  render: function() {
	    return (
	      Container({id: "body"}, 
	        Grid(null, 
	          Row(null, 
	            Col({sm: 12}, 
	              PanelContainer({controlStyles: "bg-darkgreen45 fg-white"}, 
	                Panel(null, 
	                  PanelHeader({className: "bg-darkgreen45 fg-white"}, 
	                    Grid(null, 
	                      Row(null, 
	                        Col({xs: 12}, 
	                          React.DOM.h3(null, "Gulpfile: Client-side Scaffolding")
	                        )
	                      )
	                    )
	                  ), 
	                  PanelBody(null, 
	                    Grid(null, 
	                      Row(null, 
	                        Col({xs: 12}, 
	                          React.DOM.p(null, 
	                            "To scaffold a new project just run the following command from your terminal/command prompt (we assume the name of your project to be ", React.DOM.strong(null, "testingscaffolding"), "):"
	                          ), 
	                          React.DOM.pre(null, 
	                            React.DOM.code({className: "language-bash"}, 
	                              "$ gulp --gulpfile scaffold.js --name testingscaffolding"
	                            )
	                          ), 
	                          React.DOM.p(null, 
	                            "This is a screenshot of the output:"
	                          ), 
	                          React.DOM.div(null, 
	                            Img({responsive: true, src: "public/imgs/shots/scaffolding.png"})
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
	var GulpfileScaffolding = React.createClass({displayName: 'GulpfileScaffolding',
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

	module.exports = GulpfileScaffolding;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(39);
	var Sidebar = __webpack_require__(40);
	var Footer = __webpack_require__(41);

	var Body = React.createClass({displayName: 'Body',
	  componentDidMount: function() {
	    Prism.highlightAll();
	  },
	  render: function() {
	    return (
	      Container({id: "body"}, 
	        Grid(null, 
	          Row(null, 
	            Col({sm: 12}, 
	              PanelContainer({controlStyles: "bg-darkgreen45 fg-white"}, 
	                Panel(null, 
	                  PanelHeader({className: "bg-darkgreen45 fg-white"}, 
	                    Grid(null, 
	                      Row(null, 
	                        Col({xs: 12}, 
	                          React.DOM.h3(null, "Gulpfile: External Plugins")
	                        )
	                      )
	                    )
	                  ), 
	                  PanelBody(null, 
	                    Grid(null, 
	                      Row(null, 
	                        Col({xs: 12}, 
	                          React.DOM.p(null, 
	                            "To minify your external plugins you can include them in the ", React.DOM.strong(null, "plugins.js"), " file located at the root of the Rubix directory and run the following command:"
	                          ), 
	                          React.DOM.pre(null, 
	                            React.DOM.code({className: "language-bash"}, 
	                              "$ gulp --gulpfile plugins.js"
	                            )
	                          ), 
	                          React.DOM.p(null, 
	                            "It concatenates all your external plugins and minifies them to a single file located at ", React.DOM.strong(null, "public/js/minified/external.min.js"), " This is a screenshot of the output:"
	                          ), 
	                          React.DOM.div(null, 
	                            Img({responsive: true, src: "public/imgs/shots/minification.png"})
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
	var GulpfileExternalPlugins = React.createClass({displayName: 'GulpfileExternalPlugins',
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

	module.exports = GulpfileExternalPlugins;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(39);
	var Sidebar = __webpack_require__(40);
	var Footer = __webpack_require__(41);

	var Body = React.createClass({displayName: 'Body',
	  render: function() {
	    return (
	      Container({id: "body"}, 
	        Grid(null, 
	          Row(null, 
	            Col({sm: 12}, 
	              PanelContainer({controlStyles: "bg-darkgreen45 fg-white"}, 
	                Panel(null, 
	                  PanelHeader({className: "bg-darkgreen45 fg-white"}, 
	                    Grid(null, 
	                      Row(null, 
	                        Col({xs: 12}, 
	                          React.DOM.h3(null, "Facebook React")
	                        )
	                      )
	                    )
	                  ), 
	                  PanelBody(null, 
	                    Grid(null, 
	                      Row(null, 
	                        Col({xs: 12}, 
	                          React.DOM.p(null, 
	                            "The documentation assumes that you know React or are willing to learn React. If you are new to React you can go through the basic tutorial over ", React.DOM.a({target: "_blank", href: "http://facebook.github.io/react/"}, "here"), " and a more thorough documentation ", React.DOM.a({target: "_blank", href: "http://facebook.github.io/react/docs/getting-started.html"}, "here"), ". Remember that React is very easy to learn and doesn't have the steep learning curve of AngularJS. You can even mix the two if you already know Angular as React only deals with the View and leaves the rest of the architecture to you to deal with."
	                          ), 
	                          React.DOM.p(null, 
	                            "We have also included ", React.DOM.a({target: "_blank", href: "http://fluxxor.com"}, "Fluxxor"), ", an implementation of Facebook's Flux architecture."
	                          ), 
	                          React.DOM.p(null, 
	                            "We'll update the docs with more extensive list of tutorials on React in future revisions. Stay tuned."
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
	var ReactDoc = React.createClass({displayName: 'ReactDoc',
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

	module.exports = ReactDoc;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */
	/** @jsx React.DOM */

	var Header = __webpack_require__(39);
	var Sidebar = __webpack_require__(40);
	var Footer = __webpack_require__(41);

	var Doc = __webpack_require__(38);
	var DocUnit = Doc.DocUnit;
	var DocContainer = Doc.DocContainer;

	var treesnippet = __webpack_require__(44);

	var Body = React.createClass({displayName: 'Body',
	  componentDidMount: function() {
	    Prism.highlightAll();
	  },
	  render: function() {
	    return (
	      Container({id: "body"}, 
	        DocContainer(null, 
	          DocUnit({name: "Rubix Documentation"}, 
	            React.DOM.h4({className: "fg-black50"}, "Basics"), 
	            React.DOM.p(null, 
	              "Once you have everything setup (if you haven't go back to the ", Link({href: "/app/docs/installation"}, "Installation"), " page and finish the installation) you'll notice a file structure similar to this:"
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  treesnippet
	                )
	              )
	            ), 
	            React.DOM.div(null, 
	              "The ", React.DOM.strong(null, "src"), " directory is where your source files are located and it contains three folders:",  
	              React.DOM.ul(null, 
	                React.DOM.li(null, React.DOM.strong(null, "global"), ": This directory contains files shared by all projects. Do not alter these files unless you know what you are doing."), 
	                React.DOM.li(null, React.DOM.strong(null, "jsx"), ": This directory contains project sources (JSX files). By default there are two projects that ship with your purchase:", 
	                  React.DOM.ul(null, 
	                    React.DOM.li(null, React.DOM.strong(null, "app"), ": this is a blank starter project"), 
	                    React.DOM.li(null, React.DOM.strong(null, "demo"), ": this is the demo project which can be used for reference")
	                  )
	                ), 
	                React.DOM.li(null, React.DOM.strong(null, "sass"), ": This directory contains project sources (SASS files) and has two folders:",  
	                  React.DOM.ul(null, 
	                    React.DOM.li(null, React.DOM.strong(null, "app"), ": this is a blank starter project"), 
	                    React.DOM.li(null, React.DOM.strong(null, "demo"), ": this is the demo project which can be used for reference")
	                  )
	                )
	              )
	            )
	          ), 
	          DocUnit({name: "Rubix Documentation: main.jsx"}, 
	            React.DOM.p(null, 
	              "This file is the starting point of your app. Look for it in the ", React.DOM.code(null, "src/jsx/app"), " folder."
	            ), 
	            React.DOM.p(null, 
	              "The first few lines of the file contain a snippet of code that initializes Mozilla L20n. The first parameter passed to the locale is your project name (in this case it is simply 'app'). All your locales are stored in ", React.DOM.code(null, "public/locales/app"), " (For reference see the locales stored in ", React.DOM.code(null, "public/locales/demo"), "). You can pass your locales to the ", React.DOM.code(null, "locales"), " option and also set the ", React.DOM.code(null, "default"), " locale."
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-javascript"}, 
	                  "l20n.initializeLocales('app', {\n", 
	                  "  'locales': ['en-US'],\n", 
	                  "  'default': 'en-US'\n", 
	                  "}});\n"
	                )
	              )
	            ), 
	            React.DOM.p(null, 
	              "Store all your routes in ", React.DOM.code(null, "src/jsx/app/routes"), " folder and require them in main.jsx. An example route pointing to a blank page is show in the main.jsx file:"
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-javascript"}, 
	                  "/* APP PAGES */\n", 
	                  "var blank = require('./routes/app/blank.jsx');\n"
	                )
	              )
	            ), 
	            Alert({info: true}, 
	              "For routing we make use of the excellent ", AlertLink({href: "http://andreypopp.github.io/rrouter/", target: "_blank"}, "RRouter"), " library. Its advised that you go through the documentation for RRouter before reading this section"
	            ), 
	            React.DOM.p(null, 
	              "Now, we define routes to the blank page. You can also nest routes. Refer to the demo's main.jsx for a complex route nesting example. You can see from this snippet that we have referenced the variable to the blank page we required earlier."
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-javascript"}, 
	                  "/* ROUTES */\n", 
	                  "var routes = (\n", 
	                  "  <Routes>\n", 
	                  "    <Route name='root' path='/' view={blank} />\n", 
	                  "  </Routes>\n", 
	                  ");\n"
	                )
	              ), 
	              React.DOM.p(null, 
	                "Now we initialize our Router. We use Hash based routing to support IE9. The key points to note here is that before every page is rendered we perform a cleanup by removing any attached listeners while using Rubix charts. Pace preloader is restarted (this is optional and can be removed). If you're going to use Google Analytics to track your pages then we have also included a snippet that helps you do the same (this snippet is necessary as Google Analytics does not support pageview reporting on hash-based page navigation by default)."
	              ), 
	              React.DOM.p(null, 
	                "Mozilla L20n is activated only once the entire page is rendered. If you inspect the index.html file within your src/jsx/app folder you'll notice that we have added a fade-out class to the body element to add a nice fade effect on page load. This can also be removed."
	              ), 
	              React.DOM.p(null, 
	                "The page itself is rendered within the ", React.DOM.strong(null, "div#app-container"), " element."
	              ), 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-javascript"}, 
	                  "var InitializeRouter = function(View) {\n", 
	                  "  // cleanup\n", 
	                  "  if(window.Rubix) window.Rubix.Cleanup();\n", 
	                  "  Pace.restart();\n", 
	                  "  if(window.hasOwnProperty('ga') && typeof window.ga === 'function') {\n", 
	                  "    window.ga('send', 'pageview', {\n", 
	                  "     'page': window.location.pathname + window.location.search  + window.location.hash\n", 
	                  "    });\n", 
	                  "  }\n\n", 
	                  "  React.renderComponent(<View />, document.getElementById('app-container'), function() {\n", 
	                  "    // l20n initialized only after everything is rendered/updated\n", 
	                  "    l20n.ready();\n", 
	                  "    setTimeout(function() {\n", 
	                  "      $('body').removeClass('fade-out');\n", 
	                  "    }, 500);\n", 
	                  "  });\n", 
	                  "};\n\n", 
	                  "RRouter.routing = RRouter.HashRouting.start(routes, InitializeRouter);\n"
	                )
	              )
	            )
	          ), 
	          DocUnit({name: "Rubix Documentation: blank.jsx"}, 
	            React.DOM.p(null, 
	              "This is an example file and should serve as a starting point for creating various routes in your app. When you open the file you'll immediately notice that there are 3 files required:"
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-javascript"}, 
	                  "var Header = require('../../common/header.jsx');\n", 
	                  "var Sidebar = require('../../common/sidebar.jsx');\n", 
	                  "var Footer = require('../../common/footer.jsx');\n"
	                )
	              )
	            ), 
	            React.DOM.p(null, 
	              "The above 3 files (header.jsx, sidebar.jsx and footer.jsx) are stored in a ", React.DOM.strong(null, "common"), " folder for the app. All of the above files are optional and are only required if you want a full blown dashboard layout. For instance, when designing a homepage you wouldn't need any of the above files."
	            ), 
	            React.DOM.p(null, 
	              "Then we have a Body component which contains a Container#body component. All your main application code should be written within this component."
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "var Body = React.createClass({\n", 
	                  "  render: function() {\n", 
	                  "    return (\n", 
	                  "      <Container id='body'>\n", 
	                  "        {this.props.children}\n", 
	                  "      </Container>\n", 
	                  "    );\n", 
	                  "  }\n", 
	                  "});\n"
	                )
	              )
	            ), 
	            React.DOM.p(null, 
	              "Finally we have a Page component which renders the entire page. It contains a Container#container component which has Sidebar, Header, Body and Footer components."
	            ), 
	            React.DOM.p(null, 
	              "It is important to note that we also include a SidebarMixin which takes care of all the boilerplate code required to show/hide the sidebar on smaller viewport. The variable 'classes' stores the state of the Sidebar and is used for toggling the Sidebar."
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-javascript"}, 
	                  "var Page = React.createClass({\n", 
	                  "  mixins: [SidebarMixin],\n", 
	                  "  render: function() {\n", 
	                  "    var classes = React.addons.classSet({\n", 
	                  "      'container-open': this.state.open\n", 
	                  "    });\n", 
	                  "    return (\n", 
	                  "      <Container id='container' className={classes}>\n", 
	                  "        <Sidebar />\n", 
	                  "        <Header />\n", 
	                  "        <Body>\n", 
	                  "          <Footer />\n", 
	                  "        </Body>\n", 
	                  "      </Container>\n", 
	                  "    );\n", 
	                  "  }\n", 
	                  "});\n"
	                )
	              )
	            )
	          ), 
	          DocUnit({name: "Rubix Documentation: sidebar.jsx"}, 
	            React.DOM.p(null, 
	              "sidebar.jsx file contains the Sidebar section of the page. The sidebar section consits of a div#avatar container, SidebarControls component and the div#sidebar-container."
	            ), 
	            React.DOM.p(null, 
	              "The SidebarControls component is optional (if you're going to have only 1 sidebar) and can be removed. If you are going to be removing it, you need to also make a small change in ", React.DOM.strong(null, "src/global/sass/rubix/overrides/_variables.scss"), " by making sure the variable ", React.DOM.code(null, "$sidebar-controls-visibility"), " is set to ", React.DOM.code(null, "hidden"), ". If you don't want a global setting that affects all your projects you can add it to the top of your ", React.DOM.strong(null, "src/sass/app/main.scss"), " file which restricts the setting to the specific project."
	            ), 
	            React.DOM.p(null, 
	              "The keys passed to each SidebarControlBtn controls the relevant Sidebar component."
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-javascript"}, 
	                  "var SidebarSection = React.createClass({\n", 
	                  "  render: function() {\n", 
	                  "    return this.transferPropsTo(\n", 
	                  "      <div id='sidebar'>\n", 
	                  "        <div id='avatar'>\n", 
	                  "          ...\n", 
	                  "        </div>\n", 
	                  "        <SidebarControls>\n", 
	                  "          <SidebarControlBtn bundle='fontello' glyph='docs' key={0} />\n", 
	                  "        </SidebarControls>\n", 
	                  "        <div id='sidebar-container'>\n", 
	                  "          <Sidebar key={0} active>\n", 
	                  "            <ApplicationSidebar />\n", 
	                  "          </Sidebar>\n", 
	                  "        </div>\n", 
	                  "      </div>\n", 
	                  "    );\n", 
	                  "  }\n", 
	                  "});\n"
	                )
	              )
	            ), 
	            React.DOM.p(null, 
	              "Here is an example of a Sidebar navigation component defined in ApplicationSidebar component. You can nest multiple SidebarNav's to have multiple menu levels."
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<SidebarNav>\n", 
	                  "  <SidebarNavItem glyph='icon-fontello-gauge' name='Blank' href='/' />\n", 
	                  "  <SidebarNavItem glyph='icon-feather-mail' name={<span>Menu <BLabel className='bg-darkgreen45 fg-white'>3</BLabel></span>}>\n", 
	                  "    <SidebarNav>\n", 
	                  "      <SidebarNavItem glyph='icon-feather-inbox' name='Inbox' href='#' />\n", 
	                  "      <SidebarNavItem glyph='icon-outlined-mail-open' name='Mail' href='#' />\n", 
	                  "      <SidebarNavItem glyph='icon-dripicons-message' name='Compose' href='#' />\n", 
	                  "    </SidebarNav>\n", 
	                  "  </SidebarNavItem>\n", 
	                  "</SidebarNav>\n"
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
	var RubixDocs = React.createClass({displayName: 'RubixDocs',
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

	module.exports = RubixDocs;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */
	/** @jsx React.DOM */

	var Header = __webpack_require__(39);
	var Sidebar = __webpack_require__(40);
	var Footer = __webpack_require__(41);

	var Doc = __webpack_require__(38);
	var DocUnit = Doc.DocUnit;
	var DocContainer = Doc.DocContainer;

	var sasstreesnippet = __webpack_require__(45);

	var Body = React.createClass({displayName: 'Body',
	  componentDidMount: function() {
	    Prism.highlightAll();
	  },
	  render: function() {
	    return (
	      Container({id: "body"}, 
	        DocContainer(null, 
	          DocUnit({name: "Rubix Documentation"}, 
	            React.DOM.h4({className: "fg-black50"}, "File structure"), 
	            React.DOM.p(null, 
	              "Once you have everything setup (if you haven't go back to the ", Link({href: "/app/docs/installation"}, "Installation"), " page and finish the installation) you'll notice a file structure similar to this in your ", React.DOM.code(null, "src"), " folder:"
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  sasstreesnippet
	                )
	              )
	            )
	          ), 
	          DocUnit({name: "Rubix Documentation: colors.scss"}, 
	            React.DOM.p(null, 
	              "This file contains a list of color combinations that are provided by default along with Rubix. You can add/remove from this list. We have provided a handy mixin called ", React.DOM.code(null, "generateColors($name, $color, $hover-color)"), " that colors different components like lists, navs, buttons, menus, timeline etc."
	            ), 
	            React.DOM.p(null, 
	              "You can also override the forground color of any element by prefixing the color name with ", React.DOM.strong(null, "fg-"), " (ex: ", React.DOM.strong(null, "fg-deepred"), ") and background color by prefixing color name with ", React.DOM.strong(null, "bg-"), " (ex: ", React.DOM.strong(null, "bg-darkgreen45"), ")."
	            ), 
	            React.DOM.p(null, 
	              "Similary we have also provided classnames for borders and different states (like hover/focus/active etc). Please refer to the demo JSX files for usage of these different color combinations on various components. Certain components have a bsStyle property (ex: Button) which takes the color name directly and generates the appropriate classname behind the scenes. Also, please refer to the ", React.DOM.strong(null, "sass/app/theme/_colors.scss"), " file for the color mixin definition."
	            )
	          ), 
	          DocUnit({name: "Rubix Documentation: font-faces.scss"}, 
	            React.DOM.p(null, 
	              "This file contains a list of web icon fonts that come packaged with Rubix. You can add/remove fonts from this list. If you are going to add a new icon font make sure you add a font partial in ", React.DOM.strong(null, "src/sass/app/fonts"), ". Also make sure you have dropped a corresponding TTF file into the dropbox located at: ", React.DOM.strong(null, "public/fonts/dropbox/app")
	            ), 
	            React.DOM.p(null, 
	              "As an example lets take the case of Climacons font. The TTF file dropped into ", React.DOM.strong(null, "public/fonts/dropbox/app"), " is ", React.DOM.strong(null, "Climacons-Font.ttf"), ". The corresponding partial ", React.DOM.strong(null, "src/sass/app/fonts/_climacons.scss"), " contains a reference to this filename in the font-family:"
	            ), 
	            React.DOM.pre(null, 
	              React.DOM.code({className: "language-css"}, 
	                ".climacon:before{\n", 
	                "  font-family: 'Climacons-Font';\n", 
	                "  ...\n", 
	                "}\n"
	              )
	            ), 
	            React.DOM.p(null, 
	              "If you are using text web fonts like Lato/Open Sans there is no need to create a separate partial file and can directly reference it in your stylesheets after dropping the required TTF file into your project's font dropbox."
	            )
	          ), 
	          DocUnit({name: "Rubix Documentation: main.scss"}, 
	            React.DOM.p(null, 
	              "This file contains a list of all third party plugin styles which come packaged with Rubix that you can add/remove from. To provide page specfic styling please create partials in ", React.DOM.strong(null, "src/sass/app/pages"), " and require them in the ", React.DOM.strong(null, "src/sass/app/pages/_pages.scss"), " partial. Similarly include your print styles in the print partial located at ", React.DOM.strong(null, "src/sass/app/print/_print.scss")
	            )
	          ), 
	          DocUnit({name: "Rubix Documentation: theme.scss"}, 
	            React.DOM.p(null, 
	              "This file a mixin called ", React.DOM.code(null, "theme-maker($name, $list)"), " which takes two parameters: a name and a list of default settings. This mixin includes another mixin called ", React.DOM.code(null, "theme-mixin($name, $list)"), ". The theme-maker mixin is used to for creating individual themes with its own styles while theme-mixin is used for setting global property values for styles across themes. As is evident in the file we have provided 6 different themes with a base color: default (orange), green, blue, purple, brown and cyan. You can remove themes that you don't like and add the ones you do. You can even modify the themes to whatever color combination you desire."
	            )
	          )
	        ), 
	        this.props.children
	      )
	    );
	  }
	});

	var classSet = React.addons.classSet;
	var RubixSassDocs = React.createClass({displayName: 'RubixSassDocs',
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

	module.exports = RubixSassDocs;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */
	/** @jsx React.DOM */

	var Header = __webpack_require__(39);
	var Sidebar = __webpack_require__(40);
	var Footer = __webpack_require__(41);

	var Doc = __webpack_require__(38);
	var DocUnit = Doc.DocUnit;
	var DocContainer = Doc.DocContainer;

	var sasstreesnippet = __webpack_require__(45);

	var Body = React.createClass({displayName: 'Body',
	  componentDidMount: function() {
	    Prism.highlightAll();
	  },
	  render: function() {
	    return (
	      Container({id: "body"}, 
	        DocContainer(null, 
	          DocUnit({name: "Rubix Documentation: L20n"}, 
	            Alert({info: true}, 
	              "Mozilla L20n is a new localization framework developed by Mozilla for the Web. It allows localizers to put small bits of logic into localization resources to codify the grammar of the language. If you are unfamiliar with Mozilla's awesome framework we suggest you go through the learning material provided here: ", AlertLink({href: "http://l20n.org/learn/", target: "_blank"}, "L20n By Example")
	            ), 
	            React.DOM.div(null, 
	              "Of all the concepts there are three main concepts that are required to be understood by developers using L20n:", 
	              React.DOM.ul(null, 
	                React.DOM.li(null, React.DOM.strong(null, "Entity: "), "Entities are containers for information. You use entities to identify, store, and recall information to be used in the software's UI."), 
	                React.DOM.li(null, React.DOM.strong(null, "Context: "), "Each context stores information about languages available to it, downloaded resource files and all entities in these resource files. Software developers can create contexts and query them for values of specific entities."), 
	                React.DOM.li(null, React.DOM.strong(null, "Context data: "), "Context data is how entities defined in L20n resources can interact with non-localizable variables provided by the developer. Context data is generally unknown at the time of writing the L20n code. By assigning values to it, the developer makes it known at runtime.")
	              )
	            ), 
	            React.DOM.p(null, 
	              "To use L20n you need to get localizers to write language specific files following the conventions set by the L20n framework. These files (should be named strings.l20n) should then be stored in the ", React.DOM.strong(null, "public/locales/app"), " folder with names reflecting language codes (preferably ISO 639-1 format). We have also provided a handy flags icon set (courtesy ", React.DOM.a({href: "http://gosquared.com", target: "_blank"}, "GoSquared"), ") for your use. You can use currenly only use 1 file per language and should follow this format: ", React.DOM.strong(null, "public/locales/app/<two-letter-lang-code>/strings.l20n"), ". If in doubt, refer to the file structure in ", React.DOM.strong(null, "public/locales/demo"), "."
	            ), 
	            React.DOM.p(null, 
	              "The markup for invoking L20n entities is as follows:"
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<Entity entity='some-entity-here' data={{a: 'some context data', b: 'some other context data'}} />\n"
	                )
	              )
	            ), 
	            React.DOM.p(null, 
	              "The Entity component defined above requires you to have 'entity' property defined alongwith an optional 'data' property. React takes care of keeping the rendered data in sync and the resultant output is actually a span element (so it can be used within Buttons or any other block element without compromising the interface)."
	            )
	          )
	        ), 
	        this.props.children
	      )
	    );
	  }
	});

	var classSet = React.addons.classSet;
	var L20nDocs = React.createClass({displayName: 'L20nDocs',
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

	module.exports = L20nDocs;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(39);
	var Sidebar = __webpack_require__(40);
	var Footer = __webpack_require__(41);

	var gridbasic = __webpack_require__(46);
	var gridsnippet = __webpack_require__(47);
	var gridfixedwidth = __webpack_require__(48);
	var gridzeropadding = __webpack_require__(49);
	var gridgutter = __webpack_require__(50);
	var griddir = __webpack_require__(51);
	var gridnest = __webpack_require__(52);
	var rowsyntax = __webpack_require__(53);
	var colsyntax = __webpack_require__(54);
	var colclearfix = __webpack_require__(55);
	var colhiddenvisible = __webpack_require__(56);
	var coloffsets = __webpack_require__(57);
	var colpushpull = __webpack_require__(58);
	var colcollapse = __webpack_require__(59);

	var Doc = __webpack_require__(38);
	var DocUnit = Doc.DocUnit;
	var DocContainer = Doc.DocContainer;

	var Body = React.createClass({displayName: 'Body',
	  componentDidMount: function() {
	    Prism.highlightAll();
	  },
	  render: function() {
	    return (
	      Container({id: "body"}, 
	        DocContainer(null, 
	          DocUnit({name: "Bootstrap: Grid"}, 
	            React.DOM.h4({className: "fg-black50"}, "Basic Syntax:"), 
	            React.DOM.p(null, 
	              "Bootstrap includes a responsive, mobile first fluid grid system that appropriately scales up to 12 columns as the device or viewport size increases. Rubix leverages the power of React to write composable, semantic components. By default the Grid is fluid but you'll soon see that you can pass different options to control the look and feel of your Grid. The basic syntax of a Grid in JSX is:"
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  gridbasic
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Fixed:"), 
	            React.DOM.p(null, 
	              "If you need a fixed width Grid it would be:"
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  gridfixedwidth
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Zero padding:"), 
	            React.DOM.p(null, 
	              "If you need a Grid with zero padding (even the rows and columns inside it will inherit that padding) it would be:"
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  gridzeropadding
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Gutter:"), 
	            React.DOM.p(null, 
	              "If you need to add a gutter to your Grid it would be:"
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  gridgutter
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Gutter top/left/right/bottom:"), 
	            React.DOM.p(null, 
	              "You can also control where you want your gutter by including directionality constraints to your Grid:"
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  griddir
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.p(null, 
	              "You can of course nest grids (we'll be covering Cols and Rows soon! Don't worry :) )", ":"
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  gridnest
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.p(null, 
	              "You can of course mix the above options depending on your layout. We also fix a special z-index bug in iOS and Safari by including a z-index for every Grid you create so that dropdowns are not affected by it."
	            ), 
	            React.DOM.br(null)
	          ), 
	          DocUnit({name: "Bootstrap: Rows"}, 
	            React.DOM.h4({className: "fg-black50"}, "Basic Syntax:"), 
	            React.DOM.p(null, 
	              "Rows in a Grid are used to create horizontal groups of Columns. To create a Row the syntax is:"
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  rowsyntax
	                )
	              )
	            )
	          ), 
	          DocUnit({name: "Bootstrap: Columns"}, 
	            React.DOM.h4({className: "fg-black50"}, "Basic Syntax:"), 
	            React.DOM.p(null, 
	              "Columns in a Grid are containers that house your content. These columns create gutters via padding. The basic syntax to create a column is:"
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  colsyntax
	                )
	              )
	            ), 
	            React.DOM.p(null, 
	              "xs, sm, md and lg options are defined breakpoints which alters the layout depending on the type of device you are viewing the site on."
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Clearfix:"), 
	            React.DOM.p(null, 
	              "Clear the columns if their content doesn't match in height:"
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  colclearfix
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Hidden/Visible:"), 
	            React.DOM.p(null, 
	              "Pass a delimited list of options to hidden and visible properties:"
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  colhiddenvisible
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Offsets:"), 
	            React.DOM.p(null, 
	              "Move columns to the right using offsets. Example:"
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  coloffsets
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Push/Pull:"), 
	            React.DOM.p(null, 
	              "Easily change the order of the built-in grid columns with Push and Pull properties. Example:"
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  colpushpull
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Collapse:"), 
	            React.DOM.p(null, 
	              "Collapse paddings on your Columns. Example:"
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  colcollapse
	                )
	              )
	            )
	          ), 
	          DocUnit({name: "Bootstrap: Grid Example"}, 
	            React.DOM.p(null, "Here is an example of a bootstrap grid:"), 
	            React.DOM.div({style: {marginLeft: -25, marginRight: -25}}, 
	              Grid(null, 
	                Row(null, 
	                  Col({sm: 6, md: 6, lg: 6, xsOnlyGutterBottom: true, smCollapseRight: true}, 
	                    Well({noMargin: true}, "Col(lg:6)")
	                  ), 
	                  Col({sm: 6, md: 6, lg: 6}, 
	                    Well({noMargin: true}, "Col(lg:6)")
	                  )
	                )
	              ), 
	              Grid({gutterTop: true}, 
	                Row(null, 
	                  Col({sm: 4, md: 4, lg: 4, xsOnlyGutterBottom: true, smCollapseRight: true}, 
	                    Well({noMargin: true}, "Col(lg:4)")
	                  ), 
	                  Col({sm: 4, md: 4, lg: 4, xsOnlyGutterBottom: true, smCollapseRight: true}, 
	                    Well({noMargin: true}, "Col(lg:4)")
	                  ), 
	                  Col({sm: 4, md: 4, lg: 4}, 
	                    Well({noMargin: true}, "Col(lg:4)")
	                  )
	                )
	              ), 
	              Grid({gutterTop: true}, 
	                Row(null, 
	                  Col({sm: 3, md: 3, lg: 3, xsOnlyGutterBottom: true, smCollapseRight: true}, 
	                    Well({noMargin: true}, "Col(lg:3)")
	                  ), 
	                  Col({sm: 3, md: 3, lg: 3, xsOnlyGutterBottom: true, smCollapseRight: true}, 
	                    Well({noMargin: true}, "Col(lg:3)")
	                  ), 
	                  Col({sm: 6, md: 6, lg: 6}, 
	                    Well({noMargin: true}, "Col(lg:6)")
	                  )
	                )
	              ), 
	              Grid({gutterTop: true, gutterBottom: true}, 
	                Row(null, 
	                  Col({md: 2, lg: 2, xsOnlyGutterBottom: true, smOnlyGutterBottom: true, mdCollapseRight: true}, 
	                    Well({noMargin: true}, "Col(lg:2)")
	                  ), 
	                  Col({md: 4, lg: 4, xsOnlyGutterBottom: true, smOnlyGutterBottom: true, mdCollapseRight: true}, 
	                    Well({noMargin: true}, "Col(lg:4)")
	                  ), 
	                  Col({md: 6, lg: 6}, 
	                    Well({noMargin: true}, "Col(lg:6)")
	                  )
	                )
	              )
	            ), 
	            React.DOM.p(null, 
	              React.DOM.strong(null, "The code for the above grid:")
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  gridsnippet
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
	var BootstrapDocs = React.createClass({displayName: 'BootstrapDocs',
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

	module.exports = BootstrapDocs;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(39);
	var Sidebar = __webpack_require__(40);
	var Footer = __webpack_require__(41);

	var Doc = __webpack_require__(38);
	var DocUnit = Doc.DocUnit;
	var DocContainer = Doc.DocContainer;

	var Body = React.createClass({displayName: 'Body',
	  componentDidMount: function() {
	    Prism.highlightAll();
	  },
	  render: function() {
	    return (
	      Container({id: "body"}, 
	        DocContainer(null, 
	          DocUnit({name: "Bootstrap: Headings"}, 
	            React.DOM.p(null, 
	              "All HTML headings, ", React.DOM.code(null, "<h1>"), " through ", React.DOM.code(null, "<h6>"), ", are available. ", React.DOM.code(null, ".h1"), " through ", React.DOM.code(null, ".h6"), " classes are also available, for when you want to match the font styling of a heading but still want your text to be displayed inline."
	            ), 
	            Well(null, 
	              React.DOM.h1(null, "h1. Bootstrap heading ", React.DOM.small(null, "Secondary text")), React.DOM.hr(null), 
	              React.DOM.h2(null, "h2. Bootstrap heading ", React.DOM.small(null, "Secondary text")), React.DOM.hr(null), 
	              React.DOM.h3(null, "h3. Bootstrap heading ", React.DOM.small(null, "Secondary text")), React.DOM.hr(null), 
	              React.DOM.h4(null, "h4. Bootstrap heading ", React.DOM.small(null, "Secondary text")), React.DOM.hr(null), 
	              React.DOM.h5(null, "h5. Bootstrap heading ", React.DOM.small(null, "Secondary text")), React.DOM.hr(null), 
	              React.DOM.h6(null, "h6. Bootstrap heading ", React.DOM.small(null, "Secondary text"))
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<h1>h1. Bootstrap heading <small>Secondary text</small></h1>\n", 
	                  "<h2>h2. Bootstrap heading <small>Secondary text</small></h2>\n", 
	                  "<h3>h3. Bootstrap heading <small>Secondary text</small></h3>\n", 
	                  "<h4>h4. Bootstrap heading <small>Secondary text</small></h4>\n", 
	                  "<h5>h5. Bootstrap heading <small>Secondary text</small></h5>\n", 
	                  "<h6>h6. Bootstrap heading <small>Secondary text</small></h6>\n"
	                )
	              )
	            )
	          ), 
	          DocUnit({name: "Bootstrap: Body Copy"}, 
	            React.DOM.p(null, 
	              "A sample of default body copy. Note the handy lorem ipsum generator :)"
	            ), 
	            Well(null, 
	              React.DOM.p(null, 
	                LoremIpsum({query: "2s"})
	              ), 
	              React.DOM.p(null, 
	                LoremIpsum({query: "3s"})
	              ), 
	              React.DOM.p(null, 
	                LoremIpsum({query: "2s"})
	              )
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<p>\n", 
	                  "  <LoremIpsum query='2s' />\n", 
	                  "</p>\n", 
	                  "<p>\n", 
	                  "  <LoremIpsum query='3s' />\n", 
	                  "</p>\n", 
	                  "<p>\n", 
	                  "  <LoremIpsum query='2s' />\n", 
	                  "</p>\n"
	                )
	              )
	            )
	          ), 
	          DocUnit({name: "Bootstrap: Lead Body Copy"}, 
	            React.DOM.p(null, 
	              "Make a paragraph stand out by using the Lead component."
	            ), 
	            Well(null, 
	              Lead(null, 
	                LoremIpsum({query: "2s"})
	              )
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<Lead>\n", 
	                  "  <LoremIpsum query='2s' />\n", 
	                  "</Lead>\n"
	                )
	              )
	            )
	          ), 
	          DocUnit({name: "Bootstrap: Inline text elements"}, 
	            React.DOM.h4({className: "fg-black50"}, "Marked text"), 
	            React.DOM.p(null, 
	              "For highlighting a run of text due to its relevance in another context, use the ", React.DOM.code(null, "<mark>"), " tag."
	            ), 
	            Well(null, 
	              "You can use the mark tag to ", React.DOM.mark(null, "highlight"), " text."
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "You can use the mark tag to <mark>highlight</mark> text.\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Deleted text"), 
	            React.DOM.p(null, 
	              "For indicating blocks of text that have been deleted use the ", React.DOM.code(null, "<del>"), " tag."
	            ), 
	            Well(null, 
	              React.DOM.del(null, "This line of text is meant to be treated as deleted text.")
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<del>This line of text is meant to be treated as deleted text.</del>\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Strikethrough text"), 
	            React.DOM.p(null, 
	              "For indicating blocks of text that are no longer relevant use the ", React.DOM.code(null, "<s>"), " tag."
	            ), 
	            Well(null, 
	              React.DOM.s(null, "This line of text is meant to be treated as no longer accurate.")
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<s>This line of text is meant to be treated as no longer accurate.</s>\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Inserted text"), 
	            React.DOM.p(null, 
	              "For indicating additions to the document use the ", React.DOM.code(null, "<ins>"), " tag."
	            ), 
	            Well(null, 
	              React.DOM.ins(null, "This line of text is meant to be treated as an addition to the document.")
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<ins>This line of text is meant to be treated as an addition to the document.</ins>\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Underlined text"), 
	            React.DOM.p(null, 
	              "To underline text use the ", React.DOM.code(null, "<u>"), " tag."
	            ), 
	            Well(null, 
	              React.DOM.u(null, "This line of text will render as underlined")
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<u>This line of text will render as underlined</u>\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Small text"), 
	            React.DOM.p(null, 
	              "For de-emphasizing inline or blocks of text, use the ", React.DOM.code(null, "<small>"), " tag to set text at 85% the size of the parent. Heading elements receive their own font-size for nested ", React.DOM.code(null, "<small>"), " elements."
	            ), 
	            React.DOM.p(null, 
	              "You may alternatively use an inline element with ", React.DOM.code(null, ".small"), " in place of any ", React.DOM.code(null, "<small>"), "."
	            ), 
	            Well(null, 
	              React.DOM.small(null, "This line of text is meant to be treated as fine print.")
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<small>This line of text is meant to be treated as fine print.</small>\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Bold text"), 
	            React.DOM.p(null, 
	              "For emphasizing a snippet of text with a heavier font-weight."
	            ), 
	            Well(null, 
	              "The following snippet of text is ", React.DOM.strong(null, "rendered as bold text"), "."
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "The following snippet of text is <strong>rendered as bold text</strong>.\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Italics"), 
	            React.DOM.p(null, 
	              "For emphasizing a snippet of text with italics."
	            ), 
	            Well(null, 
	              "The following snippet of text is ", React.DOM.em(null, "rendered as italicized text"), "."
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "The following snippet of text is <em>rendered as italicized text</em>.\n"
	                )
	              )
	            )
	          ), 
	          DocUnit({name: "Bootstrap: Alignment classes"}, 
	            React.DOM.p(null, 
	              "Easily realign text to components with text alignment classes. NOTE: React uses className instead of class."
	            ), 
	            Well(null, 
	              React.DOM.p({className: "text-left"}, "Left aligned text."), 
	              React.DOM.p({className: "text-center"}, "Center aligned text."), 
	              React.DOM.p({className: "text-right"}, "Right aligned text."), 
	              React.DOM.p({className: "text-justify"}, "Justified text."), 
	              React.DOM.p({className: "text-nowrap"}, "No wrap text.")
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<p className='text-left'>Left aligned text.</p>\n", 
	                  "<p className='text-center'>Center aligned text.</p>\n", 
	                  "<p className='text-right'>Right aligned text.</p>\n", 
	                  "<p className='text-justify'>Justified text.</p>\n", 
	                  "<p className='text-nowrap'>No wrap text.</p>\n"
	                )
	              )
	            )
	          ), 
	          DocUnit({name: "Bootstrap: Transformation classes"}, 
	            React.DOM.p(null, 
	              "Transform text in components with text capitalization classes. NOTE: React uses className instead of class."
	            ), 
	            Well(null, 
	              React.DOM.p({className: "text-lowercase"}, "Lowercased text."), 
	              React.DOM.p({className: "text-uppercase"}, "Uppercased text."), 
	              React.DOM.p({className: "text-capitalize"}, "capitalized text.")
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<p className='text-lowercase'>Lowercased text.</p>\n", 
	                  "<p className='text-uppercase'>Uppercased text.</p>\n", 
	                  "<p className='text-capitalize'>capitalized text.</p>\n"
	                )
	              )
	            )
	          ), 
	          DocUnit({name: "Bootstrap: Abbreviations"}, 
	            React.DOM.p(null, 
	              "Stylized implementation of HTML's ", React.DOM.code(null, "<abbr>"), " element for abbreviations and acronyms to show the expanded version on hover."
	            ), 
	            Well(null, 
	              "An abbreviation of the word attribute is ", React.DOM.abbr({title: "attribute"}, "attr"), "."
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<abbr title='attribute'>attr</abbr>\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Initialism"), 
	            React.DOM.p(null, 
	              "Add ", React.DOM.code(null, ".initialism"), " to an abbreviation for a slightly smaller font-size."
	            ), 
	            Well(null, 
	              React.DOM.abbr({title: "HyperText Markup Language", className: "initialism"}, "HTML"), " is the best thing since sliced bread."
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<abbr title='HyperText Markup Language' className='initialism'>HTML</abbr>\n"
	                )
	              )
	            )
	          ), 
	          DocUnit({name: "Bootstrap: Addresses"}, 
	            React.DOM.p(null, 
	              "Present contact information for the nearest ancestor or the entire body of work. Preserve formatting by ending all lines with ", React.DOM.code(null, "<br/>"), "."
	            ), 
	            Well(null, 
	              React.DOM.address(null, 
	                React.DOM.strong(null, "Twitter, Inc."), React.DOM.br(null), 
	                "795 Folsom Ave, Suite 600", React.DOM.br(null), 
	                "San Francisco, CA 94107", React.DOM.br(null), 
	                React.DOM.abbr({title: "Phone"}, "P:"), " (123) 456-7890"
	              ), 

	              React.DOM.address(null, 
	                React.DOM.strong(null, "Full Name"), React.DOM.br(null), 
	                React.DOM.a({href: "mailto:support@sketchpixy.com"}, "support@sketchpixy.com")
	              )
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<address>\n", 
	                  "  <strong>Twitter, Inc.</strong><br/>\n", 
	                  "  795 Folsom Ave, Suite 600<br/>\n", 
	                  "  San Francisco, CA 94107<br/>\n", 
	                  "  <abbr title='Phone'>P:</abbr> (123) 456-7890\n", 
	                  "</address>\n", 

	                  "<address>\n", 
	                  "  <strong>Full Name</strong><br/>\n", 
	                  "  <a href='mailto:support@sketchpixy.com'>support@sketchpixy.com</a>\n", 
	                  "</address>\n"
	                )
	              )
	            )
	          ), 
	          DocUnit({name: "Bootstrap: Blockquotes"}, 
	            React.DOM.h4({className: "fg-black50"}, "Default blockquote"), 
	            React.DOM.p(null, 
	              "Wrap ", React.DOM.code(null, "<blockquote>"), " around any HTML as the quote. For straight quotes, we recommend a ", React.DOM.code(null, "<br/>"), "."
	            ), 
	            Well(null, 
	              React.DOM.blockquote(null, 
	                React.DOM.p(null, LoremIpsum({query: "1s"}))
	              )
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<blockquote>\n", 
	                  "  <p><LoremIpsum query='1s' /></p> \n", 
	                  "</blockquote>\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Naming a source"), 
	            React.DOM.p(null, 
	              "Add a ", React.DOM.code(null, "<footer>"), " for identifying the source. Wrap the name of the source work in ", React.DOM.code(null, "<cite>"), "."
	            ), 
	            Well(null, 
	              React.DOM.blockquote(null, 
	                React.DOM.p(null, LoremIpsum({query: "1s"})), 
	                React.DOM.footer(null, "Someone famous in ", React.DOM.cite({title: "Source Title"}, "Source Title"))
	              )
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<blockquote>\n", 
	                  "  <p><LoremIpsum query='1s' /></p> \n", 
	                  "  <footer>Someone famous in <cite title='Source Title'>Source Title</cite></footer>\n", 
	                  "</blockquote>\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Alternate displays"), 
	            React.DOM.p(null, 
	              "Add ", React.DOM.code(null, ".blockquote-reverse"), " for a blockquote with right-aligned content. NOTE: React uses className instead of the class property."
	            ), 
	            Well(null, 
	              React.DOM.blockquote({className: "blockquote-reverse"}, 
	                React.DOM.p(null, LoremIpsum({query: "1s"})), 
	                React.DOM.footer(null, "Someone famous in ", React.DOM.cite({title: "Source Title"}, "Source Title"))
	              )
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<blockquote className='blockquote-reverse'>\n", 
	                  "  <p><LoremIpsum query='1s' /></p> \n", 
	                  "  <footer>Someone famous in <cite title='Source Title'>Source Title</cite></footer>\n", 
	                  "</blockquote>\n"
	                )
	              )
	            )
	          ), 
	          DocUnit({name: "Bootstrap: Lists"}, 
	            React.DOM.h4({className: "fg-black50"}, "Unordered"), 
	            React.DOM.p(null, 
	              "A list of items in which the order does not explicitly matter."
	            ), 
	            Well(null, 
	              React.DOM.ul(null, 
	                React.DOM.li(null, LoremIpsum({query: "1s"})), 
	                React.DOM.li(null, LoremIpsum({query: "1s"})), 
	                React.DOM.li(null, LoremIpsum({query: "1s"})), 
	                React.DOM.li(null, LoremIpsum({query: "1s"})), 
	                React.DOM.li(null, 
	                  LoremIpsum({query: "1s"}), 
	                  React.DOM.ul(null, 
	                    React.DOM.li(null, LoremIpsum({query: "1s"})), 
	                    React.DOM.li(null, LoremIpsum({query: "1s"})), 
	                    React.DOM.li(null, LoremIpsum({query: "1s"})), 
	                    React.DOM.li(null, LoremIpsum({query: "1s"}))
	                  )
	                ), 
	                React.DOM.li(null, LoremIpsum({query: "1s"})), 
	                React.DOM.li(null, LoremIpsum({query: "1s"})), 
	                React.DOM.li(null, LoremIpsum({query: "1s"}))
	              )
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<ul>\n", 
	                  "  <li><LoremIpsum query='1s' /></li>\n", 
	                  "  <li><LoremIpsum query='1s' /></li>\n", 
	                  "  <li><LoremIpsum query='1s' /></li>\n", 
	                  "  <li><LoremIpsum query='1s' /></li>\n", 
	                  "  <li>\n", 
	                  "    <LoremIpsum query='1s' />\n", 
	                  "    <ul>\n", 
	                  "      <li><LoremIpsum query='1s' /></li>\n", 
	                  "      <li><LoremIpsum query='1s' /></li>\n", 
	                  "      <li><LoremIpsum query='1s' /></li>\n", 
	                  "      <li><LoremIpsum query='1s' /></li>\n", 
	                  "    </ul>\n", 
	                  "  </li>\n", 
	                  "  <li><LoremIpsum query='1s' /></li>\n", 
	                  "  <li><LoremIpsum query='1s' /></li>\n", 
	                  "  <li><LoremIpsum query='1s' /></li>\n", 
	                  "</ul>\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Ordered"), 
	            React.DOM.p(null, 
	              "A list of items in which the order does explicitly matter."
	            ), 
	            Well(null, 
	              React.DOM.ol(null, 
	                React.DOM.li(null, LoremIpsum({query: "1s"})), 
	                React.DOM.li(null, LoremIpsum({query: "1s"})), 
	                React.DOM.li(null, LoremIpsum({query: "1s"})), 
	                React.DOM.li(null, LoremIpsum({query: "1s"})), 
	                React.DOM.li(null, LoremIpsum({query: "1s"})), 
	                React.DOM.li(null, LoremIpsum({query: "1s"})), 
	                React.DOM.li(null, LoremIpsum({query: "1s"})), 
	                React.DOM.li(null, LoremIpsum({query: "1s"}))
	              )
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<ol>\n", 
	                  "  <li><LoremIpsum query='1s' /></li>\n", 
	                  "  <li><LoremIpsum query='1s' /></li>\n", 
	                  "  <li><LoremIpsum query='1s' /></li>\n", 
	                  "  <li><LoremIpsum query='1s' /></li>\n", 
	                  "  <li><LoremIpsum query='1s' /></li>\n", 
	                  "  <li><LoremIpsum query='1s' /></li>\n", 
	                  "  <li><LoremIpsum query='1s' /></li>\n", 
	                  "  <li><LoremIpsum query='1s' /></li>\n", 
	                  "</ol>\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Unstyled"), 
	            React.DOM.p(null, 
	              "Remove the default list-style and left margin on list items (immediate children only). This only applies to immediate children list items, meaning you will need to add the class for any nested lists as well."
	            ), 
	            Well(null, 
	              React.DOM.ul({className: "list-unstyled"}, 
	                React.DOM.li(null, LoremIpsum({query: "1s"})), 
	                React.DOM.li(null, LoremIpsum({query: "1s"})), 
	                React.DOM.li(null, LoremIpsum({query: "1s"})), 
	                React.DOM.li(null, LoremIpsum({query: "1s"})), 
	                React.DOM.li(null, 
	                  LoremIpsum({query: "1s"}), 
	                  React.DOM.ul(null, 
	                    React.DOM.li(null, LoremIpsum({query: "1s"})), 
	                    React.DOM.li(null, LoremIpsum({query: "1s"})), 
	                    React.DOM.li(null, LoremIpsum({query: "1s"})), 
	                    React.DOM.li(null, LoremIpsum({query: "1s"}))
	                  )
	                ), 
	                React.DOM.li(null, LoremIpsum({query: "1s"})), 
	                React.DOM.li(null, LoremIpsum({query: "1s"})), 
	                React.DOM.li(null, LoremIpsum({query: "1s"}))
	              )
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<ul className='list-unstyled'>\n", 
	                  "  <li><LoremIpsum query='1s' /></li>\n", 
	                  "  <li><LoremIpsum query='1s' /></li>\n", 
	                  "  <li><LoremIpsum query='1s' /></li>\n", 
	                  "  <li><LoremIpsum query='1s' /></li>\n", 
	                  "  <li>\n", 
	                  "    <LoremIpsum query='1s' />\n", 
	                  "    <ul>\n", 
	                  "      <li><LoremIpsum query='1s' /></li>\n", 
	                  "      <li><LoremIpsum query='1s' /></li>\n", 
	                  "      <li><LoremIpsum query='1s' /></li>\n", 
	                  "      <li><LoremIpsum query='1s' /></li>\n", 
	                  "    </ul>\n", 
	                  "  </li>\n", 
	                  "  <li><LoremIpsum query='1s' /></li>\n", 
	                  "  <li><LoremIpsum query='1s' /></li>\n", 
	                  "  <li><LoremIpsum query='1s' /></li>\n", 
	                  "</ul>\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Inline"), 
	            React.DOM.p(null, 
	              "Place all list items on a single line with display: inline-block; and some light padding."
	            ), 
	            Well(null, 
	              React.DOM.ul({className: "list-inline"}, 
	                React.DOM.li(null, LoremIpsum({query: "2w"})), 
	                React.DOM.li(null, LoremIpsum({query: "2w"})), 
	                React.DOM.li(null, LoremIpsum({query: "2w"}))
	              )
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<ul className='list-inline'>\n", 
	                  "  <li><LoremIpsum query='2w' /></li>\n", 
	                  "  <li><LoremIpsum query='2w' /></li>\n", 
	                  "  <li><LoremIpsum query='2w' /></li>\n", 
	                  "</ul>\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Description"), 
	            React.DOM.p(null, 
	              "A list of terms with their associated descriptions."
	            ), 
	            Well(null, 
	              React.DOM.dl(null, 
	                React.DOM.dt(null, "Description lists"), 
	                React.DOM.dd(null, "A description list is perfect for defining terms."), 
	                React.DOM.dt(null, "Euismod"), 
	                React.DOM.dd(null, "Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit."), 
	                React.DOM.dd(null, "Donec id elit non mi porta gravida at eget metus."), 
	                React.DOM.dt(null, "Malesuada porta"), 
	                React.DOM.dd(null, "Etiam porta sem malesuada magna mollis euismod.")
	              )
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<dl>\n", 
	                  "  <dt>Description lists</dt>\n", 
	                  "  <dd>A description list is perfect for defining terms.</dd>\n", 
	                  "  <dt>Euismod</dt>\n", 
	                  "  <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>\n", 
	                  "  <dd>Donec id elit non mi porta gravida at eget metus.</dd>\n", 
	                  "  <dt>Malesuada porta</dt>\n", 
	                  "  <dd>Etiam porta sem malesuada magna mollis euismod.</dd>\n", 
	                  "</dl>\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Horizontal description"), 
	            React.DOM.p(null, 
	              "Make terms and descriptions in <dl> line up side-by-side. Starts off stacked like default <dl>s, but when the navbar expands, so do these."
	            ), 
	            Well(null, 
	              React.DOM.dl({className: "dl-horizontal"}, 
	                React.DOM.dt(null, "Description lists"), 
	                React.DOM.dd(null, "A description list is perfect for defining terms."), 
	                React.DOM.dt(null, "Euismod"), 
	                React.DOM.dd(null, "Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit."), 
	                React.DOM.dd(null, "Donec id elit non mi porta gravida at eget metus."), 
	                React.DOM.dt(null, "Malesuada porta"), 
	                React.DOM.dd(null, "Etiam porta sem malesuada magna mollis euismod."), 
	                React.DOM.dt(null, "Felis euismod semper eget lacinia"), 
	                React.DOM.dd(null, "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.")
	              )
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<dl className='dl-horizontal'>\n", 
	                  "  <dt>Description lists</dt>\n", 
	                  "  <dd>A description list is perfect for defining terms.</dd>\n", 
	                  "  <dt>Euismod</dt>\n", 
	                  "  <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>\n", 
	                  "  <dd>Donec id elit non mi porta gravida at eget metus.</dd>\n", 
	                  "  <dt>Malesuada porta</dt>\n", 
	                  "  <dd>Etiam porta sem malesuada magna mollis euismod.</dd>\n", 
	                  "  <dt>Felis euismod semper eget lacinia</dt>\n", 
	                  "  <dd>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>\n", 
	                  "</dl>\n"
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
	var Typography = React.createClass({displayName: 'Typography',
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

	module.exports = Typography;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(39);
	var Sidebar = __webpack_require__(40);
	var Footer = __webpack_require__(41);

	var Doc = __webpack_require__(38);
	var DocUnit = Doc.DocUnit;
	var DocContainer = Doc.DocContainer;

	var Body = React.createClass({displayName: 'Body',
	  componentDidMount: function() {
	    Prism.highlightAll();
	  },
	  render: function() {
	    return (
	      Container({id: "body"}, 
	        DocContainer(null, 
	          DocUnit({name: "Bootstrap: Code"}, 
	            React.DOM.h4({className: "fg-black50"}, "Inline"), 
	            React.DOM.p(null, 
	              "Wrap inline snippets of code with <code>."
	            ), 
	            Well(null, 
	              "For example, ", React.DOM.code(null, "<section>"), " should be wrapped as inline."
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  'For example, <code>{"<section>"}</code> should be wrapped as inline.\n'
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "User input"), 
	            React.DOM.p(null, 
	              "Use the <kbd> to indicate input that is typically entered via keyboard."
	            ), 
	            Well(null, 
	              React.DOM.div(null, "To switch directories, type ", React.DOM.kbd(null, "cd"), " followed by the name of the directory."), 
	              React.DOM.div(null, "To edit settings, press ", React.DOM.kbd(null, "ctrl + ,"))
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<div>To switch directories, type <kbd>cd</kbd> followed by the name of the directory.</div>\n", 
	                  "<div>To edit settings, press <kbd>ctrl + ,</kbd></div>\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Basic block"), 
	            React.DOM.p(null, 
	              "Use <pre> for multiple lines of code. Be sure to escape any angle brackets in the code for proper rendering."
	            ), 
	            Well(null, 
	              React.DOM.pre(null, "<p>Sample text here...</p>")
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  '<pre>{"<p>Sample text here...</p>"}</pre>\n'
	                )
	              )
	            ), 
	            React.DOM.p(null, 
	              "You may optionally add the .pre-scrollable class, ", 
	              "which will set a max-height of 350px and provide a y-axis scrollbar."
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Variables"), 
	            React.DOM.p(null, 
	              "For indicating variables use the <var> tag."
	            ), 
	            Well(null, 
	              React.DOM.var(null, "y"), " = ", React.DOM.var(null, "m"), React.DOM.var(null, "x"), " + ", React.DOM.var(null, "b")
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<var>y</var> = <var>m</var><var>x</var> + <var>b</var>"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Sample output"), 
	            React.DOM.p(null, 
	              "For indicating blocks sample output from a program use the <samp> tag."
	            ), 
	            Well(null, 
	              React.DOM.samp(null, "This text is meant to be treated as sample output from a computer program.")
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<samp>This text is meant to be treated as sample output from a computer program.</samp>"
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
	var Code = React.createClass({displayName: 'Code',
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

	module.exports = Code;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(39);
	var Sidebar = __webpack_require__(40);
	var Footer = __webpack_require__(41);

	var Doc = __webpack_require__(38);
	var DocUnit = Doc.DocUnit;
	var DocContainer = Doc.DocContainer;

	var Body = React.createClass({displayName: 'Body',
	  componentDidMount: function() {
	    Prism.highlightAll();
	  },
	  render: function() {
	    return (
	      Container({id: "body"}, 
	        DocContainer(null, 
	          DocUnit({name: "Bootstrap: Tables"}, 
	            React.DOM.h4({className: "fg-black50"}, "Basic example"), 
	            React.DOM.p(null, 
	              "For basic styling—light padding and only horizontal dividers use the <Table> component."
	            ), 
	            Well({className: "bg-white"}, 
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
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<Table>\n", 
	                  "  <thead>\n", 
	                  "    <tr>\n", 
	                  "      <th>#</th>\n", 
	                  "      <th>First Name</th>\n", 
	                  "      <th>Last Name</th>\n", 
	                  "      <th>Username</th>\n", 
	                  "    </tr>\n", 
	                  "  </thead>\n", 
	                  "  <tbody>\n", 
	                  "    <tr>\n", 
	                  "      <td>1</td>\n", 
	                  "      <td>Mark</td>\n", 
	                  "      <td>Otto</td>\n", 
	                  "      <td>@mdo</td>\n", 
	                  "    </tr>\n", 
	                  "    <tr>\n", 
	                  "      <td>2</td>\n", 
	                  "      <td>Jacob</td>\n", 
	                  "      <td>Thornton</td>\n", 
	                  "      <td>@fat</td>\n", 
	                  "    </tr>\n", 
	                  "    <tr>\n", 
	                  "      <td>3</td>\n", 
	                  "      <td>Larry</td>\n", 
	                  "      <td>the Bird</td>\n", 
	                  "      <td>@twitter</td>\n", 
	                  "    </tr>\n", 
	                  "  </tbody>\n", 
	                  "</Table>\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Striped rows"), 
	            React.DOM.p(null, 
	              "Use ", React.DOM.code(null, "striped"), " option to add zebra-striping to any table row within the <tbody>."
	            ), 
	            Well({className: "bg-white"}, 
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
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<Table striped>\n", 
	                  "  ...\n", 
	                  "</Table>\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Bordered rows"), 
	            React.DOM.p(null, 
	              "Add ", React.DOM.code(null, "bordered"), " option for borders on all sides of the table and cells."
	            ), 
	            Well({className: "bg-white"}, 
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
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<Table bordered>\n", 
	                  "  ...\n", 
	                  "</Table>\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Hover rows"), 
	            React.DOM.p(null, 
	              "Add ", React.DOM.code(null, "hover"), " to enable a hover state on table rows within a <tbody>."
	            ), 
	            Well({className: "bg-white"}, 
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
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<Table hover>\n", 
	                  "  ...\n", 
	                  "</Table>\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Condensed table"), 
	            React.DOM.p(null, 
	              "Add ", React.DOM.code(null, "condensed"), " to make tables more compact by cutting cell padding in half."
	            ), 
	            Well({className: "bg-white"}, 
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
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<Table condensed>\n", 
	                  "  ...\n", 
	                  "</Table>\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Contextual classes"), 
	            React.DOM.p(null, 
	              "Use contextual classes to color table rows or individual cells."
	            ), 
	            Well({className: "bg-white"}, 
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
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<!-- On rows -->\n", 
	                  "<tr className='active'>...</tr>\n", 
	                  "<tr className='success'>...</tr>\n", 
	                  "<tr className='warning'>...</tr>\n", 
	                  "<tr className='danger'>...</tr>\n", 
	                  "<tr className='info'>...</tr>\n\n", 
	                  "<!-- On cells (`td` or `th`) -->\n", 
	                  "<tr>\n", 
	                  "  <td className='active'>...</td>\n", 
	                  "  <td className='success'>...</td>\n", 
	                  "  <td className='warning'>...</td>\n", 
	                  "  <td className='danger'>...</td>\n", 
	                  "  <td className='info'>...</td>\n", 
	                  "</tr>\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Responsive tables"), 
	            React.DOM.p(null, 
	              "Create responsive tables by adding responsive option to any <Table> to make them scroll horizontally on small devices."
	            ), 
	            Well({className: "bg-white"}, 
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
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<Table responsive>\n", 
	                  "  ...\n", 
	                  "</Table>\n"
	                )
	              )
	            )
	          ), 
	          DocUnit({name: "Bootstrap: Rubix Enhancements"}, 
	            React.DOM.h4({className: "fg-black50"}, "Collapsed"), 
	            React.DOM.p(null, 
	              "<Table> component with zero margins"
	            ), 
	            Well({className: "bg-white"}, 
	              Table({collapsed: true}, 
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
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<Table collapsed>\n", 
	                  "  ...\n", 
	                  "</Table>\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Align Top/Middle/Bottom"), 
	            React.DOM.p(null, 
	              "<Table> alignment (alignTop/alignMiddle/alignBottom)"
	            ), 
	            Well({className: "bg-white"}, 
	              Table({alignBottom: true}, 
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
	                    React.DOM.td({width: "20%"}, LoremIpsum({query: "3s"})), 
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
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<Table alignBottom>\n", 
	                  "  ...\n", 
	                  "</Table>\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null)
	          )
	        ), 
	        this.props.children
	      )
	    );
	  }
	});

	var classSet = React.addons.classSet;
	var TablesDoc = React.createClass({displayName: 'TablesDoc',
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

	module.exports = TablesDoc;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(39);
	var Sidebar = __webpack_require__(40);
	var Footer = __webpack_require__(41);

	var Doc = __webpack_require__(38);
	var DocUnit = Doc.DocUnit;
	var DocContainer = Doc.DocContainer;

	var Body = React.createClass({displayName: 'Body',
	  componentDidMount: function() {
	    Prism.highlightAll();
	  },
	  render: function() {
	    return (
	      Container({id: "body"}, 
	        DocContainer(null, 
	          DocUnit({name: "Bootstrap: Forms"}, 
	            React.DOM.h4({className: "fg-black50"}, "Basic example"), 
	            Well({className: "bg-white"}, 
	              Form(null, 
	                FormGroup(null, 
	                  Label({htmlFor: "exampleInputEmail1"}, "Email address"), 
	                  Input({type: "email", id: "exampleInputEmail1", placeholder: "Enter email"})
	                ), 
	                FormGroup(null, 
	                  Label({htmlFor: "exampleInputPassword1"}, "Password"), 
	                  Input({type: "password", id: "exampleInputPassword1", placeholder: "Password"})
	                ), 
	                FormGroup(null, 
	                  Label({htmlFor: "exampleInputFile"}, "File input"), 
	                  Input({type: "file", id: "exampleInputFile"}), 
	                  HelpBlock(null, "Example block-level help text here.")
	                ), 
	                Checkbox(null, "Check me out"), 
	                Button({type: "submit"}, "Submit")
	              )
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<Form>\n", 
	                  "  <FormGroup>\n", 
	                  "    <Label htmlFor='exampleInputEmail1'>Email address</Label>\n", 
	                  "    <Input type='email' id='exampleInputEmail1' placeholder='Enter email' />\n", 
	                  "  </FormGroup>\n", 
	                  "  <FormGroup>\n", 
	                  "    <Label htmlFor='exampleInputPassword1'>Password</Label>\n", 
	                  "    <Input type='password' id='exampleInputPassword1' placeholder='Password' />\n", 
	                  "  </FormGroup>\n", 
	                  "  <FormGroup>\n", 
	                  "    <Label htmlFor='exampleInputFile'>File input</Label>\n", 
	                  "    <Input type='file' id='exampleInputFile' />\n", 
	                  "    <HelpBlock>Example block-level help text here.</HelpBlock>\n", 
	                  "  </FormGroup>\n", 
	                  "  <Checkbox>Check me out</Checkbox>\n", 
	                  "  <Button type='submit'>Submit</Button>\n", 
	                  "</Form>\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Inline form"), 
	            React.DOM.p(null, 
	              "Add ", React.DOM.code(null, "inline"), " to your <Form> for left-aligned and inline-block controls"
	            ), 
	            Well({className: "bg-white"}, 
	              Form({inline: true}, 
	                FormGroup(null, 
	                  Label({className: "sr-only", htmlFor: "exampleInputEmail2"}, "Email address"), 
	                  Input({type: "email", id: "exampleInputEmail2", placeholder: "Enter email"})
	                ), 
	                FormGroup(null, 
	                  InputGroup(null, 
	                    InputGroupAddon(null, "@"), 
	                    Input({type: "text", placeholder: "Enter username"})
	                  )
	                ), 
	                FormGroup(null, 
	                  Label({className: "sr-only", htmlFor: "exampleInputPassword2"}, "Password"), 
	                  Input({type: "password", id: "exampleInputPassword2", placeholder: "Password"})
	                ), 
	                Checkbox(null, "Remember me"), 
	                Button({type: "submit"}, "Sign in")
	              )
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<Form inline>\n", 
	                  "  <FormGroup>\n", 
	                  "    <Label className='sr-only' htmlFor='exampleInputEmail2'>Email address</Label>\n", 
	                  "    <Input type='email' id='exampleInputEmail2' placeholder='Enter email' />\n", 
	                  "  </FormGroup>\n", 
	                  "  <FormGroup>\n", 
	                  "    <InputGroup>\n", 
	                  "      <InputGroupAddon>@</InputGroupAddon>\n", 
	                  "      <Input type='text' placeholder='Enter username' />\n", 
	                  "    </InputGroup>\n", 
	                  "  </FormGroup>\n", 
	                  "  <FormGroup>\n", 
	                  "    <Label className='sr-only' htmlFor='exampleInputPassword2'>Password</Label>\n", 
	                  "    <Input type='password' id='exampleInputPassword2' placeholder='Password' />\n", 
	                  "  </FormGroup>\n", 
	                  "  <Checkbox>Remember me</Checkbox>\n", 
	                  "  <Button type='submit'>Sign in</Button>\n", 
	                  "</Form>"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Horizontal form"), 
	            React.DOM.p(null, 
	              "Add ", React.DOM.code(null, "horizontal"), " to your <Form> to align labels and groups of form controls in a horizontal layout"
	            ), 
	            Well({className: "bg-white"}, 
	              Form({horizontal: true}, 
	                FormGroup(null, 
	                  Label({sm: 2, htmlFor: "inputEmail3", control: true}, "Email"), 
	                  Col({sm: 10}, 
	                    Input({type: "email", id: "inputEmail3", placeholder: "Email"})
	                  )
	                ), 
	                FormGroup(null, 
	                  Label({sm: 2, htmlFor: "inputPassword3", control: true}, "Password"), 
	                  Col({sm: 10}, 
	                    Input({type: "password", id: "inputPassword3", placeholder: "Password"})
	                  )
	                ), 
	                FormGroup(null, 
	                  Col({smOffset: 2, sm: 10}, 
	                    Checkbox(null, "Remember me")
	                  )
	                ), 
	                FormGroup(null, 
	                  Col({smOffset: 2, sm: 10}, 
	                    Button({type: "submit"}, "Sign in")
	                  )
	                )
	              )
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<Form horizontal>\n", 
	                  "  <FormGroup>\n", 
	                  "    <Label sm={2} htmlFor='inputEmail3' control>Email</Label>\n", 
	                  "    <Col sm={10}>\n", 
	                  "      <Input type='email' id='inputEmail3' placeholder='Email' />\n", 
	                  "    </Col>\n", 
	                  "  </FormGroup>\n", 
	                  "  <FormGroup>\n", 
	                  "    <Label sm={2} htmlFor='inputPassword3' control>Password</Label>\n", 
	                  "    <Col sm={10}>\n", 
	                  "      <Input type='password' id='inputPassword3' placeholder='Password' />\n", 
	                  "    </Col>\n", 
	                  "  </FormGroup>\n", 
	                  "  <FormGroup>\n", 
	                  "    <Col smOffset={2} sm={10}>\n", 
	                  "      <Checkbox>Remember me</Checkbox>\n", 
	                  "    </Col>\n", 
	                  "  </FormGroup>\n", 
	                  "  <FormGroup>\n", 
	                  "    <Col smOffset={2} sm={10}>\n", 
	                  "      <Button type='submit'>Sign in</Button>\n", 
	                  "    </Col>\n", 
	                  "  </FormGroup>\n", 
	                  "</Form>\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Static control"), 
	            React.DOM.p(null, 
	              "When you need to place plain text next to a form label within a horizontal form, use the ", React.DOM.code(null, "Static"), " component."
	            ), 
	            Well({className: "bg-white"}, 
	              Form({horizontal: true}, 
	                FormGroup(null, 
	                  Label({sm: 2, control: true}, "Email"), 
	                  Col({sm: 10}, 
	                    Static(null, "email@example.com")
	                  )
	                ), 
	                FormGroup(null, 
	                  Label({sm: 2, htmlFor: "inputPassword4", control: true}, "Password"), 
	                  Col({sm: 10}, 
	                    Input({type: "password", id: "inputPassword4", placeholder: "Password"})
	                  )
	                )
	              )
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<Form horizontal>\n", 
	                  "  <FormGroup>\n", 
	                  "    <Label sm={2} control>Email</Label>\n", 
	                  "    <Col sm={10}>\n", 
	                  "      <Static>email@example.com</Static>\n", 
	                  "    </Col>\n", 
	                  "  </FormGroup>\n", 
	                  "  <FormGroup>\n", 
	                  "    <Label sm={2} htmlFor='inputPassword4' control>Password</Label>\n", 
	                  "    <Col sm={10}>\n", 
	                  "      <Input type='password' id='inputPassword4' placeholder='Password' />\n", 
	                  "    </Col>\n", 
	                  "  </FormGroup>\n", 
	                  "</Form>\n"
	                )
	              )
	            )
	          ), 
	          DocUnit({name: "Bootstrap: Rubix Enhancements"}, 
	            React.DOM.h4({className: "fg-black50"}, "Auto-complete"), 
	            React.DOM.p(null, "By default, browser's native auto-complete is disabled for email and password fields as more often than not the browser populates these fields when it wasn't required. However, you can selectively enable them back again by passing the option: ", React.DOM.code(null, "allowAutoComplete")), 
	            Well({className: "bg-white"}, 
	              Form({allowAutoComplete: true}, 
	                FormGroup(null, 
	                  Label({htmlFor: "exampleInputText1"}, "Username"), 
	                  Input({type: "text", id: "exampleInputText1", placeholder: "Enter username"})
	                ), 
	                FormGroup(null, 
	                  Label({htmlFor: "exampleInputEmail3"}, "Email address"), 
	                  Input({type: "email", id: "exampleInputEmail3", placeholder: "Enter email"})
	                ), 
	                FormGroup(null, 
	                  Label({htmlFor: "exampleInputPassword3"}, "Password"), 
	                  Input({type: "password", id: "exampleInputPassword3", placeholder: "Password"})
	                ), 
	                Button({type: "submit"}, "Submit")
	              )
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<Form allowAutoComplete>\n", 
	                  "  <FormGroup>\n", 
	                  "    <Label htmlFor='exampleInputText1'>Username</Label>\n", 
	                  "    <Input type='text' id='exampleInputText1' placeholder='Enter username' />\n", 
	                  "  </FormGroup>\n", 
	                  "  <FormGroup>\n", 
	                  "    <Label htmlFor='exampleInputEmail3'>Email address</Label>\n", 
	                  "    <Input type='email' id='exampleInputEmail3' placeholder='Enter email' />\n", 
	                  "  </FormGroup>\n", 
	                  "  <FormGroup>\n", 
	                  "    <Label htmlFor='exampleInputPassword3'>Password</Label>\n", 
	                  "    <Input type='password' id='exampleInputPassword3' placeholder='Password' />\n", 
	                  "  </FormGroup>\n", 
	                  "  <Button type='submit'>Submit</Button>\n", 
	                  "</Form>\n"
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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(39);
	var Sidebar = __webpack_require__(40);
	var Footer = __webpack_require__(41);

	var Doc = __webpack_require__(38);
	var DocUnit = Doc.DocUnit;
	var DocContainer = Doc.DocContainer;

	var inputgetdomnode = __webpack_require__(60);
	var inputgetchecked = __webpack_require__(61);
	var inputsetchecked = __webpack_require__(62);
	var inputgetvalue = __webpack_require__(63);

	var Body = React.createClass({displayName: 'Body',
	  componentDidMount: function() {
	    Prism.highlightAll();
	  },
	  render: function() {
	    return (
	      Container({id: "body"}, 
	        DocContainer(null, 
	          DocUnit({name: "Bootstrap: Basic Inputs"}, 
	            React.DOM.h4({className: "fg-black50"}, "Default"), 
	            React.DOM.p(null, 
	              "Most common form control, text-based Input fields. Includes support for all HTML5 types: ", React.DOM.code(null, "text"), ", ", React.DOM.code(null, "password"), ", ", React.DOM.code(null, "datetime"), ", ", React.DOM.code(null, "datetime-local"), ", ", React.DOM.code(null, "date"), ", ", React.DOM.code(null, "month"), ", ", React.DOM.code(null, "time"), ", ", React.DOM.code(null, "week"), ", ", React.DOM.code(null, "number"), ", ", React.DOM.code(null, "email"), ", ", React.DOM.code(null, "url"), ", ", React.DOM.code(null, "search"), ", ", React.DOM.code(null, "tel"), ", and ", React.DOM.code(null, "color"), "."
	            ), 
	            React.DOM.p(null, 
	              "NOTE: The Input component defined here is case sensitive. We have provided this component so that it saves you time by having to write less. The classname ", React.DOM.code(null, "form-control"), " is added by default to all types defined above."
	            ), 
	            Well(null, 
	              Input({type: "password", placeholder: "Password"})
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<Input type='password' placeholder='Password' />\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Disabled input"), 
	            React.DOM.p(null, 
	              "Add the ", React.DOM.code(null, "disabled"), " boolean attribute on an input to prevent user input and trigger a slightly different look."
	            ), 
	            Well(null, 
	              Input({disabled: true, type: "password", placeholder: "Password"})
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<Input disabled type='password' placeholder='Password' />\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Readonly input"), 
	            React.DOM.p(null, 
	              "Add the ", React.DOM.code(null, "readOnly"), " boolean attribute on an input to prevent user input and style the input as disabled."
	            ), 
	            Well(null, 
	              Input({readOnly: true, type: "password", placeholder: "Password"})
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<Input readOnly type='password' placeholder='Password' />\n"
	                )
	              )
	            )
	          ), 
	          DocUnit({name: "Bootstrap: Control Sizing"}, 
	            React.DOM.p(null, 
	              "Set heights using properties like: ", React.DOM.code(null, "lg"), " and ", React.DOM.code(null, "sm")
	            ), 
	            Well(null, 
	              Input({lg: true, type: "text", placeholder: "Large Input"}), React.DOM.br(null), 
	              Input({sm: true, type: "text", placeholder: "Small Input"})
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<Input lg type='text' placeholder='Large Input' />\n", 
	                  "<Input sm type='text' placeholder='Small Input' />\n"
	                )
	              )
	            )
	          ), 
	          DocUnit({name: "Bootstrap: Rubix Enhancements [API]", docStyle: "bg-red fg-white"}, 
	            React.DOM.h4({className: "fg-black50"}, React.DOM.code(null, "getInputDOMNode()")), 
	            React.DOM.p(null, 
	              "Access the raw DOM Node. Example:"
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-javascript"}, 
	                  inputgetdomnode
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, React.DOM.code(null, "getChecked()")), 
	            React.DOM.p(null, 
	              "Access the checked state of a checkbox or radio primitive. Example:"
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-javascript"}, 
	                  inputgetchecked
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, React.DOM.code(null, "setChecked(true|false)")), 
	            React.DOM.p(null, 
	              "Set the checked state of a checkbox or radio primitive. Example:"
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-javascript"}, 
	                  inputsetchecked
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, React.DOM.code(null, "getValue()")), 
	            React.DOM.p(null, 
	              "Convenience function to get the value of the raw input dom element. Example:"
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-javascript"}, 
	                  inputgetvalue
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
	var InputsDocs = React.createClass({displayName: 'InputsDocs',
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

	module.exports = InputsDocs;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(39);
	var Sidebar = __webpack_require__(40);
	var Footer = __webpack_require__(41);

	var Doc = __webpack_require__(38);
	var DocUnit = Doc.DocUnit;
	var DocContainer = Doc.DocContainer;

	var textareadomnode = __webpack_require__(64);
	var textareagetvalue = __webpack_require__(65);

	var Body = React.createClass({displayName: 'Body',
	  componentDidMount: function() {
	    Prism.highlightAll();
	  },
	  render: function() {
	    return (
	      Container({id: "body"}, 
	        DocContainer(null, 
	          DocUnit({name: "Bootstrap: Textarea"}, 
	            React.DOM.p(null, 
	              "Form control which supports multiple lines of text. Change ", React.DOM.code(null, "rows"), " attribute as necessary."
	            ), 
	            Well(null, 
	              Textarea({rows: "3"})
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<Textarea rows='3' />\n"
	                )
	              )
	            )
	          ), 
	          DocUnit({name: "Bootstrap: Rubix Enhancements [API]", docStyle: "bg-red fg-white"}, 
	            React.DOM.h4({className: "fg-black50"}, React.DOM.code(null, "getInputDOMNode()")), 
	            React.DOM.p(null, 
	              "Access the raw DOM Node. Example:"
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-javascript"}, 
	                  textareadomnode
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, React.DOM.code(null, "getValue()")), 
	            React.DOM.p(null, 
	              "Convenience function to get the value of the raw input dom element. Example:"
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-javascript"}, 
	                  textareagetvalue
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
	var TextareaDocs = React.createClass({displayName: 'TextareaDocs',
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

	module.exports = TextareaDocs;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(39);
	var Sidebar = __webpack_require__(40);
	var Footer = __webpack_require__(41);

	var Doc = __webpack_require__(38);
	var DocUnit = Doc.DocUnit;
	var DocContainer = Doc.DocContainer;

	var rccheckedstate = __webpack_require__(66);
	var setrccheckedstate = __webpack_require__(67);
	var isrccheckedstate = __webpack_require__(68);
	var rcgetvalue = __webpack_require__(69);

	var Body = React.createClass({displayName: 'Body',
	  componentDidMount: function() {
	    Prism.highlightAll();
	  },
	  render: function() {
	    return (
	      Container({id: "body"}, 
	        DocContainer(null, 
	          DocUnit({name: "Bootstrap: Checkboxes and radios"}, 
	            React.DOM.h4({className: "fg-black50"}, "Default (Stacked)"), 
	            React.DOM.p(null, 
	              "Checkboxes are for selecting one or several options in a list, while radios are for selecting one option from many."
	            ), 
	            React.DOM.p(null, 
	              "We provide ", React.DOM.code(null, "Checkbox"), " and ", React.DOM.code(null, "Radio"), " component that reduces a lot of redundant code. This is preferred to using native Input checkbox/radio elements."
	            ), 
	            Well(null, 
	              Checkbox(null, "Option one is this and that", "—", "be sure to include why it's great"), 
	              Checkbox({disabled: true}, "Option two is disabled"), 
	              Radio({name: "optionsRadios", value: "option1"}, "Option one is this and that", "—", "be sure to include why it's great"), 
	              Radio({name: "optionsRadios", value: "option2"}, "Option two can be something else and selecting it will deselect option one"), 
	              Radio({disabled: true, name: "optionsRadios", value: "option3"}, "Option three is disabled")
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<Checkbox>\n  Option one is this and that&mdash;be sure to include why it's great\n</Checkbox>\n", 
	                  "<Checkbox disabled>\n  Option two is disabled\n</Checkbox>\n", 
	                  "<Radio name='optionsRadios' value='option1'>\n  Option one is this and that&mdash;be sure to include why it's great\n</Radio>\n", 
	                  "<Radio name='optionsRadios' value='option2'>\n  Option two can be something else and selecting it will deselect option one\n</Radio>\n", 
	                  "<Radio disabled name='optionsRadios' value='option3'>\n  Option three is disabled\n</Radio>"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Inline checkboxes and radios"), 
	            React.DOM.p(null, 
	              "Use the attribute ", React.DOM.code(null, "inline"), " on a series of checkboxes or radios for controls that appear on the same line."
	            ), 
	            Well(null, 
	              React.DOM.div(null, 
	                Checkbox({inline: true, defaultChecked: true}, "1"), 
	                Checkbox({inline: true}, "2"), 
	                Checkbox({inline: true}, "3"), 
	                Checkbox({inline: true, disabled: true}, "4")
	              ), 
	              React.DOM.div(null, 
	                Radio({inline: true, name: "inline", value: "option1"}, "1"), 
	                Radio({inline: true, defaultChecked: true, name: "inline", value: "option2"}, "2"), 
	                Radio({inline: true, name: "inline", value: "option3"}, "3"), 
	                Radio({inline: true, disabled: true, name: "inline", value: "option4"}, "4")
	              )
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<div>\n", 
	                  "  <Checkbox inline defaultChecked>1</Checkbox>\n", 
	                  "  <Checkbox inline>2</Checkbox>\n", 
	                  "  <Checkbox inline>3</Checkbox>\n", 
	                  "  <Checkbox inline disabled>4</Checkbox>\n", 
	                  "</div>\n", 
	                  "<div>\n", 
	                  " <Radio inline name='inline' value='option1'>1</Radio>\n", 
	                  " <Radio inline defaultChecked name='inline' value='option2'>2</Radio>\n", 
	                  " <Radio inline name='inline' value='option3'>3</Radio>\n", 
	                  " <Radio inline disabled name='inline' value='option4'>4</Radio>\n", 
	                  "</div>"
	                )
	              )
	            )
	          ), 
	          DocUnit({name: "Bootstrap: Rubix Enhancements [API]", docStyle: "bg-red fg-white"}, 
	            React.DOM.h4({className: "fg-black50"}, React.DOM.code(null, "getChecked()")), 
	            React.DOM.p(null, 
	              "Access checked state of checkbox/radio. Example:"
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-javascript"}, 
	                  rccheckedstate
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, React.DOM.code(null, "setChecked(true|false)")), 
	            React.DOM.p(null, 
	              "Set checked state of checkbox/radio. Example:"
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-javascript"}, 
	                  setrccheckedstate
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, React.DOM.code(null, "isChecked()")), 
	            React.DOM.p(null, 
	              "Test if checked. Example:"
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-javascript"}, 
	                  isrccheckedstate
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, React.DOM.code(null, "getValue()")), 
	            React.DOM.p(null, 
	              "Convenience function to get the value of the inner span element. Example:"
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-javascript"}, 
	                  rcgetvalue
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
	var CheckRadioDocs = React.createClass({displayName: 'CheckRadioDocs',
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

	module.exports = CheckRadioDocs;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(39);
	var Sidebar = __webpack_require__(40);
	var Footer = __webpack_require__(41);

	var Doc = __webpack_require__(38);
	var DocUnit = Doc.DocUnit;
	var DocContainer = Doc.DocContainer;

	var rccheckedstate = __webpack_require__(66);
	var setrccheckedstate = __webpack_require__(67);
	var isrccheckedstate = __webpack_require__(68);
	var rcgetvalue = __webpack_require__(69);

	var Body = React.createClass({displayName: 'Body',
	  componentDidMount: function() {
	    Prism.highlightAll();
	  },
	  render: function() {
	    return (
	      Container({id: "body"}, 
	        DocContainer(null, 
	          DocUnit({name: "Bootstrap: Selects"}, 
	            React.DOM.p(null, 
	              "Use the default option, or add ", React.DOM.code(null, "multiple"), " to show multiple options at once."
	            ), 
	            Well(null, 
	              Select(null, 
	                React.DOM.option(null, "1"), 
	                React.DOM.option(null, "2"), 
	                React.DOM.option(null, "3"), 
	                React.DOM.option(null, "4"), 
	                React.DOM.option(null, "5")
	              ), 
	              React.DOM.br(null), 
	              Select({multiple: true}, 
	                React.DOM.option(null, "1"), 
	                React.DOM.option(null, "2"), 
	                React.DOM.option(null, "3"), 
	                React.DOM.option(null, "4"), 
	                React.DOM.option(null, "5")
	              )
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<Select>\n", 
	                  "  <option>1</option>\n", 
	                  "  <option>2</option>\n", 
	                  "  <option>3</option>\n", 
	                  "  <option>4</option>\n", 
	                  "  <option>5</option>\n", 
	                  "</Select>\n", 
	                  "<Select multiple>\n", 
	                  "  <option>1</option>\n", 
	                  "  <option>2</option>\n", 
	                  "  <option>3</option>\n", 
	                  "  <option>4</option>\n", 
	                  "  <option>5</option>\n", 
	                  "</Select>"
	                )
	              )
	            )
	          ), 
	          DocUnit({name: "Bootstrap: Control Sizing"}, 
	            React.DOM.p(null, 
	              "Set heights using properties like: ", React.DOM.code(null, "lg"), " and ", React.DOM.code(null, "sm")
	            ), 
	            Well(null, 
	              Select({sm: true}, 
	                React.DOM.option(null, "1"), 
	                React.DOM.option(null, "2"), 
	                React.DOM.option(null, "3"), 
	                React.DOM.option(null, "4"), 
	                React.DOM.option(null, "5")
	              ), 
	              React.DOM.br(null), 
	              Select({lg: true}, 
	                React.DOM.option(null, "1"), 
	                React.DOM.option(null, "2"), 
	                React.DOM.option(null, "3"), 
	                React.DOM.option(null, "4"), 
	                React.DOM.option(null, "5")
	              )
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<Select sm>\n", 
	                  "  <option>1</option>\n", 
	                  "  <option>2</option>\n", 
	                  "  <option>3</option>\n", 
	                  "  <option>4</option>\n", 
	                  "  <option>5</option>\n", 
	                  "</Select>\n", 
	                  "<Select lg>\n", 
	                  "  <option>1</option>\n", 
	                  "  <option>2</option>\n", 
	                  "  <option>3</option>\n", 
	                  "  <option>4</option>\n", 
	                  "  <option>5</option>\n", 
	                  "</Select>"
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
	var SelectDocs = React.createClass({displayName: 'SelectDocs',
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

	module.exports = SelectDocs;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(39);
	var Sidebar = __webpack_require__(40);
	var Footer = __webpack_require__(41);

	var Doc = __webpack_require__(38);
	var DocUnit = Doc.DocUnit;
	var DocContainer = Doc.DocContainer;

	var rccheckedstate = __webpack_require__(66);
	var setrccheckedstate = __webpack_require__(67);
	var isrccheckedstate = __webpack_require__(68);
	var rcgetvalue = __webpack_require__(69);

	var Body = React.createClass({displayName: 'Body',
	  componentDidMount: function() {
	    Prism.highlightAll();
	  },
	  render: function() {
	    return (
	      Container({id: "body"}, 
	        DocContainer(null, 
	          DocUnit({name: "Bootstrap: Buttons"}, 
	            React.DOM.h4({className: "fg-black50"}, "Colors"), 
	            React.DOM.p(null, 
	              "To style a button use the ", React.DOM.code(null, "bsStyle"), " attribute. More colors are available (Check the colors.scss file for more)."
	            ), 
	            Well(null, 
	              Button(null, "Default"), ' ', 
	              Button({bsStyle: "primary"}, "Primary"), ' ', 
	              Button({bsStyle: "success"}, "Success"), ' ', 
	              Button({bsStyle: "info"}, "Info"), ' ', 
	              Button({bsStyle: "warning"}, "Warning"), ' ', 
	              Button({bsStyle: "danger"}, "Danger"), ' ', 
	              Button({bsStyle: "link"}, "Link")
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<Button>Default</Button>\n", 
	                  "<Button bsStyle='primary'>Primary</Button>\n", 
	                  "<Button bsStyle='success'>Success</Button>\n", 
	                  "<Button bsStyle='info'>Info</Button>\n", 
	                  "<Button bsStyle='warning'>Warning</Button>\n", 
	                  "<Button bsStyle='danger'>Danger</Button>\n", 
	                  "<Button bsStyle='link'>Link</Button>"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Sizes"), 
	            React.DOM.p(null, 
	              "Fancy larger or smaller buttons? Add ", React.DOM.code(null, "lg"), ", ", React.DOM.code(null, "sm"), " or ", React.DOM.code(null, "xs"), " attribute for additional sizes."
	            ), 
	            Well(null, 
	              React.DOM.p(null, 
	                Button({lg: true, bsStyle: "primary"}, "Large Button")
	              ), 
	              React.DOM.p(null, 
	                Button({bsStyle: "primary"}, "Default Button")
	              ), 
	              React.DOM.p(null, 
	                Button({sm: true, bsStyle: "primary"}, "Small Button")
	              ), 
	              React.DOM.p(null, 
	                Button({xs: true, bsStyle: "primary"}, "Extra small Button")
	              )
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<p>\n", 
	                  "  <Button lg bsStyle='primary'>Large Button</Button>\n", 
	                  "</p>\n", 
	                  "<p>\n", 
	                  "  <Button bsStyle='primary'>Default Button</Button>\n", 
	                  "</p>\n", 
	                  "<p>\n", 
	                  "  <Button sm bsStyle='primary'>Small Button</Button>\n", 
	                  "</p>\n", 
	                  "<p>\n", 
	                  "  <Button xs bsStyle='primary'>Extra small Button</Button>\n", 
	                  "</p>\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Blocks"), 
	            React.DOM.p(null, 
	              "Create block level buttons—those that span the full width of a parent— by adding ", React.DOM.code(null, "block")
	            ), 
	            Well(null, 
	              React.DOM.p(null, 
	                Button({lg: true, block: true, bsStyle: "primary"}, "Large Block Level Button")
	              )
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<p>\n", 
	                  "  <Button lg block bsStyle='primary'>Large Block Level Button</Button>\n", 
	                  "</p>\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Active State"), 
	            React.DOM.p(null, 
	              "Buttons will appear pressed (with a darker background, darker border, and inset shadow) when active"
	            ), 
	            Well(null, 
	              React.DOM.p(null, 
	                Button({lg: true, bsStyle: "primary"}, "Normal Button"), ' ', 
	                Button({lg: true, bsStyle: "primary", active: true}, "Active Button")
	              )
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<p>\n", 
	                  "  <Button lg bsStyle='primary'>Normal Button</Button>{' '}\n", 
	                  "  <Button lg bsStyle='primary' active>Active Button</Button>\n", 
	                  "</p>\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Disabled State"), 
	            React.DOM.p(null, 
	              "Make buttons look unclickable by fading them back 50%."
	            ), 
	            Well(null, 
	              React.DOM.p(null, 
	                Button({lg: true, bsStyle: "primary"}, "Normal Button"), ' ', 
	                Button({lg: true, bsStyle: "primary", disabled: true}, "Disabled Button")
	              )
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<p>\n", 
	                  "  <Button lg bsStyle='primary'>Normal Button</Button>{' '}\n", 
	                  "  <Button lg bsStyle='primary' disabled>Disabled Button</Button>\n", 
	                  "</p>\n"
	                )
	              )
	            )
	          ), 
	          DocUnit({name: "Bootstrap: Rubix Enhancements", docStyle: "bg-red fg-white"}, 
	            React.DOM.h4({className: "fg-black50"}, "Outlined"), 
	            React.DOM.p(null, 
	              "Outlined button."
	            ), 
	            Well({className: "bg-desaturateddarkblue75"}, 
	              Button({bsStyle: "darkgreen45", outlined: true}, "45% Dark Green Button")
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<Button bsStyle='darkgreen45' outlined>45% Dark Green Button</Button>"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Inverse"), 
	            React.DOM.p(null, 
	              "Inverse foreground/background colors."
	            ), 
	            Well({className: "bg-desaturateddarkblue75"}, 
	              Button({bsStyle: "desaturateddarkblue75", inverse: true}, "75% Desaturated Dark Blue")
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<Button bsStyle='desaturateddarkblue75' inverse>75% Desaturated Dark Blue</Button>"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Rounded"), 
	            React.DOM.p(null, 
	              "Rounded button."
	            ), 
	            Well({className: "bg-desaturateddarkblue75"}, 
	              Button({bsStyle: "green", rounded: true}, Icon({glyph: "icon-fontello-mail"})), ' ', 
	              Button({bsStyle: "blue", rounded: true}, Icon({glyph: "icon-fontello-rss-1"})), ' ', 
	              Button({bsStyle: "red", rounded: true}, Icon({glyph: "icon-fontello-cog"}))
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<Button bsStyle='green' rounded><Icon glyph='icon-fontello-mail' /></Button>{' '}\n", 
	                  "<Button bsStyle='blue' rounded><Icon glyph='icon-fontello-rss-1' /></Button>{' '}\n", 
	                  "<Button bsStyle='red' rounded><Icon glyph='icon-fontello-cog' /></Button>"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Only Activate styles on Hover/Focus"), 
	            React.DOM.p(null, 
	              "Add styles only on button hover/focus."
	            ), 
	            Well({className: "bg-white"}, 
	              Button({bsStyle: "pink", onlyOnHover: true}, "Pink Button (only on hover)")
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<Button bsStyle='pink' onlyOnHover>Pink Button (only on hover)</Button>\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Retain Background"), 
	            React.DOM.p(null, 
	              "Outlined white border and color in the default state but behaves like non-outlined, colored background + border and white foreground on hover/focused state."
	            ), 
	            Well({className: "bg-desaturateddarkblue75"}, 
	              Button({bsStyle: "darkcyan", retainBackground: true}, "Dark Cyan Button")
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<Button bsStyle='darkcyan' retainBackground>Dark Cyan Button</Button>\n"
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
	var ButtonsDocs = React.createClass({displayName: 'ButtonsDocs',
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

	module.exports = ButtonsDocs;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(39);
	var Sidebar = __webpack_require__(40);
	var Footer = __webpack_require__(41);

	var Doc = __webpack_require__(38);
	var DocUnit = Doc.DocUnit;
	var DocContainer = Doc.DocContainer;

	var dropdownbasic = __webpack_require__(70);
	var dropdownalign = __webpack_require__(71);

	var Body = React.createClass({displayName: 'Body',
	  handleSelection: function(itemprops) {
	    // access any property attached to MenuItem child component.
	    // ex: itemprops.keyaction === 'another-action' if MenuItem
	    // with "Another action" is clicked.
	    var value = itemprops.children;
	    alert(value);
	    if(itemprops.keyaction === 'another-action')
	      alert('You clicked another-action');
	  },
	  componentDidMount: function() {
	    Prism.highlightAll();
	  },
	  render: function() {
	    return (
	      Container({id: "body"}, 
	        DocContainer(null, 
	          DocUnit({name: "Bootstrap: Dropdowns"}, 
	            React.DOM.h4({className: "fg-black50"}, "Basic Example"), 
	            React.DOM.p(null, 
	              "Toggleable, contextual menu for displaying lists of links. The ", React.DOM.code(null, "Dropdown"), " component contains the entire menu with a special ", React.DOM.code(null, "Button"), " subclass ", React.DOM.code(null, "DropdownButton"), ".", " Whatever property/attribute you can pass to ", React.DOM.code(null, "Button"), " component can also be passed to ", React.DOM.code(null, "DropdownButton"), ". However ", React.DOM.code(null, "DropdownButton"), " has two special props: ", React.DOM.code(null, "container"), " and ", React.DOM.code(null, "menu"), ". The ", React.DOM.code(null, "container"), " points to the current React class and ", React.DOM.code(null, "menu"), " points to the menu you would like to toggle. ", React.DOM.code(null, "Dropdown"), " component also contains a ", React.DOM.code(null, "Menu"), " component which is a container for all ", React.DOM.code(null, "MenuItem"), "s. ", React.DOM.code(null, "Caret"), " component adds a caret to the dropdown button."
	            ), 
	            React.DOM.p(null, 
	              "As you can see it's much shorter than it's Bootstrap counterpart. We'll be covering individual parts (DropdownButton, Menu, MenuItem) later in the documentation."
	            ), 
	            Well(null, 
	              Dropdown(null, 
	                DropdownButton({bsStyle: "blue", container: this, menu: "menu1"}, 
	                  React.DOM.span(null, "Dropdown "), Caret(null)
	                ), 
	                Menu({ref: "menu1", bsStyle: "blue", onItemSelect: this.handleSelection}, 
	                  MenuItem({active: true, href: "#"}, "Action"), 
	                  MenuItem({keyaction: "another-action", href: "#"}, "Another action"), 
	                  MenuItem({href: "#"}, "Something else here"), 
	                  MenuItem({divider: true}), 
	                  MenuItem({href: "#"}, "Separated link")
	                )
	              )
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-javascript"}, 
	                  dropdownbasic
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Alignment"), 
	            React.DOM.p(null, 
	              "By default, a dropdown menu is automatically positioned 100% from the top and along the left side of its parent. Add ", React.DOM.code(null, "alignRight"), " to right align the dropdown menu."
	            ), 
	            Well({className: "text-right"}, 
	              Dropdown(null, 
	                DropdownButton({bsStyle: "red", container: this, menu: "menu2"}, 
	                  React.DOM.span(null, "Dropdown "), Caret(null)
	                ), 
	                Menu({ref: "menu2", bsStyle: "red", onItemSelect: this.handleSelection, alignRight: true}, 
	                  MenuItem({active: true, href: "#"}, "Action"), 
	                  MenuItem({keyaction: "another-action", href: "#"}, "Another action"), 
	                  MenuItem({href: "#"}, "Something else here"), 
	                  MenuItem({divider: true}), 
	                  MenuItem({href: "#"}, "Separated link")
	                )
	              )
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-javascript"}, 
	                  dropdownalign
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Headers"), 
	            React.DOM.p(null, 
	              "Add a header to label sections of actions in any dropdown menu."
	            ), 
	            Well(null, 
	              Dropdown(null, 
	                DropdownButton({bsStyle: "green", container: this, menu: "menu3"}, 
	                  React.DOM.span(null, "Dropdown "), Caret(null)
	                ), 
	                Menu({bsStyle: "green", ref: "menu3"}, 
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
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<Dropdown>\n", 
	                  "  <DropdownButton bsStyle='green' container={this} menu='menu3'>\n", 
	                  "    <span>Dropdown </span><Caret/>\n", 
	                  "  </DropdownButton>\n", 
	                  "  <Menu bsStyle='green' ref='menu3'>\n", 
	                  "    <MenuItem header>Dropdown header</MenuItem>\n", 
	                  "    <MenuItem href='#'>Action</MenuItem>\n", 
	                  "    <MenuItem href='#'>Another action</MenuItem>\n", 
	                  "    <MenuItem href='#'>Something else here</MenuItem>\n", 
	                  "    <MenuItem divider/>\n", 
	                  "    <MenuItem header>Dropdown header</MenuItem>\n", 
	                  "    <MenuItem href='#'>Separated link</MenuItem>\n", 
	                  "  </Menu>\n", 
	                  "</Dropdown>\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Disabled menu item"), 
	            React.DOM.p(null, 
	              "Add prop ", React.DOM.code(null, "disabled"), " to a ", React.DOM.code(null, "<MenuItem>"), " in the dropdown to disable it."
	            ), 
	            Well(null, 
	              Dropdown(null, 
	                DropdownButton({bsStyle: "orange75", container: this, menu: "menu4"}, 
	                  React.DOM.span(null, "Dropdown "), Caret(null)
	                ), 
	                Menu({ref: "menu4", bsStyle: "orange75"}, 
	                  MenuItem({href: "#"}, "Regular link"), 
	                  MenuItem({href: "#", disabled: true}, "Disabled link"), 
	                  MenuItem({href: "#"}, "Another link")
	                )
	              )
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<Dropdown>\n", 
	                  "  <DropdownButton bsStyle='orange75' container={this} menu='menu4'>\n", 
	                  "    <span>Dropdown </span><Caret/>\n", 
	                  "  </DropdownButton>\n", 
	                  "  <Menu ref='menu4' bsStyle='orange75'>\n", 
	                  "    <MenuItem href='#'>Regular link</MenuItem>\n", 
	                  "    <MenuItem href='#' disabled>Disabled link</MenuItem>\n", 
	                  "    <MenuItem href='#'>Another link</MenuItem>\n", 
	                  "  </Menu>\n", 
	                  "</Dropdown>\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Single button dropdowns"), 
	            React.DOM.p(null, 
	              "Use a DropdownButton to toggle dropdowns."
	            ), 
	            Well(null, 
	              ButtonGroup(null, 
	                DropdownButton({container: this, menu: "menu12"}, 
	                  React.DOM.span(null, "Default "), Caret(null)
	                ), 
	                Menu({ref: "menu12"}, 
	                  MenuItem({href: "#"}, "Action"), 
	                  MenuItem({href: "#"}, "Another Action"), 
	                  MenuItem({href: "#"}, "Something else here"), 
	                  MenuItem({divider: true}), 
	                  MenuItem({href: "#"}, "Separated link")
	                )
	              ), ' ', 
	              ButtonGroup(null, 
	                DropdownButton({container: this, menu: "menu13", bsStyle: "primary"}, 
	                  React.DOM.span(null, "Primary "), Caret(null)
	                ), 
	                Menu({ref: "menu13", bsStyle: "primary"}, 
	                  MenuItem({href: "#"}, "Action"), 
	                  MenuItem({href: "#"}, "Another Action"), 
	                  MenuItem({href: "#"}, "Something else here"), 
	                  MenuItem({divider: true}), 
	                  MenuItem({href: "#"}, "Separated link")
	                )
	              ), ' ', 
	              ButtonGroup(null, 
	                DropdownButton({container: this, menu: "menu14", bsStyle: "success"}, 
	                  React.DOM.span(null, "Success "), Caret(null)
	                ), 
	                Menu({ref: "menu14", bsStyle: "success"}, 
	                  MenuItem({href: "#"}, "Action"), 
	                  MenuItem({href: "#"}, "Another Action"), 
	                  MenuItem({href: "#"}, "Something else here"), 
	                  MenuItem({divider: true}), 
	                  MenuItem({href: "#"}, "Separated link")
	                )
	              ), ' ', 
	              ButtonGroup(null, 
	                DropdownButton({container: this, menu: "menu15", bsStyle: "info"}, 
	                  React.DOM.span(null, "Info "), Caret(null)
	                ), 
	                Menu({ref: "menu15", bsStyle: "info"}, 
	                  MenuItem({href: "#"}, "Action"), 
	                  MenuItem({href: "#"}, "Another Action"), 
	                  MenuItem({href: "#"}, "Something else here"), 
	                  MenuItem({divider: true}), 
	                  MenuItem({href: "#"}, "Separated link")
	                )
	              ), ' ', 
	              ButtonGroup(null, 
	                DropdownButton({container: this, menu: "menu16", bsStyle: "warning"}, 
	                  React.DOM.span(null, "Warning "), Caret(null)
	                ), 
	                Menu({ref: "menu16", bsStyle: "warning"}, 
	                  MenuItem({href: "#"}, "Action"), 
	                  MenuItem({href: "#"}, "Another Action"), 
	                  MenuItem({href: "#"}, "Something else here"), 
	                  MenuItem({divider: true}), 
	                  MenuItem({href: "#"}, "Separated link")
	                )
	              ), ' ', 
	              ButtonGroup(null, 
	                DropdownButton({container: this, menu: "menu17", bsStyle: "danger"}, 
	                  React.DOM.span(null, "Danger "), Caret(null)
	                ), 
	                Menu({ref: "menu17", bsStyle: "danger"}, 
	                  MenuItem({href: "#"}, "Action"), 
	                  MenuItem({href: "#"}, "Another Action"), 
	                  MenuItem({href: "#"}, "Something else here"), 
	                  MenuItem({divider: true}), 
	                  MenuItem({href: "#"}, "Separated link")
	                )
	              )
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<ButtonGroup>\n", 
	                  "  <DropdownButton container={this} menu='menu12'>\n", 
	                  "    <span>Default </span><Caret/>\n", 
	                  "  </DropdownButton>\n", 
	                  "  <Menu ref='menu12'>\n", 
	                  "    <MenuItem href='#'>Action</MenuItem>\n", 
	                  "    <MenuItem href='#'>Another Action</MenuItem>\n", 
	                  "    <MenuItem href='#'>Something else here</MenuItem>\n", 
	                  "    <MenuItem divider></MenuItem>\n", 
	                  "    <MenuItem href='#'>Separated link</MenuItem>\n", 
	                  "  </Menu>\n", 
	                  "</ButtonGroup>{' '}\n", 
	                  "<ButtonGroup>\n", 
	                  "  <DropdownButton container={this} menu='menu13' bsStyle='primary'>\n", 
	                  "    <span>Primary </span><Caret/>\n", 
	                  "  </DropdownButton>\n", 
	                  "  <Menu ref='menu13' bsStyle='primary'>\n", 
	                  "    <MenuItem href='#'>Action</MenuItem>\n", 
	                  "    <MenuItem href='#'>Another Action</MenuItem>\n", 
	                  "    <MenuItem href='#'>Something else here</MenuItem>\n", 
	                  "    <MenuItem divider></MenuItem>\n", 
	                  "    <MenuItem href='#'>Separated link</MenuItem>\n", 
	                  "  </Menu>\n", 
	                  "</ButtonGroup>{' '}\n", 
	                  "<ButtonGroup>\n", 
	                  "  <DropdownButton container={this} menu='menu14' bsStyle='success'>\n", 
	                  "    <span>Success </span><Caret/>\n", 
	                  "  </DropdownButton>\n", 
	                  "  <Menu ref='menu14' bsStyle='success'>\n", 
	                  "    <MenuItem href='#'>Action</MenuItem>\n", 
	                  "    <MenuItem href='#'>Another Action</MenuItem>\n", 
	                  "    <MenuItem href='#'>Something else here</MenuItem>\n", 
	                  "    <MenuItem divider></MenuItem>\n", 
	                  "    <MenuItem href='#'>Separated link</MenuItem>\n", 
	                  "  </Menu>\n", 
	                  "</ButtonGroup>{' '}\n", 
	                  "<ButtonGroup>\n", 
	                  "  <DropdownButton container={this} menu='menu15' bsStyle='info'>\n", 
	                  "    <span>Info </span><Caret/>\n", 
	                  "  </DropdownButton>\n", 
	                  "  <Menu ref='menu15' bsStyle='info'>\n", 
	                  "    <MenuItem href='#'>Action</MenuItem>\n", 
	                  "    <MenuItem href='#'>Another Action</MenuItem>\n", 
	                  "    <MenuItem href='#'>Something else here</MenuItem>\n", 
	                  "    <MenuItem divider></MenuItem>\n", 
	                  "    <MenuItem href='#'>Separated link</MenuItem>\n", 
	                  "  </Menu>\n", 
	                  "</ButtonGroup>{' '}\n", 
	                  "<ButtonGroup>\n", 
	                  "  <DropdownButton container={this} menu='menu16' bsStyle='warning'>\n", 
	                  "    <span>Warning </span><Caret/>\n", 
	                  "  </DropdownButton>\n", 
	                  "  <Menu ref='menu16' bsStyle='warning'>\n", 
	                  "    <MenuItem href='#'>Action</MenuItem>\n", 
	                  "    <MenuItem href='#'>Another Action</MenuItem>\n", 
	                  "    <MenuItem href='#'>Something else here</MenuItem>\n", 
	                  "    <MenuItem divider></MenuItem>\n", 
	                  "    <MenuItem href='#'>Separated link</MenuItem>\n", 
	                  "  </Menu>\n", 
	                  "</ButtonGroup>{' '}\n", 
	                  "<ButtonGroup>\n", 
	                  "  <DropdownButton container={this} menu='menu17' bsStyle='danger'>\n", 
	                  "    <span>Danger </span><Caret/>\n", 
	                  "  </DropdownButton>\n", 
	                  "  <Menu ref='menu17' bsStyle='danger'>\n", 
	                  "    <MenuItem href='#'>Action</MenuItem>\n", 
	                  "    <MenuItem href='#'>Another Action</MenuItem>\n", 
	                  "    <MenuItem href='#'>Something else here</MenuItem>\n", 
	                  "    <MenuItem divider></MenuItem>\n", 
	                  "    <MenuItem href='#'>Separated link</MenuItem>\n", 
	                  "  </Menu>\n", 
	                  "</ButtonGroup>\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Split button dropdowns"), 
	            React.DOM.p(null, 
	              "Similarly, create split button dropdowns with the same markup changes, only with a separate Button."
	            ), 
	            Well(null, 
	              ButtonGroup(null, 
	                Button(null, "Default"), 
	                DropdownButton({container: this, menu: "menu18"}, 
	                  Caret(null)
	                ), 
	                Menu({ref: "menu18"}, 
	                  MenuItem({href: "#"}, "Action"), 
	                  MenuItem({href: "#"}, "Another Action"), 
	                  MenuItem({href: "#"}, "Something else here"), 
	                  MenuItem({divider: true}), 
	                  MenuItem({href: "#"}, "Separated link")
	                )
	              ), ' ', 
	              ButtonGroup(null, 
	                Button({bsStyle: "primary"}, "Primary"), 
	                DropdownButton({container: this, menu: "menu19", bsStyle: "primary"}, 
	                  Caret(null)
	                ), 
	                Menu({ref: "menu19", bsStyle: "primary"}, 
	                  MenuItem({href: "#"}, "Action"), 
	                  MenuItem({href: "#"}, "Another Action"), 
	                  MenuItem({href: "#"}, "Something else here"), 
	                  MenuItem({divider: true}), 
	                  MenuItem({href: "#"}, "Separated link")
	                )
	              ), ' ', 
	              ButtonGroup(null, 
	                Button({bsStyle: "success"}, "Success"), 
	                DropdownButton({container: this, menu: "menu20", bsStyle: "success"}, 
	                  Caret(null)
	                ), 
	                Menu({ref: "menu20", bsStyle: "success"}, 
	                  MenuItem({href: "#"}, "Action"), 
	                  MenuItem({href: "#"}, "Another Action"), 
	                  MenuItem({href: "#"}, "Something else here"), 
	                  MenuItem({divider: true}), 
	                  MenuItem({href: "#"}, "Separated link")
	                )
	              ), ' ', 
	              ButtonGroup(null, 
	                Button({bsStyle: "info"}, "Info"), 
	                DropdownButton({container: this, menu: "menu21", bsStyle: "info"}, 
	                  Caret(null)
	                ), 
	                Menu({ref: "menu21", bsStyle: "info"}, 
	                  MenuItem({href: "#"}, "Action"), 
	                  MenuItem({href: "#"}, "Another Action"), 
	                  MenuItem({href: "#"}, "Something else here"), 
	                  MenuItem({divider: true}), 
	                  MenuItem({href: "#"}, "Separated link")
	                )
	              ), ' ', 
	              ButtonGroup(null, 
	                Button({bsStyle: "warning"}, "Warning"), 
	                DropdownButton({container: this, menu: "menu22", bsStyle: "warning"}, 
	                  Caret(null)
	                ), 
	                Menu({ref: "menu22", bsStyle: "warning"}, 
	                  MenuItem({href: "#"}, "Action"), 
	                  MenuItem({href: "#"}, "Another Action"), 
	                  MenuItem({href: "#"}, "Something else here"), 
	                  MenuItem({divider: true}), 
	                  MenuItem({href: "#"}, "Separated link")
	                )
	              ), ' ', 
	              ButtonGroup(null, 
	                Button({bsStyle: "danger"}, "Danger"), 
	                DropdownButton({container: this, menu: "menu23", bsStyle: "danger"}, 
	                  Caret(null)
	                ), 
	                Menu({ref: "menu23", bsStyle: "danger"}, 
	                  MenuItem({href: "#"}, "Action"), 
	                  MenuItem({href: "#"}, "Another Action"), 
	                  MenuItem({href: "#"}, "Something else here"), 
	                  MenuItem({divider: true}), 
	                  MenuItem({href: "#"}, "Separated link")
	                )
	              ), ' '
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<ButtonGroup>\n", 
	                  "  <Button>Default</Button>\n", 
	                  "  <DropdownButton container={this} menu='menu18'>\n", 
	                  "    <Caret/>\n", 
	                  "  </DropdownButton>\n", 
	                  "  <Menu ref='menu18'>\n", 
	                  "    <MenuItem href='#'>Action</MenuItem>\n", 
	                  "    <MenuItem href='#'>Another Action</MenuItem>\n", 
	                  "    <MenuItem href='#'>Something else here</MenuItem>\n", 
	                  "    <MenuItem divider></MenuItem>\n", 
	                  "    <MenuItem href='#'>Separated link</MenuItem>\n", 
	                  "  </Menu>\n", 
	                  "</ButtonGroup>{' '}\n", 
	                  "<ButtonGroup>\n", 
	                  "  <Button bsStyle='primary'>Primary</Button>\n", 
	                  "  <DropdownButton container={this} menu='menu19' bsStyle='primary'>\n", 
	                  "    <Caret/>\n", 
	                  "  </DropdownButton>\n", 
	                  "  <Menu ref='menu19' bsStyle='primary'>\n", 
	                  "    <MenuItem href='#'>Action</MenuItem>\n", 
	                  "    <MenuItem href='#'>Another Action</MenuItem>\n", 
	                  "    <MenuItem href='#'>Something else here</MenuItem>\n", 
	                  "    <MenuItem divider></MenuItem>\n", 
	                  "    <MenuItem href='#'>Separated link</MenuItem>\n", 
	                  "  </Menu>\n", 
	                  "</ButtonGroup>{' '}\n", 
	                  "<ButtonGroup>\n", 
	                  "  <Button bsStyle='success'>Success</Button>\n", 
	                  "  <DropdownButton container={this} menu='menu20' bsStyle='success'>\n", 
	                  "    <Caret/>\n", 
	                  "  </DropdownButton>\n", 
	                  "  <Menu ref='menu20' bsStyle='success'>\n", 
	                  "    <MenuItem href='#'>Action</MenuItem>\n", 
	                  "    <MenuItem href='#'>Another Action</MenuItem>\n", 
	                  "    <MenuItem href='#'>Something else here</MenuItem>\n", 
	                  "    <MenuItem divider></MenuItem>\n", 
	                  "    <MenuItem href='#'>Separated link</MenuItem>\n", 
	                  "  </Menu>\n", 
	                  "</ButtonGroup>{' '}\n", 
	                  "<ButtonGroup>\n", 
	                  "  <Button bsStyle='info'>Info</Button>\n", 
	                  "  <DropdownButton container={this} menu='menu21' bsStyle='info'>\n", 
	                  "    <Caret/>\n", 
	                  "  </DropdownButton>\n", 
	                  "  <Menu ref='menu21' bsStyle='info'>\n", 
	                  "    <MenuItem href='#'>Action</MenuItem>\n", 
	                  "    <MenuItem href='#'>Another Action</MenuItem>\n", 
	                  "    <MenuItem href='#'>Something else here</MenuItem>\n", 
	                  "    <MenuItem divider></MenuItem>\n", 
	                  "    <MenuItem href='#'>Separated link</MenuItem>\n", 
	                  "  </Menu>\n", 
	                  "</ButtonGroup>{' '}\n", 
	                  "<ButtonGroup>\n", 
	                  "  <Button bsStyle='warning'>Warning</Button>\n", 
	                  "  <DropdownButton container={this} menu='menu22' bsStyle='warning'>\n", 
	                  "    <Caret/>\n", 
	                  "  </DropdownButton>\n", 
	                  "  <Menu ref='menu22' bsStyle='warning'>\n", 
	                  "    <MenuItem href='#'>Action</MenuItem>\n", 
	                  "    <MenuItem href='#'>Another Action</MenuItem>\n", 
	                  "    <MenuItem href='#'>Something else here</MenuItem>\n", 
	                  "    <MenuItem divider></MenuItem>\n", 
	                  "    <MenuItem href='#'>Separated link</MenuItem>\n", 
	                  "  </Menu>\n", 
	                  "</ButtonGroup>{' '}\n", 
	                  "<ButtonGroup>\n", 
	                  "  <Button bsStyle='danger'>Danger</Button>\n", 
	                  "  <DropdownButton container={this} menu='menu23' bsStyle='danger'>\n", 
	                  "    <Caret/>\n", 
	                  "  </DropdownButton>\n", 
	                  "  <Menu ref='menu23' bsStyle='danger'>\n", 
	                  "    <MenuItem href='#'>Action</MenuItem>\n", 
	                  "    <MenuItem href='#'>Another Action</MenuItem>\n", 
	                  "    <MenuItem href='#'>Something else here</MenuItem>\n", 
	                  "    <MenuItem divider></MenuItem>\n", 
	                  "    <MenuItem href='#'>Separated link</MenuItem>\n", 
	                  "  </Menu>\n", 
	                  "</ButtonGroup>{' '}\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Dropup variation"), 
	            React.DOM.p(null, 
	              "Trigger dropup menus by adding dropup prop to a ButtonGroup/Dropdown component."
	            ), 
	            Well(null, 
	              ButtonGroup({dropup: true}, 
	                Button(null, "Dropup "), 
	                DropdownButton({container: this, menu: "menu27"}, 
	                  Caret(null)
	                ), 
	                Menu({ref: "menu27"}, 
	                  MenuItem({href: "#"}, "Action"), 
	                  MenuItem({href: "#"}, "Another Action"), 
	                  MenuItem({href: "#"}, "Something else here"), 
	                  MenuItem({divider: true}), 
	                  MenuItem({href: "#"}, "Separated link")
	                )
	              ), ' ', 
	              ButtonGroup({dropup: true}, 
	                Button({bsStyle: "primary"}, "Dropup "), 
	                DropdownButton({container: this, menu: "menu28", bsStyle: "primary"}, 
	                  Caret(null)
	                ), 
	                Menu({ref: "menu28", bsStyle: "primary"}, 
	                  MenuItem({href: "#"}, "Action"), 
	                  MenuItem({href: "#"}, "Another Action"), 
	                  MenuItem({href: "#"}, "Something else here"), 
	                  MenuItem({divider: true}), 
	                  MenuItem({href: "#"}, "Separated link")
	                )
	              ), ' '
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<ButtonGroup dropup>\n", 
	                  "  <Button>Dropup </Button>\n", 
	                  "  <DropdownButton container={this} menu='menu27'>\n", 
	                  "    <Caret/>\n", 
	                  "  </DropdownButton>\n", 
	                  "  <Menu ref='menu27'>\n", 
	                  "    <MenuItem href='#'>Action</MenuItem>\n", 
	                  "    <MenuItem href='#'>Another Action</MenuItem>\n", 
	                  "    <MenuItem href='#'>Something else here</MenuItem>\n", 
	                  "    <MenuItem divider></MenuItem>\n", 
	                  "    <MenuItem href='#'>Separated link</MenuItem>\n", 
	                  "  </Menu>\n", 
	                  "</ButtonGroup>{' '}\n", 
	                  "<ButtonGroup dropup>\n", 
	                  "  <Button bsStyle='primary'>Dropup </Button>\n", 
	                  "  <DropdownButton container={this} menu='menu28' bsStyle='primary'>\n", 
	                  "    <Caret/>\n", 
	                  "  </DropdownButton>\n", 
	                  "  <Menu ref='menu28' bsStyle='primary'>\n", 
	                  "    <MenuItem href='#'>Action</MenuItem>\n", 
	                  "    <MenuItem href='#'>Another Action</MenuItem>\n", 
	                  "    <MenuItem href='#'>Something else here</MenuItem>\n", 
	                  "    <MenuItem divider></MenuItem>\n", 
	                  "    <MenuItem href='#'>Separated link</MenuItem>\n", 
	                  "  </Menu>\n", 
	                  "</ButtonGroup>{' '}\n"
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
	var DropdownsDoc = React.createClass({displayName: 'DropdownsDoc',
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

	module.exports = DropdownsDoc;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(39);
	var Sidebar = __webpack_require__(40);
	var Footer = __webpack_require__(41);

	var Doc = __webpack_require__(38);
	var DocUnit = Doc.DocUnit;
	var DocContainer = Doc.DocContainer;

	var Body = React.createClass({displayName: 'Body',
	  componentDidMount: function() {
	    Prism.highlightAll();
	  },
	  render: function() {
	    return (
	      Container({id: "body"}, 
	        DocContainer(null, 
	          DocUnit({name: "Bootstrap: Button Groups"}, 
	            React.DOM.h4({className: "fg-black50"}, "Basic Example"), 
	            React.DOM.p(null, 
	              "Group a series of Buttons together on a single line with the ButtonGroup component."
	            ), 
	            Well(null, 
	              ButtonGroup(null, 
	                Button({bsStyle: "blue"}, "Left"), 
	                Button({bsStyle: "blue"}, "Middle"), 
	                Button({bsStyle: "blue"}, "Right")
	              )
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<ButtonGroup>\n", 
	                  "  <Button bsStyle='blue'>Left</Button>\n", 
	                  "  <Button bsStyle='blue'>Middle</Button>\n", 
	                  "  <Button bsStyle='blue'>Right</Button>\n", 
	                  "</ButtonGroup>\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Button Toolbar"), 
	            React.DOM.p(null, 
	              "Combine sets of ButtonGroup into a ButtonToolbar for more complex components."
	            ), 
	            Well(null, 
	              ButtonToolbar(null, 
	                ButtonGroup(null, 
	                  Button({bsStyle: "blue"}, "1"), 
	                  Button({bsStyle: "blue"}, "2"), 
	                  Button({bsStyle: "blue"}, "3"), 
	                  Button({bsStyle: "blue"}, "4")
	                ), 
	                ButtonGroup(null, 
	                  Button({bsStyle: "green"}, "5"), 
	                  Button({bsStyle: "green"}, "6"), 
	                  Button({bsStyle: "green"}, "7")
	                ), 
	                ButtonGroup(null, 
	                  Button({bsStyle: "red"}, "8")
	                )
	              )
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<ButtonToolbar>\n", 
	                  "  <ButtonGroup>\n", 
	                  "    <Button bsStyle='blue'>1</Button>\n", 
	                  "    <Button bsStyle='blue'>2</Button>\n", 
	                  "    <Button bsStyle='blue'>3</Button>\n", 
	                  "    <Button bsStyle='blue'>4</Button>\n", 
	                  "  </ButtonGroup>\n", 
	                  "  <ButtonGroup>\n", 
	                  "    <Button bsStyle='green'>5</Button>\n", 
	                  "    <Button bsStyle='green'>6</Button>\n", 
	                  "    <Button bsStyle='green'>7</Button>\n", 
	                  "  </ButtonGroup>\n", 
	                  "  <ButtonGroup>\n", 
	                  "    <Button bsStyle='red'>8</Button>\n", 
	                  "  </ButtonGroup>\n", 
	                  "</ButtonToolbar>\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Sizing"), 
	            React.DOM.p(null, 
	              "Instead of applying button sizing classes to every button in a group, just add lg/sm/xs to the ButtonGroup component itself."
	            ), 
	            Well({className: "text-center"}, 
	              React.DOM.div(null, 
	                ButtonGroup({lg: true}, 
	                  Button({bsStyle: "blue"}, "1"), 
	                  Button({bsStyle: "blue"}, "2"), 
	                  Button({bsStyle: "blue"}, "3"), 
	                  Button({bsStyle: "blue"}, "4")
	                )
	              ), React.DOM.br(null), 
	              React.DOM.div(null, 
	                ButtonGroup(null, 
	                  Button({bsStyle: "green"}, "1"), 
	                  Button({bsStyle: "green"}, "2"), 
	                  Button({bsStyle: "green"}, "3"), 
	                  Button({bsStyle: "green"}, "4")
	                )
	              ), React.DOM.br(null), 
	              React.DOM.div(null, 
	                ButtonGroup({sm: true}, 
	                  Button({bsStyle: "red"}, "1"), 
	                  Button({bsStyle: "red"}, "2"), 
	                  Button({bsStyle: "red"}, "3")
	                )
	              ), React.DOM.br(null), 
	              React.DOM.div(null, 
	                ButtonGroup({xs: true}, 
	                  Button({bsStyle: "yellow"}, "1"), 
	                  Button({bsStyle: "yellow"}, "2")
	                )
	              )
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<div>\n", 
	                  "  <ButtonGroup lg>\n", 
	                  "    <Button bsStyle='blue'>1</Button>\n", 
	                  "    <Button bsStyle='blue'>2</Button>\n", 
	                  "    <Button bsStyle='blue'>3</Button>\n", 
	                  "    <Button bsStyle='blue'>4</Button>\n", 
	                  "  </ButtonGroup>\n", 
	                  "</div><br/>\n", 
	                  "<div>\n", 
	                  "  <ButtonGroup>\n", 
	                  "    <Button bsStyle='green'>1</Button>\n", 
	                  "    <Button bsStyle='green'>2</Button>\n", 
	                  "    <Button bsStyle='green'>3</Button>\n", 
	                  "    <Button bsStyle='green'>4</Button>\n", 
	                  "  </ButtonGroup>\n", 
	                  "</div><br/>\n", 
	                  "<div>\n", 
	                  "  <ButtonGroup sm>\n", 
	                  "    <Button bsStyle='red'>1</Button>\n", 
	                  "    <Button bsStyle='red'>2</Button>\n", 
	                  "    <Button bsStyle='red'>3</Button>\n", 
	                  "  </ButtonGroup>\n", 
	                  "</div><br/>\n", 
	                  "<div>\n", 
	                  "  <ButtonGroup xs>\n", 
	                  "    <Button bsStyle='yellow'>1</Button>\n", 
	                  "    <Button bsStyle='yellow'>2</Button>\n", 
	                  "  </ButtonGroup>\n", 
	                  "</div>\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Nesting"), 
	            React.DOM.p(null, 
	              "Place a ButtonGroup within another ButtonGroup when you want Dropdown Menus mixed with a series of Button components."
	            ), 
	            Well({className: "text-center"}, 
	              ButtonGroup(null, 
	                Button({bsStyle: "darkcyan"}, "1"), 
	                Button({bsStyle: "darkcyan"}, "2"), 
	                ButtonGroup(null, 
	                  DropdownButton({container: this, menu: "menu5", bsStyle: "darkcyan"}, 
	                    React.DOM.span(null, "Dropdown "), Caret(null)
	                  ), 
	                  Menu({ref: "menu5", bsStyle: "darkcyan"}, 
	                    MenuItem({href: "#"}, "Regular link"), 
	                    MenuItem({href: "#", disabled: true}, "Disabled link"), 
	                    MenuItem({href: "#"}, "Another link")
	                  )
	                )
	              )
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<ButtonGroup>\n", 
	                  "  <Button bsStyle='darkcyan'>1</Button>\n", 
	                  "  <Button bsStyle='darkcyan'>2</Button>\n", 
	                  "  <ButtonGroup>\n", 
	                  "    <DropdownButton container={this} menu='menu5'>\n", 
	                  "      <span>Dropdown </span><Caret/>\n", 
	                  "    </DropdownButton>\n", 
	                  "    <Menu ref='menu5'>\n", 
	                  "      <MenuItem href='#'>Regular link</MenuItem>\n", 
	                  "      <MenuItem href='#' disabled>Disabled link</MenuItem>\n", 
	                  "      <MenuItem href='#'>Another link</MenuItem>\n", 
	                  "    </Menu>\n", 
	                  "  </ButtonGroup>\n", 
	                  "</ButtonGroup>\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Vertical variation"), 
	            React.DOM.p(null, 
	              "Make a set of buttons appear vertically stacked rather than horizontally."
	            ), 
	            Well({className: "text-center"}, 
	              ButtonGroup({vertical: true}, 
	                Button({bsStyle: "pink"}, "Button"), 
	                Button({bsStyle: "pink"}, "Button"), 
	                ButtonGroup(null, 
	                  DropdownButton({bsStyle: "pink", container: this, menu: "menu6"}, 
	                    React.DOM.span(null, "Dropdown "), Caret(null)
	                  ), 
	                  Menu({bsStyle: "pink", ref: "menu6"}, 
	                    MenuItem({href: "#"}, "Regular link"), 
	                    MenuItem({href: "#", disabled: true}, "Disabled link"), 
	                    MenuItem({href: "#"}, "Another link")
	                  )
	                ), 
	                Button({bsStyle: "pink"}, "Button"), 
	                Button({bsStyle: "pink"}, "Button"), 
	                ButtonGroup(null, 
	                  DropdownButton({bsStyle: "pink", container: this, menu: "menu7"}, 
	                    React.DOM.span(null, "Dropdown "), Caret(null)
	                  ), 
	                  Menu({bsStyle: "pink", ref: "menu7"}, 
	                    MenuItem({href: "#"}, "Regular link"), 
	                    MenuItem({href: "#", disabled: true}, "Disabled link"), 
	                    MenuItem({href: "#"}, "Another link")
	                  )
	                ), 
	                ButtonGroup(null, 
	                  DropdownButton({bsStyle: "pink", container: this, menu: "menu8"}, 
	                    React.DOM.span(null, "Dropdown "), Caret(null)
	                  ), 
	                  Menu({bsStyle: "pink", ref: "menu8"}, 
	                    MenuItem({href: "#"}, "Regular link"), 
	                    MenuItem({href: "#", disabled: true}, "Disabled link"), 
	                    MenuItem({href: "#"}, "Another link")
	                  )
	                ), 
	                ButtonGroup(null, 
	                  DropdownButton({bsStyle: "pink", container: this, menu: "menu9"}, 
	                    React.DOM.span(null, "Dropdown "), Caret(null)
	                  ), 
	                  Menu({bsStyle: "pink", ref: "menu9"}, 
	                    MenuItem({href: "#"}, "Regular link"), 
	                    MenuItem({href: "#", disabled: true}, "Disabled link"), 
	                    MenuItem({href: "#"}, "Another link")
	                  )
	                )
	              )
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<ButtonGroup vertical>\n", 
	                  "  <Button bsStyle='pink'>Button</Button>\n", 
	                  "  <Button bsStyle='pink'>Button</Button>\n", 
	                  "  <ButtonGroup>\n", 
	                  "    <DropdownButton bsStyle='pink' container={this} menu='menu6'>\n", 
	                  "      <span>Dropdown </span><Caret/>\n", 
	                  "    </DropdownButton>\n", 
	                  "    <Menu bsStyle='pink' ref='menu6'>\n", 
	                  "      <MenuItem href='#'>Regular link</MenuItem>\n", 
	                  "      <MenuItem href='#' disabled>Disabled link</MenuItem>\n", 
	                  "      <MenuItem href='#'>Another link</MenuItem>\n", 
	                  "    </Menu>\n", 
	                  "  </ButtonGroup>\n", 
	                  "  <Button bsStyle='pink'>Button</Button>\n", 
	                  "  <Button bsStyle='pink'>Button</Button>\n", 
	                  "  <ButtonGroup>\n", 
	                  "    <DropdownButton bsStyle='pink' container={this} menu='menu7'>\n", 
	                  "      <span>Dropdown </span><Caret/>\n", 
	                  "    </DropdownButton>\n", 
	                  "    <Menu bsStyle='pink' ref='menu7'>\n", 
	                  "      <MenuItem href='#'>Regular link</MenuItem>\n", 
	                  "      <MenuItem href='#' disabled>Disabled link</MenuItem>\n", 
	                  "      <MenuItem href='#'>Another link</MenuItem>\n", 
	                  "    </Menu>\n", 
	                  "  </ButtonGroup>\n", 
	                  "  <ButtonGroup>\n", 
	                  "    <DropdownButton bsStyle='pink' container={this} menu='menu8'>\n", 
	                  "      <span>Dropdown </span><Caret/>\n", 
	                  "    </DropdownButton>\n", 
	                  "    <Menu bsStyle='pink' ref='menu8'>\n", 
	                  "      <MenuItem href='#'>Regular link</MenuItem>\n", 
	                  "      <MenuItem href='#' disabled>Disabled link</MenuItem>\n", 
	                  "      <MenuItem href='#'>Another link</MenuItem>\n", 
	                  "    </Menu>\n", 
	                  "  </ButtonGroup>\n", 
	                  "  <ButtonGroup>\n", 
	                  "    <DropdownButton bsStyle='pink' container={this} menu='menu9'>\n", 
	                  "      <span>Dropdown </span><Caret/>\n", 
	                  "    </DropdownButton>\n", 
	                  "    <Menu bsStyle='pink' ref='menu9'>\n", 
	                  "      <MenuItem href='#'>Regular link</MenuItem>\n", 
	                  "      <MenuItem href='#' disabled>Disabled link</MenuItem>\n", 
	                  "      <MenuItem href='#'>Another link</MenuItem>\n", 
	                  "    </Menu>\n", 
	                  "  </ButtonGroup>\n", 
	                  "</ButtonGroup>\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Justified button groups"), 
	            React.DOM.p(null, 
	              "Make a set of buttons appear vertically stacked rather than horizontally."
	            ), 
	            Well({className: "text-center"}, 
	              ButtonGroup({justified: true}, 
	                Button({bsStyle: "purple", componentClass: React.DOM.a}, "Left"), 
	                Button({bsStyle: "purple", componentClass: React.DOM.a}, "Middle"), 
	                ButtonGroup(null, 
	                  DropdownButton({bsStyle: "purple", container: this, menu: "menu10"}, 
	                    React.DOM.span(null, "Dropdown "), Caret(null)
	                  ), 
	                  Menu({ref: "menu10", alignRight: true, bsStyle: "purple"}, 
	                    MenuItem({href: "#"}, "Regular link"), 
	                    MenuItem({href: "#", disabled: true}, "Disabled link"), 
	                    MenuItem({href: "#"}, "Another link")
	                  )
	                )
	              )
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<ButtonGroup justified>\n", 
	                  "  <Button bsStyle='purple' componentClass={React.DOM.a}>Left</Button>\n", 
	                  "  <Button bsStyle='purple' componentClass={React.DOM.a}>Middle</Button>\n", 
	                  "  <ButtonGroup>\n", 
	                  "    <DropdownButton bsStyle='purple' container={this} menu='menu10'>\n", 
	                  "      <span>Dropdown </span><Caret/>\n", 
	                  "    </DropdownButton>\n", 
	                  "    <Menu ref='menu10' alignRight bsStyle='purple'>\n", 
	                  "      <MenuItem href='#'>Regular link</MenuItem>\n", 
	                  "      <MenuItem href='#' disabled>Disabled link</MenuItem>\n", 
	                  "      <MenuItem href='#'>Another link</MenuItem>\n", 
	                  "    </Menu>\n", 
	                  "  </ButtonGroup>\n", 
	                  "</ButtonGroup>\n"
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
	var ButtonGroupsDocs = React.createClass({displayName: 'ButtonGroupsDocs',
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

	module.exports = ButtonGroupsDocs;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(39);
	var Sidebar = __webpack_require__(40);
	var Footer = __webpack_require__(41);

	var Doc = __webpack_require__(38);
	var DocUnit = Doc.DocUnit;
	var DocContainer = Doc.DocContainer;

	var Body = React.createClass({displayName: 'Body',
	  componentDidMount: function() {
	    Prism.highlightAll();
	  },
	  render: function() {
	    return (
	      Container({id: "body"}, 
	        DocContainer(null, 
	          DocUnit({name: "Bootstrap: Input Groups"}, 
	            React.DOM.h4({className: "fg-black50"}, "Basic Example"), 
	            React.DOM.p(null, 
	              "Extend ", React.DOM.code(null, "Input"), " components by adding text or buttons before, after, or on both sides of any text-based input. Use ", React.DOM.code(null, "InputGroup"), " with an ", React.DOM.code(null, "InputGroupAddon"), " to prepend or append elements to a single ", React.DOM.code(null, "Input"), "."
	            ), 
	            Well({className: "bg-white"}, 
	              InputGroup(null, 
	                InputGroupAddon(null, "@"), 
	                Input({type: "text", placeholder: "Username"})
	              ), React.DOM.br(null), 
	              InputGroup(null, 
	                Input({type: "text"}), 
	                InputGroupAddon(null, ".00")
	              ), React.DOM.br(null), 
	              InputGroup(null, 
	                InputGroupAddon(null, "$"), 
	                Input({type: "text"}), 
	                InputGroupAddon(null, ".00")
	              )
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<InputGroup>\n", 
	                  "  <InputGroupAddon>@</InputGroupAddon>\n", 
	                  "  <Input type='text' placeholder='Username'/>\n", 
	                  "</InputGroup><br/>\n", 
	                  "<InputGroup>\n", 
	                  "  <Input type='text'/>\n", 
	                  "  <InputGroupAddon>.00</InputGroupAddon>\n", 
	                  "</InputGroup><br/>\n", 
	                  "<InputGroup>\n", 
	                  "  <InputGroupAddon>$</InputGroupAddon>\n", 
	                  "  <Input type='text'/>\n", 
	                  "  <InputGroupAddon>.00</InputGroupAddon>\n", 
	                  "</InputGroup>\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Sizing"), 
	            React.DOM.p(null, 
	              "Add the relative form sizing classes to the ", React.DOM.code(null, "InputGroup"), " itself and contents within will automatically resize—no need for repeating the form control size classes on each element."
	            ), 
	            Well({className: "bg-white"}, 
	              InputGroup({lg: true}, 
	                InputGroupAddon(null, "@"), 
	                Input({type: "text", placeholder: "Username"})
	              ), React.DOM.br(null), 
	              InputGroup(null, 
	                InputGroupAddon(null, "@"), 
	                Input({type: "text", placeholder: "Username"})
	              ), React.DOM.br(null), 
	              InputGroup({sm: true}, 
	                InputGroupAddon(null, "@"), 
	                Input({type: "text", placeholder: "Username"})
	              )
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<InputGroup lg>\n", 
	                  "  <InputGroupAddon>@</InputGroupAddon>\n", 
	                  "  <Input type='text' placeholder='Username'/>\n", 
	                  "</InputGroup><br/>\n", 
	                  "<InputGroup>\n", 
	                  "  <InputGroupAddon>@</InputGroupAddon>\n", 
	                  "  <Input type='text' placeholder='Username'/>\n", 
	                  "</InputGroup><br/>\n", 
	                  "<InputGroup sm>\n", 
	                  "  <InputGroupAddon>@</InputGroupAddon>\n", 
	                  "  <Input type='text' placeholder='Username'/>\n", 
	                  "</InputGroup>\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Checkboxes and Radio addons"), 
	            React.DOM.p(null, 
	              "Place any checkbox or radio option within an ", React.DOM.code(null, "InputGroupAddon"), " instead of text.."
	            ), 
	            Well({className: "bg-white"}, 
	              Grid(null, 
	                Row(null, 
	                  Col({xs: 6}, 
	                    InputGroup(null, 
	                      InputGroupAddon(null, Checkbox({native: true})), 
	                      Input({type: "text", placeholder: "Username"})
	                    )
	                  ), 
	                  Col({xs: 6}, 
	                    InputGroup(null, 
	                      InputGroupAddon(null, Radio({native: true})), 
	                      Input({type: "text", placeholder: "Username"})
	                    )
	                  )
	                )
	              )
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<Grid>\n", 
	                  "  <Row>\n", 
	                  "    <Col xs={6}>\n", 
	                  "      <InputGroup>\n", 
	                  "        <InputGroupAddon><Checkbox native/></InputGroupAddon>\n", 
	                  "        <Input type='text' placeholder='Username'/>\n", 
	                  "      </InputGroup>\n", 
	                  "    </Col>\n", 
	                  "    <Col xs={6}>\n", 
	                  "      <InputGroup>\n", 
	                  "        <InputGroupAddon><Radio native/></InputGroupAddon>\n", 
	                  "        <Input type='text' placeholder='Username'/>\n", 
	                  "      </InputGroup>\n", 
	                  "    </Col>\n", 
	                  "  </Row>\n", 
	                  "</Grid>\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Button addons"), 
	            Well({className: "bg-white"}, 
	              Grid(null, 
	                Row(null, 
	                  Col({xs: 6}, 
	                    InputGroup(null, 
	                      InputGroupButton(null, Button({onlyOnHover: true}, "Go!")), 
	                      Input({type: "text", placeholder: "Username"})
	                    )
	                  ), 
	                  Col({xs: 6}, 
	                    InputGroup(null, 
	                      Input({type: "text", placeholder: "Username"}), 
	                      InputGroupButton(null, Button({onlyOnHover: true}, "Go!"))
	                    )
	                  )
	                )
	              )
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<Grid>\n", 
	                  "  <Row>\n", 
	                  "    <Col xs={6}>\n", 
	                  "      <InputGroup>\n", 
	                  "        <InputGroupButton><Button onlyOnHover>Go!</Button></InputGroupButton>\n", 
	                  "        <Input type='text' placeholder='Username'/>\n", 
	                  "      </InputGroup>\n", 
	                  "    </Col>\n", 
	                  "    <Col xs={6}>\n", 
	                  "      <InputGroup>\n", 
	                  "        <Input type='text' placeholder='Username'/>\n", 
	                  "        <InputGroupButton><Button onlyOnHover>Go!</Button></InputGroupButton>\n", 
	                  "      </InputGroup>\n", 
	                  "    </Col>\n", 
	                  "  </Row>\n", 
	                  "</Grid>\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Button with dropdowns"), 
	            Well({className: "bg-white"}, 
	              Grid(null, 
	                Row(null, 
	                  Col({xs: 6}, 
	                    InputGroup(null, 
	                      InputGroupButton(null, 
	                        DropdownButton({onlyOnHover: true, container: this, menu: "menu29"}, 
	                          React.DOM.span(null, "Action "), Caret(null)
	                        ), 
	                        Menu({ref: "menu29"}, 
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
	                  Col({xs: 6}, 
	                    InputGroup(null, 
	                      Input({type: "text", placeholder: "Username"}), 
	                      InputGroupButton(null, 
	                        DropdownButton({onlyOnHover: true, container: this, menu: "menu30"}, 
	                          React.DOM.span(null, "Action "), Caret(null)
	                        ), 
	                        Menu({ref: "menu30", alignRight: true}, 
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
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<Grid>\n", 
	                  "  <Row>\n", 
	                  "    <Col xs={6}>\n", 
	                  "      <InputGroup>\n", 
	                  "        <InputGroupButton>\n", 
	                  "          <DropdownButton onlyOnHover container={this} menu='menu29'>\n", 
	                  "            <span>Action </span><Caret/>\n", 
	                  "          </DropdownButton>\n", 
	                  "          <Menu ref='menu29'>\n", 
	                  "            <MenuItem href='#'>Action</MenuItem>\n", 
	                  "            <MenuItem href='#'>Another Action</MenuItem>\n", 
	                  "            <MenuItem href='#'>Something else here</MenuItem>\n", 
	                  "            <MenuItem divider></MenuItem>\n", 
	                  "            <MenuItem href='#'>Separated link</MenuItem>\n", 
	                  "          </Menu>\n", 
	                  "        </InputGroupButton>\n", 
	                  "        <Input type='text' placeholder='Username'/>\n", 
	                  "      </InputGroup>\n", 
	                  "    </Col>\n", 
	                  "    <Col xs={6}>\n", 
	                  "      <InputGroup>\n", 
	                  "        <Input type='text' placeholder='Username'/>\n", 
	                  "        <InputGroupButton>\n", 
	                  "          <DropdownButton onlyOnHover container={this} menu='menu30'>\n", 
	                  "            <span>Action </span><Caret/>\n", 
	                  "          </DropdownButton>\n", 
	                  "          <Menu ref='menu30' alignRight>\n", 
	                  "            <MenuItem href='#'>Action</MenuItem>\n", 
	                  "            <MenuItem href='#'>Another Action</MenuItem>\n", 
	                  "            <MenuItem href='#'>Something else here</MenuItem>\n", 
	                  "            <MenuItem divider></MenuItem>\n", 
	                  "            <MenuItem href='#'>Separated link</MenuItem>\n", 
	                  "          </Menu>\n", 
	                  "        </InputGroupButton>\n", 
	                  "      </InputGroup>\n", 
	                  "    </Col>\n", 
	                  "  </Row>\n", 
	                  "</Grid>\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Segmented buttons"), 
	            Well({className: "bg-white"}, 
	              Grid(null, 
	                Row(null, 
	                  Col({xs: 6}, 
	                    InputGroup(null, 
	                      InputGroupButton(null, 
	                        Button({onlyOnHover: true}, "Action "), 
	                        DropdownButton({onlyOnHover: true, container: this, menu: "menu31"}, 
	                          Caret(null)
	                        ), 
	                        Menu({ref: "menu31"}, 
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
	                  Col({xs: 6}, 
	                    InputGroup(null, 
	                      Input({type: "text", placeholder: "Username"}), 
	                      InputGroupButton(null, 
	                        Button({onlyOnHover: true}, "Action "), 
	                        DropdownButton({onlyOnHover: true, container: this, menu: "menu32"}, 
	                          Caret(null)
	                        ), 
	                        Menu({ref: "menu32", alignRight: true}, 
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
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<Grid>\n", 
	                  "  <Row>\n", 
	                  "    <Col xs={6}>\n", 
	                  "      <InputGroup>\n", 
	                  "        <InputGroupButton>\n", 
	                  "          <Button onlyOnHover>Action </Button>\n", 
	                  "          <DropdownButton onlyOnHover container={this} menu='menu31'>\n", 
	                  "            <Caret/>\n", 
	                  "          </DropdownButton>\n", 
	                  "          <Menu ref='menu31'>\n", 
	                  "            <MenuItem href='#'>Action</MenuItem>\n", 
	                  "            <MenuItem href='#'>Another Action</MenuItem>\n", 
	                  "            <MenuItem href='#'>Something else here</MenuItem>\n", 
	                  "            <MenuItem divider></MenuItem>\n", 
	                  "            <MenuItem href='#'>Separated link</MenuItem>\n", 
	                  "          </Menu>\n", 
	                  "        </InputGroupButton>\n", 
	                  "        <Input type='text' placeholder='Username'/>\n", 
	                  "      </InputGroup>\n", 
	                  "    </Col>\n", 
	                  "    <Col xs={6}>\n", 
	                  "      <InputGroup>\n", 
	                  "        <Input type='text' placeholder='Username'/>\n", 
	                  "        <InputGroupButton>\n", 
	                  "          <Button onlyOnHover>Action </Button>\n", 
	                  "          <DropdownButton onlyOnHover container={this} menu='menu32'>\n", 
	                  "            <Caret/>\n", 
	                  "          </DropdownButton>\n", 
	                  "          <Menu ref='menu32' alignRight>\n", 
	                  "            <MenuItem href='#'>Action</MenuItem>\n", 
	                  "            <MenuItem href='#'>Another Action</MenuItem>\n", 
	                  "            <MenuItem href='#'>Something else here</MenuItem>\n", 
	                  "            <MenuItem divider></MenuItem>\n", 
	                  "            <MenuItem href='#'>Separated link</MenuItem>\n", 
	                  "          </Menu>\n", 
	                  "        </InputGroupButton>\n", 
	                  "      </InputGroup>\n", 
	                  "    </Col>\n", 
	                  "  </Row>\n", 
	                  "</Grid>\n"
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
	var InputGroupsDocs = React.createClass({displayName: 'InputGroupsDocs',
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

	module.exports = InputGroupsDocs;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(39);
	var Sidebar = __webpack_require__(40);
	var Footer = __webpack_require__(41);

	var Doc = __webpack_require__(38);
	var DocUnit = Doc.DocUnit;
	var DocContainer = Doc.DocContainer;

	var basictab = __webpack_require__(72);
	var tabselect = __webpack_require__(73);

	var Body = React.createClass({displayName: 'Body',
	  componentDidMount: function() {
	    Prism.highlightAll();
	    this.refs.tablist.selectTab('pane', 'tab2:mdo');
	  },
	  handleSelect: function(tabprops) {
	    alert(tabprops.pane);
	  },
	  render: function() {
	    return (
	      Container({id: "body"}, 
	        DocContainer(null, 
	          DocUnit({name: "Bootstrap: Tabs"}, 
	            React.DOM.h4({className: "fg-black50"}, "Basic Example"), 
	            React.DOM.p(null, 
	              "Add quick, dynamic tab functionality to transition through panes of local content, even via dropdown menus."
	            ), 
	            Well({className: "bg-white"}, 
	              TabList({bsStyle: "orange75", onTabSelect: this.handleSelect, listName: "tab1"}, 
	                Tab({pane: "tab1:home", active: true}, "Home"), 
	                Tab({pane: "tab1:profile"}, "Profile"), 
	                Tab(null, 
	                  DropdownButton({tab: true, container: this, menu: "menu33"}, 
	                    React.DOM.span(null, "Dropdown "), Caret(null)
	                  ), 
	                  Menu({autoHide: true, ref: "menu33", bsStyle: "orange75"}, 
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
	              TabContent(null, 
	                TabPane({ref: "tab1:home", active: true}, 
	                  LoremIpsum({query: "5s"})
	                ), 
	                TabPane({ref: "tab1:profile"}, 
	                  LoremIpsum({query: "5s"})
	                ), 
	                TabPane({ref: "tab1:fat"}, 
	                  LoremIpsum({query: "5s"})
	                ), 
	                TabPane({ref: "tab1:mdo"}, 
	                  LoremIpsum({query: "5s"})
	                )
	              )
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-javascript"}, 
	                  basictab
	                )
	              )
	            )
	          ), 
	          DocUnit({name: "Bootstrap: Tabs API", docStyle: "bg-red fg-white"}, 
	            React.DOM.h4({className: "fg-black50"}, React.DOM.code(null, "selectTab(key, value)")), 
	            React.DOM.p(null, 
	              "Select a tab programmatically by calling selectTab using a props key and value as a constraint."
	            ), 
	            Well({className: "bg-white"}, 
	              TabList({bsStyle: "orange75", ref: "tablist", listName: "tab2"}, 
	                Tab({pane: "tab2:home", active: true}, "Home"), 
	                Tab({pane: "tab2:profile"}, "Profile"), 
	                Tab(null, 
	                  DropdownButton({tab: true, container: this, menu: "menu34"}, 
	                    React.DOM.span(null, "Dropdown "), Caret(null)
	                  ), 
	                  Menu({autoHide: true, ref: "menu34", bsStyle: "orange75"}, 
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
	              ), 
	              TabContent(null, 
	                TabPane({ref: "tab2:home", active: true}, 
	                  LoremIpsum({query: "5s"})
	                ), 
	                TabPane({ref: "tab2:profile"}, 
	                  LoremIpsum({query: "5s"})
	                ), 
	                TabPane({ref: "tab2:fat"}, 
	                  LoremIpsum({query: "5s"})
	                ), 
	                TabPane({ref: "tab2:mdo"}, 
	                  LoremIpsum({query: "5s"})
	                )
	              )
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-javascript"}, 
	                  tabselect
	                )
	              )
	            )
	          ), 
	          DocUnit({name: "Bootstrap: Pills"}, 
	            React.DOM.h4({className: "fg-black50"}, "Basic Example"), 
	            React.DOM.p(null, 
	              "Similar markup to Tabs as above. Even the API is same as we reuse the same component."
	            ), 
	            Well({className: "bg-white"}, 
	              React.DOM.div({style: {marginLeft: -12.5, marginRight: -12.5}}, 
	                TabList({pills: true, bsStyle: "orange75", listName: "tab3"}, 
	                  Tab({pane: "tab3:home", active: true}, "Home"), 
	                  Tab({pane: "tab3:profile"}, "Profile"), 
	                  Tab(null, 
	                    DropdownButton({tab: true, container: this, menu: "menupills1"}, 
	                      React.DOM.span(null, "Dropdown "), Caret(null)
	                    ), 
	                    Menu({autoHide: true, ref: "menupills1", bsStyle: "orange75"}, 
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
	                ), 
	                Grid(null, 
	                  Row(null, 
	                    Col({xs: 12}, 
	                      TabContent({style: {marginTop: 12.5}}, 
	                        TabPane({ref: "tab3:home", active: true}, 
	                          LoremIpsum({query: "5s"})
	                        ), 
	                        TabPane({ref: "tab3:profile"}, 
	                          LoremIpsum({query: "5s"})
	                        ), 
	                        TabPane({ref: "tab3:fat"}, 
	                          LoremIpsum({query: "5s"})
	                        ), 
	                        TabPane({ref: "tab3:mdo"}, 
	                          LoremIpsum({query: "5s"})
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<TabList pills bsStyle='orange75' listName='tab3'>\n", 
	                  "  <Tab pane='tab3:home' active>Home</Tab>\n", 
	                  "  <Tab pane='tab3:profile'>Profile</Tab>\n", 
	                  "  <Tab>\n", 
	                  "    <DropdownButton tab container={this} menu='menupills1'>\n", 
	                  "      <span>Dropdown </span><Caret/>\n", 
	                  "    </DropdownButton>\n", 
	                  "    <Menu autoHide ref='menupills1' bsStyle='orange75'>\n", 
	                  "      <MenuItem href='#'>\n", 
	                  "        <Tab dropdown pane='tab3:fat'>\n", 
	                  "          @fat\n", 
	                  "        </Tab>\n", 
	                  "      </MenuItem>\n", 
	                  "      <MenuItem href='#'>\n", 
	                  "        <Tab dropdown pane='tab3:mdo'>\n", 
	                  "          @mdo\n", 
	                  "        </Tab>\n", 
	                  "      </MenuItem>\n", 
	                  "    </Menu>\n", 
	                  "  </Tab>\n", 
	                  "</TabList>\n", 
	                  "<Grid>\n", 
	                  "  <Row>\n", 
	                  "    <Col xs={12}>\n", 
	                  "      <TabContent>\n", 
	                  "        <TabPane ref='tab3:home' active>\n", 
	                  "          <p><LoremIpsum query='5s' /></p>\n", 
	                  "        </TabPane>\n", 
	                  "        <TabPane ref='tab3:profile'>\n", 
	                  "          <p><LoremIpsum query='5s' /></p>\n", 
	                  "        </TabPane>\n", 
	                  "        <TabPane ref='tab3:fat'>\n", 
	                  "          <p><LoremIpsum query='5s' /></p>\n", 
	                  "        </TabPane>\n", 
	                  "        <TabPane ref='tab3:mdo'>\n", 
	                  "          <p><LoremIpsum query='5s' /></p>\n", 
	                  "        </TabPane>\n", 
	                  "      </TabContent>\n", 
	                  "    </Col>\n", 
	                  "  </Row>\n", 
	                  "</Grid>\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Justified pills"), 
	            React.DOM.p(null, 
	              "Easily make tabs or pills equal widths of their parent."
	            ), 
	            Well({className: "bg-white"}, 
	              React.DOM.div({style: {marginLeft: -12.5, marginRight: -12.5}}, 
	                TabList({pills: true, justified: true, bsStyle: "orange75", listName: "tab4"}, 
	                  Tab({pane: "tab4:home", active: true}, "Home"), 
	                  Tab({pane: "tab4:profile"}, "Profile"), 
	                  Tab(null, 
	                    DropdownButton({tab: true, container: this, menu: "menupills2"}, 
	                      React.DOM.span(null, "Dropdown "), Caret(null)
	                    ), 
	                    Menu({autoHide: true, ref: "menupills2", bsStyle: "orange75"}, 
	                      MenuItem({href: "#"}, 
	                        Tab({dropdown: true, pane: "tab4:fat"}, 
	                          "@fat"
	                        )
	                      ), 
	                      MenuItem({href: "#"}, 
	                        Tab({dropdown: true, pane: "tab4:mdo"}, 
	                          "@mdo"
	                        )
	                      )
	                    )
	                  )
	                ), 
	                TabContent({style: {marginTop: 12.5}}, 
	                  TabPane({ref: "tab4:home", active: true}, 
	                    LoremIpsum({query: "5s"})
	                  ), 
	                  TabPane({ref: "tab4:profile"}, 
	                    LoremIpsum({query: "5s"})
	                  ), 
	                  TabPane({ref: "tab4:fat"}, 
	                    LoremIpsum({query: "5s"})
	                  ), 
	                  TabPane({ref: "tab4:mdo"}, 
	                    LoremIpsum({query: "5s"})
	                  )
	                )
	              )
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<TabList pills bsStyle='orange75' listName='tab4'>\n", 
	                  "  <Tab pane='tab4:home' active>Home</Tab>\n", 
	                  "  <Tab pane='tab4:profile'>Profile</Tab>\n", 
	                  "  <Tab>\n", 
	                  "    <DropdownButton tab container={this} menu='menupills2'>\n", 
	                  "      <span>Dropdown </span><Caret/>\n", 
	                  "    </DropdownButton>\n", 
	                  "    <Menu autoHide ref='menupills2' bsStyle='orange75'>\n", 
	                  "      <MenuItem href='#'>\n", 
	                  "        <Tab dropdown pane='tab4:fat'>\n", 
	                  "          @fat\n", 
	                  "        </Tab>\n", 
	                  "      </MenuItem>\n", 
	                  "      <MenuItem href='#'>\n", 
	                  "        <Tab dropdown pane='tab4:mdo'>\n", 
	                  "          @mdo\n", 
	                  "        </Tab>\n", 
	                  "      </MenuItem>\n", 
	                  "    </Menu>\n", 
	                  "  </Tab>\n", 
	                  "</TabList>\n", 
	                  "<TabContent>\n", 
	                  "  <TabPane ref='tab4:home' active>\n", 
	                  "    <p><LoremIpsum query='5s' /></p>\n", 
	                  "  </TabPane>\n", 
	                  "  <TabPane ref='tab4:profile'>\n", 
	                  "    <p><LoremIpsum query='5s' /></p>\n", 
	                  "  </TabPane>\n", 
	                  "  <TabPane ref='tab4:fat'>\n", 
	                  "    <p><LoremIpsum query='5s' /></p>\n", 
	                  "  </TabPane>\n", 
	                  "  <TabPane ref='tab4:mdo'>\n", 
	                  "    <p><LoremIpsum query='5s' /></p>\n", 
	                  "  </TabPane>\n", 
	                  "</TabContent>\n"
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
	var NavDocs = React.createClass({displayName: 'NavDocs',
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

	module.exports = NavDocs;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(39);
	var Sidebar = __webpack_require__(40);
	var Footer = __webpack_require__(41);

	var Doc = __webpack_require__(38);
	var DocUnit = Doc.DocUnit;
	var DocContainer = Doc.DocContainer;

	var Body = React.createClass({displayName: 'Body',
	  componentDidMount: function() {
	    Prism.highlightAll();
	  },
	  render: function() {
	    return (
	      Container({id: "body"}, 
	        DocContainer(null, 
	          DocUnit({name: "Bootstrap: NavBar"}, 
	            React.DOM.h4({className: "fg-black50"}, "Basic Example"), 
	            React.DOM.p(null, 
	              "Navbars are responsive meta components that serve as navigation headers for your application or site."
	            ), 
	            Well(null, 
	              NavBar(null, 
	                Container({fluid: true}, 
	                  NavHeader(null, 
	                    NavToggle({container: this, nav: "navcontainer1"}, "Toggle navigation"), 
	                    NavBrand(null, "Brand")
	                  ), 
	                  NavContent({ref: "navcontainer1", collapse: true}, 
	                    Nav(null, 
	                      NavItem({active: true, href: "#"}, "Link 1"), 
	                      NavItem({href: "#"}, "Link 2"), 
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
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<NavBar>\n", 
	                  "  <Container fluid>\n", 
	                  "    <NavHeader>\n", 
	                  "      <NavToggle container={this} nav='navcontainer1'>Toggle navigation</NavToggle>\n", 
	                  "      <NavBrand>Brand</NavBrand>\n", 
	                  "    </NavHeader>\n", 
	                  "    <NavContent ref='navcontainer1' collapse>\n", 
	                  "      <Nav>\n", 
	                  "        <NavItem active href='#'>Link 1</NavItem>\n", 
	                  "        <NavItem href='#'>CSS</NavItem>\n", 
	                  "        <NavItem dropdown>\n", 
	                  "          <DropdownButton nav container={this} menu='navmenu1'>\n", 
	                  "            <span>Dropdown </span><Caret/>\n", 
	                  "          </DropdownButton>\n", 
	                  "          <Menu ref='navmenu1'>\n", 
	                  "            <MenuItem href='#'>Action</MenuItem>\n", 
	                  "            <MenuItem href='#'>Another Action</MenuItem>\n", 
	                  "            <MenuItem href='#'>Something else here</MenuItem>\n", 
	                  "            <MenuItem divider></MenuItem>\n", 
	                  "            <MenuItem href='#'>Separated link</MenuItem>\n", 
	                  "          </Menu>\n", 
	                  "        </NavItem>\n", 
	                  "      </Nav>\n", 
	                  "      <Nav right>\n", 
	                  "        <NavItem href='#'>Link 3</NavItem>\n", 
	                  "        <NavItem dropdown>\n", 
	                  "          <DropdownButton nav container={this} menu='navmenu2'>\n", 
	                  "            <span>Dropdown </span><Caret/>\n", 
	                  "          </DropdownButton>\n", 
	                  "          <Menu ref='navmenu2'>\n", 
	                  "            <MenuItem href='#'>Action</MenuItem>\n", 
	                  "            <MenuItem href='#'>Another Action</MenuItem>\n", 
	                  "            <MenuItem href='#'>Something else here</MenuItem>\n", 
	                  "            <MenuItem divider></MenuItem>\n", 
	                  "            <MenuItem href='#'>Separated link</MenuItem>\n", 
	                  "          </Menu>\n", 
	                  "        </NavItem>\n", 
	                  "      </Nav>\n", 
	                  "    </NavContent>\n", 
	                  "  </Container>\n", 
	                  "</NavBar>\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Forms"), 
	            React.DOM.p(null, 
	              "Place form content within NavForm for proper vertical alignment and collapsed behavior in narrow viewports."
	            ), 
	            Well(null, 
	              NavBar(null, 
	                Container({fluid: true}, 
	                  NavHeader(null, 
	                    NavToggle({container: this, nav: "navcontainer"}, "Toggle navigation"), 
	                    NavBrand(null, "Brand")
	                  ), 
	                  NavContent({ref: "navcontainer", collapse: true}, 
	                    NavForm({left: true, role: "search"}, 
	                      FormGroup(null, 
	                        Input({placeholder: "Search"})
	                      ), ' ', 
	                      Button({outlined: true, onlyOnHover: true, bsStyle: "darkgreen45"}, "Submit")
	                    ), 
	                    Nav({right: true}, 
	                      NavItem({href: "#"}, "Link 3"), 
	                      NavItem({dropdown: true}, 
	                        DropdownButton({nav: true, container: this, menu: "menu39"}, 
	                          React.DOM.span(null, "Dropdown "), Caret(null)
	                        ), 
	                        Menu({ref: "menu39"}, 
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
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<NavBar>\n", 
	                  "  <Container fluid>\n", 
	                  "    <NavHeader>\n", 
	                  "      <NavToggle container={this} nav='navcontainer'>Toggle navigation</NavToggle>\n", 
	                  "      <NavBrand>Brand</NavBrand>\n", 
	                  "    </NavHeader>\n", 
	                  "    <NavContent ref='navcontainer' collapse>\n", 
	                  "      <NavForm left role='search'>\n", 
	                  "        <FormGroup>\n", 
	                  "          <Input placeholder='Search' />\n", 
	                  "        </FormGroup>{' '}\n", 
	                  "        <Button outlined onlyOnHover bsStyle='darkgreen45'>Submit</Button>\n", 
	                  "      </NavForm>\n", 
	                  "      <Nav right>\n", 
	                  "        <NavItem href='#'>Link 3</NavItem>\n", 
	                  "        <NavItem dropdown>\n", 
	                  "          <DropdownButton nav container={this} menu='menu39'>\n", 
	                  "            <span>Dropdown </span><Caret/>\n", 
	                  "          </DropdownButton>\n", 
	                  "          <Menu ref='menu39'>\n", 
	                  "            <MenuItem href='#'>Action</MenuItem>\n", 
	                  "            <MenuItem href='#'>Another Action</MenuItem>\n", 
	                  "            <MenuItem href='#'>Something else here</MenuItem>\n", 
	                  "            <MenuItem divider></MenuItem>\n", 
	                  "            <MenuItem href='#'>Separated link</MenuItem>\n", 
	                  "          </Menu>\n", 
	                  "        </NavItem>\n", 
	                  "      </Nav>\n", 
	                  "    </NavContent>\n", 
	                  "  </Container>\n", 
	                  "</NavBar>\n"
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
	var NavBarDocs = React.createClass({displayName: 'NavBarDocs',
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

	module.exports = NavBarDocs;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(39);
	var Sidebar = __webpack_require__(40);
	var Footer = __webpack_require__(41);

	var Doc = __webpack_require__(38);
	var DocUnit = Doc.DocUnit;
	var DocContainer = Doc.DocContainer;

	var Body = React.createClass({displayName: 'Body',
	  componentDidMount: function() {
	    Prism.highlightAll();
	  },
	  render: function() {
	    return (
	      Container({id: "body"}, 
	        DocContainer(null, 
	          DocUnit({name: "Bootstrap: Breadcrumbs"}, 
	            React.DOM.h4({className: "fg-black50"}, "Basic Example"), 
	            React.DOM.p(null, 
	              "Indicate the current page's location within a navigational hierarchy."
	            ), 
	            Well(null, 
	              Breadcrumb(null, 
	                BLink({href: "#", active: true}, "Home ")
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
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<Breadcrumb>\n", 
	                  "  <BLink href='#' active>Home </BLink>\n", 
	                  "</Breadcrumb>\n", 
	                  "<Breadcrumb>\n", 
	                  "  <BLink href='#'>Home </BLink>\n", 
	                  "  <BLink href='#' active>Library </BLink>\n", 
	                  "</Breadcrumb>\n", 
	                  "<Breadcrumb>\n", 
	                  "  <BLink href='#'>Home </BLink>\n", 
	                  "  <BLink href='#'>Library </BLink>\n", 
	                  "  <BLink href='#' active>Data</BLink>\n", 
	                  "</Breadcrumb>\n"
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
	var BreadcrumbDocs = React.createClass({displayName: 'BreadcrumbDocs',
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

	module.exports = BreadcrumbDocs;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(39);
	var Sidebar = __webpack_require__(40);
	var Footer = __webpack_require__(41);

	var Doc = __webpack_require__(38);
	var DocUnit = Doc.DocUnit;
	var DocContainer = Doc.DocContainer;

	var Body = React.createClass({displayName: 'Body',
	  componentDidMount: function() {
	    Prism.highlightAll();
	  },
	  render: function() {
	    return (
	      Container({id: "body"}, 
	        DocContainer(null, 
	          DocUnit({name: "Bootstrap: Pagination"}, 
	            React.DOM.h4({className: "fg-black50"}, "Basic Example"), 
	            React.DOM.p(null, 
	              "Provide pagination links for your site or app with the multi-page pagination component, or the simpler pager alternative."
	            ), 
	            Well({className: "text-center"}, 
	              Pagination({style: {margin: 0}}, 
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
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<Pagination>\n", 
	                  "  <Page begin disabled />\n", 
	                  "  <Page active href='#'>2</Page>\n", 
	                  "  <Page href='#'>2</Page>\n", 
	                  "  <Page href='#'>3</Page>\n", 
	                  "  <Page href='#'>4</Page>\n", 
	                  "  <Page href='#'>5</Page>\n", 
	                  "  <Page end />\n", 
	                  "</Pagination>\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Sizing"), 
	            React.DOM.p(null, 
	              "Fancy larger or smaller pagination? Add ", React.DOM.code(null, "lg"), " or ", React.DOM.code(null, "sm"), " ", "for additional sizes."
	            ), 
	            Well({className: "text-center"}, 
	              React.DOM.div(null, 
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
	              ), 
	              React.DOM.div(null, 
	                Pagination(null, 
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
	              React.DOM.div(null, 
	                Pagination({sm: true, style: {margin: 0}}, 
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
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<Pagination lg>\n", 
	                  "  ...\n", 
	                  "</Pagination>\n", 
	                  "<Pagination>\n", 
	                  "  ...\n", 
	                  "</Pagination>\n", 
	                  "<Pagination sm>\n", 
	                  "  ...\n", 
	                  "</Pagination>\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Pager"), 
	            React.DOM.p(null, 
	              "Quick previous and next links for simple pagination implementations with light markup and styles. It's great for simple sites like blogs or magazines."
	            ), 
	            Well({className: "text-center"}, 
	              React.DOM.div(null, 
	                Pager(null, 
	                  Page({href: "#"}, "Previous"), ' ', 
	                  Page({href: "#"}, "Next")
	                )
	              )
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<Pager>\n", 
	                  "  <Page href='#'>Previous</Page>{' '}\n", 
	                  "  <Page href='#'>Next</Page>\n", 
	                  "</Pager>\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Aligned links"), 
	            React.DOM.p(null, 
	              "Alternatively, you can align each link to the sides (with optional disabled state)."
	            ), 
	            Well({className: "text-center"}, 
	              React.DOM.div(null, 
	                Pager(null, 
	                  Page({previous: true, disabled: true, href: "#"}, "Previous"), ' ', 
	                  Page({next: true, href: "#"}, "Next")
	                )
	              )
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<Pager>\n", 
	                  "  <Page previous disabled href='#'>Previous</Page>{' '}\n", 
	                  "  <Page next href='#'>Next</Page>\n", 
	                  "</Pager>\n"
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
	var PaginationDocs = React.createClass({displayName: 'PaginationDocs',
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

	module.exports = PaginationDocs;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(39);
	var Sidebar = __webpack_require__(40);
	var Footer = __webpack_require__(41);

	var Doc = __webpack_require__(38);
	var DocUnit = Doc.DocUnit;
	var DocContainer = Doc.DocContainer;

	var Body = React.createClass({displayName: 'Body',
	  componentDidMount: function() {
	    Prism.highlightAll();
	  },
	  render: function() {
	    return (
	      Container({id: "body"}, 
	        DocContainer(null, 
	          DocUnit({name: "Bootstrap: Labels and Badges"}, 
	            React.DOM.h4({className: "fg-black50"}, "Labels"), 
	            React.DOM.p(null, "We use ", React.DOM.code(null, "BLabel"), " instead of ", React.DOM.code(null, "Label"), " so as to differentiate Bootstrap decorated labels from the native form element of the same name."), 
	            Well({className: "text-center"}, 
	              React.DOM.h1(null, "Example heading ", BLabel(null, "New")), 
	              React.DOM.h2(null, "Example heading ", BLabel(null, "New")), 
	              React.DOM.h3(null, "Example heading ", BLabel(null, "New")), 
	              React.DOM.h4(null, "Example heading ", BLabel(null, "New")), 
	              React.DOM.h5(null, "Example heading ", BLabel(null, "New")), 
	              React.DOM.h6(null, "Example heading ", BLabel(null, "New"))
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<h1>Example heading <BLabel>New</BLabel></h1>\n", 
	                  "<h2>Example heading <BLabel>New</BLabel></h2>\n", 
	                  "<h3>Example heading <BLabel>New</BLabel></h3>\n", 
	                  "<h4>Example heading <BLabel>New</BLabel></h4>\n", 
	                  "<h5>Example heading <BLabel>New</BLabel></h5>\n", 
	                  "<h6>Example heading <BLabel>New</BLabel></h6>\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Variations"), 
	            React.DOM.p(null, 
	              "For more colors consult the ", React.DOM.code(null, "colors.scss"), " file."
	            ), 
	            Well({className: "text-center"}, 
	              BLabel({bsStyle: "default"}, "Default"), ' ', 
	              BLabel({bsStyle: "primary"}, "Primary"), ' ', 
	              BLabel({bsStyle: "success"}, "Success"), ' ', 
	              BLabel({bsStyle: "info"}, "Info"), ' ', 
	              BLabel({bsStyle: "warning"}, "Warning"), ' ', 
	              BLabel({bsStyle: "danger"}, "Danger")
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<BLabel bsStyle='default'>Default</BLabel>{' '}\n", 
	                  "<BLabel bsStyle='primary'>Primary</BLabel>{' '}\n", 
	                  "<BLabel bsStyle='success'>Success</BLabel>{' '}\n", 
	                  "<BLabel bsStyle='info'>Info</BLabel>{' '}\n", 
	                  "<BLabel bsStyle='warning'>Warning</BLabel>{' '}\n", 
	                  "<BLabel bsStyle='danger'>Danger</BLabel>\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Badges"), 
	            React.DOM.p(null, 
	              "Easily highlight new or unread items by adding a ", React.DOM.code(null, "Badge"), " to links"
	            ), 
	            Well({className: "text-center"}, 
	              React.DOM.a({href: "#"}, "Inbox ", Badge(null, "42"))
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<a href='#'>Inbox <Badge>42</Badge></a>\n"
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
	var BLabelsBadgesDocs = React.createClass({displayName: 'BLabelsBadgesDocs',
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

	module.exports = BLabelsBadgesDocs;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(39);
	var Sidebar = __webpack_require__(40);
	var Footer = __webpack_require__(41);

	var Doc = __webpack_require__(38);
	var DocUnit = Doc.DocUnit;
	var DocContainer = Doc.DocContainer;

	var Body = React.createClass({displayName: 'Body',
	  componentDidMount: function() {
	    Prism.highlightAll();
	  },
	  render: function() {
	    return (
	      Container({id: "body"}, 
	        DocContainer(null, 
	          DocUnit({name: "Bootstrap: Jumbotron"}, 
	            React.DOM.p(null, "A lightweight, flexible component that can optionally extend the entire viewport to showcase key content on your site."), 
	            Well({className: "bg-white"}, 
	              Jumbotron(null, 
	                React.DOM.h1({className: "fg-black50"}, "Hello, world"), 
	                React.DOM.p(null, 
	                  "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."
	                ), 
	                React.DOM.p(null, 
	                  Button({lg: true, bsStyle: "primary"}, "Learn more")
	                )
	              )
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<Jumbotron>\n", 
	                  "  <h1 className='fg-black50'>Hello, world</h1>\n", 
	                  "  <p>\n", 
	                  "    This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.\n", 
	                  "  </p>\n", 
	                  "  <p>\n", 
	                  "    <Button lg bsStyle='primary'>Learn more</Button>\n", 
	                  "  </p>\n", 
	                  "</Jumbotron>\n"
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
	var JumboDocs = React.createClass({displayName: 'JumboDocs',
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

	module.exports = JumboDocs;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */
	/** @jsx React.DOM */

	var Header = __webpack_require__(39);
	var Sidebar = __webpack_require__(40);
	var Footer = __webpack_require__(41);

	var Doc = __webpack_require__(38);
	var DocUnit = Doc.DocUnit;
	var DocContainer = Doc.DocContainer;

	var Body = React.createClass({displayName: 'Body',
	  componentDidMount: function() {
	    Prism.highlightAll();
	  },
	  render: function() {
	    return (
	      Container({id: "body"}, 
	        DocContainer(null, 
	          DocUnit({name: "Bootstrap: Alerts"}, 
	            React.DOM.h4({className: "fg-black50"}, "Basic Example"), 
	            React.DOM.p(null, 
	              "Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages."
	            ), 
	            Well(null, 
	              Alert({success: true}, 
	                React.DOM.strong(null, "Well done!"), " You successfully read this important alert message."
	              ), 
	              Alert({info: true}, 
	                React.DOM.strong(null, "Heads up!"), " This alert needs your attention, but it's not super important."
	              ), 
	              Alert({warning: true}, 
	                React.DOM.strong(null, "Warning!"), " Better check yourself, you're not looking too good."
	              ), 
	              Alert({danger: true, collapseBottom: true}, 
	                React.DOM.strong(null, "Oh snap!"), " Change a few things up and try submitting again."
	              )
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<Alert success>\n", 
	                  "  <strong>Well done!</strong> You successfully read this important alert message.\n", 
	                  "</Alert>\n", 
	                  "<Alert info>\n", 
	                  "  <strong>Heads up!</strong>{\" This alert needs your attention, but it's not super important.\"}\n", 
	                  "</Alert>\n", 
	                  "<Alert warning>\n", 
	                  "  <strong>Warning!</strong>{\" Better check yourself, you're not looking too good.\"}\n", 
	                  "</Alert>\n", 
	                  "<Alert danger collapseBottom>\n", 
	                  "  <strong>Oh snap!</strong>Change a few things up and try submitting again.\n", 
	                  "</Alert>\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Dismissible alerts"), 
	            React.DOM.p(null, 
	              "Build on any alert by adding an optional ", React.DOM.code(null, "dismissible"), " property."
	            ), 
	            Well(null, 
	              Alert({warning: true, dismissible: true, collapseBottom: true}, 
	                React.DOM.strong(null, "Warning!"), " Better check yourself, you're not looking too good."
	              )
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<Alert warning dismissible collapseBottom>\n", 
	                  "  <strong>Warning!</strong>{\" Better check yourself, you're not looking too good.\"}\n", 
	                  "</Alert>\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Links in Alerts"), 
	            React.DOM.p(null, 
	              "Use the ", React.DOM.code(null, "AlertLink"), " component to quickly provide matching colored links within any alert."
	            ), 
	            Well(null, 
	              Alert({success: true}, 
	                React.DOM.strong(null, "Well done!"), " You successfully read ", AlertLink({href: "#"}, "this important alert message"), "."
	              ), 
	              Alert({info: true}, 
	                React.DOM.strong(null, "Heads up!"), " This ", AlertLink({href: "#"}, "alert needs your attention"), ", but it's not super important."
	              ), 
	              Alert({warning: true}, 
	                React.DOM.strong(null, "Warning!"), " Better check yourself, you're ", AlertLink({href: "#"}, "not looking too good.")
	              ), 
	              Alert({danger: true, collapseBottom: true}, 
	                React.DOM.strong(null, "Oh snap!"), " ", AlertLink({href: "#"}, "Change a few things up"), " and try submitting again."
	              )
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<Alert success>\n", 
	                  "  <strong>Well done!</strong> You successfully read <AlertLink href='#'>this important alert message</AlertLink>.\n", 
	                  "</Alert>\n", 
	                  "<Alert info>\n", 
	                  "  <strong>Heads up!</strong> This <AlertLink href='#'>alert needs your attention</AlertLink>{\", but it's not super important.\"}", 
	                  "</Alert>\n", 
	                  "<Alert warning>\n", 
	                  "  <strong>Warning!</strong>{\" Better check yourself, you're \"}<AlertLink href='#'>not looking too good.</AlertLink>\n", 
	                  "</Alert>\n", 
	                  "<Alert danger collapseBottom>\n", 
	                  "  <strong>Oh snap!</strong> <AlertLink href='#'>Change a few things up</AlertLink> and try submitting again.\n", 
	                  "</Alert>\n"
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
	var AlertDocs = React.createClass({displayName: 'AlertDocs',
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

	module.exports = AlertDocs;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */
	/** @jsx React.DOM */

	var Header = __webpack_require__(39);
	var Sidebar = __webpack_require__(40);
	var Footer = __webpack_require__(41);

	var Doc = __webpack_require__(38);
	var DocUnit = Doc.DocUnit;
	var DocContainer = Doc.DocContainer;

	var Body = React.createClass({displayName: 'Body',
	  componentDidMount: function() {
	    Prism.highlightAll();
	  },
	  render: function() {
	    return (
	      Container({id: "body"}, 
	        DocContainer(null, 
	          DocUnit({name: "Bootstrap: Progress bars"}, 
	            React.DOM.h4({className: "fg-black50"}, "Basic Example"), 
	            React.DOM.p(null, 
	              "Provide up-to-date feedback on the progress of a workflow or action with simple yet flexible progress bars."
	            ), 
	            Well({className: "bg-white"}, 
	              Progress({collapseBottom: true, value: 60, min: 0, max: 100})
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<Progress value={60} min={0} max={100} />\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "With label"), 
	            Well({className: "bg-white"}, 
	              Progress({withLabel: true, collapseBottom: true, value: 60, min: 0, max: 100})
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<Progress withLabel value={60} min={0} max={100} />\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Contextual alternatives"), 
	            React.DOM.p(null, "Progress bars use some of the same button and alert classes for consistent styles."), 
	            Well({className: "bg-white"}, 
	              Progress({success: true, value: 40, min: 0, max: 100}), 
	              Progress({info: true, value: 20, min: 0, max: 100}), 
	              Progress({warning: true, value: 60, min: 0, max: 100}), 
	              Progress({danger: true, collapseBottom: true, value: 80, min: 0, max: 100})
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<Progress success value={40} min={0} max={100} />\n", 
	                  "<Progress info value={20} min={0} max={100} />\n", 
	                  "<Progress warning value={60} min={0} max={100} />\n", 
	                  "<Progress danger value={80} min={0} max={100} />\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Striped"), 
	            React.DOM.p(null, "Uses a gradient to create a striped effect."), 
	            Well({className: "bg-white"}, 
	              Progress({striped: true, success: true, value: 40, min: 0, max: 100}), 
	              Progress({striped: true, info: true, value: 20, min: 0, max: 100}), 
	              Progress({striped: true, warning: true, value: 60, min: 0, max: 100}), 
	              Progress({striped: true, danger: true, collapseBottom: true, value: 80, min: 0, max: 100})
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<Progress striped success value={40} min={0} max={100} />\n", 
	                  "<Progress striped info value={20} min={0} max={100} />\n", 
	                  "<Progress striped warning value={60} min={0} max={100} />\n", 
	                  "<Progress striped danger value={80} min={0} max={100} />\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Animated"), 
	            React.DOM.p(null, "Add active to animate the stripes right to left."), 
	            Well({className: "bg-white"}, 
	              Progress({striped: true, active: true, success: true, value: 40, min: 0, max: 100}), 
	              Progress({striped: true, active: true, info: true, value: 20, min: 0, max: 100}), 
	              Progress({striped: true, active: true, warning: true, value: 60, min: 0, max: 100}), 
	              Progress({striped: true, active: true, danger: true, collapseBottom: true, value: 80, min: 0, max: 100})
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<Progress striped active success value={40} min={0} max={100} />\n", 
	                  "<Progress striped active info value={20} min={0} max={100} />\n", 
	                  "<Progress striped active warning value={60} min={0} max={100} />\n", 
	                  "<Progress striped active danger value={80} min={0} max={100} />\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Stacked"), 
	            React.DOM.p(null, "Place multiple progress bars by stacking them in a ProgressGroup."), 
	            Well({className: "bg-white"}, 
	              ProgressGroup({collapseBottom: true}, 
	                Progress({active: true, striped: true, info: true, withLabel: true, value: 35, min: 0, max: 100}), 
	                Progress({active: true, striped: true, danger: true, withLabel: true, value: 20, min: 0, max: 100}), 
	                Progress({active: true, striped: true, warning: true, withLabel: true, value: 20, min: 0, max: 100}), 
	                Progress({active: true, striped: true, success: true, withLabel: true, value: 10, min: 0, max: 100})
	              )
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<ProgressGroup collapseBottom>\n", 
	                  "  <Progress active striped info withLabel value={35} min={0} max={100} />\n", 
	                  "  <Progress active striped danger withLabel value={20} min={0} max={100} />\n", 
	                  "  <Progress active striped warning withLabel value={20} min={0} max={100} />\n", 
	                  "  <Progress active striped success withLabel value={10} min={0} max={100} />\n", 
	                  "</ProgressGroup>\n"
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
	var ProgressDocs = React.createClass({displayName: 'ProgressDocs',
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

	module.exports = ProgressDocs;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */
	/** @jsx React.DOM */

	var Header = __webpack_require__(39);
	var Sidebar = __webpack_require__(40);
	var Footer = __webpack_require__(41);

	var Doc = __webpack_require__(38);
	var DocUnit = Doc.DocUnit;
	var DocContainer = Doc.DocContainer;

	var Body = React.createClass({displayName: 'Body',
	  componentDidMount: function() {
	    Prism.highlightAll();
	    Holder.run();
	  },
	  render: function() {
	    return (
	      Container({id: "body"}, 
	        DocContainer(null, 
	          DocUnit({name: "Bootstrap: Progress bars"}, 
	            React.DOM.h4({className: "fg-black50"}, "Media Object"), 
	            React.DOM.p(null, 
	              "Abstract object styles for building various types of components (like blog comments, Tweets, etc) that feature a left- or right-aligned image alongside textual content."
	            ), 
	            Well({className: "bg-white"}, 
	              MediaList(null, 
	                Media(null, 
	                  Link({className: "pull-left", href: "#"}, 
	                    MediaObject({'data-src': "holder.js/64x64/random", alt: "64x64"})
	                  ), 
	                  MediaBody(null, 
	                    MediaHeading(null, "Media Heading"), 
	                    LoremIpsum({query: "4s"}), 
	                    MediaDiv(null, 
	                      Link({className: "pull-left", href: "#"}, 
	                        MediaObject({'data-src': "holder.js/64x64/random", alt: "64x64"})
	                      ), 
	                      MediaBody(null, 
	                        MediaHeading(null, "Nested Media Heading"), 
	                        LoremIpsum({query: "4s"}), 
	                        MediaDiv(null, 
	                          Link({className: "pull-left", href: "#"}, 
	                            MediaObject({'data-src': "holder.js/64x64/random", alt: "64x64"})
	                          ), 
	                          MediaBody(null, 
	                            MediaHeading(null, "Nested Media Heading"), 
	                            LoremIpsum({query: "4s"})
	                          )
	                        )
	                      ), 
	                      MediaDiv(null, 
	                        Link({className: "pull-left", href: "#"}, 
	                          MediaObject({'data-src': "holder.js/64x64/random", alt: "64x64"})
	                        ), 
	                        MediaBody(null, 
	                          MediaHeading(null, "Nested Media Heading"), 
	                          LoremIpsum({query: "4s"})
	                        )
	                      )
	                    )
	                  )
	                ), 
	                Media(null, 
	                  Link({className: "pull-left", href: "#"}, 
	                    MediaObject({'data-src': "holder.js/64x64/random", alt: "64x64"})
	                  ), 
	                  MediaBody(null, 
	                    MediaHeading(null, "Media Heading"), 
	                    LoremIpsum({query: "4s"})
	                  )
	                )
	              )
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<MediaList>\n", 
	                  "  <Media>\n", 
	                  "    <Link className='pull-left' href='#'>\n", 
	                  "      <MediaObject data-src='holder.js/64x64/random' alt='64x64' />\n", 
	                  "    </Link>\n", 
	                  "    <MediaBody>\n", 
	                  "      <MediaHeading>Media Heading</MediaHeading>\n", 
	                  "      <LoremIpsum query='4s' />\n", 
	                  "      <MediaDiv>\n", 
	                  "        <Link className='pull-left' href='#'>\n", 
	                  "          <MediaObject data-src='holder.js/64x64/random' alt='64x64' />\n", 
	                  "        </Link>\n", 
	                  "        <MediaBody>\n", 
	                  "          <MediaHeading>Nested Media Heading</MediaHeading>\n", 
	                  "          <LoremIpsum query='4s' />\n", 
	                  "          <MediaDiv>\n", 
	                  "            <Link className='pull-left' href='#'>\n", 
	                  "              <MediaObject data-src='holder.js/64x64/random' alt='64x64' />\n", 
	                  "            </Link>\n", 
	                  "            <MediaBody>\n", 
	                  "              <MediaHeading>Nested Media Heading</MediaHeading>\n", 
	                  "              <LoremIpsum query='4s' />\n", 
	                  "            </MediaBody>\n", 
	                  "          </MediaDiv>\n", 
	                  "        </MediaBody>\n", 
	                  "        <MediaDiv>\n", 
	                  "          <Link className='pull-left' href='#'>\n", 
	                  "            <MediaObject data-src='holder.js/64x64/random' alt='64x64' />\n", 
	                  "          </Link>\n", 
	                  "          <MediaBody>\n", 
	                  "            <MediaHeading>Nested Media Heading</MediaHeading>\n", 
	                  "            <LoremIpsum query='4s' />\n", 
	                  "          </MediaBody>\n", 
	                  "        </MediaDiv>\n", 
	                  "      </MediaDiv>\n", 
	                  "    </MediaBody>\n", 
	                  "  </Media>\n", 
	                  "  <Media>\n", 
	                  "    <Link className='pull-left' href='#'>\n", 
	                  "      <MediaObject data-src='holder.js/64x64/random' alt='64x64' />\n", 
	                  "    </Link>\n", 
	                  "    <MediaBody>\n", 
	                  "      <MediaHeading>Media Heading</MediaHeading>\n", 
	                  "      <LoremIpsum query='4s' />\n", 
	                  "    </MediaBody>\n", 
	                  "  </Media>\n", 
	                  "</MediaList>\n"
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
	var MediaDocs = React.createClass({displayName: 'MediaDocs',
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

	module.exports = MediaDocs;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */
	/** @jsx React.DOM */

	var Header = __webpack_require__(39);
	var Sidebar = __webpack_require__(40);
	var Footer = __webpack_require__(41);

	var Doc = __webpack_require__(38);
	var DocUnit = Doc.DocUnit;
	var DocContainer = Doc.DocContainer;

	var Body = React.createClass({displayName: 'Body',
	  componentDidMount: function() {
	    Prism.highlightAll();
	  },
	  render: function() {
	    return (
	      Container({id: "body"}, 
	        DocContainer(null, 
	          DocUnit({name: "Bootstrap: List Groups"}, 
	            React.DOM.h4({className: "fg-black50"}, "Basic example"), 
	            React.DOM.p(null, 
	              "List groups are a flexible and powerful component for displaying not only simple lists of elements, but complex ones with custom content."
	            ), 
	            Well({className: "bg-white"}, 
	              ListGroup(null, 
	                ListGroupItem(null, LoremIpsum({query: "3w"})), 
	                ListGroupItem(null, LoremIpsum({query: "3w"})), 
	                ListGroupItem(null, LoremIpsum({query: "3w"})), 
	                ListGroupItem(null, LoremIpsum({query: "3w"})), 
	                ListGroupItem(null, LoremIpsum({query: "3w"}))
	              )
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<ListGroup>\n", 
	                  "  <ListGroupItem><LoremIpsum query='3w'/></ListGroupItem>\n", 
	                  "  <ListGroupItem><LoremIpsum query='3w'/></ListGroupItem>\n", 
	                  "  <ListGroupItem><LoremIpsum query='3w'/></ListGroupItem>\n", 
	                  "  <ListGroupItem><LoremIpsum query='3w'/></ListGroupItem>\n", 
	                  "  <ListGroupItem><LoremIpsum query='3w'/></ListGroupItem>\n", 
	                  "</ListGroup>\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Badges"), 
	            React.DOM.p(null, 
	              "Add the badges component to any list group item and it will automatically be positioned on the right."
	            ), 
	            Well({className: "bg-white"}, 
	              ListGroup(null, 
	                ListGroupItem(null, Badge(null, "14"), LoremIpsum({query: "3w"})), 
	                ListGroupItem(null, Badge(null, "2"), LoremIpsum({query: "3w"})), 
	                ListGroupItem(null, Badge(null, "3"), LoremIpsum({query: "3w"})), 
	                ListGroupItem(null, Badge(null, "4"), LoremIpsum({query: "3w"})), 
	                ListGroupItem(null, Badge(null, "5"), LoremIpsum({query: "3w"}))
	              )
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<ListGroup>\n", 
	                  "  <ListGroupItem><Badge>14</Badge><LoremIpsum query='3w'/></ListGroupItem>\n", 
	                  "  <ListGroupItem><Badge>2</Badge><LoremIpsum query='3w'/></ListGroupItem>\n", 
	                  "  <ListGroupItem><Badge>3</Badge><LoremIpsum query='3w'/></ListGroupItem>\n", 
	                  "  <ListGroupItem><Badge>4</Badge><LoremIpsum query='3w'/></ListGroupItem>\n", 
	                  "  <ListGroupItem><Badge>5</Badge><LoremIpsum query='3w'/></ListGroupItem>\n", 
	                  "</ListGroup>\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Linked items"), 
	            React.DOM.p(null, 
	              "Linkify list group items."
	            ), 
	            Well({className: "bg-white"}, 
	              ListGroup(null, 
	                ListGroupItem({active: true}, Badge(null, "14"), LoremIpsum({query: "3w"})), 
	                ListGroupItem(null, Badge(null, "2"), LoremIpsum({query: "3w"})), 
	                ListGroupItem(null, Badge(null, "3"), LoremIpsum({query: "3w"})), 
	                ListGroupItem(null, Badge(null, "4"), LoremIpsum({query: "3w"})), 
	                ListGroupItem(null, Badge(null, "5"), LoremIpsum({query: "3w"}))
	              )
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<ListGroup>\n", 
	                  "  <ListGroupItem active><Badge>14</Badge><LoremIpsum query='3w'/></ListGroupItem>\n", 
	                  "  <ListGroupItem><Badge>2</Badge><LoremIpsum query='3w'/></ListGroupItem>\n", 
	                  "  <ListGroupItem><Badge>3</Badge><LoremIpsum query='3w'/></ListGroupItem>\n", 
	                  "  <ListGroupItem><Badge>4</Badge><LoremIpsum query='3w'/></ListGroupItem>\n", 
	                  "  <ListGroupItem><Badge>5</Badge><LoremIpsum query='3w'/></ListGroupItem>\n", 
	                  "</ListGroup>\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Disabled items"), 
	            React.DOM.p(null, 
	              "Add disabled to a ListGroupItem to gray it out to appear disabled."
	            ), 
	            Well({className: "bg-white"}, 
	              ListGroup(null, 
	                ListGroupItem({disabled: true}, Badge(null, "14"), LoremIpsum({query: "3w"})), 
	                ListGroupItem(null, Badge(null, "2"), LoremIpsum({query: "3w"})), 
	                ListGroupItem(null, Badge(null, "3"), LoremIpsum({query: "3w"})), 
	                ListGroupItem(null, Badge(null, "4"), LoremIpsum({query: "3w"})), 
	                ListGroupItem(null, Badge(null, "5"), LoremIpsum({query: "3w"}))
	              )
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<ListGroup>\n", 
	                  "  <ListGroupItem disabled><Badge>14</Badge><LoremIpsum query='3w'/></ListGroupItem>\n", 
	                  "  <ListGroupItem><Badge>2</Badge><LoremIpsum query='3w'/></ListGroupItem>\n", 
	                  "  <ListGroupItem><Badge>3</Badge><LoremIpsum query='3w'/></ListGroupItem>\n", 
	                  "  <ListGroupItem><Badge>4</Badge><LoremIpsum query='3w'/></ListGroupItem>\n", 
	                  "  <ListGroupItem><Badge>5</Badge><LoremIpsum query='3w'/></ListGroupItem>\n", 
	                  "</ListGroup>\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Contextual items"), 
	            React.DOM.p(null, 
	              "Use contextual classes to style list items, default or linked. Also includes active state."
	            ), 
	            Well({className: "bg-white"}, 
	              ListGroup(null, 
	                ListGroupItem({success: true}, Badge(null, "14"), LoremIpsum({query: "3w"})), 
	                ListGroupItem({info: true}, Badge(null, "2"), LoremIpsum({query: "3w"})), 
	                ListGroupItem({warning: true}, Badge(null, "3"), LoremIpsum({query: "3w"})), 
	                ListGroupItem({danger: true}, Badge(null, "4"), LoremIpsum({query: "3w"}))
	              )
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<ListGroup>\n", 
	                  "  <ListGroupItem success><Badge>14</Badge><LoremIpsum query='3w'/></ListGroupItem>\n", 
	                  "  <ListGroupItem info><Badge>2</Badge><LoremIpsum query='3w'/></ListGroupItem>\n", 
	                  "  <ListGroupItem warning><Badge>3</Badge><LoremIpsum query='3w'/></ListGroupItem>\n", 
	                  "  <ListGroupItem danger><Badge>4</Badge><LoremIpsum query='3w'/></ListGroupItem>\n", 
	                  "</ListGroup>\n"
	                )
	              )
	            ), 
	            React.DOM.hr(null), 
	            React.DOM.h4({className: "fg-black50"}, "Custom content"), 
	            React.DOM.p(null, 
	              "Add nearly any HTML within, even for linked list groups like the one below."
	            ), 
	            Well({className: "bg-white"}, 
	              ListGroup(null, 
	                ListGroupItem({active: true}, 
	                  ListGroupItemHeading(null, "List group item heading"), 
	                  ListGroupItemText(null, 
	                    LoremIpsum({query: "2s"})
	                  )
	                ), 
	                ListGroupItem(null, 
	                  ListGroupItemHeading(null, "List group item heading"), 
	                  ListGroupItemText(null, 
	                    LoremIpsum({query: "2s"})
	                  )
	                ), 
	                ListGroupItem(null, 
	                  ListGroupItemHeading(null, "List group item heading"), 
	                  ListGroupItemText(null, 
	                    LoremIpsum({query: "2s"})
	                  )
	                ), 
	                ListGroupItem(null, 
	                  ListGroupItemHeading(null, "List group item heading"), 
	                  ListGroupItemText(null, 
	                    LoremIpsum({query: "2s"})
	                  )
	                )
	              )
	            ), 
	            React.DOM.div(null, 
	              React.DOM.pre(null, 
	                React.DOM.code({className: "language-markup"}, 
	                  "<ListGroup>\n", 
	                  "  <ListGroupItem active>\n", 
	                  "    <ListGroupItemHeading>List group item heading</ListGroupItemHeading>\n", 
	                  "    <ListGroupItemText>\n", 
	                  "      <LoremIpsum query='2s'/>\n", 
	                  "    </ListGroupItemText>\n", 
	                  "  </ListGroupItem>\n", 
	                  "  <ListGroupItem>\n", 
	                  "    <ListGroupItemHeading>List group item heading</ListGroupItemHeading>\n", 
	                  "    <ListGroupItemText>\n", 
	                  "      <LoremIpsum query='2s'/>\n", 
	                  "    </ListGroupItemText>\n", 
	                  "  </ListGroupItem>\n", 
	                  "  <ListGroupItem>\n", 
	                  "    <ListGroupItemHeading>List group item heading</ListGroupItemHeading>\n", 
	                  "    <ListGroupItemText>\n", 
	                  "      <LoremIpsum query='2s'/>\n", 
	                  "    </ListGroupItemText>\n", 
	                  "  </ListGroupItem>\n", 
	                  "  <ListGroupItem>\n", 
	                  "    <ListGroupItemHeading>List group item heading</ListGroupItemHeading>\n", 
	                  "    <ListGroupItemText>\n", 
	                  "      <LoremIpsum query='2s'/>\n", 
	                  "    </ListGroupItemText>\n", 
	                  "  </ListGroupItem>\n", 
	                  "</ListGroup>\n"
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
	var ListGroupDocs = React.createClass({displayName: 'ListGroupDocs',
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

	module.exports = ListGroupDocs;


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var DocContainer = React.createClass({displayName: 'DocContainer',
	  render: function() {
	    return (
	      Grid(null, 
	        Row(null, 
	          this.props.children
	        )
	      )
	    );
	  }
	});

	var DocUnit = React.createClass({displayName: 'DocUnit',
	  render: function() {
	    var docStyle = this.props.docStyle || 'bg-darkgreen45 fg-white';
	    return (
	      Col({xs: 12}, 
	        PanelContainer({controlStyles: docStyle}, 
	          Panel(null, 
	            PanelHeader({className: docStyle}, 
	              Grid(null, 
	                Row(null, 
	                  Col({xs: 12}, 
	                    React.DOM.h3(null, this.props.name)
	                  )
	                )
	              )
	            ), 
	            PanelBody(null, 
	              Grid(null, 
	                Row(null, 
	                  Col({xs: 12}, 
	                    this.props.children
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

	module.exports.DocUnit = DocUnit;
	module.exports.DocContainer = DocContainer;


/***/ },
/* 39 */
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

	var Navigation = React.createClass({displayName: 'Navigation',
	  render: function() {
	    return this.transferPropsTo(
	      NavContent({className: "pull-right"}, 
	        Nav(null, 
	          NavItem({className: "logout", href: "#"}, 
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
	                    Navigation(null)
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
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var ApplicationSidebar = React.createClass({displayName: 'ApplicationSidebar',
	  render: function() {
	    return (
	      React.DOM.div(null, 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.div({className: "sidebar-header"}, "DOCUMENTATION"), 
	              React.DOM.div({className: "sidebar-nav-container"}, 
	                SidebarNav({style: {marginBottom: 0}}, 
	                  SidebarNavItem({glyph: "icon-fontello-install", name: "Installation", href: "/docs/installation"}), 
	                  SidebarNavItem({glyph: "devicon-gulp-plain", name: React.DOM.span(null, "Gulpfile.js ", BLabel({className: "bg-red fg-white"}, "6"))}, 
	                    SidebarNav(null, 
	                      SidebarNavItem({name: "Basics", href: "/docs/gulpfile/basics"}), 
	                      SidebarNavItem({name: "Sass to CSS", href: "/docs/gulpfile/sass"}), 
	                      SidebarNavItem({name: "JSX to JS", href: "/docs/gulpfile/jsx"}), 
	                      SidebarNavItem({name: "WebFonts", href: "/docs/gulpfile/webfonts"}), 
	                      SidebarNavItem({name: "Scaffolding", href: "/docs/gulpfile/scaffolding"}), 
	                      SidebarNavItem({name: "External Plugins", href: "/docs/gulpfile/externalplugins"})
	                    )
	                  ), 
	                  SidebarNavItem({glyph: "icon-fontello-looped-square-interest", name: React.DOM.span(null, "Rubix ", BLabel({className: "bg-darkgreen45 fg-white"}, "3"))}, 
	                    SidebarNav(null, 
	                      SidebarNavItem({name: "React", href: "/docs/rubix/react"}), 
	                      SidebarNavItem({name: "Rubix - JSX", href: "/docs/rubix/rubix-jsx"}), 
	                      SidebarNavItem({name: "Rubix - SASS", href: "/docs/rubix/rubix-sass"})
	                    )
	                  ), 
	                  SidebarNavItem({glyph: "devicon-bootstrap-plain", name: React.DOM.span(null, "Bootstrap ", BLabel({className: "bg-darkblue fg-white"}, "7"))}, 
	                    SidebarNav(null, 
	                      SidebarNavItem({name: "Grid", href: "/docs/bootstrap/grid"}), 
	                      SidebarNavItem({name: "Typography", href: "/docs/bootstrap/typography"}), 
	                      SidebarNavItem({name: "Code", href: "/docs/bootstrap/code"}), 
	                      SidebarNavItem({name: "Tables", href: "/docs/bootstrap/tables"}), 
	                      SidebarNavItem({name: "Forms", href: "/docs/bootstrap/forms"}), 
	                      SidebarNavItem({name: "Form Controls"}, 
	                        SidebarNav(null, 
	                          SidebarNavItem({name: "Inputs", href: "/docs/bootstrap/form_controls/inputs"}), 
	                          SidebarNavItem({name: "Textarea", href: "/docs/bootstrap/form_controls/textarea"}), 
	                          SidebarNavItem({name: "Checkbox & Radio", href: "/docs/bootstrap/form_controls/checkradio"}), 
	                          SidebarNavItem({name: "Select", href: "/docs/bootstrap/form_controls/select"}), 
	                          SidebarNavItem({name: "Buttons", href: "/docs/bootstrap/form_controls/buttons"})
	                        )
	                      ), 
	                      SidebarNavItem({name: "Components"}, 
	                        SidebarNav(null, 
	                          SidebarNavItem({name: "Dropdowns", href: "/docs/bootstrap/components/dropdowns"}), 
	                          SidebarNavItem({name: "Button Groups", href: "/docs/bootstrap/components/button_groups"}), 
	                          SidebarNavItem({name: "Input Groups", href: "/docs/bootstrap/components/input_groups"}), 
	                          SidebarNavItem({name: "Navs", href: "/docs/bootstrap/components/navs"}), 
	                          SidebarNavItem({name: "Navbar", href: "/docs/bootstrap/components/navbar"}), 
	                          SidebarNavItem({name: "Breadcrumbs", href: "/docs/bootstrap/components/breadcrumbs"}), 
	                          SidebarNavItem({name: "Pagination", href: "/docs/bootstrap/components/pagination"}), 
	                          SidebarNavItem({name: "Labels & Badges", href: "/docs/bootstrap/components/labels_and_badges"}), 
	                          SidebarNavItem({name: "Jumbotron", href: "/docs/bootstrap/components/jumbotron"}), 
	                          SidebarNavItem({name: "Alerts", href: "/docs/bootstrap/components/alerts"}), 
	                          SidebarNavItem({name: "Progress bars", href: "/docs/bootstrap/components/progress-bars"}), 
	                          SidebarNavItem({name: "Media", href: "/docs/bootstrap/components/media"}), 
	                          SidebarNavItem({name: "List Group", href: "/docs/bootstrap/components/list-group"})
	                        )
	                      )
	                    )
	                  ), 
	                  SidebarNavItem({glyph: "icon-outlined-geolocalizator", name: "Mozilla L20n.js", href: "/docs/l20n"})
	                )
	              )
	            )
	          )
	        )
	      )
	    );
	  }
	});

	var DummySidebar = React.createClass({displayName: 'DummySidebar',
	  render: function() {
	    return (
	      Grid(null, 
	        Row(null, 
	          Col({xs: 12}, 
	            React.DOM.div({className: "sidebar-header"}, "DUMMY SIDEBAR"), 
	            LoremIpsum({query: "1p"})
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
	              Col({xs: 12, id: "avatar-col", className: "text-center"}, 
	                React.DOM.div({style: {top: 23, fontSize: 16, lineHeight: 1, position: 'relative'}}, "DOCUMENTATION")
	              )
	            )
	          )
	        ), 
	        React.DOM.div({id: "sidebar-container"}, 
	          Sidebar({key: 0, active: true}, 
	            ApplicationSidebar(null)
	          )
	        )
	      )
	    );
	  }
	});

	module.exports = SidebarSection;


/***/ },
/* 41 */
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
	              React.DOM.div(null, "© 2014 Your Company Name Here - v", this.state.version)
	            )
	          )
	        )
	      )
	    );
	  }
	});

	module.exports = Footer;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Navigation = React.createClass({displayName: 'Navigation',
	  propTypes: {
	    activeLink: React.PropTypes.string.isRequired
	  },
	  renderLi: function(name, path) {
	    return (
	      React.DOM.li({className: (this.props.activeLink === name) ? 'active' : ''}, 
	        Link({href: path}, name)
	      )
	    );
	  },
	  render: function() {
	    return (
	      Grid(null, 
	        Row(null, 
	          Col({xs: 12}, 
	            React.DOM.nav({className: "navbar navbar-default", role: "navigation"}, 
	              React.DOM.div({className: "container-fluid"}, 
	                React.DOM.div({className: "navbar-header"}, 
	                  React.DOM.a({className: "navbar-brand", href: "#"}, "Rubix")
	                ), 

	                React.DOM.div(null, 
	                  React.DOM.ul({className: "nav navbar-nav"}, 
	                    this.renderLi('CSS', '/app/docs/css'), 
	                    this.renderLi('Components', '/app/docs/components')
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

	module.exports = Navigation;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "{\n  \"name\": \"rubix\",\n  \"version\": \"1.0.0\",\n  \"private\": true,\n  \"copyright\": \"SketchPixy LLP, email: support@sketchpixy.com\",\n  \"devDependencies\": {\n    \"compression\": \"^1.0.8\",\n    \"css-flip\": \"^0.5.0\",\n    \"del\": \"^0.1.1\",\n    \"express\": \"^4.4.5\",\n    \"fluxxor\": \"^1.3.2\",\n    \"gulp\": \"^3.8.7\",\n    \"gulp-autoprefixer\": \"0.0.8\",\n    \"gulp-bless\": \"^1.0.2\",\n    \"gulp-concat\": \"^2.2.0\",\n    \"gulp-cssfont64\": \"0.0.1\",\n    \"gulp-insert\": \"^0.4.0\",\n    \"gulp-minify-css\": \"^0.3.7\",\n    \"gulp-rename\": \"^1.2.0\",\n    \"gulp-replace\": \"^0.4.0\",\n    \"gulp-sass\": \"^0.7.2\",\n    \"gulp-ttf2woff\": \"0.0.8\",\n    \"gulp-uglifyjs\": \"^0.4.0\",\n    \"gulp-util\": \"^2.2.19\",\n    \"gulp-webpack\": \"^0.1.0\",\n    \"html-minifier\": \"^0.6.6\",\n    \"jsx-loader\": \"^0.11.0\",\n    \"map-stream\": \"^0.1.0\",\n    \"raw-loader\": \"^0.5.1\",\n    \"react\": \"^0.11.1\",\n    \"run-sequence\": \"^0.3.6\",\n    \"through\": \"^2.3.4\",\n    \"transform-loader\": \"^0.2.1\",\n    \"ua-parser\": \"^0.3.3\",\n    \"vinyl-transform\": \"0.0.1\",\n    \"yargs\": \"^1.3.1\"\n  }\n}\n"

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = ".\n|-- gulpfile.js\n|-- node_modules\n|-- package.json\n|-- prebuild\n|-- public\n|   |-- css\n|   |   |-- app\n|   |   |-- demo\n|   |   |-- fonts\n|   |   |   |-- app\n|   |   |   `-- demo\n|   |   `-- vendor\n|   |-- favicons\n|   |-- fonts\n|   |   |-- Lato-others\n|   |   |-- dropbox\n|   |   |   |-- app\n|   |   |   `-- demo\n|   |   `-- glyphicon\n|   |-- imgs\n|   |-- js\n|   |   |-- app\n|   |   |-- common\n|   |   |-- demo\n|   |   |-- polyfills\n|   |   `-- vendor\n|   `-- locales\n|       |-- app\n|       `-- demo\n|-- service.js\n|-- src\n|   |-- global\n|   |   |-- requires\n|   |   |-- sass\n|   |   `-- vendor\n|   |-- jsx\n|   |   |-- app\n|   |   `-- demo\n|   `-- sass\n|       |-- app\n|       `-- demo\n"

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "sass\n|-- <project-name>\n|   |-- colors.scss\n|   |-- font-faces.scss\n|   |-- main.scss\n|   |-- theme.scss\n|   |-- pages\n|   |   `-- _pages.scss\n|   |-- print\n|   |   `-- _print.scss\n|   |-- theme\n|   |   |-- _colors.scss\n|   |   |-- _theme-mixin.scss\n|   |   |-- components\n|   |   |   |-- _breadcrumbs.scss\n|   |   |   |-- _button.scss\n|   |   |   |-- _components.scss\n|   |   |   |-- _datepicker.scss\n|   |   |   |-- _dropdown.scss\n|   |   |   |-- _forms.scss\n|   |   |   |-- _ion-rangeSlider.scss\n|   |   |   |-- _ion-tabs.scss\n|   |   |   |-- _link.scss\n|   |   |   |-- _messenger.scss\n|   |   |   |-- _pagination.scss\n|   |   |   |-- _panel.scss\n|   |   |   |-- _select2.scss\n|   |   |   `-- _vex.scss\n|   |   `-- sections\n|   |       |-- _body.scss\n|   |       |-- _footer.scss\n|   |       |-- _header.scss\n|   |       |-- _sections.scss\n|   |       `-- _sidebar.scss\n"

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<Grid>\n</Grid>\n"

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<Grid>\n  <Row>\n    <Col sm={6} md={6} lg={6} xsOnlyGutterBottom smCollapseRight>\n      <Well noMargin>Col(lg:6)</Well>\n    </Col>\n    <Col sm={6} md={6} lg={6}>\n      <Well noMargin>Col(lg:6)</Well>\n    </Col>\n  </Row>\n</Grid>\n<Grid gutterTop>\n  <Row>\n    <Col sm={4} md={4} lg={4} xsOnlyGutterBottom smCollapseRight>\n      <Well noMargin>Col(lg:4)</Well>\n    </Col>\n    <Col sm={4} md={4} lg={4} xsOnlyGutterBottom smCollapseRight>\n      <Well noMargin>Col(lg:4)</Well>\n    </Col>\n    <Col sm={4} md={4} lg={4}>\n      <Well noMargin>Col(lg:4)</Well>\n    </Col>\n  </Row>\n</Grid>\n<Grid gutterTop>\n  <Row>\n    <Col sm={3} md={3} lg={3} xsOnlyGutterBottom smCollapseRight>\n      <Well noMargin>Col(lg:3)</Well>\n    </Col>\n    <Col sm={3} md={3} lg={3} xsOnlyGutterBottom smCollapseRight>\n      <Well noMargin>Col(lg:3)</Well>\n    </Col>\n    <Col sm={6} md={6} lg={6}>\n      <Well noMargin>Col(lg:6)</Well>\n    </Col>\n  </Row>\n</Grid>\n<Grid gutterTop gutterBottom>\n  <Row>\n    <Col md={2} lg={2} xsOnlyGutterBottom smOnlyGutterBottom mdCollapseRight>\n      <Well noMargin>Col(lg:2)</Well>\n    </Col>\n    <Col md={4} lg={4} xsOnlyGutterBottom smOnlyGutterBottom mdCollapseRight>\n      <Well noMargin>Col(lg:4)</Well>\n    </Col>\n    <Col md={6} lg={6}>\n      <Well noMargin>Col(lg:6)</Well>\n    </Col>\n  </Row>\n</Grid>\n"

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<Grid fixed>\n</Grid>\n"

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<Grid collapse>\n</Grid>\n"

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<Grid gutter>\n</Grid>\n"

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<Grid gutterTop gutterLeft gutterRight gutterBottom>\n</Grid>\n"

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<Grid>\n  <Row>\n    <Col xs={12}>\n      <Grid fixed gutter>\n        <Row>\n          <Col xs={6} sm={3} md={4} lg={2}></Col>\n        </Row>\n      </Grid>\n    </Col>\n  </Row>\n</Grid>\n"

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<Row>\n</Row>\n"

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<Col xs={12} sm={12} md={12} lg={12}>\n</Col>\n"

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<Col clearfix>\n</Col>\n"

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<Col xs={6} md={3} lg={4} sm={12} hidden='xs, md, lg, print' visible='sm'>\n</Col>\n"

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<Grid>\n  <Row>\n    <Col md={4}>\n      Col(md:4)\n    </Col>\n    <Col md={4} mdOffset={4}>\n      Col(md:4,mdOffset:4)\n    </Col>\n  </Row>\n</Grid>\n"

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<Grid>\n  <Row>\n    <Col md={9} mdPush={3}>\n      Col(md:9, mdPush:3)\n    </Col>\n    <Col md={3} mdPull={9}>\n      Col(md:3, mdPull:9)\n    </Col>\n  </Row>\n</Grid>\n"

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<Grid>\n  <Row>\n    <Col xs={6} collapseRight>\n    </Col>\n    <Col xs={6} collapseLeft>\n    </Col>\n  </Row>\n</Grid>\n"

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "var demo = React.createClass({\n  componentDidMount: function() {\n    var node = this.refs.inputelement.getInputDOMNode();\n    console.log(node.value === 'Default text');\n  },\n  render: function() {\n    return (\n      <Input type='text' ref='inputelement' defaultValue='Default text' />\n    );\n  }  \n});\n"

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "var demo = React.createClass({\n  componentDidMount: function() {\n    var checked = this.refs.checkboxelement.getChecked();\n    console.log(checked === true);\n  },\n  render: function() {\n    return (\n      <Input type='checkbox' ref='checkboxelement' defaultChecked />\n    );\n  }  \n});\n"

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "var demo = React.createClass({\n  componentDidMount: function() {\n    this.refs.checkboxelement.setChecked(false);\n    var checked = this.refs.checkboxelement.getChecked();\n    console.log(checked === false);\n  },\n  render: function() {\n    return (\n      <Input type='checkbox' ref='checkboxelement' defaultChecked />\n    );\n  }  \n});\n"

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "var demo = React.createClass({\n  componentDidMount: function() {\n    var value = this.refs.inputelement.getValue();\n    console.log(value === 'Default Value');\n  },\n  render: function() {\n    return (\n      <Input type='text' ref='inputelement' defaultValue='Default Value' />\n    );\n  }  \n});\n"

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "var demo = React.createClass({\n  componentDidMount: function() {\n    var node = this.refs.textareaelement.getInputDOMNode();\n    console.log(node.getAttribute('rows') === 3);\n  },\n  render: function() {\n    return (\n      <Textarea ref='textareaelement' rows='3' />\n    );\n  }  \n});\n"

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "var demo = React.createClass({\n  componentDidMount: function() {\n    var value = this.refs.textareaelement.getValue();\n    console.log(value === 'Default Value');\n  },\n  render: function() {\n    return (\n      <Textarea ref='textareaelement' rows='3' defaultValue='Default Value' />\n    );\n  }  \n});\n"

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "var demo = React.createClass({\n  componentDidMount: function() {\n    var checkedState = this.refs.check.getChecked();\n    console.log(checkedState === true);\n  },\n  render: function() {\n    return (\n      <Checkbox ref='check' defaultChecked>\n        Should be checked\n      </Checkbox>\n    );\n  }\n});\n"

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "var demo = React.createClass({\n  componentDidMount: function() {\n    this.refs.check.setChecked(false);\n    console.log(checkedState === false);\n  },\n  render: function() {\n    return (\n      <Checkbox ref='check' defaultChecked>\n        Should be checked\n      </Checkbox>\n    );\n  }\n});\n"

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "var demo = React.createClass({\n  componentDidMount: function() {\n    if(this.refs.check.isChecked())\n      console.log('Checkbox is checked');\n    else\n      console.log('Checkbox is unchecked');\n  },\n  render: function() {\n    return (\n      <Checkbox ref='check' defaultChecked>\n        Should be checked\n      </Checkbox>\n    );\n  }\n});\n"

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "var demo = React.createClass({\n  componentDidMount: function() {\n    var value = this.refs.check.getValue();\n    console.log(value === 'Should be checked');\n  },\n  render: function() {\n    return (\n      <Checkbox ref='check' defaultChecked>\n        Should be checked\n      </Checkbox>\n    );\n  }\n});\n"

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "var demo = React.createClass({\n  handleSelection: function(itemprops) {\n    // access any property attached to MenuItem child component.\n    // ex: itemprops.keyaction === 'another-action' if MenuItem\n    // with \"Another action\" is clicked.\n    var value = itemprops.children;\n    alert(value);\n    if(itemprops.keyaction === 'another-action')\n      alert('You clicked another-action');\n  },\n  render: function() {\n    return (\n      <Dropdown>\n        <DropdownButton bsStyle='blue' container={this} menu='menu1'>\n          <span>Dropdown </span><Caret/>\n        </DropdownButton>\n        <Menu ref='menu1' bsStyle='blue' onItemSelect={this.handleSelection}>\n          <MenuItem active href='#'>Action</MenuItem>\n          <MenuItem keyaction='another-action' href='#'>Another action</MenuItem>\n          <MenuItem href='#'>Something else here</MenuItem>\n          <MenuItem divider/>\n          <MenuItem href='#'>Separated link</MenuItem>\n        </Menu>\n      </Dropdown>\n    );\n  }\n});\n"

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "var demo = React.createClass({\n  handleSelection: function(itemprops) {\n    // access any property attached to MenuItem child component.\n    // ex: itemprops.keyaction === 'another-action' if MenuItem\n    // with \"Another action\" is clicked.\n    var value = itemprops.children;\n    alert(value);\n    if(itemprops.keyaction === 'another-action')\n      alert('You clicked another-action');\n  },\n  render: function() {\n    return (\n      <Dropdown>\n        <DropdownButton bsStyle='red' container={this} menu='menu2'>\n          <span>Dropdown </span><Caret/>\n        </DropdownButton>\n        <Menu ref='menu2' bsStyle='red' onItemSelect={this.handleSelection} alignRight>\n          <MenuItem active href='#'>Action</MenuItem>\n          <MenuItem keyaction='another-action' href='#'>Another action</MenuItem>\n          <MenuItem href='#'>Something else here</MenuItem>\n          <MenuItem divider/>\n          <MenuItem href='#'>Separated link</MenuItem>\n        </Menu>\n      </Dropdown>\n    );\n  }\n});\n"

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "var demo = React.createClass({\n  handleSelect: function(itemprops) {\n    alert(itemprops.pane);\n  },\n  render: function() {\n    return (\n      <TabList bsStyle='orange75' onTabSelect={this.handleSelect} listName='tab1'>\n        <Tab pane='tab1:home' active>Home</Tab>\n        <Tab pane='tab1:profile'>Profile</Tab>\n        <Tab>\n          <DropdownButton tab container={this} menu='menu33'>\n            <span>Dropdown </span><Caret/>\n          </DropdownButton>\n          <Menu autoHide ref='menu33' bsStyle='orange75'>\n            <MenuItem href='#'>\n              <Tab dropdown pane='tab1:fat'>\n                @fat\n              </Tab>\n            </MenuItem>\n            <MenuItem href='#'>\n              <Tab dropdown pane='tab1:mdo'>\n                @mdo\n              </Tab>\n            </MenuItem>\n          </Menu>\n        </Tab>\n      </TabList>\n      <TabContent>\n        <TabPane ref='tab1:home' active>\n          <LoremIpsum query='5s' />\n        </TabPane>\n        <TabPane ref='tab1:profile'>\n          <LoremIpsum query='5s' />\n        </TabPane>\n        <TabPane ref='tab1:fat'>\n          <LoremIpsum query='5s' />\n        </TabPane>\n        <TabPane ref='tab1:mdo'>\n          <LoremIpsum query='5s' />\n        </TabPane>\n      </TabContent>\n    );\n  }\n});\n"

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "var demo = React.createClass({\n  componentDidMount: function(itemprops) {\n    this.refs.tablist.selectTab('pane', 'tab2:profile');\n  },\n  render: function() {\n    return (\n      <TabList bsStyle='orange75' ref='tablist' listName='tab2'>\n        <Tab pane='tab2:home' active>Home</Tab>\n        <Tab pane='tab2:profile'>Profile</Tab>\n        <Tab>\n          <DropdownButton tab container={this} menu='menu34'>\n            <span>Dropdown </span><Caret/>\n          </DropdownButton>\n          <Menu autoHide ref='menu34' bsStyle='orange75'>\n            <MenuItem href='#'>\n              <Tab dropdown pane='tab2:fat'>\n                @fat\n              </Tab>\n            </MenuItem>\n            <MenuItem href='#'>\n              <Tab dropdown pane='tab2:mdo'>\n                @mdo\n              </Tab>\n            </MenuItem>\n          </Menu>\n        </Tab>\n      </TabList>\n      <TabContent>\n        <TabPane ref='tab2:home' active>\n          <LoremIpsum query='5s' />\n        </TabPane>\n        <TabPane ref='tab2:profile'>\n          <LoremIpsum query='5s' />\n        </TabPane>\n        <TabPane ref='tab2:fat'>\n          <LoremIpsum query='5s' />\n        </TabPane>\n        <TabPane ref='tab2:mdo'>\n          <LoremIpsum query='5s' />\n        </TabPane>\n      </TabContent>\n    );\n  }\n});\n"

/***/ }
/******/ ])
})();