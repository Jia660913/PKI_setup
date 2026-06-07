const rootCa = {
  id: "root-ca",
  name: "演示根 CA",
  level: "根 CA",
  status: "运行中",
  source: "前端演示环境",
  productionMapping: "未来对接供应商后端密码机 / HSM",
  subject: "CN=演示根 CA, O=ZF, OU=车辆网络安全 PKI, C=CN",
  algorithm: "ECDSA P-256 / SHA256withECDSA",
  validity: "2026-06-01 至 2036-06-01",
  basicConstraints: "CA=TRUE, pathLen=2",
  keyUsage: "keyCertSign, cRLSign",
  children: [],
  templates: [],
  issuedCertificates: [],
};

const x509Options = {
  caTypes: ["二级 CA", "签发 CA", "交叉认证 CA", "离线 Root CA"],
  certTypes: ["User Cert", "Device Cert", "Server TLS Cert", "Client TLS Cert", "Code Signing Cert", "Sub CA Cert", "OCSP Responder Cert"],
  versions: ["v3", "v2", "v1"],
  serialNumberRules: ["系统自动生成（128-bit 随机）", "HSM 生成", "按 CA 序列递增", "手动输入十六进制"],
  signatureAlgorithms: [
    "SHA256withECDSA",
    "SHA384withECDSA",
    "SHA512withECDSA",
    "SHA256withRSA",
    "SHA384withRSA",
    "SHA512withRSA",
    "RSASSA-PSS-SHA256",
    "RSASSA-PSS-SHA384",
    "Ed25519",
    "Ed448",
    "SM2withSM3",
  ],
  publicKeyAlgorithms: ["EC P-256", "EC P-384", "EC P-521", "RSA 2048", "RSA 3072", "RSA 4096", "Ed25519", "SM2"],
  issuerSources: ["绑定 CA 自动生成", "父级 CA 自动生成", "手动选择签发 CA", "导入外部 Issuer DN"],
  validityRules: ["365 天", "825 天", "5 年", "10 年", "固定起止日期", "自定义输入"],
  subjectDnSources: ["从 CSR 读取", "模板固定", "用户输入", "CSR + 模板补全", "手动填写 DN"],
  spkiSources: ["从 CSR 读取", "系统生成密钥对", "HSM 生成公钥", "后端返回", "手动导入公钥"],
  subjectKeyIdentifier: ["自动生成（hash SPKI）", "从 CSR 读取", "手动输入十六进制", "不填写"],
  authorityKeyIdentifier: ["由签发 CA 生成", "从父级 CA 读取 keyIdentifier", "复制 Issuer + Serial", "手动输入", "不填写"],
  basicConstraints: ["CA=FALSE", "CA=TRUE, pathLen=0", "CA=TRUE, pathLen=1", "CA=TRUE, pathLen=2", "CA=TRUE, pathLen 不限制", "自定义输入"],
  caBasicConstraints: ["CA=TRUE, pathLen=0", "CA=TRUE, pathLen=1", "CA=TRUE, pathLen=2", "CA=TRUE, pathLen 不限制", "自定义输入"],
  keyUsage: [
    "digitalSignature",
    "nonRepudiation / contentCommitment",
    "keyEncipherment",
    "dataEncipherment",
    "keyAgreement",
    "keyCertSign",
    "cRLSign",
    "encipherOnly",
    "decipherOnly",
    "digitalSignature, keyEncipherment",
    "keyCertSign, cRLSign",
    "自定义组合",
  ],
  extendedKeyUsage: [
    "serverAuth",
    "clientAuth",
    "codeSigning",
    "emailProtection",
    "timeStamping",
    "OCSPSigning",
    "ipsecIKE",
    "msSmartcardLogon",
    "anyExtendedKeyUsage",
    "自定义 EKU OID",
  ],
  subjectAltName: ["从 CSR 读取", "DNS Name", "IP Address", "URI", "RFC822 Email", "DirectoryName", "OtherName OID", "不填写"],
  issuerAltName: ["从签发 CA 读取", "DirectoryName", "DNS Name", "URI", "RFC822 Email", "不填写"],
  crlDistributionPoints: ["系统默认 HTTP URL", "自定义 HTTP URL", "自定义 LDAP URL", "多地址", "不填写"],
  authorityInfoAccess: ["系统默认 OCSP + CA Issuers", "仅 OCSP", "仅 CA Issuers", "自定义 OCSP 和 CA Issuers 地址", "不填写"],
  subjectInfoAccess: ["自定义 CA Repository", "自定义 Time Stamping", "自定义 OID", "不填写"],
  certificatePolicies: ["默认策略 OID", "自定义策略 OID", "CPS URI", "User Notice", "不填写"],
  policyMappings: ["不填写", "IssuerDomainPolicy -> SubjectDomainPolicy", "自定义 OID 映射"],
  nameConstraints: ["不填写", "Permitted DNS", "Excluded DNS", "Permitted IP", "Excluded IP", "Permitted RFC822", "Excluded URI", "自定义约束"],
  policyConstraints: ["不填写", "Require Explicit Policy", "Inhibit Policy Mapping", "两者同时配置"],
  inhibitAnyPolicy: ["不填写", "0", "1", "2", "自定义 Skip Certs"],
  freshestCrl: ["不填写", "系统默认 Delta CRL", "自定义 Delta CRL 地址"],
  tlsFeature: ["不填写", "status_request", "status_request_v2"],
  ocspNoCheck: ["不填写", "启用 OCSP No Check"],
  uniqueId: ["不填写", "从 CSR 读取", "手动输入 BitString"],
  asn1Types: ["UTF8String", "PrintableString", "IA5String", "BMPString", "VisibleString", "GeneralizedTime", "UTCTime", "OctetString", "BitString", "Boolean", "Integer", "ObjectIdentifier", "Sequence", "Set"],
  stringFormats: ["String", "Hex", "Base64", "Decimal", "Boolean", "OID", "DN", "URI", "DNS", "Email", "IPv4 / IPv6", "DER Hex"],
  extensionCriticality: ["Non-critical", "Critical"],
  fieldRequirement: ["Optional", "Mandatory"],
  fieldSource: ["模板固定", "用户输入", "系统生成", "CSR 扩展", "后端计算", "HSM 返回", "不填写"],
  templateStatus: ["草稿", "待审批", "已发布", "已停用"],
  certificateStates: ["全部状态", "待签发", "有效", "即将过期", "已过期", "已吊销", "已暂停"],
};

const fieldLabels = {
  "父级 CA": ["父级证书机构", "Parent CA"],
  "CA 类型": ["证书机构类型", "CA Type"],
  Version: ["版本", "Version"],
  "Serial Number Rule": ["序列号规则", "Serial Number Rule"],
  "CA 名称": ["证书机构名称", "CA Name"],
  "CA 级别": ["证书机构级别", "CA Level"],
  状态: ["状态", "Status"],
  来源: ["来源", "Source"],
  算法: ["算法", "Algorithm"],
  有效期: ["有效期", "Validity"],
  后续映射: ["后续映射", "Backend Mapping"],
  "Subject DN": ["主体名称规则", "Subject DN"],
  "Subject DN 规则": ["主体名称校验规则", "Subject DN Rule"],
  "签名算法": ["签名算法", "Signature Algorithm"],
  "Signature Algorithm": ["签名算法", "Signature Algorithm"],
  "Public Key Algorithm": ["公钥算法", "Public Key Algorithm"],
  "Key Length / Curve": ["密钥长度或曲线", "Key Length / Curve"],
  "公钥算法 / 曲线": ["公钥算法或曲线", "Public Key Algorithm / Curve"],
  Issuer: ["签发者", "Issuer"],
  "有效期": ["有效期", "Validity"],
  Validity: ["有效期", "Validity"],
  "Basic Constraints": ["基础约束", "Basic Constraints"],
  "Key Usage": ["密钥用途", "Key Usage"],
  "Key Usage 规则": ["密钥用途规则", "Key Usage Rule"],
  "Extended Key Usage": ["扩展密钥用途", "Extended Key Usage"],
  "Extended Key Usage 规则": ["扩展密钥用途规则", "Extended Key Usage Rule"],
  "Subject Public Key Info": ["主体公钥信息", "Subject Public Key Info"],
  "Subject Key Identifier": ["主体密钥标识", "Subject Key Identifier"],
  "Authority Key Identifier": ["签发者密钥标识", "Authority Key Identifier"],
  "Subject Alternative Name": ["主体备用名称", "Subject Alternative Name"],
  "Subject Alternative Name 规则": ["主体备用名称规则", "Subject Alternative Name Rule"],
  "Issuer Alternative Name": ["签发者备用名称", "Issuer Alternative Name"],
  "CRL Distribution Point": ["吊销列表发布点", "CRL Distribution Point"],
  "Authority Information Access": ["签发者信息访问", "Authority Information Access"],
  "Subject Information Access": ["主体信息访问", "Subject Information Access"],
  "Certificate Policies": ["证书策略", "Certificate Policies"],
  "Policy Mappings": ["策略映射", "Policy Mappings"],
  "Policy Constraints": ["策略约束", "Policy Constraints"],
  "Name Constraints": ["名称约束", "Name Constraints"],
  "Inhibit anyPolicy": ["禁止任意策略", "Inhibit anyPolicy"],
  "Freshest CRL": ["增量吊销列表", "Freshest CRL"],
  "TLS Feature": ["传输层安全特性", "TLS Feature"],
  "OCSP No Check": ["在线状态免检", "OCSP No Check"],
  "Issuer Unique ID": ["签发者唯一标识", "Issuer Unique ID"],
  "Subject Unique ID": ["主体唯一标识", "Subject Unique ID"],
  "证书类型": ["证书类型", "Certificate Type"],
  "绑定 CA": ["绑定签发机构", "Bound CA"],
  "模板名称": ["模板名称", "Template Name"],
  "模板版本": ["模板版本", "Template Version"],
  "模板状态": ["模板状态", "Template Status"],
  "证书有效期规则": ["证书有效期规则", "Validity Rule"],
  "模板说明": ["模板说明", "Template Description"],
  "默认下载格式": ["默认下载格式", "Default Download Format"],
  "字段名称": ["字段名称", "Field Name"],
  OID: ["对象标识符", "Object Identifier"],
  "ASN.1 类型": ["编码类型", "ASN.1 Type"],
  "字符串格式": ["字符串格式", "String Format"],
  "是否关键": ["是否关键扩展", "Criticality"],
  "是否必填": ["是否必填", "Requirement"],
  "字段来源": ["字段来源", "Field Source"],
  "扩展字段值": ["扩展字段值", "Extension Value"],
  "校验规则": ["校验规则", "Validation Rule"],
  "CSR 扩展处理": ["证书请求扩展处理", "CSR Extension Handling"],
  "不匹配提示": ["不匹配提示", "Mismatch Message"],
  "签发 CA": ["签发证书机构", "Issuing CA"],
  "证书模板": ["证书模板", "Certificate Template"],
  "证书状态": ["证书状态", "Certificate Status"],
  "用户 / 序列号": ["用户或序列号", "User / Serial Number"],
  "文件名 / 指纹": ["文件名或密钥指纹", "Filename / Fingerprint"],
  "有效期起止": ["有效期范围", "Validity Range"],
  "证书序列号": ["证书序列号", "Certificate Serial Number"],
  Subject: ["主体", "Subject"],
  "模板版本": ["模板版本", "Template Version"],
  "下载格式": ["下载格式", "Download Format"],
  "来源 CSR": ["来源证书请求", "Source CSR"],
  "申请用户": ["申请用户", "Applicant"],
  "审批记录": ["审批记录", "Approval Record"],
  "吊销状态": ["吊销状态", "Revocation Status"],
  "审批意见": ["审批意见", "Approval Comment"],
  "根 CA": ["根证书机构", "Root CA"],
  "HSM / 密码机": ["硬件安全模块", "HSM"],
  "用户申请方式": ["用户申请方式", "User Request Mode"],
  "界面语言": ["界面语言", "Interface Language"],
  "可申请证书模板": ["可申请证书模板", "Available Template"],
  "CSR 文件": ["证书请求文件", "CSR File"],
  "申请说明": ["申请说明", "Request Note"],
  "CSR 原文": ["证书请求原文", "CSR Raw Text"],
  "创建说明": ["创建说明", "Creation Note"],
  "CSR Subject / CN": ["证书请求主体", "CSR Subject / CN"],
  "模板校验结果": ["模板校验结果", "Template Validation Result"],
};

