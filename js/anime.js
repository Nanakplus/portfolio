bubbly({
    colorStart: "#252525",
    colorStop: "#111111",
    blur: 1,
    bubbles: 30,
    compose: "source-over",
    shadowColor: "#145bd4",
    radiusFunc: () => Math.random() * 15,
    bubbleFunc: () => `hsla(0, 0%, 80%, ${Math.random() * 0.25})`,
});
