const navItems = [
  { id: "featureSets", label: "功能集工作台" },
  { id: "standards", label: "字段规范" }
];

const categoryOptions = ["全部分类", "网络连接", "协议接入", "低功耗", "云服务"];
const statusOptions = ["全部状态", "启用", "已启用", "已停用"];
const setStatusOptions = ["启用", "已停用"];
const versionStatusOptions = ["已启用", "已停用"];

let featureSets = [
  {
    id: "fs-network",
    name: "网络类型功能集",
    code: "network_type",
    category: "网络连接",
    description: "定义不同网络接入类型的设备与平台端进行交互的能力集合。",
    owner: "产品-设备接入",
    createdBy: "张琳",
    status: "启用",
    versionCount: 4,
    latestVersion: "V4.0",
    createdAt: "2026-04-30 17:51:32",
    updatedAt: "2026-06-18 16:20:00"
  },
  {
    id: "fs-protocol",
    name: "设备协议功能集",
    code: "device_protocol",
    category: "协议接入",
    description: "定义设备与平台、NVR、网关之间采用的协议接入能力集合。",
    owner: "研发-接入平台",
    createdBy: "陈越",
    status: "启用",
    versionCount: 2,
    latestVersion: "V2.0",
    createdAt: "2026-05-01 10:18:20",
    updatedAt: "2026-06-12 10:00:00"
  },
  {
    id: "fs-low-power",
    name: "低功耗能力功能集",
    code: "low_power",
    category: "低功耗",
    description: "定义低功耗设备休眠、唤醒、短时在线和平台交互能力集合。",
    owner: "产品-低功耗",
    createdBy: "李珂",
    status: "启用",
    versionCount: 1,
    latestVersion: "V1.0",
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
    capabilityCode: "wifi_only",
    description: "支持仅 WiFi 的设备类型进行设备与平台端交互。",
    status: "已启用",
    releaseDate: "2026-04-30",
    createdAt: "2026-04-30 18:10:00"
  },
  {
    id: "v-network-2",
    featureSetId: "fs-network",
    versionNo: "V2.0",
    versionName: "仅 4G 设备交互版本",
    supportedCapability: "仅 4G",
    capabilityCode: "cellular_only",
    description: "支持仅 4G 的设备类型进行设备与平台端交互。",
    status: "已启用",
    releaseDate: "2026-05-15",
    createdAt: "2026-05-15 11:22:00"
  },
  {
    id: "v-network-3",
    featureSetId: "fs-network",
    versionNo: "V3.0",
    versionName: "WiFi+4G 设备交互版本",
    supportedCapability: "WiFi+4G",
    capabilityCode: "wifi_cellular",
    description: "支持 WiFi+4G 双网络设备进行设备与平台端交互。",
    status: "已启用",
    releaseDate: "2026-06-05",
    createdAt: "2026-06-05 09:30:00"
  },
  {
    id: "v-network-4",
    featureSetId: "fs-network",
    versionNo: "V4.0",
    versionName: "有线+4G 设备交互版本",
    supportedCapability: "有线+4G",
    capabilityCode: "wired_cellular",
    description: "支持有线+4G 的设备类型进行设备与平台端交互。",
    status: "已停用",
    releaseDate: "",
    createdAt: "2026-06-18 16:20:00"
  },
  {
    id: "v-protocol-1",
    featureSetId: "fs-protocol",
    versionNo: "V1.0",
    versionName: "IPC MQTT 接入版本",
    supportedCapability: "IPC MQTT",
    capabilityCode: "ipc_mqtt",
    description: "支持 IPC 设备通过 MQTT 与平台端进行交互。",
    status: "已启用",
    releaseDate: "2026-05-01",
    createdAt: "2026-05-01 12:00:00"
  },
  {
    id: "v-protocol-2",
    featureSetId: "fs-protocol",
    versionNo: "V2.0",
    versionName: "NVR MQTT 接入版本",
    supportedCapability: "NVR MQTT",
    capabilityCode: "nvr_mqtt",
    description: "支持 NVR 设备通过 MQTT 与平台端进行交互。",
    status: "已停用",
    releaseDate: "",
    createdAt: "2026-06-12 10:00:00"
  },
  {
    id: "v-low-power-1",
    featureSetId: "fs-low-power",
    versionNo: "V1.0",
    versionName: "休眠唤醒基础版本",
    supportedCapability: "定时休眠/事件唤醒",
    capabilityCode: "sleep_wake_basic",
    description: "支持低功耗设备休眠、事件唤醒与短时在线后上报平台。",
    status: "已停用",
    releaseDate: "",
    createdAt: "2026-05-18 15:20:00"
  }
];

