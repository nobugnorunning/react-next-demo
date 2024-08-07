import dayjs from "dayjs";

export const data = Array(10).fill(0).map((_, i) =>
  ({
    id: i + 1 + "",
    field1: `公告标题${i + 1}`,
    field2: "临时公告",
    field3: "彪子",
    field4: dayjs(new Date()),
  })
)
