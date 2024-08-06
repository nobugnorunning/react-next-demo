import { FormatYMD } from "@/common/constants";
import dayjs from "dayjs";

export const data = Array(10).fill(0).map((_, i) =>
  ({
    field1: `BMPJ240412001${i + 1}`,
    field2: `项目${i + 1}`,
    field3: "项目描述",
    field4: "snnn",
    field5: "财务部",
    field6: dayjs(new Date()).format(FormatYMD),
    field7: 10,
    field8: 10,
  })
)
