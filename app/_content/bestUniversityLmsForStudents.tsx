import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

export const bestUniversityLmsForStudentsMetadata: Metadata = {
  title: "Best University LMS for Students (2025 Guide)",
  description:
    "A student-first guide to the best university learning management systems (LMS): top picks, must-have features, comparison table, and selection checklist.",
};

type LmsPick = {
  name: string;
  bestFor: string;
  whyStudentsLikeIt: string[];
  watchFors: string[];
};

const lmsPicks: LmsPick[] = [
  {
    name: "Canvas",
    bestFor: "Best overall for most universities",
    whyStudentsLikeIt: [
      "Clean course navigation that scales well across multiple classes",
      "Reliable notifications for announcements, due dates, and grading updates",
      "Strong mobile experience and wide third‑party tool support",
    ],
    watchFors: [
      "Course organization still depends on each instructor",
      "Some advanced workflows are hidden behind multiple menus",
    ],
  },
  {
    name: "D2L Brightspace",
    bestFor: "Best for structure, feedback, and analytics",
    whyStudentsLikeIt: [
      "Clear progress and competency views in many deployments",
      "Strong assessment tooling and rubric-based feedback",
      "Often paired with good accessibility configurations",
    ],
    watchFors: [
      "Interface can feel busy when many tools are enabled",
      "Experience varies depending on how your institution configures it",
    ],
  },
  {
    name: "Moodle",
    bestFor: "Best open‑source option (when well configured)",
    whyStudentsLikeIt: [
      "Flexible course formats and plugins (quizzes, forums, workshops)",
      "Commonly used worldwide, including at large institutions",
      "Can be fast and intuitive with a streamlined theme",
    ],
    watchFors: [
      "UX can feel inconsistent across courses due to theme/plugin choices",
      "Plugin-heavy installs may be slower during peak usage",
    ],
  },
  {
    name: "Blackboard Learn Ultra",
    bestFor: "Best for institutions modernizing from legacy Blackboard",
    whyStudentsLikeIt: [
      "More modern interface than classic Blackboard",
      "Central activity stream for new content and grades",
      "Good support for discussion-based courses",
    ],
    watchFors: [
      "Some features depend on whether your school fully adopted Ultra",
      "Less consistent third‑party integrations compared to others",
    ],
  },
  {
    name: "Open edX",
    bestFor: "Best for self‑paced programs and MOOC-style learning",
    whyStudentsLikeIt: [
      "Great for video-first, modular course content",
      "Scales well for large cohorts",
      "Strong for certificate/continuing education experiences",
    ],
    watchFors: [
      "Less common as the primary LMS for degree programs",
      "Traditional campus workflows (labs, sections) may require add-ons",
    ],
  },
];

type ComparisonRow = {
  lms: string;
  mobile: string;
  navigation: string;
  notifications: string;
  accessibility: string;
  integrations: string;
  notes: string;
};

const comparison: ComparisonRow[] = [
  {
    lms: "Canvas",
    mobile: "Strong",
    navigation: "Simple",
    notifications: "Excellent",
    accessibility: "Strong",
    integrations: "Excellent",
    notes: "Most common student-friendly default experience.",
  },
  {
    lms: "D2L Brightspace",
    mobile: "Strong",
    navigation: "Structured",
    notifications: "Very good",
    accessibility: "Strong",
    integrations: "Very good",
    notes: "Great when the school keeps tools curated.",
  },
  {
    lms: "Moodle",
    mobile: "Good",
    navigation: "Depends",
    notifications: "Good",
    accessibility: "Depends",
    integrations: "Excellent",
    notes: "Best when the theme + plugins are intentionally designed.",
  },
  {
    lms: "Blackboard Ultra",
    mobile: "Good",
    navigation: "Good",
    notifications: "Good",
    accessibility: "Good",
    integrations: "Good",
    notes: "Improved UX, but consistency varies by deployment.",
  },
  {
    lms: "Open edX",
    mobile: "Good",
    navigation: "Great for modules",
    notifications: "OK",
    accessibility: "Good",
    integrations: "Good",
    notes: "Excellent for self-paced and video-first content.",
  },
];

const toc = [
  { id: "quick-picks", label: "Quick picks" },
  { id: "comparison", label: "Comparison table" },
  { id: "must-have", label: "Must-have LMS features for students" },
  { id: "how-to-choose", label: "How to choose (or survive) an LMS" },
  { id: "faq", label: "FAQ" },
];

function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200">
      {children}
    </span>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-700 dark:text-zinc-200">
        {children}
      </div>
    </section>
  );
}

export function BestUniversityLmsForStudentsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <header className="sticky top-0 z-10 border-b border-zinc-200/70 bg-zinc-50/90 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/80">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-baseline gap-3">
            <span className="text-sm font-semibold tracking-tight">
              University LMS Guide
            </span>
            <Chip>Student-first</Chip>
          </div>
          <nav aria-label="Table of contents" className="hidden gap-4 md:flex">
            {toc.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-xs font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-6 py-14">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            Updated for 2025
          </p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight">
            Best university LMS for students
          </h1>
          <p className="mt-4 text-base leading-7 text-zinc-700 dark:text-zinc-200">
            A learning management system (LMS) can either make your semester feel
            organized—or turn it into a scavenger hunt for due dates. This guide
            focuses on what actually matters to students: clear navigation,
            reliable notifications, fast mobile access, and consistent assignment
            workflows.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <Chip>Navigation</Chip>
            <Chip>Mobile experience</Chip>
            <Chip>Notifications</Chip>
            <Chip>Accessibility</Chip>
            <Chip>Integrations</Chip>
          </div>

          <p className="mt-6 text-sm leading-7 text-zinc-700 dark:text-zinc-200">
            Prefer a clean URL? Visit{" "}
            <Link
              href="/best-university-lms-for-students"
              className="font-medium text-zinc-900 underline underline-offset-4 hover:text-zinc-700 dark:text-zinc-50 dark:hover:text-zinc-200"
            >
              /best-university-lms-for-students
            </Link>
            .
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_360px]">
          <article className="space-y-12">
            <Section id="quick-picks" title="Quick picks (student-focused)">
              <p>
                There is no single universal “best” LMS because universities
                configure them differently. But these platforms consistently
                score well for day-to-day student experience.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {lmsPicks.map((pick) => (
                  <div
                    key={pick.name}
                    className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                        {pick.name}
                      </h3>
                      <Chip>{pick.bestFor}</Chip>
                    </div>

                    <div className="mt-4 space-y-3">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                          Why students like it
                        </p>
                        <ul className="mt-2 list-disc space-y-1 pl-5">
                          {pick.whyStudentsLikeIt.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                          Watch for
                        </p>
                        <ul className="mt-2 list-disc space-y-1 pl-5">
                          {pick.watchFors.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-6">
                If your university has already chosen the LMS, your best move is
                to learn the shortcuts: set notification preferences, sync the
                calendar, and keep your course dashboard tidy.
              </p>
            </Section>

            <Section id="comparison" title="Comparison table (what students feel)">
              <p>
                This is a practical, student-facing comparison. “Depends” usually
                means the experience changes a lot based on instructor setup or
                institutional configuration.
              </p>

              <div className="mt-4 overflow-x-auto rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                <table className="w-full min-w-[820px] border-collapse text-left text-sm">
                  <thead className="bg-zinc-50 text-xs font-semibold uppercase tracking-wide text-zinc-600 dark:bg-zinc-950 dark:text-zinc-300">
                    <tr>
                      <th className="px-4 py-3">LMS</th>
                      <th className="px-4 py-3">Mobile</th>
                      <th className="px-4 py-3">Navigation</th>
                      <th className="px-4 py-3">Notifications</th>
                      <th className="px-4 py-3">Accessibility</th>
                      <th className="px-4 py-3">Integrations</th>
                      <th className="px-4 py-3">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((row) => (
                      <tr
                        key={row.lms}
                        className="border-t border-zinc-200 dark:border-zinc-800"
                      >
                        <td className="px-4 py-3 font-medium">{row.lms}</td>
                        <td className="px-4 py-3 text-zinc-700 dark:text-zinc-200">
                          {row.mobile}
                        </td>
                        <td className="px-4 py-3 text-zinc-700 dark:text-zinc-200">
                          {row.navigation}
                        </td>
                        <td className="px-4 py-3 text-zinc-700 dark:text-zinc-200">
                          {row.notifications}
                        </td>
                        <td className="px-4 py-3 text-zinc-700 dark:text-zinc-200">
                          {row.accessibility}
                        </td>
                        <td className="px-4 py-3 text-zinc-700 dark:text-zinc-200">
                          {row.integrations}
                        </td>
                        <td className="px-4 py-3 text-zinc-700 dark:text-zinc-200">
                          {row.notes}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Section>

            <Section id="must-have" title="Must-have LMS features for students">
              <p>
                When students say an LMS is “good,” they usually mean it reduces
                cognitive load. The best systems make it obvious what to do next
                and hard to miss important updates.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                  <h3 className="text-sm font-semibold">Clarity & consistency</h3>
                  <ul className="mt-3 list-disc space-y-1 pl-5">
                    <li>One obvious place to find assignments and grades</li>
                    <li>Consistent modules/week layout across courses</li>
                    <li>Fast search for files, slides, and announcements</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                  <h3 className="text-sm font-semibold">Mobile-first workflow</h3>
                  <ul className="mt-3 list-disc space-y-1 pl-5">
                    <li>Full notifications (not just email copies)</li>
                    <li>Offline-friendly content or reliable low-bandwidth mode</li>
                    <li>Simple submission flow for photos/PDFs</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                  <h3 className="text-sm font-semibold">Feedback you can use</h3>
                  <ul className="mt-3 list-disc space-y-1 pl-5">
                    <li>Inline comments and rubric feedback</li>
                    <li>Submission history and version tracking</li>
                    <li>Clear late policies and timestamps</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                  <h3 className="text-sm font-semibold">Accessibility & trust</h3>
                  <ul className="mt-3 list-disc space-y-1 pl-5">
                    <li>Keyboard navigation and screen-reader support</li>
                    <li>Captions/transcripts and readable PDFs</li>
                    <li>Predictable privacy settings and data handling</li>
                  </ul>
                </div>
              </div>

              <p>
                If you are comparing programs as a prospective student, ask for
                screenshots of a real course and a mobile demo. The LMS itself is
                only half the story—the other half is how consistently faculty
                use it.
              </p>
            </Section>

            <Section id="how-to-choose" title="How to choose (or survive) an LMS">
              <ol className="list-decimal space-y-2 pl-5">
                <li>
                  <span className="font-medium text-zinc-900 dark:text-zinc-50">
                    Turn on the right notifications.
                  </span>{" "}
                  Start with announcements, due dates, and grading updates.
                </li>
                <li>
                  <span className="font-medium text-zinc-900 dark:text-zinc-50">
                    Sync everything to one calendar.
                  </span>{" "}
                  Use iCal feeds when available so due dates show up where you
                  actually look.
                </li>
                <li>
                  <span className="font-medium text-zinc-900 dark:text-zinc-50">
                    Create a “week zero” checklist.
                  </span>{" "}
                  Find the syllabus, grade breakdown, office hours, and first two
                  weeks of work for every class.
                </li>
                <li>
                  <span className="font-medium text-zinc-900 dark:text-zinc-50">
                    Standardize your own file system.
                  </span>{" "}
                  Download key files into folders per course so you are not
                  dependent on the LMS being up.
                </li>
                <li>
                  <span className="font-medium text-zinc-900 dark:text-zinc-50">
                    Report friction with specifics.
                  </span>{" "}
                  Screenshots and exact steps help IT fix issues faster.
                </li>
              </ol>
            </Section>

            <Section id="faq" title="FAQ">
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold">
                    Is Canvas the best university LMS?
                  </h3>
                  <p className="mt-2">
                    For many students, yes—Canvas tends to offer a clear
                    interface, strong notifications, and predictable workflows.
                    But a well-configured Moodle or Brightspace deployment can be
                    just as good.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold">
                    Why do two students describe the same LMS differently?
                  </h3>
                  <p className="mt-2">
                    Instructors can radically change the experience by organizing
                    content well (or not), enabling extra tools, and setting
                    sensible defaults for modules, grading, and deadlines.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold">
                    What is the single most important feature for students?
                  </h3>
                  <p className="mt-2">
                    Reliable, configurable notifications. If the LMS tells you
                    what changed, when it changed, and what is due next, you can
                    stay on top of your workload.
                  </p>
                </div>
              </div>
            </Section>
          </article>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
              <h2 className="text-sm font-semibold">Student checklist</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-700 dark:text-zinc-200">
                If you are evaluating a university (or a new program), use this
                checklist to judge the student experience in under 10 minutes.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-200">
                <li>Can you find every syllabus in 2 clicks?</li>
                <li>Do due dates show up in one calendar view?</li>
                <li>Do push notifications work on mobile?</li>
                <li>Can you see rubric feedback and comments clearly?</li>
                <li>Are lectures accessible (captions/transcripts)?</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
              <h2 className="text-sm font-semibold">Tip for course success</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-700 dark:text-zinc-200">
                The best LMS will not save a disorganized course. When you get a
                class that feels chaotic, create your own weekly dashboard:
                copy the schedule into your notes app, link to the key pages, and
                set two reminders per deadline.
              </p>
            </div>
          </aside>
        </div>

        <footer className="mt-16 border-t border-zinc-200 pt-8 text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
          <p>
            This page is an opinionated guide for students and prospective
            students. University LMS features and availability vary by
            institution, licensing, and configuration.
          </p>
        </footer>
      </main>
    </div>
  );
}
