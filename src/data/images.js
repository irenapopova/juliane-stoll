const modules = import.meta.glob("../assets/images/**/*.{jpg,jpeg,png,webp,avif}", {
  eager: true,
  import: "default",
});

const toLabel = (file) =>
  file.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " ").trim();

export const imageEntries = Object.entries(modules).map(([path, src]) => {
  const file = path.split("/").pop() || "";
  return {
    path,
    src,
    file,
    label: toLabel(file),
  };
});
