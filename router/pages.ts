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
          },
          {
            name: "费用组审单量考核规则",
            path: "/configurationCenter/performanceRules/expenseReviewAmount"
          },
          {
            name: "应付组审单量考核规则",
            path: "/configurationCenter/performanceRules/payableReviewAmount"
          },
          {
            name: "销售组审单量考核规则",
            path: "/configurationCenter/performanceRules/saleReviewAmount"
          },
          {
            name: "部门绩效系数配置",
            path: "/configurationCenter/performanceRules/sectorPerformanceCoefficients"
          },
          {
            name: "人员绩效系数配置",
            path: "/configurationCenter/performanceRules/personnelPerformanceCoefficient"
          },
          {
            name: "考核计算参数配置",
            path: "/configurationCenter/performanceRules/calculationParameters"
          },
          {
            name: "考核计算公式配置",
            path: "/configurationCenter/performanceRules/calculationFormula"
          }
        ]
      },
      {
        name: "数据字典",
        path: "/configurationCenter/dataDictionary",
        routes: [
          {
            name: "加减分字典",
            path: "/configurationCenter/dataDictionary/addOrSubtractPoints"
          }
        ]
      }
    ]
  },
  {
    name: "绩效结果确认及应用",
    path: "/performanceResultConfirmAndApply",
    routes: [
      {
        name: "绩效结果确认",
        path: "/performanceResultConfirmAndApply/performanceResultConfirm",
        routes: [
          {
            hideInMenu: true,
            name: "部门绩效结果申诉表",
            path: "/performanceResultConfirmAndApply/performanceResultConfirm/complaint"
          }
        ]
      }
    ]
  }
]
