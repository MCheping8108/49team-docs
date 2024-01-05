import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '该网站使用的是Docusaurus',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus是一个基于React构建的框架文档网站，它可以帮助你快速构建一个高质量的文档网站。
      </>
    ),
  },
  {
    title: '丰富多彩的内容',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        我们是一个庞大的大型MCARG的圈子，成千上万的人们都在这里交流。
      </>
    ),
  },
  {
    title: '加入我们',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        你喜欢这个圈子？你想加入我们吗？那就来吧!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
