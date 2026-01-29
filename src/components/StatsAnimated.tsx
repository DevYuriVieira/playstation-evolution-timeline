import { useEffect, useState } from "react";

interface Props {
  value: number;
  duration?: number;
}

export default function StatsAnimated({ value, duration = 2000 }: Props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = value / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [value, duration]);

  return <>{count}M Units Sold</>;
}
