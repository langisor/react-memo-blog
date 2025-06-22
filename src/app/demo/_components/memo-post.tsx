"use client";
import { Card, CardContent } from "@/components/ui/card";
import * as React from "react";
import { motion } from "motion/react";
interface Props {
  title: string;
  content: string;
}
const MemoPost = React.memo(({ title, content }: Props) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200 }}
      animate={{ y: "-10px" }}
    >
      <Card className="my-1">
        <CardContent className="p-2">
          <h1 className="heading-lg">{title}</h1>
          <p>{content}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
});

const customComparator = (prevProps: Props, nextProps: Props) => {
  // deep comparison
  return (
    prevProps.title === nextProps.title &&
    prevProps.content === nextProps.content
  );
  // shallow comparison returns true if equal object references even if the props values are different
  // return prevProps===nextProps;
};

const MemoPostViewer = React.memo(MemoPost, customComparator);
export default MemoPostViewer;
