"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaTools } from "react-icons/fa";
import { Experience, Education, SkillCategory } from "@/types/resume";
import { IconType } from "react-icons";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiNestjs,
} from "react-icons/si";

const skillIcons: { [key: string]: IconType } = {
  React: SiReact,
  JavaScript: SiJavascript,
  Tailwind: SiTailwindcss,
  NextJS: SiNextdotjs,
  NestJS: SiNestjs,
};

interface ResumeProps {
  data: {
    education: Education[];
    work: Experience[];
    skills: SkillCategory[];
  };
}

export default function Resume({ data }: ResumeProps) {
  return (
    <section
      id="resume"
      className="relative py-20 bg-secondary overflow-hidden"
    >
      {/* Parallax Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/80"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-12">
            {/* Education Section */}
            <div>
              <h2 className="text-3xl font-bold text-accent mb-6 flex items-center gap-2">
                <FaGraduationCap className="text-4xl text-accent" /> Education
              </h2>
              {data.education.map((edu, index) => (
                <motion.div
                  key={edu.school}
                  className="mb-8 p-6 bg-primary/30 backdrop-blur-lg rounded-lg shadow-lg border border-accent/40"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold text-text">
                    {edu.school}
                  </h3>
                  <p className="text-textMuted mt-2">{edu.degree}</p>
                  <p className="text-sm text-textMuted/80">{edu.graduated}</p>
                  <p className="mt-2 text-textMuted">{edu.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Experience Section */}
            <div>
              <h2 className="text-3xl font-bold text-accent mb-6 flex items-center gap-2">
                <FaBriefcase className="text-4xl text-accent" /> Experience
              </h2>
              {data.work.map((job, index) => (
                <motion.div
                  key={job.company}
                  className="mb-8 p-6 bg-primary/30 backdrop-blur-lg rounded-lg shadow-lg border border-accent/40"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold text-text">
                    {job.company}
                  </h3>
                  <p className="text-textMuted mt-2">{job.title}</p>
                  <p className="text-sm text-textMuted/80">{job.years}</p>
                  <p className="mt-2 text-textMuted">{job.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-accent mb-8 flex items-center gap-2">
              <FaTools className="text-4xl text-accent" /> Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.skills.map((category, index) => (
                <motion.div
                  key={category.name}
                  className="bg-primary/30 p-6 rounded-xl shadow-lg border border-accent/40 backdrop-blur-lg"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold text-accent mb-4">
                    {category.name}
                  </h3>
                  <div className="space-y-3">
                    {category.details.map((skill, skillIndex) => {
                      const SkillIcon = skillIcons[skill.name] || FaTools;
                      return (
                        <motion.div
                          key={skill.name}
                          className="flex items-center gap-3"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.6,
                            delay: skillIndex * 0.1,
                          }}
                          viewport={{ once: true }}
                        >
                          <SkillIcon className="text-accent text-2xl" />
                          <div className="w-full bg-primary/20 rounded-full h-2.5 relative">
                            <motion.div
                              className="bg-accent h-2.5 rounded-full"
                              style={{ width: skill.level }}
                              initial={{ width: "0%" }}
                              whileInView={{ width: skill.level }}
                              transition={{ duration: 1.2, ease: "easeInOut" }}
                              viewport={{ once: true }}
                            />
                          </div>
                          <span className="text-textMuted text-sm font-medium whitespace-nowrap">
                            {skill.name}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
