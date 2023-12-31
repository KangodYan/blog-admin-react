import { Typography } from '@arco-design/web-react';
import Card from '@arco-design/web-react/es/Card';
import Col from '@arco-design/web-react/es/Grid/col';
import Row from '@arco-design/web-react/es/Grid/row';
import { useTitle } from 'ahooks';
import React from 'react';

import data from '@/assets/images/data.png'
import data2 from '@/assets/images/data2.png'
import ChartCard from '@/components/ChartCard';
import ClassCard from '@/components/ClassCard';
import FamiliarTechStack from '@/components/FamiliarTechStack';
import NoticeCard from '@/components/NoticeCard';
import TagCard from '@/components/TagCard';
import { useCountAllArticle } from '@/services/article';
import { useCountAllTag } from '@/services/tag';
import { siteTitle } from '@/utils/constant';

import s from './index.module.scss';

const Home: React.FC = () => {
  useTitle(siteTitle);
  const articleCount = useCountAllArticle();
  const tagCount = useCountAllTag();

  return (
    <>
      {/* 统计卡片区 */}
      <div className={s.countCardContainer}>
        <div className={s.dashboardRow}>
          <div className={s.col}>
            <div className={s.card}>
              <div className={s.body}>
                <div>
                  <Typography.Title heading={6}>文章总量</Typography.Title>
                  <Typography.Text>{articleCount}</Typography.Text>
                </div>
                <img src={data} />
              </div>
            </div>
          </div>
          <div className={s.col}>
            <div className={s.card}>
              <div className={s.body}>
                <div>
                  <Typography.Title heading={6}>标签总量</Typography.Title>
                  <Typography.Text>{tagCount}</Typography.Text>
                </div>
                <img src={data2} />
              </div>
            </div>
          </div>
          <div className={s.col}>
            <FamiliarTechStack />
          </div>
        </div>
      </div>
      {/* 扇形图、分类、标签、公告 */}
      <div className={s.homeBigContainer}>
        <div className={s.chartContainer}>
          <ChartCard />
        </div>
        <div className={s.tagsContainer}>
          <TagCard />
        </div>
        <div className={s.classesNoticeContainer}>
          <div className={s.noticeContainer} >
            <NoticeCard />
          </div>
          <div className={s.classesContainer}>
            <ClassCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