const fieldStandards = [
  { field: "功能集名称", key: "name", required: "是", rule: "使用业务可理解名称，用于定义一个能力集合，不承载版本能力。", example: "网络类型功能集" },
  { field: "功能集编码", key: "code", required: "是", rule: "英文小写、数字、下划线，创建后原则上不可修改。", example: "network_type" },
  { field: "功能集说明", key: "description", required: "是", rule: "说明该功能集管理的能力集合和边界，不写版本枚举。", example: "定义不同网络接入类型的设备与平台端交互能力。" },
  { field: "版本号", key: "versionNo", required: "是", rule: "表达该功能集能力迭代版本，建议 V1.0、V2.0。", example: "V1.0" },
  { field: "版本名称", key: "versionName", required: "是", rule: "描述该版本支持的核心能力。", example: "仅 WiFi 设备交互版本" },
  { field: "支持能力", key: "supportedCapability", required: "是", rule: "描述该版本新增或支持的能力值。", example: "仅 WiFi" },
  { field: "能力编码", key: "capabilityCode", required: "是", rule: "能力值的稳定编码，不等同于版本号。", example: "wifi_only" },
  { field: "版本状态", key: "status", required: "是", rule: "只保留已启用、已停用两种状态，用于表达版本当前是否可被引用。", example: "已停用" }
];

let activePage = "featureSets";
let selectedFeatureSetId = "fs-network";
let keyword = "";
let category = "全部分类";
let status = "全部状态";

const $ = (selector) => document.querySelector(selector);
const els = {
  nav: $("#moduleNav"),
  title: $("#pageTitle"),
  search: $("#globalSearch"),
  category: $("#categoryFilter"),
  status: $("#statusFilter"),
  reset: $("#resetFilters"),
  content: $("#content"),
  commandStrip: $(".command-strip"),
  drawer: $("#detailDrawer"),
  drawerContent: $("#drawerContent"),
  drawerClose: $("#drawerClose"),
  drawerMask: $("#drawerMask"),
  exportButton: $("#exportButton"),
  reviewButton: $("#reviewButton")
};

function init() {
  renderNav();
  renderFilters();
  bindEvents();
  render();
}

