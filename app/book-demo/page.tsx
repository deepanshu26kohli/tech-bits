"use client";

const BookDemo = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-3xl w-full text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Book a <span className="text-blue-400">Free Demo</span>
        </h1>
        <p className="text-lg text-gray-300">
          Schedule a demo with our experts to see how we can help your business
          grow with tailored digital solutions.
        </p>
      </div>
      {/* Calendly Embed */}
      <div className="w-full max-w-4xl bg-gray-800 p-6 rounded-2xl shadow-lg">
        <iframe
          src="https://calendly.com/launchurplatform-info" // 🔗 replace with your Calendly link
          width="100%"
          height="700"
          frameBorder="0"
          className="rounded-xl"
        ></iframe>
      </div>
    </section>
  );
};

export default BookDemo;
