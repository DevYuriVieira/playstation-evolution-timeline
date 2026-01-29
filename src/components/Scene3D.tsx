import { motion } from "framer-motion";

interface Props {
  image: string;
  alt: string;
  className?: string;
}

export default function Scene3D({ image, alt, className }: Props) {
  return (
    <motion.img
      src={image}
      alt={alt}
      className={className}
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateY: [0, 10, -10, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
