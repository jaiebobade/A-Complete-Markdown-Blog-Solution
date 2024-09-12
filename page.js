import Image from 'next/image';

export default function Contact() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-32 bg-gray-100 dark:bg-gray-700">
        <div className="w-full max-w-4xl p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0">
              <div className="relative w-48 h-48 rounded-full overflow-hidden">
                <img src="https://images.pexels.com/photos/3861961/pexels-photo-3861961.jpeg?auto=compress&cs=tinysrgb&w=600" alt="profile" className="object-cover w-full h-full" />
              </div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Contact Me</h1>
              <p className="text-gray-600 dark:text-gray-50 text-lg mb-4">
                I'd love to hear from you! Whether you have a question, a project idea, or just want to say hello, feel free to reach out.
              </p>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 dark:text-gray-50 text-sm font-bold mb-2" htmlFor="name">
                    Name
                  </label>
                  <input className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" type="text" id="name" name="name" required />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-50 text-sm font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" type="email" id="email" name="email" required />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-50 text-sm font-bold mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" id="message" name="message" rows="4" required></textarea>
                </div>
                <div>
                  <button className="w-full px-4 py-2 bg-indigo-600 text-white font-bold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500" type="submit">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-50 dark:bg-gray-800 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Get in Touch</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-50">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3">
                <img src="https://images.pexels.com/photos/4050301/pexels-photo-4050301.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Contact" className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Let's Connect</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  Feel free to reach out to me through the contact form, or connect with me on social media. I'm always excited to meet new people and explore new opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
