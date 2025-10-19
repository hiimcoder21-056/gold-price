import { Layout, Typography } from 'antd';
import logo from 'logo.png';
import HomePage from '@/pages/HomePage';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

export default function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header
        style={{
          backgroundColor: '#332a04ff',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <img src={logo} alt="Logo" style={{ height: 40 }} />
        <Title level={3} style={{ color: '#fff', margin: 0 }}>
          Bảng giá vàng
        </Title>
      </Header>

      <Content style={{ padding: 24 }}>
        <HomePage />
      </Content>

      <Footer style={{ textAlign: 'center' }}>
        © {new Date().getFullYear()} Bảng giá vàng
      </Footer>
    </Layout>
  );
}
