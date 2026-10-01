const themeScript = `try { var saved = localStorage.getItem('heni-theme'); var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches; document.documentElement.dataset.theme = saved || (systemDark ? 'dark' : 'light'); } catch (_) { document.documentElement.dataset.theme = 'dark'; }`;

export function ThemeBootstrap() {
  return <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
}