function bindEvents() {
  els.search.addEventListener("input", (event) => {
    keyword = event.target.value.trim().toLowerCase();
    render();
  });

  els.category.addEventListener("change", (event) => {
    category = event.target.value;
    render();
  });

  els.status.addEventListener("change", (event) => {
    status = event.target.value;
    render();
  });

  els.reset.addEventListener("click", () => {
    keyword = "";
    category = "全部分类";
    status = "全部状态";
    els.search.value = "";
    els.category.value = category;
    els.status.value = status;
    render();
  });

  els.drawerClose.addEventListener("click", closeDrawer);
  els.drawerMask.addEventListener("click", closeDrawer);
  els.exportButton.addEventListener("click", () => showToast("已按当前筛选条件生成导出任务"));
  els.reviewButton.addEventListener("click", () => openVersionForm());

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

function renderFilters() {
  els.category.innerHTML = categoryOptions.map((item) => `<option>${item}</option>`).join("");
  els.status.innerHTML = statusOptions.map((item) => `<option>${item}</option>`).join("");
}

function render() {
  const page = navItems.find((item) => item.id === activePage);
  if (!page) {
    activePage = "featureSets";
    renderNav();
    render();
    return;
  }
  const isWorkbench = activePage === "featureSets";
  els.commandStrip.hidden = !isWorkbench;
  els.reviewButton.hidden = !isWorkbench;
  els.title.textContent = page.label;
  if (activePage === "featureSets") renderFeatureSets();
  if (activePage === "standards") renderStandards();
}

function renderFeatureSets() {
  const rows = featureSets
    .filter(matchesFeatureSet)
    .filter((item) => category === "全部分类" || item.category === category)
    .filter(matchesFeatureSetStatus);
  const currentSet = rows.find((item) => item.id === selectedFeatureSetId) || rows[0] || null;
  selectedFeatureSetId = currentSet?.id || "";
  const currentVersions = currentSet
    ? versions
        .filter((item) => item.featureSetId === currentSet.id)
        .filter(matches)
        .filter(matchesVersionStatus)
    : [];
  const allCurrentVersions = currentSet ? versions.filter((item) => item.featureSetId === currentSet.id) : [];
  const activeSetCount = featureSets.filter((item) => item.status === "启用").length;
  const disabledSetCount = featureSets.filter((item) => item.status === "已停用").length;
  const enabledVersionCount = versions.filter((item) => item.status === "已启用").length;
  const stoppedVersionCount = versions.filter((item) => item.status === "已停用").length;

  els.content.innerHTML = `
    ${summaryCards([
      ["功能集总数", featureSets.length, "已沉淀的能力集合"],
      ["已启用版本", enabledVersionCount, "当前可被业务引用的快照"],
      ["已停用版本", stoppedVersionCount, "停止引用或待启用的版本"],
      ["功能集启用/停用", `${activeSetCount}/${disabledSetCount}`, "当前可维护与已冻结集合"]
    ])}
    <section class="master-detail">
      <aside class="page-card master-pane">
        <div class="card-header compact-header">
          <div>
            <h3>功能集列表</h3>
            <p>先选能力集合，再在右侧维护它的版本。</p>
          </div>
          <button class="primary-action" type="button" data-action="create-set">新建功能集</button>
        </div>
        ${featureSetList(rows)}
      </aside>

      <article class="detail-pane">
        ${
          currentSet
            ? `
              ${selectedSetHeader(currentSet, allCurrentVersions)}
              <section class="page-card version-workbench">
                <div class="card-header">
                  <div>
                    <h3>${currentSet.name} · 版本迭代</h3>
                    <p>所有版本集中展示，可通过上方状态筛选查看已启用或已停用记录。</p>
                  </div>
                  <div class="button-row">
                    <span class="count-pill">${versionScopeText(currentVersions.length, allCurrentVersions.length)}</span>
                    <button class="ghost-action" type="button" data-action="import-versions">批量导入版本</button>
                    <button class="primary-action" type="button" data-action="create-version">新增版本</button>
                  </div>
                </div>
                ${versionTable(currentVersions)}
              </section>
            `
            : `<section class="page-card empty-detail-card">${emptyState("未选择功能集", "当前筛选条件下暂无功能集，请重置筛选或先新增功能集。")}</section>`
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
          <p>先把对象边界说清楚，再做增删改查。功能集描述能力边界，版本记录每次能力承诺。</p>
        </div>
      </div>
      <div class="principle-grid">
        ${principle("先建功能集", "功能集只回答“这一类能力是什么”，不要把具体版本能力写进功能集说明。")}
        ${principle("版本集中管理", "同一功能集下的版本放在一张表中维护，通过状态筛选定位记录，避免来回切换。")}
        ${principle("启停表达可用性", "版本状态只回答“当前是否可用”，已启用用于业务引用，已停用用于沉淀历史或待启用。")}
      </div>
      ${standardsTable()}
    </section>
  `;
}

function featureSetList(rows) {
  if (!rows.length) return emptyState("暂无功能集", "点击新增功能集，先定义能力集合。");
  return `
    <div class="set-list">
      ${rows
        .map(
          (item) => `
            <button class="set-list-item ${item.id === selectedFeatureSetId ? "active" : ""}" type="button" data-action="select-set" data-id="${item.id}">
              <span class="set-list-head">
                <span class="set-list-title">${item.name}</span>
                <span class="set-list-action">${item.id === selectedFeatureSetId ? "当前查看" : "查看版本"}</span>
              </span>
              <span class="set-list-code">${item.code}</span>
              <span class="set-list-desc">${item.description}</span>
              <span class="set-list-meta">
                ${statusTag(item.status)}
                <em>${item.versionCount} 个版本</em>
                <em>最新 ${item.latestVersion}</em>
              </span>
            </button>
          `
        )
        .join("")}
    </div>
  `;
}

function selectedSetHeader(item, setVersions = []) {
  const enabledCount = setVersions.filter((version) => version.status === "已启用").length;
  const disabledCount = setVersions.filter((version) => version.status === "已停用").length;
  return `
    <section class="page-card selected-set-card">
      <div class="context-main">
        <span class="context-label">当前功能集</span>
        <div class="set-title-row">
          <strong>${item.name}</strong>
          ${statusTag(item.status)}
        </div>
        <p>${item.description}</p>
        <div class="set-info-grid" aria-label="功能集基础信息">
          ${infoItem("功能集编码", `<code>${item.code}</code>`)}
          ${infoItem("功能分类", item.category)}
          ${infoItem("创建人", item.createdBy || "-")}
          ${infoItem("负责人", item.owner)}
          ${infoItem("创建时间", item.createdAt)}
          ${infoItem("更新时间", item.updatedAt || item.createdAt)}
          ${infoItem("最新版本", item.latestVersion)}
          ${infoItem("版本分布", `已启用 ${enabledCount} / 已停用 ${disabledCount}`)}
        </div>
      </div>
      <div class="context-actions">
        <button class="chip-button" type="button" data-action="edit-set" data-id="${item.id}">编辑功能集</button>
        <button class="chip-button" type="button" data-action="toggle-set" data-id="${item.id}">${item.status === "已停用" ? "启用功能集" : "停用功能集"}</button>
        <button class="danger-outline" type="button" data-action="delete-set" data-id="${item.id}">删除空功能集</button>
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
  if (!rows.length) return emptyState("暂无版本", "点击新增版本，创建该功能集的首个能力迭代。");
  return `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>版本</th>
            <th>支持能力</th>
            <th>能力编码</th>
            <th>状态</th>
            <th>版本说明</th>
            <th>启用日期</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          ${rows
            .map(
              (item) => `
                <tr>
                  <td class="main-cell">
                    <strong>${item.versionNo} · ${item.versionName}</strong>
                    <span>创建于 ${item.createdAt}</span>
                  </td>
                  <td>${item.supportedCapability}</td>
                  <td>
                    <code>${item.capabilityCode}</code>
                  </td>
                  <td>${statusTag(item.status)}</td>
                  <td>${item.description}</td>
                  <td>${item.releaseDate || "-"}</td>
                  <td class="actions">
                    ${versionActions(item)}
                  </td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function versionActions(item) {
  if (item.status === "已启用") {
    return [
      `<button type="button" data-action="view-version" data-id="${item.id}">查看</button>`,
      `<button type="button" data-action="clone-version" data-id="${item.id}">复制并新建</button>`,
      `<button type="button" data-action="disable-version" data-id="${item.id}">停用</button>`
    ].join("");
  }
  return [
    `<button type="button" data-action="edit-version" data-id="${item.id}">编辑</button>`,
    `<button type="button" data-action="reenable-version" data-id="${item.id}">启用</button>`,
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

function summaryCards(items) {
  return `
    <section class="summary-grid">
      ${items
        .map(
          ([label, value, desc]) => `
          <article class="summary-card">
            <span>${label}</span>
            <strong>${value}</strong>
            <p>${desc}</p>
          </article>
        `
        )
        .join("")}
    </section>
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
  if (action === "create-set") openFeatureSetForm();
  if (action === "edit-set") openFeatureSetForm(featureSets.find((item) => item.id === id));
  if (action === "toggle-set") toggleFeatureSetStatus(id);
  if (action === "delete-set") deleteFeatureSet(id);
  if (action === "import-sets") showToast("请按模板导入：功能集名称、编码、分类、说明、负责人");
  if (action === "import-versions") showToast("请按模板导入：所属功能集、版本号、版本名称、支持能力、能力编码、状态");
  if (action === "create-version") openVersionForm();
  if (action === "edit-version") openVersionForm(versions.find((item) => item.id === id));
  if (action === "view-version") openVersionForm(versions.find((item) => item.id === id), true);
  if (action === "clone-version") cloneVersion(id);
  if (action === "delete-version") deleteVersion(id);
  if (action === "disable-version") updateVersionStatus(id, "已停用");
  if (action === "reenable-version") updateVersionStatus(id, "已启用", true);
  if (action === "save-set") saveFeatureSet(id);
  if (action === "save-version") saveVersion(id);
}

function openFeatureSetForm(item = {}) {
  const title = item.id ? "编辑功能集" : "新增功能集";
  openDrawer(`
    <div class="drawer-title-block">
      <h3>${title}</h3>
      <p>功能集用于定义一类稳定能力边界，例如“网络类型功能集”。具体支持 WiFi、4G 或有线网络，请放到版本中维护。</p>
    </div>
    <form class="form-grid" id="featureSetForm">
      ${formInput("功能集名称", "name", item.name || "", "例如：网络类型功能集", true)}
      ${formInput("功能集编码", "code", item.code || "", "例如：network_type", true)}
      ${formSelect("分类", "category", categoryOptions.filter((option) => option !== "全部分类"), item.category || "网络连接")}
      ${formInput("负责人", "owner", item.owner || "", "例如：产品-设备接入")}
      ${formInput("创建人", "createdBy", item.createdBy || "", "例如：张琳")}
      ${formSelect("状态", "status", setStatusOptions, item.status || "启用")}
      ${formTextarea("功能集说明", "description", item.description || "", "说明该功能集管理的能力集合和边界", true)}
      <div class="form-help form-wide">填写建议：功能集写“这类能力的管理范围”，版本写“这一版支持哪些具体能力”。这样后续查找和追溯才不会混乱。</div>
      <div class="drawer-actions">
        <button class="ghost-action" type="button" onclick="closeDrawer()">取消</button>
        <button class="primary-action" type="button" data-action="save-set" data-id="${item.id || ""}">保存功能集</button>
      </div>
    </form>
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
    <div class="drawer-title-block">
      <h3>${title}</h3>
      <p>${readOnly ? "查看当前版本定义。" : "填写本次迭代支持的能力范围，保存后可在版本列表中维护启停状态。"}</p>
    </div>
    <form class="form-grid ${readOnly ? "readonly-form" : ""}" id="versionForm">
      ${formSelect("所属功能集", "featureSetId", featureSets.map((set) => ({ value: set.id, label: set.name })), currentSet.id, readOnly)}
      ${formInput("版本号", "versionNo", item.versionNo || nextVersionNo(currentSet.id), "例如：V1.0", true, readOnly)}
      ${formInput("版本名称", "versionName", item.versionName || "", "例如：仅 WiFi 设备交互版本", true, readOnly)}
      ${formInput("支持能力", "supportedCapability", item.supportedCapability || "", "例如：仅 WiFi", true, readOnly)}
      ${formInput("能力编码", "capabilityCode", item.capabilityCode || "", "例如：wifi_only", true, readOnly)}
      ${formSelect("状态", "status", versionStatusOptions, item.status || "已停用", readOnly)}
      ${formInput("启用日期", "releaseDate", item.releaseDate || "", "例如：2026-06-30", false, readOnly)}
      ${formTextarea("版本说明", "description", item.description || "", "说明该版本支持什么设备类型以及如何与平台交互", true, readOnly)}
      <div class="form-help form-wide">填写建议：版本号表达迭代顺序，能力编码用于稳定识别能力，版本说明写清楚该版本支持的设备类型与交互边界。</div>
      <div class="drawer-actions">
        <button class="ghost-action" type="button" onclick="closeDrawer()">${readOnly ? "关闭" : "取消"}</button>
        ${readOnly ? "" : `<button class="primary-action" type="button" data-action="save-version" data-id="${item.id || ""}">保存版本</button>`}
      </div>
    </form>
  `);
}

function saveFeatureSet(id) {
  const form = $("#featureSetForm");
  const data = Object.fromEntries(new FormData(form).entries());
  if (!data.name || !data.code || !data.description) {
    showToast("功能集名称、编码、说明为必填项", "error");
    return;
  }

  if (id) {
    featureSets = featureSets.map((item) => (item.id === id ? { ...item, ...data, updatedAt: nowText() } : item));
    showToast("功能集已更新");
  } else {
    const newId = `fs-${Date.now()}`;
    featureSets.unshift({
      id: newId,
      ...data,
      versionCount: 0,
      latestVersion: "-",
      createdAt: nowText(),
      updatedAt: nowText()
    });
    selectedFeatureSetId = newId;
    showToast("功能集已创建");
  }
  closeDrawer();
  render();
}

function saveVersion(id) {
  const form = $("#versionForm");
  const data = Object.fromEntries(new FormData(form).entries());
  if (!data.featureSetId || !data.versionNo || !data.versionName || !data.supportedCapability || !data.capabilityCode || !data.description) {
    showToast("请补全版本号、版本名称、支持能力、能力编码和版本说明", "error");
    return;
  }

  if (id) {
    versions = versions.map((item) => (item.id === id ? { ...item, ...data } : item));
    showToast("版本已更新");
  } else {
    versions.unshift({
      id: `v-${Date.now()}`,
      ...data,
      status: "已停用",
      createdAt: nowText()
    });
    showToast("版本已创建，默认已停用");
  }
  refreshSetStats();
  selectedFeatureSetId = data.featureSetId;
  activePage = "featureSets";
  closeDrawer();
  renderNav();
  render();
}

function deleteFeatureSet(id) {
  const hasVersions = versions.some((item) => item.featureSetId === id);
  if (hasVersions) {
    showToast("该功能集下已有版本，建议设置为已停用", "error");
    return;
  }
  if (!window.confirm("确认删除该空功能集吗？删除后无法在当前页面恢复。")) return;
  featureSets = featureSets.filter((item) => item.id !== id);
  showToast("功能集已删除");
  render();
}

function toggleFeatureSetStatus(id) {
  const target = featureSets.find((item) => item.id === id);
  if (!target) return;
  const nextStatus = target.status === "已停用" ? "启用" : "已停用";
  featureSets = featureSets.map((item) =>
    item.id === id
      ? {
          ...item,
          status: nextStatus,
          updatedAt: nowText()
        }
      : item
  );
  showToast(`功能集已${nextStatus === "已停用" ? "停用" : "启用"}`);
  render();
}

function deleteVersion(id) {
  const target = versions.find((item) => item.id === id);
  if (!target) return;
  if (target.status === "已启用") {
    showToast("已启用版本请先停用后再删除", "error");
    return;
  }
  if (!window.confirm(`确认删除 ${target.versionNo} 吗？删除后无法在当前页面恢复。`)) return;
  versions = versions.filter((item) => item.id !== id);
  refreshSetStats();
  showToast("版本已删除");
  render();
}

function cloneVersion(id) {
  const source = versions.find((item) => item.id === id);
  if (!source) return;
  openVersionForm({
    ...source,
    id: "",
    versionNo: nextVersionNo(source.featureSetId),
    versionName: `${source.versionName} 复制版本`,
    status: "已停用",
    releaseDate: ""
  });
}

function updateVersionStatus(id, nextStatus, fillDate = false) {
  const target = versions.find((item) => item.id === id);
  if (!target) return;
  if (target.status === "已停用" && nextStatus === "已启用" && !window.confirm(`确认启用 ${target.versionNo} 吗？启用后该版本将可被业务引用。`)) return;
  if (target.status === "已启用" && nextStatus === "已停用" && !window.confirm(`确认停用 ${target.versionNo} 吗？停用后不再用于新引用。`)) return;
  versions = versions.map((item) =>
    item.id === id
      ? {
          ...item,
          status: nextStatus,
          releaseDate: fillDate && !item.releaseDate ? todayText() : item.releaseDate
        }
      : item
  );
  refreshSetStats();
  showToast(`版本已${nextStatus === "已启用" ? "启用" : nextStatus === "已停用" ? "停用" : "更新"}`);
  render();
}

function refreshSetStats() {
  featureSets = featureSets.map((set) => {
    const setVersions = versions.filter((version) => version.featureSetId === set.id);
    return {
      ...set,
      versionCount: setVersions.length,
      latestVersion: latestVersionNo(setVersions)
    };
  });
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
        ${options
          .map((option) => {
            const normalized = typeof option === "string" ? { value: option, label: option } : option;
            return `<option value="${normalized.value}" ${normalized.value === value ? "selected" : ""}>${normalized.label}</option>`;
          })
          .join("")}
      </select>
    </label>
  `;
}

function statusTag(value) {
  const typeMap = {
    启用: "success",
    已启用: "success",
    已停用: "default"
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

function matches(item) {
  if (!keyword) return true;
  return JSON.stringify(item).toLowerCase().includes(keyword);
}

function matchesFeatureSet(item) {
  if (!keyword) return true;
  const hitSet = matches(item);
  const hitVersion = versions.some((version) => version.featureSetId === item.id && matches(version));
  return hitSet || hitVersion;
}

function matchesFeatureSetStatus(item) {
  if (status === "全部状态") return true;
  const hitSetStatus = setStatusOptions.includes(status) && item.status === status;
  const hitVersionStatus = versionStatusOptions.includes(status) && versions.some((version) => version.featureSetId === item.id && version.status === status);
  return hitSetStatus || hitVersionStatus;
}

function matchesVersionStatus(item) {
  if (status === "全部状态") return true;
  if (!versionStatusOptions.includes(status)) return true;
  return item.status === status;
}

function versionScopeText(currentCount, totalCount) {
  if (versionStatusOptions.includes(status)) return `${status} ${currentCount}/${totalCount} 个`;
  return `${totalCount} 个版本`;
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
}

init();
