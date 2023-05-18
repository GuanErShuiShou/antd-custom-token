import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Button, Space } from 'antd';
import styles from './index.less';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim(name)} />

        <Space>
          <Button type="primary">按钮</Button>

          <span className={styles.bg}>
            自定义
          </span>
        </Space>
      </div>
    </PageContainer>
  );
};

export default HomePage;