const navItems = [
  ["home", "总览", "▦"],
  ["approval", "证书审批", "✓"],
  ["certificates", "证书管理", "◧"],
  ["ca", "CA 管理", "◎"],
  ["templates", "证书模板", "◇"],
  ["audit", "审计日志", "≡"],
  ["settings", "系统设置", "⚙"],
];

const standalonePages = ["ca-detail", "ca-create", "certificate-detail", "template-create", "csr-detail"];
const pageParents = {
  "ca-detail": "ca",
  "ca-create": "ca",
  "certificate-detail": "certificates",
  "template-create": "templates",
  "csr-detail": "approval",
};

const initialPage = window.location.hash ? window.location.hash.replace("#", "") : "home";
const validPages = [...navItems.map(([id]) => id), ...standalonePages];
const query = new URLSearchParams(window.location.search);
const urlLanguage = query.get("lang");
const storedLanguage = window.localStorage.getItem("certificate-portal-language");
const initialLanguage = urlLanguage === "en" || urlLanguage === "zh" ? urlLanguage : storedLanguage === "en" ? "en" : "zh";
const sessionKey = "certificate-portal-session";
const loginAccounts = {
  CyberTeam1: {
    password: "123123",
    role: "cyber",
    roleZh: "PKI Manager",
    roleEn: "PKI Manager",
  },
  User1: {
    password: "321321",
    role: "engineer",
    roleZh: "PKI User",
    roleEn: "PKI User",
  },
};

function readStoredSession() {
  try {
    const stored = JSON.parse(window.sessionStorage.getItem(sessionKey) || "null");
    if (!stored || !loginAccounts[stored.account]) return null;
    return {
      account: stored.account,
      role: loginAccounts[stored.account].role,
    };
  } catch (error) {
    window.sessionStorage.removeItem(sessionKey);
    return null;
  }
}

const storedSession = readStoredSession();

let state = {
  authenticated: Boolean(storedSession),
  account: storedSession?.account || "",
  role: storedSession?.role || "cyber",
  language: initialLanguage,
  activePage: validPages.includes(initialPage) ? initialPage : "home",
  selectedCaId: rootCa.id,
  auditLogs: [["系统", "加载演示根 CA", rootCa.name, "完成"]],
};

if (!state.authenticated || state.role === "engineer") {
  state.activePage = "home";
  if (state.authenticated && window.location.hash !== "#home") {
    window.location.hash = "home";
  }
}

const appShell = document.querySelector("#appShell");
const loginScreen = document.querySelector("#loginScreen");
const loginForm = document.querySelector("#loginForm");
const loginAccount = document.querySelector("#loginAccount");
const loginPassword = document.querySelector("#loginPassword");
const loginRoleSelect = document.querySelector("#loginRoleSelect");
const loginError = document.querySelector("#loginError");
const view = document.querySelector("#view");
const navList = document.querySelector("#navList");
const pageTitle = document.querySelector("#pageTitle");
const roleBadge = document.querySelector("#roleBadge");
const logoutButton = document.querySelector("#logoutButton");
const globalSearch = document.querySelector("#globalSearch");
const languageSwitcher = document.querySelector("#languageSwitcher");
const loginLanguageSwitcher = document.querySelector("#loginLanguageSwitcher");
const toast = document.querySelector("#toast");
const modal = document.querySelector("#confirmModal");
const modalTitle = document.querySelector("#modalTitle");
const modalBody = document.querySelector("#modalBody");
const modalCancel = document.querySelector("#modalCancel");
const modalConfirm = document.querySelector("#modalConfirm");

