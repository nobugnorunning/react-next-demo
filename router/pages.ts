export const PAGE_ROUTER = [
  {
    name: "通知管理",
    path: "/system",
    routes: [
      {
        name: "通知详情",
        path: "/system/notification",
      }
    ]
  },
  {
    name: "绩效评价",
    path: "/performanceAppraise",
    routes: [
      {
        name: "部门绩效评价",
        path: "/performanceAppraise/departmentAppraise",
        routes: [
          {
            hideInMenu: true,
            name: "部门绩效评价新增",
            path: "/performanceAppraise/departmentAppraise/departmentAppraiseCreate",
          },
          {
            hideInMenu: true,
            name: "部门绩效评价编辑",
            path: "/performanceAppraise/departmentAppraise/departmentAppraiseEdit",
          }
        ]
      }
    ]
  },
  {
    name: "配置中心",
    path: "/configurationCenter",
    routes: [
      {
        name: "岗位维护",
        path: "/configurationCenter/postMaintenance"
      },
      {
        name: "部门列表",
        path: "/configurationCenter/departmentPage"
      },
      {
        name: "人员列表",
        path: "/configurationCenter/employeePage"
      },
      {
        name: "绩效规则配置",
        path: "/configurationCenter/performanceRules",
        routes: [
          {
            name: "定量指标考核规则",
            path: "/configurationCenter/performanceRules/quantitativeIndexAssessment"
          }
        ]
      }
    ]
  }
]
