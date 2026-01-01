const messages = [
  {
    from: "Anonymous",
    text: "Hey, how are you doing today?",
    time: "10 min ago",
  },
  {
    from: "Secret Admirer",
    text: "You're doing great, keep it up!",
    time: "25 min ago",
  },
  {
    from: "Unknown",
    text: "Just wanted to say you're awesome.",
    time: "1 hour ago",
  },
  {
    from: "Mystery User",
    text: "Your work inspires me daily.",
    time: "2 hours ago",
  },
  {
    from: "Hidden Friend",
    text: "Thinking of you, stay strong!",
    time: "3 hours ago",
  },
  { from: "Anonymous", text: "You made my day brighter.", time: "5 hours ago" },
];

const MessageCard = ({
  from,
  text,
  time,
}: {
  from: string;
  text: string;
  time: string;
}) => (
  <div
    className="
      group min-w-[320px] max-w-[320px] flex-shrink-0 p-6 rounded-2xl
      bg-card border border-border/60 shadow-sm
      transition-all duration-300 ease-out
      hover:shadow-lg hover:border-border hover:-translate-y-1
      will-change-transform
    "
  >
    <div className="flex items-center justify-between mb-4">
      <span className="text-sm font-medium text-foreground">{from}</span>
      <span className="text-xs text-muted-foreground">{time}</span>
    </div>

    <p className="text-sm leading-relaxed text-foreground/90">{text}</p>
  </div>
);
const MessageCarousel = () => {
  const duplicatedMessages = [...messages, ...messages];

  return (
    <section
      className="py-20 overflow-hidden animate-in fade-in"
      style={{ animationDelay: "400ms" }}
    >
      {/* Heading */}
      <div className="mb-12 px-6 text-center">
        <h2 className="mb-3 text-2xl md:text-3xl font-semibold text-foreground">
          Messages People Receive
        </h2>
        <p className="mx-auto max-w-md text-muted-foreground">
          See what kind of anonymous messages are being shared
        </p>
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Gradient fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-10" />

        {/* Scrolling track */}
        <div className="flex gap-6 animate-scroll">
          {duplicatedMessages.map((msg, index) => (
            <MessageCard
              key={index}
              {...msg}
              aria-hidden={index >= messages.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MessageCarousel;
