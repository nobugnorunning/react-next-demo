import { FormatYMD } from "@/common/constants";
import dayjs from "dayjs";

export const data = Array(10).fill(0).map((_, i) =>
  ({
    field1: `BMPJ240412001${i + 1}`,
    field2: "部门",
    field3: "部门",
    field4: "系统创新部",
    field5: "季度",
    field6: "奥德标",
    field7: dayjs(new Date()).format(FormatYMD),
    field8: "奥德标",
    field9: dayjs(new Date()).format(FormatYMD),
    field10: '待提交',
    field11: "100"
  })
)
