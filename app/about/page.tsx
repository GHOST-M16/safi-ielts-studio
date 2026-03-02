export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">
      <section className="border-b border-slate-200 bg-slate-50/60">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              About Us – Safi IELTS Studio
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold text-slate-850 sm:text-5xl">
              Your Official IELTS Partner for Success
            </h1>
            <p className="mt-5 text-lg text-slate-600">
              Safi IELTS Studio is a premium IELTS preparation institute and official
              test centre, proudly partnering with IDP Education. We combine expert
              coaching, modern facilities, and real exam experience to help students
              achieve their target band scores with confidence.
            </p>
            <p className="mt-3 text-lg text-slate-600">
              Whether you are preparing for Academic or General IELTS, aiming for
              higher education abroad, or seeking migration opportunities, we provide
              a complete learning ecosystem — preparation, practice, and official
              testing — all under one roof.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20 grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-start">
          <div>
            <h2 className="font-display text-2xl font-bold text-slate-850 sm:text-3xl">
              Our Philosophy
            </h2>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-primary">
              Precision. Strategy. Results.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              We believe IELTS success is not about memorization — it is about
              strategy, structured preparation, and performance under real exam
              conditions. Every learner is different, so we focus on personalised
              evaluation, targeted improvement, and exam-smart techniques that match
              official IELTS standards.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <p className="text-slate-700">
                  Personalized writing feedback and speaking mock tests
                </p>
              </div>
              <div className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <p className="text-slate-700">Realistic exam simulations</p>
              </div>
              <div className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <p className="text-slate-700">Continuous performance tracking</p>
              </div>
              <div className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <p className="text-slate-700">
                  Small batches for focused attention
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 sm:p-7">
            <h3 className="font-display text-xl font-semibold text-slate-850">
              Why Our Method Works
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              We train students to think, respond, and perform according to official
              IELTS standards, ensuring every hour spent with us moves them closer to
              their target score.
            </p>
            <p className="mt-3 text-sm text-slate-600">
              From diagnostics to band-targeted practice and timed mocks, our systems
              are built to deliver measurable progress in each module.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Why Choose Safi IELTS Studio
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-slate-850 sm:text-4xl">
              Excellence. Precision. Results.
            </h2>
            <p className="mt-4 text-slate-600">
              We are committed to delivering measurable success through structured
              systems, expert guidance, and complete student support.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard title="Official IELTS Exam Centre">
              Prepare and take your official IELTS test at the same trusted location.
            </FeatureCard>
            <FeatureCard title="Certified &amp; Experienced Trainers">
              Structured preparation based on real examiner marking criteria.
            </FeatureCard>
            <FeatureCard title="Personalized Feedback System">
              Detailed writing corrections and accurate speaking band evaluations.
            </FeatureCard>
            <FeatureCard title="Personalized Practice App">
              Exclusive access to the Safi IELTS Studio app for Reading, Writing,
              Listening, and Speaking practice — anytime, anywhere.
            </FeatureCard>
            <FeatureCard title="Free Extra Speaking &amp; Writing Classes">
              Additional focused sessions to help you improve faster in
              high-scoring modules.
            </FeatureCard>
            <FeatureCard title="IELTS Mock Exam Every Saturday">
              Full-length practice of all four modules under real exam conditions.
            </FeatureCard>
            <FeatureCard title="No Extra Charges for Repetition">
              Repeat the course without additional fees until you achieve your
              desired band.
            </FeatureCard>
            <FeatureCard title="Small Batches &amp; 1-on-1 Attention">
              Focused guidance for faster and more consistent improvement.
            </FeatureCard>
            <FeatureCard title="Practice Lab &amp; Facilities">
              Dedicated practice lab, well-equipped classrooms, and test-like
              environments.
            </FeatureCard>
            <FeatureCard title="Comprehensive Learning Resources">
              Free soft-copy notes and structured study material in digital format.
            </FeatureCard>
            <FeatureCard title="Online &amp; On-Campus Options">
              Flexible learning solutions for both local and international students.
            </FeatureCard>
            <FeatureCard title="Free Consultancy Services">
              Professional guidance for study abroad plans and IELTS-related pathways.
            </FeatureCard>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20 grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h2 className="font-display text-2xl font-bold text-slate-850 sm:text-3xl">
                Our Vision
              </h2>
              <p className="mt-3 text-slate-600">
                To become a leading global IELTS institute, known for excellence,
                integrity, and measurable student success.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-slate-850 sm:text-3xl">
                Our Mission
              </h2>
              <p className="mt-3 text-slate-600">
                To empower students with the skills, confidence, and strategies
                required to achieve their target IELTS band scores and unlock global
                opportunities.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-8 flex flex-col justify-center">
            <h2 className="font-display text-2xl font-bold text-slate-850">
              Join Us
            </h2>
            <p className="mt-3 text-slate-600">
              At Safi IELTS Studio, we don&apos;t just prepare students for an exam —
              we prepare them for their next international chapter.
            </p>
            <p className="mt-3 text-slate-600">
              Start your journey with us today and experience a complete IELTS
              ecosystem that aligns preparation, practice, and official testing in
              one place.
            </p>
            <div className="mt-6">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-primary-dark hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                Book a consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

type FeatureCardProps = {
  title: string;
  children: React.ReactNode;
};

function FeatureCard({ title, children }: FeatureCardProps) {
  return (
    <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 hover:-translate-y-0.5">
      <h3 className="font-display text-lg font-semibold text-slate-850">
        {title}
      </h3>
      <p className="mt-2 text-sm text-slate-600">{children}</p>
    </div>
  );
}