const zhToEn = {
  "公钥基础设施": "Public Key Infrastructure",
  "证书管理平台": "Certificate Management Platform",
  "主导航": "Primary Navigation",
  "总览": "Overview",
  "演示根 CA": "Demo Root CA",
  "根 CA": "Root CA",
  "运行中": "Running",
  "前端演示环境": "Frontend demo environment",
  "未来对接供应商后端密码机 / HSM": "Future integration with backend HSM",
  "CN=演示根 CA, O=ZF, OU=车辆网络安全 PKI, C=CN": "CN=Demo Root CA, O=ZF, OU=Vehicle Cybersecurity PKI, C=CN",
  "2026-06-01 至 2036-06-01": "2026-06-01 to 2036-06-01",
  "搜索 CA、证书、CSR、序列号": "Search CA, certificates, CSR, serial numbers",
  "当前角色": "Current Role",
  "网络安全团队": "Cybersecurity Team",
  "普通工程师": "Engineer",
  "操作二次确认": "Secondary Confirmation",
  "确认操作": "Confirm Action",
  "该操作将写入审计日志。": "This action will be recorded in the audit log.",
  "取消": "Cancel",
  "确认": "Confirm",
  "证书安全平台总览": "Certificate Security Overview",
  "用户证书申请": "Certificate Request",
  "证书审批": "Certificate Approval",
  "证书管理": "Certificate Management",
  "CA 管理": "CA Management",
  "CA 信息查看": "CA Details",
  "创建下级 CA": "Create Subordinate CA",
  "证书模板": "Certificate Templates",
  "创建证书模板": "Create Certificate Template",
  "审计日志": "Audit Logs",
  "系统设置": "System Settings",
  "证书详情": "Certificate Details",
  "CSR 审批详情": "CSR Approval Details",
  "按 CA、模板、CSR、证书和审计对象查看当前前端演示环境状态。": "View the current frontend demo environment by CA, template, CSR, certificate, and audit object.",
  "进入 CA 管理": "Open CA Management",
  "查看证书审批": "View Certificate Approval",
  "平台对象状态": "Platform Object Status",
  "演示环境当前数据": "Current Demo Data",
  "前端内置演示 Root CA": "Built-in frontend demo Root CA",
  "对象": "Object",
  "对象类型": "Object Type",
  "数量": "Count",
  "当前状态": "Current Status",
  "说明": "Description",
  "下级 CA": "Subordinate CA",
  "暂无数据": "No data",
  "创建后挂载到 Root CA": "Attached to Root CA after creation",
  "待配置": "Pending Configuration",
  "发布后可供用户申请": "Available for user requests after publication",
  "待审批 CSR": "Pending CSRs",
  "暂无待办": "No pending tasks",
  "用户提交后进入审批队列": "Enters approval queue after user submission",
  "已签发证书": "Issued Certificates",
  "暂无证书": "No certificates",
  "审批并手动签发后显示": "Shown after approval and manual issuance",
  "模块清单": "Module List",
  "按业务顺序进入各模块": "Open modules in business order",
  "模块": "Module",
  "主要内容": "Main Content",
  "当前状态": "Current Status",
  "入口": "Entry",
  "CA 树、CA 字段、挂载关系、高风险操作": "CA tree, CA fields, mount relations, high-risk operations",
  "Root CA 已加载": "Root CA loaded",
  "X.509 字段、自定义 OID、CSR 校验规则": "X.509 fields, custom OIDs, CSR validation rules",
  "配置模板": "Configure Template",
  "CSR 解析、模板校验、审批意见、手动签发": "CSR parsing, template validation, approval comments, manual issuance",
  "暂无待审批 CSR": "No pending CSRs",
  "查看审批": "View Approval",
  "证书查询、详情、下载、吊销、审计记录": "Certificate search, details, download, revocation, audit records",
  "暂无已签发证书": "No issued certificates",
  "查看证书": "View Certificates",
  "生命周期": "Lifecycle",
  "所有关键动作必须进入审计日志": "All key actions must be recorded in audit logs",
  "步骤": "Step",
  "动作": "Action",
  "执行角色": "Acting Role",
  "审计要求": "Audit Requirement",
  "提交 CSR": "Submit CSR",
  "普通用户": "User",
  "记录 CSR 提交": "Record CSR submission",
  "解析与校验": "Parse and Validate",
  "系统": "System",
  "记录解析和校验结果": "Record parsing and validation results",
  "审批 CSR": "Approve CSR",
  "记录审批意见": "Record approval comments",
  "手动签发": "Manual Issuance",
  "记录签发动作": "Record issuance action",
  "下载 / 吊销": "Download / Revoke",
  "用户 / 网络安全团队": "User / Cybersecurity Team",
  "记录下载和吊销": "Record download and revocation",
  "按 CA 树、证书字段、挂载关系和高风险操作顺序查看当前 CA。": "Review the current CA by CA tree, certificate fields, mount relations, and high-risk operations.",
  "查看 CA 表单": "View CA Form",
  "CA 树": "CA Tree",
  "暂无下级 CA": "No subordinate CAs",
  "CA 列表": "CA List",
  "点击查看后进入独立 CA 信息表单": "Click View to open the standalone CA information form",
  "CA 名称": "CA Name",
  "级别": "Level",
  "状态": "Status",
  "来源": "Source",
  "操作": "Operation",
  "查看表单": "View Form",
  "CA 操作台": "CA Console",
  "高风险操作需要二次确认并写入审计日志": "High-risk operations require secondary confirmation and audit logging",
  "创建": "Create",
  "更新 CA 信息": "Update CA Information",
  "更新": "Update",
  "续期 CA": "Renew CA",
  "续期": "Renew",
  "吊销 CA": "Revoke CA",
  "吊销": "Revoke",
  "归档 CA": "Archive CA",
  "归档": "Archive",
  "下载证书链": "Download Certificate Chain",
  "下载": "Download",
  "挂载信息": "Mount Information",
  "查看该 CA 下级 CA、证书模板和签发记录": "View subordinate CAs, certificate templates, and issuance records under this CA",
  "后续动作": "Next Action",
  "暂无绑定模板": "No bound templates",
  "模板发布后可绑定": "Can be bound after template publication",
  "证书需要由用户提交 CSR，经审批后由网络安全团队手动签发。当前暂无已签发证书。": "Certificates require user-submitted CSRs and manual issuance by the cybersecurity team after approval. No certificates have been issued yet.",
  "配置证书模板": "Configure Certificate Templates",
  "证书查询条件": "Certificate Search Criteria",
  "按 CA、模板、状态、用户和有效期筛选证书": "Filter certificates by CA, template, status, user, and validity period",
  "全部 CA": "All CAs",
  "暂无签发 CA": "No issuing CAs",
  "全部模板": "All Templates",
  "暂无已发布模板": "No published templates",
  "输入用户、CN 或证书序列号": "Enter user, CN, or certificate serial number",
  "选择证书有效期范围": "Select certificate validity range",
  "文件名、SHA-256 或 Key ID": "Filename, SHA-256, or Key ID",
  "查询证书": "Search Certificates",
  "重置证书筛选": "Reset Filters",
  "证书列表": "Certificate List",
  "导出列表": "Export List",
  "证书 CN": "Certificate CN",
  "绑定 CA": "Bound CA",
  "等待 CSR 审批签发": "Waiting for CSR approval and issuance",
  "签发后显示": "Shown after issuance",
  "暂无": "None",
  "证书生命周期状态": "Certificate Lifecycle Status",
  "签发后的状态、触发条件和用户可见动作": "Post-issuance status, triggers, and user-visible actions",
  "触发条件": "Trigger",
  "用户动作": "User Action",
  "待签发": "Awaiting Issuance",
  "CSR 已批准，等待网络安全团队签发": "CSR approved, waiting for cybersecurity team issuance",
  "等待证书": "Waiting for certificate",
  "记录审批与签发人": "Record approver and issuer",
  "有效": "Valid",
  "证书已签发且未过期": "Certificate issued and not expired",
  "记录下载动作": "Record download action",
  "即将过期": "Expiring Soon",
  "达到模板预警阈值": "Reached template warning threshold",
  "重新提交 CSR": "Resubmit CSR",
  "记录续期申请": "Record renewal request",
  "已吊销": "Revoked",
  "CA 管理员执行吊销": "CA administrator revoked it",
  "停止下载": "Stop download",
  "记录吊销原因和 CRL 发布": "Record revocation reason and CRL publication",
  "普通用户提交 CSR 后，审批任务会出现在这里。当前暂无待审批 CSR。": "When users submit CSRs, approval tasks appear here. There are no pending CSRs now.",
  "审批队列": "Approval Queue",
  "点击查看后进入独立 CSR 审批表单": "Click View to open the standalone CSR approval form",
  "申请用户": "Applicant",
  "暂无申请": "No requests",
  "等待用户提交 CSR": "Waiting for user CSR submission",
  "审批核查项": "Approval Check Items",
  "审批人员进入 CSR 表单前需要关注的字段": "Fields reviewers should check before entering the CSR form",
  "核查项": "Check Item",
  "判断规则": "Decision Rule",
  "不通过动作": "Rejection Action",
  "CSR 解析结果": "CSR parsed result",
  "CN / OU / O 与模板规则匹配": "CN / OU / O match template rules",
  "拒绝并填写原因": "Reject and enter reason",
  "CSR 公钥": "CSR public key",
  "算法、曲线或长度符合模板": "Algorithm, curve, or length matches the template",
  "拒绝或要求重新提交": "Reject or request resubmission",
  "CSR 扩展": "CSR extensions",
  "不得包含未声明的高风险扩展": "Must not contain undeclared high-risk extensions",
  "拒绝并记录 OID": "Reject and record OID",
  "申请说明": "Request Note",
  "用户填写": "User input",
  "用途与证书类型一致": "Purpose matches certificate type",
  "退回补充说明": "Return for additional details",
  "在这里配置可签发的证书类型、X.509 字段、自定义 OID 字段和 CSR 校验规则。": "Configure issuable certificate types, X.509 fields, custom OID fields, and CSR validation rules here.",
  "新建证书模板": "New Certificate Template",
  "模板列表": "Template List",
  "选择模板后进入独立表单查看或编辑": "Select a template to view or edit it in a standalone form",
  "模板名称": "Template Name",
  "证书类型": "Certificate Type",
  "暂无模板": "No templates",
  "等待绑定签发 CA": "Waiting for issuing CA binding",
  "创建表单": "Create Form",
  "X.509 标准字段": "X.509 Standard Fields",
  "配置证书模板必须支持的标准字段": "Standard fields required by certificate templates",
  "证书版本": "Certificate Version",
  "序列号生成规则": "Serial Number Generation Rule",
  "签发者来源": "Issuer Source",
  "有效期规则": "Validity Rule",
  "主体名称规则": "Subject DN Rule",
  "主体公钥来源": "Subject Public Key Source",
  "签发者/主体唯一标识": "Issuer / Subject Unique ID",
  "主体密钥标识": "Subject Key Identifier",
  "签发者密钥标识": "Authority Key Identifier",
  "密钥用途": "Key Usage",
  "扩展密钥用途": "Extended Key Usage",
  "证书策略": "Certificate Policies",
  "主体备用名称": "Subject Alternative Name",
  "吊销列表发布点": "CRL Distribution Point",
  "签发者信息访问": "Authority Information Access",
  "名称/策略约束": "Name / Policy Constraints",
  "自定义扩展字段": "Custom Extension Fields",
  "自定义 OID 字段": "Custom OID Fields",
  "用于 UDS 0x29 相关扩展项配置": "Configure extensions related to UDS 0x29",
  "配置 OID 字段": "Configure OID Fields",
  "字段名称": "Field Name",
  "必填": "Required",
  "可选": "Optional",
  "必填其一": "One required",
  "可选，填写扩展时必填": "Optional; required when extension is used",
  "点击新增后配置": "Configure after adding",
  "模板固定 / 用户输入 / 系统生成": "Template fixed / User input / System generated",
  "以独立只读表单查看 CA 证书字段、信任链和后续 HSM 映射。": "View CA certificate fields, trust chain, and future HSM mapping in a standalone read-only form.",
  "返回 CA 管理": "Back to CA Management",
  "CA 证书字段": "CA Certificate Fields",
  "挂载对象": "Mounted Objects",
  "该 CA 下级对象和签发记录": "Subordinate objects and issuance records under this CA",
  "填写完成后提交创建申请，高风险创建动作需要确认并写入审计日志。": "Submit the creation request after completing the form. High-risk creation requires confirmation and audit logging.",
  "CA 创建表单": "CA Creation Form",
  "填写下级 CA 标准字段，必填与可选项已在字段名中标明": "Fill standard subordinate CA fields; required and optional items are marked in field names",
  "填写下级 CA 名称": "Enter subordinate CA name",
  "添加一组可选扩展字段": "Add optional extension field set",
  "填写创建原因、用途、供应商后端映射或 HSM 说明": "Enter creation reason, purpose, backend mapping, or HSM notes",
  "提交创建": "Submit Creation",
  "提交创建下级 CA": "Submit Subordinate CA Creation",
  "取消返回": "Cancel and Back",
  "二级 CA": "Level 2 CA",
  "签发 CA": "Issuing CA",
  "交叉认证 CA": "Cross-Certification CA",
  "离线 Root CA": "Offline Root CA",
  "系统自动生成（128-bit 随机）": "System generated (128-bit random)",
  "HSM 生成": "HSM generated",
  "按 CA 序列递增": "Increment by CA sequence",
  "手动输入十六进制": "Manual hex input",
  "绑定 CA 自动生成": "Bound CA generated automatically",
  "父级 CA 自动生成": "Parent CA generated automatically",
  "手动选择签发 CA": "Manually select issuing CA",
  "导入外部 Issuer DN": "Import external Issuer DN",
  "365 天": "365 days",
  "825 天": "825 days",
  "5 年": "5 years",
  "10 年": "10 years",
  "固定起止日期": "Fixed start/end dates",
  "自定义输入": "Custom input",
  "从 CSR 读取": "Read from CSR",
  "模板固定": "Fixed by template",
  "CSR + 模板补全": "CSR + template completion",
  "手动填写 DN": "Manual DN entry",
  "系统生成密钥对": "System-generated key pair",
  "HSM 生成公钥": "HSM-generated public key",
  "后端返回": "Returned by backend",
  "手动导入公钥": "Manual public key import",
  "自动生成（hash SPKI）": "Auto-generated (hash SPKI)",
  "由签发 CA 生成": "Generated by issuing CA",
  "从父级 CA 读取 keyIdentifier": "Read keyIdentifier from parent CA",
  "复制 Issuer + Serial": "Copy Issuer + Serial",
  "手动输入": "Manual input",
  "CA=TRUE, pathLen 不限制": "CA=TRUE, pathLen unlimited",
  "自定义组合": "Custom combination",
  "自定义 EKU OID": "Custom EKU OID",
  "不填写": "Not configured",
  "从签发 CA 读取": "Read from issuing CA",
  "系统默认 HTTP URL": "System default HTTP URL",
  "自定义 HTTP URL": "Custom HTTP URL",
  "自定义 LDAP URL": "Custom LDAP URL",
  "多地址": "Multiple addresses",
  "系统默认 OCSP + CA Issuers": "System default OCSP + CA Issuers",
  "仅 OCSP": "OCSP only",
  "仅 CA Issuers": "CA Issuers only",
  "自定义 OCSP 和 CA Issuers 地址": "Custom OCSP and CA Issuers URLs",
  "自定义 CA Repository": "Custom CA Repository",
  "自定义 Time Stamping": "Custom Time Stamping",
  "自定义 OID": "Custom OID",
  "默认策略 OID": "Default policy OID",
  "自定义策略 OID": "Custom policy OID",
  "自定义 OID 映射": "Custom OID mapping",
  "自定义约束": "Custom constraints",
  "两者同时配置": "Configure both",
  "自定义 Skip Certs": "Custom Skip Certs",
  "系统默认 Delta CRL": "System default Delta CRL",
  "自定义 Delta CRL 地址": "Custom Delta CRL URL",
  "启用 OCSP No Check": "Enable OCSP No Check",
  "手动输入 BitString": "Manual BitString input",
  "草稿": "Draft",
  "待审批": "Pending Approval",
  "已发布": "Published",
  "已停用": "Disabled",
  "全部状态": "All Statuses",
  "已过期": "Expired",
  "已暂停": "Suspended",
  "后端计算": "Computed by backend",
  "HSM 返回": "Returned by HSM",
  "系统生成": "System generated",
  "CSR 扩展": "CSR extension",
  "证书字段、CSR 来源、模板版本和下载格式在独立表单中查看。": "View certificate fields, CSR source, template version, and download formats in a standalone form.",
  "返回证书管理": "Back to Certificate Management",
  "下载证书": "Download Certificate",
  "X.509 字段": "X.509 Fields",
  "当前暂无已签发证书": "No issued certificates currently",
  "暂无 CSR": "No CSR",
  "暂无审批": "No approval",
  "未吊销": "Not revoked",
  "CSR 与审计": "CSR and Audit",
  "证书签发后自动关联来源 CSR 和审计记录": "Source CSR and audit records are linked after certificate issuance",
  "模板、X.509 字段、CSR 校验规则和自定义 OID 在独立表单中填写。": "Fill template, X.509 fields, CSR validation rules, and custom OIDs in a standalone form.",
  "返回证书模板": "Back to Certificate Templates",
  "模板基础配置": "Template Basic Configuration",
  "定义用户证书模板并绑定到签发 CA": "Define user certificate template and bind it to an issuing CA",
  "填写模板名称": "Enter template name",
  "选择签发 CA": "Select issuing CA",
  "创建下级签发 CA 后绑定": "Bind after creating a subordinate issuing CA",
  "暂不绑定（草稿）": "Do not bind yet (draft)",
  "例如 v1.0": "e.g. v1.0",
  "例如用于 UDS 0x29 用户证书": "e.g. for UDS 0x29 user certificates",
  "标准证书字段均支持按模板选择或填写": "Standard certificate fields can be selected or filled by template",
  "可选 OID 直接填写在 X.509 标准字段之后，可继续添加多组": "Optional OID fields are filled directly after X.509 standard fields; multiple sets can be added",
  "添加一组可选 OID 字段": "Add optional OID field set",
  "CSR 校验规则": "CSR Validation Rules",
  "定义用户提交 CSR 时必须满足的模板规则": "Define template rules that submitted CSRs must satisfy",
  "例如 CN 必填、OU 固定": "e.g. CN required, OU fixed",
  "允许模板覆盖 CSR 扩展": "Allow template to override CSR extensions",
  "仅允许模板声明字段": "Only allow fields declared by the template",
  "保留 CSR 扩展": "Preserve CSR extensions",
  "拒绝未声明扩展": "Reject undeclared extensions",
  "CSR 不满足模板时展示给审批人员和申请用户": "Shown to reviewers and applicants when CSR does not satisfy the template",
  "保存模板草稿": "Save Draft",
  "发布证书模板": "Publish Template",
  "CA 自定义扩展字段": "CA Custom Extension Field",
  "模板自定义扩展字段": "Template Custom Extension Field",
  "可选填写，填写后随表单提交，不需要单独二次确认": "Optional; submitted with the form when filled. No separate secondary confirmation is required",
  "例如 ECUUniqueID": "e.g. ECUUniqueID",
  "例如 1.2.156.xxx": "e.g. 1.2.156.xxx",
  "填写扩展值或默认值": "Enter extension value or default value",
  "最大长度、正则、枚举值": "Max length, regex, enum values",
  "审批人员在独立表单中查看 CSR 解析、模板校验结果并填写审批意见。": "Reviewers inspect CSR parsing and template validation in a standalone form, then enter approval comments.",
  "返回审批队列": "Back to Approval Queue",
  "CSR 审批表单": "CSR Approval Form",
  "审批前查看 CSR 解析结果、模板校验结果和申请信息": "Review CSR parsing results, template validation results, and request information before approval",
  "审批通过或拒绝时填写意见": "Enter comments when approving or rejecting",
  "批准 CSR 申请": "Approve CSR Request",
  "批准申请": "Approve Request",
  "拒绝 CSR 申请": "Reject CSR Request",
  "拒绝申请": "Reject Request",
  "手动签发证书": "Issue Certificate Manually",
  "当前前端仅内置演示根 CA。生产环境根 CA、签名能力和 HSM 状态应来自供应商后端。": "The frontend currently includes only the demo root CA. In production, root CA, signing capability, and HSM status should come from the backend.",
  "环境配置": "Environment Configuration",
  "第一版前端 demo 信息，后续对接供应商后端": "First-version frontend demo information; backend integration comes later",
  "待供应商后端接口": "Awaiting backend interface",
  "上传 CSR 获得证书": "Upload CSR to obtain a certificate",
  "中文": "Chinese",
  "供应商后端对接项": "Backend Integration Items",
  "后续交付给 ZF 场景时需要替换为真实接口": "Replace with real interfaces for later ZF delivery scenarios",
  "对接项": "Integration Item",
  "生产要求": "Production Requirement",
  "前端占位": "Frontend placeholder",
  "由供应商后端返回签名能力": "Signing capability returned by backend",
  "记录 Key ID 和签名结果": "Record Key ID and signing result",
  "CA 接口": "CA API",
  "前端演示 Root CA": "Frontend demo Root CA",
  "支持创建、续期、吊销和证书链下载": "Supports create, renew, revoke, and certificate chain download",
  "记录请求人和审批人": "Record requester and approver",
  "模板发布": "Template Publication",
  "本地表单": "Local form",
  "接入审批流与版本控制": "Integrate approval workflow and versioning",
  "记录版本差异": "Record version differences",
  "前端内存记录": "Frontend in-memory records",
  "写入不可篡改日志服务": "Write to tamper-evident log service",
  "支持导出和追溯": "Support export and traceability",
  "所有 CA 操作、模板配置、审批、签发、下载和吊销都需要记录。": "All CA operations, template configuration, approval, issuance, download, and revocation must be recorded.",
  "审计字段规范": "Audit Field Schema",
  "所有确认操作都应写入同一字段结构": "All confirmed operations should be written using one field schema",
  "字段": "Field",
  "含义": "Meaning",
  "示例": "Example",
  "执行人或系统角色": "Actor or system role",
  "登录态": "Login session",
  "执行动作": "Event action",
  "按钮动作": "Button action",
  "操作对象": "Target object",
  "当前 CA / CSR / 模板": "Current CA / CSR / Template",
  "执行结果": "Result",
  "已确认": "Confirmed",
  "确认弹窗结果": "Confirmation modal result",
  "加载演示根 CA": "Load demo root CA",
  "完成": "Complete",
  "普通用户只需要选择可申请证书并提交 CSR。当前暂无可申请证书模板。": "Users only need to select an available certificate and submit a CSR. There are no available templates now.",
  "CSR 提交表单": "CSR Submission Form",
  "选择可申请证书模板后，上传或粘贴 CSR": "Select an available certificate template, then upload or paste CSR",
  "暂无可申请证书模板": "No available certificate templates",
  "等待网络安全团队配置": "Waiting for cybersecurity team configuration",
  "支持 .csr / .pem / .txt": "Supports .csr / .pem / .txt",
  "填写申请用途或说明": "Enter request purpose or notes",
  "也可以直接粘贴 CSR 文本": "CSR text can also be pasted directly",
  "提交申请": "Submit Request",
  "提交 CSR 申请": "Submit CSR Request",
  "解析 CSR": "Parse CSR",
  "我的申请": "My Requests",
  "暂无申请记录": "No request records",
  "申请时间": "Request Time",
  "证书下载": "Certificate Download",
  "暂无记录": "No records",
  "等待提交 CSR": "Waiting for CSR submission",
  "未提交": "Not submitted",
  "申请流程": "Request Workflow",
  "普通用户提交后由网络安全团队审批和签发": "After user submission, the cybersecurity team approves and issues the certificate",
  "责任方": "Responsible Party",
  "用户可见结果": "User-Visible Result",
  "选择模板并提交 CSR": "Select template and submit CSR",
  "申请进入审批队列": "Request enters approval queue",
  "解析并校验 CSR": "Parse and validate CSR",
  "显示校验结果": "Show validation results",
  "审批并手动签发": "Approve and issue manually",
  "证书可下载": "Certificate downloadable",
  "下载或重新申请": "Download or reapply",
  "获得证书文件": "Obtain certificate file",
  "技术字段": "Technical Field",
  "父级证书机构": "Parent CA",
  "证书机构类型": "CA Type",
  "版本": "Version",
  "序列号规则": "Serial Number Rule",
  "证书机构名称": "CA Name",
  "证书机构级别": "CA Level",
  "后续映射": "Backend Mapping",
  "主体名称校验规则": "Subject DN Rule",
  "签名算法": "Signature Algorithm",
  "公钥算法或曲线": "Public Key Algorithm / Curve",
  "公钥算法": "Public Key Algorithm",
  "有效期": "Validity",
  "基础约束": "Basic Constraints",
  "密钥用途规则": "Key Usage Rule",
  "扩展密钥用途规则": "Extended Key Usage Rule",
  "主体公钥信息": "Subject Public Key Info",
  "主体备用名称规则": "Subject Alternative Name Rule",
  "签发者备用名称": "Issuer Alternative Name",
  "主体信息访问": "Subject Information Access",
  "策略映射": "Policy Mappings",
  "策略约束": "Policy Constraints",
  "名称约束": "Name Constraints",
  "禁止任意策略": "Inhibit anyPolicy",
  "增量吊销列表": "Freshest CRL",
  "传输层安全特性": "TLS Feature",
  "在线状态免检": "OCSP No Check",
  "签发者唯一标识": "Issuer Unique ID",
  "主体唯一标识": "Subject Unique ID",
  "绑定签发机构": "Bound CA",
  "模板版本": "Template Version",
  "模板状态": "Template Status",
  "证书有效期规则": "Validity Rule",
  "模板说明": "Template Description",
  "默认下载格式": "Default Download Format",
  "对象标识符": "Object Identifier",
  "编码类型": "ASN.1 Type",
  "字符串格式": "String Format",
  "是否关键扩展": "Criticality",
  "是否必填": "Requirement",
  "字段来源": "Field Source",
  "扩展字段值": "Extension Value",
  "校验规则": "Validation Rule",
  "证书请求扩展处理": "CSR Extension Handling",
  "不匹配提示": "Mismatch Message",
  "签发证书机构": "Issuing CA",
  "用户或序列号": "User / Serial Number",
  "文件名或密钥指纹": "Filename / Fingerprint",
  "有效期范围": "Validity Range",
  "证书序列号": "Certificate Serial Number",
  "来源证书请求": "Source CSR",
  "吊销状态": "Revocation Status",
  "审批意见": "Approval Comment",
  "根证书机构": "Root CA",
  "硬件安全模块": "HSM",
  "用户申请方式": "User Request Mode",
  "界面语言": "Interface Language",
  "可申请证书模板": "Available Template",
  "证书请求文件": "CSR File",
  "证书请求原文": "CSR Raw Text",
  "创建说明": "Creation Note",
  "证书请求主体": "CSR Subject / CN",
  "模板校验结果": "Template Validation Result"
};

