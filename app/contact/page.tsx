import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <main className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-10 sm:px-10 lg:px-16">
        <section className="rounded-[2rem] bg-white p-8 shadow-[0_25px_60px_rgba(15,23,42,0.08)] md:p-12">
          <div className="mb-10 flex flex-col gap-4 text-center sm:text-left">
            <p className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
              Contact Us
            </p>
            <h1 className="text-4xl font-semibold text-slate-950 sm:text-5xl">
              We are here to help your household with trusted worker services.
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-600 sm:mx-0">
              Reach out for placement assistance, training details, or general inquiries. Our team responds quickly to support families and workers across Abu Dhabi.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-8 rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Office</p>
                <p className="text-xl font-semibold text-slate-900">Khalifa City, Abu Dhabi</p>
                <p className="text-slate-600">Visit us for personal support and to learn more about our domestic worker training and placement services.</p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-3xl bg-white p-6 shadow-sm shadow-slate-200/60">
                  <p className="text-sm uppercase tracking-[0.2em] text-blue-500">Phone</p>
                  <p className="mt-3 text-xl font-semibold text-slate-950">02 8868 100</p>
                  <p className="mt-2 text-slate-600">Call our office during working hours.</p>
                </div>
                <div className="rounded-3xl bg-white p-6 shadow-sm shadow-slate-200/60">
                  <p className="text-sm uppercase tracking-[0.2em] text-blue-500">Mobile</p>
                  <p className="mt-3 text-xl font-semibold text-slate-950">052 647 9213</p>
                  <p className="mt-2 text-slate-600">For quick assistance, message or call the mobile line.</p>
                </div>
              </div>

              <div className="rounded-3xl bg-blue-950 p-6 text-white shadow-lg shadow-blue-950/20">
                <p className="text-sm uppercase tracking-[0.2em] text-blue-200">Email</p>
                <p className="mt-3 text-xl font-semibold">info@leadershipauh.ae</p>
                <p className="mt-2 text-blue-100">Use this email for queries about placement, training, or worker support.</p>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-sm shadow-slate-200/80">
              <h2 className="text-2xl font-semibold text-slate-950">Send a message</h2>
              <p className="mt-3 text-slate-600">Fill in the form below and we will get back to you shortly.</p>
              <form className="mt-8 space-y-5">
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Your name</span>
                  <input
                    type="text"
                    placeholder="Example: Sara Ahmed"
                    className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-3 text-slate-900 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Email address</span>
                  <input
                    type="email"
                    placeholder="example@mail.com"
                    className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-3 text-slate-900 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Message</span>
                  <textarea
                    rows={5}
                    placeholder="Tell us how we can help you..."
                    className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-3 text-slate-900 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                  />
                </label>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-[2rem] bg-blue-950 p-8 text-white shadow-[0_25px_60px_rgba(15,23,42,0.14)] sm:flex-row">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-blue-200">Need immediate help?</p>
            <p className="mt-2 text-xl font-semibold">Reach us by phone anytime</p>
          </div>
          <a
            href="tel:+971528479213"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-950 transition hover:bg-slate-100"
          >
            Call 052 647 9213
          </a>
        </div>

        <div className="mt-8 flex justify-center text-sm text-slate-500">
          <Link href="/" className="font-semibold text-blue-700 hover:text-blue-800">
            Back to home
          </Link>
        </div>
      </main>
    </div>
  );
}
