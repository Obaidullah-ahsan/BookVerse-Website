const AboutUs = () => {
  return (
    <section>
      <h2 className="text-3xl text-center mx-auto font-bold py-6 my-3 rounded-2xl bg-[#1313130D]">
        About Us
      </h2>
      <img
        src="https://i.ibb.co/vjG0CHd/bookstore.jpg"
        alt=""
        className="w-full mx-auto relative dark:bg-gray-500 rounded-lg shadow-md"
      />
      <div className="flex justify-center items-center mt-72 md:mt-32 lg:mt-10">
        <div className="absolute bg-white w-[370px] md:w-[650px] lg:w-[900px] mx-auto px-4 py-4 md:px-10 md:py-6">
          <h1 className="text-5xl font-bold font-[playfair-display] mb-8">
            Welcome to Bookverse
          </h1>
          <p>
            Your literary sanctuary amidst the digital realm. At Bookverse, we
            believe in the transformative power of words, where stories
            transcend time and space to weave intricate narratives that
            captivate hearts and minds. Our mission is to foster a community of
            book lovers, where avid readers, aspiring writers, and literary
            enthusiasts come together to celebrate the magic of literature. With
            a curated selection spanning genres and cultures, we strive to
            ignite imagination, spark curiosity, and inspire meaningful
            conversations. Whether you seek an escape into fantastical worlds, a
            journey through history's annals, or a dive into thought-provoking
            contemporary fiction, Bookverse is your gateway to endless
            adventures between the pages. Join us in exploring the boundless
            wonders of the written word, for within the pages of a book, lies a
            universe waiting to be discovered.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
