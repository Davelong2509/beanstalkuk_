"use client";

import { useState } from "react";
import { MapPin, ExternalLink } from "lucide-react";

const mapEmbedUrl =
  "https://www.google.com/maps?q=4a+Bishop+Street,+Town+Hall+Square,+Leicester+LE1+6AF&output=embed";

export default function LazyMap() {
  const [isLoaded, setIsLoaded] = useState(false);

  if (isLoaded) {
    return (
      <div className="h-full min-h-[20rem] overflow-hidden rounded-2xl border border-forest/10 bg-sage">
        <iframe
          title="Map showing Beanstalk Day Nursery at 4a Bishop Street, Leicester"
          src={mapEmbedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full min-h-[20rem] w-full border-0"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className="flex min-h-[20rem] flex-col items-center justify-center rounded-2xl border border-forest/10 bg-[radial-gradient(circle_at_20%_20%,rgba(248,233,191,0.9),transparent_35%),linear-gradient(135deg,#edf2de,#dfe8d0)] p-8 text-center">
      <span className="flex size-14 items-center justify-center rounded-full bg-forest text-butter">
        <MapPin size={24} strokeWidth={1.5} aria-hidden="true" />
      </span>
      <p className="mt-5 max-w-sm font-display text-2xl leading-tight text-forest">
        Find us in the heart of Leicester.
      </p>
      <p className="mt-3 max-w-sm text-xs leading-6 text-muted">
        The map is provided by Google. It loads only when you choose, so nothing is shared until then.
      </p>
      <button
        type="button"
        onClick={() => setIsLoaded(true)}
        className="mt-5 inline-flex items-center gap-2 rounded-full bg-forest px-5 py-3 text-sm font-semibold text-white transition hover:bg-forest-deep"
      >
        Load the map <ExternalLink size={15} aria-hidden="true" />
      </button>
    </div>
  );
}
