import Link from "next/link";

const Homepage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 lg:px-20">
        <h1 className="text-2xl font-bold">
          Z-School <span className="text-purple-400">Portal</span>
        </h1>

        <Link
          href="/sign-in"
          className="rounded-full bg-purple-500 px-6 py-2 font-semibold hover:bg-purple-600 transition"
        >
          Sign In
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="flex min-h-[70vh] items-center justify-center px-8 text-center">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm uppercase tracking-[5px] text-purple-300">
            School Management System
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Welcome to{" "}
            <span className="text-purple-400">
              Z School Portal
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            A complete digital solution to manage students, teachers,
            classes, results and school operations from one powerful platform.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/sign-in"
              className="rounded-xl bg-purple-500 px-8 py-3 font-semibold shadow-lg hover:bg-purple-600 transition"
            >
              Login Portal
            </Link>

            <Link
              href="#features"
              className="rounded-xl border border-white/20 px-8 py-3 font-semibold hover:bg-white/10 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="grid gap-6 px-8 pb-16 md:grid-cols-3 lg:px-20"
      >
        {[
          "Admin Management",
          "Teacher Portal",
          "Student & Parent Access",
        ].map((feature) => (
          <div
            key={feature}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-lg hover:-translate-y-2 transition"
          >
            <h2 className="text-xl font-bold text-purple-300">
              {feature}
            </h2>

            <p className="mt-3 text-gray-300">
              Manage academic activities with a simple and powerful dashboard.
            </p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Homepage;