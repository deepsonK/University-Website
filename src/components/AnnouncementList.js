import React from "react";

interface Announcement {
  id: string;
  title: string;
  date: string;
  content: string;
  category: "urgent" | "general" | "academic";
}

interface AnnouncementListProps {
  announcements: Announcement[];
}

const categoryStyles = {
  urgent: "border-red-400 bg-red-50 dark:bg-red-900/10 dark:border-red-700",
  general: "border-blue-400 bg-blue-50 dark:bg-blue-900/10 dark:border-blue-700",
  academic: "border-green-400 bg-green-50 dark:bg-green-900/10 dark:border-green-700",
};

export function AnnouncementList({ announcements }: AnnouncementListProps) {
  if (announcements.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500 dark:text-gray-400">
        No announcements at this time.
      </div>
    );
  }

  return (
    <ul className="space-y-3" aria-label="Announcements">
      {announcements.map((announcement) => (
        <li
          key={announcement.id}
          className={`border-l-4 p-4 rounded-r-lg ${categoryStyles[announcement.category]}`}
        >
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-medium text-gray-900 dark:text-gray-100">
              {announcement.title}
            </h3>
            <time
              className="text-xs text-gray-500 dark:text-gray-400"
              dateTime={announcement.date}
            >
              {new Date(announcement.date).toLocaleDateString()}
            </time>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {announcement.content}
          </p>
        </li>
      ))}
    </ul>
  );
}
