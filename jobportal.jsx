import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectItem, SelectContent } from "@/components/ui/select";

const jobData = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Innovators Inc.",
    location: "New York, NY",
    type: "Full-time",
    description: "Build and maintain web interfaces using React."
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "DataCore Solutions",
    location: "San Francisco, CA",
    type: "Part-time",
    description: "Develop and optimize server-side logic using Node.js."
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "DesignFlow",
    location: "Remote",
    type: "Freelance",
    description: "Create user-friendly interfaces and experiences."
  }
];

export default function JobPortal() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const filteredJobs = jobData.filter((job) => {
    return (
      job.title.toLowerCase().includes(search.toLowerCase()) &&
      (filter ? job.type === filter : true)
    );
  });

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center">Job Portal</h1>

      <div className="flex gap-4">
        <Input
          placeholder="Search jobs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1"
        />
        <Select onValueChange={(value) => setFilter(value)}>
          <SelectTrigger className="w-48">
            <span>{filter || "Filter by Type"}</span>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All</SelectItem>
            <SelectItem value="Full-time">Full-time</SelectItem>
            <SelectItem value="Part-time">Part-time</SelectItem>
            <SelectItem value="Freelance">Freelance</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-4">
        {filteredJobs.map((job) => (
          <Card key={job.id} className="shadow-md">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold">{job.title}</h2>
              <p className="text-gray-600">{job.company} – {job.location}</p>
              <p className="text-sm text-gray-500 mt-1">{job.type}</p>
              <p className="mt-2">{job.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
