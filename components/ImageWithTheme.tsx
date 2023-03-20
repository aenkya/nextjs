import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ImageWithTheme(props) {
  const { theme } = useTheme();

  //use useEffect to set the props based off the initial theme
  const [finalProps, setFinalProps] = useState(props.light);
  useEffect(() => {
    setFinalProps(theme === 'light' ? props.light : props.dark);
  }, [props.dark, props.light, theme]);

  return (
    <Image
      alt={props.alt}
      src={finalProps}
      {...props}
    />
  );
}
