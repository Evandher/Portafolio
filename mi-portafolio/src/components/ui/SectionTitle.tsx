type SectionTitleProps = {
  label?: string;
  title: string;
  description?: string;
};

const SectionTitle = ({ label, title, description }: SectionTitleProps) => {
  return (
    <div className="mb-12">
      {label && (
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-cyan-400">
          {label}
        </p>
      )}

      <h2
        className="text-3xl font-bold md:text-4xl"
        style={{ color: "var(--heading)" }}
      >
        {title}
      </h2>

      {description && (
        <p className="mt-4 max-w-2xl" style={{ color: "var(--muted)" }}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;