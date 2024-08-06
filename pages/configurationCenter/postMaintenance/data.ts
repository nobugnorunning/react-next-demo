import { FormatYMD } from "@/common/constants";
import dayjs from "dayjs";

export const data = Array(10).fill(0).map((_, i) =>
  ({
    field1: `BMPJ240412001${i + 1}`,
    field2: "工程师",
    field3: "否",
    field4: "智能报账",
    field5: "奥德标",
    field6: dayjs(new Date()).format(FormatYMD),
  })
)
