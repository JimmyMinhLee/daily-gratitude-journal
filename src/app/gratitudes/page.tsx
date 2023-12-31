import { PrismaClient } from "@prisma/client";
import { GratitudeSection } from "../../components/Gratitude/GratitudeSection";
import * as _ from "lodash";

const GenerateGratitudeSection = ({
  date,
  content,
}: {
  date: string;
  content: string[];
}) => {
  return <GratitudeSection date={date} gratitudes={content}></GratitudeSection>;
};

async function Gratitudes() {
  const prisma = new PrismaClient();
  const data = await prisma.gratitude.findMany();
  const gratitudeData = data.map((it) => {
    return {
      createdAt: it.createdAt.toLocaleDateString("en-us", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
      content: it.content,
    };
  });

  const gratitudesByDate = _.groupBy(gratitudeData, "createdAt");
  const gratitudes = {};
  for (const date in gratitudesByDate) {
    const content = gratitudesByDate[date].map((it) => {
      return it.content;
    });
    gratitudes[date] = content;
  }

  const components = [];
  for (const date in gratitudes) {
    components.push(
      GenerateGratitudeSection({ date: date, content: gratitudes[date] })
    );
  }

  return <> {components} </>;
}

export default Gratitudes;