const textReplacementEntries = Object.entries(zhToEn).sort((a, b) => b[0].length - a[0].length);

function translateText(value) {
  if (state.language !== "en" || value === undefined || value === null) return value;
  const text = String(value);
  if (!/[\u4e00-\u9fff]/.test(text)) return text;
  const leading = text.match(/^\s*/)?.[0] || "";
  const trailing = text.match(/\s*$/)?.[0] || "";
  const core = text.trim();
  let translated = zhToEn[core] || core;
  if (translated === core) {
    for (const [source, target] of textReplacementEntries) {
      translated = translated.split(source).join(target);
    }
  }
  return `${leading}${translated}${trailing}`;
}

function translateRequirement(requirementText) {
  if (state.language !== "en") return requirementText;
  return zhToEn[requirementText] || translateText(requirementText);
}

function localizeTextTree(root) {
  if (!root || state.language !== "en") return;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || ["SCRIPT", "STYLE"].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
      if (parent.closest(".language-switcher")) return NodeFilter.FILTER_REJECT;
      if (parent.closest(".login-screen")) return NodeFilter.FILTER_REJECT;
      return /[\u4e00-\u9fff]/.test(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    },
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => {
    node.nodeValue = translateText(node.nodeValue);
  });
}

function localizeAttributes(root) {
  if (!root || state.language !== "en") return;
  root.querySelectorAll("[placeholder], [aria-label], [title], [alt]").forEach((element) => {
    if (element.closest(".language-switcher")) return;
    if (element.closest(".login-screen")) return;
    ["placeholder", "aria-label", "title", "alt"].forEach((attribute) => {
      if (element.hasAttribute(attribute)) {
        element.setAttribute(attribute, translateText(element.getAttribute(attribute)));
      }
    });
  });
}

function currentAccount() {
  return loginAccounts[state.account] || null;
}

function currentRoleLabel() {
  const account = currentAccount();
  if (account) return state.language === "en" ? account.roleEn : account.roleZh;
  if (state.role === "engineer") return state.language === "en" ? "Engineer" : "普通工程师";
  return state.language === "en" ? "Cybersecurity Team" : "网络安全团队";
}

function loginMessage(key) {
  const messages = {
    required: {
      zh: "请选择登录身份，并输入账号和密码。",
      en: "Select a login role and enter both account and password.",
    },
    invalid: {
      zh: "账号或密码不正确，请重新输入。",
      en: "The account or password is incorrect.",
    },
    mismatch: {
      zh: "该账号不属于所选登录身份，请检查 PKI Manager / PKI User 选择。",
      en: "This account does not belong to the selected PKI Manager / PKI User role.",
    },
  };
  return messages[key]?.[state.language] || "";
}

function setLoginError(key = "") {
  if (!loginError) return;
  loginError.dataset.error = key;
  loginError.textContent = key ? loginMessage(key) : "";
  loginError.classList.toggle("show", Boolean(key));
}

function applyLoginCopy() {
  if (!loginScreen) return;
  const isEnglish = state.language === "en";
  loginScreen.setAttribute("aria-label", isEnglish ? "PKI login entry" : "PKI 登录入口");
  const loginKicker = loginScreen.querySelector(".login-kicker");
  const loginTitle = loginScreen.querySelector("#loginTitle");
  const loginDescription = loginScreen.querySelector(".login-heading p");
  const loginFields = loginScreen.querySelectorAll(".login-field");
  const submitText = loginScreen.querySelector(".login-submit span");
  const submitSubtext = loginScreen.querySelector(".login-submit em");
  const footnotes = loginScreen.querySelectorAll(".login-footnote span");

  if (loginKicker) {
    loginKicker.textContent = isEnglish ? "Engineering-grade certificate control" : "工程级证书控制台";
  }
  if (loginTitle) loginTitle.textContent = isEnglish ? "Account Sign In" : "账号登录";
  if (loginDescription) {
    loginDescription.textContent = isEnglish
      ? "Select a role and enter your account credentials."
      : "选择登录身份并输入账号密码。";
  }
  const setFieldCopy = (index, primary) => {
    const label = loginFields[index]?.querySelector(".login-label-copy");
    if (!label) return;
    label.querySelector("strong").textContent = primary;
    label.querySelector("em").textContent = "";
  };
  setFieldCopy(0, isEnglish ? "Login role" : "登录身份");
  setFieldCopy(1, isEnglish ? "Account" : "账号");
  setFieldCopy(2, isEnglish ? "Password" : "密码");
  if (loginRoleSelect) {
    loginRoleSelect.options[0].textContent = isEnglish ? "Select login role" : "请选择登录身份";
    loginRoleSelect.options[1].textContent = "PKI Manager";
    loginRoleSelect.options[2].textContent = "PKI User";
  }
  if (submitText) submitText.textContent = isEnglish ? "Sign in" : "登录";
  if (submitSubtext) submitSubtext.textContent = isEnglish ? "Enter workspace" : "Sign in";
  if (footnotes[0]) footnotes[0].textContent = "PKI Manager: CyberTeam1";
  if (footnotes[1]) footnotes[1].textContent = "PKI User: User1";
  if (loginError?.dataset.error) setLoginError(loginError.dataset.error);
}

function applyAuthState() {
  if (loginScreen) {
    loginScreen.classList.toggle("is-hidden", state.authenticated);
    loginScreen.setAttribute("aria-hidden", String(state.authenticated));
  }
  if (appShell) {
    appShell.classList.toggle("is-hidden", !state.authenticated);
    appShell.setAttribute("aria-hidden", String(!state.authenticated));
  }
  if (roleBadge) {
    const label = currentRoleLabel();
    roleBadge.setAttribute("aria-label", state.language === "en" ? "Current login role" : "当前登录角色");
    roleBadge.innerHTML = state.authenticated
      ? `<span>${state.language === "en" ? "Role" : "身份"}</span><strong>${label}</strong><em>${state.account}</em>`
      : "";
  }
  if (logoutButton) logoutButton.textContent = state.language === "en" ? "Log out" : "退出";
  applyLoginCopy();
}

function applyLanguageToggleCopy(container) {
  if (!container) return;
  const button = container.querySelector("[data-language-toggle]");
  if (!button) return;
  const targetLanguage = state.language === "en" ? "zh" : "en";
  button.dataset.targetLanguage = targetLanguage;
  button.setAttribute(
    "aria-label",
    state.language === "en" ? "Switch translator to Chinese" : "Switch translator to English"
  );
  const prefix = button.querySelector("span");
  if (prefix) prefix.textContent = "Translator:";
  button.querySelector("strong").textContent = targetLanguage === "en" ? "English" : "Chinese";
}

function toggleLanguage() {
  state.language = state.language === "en" ? "zh" : "en";
  window.localStorage.setItem("certificate-portal-language", state.language);
  render();
}

