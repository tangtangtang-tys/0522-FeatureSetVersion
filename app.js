const navItems = [
  { id: "featureSets", label: "功能集字典" },
  { id: "guide", label: "流程与交互说明" },
  { id: "prd", label: "产品需求文档" },
  { id: "standards", label: "字段规范" }
];

const setStatusOptions = ["启用", "停用"];
const versionStatusOptions = ["草稿", "已发布"];

let featureSets = [
  {
    id: "fs-network",
    name: "网络类型功能集",
    code: "network_type",
    status: "启用",
    description: "定义不同网络接入类型的设备与平台端交互能力边界。",
    createdAt: "2026-04-30 17:51:32",
    updatedAt: "2026-06-18 16:20:00"
  },
  {
    id: "fs-protocol",
    name: "设备协议功能集",
    code: "device_protocol",
    status: "启用",
    description: "定义设备与平台、NVR、网关之间采用的协议接入能力边界。",
    createdAt: "2026-05-01 10:18:20",
    updatedAt: "2026-06-12 10:00:00"
  },
  {
    id: "fs-low-power",
    name: "低功耗能力功能集",
    code: "low_power",
    status: "启用",
    description: "定义低功耗设备休眠、唤醒、短时在线的交互能力边界。",
    createdAt: "2026-05-18 14:05:11",
    updatedAt: "2026-05-18 15:20:00"
  }
];

let versions = [
  {
    id: "v-network-1",
    featureSetId: "fs-network",
    versionNo: "V1.0",
    versionName: "仅 WiFi 设备交互版本",
    capabilityScope: "仅 WiFi",
    description: "支持仅 WiFi 的设备与平台端进行基础交互。",
    status: "已发布",
    publishedAt: "2026-04-30",
    createdAt: "2026-04-30 18:10:00"
  },
  {
    id: "v-network-2",
    featureSetId: "fs-network",
    versionNo: "V2.0",
    versionName: "仅 4G 设备交互版本",
    capabilityScope: "仅 4G",
    description: "支持仅 4G 的设备与平台端进行基础交互。",
    status: "已发布",
    publishedAt: "2026-05-15",
    createdAt: "2026-05-15 11:22:00"
  },
  {
    id: "v-network-3",
    featureSetId: "fs-network",
    versionNo: "V3.0",
    versionName: "WiFi+4G 设备交互版本",
    capabilityScope: "WiFi+4G",
    description: "支持双网络设备与平台端进行交互。",
    status: "已发布",
    publishedAt: "2026-06-05",
    createdAt: "2026-06-05 09:30:00"
  },
  {
    id: "v-network-4",
    featureSetId: "fs-network",
    versionNo: "V4.0",
    versionName: "有线+4G 设备交互版本",
    capabilityScope: "有线+4G",
    description: "支持有线+4G 的设备与平台端进行交互。",
    status: "草稿",
    publishedAt: "",
    createdAt: "2026-06-18 16:20:00"
  },
  {
    id: "v-protocol-1",
    featureSetId: "fs-protocol",
    versionNo: "V1.0",
    versionName: "IPC MQTT 接入版本",
    capabilityScope: "IPC MQTT",
    description: "支持 IPC 设备通过 MQTT 与平台端进行交互。",
    status: "已发布",
    publishedAt: "2026-05-01",
    createdAt: "2026-05-01 12:00:00"
  },
  {
    id: "v-low-power-1",
    featureSetId: "fs-low-power",
    versionNo: "V1.0",
    versionName: "休眠唤醒基础版本",
    capabilityScope: "定时休眠/事件唤醒",
    description: "支持低功耗设备休眠、事件唤醒与短时在线。",
    status: "草稿",
    publishedAt: "",
    createdAt: "2026-05-18 15:20:00"
  }
];

const operationLogs = [
  {
    id: "log-network-1",
    featureSetId: "fs-network",
    action: "发布版本",
    target: "V3.0 WiFi+4G 设备交互版本",
    operator: "产品经理A",
    operatedAt: "2026-06-05 10:12:08",
    result: "发布成功"
  },
  {
    id: "log-network-2",
    featureSetId: "fs-network",
    action: "保存草稿",
    target: "V4.0 有线+4G 设备交互版本",
    operator: "产品经理A",
    operatedAt: "2026-06-18 16:20:00",
    result: "草稿已保存"
  },
  {
    id: "log-protocol-1",
    featureSetId: "fs-protocol",
    action: "创建功能集",
    target: "设备协议功能集",
    operator: "平台运营B",
    operatedAt: "2026-05-01 10:18:20",
    result: "创建成功"
  },
  {
    id: "log-protocol-2",
    featureSetId: "fs-protocol",
    action: "发布版本",
    target: "V1.0 IPC MQTT 接入版本",
    operator: "平台运营B",
    operatedAt: "2026-05-01 12:16:30",
    result: "发布成功"
  },
  {
    id: "log-low-power-1",
    featureSetId: "fs-low-power",
    action: "创建版本",
    target: "V1.0 休眠唤醒基础版本",
    operator: "产品经理C",
    operatedAt: "2026-05-18 15:20:00",
    result: "草稿已创建"
  }
];

const fieldStandards = [
  { field: "功能集名称", key: "name", required: "是", rule: "使用业务可理解名称，用于定义一个能力集合。", example: "网络类型功能集" },
  { field: "功能集编码", key: "code", required: "是", rule: "英文小写、数字、下划线，创建后原则上不可修改。", example: "network_type" },
  { field: "功能集状态", key: "status", required: "是", rule: "仅保留启用、停用两种状态，默认启用。", example: "启用" },
  { field: "功能集说明", key: "description", required: "是", rule: "说明该功能集覆盖的能力范围、适用场景和边界。", example: "定义不同网络接入类型的设备与平台端交互能力边界。" },
  { field: "版本号", key: "versionNo", required: "是", rule: "表达该功能集能力迭代版本，建议 V1.0、V2.0。", example: "V1.0" },
  { field: "版本名称", key: "versionName", required: "是", rule: "描述该版本对应的能力快照名称。", example: "仅 WiFi 设备交互版本" },
  { field: "能力范围", key: "capabilityScope", required: "是", rule: "记录该版本覆盖的能力范围或适用能力值。", example: "仅 WiFi" },
  { field: "版本描述", key: "description", required: "是", rule: "说明该版本的适用设备、交互范围和能力边界。", example: "支持仅 WiFi 的设备与平台端进行基础交互。" }
];

const importTemplate = `JSON 格式:
{
  "items": [
    {
      "functionSetCode": "",
      "functionSetName": "",
      "functionSetStatus": "启用",
      "functionSetDescription": "",
      "versions": [
        {
          "functionVersion": "V1.0",
          "versionName": "",
          "capabilityScope": "",
          "versionDescription": ""
        }
      ]
    }
  ]
}`;

