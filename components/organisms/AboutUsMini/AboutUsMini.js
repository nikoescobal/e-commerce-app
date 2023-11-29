import React from 'react';
import styles from './AboutUsMini.module.scss';
import Typography from '../../atoms/Typography/Typography';
import content from './content';

const titleParts = content.title
  .split(/(<span.*?>.*?<\/span>)/)
  .filter(Boolean);

const AboutUsMini = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}></div>
      <div className={styles.content}>
        <Typography
          variant="h4"
          color="dark"
          fontWeight="bold"
          className={styles.title}
        >
          {titleParts.map((part, index) => {
            if (part.includes('<span')) {
              return (
                <span key={index} className={styles.bestHighlight}>
                  best
                </span>
              );
            }
            return part;
          })}
        </Typography>
        <Typography
          variant="body"
          fontWeight="medium"
          className={styles.description}
        >
          {content.description}
        </Typography>
      </div>
    </div>
  );
};

export default AboutUsMini;
