interface HeadingI {
  title: string;
}

const Heading = ({ title }: HeadingI) => {
  return (
    <h2 className='text-lightgray text-xl md:text-4xl 2xl:text-5xl font-monum'>
      {title}
    </h2>
  );
};

export default Heading;
