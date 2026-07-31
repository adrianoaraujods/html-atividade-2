(() => {
	const root = document.documentElement;
	const toggle = document.querySelector(".theme-toggle");

	const saved = localStorage.getItem("theme");
	const isDark = saved
		? saved === "dark"
		: matchMedia("(prefers-color-scheme: dark)").matches;

	function setTheme(dark) {
		root.classList.toggle("dark", dark);
		root.classList.toggle("light", !dark);

		if (toggle) {
			toggle.setAttribute("aria-pressed", String(dark));
			toggle.setAttribute(
				"aria-label",
				dark ? "Desativa tema escuro" : "Ativar tema escuro",
			);
		}
	}

	setTheme(isDark);

	if (toggle) {
		toggle.addEventListener("click", () => {
			const next = !root.classList.contains("dark");
			setTheme(next);
			localStorage.setItem("theme", next ? "dark" : "light");
		});
	}
})();