function applyLanguage() {
  const isEnglish = state.language === "en";
  document.documentElement.lang = isEnglish ? "en" : "zh-CN";
  document.body.classList.toggle("lang-en", isEnglish);
  document.title = isEnglish ? "Public Key Infrastructure" : "公钥基础设施";

  const brandTitle = document.querySelector(".brand-title");
  const rootCaLabel = document.querySelector(".root-ca-chip span:last-child");
  const envLabel = document.querySelector(".env-label");

  if (brandTitle) brandTitle.textContent = isEnglish ? "Public Key Infrastructure" : "公钥基础设施";
  if (rootCaLabel) rootCaLabel.textContent = isEnglish ? "Demo Root CA" : "演示根 CA";
  if (envLabel) envLabel.textContent = isEnglish ? "Frontend demo environment" : "前端演示环境";

  if (globalSearch) {
    globalSearch.placeholder = isEnglish ? "Search CA, certificates, CSR, serial numbers" : "搜索 CA、证书、CSR、序列号";
  }

  applyAuthState();

  if (languageSwitcher) {
    languageSwitcher.setAttribute("aria-label", isEnglish ? "Translator language selector" : "语言切换");
    applyLanguageToggleCopy(languageSwitcher);
  }

  if (loginLanguageSwitcher) {
    loginLanguageSwitcher.setAttribute("aria-label", isEnglish ? "Translator language selector" : "语言切换");
    applyLanguageToggleCopy(loginLanguageSwitcher);
  }

  const modalKicker = document.querySelector(".modal-kicker");
  if (modalKicker) modalKicker.textContent = isEnglish ? "Secondary Confirmation" : "操作二次确认";

  if (modal.classList.contains("open") && modal.dataset.actionRaw) {
    const actionText = translateText(modal.dataset.actionRaw);
    modalTitle.textContent = actionText;
    modalBody.textContent = isEnglish
      ? `Confirm "${actionText}". The system will record this operation in the audit log.`
      : `请确认是否执行“${modal.dataset.actionRaw}”。确认后系统会记录本次操作并写入审计日志。`;
  } else {
    modalTitle.textContent = isEnglish ? "Confirm Action" : "确认操作";
    modalBody.textContent = isEnglish ? "This action will be recorded in the audit log." : "该操作将写入审计日志。";
  }
  modalCancel.textContent = isEnglish ? "Cancel" : "取消";
  modalConfirm.textContent = isEnglish ? "Confirm" : "确认";

  if (isEnglish) {
    localizeTextTree(document.body);
    localizeAttributes(document.body);
  }
}

function currentCa() {
  return rootCa;
}

function renderNav() {
  const visibleNavItems = state.role === "engineer" ? [["home", "总览", "▦"]] : navItems;
  const activeNavPage = pageParents[state.activePage] || state.activePage;
  navList.innerHTML = visibleNavItems
    .map(([id, label, icon]) => `
      <button class="nav-item ${activeNavPage === id ? "active" : ""}" data-page="${id}" type="button">
        <span class="nav-icon">${icon}</span>
        <span>${label}</span>
      </button>
    `)
    .join("");
}

function setTitle() {
  const titles = {
    home: "证书安全平台总览",
    approval: "证书审批",
    certificates: "证书管理",
    ca: "CA 管理",
    "ca-detail": "CA 信息查看",
    "ca-create": "创建下级 CA",
    templates: "证书模板",
    "template-create": "创建证书模板",
    audit: "审计日志",
    settings: "系统设置",
    "certificate-detail": "证书详情",
    "csr-detail": "CSR 审批详情",
  };
  pageTitle.textContent = state.role === "engineer" ? "用户证书申请" : titles[state.activePage] || "证书安全平台总览";
}

function renderHome() {
  const stats = getPlatformStats();
  view.innerHTML = `
    <section class="content-panel workspace-page dense-page">
      <div class="content-header dense-header">
        <div>
          <div class="content-title">证书安全平台总览</div>
          <div class="content-subtitle">按 CA、模板、CSR、证书和审计对象查看当前前端演示环境状态。</div>
        </div>
        <div class="header-actions">
          <button class="btn primary" data-page-jump="ca" type="button">进入 CA 管理</button>
          <button class="btn soft" data-page-jump="approval" type="button">查看证书审批</button>
        </div>
      </div>

      <section class="data-panel">
        <div class="data-panel-head">
          <div>
            <span>平台对象状态</span>
            <strong>演示环境当前数据</strong>
          </div>
        </div>
        <div class="empty-table status-table">
          <div class="empty-table-head">
            <span>对象</span>
            <span>数量</span>
            <span>当前状态</span>
            <span>说明</span>
          </div>
          ${emptyTableRow("根 CA", stats.rootCa, "运行中", "前端内置演示 Root CA")}
          ${emptyTableRow("下级 CA", stats.subCa, "暂无数据", "创建后挂载到 Root CA")}
          ${emptyTableRow("证书模板", stats.templates, "待配置", "发布后可供用户申请")}
          ${emptyTableRow("待审批 CSR", stats.pendingCsr, "暂无待办", "用户提交后进入审批队列")}
          ${emptyTableRow("已签发证书", stats.issuedCerts, "暂无证书", "审批并手动签发后显示")}
        </div>
      </section>

      <section class="data-panel">
        <div class="data-panel-head">
          <div>
            <span>模块清单</span>
            <strong>按业务顺序进入各模块</strong>
          </div>
        </div>
        <div class="empty-table module-table">
          <div class="empty-table-head">
            <span>模块</span>
            <span>主要内容</span>
            <span>当前状态</span>
            <span>入口</span>
          </div>
          ${moduleRow("CA 管理", "CA 树、CA 字段、挂载关系、高风险操作", "Root CA 已加载", "ca", "CA 管理")}
          ${moduleRow("证书模板", "X.509 字段、自定义 OID、CSR 校验规则", "待配置", "templates", "配置模板")}
          ${moduleRow("证书审批", "CSR 解析、模板校验、审批意见、手动签发", "暂无待审批 CSR", "approval", "查看审批")}
          ${moduleRow("证书管理", "证书查询、详情、下载、吊销、审计记录", "暂无已签发证书", "certificates", "查看证书")}
        </div>
      </section>

      <section class="data-panel">
        <div class="data-panel-head">
          <div>
            <span>生命周期</span>
            <strong>所有关键动作必须进入审计日志</strong>
          </div>
        </div>
        <div class="empty-table lifecycle-table">
          <div class="empty-table-head">
            <span>步骤</span>
            <span>动作</span>
            <span>执行角色</span>
            <span>审计要求</span>
          </div>
          ${emptyTableRow("01", "提交 CSR", "普通用户", "记录 CSR 提交")}
          ${emptyTableRow("02", "解析与校验", "系统", "记录解析和校验结果")}
          ${emptyTableRow("03", "审批 CSR", "网络安全团队", "记录审批意见")}
          ${emptyTableRow("04", "手动签发", "网络安全团队", "记录签发动作")}
          ${emptyTableRow("05", "下载 / 吊销", "用户 / 网络安全团队", "记录下载和吊销")}
        </div>
      </section>
    </section>
  `;
}

function moduleRow(name, desc, status, page, action) {
  return `
    <div class="empty-table-row">
      <span>${name}</span>
      <span>${desc}</span>
      <span>${status}</span>
      <span><button class="inline-action" data-page-jump="${page}" type="button">${action}</button></span>
    </div>
  `;
}

function entryCard(title, text, action, page, icon) {
  return `
    <button class="entry-card" data-page-jump="${page}" type="button">
      <span class="entry-icon">${icon}</span>
      <strong>${title}</strong>
      <em>${text}</em>
      <span>${action}</span>
    </button>
  `;
}

function renderCaManagement() {
  const ca = currentCa();
  view.innerHTML = `
    <section class="content-panel workspace-page dense-page">
      <div class="content-header dense-header">
        <div>
          <div class="content-title">CA 管理</div>
          <div class="content-subtitle">按 CA 树、证书字段、挂载关系和高风险操作顺序查看当前 CA。</div>
        </div>
        <div class="header-actions">
          <button class="btn soft" data-page-jump="ca-detail" type="button">查看 CA 表单</button>
          <button class="btn primary" data-page-jump="ca-create" type="button">创建下级 CA</button>
        </div>
      </div>

      <section class="manager-layout">
        <aside class="manager-tree">
          <div class="panel-title">CA 树</div>
          <button class="tree-node selected" data-page-jump="ca-detail" type="button">
            <span>${ca.level}</span>
            <strong>${ca.name}</strong>
            <em>${ca.status}</em>
          </button>
          <div class="empty-tree">
            <span>暂无下级 CA</span>
            <button class="btn soft" data-page-jump="ca-create" type="button">创建下级 CA</button>
          </div>
        </aside>

        <main class="manager-detail">
        <section class="data-panel">
          <div class="data-panel-head">
            <div>
              <span>CA 列表</span>
              <strong>点击查看后进入独立 CA 信息表单</strong>
            </div>
          </div>
          <div class="empty-table ca-list-table">
            <div class="empty-table-head">
              <span>CA 名称</span>
              <span>级别</span>
              <span>状态</span>
              <span>来源</span>
              <span>操作</span>
            </div>
            <div class="empty-table-row">
              <span>${ca.name}</span>
              <span>${ca.level}</span>
              <span>${ca.status}</span>
              <span>${ca.source}</span>
              <span><button class="inline-action" data-page-jump="ca-detail" type="button">查看表单</button></span>
            </div>
          </div>
        </section>

        <section class="form-panel action-panel">
          <div class="form-head">
            <span>CA 操作台</span>
            <strong>高风险操作需要二次确认并写入审计日志</strong>
          </div>
          <div class="operation-grid">
            <button class="operation-btn" data-risk="创建下级 CA" type="button"><span>创建</span><strong>创建下级 CA</strong></button>
            ${op("更新 CA 信息", "更新", "risk")}
            ${op("续期 CA", "续期", "risk")}
            ${op("吊销 CA", "吊销", "danger")}
            ${op("归档 CA", "归档", "risk")}
            ${op("下载证书链", "下载")}
          </div>
        </section>

        <section class="form-panel">
          <div class="form-head">
            <span>挂载信息</span>
            <strong>查看该 CA 下级 CA、证书模板和签发记录</strong>
          </div>
          <div class="empty-table mount-table">
            <div class="empty-table-head">
              <span>对象类型</span>
              <span>当前状态</span>
              <span>后续动作</span>
            </div>
            ${emptyTableRow("二级 CA", "暂无下级 CA", "创建后自动挂载")}
            ${emptyTableRow("证书模板", "暂无绑定模板", "模板发布后可绑定")}
            ${emptyTableRow("已签发证书", "暂无证书", "CSR 审批并签发后显示")}
          </div>
        </section>
        </main>
      </section>
    </section>
  `;
}

function getPlatformStats() {
  return {
    rootCa: 1,
    subCa: rootCa.children.length,
    templates: rootCa.templates.length,
    pendingCsr: 0,
    issuedCerts: rootCa.issuedCertificates.length,
  };
}

function metricCard(title, value, desc, stateText, tone) {
  return `
    <article class="metric-card ${tone}">
      <span>${title}</span>
      <strong>${value}</strong>
      <em>${desc}</em>
      <small>${stateText}</small>
    </article>
  `;
}

function lifecycleStep(index, title, desc) {
  return `
    <div class="lifecycle-step">
      <span>${index}</span>
      <strong>${title}</strong>
      <em>${desc}</em>
    </div>
  `;
}

function complianceRow(title, desc) {
  return `
    <div class="compliance-row">
      <span></span>
      <strong>${title}</strong>
      <em>${desc}</em>
    </div>
  `;
}

