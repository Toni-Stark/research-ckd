import React, { useEffect, useState } from "react";
import { Button, Layout, Menu } from "antd";
import "./index.scss";
import { useNavigate } from "react-router";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  AreaChartOutlined,
  HomeOutlined,
  FileZipOutlined,
} from "@ant-design/icons";
/* 图片 */
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const screenHeight = window.innerHeight;

const headerLayout = [
  {
    name: "项目管理",
    key: "1",
    icon: <HomeOutlined />,
    router: "/research",
  },
  {
    name: "项目文件",
    key: "2",
    icon: <FileZipOutlined />,
    router: "/files",
  },
];

const MenuLayout = [
  {
    name: "项目管理",
    key: "51",
    icon: <AreaChartOutlined />,
    children: [
      {
        name: "项目管理",
        key: "101",
        router: "/research",
      },
      {
        name: "患者管理",
        key: "102",
        router: "/files",
      },
    ],
  },
];

const MainLayout = (props: any) => {
  const navigator = useNavigate();
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const changeLayout = (e: any) => {
    navigator(e.router);
  };

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <Header className="header">
        <div className="logo">临床科研管理系统</div>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          className="layout"
        >
          {headerLayout.map((item) => (
            <Menu.Item
              className="layoutItem"
              key={item.key}
              icon={item.icon}
              onClick={() => {
                changeLayout(item);
              }}
            >
              {item.name}
            </Menu.Item>
          ))}
        </Menu>
      </Header>
      <Layout className="body-layout">
        <div style={{ backgroundColor: "white", width: collapsed ? 80 : 200 }}>
          <Button
            onClick={() => {
              toggleCollapsed();
            }}
            style={{
              width: collapsed ? 80 : 200,
              height: 50,
              borderRadius: 0,
              borderWidth: 0,
            }}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
          <Sider theme="light" collapsed={collapsed}>
            <div className="site-layout-background">
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%", borderRight: 0 }}
                inlineCollapsed={collapsed}
                inlineIndent={12}
              >
                {MenuLayout.map((item) => (
                  <SubMenu key={item.key} title={item.name} icon={item.icon}>
                    {item.children.map((child) => (
                      <Menu.Item
                        key={child.key}
                        onClick={() => {
                          navigator(child.router);
                        }}
                      >
                        {child.name}
                      </Menu.Item>
                    ))}
                  </SubMenu>
                ))}
              </Menu>
            </div>
          </Sider>
        </div>

        <Layout style={{ padding: "0 24px 24px" }}>
          {/*<Breadcrumb style={{ margin: "16px 0" }}>*/}
          {/*  <Breadcrumb.Item>Home</Breadcrumb.Item>*/}
          {/*  <Breadcrumb.Item>List</Breadcrumb.Item>*/}
          {/*  <Breadcrumb.Item>App</Breadcrumb.Item>*/}
          {/*</Breadcrumb>*/}
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: screenHeight - 65,
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export { MainLayout };