const prdSections = [
  {
    id: "prd-overview",
    title: "01 文档概述",
    intro: "说明文档的目的、定位和适用范围，明确这份 PRD 既用于内部评审，也用于阶段汇报与后续建设基线管理。",
    blocks: [
      {
        type: "definition",
        items: [
          ["文档名称", "机型功能集字典与版本记录平台产品需求文档（PRD）"],
          ["文档目的", "统一平台的背景、目标、范围、流程、功能需求、非功能需求与阶段规划。"],
          ["文档定位", "兼顾可评审与可汇报，既服务研发落地，也支撑平台立项与阶段规划沟通。"],
          ["适用范围", "覆盖当前 MVP 功能集字典模块、一期平台建设范围及长期路线图。"] 
        ]
      }
    ]
  },
  {
    id: "prd-background",
    title: "02 背景概述与问题定义",
    intro: "从摄像机 IoT 产品线的实际协同痛点出发，说明为什么需要从研发工具升级为跨角色能力治理平台。",
    blocks: [
      {
        type: "bullets",
        title: "当前主要问题",
        items: [
          "功能项已被维护，但产品承诺视角不足，难以形成完整可售卖、可交付的能力包。",
          "功能项可以演进，但缺少功能集整体版本基线，无法回答某机型某版本到底具备哪些能力。",
          "数据维护动作已存在，但缺少从需求引入到发布追溯的完整流程闭环。",
          "角色协同不足，产品、研发、测试、售前、售后尚未统一到同一能力事实源。",
          "当前字段结构偏自然语言，长期难以支撑自动化测试、版本映射和依赖分析。"
        ]
      },
      {
        type: "highlight",
        title: "核心问题定义",
        text: "需要建立一个可规划、可维护、可发布、可追溯的机型能力治理平台，使摄像机产品线能够围绕“功能集”和“功能集版本”形成统一的产品定义语言，并支撑多角色协同与分阶段扩展。"
      }
    ]
  },
  {
    id: "prd-goals",
    title: "03 产品目标与成功指标",
    intro: "明确平台建设的业务目标与分阶段成功标准，避免需求只停留在页面功能层。",
    blocks: [
      {
        type: "cards",
        title: "产品目标",
        items: [
          ["建立能力定义的统一事实源", "将功能项、功能集、功能集版本从分散字段、临时表格和人员经验中抽离出来，形成结构化能力资产。"],
          ["建立版本治理与能力追溯机制", "通过功能集版本固化对外可承诺、对内可交付的能力快照。"],
          ["建立跨角色协同的最小治理闭环", "围绕需求引入、功能定义、功能集编排、版本沉淀、发布与日志追溯形成闭环。"]
        ]
      },
      {
        type: "timeline",
        title: "成功指标",
        items: [
          ["MVP", "100% 的新建功能集与功能集版本通过平台录入；查询功能集到版本记录的平均操作路径不超过 3 步。"],
          ["一期", "80% 以上的标准机型能力定义通过功能集字典与版本记录沉淀；跨角色问题确认的人工确认次数明显下降。"],
          ["长期", "平台成为机型能力定义、版本映射与发布追溯的统一事实源。"]
        ]
      }
    ]
  },
  {
    id: "prd-scope",
    title: "04 需求范围与非目标",
    intro: "区分当前 MVP、一期与长期平台范围，避免开发阶段边界模糊。",
    blocks: [
      {
        type: "columns",
        title: "建设范围",
        columns: [
          {
            heading: "当前 MVP",
            items: [
              "功能集字典列表展示与查询",
              "新增、编辑、启停功能集",
              "功能集详情查看",
              "版本记录、操作日志、批量导入",
              "字段规范页与流程说明页"
            ]
          },
          {
            heading: "一期范围",
            items: [
              "功能项字典结构化管理",
              "功能集与功能项关系编排",
              "版本状态机",
              "评审记录、引用校验、历史版本对比"
            ]
          },
          {
            heading: "长期平台",
            items: [
              "机型功能集绑定",
              "软件版本映射",
              "测试与验收",
              "多角色权限体系与定制转标准治理"
            ]
          }
        ]
      },
      {
        type: "bullets",
        title: "非目标",
        items: [
          "当前不要求完成完整的机型、SKU、区域、项目绑定页。",
          "当前不要求完成固件、App、云平台版本映射页。",
          "当前不要求建设自动化测试平台或大屏驾驶舱式统计页。",
          "当前不要求落完整审批流引擎与 BI 分析模块。"
        ]
      }
    ]
  },
  {
    id: "prd-roles",
    title: "05 用户角色与典型场景",
    intro: "明确平台面向的角色及其使用场景，避免功能只服务单一角色。",
    blocks: [
      {
        type: "cards",
        title: "核心用户角色",
        items: [
          ["产品经理", "关注能力边界、版本规划、对外承诺和阶段节奏。"],
          ["研发人员", "关注字段定义、实现边界、兼容性、版本依赖和历史追溯。"],
          ["测试人员", "关注版本范围、验收基线和变更影响。"],
          ["售前 / 销售", "关注机型卖点、能力差异和可承诺范围。"],
          ["交付 / 售后", "关注项目版本、设备能力判断、历史追溯和升级说明。"]
        ]
      },
      {
        type: "numbered",
        title: "典型使用场景",
        items: [
          "产品经理为新产品线定义功能集，并沉淀多个能力版本。",
          "研发确认某功能集在不同版本间的能力变化。",
          "测试根据某功能集版本确定当前测试范围。",
          "售前确认某机型在某版本下的能力范围是什么。",
          "售后通过操作日志与版本记录回溯某次能力变更。"
        ]
      }
    ]
  },
  {
    id: "prd-flow",
    title: "06 产品整体流程",
    intro: "平台建设围绕需求引入、能力定义、版本沉淀、发布追溯与后续映射展开。",
    blocks: [
      {
        type: "timeline",
        title: "总体业务闭环",
        items: [
          ["01", "需求引入"],
          ["02", "能力定义"],
          ["03", "功能集编排"],
          ["04", "版本沉淀"],
          ["05", "版本发布"],
          ["06", "能力追溯"],
          ["07", "后续映射与验证"]
        ]
      },
      {
        type: "numbered",
        title: "MVP 主流程",
        items: [
          "创建功能集并填写基础信息。",
          "选择目标功能集进入版本记录。",
          "创建版本草稿并保存。",
          "发布可引用版本。",
          "查看版本列表与日志记录。"
        ]
      }
    ]
  },
  {
    id: "prd-diagrams",
    title: "07 交互流程图",
    intro: "以研发易查阅的文本流程图方式，明确关键操作路径和状态变化。",
    blocks: [
      {
        type: "diagram",
        title: "功能集创建与版本发布流程",
        text: `[进入功能集字典页]
        |
        v
[查看功能集列表]
        |
        +--------------------+
        |                    |
        v                    v
[新增功能集]            [选择已有功能集]
        |                    |
        v                    v
[填写名称/编码/状态/说明]   [查看功能集详情]
        |                    |
        v                    v
[保存功能集]            [进入版本记录]
        |                    |
        +-----------> [新增版本]
                           |
                           v
               [填写版本号/版本名称/能力范围/版本描述]
                           |
                  +--------+--------+
                  |                 |
                  v                 v
              [保存草稿]         [直接发布]
                  |                 |
                  v                 v
              [留存草稿]         [形成已发布版本]
                  |                 |
                  +--------+--------+
                           |
                           v
                      [查看版本列表]
                           |
                           v
                      [查看操作日志]`
      },
      {
        type: "diagram",
        title: "查询流程",
        text: `[进入功能集字典页]
        |
        v
[在查询区输入名称/编码关键词]
        |
        +----------------------+
        |                      |
        v                      v
[点击查询/按Enter]        [点击重置]
        |                      |
        v                      v
[筛选左侧功能集列表]      [恢复全部列表]
        |
        v
[若当前选中项仍存在 -> 保持详情]
[若当前选中项不存在 -> 自动切换第一条匹配项]
        |
        v
[若无匹配结果 -> 列表和详情显示空状态]`
      },
      {
        type: "diagram",
        title: "批量导入流程",
        text: `[点击批量导入]
        |
        v
[查看导入模板说明]
        |
        v
[上传或拖入JSON文件]
        |
        v
[提交导入任务]
        |
        v
[平台执行导入]
        |
        v
[导入结果反馈（MVP阶段可先保留原型提示）]`
      }
    ]
  },
  {
    id: "prd-functional",
    title: "08 功能性需求",
    intro: "从研发视角拆分当前 MVP 已落地模块，明确每一类功能的需求说明与验收标准。",
    blocks: [
      {
        type: "functional-groups",
        groups: [
          {
            title: "模块一：功能集字典",
            items: [
              ["功能集列表", "展示功能集名称、编码、状态、版本记录数量、最新版本号；点击列表项联动右侧详情。"],
              ["功能集查询", "支持按功能集名称和编码查询；点击查询或按 Enter 执行；点击重置恢复全部列表。"],
              ["新增功能集", "通过弹窗录入名称、编码、状态和说明；保存成功后自动选中新建功能集。"],
              ["编辑功能集", "支持修改既有功能集的基础信息与启停状态。"],
              ["删除功能集", "若已有关联版本，则默认禁止删除并给出提示。"]
            ]
          },
          {
            title: "模块二：版本记录",
            items: [
              ["版本记录列表", "展示版本号、版本名称、能力范围、版本描述、状态、发布时间和操作。"],
              ["新增版本", "通过弹窗录入版本号、版本名称、能力范围和版本描述。"],
              ["保存草稿", "允许先保存为草稿，后续再发布。"],
              ["发布版本", "将版本草稿发布为正式版本，并写入发布时间。"],
              ["查看与编辑版本", "支持只读查看与编辑修改；已发布版本也可继续编辑。"],
              ["删除版本", "草稿版本支持删除，已发布版本默认不可直接删除。"]
            ]
          },
          {
            title: "模块三：操作日志",
            items: [
              ["操作日志展示", "展示操作时间、操作类型、操作对象、操作人和处理结果，内容与当前功能集保持关联。"]
            ]
          },
          {
            title: "模块四：批量导入",
            items: [
              ["导入入口", "页面顶部提供统一入口。"],
              ["导入模板说明", "弹窗中展示 JSON 模板与字段结构。"],
              ["导入提交", "支持上传或拖拽文件并提交，MVP 阶段可先保留原型提示。"]
            ]
          },
          {
            title: "模块五：字段规范与说明页",
            items: [
              ["字段规范", "展示当前已落地字段的命名、口径和填写示例。"],
              ["流程与交互说明", "独立页面说明模块定位、流程闭环、交互规则和后续规划关系。"]
            ]
          }
        ]
      }
    ]
  },
  {
    id: "prd-nonfunctional",
    title: "09 非功能性需求",
    intro: "确保平台不仅能用，还具备可维护、可协同、可扩展的基础质量。",
    blocks: [
      {
        type: "cards",
        title: "非功能性要求",
        items: [
          ["可用性", "页面路径清晰，列表、详情、版本、日志四层关系明确，空状态和错误提示完整。"],
          ["可维护性", "前端结构需支持后续扩展新模块，功能集、版本、日志等对象保持清晰分层。"],
          ["一致性", "状态标签、按钮、卡片、表格、弹窗交互风格一致，文案口径统一。"],
          ["性能", "在当前原型阶段，列表切换与查询无明显卡顿；后续真实系统需保证常见数据量下快速返回。"],
          ["安全与权限", "删除、发布等关键动作需具备权限控制预留，日志数据支持审计留痕扩展。"],
          ["兼容与响应式", "桌面端优先，窄屏下保持结构不破碎。"]
        ]
      }
    ]
  },
  {
    id: "prd-data",
    title: "10 数据对象与关键字段",
    intro: "为研发理解当前模型与后续扩展对象提供统一口径。",
    blocks: [
      {
        type: "cards",
        title: "当前 MVP 核心对象",
        items: [
          ["功能集 FeatureSet", "id、name、code、status、description、createdAt、updatedAt"],
          ["功能集版本 FeatureSetVersion", "id、featureSetId、versionNo、versionName、capabilityScope、description、status、publishedAt、createdAt"],
          ["操作日志 OperationLog", "id、featureSetId、action、target、operator、operatedAt、result"]
        ]
      },
      {
        type: "bullets",
        title: "一期及长期扩展对象",
        items: [
          "功能项 Feature / 功能项取值 FeatureValue",
          "功能集版本明细 FeatureSetVersionItem",
          "机型 Model / SKU / 硬件平台 HardwarePlatform",
          "软件版本 SoftwareVersion / 版本映射 VersionMapping",
          "测试用例 TestCase / 测试结果 TestResult",
          "审批记录 ApprovalRecord / 变更申请 ChangeRequest"
        ]
      }
    ]
  },
  {
    id: "prd-collaboration",
    title: "11 权限与角色协同",
    intro: "当前阶段先统一协同原则，后续逐步升级为权限模型。",
    blocks: [
      {
        type: "columns",
        title: "当前协同原则与后续权限方向",
        columns: [
          {
            heading: "当前角色协同原则",
            items: [
              "产品负责能力定义与版本规划",
              "研发负责字段、能力与实现边界确认",
              "测试负责版本范围与验证依据确认",
              "售前/销售负责能力查询与对外口径使用",
              "售后/交付负责历史版本追溯与能力核对"
            ]
          },
          {
            heading: "后续权限方向",
            items: [
              "查看权限",
              "编辑权限",
              "发布权限",
              "删除/归档权限",
              "审批权限",
              "审计查看权限"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "prd-risks",
    title: "12 风险、依赖与约束",
    intro: "提前识别平台化过程中容易出现的边界问题与组织依赖。",
    blocks: [
      {
        type: "bullets",
        title: "关键风险",
        items: [
          "功能项、功能集、版本三类概念边界不清，可能导致平台定义混乱。",
          "若无统一字段结构化建模，后续扩展到机型绑定和版本映射会出现重构成本。",
          "若删除与发布没有审计与引用校验，将影响追溯链路完整性。",
          "若平台只服务研发视角，将无法成为真正的跨角色能力事实源。"
        ]
      },
      {
        type: "bullets",
        title: "关键依赖与当前约束",
        items: [
          "依赖产品侧统一功能定义口径、研发侧统一字段编码与数据结构约束。",
          "依赖测试侧明确版本验证边界，以及后续机型、软件版本、项目与测试数据的接入配合。",
          "当前系统仍处于 MVP 原型阶段，需要同时兼顾短期落地与长期平台规划。"
        ]
      }
    ]
  },
  {
    id: "prd-roadmap",
    title: "13 分阶段路线图",
    intro: "将当前 MVP、一期建设与长期平台化方向拆开表达，方便评审与汇报。",
    blocks: [
      {
        type: "timeline",
        title: "阶段路线图",
        items: [
          ["MVP", "完成功能集字典、版本记录、操作日志、批量导入、查询、字段规范与流程说明的最小治理闭环。"],
          ["一期", "补齐功能项字典、功能集与功能项关系、版本状态机、评审冻结、引用校验和历史版本对比，升级为可治理的能力治理平台。"],
          ["二期", "扩展机型功能集绑定、SKU/区域/项目关联及软件版本映射。"],
          ["三期", "建设测试与验收、审批与审计、多机型对比和项目定制转标准能力治理。"]
        ]
      }
    ]
  },
  {
    id: "prd-acceptance",
    title: "14 验收标准",
    intro: "从平台能力、产品目标和文档完整性三个维度定义本轮 PRD 的验收标准。",
    blocks: [
      {
        type: "columns",
        title: "验收标准",
        columns: [
          {
            heading: "当前 MVP 验收",
            items: [
              "支持新增、编辑、启停功能集",
              "支持查询功能集名称与编码",
              "支持新增版本、保存草稿、发布版本",
              "支持查看版本列表与操作日志",
              "支持批量导入入口、字段规范页与流程说明页"
            ]
          },
          {
            heading: "产品层验收",
            items: [
              "能够清晰区分功能集定义与功能集版本",
              "能够回答当前功能集有哪些版本、最新版本是什么",
              "能够留存关键操作日志",
              "能够为后续机型绑定、软件版本映射与测试验收预留清晰承接关系"
            ]
          },
          {
            heading: "文档层验收",
            items: [
              "背景、目标、范围、流程、功能需求、非功能需求完整",
              "当前阶段与后续阶段边界明确",
              "可同时用于需求评审与立项汇报"
            ]
          }
        ]
      }
    ]
  }
];

let activePage = "featureSets";
let selectedFeatureSetId = "fs-network";
let versionView = "versions";
let featureSetKeyword = "";
let activeAnnotationId = "";

const annotationItems = [
  {
    id: "01",
    anchor: "query",
    scene: "用于快速定位目标功能集，适合功能集数量增加后的日常筛选场景。",
    title: "功能集查询",
    trigger: "输入功能集名称或功能集编码后，点击“查询”或按 Enter。",
    fields: "功能集名称、功能集编码。",
    interaction: "执行后刷新左侧功能集列表，并根据结果联动右侧详情与版本记录区域。",
    result: "若当前选中项仍在结果内则保持选中；若不存在则自动切换到第一条匹配项；无结果时展示空状态。"
  },
  {
    id: "02",
    anchor: "create-set",
    scene: "用于新增一个可持续维护的能力容器，适合新建能力域或补录历史功能集。",
    title: "新增功能集",
    trigger: "点击“新增功能集”按钮。",
    fields: "功能集名称、功能集编码、功能集状态、功能集说明。",
    interaction: "点击后打开新增功能集弹窗，录入基础信息后保存。",
    result: "名称、编码、说明必填；状态默认启用；保存成功后新建项进入左侧列表并自动成为当前选中功能集。"
  },
  {
    id: "03",
    anchor: "set-list",
    scene: "用于在多个功能集之间快速切换，查看不同能力边界下的详情和版本。",
    title: "功能集列表",
    trigger: "点击左侧任一功能集列表项。",
    fields: "展示功能集名称、功能集编码、状态、版本数量、最新版本。",
    interaction: "点击后切换当前选中功能集，并同步更新右侧详情卡、版本列表与操作日志视图。",
    result: "查询后若当前选中项仍匹配则保留；若不匹配则自动切换第一条结果；无匹配时右侧同步显示空状态。"
  },
  {
    id: "04",
    anchor: "set-actions",
    scene: "用于维护当前功能集的基础信息与状态，适合日常修订和治理操作。",
    title: "功能集详情操作",
    trigger: "点击编辑、启用/停用、删除按钮。",
    fields: "编辑时可维护功能集名称、编码、状态、说明；状态支持启用/停用。",
    interaction: "编辑会打开弹窗；启停为即时切换；删除前会先做可删除性判断。",
    result: "停用后仅保留展示；若功能集下已有版本记录则禁止删除；编辑保存后详情信息与列表状态同步更新。"
  },
  {
    id: "05",
    anchor: "view-switch",
    scene: "用于在版本沉淀记录和关键操作留痕之间切换查看当前功能集的管理信息。",
    title: "版本视图切换",
    trigger: "点击“版本列表”或“操作日志”页签。",
    fields: "当前操作无字段录入。",
    interaction: "只切换右侧工作区展示内容，不改变当前功能集，也不影响左侧列表选择。",
    result: "版本列表用于查看版本沉淀内容；操作日志用于查看创建、保存、发布等关键动作留痕。"
  },
  {
    id: "06",
    anchor: "create-version",
    scene: "用于在当前功能集下沉淀新的能力快照，适合新增迭代版本或补录历史版本。",
    title: "新增版本",
    trigger: "点击“新增版本”按钮。",
    fields: "版本号、版本名称、能力范围、版本描述。",
    interaction: "点击后打开版本弹窗，可选择先保存草稿，也可直接发布。",
    result: "字段全部必填；保存后形成草稿版本；发布后形成正式版本并写入发布时间。"
  },
  {
    id: "07",
    anchor: "version-actions",
    scene: "用于对已有版本记录进行查看、修订、发布或清理，适合版本治理和历史维护场景。",
    title: "版本操作列",
    trigger: "在版本列表操作列中点击查看、编辑、发布、删除。",
    fields: "当前操作基于已有版本记录，不新增字段；编辑时可修改版本号、版本名称、能力范围、版本描述。",
    interaction: "已发布版本支持查看和编辑；草稿版本支持编辑、发布与删除；不同状态显示不同操作集合。",
    result: "已发布版本不可直接删除；草稿版本可删除；发布后版本状态更新为已发布并写入发布时间。"
  },
  {
    id: "08",
    anchor: "bulk-import",
    scene: "适用于历史数据初始化、批量迁移或一次性补录多个功能集及版本的场景。",
    title: "批量导入",
    trigger: "点击页面右上角“批量导入”按钮。",
    fields: "功能集编码、功能集名称、功能集状态、功能集说明，以及版本号、版本名称、能力范围、版本描述。",
    interaction: "点击后打开导入弹窗，查看 JSON 模板说明并提交导入任务。",
    result: "需按模板结构准备数据；当前原型阶段提交后反馈任务已提交，后续可继续扩展真实导入校验。"
  }
];

const $ = (selector) => document.querySelector(selector);
const els = {
  nav: $("#moduleNav"),
  title: $("#pageTitle"),
  content: $("#content"),
  drawer: $("#detailDrawer"),
  drawerContent: $("#drawerContent"),
  drawerClose: $("#drawerClose"),
  drawerMask: $("#drawerMask"),
  topActions: $(".top-actions")
};

function init() {
  renderNav();
  bindEvents();
  render();
}

function bindEvents() {
  els.drawerClose.addEventListener("click", closeDrawer);
  els.drawerMask.addEventListener("click", closeDrawer);
  els.drawerContent.addEventListener("click", handleDrawerClick);

  document.addEventListener("click", (event) => {
    const annotationToggle = event.target.closest("[data-annotation-toggle]");
    if (annotationToggle) {
      handleAnnotationToggle(annotationToggle.dataset.annotationToggle);
      return;
    }

    if (
      activeAnnotationId &&
      !event.target.closest(".annotation-pin") &&
      !event.target.closest(".annotation-popover")
    ) {
      activeAnnotationId = "";
      render();
      return;
    }

    const action = event.target.closest("[data-action]");
    if (!action) return;
    handleAction(action.dataset.action, action.dataset.id);
  });
}

function renderNav() {
  els.nav.innerHTML = navItems
    .map(
      (item) => `
        <button class="nav-item ${activePage === item.id ? "active" : ""}" type="button" data-page="${item.id}">
          <span>${item.label}</span>
        </button>
      `
    )
    .join("");

  els.nav.querySelectorAll("[data-page]").forEach((button) => {
    button.addEventListener("click", () => {
      activePage = button.dataset.page;
      renderNav();
      render();
    });
  });
}

function render() {
  els.title.textContent = navItems.find((item) => item.id === activePage)?.label || "功能集字典";
  renderTopActions();
  if (activePage !== "featureSets") closeDrawer();
  if (activePage === "featureSets") renderFeatureSets();
  if (activePage === "guide") renderGuide();
  if (activePage === "prd") renderPrd();
  if (activePage === "standards") renderStandards();
}

function renderTopActions() {
  if (activePage !== "featureSets") {
    els.topActions.innerHTML = "";
    return;
  }

  els.topActions.innerHTML = `
    <div class="annotated-block annotation-align-right">
      <button class="ghost-action" type="button" data-action="bulk-import">批量导入</button>
      ${annotationHotspot("bulk-import")}
    </div>
  `;
}

function renderFeatureSets() {
  const filteredSets = filterFeatureSets(featureSets, featureSetKeyword);
  const currentSet = filteredSets.find((item) => item.id === selectedFeatureSetId) || filteredSets[0] || null;
  selectedFeatureSetId = currentSet?.id || "";
  const currentVersions = currentSet ? versions.filter((item) => item.featureSetId === currentSet.id) : [];
  const currentLogs = currentSet ? operationLogs.filter((item) => item.featureSetId === currentSet.id) : [];
  const isSearching = Boolean(featureSetKeyword.trim());
  const totalText = isSearching ? `匹配 ${filteredSets.length} 项，共 ${featureSets.length} 项` : `共 ${featureSets.length} 项`;

  els.content.innerHTML = `
    ${featureExplainCards()}
    ${featureOverviewPanel()}
    <section class="master-detail">
      <aside class="page-card master-pane">
        <div class="card-header compact-header">
          <div>
            <h3>功能集列表</h3>
            <p>${totalText}</p>
          </div>
          <div class="annotated-block annotation-align-right">
            <button class="primary-action" type="button" data-action="create-set">新增功能集</button>
            ${annotationHotspot("create-set")}
          </div>
        </div>
        <div class="annotated-block annotation-fill">
          ${featureSetList(filteredSets, featureSetKeyword)}
          ${annotationHotspot("set-list")}
        </div>
      </aside>

      <article class="detail-pane">
        ${
          currentSet
            ? `
              ${selectedSetHeader(currentSet, currentVersions)}
              <section class="page-card version-workbench">
                <div class="card-header">
                  <div>
                    <h3>版本记录</h3>
                    <p>当前功能集共 ${currentVersions.length} 条版本记录，用于沉淀该功能集下的能力迭代。</p>
                  </div>
                  <div class="button-row version-toolbar">
                    <div class="annotated-block annotation-inline">
                      ${viewSwitch()}
                      ${annotationHotspot("view-switch")}
                    </div>
                    <div class="annotated-block annotation-align-right">
                      <button class="primary-action" type="button" data-action="create-version">新增版本</button>
                      ${annotationHotspot("create-version")}
                    </div>
                  </div>
                </div>
                ${
                  versionView === "versions"
                    ? `
                      <div class="annotated-block annotation-fill">
                        ${versionTable(currentVersions)}
                        ${annotationHotspot("version-actions")}
                      </div>
                    `
                    : operationLogTable(currentLogs)
                }
              </section>
            `
            : `<section class="page-card empty-detail-card">${emptyState(isSearching ? "未找到匹配功能集" : "暂无功能集", isSearching ? `未匹配到名称或编码包含“${escapeHtml(featureSetKeyword)}”的功能集，请调整关键词后重试。` : "请先新增功能集，再维护对应的版本记录。")}</section>`
        }
      </article>
    </section>
  `;

  const searchForm = $("#featureSetSearchForm");
  if (searchForm) {
    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const searchInput = $("#featureSetSearch");
      featureSetKeyword = searchInput?.value.trim() || "";
      renderFeatureSets();
    });
  }
}

function renderGuide() {
  els.content.innerHTML = `
    <section class="page-card guide-hero">
      <div class="card-header guide-header">
        <div>
          <h3>流程与交互说明</h3>
          <p>本页用于说明功能集字典模块在当前 MVP 阶段的使用路径、模块职责以及与后续平台规划之间的承接关系。</p>
        </div>
      </div>
      <div class="guide-hero-body">
        ${guideHighlight("当前定位", "作为机型能力治理的 MVP 工作台，先完成“定义功能集 - 维护版本 - 留痕追溯”的最小闭环。")}
        ${guideHighlight("当前覆盖", "功能集字典、版本记录、操作日志、批量导入、字段规范与名称/编码查询。")}
        ${guideHighlight("后续承接", "未来可继续扩展机型绑定、软件版本映射、测试验收和跨角色审批，但本轮先用说明页完成关系表达。")}
      </div>
    </section>

    <section class="guide-grid">
      <section class="page-card">
        <div class="card-header">
          <div>
            <h3>整体流程闭环</h3>
            <p>围绕“先定义，再沉淀，再发布，再追溯”的管理路径梳理当前模块如何协同。</p>
          </div>
        </div>
        <div class="flow-steps">
          ${flowStep("01", "定义功能集", "产品或平台运营新建功能集，明确名称、编码、状态和边界说明，形成一个可持续维护的能力容器。")}
          ${flowStep("02", "维护版本草稿", "在对应功能集下新增版本，填写版本号、版本名称、能力范围和版本描述，先保存为草稿。")}
          ${flowStep("03", "发布可引用版本", "确认能力范围后发布版本，形成可对外引用的能力快照，同时记录发布时间。")}
          ${flowStep("04", "查看操作留痕", "通过操作日志查看创建、保存、发布等关键动作，为后续问题定位和版本回溯提供依据。")}
          ${flowStep("05", "批量导入补录", "对于历史能力或成批迁移场景，可通过模板一次性导入功能集及版本数据。")}
          ${flowStep("06", "进入后续规划", "当前 MVP 完成最小治理闭环；后续可在此基础上继续承接机型绑定、软件版本映射和测试验收。")}
        </div>
      </section>

      <section class="page-card">
        <div class="card-header">
          <div>
            <h3>模块职责说明</h3>
            <p>明确当前导航模块各自解决什么问题，避免页面职责交叉。</p>
          </div>
        </div>
        <div class="guide-blocks">
          ${guideBlock("功能集字典", [
            "用于进行日常操作，主路径是查询功能集、查看详情、维护版本和查看日志。",
            "功能集负责表达能力边界，不直接承载某一版的具体能力值。",
            "版本记录负责沉淀某一时间点可被引用的能力快照。"
          ])}
          ${guideBlock("流程与交互说明", [
            "用于向产品、研发、测试、交付等角色解释当前模块的定位、流程和使用方式。",
            "本页会同时区分“当前已实现能力”和“后续规划承接关系”。",
            "适合作为评审、汇报和新人上手时的统一口径。"
          ])}
          ${guideBlock("字段规范", [
            "用于统一字段命名、必填口径和填写示例。",
            "当前只覆盖 MVP 已落地字段，避免在页面中提前承载未实现的数据模型。",
            "后续新增模型时可按同样方式扩充规范内容。"
          ])}
        </div>
      </section>
    </section>

    <section class="page-card">
      <div class="card-header">
        <div>
          <h3>模块交互说明</h3>
          <p>将当前页面中的核心交互行为统一口径，便于后续继续扩展时保持一致。</p>
        </div>
      </div>
      <div class="interaction-grid">
        ${interactionCard("功能集查询", [
          "查询位置在功能集字典说明下方，只支持按功能集名称和功能集编码检索。",
          "输入关键词后点击查询或按 Enter 执行查询，点击重置恢复全部列表。",
          "若当前选中项仍在结果中，右侧详情保持；若被筛掉，则自动切换到第一条匹配结果。"
        ])}
        ${interactionCard("新增/编辑功能集", [
          "通过弹窗完成录入，字段包含名称、编码、状态和说明。",
          "状态使用开关形式交互，鼠标移入提示图标可查看状态影响。",
          "取消、关闭按钮和点击遮罩均应真正关闭弹窗，不保留残留内容。"
        ])}
        ${interactionCard("版本记录管理", [
          "版本记录默认展示版本列表，可切换到操作日志查看行为留痕。",
          "新增版本时先保存草稿，再根据需要发布，避免未确认内容直接成为正式快照。",
          "已发布版本支持查看和编辑；草稿版本支持编辑、发布和删除。"
        ])}
        ${interactionCard("批量导入", [
          "入口保留在页面顶部，用于处理历史能力补录和批量迁移。",
          "通过模板说明约束字段结构，减少导入时口径不一致。",
          "当前为 MVP 原型交互，后续可扩展为上传校验、错误提示和导入结果反馈。"
        ])}
      </div>
    </section>

    <section class="page-card">
      <div class="card-header">
        <div>
          <h3>与后续规划的关系</h3>
          <p>基于初版需求文档，将本轮 MVP 页面与未来平台化能力之间的关系先说清楚。</p>
        </div>
      </div>
      <div class="planning-table">
        <div class="planning-row planning-head">
          <span>后续能力方向</span>
          <span>当前 MVP 承接方式</span>
        </div>
        ${planningRow("机型功能集绑定", "当前先用功能集 + 版本快照表达能力基线，后续再将功能集版本与机型、SKU、区域、项目建立绑定关系。")}
        ${planningRow("软件版本映射", "当前先维护能力定义和版本发布信息，后续可补充固件、App、云平台、算法包的实现版本映射。")}
        ${planningRow("测试与验收", "当前通过版本记录和操作日志保留发布依据，后续可继续扩展测试范围、用例和验收结论。")}
        ${planningRow("审批与审计", "当前保留操作日志作为留痕基础，后续可增加评审、冻结、发布审批和引用校验。")}
      </div>
    </section>
  `;
}

function renderPrd() {
  els.content.innerHTML = `
    <section class="page-card prd-hero">
      <div class="card-header prd-hero-header">
        <div>
          <h3>机型功能集字典与版本记录平台产品需求文档（PRD）</h3>
          <p>本页将完整 PRD 同步进平台内，供研发、测试、产品、交付等角色直接按章节查阅，不必在页面原型与外部文档之间来回切换。</p>
        </div>
        <div class="prd-hero-meta">
          <span>适用范围：MVP / 一期 / 长期规划</span>
          <span>更新日期：2026-05-26</span>
        </div>
      </div>
    </section>

    <section class="prd-layout">
      <aside class="page-card prd-index-card">
        <div class="card-header compact-header">
          <div>
            <h3>章节目录</h3>
            <p>点击可快速定位对应章节</p>
          </div>
        </div>
        <nav class="prd-index-list" aria-label="PRD章节目录">
          ${prdSections
            .map(
              (section) => `
                <a class="prd-index-item" href="#${section.id}">
                  <span>${section.title}</span>
                </a>
              `
            )
            .join("")}
        </nav>
      </aside>

      <article class="prd-content">
        ${prdSections.map((section) => prdSection(section)).join("")}
      </article>
    </section>
  `;
}

function renderStandards() {
  els.content.innerHTML = `
    <section class="page-card">
      <div class="card-header">
        <div>
          <h3>字段规范与管理口径</h3>
          <p>统一字段命名和填写口径，保证功能集与版本记录都能被清晰理解和持续维护。</p>
        </div>
      </div>
      <div class="principle-grid">
        ${principle("功能集描述边界", "功能集只维护名称、编码、状态和说明，用于表达能力边界。")}
        ${principle("版本沉淀能力", "版本记录只维护版本号、版本名称、能力范围和版本描述，用于沉淀能力迭代。")}
        ${principle("发布明确可用性", "版本通过保存与发布两种操作区分草稿和可引用记录。")}
      </div>
      ${standardsTable()}
    </section>
  `;
}

function featureOverviewPanel() {
  return `
    <section class="page-card feature-overview-card annotated-block">
      <div class="overview-top overview-top-split">
        <form class="overview-search-form" id="featureSetSearchForm">
          <span class="overview-prefix">请输入：</span>
          <input id="featureSetSearch" type="search" placeholder="功能集名称 / 功能集编码" value="${escapeAttr(featureSetKeyword)}" />
          <button class="ghost-action search-submit" type="submit">查询</button>
          <button class="ghost-action search-reset" type="button" data-action="reset-search" ${featureSetKeyword ? "" : "disabled"}>重置</button>
        </form>
        ${annotationHotspot("query")}
      </div>
    </section>
  `;
}

function featureExplainCards() {
  return `
    <section class="overview-strip section-strip" aria-label="模块说明">
      ${overviewCard("01", "功能集定义", "负责定义能力边界", "统一维护功能集名称、编码、状态与说明，明确当前能力口径。")}
      ${overviewCard("02", "版本记录沉淀", "负责沉淀发布快照", "按版本持续沉淀可发布、可引用、可追溯的能力快照与迭代内容。")}
      ${overviewCard("03", "操作日志回溯", "负责留痕关键动作", "记录创建、保存、发布等关键操作，为后续回溯和核对提供依据。")}
    </section>
  `;
}

function overviewCard(index, title, highlight, text, detail = "") {
  return `
    <article class="overview-note">
      <span class="overview-note-index">${index}</span>
      <div class="overview-note-body">
        <strong>${title}</strong>
        <em>${highlight}</em>
        <p>${text}</p>
        ${detail ? `<span class="overview-note-detail">${detail}</span>` : ""}
      </div>
    </article>
  `;
}

function featureSetList(rows, keyword = "") {
  if (!rows.length) return emptyState(keyword ? "未找到匹配功能集" : "暂无功能集", keyword ? `没有匹配“${escapeHtml(keyword)}”的名称或编码。` : "点击新增功能集，先定义能力边界。");
  return `
    <div class="set-list" aria-label="功能集列表区域">
      ${rows
        .map((item) => {
          const setVersions = versions.filter((version) => version.featureSetId === item.id);
          return `
            <button class="set-list-item ${item.id === selectedFeatureSetId ? "active" : ""}" type="button" data-action="select-set" data-id="${item.id}">
              <span class="set-list-head">
                <span class="set-list-title">${item.name}</span>
                ${statusTag(item.status)}
              </span>
              <span class="set-list-code">${item.code}</span>
              <span class="set-list-meta">
                <em>${setVersions.length} 条版本记录</em>
                <em>最新 ${latestVersionNo(setVersions)}</em>
              </span>
            </button>
          `;
        })
        .join("")}
    </div>
  `;
}

function selectedSetHeader(item, setVersions) {
  return `
    <section class="page-card selected-set-card">
      <div class="context-main">
        <div class="set-title-row">
          <strong>${item.name}</strong>
          ${statusTag(item.status)}
        </div>
        <p class="set-description">${item.description}</p>
        <div class="set-info-grid" aria-label="功能集基础信息">
          ${infoItem("功能集编码", item.code)}
          ${infoItem("版本数量", `${setVersions.length} 条`)}
          ${infoItem("最新版本", latestVersionNo(setVersions))}
          ${infoItem("创建人", "-")}
          ${infoItem("创建时间", item.createdAt)}
        </div>
      </div>
      <div class="context-actions annotated-block annotation-stack">
        <div class="button-row context-action-row">
          <button class="chip-button" type="button" data-action="edit-set" data-id="${item.id}">编辑</button>
          <button class="chip-button" type="button" data-action="toggle-set" data-id="${item.id}">${item.status === "停用" ? "启用" : "停用"}</button>
          <button class="danger-outline" type="button" data-action="delete-set" data-id="${item.id}">删除</button>
        </div>
        ${annotationHotspot("set-actions")}
      </div>
    </section>
  `;
}

function infoItem(label, value) {
  return `
    <span class="info-item">
      <em>${label}</em>
      <strong>${value}</strong>
    </span>
  `;
}

function versionTable(rows) {
  if (!rows.length) return emptyState("暂无版本记录", "点击新增版本，补充当前功能集的第一个版本。");
  return `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>版本号</th>
            <th>版本名称</th>
            <th>能力范围</th>
            <th>版本描述</th>
            <th>状态</th>
            <th>发布时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          ${rows
            .map(
              (item) => `
                <tr>
                  <td><strong>${item.versionNo}</strong></td>
                  <td>${item.versionName}</td>
                  <td>${item.capabilityScope}</td>
                  <td>${item.description}</td>
                  <td>${statusTag(item.status)}</td>
                  <td>${item.publishedAt ? `${item.publishedAt} 00:00:00` : "-"}</td>
                  <td class="actions">${versionActions(item)}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function operationLogTable(rows) {
  if (!rows.length) return emptyState("暂无操作日志", "当前功能集暂无操作记录。");
  return `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>操作时间</th>
            <th>操作类型</th>
            <th>操作对象</th>
            <th>操作人</th>
            <th>处理结果</th>
          </tr>
        </thead>
        <tbody>
          ${rows
            .map(
              (item) => `
                <tr>
                  <td><strong>${item.operatedAt}</strong></td>
                  <td>${item.action}</td>
                  <td>${item.target}</td>
                  <td>${item.operator}</td>
                  <td>${item.result}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function viewSwitch() {
  return `
    <div class="view-switch" role="tablist" aria-label="版本记录视图切换">
      <button class="view-tab ${versionView === "versions" ? "active" : ""}" type="button" data-action="switch-version-view" data-id="versions" role="tab" aria-selected="${String(versionView === "versions")}">版本列表</button>
      <button class="view-tab ${versionView === "logs" ? "active" : ""}" type="button" data-action="switch-version-view" data-id="logs" role="tab" aria-selected="${String(versionView === "logs")}">操作日志</button>
    </div>
  `;
}

function versionActions(item) {
  if (item.status === "已发布") {
    return [
      `<button type="button" data-action="view-version" data-id="${item.id}">查看</button>`,
      `<button type="button" data-action="edit-version" data-id="${item.id}">编辑</button>`
    ].join("");
  }
  return [
    `<button type="button" data-action="edit-version" data-id="${item.id}">编辑</button>`,
    `<button type="button" data-action="publish-version" data-id="${item.id}">发布</button>`,
    `<button class="danger-text" type="button" data-action="delete-version" data-id="${item.id}">删除</button>`
  ].join("");
}

function standardsTable() {
  return `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>字段名称</th>
            <th>字段编码</th>
            <th>必填</th>
            <th>填写规范</th>
            <th>示例</th>
          </tr>
        </thead>
        <tbody>
          ${fieldStandards
            .map(
              (item) => `
                <tr>
                  <td><strong>${item.field}</strong></td>
                  <td><code>${item.key}</code></td>
                  <td>${item.required}</td>
                  <td>${item.rule}</td>
                  <td>${item.example}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function principle(title, text) {
  return `
    <article class="principle-card">
      <strong>${title}</strong>
      <p>${text}</p>
    </article>
  `;
}

function guideHighlight(title, text) {
  return `
    <article class="guide-highlight">
      <strong>${title}</strong>
      <p>${text}</p>
    </article>
  `;
}

function flowStep(index, title, text) {
  return `
    <article class="flow-step">
      <span class="flow-step-index">${index}</span>
      <div>
        <strong>${title}</strong>
        <p>${text}</p>
      </div>
    </article>
  `;
}

function guideBlock(title, items) {
  return `
    <article class="guide-block">
      <strong>${title}</strong>
      <ul>
        ${items.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </article>
  `;
}

function interactionCard(title, items) {
  return `
    <article class="interaction-card">
      <strong>${title}</strong>
      <ul>
        ${items.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </article>
  `;
}

function planningRow(title, text) {
  return `
    <div class="planning-row">
      <strong>${title}</strong>
      <span>${text}</span>
    </div>
  `;
}

function prdSection(section) {
  return `
    <section class="page-card prd-section-card" id="${section.id}">
      <div class="card-header">
        <div>
          <h3>${section.title}</h3>
          <p>${section.intro || ""}</p>
        </div>
      </div>
      <div class="prd-section-body">
        ${section.blocks.map((block) => prdBlock(block)).join("")}
      </div>
    </section>
  `;
}

function prdBlock(block) {
  if (block.type === "definition") {
    return `
      <div class="prd-definition-list">
        ${block.items
          .map(
            ([label, value]) => `
              <div class="prd-definition-item">
                <em>${label}</em>
                <strong>${value}</strong>
              </div>
            `
          )
          .join("")}
      </div>
    `;
  }

  if (block.type === "highlight") {
    return `
      <article class="prd-highlight-card">
        <strong>${block.title}</strong>
        <p>${block.text}</p>
      </article>
    `;
  }

  if (block.type === "bullets") {
    return `
      <section class="prd-block">
        ${block.title ? `<strong class="prd-block-title">${block.title}</strong>` : ""}
        <ul class="prd-bullet-list">
          ${block.items.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </section>
    `;
  }

  if (block.type === "numbered") {
    return `
      <section class="prd-block">
        ${block.title ? `<strong class="prd-block-title">${block.title}</strong>` : ""}
        <ol class="prd-numbered-list">
          ${block.items.map((item) => `<li>${item}</li>`).join("")}
        </ol>
      </section>
    `;
  }

  if (block.type === "cards") {
    return `
      <section class="prd-block">
        ${block.title ? `<strong class="prd-block-title">${block.title}</strong>` : ""}
        <div class="prd-card-grid">
          ${block.items
            .map(
              ([title, text]) => `
                <article class="prd-mini-card">
                  <strong>${title}</strong>
                  <p>${text}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </section>
    `;
  }

  if (block.type === "columns") {
    return `
      <section class="prd-block">
        ${block.title ? `<strong class="prd-block-title">${block.title}</strong>` : ""}
        <div class="prd-columns">
          ${block.columns
            .map(
              (column) => `
                <article class="prd-column-card">
                  <strong>${column.heading}</strong>
                  <ul class="prd-bullet-list">
                    ${column.items.map((item) => `<li>${item}</li>`).join("")}
                  </ul>
                </article>
              `
            )
            .join("")}
        </div>
      </section>
    `;
  }

  if (block.type === "timeline") {
    return `
      <section class="prd-block">
        ${block.title ? `<strong class="prd-block-title">${block.title}</strong>` : ""}
        <div class="prd-timeline">
          ${block.items
            .map(
              ([label, text]) => `
                <article class="prd-timeline-item">
                  <span class="prd-timeline-mark">${label}</span>
                  <p>${text}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </section>
    `;
  }

  if (block.type === "diagram") {
    return `
      <section class="prd-block">
        ${block.title ? `<strong class="prd-block-title">${block.title}</strong>` : ""}
        <pre class="prd-diagram">${escapeHtml(block.text)}</pre>
      </section>
    `;
  }

  if (block.type === "functional-groups") {
    return `
      <div class="prd-functional-groups">
        ${block.groups
          .map(
            (group) => `
              <section class="prd-functional-group">
                <strong class="prd-block-title">${group.title}</strong>
                <div class="prd-functional-list">
                  ${group.items
                    .map(
                      ([title, text]) => `
                        <article class="prd-functional-item">
                          <strong>${title}</strong>
                          <p>${text}</p>
                        </article>
                      `
                    )
                    .join("")}
                </div>
              </section>
            `
          )
          .join("")}
      </div>
    `;
  }

  return "";
}

function handleAction(action, id) {
  if (action === "select-set") {
    selectedFeatureSetId = id;
    activeAnnotationId = "";
    render();
  }
  if (action === "clear-search") {
    featureSetKeyword = "";
    activeAnnotationId = "";
    renderFeatureSets();
  }
  if (action === "reset-search") {
    featureSetKeyword = "";
    activeAnnotationId = "";
    renderFeatureSets();
  }
  if (action === "switch-version-view") {
    versionView = id;
    activeAnnotationId = "";
    render();
  }
  if (action === "create-set") openFeatureSetForm();
  if (action === "edit-set") openFeatureSetForm(featureSets.find((item) => item.id === id));
  if (action === "toggle-set") toggleFeatureSetStatus(id);
  if (action === "delete-set") deleteFeatureSet(id);
  if (action === "bulk-import") openImportModal();
  if (action === "submit-import") showToast("已提交批量导入任务");
  if (action === "create-version") openVersionForm();
  if (action === "edit-version") openVersionForm(versions.find((item) => item.id === id));
  if (action === "view-version") openVersionForm(versions.find((item) => item.id === id), true);
  if (action === "publish-version") publishVersion(id);
  if (action === "delete-version") deleteVersion(id);
  if (action === "save-set") saveFeatureSet(id);
  if (action === "save-version") saveVersion(id, "save");
  if (action === "publish-version-form") saveVersion(id, "publish");
}

function handleDrawerClick(event) {
  const action = event.target.closest("[data-modal-action]");
  if (!action) return;
  if (action.dataset.modalAction === "close") closeDrawer();
  if (action.dataset.modalAction === "toggle-status") toggleFeatureSetSwitch();
}

function openFeatureSetForm(item = {}) {
  const title = item.id ? "编辑功能集" : "新增功能集";
  openDrawer(`
    <div class="modal-shell">
      <div class="drawer-title-block">
        <h3>${title}</h3>
        <p>功能集用于定义稳定能力边界；具体能力范围和版本快照在版本记录中维护。</p>
      </div>
      <form class="form-grid" id="featureSetForm">
        ${formInput("功能集名称", "name", item.name || "", "例如：网络类型功能集", true)}
        ${formInput("功能集编码", "code", item.code || "", "例如：network_type", true)}
        ${formToggle("功能集状态", "status", item.status || "启用")}
        ${formTextarea("功能集说明", "description", item.description || "", "说明该功能集覆盖的能力范围、适用场景和边界", true)}
        <div class="form-help form-wide">填写建议：功能集用于描述稳定能力边界，不承载某一版本的具体能力范围。</div>
        <div class="drawer-actions">
          <button class="ghost-action" type="button" data-modal-action="close">取消</button>
          <button class="primary-action" type="button" data-action="save-set" data-id="${item.id || ""}">保存功能集</button>
        </div>
      </form>
    </div>
  `);
}

function openImportModal() {
  openDrawer(`
    <div class="modal-shell import-shell">
      <div class="drawer-title-block">
        <h3>批量导入功能集及版本</h3>
        <p>适用于历史数据补录或批量初始化场景，导入前请先确认字段命名与 JSON 结构一致。</p>
      </div>
      <div class="import-template">${escapeHtml(importTemplate)}</div>
      <div class="import-dropzone">
        <strong>将 JSON 文件拖到此处，或点击上传</strong>
      </div>
      <div class="drawer-actions">
        <button class="ghost-action" type="button" data-modal-action="close">取消</button>
        <button class="primary-action" type="button" data-action="submit-import">提交</button>
      </div>
    </div>
  `);
}

function openVersionForm(item = {}, readOnly = false) {
  const title = readOnly ? "查看版本" : item.id ? "编辑版本" : "新增版本";
  const currentSet = featureSets.find((set) => set.id === (item.featureSetId || selectedFeatureSetId));
  if (!currentSet) {
    showToast("请先选择一个功能集，再新增版本", "error");
    return;
  }
  openDrawer(`
    <div class="modal-shell">
      <div class="drawer-title-block">
        <h3>${title}</h3>
        <p>${readOnly ? "查看当前版本记录。" : `当前归属功能集：${currentSet.name}`}</p>
      </div>
      <form class="form-grid ${readOnly ? "readonly-form" : ""}" id="versionForm">
        <input type="hidden" name="featureSetId" value="${currentSet.id}" />
        ${formInput("版本号", "versionNo", item.versionNo || nextVersionNo(currentSet.id), "例如：V1.0", true, readOnly)}
        ${formInput("版本名称", "versionName", item.versionName || "", "例如：仅 WiFi 设备交互版本", true, readOnly)}
        ${formInput("能力范围", "capabilityScope", item.capabilityScope || "", "例如：仅 WiFi", true, readOnly)}
        <span class="form-placeholder" aria-hidden="true"></span>
        ${formTextarea("版本描述", "description", item.description || "", "说明该版本的适用设备、交互范围和能力边界", true, readOnly)}
        <div class="form-help form-wide">填写建议：版本记录用于沉淀当前功能集下的能力范围和交互边界，发布后可视为正式版本快照。</div>
        <div class="drawer-actions">
          <button class="ghost-action" type="button" data-modal-action="close">${readOnly ? "关闭" : "取消"}</button>
          ${
            readOnly
              ? ""
              : `
                <button class="ghost-action" type="button" data-action="save-version" data-id="${item.id || ""}">保存</button>
                <button class="primary-action" type="button" data-action="publish-version-form" data-id="${item.id || ""}">发布</button>
              `
          }
        </div>
      </form>
    </div>
  `);
}

function saveFeatureSet(id) {
  const form = $("#featureSetForm");
  const data = Object.fromEntries(new FormData(form).entries());
  if (!data.name || !data.code || !data.description) {
    showToast("请补全功能集名称、功能集编码和功能集说明", "error");
    return;
  }

  if (id) {
    featureSets = featureSets.map((item) => (item.id === id ? { ...item, ...data, updatedAt: nowText() } : item));
    showToast("功能集已更新");
  } else {
    const newId = `fs-${Date.now()}`;
    featureSets.unshift({
      id: newId,
      name: data.name,
      code: data.code,
      status: data.status || "启用",
      description: data.description,
      createdAt: nowText(),
      updatedAt: nowText()
    });
    selectedFeatureSetId = newId;
    showToast("功能集已创建");
  }
  versionView = "versions";
  closeDrawer();
  render();
}

function saveVersion(id, mode = "save") {
  const form = $("#versionForm");
  const data = Object.fromEntries(new FormData(form).entries());
  if (!data.featureSetId || !data.versionNo || !data.versionName || !data.capabilityScope || !data.description) {
    showToast("请补全版本号、版本名称、能力范围和版本描述", "error");
    return;
  }

  const nextStatus = mode === "publish" ? "已发布" : "草稿";
  const publishedAt = mode === "publish" ? todayText() : "";

  if (id) {
    versions = versions.map((item) =>
      item.id === id
        ? {
            ...item,
            ...data,
            status: nextStatus,
            publishedAt: nextStatus === "已发布" ? publishedAt || item.publishedAt : item.publishedAt
          }
        : item
    );
    showToast(mode === "publish" ? "版本已发布" : "版本已保存");
  } else {
    versions.unshift({
      id: `v-${Date.now()}`,
      featureSetId: data.featureSetId,
      versionNo: data.versionNo,
      versionName: data.versionName,
      capabilityScope: data.capabilityScope,
      description: data.description,
      status: nextStatus,
      publishedAt,
      createdAt: nowText()
    });
    showToast(mode === "publish" ? "版本已创建并发布" : "版本草稿已保存");
  }

  selectedFeatureSetId = data.featureSetId;
  versionView = "versions";
  closeDrawer();
  render();
}

function toggleFeatureSetStatus(id) {
  featureSets = featureSets.map((item) =>
    item.id === id
      ? { ...item, status: item.status === "停用" ? "启用" : "停用", updatedAt: nowText() }
      : item
  );
  showToast("功能集状态已更新");
  render();
}

function deleteFeatureSet(id) {
  const hasVersions = versions.some((item) => item.featureSetId === id);
  if (hasVersions) {
    showToast("该功能集下已有版本记录，暂不支持删除", "error");
    return;
  }
  if (!window.confirm("确认删除该功能集吗？删除后无法恢复。")) return;
  featureSets = featureSets.filter((item) => item.id !== id);
  selectedFeatureSetId = featureSets[0]?.id || "";
  showToast("功能集已删除");
  render();
}

function publishVersion(id) {
  const target = versions.find((item) => item.id === id);
  if (!target) return;
  versions = versions.map((item) => (item.id === id ? { ...item, status: "已发布", publishedAt: todayText() } : item));
  showToast(`${target.versionNo} 已发布`);
  render();
}

function deleteVersion(id) {
  const target = versions.find((item) => item.id === id);
  if (!target) return;
  if (target.status === "已发布") {
    showToast("已发布版本暂不支持删除", "error");
    return;
  }
  if (!window.confirm(`确认删除 ${target.versionNo} 吗？删除后无法恢复。`)) return;
  versions = versions.filter((item) => item.id !== id);
  showToast("版本已删除");
  render();
}

function formInput(label, name, value, placeholder, required = false, disabled = false) {
  return `
    <label>
      <span>${label}${required ? '<b class="required">*</b>' : ""}</span>
      <input name="${name}" value="${escapeAttr(value)}" placeholder="${placeholder}" ${disabled ? "disabled" : ""} />
    </label>
  `;
}

function formTextarea(label, name, value, placeholder, required = false, disabled = false) {
  return `
    <label class="form-wide">
      <span>${label}${required ? '<b class="required">*</b>' : ""}</span>
      <textarea name="${name}" placeholder="${placeholder}" ${disabled ? "disabled" : ""}>${escapeHtml(value)}</textarea>
    </label>
  `;
}

function formSelect(label, name, options, value, disabled = false) {
  return `
    <label>
      <span>${label}</span>
      <select name="${name}" ${disabled ? "disabled" : ""}>
        ${options.map((option) => `<option value="${option}" ${option === value ? "selected" : ""}>${option}</option>`).join("")}
      </select>
    </label>
  `;
}

function formToggle(label, name, value) {
  const checked = value !== "停用";
  return `
    <label class="toggle-field">
      <span class="toggle-label-row">
        <span>${label}</span>
        <span class="tooltip-anchor" tabindex="0">
          <span class="tooltip-icon" aria-hidden="true">i</span>
          <span class="tooltip-bubble">启用后可正常维护版本记录，关闭后仅保留展示</span>
        </span>
      </span>
      <button class="status-switch ${checked ? "on" : ""}" type="button" data-modal-action="toggle-status" aria-pressed="${checked}">
        <span class="status-switch-track">
          <span class="status-switch-thumb"></span>
        </span>
        <strong>${checked ? "启用" : "停用"}</strong>
      </button>
      <input type="hidden" name="${name}" value="${checked ? "启用" : "停用"}" />
    </label>
  `;
}

function annotationHotspot(anchor) {
  const item = annotationItems.find((entry) => entry.anchor === anchor);
  if (!item) return "";
  const isActive = activeAnnotationId === item.id;
  return `
    <div class="annotation-hotspot ${isActive ? "active" : ""}">
      <button class="annotation-pin ${isActive ? "active" : ""}" type="button" data-annotation-toggle="${item.id}" aria-expanded="${String(isActive)}" aria-label="${item.title}说明">
        ${item.id}
      </button>
      ${
        isActive
          ? `
            <aside class="annotation-popover" aria-label="${item.title}交互说明">
              <div class="annotation-popover-head">
                <span class="annotation-badge">${item.id}</span>
                <strong>${item.title}</strong>
              </div>
              ${annotationField("场景说明", item.scene)}
              ${annotationField("操作名称", item.title)}
              ${annotationField("触发方式", item.trigger)}
              ${annotationField("字段说明", item.fields)}
              ${annotationField("交互说明", item.interaction)}
              ${annotationField("结果逻辑校验", item.result)}
            </aside>
          `
          : ""
      }
    </div>
  `;
}

function annotationField(label, value) {
  return `
    <div class="annotation-section">
      <em>${label}</em>
      <p>${value}</p>
    </div>
  `;
}

function handleAnnotationToggle(id) {
  activeAnnotationId = activeAnnotationId === id ? "" : id;
  render();
}

function toggleFeatureSetSwitch() {
  const input = document.querySelector('#featureSetForm input[name="status"]');
  const button = document.querySelector(".status-switch");
  if (!input || !button) return;
  const nextValue = input.value === "启用" ? "停用" : "启用";
  input.value = nextValue;
  button.classList.toggle("on", nextValue === "启用");
  button.setAttribute("aria-pressed", String(nextValue === "启用"));
  const label = button.querySelector("strong");
  if (label) label.textContent = nextValue;
}

function statusTag(value) {
  const typeMap = {
    启用: "success",
    已发布: "success",
    停用: "default",
    草稿: "default"
  };
  return `<span class="status-tag ${typeMap[value] || "default"}">${value}</span>`;
}

function emptyState(title, desc) {
  return `
    <div class="empty-state">
      <strong>${title}</strong>
      <span>${desc}</span>
    </div>
  `;
}

function showToast(message, type = "success") {
  const existing = document.querySelector(".toast");
  if (existing) existing.remove();
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.setAttribute("role", "status");
  toast.textContent = message;
  document.body.appendChild(toast);
  window.setTimeout(() => toast.remove(), 2600);
}

function nextVersionNo(featureSetId) {
  const maxMajor = versions
    .filter((item) => item.featureSetId === featureSetId)
    .reduce((max, item) => Math.max(max, parseVersionMajor(item.versionNo)), 0);
  return `V${maxMajor + 1}.0`;
}

function latestVersionNo(setVersions) {
  if (!setVersions.length) return "-";
  return setVersions.reduce((latest, item) => (parseVersionMajor(item.versionNo) > parseVersionMajor(latest.versionNo) ? item : latest), setVersions[0]).versionNo;
}

function filterFeatureSets(rows, keyword) {
  const normalized = String(keyword || "").trim().toLowerCase();
  if (!normalized) return rows;
  return rows.filter((item) => {
    const name = item.name.toLowerCase();
    const code = item.code.toLowerCase();
    return name.includes(normalized) || code.includes(normalized);
  });
}

function parseVersionMajor(versionNo = "") {
  const matched = String(versionNo).match(/^V(\d+)/i);
  return matched ? Number(matched[1]) : 0;
}

function nowText() {
  const date = new Date();
  const pad = (num) => String(num).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

function todayText() {
  const date = new Date();
  const pad = (num) => String(num).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char]));
}

function escapeAttr(value = "") {
  return escapeHtml(value);
}

function openDrawer(content) {
  activeAnnotationId = "";
  els.drawerContent.innerHTML = content;
  els.drawer.classList.add("open");
  els.drawerMask.classList.add("open");
  els.drawer.setAttribute("aria-hidden", "false");
}

function closeDrawer() {
  els.drawer.classList.remove("open");
  els.drawerMask.classList.remove("open");
  els.drawer.setAttribute("aria-hidden", "true");
  window.setTimeout(() => {
    if (!els.drawer.classList.contains("open")) {
      els.drawerContent.innerHTML = "";
    }
  }, 180);
}

init();
