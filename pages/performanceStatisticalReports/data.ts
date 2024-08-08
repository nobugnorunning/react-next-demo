import { FormatYMD } from "@/common/constants";
import dayjs from "dayjs";

export const data = Array(10).fill(0).map((_, i) =>
  ({
    id: `BMJJJDDDQW${i + 1}`,
    field1: `创新部${i + 1}`,
    field2: `${dayjs(new Date()).format(FormatYMD)}-${dayjs(new Date()).format(FormatYMD)}`,
    field3: "彪子",
    field4: dayjs(new Date()),
    field5: "基础指标",
    field6: "业务支撑",
    field7: "费用预算管理",
    field8: "222222222222222222222",
    field9: "已完成",
    weight: "40%",
    num1: 90,
    num2: 95,
    num3: 100,
    num4: 5,
    num5: 10,
    num6: 15,
    dayjsTime: dayjs(new Date()),
    dayjsTimeRange: [dayjs(new Date()), dayjs(new Date())],
    time: dayjs(new Date()).format(FormatYMD),
    timeRange: `${dayjs(new Date()).format(FormatYMD)}-${dayjs(new Date()).format(FormatYMD)}`,
    gender: "男",
    ethnicGroup: "汉",
    health: "健康",
    height: "160cm",
    kg: "50kg",
    marriageState: "single",
    lateMarriage: "是",
    politicalOutlook: "群众",
    degree: "本科",
    jobTitle: "工程师",
    phone: "12345644422"
  })
)
