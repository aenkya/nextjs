import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import cn from 'classnames';
import styles from 'styles/imageWithTheme.module.css';

export default function ImageWithTheme(props) {
  const { theme } = useTheme();

  //use useEffect to set the props based off the initial theme
  const [finalProps, setFinalProps] = useState(props.light);
  useEffect(() => {
    setFinalProps(theme === 'light' ? props.light : props.dark);
  }, [props.dark, props.light, theme]);

  return (
    <div className={cn(styles.fadeInImage)}>
      <Image
        alt={props.alt}
        src={finalProps}
        {...props}
      />
    </div>
  );
}
