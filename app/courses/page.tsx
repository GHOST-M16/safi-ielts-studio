export default function CoursesPage() {
  const courses = [
    {
      id: "ielts-academic",
      title: "IELTS Academic",
      purpose:
        "For students aiming to study abroad or pursue professional registration in English-speaking countries.",
      duration: "2 months",
      coverage: "All 4 modules – Listening, Reading, Writing, Speaking",
      mode: "Online & On-Campus",
      classes: "5 days a week",
      timings: "8–10 AM | 10–12 AM | 2–4 PM | 4–6 PM | 6–8 PM",
      fee: "PKR 35,000",
      details:
        "Emphasis on academic vocabulary, essay writing, report writing, and exam strategies. Includes mock tests and personalized feedback.",
    },
    {
      id: "ielts-general-training",
      title: "IELTS General Training",
      purpose:
        "For students or professionals planning to migrate, work, or study at secondary education levels in English-speaking countries.",
      duration: "2 months",
      coverage: "All 4 modules",
      mode: "Online & On-Campus",
      classes: "5 days a week",
      timings: "8–10 AM | 10–12 AM | 2–4 PM | 4–6 PM | 6–8 PM",
      fee: "PKR 35,000",
      details:
        "Includes letter and report writing, reading comprehension, listening exercises, and speaking practice for daily situations.",
    },
    {
      id: "ielts-life-skills-a1",
      title: "IELTS Life Skills (A1)",
      purpose:
        "For beginners who need to demonstrate basic English proficiency for UK visa and immigration purposes.",
      duration: "2 months",
      coverage: "Speaking & Listening",
      mode: "Online & On-Campus",
      classes: "5 days a week",
      timings: "8–10 AM | 10–12 AM | 2–4 PM | 4–6 PM | 6–8 PM",
      fee: "PKR 35,000",
      details:
        "Practice in conversational English, listening comprehension, pronunciation, and role-play exercises to meet Life Skills A1 standards.",
    },
    {
      id: "pte-academic",
      title: "PTE Academic",
      purpose:
        "For students aiming for academic study abroad or professional recognition through a computer-based exam.",
      duration: "2 months",
      coverage: "All 4 modules – Speaking & Writing, Reading, Listening",
      mode: "Online & On-Campus",
      classes: "5 days a week",
      timings: "8–10 AM | 10–12 AM | 2–4 PM | 4–6 PM | 6–8 PM",
      fee: "PKR 35,000",
      details:
        "Includes full exam practice, scoring strategies, and module-specific techniques to achieve the target band.",
    },
    {
      id: "pte-core",
      title: "PTE Core",
      purpose:
        "Ideal for students seeking vocational or professional certification, with focus on real-life English and workplace communication.",
      duration: "2 months",
      coverage: "All 4 modules",
      mode: "Online & On-Campus",
      classes: "5 days a week",
      timings: "8–10 AM | 10–12 AM | 2–4 PM | 4–6 PM | 6–8 PM",
      fee: "PKR 35,000",
      details:
        "Emphasis on reading, writing, speaking, and listening practice with mock tests and feedback tailored to vocational or professional requirements.",
    },
    {
      id: "ielts-online-live",
      title: "IELTS Online Live Sessions",
      purpose:
        "For students who prefer flexible online learning with interactive live sessions and personalized feedback.",
      duration: "2 months",
      coverage: "All 4 modules",
      mode: "Online Live",
      classes: "5 days a week",
      timings: "8–10 AM | 10–12 AM | 2–4 PM | 4–6 PM | 6–8 PM",
      fee: "PKR 35,000",
      details:
        "Includes real-time speaking and writing correction, mock tests, and strategies to improve scores across all modules.",
    },
  ];

  return (
    <main className="bg-white min-h-screen">
      <section className="border-b border-slate-200 bg-slate-50/60">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <h1 className="font-display text-4xl font-bold text-slate-850 sm:text-5xl">
            Courses We Offer at Safi IELTS Studio
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            We provide a comprehensive range of English proficiency courses
            designed to help students achieve their goals—whether for higher
            education, migration, work, or visa requirements.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16 space-y-10">
          {courses.map((course, index) => (
            <article
              key={course.id}
              id={course.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                    {index + 1}. {course.title}
                  </p>
                  <p className="mt-2 text-slate-600">{course.purpose}</p>
                </div>
                <p className="mt-1 text-base font-semibold text-primary sm:text-lg">
                  {course.fee}
                </p>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>
                    <span className="font-semibold">Duration:</span>{" "}
                    {course.duration}
                  </li>
                  <li>
                    <span className="font-semibold">Coverage:</span>{" "}
                    {course.coverage}
                  </li>
                  <li>
                    <span className="font-semibold">Mode:</span> {course.mode}
                  </li>
                </ul>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>
                    <span className="font-semibold">Classes:</span>{" "}
                    {course.classes}
                  </li>
                  <li>
                    <span className="font-semibold">Timings:</span>{" "}
                    {course.timings}
                  </li>
                </ul>
              </div>

              <p className="mt-5 text-sm text-slate-700">{course.details}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

