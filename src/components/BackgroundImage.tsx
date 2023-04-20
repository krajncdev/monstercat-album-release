const BackgroundImage = () => {
  return (
    <div className='absolute inset-0 z-10 h-screen'>
      <div className=' from-black to-transparent bg-gradient-to-t absolute bottom-0 w-full h-full z-10'></div>
      <div
        className={`bg-[url(./assets/big-poster.webp)] h-full bg-cover bg-center brightness-50 z-20`}
      ></div>
    </div>
  );
};

export default BackgroundImage;
