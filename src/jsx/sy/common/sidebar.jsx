/** @jsx React.DOM */

var MenuMap = require('../widgets/sidebarMenu/menuMap.js');


var ApplicationSidebar = React.createClass({

    getMenu: function () {
        var user = flux.store("loginStore").getState().user;
        var menu = user.privilege;
        //var menu = MenuMap.menu;
        //console.log(menu);
        var node = [];
        if(menu && menu.length){
            node = menu.map(function (item, i) {
                var SubMenu = null;
                if(item.menu.length){
                    SubMenu = item.menu.map(function (subMenu, j) {
                        subMenu.url = MenuMap.table[subMenu.name];
                        //SubMenu.push(<SidebarNavItem name={subMenu.name} href={subMenu.url} key={j}/>);
                        return (<SidebarNavItem name={subMenu.name} href={subMenu.url} key={j}/>);
                    });
                }
                return (
                    <SidebarNavItem glyph='icon-outlined-tshirt' name={<span>{item.name}</span>} key={i}>
                        <SidebarNav>
                            {SubMenu}
                        </SidebarNav>
                    </SidebarNavItem>
                );
            })
        }


        return (
            <SidebarNav style={{marginBottom: 0}}>
            {node}
            </SidebarNav>
        );
    },
    render: function () {

        /*var Menu = (
            <SidebarNav style={{marginBottom: 0}}>
                <SidebarNavItem glyph='icon-fontello-gauge' name='概况' href='/' />
                <SidebarNavItem glyph='icon-outlined-tshirt' name={<span>商品管理</span>}>
                    <SidebarNav>
                        <SidebarNavItem name='添加商品' href='/app/good/add' />
                        <SidebarNavItem name='商品列表' href='/app/goods' />
                        <SidebarNavItem name='商品分类' href='/app/categoryManage' />
                        <SidebarNavItem name='属性规格' href='/app/attr/group/0' />
                        <SidebarNavItem name='用户评论' href='/app/comments' />
                        <SidebarNavItem name='商品回收站' href='/app/recycle' />
                    </SidebarNav>
                </SidebarNavItem>
                <SidebarNavItem glyph='icon-outlined-tshirt' name={<span>订单管理</span>}>
                    <SidebarNav>
                        <SidebarNavItem name='订单列表' href='/app/orderList/0' />
                    </SidebarNav>
                </SidebarNavItem>
                <SidebarNavItem glyph='icon-outlined-tshirt' name={<span>售后管理</span>}>
                    <SidebarNav>
                        <SidebarNavItem name='售后申请列表' href='/app/customerServiceList/0' />
                    </SidebarNav>
                </SidebarNavItem>
                <SidebarNavItem glyph='icon-outlined-tshirt' name={<span>文章管理</span>}>
                    <SidebarNav>
                        <SidebarNavItem name='文章分类' href='/app/articleCategory' />
                        <SidebarNavItem name='文章列表' href='/app/articleList' />
                    </SidebarNav>
                </SidebarNavItem>
                <SidebarNavItem glyph='icon-outlined-profile' name={<span>会员管理</span>}>
                    <SidebarNav>
                        <SidebarNavItem name='会员列表' href='/app/memberList' />
                    </SidebarNav>
                </SidebarNavItem>
                <SidebarNavItem glyph='icon-outlined-profile' name={<span>后台用户管理</span>}>
                    <SidebarNav>
                        <SidebarNavItem name='后台用户列表' href='/app/userList' />
                        <SidebarNavItem name='角色管理' href='/app/roleList' />
                    </SidebarNav>
                </SidebarNavItem>
            </SidebarNav>
        );*/

        var Menu = this.getMenu();

        return (
            <div>
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <div className='sidebar-header'>功能</div>
                            <div className='sidebar-nav-container'>
                                {Menu}
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
});

var DummySidebar = React.createClass({
    render: function () {
        return (
            <Grid>
                <Row>
                    <Col xs={12}>
                        <div className='sidebar-header'>DUMMY SIDEBAR</div>
                        <LoremIpsum query='1p' />
                    </Col>
                </Row>
            </Grid>
        );
    }
});

// <Col xs={4} collapseRight>
//     <img src='/imgs/avatars/avatar0.png' width='40' height='40' />
// </Col>
// <Col xs={8} collapseLeft id='avatar-col'>
//     <div style={{top: 23, fontSize: 16, lineHeight: 1, position: 'relative'}}>{user.name}</div>
//     <div>
//         <Progress id='demo-progress' value={30} min={0} max={100} color='#ffffff'/>
//         <Link href='#'>
//             <Icon id='demo-icon' bundle='fontello' glyph='lock-5' />
//         </Link>
//     </div>
// </Col>

var SidebarSection = React.createClass({
    render: function () {
        var user = flux.store("loginStore").getState().user;

        return this.transferPropsTo(
            <div id='sidebar'>
                <div id='avatar'>
                    <Grid>
                        <Row className='fg-white'>
                            <Col xs={12} id='avatar-col' className='text-center'>
                              <div style={{top: 23, fontSize: 16, lineHeight: 1, position: 'relative'}}>斯品商城管理后台</div>
                            </Col>
                        </Row>
                    </Grid>
                </div>
                <div id='sidebar-container' style={{top: 65}}>
                    <Sidebar key={0} active>
                        <ApplicationSidebar />
                    </Sidebar>
                </div>
            </div>
        );
    }
});

module.exports = SidebarSection;
