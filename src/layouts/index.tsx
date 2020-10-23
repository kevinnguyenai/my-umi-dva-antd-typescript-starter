import { Layout } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import Home from '../components/index'

import styles from './index.less';

function renderHeader(props) {
  return <Layout.Header className={styles.header}>Header</Layout.Header>;
}

function renderContent(props) {
  const { children } = props;

  return <Layout.Content className={styles.content}>{children}</Layout.Content>;
}

function renderFooter(props) {
  return <Layout.Footer className={styles.footer}>Footer</Layout.Footer>;
}

function renderSider(props) {
  return <Layout.Sider className={styles.sider}>Sider</Layout.Sider>;
}

// Default is not using and replace by Home
function BasicLayout(props) {
  return (
    <Layout className={styles.main}>
      {renderHeader(props)}
      <Layout className={styles.main}>
        {renderSider(props)}
        {renderContent(props)}
      </Layout>            
      {renderFooter(props)}
    </Layout>
  );
}


function HomeLayout(props) {
  return (
    <Home />
  )
}

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

// BasicLayout.defaultProps = {};

export default HomeLayout;
