import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Efficient.',
    Svg: require('../../static/img/efficient.svg').default,
    description: (
      <>
        Jexactyl is a streamlined version of Pterodactyl Panel 
        with advanced features.
      </>
    ),
  },
  {
    title: 'Fast.',
    Svg: require('../../static/img/fast.svg').default,
    description: (
      <>
        Jexactyl takes advantage of speedy libraries in order to 
        provide a blazing-fast experience to all users.
      </>
    ),
  },
  {
    title: 'Reliable.',
    Svg: require('../../static/img/reliable.svg').default,
    description: (
      <>
        Jexactyl is designed to be reliable, stable and powerful
        while incorporating new features.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
