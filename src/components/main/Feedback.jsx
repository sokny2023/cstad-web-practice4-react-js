
'use client';

import { Card } from 'flowbite-react';

export default function FeedbackCart() {
  return (
    <Card className="max-w-sm" imgSrc="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTd_qsg25Xxlhj4vKf-eh14mKJGy5qlBIX3A5CrdPWduJ4N07_lGfM5NUXt3JArS6wRrDGDIAweAZ6XTbo" horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        New feedback on Feb 15, 2024 From Halannd
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>
  );
}
