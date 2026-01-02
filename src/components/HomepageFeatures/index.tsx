import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Image: React.ComponentType<React.ComponentPropsWithoutRef<'img'>>;
  description: React.ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Questions?',
    Image: () => <img src={require('@site/static/img/fragbot_questioningAsset.png').default} alt="Questions?"
    className={styles.featureAsset} />,
    description: (
      <>
        Use the search bar above our take a look around at different categories.
        If you still have questions, feel free <a href="https://clients.fragnet.net" target="_blank"> to raise a 
        ticket</a> or talk to our AI chat bot.
      </>
    ),
  },
  {
    title: 'Open Source',
    Image: () => <img src={require('@site/static/img/fragbot_laptopAsset.png').default} alt="Fragbot with Laptop"
    className={styles.featureAsset} />,
    description: (
      <>
        Our documentation is publicly accessible, and we welcome contributions from everyone!
        If you've contributed, kindly raise a ticket with us, and we'd be pleased to offer compensation. =)
      </>
    ),
  },
  {
    title: 'Powered by React',
    Image: () => <img src={require('@site/static/img/fragbot_sitting_on_serversAsset.png').default} alt="Easy to Use"
    className={styles.featureAsset} />,
    description: (
      <>
        Our documentation is built with React, allowing for a smooth and enhanced user experience.
      </>
    ),
  },
];

function Feature({title, Image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Image className={styles.featureImg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): React.ReactElement {
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