function renderCertificateManagement() {
  view.innerHTML = `
    <section class="content-panel workspace-page">
      <div class="content-header dense-header">
        <div>
          <div class="content-title">证书管理</div>
          <div class="content-subtitle">证书需要由用户提交 CSR，经审批后由网络安全团队手动签发。当前暂无已签发证书。</div>
        </div>
        <button class="btn primary" data-page-jump="templates" type="button">配置证书模板</button>
      </div>

      <section class="form-panel">
        <div class="form-head">
          <span>证书查询条件</span>
          <strong>按 CA、模板、状态、用户和有效期筛选证书</strong>
        </div>
        <div class="form-grid filter-grid">
          ${selectLike("签发 CA（可选）", ["全部 CA", rootCa.name, "暂无签发 CA"])}
          ${selectLike("证书模板（可选）", ["全部模板", "暂无已发布模板"])}
          ${selectLike("证书状态（可选）", x509Options.certificateStates)}
          ${inputLike("用户 / 序列号（可选）", "输入用户、CN 或证书序列号")}
          ${inputLike("有效期起止（可选）", "选择证书有效期范围")}
          ${inputLike("文件名 / 指纹（可选）", "文件名、SHA-256 或 Key ID")}
        </div>
        <div class="form-actions">
          <button class="btn primary" data-action="查询证书" type="button">查询证书</button>
          <button class="btn soft" data-action="重置证书筛选" type="button">重置筛选</button>
        </div>
      </section>

      <section class="data-panel">
        <div class="data-panel-head">
          <div>
            <span>证书列表</span>
            <strong>暂无已签发证书</strong>
          </div>
          <button class="btn soft" data-action="导出证书列表" type="button">导出列表</button>
        </div>
        <div class="empty-table certificate-table">
          <div class="empty-table-head">
            <span>证书 CN</span>
            <span>绑定 CA</span>
            <span>模板版本</span>
            <span>状态</span>
            <span>操作</span>
          </div>
          <div class="empty-table-row">
            <span>暂无证书</span>
            <span>等待 CSR 审批签发</span>
            <span>签发后显示</span>
            <span>暂无</span>
            <span><button class="inline-action" data-page-jump="certificate-detail" type="button">查看表单</button></span>
          </div>
        </div>
      </section>

      <section class="data-panel">
        <div class="data-panel-head">
          <div>
            <span>证书生命周期状态</span>
            <strong>签发后的状态、触发条件和用户可见动作</strong>
          </div>
        </div>
        <div class="empty-table lifecycle-table">
          <div class="empty-table-head">
            <span>状态</span>
            <span>触发条件</span>
            <span>用户动作</span>
            <span>审计要求</span>
          </div>
          ${emptyTableRow("待签发", "CSR 已批准，等待网络安全团队签发", "等待证书", "记录审批与签发人")}
          ${emptyTableRow("有效", "证书已签发且未过期", "下载 .cer / .pem / .p7b", "记录下载动作")}
          ${emptyTableRow("即将过期", "达到模板预警阈值", "重新提交 CSR", "记录续期申请")}
          ${emptyTableRow("已吊销", "CA 管理员执行吊销", "停止下载", "记录吊销原因和 CRL 发布")}
        </div>
      </section>
    </section>
  `;
}

function renderApproval() {
  view.innerHTML = `
    <section class="content-panel workspace-page">
      <div class="content-header dense-header">
        <div>
          <div class="content-title">证书审批</div>
          <div class="content-subtitle">普通用户提交 CSR 后，审批任务会出现在这里。当前暂无待审批 CSR。</div>
        </div>
      </div>

      <section class="data-panel">
        <div class="data-panel-head">
          <div>
            <span>审批队列</span>
            <strong>点击查看后进入独立 CSR 审批表单</strong>
          </div>
        </div>
        <div class="empty-table approval-table">
          <div class="empty-table-head">
            <span>申请用户</span>
            <span>证书模板</span>
            <span>绑定 CA</span>
            <span>状态</span>
            <span>操作</span>
          </div>
          <div class="empty-table-row">
            <span>暂无申请</span>
            <span>等待用户提交 CSR</span>
            <span>暂无</span>
            <span>暂无待办</span>
            <span><button class="inline-action" data-page-jump="csr-detail" type="button">查看表单</button></span>
          </div>
        </div>
      </section>

      <section class="data-panel">
        <div class="data-panel-head">
          <div>
            <span>审批核查项</span>
            <strong>审批人员进入 CSR 表单前需要关注的字段</strong>
          </div>
        </div>
        <div class="empty-table lifecycle-table">
          <div class="empty-table-head">
            <span>核查项</span>
            <span>来源</span>
            <span>判断规则</span>
            <span>不通过动作</span>
          </div>
          ${emptyTableRow("Subject DN", "CSR 解析结果", "CN / OU / O 与模板规则匹配", "拒绝并填写原因")}
          ${emptyTableRow("Public Key", "CSR 公钥", "算法、曲线或长度符合模板", "拒绝或要求重新提交")}
          ${emptyTableRow("X.509 Extensions", "CSR 扩展", "不得包含未声明的高风险扩展", "拒绝并记录 OID")}
          ${emptyTableRow("申请说明", "用户填写", "用途与证书类型一致", "退回补充说明")}
        </div>
      </section>
    </section>
  `;
}

function renderTemplates() {
  view.innerHTML = `
    <section class="content-panel workspace-page">
      <div class="content-header dense-header">
        <div>
          <div class="content-title">证书模板</div>
          <div class="content-subtitle">在这里配置可签发的证书类型、X.509 字段、自定义 OID 字段和 CSR 校验规则。</div>
        </div>
        <button class="btn primary" data-page-jump="template-create" type="button">新建证书模板</button>
      </div>

      <section class="data-panel">
        <div class="data-panel-head">
          <div>
            <span>模板列表</span>
            <strong>选择模板后进入独立表单查看或编辑</strong>
          </div>
        </div>
        <div class="empty-table template-list-table">
          <div class="empty-table-head">
            <span>模板名称</span>
            <span>证书类型</span>
            <span>绑定 CA</span>
            <span>状态</span>
            <span>操作</span>
          </div>
          <div class="empty-table-row">
            <span>暂无模板</span>
            <span>User Cert</span>
            <span>等待绑定签发 CA</span>
            <span>待配置</span>
            <span><button class="inline-action" data-page-jump="template-create" type="button">创建表单</button></span>
          </div>
        </div>
      </section>

      <section class="data-panel">
        <div class="data-panel-head">
          <div>
            <span>X.509 标准字段</span>
            <strong>配置证书模板必须支持的标准字段</strong>
          </div>
        </div>
        <div class="field-matrix">
          ${matrixItem("Version", "证书版本")}
          ${matrixItem("Serial Number Rule", "序列号生成规则")}
          ${matrixItem("Issuer", "签发者来源")}
          ${matrixItem("Validity", "有效期规则")}
          ${matrixItem("Subject DN", "主体名称规则")}
          ${matrixItem("Subject Public Key Info", "主体公钥来源")}
          ${matrixItem("Issuer / Subject Unique ID", "签发者/主体唯一标识")}
          ${matrixItem("Subject Key Identifier", "主体密钥标识")}
          ${matrixItem("Authority Key Identifier", "签发者密钥标识")}
          ${matrixItem("Key Usage", "密钥用途")}
          ${matrixItem("Extended Key Usage", "扩展密钥用途")}
          ${matrixItem("Certificate Policies", "证书策略")}
          ${matrixItem("Subject Alternative Name", "主体备用名称")}
          ${matrixItem("CRL Distribution Point", "吊销列表发布点")}
          ${matrixItem("Authority Information Access", "签发者信息访问")}
          ${matrixItem("Name / Policy Constraints", "名称/策略约束")}
          ${matrixItem("Custom OID", "自定义扩展字段")}
        </div>
      </section>

      <section class="data-panel">
        <div class="data-panel-head">
          <div>
            <span>自定义 OID 字段</span>
            <strong>用于 UDS 0x29 相关扩展项配置</strong>
          </div>
          <button class="btn soft" data-page-jump="template-create" type="button">配置 OID 字段</button>
        </div>
        <div class="empty-table oid-table">
          <div class="empty-table-head">
            <span>字段名称</span>
            <span>OID</span>
            <span>ASN.1 类型</span>
            <span>必填</span>
            <span>字段来源</span>
          </div>
          ${emptyTableRow("暂无 OID 字段", "点击新增后配置", "待配置", "Mandatory / Optional", "模板固定 / 用户输入 / 系统生成")}
        </div>
      </section>
    </section>
  `;
}

function renderCaDetail() {
  const ca = currentCa();
  view.innerHTML = `
    <section class="content-panel workspace-page dense-page">
      <div class="content-header dense-header">
        <div>
          <div class="content-title">CA 信息查看</div>
          <div class="content-subtitle">以独立只读表单查看 CA 证书字段、信任链和后续 HSM 映射。</div>
        </div>
        <div class="header-actions">
          <button class="btn soft" data-page-jump="ca" type="button">返回 CA 管理</button>
          <button class="btn primary" data-action="下载 CA 证书链" type="button">下载证书链</button>
        </div>
      </div>

      <section class="form-panel">
        <div class="form-head">
          <span>CA 证书字段</span>
          <strong>${ca.name}</strong>
        </div>
        <div class="form-grid">
          ${readField("CA 名称", ca.name)}
          ${readField("CA 级别", ca.level)}
          ${readField("状态", ca.status)}
          ${readField("来源", ca.source)}
          ${readField("Subject", ca.subject)}
          ${readField("算法", ca.algorithm)}
          ${readField("有效期", ca.validity)}
          ${readField("Basic Constraints", ca.basicConstraints)}
          ${readField("Key Usage", ca.keyUsage)}
          ${readField("后续映射", ca.productionMapping)}
        </div>
      </section>

      <section class="data-panel">
        <div class="data-panel-head">
          <div>
            <span>挂载对象</span>
            <strong>该 CA 下级对象和签发记录</strong>
          </div>
        </div>
        <div class="empty-table mount-table">
          <div class="empty-table-head">
            <span>对象类型</span>
            <span>当前状态</span>
            <span>后续动作</span>
          </div>
          ${emptyTableRow("二级 CA", "暂无下级 CA", "创建后自动挂载")}
          ${emptyTableRow("证书模板", "暂无绑定模板", "模板发布后可绑定")}
          ${emptyTableRow("已签发证书", "暂无证书", "CSR 审批并签发后显示")}
        </div>
      </section>
    </section>
  `;
}

function renderCaCreate() {
  view.innerHTML = `
    <section class="content-panel workspace-page dense-page long-form-page">
      <div class="content-header dense-header">
        <div>
          <div class="content-title">创建下级 CA</div>
          <div class="content-subtitle">填写完成后提交创建申请，高风险创建动作需要确认并写入审计日志。</div>
        </div>
        <button class="btn soft" data-page-jump="ca" type="button">返回 CA 管理</button>
      </div>

      <section class="form-panel">
        <div class="form-head">
          <span>CA 创建表单</span>
          <strong>填写下级 CA 标准字段，必填与可选项已在字段名中标明</strong>
        </div>
        <div class="form-grid">
          ${readField("父级 CA（必填）", rootCa.name)}
          ${selectLike("CA 类型（必填）", x509Options.caTypes)}
          ${selectLike("Version（必填）", x509Options.versions)}
          ${selectLike("Serial Number Rule（必填）", x509Options.serialNumberRules)}
          ${inputLike("CA 名称（必填）", "填写下级 CA 名称")}
          ${inputLike("Subject DN（必填）", "CN=..., O=ZF, OU=...")}
          ${selectLike("签名算法（必填）", x509Options.signatureAlgorithms)}
          ${selectLike("公钥算法 / 曲线（必填）", x509Options.publicKeyAlgorithms)}
          ${selectLike("Issuer（必填）", x509Options.issuerSources)}
          ${selectLike("有效期（必填）", x509Options.validityRules)}
          ${selectLike("Basic Constraints（必填）", x509Options.caBasicConstraints)}
          ${selectLike("Key Usage（必填）", x509Options.keyUsage)}
          ${selectLike("Subject Public Key Info（必填）", x509Options.spkiSources)}
          ${selectLike("Subject Key Identifier（可选）", x509Options.subjectKeyIdentifier)}
          ${selectLike("Authority Key Identifier（必填）", x509Options.authorityKeyIdentifier)}
          ${selectLike("Subject Alternative Name（可选）", x509Options.subjectAltName)}
          ${selectLike("Issuer Alternative Name（可选）", x509Options.issuerAltName)}
          ${selectLike("CRL Distribution Point（可选）", x509Options.crlDistributionPoints)}
          ${selectLike("Authority Information Access（可选）", x509Options.authorityInfoAccess)}
          ${selectLike("Subject Information Access（可选）", x509Options.subjectInfoAccess)}
          ${selectLike("Certificate Policies（可选）", x509Options.certificatePolicies)}
          ${selectLike("Policy Constraints（可选）", x509Options.policyConstraints)}
          ${selectLike("Name Constraints（可选）", x509Options.nameConstraints)}
          ${selectLike("Freshest CRL（可选）", x509Options.freshestCrl)}
          ${selectLike("OCSP No Check（可选）", x509Options.ocspNoCheck)}
        </div>
        <div class="extension-stack" data-extension-stack="ca">
          ${customExtensionGroup("ca", 1)}
        </div>
        <div class="inline-form-actions">
          <button class="btn soft" data-add-extension="ca" type="button">添加一组可选扩展字段</button>
        </div>
        ${textareaLike("创建说明（可选）", "填写创建原因、用途、供应商后端映射或 HSM 说明")}
        <div class="form-actions">
          <button class="btn primary" data-risk="提交创建下级 CA" type="button">提交创建</button>
          <button class="btn soft" data-page-jump="ca" type="button">取消返回</button>
        </div>
      </section>
    </section>
  `;
}

