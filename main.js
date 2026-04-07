const yearNode = document.querySelector("#year");
const signalBars = Array.from(document.querySelectorAll(".signal-bar"));
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

if (signalBars.length) {
  const motionFactor = prefersReducedMotion.matches ? 0.4 : 1;
  const barProfiles = signalBars.map((_, index) => ({
    phase: index * 0.72,
    speedA: (0.002 + index * 0.00016) * motionFactor,
    speedB: (0.0034 + index * 0.00011) * motionFactor,
    speedC: (0.0013 + index * 0.00007) * motionFactor,
  }));

  const renderSignal = (time) => {
    signalBars.forEach((bar, index) => {
      const profile = barProfiles[index];
      const waveA = Math.sin(time * profile.speedA + profile.phase);
      const waveB = Math.sin(time * profile.speedB - profile.phase * 1.4);
      const waveC = Math.sin(time * profile.speedC + profile.phase * 2.1);
      const composite = waveA * 0.52 + waveB * 0.33 + waveC * 0.15;
      const normalized = (composite + 1) / 2;
      const scale = 0.22 + normalized * 0.78;
      const opacity = 0.64 + normalized * 0.36;

      bar.style.setProperty("--bar-scale", scale.toFixed(3));
      bar.style.setProperty("--bar-alpha", opacity.toFixed(3));
    });

    window.requestAnimationFrame(renderSignal);
  };

  window.requestAnimationFrame(renderSignal);
}
