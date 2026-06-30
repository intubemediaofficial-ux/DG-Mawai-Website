"use client";

import { useState, useCallback, useSyncExternalStore } from "react";
import Image from "next/image";
import {
  LogOut,
  Save,
  RotateCcw,
  Plus,
  Trash2,
  Image as ImageIcon,
  Music,
  Video,
  Calendar,
  User,
  Home,
  Star,
  ChevronDown,
  ChevronUp,
  X,
  Eye,
} from "lucide-react";
import { verifyAdmin, isAdminLoggedIn, loginAdmin, logoutAdmin } from "@/lib/adminAuth";
import { useSiteContent } from "@/lib/useSiteContent";
import type { SiteContent, SitePhoto, SiteSong, SiteEvent, SiteVideo } from "@/lib/siteContent";

type TabId = "hero" | "about" | "photos" | "songs" | "videos" | "events" | "contact";

const tabs: { id: TabId; label: string; icon: typeof Home }[] = [
  { id: "hero", label: "Hero", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "photos", label: "Photos", icon: ImageIcon },
  { id: "songs", label: "Songs", icon: Music },
  { id: "videos", label: "Videos", icon: Video },
  { id: "events", label: "Events", icon: Calendar },
  { id: "contact", label: "Contact", icon: Star },
];

