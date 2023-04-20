interface IconI {
  src: string;
  alt: string;
  customStyling?: string;
}

const Icon = ({ src, alt, customStyling }: IconI) => {
  return <img src={src} alt={alt} className={`${customStyling} h-5`} />;
};

export default Icon;
