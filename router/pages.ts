export const PAGE_ROUTER = [
  // {
  //   name: "通知管理",
  //   path: "/system",
  //   routes: [
  //     {
  //       name: "通知详情",
  //       path: "/system/notification",
  //     }
  //   ]
  // },
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
          },
          {
            hideInMenu: true,
            name: "部门绩效评价详情",
            path: "/performanceAppraise/departmentAppraise/departmentAppraiseDetail",
          }
        ]
      },
      {
        name: "员工绩效自评",
        path: "/performanceAppraise/employeeAppraise",
        routes: [
          {
            hideInMenu: true,
            name: "员工绩效自评新增",
            path: "/performanceAppraise/employeeAppraise/employeeAppraiseCreate",
          },
          {
            hideInMenu: true,
            name: "员工绩效自评编辑",
            path: "/performanceAppraise/employeeAppraise/employeeAppraiseEdit",
          },
          {
            hideInMenu: true,
            name: "员工绩效自评详情",
            path: "/performanceAppraise/employeeAppraise/employeeAppraiseDetail",
          }
        ]
      },
      {
        name: "员工绩效统评",
        path: "/performanceAppraise/employeeEvaluation",
        routes: [
          {
            hideInMenu: true,
            name: "员工绩效统评新增",
            path: "/performanceAppraise/employeeEvaluation/employeeEvaluationCreate",
          },
          {
            hideInMenu: true,
            name: "员工绩效统评编辑",
            path: "/performanceAppraise/employeeEvaluation/employeeEvaluationEdit",
          },
          {
            hideInMenu: true,
            name: "员工绩效统评详情",
            path: "/performanceAppraise/employeeEvaluation/employeeEvaluationDetail",
          }
        ]
      },
      {
        name: "总监绩效评价",
        path: "/performanceAppraise/majordomoAppraise",
        routes: [
          {
            hideInMenu: true,
            name: "总监绩效评价新增",
            path: "/performanceAppraise/majordomoAppraise/majordomoAppraiseCreate",
          },
          {
            hideInMenu: true,
            name: "总监绩效评价编辑",
            path: "/performanceAppraise/majordomoAppraise/majordomoAppraiseEdit",
          },
          {
            hideInMenu: true,
            name: "总监绩效评价详情",
            path: "/performanceAppraise/majordomoAppraise/majordomoAppraiseDetail",
          }
        ]
      },
      {
        name: "员工加减分申请",
        path: "/performanceAppraise/employeePointsApply",
        routes: [
          {
            hideInMenu: true,
            name: "员工加减分申请新增",
            path: "/performanceAppraise/employeePointsApply/employeePointsApplyCreate",
          },
          {
            hideInMenu: true,
            name: "员工加减分申请编辑",
            path: "/performanceAppraise/employeePointsApply/employeePointsApplyEdit",
          },
          {
            hideInMenu: true,
            name: "员工加减分申请详情",
            path: "/performanceAppraise/employeePointsApply/employeePointsApplyDetail",
          }
        ]
      },
      {
        name: "员工绩效多维测评",
        path: "/performanceAppraise/employeeMultiAppraise",
        routes: [
          {
            hideInMenu: true,
            name: "员工绩效多维测评新增",
            path: "/performanceAppraise/employeeMultiAppraise/employeeMultiAppraiseCreate",
          },
          {
            hideInMenu: true,
            name: "员工绩效多维测评编辑",
            path: "/performanceAppraise/employeeMultiAppraise/employeeMultiAppraiseEdit",
          },
          {
            hideInMenu: true,
            name: "员工绩效多维测评详情",
            path: "/performanceAppraise/employeeMultiAppraise/employeeMultiAppraiseDetail",
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
            path: "/performanceResultConfirmAndApply/performanceResultConfirm/complaintEdit"
          },
          {
            hideInMenu: true,
            name: "部门绩效结果申诉表详情",
            path: "/performanceResultConfirmAndApply/performanceResultConfirm/complaintDetail"
          }
        ]
      },
      {
        name: "专项嘉奖管理",
        path: "/performanceResultConfirmAndApply/specialAwards",
      },
      {
        name: "员工绩效计算",
        path: "/performanceResultConfirmAndApply/employeePerformanceCalculations",
      }
    ]
  },
  {
    name: "公告详情",
    path: "/announcement",
    routes: [
      {
        name: "公告列表",
        path: "/announcement/index",
      },
      {
        hideInMenu: true,
        name: "公告详情",
        path: "/announcement/detail"
      }
    ]
  }
]