function renderCertificateDetail() {
  view.innerHTML = `
    <section class="content-panel workspace-page dense-page">
      <div class="content-header dense-header">
        <div>
          <div class="content-title">证书详情</div>
          <div class="content-subtitle">证书字段、CSR 来源、模板版本和下载格式在独立表单中查看。</div>
        </div>
        <div class="header-actions">
          <button class="btn soft" data-page-jump="certificates" type="button">返回证书管理</button>
          <button class="btn primary" data-action="下载证书" type="button">下载证书</button>
        </div>
      </div>

      <section class="form-panel">
        <div class="form-head">
          <span>X.509 字段</span>
          <strong>当前暂无已签发证书</strong>
        </div>
        <div class="form-grid">
          ${readField("证书序列号", "暂无证书")}
          ${readField("Subject", "暂无证书")}
          ${readField("Issuer", "暂无证书")}
          ${readField("模板版本", "签发后显示")}
          ${readField("Key Usage", "暂无证书")}
          ${readField("Extended Key Usage", "暂无证书")}
          ${readField("有效期", "暂无证书")}
          ${readField("下载格式", ".cer / .pem / .der / .p7b / .zip")}
        </div>
      </section>

      <section class="form-panel">
        <div class="form-head">
          <span>CSR 与审计</span>
          <strong>证书签发后自动关联来源 CSR 和审计记录</strong>
        </div>
        <div class="form-grid">
          ${readField("来源 CSR", "暂无 CSR")}
          ${readField("申请用户", "暂无申请")}
          ${readField("审批记录", "暂无审批")}
          ${readField("吊销状态", "未吊销")}
        </div>
      </section>
    </section>
  `;
}

function renderTemplateCreate() {
  view.innerHTML = `
    <section class="content-panel workspace-page dense-page long-form-page">
      <div class="content-header dense-header">
        <div>
          <div class="content-title">创建证书模板</div>
          <div class="content-subtitle">模板、X.509 字段、CSR 校验规则和自定义 OID 在独立表单中填写。</div>
        </div>
        <button class="btn soft" data-page-jump="templates" type="button">返回证书模板</button>
      </div>

      <section class="form-panel">
        <div class="form-head">
          <span>模板基础配置</span>
          <strong>定义用户证书模板并绑定到签发 CA</strong>
        </div>
        <div class="form-grid">
          ${inputLike("模板名称（必填）", "填写模板名称")}
          ${selectLike("证书类型（必填）", x509Options.certTypes)}
          ${selectLike("绑定 CA（必填）", ["演示根 CA", "选择签发 CA", "创建下级签发 CA 后绑定", "暂不绑定（草稿）"])}
          ${inputLike("模板版本（必填）", "例如 v1.0")}
          ${selectLike("模板状态（必填）", x509Options.templateStatus)}
          ${selectLike("证书有效期规则（必填）", x509Options.validityRules)}
          ${inputLike("模板说明（可选）", "例如用于 UDS 0x29 用户证书")}
          ${selectLike("默认下载格式（可选）", [".cer", ".pem", ".der", ".p7b", ".zip"])}
        </div>
      </section>

      <section class="form-panel">
        <div class="form-head">
          <span>X.509 标准字段</span>
          <strong>标准证书字段均支持按模板选择或填写</strong>
        </div>
        <div class="form-grid">
          ${selectLike("Version（必填）", x509Options.versions)}
          ${selectLike("Serial Number Rule（必填）", x509Options.serialNumberRules)}
          ${selectLike("Signature Algorithm（必填）", x509Options.signatureAlgorithms)}
          ${selectLike("Issuer（必填）", x509Options.issuerSources)}
          ${selectLike("Validity（必填）", x509Options.validityRules)}
          ${selectLike("Subject DN（必填）", x509Options.subjectDnSources)}
          ${selectLike("Subject Public Key Info（必填）", x509Options.spkiSources)}
          ${selectLike("Issuer Unique ID（可选）", x509Options.uniqueId)}
          ${selectLike("Subject Unique ID（可选）", x509Options.uniqueId)}
          ${selectLike("Subject Key Identifier（可选）", x509Options.subjectKeyIdentifier)}
          ${selectLike("Authority Key Identifier（必填）", x509Options.authorityKeyIdentifier)}
          ${selectLike("Key Usage（必填）", x509Options.keyUsage)}
          ${selectLike("Extended Key Usage（可选）", x509Options.extendedKeyUsage)}
          ${selectLike("Basic Constraints（必填）", x509Options.basicConstraints)}
          ${selectLike("Subject Alternative Name（可选）", x509Options.subjectAltName)}
          ${selectLike("Issuer Alternative Name（可选）", x509Options.issuerAltName)}
          ${selectLike("CRL Distribution Point（可选）", x509Options.crlDistributionPoints)}
          ${selectLike("Authority Information Access（可选）", x509Options.authorityInfoAccess)}
          ${selectLike("Subject Information Access（可选）", x509Options.subjectInfoAccess)}
          ${selectLike("Certificate Policies（可选）", x509Options.certificatePolicies)}
          ${selectLike("Policy Mappings（可选）", x509Options.policyMappings)}
          ${selectLike("Name Constraints（可选）", x509Options.nameConstraints)}
          ${selectLike("Policy Constraints（可选）", x509Options.policyConstraints)}
          ${selectLike("Inhibit anyPolicy（可选）", x509Options.inhibitAnyPolicy)}
          ${selectLike("Freshest CRL（可选）", x509Options.freshestCrl)}
          ${selectLike("TLS Feature（可选）", x509Options.tlsFeature)}
          ${selectLike("OCSP No Check（可选）", x509Options.ocspNoCheck)}
        </div>
      </section>

      <section class="form-panel">
        <div class="form-head">
          <span>自定义扩展字段</span>
          <strong>可选 OID 直接填写在 X.509 标准字段之后，可继续添加多组</strong>
        </div>
        <div class="extension-stack" data-extension-stack="template">
          ${customExtensionGroup("template", 1)}
        </div>
        <div class="inline-form-actions">
          <button class="btn soft" data-add-extension="template" type="button">添加一组可选 OID 字段</button>
        </div>
      </section>

      <section class="form-panel">
        <div class="form-head">
          <span>CSR 校验规则</span>
          <strong>定义用户提交 CSR 时必须满足的模板规则</strong>
        </div>
        <div class="form-grid">
          ${inputLike("Subject DN 规则（必填）", "例如 CN 必填、OU 固定")}
          ${selectLike("Public Key Algorithm（必填）", ["ECDSA", "RSA", "Ed25519", "Ed448", "SM2"])}
          ${selectLike("Key Length / Curve（必填）", x509Options.publicKeyAlgorithms)}
          ${selectLike("Signature Algorithm（必填）", x509Options.signatureAlgorithms)}
          ${selectLike("Key Usage 规则（必填）", x509Options.keyUsage)}
          ${selectLike("Extended Key Usage 规则（可选）", x509Options.extendedKeyUsage)}
          ${selectLike("Subject Alternative Name 规则（可选）", x509Options.subjectAltName)}
          ${selectLike("CSR 扩展处理（可选）", ["允许模板覆盖 CSR 扩展", "仅允许模板声明字段", "保留 CSR 扩展", "拒绝未声明扩展"])}
        </div>
        ${textareaLike("不匹配提示（可选）", "CSR 不满足模板时展示给审批人员和申请用户")}
        <div class="form-actions">
          <button class="btn primary" data-action="保存模板草稿" type="button">保存草稿</button>
          <button class="btn soft" data-action="发布证书模板" type="button">发布模板</button>
        </div>
      </section>

    </section>
  `;
}

function renderCsrDetail() {
  view.innerHTML = `
    <section class="content-panel workspace-page dense-page long-form-page review-form-page">
      <div class="content-header dense-header">
        <div>
          <div class="content-title">CSR 审批详情</div>
          <div class="content-subtitle">审批人员在独立表单中查看 CSR 解析、模板校验结果并填写审批意见。</div>
        </div>
        <button class="btn soft" data-page-jump="approval" type="button">返回审批队列</button>
      </div>

      <section class="form-panel">
        <div class="form-head">
          <span>CSR 审批表单</span>
          <strong>审批前查看 CSR 解析结果、模板校验结果和申请信息</strong>
        </div>
        <div class="form-grid">
          ${readField("申请用户", "暂无申请")}
          ${readField("证书模板", "暂无申请")}
          ${readField("绑定 CA", "暂无申请")}
          ${readField("CSR Subject / CN", "暂无 CSR")}
          ${readField("Public Key Algorithm", "暂无 CSR")}
          ${readField("模板校验结果", "暂无校验结果")}
        </div>
        ${textareaLike("审批意见（必填）", "审批通过或拒绝时填写意见")}
        <div class="form-actions split-actions">
          <button class="btn primary" data-action="批准 CSR 申请" type="button">批准申请</button>
          <button class="btn danger" data-action="拒绝 CSR 申请" type="button">拒绝申请</button>
          <button class="btn soft" data-action="手动签发证书" type="button">手动签发</button>
        </div>
      </section>
    </section>
  `;
}

function renderSettings() {
  view.innerHTML = `
    <section class="content-panel workspace-page">
      <div class="content-header dense-header">
        <div>
          <div class="content-title">系统设置</div>
          <div class="content-subtitle">当前前端仅内置演示根 CA。生产环境根 CA、签名能力和 HSM 状态应来自供应商后端。</div>
        </div>
      </div>
      <section class="form-panel">
        <div class="form-head">
          <span>环境配置</span>
          <strong>第一版前端 demo 信息，后续对接供应商后端</strong>
        </div>
        <div class="form-grid">
          ${readField("根 CA", rootCa.name)}
          ${readField("HSM / 密码机", "待供应商后端接口")}
          ${readField("用户申请方式", "上传 CSR 获得证书")}
          ${readField("界面语言", "中文")}
        </div>
      </section>

      <section class="data-panel">
        <div class="data-panel-head">
          <div>
            <span>供应商后端对接项</span>
            <strong>后续交付给 ZF 场景时需要替换为真实接口</strong>
          </div>
        </div>
        <div class="empty-table lifecycle-table">
          <div class="empty-table-head">
            <span>对接项</span>
            <span>当前状态</span>
            <span>生产要求</span>
            <span>审计要求</span>
          </div>
          ${emptyTableRow("HSM / 密码机", "前端占位", "由供应商后端返回签名能力", "记录 Key ID 和签名结果")}
          ${emptyTableRow("CA 接口", "前端演示 Root CA", "支持创建、续期、吊销和证书链下载", "记录请求人和审批人")}
          ${emptyTableRow("模板发布", "本地表单", "接入审批流与版本控制", "记录版本差异")}
          ${emptyTableRow("审计日志", "前端内存记录", "写入不可篡改日志服务", "支持导出和追溯")}
        </div>
      </section>
    </section>
  `;
}

function renderAudit() {
  view.innerHTML = `
    <section class="content-panel workspace-page">
      <div class="content-header dense-header">
        <div>
          <div class="content-title">审计日志</div>
          <div class="content-subtitle">所有 CA 操作、模板配置、审批、签发、下载和吊销都需要记录。</div>
        </div>
      </div>
      <div class="audit-timeline">
        ${state.auditLogs.map(([actor, event, object, result]) => `
          <div class="audit-event">
            <div class="audit-time">${actor}</div>
            <div>
              <div class="audit-title">${event}</div>
              <div class="audit-meta">${object} · ${result}</div>
            </div>
          </div>
        `).join("")}
      </div>
      <section class="data-panel">
        <div class="data-panel-head">
          <div>
            <span>审计字段规范</span>
            <strong>所有确认操作都应写入同一字段结构</strong>
          </div>
        </div>
        <div class="empty-table lifecycle-table">
          <div class="empty-table-head">
            <span>字段</span>
            <span>含义</span>
            <span>示例</span>
            <span>来源</span>
          </div>
          ${emptyTableRow("Actor", "执行人或系统角色", "网络安全团队", "登录态")}
          ${emptyTableRow("Event", "执行动作", "发布证书模板", "按钮动作")}
          ${emptyTableRow("Object", "操作对象", rootCa.name, "当前 CA / CSR / 模板")}
          ${emptyTableRow("Result", "执行结果", "已确认", "确认弹窗结果")}
        </div>
      </section>
    </section>
  `;
}

