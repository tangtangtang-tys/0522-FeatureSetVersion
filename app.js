const navItems = [
  { id: "featureSets", label: "功能集管理" },
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
    supportedCapability: "仅 WiFi",
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
    supportedCapability: "仅 4G",
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
    supportedCapability: "WiFi+4G",
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
    supportedCapability: "有线+4G",
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
    supportedCapability: "IPC MQTT",
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
    supportedCapability: "定时休眠/事件唤醒",
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
  { field: "功能集说明", key: "description", required: "是", rule: "说明该功能集管理的能力集合和边界。", example: "定义不同网络接入类型的设备与平台端交互能力边界。" },
  { field: "版本号", key: "versionNo", required: "是", rule: "表达该功能集能力迭代版本，建议 V1.0、V2.0。", example: "V1.0" },
  { field: "版本名称", key: "versionName", required: "是", rule: "描述该版本支持的核心能力。", example: "仅 WiFi 设备交互版本" },
  { field: "支持能力", key: "supportedCapability", required: "是", rule: "描述该版本支持的能力范围。", example: "仅 WiFi" },
  { field: "版本描述", key: "description", required: "是", rule: "说明该版本支持什么设备类型以及交互边界。", example: "支持仅 WiFi 的设备与平台端进行基础交互。" }
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
          "supportedCapability": "",
          "versionDescription": ""
        }
      ]
    }
  ]
}`;

let activePage = "featureSets";
let selectedFeatureSetId = "fs-network";
let versionView = "versions";

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
  els.title.textContent = navItems.find((item) => item.id === activePage)?.label || "功能集管理";
  if (activePage !== "featureSets") closeDrawer();
  if (activePage === "featureSets") renderFeatureSets();
  if (activePage === "standards") renderStandards();
}

function renderFeatureSets() {
  const currentSet = featureSets.find((item) => item.id === selectedFeatureSetId) || featureSets[0] || null;
  selectedFeatureSetId = currentSet?.id || "";
  const currentVersions = currentSet ? versions.filter((item) => item.featureSetId === currentSet.id) : [];
  const currentLogs = currentSet ? operationLogs.filter((item) => item.featureSetId === currentSet.id) : [];

  els.content.innerHTML = `
    <section class="master-detail">
      <aside class="page-card master-pane">
        <div class="card-header compact-header">
          <div>
            <h3>功能集列表</h3>
            <p>共 ${featureSets.length} 项</p>
          </div>
          <button class="primary-action" type="button" data-action="create-set">新增功能集</button>
        </div>
        ${featureSetList(featureSets)}
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
                    ${viewSwitch()}
                    <button class="primary-action" type="button" data-action="create-version">新增版本</button>
                  </div>
                </div>
                ${versionView === "versions" ? versionTable(currentVersions) : operationLogTable(currentLogs)}
              </section>
            `
            : `<section class="page-card empty-detail-card">${emptyState("暂无功能集", "请先新增功能集，再维护对应的版本记录。")}</section>`
        }
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
        ${principle("版本沉淀能力", "版本记录只维护版本号、版本名称、支持能力和版本描述，用于沉淀能力迭代。")}
        ${principle("发布明确可用性", "版本通过保存与发布两种操作区分草稿和可引用记录。")}
      </div>
      ${standardsTable()}
    </section>
  `;
}

function featureSetList(rows) {
  if (!rows.length) return emptyState("暂无功能集", "点击新增功能集，先定义能力边界。");
  return `
    <div class="set-list">
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
      <div class="context-actions">
        <button class="chip-button" type="button" data-action="edit-set" data-id="${item.id}">编辑</button>
        <button class="chip-button" type="button" data-action="toggle-set" data-id="${item.id}">${item.status === "停用" ? "启用" : "停用"}</button>
        <button class="danger-outline" type="button" data-action="delete-set" data-id="${item.id}">删除</button>
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
            <th>支持能力</th>
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
                  <td>${item.supportedCapability}</td>
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

function handleAction(action, id) {
  if (action === "select-set") {
    selectedFeatureSetId = id;
    render();
  }
  if (action === "switch-version-view") {
    versionView = id;
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
        <p>功能集用于定义稳定能力边界；具体支持哪些能力，放到版本里维护。</p>
      </div>
      <form class="form-grid" id="featureSetForm">
        ${formInput("功能集名称", "name", item.name || "", "例如：网络类型功能集", true)}
        ${formInput("功能集编码", "code", item.code || "", "例如：network_type", true)}
        ${formToggle("功能集状态", "status", item.status || "启用")}
        ${formTextarea("功能集说明", "description", item.description || "", "说明该功能集管理的能力集合和边界", true)}
        <div class="form-help form-wide">填写建议：功能集用于描述能力范围和边界，不承载具体版本能力。</div>
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
        <p>${readOnly ? "查看当前版本记录。" : `当前所属功能集：${currentSet.name}`}</p>
      </div>
      <form class="form-grid ${readOnly ? "readonly-form" : ""}" id="versionForm">
        <input type="hidden" name="featureSetId" value="${currentSet.id}" />
        ${formInput("版本号", "versionNo", item.versionNo || nextVersionNo(currentSet.id), "例如：V1.0", true, readOnly)}
        ${formInput("版本名称", "versionName", item.versionName || "", "例如：仅 WiFi 设备交互版本", true, readOnly)}
        ${formInput("支持能力", "supportedCapability", item.supportedCapability || "", "例如：仅 WiFi", true, readOnly)}
        <span class="form-placeholder" aria-hidden="true"></span>
        ${formTextarea("版本描述", "description", item.description || "", "说明该版本支持什么能力及交互边界", true, readOnly)}
        <div class="form-help form-wide">填写建议：版本记录用于沉淀当前功能集下的具体能力内容，发布后可视为正式版本。</div>
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
  if (!data.featureSetId || !data.versionNo || !data.versionName || !data.supportedCapability || !data.description) {
    showToast("请补全版本号、版本名称、支持能力和版本描述", "error");
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
      supportedCapability: data.supportedCapability,
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
