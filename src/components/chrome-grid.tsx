
export const ChromeGrid = () => {
  return (
    <div className="absolute inset-0 grid grid-cols-12 gap-4 opacity-10">
      {Array.from({ length: 144 }).map((_, i) => (
        <div
          key={i}
          className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-lg transform rotate-3 hover:rotate-6 transition-transform duration-300"
          style={{
            height: `${Math.random() * 100 + 50}px`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};