function renderEngineer() {
  view.innerHTML = `
    <section class="content-panel workspace-page long-form-page">
      <div class="content-header dense-header">
        <div>
          <div class="content-title">用户证书申请</div>
          <div class="content-subtitle">普通用户只需要选择可申请证书并提交 CSR。当前暂无可申请证书模板。</div>
        </div>
      </div>
      <section class="form-panel">
        <div class="form-head">
          <span>CSR 提交表单</span>
          <strong>选择可申请证书模板后，上传或粘贴 CSR</strong>
        </div>
        <div class="form-grid">
          ${selectLike("可申请证书模板（必填）", ["暂无可申请证书模板", ...x509Options.certTypes])}
          ${selectLike("签发 CA（必填）", ["等待网络安全团队配置", rootCa.name])}
          ${inputLike("CSR 文件（必填其一）", "支持 .csr / .pem / .txt")}
          ${inputLike("申请说明（可选）", "填写申请用途或说明")}
        </div>
        ${textareaLike("CSR 原文（必填其一）", "也可以直接粘贴 CSR 文本")}
        <div class="form-actions">
          <button class="btn primary" data-action="提交 CSR 申请" type="button">提交申请</button>
          <button class="btn soft" data-action="解析 CSR" type="button">解析 CSR</button>
        </div>
      </section>
      <section class="data-panel">
        <div class="data-panel-head">
          <div>
            <span>我的申请</span>
            <strong>暂无申请记录</strong>
          </div>
        </div>
        <div class="empty-table">
          <div class="empty-table-head">
            <span>申请时间</span>
            <span>证书模板</span>
            <span>状态</span>
            <span>证书下载</span>
          </div>
          ${emptyTableRow("暂无记录", "等待提交 CSR", "未提交", "暂无证书")}
        </div>
      </section>
      <section class="data-panel">
        <div class="data-panel-head">
          <div>
            <span>申请流程</span>
            <strong>普通用户提交后由网络安全团队审批和签发</strong>
          </div>
        </div>
        <div class="empty-table lifecycle-table">
          <div class="empty-table-head">
            <span>步骤</span>
            <span>动作</span>
            <span>责任方</span>
            <span>用户可见结果</span>
          </div>
          ${emptyTableRow("01", "选择模板并提交 CSR", "普通用户", "申请进入审批队列")}
          ${emptyTableRow("02", "解析并校验 CSR", "系统", "显示校验结果")}
          ${emptyTableRow("03", "审批并手动签发", "网络安全团队", "证书可下载")}
          ${emptyTableRow("04", "下载或重新申请", "普通用户", "获得证书文件")}
        </div>
      </section>
    </section>
  `;
}

function info(label, value) {
  return `<div class="info-card"><span>${label}</span><strong>${value}</strong></div>`;
}

function fieldLabel(label) {
  const requirement = label.match(/（[^）]+）/)?.[0] || "";
  const baseLabel = label.replace(/（[^）]+）/g, "").trim();
  const hasChinese = /[\u4e00-\u9fff]/.test(baseLabel);
  const hasLatin = /[A-Za-z]/.test(baseLabel);
  const pair = fieldLabels[baseLabel] || (hasChinese && !hasLatin ? [baseLabel, "Field"] : ["技术字段", baseLabel || "Field"]);
  const requirementText = requirement.replace(/[（）]/g, "");
  const requirementClass = requirementText.includes("必填") && !requirementText.startsWith("可选") ? "required" : "optional";
  if (state.language === "en") {
    const englishLabel = translateText(pair[1] || baseLabel || "Field");
    const englishRequirement = translateRequirement(requirementText);
    return `
      <span class="field-label">
        <strong>
          <span>${englishLabel}</span>
          ${englishRequirement ? `<b class="field-requirement ${requirementClass}">${englishRequirement}</b>` : ""}
        </strong>
      </span>
    `;
  }
  return `
    <span class="field-label">
      <strong>
        <span>${pair[0]}</span>
        ${requirementText ? `<b class="field-requirement ${requirementClass}">${requirementText}</b>` : ""}
      </strong>
      <em>${pair[1]}</em>
    </span>
  `;
}

function readField(label, value, hint = "") {
  return `
    <label class="form-field readonly">
      ${fieldLabel(label)}
      <output>${value}</output>
      ${hint ? `<em>${hint}</em>` : ""}
    </label>
  `;
}

function inputLike(label, placeholder) {
  return `
    <label class="form-field">
      ${fieldLabel(label)}
      <input type="text" placeholder="${placeholder}" />
    </label>
  `;
}

function selectLike(label, value) {
  const options = Array.isArray(value)
    ? value
    : value.includes(" / ")
    ? value.split(" / ").map((item) => item.trim())
    : [value];
  return `
    <label class="form-field">
      ${fieldLabel(label)}
      <select class="select-like">
        ${options.map((option) => `<option>${option}</option>`).join("")}
      </select>
    </label>
  `;
}

function customExtensionGroup(scope, index) {
  const groupName = scope === "ca" ? "CA 自定义扩展字段" : "模板自定义扩展字段";
  return `
    <div class="extension-fieldset">
      <div class="extension-title">
        <span>${groupName} ${index}</span>
        <strong>可选填写，填写后随表单提交，不需要单独二次确认</strong>
      </div>
      <div class="form-grid">
        ${inputLike("字段名称（可选）", "例如 ECUUniqueID")}
        ${inputLike("OID（可选，填写扩展时必填）", "例如 1.2.156.xxx")}
        ${selectLike("ASN.1 类型（可选）", x509Options.asn1Types)}
        ${selectLike("字符串格式（可选）", x509Options.stringFormats)}
        ${selectLike("是否关键（可选）", x509Options.extensionCriticality)}
        ${selectLike("是否必填（可选）", x509Options.fieldRequirement)}
        ${selectLike("字段来源（可选）", x509Options.fieldSource)}
        ${inputLike("扩展字段值（可选）", "填写扩展值或默认值")}
        ${inputLike("校验规则（可选）", "最大长度、正则、枚举值")}
      </div>
    </div>
  `;
}

function addExtensionField(scope) {
  const stack = document.querySelector(`[data-extension-stack="${scope}"]`);
  if (!stack) return;
  const index = stack.querySelectorAll(".extension-fieldset").length + 1;
  stack.insertAdjacentHTML("beforeend", customExtensionGroup(scope, index));
  applyLanguage();
}

function textareaLike(label, placeholder) {
  return `
    <label class="form-field form-field-wide">
      ${fieldLabel(label)}
      <textarea placeholder="${placeholder}"></textarea>
    </label>
  `;
}

function emptyTableRow(...cells) {
  return `<div class="empty-table-row">${cells.map((cell) => `<span>${cell}</span>`).join("")}</div>`;
}

function matrixItem(title, desc) {
  return `<div class="matrix-item"><strong>${title}</strong><span>${desc}</span></div>`;
}

function op(label, short, risk = "") {
  const attr = risk ? `data-risk="${label}"` : `data-action="${label}"`;
  return `<button class="operation-btn ${risk}" ${attr} type="button"><span>${short}</span><strong>${label}</strong></button>`;
}

function emptyBlock(title, text) {
  return `<div class="empty-block"><strong>${title}</strong><span>${text}</span></div>`;
}

function addAudit(event, object, result) {
  state.auditLogs.unshift(["网络安全团队", event, object, result]);
}

function showToast(message) {
  toast.textContent = translateText(message);
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2200);
}

function openConfirm(action) {
  const actionText = translateText(action);
  modal.dataset.actionRaw = action;
  modalTitle.textContent = actionText;
  modalBody.textContent =
    state.language === "en"
      ? `Confirm "${actionText}". The system will record this operation in the audit log.`
      : `请确认是否执行“${action}”。确认后系统会记录本次操作并写入审计日志。`;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  applyLanguage();
}

function render() {
  applyAuthState();
  if (!state.authenticated) {
    applyLanguage();
    return;
  }
  if (state.role === "engineer") {
    state.activePage = "home";
    if (window.location.hash !== "#home") {
      window.location.hash = "home";
    }
  }
  renderNav();
  setTitle();
  if (state.role === "engineer") {
    renderEngineer();
    applyLanguage();
    return;
  }
  if (state.activePage === "home") renderHome();
  if (state.activePage === "ca") renderCaManagement();
  if (state.activePage === "ca-detail") renderCaDetail();
  if (state.activePage === "ca-create") renderCaCreate();
  if (state.activePage === "certificates") renderCertificateManagement();
  if (state.activePage === "certificate-detail") renderCertificateDetail();
  if (state.activePage === "approval") renderApproval();
  if (state.activePage === "csr-detail") renderCsrDetail();
  if (state.activePage === "templates") renderTemplates();
  if (state.activePage === "template-create") renderTemplateCreate();
  if (state.activePage === "audit") renderAudit();
  if (state.activePage === "settings") renderSettings();
  applyLanguage();
}

document.addEventListener("click", (event) => {
  if (!state.authenticated) return;
  const pageButton = event.target.closest("[data-page]");
  if (pageButton) {
    state.activePage = pageButton.dataset.page;
    window.location.hash = state.activePage;
    render();
    return;
  }

  const jumpButton = event.target.closest("[data-page-jump]");
  if (jumpButton) {
    state.activePage = jumpButton.dataset.pageJump;
    window.location.hash = state.activePage;
    render();
    return;
  }

  const addExtensionButton = event.target.closest("[data-add-extension]");
  if (addExtensionButton) {
    addExtensionField(addExtensionButton.dataset.addExtension);
    return;
  }

  const riskButton = event.target.closest("[data-risk]");
  if (riskButton) {
    openConfirm(riskButton.dataset.risk);
    return;
  }

  const actionButton = event.target.closest("[data-action]");
  if (actionButton) {
    openConfirm(actionButton.dataset.action);
  }
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const selectedRole = loginRoleSelect.value;
  const account = loginAccount.value.trim();
  const password = loginPassword.value;
  if (!selectedRole || !account || !password) {
    setLoginError("required");
    return;
  }
  const matchedAccount = loginAccounts[account];
  if (!matchedAccount) {
    setLoginError("invalid");
    loginPassword.select();
    return;
  }
  if (matchedAccount.role !== selectedRole) {
    setLoginError("mismatch");
    return;
  }
  if (matchedAccount.password !== password) {
    setLoginError("invalid");
    loginPassword.select();
    return;
  }

  state.authenticated = true;
  state.account = account;
  state.role = matchedAccount.role;
  state.activePage = state.role === "engineer" ? "home" : validPages.includes(initialPage) ? initialPage : "home";
  if (state.role === "engineer") {
    window.location.hash = "home";
  } else if (window.location.hash.replace("#", "") !== state.activePage) {
    window.location.hash = state.activePage;
  }
  window.sessionStorage.setItem(sessionKey, JSON.stringify({ account }));
  loginForm.reset();
  setLoginError("");
  render();
  showToast(state.language === "en" ? `Signed in as ${currentRoleLabel()}` : `已登录：${currentRoleLabel()}`);
});

[loginRoleSelect, loginAccount, loginPassword].forEach((control) => {
  control.addEventListener("input", () => setLoginError(""));
  control.addEventListener("change", () => setLoginError(""));
});

languageSwitcher.addEventListener("click", (event) => {
  if (!event.target.closest("[data-language-toggle]")) return;
  toggleLanguage();
});

loginLanguageSwitcher.addEventListener("click", (event) => {
  if (!event.target.closest("[data-language-toggle]")) return;
  toggleLanguage();
});

logoutButton.addEventListener("click", () => {
  window.sessionStorage.removeItem(sessionKey);
  state.authenticated = false;
  state.account = "";
  state.role = "cyber";
  state.activePage = "home";
  if (window.location.hash !== "#home") {
    window.location.hash = "home";
  }
  render();
  window.setTimeout(() => loginAccount?.focus(), 80);
});

modalCancel.addEventListener("click", () => {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  delete modal.dataset.actionRaw;
  applyLanguage();
});

modalConfirm.addEventListener("click", () => {
  const rawAction = modal.dataset.actionRaw || modalTitle.textContent;
  addAudit(rawAction, currentCa().name, "已确认");
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  delete modal.dataset.actionRaw;
  showToast(state.language === "en" ? `Action confirmed: ${translateText(rawAction)}` : `已确认操作：${rawAction}`);
  applyLanguage();
});

render();
