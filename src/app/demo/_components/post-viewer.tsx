"use client";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";
export default function PostViewer({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 200 }} animate={{ y: "-10px" }}>
      <Card className="my-1">
        <CardContent className="p-2">
          <h1 className="heading-lg">{title}</h1>
          <p>{content}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
