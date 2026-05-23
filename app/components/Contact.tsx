export default function Contact() {
  return (
    <section className="py-32 px-6 bg-black" id="contact">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center">
          Contact Us
        </h2>

        <form className="space-y-6">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-5 rounded-2xl bg-[#111] border border-white/10 outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-5 rounded-2xl bg-[#111] border border-white/10 outline-none"
          />

          <textarea
            placeholder="Tell us about your project"
            rows={6}
            className="w-full p-5 rounded-2xl bg-[#111] border border-white/10 outline-none"
          />

          <button className="bg-white text-black px-10 py-4 rounded-full font-semibold hover:scale-105 transition">
            Send Inquiry
          </button>

        </form>
      </div>
    </section>
  )
}