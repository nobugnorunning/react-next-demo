import dayjs from "dayjs";

export const data = Array(10).fill(0).map((_, i) =>
  ({
    id: i + 1 + "",
    field1: `BMkdjkas${i + 1}`,
    field2: "彪哥",
    field3: `系统创新部`,
    field4: "阅读",
    field5: "90",
    field6: "1000.00",
    field7: "工作效率良好",
    field8: "90",
    field9: dayjs(new Date()),
    field10: "90",
    field11: "1000.00",
    field12: "工作效率良好",
    field13: dayjs(new Date()),
    field14: "审核中",
    field15: [
        {
            a: "Mr.Wang",
            b: 900,
            c: 900
        }
    ]
  })
)
