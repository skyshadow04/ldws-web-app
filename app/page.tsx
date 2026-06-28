import Link from "next/link";

export default function Home() {
  return (
    <div
      className="relative min-h-screen text-slate-900"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.82), rgba(255,255,255,0.82)), url('/background.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <main className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-10 sm:px-10 lg:px-16">
        <header className="flex flex-col gap-8 rounded-3xl border border-slate-200/70 bg-white/90 p-8 shadow-[0_30px_60px_rgba(15,23,42,0.08)] backdrop-blur-sm md:p-12">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
                Abu Dhabi Domestic Workers Services
              </p>
              <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
                LeaderShip Workers Services
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                Empowering domestic workers with training, support, and trusted placement services to deliver safer, more reliable household care across Abu Dhabi.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
                >
                  Contact Us
                </Link>
                <a
                  href="tel:+971528479213"
                  className="inline-flex items-center justify-center rounded-full border border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-blue-950 transition hover:bg-blue-50"
                >
                  Call Now
                </a>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-blue-950 px-6 py-5 text-white shadow-lg shadow-blue-950/20">
                <p className="text-sm uppercase tracking-[0.2em] text-blue-300">Trusted Since</p>
                <p className="mt-3 text-3xl font-semibold">2015</p>
              </div>
              <div className="rounded-3xl bg-blue-950 px-6 py-5 text-white shadow-lg shadow-blue-950/20">
                <p className="text-sm uppercase tracking-[0.2em] text-blue-300">Workers supported</p>
                <p className="mt-3 text-3xl font-semibold">1,500+</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 rounded-3xl bg-slate-50 p-6 sm:grid-cols-3">
            <article className="space-y-3">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Focus</p>
              <h2 className="text-xl font-semibold text-slate-900">Training & Certification</h2>
              <p className="text-sm leading-6 text-slate-600">Skill development for domestic workers ensures high-quality service and confidence in every home.</p>
            </article>
            <article className="space-y-3">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Service</p>
              <h2 className="text-xl font-semibold text-slate-900">Safe Placement</h2>
              <p className="text-sm leading-6 text-slate-600">Matching families with reliable, trained workers through a transparent and caring process.</p>
            </article>
            <article className="space-y-3">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Support</p>
              <h2 className="text-xl font-semibold text-slate-900">Worker Care</h2>
              <p className="text-sm leading-6 text-slate-600">Continued education and support programs that help workers grow professionally and personally.</p>
            </article>
          </div>
        </header>

        <section className="mt-10 grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
          <div className="rounded-3xl bg-white p-8 shadow-[0_30px_60px_rgba(15,23,42,0.06)]">
            <h2 className="text-2xl font-semibold text-slate-950">About LeaderShip Workers Services</h2>
            <p className="mt-4 text-slate-600 leading-8">
              As one of Abu Dhabi’s most trusted domestic workers employment service centers, we empower workers through education, professional training, and compassionate placement. Our mission is to improve households by ensuring quality support for families and dignity for every worker.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 p-5">
                <h3 className="text-lg font-semibold text-slate-900">Domestic Worker Training</h3>
                <p className="mt-3 text-slate-600">Practical courses in household safety, childcare, elder care, and hygiene best practices.</p>
              </div>
              <div className="rounded-3xl border border-slate-200 p-5">
                <h3 className="text-lg font-semibold text-slate-900">Family Placement</h3>
                <p className="mt-3 text-slate-600">Professional worker matching based on skills, language, and family needs.</p>
              </div>
              <div className="rounded-3xl border border-slate-200 p-5">
                <h3 className="text-lg font-semibold text-slate-900">Worker Wellbeing</h3>
                <p className="mt-3 text-slate-600">Ongoing support services help workers succeed in their roles and feel valued.</p>
              </div>
              <div className="rounded-3xl border border-slate-200 p-5">
                <h3 className="text-lg font-semibold text-slate-900">Employer Guidance</h3>
                <p className="mt-3 text-slate-600">Clear advice and support for families hiring domestic workers in Abu Dhabi.</p>
              </div>
            </div>
          </div>

          <aside className="space-y-6 rounded-3xl bg-blue-950 p-8 text-white shadow-[0_30px_60px_rgba(15,23,42,0.12)]">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-blue-300">Contact</p>
              <h3 className="mt-3 text-2xl font-semibold">Get in touch</h3>
              <p className="mt-4 text-blue-200 leading-7">Speak with our team to learn about our placement process and training programs.</p>
            </div>
            <div className="space-y-3 rounded-3xl bg-blue-900/95 p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-blue-300">Phone</p>
              <p className="text-lg font-semibold">02 8868 100</p>
              <p className="text-sm text-blue-200">Mobile: 052 647 9213</p>
            </div>
            <div className="space-y-3 rounded-3xl bg-blue-900/95 p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-blue-300">Location</p>
              <p className="text-lg font-semibold">Khalifa City, Abu Dhabi</p>
              <p className="text-sm text-blue-200">Serving families and workers across the emirate.</p>
            </div>
            <a
              href="tel:+971528479213"
              className="inline-flex w-full items-center justify-center rounded-full bg-blue-500 px-5 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-blue-400"
            >
              Call Now
            </a>
          </aside>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-[0_30px_60px_rgba(15,23,42,0.06)]">
          <h2 className="text-2xl font-semibold text-slate-950">Why families trust us</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">Professional Care</h3>
              <p className="mt-3 text-slate-600">All workers are prepared with practical training and support before placement.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">Transparent Matching</h3>
              <p className="mt-3 text-slate-600">We match families with workers based on skills, availability, and cultural fit.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">Empowerment First</h3>
              <p className="mt-3 text-slate-600">Our services keep worker wellbeing at the core of every placement.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