function LoginForm({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (verifyAdmin(email, password)) {
      loginAdmin();
      onLogin();
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0a0a0a] px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-3xl border border-[#2a2a2a] bg-[#141414] p-8"
      >
        <h1 className="mb-2 text-center text-3xl font-black text-white">
          Admin <span className="text-[#d4af37]">Panel</span>
        </h1>
        <p className="mb-8 text-center text-sm text-gray-400">DG Mawai Website</p>

        {error && (
          <div className="mb-4 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
            {error}
          </div>
        )}

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-lg border border-[#2a2a2a] bg-[#0a0a0a] px-4 py-3 text-white placeholder:text-gray-600 focus:border-[#d4af37] focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full rounded-lg border border-[#2a2a2a] bg-[#0a0a0a] px-4 py-3 text-white placeholder:text-gray-600 focus:border-[#d4af37] focus:outline-none"
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-gradient-to-r from-[#d4af37] to-[#f0d060] py-3 font-bold text-black transition hover:scale-[1.02]"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

function StatInput({
  stat,
  onChange,
  onRemove,
}: {
  stat: { value: string; label: string };
  onChange: (key: "value" | "label", val: string) => void;
  onRemove: () => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <input
        type="text"
        value={stat.value}
        onChange={(e) => onChange("value", e.target.value)}
        placeholder="Value"
        className="w-24 rounded-lg border border-[#2a2a2a] bg-[#0a0a0a] px-3 py-2 text-sm text-white focus:border-[#d4af37] focus:outline-none"
      />
      <input
        type="text"
        value={stat.label}
        onChange={(e) => onChange("label", e.target.value)}
        placeholder="Label"
        className="flex-1 rounded-lg border border-[#2a2a2a] bg-[#0a0a0a] px-3 py-2 text-sm text-white focus:border-[#d4af37] focus:outline-none"
      />
      <button type="button" onClick={onRemove} className="text-red-400 hover:text-red-300">
        <X size={16} />
      </button>
    </div>
  );
}

function PhotoEditor({
  photos,
  onChange,
}: {
  photos: SitePhoto[];
  onChange: (photos: SitePhoto[]) => void;
}) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const addPhoto = () => {
    onChange([...photos, { src: "", label: "", category: "Portrait" }]);
    setExpandedIndex(photos.length);
  };

  const removePhoto = (i: number) => {
    onChange(photos.filter((_, idx) => idx !== i));
    if (expandedIndex === i) setExpandedIndex(null);
  };

  const updatePhoto = (i: number, key: keyof SitePhoto, value: string | boolean) => {
    const updated = [...photos];
    updated[i] = { ...updated[i], [key]: value };
    onChange(updated);
  };

  const handleImageUpload = (i: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      if (ev.target?.result) {
        updatePhoto(i, "src", ev.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-3">
      {photos.map((photo, i) => (
        <div key={i} className="rounded-xl border border-[#2a2a2a] bg-[#0e0e0e]">
          <button
            type="button"
            onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
            className="flex w-full items-center justify-between p-4"
          >
            <div className="flex items-center gap-3">
              {photo.src && (
                <div className="relative h-12 w-12 overflow-hidden rounded-lg">
                  <Image src={photo.src} alt={photo.label} fill className="object-cover" sizes="48px" />
                </div>
              )}
              <div className="text-left">
                <p className="text-sm font-semibold text-white">{photo.label || "New Photo"}</p>
                <p className="text-xs text-gray-500">{photo.category}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {photo.hero && (
                <span className="rounded-full bg-[#d4af37]/15 px-2 py-0.5 text-xs font-bold text-[#d4af37]">
                  Hero
                </span>
              )}
              {expandedIndex === i ? <ChevronUp size={16} className="text-gray-400" /> : <ChevronDown size={16} className="text-gray-400" />}
            </div>
          </button>

          {expandedIndex === i && (
            <div className="border-t border-[#2a2a2a] p-4 space-y-3">
              <div>
                <label className="mb-1 block text-xs font-semibold text-gray-400">Image</label>
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    value={photo.src}
                    onChange={(e) => updatePhoto(i, "src", e.target.value)}
                    placeholder="/images/dg-mawai/photo-01.jpg or upload"
                    className="flex-1 rounded-lg border border-[#2a2a2a] bg-[#0a0a0a] px-3 py-2 text-sm text-white focus:border-[#d4af37] focus:outline-none"
                  />
                  <label className="cursor-pointer rounded-lg border border-[#d4af37]/40 px-3 py-2 text-xs font-bold text-[#d4af37] hover:bg-[#d4af37]/10">
                    Upload
                    <input type="file" accept="image/*" className="hidden" onChange={(e) => handleImageUpload(i, e)} />
                  </label>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-1 block text-xs font-semibold text-gray-400">Label</label>
                  <input
                    type="text"
                    value={photo.label}
                    onChange={(e) => updatePhoto(i, "label", e.target.value)}
                    className="w-full rounded-lg border border-[#2a2a2a] bg-[#0a0a0a] px-3 py-2 text-sm text-white focus:border-[#d4af37] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold text-gray-400">Category</label>
                  <input
                    type="text"
                    value={photo.category}
                    onChange={(e) => updatePhoto(i, "category", e.target.value)}
                    className="w-full rounded-lg border border-[#2a2a2a] bg-[#0a0a0a] px-3 py-2 text-sm text-white focus:border-[#d4af37] focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2 text-sm text-gray-300">
                  <input
                    type="checkbox"
                    checked={!!photo.hero}
                    onChange={(e) => updatePhoto(i, "hero", e.target.checked)}
                    className="accent-[#d4af37]"
                  />
                  Show in Hero Slider
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-300">
                  <input
                    type="checkbox"
                    checked={!!photo.large}
                    onChange={(e) => updatePhoto(i, "large", e.target.checked)}
                    className="accent-[#d4af37]"
                  />
                  Large Card
                </label>
              </div>
              <button
                type="button"
                onClick={() => removePhoto(i)}
                className="flex items-center gap-1 text-sm text-red-400 hover:text-red-300"
              >
                <Trash2 size={14} /> Remove Photo
              </button>
            </div>
          )}
        </div>
      ))}
      <button
        type="button"
        onClick={addPhoto}
        className="flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-[#d4af37]/30 py-3 text-sm font-bold text-[#d4af37] hover:bg-[#d4af37]/5"
      >
        <Plus size={16} /> Add Photo
      </button>
    </div>
  );
}

function SongEditor({
  songs,
  onChange,
}: {
  songs: SiteSong[];
  onChange: (songs: SiteSong[]) => void;
}) {
  const addSong = () =>
    onChange([...songs, { title: "", plays: "0", year: "2026", duration: "0:00", trending: false }]);

  const removeSong = (i: number) => onChange(songs.filter((_, idx) => idx !== i));

  const updateSong = (i: number, key: keyof SiteSong, value: string | boolean) => {
    const updated = [...songs];
    updated[i] = { ...updated[i], [key]: value };
    onChange(updated);
  };

  return (
    <div className="space-y-3">
      {songs.map((song, i) => (
        <div key={i} className="rounded-xl border border-[#2a2a2a] bg-[#0e0e0e] p-4 space-y-3">
          <input
            type="text"
            value={song.title}
            onChange={(e) => updateSong(i, "title", e.target.value)}
            placeholder="Song Title"
            className="w-full rounded-lg border border-[#2a2a2a] bg-[#0a0a0a] px-3 py-2 text-sm text-white focus:border-[#d4af37] focus:outline-none"
          />
          <div className="grid grid-cols-3 gap-3">
            <input
              type="text"
              value={song.plays}
              onChange={(e) => updateSong(i, "plays", e.target.value)}
              placeholder="Plays"
              className="rounded-lg border border-[#2a2a2a] bg-[#0a0a0a] px-3 py-2 text-sm text-white focus:border-[#d4af37] focus:outline-none"
            />
            <input
              type="text"
              value={song.year}
              onChange={(e) => updateSong(i, "year", e.target.value)}
              placeholder="Year"
              className="rounded-lg border border-[#2a2a2a] bg-[#0a0a0a] px-3 py-2 text-sm text-white focus:border-[#d4af37] focus:outline-none"
            />
            <input
              type="text"
              value={song.duration}
              onChange={(e) => updateSong(i, "duration", e.target.value)}
              placeholder="Duration"
              className="rounded-lg border border-[#2a2a2a] bg-[#0a0a0a] px-3 py-2 text-sm text-white focus:border-[#d4af37] focus:outline-none"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={song.trending}
                onChange={(e) => updateSong(i, "trending", e.target.checked)}
                className="accent-[#d4af37]"
              />
              Trending
            </label>
            <button type="button" onClick={() => removeSong(i)} className="text-red-400 hover:text-red-300">
              <Trash2 size={14} />
            </button>
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={addSong}
        className="flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-[#d4af37]/30 py-3 text-sm font-bold text-[#d4af37] hover:bg-[#d4af37]/5"
      >
        <Plus size={16} /> Add Song
      </button>
    </div>
  );
}

function VideoEditor({
  videos,
  onChange,
}: {
  videos: SiteVideo[];
  onChange: (videos: SiteVideo[]) => void;
}) {
  const addVideo = () =>
    onChange([...videos, { title: "", image: "", url: "", views: "", duration: "" }]);

  const removeVideo = (i: number) => onChange(videos.filter((_, idx) => idx !== i));

  const updateVideo = (i: number, key: keyof SiteVideo, value: string) => {
    const updated = [...videos];
    updated[i] = { ...updated[i], [key]: value };
    onChange(updated);
  };

  return (
    <div className="space-y-3">
      {videos.map((video, i) => (
        <div key={i} className="rounded-xl border border-[#2a2a2a] bg-[#0e0e0e] p-4 space-y-3">
          <input
            type="text"
            value={video.title}
            onChange={(e) => updateVideo(i, "title", e.target.value)}
            placeholder="Video Title"
            className="w-full rounded-lg border border-[#2a2a2a] bg-[#0a0a0a] px-3 py-2 text-sm text-white focus:border-[#d4af37] focus:outline-none"
          />
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              value={video.url}
              onChange={(e) => updateVideo(i, "url", e.target.value)}
              placeholder="YouTube URL"
              className="rounded-lg border border-[#2a2a2a] bg-[#0a0a0a] px-3 py-2 text-sm text-white focus:border-[#d4af37] focus:outline-none"
            />
            <input
              type="text"
              value={video.image}
              onChange={(e) => updateVideo(i, "image", e.target.value)}
              placeholder="Thumbnail image path"
              className="rounded-lg border border-[#2a2a2a] bg-[#0a0a0a] px-3 py-2 text-sm text-white focus:border-[#d4af37] focus:outline-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              value={video.views}
              onChange={(e) => updateVideo(i, "views", e.target.value)}
              placeholder="Views"
              className="rounded-lg border border-[#2a2a2a] bg-[#0a0a0a] px-3 py-2 text-sm text-white focus:border-[#d4af37] focus:outline-none"
            />
            <input
              type="text"
              value={video.duration}
              onChange={(e) => updateVideo(i, "duration", e.target.value)}
              placeholder="Duration"
              className="rounded-lg border border-[#2a2a2a] bg-[#0a0a0a] px-3 py-2 text-sm text-white focus:border-[#d4af37] focus:outline-none"
            />
          </div>
          <button type="button" onClick={() => removeVideo(i)} className="text-sm text-red-400 hover:text-red-300 flex items-center gap-1">
            <Trash2 size={14} /> Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={addVideo}
        className="flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-[#d4af37]/30 py-3 text-sm font-bold text-[#d4af37] hover:bg-[#d4af37]/5"
      >
        <Plus size={16} /> Add Video
      </button>
    </div>
  );
}

function EventEditor({
  events,
  onChange,
}: {
  events: SiteEvent[];
  onChange: (events: SiteEvent[]) => void;
}) {
  const addEvent = () =>
    onChange([
      ...events,
      { title: "", date: "", time: "", venue: "", city: "", status: "Coming Soon", price: "TBA" },
    ]);

  const removeEvent = (i: number) => onChange(events.filter((_, idx) => idx !== i));

  const updateEvent = (i: number, key: keyof SiteEvent, value: string) => {
    const updated = [...events];
    updated[i] = { ...updated[i], [key]: value };
    onChange(updated);
  };

  return (
    <div className="space-y-3">
      {events.map((event, i) => (
        <div key={i} className="rounded-xl border border-[#2a2a2a] bg-[#0e0e0e] p-4 space-y-3">
          <input
            type="text"
            value={event.title}
            onChange={(e) => updateEvent(i, "title", e.target.value)}
            placeholder="Event Title"
            className="w-full rounded-lg border border-[#2a2a2a] bg-[#0a0a0a] px-3 py-2 text-sm text-white focus:border-[#d4af37] focus:outline-none"
          />
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              value={event.date}
              onChange={(e) => updateEvent(i, "date", e.target.value)}
              placeholder="Date"
              className="rounded-lg border border-[#2a2a2a] bg-[#0a0a0a] px-3 py-2 text-sm text-white focus:border-[#d4af37] focus:outline-none"
            />
            <input
              type="text"
              value={event.time}
              onChange={(e) => updateEvent(i, "time", e.target.value)}
              placeholder="Time"
              className="rounded-lg border border-[#2a2a2a] bg-[#0a0a0a] px-3 py-2 text-sm text-white focus:border-[#d4af37] focus:outline-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              value={event.venue}
              onChange={(e) => updateEvent(i, "venue", e.target.value)}
              placeholder="Venue"
              className="rounded-lg border border-[#2a2a2a] bg-[#0a0a0a] px-3 py-2 text-sm text-white focus:border-[#d4af37] focus:outline-none"
            />
            <input
              type="text"
              value={event.city}
              onChange={(e) => updateEvent(i, "city", e.target.value)}
              placeholder="City"
              className="rounded-lg border border-[#2a2a2a] bg-[#0a0a0a] px-3 py-2 text-sm text-white focus:border-[#d4af37] focus:outline-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <select
              value={event.status}
              onChange={(e) => updateEvent(i, "status", e.target.value)}
              className="rounded-lg border border-[#2a2a2a] bg-[#0a0a0a] px-3 py-2 text-sm text-white focus:border-[#d4af37] focus:outline-none"
            >
              <option value="Tickets Available">Tickets Available</option>
              <option value="Coming Soon">Coming Soon</option>
              <option value="Sold Out">Sold Out</option>
            </select>
            <input
              type="text"
              value={event.price}
              onChange={(e) => updateEvent(i, "price", e.target.value)}
              placeholder="Price"
              className="rounded-lg border border-[#2a2a2a] bg-[#0a0a0a] px-3 py-2 text-sm text-white focus:border-[#d4af37] focus:outline-none"
            />
          </div>
          <button type="button" onClick={() => removeEvent(i)} className="text-sm text-red-400 hover:text-red-300 flex items-center gap-1">
            <Trash2 size={14} /> Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={addEvent}
        className="flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-[#d4af37]/30 py-3 text-sm font-bold text-[#d4af37] hover:bg-[#d4af37]/5"
      >
        <Plus size={16} /> Add Event
      </button>
    </div>
  );
}

function TextInput({
  label,
  value,
  onChange,
  multiline,
}: {
  label: string;
  value: string;
  onChange: (val: string) => void;
  multiline?: boolean;
}) {
  return (
    <div>
      <label className="mb-1 block text-xs font-semibold text-gray-400">{label}</label>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={3}
          className="w-full resize-none rounded-lg border border-[#2a2a2a] bg-[#0a0a0a] px-3 py-2 text-sm text-white focus:border-[#d4af37] focus:outline-none"
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-lg border border-[#2a2a2a] bg-[#0a0a0a] px-3 py-2 text-sm text-white focus:border-[#d4af37] focus:outline-none"
        />
      )}
    </div>
  );
}

function useIsAdminLoggedIn() {
  return useSyncExternalStore(
    (cb) => {
      window.addEventListener("storage", cb);
      return () => window.removeEventListener("storage", cb);
    },
    () => isAdminLoggedIn(),
    () => false,
  );
}

function AdminDashboard({ onLogout }: { onLogout: () => void }) {
  const [activeTab, setActiveTab] = useState<TabId>("hero");
  const [saved, setSaved] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { content, setContent, resetContent } = useSiteContent();
  const [draft, setDraft] = useState<SiteContent>(content);
  const [resetKey, setResetKey] = useState(0);

  const handleSave = useCallback(() => {
    setContent(draft);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }, [draft, setContent]);

  const handleReset = useCallback(() => {
    if (window.confirm("Reset all content to defaults? This cannot be undone.")) {
      resetContent();
      setDraft(content);
      setResetKey((k) => k + 1);
    }
  }, [resetContent, content]);

  const handleLogout = useCallback(() => {
    logoutAdmin();
    onLogout();
  }, [onLogout]);

  const updateDraft = useCallback(<K extends keyof SiteContent>(key: K, value: SiteContent[K]) => {
    setDraft((prev) => ({ ...prev, [key]: value }));
  }, []);

  void resetKey;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Top Bar */}
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-[#2a2a2a] bg-[#0a0a0a]/95 px-4 py-3 backdrop-blur sm:px-6">
        <div className="flex items-center gap-3">
          <h1 className="text-lg font-black">
            DG Mawai <span className="text-[#d4af37]">Admin</span>
          </h1>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg border border-[#2a2a2a] px-3 py-1.5 text-xs text-gray-400 sm:hidden"
          >
            Menu
          </button>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 rounded-lg border border-[#2a2a2a] px-3 py-1.5 text-xs font-semibold text-gray-400 hover:text-white"
          >
            <Eye size={14} /> View Site
          </a>
          <button
            type="button"
            onClick={handleSave}
            className={`flex items-center gap-1 rounded-lg px-4 py-1.5 text-xs font-bold transition ${
              saved
                ? "bg-green-500/20 text-green-400"
                : "bg-[#d4af37] text-black hover:bg-[#f0d060]"
            }`}
          >
            <Save size={14} /> {saved ? "Saved!" : "Save"}
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center gap-1 rounded-lg border border-[#2a2a2a] px-3 py-1.5 text-xs text-gray-400 hover:text-white"
          >
            <RotateCcw size={14} /> Reset
          </button>
          <button
            type="button"
            onClick={handleLogout}
            className="flex items-center gap-1 rounded-lg border border-red-500/30 px-3 py-1.5 text-xs text-red-400 hover:bg-red-500/10"
          >
            <LogOut size={14} /> Logout
          </button>
        </div>
      </header>

      <div className="flex pt-14">
        {/* Sidebar */}
        <aside
          className={`fixed left-0 top-14 z-40 h-[calc(100vh-3.5rem)] w-56 border-r border-[#2a2a2a] bg-[#0a0a0a] p-3 transition-transform sm:translate-x-0 ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <nav className="space-y-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    setActiveTab(tab.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                    activeTab === tab.id
                      ? "bg-[#d4af37]/15 text-[#d4af37]"
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Icon size={18} />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Content */}
        <main className="ml-0 w-full p-4 sm:ml-56 sm:p-8">
          <div className="mx-auto max-w-3xl">
            {/* Hero Tab */}
            {activeTab === "hero" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-black">Hero Section</h2>
                <TextInput
                  label="Badge Text"
                  value={draft.hero.badge}
                  onChange={(v) => updateDraft("hero", { ...draft.hero, badge: v })}
                />
                <div className="grid grid-cols-2 gap-4">
                  <TextInput
                    label="Title"
                    value={draft.hero.title}
                    onChange={(v) => updateDraft("hero", { ...draft.hero, title: v })}
                  />
                  <TextInput
                    label="Highlighted Text"
                    value={draft.hero.highlight}
                    onChange={(v) => updateDraft("hero", { ...draft.hero, highlight: v })}
                  />
                </div>
                <TextInput
                  label="Tagline"
                  value={draft.hero.tagline}
                  onChange={(v) => updateDraft("hero", { ...draft.hero, tagline: v })}
                  multiline
                />
                <div>
                  <label className="mb-2 block text-xs font-semibold text-gray-400">Stats</label>
                  <div className="space-y-2">
                    {draft.hero.stats.map((stat, i) => (
                      <StatInput
                        key={i}
                        stat={stat}
                        onChange={(key, val) => {
                          const stats = [...draft.hero.stats];
                          stats[i] = { ...stats[i], [key]: val };
                          updateDraft("hero", { ...draft.hero, stats });
                        }}
                        onRemove={() => {
                          updateDraft("hero", {
                            ...draft.hero,
                            stats: draft.hero.stats.filter((_, idx) => idx !== i),
                          });
                        }}
                      />
                    ))}
                    <button
                      type="button"
                      onClick={() =>
                        updateDraft("hero", {
                          ...draft.hero,
                          stats: [...draft.hero.stats, { value: "", label: "" }],
                        })
                      }
                      className="text-xs font-bold text-[#d4af37] hover:underline"
                    >
                      + Add Stat
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* About Tab */}
            {activeTab === "about" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-black">About Section</h2>
                <TextInput
                  label="Eyebrow"
                  value={draft.about.eyebrow}
                  onChange={(v) => updateDraft("about", { ...draft.about, eyebrow: v })}
                />
                <div className="grid grid-cols-2 gap-4">
                  <TextInput
                    label="Title"
                    value={draft.about.title}
                    onChange={(v) => updateDraft("about", { ...draft.about, title: v })}
                  />
                  <TextInput
                    label="Highlighted Text"
                    value={draft.about.highlight}
                    onChange={(v) => updateDraft("about", { ...draft.about, highlight: v })}
                  />
                </div>
                <TextInput
                  label="Intro"
                  value={draft.about.intro}
                  onChange={(v) => updateDraft("about", { ...draft.about, intro: v })}
                  multiline
                />
                <TextInput
                  label="Heading"
                  value={draft.about.heading}
                  onChange={(v) => updateDraft("about", { ...draft.about, heading: v })}
                />
                <TextInput
                  label="Profile Image Path"
                  value={draft.about.image}
                  onChange={(v) => updateDraft("about", { ...draft.about, image: v })}
                />
                <div>
                  <label className="mb-2 block text-xs font-semibold text-gray-400">Bio Paragraphs</label>
                  <div className="space-y-3">
                    {draft.about.paragraphs.map((p, i) => (
                      <div key={i} className="flex gap-2">
                        <textarea
                          value={p}
                          onChange={(e) => {
                            const paras = [...draft.about.paragraphs];
                            paras[i] = e.target.value;
                            updateDraft("about", { ...draft.about, paragraphs: paras });
                          }}
                          rows={3}
                          className="flex-1 resize-none rounded-lg border border-[#2a2a2a] bg-[#0a0a0a] px-3 py-2 text-sm text-white focus:border-[#d4af37] focus:outline-none"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            const paras = draft.about.paragraphs.filter((_, idx) => idx !== i);
                            updateDraft("about", { ...draft.about, paragraphs: paras });
                          }}
                          className="text-red-400 hover:text-red-300"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() =>
                        updateDraft("about", {
                          ...draft.about,
                          paragraphs: [...draft.about.paragraphs, ""],
                        })
                      }
                      className="text-xs font-bold text-[#d4af37] hover:underline"
                    >
                      + Add Paragraph
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Photos Tab */}
            {activeTab === "photos" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-black">Photo Gallery</h2>
                <p className="text-sm text-gray-400">
                  Manage all photos. Photos marked &quot;Hero&quot; appear in the slider (max 5 shown).
                  Upload new images or use existing paths.
                </p>
                <PhotoEditor photos={draft.photos} onChange={(p) => updateDraft("photos", p)} />
              </div>
            )}

            {/* Songs Tab */}
            {activeTab === "songs" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-black">Songs & Releases</h2>
                <h3 className="text-lg font-bold text-gray-300">Songs</h3>
                <SongEditor songs={draft.songs} onChange={(s) => updateDraft("songs", s)} />

                <h3 className="mt-8 text-lg font-bold text-gray-300">Upcoming & Latest Releases</h3>
                <div className="space-y-3">
                  {draft.releases.map((r, i) => (
                    <div key={i} className="rounded-xl border border-[#2a2a2a] bg-[#0e0e0e] p-4">
                      <div className="grid grid-cols-3 gap-3">
                        <input
                          type="text"
                          value={r.title}
                          onChange={(e) => {
                            const releases = [...draft.releases];
                            releases[i] = { ...releases[i], title: e.target.value };
                            updateDraft("releases", releases);
                          }}
                          placeholder="Title"
                          className="col-span-2 rounded-lg border border-[#2a2a2a] bg-[#0a0a0a] px-3 py-2 text-sm text-white focus:border-[#d4af37] focus:outline-none"
                        />
                        <div className="flex items-center gap-2">
                          <select
                            value={r.status}
                            onChange={(e) => {
                              const releases = [...draft.releases];
                              releases[i] = { ...releases[i], status: e.target.value };
                              updateDraft("releases", releases);
                            }}
                            className="flex-1 rounded-lg border border-[#2a2a2a] bg-[#0a0a0a] px-3 py-2 text-sm text-white focus:border-[#d4af37] focus:outline-none"
                          >
                            <option value="Coming Soon">Coming Soon</option>
                            <option value="Latest Release">Latest Release</option>
                            <option value="Released">Released</option>
                          </select>
                          <button
                            type="button"
                            onClick={() =>
                              updateDraft(
                                "releases",
                                draft.releases.filter((_, idx) => idx !== i)
                              )
                            }
                            className="text-red-400 hover:text-red-300"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() =>
                      updateDraft("releases", [
                        ...draft.releases,
                        { title: "", status: "Coming Soon", year: "2026" },
                      ])
                    }
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-[#d4af37]/30 py-3 text-sm font-bold text-[#d4af37] hover:bg-[#d4af37]/5"
                  >
                    <Plus size={16} /> Add Release
                  </button>
                </div>
              </div>
            )}

            {/* Videos Tab */}
            {activeTab === "videos" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-black">Videos</h2>
                <VideoEditor videos={draft.videos} onChange={(v) => updateDraft("videos", v)} />
              </div>
            )}

            {/* Events Tab */}
            {activeTab === "events" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-black">Events</h2>
                <EventEditor events={draft.events} onChange={(e) => updateDraft("events", e)} />
              </div>
            )}

            {/* Contact Tab */}
            {activeTab === "contact" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-black">Contact Info</h2>
                <TextInput
                  label="Email"
                  value={draft.contact.email}
                  onChange={(v) => updateDraft("contact", { ...draft.contact, email: v })}
                />
                <TextInput
                  label="WhatsApp Number"
                  value={draft.contact.whatsapp}
                  onChange={(v) => updateDraft("contact", { ...draft.contact, whatsapp: v })}
                />
                <TextInput
                  label="Location"
                  value={draft.contact.location}
                  onChange={(v) => updateDraft("contact", { ...draft.contact, location: v })}
                />
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default function AdminPage() {
  const isLoggedIn = useIsAdminLoggedIn();
  const [authed, setAuthed] = useState(isLoggedIn);

  if (isLoggedIn && !authed) {
    setAuthed(true);
  }

  if (!authed) return <LoginForm onLogin={() => setAuthed(true)} />;

  return <AdminDashboard onLogout={() => setAuthed(false)} />;
}
