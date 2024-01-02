import { PrismaClient } from "@prisma/client";
import { GratitudeSection } from "../../components/Gratitude/GratitudeSection";
import * as _ from "lodash";
import { currentUser } from "@clerk/nextjs/server";

const GenerateGratitudeSection = ({
  date,
  content,
}: {
  date: string;
  content: string[];
}) => {
  return <GratitudeSection date={date} gratitudes={content}></GratitudeSection>;
};

type Gratitude = {
  createdAt: string;
  content: string;
};

async function Gratitudes() {
  const prisma = new PrismaClient();
  const user = await currentUser();
  const data = await prisma.gratitude.findMany({
    where: {
      authorId: user ? user.id : "",
    },
  });
  const gratitudeData = data.map((it) => {
    return {
      createdAt: it.createdAt.toLocaleDateString("en-us", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
      content: it.content,
    } as Gratitude;
  });

  const gratitudesByDate = _.groupBy(gratitudeData, "createdAt");
  const gratitudes: { [date: string]: string[] } = {};

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
