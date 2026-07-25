export default function Navbar() {
  return (
    <nav className="sticky top-0 z-100 border-b backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-1 py-2">
        <a href="/" className="flex items-center gap-3">
          <div>
            <p className="text-lg font-semibold tracking-tight oklch(87% 0 none)">
              LeetCode Analyser
            </p>
            <p className="text-xs oklch(70.7% 0.022 261.325)">
              Track your progress
            </p>
          </div>
        </a>

        <a
          href="https://leetcode.com"
          target="_blank"
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-200 hover:border-slate-300 hover:bg-white hover:text-slate-900"
        >
          Open LeetCode
        </a>
      </div>
    </nav>
  );
}
